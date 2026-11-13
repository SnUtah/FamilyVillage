import { placeholderCanvas, buzz, photoURL, shortDate, dayKey, addDays, keyLabel, daysBetween, josa } from './common.js';
import { list, add, refresh, remoteOn, status } from './store.js';
import {
  members, member, memberName, memberColor, callName, me, meId, repliesFor, isLockedLetter, isForMe, markRead, isRead, unreadForMe, bestScores, villageName,
} from './family.js';
import { sound } from './sound.js';

/* =========================================================
   화면 UI: 모달, 토스트, 라이트박스, 각 오브젝트 내용

   각 내용은 { html, mount } 를 돌려주는 ○○View()와
   그것을 아래에서 올라오는 팝업으로 여는 show○○()로 나뉩니다.
   '📖 글로 보기'(textview.js)는 같은 View들을 한 페이지에 이어 붙여 씁니다.
   가족 기능 화면(우리 가족·오늘의 질문·달력·투표·나무·꾸미기)은 views.js에 있어요.
   ========================================================= */
const W = window.FAMILY;
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* ---------- 휴대폰 뒤로가기 = 팝업 닫기 ----------
   팝업을 열 때마다 방문 기록을 하나 쌓아서, 뒤로가기를 눌러도
   사이트를 나가지 않고 팝업(또는 사진관, 글로 보기)만 닫히게 합니다. */
const backStack = [];
let selfBack = 0;
export function pushBack(close) {
  backStack.push(close);
  try { history.pushState({ wv: backStack.length }, ''); } catch {}
}
export function popBack(close) {
  const i = backStack.lastIndexOf(close);
  if (i < 0) return;
  backStack.splice(i, 1);
  selfBack++;
  history.back();
}
addEventListener('popstate', () => {
  if (selfBack > 0) { selfBack--; return; }
  backStack.pop()?.();
});

/* ---------- 아래에서 올라오는 팝업 ---------- */
let cleanup = null, closeTimer = null;
const modalEl = () => $('#modal');
function hideModal() {
  const m = modalEl();
  if (!m.classList.contains('open') || m.classList.contains('closing')) return;
  m.classList.add('closing');
  sound.duck(false);
  if (cleanup) { cleanup(); cleanup = null; }
  closeTimer = setTimeout(() => {
    m.classList.remove('open', 'closing');
    m.querySelector('.sheet').style.transform = '';
  }, 220);
}

export function openModal(title, html, mount) {
  const m = modalEl();
  if (cleanup) { cleanup(); cleanup = null; }
  const wasOpen = m.classList.contains('open') && !m.classList.contains('closing');
  clearTimeout(closeTimer);
  m.classList.remove('closing');
  m.querySelector('.sheet').style.transform = '';
  $('#modal-title').textContent = title;
  const body = $('#modal-body');
  body.innerHTML = html;
  body.scrollTop = 0;
  m.classList.add('open');
  sound.duck(true);
  if (!wasOpen) pushBack(hideModal);
  if (mount) cleanup = mount(body) || null;
}
export function closeModal() {
  const m = modalEl();
  if (!m.classList.contains('open') || m.classList.contains('closing')) return;
  hideModal();
  popBack(hideModal);
}
export const isOverlayOpen = () => $('#modal').classList.contains('open') || $('#lightbox').classList.contains('open');
export const openView = (title, view) => openModal(title, view.html, view.mount);

let toastT;
export function toast(msg, ms = 2400) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastT);
  toastT = setTimeout(() => t.classList.remove('show'), ms);
}

const stillMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
export function confetti(emojis = ['🌸', '💗', '✨', '🎉', '💐']) {
  if (stillMotion()) return;
  for (let i = 0; i < 28; i++) {
    const s = document.createElement('div');
    s.className = 'confetti';
    s.textContent = emojis[i % emojis.length];
    s.style.left = Math.random() * 100 + '%';
    s.style.animationDuration = 2 + Math.random() * 2 + 's';
    s.style.animationDelay = Math.random() * 0.6 + 's';
    ($('#phone') || document.body).appendChild(s);
    setTimeout(() => s.remove(), 5000);
  }
}

export async function copy(text, msg = '복사되었어요') {
  let ok = false;
  try { await navigator.clipboard.writeText(text); ok = true; }
  catch {
    // 오래된 브라우저·http 미리보기용 예비 방법
    const ta = document.createElement('textarea');
    ta.value = text; ta.readOnly = true;
    ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0;-webkit-user-select:text;user-select:text';
    document.body.appendChild(ta); ta.focus(); ta.select();
    try { ta.setSelectionRange(0, text.length); ok = document.execCommand('copy'); } catch { ok = false; }
    ta.remove();
  }
  buzz(10);
  toast(ok ? `📋 ${msg}` : '복사가 안 돼요. 글자를 길게 눌러 복사해 주세요');
  return ok;
}

/* data-copy가 있는 버튼·행을 누르면 복사 (행 안의 버튼을 눌렀을 땐 한 번만) */
function bindCopy(root) {
  root.querySelectorAll('[data-copy]').forEach(b => b.addEventListener('click', e => {
    if (b.tagName !== 'BUTTON' && e.target.closest('button')) return;
    copy(b.dataset.copy, b.dataset.msg);
  }));
}

