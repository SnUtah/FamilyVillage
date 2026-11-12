import { now, dayKey, addDays, questionList, questionIndex } from './common.js';

/* =========================================================
   🗂️ 가족이 남기는 글 보관 (편지 · 오늘의 질문 답 · 답장 · 하트 · 출석 · 물 주기 · 투표 · 점수 · 모습)
   - 기본(sheet 비움): 그 휴대폰(브라우저)에 저장되고 config.js의 samples(예시)와 합쳐서 보여요
   - sheet에 구글 시트 웹 앱 주소를 넣으면 모든 글이 시트에 모이고 가족 모두가 함께 봐요
     (tools/가족_시트_연결.md, 스크립트는 tools/family-sheet.gs)
   - 보내기에 실패하면 휴대폰에 보관(pending)했다가 다음에 자동으로 다시 보내요
   - 시트에서 받아 온 목록은 휴대폰에도 복사해 두어, 연결이 느려도 바로 보여요
   ========================================================= */
const F = () => window.FAMILY || {};
export const KINDS = ['letters', 'answers', 'replies', 'hearts', 'visits', 'water', 'votes', 'polls', 'scores', 'looks'];
const UPSERT = new Set(['votes', 'looks', 'answers']);   // 같은 id면 새 것으로 바꿈 (투표·모습·답 고치기)
export const remoteOn = () => !!F().sheet;
const site = () => String(F().site || 'main');

const LS_MINE = 'family-mine-v1';      // 이 휴대폰에서 남긴 것 {kind: [..]}
const LS_REMOTE = 'family-remote-v1';  // 시트에서 받아 온 마지막 사본
const LS_CODE = 'family-code';
const lsObj = k => { try { const v = JSON.parse(localStorage.getItem(k) || '{}'); return v && typeof v === 'object' && !Array.isArray(v) ? v : {}; } catch { return {}; } };
const lsSet = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };
export const uuid = () => (crypto.randomUUID ? crypto.randomUUID()
  : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => { const r = Math.random() * 16 | 0; return (c === 'x' ? r : (r & 3 | 8)).toString(16); }));
const notify = detail => { try { dispatchEvent(new CustomEvent('family:data', { detail })); } catch {} };

/* ---------- 🔒 가족 암호 ----------
   시트가 연결돼 있으면 시트의 스크립트가 암호를 확인하고, 맞는 암호를 보내야만 글을 내려줘요.
   시트 없이 미리보기할 때는 config의 demoCode와 비교만 해요 (진짜 잠금은 아님). */
export const lockRequired = () => remoteOn() || !!F().lock?.demoCode;
export const savedCode = () => { try { return localStorage.getItem(LS_CODE) || ''; } catch { return ''; } };
const setCode = c => { try { c ? localStorage.setItem(LS_CODE, c) : localStorage.removeItem(LS_CODE); } catch {} };
export function isUnlocked() {
  if (!lockRequired()) return true;
  const c = savedCode();
  if (!c) return false;
  return remoteOn() ? true : c === String(F().lock.demoCode);
}
export async function checkCode(code) {
  code = String(code || '').trim();
  if (!code) return { ok: false, error: 'empty' };
  if (!remoteOn()) {
    const ok = code === String(F().lock?.demoCode || '');
    if (ok) setCode(code);
    return { ok, error: ok ? null : 'code' };
  }
  try {
    await call('GET', { action: 'check', code });
    setCode(code);
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e?.message === 'code' ? 'code' : 'network' };
  }
}

/* ---------- 예시 데이터 (config.samples) ----------
   한 번만 만들어 id·시간을 고정합니다 (꽃밭이 같은 편지를 두 번 심지 않도록) */
