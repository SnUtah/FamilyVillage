import * as THREE from 'three';
import { L } from './i18n.js';
import { isMobile, formatKDate, damp, clamp } from './util.js';
import { buildEnvironment, spawnHearts, updateBursts, throwSprite, TIMES } from './world.js';
import { setSeason as pickSeason } from './season.js';
import { buildProps, MUSEUM_DOOR, BED } from './props.js';
import { buildMuseum } from './museum.js';
import { createCharacter } from './character.js';
import { buzz, now, photoURL } from './common.js';
import { list } from './store.js';
import { members, meId, villageName, birthdaysOn, andList } from './family.js';
import { sound } from './sound.js';
import * as UI from './ui.js';
import * as V from './views.js';

/* =========================================================
   3D village (made for a phone held upright)
   - Drag anywhere on the screen and a joystick appears for walking
   - Tap a spot to walk there; tap a name tag to walk there and open it
   - Before entering, the camera circles slowly over the village; on entering it swoops down to my character
   - 🚶 auto tour, 🌙 day · dusk · night, 📸 family photo zone, 🔥 campfire (roasting sweet potatoes), 🌷 family garden (letter = flower)
   - 🏘️ family lane: press 💗 in front of a house to send that person a heart
   ========================================================= */
const W = window.FAMILY;
const $ = s => document.querySelector(s);
const phone = $('#phone');
const view = { w: 1, h: 1, left: 0, top: 0 };
const isPortrait = () => view.w / view.h < 0.8;
const sleep = ms => new Promise(r => setTimeout(r, ms));

let renderer, scene, camera, sun, hemi, env, props, museum, player, marker;
let colliders = [], boxes = [];
let playing = false, current = null, lastTheme = -2, dpr = 1, lost = false, level = 0, markerT = 0, frame = 0;
/* Screen resolution scale: phone 1.75, PC 1.5, wide view 1.0; lowered step by step on slow devices */
function currentDpr() {
  let d = Math.min(devicePixelRatio || 1, isMobile ? 1.75 : 1.5);
  if (level >= 1) d = Math.min(d, 1.25);
  if (level >= 2) d = 1;
  if (document.body.classList.contains('wide')) d = Math.min(d, 1);
  return d;
}
/* With a weak GPU (e.g. integrated graphics) start light */
function weakGPU() {
  try {
    const gl = renderer.getContext();
    const ext = gl.getExtension('WEBGL_debug_renderer_info');
    const r = ext ? String(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL)) : '';
    return /Intel|Iris|UHD|HD Graphics|SwiftShader|llvmpipe|Mali-|Adreno \(TM\) [1-5]|PowerVR/i.test(r);
  } catch { return false; }
}
let character = { outfit: '#8FB8DE', hair: '#5A3A2A', longHair: false };
let timeMode = 'day', tour = null;
const clock = new THREE.Clock();
const SUN_OFFSET = new THREE.Vector3(16, 34, 14);
const state = {
  pos: new THREE.Vector3(0, 0, 31), vel: new THREE.Vector3(), yaw: Math.PI, y: 0, vy: 0,
  mode: 'out', busy: false, doorCooldown: 0, target: null, via: [], pending: null, targetT: 0, moveT: 0, stuckT: 0, swoopT: 0, posing: null,
};
const keys = new Set();
const joy = { x: 0, y: 0 };
const PZ = { x: -11, z: 19, ang: 0.5 };   // photo zone position · direction
const TOUR = ['family', 'mailbox', 'directions', 'campfire', 'question', 'calendar', 'poll', 'quiz', 'house', 'tree', 'photozone', 'museum'];
const visit = id => { try { dispatchEvent(new CustomEvent('wv:visit', { detail: id })); } catch {} };

