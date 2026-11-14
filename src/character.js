import * as THREE from 'three';
import { toon, mesh } from './util.js';

/* 동글동글한 2등신 캐릭터
   type: 'player'(나) | 'family'(집 앞에 서 있는 이웃)
   처음 들어올 때 '내 캐릭터 만들기'에서 고르는 값:
     hairStyle 'short'|'buzz'|'bob'|'long'|'ponytail'|'bun'|'pigtails'|'curly' · hair 머리 색 · skin 피부색
     gender 'f'|'m'|'' (f = 속눈썹) · age 'kid'|'teen'|'adult'|'senior' · outfit 옷 색 · glasses 안경 · hat 'cap'|'beanie'|'flower'
   (예전 값 longHair·kid 도 그대로 알아들어요) · shadows false면 그림자 생략(가볍게) */
export const HAIR_STYLES = [['short', '짧은 머리'], ['buzz', '아주 짧게'], ['bob', '단발'], ['long', '긴 머리'], ['ponytail', '묶은 머리'], ['bun', '올림 머리'], ['pigtails', '양갈래'], ['curly', '뽀글 파마']];
export function createCharacter({ type = 'player', outfit = '#8FB8DE', hair = '#5A3A2A', skin = '#FFE0C7', longHair = false, hairStyle = '', gender = '', age = '', glasses = false, hat = '', kid = false, shadows = true } = {}) {
  const style = hairStyle || (longHair ? 'long' : 'short');
  if (age === 'kid') kid = true;
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  if (kid) body.scale.setScalar(0.8);
  else if (age === 'teen') body.scale.setScalar(0.9);
  else if (age === 'senior') body.rotation.x = 0.07;   // 살짝 구부정

  const top = outfit;
  const pants = '#6B5B53';

  /* 다리 */
  const legGeo = new THREE.CapsuleGeometry(0.1, 0.28, 4, 8);
  const shoeGeo = new THREE.SphereGeometry(0.13, 12, 8);
  const legs = [];
  for (const s of [-1, 1]) {
    const pivot = new THREE.Group();
    pivot.position.set(0.14 * s, 0.56, 0);
    const leg = mesh(legGeo, pants, 0, -0.26, 0);
    const shoe = mesh(shoeGeo, '#4A3B38', 0, -0.47, 0.04);
    shoe.scale.set(1, 0.6, 1.35);
    pivot.add(leg, shoe);
    body.add(pivot);
    legs.push(pivot);
  }

  /* 몸통 */
  const torso = mesh(new THREE.CapsuleGeometry(0.3, 0.3, 6, 14), top, 0, 0.86, 0);
  torso.scale.set(1, 1, 0.85);
  body.add(torso);

  /* 팔 */
  const armGeo = new THREE.CapsuleGeometry(0.075, 0.3, 4, 8);
  const handGeo = new THREE.SphereGeometry(0.085, 10, 8);
  const arms = [];
  for (const s of [-1, 1]) {
    const pivot = new THREE.Group();
    pivot.position.set(0.36 * s, 1.08, 0);
    const arm = mesh(armGeo, top, 0.02 * s, -0.2, 0);
    const hand = mesh(handGeo, skin, 0.03 * s, -0.42, 0);
    pivot.add(arm, hand);
    pivot.rotation.z = 0.12 * s;
    body.add(pivot);
    arms.push(pivot);
  }

  /* 머리 */
  const head = new THREE.Group();
  head.position.y = 1.5;
  body.add(head);
  const face = mesh(new THREE.SphereGeometry(0.42, 24, 18), skin, 0, 0, 0);
  head.add(face);

  const hairMat = toon(hair);
  const hairPart = (geo, x, y, z, sx = 1, sy = 1, sz = 1) => { const m = new THREE.Mesh(geo, hairMat); m.position.set(x, y, z); m.scale.set(sx, sy, sz); m.castShadow = true; head.add(m); return m; };
  const cap = new THREE.Mesh(new THREE.SphereGeometry(style === 'buzz' ? 0.43 : 0.45, 24, 16, 0, Math.PI * 2, 0, Math.PI * (style === 'buzz' ? 0.46 : 0.52)), hairMat);
  cap.rotation.x = -0.35;
  cap.position.set(0, 0.03, -0.03);
  cap.castShadow = true;
  head.add(cap);
  if (style !== 'buzz') {
    const bang = hairPart(new THREE.SphereGeometry(0.2, 12, 8), 0.1, 0.26, 0.27, 1.5, 0.55, 0.8);
    bang.rotation.z = -0.3;
  }
  const ball = r => new THREE.SphereGeometry(r, 12, 10);
  if (style === 'long') hairPart(new THREE.SphereGeometry(0.42, 16, 12), 0, -0.22, -0.18, 1.05, 1.25, 0.7);
  else if (style === 'bob') {
    hairPart(new THREE.SphereGeometry(0.44, 16, 12), 0, -0.06, -0.1, 1.08, 0.82, 0.86);
  } else if (style === 'ponytail') {
    hairPart(ball(0.17), 0, 0.12, -0.46, 1, 1, 1);
    hairPart(new THREE.CapsuleGeometry(0.11, 0.26, 4, 8), 0, -0.14, -0.5, 1, 1, 0.9).rotation.x = 0.25;
    const tie = mesh(new THREE.TorusGeometry(0.1, 0.03, 6, 12), outfit, 0, 0.04, -0.47);
    tie.rotation.x = 0.4;
    head.add(tie);
  } else if (style === 'bun') {
    const low = hat === 'cap' || hat === 'beanie';   // 모자를 쓰면 쪽머리를 뒤로 내려서
    hairPart(ball(0.2), 0, low ? 0.02 : 0.42, low ? -0.46 : -0.2);
    const tie = mesh(new THREE.TorusGeometry(0.15, 0.03, 6, 14), outfit, 0, low ? 0.02 : 0.32, low ? -0.36 : -0.17);
    tie.rotation.x = low ? 0 : Math.PI / 2 - 0.5;
    head.add(tie);
  } else if (style === 'pigtails') {
    for (const sx of [-1, 1]) {
      hairPart(ball(0.15), 0.42 * sx, -0.08, -0.12, 0.9, 1.15, 0.9);
      head.add(mesh(new THREE.SphereGeometry(0.05, 8, 6), outfit, 0.38 * sx, 0.06, -0.1));
    }
  } else if (style === 'curly') {
    const g = ball(0.13);
    for (let i = 0; i < 9; i++) {
      const a = (i / 9) * Math.PI * 2;
      hairPart(g, Math.cos(a) * 0.38, 0.18 + Math.sin(a * 2) * 0.03, Math.sin(a) * 0.38 - 0.06);
    }
    if (hat !== 'cap' && hat !== 'beanie') hairPart(ball(0.2), 0, 0.4, -0.04, 1.4, 0.8, 1.3);
  }

  // 눈, 볼
  const eyeGeo = new THREE.SphereGeometry(0.05, 10, 8);
  const eyeMat = new THREE.MeshBasicMaterial({ color: '#2B2220' });
  const eyes = [];
  for (const s of [-1, 1]) {
    const e = new THREE.Mesh(eyeGeo, eyeMat);
    e.position.set(0.14 * s, 0.02, 0.38);
    e.scale.set(1, 1.3, 0.6);
    head.add(e);
    eyes.push(e);
    const shine = new THREE.Mesh(new THREE.SphereGeometry(0.016, 6, 4), new THREE.MeshBasicMaterial({ color: '#fff' }));
    shine.position.set(0.14 * s + 0.018, 0.05, 0.415);
    head.add(shine);
    const cheek = new THREE.Mesh(new THREE.CircleGeometry(0.07, 14), new THREE.MeshBasicMaterial({ color: '#FFB3B3', transparent: true, opacity: 0.7 }));
    cheek.position.set(0.24 * s, -0.09, 0.345);
    cheek.rotation.y = 0.55 * s;
    head.add(cheek);
  }
  if (gender === 'f') {   // 속눈썹 (눈 바깥쪽 한 가닥)
    for (const sx of [-1, 1]) {
      const lash = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.014, 0.01), eyeMat);
      lash.position.set(0.2 * sx, 0.085, 0.37); lash.rotation.z = 0.5 * sx;
      head.add(lash);
    }
  }
  const mouth = new THREE.Mesh(new THREE.TorusGeometry(0.045, 0.012, 6, 12, Math.PI), eyeMat);
  mouth.position.set(0, -0.1, 0.39);
  mouth.rotation.z = Math.PI;
  head.add(mouth);

  /* 안경 */
  if (glasses) {
    const rimMat = toon('#4A3B38');
    const rimGeo = new THREE.TorusGeometry(0.085, 0.014, 6, 18);
    for (const s of [-1, 1]) { const r = new THREE.Mesh(rimGeo, rimMat); r.position.set(0.14 * s, 0.03, 0.4); head.add(r); }
    const bridge = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.018, 0.018), rimMat);
    bridge.position.set(0, 0.05, 0.42);
    head.add(bridge);
  }
  /* 모자 */
  const hatGroup = new THREE.Group();
  head.add(hatGroup);
  function buildHat(kind) {
    hatGroup.clear();
    if (kind === 'cap') {
      const c = new THREE.Mesh(new THREE.SphereGeometry(0.46, 20, 12, 0, Math.PI * 2, 0, Math.PI * 0.42), toon(outfit === '#FFFFFF' ? '#8FB8DE' : outfit));
      c.position.y = 0.06; c.rotation.x = -0.12;
      const brim = mesh(new THREE.CylinderGeometry(0.26, 0.26, 0.03, 16, 1, false, -Math.PI / 2, Math.PI), outfit, 0, 0.2, 0.3);
      brim.rotation.x = 0.12;
      hatGroup.add(c, brim);
    } else if (kind === 'beanie') {
      const b = new THREE.Mesh(new THREE.SphereGeometry(0.47, 20, 12, 0, Math.PI * 2, 0, Math.PI * 0.45), toon('#E88A98'));
      b.position.y = 0.06;
      const band = mesh(new THREE.TorusGeometry(0.43, 0.06, 8, 24), '#FFFDF8', 0, 0.18, 0);
      band.rotation.x = Math.PI / 2;
      const pom = mesh(new THREE.SphereGeometry(0.1, 10, 8), '#FFFDF8', 0, 0.55, 0);
      hatGroup.add(b, band, pom);
    } else if (kind === 'flower') {
      ['#F4B8C0', '#FFFFFF', '#F7D58B'].forEach((col, i) => hatGroup.add(mesh(new THREE.IcosahedronGeometry(0.075, 0), col, 0.3 + i * 0.05, 0.3 - i * 0.08, 0.12 - i * 0.06)));
      hatGroup.add(mesh(new THREE.SphereGeometry(0.03, 6, 4), '#E2B865', 0.31, 0.3, 0.16));
    } else if (kind === 'party') {
      const cone = mesh(new THREE.ConeGeometry(0.2, 0.46, 14), '#F7D58B', 0.08, 0.6, 0);
      cone.rotation.z = -0.25;
      const ball = mesh(new THREE.SphereGeometry(0.07, 8, 6), '#E88A98', 0.2, 0.84, 0);
      hatGroup.add(cone, ball);
    }
  }
  buildHat(hat);

  root.traverse(o => { if (o.isMesh && o.material !== eyeMat) o.castShadow = shadows; });

  /* ---------- 애니메이션 ---------- */
  let phase = 0, blinkT = 2 + Math.random() * 3, waveT = 0, idleT = 0;
  const armBase = arms[1].rotation.clone();
  const st = { root, body, head, arms, legs, type };

  st.animate = (dt, speed = 0, time = 0) => {
    const s = Math.min(1, speed);
    phase += dt * (4 + 7 * s);
    const swing = Math.sin(phase) * 0.75 * s;
    legs[0].rotation.x = swing;
    legs[1].rotation.x = -swing;
    arms[0].rotation.x = -swing * 0.8;
    arms[1].rotation.x = swing * 0.8;
    body.position.y = Math.abs(Math.sin(phase)) * 0.07 * s + Math.sin(time * 2) * 0.012;
    body.rotation.z = Math.sin(phase) * 0.04 * s;
    head.rotation.z = Math.sin(time * 1.3) * 0.04;
    // 가만히 서 있으면 잠시 뒤 두리번거리기 (나만 — 집 앞 가족은 나를 바라봄)
    if (type === 'player') {
      idleT = s < 0.05 ? idleT + dt : 0;
      const look = idleT > 4 ? Math.sin(time * 0.8) * 0.45 : 0;
      head.rotation.y += (look - head.rotation.y) * Math.min(1, dt * 4);
    }

    // 깜빡임
    blinkT -= dt;
    const blink = blinkT < 0.12 ? 0.15 : 1;
    eyes.forEach(e => (e.scale.y = 1.3 * blink));
    if (blinkT < 0) blinkT = 2 + Math.random() * 3;

    // 손 흔들기
    if (waveT > 0) {
      waveT -= dt;
      const arm = arms[1];
      arm.rotation.z = -2.5 + Math.sin(time * 14) * 0.35;
      arm.rotation.x = 0;
      if (waveT <= 0) arm.rotation.copy(armBase);
    }
  };
  st.wave = (dur = 1.6) => { waveT = dur; };
  /* 생일엔 고깔모자 (원래 모자는 잠시 벗어 둠) */
  st.setParty = on => buildHat(on ? 'party' : hat);
  return st;
}