/* ---------- 🙂 작은 캐릭터 얼굴 (구성원 목록·편지·점수판에서 같이 씀) ---------- */
export function avatarHTML(look = {}, cls = '') {
  const c = ['avatar', look.longHair ? 'long' : '', look.kid ? 'kid' : '', cls].filter(Boolean).join(' ');
  return `<span class="${c}" style="--outfit:${esc(look.outfit || '#8FB8DE')};--hair:${esc(look.hair || '#5A3A2A')}" aria-hidden="true"><i class="hd"></i><i class="bd"></i><i class="lg"></i>${look.glasses ? '<i class="gls"></i>' : ''}${look.hat ? `<i class="ht ht-${esc(look.hat)}"></i>` : ''}</span>`;
}
const whoChip = (id, name) => {
  const m = member(id);
  return `<span class="who-chip" style="--c:${esc(m ? m.look.outfit : '#E6D5C6')}">${esc(m ? (m.role || m.name) : (name || '손님'))}</span>`;
};

/* 시트 연결 상태 한 줄: 불러오는 중 · 실패(다시 시도) · 마지막 사본 */
export function paintStatus(el) {
  if (!el) return;
  if (!remoteOn()) { el.hidden = true; return; }
  const s = status();
  el.hidden = false;
  if (s.loading && !s.loaded) el.textContent = '가족 소식을 불러오는 중…';
  else if (s.error && !s.loaded) {
    el.innerHTML = '지금은 소식을 불러올 수 없어요. <button type="button" class="linklike st-retry">다시 시도</button>';
    el.querySelector('.st-retry').onclick = () => { refresh({ force: true }); paintStatus(el); };
  } else if (s.error) el.textContent = '마지막으로 받아 온 소식이에요 (지금은 연결이 어려워요)';
  else el.hidden = true;
}
/* 데이터가 바뀌면 다시 그리기 (창을 닫으면 그만 듣기) */
export function onData(render) {
  const h = () => render();
  addEventListener('family:data', h);
  return () => removeEventListener('family:data', h);
}
const sentToast = (r, okMsg) => toast(r.ok ? okMsg : '휴대폰에 보관했어요. 연결되면 자동으로 보낼게요', r.ok ? 2400 : 3600);

/* ---------- 💬 답장 · 반응 (편지와 오늘의 질문 답 아래) ---------- */
const EMOJIS = ['👍', '😂', '🥹', '💗'];
const emojiId = e => [...e].map(c => c.codePointAt(0).toString(16)).join('');
export function replyView(target, { compact = false } = {}) {
  const mount = el => {
    const box = el.querySelector(`[data-rx="${CSS.escape(target)}"]`) || el;
    let opened = false;
    const render = () => {
      if (!box.isConnected) return;
      const { texts, reacts } = repliesFor(target);
      const my = meId(), canWrite = !!me();
      box.innerHTML = `
        <div class="rx-emojis">${EMOJIS.map(e => { const set = reacts[e]; const n = set?.size || 0; return `<button type="button" class="rx-e${set?.has(my) ? ' on' : ''}" data-e="${e}" ${canWrite ? '' : 'disabled'} aria-label="${e} 반응 ${n}개">${e}${n ? `<b>${n}</b>` : ''}</button>`; }).join('')}</div>
        ${texts.length ? `<ul class="rx-list">${texts.map(r => `<li>${whoChip(r.who, r.name)} <span>${esc(r.text)}</span> <small>${shortDate(r.time)}</small></li>`).join('')}</ul>` : ''}
        ${canWrite ? `${compact ? '<button type="button" class="linklike rx-open">💬 답장 쓰기</button>' : ''}<form class="rx-form" autocomplete="off" ${compact && !opened ? 'hidden' : ''}><input class="field rx-in" maxlength="80" placeholder="답장 한 줄 남기기" aria-label="답장"><button class="btn small pink" type="submit">보내기</button></form>` : ''}`;
      const op = box.querySelector('.rx-open');
      if (op) op.onclick = () => { opened = true; op.hidden = true; const f = box.querySelector('.rx-form'); f.hidden = false; f.querySelector('.rx-in').focus(); };
      if (op && opened) op.hidden = true;
      box.querySelectorAll('.rx-e').forEach(b => b.onclick = async () => {
        if (b.classList.contains('on')) { toast('이미 마음을 남겼어요 😊'); return; }
        buzz(8); sound.sfx('heart');
        b.classList.add('on');
        await add('replies', { id: `${my}-${target}-${emojiId(b.dataset.e)}`, who: my, name: memberName(my), target, emoji: b.dataset.e, text: '' });
        render();
      });
      const f = box.querySelector('.rx-form');
      if (f) f.onsubmit = async e => {
        e.preventDefault();
        const inp = f.querySelector('.rx-in'), text = inp.value.trim();
        if (!text) return;
        inp.value = '';
        const r = await add('replies', { who: my, name: memberName(my), target, text, emoji: '' });
        sentToast(r, '💬 답장을 남겼어요');
        sound.sfx('paper');
        render();
      };
    };
    render();
    return onData(render);
  };
  return { html: `<div class="rx" data-rx="${esc(target)}"></div>`, mount };
}

