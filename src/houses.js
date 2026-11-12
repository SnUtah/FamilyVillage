import * as THREE from 'three';
import { mesh, textCanvas, canvasTex, labelSprite, clamp, gradientMap } from './util.js';

import { createCharacter } from './character.js';
import { balloons } from './world.js';
import {
  members, meId, heartsTo, birthdaysOn, unreadForMe, answersOn, isLockedLetter, treeInfo, dayKey,
} from './family.js';
import { list } from './store.js';

/* =========================================================
   🏘️ 가족 집 골목 (구성원마다 통나무집 하나 + 집 앞에 서 있는 그 사람)
   - 지붕·문·덧창은 그 사람의 색, 굴뚝에서는 연기가 모락모락
   🌱 골목 끝의 '함께 키우는 나무'
   - 집 앞 가족은 걸어 다니지 않아요 (렉 방지). 다가가면 나를 바라보고 손을 흔들며 말을 걸어요
   - 말풍선 = 그 사람이 오늘 남긴 답 · 최근 편지 · config의 한마디
   ========================================================= */
export const STREET = { side: 5.0, front: 2.35, z0: -6.5, z1: -17.5 };
export const TREE = { x: 0, z: -20.2, r: 1.4 };

const darken = (hex, k = 0.25) => '#' + new THREE.Color(hex).lerp(new THREE.Color('#5A4038'), k).getHexString();
const cut = (s, n) => { s = String(s || '').replace(/\s+/g, ' ').trim(); return s.length > n ? s.slice(0, n - 1) + '…' : s; };

/* 집 자리: 왼쪽·오른쪽 번갈아, 오른쪽은 반 칸 어긋나게 */
export function houseSpots(n) {
  const nl = Math.ceil(n / 2);
  const gap = Math.min(5.5, nl > 1 ? (STREET.z0 - STREET.z1) / (nl - 1) : 5.5);
  return Array.from({ length: n }, (_, i) => {
    const side = i % 2 === 0 ? -1 : 1, slot = Math.floor(i / 2);
    const z = STREET.z0 - slot * gap - (side > 0 ? gap / 2 : 0);
    return { side, z, x: side * STREET.side, npcX: side * STREET.front };
  });
}

