import * as THREE from 'three';
import { toon, mesh, textCanvas, canvasTex, labelSprite, rand, roundRect } from './util.js';
import { throwSprite, flowerMat, bushMat } from './world.js';
import { buildHouses, buildFamilyTree } from './houses.js';
import { keyLabel } from './common.js';
import { villageName, sinceDays, visitorsOn, upcoming, ddayText, questionOn, answersOn, memberColor } from './family.js';

/* =========================================================
   상호작용 오브젝트 & 건물
   ========================================================= */
export const MUSEUM_DOOR = { x: 20, z: -8.4, r: 1.7 };
export const BED = { x: 8.2, z: 25.5, r: 1.8 };   // 🌷 가족 정원 (우체통 옆)
const cutText = (s, n) => { s = String(s || ''); return s.length > n ? s.slice(0, n - 1) + '…' : s; };
/* 캔버스 글자를 maxW 폭에 맞춰 여러 줄로 (띄어쓰기 없는 긴 글은 글자 단위로) */
function wrapText(g, text, maxW) {
  const words = String(text).split(/(\s+)/), lines = [];
  let cur = '';
  for (const w of words) {
    const t = cur + w;
    if (g.measureText(t).width > maxW && cur.trim()) { lines.push(cur.trim()); cur = w.trimStart(); }
    else cur = t;
    while (g.measureText(cur).width > maxW && cur.length > 1) {
      let k = cur.length;
      while (k > 1 && g.measureText(cur.slice(0, k)).width > maxW) k--;
      lines.push(cur.slice(0, k)); cur = cur.slice(k);
    }
  }
  if (cur.trim()) lines.push(cur.trim());
  return lines;
}