/* ---------- Start ---------- */
export async function init({ character: c, onProgress = () => {} } = {}) {
  if (c) character = { ...character, ...c };
  // wait for the fonts used on canvases (up to 3 seconds)
  await Promise.race([
    Promise.all(['40px "Jua"', '40px "Gowun Dodum"', '40px "Gaegu"'].map(f => document.fonts.load(f))),
    new Promise(r => setTimeout(r, 3000)),
  ]);
  onProgress(35);

  measure();
  const lowEnd = isMobile && ((navigator.deviceMemory && navigator.deviceMemory <= 2) || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4));
  renderer = new THREE.WebGLRenderer({ antialias: !lowEnd, powerPreference: 'high-performance' });
  dpr = currentDpr();
  renderer.setPixelRatio(dpr);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;   // much lighter than soft shadows (PCFSoft)
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  $('#app').appendChild(renderer.domElement);
  // recover if the graphics drop out for a moment (e.g. coming back from the background)
  renderer.domElement.addEventListener('webglcontextlost', e => { e.preventDefault(); lost = true; UI.toast(L('화면을 다시 그리는 중…', 'Redrawing the screen…')); });
  renderer.domElement.addEventListener('webglcontextrestored', () => { lost = false; renderer.setPixelRatio(dpr); renderer.setSize(view.w, view.h); snapCamera(); });

  scene = new THREE.Scene();
  scene.fog = new THREE.Fog(TIMES.day.fog, 50, 150);
  camera = new THREE.PerspectiveCamera(60, 1, 0.1, 900);
  hemi = new THREE.HemisphereLight(TIMES.day.hemi, TIMES.day.ground, TIMES.day.hemiI);
  scene.add(hemi);
  sun = new THREE.DirectionalLight(TIMES.day.sun, TIMES.day.sunI);
  sun.castShadow = true;
  const sm = isMobile ? 1024 : 1536;
  sun.shadow.mapSize.set(sm, sm);
  Object.assign(sun.shadow.camera, { left: -24, right: 24, top: 24, bottom: -24, near: 1, far: 90 });
  sun.shadow.bias = -0.0005;
  sun.shadow.normalBias = 0.03;
  scene.add(sun, sun.target);

  props = buildProps(scene);
  const avoid = (x, z) =>
    props.colliders.some(c => Math.hypot(x - c.x, z - c.z) < c.r + 0.8) ||
    props.boxes.some(b => x > b.minX - 0.8 && x < b.maxX + 0.8 && z > b.minZ - 0.8 && z < b.maxZ + 0.8);
  env = buildEnvironment(scene, avoid);
  onProgress(65);
  museum = buildMuseum(scene);
  onProgress(85);
  colliders = [...env.colliders, ...props.colliders];
  boxes = props.boxes;

  // one letter = one flower (letters that arrive later from the sheet bloom too); coins = as many as were tossed
  plantAll(false);
  props.campfire.setCount(potatoCount());
  // when the family posts something, redraw the board, houses, tree and garden (only once for a burst of updates)
  let refreshT = null;
  addEventListener('family:data', () => {
    clearTimeout(refreshT);
    refreshT = setTimeout(() => { plantAll(false); props.refresh(); }, 80);
  });
  addEventListener('family:read', () => props.houses.refresh());
  addEventListener('family:heart', e => heartAtHouse(e.detail?.to));
  addEventListener('family:water', e => waterFx(e.detail));
  addEventListener('family:look', e => { setCharacter(e.detail || {}); props.houses.refresh(); });
  addEventListener('family:me', () => { setCharacter(V.currentLook()); props.refresh(); });
  // 🌿 → 🍂 → ❄️ when the season changes, change the sky, ground, trees and roofs (indoors, only the outside is changed)
  addEventListener('family:season', e => {
    const p = env.setSeason(e.detail);
    if (state.mode === 'out') setLights(p);
    props.refresh();
  });

  // a marker shown briefly where you tapped
  marker = new THREE.Mesh(new THREE.RingGeometry(0.32, 0.48, 24), new THREE.MeshBasicMaterial({ color: '#E07B39', transparent: true, opacity: 0, depthWrite: false }));
  marker.rotation.x = -Math.PI / 2;
  marker.position.y = 0.05;
  scene.add(marker);

  swapPlayer();
  bindInput();
  buildMuseumBar();
  $('#btn-shot').onclick = () => takePhoto(false);
  $('#btn-tour')?.addEventListener('click', () => stopTour(L('투어를 멈췄어요. 마음대로 둘러보세요', 'Tour stopped. Look around as you like')));
  addEventListener('resize', onResize);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) clock.getDelta(); });
  onResize();
  applyTime(initialTime());
  if (lowEnd || weakGPU()) applyLevel(1);
  snapCamera();
  loop();
  // draw the gallery illustrations ahead of time while idle (so entering does not stutter)
  if (W.demoPhotos) {
    const queue = museum.themes.flatMap(t => t.photos);
    const idle = window.requestIdleCallback || (f => setTimeout(f, 120));
    const step = () => { const p = queue.shift(); if (!p) return; try { photoURL(p); } catch {} idle(step); };
    idle(step);
  }
  // with #debug at the end of the address, a handle to play with from the console (for testing)
  if (/debug/.test(location.hash)) window.__wv = { scene, camera, goTo: id => goTo(props.interactables.find(i => i.id === id)), takePhoto, enterMuseum, exitMuseum, cycleTime, startTour, stopTour, applyTime, state, props, flowerCount: () => props.flowerCount(), interact: id => interact(props.interactables.find(i => i.id === id)), npcVisible: id => !!props.houses.npc(id)?.root.visible, treeStage: () => props.familyTree.refresh().stage, current: () => current?.id || '', pos: () => [state.pos.x, state.pos.z], setSeason: s => pickSeason(s), season: () => env.season, stats: () => { let meshes = 0, vis = 0; scene.traverse(o => { if (o.isMesh || o.isSprite || o.isPoints || o.isLine) { meshes++; let v = true, p = o; while (p) { if (!p.visible) { v = false; break; } p = p.parent; } if (v) vis++; } }); const r = renderer.info; return { calls: r.render.calls, tris: r.render.triangles, geos: r.memory.geometries, tex: r.memory.textures, programs: r.programs?.length, objects: meshes, visible: vis, dpr: renderer.getPixelRatio(), level }; } };

  return {
    themes: museum.themes, start, setCharacter, enterMuseum: () => enterMuseum(), letterSent, takePhoto: ids => takePhoto(true, ids), portrait,
    resize: () => { onResize(); snapCamera(); },
    startTour, stopTour, isTouring: () => !!tour,
    setTime: applyTime, getTime: () => timeMode, cycleTime,
  };
}

/* ---------- 🙋 Character card pictures: snap each 3D character on a transparent background (start screen · who am I?) ---------- */
const PW = 480, PH = 600;   // drawn at double size, then halved for smooth edges
let pRig = null;
const SRGB = new Uint8ClampedArray(256).map((_, i) => { const c = i / 255; return Math.round(255 * (c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055)); });
function portrait(look = {}) {
  if (!renderer || lost) return null;
  if (!pRig) {
    const s = new THREE.Scene();
    s.add(new THREE.HemisphereLight(TIMES.day.hemi, TIMES.day.ground, TIMES.day.hemiI));
    const d = new THREE.DirectionalLight(TIMES.day.sun, TIMES.day.sunI);
    d.position.set(2.5, 5, 6);
    s.add(d);
    const cam = new THREE.PerspectiveCamera(26, PW / PH, 0.1, 30);
    cam.position.set(0, 1.0, 4.6); cam.lookAt(0, 0.8, 0);
    pRig = { s, cam, rt: new THREE.WebGLRenderTarget(PW, PH), buf: new Uint8Array(PW * PH * 4), big: document.createElement('canvas') };
    pRig.big.width = PW; pRig.big.height = PH;
  }
  const { s, cam, rt, buf, big } = pRig;
  const ch = createCharacter({ type: 'family', ...look, shadows: false });
  ch.root.rotation.y = 0.32;
  ch.animate(0, 0, 0);
  s.add(ch.root);
  const prevRT = renderer.getRenderTarget(), prevCol = renderer.getClearColor(new THREE.Color()), prevA = renderer.getClearAlpha();
  renderer.setRenderTarget(rt);
  renderer.setClearColor(0x000000, 0);
  renderer.clear();
  renderer.render(s, cam);
  renderer.readRenderTargetPixels(rt, 0, 0, PW, PH, buf);
  renderer.setRenderTarget(prevRT);
  renderer.setClearColor(prevCol, prevA);
  s.remove(ch.root);
  ch.root.traverse(o => o.geometry?.dispose());
  // flip upside down + convert to screen colors (sRGB)
  const img = new ImageData(PW, PH);
  for (let y = 0; y < PH; y++) {
    const src = (PH - 1 - y) * PW * 4, dst = y * PW * 4;
    for (let x = 0; x < PW * 4; x += 4) {
      img.data[dst + x] = SRGB[buf[src + x]]; img.data[dst + x + 1] = SRGB[buf[src + x + 1]]; img.data[dst + x + 2] = SRGB[buf[src + x + 2]];
      img.data[dst + x + 3] = buf[src + x + 3];
    }
  }
  big.getContext('2d').putImageData(img, 0, 0);
  const out = document.createElement('canvas');
  out.width = PW / 2; out.height = PH / 2;
  const g = out.getContext('2d');
  g.imageSmoothingQuality = 'high';
  g.drawImage(big, 0, 0, out.width, out.height);
  return out.toDataURL('image/png');
}

