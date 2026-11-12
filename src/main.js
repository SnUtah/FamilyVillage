import * as UI from './ui.js';
import * as V from './views.js';
import * as Game from './game.js';
import { openTextView } from './textview.js';
import { formatKDate, photoThemes, buzz, isDemoClock, dayKey } from './common.js';
import { refresh, add, isUnlocked, checkCode, loadLock, lockInfo } from './store.js';
import { villageName, sinceDays, todayEvents, me, meId, setMe, isGuest, callName, unreadForMe, visitedOn } from './family.js';
import { sound } from './sound.js';
import { getSeason, nextSeason, SEASON_INFO } from './season.js';

/* =========================================================
   시작 화면 & 3D 마을 불러오기
   🔒 가족 암호 → 🙋 나는 누구예요? → 입장
   3D를 쓸 수 없는 휴대폰에서는 자동으로 "📖 글로 보기"로 동작합니다.
   ========================================================= */
const W = window.FAMILY;
const $ = s => document.querySelector(s);
const LOAD_MSG = [[10, '마을을 짓는 중… 🏡'], [35, '꽃을 심는 중… 🌷'], [65, '집에 불을 켜는 중… 💡'], [85, '사진을 거는 중… 🖼️']];
let ready = false;
const setLoad = p => {
  $('#loadbar').style.width = p + '%';
  const btn = $('#btn-enter');
  if (!ready) { const m = LOAD_MSG.filter(([k]) => p >= k).pop(); if (m) btn.textContent = m[1]; }
};

/* ---------- 휴대폰 화면 다듬기 ---------- */
// 아이폰 사파리의 두 손가락 화면 확대 막기 (걷기 조작과 겹치지 않도록)
['gesturestart', 'gesturechange'].forEach(t => document.addEventListener(t, e => e.preventDefault()));
// 키보드가 올라와도 글 쓰는 창이 가려지지 않도록
if (window.visualViewport) {
  const vv = window.visualViewport;
  const upd = () => document.documentElement.style.setProperty('--kb', `${Math.max(0, Math.round(innerHeight - vv.height - vv.offsetTop))}px`);
  vv.addEventListener('resize', upd);
  vv.addEventListener('scroll', upd);
}

/* ---------- 시작 화면 ---------- */
const title = villageName();
document.title = title;
$('#i-title').textContent = title;
$('#h-names').textContent = title;
const days = sinceDays();
$('#i-sub').innerHTML = `${formatKDate().date}${days > 0 ? `<br>함께한 지 <b>${days.toLocaleString()}일째</b>` : ''}`;
$('#h-dday').textContent = days > 0 ? `${days.toLocaleString()}일째` : '';
const evs = todayEvents();
if (evs.length) {
  const box = $('#today');
  box.hidden = false;
  box.querySelector('.t-now').textContent = evs.map(e => `${e.emoji || '📌'} 오늘은 ${e.kind === 'birthday' ? `${callName(e.member)} 생일` : e.title}이에요!`).join('  ');
}
if (isDemoClock()) $('#demo-badge').hidden = false;
UI.initUI();

let game = null, started = false, lockReady = false;

