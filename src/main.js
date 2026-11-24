import { L, isKo, setLang } from './i18n.js';
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
   Start screen & loading the 3D village
   🔒 Family password → 🙋 Who are you? → enter
   On phones that cannot run 3D, it works as "📖 Text view" automatically.
   ========================================================= */
const W = window.FAMILY;
const $ = s => document.querySelector(s);
const LOAD_MSG = L([[10, '마을을 짓는 중… 🏡'], [35, '꽃을 심는 중… 🌷'], [65, '집에 불을 켜는 중… 💡'], [85, '사진을 거는 중… 🖼️']],
  [[10, 'Building the village… 🏡'], [35, 'Planting flowers… 🌷'], [65, 'Turning on the lights… 💡'], [85, 'Hanging photos… 🖼️']]);
let ready = false;
const setLoad = p => {
  $('#loadbar').style.width = p + '%';
  const btn = $('#btn-enter');
  if (!ready) { const m = LOAD_MSG.filter(([k]) => p >= k).pop(); if (m) btn.textContent = m[1]; }
};

/* ---------- Phone screen tweaks ---------- */
// Block two-finger zoom in iPhone Safari (so it does not clash with walking)
['gesturestart', 'gesturechange'].forEach(t => document.addEventListener(t, e => e.preventDefault()));
// Keep the writing form visible when the keyboard comes up
if (window.visualViewport) {
  const vv = window.visualViewport;
  const upd = () => document.documentElement.style.setProperty('--kb', `${Math.max(0, Math.round(innerHeight - vv.height - vv.offsetTop))}px`);
  vv.addEventListener('resize', upd);
  vv.addEventListener('scroll', upd);
}

/* ---------- 📱 Like an app: once installed on the home screen it opens even offline (online address only, not the single-file version) ---------- */
if ('serviceWorker' in navigator && location.protocol === 'https:' && document.querySelector('link[rel="manifest"]')) {
  addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}
if (UI.isInstalled()) document.documentElement.classList.add('installed');

/* ---------- Start screen ---------- */
const title = villageName();
document.title = title;
$('#i-title').textContent = title;
$('#h-names').textContent = title;
const days = sinceDays();
$('#i-sub').innerHTML = L(`${formatKDate().date}${days > 0 ? `<br>함께한 지 <b>${days.toLocaleString('ko-KR')}일째</b>` : ''}`,
  `${formatKDate().date}${days > 0 ? `<br>Together for <b>${days.toLocaleString('en-US')} days</b>` : ''}`);