/* ---------- ✉️ 안부 우체통: 편지 쓰기 + 봉투 목록 ----------
   봉투를 누르면 편지지가 펼쳐집니다. 받는 사람을 고를 수 있고(모두에게 / 한 사람에게),
   '타임캡슐'로 보내면 정한 날이 되어야 열려요. */
const envelopeHTML = (l, i) => {
  const locked = isLockedLetter(l), unread = !locked && isForMe(l) && !isRead(l.id);
  const seal = l.pending ? '⏳' : locked ? '🔒' : l.openAt ? '🎁' : l.mine ? '✍️' : '💌';   // 🎁 = 열린 타임캡슐
  const meta = l.pending ? '보내는 중' : locked ? `${keyLabel(l.openAt, false)}에 열려요` : `${l.to === 'all' ? '모두에게' : `To. ${callName(l.to)}`} · ${shortDate(l.time)}`;
  return `
  <button type="button" class="env${l.mine ? ' mine' : ''}${l.pending ? ' pending' : ''}${locked ? ' locked' : ''}${unread ? ' unread' : ''}" style="--c:${esc(memberColor(l.who))}" data-i="${i}" aria-label="${esc(l.name || memberName(l.who))}의 편지 열기">
    <span class="flap" aria-hidden="true"></span>
    <span class="seal" aria-hidden="true">${seal}</span>
    <b class="env-name">${locked ? '⏳ 타임캡슐' : esc(l.name || memberName(l.who))}</b>
    <small class="env-meta">${esc(meta)}</small>
  </button>`;
};

export function mailboxView(onSent, { onBack, to: presetTo = '', filter: presetFilter = '' } = {}) {
  const meM = me(), guest = !meM;
  const others = members().filter(m => m.id !== meId());
  const html = `
    <p class="muted" style="line-height:1.7">${guest ? '가족에게 안부 한마디 남겨 주세요 💌' : `<b>${esc(meM.role || meM.name)}</b>${esc(josa(meM.role || meM.name, '이/가').slice(String(meM.role || meM.name).length))} 가족에게 보내는 편지예요 💌`}</p>
    <form class="letter-form" autocomplete="off">
      ${guest ? '<input class="field l-name" maxlength="20" placeholder="이름" aria-label="이름" />' : ''}
      <div class="to-row" role="group" aria-label="받는 사람">
        <button type="button" class="to-chip on" data-to="all">👨‍👩‍👧‍👦 모두에게</button>
        ${others.map(m => `<button type="button" class="to-chip" data-to="${esc(m.id)}" style="--c:${esc(m.look.outfit)}">${esc(m.role || m.name)}</button>`).join('')}
      </div>
      <textarea class="field l-msg" maxlength="500" placeholder="하고 싶은 말을 적어 주세요 (500자 이내)" aria-label="편지 내용"></textarea>
      <label class="tc-row"><input type="checkbox" class="l-tc"> ⏳ 타임캡슐로 보내기 <small class="muted">정한 날이 되어야 열려요</small></label>
      <div class="tc-date" hidden><input type="date" class="field l-open" aria-label="열리는 날"></div>
      <button class="btn pink l-send" type="submit" style="width:100%;margin-top:10px;padding:14px">✉️ 편지 보내기</button>
    </form>
    <div class="divider"></div>
    <div class="env-head"><b>💌 가족 편지</b><span class="muted l-count"></span></div>
    ${guest ? '' : `<div class="seg l-filter"><button type="button" data-f="all">전체</button><button type="button" data-f="me">나에게 온 편지 <b class="l-unread"></b></button><button type="button" data-f="mine">내가 쓴 편지</button></div>`}
    <p class="muted l-status" role="status" hidden></p>
    <div class="env-grid l-list" style="margin-top:10px"></div>`;
  const mount = root => {
    let to = 'all', filter = presetFilter || 'all';
    const pickTo = id => {
      to = id;
      root.querySelectorAll('.to-chip').forEach(b => b.classList.toggle('on', b.dataset.to === id));
    };
    root.querySelectorAll('.to-chip').forEach(b => b.onclick = () => { buzz(6); pickTo(b.dataset.to); });
    if (presetTo && others.some(m => m.id === presetTo)) pickTo(presetTo);
    const tc = root.querySelector('.l-tc'), tcBox = root.querySelector('.tc-date'), openIn = root.querySelector('.l-open');
    const tomorrow = addDays(dayKey(), 1);
    openIn.min = tomorrow; openIn.value = addDays(dayKey(), 100);
    tc.onchange = () => { tcBox.hidden = !tc.checked; };
    const listEl = root.querySelector('.l-list'), countEl = root.querySelector('.l-count'), statusEl = root.querySelector('.l-status');
    const back = onBack || (() => showMailbox(onSent, { filter }));
    const render = () => {
      if (!root.isConnected) return;
      const all = list('letters');
      const shown = filter === 'me' ? all.filter(isForMe) : filter === 'mine' ? all.filter(l => l.who === meId()) : all;
      countEl.textContent = all.length ? `${all.length}통` : '';
      const ur = root.querySelector('.l-unread');
      if (ur) { const n = unreadForMe().length; ur.textContent = n ? n : ''; }
      root.querySelectorAll('.l-filter button').forEach(b => b.classList.toggle('on', b.dataset.f === filter));
      listEl.innerHTML = shown.length
        ? shown.slice(0, 60).map(envelopeHTML).join('')
        : `<p class="muted">${filter === 'me' ? '아직 나에게 온 편지가 없어요' : filter === 'mine' ? '아직 쓴 편지가 없어요' : '아직 편지가 없어요. 첫 편지를 남겨 주세요!'}</p>`;
      listEl.querySelectorAll('.env').forEach(b => b.onclick = () => {
        buzz(8);
        const l = shown[+b.dataset.i];
        if (isLockedLetter(l)) { toast(`⏳ 아직 열 수 없어요 · ${keyLabel(l.openAt)} (D-${daysBetween(dayKey(), l.openAt)})`, 3000); return; }
        b.classList.add('open');
        setTimeout(() => showLetter(shown, +b.dataset.i, back), stillMotion() ? 0 : 260);
      });
      paintStatus(statusEl);
    };
    root.querySelectorAll('.l-filter button').forEach(b => b.onclick = () => { filter = b.dataset.f; buzz(6); render(); });
    render();
    refresh();
    const off = onData(render);
    const form = root.querySelector('.letter-form'), btn = root.querySelector('.l-send');
    form.onsubmit = async e => {
      e.preventDefault();
      const name = guest ? root.querySelector('.l-name').value.trim() : (meM.name);
      const message = root.querySelector('.l-msg').value.trim();
      if (!name || !message) { toast(guest ? '이름과 편지 내용을 적어 주세요' : '편지 내용을 적어 주세요'); return; }
      const openAt = tc.checked ? (openIn.value || addDays(dayKey(), 100)) : '';
      if (openAt && openAt <= dayKey()) { toast('열리는 날은 내일 이후로 골라 주세요'); return; }
      const label = btn.textContent;
      btn.disabled = true;
      if (remoteOn()) btn.textContent = '보내는 중…';
      const r = await add('letters', { who: guest ? 'guest' : meId(), name, to, message, openAt });
      btn.textContent = label;
      btn.disabled = false;
      if (!root.isConnected) return;   // 보내는 사이에 창이 닫힘
      root.querySelector('.l-msg').value = '';
      tc.checked = false; tcBox.hidden = true;
      const whom = to === 'all' ? '가족 모두에게' : `${callName(to)}에게`;
      sentToast(r, openAt ? `⏳ 타임캡슐을 묻었어요. ${keyLabel(openAt)}에 열려요` : `💌 ${whom} 편지를 보냈어요`);
      confetti(['💌', '💗', '✨']);
      buzz(20);
      sound.sfx('paper');
      onSent?.(r.item);
      filter = 'all';
      render();
      listEl.querySelector('.env')?.scrollIntoView({ behavior: stillMotion() ? 'auto' : 'smooth', block: 'center' });
    };
    return off;
  };
  return { html, mount };
}
export function showMailbox(onSent, opts) { openView('안부 우체통', mailboxView(onSent, opts)); }