function start({ hint = true } = {}) {
  playing = true;
  state.swoopT = 1.8;           // orbit camera → swoop slowly down to my character
  perfSum = perfN = 0;
  if (sound.saved()) sound.setEnabled(true);
  let seen = 0;
  try { seen = +localStorage.getItem('family-hints') || 0; localStorage.setItem('family-hints', String(seen + 1)); } catch {}
  if (hint && seen < 2) setTimeout(() => UI.toast(L('👆 화면을 끌면 걷고, 이름표를 누르면 찾아가요', '👆 Drag to walk, tap a name tag to go there'), 4200), 900);   // only the first two times
  const greet = timeMode === 'night' ? L('🌙 밤에 왔네요. 가로등을 켜 두었어요', '🌙 You came at night. We left the streetlights on') : timeMode === 'dusk' ? L('🌇 노을 지는 마을이에요. 천천히 둘러보세요', '🌇 The sun is setting over the village. Take your time') : null;
  if (greet) setTimeout(() => UI.toast(greet, 3600), 5600);
  // 🎂 if someone in the family has a birthday today, celebrate first
  const bd = birthdaysOn();
  if (bd.length) setTimeout(() => {
    UI.confetti(['🎂', '🎉', '🎈', '💗', '✨']);
    sound.sfx('birthday');
    UI.toast(L(`🎂 오늘은 ${bd.map(m => m.nick || m.role || m.name).join(', ')} 생일이에요! 집 앞에 케이크가 있어요`, `🎂 Happy birthday, ${andList(bd.map(m => m.nick || m.role || m.name))}! There's a cake in front of the house`), 4600);
  }, 2400);
}
function setCharacter(c) { character = { ...character, ...c }; if (player) swapPlayer(); }

/* Garden: plant once per letter (so a letter that comes again from the sheet does not bloom twice) */
const planted = new Set();
const letterKey = l => l.id || `${l.name}|${l.time || ''}`;
function plantAll(animate) {
  list('letters').slice().reverse().forEach(l => { const k = letterKey(l); if (planted.has(k)) return; planted.add(k); props.plantFlower(l, animate); });
}

/* Sending a letter makes a flower bloom in the family garden and letters fly around my character */
function letterSent(letter) {
  if (letter && planted.has(letterKey(letter))) return;
  if (letter) planted.add(letterKey(letter));
  const at = props.plantFlower(letter || { name: L('손님', 'Guest'), who: 'guest' }, true);
  spawnHearts(scene, new THREE.Vector3(state.pos.x, 2.2 + state.y, state.pos.z), 10, '💌');
  if (at && state.mode === 'out' && !tour) {
    state.target = new THREE.Vector3(BED.x - BED.r - 1.0, 0, BED.z + 0.6); state.via = route(state.pos, state.target); state.pending = null; state.targetT = 12; state.moveT = 0;
    setTimeout(() => UI.toast(L('🌷 보낸 편지가 가족 정원에 꽃으로 피었어요', '🌷 Your letter bloomed as a flower in the family garden'), 3200), 500);
  }
}

/* 💗 The heart flies to that person's house */
function heartAtHouse(to) {
  const sp = props.houses.spot(to);
  if (!sp || state.mode !== 'out') return;
  spawnHearts(scene, new THREE.Vector3(sp.npcX, 2.4, sp.npcZ), 12);
  props.houses.npc(to)?.wave(1.6);
}
/* 💧 Watering: if you are close, water drops fly from your hand */
function waterFx({ grew } = {}) {
  props.familyTree.refresh();
  if (state.mode !== 'out') return;
  const top = props.familyTree.top;
  const near = Math.hypot(state.pos.x - top.x, state.pos.z - top.z) < 8;
  const burst = () => { spawnHearts(scene, top.clone().setY(2.2), grew ? 18 : 8, grew ? '✨' : '💧'); props.familyTree.refresh(); };
  if (near) { player.wave(1); for (let i = 0; i < 3; i++) setTimeout(() => throwSprite(scene, new THREE.Vector3(state.pos.x, 1.6, state.pos.z), top, '💧', 0.6, i === 2 ? burst : null), i * 140); }
  else burst();
}

function swapPlayer() {
  if (player) scene.remove(player.root);
  player = createCharacter({ type: 'player', outfit: character.outfit, hair: character.hair, longHair: !!character.longHair, glasses: !!character.glasses, hat: character.hat || '', kid: !!character.kid });
  scene.add(player.root);
}

/* ---------- 🌙 Day · dusk · night ---------- */
function initialTime() {
  const h = location.hash;
  if (/night/.test(h)) return 'night';
  if (/sunset|dusk/.test(h)) return 'dusk';
  if (/day|morning/.test(h)) return 'day';
  try { const s = localStorage.getItem('family-time'); if (TIMES[s]) return s; } catch {}   // what was picked in the menu
  if (W.skyMode && TIMES[W.skyMode]) return W.skyMode;                                           // config default (day)
  const kh = new Date(now().toLocaleString('en-US', { timeZone: 'Asia/Seoul' })).getHours();
  return kh >= 6 && kh < 16 ? 'day' : kh < 19 ? 'dusk' : 'night';
}
function setLights(p) {
  scene.fog.color.set(p.fog);
  sun.color.set(p.sun); sun.intensity = p.sunI;
  hemi.color.set(p.hemi); hemi.groundColor.set(p.ground); hemi.intensity = p.hemiI;
}
function applyTime(m) {
  timeMode = TIMES[m] ? m : 'day';
  const p = env.setTime(timeMode);
  if (state.mode === 'out') setLights(p);
  return timeMode;
}
function cycleTime() {
  const order = ['day', 'dusk', 'night'];
  const next = order[(order.indexOf(timeMode) + 1) % order.length];
  applyTime(next);
  try { localStorage.setItem('family-time', next); } catch {}
  UI.toast(next === 'night' ? L('🌙 밤 마을이에요. 가로등이 켜졌어요', '🌙 Night in the village. The streetlights are on') : next === 'dusk' ? L('🌇 노을이 지고 있어요', '🌇 The sun is setting') : L('☀️ 다시 환한 낮이에요', '☀️ Back to bright daylight'));
  return next;
}

/* ---------- Screen size ---------- */
function measure() {
  const r = phone.getBoundingClientRect();
  view.w = Math.max(1, r.width); view.h = Math.max(1, r.height); view.left = r.left; view.top = r.top;
}
function onResize() {
  measure();
  camera.aspect = view.w / view.h;
  camera.fov = !isPortrait() ? 50 : state.mode === 'museum' ? 55 : 64;
  camera.updateProjectionMatrix();
  dpr = currentDpr();
  renderer.setPixelRatio(dpr);
  renderer.setSize(view.w, view.h);
}