$('#h-dday').textContent = days > 0 ? L(`${days.toLocaleString('ko-KR')}일째`, `Day ${days.toLocaleString('en-US')}`) : '';
const evs = todayEvents();
if (evs.length) {
  const box = $('#today');
  box.hidden = false;
  box.querySelector('.t-now').textContent = evs.map(e => L(`${e.emoji || '📌'} 오늘은 ${e.kind === 'birthday' ? `${callName(e.member)} 생일` : e.title}이에요!`,
    `${e.emoji || '📌'} Today is ${e.kind === 'birthday' ? `${callName(e.member)}'s birthday` : e.title}`)).join('  ');
}
if (isDemoClock()) $('#demo-badge').hidden = false;
UI.initUI();

/* Language switch: top right of the start screen (and one item in the ☰ menu) */
$('#btn-lang')?.addEventListener('click', () => setLang(isKo ? 'en' : 'ko'));

let game = null, started = false, lockReady = false;

/* ---------- (🔒 if a password is set) → 🙋 → enter ---------- */
function paintSteps() {
  if (!lockReady) {   // still checking whether a password is set (briefly, with a sheet connected)
    $('#lock').hidden = $('#who').hidden = true;
    if (ready) { $('#btn-enter').disabled = true; $('#btn-enter').textContent = L('가족 마을 확인 중…', 'Checking the family village…'); }
    return;
  }
  const unlocked = isUnlocked(), chosen = meId();
  const hint = lockInfo().hint;
  $('#lock-hint').textContent = hint ? L(`힌트: ${hint}`, `Hint: ${hint}`) : '';
  $('#lock').hidden = unlocked;
  $('#who').hidden = !unlocked;
  $('.btn-row').hidden = !unlocked || !chosen;
  $('#intro-help').hidden = !!chosen;
  if (unlocked) paintMe(chosen);
  $('#btn-look').hidden = !chosen || isGuest() || !game;
  $('#btn-guest').hidden = !!chosen;
  $('#btn-who-other').textContent = chosen ? L('🙋 다른 캐릭터', '🙋 Switch character') : L('🙋 이미 만든 캐릭터가 있어요', '🙋 I already have a character');
  const btn = $('#btn-enter');
  if (!ready) return;
  btn.disabled = !unlocked;
  btn.textContent = !unlocked ? L('🔒 암호를 넣어 주세요', '🔒 Enter the password') : !chosen ? L('✨ 내 캐릭터 만들기', '✨ Create my character')
    : !game ? L('📖 글로 보기', '📖 Text view') : isGuest() ? L('손님으로 들어가기 🏡', 'Enter as a guest 🏡') : L(`${josa(callName(chosen), '으로/로')} 들어가기 🏡`, `Enter as ${callName(chosen)} 🏡`);
}
/* 🙋 My character card — on a first visit, the neighbors' faces + 'pick a nickname and a look to get your own house' */
function paintMe(chosen) {
  const m = me(), box = $('#me-card');
  if (m) {
    box.className = 'me-card';
    box.innerHTML = `<span class="me-pic">${V.picHTML(m.id, m.look)}</span><div class="me-text"><b>${UI.esc(callName(m.id))}</b><span>${L('편지·답·하트가 이 이름으로 남아요', 'Your letters, answers and hearts go out under this name')}</span></div>`;
  } else if (chosen) {
    box.className = 'me-card guest';
    box.innerHTML = `<span class="me-pic"><span class="guest-ic">👀</span></span><div class="me-text"><b>${L('손님으로 구경해요', 'Just looking, as a guest')}</b><span>${L('캐릭터를 만들면 마을에 내 집이 생겨요', 'Create a character to get your own house in the village')}</span></div>`;
  } else {
    const ns = members().slice(0, 6);
    box.className = 'me-card new';
    box.innerHTML = `${ns.length ? `<div class="neighbors">${ns.map(n => `<span class="nb">${V.picHTML(n.id, n.look)}</span>`).join('')}</div>` : ''}<div class="me-text"><b>${L('처음 오셨네요! 👋', 'First time here? 👋')}</b><span>${L('닉네임과 모습을 정하면 마을에 내 집이 생겨요', 'Pick a nickname and a look, and you get your own house in the village')}</span></div>`;
  }
}
/* Snap the 3D character and put the picture on the card (once the village is ready, and after a look change) */
const portraitKeys = new Map();
function paintPortraits(ids) {
  if (!game?.portrait) return;
  const list = ids ? members().filter(m => ids.includes(m.id)) : members();
  list.forEach(m => {
    const key = JSON.stringify(m.look);
    if (portraitKeys.get(m.id) === key) return;   // same look → no new picture
    portraitKeys.set(m.id, key);
    const url = game.portrait(m.look);
    V.setPortrait(m.id, url);
  });
  if (!started && lockReady && isUnlocked()) paintMe(meId());
}
addEventListener('family:look', () => { const id = meId(); if (id && !isGuest()) setTimeout(() => paintPortraits([id]), 0); });
addEventListener('family:data', () => { if (!started) paintPortraits(); });   // if someone else in the family changed their look
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
  btn.disabled = true; btn.textContent = L('확인 중…', 'Checking…');
  const r = await checkCode(inp.value);
  btn.disabled = false; btn.textContent = L('열기', 'Unlock');
  if (r.ok) { buzz(20); sound.sfx('chime'); refresh({ force: true }); paintSteps(); return; }
  inp.select();
  buzz(60);
  $('#lock').classList.remove('shake'); void $('#lock').offsetWidth; $('#lock').classList.add('shake');
  UI.toast(r.error === 'network' ? L('연결이 안 돼요. 잠시 뒤 다시 해 주세요', "Can't connect. Please try again in a moment") : L('암호가 달라요 🔒', 'Wrong password 🔒'));
};
addEventListener('family:locked', () => { UI.toast(L('가족 암호가 바뀌었어요. 다시 들어와 주세요', 'The family password has changed. Please enter the new one'), 4000); if (!started) paintSteps(); });
/* ⚙️ Family password settings (set · change · remove) */
const openLockSettings = () => V.showLockSettings(() => { paintSteps(); if (isUnlocked()) refresh({ force: true }); });
$('#btn-lock-set').onclick = openLockSettings;
paintSteps();
/* Draw the start steps once we know whether a password is set. If the visitor can come in, fetch the news ahead of time too */
loadLock().then(() => { lockReady = true; paintSteps(); if (isUnlocked()) refresh(); });
setLoad(10);

/* ---------- PC side panel: places visited, wide view ---------- */
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
  if (visited.size === document.querySelectorAll('#visits li').length) setTimeout(() => { UI.toast(L('🏅 마을의 모든 곳을 둘러봤어요!', "🏅 You've visited every spot in the village"), 3600); UI.confetti(); }, 800);
});
paintVisits();
$('#btn-wide')?.addEventListener('click', () => {
  const on = document.body.classList.toggle('wide');
  $('#btn-wide').textContent = on ? L('📱 휴대폰 보기', '📱 Phone view') : L('🖥 넓게 보기', '🖥 Wide view');
  game?.resize();
});