/* ---------- 📜 편지지: 봉투를 열면 보이는 한 장 + 답장 ---------- */
export function letterView(list_, i, onBack) {
  const l = list_[i];
  if (isForMe(l)) markRead(l.id);
  const rx = replyView(l.id);
  const html = `
    <article class="paper" style="--c:${esc(memberColor(l.who))}" aria-label="${esc(l.name)}의 편지">
      <div class="paper-top"><span class="paper-stamp">${l.openAt ? '🎁' : l.mine ? '✍️' : '💌'}</span><span>To. ${l.to === 'all' ? '우리 가족' : esc(memberName(l.to))}</span></div>
      ${l.openAt ? `<p class="muted" style="margin:0 0 6px">⏳ ${shortDate(l.time)}에 묻어 둔 타임캡슐이에요</p>` : ''}
      <p class="paper-msg">${esc(l.message)}</p>
      <div class="paper-from">From. <b>${esc(l.name || memberName(l.who))}</b><small>${shortDate(l.time)}</small></div>
    </article>
    ${rx.html}
    <div class="paper-nav">
      <button class="btn small p-prev" ${i <= 0 ? 'disabled' : ''}>‹ 이전</button>
      <span class="muted">${i + 1} / ${list_.length}</span>
      <button class="btn small p-next" ${i >= list_.length - 1 ? 'disabled' : ''}>다음 ›</button>
    </div>
    <button class="btn p-back" style="width:100%;margin-top:10px">✉️ 우체통으로</button>`;
  const mount = root => {
    const go = d => {
      let k = i + d;
      while (list_[k] && isLockedLetter(list_[k])) k += d;   // 잠긴 타임캡슐은 건너뜀
      if (list_[k]) { buzz(6); showLetter(list_, k, onBack); }
    };
    root.querySelector('.p-prev').onclick = () => go(-1);
    root.querySelector('.p-next').onclick = () => go(1);
    root.querySelector('.p-back').onclick = onBack;
    // 편지지를 옆으로 밀어서 다음 편지
    const paper = root.querySelector('.paper');
    let sx = 0, sy = 0;
    paper.addEventListener('pointerdown', e => { sx = e.clientX; sy = e.clientY; });
    paper.addEventListener('pointerup', e => {
      const dx = e.clientX - sx, dy = e.clientY - sy;
      if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.5) go(dx < 0 ? 1 : -1);
    });
    return rx.mount(root);
  };
  return { html, mount };
}
export function showLetter(list_, i, onBack = closeModal) { openView('💌 편지', letterView(list_, i, onBack)); }

