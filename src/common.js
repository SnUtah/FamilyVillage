import { L } from './i18n.js';
import { demoPhoto } from './demo-photos.js';

/* =========================================================
   Shared tools that do not need 3D (date · clock, photo lists, vibration)
   Kept separate so the 'Text view' works even on phones without 3D.
   ========================================================= */
const DAYS = L(['일', '월', '화', '수', '목', '금', '토'], ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
export const MONTHS_EN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const F = () => window.FAMILY || {};

export const toKST = d => { try { return new Date(d.toLocaleString('en-US', { timeZone: 'Asia/Seoul' })); } catch { return new Date(d.getTime() + (d.getTimezoneOffset() + 540) * 60000); } };
const pad = n => String(n).padStart(2, '0');

/* ---------- Clock ----------
   You can set the time at the end of the address, like #now=2027-08-21T10:00,
   and #demo sets the clock to 'the morning of the next birthday in the family'.
   (For testing: preview the birthday mode, a time capsule opening and the question of the day changing) */
let clockBase = null, clockT0 = 0;
function nextBirthdayMorning() {
  const n = toKST(new Date());
  let best = null;
  for (const m of F().members || []) {
    if (!/^\d{2}-\d{2}$/.test(m.birthday || '')) continue;
    const [mm, dd] = m.birthday.split('-').map(Number);
    let y = n.getFullYear();
    let d = new Date(`${y}-${pad(mm)}-${pad(dd)}T10:00:00+09:00`);
    if (toKST(d) < new Date(n.getFullYear(), n.getMonth(), n.getDate())) d = new Date(`${y + 1}-${pad(mm)}-${pad(dd)}T10:00:00+09:00`);
    if (!best || d < best) best = d;
  }
  return best;
}
function readClockHash() {
  clockBase = null;
  const h = location.hash.slice(1);
  const m = h.match(/(?:^|&)now=([^&]+)/);
  if (m) {
    const raw = decodeURIComponent(m[1]);
    const d = new Date(/[+Z]/.test(raw.slice(10)) ? raw : raw + (raw.length <= 10 ? 'T10:00:00' : raw.length <= 16 ? ':00' : '') + '+09:00');
    if (!isNaN(d)) { clockBase = d.getTime(); clockT0 = Date.now(); return; }
  }
  if (/(?:^|&)demo(?:&|$)/.test(h)) { const d = nextBirthdayMorning(); if (d) { clockBase = d.getTime(); clockT0 = Date.now(); } }
}
readClockHash();
addEventListener('hashchange', readClockHash);
export function now() { return clockBase ? new Date(clockBase + (Date.now() - clockT0)) : new Date(); }
export const isDemoClock = () => !!clockBase;

/* Korean date 'YYYY-MM-DD' (the question of the day, hearts and attendance count days by this date) */
export function dayKey(d = now()) {
  const k = toKST(d);
  return `${k.getFullYear()}-${pad(k.getMonth() + 1)}-${pad(k.getDate())}`;
}
export function addDays(key, n) {
  const [y, m, d] = key.split('-').map(Number);
  const t = new Date(Date.UTC(y, m - 1, d + n));
  return `${t.getUTCFullYear()}-${pad(t.getUTCMonth() + 1)}-${pad(t.getUTCDate())}`;
}
export function daysBetween(a, b) {   // b - a (days)
  const p = s => { const [y, m, d] = s.split('-').map(Number); return Date.UTC(y, m - 1, d); };
  return Math.round((p(b) - p(a)) / 864e5);
}

export function formatKDate(d = now()) {
  const k = toKST(d);
  const h = k.getHours(), m = k.getMinutes();
  const hh = h % 12 === 0 ? 12 : h % 12;
  return {
    date: L(`${k.getFullYear()}년 ${k.getMonth() + 1}월 ${k.getDate()}일 ${DAYS[k.getDay()]}요일`,
      `${DAYS[k.getDay()]}, ${MONTHS_EN[k.getMonth()]} ${k.getDate()}, ${k.getFullYear()}`),
    short: L(`${k.getMonth() + 1}월 ${k.getDate()}일 (${DAYS[k.getDay()]})`, `${DAYS[k.getDay()]}, ${MONTHS_EN[k.getMonth()]} ${k.getDate()}`),
    time: L(`${h < 12 ? '오전' : '오후'} ${hh}시${m ? ' ' + m + '분' : ''}`, `${pad(h)}:${pad(m)}`),
    k,
  };
}
/* 'YYYY-MM-DD' → '5월 3일 (수)' / 'Wed, May 3' */
export function keyLabel(key, withDay = true) {
  const [y, m, d] = key.split('-').map(Number);
  const w = new Date(Date.UTC(y, m - 1, d)).getUTCDay();
  return L(`${m}월 ${d}일${withDay ? ` (${DAYS[w]})` : ''}`, `${withDay ? `${DAYS[w]}, ` : ''}${MONTHS_EN[m - 1]} ${d}`);
}

/* Date shown on a post: 'Today' if it is today, 'Yesterday' for yesterday, otherwise 'May 3' */
export function shortDate(iso) {
  const t = new Date(iso);
  if (isNaN(t)) return '';
  const diff = daysBetween(dayKey(t), dayKey());
  if (diff === 0) return L('오늘', 'Today');
  if (diff === 1) return L('어제', 'Yesterday');
  const k = toKST(t);
  return L(`${k.getMonth() + 1}월 ${k.getDate()}일`, `${MONTHS_EN[k.getMonth()]} ${k.getDate()}`);
}

/* Short vibration (Android only; iPhones quietly ignore it) */
/* Korean particle that fits the last syllable: josa('첫째', '으로/로') → '첫째로', josa('동생', '이/가') → '동생이'
   (for a non-Korean word it writes both, like '(으)로'). Korean text only. */
export function josa(word, pair) {
  const w = String(word ?? ''), c = w.charCodeAt(w.length - 1), [a, b] = pair.split('/');
  if (!(c >= 0xAC00 && c <= 0xD7A3)) return `${w}(${a.slice(0, a.length - b.length) || a})${b}`;
  const jong = (c - 0xAC00) % 28;
  if (a === '으로' && jong === 8) return w + b;   // a final ㄹ takes '로' (e.g. 딸로)
  return w + (jong ? a : b);
}

export function buzz(ms = 10) {
  try { navigator.vibrate?.(ms); } catch {}
}

/* config → photo list per theme
   If demoPhotos is on, src becomes 'demo:theme:number' and photoURL() turns it into a drawing. */
export function photoThemes() {
  const W = F();
  const themes = W.museum?.themes || [];
  return themes.map(t => {
    let photos;
    if (Array.isArray(t.photos) && t.photos.length) {
      photos = t.photos.map((p, i) => (typeof p === 'string' ? { src: p, caption: t.captions?.[i] || '' } : p));
    } else if (W.demoPhotos || t.demo) {
      photos = Array.from({ length: t.count || t.captions?.length || 0 }, (_, i) => ({ src: `demo:${t.id}:${i}`, caption: t.captions?.[i] || '' }));
    } else {
      photos = Array.from({ length: t.count || 0 }, (_, i) => ({
        src: `${t.folder}/${i + 1}.${t.ext || 'jpg'}`,
        caption: t.captions?.[i] || '',
      }));
    }
    photos.forEach((p, i) => { p.idx = i; p.theme = t; });
    return { ...t, photos };
  });
}

/* Photo address (a demo photo is drawn on the spot and returned as a data address) */
const demoCache = new Map();
export const isDemo = p => typeof p?.src === 'string' && p.src.startsWith('demo:');
export function photoURL(p, size = 'full') {
  if (!isDemo(p)) return p.src;
  const key = `${p.src}:${size}`;
  if (!demoCache.has(key)) {
    const c = demoPhoto(p.theme, p.idx, size === 'thumb' ? 360 : 840);
    demoCache.set(key, c.toDataURL('image/jpeg', size === 'thumb' ? 0.8 : 0.86));
  }
  return demoCache.get(key);
}

/* Placeholder image shown while a photo is missing */
export function placeholderCanvas(theme, idx, src, w = 600, h = 600, msg = L('사진을 넣어주세요', 'Add a photo here')) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const g = c.getContext('2d');
  const grd = g.createLinearGradient(0, 0, w, h);
  grd.addColorStop(0, '#FFFDF8'); grd.addColorStop(1, theme.color || '#F4B8C0');
  g.fillStyle = grd; g.fillRect(0, 0, w, h);
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.font = `${w * 0.2}px serif`; g.fillText(theme.emoji || '📷', w / 2, h * 0.38);
  g.fillStyle = '#7C6A66';
  g.font = `${w * 0.08}px "Jua"`; g.fillText(`${theme.title} #${idx + 1}`, w / 2, h * 0.62);
  g.font = `${w * 0.04}px "Gowun Dodum"`; g.globalAlpha = 0.7;
  g.fillText(msg, w / 2, h * 0.73);
  g.fillText(src, w / 2, h * 0.8);
  return c;
}

/* ---------- 💬 Question of the day: one a day, in order ---------- */
export function questionList() {
  return (F().questions || []).map(q => (typeof q === 'string' ? { q } : q)).filter(q => q && q.q);
}
export function questionIndex(key = dayKey()) {
  const n = questionList().length;
  if (!n) return -1;
  const start = /^\d{4}-\d{2}-\d{2}$/.test(F().questionStart || '') ? F().questionStart : key;
  const d = daysBetween(start, key);
  return ((d % n) + n) % n;
}
