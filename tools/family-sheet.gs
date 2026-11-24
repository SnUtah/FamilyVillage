/* =========================================================
   🍂 Family village — collecting family news (Google Apps Script)

   Attach it to a Google Sheet and deploy it as a 'web app': the letters, answers, hearts, waterings and votes
   left in the village are collected in this sheet and the whole family sees the same news. Setup: tools/가족_시트_연결.md (10 minutes, free)

   - 🔒 The family password is optional. At first anyone can come in; once set with ⚙️ (family password) in the village,
     it is saved in this script's 'Script Properties' and applies to the whole family. After that only the right password can read and write
   - GET  ?action=status&site=…         → whether a password is set + the hint (answered even without the password)
   - GET  ?action=check&code=…&site=…   → check a password
   - GET  ?action=all&code=…&site=…     → all news (the latest of each kind)
   - POST {kind, code, id, …}            → add one row (the same id only once; votes, looks and answers are overwritten)
   - POST {kind:'setcode', code, newCode, hint} → set · change · remove the password (if one is set, the current one must match)
   - Tab name = 'site·kind' (e.g. kimfamily·편지). Missing tabs are created automatically
     (the tab names and header rows below stay in Korean: existing sheets are found by these names)
   - Deleting a row in the sheet removes it from the village too (for removing inappropriate posts)
   - A time capsule letter's text is not sent out before its opening day
   ========================================================= */
var START_CODE = '';   // (optional) a password set from the start. Better: leave it empty and set it with ⚙️ in the village

var KINDS = {
  letters: { tab: '편지', cols: ['time', 'id', 'who', 'name', 'to', 'message', 'openAt'], head: ['시간', 'id', '보낸 사람', '이름', '받는 사람', '편지', '열리는 날'], max: 400 },
  answers: { tab: '질문 답', cols: ['time', 'id', 'who', 'name', 'day', 'q', 'text'], head: ['시간', 'id', '누가', '이름', '날짜', '질문 번호', '답'], max: 800, upsert: true },
  replies: { tab: '답장', cols: ['time', 'id', 'who', 'name', 'target', 'text', 'emoji'], head: ['시간', 'id', '누가', '이름', '어디에', '답장', '반응'], max: 1000 },
  hearts:  { tab: '하트', cols: ['time', 'id', 'who', 'to', 'day'], head: ['시간', 'id', '보낸 사람', '받는 사람', '날짜'], max: 3000 },
  visits:  { tab: '출석', cols: ['time', 'id', 'who', 'day'], head: ['시간', 'id', '누가', '날짜'], max: 3000 },
  water:   { tab: '물 주기', cols: ['time', 'id', 'who', 'day'], head: ['시간', 'id', '누가', '날짜'], max: 5000 },
  votes:   { tab: '투표', cols: ['time', 'id', 'who', 'poll', 'choice'], head: ['시간', 'id', '누가', '투표', '고른 번호'], max: 2000, upsert: true },
  polls:   { tab: '새 투표', cols: ['time', 'id', 'who', 'name', 'q', 'options'], head: ['시간', 'id', '만든 사람', '이름', '질문', '보기 (| 로 구분)'], max: 200 },
  scores:  { tab: '퀴즈 점수', cols: ['time', 'id', 'who', 'name', 'score', 'total'], head: ['시간', 'id', '누가', '이름', '점수', '문제 수'], max: 500 },
  looks:   { tab: '모습', cols: ['time', 'id', 'who', 'look'], head: ['시간', 'id', '누가', '모습'], max: 100, upsert: true },
};
var LIMIT = { name: 20, message: 500, text: 300, q: 40, options: 120, look: 400, to: 40, target: 80, poll: 64, emoji: 8 };
var NUM = { q: 1, choice: 1, score: 1, total: 1 };

