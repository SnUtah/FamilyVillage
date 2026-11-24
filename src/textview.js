import { L } from './i18n.js';
import * as UI from './ui.js';
import * as V from './views.js';
import { photoThemes, dayKey } from './common.js';
import { villageName, sinceDays } from './family.js';

/* =========================================================
   📖 Text view
   A screen where our family, the question of the day, letters, calendar, polls, tree, photos and quiz
   can be seen top to bottom on one page, without walking the 3D village.
   - On phones without 3D this is the default screen
   - It strings together the same content as the popups (ui.js · views.js), so the content is always the same
   ========================================================= */
const W = window.FAMILY;
const $ = s => document.querySelector(s);
let cleanups = [], current = null;

export const isReading = () => document.body.classList.contains('reading');

const NAV = [
  ['family', L('🏡 가족', '🏡 Family')], ['question', L('💬 질문', '💬 Question')], ['mailbox', L('✉️ 편지', '✉️ Letters')], ['calendar', L('📅 달력', '📅 Calendar')], ['poll', L('🗳️ 투표', '🗳️ Polls')],
  ['tree', L('🌱 나무', '🌱 Tree')], ['album', L('🖼️ 사진', '🖼️ Photos')], ['quiz', L('❓ 퀴즈', '❓ Quiz')], ['directions', L('🗺️ 모이는 곳', '🗺️ Meeting place')],
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
  const play = canPlay ? `<button class="btn-primary tv-play">${L('🏡 3D 마을에서 구경하기', '🏡 Explore the 3D village')}</button>` : '';
  tv.innerHTML = `
    <div class="tv-top">
      <button class="tv-back" ${canPlay ? '' : 'hidden'} aria-label="${L('3D 마을로 돌아가기', 'Back to the 3D village')}">${L('🏡 마을로', '🏡 Village')}</button>
      <div class="tv-chips" role="navigation" aria-label="${L('글로 보기 차례', 'Text view sections')}">
        ${NAV.map(([k, l]) => `<button class="chip" data-go="${k}">${l}</button>`).join('')}
      </div>
      <button class="fs-toggle tv-fs" aria-label="${UI.isBigFont() ? L('글자 작게', 'Smaller text') : L('글자 크게', 'Larger text')}">${UI.isBigFont() ? L('가-', 'A-') : L('가+', 'A+')}</button>
    </div>
    <div class="tv-inner">
      <header class="tv-hero">
        <div class="en">FAMILY VILLAGE</div>
        <div class="tv-names">${UI.esc(villageName())}</div>
        ${days > 0 ? `<div class="intro-dday">${L(`함께한 지 ${days.toLocaleString('ko-KR')}일째`, `Together for ${days.toLocaleString('en-US')} days`)}</div>` : ''}
        ${play}
        <p class="muted tv-hint">${canPlay ? L('게임이 어려우면 그대로 아래로 내려서 보세요', 'If the game is hard to use, just scroll down') : L('아래로 내리면서 천천히 보세요', 'Scroll down and take your time')}</p>
      </header>
      ${sec('family', '🏡', L('우리 가족', 'Our family'), views.family)}
      ${sec('question', '💬', L('오늘의 질문', 'Question of the day'), views.question, L('내가 답하면 가족의 답이 열려요', "Answer it and your family's answers open"))}
      ${sec('mailbox', '✉️', L('안부 우체통', 'Mailbox'), views.mailbox)}
      ${sec('calendar', '📅', L('가족 달력', 'Family calendar'), views.calendar)}
      ${sec('poll', '🗳️', L('가족 투표함', 'Family polls'), views.poll)}
      ${sec('tree', '🌱', L('함께 키우는 나무', 'The tree we grow together'), views.tree)}
      ${sec('album', '🖼️', W.museum?.title || L('가족 사진관', 'Family photo gallery'), views.album, L('사진을 누르면 크게 볼 수 있어요', 'Tap a photo to see it larger'))}
      ${sec('quiz', '❓', L('가족 퀴즈', 'Family quiz'), views.quiz)}
      ${sec('directions', '🗺️', L('모이는 곳', 'Meeting place'), views.directions)}
      <footer class="tv-foot">
        <div class="btns" style="justify-content:center">
          <button class="btn tv-share">${L('🔗 마을 주소 보내기', '🔗 Share the village link')}</button>
          ${canPlay ? `<button class="btn pink tv-play">${L('🏡 마을로 들어가기', '🏡 Enter the village')}</button>` : ''}
        </div>
        <p style="margin-top:18px">${UI.esc(villageName())} · ${L('우리 가족 마을', 'Our family village')}</p>
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

  // highlight the section being read in the chips at the top
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
