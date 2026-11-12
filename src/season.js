import { now, toKST } from './common.js';

/* =========================================================
   🌿 계절: 봄·여름 숲(기본) · 🍂 가을 · ❄️ 겨울
   - config.js의 season: 'green'(기본) · 'autumn' · 'winter' · 'auto'(날짜에 따라)
   - 메뉴의 '계절 바꾸기'로 보는 사람이 직접 바꿀 수 있고, 그 휴대폰이 기억해요
   - 주소 끝 #autumn · #winter · #green 으로 미리 보기
   - 화면 색(css)은 body의 season-○○ 클래스로, 3D 마을은 'family:season' 이벤트로 바뀌어요
   ========================================================= */
export const SEASONS = ['green', 'autumn', 'winter'];
export const SEASON_INFO = {
  green:  { label: '봄·여름', emoji: '🌿', theme: '#DDEFD0', toast: '🌿 싱그러운 봄·여름 숲이에요' },
  autumn: { label: '가을', emoji: '🍂', theme: '#F3DEC0', toast: '🍂 단풍이 든 가을 마을이에요' },
  winter: { label: '겨울', emoji: '❄️', theme: '#E4ECF4', toast: '❄️ 눈 내린 겨울 마을이에요' },
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