/* ---------- Controls ---------- */
function bindInput() {
  // PC keyboard
  addEventListener('keydown', e => {
    if (UI.isOverlayOpen() || /INPUT|TEXTAREA/.test(e.target.tagName) || document.body.classList.contains('reading')) return;
    keys.add(e.code);
    if (/Key[WASD]|Arrow/.test(e.code)) { document.body.classList.add('moved'); stopTour(); }
    if (e.code === 'Space') { jump(); e.preventDefault(); }
    if (e.code === 'KeyE' || e.code === 'Enter') interact();
    if (e.code === 'KeyH') hearts();
    if (e.code === 'KeyN') cycleTime();
  });
  addEventListener('keyup', e => keys.delete(e.code));
  addEventListener('blur', () => keys.clear());

  // joystick that appears wherever you drag on the screen
  const el = renderer.domElement, base = $('#joy'), knob = base.querySelector('.knob');
  const R = 48;
  let p = null;
  el.addEventListener('pointerdown', e => {
    if (p || !playing) return;
    p = { id: e.pointerId, sx: e.clientX, sy: e.clientY, ax: e.clientX, ay: e.clientY, drag: false, t: performance.now() };
    try { el.setPointerCapture(e.pointerId); } catch {}
  });
  el.addEventListener('pointermove', e => {
    if (!p || e.pointerId !== p.id) return;
    if (!p.drag) {
      if (Math.hypot(e.clientX - p.sx, e.clientY - p.sy) < 10) return;
      p.drag = true;
      state.target = null; state.pending = null;
      stopTour();
      base.classList.add('active');
      document.body.classList.add('moved');
    }
    let dx = e.clientX - p.ax, dy = e.clientY - p.ay, d = Math.hypot(dx, dy);
    if (d > R) { // the joystick follows when the finger goes far
      p.ax = e.clientX - (dx / d) * R; p.ay = e.clientY - (dy / d) * R;
      dx = e.clientX - p.ax; dy = e.clientY - p.ay;
    }
    joy.x = dx / R; joy.y = dy / R;
    base.style.left = `${p.ax - view.left}px`;
    base.style.top = `${p.ay - view.top}px`;
    knob.style.transform = `translate(${dx}px, ${dy}px)`;
  });
  const end = e => {
    if (!p || e.pointerId !== p.id) return;
    const tap = !p.drag && performance.now() - p.t < 450 && e.type === 'pointerup';
    p = null; joy.x = joy.y = 0;
    base.classList.remove('active');
    base.style.left = base.style.top = '';
    knob.style.transform = '';
    if (tap) onTap(e.clientX, e.clientY);
  };
  el.addEventListener('pointerup', end);
  el.addEventListener('pointercancel', end);

  // while one finger holds the joystick, phones do not fire click for a button pressed by another finger
  // → react right away on pointerdown (keyboard Enter/Space use click)
  tapButton($('#btn-action'), () => interact());
  tapButton($('#btn-jump'), () => jump());
  tapButton($('#btn-heart'), () => hearts());
}
function tapButton(el, fn) {
  let lastPointer = 0;
  el.addEventListener('pointerdown', e => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    lastPointer = performance.now();
    e.preventDefault();
    fn();
  });
  el.addEventListener('click', () => { if (performance.now() - lastPointer > 500) fn(); });
}

/* Detour points around objects such as the fountain or the board that are in the way (up to three) */
function route(from, to) {
  const pts = [];
  let a = from;
  for (let k = 0; k < 3; k++) { const w = detour(a, to); if (!w) break; pts.push(w); a = w; }
  return pts;
}
function detour(from, to) {
  const dx = to.x - from.x, dz = to.z - from.z, L2 = dx * dx + dz * dz;
  if (L2 < 1) return null;
  let best = null;
  for (const c of colliders) {
    if (c.r < 0.8) continue;
    const t = ((c.x - from.x) * dx + (c.z - from.z) * dz) / L2;
    if (t <= 0.02 || t >= 0.98) continue;
    const px = from.x + dx * t, pz = from.z + dz * t;
    if (Math.hypot(c.x - px, c.z - pz) < c.r + PR + 0.3 && (!best || t < best.t)) best = { c, t, px, pz };
  }
  if (!best) return null;
  const { c } = best, len = Math.sqrt(L2);
  let ox = best.px - c.x, oz = best.pz - c.z, od = Math.hypot(ox, oz);
  if (od < 1e-3) { ox = -dz / len; oz = dx / len; od = 1; }
  const R = c.r + PR + 1.1;
  return new THREE.Vector3(c.x + (ox / od) * R, 0, c.z + (oz / od) * R);
}

/* 'Go to' used by tapping a name tag or by the tour: walk right up to the object */
function goTo(it) {
  const dx = state.pos.x - it.pos.x, dz = state.pos.z - it.pos.z, d = Math.hypot(dx, dz) || 1;
  const stop = Math.max(0.5, it.r - 0.6);
  state.target = new THREE.Vector3(it.pos.x + (dx / d) * stop, 0, it.pos.z + (dz / d) * stop);
  // between the plaza and the house lane, go along the path north of the plaza (x=0) (so it does not squeeze between the benches and the question board)
  const pre = [];
  if (state.mode === 'out' && (it.pos.z < -6) !== (state.pos.z < -6)) {
    const a = new THREE.Vector3(0, 0, -3), b = new THREE.Vector3(0, 0, -10);
    pre.push(...(state.pos.z < -6 ? [b, a] : [a, b]));
  }
  state.via = state.mode === 'out' ? [...pre, ...route(pre[pre.length - 1] || state.pos, state.target)] : [];
  state.pending = it; state.targetT = 20; state.moveT = 0; state.stuckT = 0;
}
function showMarker(pt) { marker.position.set(pt.x, 0.05, pt.z); markerT = 1; }

/* Tap → walk to that spot / tap a name tag → walk there and open it */
const ray = new THREE.Raycaster();
const groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
function onTap(cx, cy) {
  if (UI.isOverlayOpen() || state.busy) return;
  stopTour();
  const ndc = new THREE.Vector2(((cx - view.left) / view.w) * 2 - 1, -((cy - view.top) / view.h) * 2 + 1);
  ray.setFromCamera(ndc, camera);
  if (state.mode === 'out') {
    const hit = ray.intersectObjects(props.interactables.map(i => i.label))[0];
    if (hit) {
      const it = props.interactables.find(i => i.label === hit.object);
      goTo(it);
      showMarker(it.pos);
      buzz(8);
      return;
    }
  }
  const pt = new THREE.Vector3();
  if (ray.ray.intersectPlane(groundPlane, pt)) { state.target = pt; state.via = state.mode === 'out' ? route(state.pos, pt) : []; state.pending = null; state.targetT = 10; state.moveT = 0; state.stuckT = 0; showMarker(pt); }
}