let seedCache = null;
const nameOf = id => (F().members || []).find(m => m.id === id)?.name || id;
function seeds() {
  if (seedCache) return seedCache;
  const S = F().samples || {};
  const today = dayKey();
  const base = now().getTime();
  const at = (daysAgo = 0, i = 0) => new Date(base - daysAgo * 864e5 - (40 + (i * 37) % 300) * 60000).toISOString();
  const dayOf = daysAgo => addDays(today, -(daysAgo || 0));
  const out = {};
  out.letters = (S.letters || []).map((l, i) => ({
    id: `seed-letters-${i}`, who: l.from, name: nameOf(l.from), to: l.to || 'all', message: l.message,
    time: at(l.daysAgo, i), openAt: l.openInDays ? addDays(today, l.openInDays) : '', seed: true,
  }));
  const target = t => { const m = String(t || '').match(/^letters:(\d+)$/); return m ? `seed-letters-${m[1]}` : String(t || ''); };
  out.replies = (S.replies || []).map((r, i) => ({ id: `seed-replies-${i}`, who: r.who, name: nameOf(r.who), target: target(r.target), text: r.text || '', emoji: r.emoji || '', time: at(0, i + 3), seed: true }));
  out.hearts = (S.hearts || []).map((h, i) => ({ id: `${h.from}-${h.to}-${dayOf(h.daysAgo)}`, who: h.from, to: h.to, day: dayOf(h.daysAgo), time: at(h.daysAgo, i), seed: true }));
  out.visits = (S.visits || []).map((v, i) => ({ id: `${v.who}-${dayOf(v.daysAgo)}`, who: v.who, day: dayOf(v.daysAgo), time: at(v.daysAgo, i), seed: true }));
  out.water = (S.water || []).map((v, i) => ({ id: `${v.who}-${dayOf(v.daysAgo)}`, who: v.who, day: dayOf(v.daysAgo), time: at(v.daysAgo, i), seed: true }));
  out.votes = (S.votes || []).map((v, i) => ({ id: `${v.who}-${v.poll}`, who: v.who, poll: v.poll, choice: +v.choice || 0, time: at(1, i), seed: true }));
  out.scores = (S.scores || []).map((s, i) => ({ id: `seed-scores-${i}`, who: s.who, name: nameOf(s.who), score: +s.score || 0, total: +s.total || 0, time: at(2, i), seed: true }));
  // 오늘의 질문 예시 답: 지난 2주 동안 그날 나온 질문의 samples를 그날의 답으로
  out.answers = [];
  const qs = questionList();
  for (let d = 0; d < 14 && qs.length; d++) {
    const key = addDays(today, -d), qi = questionIndex(key);
    Object.entries(qs[qi]?.samples || {}).forEach(([who, text], i) => {
      out.answers.push({ id: `${who}-${key}`, who, name: nameOf(who), day: key, q: qi, text, time: at(d, i * 5 + 1), seed: true });
    });
  }
  out.polls = []; out.looks = [];
  seedCache = out;
  return out;
}

/* ---------- 시트와 주고받기 ---------- */
const remote = { data: remoteOn() ? lsObj(LS_REMOTE) : {}, at: 0, loading: null, error: null, ok: false };
export const status = () => ({ remote: remoteOn(), loading: !!remote.loading, error: remote.error, loaded: remote.ok, at: remote.at });

/* GET은 목록, POST는 한 줄. 본문을 text/plain으로 보내야 브라우저가 사전 요청(preflight) 없이 바로 보냅니다. */
async function call(method, params, body) {
  const u = new URL(F().sheet);
  u.searchParams.set('site', site());
  if (method === 'GET' && !params?.code) u.searchParams.set('code', savedCode());
  Object.entries(params || {}).forEach(([k, v]) => u.searchParams.set(k, v));
  const ctrl = typeof AbortController === 'function' ? new AbortController() : null;
  const timer = setTimeout(() => ctrl?.abort(), 15000);
  try {
    const r = await fetch(u.toString(), {
      method, redirect: 'follow', signal: ctrl?.signal,
      ...(body ? { body: JSON.stringify({ ...body, code: savedCode() }), headers: { 'Content-Type': 'text/plain;charset=utf-8' } } : {}),
    });
    const j = await r.json();
    if (j && j.error === 'code') {
      if (!params?.code) { setCode(''); try { dispatchEvent(new CustomEvent('family:locked')); } catch {} }
      throw new Error('code');
    }
    if (!j || j.ok !== true) throw new Error(j?.error || 'bad response');
    return j;
  } finally { clearTimeout(timer); }
}

const NUM = ['q', 'choice', 'score', 'total'];
function clean(kind, x) {
  const o = {};
  Object.entries(x || {}).forEach(([k, v]) => { o[k] = v == null ? '' : v; });
  o.id = String(o.id || ''); o.who = String(o.who || '');
  if (o.time && !(typeof o.time === 'string')) o.time = String(o.time);
  NUM.forEach(k => { if (k in o && o[k] !== '') o[k] = Number(o[k]); });
  if (kind === 'looks' && typeof o.look === 'string') { try { o.look = JSON.parse(o.look); } catch { o.look = {}; } }
  if (kind === 'polls' && typeof o.options === 'string') o.options = o.options.split('|').filter(Boolean);
  if (o.openAt && typeof o.openAt !== 'string') o.openAt = String(o.openAt);
  if (o.openAt) o.openAt = String(o.openAt).slice(0, 10);
  if (o.locked === 'true' || o.locked === true) o.locked = true;
  return o;
}