function json_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
function today_() { return Utilities.formatDate(new Date(), 'Asia/Seoul', 'yyyy-MM-dd'); }
var PROPS = PropertiesService.getScriptProperties();
function code_() { var c = PROPS.getProperty('FAMILY_CODE'); return c === null ? String(START_CODE || '') : c; }
function hint_() { return PROPS.getProperty('FAMILY_HINT') || ''; }
function okCode_(code) { var cur = code_(); return !cur || String(code || '') === cur; }   // no password set → anyone
function tabName_(site, kind) {
  var s = String(site || 'main').replace(/[^\w가-힣-]/g, '').slice(0, 40) || 'main';
  return s + '·' + KINDS[kind].tab;
}
function sheetFor_(site, kind, create) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var name = tabName_(site, kind);
  var sh = ss.getSheetByName(name);
  if (!sh && create) {
    var k = KINDS[kind];
    sh = ss.insertSheet(name);
    sh.appendRow(k.head);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, k.head.length).setFontWeight('bold');
    sh.setColumnWidth(1, 150);
  }
  return sh;
}
/* Sheet cell → text (date cells as 'YYYY-MM-DD', times as ISO) */
function cell_(col, v) {
  if (v instanceof Date) return col === 'time' ? v.toISOString() : Utilities.formatDate(v, 'Asia/Seoul', 'yyyy-MM-dd');
  if (NUM[col]) return v === '' ? '' : Number(v);
  return String(v == null ? '' : v);
}

/* Reading */
function doGet(e) {
  var p = (e && e.parameter) || {};
  if (p.action === 'status') return json_({ ok: true, locked: !!code_(), hint: hint_() });
  if (!okCode_(p.code)) return json_({ ok: false, error: 'code' });
  if (p.action === 'check') return json_({ ok: true });
  var data = {}, day = today_();
  Object.keys(KINDS).forEach(function (kind) {
    var k = KINDS[kind], sh = sheetFor_(p.site, kind, false), out = [];
    if (sh) {
      var n = sh.getLastRow() - 1;
      var rows = n > 0 ? sh.getRange(2, 1, n, k.cols.length).getValues() : [];
      for (var i = rows.length - 1; i >= 0 && out.length < k.max; i--) {
        var o = {};
        k.cols.forEach(function (c, j) { o[c] = cell_(c, rows[i][j]); });
        if (!o.id) continue;
        if (kind === 'letters' && o.openAt && o.openAt > day) { o.message = ''; o.locked = true; }   // a time capsule stays secret until its day
        out.push(o);
      }
    }
    data[kind] = out;
  });
  return json_({ ok: true, data: data });
}

/* Writing */
function doPost(e) {
  var b = {};
  try { b = JSON.parse((e && e.postData && e.postData.contents) || '{}'); } catch (err) { return json_({ ok: false, error: 'bad json' }); }
  if (!okCode_(b.code)) return json_({ ok: false, error: 'code' });
  var kind = String(b.kind || '');
  if (kind === 'setcode') {   // 🔒 set · change the password (an empty newCode removes it)
    var next = String(b.newCode || '').trim().slice(0, 30);
    PROPS.setProperty('FAMILY_CODE', next);
    PROPS.setProperty('FAMILY_HINT', next ? String(b.hint || '').trim().slice(0, 40) : '');
    return json_({ ok: true, locked: !!next });
  }
  var k = KINDS[kind];
  if (!k) return json_({ ok: false, error: 'kind' });
  var site = (e && e.parameter && e.parameter.site) || b.site;
  var id = String(b.id || '').replace(/[^\w-]/g, '').slice(0, 120) || Utilities.getUuid();
  var when = b.time ? new Date(b.time) : new Date();
  if (isNaN(when.getTime())) when = new Date();
  var row = k.cols.map(function (c) {
    if (c === 'time') return when;
    if (c === 'id') return "'" + id;
    var v = b[c];
    if (c === 'look' && v && typeof v === 'object') v = JSON.stringify(v);
    if (NUM[c]) { v = Number(v); return isFinite(v) ? v : 0; }
    v = String(v == null ? '' : v);
    if (c === 'who') v = v.replace(/[^\w-]/g, '').slice(0, 20);
    if ((c === 'day' || c === 'openAt') && v && !/^\d{4}-\d{2}-\d{2}$/.test(v)) v = '';
    if (LIMIT[c]) v = v.slice(0, LIMIT[c]);
    return "'" + v;   // stored as plain text (so it never becomes a formula when it starts with =, or turns into a date)
  });
  if (kind === 'letters' && !String(b.message || '').trim()) return json_({ ok: false, error: 'empty' });
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);
  try {
    var sh = sheetFor_(site, kind, true);
    var n = sh.getLastRow() - 1;
    var ids = n > 0 ? sh.getRange(2, 2, n, 1).getValues().map(function (r) { return String(r[0]); }) : [];
    var at = ids.indexOf(id);
    if (at === -1) sh.appendRow(row);
    else if (k.upsert) sh.getRange(at + 2, 1, 1, row.length).setValues([row]);
  } finally { lock.releaseLock(); }
  return json_({ ok: true, id: id });
}
