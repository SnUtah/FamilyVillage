import * as UI from './ui.js';
import * as V from './views.js';
import { photoThemes, dayKey } from './common.js';
import { villageName, sinceDays } from './family.js';

/* =========================================================
   📖 글로 보기
   3D 마을을 걷지 않아도 우리 가족·오늘의 질문·편지·달력·투표·나무·사진·퀴즈를
   한 페이지에서 위에서 아래로 볼 수 있는 화면입니다.
   - 3D가 안 되는 휴대폰에서는 이 화면이 기본이 됩니다
   - 팝업(ui.js · views.js)의 내용을 그대로 이어 붙여서 내용이 항상 같습니다
   ========================================================= */
const W = window.FAMILY;
const $ = s => document.querySelector(s);
let cleanups = [], current = null;

export const isReading = () => document.body.classList.contains('reading');

const NAV = [
  ['family', '🏡 가족'], ['question', '💬 질문'], ['mailbox', '✉️ 편지'], ['calendar', '📅 달력'], ['poll', '🗳️ 투표'],
  ['tree', '🌱 나무'], ['album', '🖼️ 사진'], ['quiz', '❓ 퀴즈'], ['directions', '🗺️ 모이는 곳'],
];

function sec(id, emoji, title, view, sub = '') {
  return `
    <section class="tv-sec" data-sec="${id}" aria-labelledby="tv-h-${id}">
      <h2 class="tv-h" id="tv-h-${id}"><span aria-hidden="true">${emoji}</span>${title}</h2>
      ${sub ? `<p class="muted tv-sub">${sub}</p>` : ''}
      <div class="tv-body" data-mount="${id}">${view.html}</div>
    </section>`;
}

export function openTextView({ canPlay = false, onPlay, onClose, onSent, section } = {}) {
  if (isReading()) { if (section) scrollTo(section); return; }
  const tv = $('#textview');
  const themes = photoThemes();
  const days = sinceDays();
  const views = {
    family: V.familyView({ hero: false }),
    question: V.questionView(dayKey(), { embedded: true }),
    mailbox: UI.mailboxView(onSent, { onBack: UI.closeModal }),
    calendar: V.calendarView(),
    poll: V.pollView(),
    tree: V.treeView(),
    album: UI.albumView(themes),
    quiz: UI.quizView(),
    directions: UI.directionsView(),
  };
  const play = canPlay ? `<button class="btn-primary tv-play">🏡 3D 마을에서 구경하기</button>` : '';
  tv.innerHTML = `
    <div class="tv-top">
      <button class="tv-back" ${canPlay ? '' : 'hidden'} aria-label="3D 마을로 돌아가기">🏡 마을로</button>
      <div class="tv-chips" role="navigation" aria-label="글로 보기 차례">
        ${NAV.map(([k, l]) => `<button class="chip" data-go="${k}">${l}</button>`).join('')}
      </div>
      <button class="fs-toggle tv-fs" aria-label="${UI.isBigFont() ? '글자 작게' : '글자 크게'}">${UI.isBigFont() ? '가-' : '가+'}</button>
    </div>
    <div class="tv-inner">
      <header class="tv-hero">
        <div class="en">FAMILY VILLAGE</div>
        <div class="tv-names">${UI.esc(villageName())}</div>
        ${days > 0 ? `<div class="intro-dday">함께한 지 ${days.toLocaleString()}일째</div>` : ''}
        ${play}
        <p class="muted tv-hint">${canPlay ? '게임이 어려우면 그대로 아래로 내려서 보세요' : '아래로 내리면서 천천히 보세요'}</p>
      </header>
      ${sec('family', '🏡', '우리 가족', views.family)}
      ${sec('question', '💬', '오늘의 질문', views.question, '내가 답하면 가족의 답이 열려요')}
      ${sec('mailbox', '✉️', '안부 우체통', views.mailbox)}
      ${sec('calendar', '📅', '가족 달력', views.calendar)}
      ${sec('poll', '🗳️', '가족 투표함', views.poll)}
      ${sec('tree', '🌱', '함께 키우는 나무', views.tree)}
      ${sec('album', '🖼️', W.museum?.title || '가족 사진관', views.album, '사진을 누르면 크게 볼 수 있어요')}
      ${sec('quiz', '❓', '가족 퀴즈', views.quiz)}
      ${sec('directions', '🗺️', '모이는 곳', views.directions)}
      <footer class="tv-foot">
        <div class="btns" style="justify-content:center">
          <button class="btn tv-share">🔗 마을 주소 보내기</button>
          ${canPlay ? '<button class="btn pink tv-play">🏡 마을로 들어가기</button>' : ''}
        </div>
        <p style="margin-top:18px">${UI.esc(villageName())} · 우리 가족 마을</p>
      </footer>
    </div>`;

  cleanups = [];
  Object.entries(views).forEach(([k, v]) => {
    const el = tv.querySelector(`[data-mount="${k}"]`);
    const c = v.mount?.(el);
    if (typeof c === 'function') cleanups.push(c);
  });
  tv.querySelectorAll('[data-go]').forEach(b => b.onclick = () => scrollTo(b.dataset.go));
  tv.querySelectorAll('.tv-back, .tv-play').forEach(b => b.onclick = () => { onPlay?.(); closeTextView(); });
  tv.querySelectorAll('.tv-share').forEach(b => b.onclick = UI.share);

  // 읽고 있는 부분을 위쪽 차례에서 표시
  if ('IntersectionObserver' in window) {
    const chips = [...tv.querySelectorAll('[data-go]')];
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return;
      chips.forEach(c => c.classList.toggle('on', c.dataset.go === e.target.dataset.sec));
      chips.find(c => c.classList.contains('on'))?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
    }), { root: tv, rootMargin: '-35% 0px -55% 0px' });
    tv.querySelectorAll('.tv-sec').forEach(s => io.observe(s));
    cleanups.push(() => io.disconnect());
  }

  current = { onClose };
  document.body.classList.add('reading');
  tv.scrollTop = 0;
  UI.pushBack(hide);
  if (section) setTimeout(() => scrollTo(section, false), 60);
}

function scrollTo(id, smooth = true) {
  $('#textview').querySelector(`[data-sec="${id}"]`)?.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' });
}

function hide() {
  document.body.classList.remove('reading');
  cleanups.forEach(c => c());
  cleanups = [];
  const c = current; current = null;
  c?.onClose?.();
}
export function closeTextView() {
  if (!isReading()) return;
  hide();
  UI.popBack(hide);
}
