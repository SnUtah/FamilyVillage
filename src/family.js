import { L } from './i18n.js';
import { now, dayKey, addDays, daysBetween, toKST, questionList, questionIndex } from './common.js';
import { list } from './store.js';

/* =========================================================
   👨‍👩‍👧‍👦 Family helpers: members · me · birthdays and calendar · question of the day · hearts · attendance · tree · letters
   With or without 3D, the popups, the text view and the village all read the same numbers through these functions.
   ========================================================= */
const F = () => window.FAMILY || {};
const pad = n => String(n).padStart(2, '0');
export const PALETTE = ['#8FB8DE', '#F4B8C0', '#F7D58B', '#A8D08D', '#C9B3E6', '#F9C59E', '#E88A98', '#7FC8C2'];
export const HAIRS = ['#5A3A2A', '#3A2A24', '#7A5238', '#1E1A22', '#C98A5B', '#A8A39E', '#E8E4DE'];
export const SKINS = ['#FFE8D6', '#FFE0C7', '#F6D2B2', '#E8B98F', '#C98E64', '#9A6544'];
export const MAX_HOUSES = 10;   // up to 10 houses (people who join after that are only in the neighbor list, without a house)
/* English: "The Kims" → "The Kims' Village", "Lee" → "Lee's Village", no name → "Our Village" */
/* (a Korean name means the English content was not merged, so the content stays Korean: "○○ 마을") */
const enVillage = n => (!n ? 'Our Village' : /[\uAC00-\uD7A3]/.test(n) ? `${n} 마을` : `${n}${/s$/i.test(n) ? "'" : "'s"} Village`);
export const villageName = () => L(`${F().name || '우리'} 마을`, enVillage(F().name));

/* ---------- Members = people written in config.js + people who came to the village and used 'Create my character' ----------
   Creating a character also saves the nickname (nick), birthday (bday) and join time (joined) in the 'looks' record. */
let lookCache = null, lookAt = -1;
function savedLooks() {
  const rows = list('looks');
  const key = rows.map(r => r.id + r.time).join();
  if (key !== lookAt) { lookAt = key; lookCache = new Map(); rows.forEach(r => { if (!lookCache.has(r.who)) lookCache.set(r.who, r.look || {}); }); }
  return lookCache;
}
export function members() {
  const looks = savedLooks();
  const preset = (F().members || []).filter(m => m && m.id).slice(0, 8);
  const ids = new Set(preset.map(m => m.id));
  const joined = [...looks.entries()]
    .filter(([who, l]) => !ids.has(who) && l && l.nick)
    .map(([who, l]) => ({ id: who, name: l.nick, role: '', joined: l.joined || '' }))
    .sort((a, b) => (a.joined || '').localeCompare(b.joined || ''));
  return [...preset, ...joined].slice(0, 40).map((m, i) => {
    const saved = looks.get(m.id) || {};
    const base = { outfit: PALETTE[i % PALETTE.length], hair: HAIRS[i % 5], longHair: false, glasses: false, hat: '', kid: false, ...(m.look || {}) };
    const { nick, bday, joined, ...look } = saved;
    return { ...m, name: nick || m.name, nick: nick || '', birthday: bday || m.birthday, index: i, look: { ...base, ...look } };
  });
}
export const member = id => members().find(m => m.id === id) || null;
export const memberName = (id, fallback = '') => member(id)?.name || fallback || id || '';
export const memberColor = id => member(id)?.look.outfit || '#F4B8C0';
/* Name to show with a post: a member written in config.js shows their current name (in the current language);
   anyone else shows the name saved with the post (the stored data stays as it is) */
export const postName = (who, saved = '') => ((F().members || []).some(m => m && m.id === who) ? memberName(who, saved) : (saved || memberName(who)));
/* Short name to call someone by: the role if there is one (Mom), otherwise the name */
export const callName = id => { const m = member(id); return m ? (m.nick || m.role || m.name) : (id || ''); };

/* ---------- Me (the person using this phone) ---------- */
const ME_KEY = 'family-me';
export function meId() {
  let v = '';
  try { v = localStorage.getItem(ME_KEY) || ''; } catch {}
  return v === 'guest' || member(v) ? v : '';
}
export function setMe(id) { try { localStorage.setItem(ME_KEY, id); } catch {} try { dispatchEvent(new CustomEvent('family:me', { detail: id })); } catch {} }
export const me = () => member(meId());
export const isGuest = () => meId() === 'guest';