/* ---------- (🔒 암호가 걸려 있으면) → 🙋 → 입장 ---------- */
function paintSteps() {
  if (!lockReady) {   // 암호가 걸려 있는지 확인 중 (시트 연결 시 잠깐)
    $('#lock').hidden = $('#who').hidden = $('#me-line').hidden = true;
    if (ready) { $('#btn-enter').disabled = true; $('#btn-enter').textContent = '가족 마을 확인 중…'; }
    return;
  }
  const unlocked = isUnlocked(), chosen = meId();
  const hint = lockInfo().hint;
  $('#lock-hint').textContent = hint ? `힌트: ${hint}` : '';
  $('#lock').hidden = unlocked;
  $('#who').hidden = !unlocked || !!chosen;
  $('#me-line').hidden = !unlocked || !chosen;
  $('.btn-row').hidden = !unlocked;
  if (unlocked && !chosen) $('#who-grid').innerHTML = V.whoHTML('');
  bindWho();
  if (unlocked && chosen) {
    const look = V.currentLook();
    $('#me-avatar').innerHTML = UI.avatarHTML(look, 'big');
    $('#me-name').textContent = isGuest() ? '손님으로 구경해요' : `${callName(chosen)}(으)로 들어가요`;
    $('#me-sub').textContent = isGuest() ? '편지는 쓸 수 있고, 질문·하트·물 주기는 가족만 해요' : '편지·답·하트가 이 이름으로 남아요';
  }
  const btn = $('#btn-enter');
  if (!ready) return;
  btn.disabled = !unlocked || !chosen;
  btn.textContent = !unlocked ? '🔒 가족 암호를 넣어 주세요' : !chosen ? '🙋 나를 골라 주세요' : game ? '마을에 들어가기 🏡' : '📖 글로 보기';
}
function bindWho() {
  document.querySelectorAll('#who-grid .who-btn').forEach(b => b.onclick = () => {
    buzz(10); sound.sfx('pop');
    setMe(b.dataset.id);
  });
}
addEventListener('family:me', () => {
  if (isGuest()) { try { if (!localStorage.getItem('family-guest-look')) localStorage.setItem('family-guest-look', JSON.stringify(V.currentLook())); } catch {} }
  game?.setCharacter(V.currentLook());
  paintSteps();
});
$('#btn-change').onclick = () => { $('#who-grid').innerHTML = V.whoHTML(meId()); bindWho(); $('#who').hidden = false; $('#me-line').hidden = true; };
$('#lock').onsubmit = async e => {
  e.preventDefault();
  const inp = $('#lock-in'), btn = $('#lock-btn');
  btn.disabled = true; btn.textContent = '확인 중…';
  const r = await checkCode(inp.value);
  btn.disabled = false; btn.textContent = '열기';
  if (r.ok) { buzz(20); sound.sfx('chime'); refresh({ force: true }); paintSteps(); return; }
  inp.select();
  buzz(60);
  $('#lock').classList.remove('shake'); void $('#lock').offsetWidth; $('#lock').classList.add('shake');
  UI.toast(r.error === 'network' ? '연결이 안 돼요. 잠시 뒤 다시 해 주세요' : '암호가 달라요 🔒');
};
addEventListener('family:locked', () => { UI.toast('가족 암호가 바뀌었어요. 다시 들어와 주세요', 4000); if (!started) paintSteps(); });
/* ⚙️ 가족 암호 설정 (걸기 · 바꾸기 · 없애기) */
const openLockSettings = () => V.showLockSettings(() => { paintSteps(); if (isUnlocked()) refresh({ force: true }); });
$('#btn-lock-set').onclick = openLockSettings;
paintSteps();
/* 암호가 걸려 있는지 확인한 뒤 시작 단계를 그림. 들어갈 수 있으면 소식도 미리 받아 둠 */
loadLock().then(() => { lockReady = true; paintSteps(); if (isUnlocked()) refresh(); });
setLoad(10);

/* ---------- PC 소개 패널: 둘러본 곳 체크, 넓게 보기 ---------- */
const VISIT_KEY = 'family-visited';
let visited = new Set();
try { visited = new Set(JSON.parse(localStorage.getItem(VISIT_KEY) || '[]')); } catch {}
function paintVisits() {
  document.querySelectorAll('#visits li').forEach(li => li.classList.toggle('done', visited.has(li.dataset.id)));
  const n = visited.size, total = document.querySelectorAll('#visits li').length;
  const c = $('#visit-count');
  if (c) c.textContent = n ? `${n}/${total}` : '';
}
addEventListener('wv:visit', e => {
  if (visited.has(e.detail)) return;
  visited.add(e.detail);
  try { localStorage.setItem(VISIT_KEY, JSON.stringify([...visited])); } catch {}
  paintVisits();
  if (visited.size === document.querySelectorAll('#visits li').length) setTimeout(() => { UI.toast('🏅 마을의 모든 곳을 둘러봤어요!', 3600); UI.confetti(); }, 800);
});
paintVisits();
$('#btn-wide')?.addEventListener('click', () => {
  const on = document.body.classList.toggle('wide');
  $('#btn-wide').textContent = on ? '📱 휴대폰 보기' : '🖥 넓게 보기';
  game?.resize();
});

