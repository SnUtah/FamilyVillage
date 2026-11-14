import * as UI from './ui.js';
import * as V from './views.js';
import * as Game from './game.js';
import { openTextView } from './textview.js';
import { formatKDate, photoThemes, buzz, isDemoClock, dayKey, josa } from './common.js';
import { refresh, add, isUnlocked, checkCode, loadLock, lockInfo } from './store.js';
import { villageName, sinceDays, todayEvents, me, meId, setMe, isGuest, callName, unreadForMe, visitedOn, members } from './family.js';
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

/* ---------- 📱 앱처럼: 홈 화면에 설치하면 인터넷이 끊겨도 열리게 (인터넷 주소에서만, 한 파일 버전 제외) ---------- */
if ('serviceWorker' in navigator && location.protocol === 'https:' && document.querySelector('link[rel="manifest"]')) {
  addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}
if (UI.isInstalled()) document.documentElement.classList.add('installed');

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
    $('#lock').hidden = $('#who').hidden = true;
    if (ready) { $('#btn-enter').disabled = true; $('#btn-enter').textContent = '가족 마을 확인 중…'; }
    return;
  }
  const unlocked = isUnlocked(), chosen = meId();
  const hint = lockInfo().hint;
  $('#lock-hint').textContent = hint ? `힌트: ${hint}` : '';
  $('#lock').hidden = unlocked;
  $('#who').hidden = !unlocked;
  $('.btn-row').hidden = !unlocked || !chosen;
  $('#intro-help').hidden = !!chosen;
  if (unlocked) paintMe(chosen);
  $('#btn-look').hidden = !chosen || isGuest() || !game;
  $('#btn-guest').hidden = !!chosen;
  $('#btn-who-other').textContent = chosen ? '🙋 다른 캐릭터' : '🙋 이미 만든 캐릭터가 있어요';
  const btn = $('#btn-enter');
  if (!ready) return;
  btn.disabled = !unlocked;
  btn.textContent = !unlocked ? '🔒 암호를 넣어 주세요' : !chosen ? '✨ 내 캐릭터 만들기'
    : !game ? '📖 글로 보기' : isGuest() ? '손님으로 들어가기 🏡' : `${josa(callName(chosen), '으로/로')} 들어가기 🏡`;
}
/* 🙋 내 캐릭터 카드 — 처음이면 이웃들 얼굴 + '닉네임과 모습을 정하면 내 집이 생겨요' */
function paintMe(chosen) {
  const m = me(), box = $('#me-card');
  if (m) {
    box.className = 'me-card';
    box.innerHTML = `<span class="me-pic">${V.picHTML(m.id, m.look)}</span><div class="me-text"><b>${UI.esc(callName(m.id))}</b><span>편지·답·하트가 이 이름으로 남아요</span></div>`;
  } else if (chosen) {
    box.className = 'me-card guest';
    box.innerHTML = `<span class="me-pic"><span class="guest-ic">👀</span></span><div class="me-text"><b>손님으로 구경해요</b><span>캐릭터를 만들면 마을에 내 집이 생겨요</span></div>`;
  } else {
    const ns = members().slice(0, 6);
    box.className = 'me-card new';
    box.innerHTML = `${ns.length ? `<div class="neighbors">${ns.map(n => `<span class="nb">${V.picHTML(n.id, n.look)}</span>`).join('')}</div>` : ''}<div class="me-text"><b>처음 오셨네요! 👋</b><span>닉네임과 모습을 정하면 마을에 내 집이 생겨요</span></div>`;
  }
}
/* 3D 캐릭터 그림을 찍어 카드에 넣기 (마을이 준비된 뒤, 모습을 바꿨을 때) */
const portraitKeys = new Map();
function paintPortraits(ids) {
  if (!game?.portrait) return;
  const list = ids ? members().filter(m => ids.includes(m.id)) : members();
  list.forEach(m => {
    const key = JSON.stringify(m.look);
    if (portraitKeys.get(m.id) === key) return;   // 모습이 그대로면 다시 안 찍음
    portraitKeys.set(m.id, key);
    const url = game.portrait(m.look);
    V.setPortrait(m.id, url);
  });
  if (!started && lockReady && isUnlocked()) paintMe(meId());
}
addEventListener('family:look', () => { const id = meId(); if (id && !isGuest()) setTimeout(() => paintPortraits([id]), 0); });
addEventListener('family:data', () => { if (!started) paintPortraits(); });   // 다른 가족이 모습을 바꿨으면
addEventListener('family:me', () => {
  paintPortraits();
  if (isGuest()) { try { if (!localStorage.getItem('family-guest-look')) localStorage.setItem('family-guest-look', JSON.stringify(V.currentLook())); } catch {} }
  game?.setCharacter(V.currentLook());
  paintSteps();
});
$('#btn-look').onclick = () => { buzz(8); V.showLook(); };
$('#btn-who-other').onclick = () => { buzz(8); V.showWho(() => paintSteps()); };
$('#btn-guest').onclick = () => { buzz(8); setMe('guest'); };
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
  else paintPortraits();
  setLoad(100);
  ready = true;
  V.hooks.onSent = game?.letterSent || null;
  V.hooks.takePhoto = game?.takePhoto || null;
  V.hooks.portrait = game?.portrait || null;   // 꾸미기 미리보기도 3D 캐릭터로

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
    // 🙋 나
    ...(me() ? [{ g: 'me', emoji: '🏠', label: '내 집', go: () => V.showMember(meId()) }] : []),
    ...(me() ? [{ g: 'me', emoji: '🎨', label: '캐릭터 꾸미기', go: V.showLook }] : [{ g: 'me', emoji: '✨', label: '내 캐릭터 만들기', go: () => V.showCreator(onPick) }]),
    { g: 'me', emoji: '🙋', label: '다른 캐릭터로', go: () => V.showWho(onPick) },
    // ⚙️ 보기 · 설정
    { g: 'set', emoji: '📖', label: '글로 보기', go: () => { UI.closeModal(); openText(); } },
    { g: 'set', emoji: SEASON_INFO[getSeason()].emoji, label: `계절: ${SEASON_INFO[getSeason()].label}`, go: () => { UI.closeModal(); const s = nextSeason(); UI.toast(`${SEASON_INFO[s].toast} · 메뉴에서 또 바꿀 수 있어요`, 3000); } },
    ...(game ? [
      { g: 'set', emoji: '🌙', label: '낮 · 밤 바꾸기', go: () => { UI.closeModal(); game.cycleTime(); } },
      { g: 'set', emoji: '🚶', label: '자동 투어', go: () => { UI.closeModal(); game.startTour(); } },
    ] : []),
    { g: 'set', emoji: '🔒', label: '가족 암호', go: openLockSettings },
    ...(UI.isInstalled() ? [] : [{ g: 'set', emoji: '📱', label: '앱으로 설치', go: UI.installApp }]),
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
  enterBtn.onclick = () => { if (!meId()) { V.showCreator(() => paintSteps()); return; } game ? start3D() : openText(); };
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