/* ---------- Days together ---------- */
export function sinceDays() {
  const s = F().since;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s || '')) return 0;
  return daysBetween(s, dayKey()) + 1;
}

/* ---------- 🎂 Birthdays · 📅 special days ---------- */
export function birthdaysOn(key = dayKey()) {
  const md = key.slice(5);
  return members().filter(m => m.birthday === md);
}
/* 'MM-DD' (every year) or 'YYYY-MM-DD' → the nearest date on or after from */
function nextOccur(date, yearly, from) {
  if (/^\d{4}-\d{2}-\d{2}$/.test(date) && !yearly) return date >= from ? date : null;
  const md = date.length === 10 ? date.slice(5) : date;
  if (!/^\d{2}-\d{2}$/.test(md)) return null;
  const y = +from.slice(0, 4);
  const k = `${y}-${md}`;
  return k >= from ? k : `${y + 1}-${md}`;
}
export function allEvents() {
  const bd = members().filter(m => /^\d{2}-\d{2}$/.test(m.birthday || '')).map(m => ({
    title: L(`${m.name} 생일`, `${m.name}'s birthday`), date: m.birthday, yearly: true, emoji: '🎂', kind: 'birthday', member: m.id, note: m.lunar ? L('음력 생일 (올해 양력 날짜)', "Lunar birthday (this year's solar date)") : '',
  }));
  const ev = (F().events || []).filter(e => e && e.date).map(e => ({ ...e, kind: 'event', yearly: !!e.yearly || /^\d{2}-\d{2}$/.test(e.date) }));
  return [...bd, ...ev];
}
export function upcoming(n = 6, from = dayKey()) {
  return allEvents()
    .map(e => { const key = nextOccur(e.date, e.yearly, from); return key ? { ...e, key, dday: daysBetween(from, key) } : null; })
    .filter(Boolean)
    .sort((a, b) => a.dday - b.dday)
    .slice(0, n);
}
/* One month of the calendar: {date: [events..]} */
export function monthEvents(y, m) {
  const out = {};
  const prefix = `${y}-${pad(m)}`;
  allEvents().forEach(e => {
    const key = e.yearly ? `${y}-${(e.date.length === 10 ? e.date.slice(5) : e.date)}` : e.date;
    if (key.startsWith(prefix)) (out[key] = out[key] || []).push(e);
  });
  return out;
}
/* English: "Today" · "Tomorrow" · "in 9 days" (lists and toasts) / "9 days" (the calendar sign) */
export const inDays = d => (d === 0 ? 'Today' : d === 1 ? 'Tomorrow' : d > 1 ? `in ${d} days` : `${-d} days ago`);
export const ddayText = d => (d === 0 ? L('오늘', 'Today') : L(d > 0 ? `D-${d}` : `D+${-d}`, inDays(d)));
export const ddaySign = d => L(ddayText(d), d === 0 ? 'Today' : d === 1 ? '1 day' : d > 1 ? `${d} days` : inDays(d));
/* English list of names: "A", "A and B", "A, B and C" */
export const andList = a => (a.length > 1 ? `${a.slice(0, -1).join(', ')} and ${a[a.length - 1]}` : a.join(''));

/* ---------- 💬 Question of the day ---------- */
export function questionOn(key = dayKey()) {
  const i = questionIndex(key);
  return i < 0 ? null : { idx: i, q: questionList()[i].q, day: key };
}
export function answersOn(key) {
  const seen = new Set();
  return list('answers').filter(a => a.day === key && !seen.has(a.who) && seen.add(a.who)).reverse();   // one per person, earliest answer first
}
export const myAnswer = key => answersOn(key).find(a => a.who === meId()) || null;
/* Past questions (including today, the last n days) */
export function recentQuestions(n = 14) {
  const today = dayKey();
  return Array.from({ length: n }, (_, d) => { const key = addDays(today, -d); const q = questionOn(key); return q && { ...q, answers: answersOn(key) }; }).filter(Boolean);
}

/* ---------- 💗 Hearts ---------- */
export const heartsTo = id => list('hearts').filter(h => h.to === id);
export const heartsToday = id => heartsTo(id).filter(h => h.day === dayKey());
export const sentHeartToday = to => list('hearts').some(h => h.to === to && h.who === meId() && h.day === dayKey());