/* 👣 오늘 처음 들어오면 출석 도장 */
function stampVisit() {
  const id = meId(), day = dayKey();
  if (!me() || visitedOn(id, day)) return;
  add('visits', { id: `${id}-${day}`, who: id, day });
}
/* 💌 나에게 온 새 편지 알림 (시트에서 늦게 도착해도 한 번) */
let mailNoticed = false;
function noticeMail(delay = 4800) {
  if (mailNoticed || !me()) return;
  const n = unreadForMe().length;
  if (!n) return;
  mailNoticed = true;
  // 창이 열려 있으면 다른 안내를 덮지 않도록 닫힐 때까지 기다렸다가
  let tries = 0;
  const say = () => {
    if (UI.isOverlayOpen() && tries++ < 20) { setTimeout(say, 1500); return; }
    UI.toast(`💌 나에게 온 편지가 ${unreadForMe().length || n}통 있어요 · 내 집 우체통에 깃발이 올라갔어요`, 4200);
  };
  setTimeout(say, delay);
}

/* ---------- 3D 마을 ---------- */
function hasWebGL() {
  try {
    const c = document.createElement('canvas');
    const gl = c.getContext('webgl2') || c.getContext('webgl');
    if (!gl) return false;
    gl.getExtension('WEBGL_lose_context')?.loseContext();   // 테스트용 컨텍스트는 바로 돌려줌
    return true;
  } catch { return false; }
}