/* 👣 First visit today → attendance stamp */
function stampVisit() {
  const id = meId(), day = dayKey();
  if (!me() || visitedOn(id, day)) return;
  add('visits', { id: `${id}-${day}`, who: id, day });
}
/* 💌 Notice of new letters for me (once, even if they arrive late from the sheet) */
let mailNoticed = false;
function noticeMail(delay = 4800) {
  if (mailNoticed || !me()) return;
  const n = unreadForMe().length;
  if (!n) return;
  mailNoticed = true;
  // if a window is open, wait until it closes so this does not cover another message
  let tries = 0;
  const say = () => {
    if (UI.isOverlayOpen() && tries++ < 20) { setTimeout(say, 1500); return; }
    const c = unreadForMe().length || n;
    UI.toast(L(`💌 나에게 온 편지가 ${c}통 있어요 · 내 집 우체통에 깃발이 올라갔어요`,
      `💌 You have ${c === 1 ? 'a new letter' : `${c} new letters`} · The flag is up on your mailbox`), 4200);
  };
  setTimeout(say, delay);
}

/* ---------- 3D village ---------- */
function hasWebGL() {
  try {
    const c = document.createElement('canvas');
    const gl = c.getContext('webgl2') || c.getContext('webgl');
    if (!gl) return false;
    gl.getExtension('WEBGL_lose_context')?.loseContext();   // give the test context back right away
    return true;
  } catch { return false; }
}