/* ---------- 🪙 Coins ---------- */
/* ---------- 🔥 Roasting sweet potatoes on the campfire ---------- */
const POTATO_KEY = 'family-potatoes';
const potatoCount = () => { try { return +localStorage.getItem(POTATO_KEY) || 0; } catch { return 0; } };
function potatoLine(n) {
  if (n === 1) return L('🍠 첫 고구마를 넣었어요. 노릇노릇 익는 중…', '🍠 The first sweet potato is in. Roasting nice and golden…');
  if (n % 5 === 0) return L(`🍠 벌써 ${n}개째! 오늘 저녁은 군고구마 파티 🎉`, `🍠 That's ${n} already! Roasted sweet potato party tonight 🎉`);
  const lines = L(['호호 불어 먹으면 꿀맛이에요', '껍질까지 달콤하게 익었어요', '모닥불이 따뜻해요. 잠깐 쉬었다 가요', '하나는 할머니 몫으로 남겨 둘게요', '타닥타닥, 불꽃이 춤을 춰요'],
    ['Blow on it first. It tastes like honey', 'Roasted sweet, right down to the skin', 'The campfire is so warm. Stay a while', "I'll save one for Grandma", 'Crackle, crackle, the flames are dancing']);
  return `🍠 ${lines[Math.floor(Math.random() * lines.length)]}`;
}

/* ---------- Interaction ---------- */
const ACTIONS = {
  family: () => V.showFamily(),
  directions: UI.showDirections,
  question: () => V.showQuestion(),
  calendar: () => V.showCalendar(),
  poll: () => V.showPolls(),
  quiz: UI.showQuiz,
  mailbox: () => UI.showMailbox(letterSent),
  tree: () => V.showTree(),
  house: it => {
    const npc = props.houses.npc(it.member);
    if (npc && it.member !== meId()) { npc.wave(2); spawnHearts(scene, new THREE.Vector3(npc.root.position.x, 2.4, npc.root.position.z), 6); }
    setTimeout(() => { if (!UI.isOverlayOpen() && state.mode === 'out') V.showMember(it.member); }, it.member === meId() ? 0 : 450);
  },
  campfire: () => {
    player.wave(0.8);
    buzz(30);
    props.campfire.toss(scene, new THREE.Vector3(state.pos.x, 1.4 + state.y, state.pos.z), () => {
      const n = potatoCount() + 1;
      try { localStorage.setItem(POTATO_KEY, String(n)); } catch {}
      props.campfire.setCount(n);
      spawnHearts(scene, new THREE.Vector3(0, 2.2, 4), 6, '✨');
      sound.sfx('crackle');
      UI.toast(potatoLine(n));
    });
  },
  photozone: () => (members().some(m => m.id !== meId()) ? V.showPhotoPick() : takePhoto(true, [])),
  museum: () => enterMuseum(),
};

function findNearby() {
  const p = state.pos;
  if (state.mode === 'museum') return museum.nearest(p);
  let best = null, bd = Infinity;
  for (const it of props.interactables) {
    const d = Math.hypot(p.x - it.pos.x, p.z - it.pos.z);
    if (d < it.r && d < bd) { bd = d; best = it; }
  }
  return best;
}

function interact(target = current) {
  if (state.busy || UI.isOverlayOpen()) return;
  if (!target) { player.wave(1.4); return; }
  buzz(15);
  sound.sfx('pop');
  if (state.mode === 'museum') {
    if (target.type === 'exit') exitMuseum();
    else if (target.type === 'welcome') UI.showAlbum(museum.themes);
    else if (target.type === 'header') UI.showAlbum(museum.themes, target.ti);
    else if (target.type === 'photo') UI.openLightbox(museum.themes, target.ti, target.idx);
    return;
  }
  state.yaw = Math.atan2(target.pos.x - state.pos.x, target.pos.z - state.pos.z);
  const kind = target.id.startsWith('house:') ? 'house' : target.id;
  visit(kind);
  ACTIONS[kind]?.(target);
}

function updateActionButton() {
  const btn = $('#btn-action');
  const key = current ? (current.id || current.type) + (current.entry?.src ?? current.ti ?? '') : '';
  if (btn.dataset.key === key) return;
  if (key && !btn.dataset.key) { buzz(8); sound.sfx('chime'); } // a little vibration when you get close to an object
  btn.dataset.key = key;
  btn.classList.toggle('ready', !!current);
  btn.querySelector('.em').textContent = current ? current.emoji : '👋';
  btn.querySelector('.lb').textContent = current ? current.action : L('인사하기', 'Say hi');
}

function jump() { if (state.y <= 0.001 && !UI.isOverlayOpen() && !state.busy) { state.vy = 6.5; sound.sfx('jump'); } }
function hearts() {
  spawnHearts(scene, new THREE.Vector3(state.pos.x, 2.2 + state.y, state.pos.z), 8);
  player.wave(1);
  sound.sfx('heart');
  // pressed in front of a family member's house, the heart goes to that person (once a day)
  if (state.mode === 'out' && current?.member && current.member !== meId()) V.sendHeart(current.member);
}

/* ---------- 🚶 Auto tour: visits the places of the village in turn ---------- */
function startTour() {
  if (!playing || state.mode !== 'out' || state.busy) return;
  tour = { i: 0, waitT: 0.4 };
  document.body.classList.add('touring');
  UI.toast(L('🚶 자동 투어 시작! 화면을 끌면 언제든 멈춰요', '🚶 Auto tour started. Drag the screen to stop anytime'), 3200);
}
function stopTour(msg) {
  if (!tour) return;
  tour = null;
  document.body.classList.remove('touring');
  if (state.pending) { state.target = null; state.pending = null; }
  if (msg) UI.toast(msg);
}
function tourNext() {
  const id = TOUR[tour.i++];
  if (!id) { stopTour(); UI.toast(L('🎉 투어 끝! 이제 마음대로 둘러보세요', '🎉 Tour finished. Now look around as you like'), 3600); UI.confetti(); sound.sfx('tada'); return; }
  const it = id === 'house'
    ? props.interactables.find(i => i.member && i.member !== meId())
    : props.interactables.find(i => i.id === id);
  if (!it) return;
  goTo(it);
  showMarker(it.pos);
  tour.waitT = id === 'campfire' ? 2.4 : id === 'house' ? 1.2 : 0.9;
}

/* ---------- Going in and out of the gallery (phone back button = go outside) ---------- */
const fade = on => new Promise(r => { $('#fade').classList.toggle('on', on); setTimeout(r, 460); });
function buildMuseumBar() {
  const bar = $('#museum-bar');
  bar.innerHTML = '';
  museum.themes.forEach((t, i) => {
    const c = document.createElement('button');
    c.className = 'chip';
    c.dataset.ti = i;
    c.textContent = `${t.emoji} ${t.title}`;
    c.onclick = () => { state.pos.copy(museum.themeStart(i)); state.target = null; buzz(8); snapCamera(); };
    bar.appendChild(c);
  });
  const album = document.createElement('button');
  album.className = 'chip'; album.textContent = L('📚 전체 앨범', '📚 Full album');
  album.onclick = () => UI.showAlbum(museum.themes);
  bar.append(album);
  $('#btn-exit').onclick = () => exitMuseum();
}