async function boot() {
  // 9초 안에 마을이 준비되지 않으면 글로 보기라도 열 수 있게
  const watchdog = setTimeout(() => {
    if (ready) return;
    ready = true;
    $('#intro-help').textContent = '마을이 늦게 열리고 있어요. 먼저 글로 보기로 둘러봐 주세요';
    paintSteps();
    $('#btn-enter').onclick = () => openText();
  }, 9000);
  if (hasWebGL()) {
    try {
      game = await Game.init({ character: V.currentLook(), onProgress: setLoad });
    } catch (err) {
      console.error('3D 마을을 불러오지 못해 글로 보기로 전환합니다', err);
      game = null;
      $('#app').innerHTML = '';
    }
  }
  clearTimeout(watchdog);
  if (!game) document.body.classList.add('no3d');
  setLoad(100);
  ready = true;
  V.hooks.onSent = game?.letterSent || null;
  V.hooks.takePhoto = game?.takePhoto || null;

  /* ---------- 입장 ---------- */
  const bgm = $('#bgm');
  const soundBtn = $('#btn-sound');
  const paintSound = () => { soundBtn.textContent = (W.bgm ? !bgm.paused : sound.enabled) ? '🔊' : '🔇'; };
  function start3D() {
    if (started || !game || !isUnlocked() || !meId()) return;
    started = true;
    document.body.classList.add('playing');
    $('#intro').classList.add('hide');
    if (W.bgm) bgm.play().then(paintSound).catch(() => {});
    game.start({ hint: true });
    paintSound();
    stampVisit();
    noticeMail();
    if (!W.bgm && !sound.saved()) setTimeout(() => UI.toast('🔊 오른쪽 위 버튼으로 오르골 소리를 켤 수 있어요', 3400), 9500);
  }
  addEventListener('family:data', () => { if (started) { stampVisit(); noticeMail(1200); } });
  function openText(section) {
    if (!isUnlocked()) { UI.toast('🔒 가족 암호를 먼저 넣어 주세요'); return; }
    $('#intro').classList.add('hide');
    stampVisit();
    openTextView({
      canPlay: !!game && !!meId(),
      onPlay: start3D,
      onSent: game?.letterSent,
      onClose: () => { if (!started) $('#intro').classList.remove('hide'); },
      section,
    });
  }

  /* ---------- 바로가기 메뉴 ---------- */
  const themes = game ? game.themes : photoThemes();
  const onPick = () => game?.setCharacter(V.currentLook());
  const MENU = () => [
    { emoji: '🏡', label: '우리 가족', go: V.showFamily },
    { emoji: '💬', label: '오늘의 질문', go: () => V.showQuestion() },
    { emoji: '✉️', label: '안부 우체통', go: () => UI.showMailbox(game?.letterSent) },
    { emoji: '📅', label: '가족 달력', go: V.showCalendar },
    { emoji: '🗳️', label: '투표함', go: V.showPolls },
    { emoji: '🌱', label: '우리 가족 나무', go: V.showTree },
    game
      ? { emoji: '🖼️', label: '가족 사진관', go: () => { UI.closeModal(); game.enterMuseum(); } }
      : { emoji: '📚', label: '전체 앨범', go: () => UI.showAlbum(themes) },
    { emoji: '❓', label: '가족 퀴즈', go: UI.showQuiz },
    { emoji: '🗺️', label: '모이는 곳', go: UI.showDirections },
    ...(me() ? [{ emoji: '🏠', label: '내 집', go: () => V.showMember(meId()) }] : []),
    { emoji: '🎨', label: '캐릭터 꾸미기', go: V.showLook },
    { emoji: SEASON_INFO[getSeason()].emoji, label: `계절: ${SEASON_INFO[getSeason()].label}`, go: () => { UI.closeModal(); const s = nextSeason(); UI.toast(`${SEASON_INFO[s].toast} · 메뉴에서 또 바꿀 수 있어요`, 3000); } },
    { emoji: '🙋', label: '나는 누구?', go: () => V.showWho(onPick) },
    { emoji: '🔒', label: '가족 암호', go: openLockSettings },
    ...(game ? [
      { emoji: '🚶', label: '자동 투어', go: () => { UI.closeModal(); game.startTour(); } },
      { emoji: '🌙', label: '낮 · 밤 바꾸기', go: () => { UI.closeModal(); game.cycleTime(); } },
    ] : []),
  ];
  $('#btn-menu').onclick = () => UI.showMenu(MENU());
  $('#btn-text-hud').onclick = () => openText();
  $('#btn-desk-text')?.addEventListener('click', () => openText());

  /* ---------- 소리: mp3가 있으면 그것을, 없으면 합성 오르골 ---------- */
  if (W.bgm) {
    bgm.src = W.bgm;
    soundBtn.hidden = false;
    soundBtn.onclick = () => {
      if (bgm.paused) bgm.play().then(paintSound).catch(() => {});
      else { bgm.pause(); paintSound(); }
    };
  } else if (game) {
    soundBtn.hidden = false;
    paintSound();
    soundBtn.onclick = () => {
      const on = sound.setEnabled(!sound.enabled);
      paintSound();
      UI.toast(on ? '🔊 오르골 배경음을 켰어요' : '🔇 소리를 껐어요');
    };
  }

  const enterBtn = $('#btn-enter');
  enterBtn.onclick = () => (game ? start3D() : openText());
  $('#btn-text').onclick = () => openText();
  $('#btn-tour-start').onclick = () => {
    if (!game) { openText(); return; }
    if (!isUnlocked() || !meId()) { paintSteps(); return; }
    start3D();
    setTimeout(() => game.startTour(), 1400);
  };
  paintSteps();
}
boot();