/* ---------- 🗺️ 모이는 곳 ---------- */
export function directionsView() {
  const v = W.place || {};
  const list_ = (title, arr) => (arr && arr.length ? `<div class="card"><b>${title}</b><div class="muted" style="margin-top:6px;line-height:1.7">${arr.map(esc).join('<br>')}</div></div>` : '');
  const html = `
    <div class="card center">
      <div class="serif" style="font-size:20px;font-weight:700">${esc(v.name || '모이는 곳')}</div>
      <div style="margin-top:8px">${esc(v.address || '')}</div>
      <div class="btns" style="justify-content:center">
        ${v.address ? `<button class="btn small" data-copy="${esc(v.address)}" data-msg="주소가 복사되었어요">📋 주소 복사</button>` : ''}
        ${v.tel ? `<a class="btn small" href="tel:${esc(v.tel)}">📞 전화</a>` : ''}
      </div>
    </div>
    <div class="btns">
      ${v.naverMap ? `<a class="btn" target="_blank" rel="noopener" href="${esc(v.naverMap)}">🟢 네이버 지도</a>` : ''}
      ${v.kakaoMap ? `<a class="btn" target="_blank" rel="noopener" href="${esc(v.kakaoMap)}">🟡 카카오맵</a>` : ''}
      ${v.tmap ? `<a class="btn" target="_blank" rel="noopener" href="${esc(v.tmap)}">🔵 티맵</a>` : ''}
    </div>
    ${list_('🚇 지하철', v.subway)}
    ${list_('🚌 버스', v.bus)}
    ${list_('🚗 자가용', v.car ? [v.car] : [])}
    ${list_('🅿️ 주차', v.parking ? [v.parking] : [])}`;
  return { html, mount: bindCopy };
}
export function showDirections() { openView('모이는 곳', directionsView()); }

/* ---------- ❓ 가족 퀴즈 + 점수판 ---------- */
function scoreboardHTML() {
  const rows = bestScores();
  if (!rows.length) return '<p class="muted center">아직 기록이 없어요. 첫 기록의 주인공이 되어 보세요!</p>';
  return `<ol class="board">${rows.map((s, i) => `<li><span class="rank">${['🥇', '🥈', '🥉'][i] || i + 1}</span>${avatarHTML(member(s.who)?.look || {}, 'mini')}<b>${esc(member(s.who)?.role || s.name || memberName(s.who))}</b><span class="sc">${s.score} / ${s.total}</span></li>`).join('')}</ol>`;
}
export function quizView() {
  const qs = W.quiz || [];
  const mount = root => {
    const box = root.querySelector('.quiz-box') || root;
    let i = -1, score = 0, timer = null, alive = true;
    const render = () => {
      if (!alive) return;
      if (i < 0) {
        box.innerHTML = `
          <p class="muted center" style="line-height:1.7">누가 우리 가족을 제일 잘 알까요? 🤔<br>${qs.length}문제를 풀면 점수판에 이름이 올라가요</p>
          <div class="card"><b>🏆 점수판</b>${scoreboardHTML()}</div>
          <button class="btn pink q-start" style="width:100%">❓ 퀴즈 시작</button>`;
        box.querySelector('.q-start').onclick = () => { i = 0; score = 0; render(); };
        return;
      }
      if (i >= qs.length) {
        const perfect = score === qs.length;
        box.innerHTML = `
          <div class="center" style="padding:14px 0 6px">
            <div style="font-size:60px">${perfect ? '🏆' : score >= qs.length / 2 ? '🥰' : '🌱'}</div>
            <div class="quiz-q">${qs.length}문제 중 <b style="color:var(--rose-deep)">${score}개</b> 맞혔어요!</div>
            <p class="muted">${perfect ? '우리 가족 박사님이시네요! 💕' : '이제 우리 가족을 조금 더 알게 됐죠? 😊'}</p>
          </div>
          <div class="card"><b>🏆 점수판</b><div class="q-board">${scoreboardHTML()}</div></div>
          <button class="btn pink q-again" style="width:100%">다시 풀기</button>`;
        box.querySelector('.q-again').onclick = () => { i = 0; score = 0; render(); };
        if (perfect) confetti();
        if (me()) add('scores', { who: meId(), name: memberName(meId()), score, total: qs.length }).then(() => {
          const b = box.querySelector('.q-board'); if (b) b.innerHTML = scoreboardHTML();
        });
        return;
      }
      const q = qs[i];
      box.innerHTML = `
        <div class="progress-dots">${qs.map((_, k) => `<i class="${k <= i ? 'on' : ''}"></i>`).join('')}</div>
        <div class="quiz-q">Q${i + 1}. ${esc(q.q)}</div>
        ${q.options.map((o, k) => `<button class="quiz-opt" data-k="${k}">${esc(o)}</button>`).join('')}
        <p class="muted center q-cmt" style="min-height:24px"></p>`;
      box.querySelectorAll('.quiz-opt').forEach(b => b.onclick = () => {
        const k = +b.dataset.k;
        box.querySelectorAll('.quiz-opt').forEach(x => (x.disabled = true));
        box.querySelectorAll('.quiz-opt')[q.answer].classList.add('right');
        if (k === q.answer) { score++; sound.sfx('ok'); } else { b.classList.add('wrong'); sound.sfx('no'); }
        box.querySelector('.q-cmt').textContent = (k === q.answer ? '⭕ 정답! ' : '❌ 아쉬워요! ') + (q.comment || '');
        timer = setTimeout(() => { i++; render(); }, 1700);
      });
    };
    render();
    return () => { alive = false; clearTimeout(timer); };   // 창을 닫으면 다음 문제로 넘어가지 않음
  };
  return { html: '<div class="quiz-box"></div>', mount };
}
export function showQuiz() { openView('가족 퀴즈', quizView()); }

