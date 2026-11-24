import * as THREE from 'three';
import { L } from './i18n.js';
import { mesh, textCanvas, canvasTex, labelSprite, clamp, gradientMap } from './util.js';

import { createCharacter } from './character.js';
import { balloons, onlyIn, bulbMats } from './world.js';
import { getSeason } from './season.js';
import {
  members, meId, MAX_HOUSES, heartsTo, birthdaysOn, unreadForMe, answersOn, isLockedLetter, treeInfo, dayKey,
} from './family.js';
import { list } from './store.js';

/* =========================================================
   🏘️ The family lane (a log cabin for each member + that person standing in front of it)
   - Roof, door and shutters in that person's color; smoke curls up from the chimney
   🌱 'The tree we grow together' at the end of the lane
   - The family in front of their houses do not walk around (to avoid lag). Come close and they look at you, wave and say something
   - Speech bubble = the answer that person left today · a recent letter · their line from config
   ========================================================= */
export const ROW = { z: -14, gap: 6.5 };   // one row of houses (z of the house centres) · gap between houses
export const TREE = { x: 0, z: -15.5, r: 1.4 };

const darken = (hex, k = 0.25) => '#' + new THREE.Color(hex).lerp(new THREE.Color('#5A4038'), k).getHexString();
const cut = (s, n) => { s = String(s || '').replace(/\s+/g, ' ').trim(); return s.length > n ? s.slice(0, n - 1) + '…' : s; };

/* House spots: with the family tree in the middle, alternating left and right going outwards (all facing the screen)
   Newcomers get the next free spot → existing houses never move. Up to 10 houses */
export function houseSpot(i) {
  if (i >= MAX_HOUSES) return null;
  const x = (i % 2 === 0 ? -1 : 1) * ROW.gap * (Math.floor(i / 2) + 1);
  return { x, z: ROW.z, npcX: x, npcZ: ROW.z + 2.6 };
}
export const houseSpots = n => Array.from({ length: Math.min(n, MAX_HOUSES) }, (_, i) => houseSpot(i));