/* 통나무 벽 무늬 (모든 집이 같이 씀) */
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
/* 굴뚝 연기 (부드러운 동그라미) */
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
  const spots = houseSpots(ms.length);
  const houses = [];
  const today = dayKey();
  const birthdayIds = new Set(birthdaysOn(today).map(m => m.id));

  ms.forEach((m, i) => {
    const sp = spots[i];
    const col = m.look.outfit;
    const g = new THREE.Group();
    // 앞이 +z인 통나무집을 만든 뒤 골목 쪽으로 돌림
    const wall = new THREE.Mesh(new THREE.BoxGeometry(2.8, 1.9, 2.4), logMaterial());
    wall.position.y = 0.95; wall.castShadow = wall.receiveShadow = true;
    g.add(wall);
    const tri = new THREE.Shape(); tri.moveTo(-1.4, 0); tri.lineTo(1.4, 0); tri.lineTo(0, 1.08); tri.closePath();
    const gable = new THREE.Mesh(new THREE.ExtrudeGeometry(tri, { depth: 2.4, bevelEnabled: false }), logMaterial());
    gable.position.set(0, 1.9, -1.2);
    g.add(gable);
    const roofCol = darken(col, 0.28);
    for (const sd of [-1, 1]) {   // 맞배지붕 두 장 (그 사람 색)
      const slab = mesh(new THREE.BoxGeometry(1.98, 0.14, 2.9), roofCol, sd * 0.78, 2.5, 0);
      slab.rotation.z = -sd * 0.66;
      g.add(slab);
    }
    g.add(mesh(new THREE.BoxGeometry(0.16, 0.16, 2.95), darken(col, 0.4), 0, 3.08, 0));
    g.add(mesh(new THREE.BoxGeometry(0.34, 0.85, 0.34), '#A39A8F', 0.8, 2.85, -0.55));   // 돌 굴뚝
    g.add(mesh(new THREE.BoxGeometry(0.72, 1.12, 0.06), darken(col, 0.1), 0, 0.56, 1.22));   // 문
    g.add(mesh(new THREE.SphereGeometry(0.05, 8, 6), '#F2C14E', 0.22, 0.55, 1.27));
    g.add(mesh(new THREE.BoxGeometry(1.3, 0.14, 0.55), '#8F6243', 0, 0.07, 1.45));   // 문 앞 디딤판
    const winMat = new THREE.MeshBasicMaterial({ color: '#FFE2A0' });
    for (const s of [-1, 1]) {
      g.add(mesh(new THREE.BoxGeometry(0.64, 0.64, 0.05), '#6E4B33', s * 0.92, 1.18, 1.21));
      const w = new THREE.Mesh(new THREE.PlaneGeometry(0.52, 0.52), winMat);
      w.position.set(s * 0.92, 1.18, 1.24);
      g.add(w);
      for (const k of [-1, 1]) g.add(mesh(new THREE.BoxGeometry(0.2, 0.62, 0.04), col, s * 0.92 + k * 0.43, 1.18, 1.235));   // 덧창
      g.add(mesh(new THREE.BoxGeometry(0.66, 0.16, 0.18), '#B9773E', s * 0.92, 0.82, 1.3));   // 창 아래 화분
      g.add(mesh(new THREE.IcosahedronGeometry(0.1, 0), s < 0 ? '#E07BB5' : '#F2C14E', s * 0.92 - 0.15, 0.95, 1.3), mesh(new THREE.IcosahedronGeometry(0.1, 0), '#D9553B', s * 0.92 + 0.15, 0.95, 1.3));
    }
    // 문패
    const plate = new THREE.Mesh(new THREE.PlaneGeometry(1.3, 0.34), new THREE.MeshBasicMaterial({
      map: canvasTex(textCanvas(m.name, { w: 384, h: 100, size: 54, bg: '#FFF6E6', border: '#8F6243', radius: 22, color: '#4A3528', font: 'Jua' })), transparent: true,
    }));
    plate.position.set(0, 1.64, 1.25);
    g.add(plate);
    // 굴뚝 연기
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
    // 우체통 (내 집이면 새 편지가 있을 때 깃발이 올라가요)
    const mb = new THREE.Group();
    mb.add(mesh(new THREE.CylinderGeometry(0.04, 0.05, 0.85, 6), '#6E4B33', 0, 0.42, 0));
    mb.add(mesh(new THREE.BoxGeometry(0.3, 0.24, 0.42), '#E4605A', 0, 0.95, 0));
    const flagPivot = new THREE.Group();
    flagPivot.position.set(0.17, 0.92, -0.1);
    const flag = mesh(new THREE.BoxGeometry(0.03, 0.24, 0.12), '#F7D58B', 0, 0.12, 0);
    flagPivot.add(flag);
    mb.add(flagPivot);
    mb.position.set(1.15, 0, 1.85);
    g.add(mb);
    // 생일이면 풍선 + 케이크
    let cake = null;
    if (birthdayIds.has(m.id)) {
      const b = balloons(-1.15, 1.9, 2.4);
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
      cake.position.set(-0.2, 0, 2.3);
      g.add(cake);
    }
    g.position.set(sp.x, 0, sp.z);
    g.rotation.y = sp.side < 0 ? Math.PI / 2 : -Math.PI / 2;
    group.add(g);
    boxes.push({ minX: sp.x - 1.25, maxX: sp.x + 1.25, minZ: sp.z - 1.45, maxZ: sp.z + 1.45 });
    // 우체통·케이크 자리 (집 기준 → 월드)
    const toWorld = (lx, lz) => { const v = new THREE.Vector3(lx, 0, lz).applyAxisAngle(new THREE.Vector3(0, 1, 0), g.rotation.y); return { x: sp.x + v.x, z: sp.z + v.z }; };
    const mbw = toWorld(1.15, 1.85); colliders.push({ x: mbw.x, z: mbw.z, r: 0.3 });
    if (cake) { const cw = toWorld(-0.2, 2.3); colliders.push({ x: cw.x, z: cw.z, r: 0.45 }); }

    // 집 앞의 그 사람
    const npc = createCharacter({ type: 'family', ...m.look, shadows: false });
    npc.root.position.set(sp.npcX, 0, sp.z + (sp.side < 0 ? 0.55 : -0.55));
    npc.root.rotation.y = sp.side < 0 ? Math.PI / 2 : -Math.PI / 2;
    if (birthdayIds.has(m.id)) npc.setParty(true);
    group.add(npc.root);
    const npcCol = { x: npc.root.position.x, z: npc.root.position.z, r: 0.45 };
    colliders.push(npcCol);

    const isMe = m.id === meId();
    const it = addInteract(`house:${m.id}`, `${m.role || m.name}네 집`, m.emoji || '🏠', `${m.role || m.name}네 집 구경`, sp.npcX, sp.z, 2.5, 3.6);
    it.label.position.x = sp.x;
    it.member = m.id;
    houses.push({ m, sp, g, npc, npcCol, it, flagPivot, badge: null, badgeText: '', bubbles: new Map(), bub: null, bubT: 0, sayT: 1 + i, sayIdx: 0, near: false, isMe });
  });

  /* 집 위의 작은 표시: 💗 하트 수 · 🎂 생일 · 💌 내 새 편지 */
  function badgeFor(h) {
    const bits = [];
    if (birthdayIds.has(h.m.id)) bits.push('🎂 생일!');
    if (h.m.id === meId()) { const n = unreadForMe().length; if (n) bits.push(`💌 ${n}`); }
    const hearts = heartsTo(h.m.id).length;
    if (hearts) bits.push(`💗 ${hearts}`);
    return bits.join('  ');
  }
  function linesFor(h) {
    const id = h.m.id, lines = [];
    if (birthdayIds.has(id)) lines.push('오늘 내 생일이야! 🎂');
    const a = answersOn(dayKey()).find(x => x.who === id);
    if (a) lines.push(`💬 ${cut(a.text, 20)}`);
    const l = list('letters').find(x => x.who === id && !isLockedLetter(x));
    if (l) lines.push(`✉️ ${cut(l.message.split('\n')[0], 18)}`);
    if (h.m.line) lines.push(h.m.line);
    return lines.length ? lines : ['어서 와! 🙌'];
  }
  function refresh() {
    const mine = meId();
    const now_ = members();
    houses.forEach(h => {
      // 가족이 '내 캐릭터 꾸미기'로 모습을 바꿨으면 집 앞 캐릭터도 새로
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
      h.npc.root.visible = !h.isMe;   // 내 집 앞엔 내가 직접 서 있으니까
      h.npcCol.r = h.isMe ? 0 : 0.45;
      const want = h.isMe ? '🏠 내 집' : `${h.m.emoji || '🏠'} ${h.m.role || h.m.name}네 집`;
      if (h.it.labelText !== want) {
        h.it.labelText = want;
        const fresh = labelSprite(want), old = h.it.label.material.map;
        h.it.label.material.map = fresh.material.map; h.it.label.material.needsUpdate = true;
        old.dispose(); fresh.material.dispose();
      }
      h.it.text = h.isMe ? '내 집' : `${h.m.role || h.m.name}네 집`;
      h.it.action = h.isMe ? '내 집 들어가기' : `${h.m.role || h.m.name}네 집 구경`;
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
      // 말풍선은 다음에 다가올 때 새로 고름
      h.lines = linesFor(h);
    });
  }
  refresh();

  /* 다가오면 바라보고, 처음 다가올 땐 손 흔들고, 말풍선 */
  function update(dt, t, p, posing = false) {
    houses.forEach(h => {
      if (h.isMe) return;
      const n = h.npc, dx = p.x - n.root.position.x, dz = p.z - n.root.position.z, d = Math.hypot(dx, dz);
      if (posing) { n.animate(dt, 0, t); if (h.bub) { h.bub.visible = false; h.bub = null; } return; }   // 가족사진 찍는 중
      n.root.visible = d < 48;   // 아주 멀면 그리지 않음
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
        h.bub.visible = true; h.bubT = 3;
        h.sayT = 6 + Math.random() * 4;
      }
      if (h.bub) { h.bubT -= dt; if (h.bubT <= 0 || !near) { h.bub.visible = false; h.bub = null; } }
    });
  }

  return {
    houses, refresh, update,
    npc: id => houses.find(h => h.m.id === id)?.npc || null,
    spot: id => houses.find(h => h.m.id === id)?.sp || null,
  };
}