/* ---------- 👣 Family who visited today · attendance stamps ---------- */
export function visitorsOn(key = dayKey()) {
  const ids = [...new Set(list('visits').filter(v => v.day === key).map(v => v.who))];
  return ids.map(member).filter(Boolean);
}
export const myStamps = () => new Set(list('visits').filter(v => v.who === meId()).map(v => v.day)).size;
export const visitedOn = (who, key) => list('visits').some(v => v.who === who && v.day === key);

/* ---------- 🌱 The tree we grow together ---------- */
export const STAGE_NAMES = L(['씨앗', '새싹', '묘목', '나무', '꽃나무', '열매 나무'], ['seed', 'sprout', 'sapling', 'tree', 'blossoming tree', 'fruit tree']);
export function treeInfo() {
  const rows = list('water');
  const total = rows.length;
  const th = (F().tree?.stages || [3, 10, 25, 45, 80]).slice(0, 5);
  let stage = 0;
  th.forEach((t, i) => { if (total >= t) stage = i + 1; });
  const next = th[stage] ?? null;
  const prev = stage ? th[stage - 1] : 0;
  const today = dayKey();
  const todayWho = [...new Set(rows.filter(r => r.day === today).map(r => r.who))];
  const last = rows[0]?.day || '';
  return {
    total, stage, stageName: STAGE_NAMES[stage], next, toNext: next == null ? 0 : next - total,
    progress: next == null ? 1 : (total - prev) / Math.max(1, next - prev),
    todayWho, wateredToday: todayWho.includes(meId()), thirsty: !last || daysBetween(last, today) >= 3,
    name: F().tree?.name || L('우리 가족 나무', 'Our family tree'),
  };
}

/* ---------- ✉️ Letters ---------- */
export const isLockedLetter = l => !!l.locked || (!!l.openAt && l.openAt > dayKey());
export const isForMe = l => l.who !== meId() && (l.to === 'all' || l.to === meId());
const READ_KEY = 'family-read';
const readSet = () => { try { return new Set(JSON.parse(localStorage.getItem(READ_KEY) || '[]')); } catch { return new Set(); } };
export function markRead(id) {
  const s = readSet(); if (s.has(id)) return;
  s.add(id);
  try { localStorage.setItem(READ_KEY, JSON.stringify([...s].slice(-500))); } catch {}
  try { dispatchEvent(new CustomEvent('family:read')); } catch {}
}
export function unreadForMe() {
  if (!me()) return [];
  const s = readSet();
  return list('letters').filter(l => isForMe(l) && !isLockedLetter(l) && !s.has(l.id));
}
export const isRead = id => readSet().has(id);

/* ---------- 🗳️ Polls ---------- */
export function polls() {
  const opts = o => (Array.isArray(o) ? o : String(o || '').split('|')).map(x => String(x).trim()).filter(Boolean);
  const cfg = (F().polls || []).filter(p => p && p.id).map(p => ({ ...p, options: opts(p.options), cfg: true }));
  const made = list('polls').map(p => ({ ...p, options: opts(p.options) })).filter(p => p.q && p.options.length >= 2);   // newly made polls go on top
  return [...made, ...cfg].filter(p => p.options.length >= 2);
}
export function votesFor(pollId) {
  const m = new Map();
  list('votes').forEach(v => { if (v.poll === pollId && !m.has(v.who)) m.set(v.who, v.choice); });
  return m;   // who → chosen option number
}

/* ---------- ❓ Quiz scoreboard: each person's best score ---------- */
export function bestScores() {
  const m = new Map();
  list('scores').forEach(s => { const p = m.get(s.who); if (!p || s.score > p.score) m.set(s.who, s); });
  return [...m.values()].sort((a, b) => b.score - a.score || String(a.time).localeCompare(String(b.time)));
}

/* ---------- 💬 Replies · reactions ---------- */
export function repliesFor(target) {
  const rows = list('replies').filter(r => r.target === target).reverse();
  const texts = rows.filter(r => r.text);
  const reacts = {};
  rows.filter(r => r.emoji && !r.text).forEach(r => { (reacts[r.emoji] = reacts[r.emoji] || new Set()).add(r.who); });
  return { texts, reacts };
}

/* Today's tags (birthdays · special days) */
export function todayEvents() { return upcoming(10).filter(e => e.dday === 0); }
export { dayKey, now, toKST };