async function boot() {
  // If the village is not ready within 9 seconds, at least let people open the text view
  const watchdog = setTimeout(() => {
    if (ready) return;
    ready = true;
    $('#intro-help').textContent = L('마을이 늦게 열리고 있어요. 먼저 글로 보기로 둘러봐 주세요', 'The village is slow to load. Read the text view for now');
    paintSteps();
    $('#btn-enter').onclick = () => openText();
  }, 9000);
  if (hasWebGL()) {
    try {
      game = await Game.init({ character: V.currentLook(), onProgress: setLoad });
    } catch (err) {
      console.error('Could not load the 3D village; switching to the text view', err);
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
  V.hooks.portrait = game?.portrait || null;   // the customizing preview uses the 3D character too

  /* ---------- Entering ---------- */
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
    if (!isUnlocked()) { UI.toast(L('🔒 가족 암호를 먼저 넣어 주세요', '🔒 Enter the family password first')); return; }
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

  /* ---------- Shortcut menu ---------- */
  const themes = game ? game.themes : photoThemes();
  const onPick = () => game?.setCharacter(V.currentLook());
  const MENU = () => [
    { emoji: '🏡', label: L('우리 가족', 'Our family'), go: V.showFamily },
    { emoji: '💬', label: L('오늘의 질문', 'Question of the day'), go: () => V.showQuestion() },
    { emoji: '✉️', label: L('안부 우체통', 'Mailbox'), go: () => UI.showMailbox(game?.letterSent) },
    { emoji: '📅', label: L('가족 달력', 'Family calendar'), go: V.showCalendar },
    { emoji: '🗳️', label: L('투표함', 'Polls'), go: V.showPolls },
    { emoji: '🌱', label: L('우리 가족 나무', 'Our family tree'), go: V.showTree },
    game
      ? { emoji: '🖼️', label: L('가족 사진관', 'Photo gallery'), go: () => { UI.closeModal(); game.enterMuseum(); } }
      : { emoji: '📚', label: L('전체 앨범', 'Full album'), go: () => UI.showAlbum(themes) },
    { emoji: '❓', label: L('가족 퀴즈', 'Family quiz'), go: UI.showQuiz },
    { emoji: '🗺️', label: L('모이는 곳', 'Meeting place'), go: UI.showDirections },
    // 🙋 Me
    ...(me() ? [{ g: 'me', emoji: '🏠', label: L('내 집', 'My house'), go: () => V.showMember(meId()) }] : []),
    ...(me() ? [{ g: 'me', emoji: '🎨', label: L('캐릭터 꾸미기', 'Customize my character'), go: V.showLook }] : [{ g: 'me', emoji: '✨', label: L('내 캐릭터 만들기', 'Create my character'), go: () => V.showCreator(onPick) }]),
    { g: 'me', emoji: '🙋', label: L('다른 캐릭터로', 'Switch character'), go: () => V.showWho(onPick) },
    // ⚙️ View · settings
    { g: 'set', emoji: '📖', label: L('글로 보기', 'Text view'), go: () => { UI.closeModal(); openText(); } },
    { g: 'set', emoji: SEASON_INFO[getSeason()].emoji, label: L(`계절: ${SEASON_INFO[getSeason()].label}`, `Season: ${SEASON_INFO[getSeason()].label}`), go: () => { UI.closeModal(); const s = nextSeason(); UI.toast(L(`${SEASON_INFO[s].toast} · 메뉴에서 또 바꿀 수 있어요`, `${SEASON_INFO[s].toast} · You can change it again in the menu`), 3000); } },
    ...(game ? [
      { g: 'set', emoji: '🌙', label: L('낮 · 밤 바꾸기', 'Day · night'), go: () => { UI.closeModal(); game.cycleTime(); } },
      { g: 'set', emoji: '🚶', label: L('자동 투어', 'Auto tour'), go: () => { UI.closeModal(); game.startTour(); } },
    ] : []),
    { g: 'set', emoji: '🔒', label: L('가족 암호', 'Family password'), go: openLockSettings },
    ...(UI.isInstalled() ? [] : [{ g: 'set', emoji: '📱', label: L('앱으로 설치', 'Install as an app'), go: UI.installApp }]),
    // language: shows the other language
    { g: 'set', emoji: '🌐', label: L('English', '한국어'), lang: isKo ? 'en' : 'ko', go: switchFromMenu },
  ];
  /* Language from the ☰ menu: close the sheet first (it pops its history entry), then reload */
  function switchFromMenu() {
    let done = false;
    const go = () => { if (!done) { done = true; setLang(isKo ? 'en' : 'ko'); } };
    addEventListener('popstate', go, { once: true });
    UI.closeModal();
    setTimeout(go, 500);
  }
  $('#btn-menu').onclick = () => UI.showMenu(MENU());
  $('#btn-text-hud').onclick = () => openText();
  $('#btn-desk-text')?.addEventListener('click', () => openText());

  /* ---------- Sound: the mp3 if there is one, otherwise the synthesized music box ---------- */
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
      UI.toast(on ? L('🔊 오르골 배경음을 켰어요', '🔊 Music box on') : L('🔇 소리를 껐어요', '🔇 Sound off'));
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