export async function share() {
  const data = { title: villageName(), text: '우리 가족 마을에 놀러 와요 🏡', url: location.href.split('#')[0] };
  if (navigator.share) {
    try { await navigator.share(data); return; }
    catch (err) { if (err?.name === 'AbortError') return; }
  }
  copy(data.url, '주소가 복사되었어요');
}

/* ---------- 📱 앱으로 설치 (홈 화면에 추가) ----------
   안드로이드 크롬: 설치 창을 바로 띄움 · 아이폰/카카오톡 안 브라우저: 방법을 알려 줌 */
let installEvt = null;
addEventListener('beforeinstallprompt', e => { e.preventDefault(); installEvt = e; });
addEventListener('appinstalled', () => { installEvt = null; toast('📱 홈 화면에 가족 마을이 생겼어요!', 3200); });
export const isInstalled = () => matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
export async function installApp() {
  if (installEvt) {
    const e = installEvt; installEvt = null;
    try { e.prompt(); await e.userChoice; } catch {}
    return;
  }
  const ua = navigator.userAgent;
  const inApp = /KAKAOTALK|NAVER|Instagram|FBAN|FBAV|Line\//i.test(ua), ios = /iPhone|iPad|iPod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const steps = inApp
    ? ['오른쪽 아래(또는 위) <b>⋮ · 공유</b> 버튼', `<b>${ios ? 'Safari로 열기' : '다른 브라우저로 열기'}</b>`, ios ? '열린 Safari에서 아래 순서대로' : '열린 크롬에서 아래 순서대로']
    : [];
  const how = ios
    ? ['화면 아래 <b>공유 버튼</b> <span class="kbd">⬆︎</span> 누르기', '<b>홈 화면에 추가</b> 고르기', '오른쪽 위 <b>추가</b>']
    : ['오른쪽 위 <b>⋮</b> 메뉴 누르기', '<b>앱 설치</b> 또는 <b>홈 화면에 추가</b>', '<b>설치</b> 누르기'];
  openModal('📱 앱으로 설치', `
    <div class="card center"><div style="font-size:44px">🏡</div><b>홈 화면에 가족 마을 아이콘을 만들어요</b>
      <p class="muted" style="margin:6px 0 0">다음부터는 아이콘만 누르면 바로 열려요. 인터넷이 잠깐 끊겨도 열리고, 쓴 글은 연결되면 보내져요</p></div>
    ${steps.length ? `<div class="card"><b>먼저, 지금 앱 안의 브라우저라면</b><ol class="howto">${steps.map(s => `<li>${s}</li>`).join('')}</ol></div>` : ''}
    <div class="card"><b>${ios ? '아이폰 (Safari)' : '안드로이드 (크롬·삼성 인터넷)'}</b><ol class="howto">${how.map(s => `<li>${s}</li>`).join('')}</ol></div>`);
}

/* ---------- ☰ 바로가기 메뉴 ---------- */
const MENU_GROUPS = [['', '🌳 마을 곳곳'], ['me', '🙋 나'], ['set', '⚙️ 보기 · 설정']];
export function menuView(items) {
  const btn = (it, small) => `<button class="menu-item${small ? ' small' : ''}" data-i="${items.indexOf(it)}"><span class="e">${it.emoji}</span>${esc(it.label)}</button>`;
  const html = `
    <p class="muted">원하는 곳을 누르면 바로 볼 수 있어요</p>
    ${MENU_GROUPS.map(([g, title]) => {
      const list = items.filter(it => (it.g || '') === g);
      if (!list.length) return '';
      return `<h4 class="menu-sec">${title}</h4><div class="menu-grid${g === 'set' ? ' small' : ''}">${list.map(it => btn(it, g === 'set')).join('')}</div>`;
    }).join('')}`;
  const mount = root => { root.querySelectorAll('.menu-item').forEach(b => b.onclick = () => { buzz(8); items[+b.dataset.i].go(); }); };
  return { html, mount };
}
export function showMenu(items) { openView('바로가기', menuView(items)); }