export function buildProps(scene) {
  const W = window.FAMILY;
  const group = new THREE.Group();
  scene.add(group);
  const colliders = [], boxes = [], interactables = [], updaters = [];

  function addInteract(id, text, emoji, action, x, z, r, labelY = 3.4) {
    const label = labelSprite(`${emoji} ${text}`);
    label.position.set(x, labelY, z);
    group.add(label);
    const it = { id, text, emoji, action, pos: new THREE.Vector3(x, 0, z), r, label, baseY: labelY, off: Math.random() * 6 };
    interactables.push(it);
    return it;
  }
  const facePlane = (canvas, w, h) => new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: canvasTex(canvas), transparent: true }));

  /* ---------- 🏡 우리 가족 (이젤: 오늘 다녀간 가족이 적혀요) ---------- */
  const boardC = document.createElement('canvas');
  boardC.width = 512; boardC.height = 680;
  let boardTex = null;
  function drawBoard() {
    const g2 = boardC.getContext('2d');
    g2.clearRect(0, 0, 512, 680);
    g2.fillStyle = '#FFFDF8'; roundRect(g2, 0, 0, 512, 680, 24); g2.fill();
    g2.lineWidth = 10; g2.strokeStyle = '#B07A4F'; roundRect(g2, 5, 5, 502, 670, 20); g2.stroke();
    g2.textAlign = 'center'; g2.fillStyle = '#B5552B';
    g2.font = '64px serif'; g2.fillText('🏡', 256, 105);
    g2.font = '56px "Jua"'; g2.fillText(villageName(), 256, 185);
    const days = sinceDays();
    g2.fillStyle = '#7C6A66'; g2.font = '28px "Gowun Dodum"';
    if (days > 0) g2.fillText(`함께한 지 ${days.toLocaleString()}일째`, 256, 232);
    g2.fillStyle = '#4A3B38'; g2.font = '700 32px "Gowun Dodum"'; g2.fillText('오늘 다녀간 가족', 256, 315);
    const vs = visitorsOn();
    g2.font = '30px "Gowun Dodum"';
    if (!vs.length) { g2.fillStyle = '#9A8C88'; g2.fillText('아직 아무도 안 왔어요', 256, 375); }
    vs.slice(0, 6).forEach((m, i) => {
      const col = i % 2, row = Math.floor(i / 2);
      g2.fillStyle = m.look.outfit; g2.beginPath(); g2.arc(col ? 300 : 70, 368 + row * 62, 12, 0, 7); g2.fill();
      g2.fillStyle = '#4A3B38'; g2.textAlign = 'left';
      g2.fillText(cutText(m.role || m.name, 6), col ? 322 : 92, 379 + row * 62);
      g2.textAlign = 'center';
    });
    g2.fillStyle = '#B5552B'; g2.font = '26px "Gowun Dodum"'; g2.fillText('누르면 우리 가족 소개', 256, 640);
    if (boardTex) boardTex.needsUpdate = true;
  }
  {
    const g = new THREE.Group();
    const wood = '#B98A66';
    const l1 = mesh(new THREE.BoxGeometry(0.1, 3, 0.1), wood, -0.8, 1.45, 0.1); l1.rotation.z = 0.12;
    const l2 = mesh(new THREE.BoxGeometry(0.1, 3, 0.1), wood, 0.8, 1.45, 0.1); l2.rotation.z = -0.12;
    const l3 = mesh(new THREE.BoxGeometry(0.1, 3, 0.1), wood, 0, 1.4, -0.45); l3.rotation.x = -0.3;
    const shelf = mesh(new THREE.BoxGeometry(1.9, 0.08, 0.25), wood, 0, 0.75, 0.2);
    const board = mesh(new THREE.BoxGeometry(1.9, 2.5, 0.06), '#FFFDF8', 0, 2.05, 0.2);
    board.rotation.x = -0.08;
    drawBoard();
    const face = facePlane(boardC, 1.75, 2.33);
    boardTex = face.material.map;
    face.position.set(0, 2.05, 0.235);
    face.rotation.x = -0.08;
    g.add(l1, l2, l3, shelf, board, face);
    g.position.set(-4.8, 0, 24);
    g.rotation.y = 0.35;
    group.add(g);
    colliders.push({ x: -4.8, z: 24, r: 1 });
    addInteract('family', '우리 가족', '🏡', '가족 소개 보기', -4.8, 24, 3, 3.8);
  }

  /* ---------- 💬 오늘의 질문 (광장 게시판) ---------- */
  const qC = document.createElement('canvas');
  qC.width = 512; qC.height = 400;
  let qTex = null;
  function drawQuestion() {
    const g2 = qC.getContext('2d');
    g2.fillStyle = '#D9B38C'; g2.fillRect(0, 0, 512, 400);
    for (let i = 0; i < 160; i++) { g2.fillStyle = i % 2 ? 'rgba(120,80,40,.12)' : 'rgba(255,255,255,.1)'; g2.fillRect((i * 97) % 512, (i * 61) % 400, 3, 3); }
    g2.save(); g2.translate(256, 205); g2.rotate(-0.02);
    g2.fillStyle = '#FFFDF6'; g2.shadowColor = 'rgba(0,0,0,.25)'; g2.shadowBlur = 12; g2.fillRect(-215, -170, 430, 340); g2.shadowColor = 'transparent';
    g2.fillStyle = '#E4605A'; g2.beginPath(); g2.arc(0, -160, 13, 0, 7); g2.fill();
    g2.textAlign = 'center'; g2.fillStyle = '#B5552B'; g2.font = '36px "Jua"'; g2.fillText('💬 오늘의 질문', 0, -108);
    const q = questionOn();
    g2.fillStyle = '#4A3528'; g2.font = '36px "Jua"';
    wrapText(g2, q ? q.q : '질문을 준비 중이에요', 380).slice(0, 3).forEach((ln, i) => g2.fillText(ln, 0, -40 + i * 48));
    const n = q ? answersOn(q.day).length : 0;
    g2.fillStyle = '#7C6A66'; g2.font = '26px "Gowun Dodum"';
    g2.fillText(n ? `${n}명이 답했어요 · 눌러서 답하기` : '첫 번째로 답해 보세요!', 0, 140);
    g2.restore();
    if (qTex) qTex.needsUpdate = true;
  }
  {
    const g = new THREE.Group();
    const wood = '#A47A5C';
    for (const sx of [-0.95, 0.95]) g.add(mesh(new THREE.BoxGeometry(0.12, 2.9, 0.12), wood, sx, 1.45, 0));
    g.add(mesh(new THREE.BoxGeometry(2.15, 1.75, 0.1), wood, 0, 2.05, -0.03));
    const roof = mesh(new THREE.BoxGeometry(2.5, 0.12, 0.55), '#B5452F', 0, 3.05, 0.05);
    roof.rotation.x = 0.25;
    g.add(roof);
    drawQuestion();
    const face = facePlane(qC, 1.95, 1.52);
    qTex = face.material.map;
    face.position.set(0, 2.05, 0.03);
    g.add(face);
    g.position.set(4.4, 0, -1.8);
    g.rotation.y = -0.55;
    group.add(g);
    colliders.push({ x: 4.4, z: -1.8, r: 0.9 });
    addInteract('question', '오늘의 질문', '💬', '질문에 답하기', 4.4, -1.8, 3, 3.75);
  }

  /* ---------- ✉️ 안부 우체통 (빨간 우체통) ---------- */
  {
    const g = new THREE.Group();
    const red = '#E4605A';
    g.add(mesh(new THREE.CylinderGeometry(0.2, 0.25, 0.5, 10), '#8C6B55', 0, 0.25, 0));
    const body = mesh(new THREE.BoxGeometry(1, 1.3, 0.8), red, 0, 1.15, 0);
    const dome = mesh(new THREE.CylinderGeometry(0.4, 0.4, 1, 20, 1, false, 0, Math.PI), red, 0, 1.8, 0);
    dome.rotation.z = Math.PI / 2;
    const slot = mesh(new THREE.BoxGeometry(0.6, 0.06, 0.05), '#4A2B28', 0, 1.55, 0.41);
    const sign = facePlane(textCanvas('우체통', { w: 256, h: 128, size: 58, bg: '#FFF6E6', radius: 24, color: '#B5452F' }), 0.7, 0.35);
    sign.position.set(0, 1.1, 0.41);
    // 튀어나온 편지들
    const letters = [];
    for (let i = 0; i < 3; i++) {
      const l = mesh(new THREE.BoxGeometry(0.4, 0.28, 0.02), i === 1 ? '#FFF3EA' : '#FFFFFF', 0, 2.4, 0);
      g.add(l);
      letters.push({ l, off: i * 2.1 });
    }
    g.add(body, dome, slot, sign);
    g.position.set(4.8, 0, 23);
    g.rotation.y = -0.4;
    group.add(g);
    updaters.push(t => letters.forEach(({ l, off }) => {
      const k = ((t * 0.35 + off / 6.3) % 1);
      l.position.set(Math.sin(k * 6 + off) * 0.5, 2 + k * 1.6, Math.cos(k * 5) * 0.3);
      l.rotation.set(k * 3, k * 5 + off, 0.3);
      l.visible = k < 0.95;
    }));
    colliders.push({ x: 4.8, z: 23, r: 0.8 });
    addInteract('mailbox', '안부 우체통', '✉️', '편지 쓰기', 4.8, 23, 2.8, 4.1);
  }

  /* ---------- 🌷 가족 정원: 편지 한 통 = 꽃 한 송이 (보낸 사람 색) ---------- */
  const bed = new THREE.Group();
  group.add(bed);
  const flowers = [];
  {
    bed.add(mesh(new THREE.CylinderGeometry(BED.r + 0.3, BED.r + 0.4, 0.18, 28), '#B98A66', BED.x, 0.09, BED.z));
    bed.add(mesh(new THREE.CylinderGeometry(BED.r + 0.05, BED.r + 0.05, 0.22, 28), '#7A5A44', BED.x, 0.1, BED.z));
    const post = mesh(new THREE.CylinderGeometry(0.05, 0.06, 1.1, 6), '#A47A5C', BED.x, 0.55, BED.z + BED.r + 0.5);
    const sign = facePlane(textCanvas('가족 정원', { w: 360, h: 110, size: 50, bg: '#FFF6E6', radius: 26, color: '#B5552B' }), 1.3, 0.4);
    sign.position.set(BED.x, 1.15, BED.z + BED.r + 0.55);
    const back = sign.clone(); back.rotation.y = Math.PI; back.position.z -= 0.02;
    bed.add(post, sign, back);
    colliders.push({ x: BED.x, z: BED.z, r: BED.r + 0.5 });
  }
  const stemGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.5, 6), petalGeo = new THREE.IcosahedronGeometry(0.16, 0), coreGeo = new THREE.SphereGeometry(0.06, 8, 6);
  const hash = s => { let h = 7; for (const ch of String(s)) h = (h * 31 + ch.charCodeAt(0)) >>> 0; return h; };
  function plantFlower(letter, animate) {
    if (flowers.length >= 60) return null;
    const h = hash(`${letter.name}|${letter.time || ''}|${flowers.length}`);
    const a = (h % 360) / 360 * Math.PI * 2, r = 0.25 + ((h >> 9) % 100) / 100 * (BED.r - 0.55);
    const x = BED.x + Math.cos(a) * r, z = BED.z + Math.sin(a) * r;
    const g = new THREE.Group();
    g.add(mesh(stemGeo, '#8DC175', 0, 0.45, 0));
    g.add(mesh(petalGeo, letter.color || memberColor(letter.who), 0, 0.75, 0));
    g.add(mesh(coreGeo, '#F7D58B', 0, 0.75, 0.13));
    if (flowers.length < 24) {
      const name = String(letter.name || '').slice(0, 8);
      const l = labelSprite(name, { scale: 1.5, bg: 'rgba(255,253,248,.85)' });
      l.position.y = 1.12;
      g.add(l);
    }
    g.position.set(x, 0, z);
    g.rotation.y = a;
    bed.add(g);
    flowers.push(g);
    if (animate) {
      let k = 0;
      g.scale.setScalar(0.01);
      updaters.push((t, dt) => { if (k >= 1) return; k = Math.min(1, k + dt / 0.7); const s = 1 - Math.pow(1 - k, 3); g.scale.setScalar(s); });
    }
    return new THREE.Vector3(x, 0, z);
  }

  /* ---------- 🗺️ 모이는 곳 (이정표) ---------- */
  {
    const g = new THREE.Group();
    g.add(mesh(new THREE.CylinderGeometry(0.1, 0.12, 3.2, 8), '#A47A5C', 0, 1.6, 0));
    const signs = [['모이는 곳', '#FFF6E6', 0.4], ['본가 →', '#F2B27A', -0.5], ['주차 안내', '#F2C14E', 0.9]];
    signs.forEach(([t, bg, rot], i) => {
      const s = new THREE.Group();
      const board = mesh(new THREE.BoxGeometry(1.5, 0.42, 0.08), bg, 0.55, 0, 0);
      const tip = mesh(new THREE.CylinderGeometry(0.21, 0.21, 0.08, 3), bg, 1.35, 0, 0);
      tip.rotation.x = Math.PI / 2; tip.rotation.y = Math.PI / 2;
      const txt = facePlane(textCanvas(t, { w: 384, h: 110, size: 56, bg: null }), 1.4, 0.4);
      txt.position.set(0.55, 0, 0.05);
      const back = txt.clone(); back.rotation.y = Math.PI; back.position.z = -0.05;
      s.add(board, tip, txt, back);
      s.position.y = 2.8 - i * 0.55;
      s.rotation.y = rot;
      g.add(s);
    });
    g.position.set(-3.6, 0, 13.5);
    group.add(g);
    colliders.push({ x: -3.6, z: 13.5, r: 0.4 });
    addInteract('directions', '모이는 곳', '🗺️', '길 안내 보기', -3.6, 13.5, 2.6, 3.9);
  }

  /* ---------- 🗳️ 가족 투표함 ---------- */
  {
    const g = new THREE.Group();
    g.add(mesh(new THREE.BoxGeometry(1.0, 0.75, 1.0), '#B98A66', 0, 0.38, 0));
    g.add(mesh(new THREE.BoxGeometry(1.25, 1.0, 1.0), '#F6E7CC', 0, 1.25, 0));
    g.add(mesh(new THREE.BoxGeometry(1.3, 0.08, 1.05), '#E07B39', 0, 1.78, 0));
    g.add(mesh(new THREE.BoxGeometry(0.6, 0.04, 0.12), '#4A3B38', 0, 1.83, 0));
    const paper = mesh(new THREE.BoxGeometry(0.42, 0.3, 0.02), '#F7D58B', 0, 2.0, 0);
    g.add(paper);
    const sign = facePlane(textCanvas('투표함', { w: 256, h: 110, size: 54, bg: '#E07B39', radius: 20, color: '#FFFFFF' }), 0.8, 0.34);
    sign.position.set(0, 1.3, 0.51);
    g.add(sign);
    g.position.set(-13.5, 0, 2);
    g.rotation.y = 0.5;
    group.add(g);
    updaters.push(t => { paper.position.y = 2.0 + Math.sin(t * 2.2) * 0.08; paper.rotation.y = Math.sin(t) * 0.4; });
    colliders.push({ x: -13.5, z: 2, r: 0.9 });
    addInteract('poll', '가족 투표함', '🗳️', '투표하기', -13.5, 2, 3, 3.2);
  }

  /* ---------- 📅 가족 달력 (칠판: 다가오는 날 다섯 개) ---------- */
  {
    const g = new THREE.Group();
    const wood = '#B98A66';
    for (const sx of [-0.75, 0.75]) g.add(mesh(new THREE.BoxGeometry(0.1, 2.8, 0.1), wood, sx, 1.4, 0));
    g.add(mesh(new THREE.BoxGeometry(1.8, 2.1, 0.1), wood, 0, 1.9, 0));
    const c = document.createElement('canvas');
    c.width = 480; c.height = 560;
    const x = c.getContext('2d');
    x.fillStyle = '#4E5F46'; x.fillRect(0, 0, 480, 560);
    x.fillStyle = '#FFF8E7'; x.textAlign = 'center';
    x.font = '52px "Jua"'; x.fillText('가족 달력', 240, 70);
    const ups = upcoming(5);
    x.font = '28px "Gowun Dodum"';
    if (!ups.length) x.fillText('다가오는 날이 없어요', 240, 260);
    ups.forEach((e, i) => {
      const y = 150 + i * 80;
      x.font = '28px "Gowun Dodum"';
      x.textAlign = 'left'; x.fillStyle = '#FFF8E7';
      x.fillText(`${e.emoji || '📌'} ${cutText(e.title, 9)}`, 28, y);
      x.textAlign = 'right'; x.fillStyle = e.dday === 0 ? '#F4B8C0' : '#F7D58B';
      x.fillText(ddayText(e.dday), 454, y);
      x.textAlign = 'left'; x.fillStyle = 'rgba(255,248,231,.6)'; x.font = '22px "Gowun Dodum"';
      x.fillText(keyLabel(e.key), 70, y + 30);
    });
    const face = facePlane(c, 1.62, 1.9);
    face.position.set(0, 1.9, 0.06);
    g.add(face);
    g.position.set(11, 0, 9.8);
    g.rotation.y = -0.5;
    group.add(g);
    colliders.push({ x: 11, z: 9.8, r: 1 });
    addInteract('calendar', '가족 달력', '📅', '달력 보기', 11, 9.8, 2.8, 3.6);
  }

  /* ---------- ❓ 퀴즈 부스 ---------- */
  {
    const g = new THREE.Group();
    g.add(mesh(new THREE.BoxGeometry(2.4, 1.1, 1), '#F6E7CC', 0, 0.55, 0));
    g.add(mesh(new THREE.BoxGeometry(2.5, 0.1, 1.1), '#B07A4F', 0, 1.12, 0));
    for (const sx of [-1.1, 1.1]) g.add(mesh(new THREE.CylinderGeometry(0.06, 0.06, 2.4, 8), '#FFFFFF', sx, 2.2, -0.4));
    const stripes = 8;
    for (let i = 0; i < stripes; i++) {
      const s = mesh(new THREE.CylinderGeometry(1.7, 1.7, 0.5, 3, 1, false, Math.PI / 2 + (i / stripes) * Math.PI, Math.PI / stripes), i % 2 ? '#FFF6E6' : '#E07B39', 0, 3.3, -0.4);
      s.rotation.x = Math.PI / 2; s.scale.set(1, 1, 0.5);
      g.add(s);
    }
    const q = facePlane(textCanvas('?', { w: 256, h: 256, size: 190, bg: '#F2C14E', radius: 128, color: '#FFFFFF' }), 0.9, 0.9);
    q.position.set(0, 0.6, 0.51);
    g.add(q);
    g.position.set(-19.5, 0, -11.5);
    g.rotation.y = 0.6;
    group.add(g);
    colliders.push({ x: -19.5, z: -11.5, r: 1.5 });
    addInteract('quiz', '가족 퀴즈', '❓', '퀴즈 풀기', -19.5, -11.5, 3.2, 4.4);
  }

  /* ---------- 🔥 광장 모닥불 (고구마를 던져 넣으면 노릇노릇) ---------- */
  let campfire;
  {
    const g = new THREE.Group();
    const rockGeo = new THREE.IcosahedronGeometry(0.34, 0);
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      const r = mesh(rockGeo, i % 2 ? '#9C948A' : '#B5ADA2', Math.cos(a) * 1.25, 0.18, Math.sin(a) * 1.25);
      r.scale.set(1.15, 0.7, 1); r.rotation.y = a;
      g.add(r);
    }
    g.add(mesh(new THREE.CylinderGeometry(1.1, 1.1, 0.05, 20), '#4A3A2E', 0, 0.04, 0));
    const logGeo = new THREE.CylinderGeometry(0.11, 0.13, 1.6, 8);
    for (let i = 0; i < 4; i++) {
      const l = mesh(logGeo, i % 2 ? '#7A4E32' : '#8A5A3B', 0, 0.16 + (i > 1 ? 0.2 : 0), 0);
      l.rotation.set(0, (i * Math.PI) / 4 + 0.3, Math.PI / 2);
      g.add(l);
    }
    // 불꽃 (빛 계산 없이 색만 밝게) + 은은한 빛무리
    const flames = [['#FF7A1A', 0.42, 1.05], ['#FFB23A', 0.3, 0.85], ['#FFE58A', 0.17, 0.6]].map(([col, r, h], k) => {
      const f = new THREE.Mesh(new THREE.ConeGeometry(r, h, 8), new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.92 }));
      f.position.y = 0.4 + h / 2; f.userData = { h, k };
      g.add(f);
      return f;
    });
    const gc = document.createElement('canvas'); gc.width = gc.height = 128;
    const gx = gc.getContext('2d'), rg = gx.createRadialGradient(64, 64, 4, 64, 64, 64);
    rg.addColorStop(0, 'rgba(255,190,90,.9)'); rg.addColorStop(0.4, 'rgba(255,150,60,.35)'); rg.addColorStop(1, 'rgba(255,120,40,0)');
    gx.fillStyle = rg; gx.fillRect(0, 0, 128, 128);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: canvasTex(gc), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.7 }));
    glow.position.y = 0.9; glow.scale.set(4.2, 4.2, 1);
    g.add(glow);
    // 튀는 불티
    const n = 28, pos = new Float32Array(n * 3), seeds = [];
    for (let i = 0; i < n; i++) seeds.push([Math.random() * Math.PI * 2, Math.random(), Math.random() * 0.35]);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const sparks = new THREE.Points(geo, new THREE.PointsMaterial({ color: '#FFC46B', size: 0.09, transparent: true, opacity: 0.9, depthWrite: false }));
    g.add(sparks);
    // 둘러앉는 통나무 의자
    const seatGeo = new THREE.CylinderGeometry(0.32, 0.32, 1.7, 10);
    for (let k = 0; k < 4; k++) {
      const a = (k * Math.PI) / 2 + Math.PI / 4;
      const seat = mesh(seatGeo, '#8F6243', Math.cos(a) * 2.9, 0.3, Math.sin(a) * 2.9);
      seat.rotation.set(0, -a, Math.PI / 2);
      g.add(seat);
      colliders.push({ x: Math.cos(a) * 2.9, z: 4 + Math.sin(a) * 2.9, r: 0.5 });
    }
    // 구운 고구마 (넣은 만큼 돌판 위에)
    const plate = mesh(new THREE.CylinderGeometry(0.45, 0.5, 0.12, 12), '#A39A8F', 1.75, 0.06, 0.25);
    g.add(plate);
    const potatoes = new THREE.InstancedMesh(new THREE.SphereGeometry(0.11, 8, 6), toon('#8A4B3A'), 6);
    potatoes.count = 0;
    g.add(potatoes);
    g.position.set(0, 0, 4);
    group.add(g);
    let flare = 0;
    updaters.push((t, dt) => {
      flames.forEach(f => { const { h, k } = f.userData; const s1 = 1 + Math.sin(t * (9 + k * 3) + k) * 0.12 + flare * 0.4; f.scale.set(1 - (s1 - 1) * 0.5, s1, 1 - (s1 - 1) * 0.5); f.position.y = 0.4 + (h * s1) / 2; f.rotation.y = t * (1 + k); });
      glow.material.opacity = 0.6 + Math.sin(t * 7) * 0.08 + flare * 0.3;
      for (let i = 0; i < n; i++) {
        const [a, sd, rr] = seeds[i];
        const k = (t * 0.45 + sd) % 1;
        pos[i * 3] = Math.cos(a + k * 2) * (rr + k * 0.3); pos[i * 3 + 2] = Math.sin(a + k * 2) * (rr + k * 0.3);
        pos[i * 3 + 1] = 0.7 + k * 2.4;
      }
      geo.attributes.position.needsUpdate = true;
      if (flare > 0) flare = Math.max(0, flare - dt * 1.5);
    });
    colliders.push({ x: 0, z: 4, r: 1.6 });
    addInteract('campfire', '모닥불', '🔥', '고구마 굽기', 0, 4, 3.4, 3.4);
    campfire = {
      /* 손에서 모닥불로 고구마가 날아가요 */
      toss(scene, from, onLand) {
        throwSprite(scene, from, new THREE.Vector3(0, 0.8, 4), '🍠', 0.75, () => { flare = 1; onLand?.(); });
      },
      setCount(k) {
        k = Math.max(0, Math.min(6, k | 0));
        const m = new THREE.Matrix4();
        for (let i = 0; i < k; i++) {
          m.makeRotationY(i * 1.3);
          m.scale(new THREE.Vector3(1.5, 0.8, 0.9));
          m.setPosition(1.75 + Math.cos(i * 1.05) * 0.24, 0.18, 0.25 + Math.sin(i * 1.05) * 0.24);
          potatoes.setMatrixAt(i, m);
        }
        potatoes.count = k;
        potatoes.instanceMatrix.needsUpdate = true;
      },
    };
  }

  /* ---------- 🏘️ 가족 집 골목 + 🌱 함께 키우는 나무 (골목 끝, 뒤로 꽃 울타리) ---------- */
  {
    const g = new THREE.Group();
    // 뒤쪽 덤불 울타리 (계절 따라 초록 → 단풍 → 눈)
    for (let i = 0; i < 9; i++) {
      const hx = -6 + i * 1.5;
      const h = mesh(new THREE.IcosahedronGeometry(0.9, 1), bushMat(i), hx, 0.8, -22.3);
      h.scale.set(1, 1.1, 0.8);
      g.add(h);
      g.add(mesh(new THREE.IcosahedronGeometry(0.18, 0), flowerMat(i), hx + 0.3, 1.4, -21.6));
    }
    group.add(g);
    boxes.push({ minX: -7, maxX: 7, minZ: -23.5, maxZ: -21.5 });
  }
  const houses = buildHouses({ group, colliders, boxes, addInteract, updaters });
  const familyTree = buildFamilyTree({ group, colliders, addInteract, updaters });

  /* ---------- 📸 포토존 ---------- */
  {
    const g = new THREE.Group();
    const gold = '#9C6B44';
    const fw = 3.2, fh = 2.4, t = 0.18, y0 = 0.9;
    g.add(mesh(new THREE.BoxGeometry(fw + t, t, t), gold, 0, y0 + fh, 0));
    g.add(mesh(new THREE.BoxGeometry(fw + t, t, t), gold, 0, y0, 0));
    for (const s of [-1, 1]) {
      g.add(mesh(new THREE.BoxGeometry(t, fh, t), gold, s * fw / 2, y0 + fh / 2, 0));
      g.add(mesh(new THREE.BoxGeometry(t, y0, t), gold, s * fw / 2, y0 / 2, 0));
    }
    const sign = facePlane(textCanvas('FAMILY PHOTO', { w: 512, h: 110, size: 60, bg: '#FFF6E6', radius: 55, color: '#B5552B' }), 2, 0.43);
    sign.position.set(0, y0 + fh + 0.4, 0.05);
    g.add(sign);
    for (let i = 0; i < 18; i++) {
      const f = mesh(new THREE.IcosahedronGeometry(0.16, 1), flowerMat(i), -fw / 2 + rand(-0.15, 0.3), y0 + rand(0, 1.1), rand(-0.1, 0.15));
      g.add(f);
    }
    g.position.set(-11, 0, 19);
    g.rotation.y = 0.5;
    group.add(g);
    const ang = 0.5;
    for (const s of [-1, 1]) colliders.push({ x: -11 + Math.cos(ang) * s * fw / 2, z: 19 - Math.sin(ang) * s * fw / 2, r: 0.3 });
    addInteract('photozone', '가족 포토존', '📸', '가족사진 찍기', -11, 19, 3, 4.6);
  }

  /* ---------- 마을 입구 아치 ---------- */
  {
    const g = new THREE.Group();
    for (const s of [-1, 1]) {
      g.add(mesh(new THREE.CylinderGeometry(0.16, 0.2, 3.6, 10), '#8F6243', s * 2.7, 1.8, 0));
      for (let i = 0; i < 7; i++) g.add(mesh(new THREE.IcosahedronGeometry(0.17, 1), flowerMat(i + (s > 0 ? 1 : 0)), s * 2.7 + rand(-0.2, 0.2), 0.4 + i * 0.45, rand(-0.2, 0.2)));
    }
    const sign = facePlane(textCanvas(villageName(), { w: 768, h: 150, size: 74, bg: '#FFF6E6', border: '#B07A4F', radius: 60, color: '#B5452F' }), 5.2, 1.0);
    sign.position.set(0, 3.7, 0.13);
    const back = sign.clone(); back.rotation.y = Math.PI; back.position.z = -0.13;
    g.add(mesh(new THREE.BoxGeometry(5.8, 1.15, 0.2), '#8F6243', 0, 3.7, 0), sign, back);
    g.position.set(0, 0, 34.5);
    group.add(g);
    colliders.push({ x: -2.7, z: 34.5, r: 0.3 }, { x: 2.7, z: 34.5, r: 0.3 });
  }

  /* ---------- 🏛️ 사진관 ---------- */
  buildMuseumExterior(group, colliders, boxes, updaters);
  addInteract('museum', W.museum?.title || '가족 사진관', '🖼️', '사진관 입장', MUSEUM_DOOR.x, MUSEUM_DOOR.z, 2.6, 8.4);

  /* 가족이 글을 남기면 게시판·집·나무를 다시 그림 */
  function refresh() { drawBoard(); drawQuestion(); houses.refresh(); familyTree.refresh(); }

  function update(dt, t, playerPos, posing = false) {
    updaters.forEach(u => u(t, dt));
    // 사진 찍는 동안엔 이름표를 숨겨서 사진이 깔끔하게
    interactables.forEach(it => { it.label.visible = !posing; it.label.position.y = it.baseY + Math.sin(t * 2 + it.off) * 0.12; });
    if (playerPos) houses.update(dt, t, playerPos, posing);
  }
  return { group, colliders, boxes, interactables, update, refresh, plantFlower, flowerCount: () => flowers.length, campfire, bed: BED, houses, familyTree };
}

