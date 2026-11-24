import { L } from './i18n.js';
import { now, toKST } from './common.js';

/* =========================================================
   🌿 Seasons: spring–summer forest (default) · 🍂 autumn · ❄️ winter
   - season in config.js: 'green' (default) · 'autumn' · 'winter' · 'auto' (by date)
   - Visitors can change it themselves with the menu's season button, and that phone remembers it
   - Preview with #autumn · #winter · #green at the end of the address
   - Screen colors (css) change through the body class season-○○, the 3D village through the 'family:season' event
   ========================================================= */
export const SEASONS = ['green', 'autumn', 'winter'];
export const SEASON_INFO = {
  green:  { label: L('봄·여름', 'Spring\u2011summer'), emoji: '🌿', theme: '#DDEFD0', toast: L('🌿 싱그러운 봄·여름 숲이에요', '🌿 A fresh spring\u2011summer forest') },
  autumn: { label: L('가을', 'Autumn'), emoji: '🍂', theme: '#F3DEC0', toast: L('🍂 단풍이 든 가을 마을이에요', '🍂 The village in autumn colors') },
  winter: { label: L('겨울', 'Winter'), emoji: '❄️', theme: '#E4ECF4', toast: L('❄️ 눈 내린 겨울 마을이에요', '❄️ A snowy winter village') },
};
const KEY = 'family-season';
const byMonth = () => { const m = toKST(now()).getMonth() + 1; return m >= 9 && m <= 11 ? 'autumn' : m === 12 || m <= 2 ? 'winter' : 'green'; };

function initial() {
  const h = location.hash;
  if (/(?:^|[#&])(autumn|fall)(?:&|$)/.test(h)) return 'autumn';
  if (/(?:^|[#&])winter(?:&|$)/.test(h)) return 'winter';
  if (/(?:^|[#&])(green|spring|summer)(?:&|$)/.test(h)) return 'green';
  try { const s = localStorage.getItem(KEY); if (SEASONS.includes(s)) return s; } catch {}
  const c = String(window.FAMILY?.season || 'green');
  if (c === 'auto') return byMonth();
  return SEASONS.includes(c) ? c : 'green';
}

let current = initial();
export const getSeason = () => current;
function paint() {
  const b = document.body;
  if (b) { SEASONS.forEach(s => b.classList.toggle(`season-${s}`, s === current)); }
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', SEASON_INFO[current].theme);
}
paint();
if (!document.body) addEventListener('DOMContentLoaded', paint);

export function setSeason(s, { save = true } = {}) {
  if (!SEASONS.includes(s)) return current;
  current = s;
  if (save) { try { localStorage.setItem(KEY, s); } catch {} }
  paint();
  try { dispatchEvent(new CustomEvent('family:season', { detail: s })); } catch {}
  return s;
}
export const nextSeason = () => setSeason(SEASONS[(SEASONS.indexOf(current) + 1) % SEASONS.length]);
