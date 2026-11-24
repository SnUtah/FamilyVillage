import { now, dayKey, addDays, questionList, questionIndex } from './common.js';

/* =========================================================
   🗂️ Storage for what the family leaves (letters · answers to the question of the day · replies · hearts · attendance · watering · votes · scores · looks)
   - Default (sheet empty): saved on that phone (browser) and shown together with the samples (examples) from config.js
   - Put a Google Sheet web app address in sheet and everything is collected in the sheet for the whole family to see
     (tools/가족_시트_연결.md; the script is tools/family-sheet.gs)
   - If sending fails, it is kept on the phone (pending) and sent again automatically later
   - The list loaded from the sheet is also copied to the phone, so it shows right away even on a slow connection
   ========================================================= */
const F = () => window.FAMILY || {};
export const KINDS = ['letters', 'answers', 'replies', 'hearts', 'visits', 'water', 'votes', 'polls', 'scores', 'looks'];
const UPSERT = new Set(['votes', 'looks', 'answers']);   // same id → replaced by the newer one (changing a vote, look or answer)
export const remoteOn = () => !!F().sheet;
const site = () => String(F().site || 'main');

const LS_MINE = 'family-mine-v1';      // what was left on this phone {kind: [..]}
const LS_REMOTE = 'family-remote-v1';  // last copy loaded from the sheet
const LS_CODE = 'family-code';
const lsObj = k => { try { const v = JSON.parse(localStorage.getItem(k) || '{}'); return v && typeof v === 'object' && !Array.isArray(v) ? v : {}; } catch { return {}; } };
const lsSet = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };
export const uuid = () => (crypto.randomUUID ? crypto.randomUUID()
  : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => { const r = Math.random() * 16 | 0; return (c === 'x' ? r : (r & 3 | 8)).toString(16); }));
const notify = detail => { try { dispatchEvent(new CustomEvent('family:data', { detail })); } catch {} };

/* ---------- 🔒 Family password (optional) ----------
   By default anyone can come straight in without a password. It can be set with ⚙️ on the start screen or 'Family password' in the menu.
   - With a sheet: the password is stored in the sheet script (Script Properties) and applies to the whole family;
                   while it is set, the sheet only hands out posts when the right password is sent.
   - Without a sheet (preview): a 'pretend' lock saved only on this phone. */
const LS_LOCAL_LOCK = 'family-local-lock';
const localLock = () => { try { return JSON.parse(localStorage.getItem(LS_LOCAL_LOCK) || 'null') || {}; } catch { return {}; } };
export const savedCode = () => { try { return localStorage.getItem(LS_CODE) || ''; } catch { return ''; } };
const setCode = c => { try { c ? localStorage.setItem(LS_CODE, c) : localStorage.removeItem(LS_CODE); } catch {} };
const lock = { locked: false, hint: '', known: false };
export const lockInfo = () => ({ ...lock, remote: remoteOn() });
/* Find out whether a password is set (the sheet tells 'set / not set' and the hint even without the password) */
export async function loadLock() {
  if (!remoteOn()) { const l = localLock(); lock.locked = !!l.code; lock.hint = l.hint || ''; lock.known = true; return lockInfo(); }
  try { const j = await call('GET', { action: 'status', quiet: 1 }); lock.locked = !!j.locked; lock.hint = String(j.hint || ''); lock.known = true; }
  catch { lock.locked = !!savedCode(); lock.known = false; }   // without a connection, go by what this phone knows
  return lockInfo();
}
export const lockRequired = () => lock.locked;
export function isUnlocked() {
  if (!lock.locked) return true;
  const c = savedCode();
  if (!c) return false;
  return remoteOn() ? true : c === localLock().code;
}
export async function checkCode(code) {
  code = String(code || '').trim();
  if (!code) return { ok: false, error: 'empty' };
  if (!remoteOn()) {
    const ok = code === String(localLock().code || '');
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

/* Set · change · remove the password (an empty next removes it). If one is set, the current password must match. */
export async function setFamilyCode({ current = '', next = '', hint = '' } = {}) {
  next = String(next || '').trim().slice(0, 30);
  hint = String(hint || '').trim().slice(0, 40);
  current = String(current || savedCode()).trim();
  if (!remoteOn()) {
    const l = localLock();
    if (l.code && current !== l.code) return { ok: false, error: 'code' };
    try { next ? localStorage.setItem(LS_LOCAL_LOCK, JSON.stringify({ code: next, hint })) : localStorage.removeItem(LS_LOCAL_LOCK); } catch {}
  } else {
    try { await call('POST', { quiet: 1 }, { kind: 'setcode', code: current, newCode: next, hint }); }
    catch (e) { return { ok: false, error: e?.message === 'code' ? 'code' : 'network' }; }
  }
  setCode(next);
  lock.locked = !!next; lock.hint = next ? hint : ''; lock.known = true;
  return { ok: true };
}

/* ---------- Example data (config.samples) ----------
   Built only once so ids and times stay fixed (so the flower garden never plants the same letter twice) */
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
  // Example answers to the question of the day: for each of the last 2 weeks, that day's question samples become that day's answers
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

/* ---------- Talking to the sheet ---------- */
const remote = { data: remoteOn() ? lsObj(LS_REMOTE) : {}, at: 0, loading: null, error: null, ok: false };
export const status = () => ({ remote: remoteOn(), loading: !!remote.loading, error: remote.error, loaded: remote.ok, at: remote.at });

/* GET = list, POST = one row. The body is sent as text/plain so the browser sends it right away without a preflight request. */
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
      ...(body ? { body: JSON.stringify({ code: savedCode(), ...body }), headers: { 'Content-Type': 'text/plain;charset=utf-8' } } : {}),
    });
    const j = await r.json();
    if (j && j.error === 'code') {
      if (!params?.code && !params?.quiet) { setCode(''); lock.locked = true; try { dispatchEvent(new CustomEvent('family:locked')); } catch {} }
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

/* Load everything from the sheet. Several calls in a short time make only one request. */
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
      // my posts that reached the sheet lose their 'sending' mark
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

/* The list of one kind (newest first). Mine + sheet + examples combined; one entry per id */
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

/* Leave one item. If a sheet is connected it is sent; if that fails it is kept on the phone and sent again later.
   Returns: { ok, item, sent } */
export async function add(kind, fields) {
  const item = { id: fields.id || uuid(), time: new Date().toISOString(), ...fields };
  const mine = lsObj(LS_MINE);
  mine[kind] = [remoteOn() ? { ...item, pending: true } : item, ...(mine[kind] || []).filter(x => x.id !== item.id)].slice(0, 300);
  lsSet(LS_MINE, mine);
  // (the update event comes a beat later so the sending screen redraws first)
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
