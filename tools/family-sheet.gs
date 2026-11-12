/* =========================================================
   🍂 가족 마을 — 가족 소식 모으기 (Google Apps Script)

   구글 시트에 붙여서 '웹 앱'으로 배포하면, 마을에서 남긴 편지·질문 답·하트·물 주기·투표가
   이 시트에 모이고 가족 모두가 같은 소식을 봅니다. 설치 순서는 tools/가족_시트_연결.md (10분, 무료)

   - 🔒 가족 암호는 선택이에요. 처음엔 암호 없이 누구나 들어오고, 마을의 ⚙️(가족 암호)에서 걸면
     이 스크립트의 '스크립트 속성'에 저장돼 가족 모두에게 적용돼요. 걸린 뒤엔 맞는 암호만 읽고 쓸 수 있어요
   - GET  ?action=status&site=…         → 암호가 걸려 있는지 + 힌트 (암호 없이도 알려줌)
   - GET  ?action=check&code=…&site=…   → 암호 확인
   - GET  ?action=all&code=…&site=…     → 모든 소식 (종류별 최근 것)
   - POST {kind, code, id, …}            → 한 줄 추가 (같은 id는 한 번만, 투표·모습·답은 고쳐 쓰기)
   - POST {kind:'setcode', code, newCode, hint} → 암호 걸기·바꾸기·없애기 (걸려 있으면 지금 암호가 맞아야 함)
   - 탭 이름 = '사이트·종류' (예: kimfamily·편지). 없으면 자동으로 만들어요
   - 시트에서 행을 지우면 마을에서도 사라져요 (부적절한 글 지우기)
   - 타임캡슐 편지는 열리는 날 전까지 내용이 내려가지 않아요
   ========================================================= */
var START_CODE = '';   // (선택) 처음부터 걸어 둘 암호. 비워 두고 마을의 ⚙️에서 정하는 걸 추천해요

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
function okCode_(code) { var cur = code_(); return !cur || String(code || '') === cur; }   // 암호를 안 걸었으면 누구나
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
/* 시트 칸 → 글자 (날짜 칸은 'YYYY-MM-DD', 시간은 ISO) */
function cell_(col, v) {
  if (v instanceof Date) return col === 'time' ? v.toISOString() : Utilities.formatDate(v, 'Asia/Seoul', 'yyyy-MM-dd');
  if (NUM[col]) return v === '' ? '' : Number(v);
  return String(v == null ? '' : v);
}

/* 읽기 */
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
        if (kind === 'letters' && o.openAt && o.openAt > day) { o.message = ''; o.locked = true; }   // 타임캡슐은 그날까지 비밀
        out.push(o);
      }
    }
    data[kind] = out;
  });
  return json_({ ok: true, data: data });
}

/* 쓰기 */
function doPost(e) {
  var b = {};
  try { b = JSON.parse((e && e.postData && e.postData.contents) || '{}'); } catch (err) { return json_({ ok: false, error: 'bad json' }); }
  if (!okCode_(b.code)) return json_({ ok: false, error: 'code' });
  var kind = String(b.kind || '');
  if (kind === 'setcode') {   // 🔒 암호 걸기·바꾸기 (newCode가 비면 없애기)
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
    return "'" + v;   // 글자 그대로 저장 (=로 시작해도 수식이 되지 않게, 날짜로 바뀌지 않게)
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