/* Log wall pattern (shared by every house) */
let logMat = null;
function logMaterial() {
  if (logMat) return logMat;
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  const tones = ['#B07A4F', '#A56F45', '#BC8657', '#A9744B'];
  for (let i = 0; i < 6; i++) {
    const y = i * 21.33;
    const gr = g.createLinearGradient(0, y, 0, y + 21.33);
    gr.addColorStop(0, '#7E5536'); gr.addColorStop(0.18, tones[i % 4]); gr.addColorStop(0.75, tones[(i + 1) % 4]); gr.addColorStop(1, '#6E4B33');
    g.fillStyle = gr; g.fillRect(0, y, 128, 21.33);
    g.strokeStyle = 'rgba(80,50,30,.25)'; g.lineWidth = 1;
    for (let k = 0; k < 3; k++) { g.beginPath(); const x0 = (i * 37 + k * 45) % 128; g.moveTo(x0, y + 8); g.lineTo(x0 + 18, y + 9); g.stroke(); }
  }
  const t = canvasTex(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(1.4, 1);
  logMat = new THREE.MeshToonMaterial({ map: t, gradientMap });
  return logMat;
}
/* Chimney smoke (soft circles) */
let smokeTex = null;
function smokeTexture() {
  if (smokeTex) return smokeTex;
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d'), r = g.createRadialGradient(32, 32, 2, 32, 32, 30);
  r.addColorStop(0, 'rgba(255,255,255,.85)'); r.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = r; g.fillRect(0, 0, 64, 64);
  smokeTex = canvasTex(c);
  return smokeTex;
}

export function buildHouses({ group, colliders, boxes, addInteract, updaters }) {
  const ms = members();
  const houses = [];
  const today = dayKey();
  const birthdayIds = new Set(birthdaysOn(today).map(m => m.id));

  function addHouse(m, i) {
    const sp = houseSpot(i);
    if (!sp) return;
    const col = m.look.outfit;
    const g = new THREE.Group();
    // log cabin whose front faces +z (towards the screen)
    const wall = new THREE.Mesh(new THREE.BoxGeometry(2.8, 1.9, 2.4), logMaterial());
    wall.position.y = 0.95; wall.castShadow = wall.receiveShadow = true;
    g.add(wall);
    const tri = new THREE.Shape(); tri.moveTo(-1.4, 0); tri.lineTo(1.4, 0); tri.lineTo(0, 1.08); tri.closePath();
    const gable = new THREE.Mesh(new THREE.ExtrudeGeometry(tri, { depth: 2.4, bevelEnabled: false }), logMaterial());
    gable.position.set(0, 1.9, -1.2);
    g.add(gable);
    const roofCol = darken(col, 0.28);
    for (const sd of [-1, 1]) {   // two gable roof panels (in that person's color)
      const slab = mesh(new THREE.BoxGeometry(1.98, 0.14, 2.9), roofCol, sd * 0.78, 2.5, 0);
      slab.rotation.z = -sd * 0.66;
      g.add(slab);
    }
    g.add(mesh(new THREE.BoxGeometry(0.16, 0.16, 2.95), darken(col, 0.4), 0, 3.08, 0));
    // ❄️ Winter: snow on the roof + twinkling lights along the front eaves
    const winter = new THREE.Group();
    for (const sd of [-1, 1]) {
      const snow = mesh(new THREE.BoxGeometry(2.0, 0.12, 2.94), '#FBFCFE', sd * 0.78 + sd * 0.07, 2.58, 0);
      snow.rotation.z = -sd * 0.66;
      winter.add(snow);
    }
    const bulbs = bulbMats(), bulbGeo = new THREE.SphereGeometry(0.075, 8, 6);
    for (let k = 0; k <= 12; k++) {
      const u = k / 12, x = -1.55 + u * 3.1, y = 1.93 + (1 - Math.abs(u - 0.5) * 2) * 1.12;
      const b = new THREE.Mesh(bulbGeo, bulbs[(k + i) % bulbs.length]);
      b.position.set(x, y - 0.06, 1.5);
      winter.add(b);
    }
    g.add(onlyIn(winter, 'winter'));
    g.add(mesh(new THREE.BoxGeometry(0.34, 0.85, 0.34), '#A39A8F', 0.8, 2.85, -0.55));   // stone chimney
    g.add(mesh(new THREE.BoxGeometry(0.72, 1.12, 0.06), darken(col, 0.1), 0, 0.56, 1.22));   // door
    g.add(mesh(new THREE.SphereGeometry(0.05, 8, 6), '#F2C14E', 0.22, 0.55, 1.27));
    g.add(mesh(new THREE.BoxGeometry(1.3, 0.14, 0.55), '#8F6243', 0, 0.07, 1.45));   // doorstep
    const winMat = new THREE.MeshBasicMaterial({ color: '#FFE2A0' });
    for (const s of [-1, 1]) {
      g.add(mesh(new THREE.BoxGeometry(0.64, 0.64, 0.05), '#6E4B33', s * 0.92, 1.18, 1.21));
      const w = new THREE.Mesh(new THREE.PlaneGeometry(0.52, 0.52), winMat);
      w.position.set(s * 0.92, 1.18, 1.24);
      g.add(w);
      for (const k of [-1, 1]) g.add(mesh(new THREE.BoxGeometry(0.2, 0.62, 0.04), col, s * 0.92 + k * 0.43, 1.18, 1.235));   // shutters
      g.add(mesh(new THREE.BoxGeometry(0.66, 0.16, 0.18), '#B9773E', s * 0.92, 0.82, 1.3));   // window box under the window
      g.add(mesh(new THREE.IcosahedronGeometry(0.1, 0), s < 0 ? '#E07BB5' : '#F2C14E', s * 0.92 - 0.15, 0.95, 1.3), mesh(new THREE.IcosahedronGeometry(0.1, 0), '#D9553B', s * 0.92 + 0.15, 0.95, 1.3));
    }
    // name plate
    const plate = new THREE.Mesh(new THREE.PlaneGeometry(1.3, 0.34), new THREE.MeshBasicMaterial({
      map: canvasTex(textCanvas(m.name, { w: 384, h: 100, size: 54, bg: '#FFF6E6', border: '#8F6243', radius: 22, color: '#4A3528', font: 'Jua', fit: 350 })), transparent: true,
    }));
    plate.position.set(0, 1.64, 1.25);
    g.add(plate);
    // chimney smoke
    const puffs = [0, 1, 2].map(k => {
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: smokeTexture(), transparent: true, depthWrite: false, opacity: 0.6 }));
      sp.position.set(0.8, 3.4, -0.55); g.add(sp);
      return { sp, off: k / 3 + i * 0.13 };
    });
    updaters.push(t => puffs.forEach(({ sp, off }) => {
      const k = (t * 0.22 + off) % 1;
      sp.position.set(0.8 + Math.sin(k * 4 + off * 9) * 0.2, 3.35 + k * 1.6, -0.55 - k * 0.3);
      sp.scale.setScalar(0.35 + k * 0.7);
      sp.material.opacity = 0.55 * (1 - k);
    }));
    // mailbox (at my house the flag goes up when there is a new letter)
    const mb = new THREE.Group();
    mb.add(mesh(new THREE.CylinderGeometry(0.04, 0.05, 0.85, 6), '#6E4B33', 0, 0.42, 0));
    mb.add(mesh(new THREE.BoxGeometry(0.3, 0.24, 0.42), '#E4605A', 0, 0.95, 0));
    const flagPivot = new THREE.Group();
    flagPivot.userData.dynamic = true;   // flag that goes up when a new letter arrives
    flagPivot.position.set(0.17, 0.92, -0.1);
    const flag = mesh(new THREE.BoxGeometry(0.03, 0.24, 0.12), '#F7D58B', 0, 0.12, 0);
    flagPivot.add(flag);
    mb.add(flagPivot);
    mb.position.set(1.15, 0, 1.85);
    g.add(mb);
    // on a birthday: balloons + cake
    let cake = null;
    if (birthdayIds.has(m.id)) {
      const b = balloons(-1.15, 1.9, 2.4);
      b.userData.dynamic = true;
      g.add(b);
      updaters.push(t => b.userData.update(t));
      cake = new THREE.Group();
      cake.add(mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.7, 6), '#B98A66', 0, 0.35, 0));
      cake.add(mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.06, 18), '#FFFDF8', 0, 0.72, 0));
      cake.add(mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.22, 18), '#F4B8C0', 0, 0.86, 0));
      cake.add(mesh(new THREE.CylinderGeometry(0.31, 0.31, 0.05, 18), '#FFFFFF', 0, 0.98, 0));
      for (let k = 0; k < 3; k++) {
        const a = k * 2.1;
        cake.add(mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.14, 6), '#F7D58B', Math.cos(a) * 0.15, 1.07, Math.sin(a) * 0.15));
        const fl = new THREE.Mesh(new THREE.SphereGeometry(0.035, 6, 4), new THREE.MeshBasicMaterial({ color: '#FFB347' }));
        fl.position.set(Math.cos(a) * 0.15, 1.17, Math.sin(a) * 0.15);
        cake.add(fl);
      }
      cake.position.set(-1.35, 0, 2.75);
      g.add(cake);
    }
    g.position.set(sp.x, 0, sp.z);
    group.add(g);
    boxes.push({ minX: sp.x - 1.45, maxX: sp.x + 1.45, minZ: sp.z - 1.3, maxZ: sp.z + 1.3 });
    // mailbox and cake spots (house space → world)
    const toWorld = (lx, lz) => { const v = new THREE.Vector3(lx, 0, lz).applyAxisAngle(new THREE.Vector3(0, 1, 0), g.rotation.y); return { x: sp.x + v.x, z: sp.z + v.z }; };
    const mbw = toWorld(1.15, 1.85); colliders.push({ x: mbw.x, z: mbw.z, r: 0.3 });
    if (cake) { const cw = toWorld(-1.35, 2.75); colliders.push({ x: cw.x, z: cw.z, r: 0.45 }); }

    // the person in front of the house
    const npc = createCharacter({ type: 'family', ...m.look, shadows: false });
    npc.root.userData.dynamic = true;
    npc.root.position.set(sp.npcX, 0, sp.npcZ);   // stands at the door facing the screen
    if (birthdayIds.has(m.id)) npc.setParty(true);
    group.add(npc.root);
    const npcCol = { x: npc.root.position.x, z: npc.root.position.z, r: 0.45 };
    colliders.push(npcCol);

    const isMe = m.id === meId();
    const it = addInteract(`house:${m.id}`, L(`${m.nick || m.role || m.name}네 집`, `${m.nick || m.role || m.name}'s house`), m.emoji || '🏠', L(`${m.nick || m.role || m.name}네 집 구경`, `Visit ${m.nick || m.role || m.name}'s house`), sp.npcX, sp.npcZ, 2.5, 3.9);
    it.label.position.z = sp.z + 1.1;   // the name tag sits above the front of the roof
    it.member = m.id;
    houses.push({ m, sp, g, npc, npcCol, it, flagPivot, badge: null, badgeText: '', bubbles: new Map(), bub: null, bubT: 0, sayT: 1 + i, sayIdx: 0, near: false, isMe });
  }
  ms.slice(0, MAX_HOUSES).forEach((m, i) => addHouse(m, i));

  /* Small marks above a house: 💗 number of hearts · 🎂 birthday · 💌 my new letters */
  function badgeFor(h) {
    const bits = [];
    if (birthdayIds.has(h.m.id)) bits.push(L('🎂 생일!', '🎂 Birthday'));
    if (h.m.id === meId()) { const n = unreadForMe().length; if (n) bits.push(`💌 ${n}`); }
    const hearts = heartsTo(h.m.id).length;
    if (hearts) bits.push(`💗 ${hearts}`);
    return bits.join('  ');
  }
  function linesFor(h) {
    const id = h.m.id, lines = [];
    if (birthdayIds.has(id)) lines.push(L('오늘 내 생일이야! 🎂', "It's my birthday today! 🎂"));
    const a = answersOn(dayKey()).find(x => x.who === id);
    if (a) lines.push(`💬 ${cut(a.text, L(20, 32))}`);
    const l = list('letters').find(x => x.who === id && !isLockedLetter(x));
    if (l) lines.push(`✉️ ${cut(l.message.split('\n')[0], L(18, 30))}`);
    if (h.m.line) lines.push(h.m.line);
    return lines.length ? lines : [L('어서 와! 🙌', 'Welcome! 🙌')];
  }
  function refresh() {
    const mine = meId();
    const now_ = members();
    // someone made a new character → build a house on the next free spot
    now_.forEach(m => { if (houses.length < MAX_HOUSES && !houses.some(h => h.m.id === m.id)) addHouse(m, houses.length); });
    houses.forEach(h => {
      // if a family member changed their look in 'Customize my character', renew the character in front of the house too
      const fresh = now_.find(x => x.id === h.m.id);
      if (fresh) {
        const key = JSON.stringify(fresh.look);
        if (h.lookKey && key !== h.lookKey) {
          const old = h.npc, n = createCharacter({ type: 'family', ...fresh.look, shadows: false });
          n.root.position.copy(old.root.position); n.root.rotation.y = old.root.rotation.y;
          if (birthdayIds.has(h.m.id)) n.setParty(true);
          group.remove(old.root); old.root.traverse(o => o.geometry?.dispose());
          group.add(n.root); h.npc = n;
        }
        h.lookKey = key; h.m = fresh;
      }
      h.isMe = h.m.id === mine;
      h.npc.root.visible = !h.isMe;   // at my own house, I am the one standing there
      h.npcCol.r = h.isMe ? 0 : 0.45;
      const want = h.isMe ? L('🏠 내 집', '🏠 My house') : L(`${h.m.emoji || '🏠'} ${h.m.nick || h.m.role || h.m.name}네 집`, `${h.m.emoji || '🏠'} ${h.m.nick || h.m.role || h.m.name}'s house`);
      if (h.it.labelText !== want) {
        h.it.labelText = want;
        const fresh = labelSprite(want), old = h.it.label.material.map;
        h.it.label.material.map = fresh.material.map; h.it.label.material.needsUpdate = true;
        old.dispose(); fresh.material.dispose();
      }
      h.it.text = h.isMe ? L('내 집', 'My house') : L(`${h.m.nick || h.m.role || h.m.name}네 집`, `${h.m.nick || h.m.role || h.m.name}'s house`);
      h.it.action = h.isMe ? L('내 집 들어가기', 'Go into my house') : L(`${h.m.nick || h.m.role || h.m.name}네 집 구경`, `Visit ${h.m.nick || h.m.role || h.m.name}'s house`);
      const unread = h.isMe && unreadForMe().length > 0;
      h.flagPivot.rotation.z = unread ? -1.4 : 0;
      const text = badgeFor(h);
      if (text !== h.badgeText) {
        h.badgeText = text;
        if (h.badge) { group.remove(h.badge); h.badge.material.map.dispose(); h.badge.material.dispose(); h.badge = null; }
        if (text) {
          h.badge = labelSprite(text, { scale: 2.4, bg: 'rgba(255,244,228,.96)', color: '#B5552B' });
          h.badge.position.set(h.sp.x, 4.45, h.sp.z);
          group.add(h.badge);
        }
      }
      // the speech bubble is picked again the next time you come close
      h.lines = linesFor(h);
    });
  }
  refresh();

  /* Come close → they look at you; the first time they wave; speech bubble */
  function update(dt, t, p, posing = false) {
    houses.forEach(h => {
      if (h.badge) {   // the 💗🎂💌 marks fade out with distance too
        const bd = Math.hypot(p.x - h.sp.x, p.z - h.sp.z);
        h.badge.visible = !posing && bd < 30;
        h.badge.material.opacity = clamp((30 - bd) / 8, 0, 1);
      }
      if (h.isMe) return;
      const n = h.npc, dx = p.x - n.root.position.x, dz = p.z - n.root.position.z, d = Math.hypot(dx, dz);
      if (posing) { n.animate(dt, 0, t); if (h.bub) { h.bub.visible = false; h.bub = null; } return; }   // taking a family photo
      n.root.visible = d < 48;   // not drawn when very far away
      if (!n.root.visible) return;
      n.animate(dt, 0, t);
      const want = d < 7 ? clamp(Math.atan2(dx, dz) - n.root.rotation.y, -0.9, 0.9) : 0;
      n.head.rotation.y += (want - n.head.rotation.y) * Math.min(1, dt * 4);
      const near = d < 4.2;
      if (near && !h.near) { n.wave(1.4); h.sayT = Math.min(h.sayT, 0.4); }
      h.near = near;
      h.sayT -= dt;
      if (near && h.sayT <= 0 && !h.bub) {
        const line = h.lines[h.sayIdx++ % h.lines.length];
        if (!h.bubbles.has(line)) {
          if (h.bubbles.size > 6) { h.bubbles.forEach(s => { group.remove(s); s.material.map.dispose(); s.material.dispose(); }); h.bubbles.clear(); }
          const s = labelSprite(line, { scale: 3.6 }); s.visible = false; group.add(s); h.bubbles.set(line, s);
        }
        h.bub = h.bubbles.get(line);
        h.bub.position.set(n.root.position.x, 2.75, n.root.position.z);
        h.bub.visible = true; h.bubT = 3; h.it.muted = true;   // while a speech bubble shows, the house name tag hides (so they do not overlap)
        h.sayT = 6 + Math.random() * 4;
      }
      if (h.bub) { h.bubT -= dt; if (h.bubT <= 0 || !near) { h.bub.visible = false; h.bub = null; h.it.muted = false; } }
    });
  }

  return {
    houses, refresh, update,
    npc: id => houses.find(h => h.m.id === id)?.npc || null,
    spot: id => houses.find(h => h.m.id === id)?.sp || null,
  };
}