const backFromMuseum = () => exitMuseum(true);
async function enterMuseum(ti = -1) {
  if (state.mode === 'museum' || state.busy) return;
  const wasTour = !!tour;
  stopTour();
  visit('museum');
  state.busy = true;
  await fade(true);
  state.mode = 'museum';
  env.group.visible = props.group.visible = false;
  museum.group.visible = true;
  sun.castShadow = false;
  setLights(TIMES.day);   // always bright indoors
  state.pos.copy(ti >= 0 ? museum.themeStart(ti) : museum.spawn);
  state.vel.set(0, 0, 0); state.target = null; state.yaw = Math.PI / 2;
  document.body.classList.add('in-museum');
  onResize();
  snapCamera();
  UI.pushBack(backFromMuseum);
  await fade(false);
  state.busy = false;
  UI.toast(wasTour ? L('🏁 투어의 마지막, 사진관이에요. 오른쪽으로 걸으며 구경하세요', '🏁 Last stop of the tour: the photo gallery. Walk to the right to look around') : L('👉 오른쪽으로 걸으며 사진을 구경하세요', '👉 Walk to the right to see the photos'), wasTour ? 4200 : 2400);
}
async function exitMuseum(fromBack = false) {
  if (state.mode !== 'museum') return;
  if (state.busy) { if (fromBack) UI.pushBack(backFromMuseum); return; }
  if (!fromBack) UI.popBack(backFromMuseum);
  state.busy = true;
  await fade(true);
  state.mode = 'out';
  env.group.visible = props.group.visible = true;
  museum.group.visible = false;
  sun.castShadow = renderer.shadowMap.enabled;
  setLights(env.palette());
  state.pos.set(MUSEUM_DOOR.x, 0, MUSEUM_DOOR.z + 2.4);
  state.vel.set(0, 0, 0); state.target = null; state.yaw = 0;
  state.doorCooldown = 1.5;
  document.body.classList.remove('in-museum');
  onResize();
  snapCamera();
  await fade(false);
  state.busy = false;
}

/* ---------- 📸 Souvenir photo (photo zone: the couple comes over, 3 · 2 · 1) ---------- */
function polaroid(src) {
  const w = src.width, h = src.height;
  const pad = Math.round(w * 0.05), foot = Math.round(w * 0.22);
  const inner = document.createElement('canvas');
  inner.width = w + pad * 2; inner.height = h + pad + foot;
  const g = inner.getContext('2d');
  g.fillStyle = '#FFF8EC'; g.fillRect(0, 0, inner.width, inner.height);
  g.drawImage(src, pad, pad);
  g.fillStyle = '#B5552B'; g.textAlign = 'center';
  g.font = `${Math.round(foot * 0.32)}px "Jua", sans-serif`;
  g.fillText(villageName(), inner.width / 2, h + pad + foot * 0.45);
  g.fillStyle = '#7C6A66'; g.font = `${Math.round(foot * 0.15)}px "Gowun Dodum", sans-serif`;
  g.fillText(L(`${formatKDate(now()).date} · 우리 가족 마을에서`, `${formatKDate(now()).date} · in our family village`), inner.width / 2, h + pad + foot * 0.74);
  // slightly tilted polaroid + tape
  const out = document.createElement('canvas');
  out.width = Math.round(inner.width * 1.12); out.height = Math.round(inner.height * 1.1);
  const o = out.getContext('2d');
  o.fillStyle = '#EAD7BB'; o.fillRect(0, 0, out.width, out.height);
  o.save();
  o.translate(out.width / 2, out.height / 2); o.rotate(-0.03);
  o.shadowColor = 'rgba(80,40,30,.3)'; o.shadowBlur = w * 0.05; o.shadowOffsetY = w * 0.02;
  o.drawImage(inner, -inner.width / 2, -inner.height / 2);
  o.restore();
  o.fillStyle = 'rgba(255,236,170,.8)';
  for (const [tx, ty, ra] of [[out.width * 0.09, out.height * 0.055, -0.5], [out.width * 0.91, out.height * 0.055, 0.5]]) {
    o.save(); o.translate(tx, ty); o.rotate(ra); o.fillRect(-w * 0.11, -w * 0.03, w * 0.22, w * 0.06); o.restore();
  }
  return out;
}

/* 📸 Family photo zone: the chosen family members come to my sides, 3 · 2 · 1 */
async function takePhoto(pose = false, ids = []) {
  if (state.busy || UI.isOverlayOpen()) return;
  let restore = null;
  state.busy = true;
  try {
    if (pose) {
      stopTour();
      state.target = null; state.pending = null;
      const nx = Math.sin(PZ.ang), nz = Math.cos(PZ.ang), rx = Math.cos(PZ.ang), rz = -Math.sin(PZ.ang);
      const px = PZ.x + nx * 0.9, pz = PZ.z + nz * 0.9;
      state.pos.set(px, 0, pz); state.vel.set(0, 0, 0); state.yaw = PZ.ang; state.y = 0; state.vy = 0;
      const crew = ids.map(id => props.houses.npc(id)).filter(Boolean).slice(0, 5);
      const saved = crew.map(c => ({ c, p: c.root.position.clone(), r: c.root.rotation.y, v: c.root.visible }));
      // alternating right and left, the outer ones slightly back (packed close so everyone fits a portrait screen)
      crew.forEach((c, k) => {
        const side = k % 2 === 0 ? 1 : -1, slot = Math.floor(k / 2) + 1;
        const lat = side * [0, 0.95, 1.8, 2.55][slot], back = [0, 0, -0.45, -0.9][slot];
        c.root.position.set(px + rx * lat + nx * back, 0, pz + rz * lat + nz * back);
        c.root.rotation.y = PZ.ang; c.head.rotation.y = 0; c.root.visible = true;
      });
      restore = () => saved.forEach(s => { s.c.root.position.copy(s.p); s.c.root.rotation.y = s.r; s.c.root.visible = s.v; });
      state.posing = { x: px, z: pz, nx, nz, back: crew.length <= 1 ? 4.4 : crew.length <= 3 ? 6.2 : 7.6 };
      player.wave(3); crew.forEach(c => c.wave(3));
      const cnt = $('#count');
      for (const k of ['3', '2', '1']) {
        cnt.textContent = k; cnt.classList.remove('show'); void cnt.offsetWidth; cnt.classList.add('show');
        sound.sfx('pop'); buzz(8);
        await sleep(680);
      }
      cnt.classList.remove('show'); cnt.textContent = '';
      spawnHearts(scene, new THREE.Vector3(px, 2.4, pz), 10);
    }
    renderer.render(scene, camera);
    // on a portrait screen, crop the middle where the people are to 4:5 (so there is not too much sky and ground)
    let src = renderer.domElement;
    if (pose && src.height > src.width * 1.3) {
      const w = src.width, h = Math.round(w * 1.25), y = Math.max(0, Math.min(src.height - h, Math.round(src.height * 0.5 - h / 2)));
      const crop = document.createElement('canvas');
      crop.width = w; crop.height = h;
      crop.getContext('2d').drawImage(src, 0, y, w, h, 0, 0, w, h);
      src = crop;
    }
    const c = polaroid(src);
    const url = c.toDataURL('image/jpeg', 0.9);
    sound.sfx('shutter'); buzz(25);
    $('#fade').style.background = '#fff';
    $('#fade').classList.add('on');
    setTimeout(() => { $('#fade').classList.remove('on'); setTimeout(() => ($('#fade').style.background = ''), 450); }, 120);
    restore?.(); restore = null;
    state.posing = null;
    const inApp = /KAKAOTALK|Instagram|FBAN|FBAV|Line\//i.test(navigator.userAgent);
    UI.openModal(L('가족사진', 'Family photo'), `
      <img src="${url}" style="width:100%;border-radius:14px;box-shadow:var(--shadow);-webkit-touch-callout:default" alt="${L('가족사진', 'Family photo')}" />
      <p class="muted center">${inApp ? L('사진을 <b>길게 눌러</b> 저장해 주세요', '<b>Press and hold</b> the photo to save it') : L('사진을 <b>길게 눌러</b> 저장하거나 아래 버튼을 눌러주세요', '<b>Press and hold</b> the photo to save it, or use the buttons below')}</p>
      <div class="btns">
        <button class="btn pink ph-share">${L('📤 공유하기', '📤 Share')}</button>
        <button class="btn ph-save">${L('💾 저장하기', '💾 Save')}</button>
      </div>`, body => {
      let file = null, objUrl = null;
      c.toBlob(b => { if (!b) return; file = new File([b], 'family-village-photo.jpg', { type: 'image/jpeg' }); objUrl = URL.createObjectURL(b); }, 'image/jpeg', 0.9);
      const save = () => {
        if (inApp) { UI.toast(L('사진을 길게 눌러 저장해 주세요', 'Press and hold the photo to save it')); return; }
        const a = document.createElement('a');
        a.href = objUrl || url; a.download = 'family-village-photo.jpg';
        document.body.appendChild(a); a.click(); a.remove();
        UI.toast(L('💾 사진을 저장했어요', '💾 Photo saved'));
      };
      body.querySelector('.ph-save').onclick = save;
      body.querySelector('.ph-share').onclick = async () => {
        if (file && navigator.canShare?.({ files: [file] })) {
          try { await navigator.share({ files: [file], title: villageName() }); return; }
          catch (err) { if (err?.name === 'AbortError') return; }
        }
        save();
      };
      return () => { if (objUrl) URL.revokeObjectURL(objUrl); };
    });
  } finally {
    restore?.();
    state.posing = null;
    state.busy = false;
  }
}