function buildMuseumExterior(group, colliders, boxes, updaters) {
  const W = window.FAMILY;
  const g = new THREE.Group();
  const cx = 20, front = -10.2; // 정면 벽 z
  const cream = '#F1E0C2', white = '#FFF8EC', rose = '#B5452F';
  // 기단
  g.add(mesh(new THREE.BoxGeometry(15, 0.4, 13), '#D8C3A0', cx, 0.2, -15.5));
  for (let i = 0; i < 3; i++) g.add(mesh(new THREE.BoxGeometry(6 - i * 0.6, 0.13, 0.45), '#D8C3A0', cx, 0.065 + i * 0.13, -8.3 - i * 0.45));
  // 본관
  g.add(mesh(new THREE.BoxGeometry(13, 5.8, 10), cream, cx, 3.3, -15.3));
  // 기둥
  const colGeo = new THREE.CylinderGeometry(0.34, 0.38, 5.4, 16);
  const capGeo = new THREE.BoxGeometry(0.9, 0.25, 0.9);
  [14, 16.2, 18.3, 21.7, 23.8, 26].forEach(x => {
    g.add(mesh(colGeo, white, x, 3.1, -9.4));
    g.add(mesh(capGeo, white, x, 5.9, -9.4));
    g.add(mesh(capGeo, white, x, 0.52, -9.4));
  });
  // 지붕
  g.add(mesh(new THREE.BoxGeometry(14.2, 0.6, 11.8), white, cx, 6.3, -14.9));
  const tri = new THREE.Shape();
  tri.moveTo(-7.4, 0); tri.lineTo(7.4, 0); tri.lineTo(0, 2.4); tri.closePath();
  const ped = mesh(new THREE.ExtrudeGeometry(tri, { depth: 11.8, bevelEnabled: false }), rose, cx, 6.6, -20.8);
  g.add(ped);
  const pedFront = mesh(new THREE.ExtrudeGeometry((() => {
    const s = new THREE.Shape(); s.moveTo(-6.6, 0.25); s.lineTo(6.6, 0.25); s.lineTo(0, 2.05); s.closePath(); return s;
  })(), { depth: 0.05, bevelEnabled: false }), white, cx, 6.6, -8.98);
  g.add(pedFront);
  // 하트 장식
  const hs = new THREE.Shape();
  hs.moveTo(0, -0.35); hs.bezierCurveTo(-0.6, 0.05, -0.35, 0.5, 0, 0.25); hs.bezierCurveTo(0.35, 0.5, 0.6, 0.05, 0, -0.35);
  const heart = mesh(new THREE.ExtrudeGeometry(hs, { depth: 0.1, bevelEnabled: false }), '#F2C14E', cx, 7.5, -8.9);
  heart.scale.setScalar(0.9);
  g.add(heart);
  // 간판
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(6, 0.9), new THREE.MeshBasicMaterial({
    map: canvasTex(textCanvas(W.museum?.title || '가족 사진관', { w: 1024, h: 150, size: 84, bg: '#FFF6E6', border: '#B07A4F', radius: 75, color: '#B5452F' })),
    transparent: true,
  }));
  sign.position.set(cx, 5.3, front + 0.02);
  g.add(sign);
  // 문
  g.add(mesh(new THREE.BoxGeometry(2.9, 3.7, 0.2), '#8F6243', cx, 2.25, front));
  const door = mesh(new THREE.BoxGeometry(2.5, 3.4, 0.22), '#9C6B4E', cx, 2.1, front + 0.02);
  g.add(door);
  const glow = new THREE.Mesh(new THREE.PlaneGeometry(2.1, 1.1), new THREE.MeshBasicMaterial({ color: '#FFF1C9', transparent: true, opacity: 0.9 }));
  glow.position.set(cx, 3.0, front + 0.15);
  g.add(glow);
  const knob = mesh(new THREE.SphereGeometry(0.08, 8, 6), '#E2B865', cx + 0.9, 1.9, front + 0.15);
  g.add(knob);
  // 창문 & 테마 배너
  const themes = W.museum?.themes || [];
  [15.2, 17.2, 22.8, 24.8].forEach((x, i) => {
    const th = themes[i % Math.max(1, themes.length)];
    const c = textCanvas(th ? [th.emoji] : ['♥'], { w: 128, h: 320, size: 70, bg: th?.color || '#F4B8C0', radius: 16, color: '#fff', sub: th?.title?.slice(0, 4), subSize: 22 });
    const banner = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 2), new THREE.MeshBasicMaterial({ map: canvasTex(c), transparent: true }));
    banner.position.set(x, 3.2, front + 0.03);
    g.add(banner);
  });
  // 화분
  const pot = (x, z) => {
    g.add(mesh(new THREE.CylinderGeometry(0.35, 0.28, 0.6, 12), '#B9773E', x, 0.3, z));
    const b = mesh(new THREE.IcosahedronGeometry(0.5, 1), '#93A35A', x, 0.95, z);
    g.add(b);
    for (let i = 0; i < 4; i++) g.add(mesh(new THREE.IcosahedronGeometry(0.12, 0), ['#F4A6C6', '#FFFFFF', '#E07BB5'][i % 3], x + rand(-0.35, 0.35), 1.1 + rand(0, 0.3), z + 0.3));
    colliders.push({ x, z, r: 0.5 });
  };
  pot(16.5, -7.8); pot(23.5, -7.8);
  // 다른 면 창문
  for (const sx of [13.45, 26.55]) {
    for (const z of [-12.5, -15.5, -18.5]) {
      const w = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 2.2), new THREE.MeshBasicMaterial({ color: '#CDE9F5' }));
      w.position.set(sx + (sx < cx ? -0.02 : 0.02), 3.4, z);
      w.rotation.y = sx < cx ? -Math.PI / 2 : Math.PI / 2;
      g.add(w);
    }
  }
  group.add(g);
  updaters.push(t => { heart.position.y = 7.5 + Math.sin(t * 2) * 0.06; glow.material.opacity = 0.75 + Math.sin(t * 3) * 0.2; });
  boxes.push({ minX: 12.3, maxX: 27.7, minZ: -22.2, maxZ: -9.0 });
}