async function sendPending() {
  const mine = lsObj(LS_MINE);
  let changed = false;
  outer: for (const kind of KINDS) {
    for (const x of mine[kind] || []) {
      if (!x.pending) continue;
      const { pending, ...item } = x;
      try { await call('POST', {}, { kind, ...item }); delete x.pending; changed = true; }
      catch { break outer; }
    }
  }
  if (changed) lsSet(LS_MINE, mine);
}

/* 시트에서 전부 받아 오기. 짧은 시간 안에 여러 번 불러도 한 번만 요청합니다. */
export function refresh({ force = false } = {}) {
  if (!remoteOn()) return Promise.resolve();
  if (remote.loading) return remote.loading;
  if (!force && remote.ok && Date.now() - remote.at < 10000) return Promise.resolve();
  remote.loading = (async () => {
    try {
      await sendPending();
      const j = await call('GET', { action: 'all', t: Date.now() });
      const data = {};
      KINDS.forEach(k => { data[k] = (Array.isArray(j.data?.[k]) ? j.data[k] : []).map(x => clean(k, x)).filter(x => x.id); });
      remote.data = data; remote.at = Date.now(); remote.ok = true; remote.error = null;
      lsSet(LS_REMOTE, data);
      // 시트에 들어간 내 글은 '보내는 중' 표시를 지움
      const mine = lsObj(LS_MINE); let changed = false;
      KINDS.forEach(k => {
        const ids = new Set(data[k].map(x => x.id));
        (mine[k] || []).forEach(x => { if (x.pending && ids.has(x.id) && !UPSERT.has(k)) { delete x.pending; changed = true; } });
      });
      if (changed) lsSet(LS_MINE, mine);
    } catch (e) {
      remote.error = e?.message || String(e);
    } finally {
      remote.loading = null;
      notify({ refresh: true });
    }
  })();
  return remote.loading;
}

/* 한 종류의 목록 (최신순). 내 글 + 시트 + 예시를 합치고 id가 같으면 하나만 */
export function list(kind) {
  const mine = (lsObj(LS_MINE)[kind] || []).map(x => ({ ...x, mine: true }));
  const sheet = remoteOn() ? (remote.data[kind] || []) : [];
  const seed = seeds()[kind] || [];
  const mineIds = new Set(mine.map(x => x.id));
  const all = [...mine, ...sheet.map(x => (mineIds.has(x.id) ? { ...x, mine: true } : x)), ...seed];
  const seen = new Map();
  for (const x of all) {
    const p = seen.get(x.id);
    if (!p) { seen.set(x.id, x); continue; }
    if (UPSERT.has(kind) ? (x.time || '') > (p.time || '') : (p.pending && !x.pending)) seen.set(x.id, { ...x, mine: p.mine || x.mine });
  }
  return [...seen.values()].sort((a, b) => String(b.time || '').localeCompare(String(a.time || '')));
}

/* 하나 남기기. 시트가 연결돼 있으면 보내고, 실패하면 휴대폰에 보관했다가 나중에 다시 보냅니다.
   돌려주는 값: { ok, item, sent } */
export async function add(kind, fields) {
  const item = { id: fields.id || uuid(), time: new Date().toISOString(), ...fields };
  const mine = lsObj(LS_MINE);
  mine[kind] = [remoteOn() ? { ...item, pending: true } : item, ...(mine[kind] || []).filter(x => x.id !== item.id)].slice(0, 300);
  lsSet(LS_MINE, mine);
  // (보낸 쪽 화면이 먼저 다시 그리도록 알림은 한 박자 늦게)
  const later = () => setTimeout(() => notify({ kind, item }), 0);
  if (!remoteOn()) { later(); return { ok: true, item, sent: false }; }
  try {
    await call('POST', {}, { kind, ...item });
    const cur = lsObj(LS_MINE); const m = (cur[kind] || []).find(x => x.id === item.id);
    if (m) { delete m.pending; lsSet(LS_MINE, cur); }
    remote.data[kind] = [item, ...(remote.data[kind] || []).filter(x => x.id !== item.id)];
    lsSet(LS_REMOTE, remote.data);
    return { ok: true, item, sent: true };
  } catch (e) {
    return { ok: false, item, sent: false, error: e?.message || String(e) };
  } finally { later(); }
}