/* ---------- Movement & collision ---------- */
const PR = 0.45;
function collide(p) {
  if (state.mode === 'museum') { museum.clamp(p); return; }
  for (const c of colliders) {
    const dx = p.x - c.x, dz = p.z - c.z, d = Math.hypot(dx, dz), m = c.r + PR;
    if (d < m && d > 1e-4) { p.x = c.x + (dx / d) * m; p.z = c.z + (dz / d) * m; }
  }
  for (const b of boxes) {
    const cx = Math.max(b.minX, Math.min(p.x, b.maxX)), cz = Math.max(b.minZ, Math.min(p.z, b.maxZ));
    const dx = p.x - cx, dz = p.z - cz, d = Math.hypot(dx, dz);
    if (d >= PR) continue;
    if (d > 1e-4) { p.x = cx + (dx / d) * PR; p.z = cz + (dz / d) * PR; continue; }
    const o = [[p.x - b.minX, 'x', b.minX - PR], [b.maxX - p.x, 'x', b.maxX + PR], [p.z - b.minZ, 'z', b.minZ - PR], [b.maxZ - p.z, 'z', b.maxZ + PR]]
      .sort((a, c) => a[0] - c[0])[0];
    p[o[1]] = o[2];
  }
  const r = Math.hypot(p.x, p.z);
  if (r > 39) { p.x *= 39 / r; p.z *= 39 / r; }
}

const tmp = new THREE.Vector3();
function movePlayer(dt) {
  let ix = 0, iz = 0;
  if (!UI.isOverlayOpen() && !state.busy) {
    if (keys.has('KeyW') || keys.has('ArrowUp')) iz -= 1;
    if (keys.has('KeyS') || keys.has('ArrowDown')) iz += 1;
    if (keys.has('KeyA') || keys.has('ArrowLeft')) ix -= 1;
    if (keys.has('KeyD') || keys.has('ArrowRight')) ix += 1;
    ix += joy.x; iz += joy.y;
    if (ix || iz) { state.target = null; state.pending = null; }
    if (state.target) {
      tmp.subVectors(state.target, state.pos); tmp.y = 0;
      const d = tmp.length();
      state.targetT -= dt; state.moveT += dt;
      const sp0 = Math.hypot(state.vel.x, state.vel.z);
      const it = state.pending;
      let arrived;
      if (it) {
        const dp = Math.hypot(state.pos.x - it.pos.x, state.pos.z - it.pos.z);
        arrived = dp < it.r - 0.2 || (dp < it.r && sp0 < 0.6 && state.moveT > 0.5);
      } else arrived = d < 0.35;
      // give up if blocked for more than 0.7 s (inside the object's radius counts as arrived)
      state.stuckT = state.moveT > 0.5 && sp0 < 0.5 ? state.stuckT + dt : 0;
      if (arrived || state.targetT < 0 || state.stuckT > 0.7) {
        const inRange = it && Math.hypot(state.pos.x - it.pos.x, state.pos.z - it.pos.z) < it.r;
        state.target = null; state.via = []; state.pending = null; state.stuckT = 0;
        if (it && (arrived || inRange)) interact(it);
        else if (!arrived && !tour) UI.toast(L('그쪽은 막혀 있어요', 'That way is blocked'));
      } else {
        // if there is a detour point, head there first
        const w = state.via[0];
        if (w) {
          const vx = w.x - state.pos.x, vz = w.z - state.pos.z, vd = Math.hypot(vx, vz);
          if (vd < 0.9) state.via.shift(); else { ix = vx / vd; iz = vz / vd; }
        }
        if (!state.via.length) { ix = tmp.x / d; iz = tmp.z / d; }
      }
    }
  }
  const len = Math.hypot(ix, iz);
  if (len > 1) { ix /= len; iz /= len; }
  const speed = state.mode === 'museum' ? 5.2 : 6.4;
  state.vel.x = damp(state.vel.x, ix * speed, 10, dt);
  state.vel.z = damp(state.vel.z, iz * speed, 10, dt);
  state.pos.x += state.vel.x * dt;
  state.pos.z += state.vel.z * dt;
  collide(state.pos);

  const sp = Math.hypot(state.vel.x, state.vel.z);
  if (sp > 0.3) {
    let diff = Math.atan2(state.vel.x, state.vel.z) - state.yaw;
    diff = Math.atan2(Math.sin(diff), Math.cos(diff));
    state.yaw += diff * Math.min(1, dt * 12);
  }
  state.vy -= 20 * dt;
  state.y = Math.max(0, state.y + state.vy * dt);
  if (state.y === 0) state.vy = 0;

  player.root.position.set(state.pos.x, state.y, state.pos.z);
  player.root.rotation.y = state.yaw;
  return sp / speed;
}