/* ---------- 🌱 The tree we grow together ---------- */
export function buildFamilyTree({ group, colliders, addInteract, updaters }) {
  const g = new THREE.Group();
  g.userData.dynamic = true;   // grows and sways when watered
  g.position.set(TREE.x, 0, TREE.z);
  group.add(g);
  // mound of soil + low fence
  g.add(mesh(new THREE.CylinderGeometry(1.5, 1.7, 0.22, 24), '#9C7A5E', 0, 0.11, 0));
  g.add(mesh(new THREE.CylinderGeometry(1.35, 1.35, 0.06, 24), '#6B4A33', 0, 0.23, 0));
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    if (Math.abs(Math.sin(a)) > 0.9 && Math.cos(a) > -0.2 && Math.sin(a) > 0) continue;   // leave one gap at the front (the way in)
    g.add(mesh(new THREE.BoxGeometry(0.12, 0.5, 0.12), '#A0703F', Math.cos(a) * 1.9, 0.25, Math.sin(a) * 1.9));
  }
  const ring = mesh(new THREE.TorusGeometry(1.9, 0.035, 6, 40), '#A0703F', 0, 0.42, 0);
  ring.rotation.x = Math.PI / 2;
  g.add(ring);

  // look of each stage
  const seed = mesh(new THREE.SphereGeometry(0.16, 10, 8), '#8C6B55', 0, 0.3, 0);
  seed.scale.set(1, 0.7, 1.2);
  const sprout = new THREE.Group();
  sprout.add(mesh(new THREE.CylinderGeometry(0.03, 0.04, 0.5, 6), '#8DC175', 0, 0.48, 0));
  for (const s of [-1, 1]) { const l = mesh(new THREE.SphereGeometry(0.16, 10, 8), '#9ED08A', s * 0.15, 0.74, 0); l.scale.set(1.3, 0.5, 0.8); l.rotation.z = s * 0.5; sprout.add(l); }
  const leafMat = new THREE.MeshToonMaterial({ color: '#86C174', gradientMap });   // season color · fades when thirsty (a material for this tree only)
  const sapling = new THREE.Group();
  sapling.add(mesh(new THREE.CylinderGeometry(0.08, 0.12, 1.3, 8), '#A47A5C', 0, 0.85, 0));
  [[0, 1.75, 0, 0.55], [0.35, 1.45, 0.1, 0.38], [-0.32, 1.5, -0.1, 0.4]].forEach(([x, y, z, s]) => { const b = mesh(new THREE.IcosahedronGeometry(1, 1), leafMat, x, y, z); b.scale.setScalar(s); sapling.add(b); });
  const big = new THREE.Group();
  big.add(mesh(new THREE.CylinderGeometry(0.22, 0.34, 2.2, 10), '#A47A5C', 0, 1.3, 0));
  const leafBlobs = [[0, 3.1, 0, 1.25], [0.9, 2.65, 0.25, 0.9], [-0.85, 2.75, -0.2, 0.95], [0.15, 3.85, -0.1, 0.85], [-0.3, 2.6, 0.75, 0.75]];
  leafBlobs.forEach(([x, y, z, s]) => { const b = mesh(new THREE.IcosahedronGeometry(1, 1), leafMat, x, y, z); b.scale.setScalar(s); big.add(b); });
  const blossoms = new THREE.Group(), fruits = new THREE.Group();
  const fGeo = new THREE.IcosahedronGeometry(0.13, 0), apple = new THREE.SphereGeometry(0.15, 10, 8);
  for (let i = 0; i < 26; i++) {
    const [x, y, z, s] = leafBlobs[i % leafBlobs.length];
    const v = new THREE.Vector3().setFromSphericalCoords(s * 1.02, Math.acos(Math.random() * 1.6 - 0.6), Math.random() * Math.PI * 2);
    blossoms.add(mesh(fGeo, i % 3 ? '#FFF6D8' : '#F7E7A6', x + v.x, y + v.y, z + v.z));   // persimmon blossoms
    if (i % 2 === 0) fruits.add(mesh(apple, i % 4 ? '#F28C28' : '#E9741F', x + v.x * 0.95, y + v.y * 0.95 - 0.1, z + v.z * 0.95));   // persimmons
  }
  big.add(blossoms, fruits);
  g.add(seed, sprout, sapling, big);
  colliders.push({ x: TREE.x, z: TREE.z, r: TREE.r });

  // sign
  const signC = textCanvas(treeInfo().name, { w: 420, h: 110, size: 50, bg: '#FFF6E6', radius: 26, color: '#5E7D4A', border: '#93A35A', fit: 380 });
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 0.4), new THREE.MeshBasicMaterial({ map: canvasTex(signC), transparent: true }));
  const post = mesh(new THREE.CylinderGeometry(0.04, 0.05, 0.9, 6), '#A47A5C', 1.35, 0.45, 2.2);
  sign.position.set(1.35, 0.95, 2.23);
  g.add(post, sign);
  colliders.push({ x: TREE.x + 1.35, z: TREE.z + 2.2, r: 0.2 });

  const it = addInteract('tree', treeInfo().name, '🌱', L('물 주기', 'Water the tree'), TREE.x, TREE.z + 0.4, 3.2, 5.4);
  let status = null, statusText = '', stage = -1, pop = 0;
  function show(st) {
    seed.visible = st === 0;
    sprout.visible = st === 1;
    sapling.visible = st === 2;
    big.visible = st >= 3;
    blossoms.visible = st >= 4;
    fruits.visible = st >= 5;
    big.scale.setScalar(st >= 5 ? 1.2 : st === 4 ? 1.1 : 1);
  }
  function refresh() {
    const info = treeInfo();
    if (info.stage !== stage) {
      const grew = stage >= 0 && info.stage > stage;
      stage = info.stage; show(stage);
      if (grew) pop = 1;
    }
    const LEAVES = { green: ['#86C174', '#A9B97A'], autumn: ['#E39B3B', '#C2A46A'], winter: ['#EEF3F8', '#D7DDE3'] }[getSeason()] || ['#86C174', '#A9B97A'];
    leafMat.color.set(info.thirsty ? LEAVES[1] : LEAVES[0]);   // season color (faded when thirsty)
    const n = info.todayWho.length, cap = s => s.charAt(0).toUpperCase() + s.slice(1);
    const text = info.thirsty ? L('💧 목말라요… 물을 주세요', "💧 I'm thirsty… please water me") : n ? L(`💧 오늘 ${n}명이 물을 줬어요`, `💧 Watered by ${n} ${n === 1 ? 'person' : 'people'} today`) : L(`🌱 ${info.stageName} · 물 ${info.total}번`, `🌱 ${cap(info.stageName)} · watered ${info.total}×`);
    if (text !== statusText) {
      statusText = text;
      if (status) { group.remove(status); status.material.map.dispose(); status.material.dispose(); }
      status = labelSprite(text, { scale: 3.4, bg: 'rgba(240,250,235,.95)', color: '#4F7A3E' });
      status.position.set(TREE.x, 4.7, TREE.z);
      group.add(status);
    }
    return info;
  }
  refresh();
  updaters.push((t, dt) => {
    if (pop > 0) { pop = Math.max(0, pop - dt / 0.9); const k = 1 + Math.sin((1 - pop) * Math.PI) * 0.25; g.scale.set(k, k, k); } else if (g.scale.x !== 1) g.scale.set(1, 1, 1);
    const sway = Math.sin(t * 1.1) * 0.03;
    big.rotation.z = sway; sapling.rotation.z = sway * 1.5; sprout.rotation.z = sway * 2;
  });
  return { it, refresh, top: new THREE.Vector3(TREE.x, 2.6, TREE.z) };
}