/* ---------- 🌱 함께 키우는 나무 ---------- */
export function buildFamilyTree({ group, colliders, addInteract, updaters }) {
  const g = new THREE.Group();
  g.position.set(TREE.x, 0, TREE.z);
  group.add(g);
  // 흙 둔덕 + 낮은 울타리
  g.add(mesh(new THREE.CylinderGeometry(1.5, 1.7, 0.22, 24), '#9C7A5E', 0, 0.11, 0));
  g.add(mesh(new THREE.CylinderGeometry(1.35, 1.35, 0.06, 24), '#6B4A33', 0, 0.23, 0));
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    if (Math.abs(Math.sin(a)) > 0.9 && Math.cos(a) > -0.2 && Math.sin(a) > 0) continue;   // 앞쪽 한 칸은 비워 둠 (드나드는 곳)
    g.add(mesh(new THREE.BoxGeometry(0.12, 0.5, 0.12), '#A0703F', Math.cos(a) * 1.9, 0.25, Math.sin(a) * 1.9));
  }
  const ring = mesh(new THREE.TorusGeometry(1.9, 0.035, 6, 40), '#A0703F', 0, 0.42, 0);
  ring.rotation.x = Math.PI / 2;
  g.add(ring);

  // 단계별 모습
  const seed = mesh(new THREE.SphereGeometry(0.16, 10, 8), '#8C6B55', 0, 0.3, 0);
  seed.scale.set(1, 0.7, 1.2);
  const sprout = new THREE.Group();
  sprout.add(mesh(new THREE.CylinderGeometry(0.03, 0.04, 0.5, 6), '#8DC175', 0, 0.48, 0));
  for (const s of [-1, 1]) { const l = mesh(new THREE.SphereGeometry(0.16, 10, 8), '#9ED08A', s * 0.15, 0.74, 0); l.scale.set(1.3, 0.5, 0.8); l.rotation.z = s * 0.5; sprout.add(l); }
  const sapling = new THREE.Group();
  sapling.add(mesh(new THREE.CylinderGeometry(0.08, 0.12, 1.3, 8), '#A47A5C', 0, 0.85, 0));
  [[0, 1.75, 0, 0.55], [0.35, 1.45, 0.1, 0.38], [-0.32, 1.5, -0.1, 0.4]].forEach(([x, y, z, s]) => { const b = mesh(new THREE.IcosahedronGeometry(1, 1), '#9ED08A', x, y, z); b.scale.setScalar(s); sapling.add(b); });
  const big = new THREE.Group();
  big.add(mesh(new THREE.CylinderGeometry(0.22, 0.34, 2.2, 10), '#A47A5C', 0, 1.3, 0));
  const leafBlobs = [[0, 3.1, 0, 1.25], [0.9, 2.65, 0.25, 0.9], [-0.85, 2.75, -0.2, 0.95], [0.15, 3.85, -0.1, 0.85], [-0.3, 2.6, 0.75, 0.75]];
  const leafMat = new THREE.MeshToonMaterial({ color: '#9DB65A', gradientMap });   // 목마르면 색이 바래요 (이 나무만의 재질)
  leafBlobs.forEach(([x, y, z, s]) => { const b = mesh(new THREE.IcosahedronGeometry(1, 1), leafMat, x, y, z); b.scale.setScalar(s); big.add(b); });
  const blossoms = new THREE.Group(), fruits = new THREE.Group();
  const fGeo = new THREE.IcosahedronGeometry(0.13, 0), apple = new THREE.SphereGeometry(0.15, 10, 8);
  for (let i = 0; i < 26; i++) {
    const [x, y, z, s] = leafBlobs[i % leafBlobs.length];
    const v = new THREE.Vector3().setFromSphericalCoords(s * 1.02, Math.acos(Math.random() * 1.6 - 0.6), Math.random() * Math.PI * 2);
    blossoms.add(mesh(fGeo, i % 3 ? '#FFF6D8' : '#F7E7A6', x + v.x, y + v.y, z + v.z));   // 감꽃
    if (i % 2 === 0) fruits.add(mesh(apple, i % 4 ? '#F28C28' : '#E9741F', x + v.x * 0.95, y + v.y * 0.95 - 0.1, z + v.z * 0.95));   // 감
  }
  big.add(blossoms, fruits);
  g.add(seed, sprout, sapling, big);
  colliders.push({ x: TREE.x, z: TREE.z, r: TREE.r });

  // 팻말
  const signC = textCanvas(treeInfo().name, { w: 420, h: 110, size: 50, bg: '#FFF6E6', radius: 26, color: '#5E7D4A', border: '#93A35A' });
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 0.4), new THREE.MeshBasicMaterial({ map: canvasTex(signC), transparent: true }));
  const post = mesh(new THREE.CylinderGeometry(0.04, 0.05, 0.9, 6), '#A47A5C', 1.35, 0.45, 2.2);
  sign.position.set(1.35, 0.95, 2.23);
  g.add(post, sign);
  colliders.push({ x: TREE.x + 1.35, z: TREE.z + 2.2, r: 0.2 });

  const it = addInteract('tree', treeInfo().name, '🌱', '물 주기', TREE.x, TREE.z + 0.4, 3.2, 5.4);
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
    leafMat.color.set(info.thirsty ? '#BBAE73' : '#9DB65A');
    const text = info.thirsty ? '💧 목말라요… 물을 주세요' : info.todayWho.length ? `💧 오늘 ${info.todayWho.length}명이 물을 줬어요` : `🌱 ${info.stageName} · 물 ${info.total}번`;
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