/* ---------- Camera (made for portrait screens) ---------- */
const camPos = new THREE.Vector3(), camLook = new THREE.Vector3();
const goalPos = new THREE.Vector3(), goalLook = new THREE.Vector3();
function cameraGoal(outPos, outLook, t = 0) {
  const p = state.pos, portrait = isPortrait();
  if (state.posing) {
    const z = state.posing;
    outPos.set(z.x + z.nx * z.back, 1.6 + z.back * 0.06, z.z + z.nz * z.back);
    outLook.set(z.x, 1.25, z.z);
  } else if (!playing) {
    // before entering: intro camera circling slowly over the plaza
    const a = t * 0.08;
    outPos.set(Math.sin(a) * 26, 12 + Math.sin(t * 0.3) * 1.2, 4 + Math.cos(a) * 26);
    outLook.set(0, 2, -2);
  } else if (state.mode === 'museum') {
    outPos.set(p.x, portrait ? 4.1 : 3.6, portrait ? 9.6 : 8.4);
    outLook.set(p.x, portrait ? 2.45 : 2.7, -3.2);
  } else if (portrait) {
    // on the family house lane (north of the plaza) the camera moves in a little so the house fronts look bigger
    const k = clamp((-p.z - 4) / 4, 0, 1);
    outPos.set(p.x, 14.5 - k * 4, p.z + 14.5 - k * 3.5);
    outLook.set(p.x, 0.6 + k * 0.7, p.z - 3.5 + k * 0.3);
  } else {
    outPos.set(p.x, 10.5, p.z + 13.5);
    outLook.set(p.x, 1.2, p.z - 1.5);
  }
}
function snapCamera() { cameraGoal(camPos, camLook, clock.elapsedTime); camera.position.copy(camPos); camera.lookAt(camLook); }
function updateCamera(dt, t) {
  cameraGoal(goalPos, goalLook, t);
  const lp = state.swoopT > 0 ? 2.4 : 5, ll = state.swoopT > 0 ? 2.8 : 6;
  if (state.swoopT > 0) state.swoopT -= dt;
  camPos.x = damp(camPos.x, goalPos.x, lp, dt); camPos.y = damp(camPos.y, goalPos.y, lp, dt); camPos.z = damp(camPos.z, goalPos.z, lp, dt);
  camLook.x = damp(camLook.x, goalLook.x, ll, dt); camLook.y = damp(camLook.y, goalLook.y, ll, dt); camLook.z = damp(camLook.z, goalLook.z, ll, dt);
  camera.position.copy(camPos);
  camera.lookAt(camLook);
  if (state.camOverride) { camera.position.copy(state.camOverride.pos); camera.lookAt(state.camOverride.look); }   // #debug only (looking down from above, etc.)
  env.sky.position.copy(camera.position);
}

/* ---------- On slow phones, lighten things step by step ---------- */
let perfSum = 0, perfN = 0, slowCount = 0;
function applyLevel(n) {
  level = n;
  dpr = currentDpr(); renderer.setPixelRatio(dpr); renderer.setSize(view.w, view.h);
  if (n >= 1) env.setLite(1);
  if (n >= 2 && renderer.shadowMap.enabled) {
    renderer.shadowMap.enabled = false; sun.castShadow = false;
    scene.traverse(o => { if (o.material) o.material.needsUpdate = true; });
  }
  if (n >= 3) env.setLite(2);
}
function adaptQuality(dt) {
  if (!playing) return;
  perfSum += dt; perfN++;
  if (perfSum < 2.5) return;
  const avg = perfSum / perfN;
  perfSum = perfN = 0;
  if (avg > 1 / 32 && level < 3) applyLevel(level + 1);
  else if (level >= 3 && avg > 1 / 18 && ++slowCount === 2) UI.toast(L('📖 휴대폰이 힘들어하면 ☰ 메뉴의 "글로 보기"로 편하게 보세요', "📖 If your phone is struggling, try 'Text view' in the ☰ menu"), 4800);
}

/* ---------- Every frame ---------- */
function loop() {
  requestAnimationFrame(loop);
  frame++;
  if (!playing && frame % 2) return;   // before entering (intro screen), draw every other frame to keep it light
  const dt = Math.min(clock.getDelta(), 0.05), t = clock.elapsedTime;
  if (lost || document.hidden) return;
  // skip drawing while a popup or the text view covers the screen, to save battery
  if (UI.isOverlayOpen() || document.body.classList.contains('reading')) return;
  adaptQuality(dt);

  const speed = playing ? movePlayer(dt) : 0;
  player.animate(dt, speed, t);

  if (state.mode === 'out') {
    env.update(dt, t, state.pos);
    props.update(dt, t, state.pos, !!state.posing);
    sun.position.copy(state.pos).add(SUN_OFFSET);
    sun.target.position.copy(state.pos);
    for (const it of props.interactables) {
      const d = Math.hypot(state.pos.x - it.pos.x, state.pos.z - it.pos.z);
      it.label.material.opacity = Math.max(0.3, Math.min(1, 1.6 - d / 22));
    }
    // walking into the gallery door enters automatically
    state.doorCooldown -= dt;
    if (playing && state.doorCooldown < 0 && !state.busy && state.vel.z < -1 &&
      Math.hypot(state.pos.x - MUSEUM_DOOR.x, state.pos.z - MUSEUM_DOOR.z) < 1.1) enterMuseum();
    // tour: when stopped and no window is open, go to the next place
    if (tour && playing && !state.busy && !state.target) {
      tour.waitT -= dt;
      if (tour.waitT <= 0) tourNext();
    }
  } else {
    museum.update(dt, t, state.pos);
    const ti = museum.currentTheme(state.pos);
    if (ti !== lastTheme) {
      lastTheme = ti;
      document.querySelectorAll('#museum-bar .chip[data-ti]').forEach(c => c.classList.toggle('on', +c.dataset.ti === ti));
      document.querySelector('#museum-bar .chip.on')?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }
  updateBursts(dt);
  if (markerT > 0) {
    markerT -= dt * 1.3;
    const k = 1 - Math.max(0, markerT);
    marker.scale.setScalar(1 + k * 0.9);
    marker.material.opacity = Math.max(0, markerT);
  }

  current = playing && !state.posing ? findNearby() : null;
  updateActionButton();
  updateCamera(dt, t);
  renderer.render(scene, camera);
}