/* ---------- 📚 앨범 (2D 그리드) ---------- */
export function albumView(themes, only = -1) {
  const list = only >= 0 ? [themes[only]] : themes;
  const html = list.map(t => `
    <div class="album-theme">
      <h3>${t.emoji} ${esc(t.title)} <span class="muted" style="font-size:13px">${t.photos.length}장</span></h3>
      <div class="muted" style="font-size:13px">${esc(t.subtitle || '')}</div>
      <div class="album-grid">
        ${t.photos.map((p, i) => `<button type="button" data-t="${themes.indexOf(t)}" data-i="${i}" aria-label="${esc(p.caption || t.title + ' ' + (i + 1))}"><img loading="lazy" src="${esc(photoURL(p, 'thumb'))}" alt="" /></button>`).join('')}
      </div>
    </div>`).join('');
  const mount = root => {
    root.querySelectorAll('.album-grid img').forEach(img => {
      img.onerror = () => {
        const b = img.parentElement;
        const t = themes[+b.dataset.t];
        img.onerror = null;
        img.src = placeholderCanvas(t, +b.dataset.i, t.photos[+b.dataset.i].src, 300, 300).toDataURL();
      };
    });
    root.querySelectorAll('.album-grid button').forEach(b => b.onclick = () => openLightbox(themes, +b.dataset.t, +b.dataset.i));
  };
  return { html, mount };
}
export function showAlbum(themes, only = -1) { openView(only >= 0 ? `${themes[only].title} 앨범` : '전체 앨범', albumView(themes, only)); }

/* ---------- 🔍 사진 크게 보기 ----------
   두 번 탭 / 두 손가락으로 확대, 옆으로 밀어 넘기기, 아래로 내려 닫기 */
let lb = { themes: null, ti: 0, i: 0 };
const Z = { s: 1, x: 0, y: 0 };
const lbBox = () => $('#lightbox');
const lbImg = () => $('#lightbox img');

function applyZ(anim) {
  const img = lbImg();
  img.style.transition = anim ? 'transform .25s ease' : 'none';
  img.style.transform = `translate(${Z.x}px, ${Z.y}px) scale(${Z.s})`;
}
function resetZ(anim = false) { Z.s = 1; Z.x = Z.y = 0; applyZ(anim); }
function clampZ() {
  const img = lbImg(), box = lbBox();
  const mx = Math.max(0, (img.offsetWidth * Z.s - box.clientWidth) / 2);
  const my = Math.max(0, (img.offsetHeight * Z.s - box.clientHeight) / 2);
  Z.x = Math.max(-mx, Math.min(mx, Z.x));
  Z.y = Math.max(-my, Math.min(my, Z.y));
}

export function openLightbox(themes, ti, i) {
  lb = { themes, ti, i };
  const box = lbBox();
  if (!box.classList.contains('open')) { box.classList.add('open'); pushBack(hideLightbox); }
  renderLB();
}
function hideLightbox() { lbBox().classList.remove('open'); resetZ(); }
function closeLightbox() {
  if (!lbBox().classList.contains('open')) return;
  hideLightbox();
  popBack(hideLightbox);
}
function renderLB() {
  const t = lb.themes[lb.ti], p = t.photos[lb.i];
  const img = lbImg();
  resetZ();
  img.onerror = () => { img.onerror = null; img.src = placeholderCanvas(t, lb.i, p.src, 800, 800).toDataURL(); };
  img.src = photoURL(p);
  img.alt = p.caption || `${t.title} ${lb.i + 1}`;
  $('#lightbox .cap').innerHTML = `${esc(p.caption || `${t.emoji} ${t.title}`)}<small>${lb.i + 1} / ${t.photos.length}</small>`;
}
function stepLB(d) {
  const n = lb.themes[lb.ti].photos.length;
  lb.i = (lb.i + d + n) % n;
  buzz(6);
  renderLB();
}

function bindLightboxGestures() {
  const box = lbBox();
  const pts = new Map();
  let g = null, lastTap = 0;
  // 확대 전 사진 중심 (화면 좌표)
  const center = () => {
    const r = lbImg().getBoundingClientRect();
    return { x: r.left + r.width / 2 - Z.x, y: r.top + r.height / 2 - Z.y };
  };
  box.addEventListener('pointerdown', e => {
    if (e.target.closest('button')) return;
    try { box.setPointerCapture(e.pointerId); } catch {}
    pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pts.size === 1) {
      g = { type: 'one', sx: e.clientX, sy: e.clientY, ox: Z.x, oy: Z.y, moved: false };
    } else if (pts.size === 2) {
      const [a, b] = [...pts.values()];
      const c = center(), mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
      g = { type: 'pinch', d: Math.hypot(a.x - b.x, a.y - b.y) || 1, s: Z.s, c, px: (mx - c.x - Z.x) / Z.s, py: (my - c.y - Z.y) / Z.s };
    }
  });
  box.addEventListener('pointermove', e => {
    if (!pts.has(e.pointerId) || !g) return;
    pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (g.type === 'pinch' && pts.size >= 2) {
      const [a, b] = [...pts.values()];
      Z.s = Math.max(1, Math.min(4, g.s * Math.hypot(a.x - b.x, a.y - b.y) / g.d));
      Z.x = (a.x + b.x) / 2 - g.c.x - Z.s * g.px;
      Z.y = (a.y + b.y) / 2 - g.c.y - Z.s * g.py;
      applyZ(false);
    } else if (g.type === 'one') {
      const dx = e.clientX - g.sx, dy = e.clientY - g.sy;
      if (Math.hypot(dx, dy) > 8) g.moved = true;
      if (Z.s > 1) { Z.x = g.ox + dx; Z.y = g.oy + dy; applyZ(false); return; }
      const img = lbImg();
      img.style.transition = 'none';
      img.style.transform = Math.abs(dx) > Math.abs(dy)
        ? `translateX(${dx}px)`
        : `translateY(${Math.max(0, dy)}px) scale(${1 - Math.min(0.15, Math.max(0, dy) / 1500)})`;
    }
  });
  const up = e => {
    if (!pts.has(e.pointerId)) return;
    pts.delete(e.pointerId);
    if (!g) return;
    if (g.type === 'pinch') {
      if (pts.size === 1) {
        const [a] = [...pts.values()];
        g = { type: 'one', sx: a.x, sy: a.y, ox: Z.x, oy: Z.y, moved: true };
      } else if (pts.size === 0) {
        g = null;
        if (Z.s < 1.05) resetZ(true); else { clampZ(); applyZ(true); }
      }
      return;
    }
    if (pts.size > 0) return;
    const dx = e.clientX - g.sx, dy = e.clientY - g.sy, moved = g.moved;
    g = null;
    if (e.type === 'pointercancel') { if (Z.s > 1) { clampZ(); applyZ(true); } else resetZ(true); return; }
    if (!moved) {
      // 두 번 탭 → 확대 / 원래대로
      const now = performance.now();
      if (now - lastTap < 320) {
        lastTap = 0;
        if (Z.s > 1) resetZ(true);
        else {
          const c = center();
          Z.s = 2.5; Z.x = -(e.clientX - c.x) * 1.5; Z.y = -(e.clientY - c.y) * 1.5;
          clampZ(); applyZ(true);
        }
      } else lastTap = now;
      return;
    }
    if (Z.s > 1) { clampZ(); applyZ(true); return; }
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) stepLB(dx < 0 ? 1 : -1);
    else if (dy > 110 && dy > Math.abs(dx)) closeLightbox();
    else resetZ(true);
  };
  box.addEventListener('pointerup', up);
  box.addEventListener('pointercancel', up);
}

/* ---------- 팝업 윗부분을 아래로 끌어서 닫기 ---------- */
function bindSheetDrag() {
  const sheet = $('#modal .sheet'), top = $('#modal .sheet-top');
  let d = null;
  top.addEventListener('pointerdown', e => {
    if (e.target.closest('button')) return;
    d = { id: e.pointerId, y: e.clientY, t: performance.now() };
    try { top.setPointerCapture(e.pointerId); } catch {}
    sheet.style.transition = 'none';
  });
  top.addEventListener('pointermove', e => {
    if (!d || e.pointerId !== d.id) return;
    sheet.style.transform = `translateY(${Math.max(0, e.clientY - d.y)}px)`;
  });
  const end = e => {
    if (!d || e.pointerId !== d.id) return;
    const dy = e.clientY - d.y, fast = dy > 40 && performance.now() - d.t < 250;
    d = null;
    sheet.style.transition = '';
    if (e.type === 'pointerup' && (dy > 100 || fast)) closeModal();
    else sheet.style.transform = '';
  };
  top.addEventListener('pointerup', end);
  top.addEventListener('pointercancel', end);
}

/* 가+ : 글자 크게 (팝업·글로 보기 공통, 기억해 둠) */
const FS_KEY = 'family-bigfont';
export const isBigFont = () => document.documentElement.classList.contains('big');
export function setBigFont(on) {
  document.documentElement.classList.toggle('big', on);
  try { localStorage.setItem(FS_KEY, on ? '1' : '0'); } catch {}
  document.querySelectorAll('.fs-toggle').forEach(b => { b.textContent = on ? '가-' : '가+'; b.setAttribute('aria-label', on ? '글자 작게' : '글자 크게'); });
}

export function initUI() {
  try { if (localStorage.getItem(FS_KEY) === '1') setBigFont(true); } catch {}
  document.addEventListener('click', e => { if (e.target.closest('.fs-toggle')) { buzz(6); setBigFont(!isBigFont()); } });
  $('#modal-close').onclick = closeModal;
  $('#modal .backdrop').onclick = closeModal;
  const box = lbBox();
  box.querySelector('.lb-close').onclick = closeLightbox;
  box.querySelector('.prev').onclick = () => stepLB(-1);
  box.querySelector('.next').onclick = () => stepLB(1);
  bindLightboxGestures();
  bindSheetDrag();
  // PC 키보드
  addEventListener('keydown', e => {
    if (box.classList.contains('open')) {
      if (e.key === 'ArrowRight') stepLB(1);
      if (e.key === 'ArrowLeft') stepLB(-1);
      if (e.key === 'Escape') closeLightbox();
    } else if (e.key === 'Escape') closeModal();
  });
}

export { esc };
