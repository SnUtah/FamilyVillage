import * as THREE from 'three';
import { toon, mesh, canvasTex, rand, isMobile, gradientMap, reduceMotion } from './util.js';
import { getSeason } from './season.js';

/* =========================================================
   바깥 마을 환경 (숲속 마을): 하늘(낮·노을·밤), 풀밭, 흙길, 나무, 꽃, 구름, 날리는 것, 날아다니는 것
   🌿 봄·여름(기본): 싱그러운 초록 숲, 연분홍 꽃나무, 들꽃, 민들레 홀씨, 나비
   🍂 가을: 단풍·은행·주렁주렁 감, 코스모스, 낙엽, 고추잠자리, 허수아비, 낙엽 더미
   ❄️ 겨울: 눈 덮인 땅과 나무, 하얀 지붕, 내리는 눈, 🎄 크리스마스 트리와 집집마다 전구
   계절이 바뀌면 같은 물체의 색만 바꾸거나(seasonMat) 보이기/숨기기(onlyIn)만 해서 가볍게 바뀌어요.
   ========================================================= */

export const PATHS = [
  // [x1, z1, x2, z2, width]
  [0, 34, 0, 10, 3.2],        // 입구 → 광장 (가운데 모닥불)
  [0, -2, 0, -18, 2.6],       // 광장 → 가족 집 골목 → 함께 키우는 나무
  [5, 1, 20, -5.5, 2.6],      // 광장 → 사진관
  [-6, 3, -12, 2, 2.4],       // 광장 → 투표함
  [-6, 0, -18, -10, 2.4],     // 광장 → 퀴즈
  [6, 7, 10, 9, 2.2],         // 광장 → 가족 달력
  [-2, 20, -10, 19, 2.2],     // 입구 → 포토존
];
export const PLAZA = { x: 0, z: 4, r: 7.5 };

/* 계절 × 시간대별 색 (하늘 셰이더·안개·조명) */
export const SKIES = {
  green: {
    day:   { top: '#6FB7E8', mid: '#BFE3F7', horizon: '#EAF6E4', fog: '#E3F1DC', sun: '#FFF4DE', sunI: 2.4, hemi: '#F4FBEF', ground: '#B9D8A0', hemiI: 1.9, lamps: false, stars: false },
    dusk:  { top: '#6A7FC4', mid: '#F6A77A', horizon: '#FFD39B', fog: '#F9D2A0', sun: '#FFB07A', sunI: 2.0, hemi: '#FFD8B6', ground: '#A9B890', hemiI: 1.6, lamps: true, stars: false },
    night: { top: '#0F1B3D', mid: '#24386A', horizon: '#3F5A78', fog: '#3D5674', sun: '#B8C8FF', sunI: 1.1, hemi: '#8FA8D8', ground: '#3E5048', hemiI: 1.25, lamps: true, stars: true },
  },
  autumn: {
    day:   { top: '#78B4DC', mid: '#F3D9AE', horizon: '#FFCB8E', fog: '#F6D2A2', sun: '#FFD9A8', sunI: 2.35, hemi: '#FFEBD2', ground: '#C7B27E', hemiI: 1.85, lamps: false, stars: false },
    dusk:  { top: '#5E6FB0', mid: '#F29A64', horizon: '#FFC27A', fog: '#F7B97E', sun: '#FFA066', sunI: 2.0, hemi: '#FFCFA6', ground: '#A88E6E', hemiI: 1.6, lamps: true, stars: false },
    night: { top: '#121B38', mid: '#2C3762', horizon: '#5B4766', fog: '#4E4462', sun: '#B8C4F0', sunI: 1.05, hemi: '#8E9BCB', ground: '#3E4552', hemiI: 1.2, lamps: true, stars: true },
  },
  winter: {
    day:   { top: '#8FB4D8', mid: '#D8E6F2', horizon: '#F4F1EC', fog: '#E6EDF3', sun: '#FFF6EA', sunI: 2.15, hemi: '#F2F6FA', ground: '#D9E2EA', hemiI: 2.0, lamps: false, stars: false },
    dusk:  { top: '#5A6AA8', mid: '#D99AA0', horizon: '#F2C7A8', fog: '#E5C8C2', sun: '#FFC6A0', sunI: 1.9, hemi: '#EAD8E0', ground: '#B8B8C8', hemiI: 1.65, lamps: true, stars: false },
    night: { top: '#0E1A36', mid: '#26365E', horizon: '#4A5A80', fog: '#46557A', sun: '#C8D6FF', sunI: 1.15, hemi: '#9AAAD8', ground: '#5A6680', hemiI: 1.4, lamps: true, stars: true },
  },
};
export const TIMES = SKIES.green;   // 시간대 이름 목록 · 사진관 실내 조명용

function distToSeg(px, pz, x1, z1, x2, z2) {
  const dx = x2 - x1, dz = z2 - z1;
  const t = Math.max(0, Math.min(1, ((px - x1) * dx + (pz - z1) * dz) / (dx * dx + dz * dz)));
  return Math.hypot(px - (x1 + dx * t), pz - (z1 + dz * t));
}
export function onPath(x, z, pad = 0.6) {
  if (Math.hypot(x - PLAZA.x, z - PLAZA.z) < PLAZA.r + pad) return true;
  return PATHS.some(p => distToSeg(x, z, p[0], p[1], p[2], p[3]) < p[4] / 2 + pad);
}

/* ---------- 하늘 (+ 밤하늘 별) ---------- */
function makeSky() {
  const geo = new THREE.SphereGeometry(400, 32, 16);
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: {
      top: { value: new THREE.Color(TIMES.day.top) },
      mid: { value: new THREE.Color(TIMES.day.mid) },
      horizon: { value: new THREE.Color(TIMES.day.horizon) },
      sunDir: { value: new THREE.Vector3(0.5, 0.45, -0.75).normalize() },
      sunK: { value: 1 },
    },
    vertexShader: `varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: `
      uniform vec3 top; uniform vec3 mid; uniform vec3 horizon; uniform vec3 sunDir; uniform float sunK; varying vec3 vDir;
      void main(){
        float h = clamp(vDir.y, -0.2, 1.0);
        vec3 c = mix(horizon, mid, smoothstep(-0.02, 0.18, h));
        c = mix(c, top, smoothstep(0.18, 0.75, h));
        float s = max(dot(normalize(vDir), sunDir), 0.0);
        c += (vec3(1.0, 0.86, 0.6) * pow(s, 40.0) * 0.55 + vec3(1.0, 0.95, 0.8) * pow(s, 400.0) * 1.2) * sunK;
        gl_FragColor = vec4(c, 1.0);
      }`,
  });
  const sky = new THREE.Mesh(geo, mat);
  sky.renderOrder = -1;
  // 별 (밤에만)
  const n = 320, pos = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const a = rand(0, Math.PI * 2), e = rand(0.06, 1), r = 380;
    const hr = r * Math.sqrt(1 - e * e);
    pos.set([Math.cos(a) * hr, r * e, Math.sin(a) * hr], i * 3);
  }
  const sg = new THREE.BufferGeometry();
  sg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const stars = new THREE.Points(sg, new THREE.PointsMaterial({ color: '#FFF8D6', size: 2.2, sizeAttenuation: false, transparent: true, opacity: 0.9, depthWrite: false }));
  stars.visible = false;
  stars.renderOrder = -1;
  sky.add(stars);
  sky.userData.setPalette = p => {
    mat.uniforms.top.value.set(p.top); mat.uniforms.mid.value.set(p.mid); mat.uniforms.horizon.value.set(p.horizon);
    mat.uniforms.sunK.value = p.stars ? 0.15 : 1;
    stars.visible = !!p.stars;
  };
  return sky;
}

/* ---------- 🌿🍂❄️ 계절에 따라 바뀌는 것들 ----------
   seasonMat({ green, autumn, winter }) → 계절마다 색이 바뀌는 재질 (여러 물체가 같이 씀)
   onlyIn(물체, '계절'…)              → 그 계절에만 보이는 물체 */
const seasonal = [];
export function seasonMat(cols) {
  const mat = new THREE.MeshToonMaterial({ color: cols[getSeason()] || cols.green, gradientMap });
  seasonal.push({ mat, cols });
  return mat;
}
export function onlyIn(obj, ...seasons) {
  seasonal.push({ obj, seasons });
  obj.userData.seasons = seasons;   // 합치기(mergeStatic·bake)할 때도 계절 전용으로 남도록
  obj.visible = seasons.includes(getSeason());
  return obj;
}
function applySeasonal(s) {
  seasonal.forEach(e => { if (e.mat) e.mat.color.set(e.cols[s] || e.cols.green); else e.obj.visible = e.seasons.includes(s); });
}
const matSet = list => list.map(c => seasonMat(c));
const W3 = ['#F4F7FB', '#E3EAF2', '#FFFFFF'];   // 눈 덮인 잎
const LEAF = {
  maple:     matSet([0, 1, 2].map(i => ({ green: ['#7DBB5E', '#8FC970', '#6EAD52'][i], autumn: ['#D9553B', '#E8763E', '#C9452F'][i], winter: W3[i] }))),
  ginkgo:    matSet([0, 1, 2].map(i => ({ green: ['#F7D3DC', '#FBE4EA', '#F2BFCD'][i], autumn: ['#F2C14E', '#F7D46A', '#E3AE36'][i], winter: W3[(i + 1) % 3] }))),
  persimmon: matSet([0, 1, 2].map(i => ({ green: ['#6FA858', '#82B868', '#5F9A4C'][i], autumn: ['#A9B55A', '#C2BD5E', '#97A64C'][i], winter: W3[(i + 2) % 3] }))),
  pine:      matSet([0, 1, 2].map(i => ({ green: ['#3F6E45', '#4C7D50', '#386340'][i], autumn: ['#4F7A4A', '#5C8A52', '#476F43'][i], winter: ['#567F64', '#EEF3F1', '#6B8F78'][i] }))),
};
const BUSH = matSet([0, 1, 2].map(i => ({ green: ['#8CC47A', '#9ED08A', '#7DB86C'][i], autumn: ['#B98A3E', '#C76B3C', '#93A35A'][i], winter: ['#E9EFF4', '#DDE6EE', '#F4F7FA'][i] })));
const HILL = matSet([0, 1, 2, 3].map(i => ({ green: ['#9CCB84', '#AED596', '#8FBF78', '#A7CF8C'][i], autumn: ['#B7AE66', '#C79A55', '#A9A55E', '#C4884A'][i], winter: ['#E8EEF3', '#DCE4EC', '#F2F5F8', '#D5DEE8'][i] })));
const FLOWER = matSet([0, 1, 2, 3].map(i => ({ green: ['#F4B8C0', '#FFFFFF', '#F7D58B', '#B9A4E8'][i], autumn: ['#D9553B', '#F2C14E', '#E8763E', '#B9773E'][i], winter: ['#FFFFFF', '#C94F4F', '#E3EAF2', '#9DB7D5'][i] })));
export const bushMat = i => BUSH[i % 3];
export const flowerMat = i => FLOWER[i % 4];

/* ---------- ⚡ 굽기(bake): 같은 모양·재질의 조각들을 InstancedMesh 하나로 합쳐 한 번에 그림 ----------
   나무 91그루(조각 500여 개)처럼 움직이지 않는 물체를 휴대폰에서 가볍게 그리기 위해.
   계절 전용 조각(userData.seasons)은 그 계절에만 보이는 묶음이 돼요. */
export function bake(parent, groups, { shadows = true } = {}) {
  const buckets = new Map();
  groups.forEach(g => {
    g.updateMatrixWorld(true);
    g.traverse(o => {
      if (!o.isMesh) return;
      let seasons = null;
      for (let q = o; q; q = q.parent) if (q.userData.seasons) { seasons = q.userData.seasons; break; }
      const key = `${o.geometry.uuid}|${o.material.uuid}|${seasons || ''}`;
      let bk = buckets.get(key);
      if (!bk) buckets.set(key, bk = { geo: o.geometry, mat: o.material, seasons, list: [] });
      bk.list.push(o.matrixWorld.clone());
    });
  });
  buckets.forEach(bk => {
    const im = new THREE.InstancedMesh(bk.geo, bk.mat, bk.list.length);
    bk.list.forEach((m, i) => im.setMatrixAt(i, m));
    im.castShadow = shadows && !bk.mat.isMeshBasicMaterial; im.receiveShadow = !bk.mat.isMeshBasicMaterial;
    im.computeBoundingSphere();
    parent.add(bk.seasons ? onlyIn(im, ...bk.seasons) : im);
  });
  return buckets.size;
}

/* ---------- ⚡ 합치기(mergeStatic): 움직이지 않는 조각을 재질별로 모양 하나로 합쳐 그리기 명령을 줄임 ----------
   사진관 외관·통나무집·모닥불 돌·입구 아치처럼 서로 다른 모양이 많은 소품용. (같은 모양 반복은 bake)
   움직이거나 바뀌는 것은 userData.dynamic = true 로 표시해 두면 건드리지 않아요. */
const _v = new THREE.Vector3(), _n = new THREE.Vector3(), _nm = new THREE.Matrix3();
export function mergeStatic(root) {
  root.updateMatrixWorld(true);
  const inv = new THREE.Matrix4().copy(root.matrixWorld).invert();
  const buckets = new Map();
  root.traverse(o => {
    if (!o.isMesh || o.isInstancedMesh || Array.isArray(o.material)) return;
    for (let q = o; q && q !== root; q = q.parent) if (q.userData.dynamic) return;
    const g = o.geometry, a = g.attributes;
    if (!a.position || !a.normal || !a.uv || g.morphAttributes?.position) return;
    let seasons = null;
    for (let q = o; q && q !== root; q = q.parent) if (q.userData.seasons) { seasons = q.userData.seasons; break; }
    const key = `${o.material.uuid}|${seasons || ''}`;
    let bk = buckets.get(key);
    if (!bk) buckets.set(key, bk = { mat: o.material, seasons, items: [], cast: false, verts: 0, idx: 0 });
    bk.items.push({ o, g, m: new THREE.Matrix4().multiplyMatrices(inv, o.matrixWorld) });
    bk.cast = bk.cast || o.castShadow;
    bk.verts += a.position.count;
    bk.idx += g.index ? g.index.count : a.position.count;
  });
  let saved = 0;
  buckets.forEach(bk => {
    if (bk.items.length < 2) return;   // 혼자인 재질은 그대로 둠
    const pos = new Float32Array(bk.verts * 3), nor = new Float32Array(bk.verts * 3), uv = new Float32Array(bk.verts * 2);
    const index = new (bk.verts > 65535 ? Uint32Array : Uint16Array)(bk.idx);
    let vo = 0, io = 0;
    bk.items.forEach(({ o, g, m }) => {
      const P = g.attributes.position, N = g.attributes.normal, U = g.attributes.uv;
      _nm.getNormalMatrix(m);
      for (let i = 0; i < P.count; i++) {
        _v.fromBufferAttribute(P, i).applyMatrix4(m).toArray(pos, (vo + i) * 3);
        _n.fromBufferAttribute(N, i).applyMatrix3(_nm).normalize().toArray(nor, (vo + i) * 3);
        uv[(vo + i) * 2] = U.getX(i); uv[(vo + i) * 2 + 1] = U.getY(i);
      }
      if (g.index) for (let i = 0; i < g.index.count; i++) index[io++] = g.index.getX(i) + vo;
      else for (let i = 0; i < P.count; i++) index[io++] = i + vo;
      vo += P.count;
      o.parent.remove(o);
    });
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
    geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    geo.setIndex(new THREE.BufferAttribute(index, 1));
    geo.computeBoundingSphere();
    const merged = new THREE.Mesh(geo, bk.mat);
    merged.castShadow = bk.cast; merged.receiveShadow = true;
    root.add(bk.seasons ? onlyIn(merged, ...bk.seasons) : merged);
    saved += bk.items.length - 1;
  });
  return saved;
}

/* ---------- 풀밭 텍스처 (계절마다 하나씩, 처음 쓸 때 만듦) ---------- */
const groundTex = {};
function grassTexture(season) {
  if (groundTex[season]) return groundTex[season];
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const g = c.getContext('2d');
  const look = {
    green: { base: '#A9D18E', dots: ['#9DC883', '#B4D899', '#A2CC87', '#BEDDA3'], bits: ['#FFFFFF', '#F7D84E', '#F4B8C0'], nb: 40 },
    autumn: { base: '#B7C27C', dots: ['#ABB86F', '#C3CB88', '#A6B266', '#CBC88E'], bits: ['#E0863E', '#D35F3A', '#E8B547', '#B9773E'], nb: 90 },
    winter: { base: '#EEF3F8', dots: ['#E3EAF1', '#FFFFFF', '#DAE3EC', '#F6F9FB'], bits: ['#B9C9B3', '#C8D2DA'], nb: 30 },
  }[season] || {};
  g.fillStyle = look.base; g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 1400; i++) {
    g.fillStyle = look.dots[i % look.dots.length];
    g.globalAlpha = 0.5;
    g.beginPath(); g.arc(Math.random() * 256, Math.random() * 256, Math.random() * 3 + 1, 0, 7); g.fill();
  }
  // 작은 꽃잎 · 낙엽 · 눈 밖으로 나온 풀
  for (let i = 0; i < look.nb; i++) {
    g.fillStyle = look.bits[i % look.bits.length]; g.globalAlpha = 0.6;
    g.beginPath(); g.ellipse(Math.random() * 256, Math.random() * 256, 2.6, 1.5, Math.random() * 3, 0, 7); g.fill();
  }
  const t = canvasTex(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(60, 60);
  groundTex[season] = t;
  return t;
}

function pathTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = '#E8D3AE'; g.fillRect(0, 0, 128, 128);
  for (let i = 0; i < 18; i++) {
    g.fillStyle = ['#DEC59C', '#F0E0C0', '#D9BF95'][i % 3];
    g.beginPath();
    g.ellipse(Math.random() * 128, Math.random() * 128, 10 + Math.random() * 12, 8 + Math.random() * 8, Math.random() * 3, 0, 7);
    g.fill();
  }
  const t = canvasTex(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

/* ---------- 나무: 단풍 · 꽃나무(가을엔 은행) · 감나무 · 소나무 ---------- */
const trunkGeo = new THREE.CylinderGeometry(0.22, 0.32, 2, 8);
const leafGeo = new THREE.IcosahedronGeometry(1.3, 1);
const coneGeo = new THREE.ConeGeometry(1.35, 1.9, 8);
const fruitGeo = new THREE.SphereGeometry(0.15, 8, 6);
export function tree(x, z, { kind = 'maple', s = 1 } = {}) {
  const g = new THREE.Group();
  if (kind === 'pine') {
    g.add(mesh(trunkGeo, '#7E553A', 0, 0.8, 0));
    [[1.9, 1.0], [2.85, 0.8], [3.65, 0.58]].forEach(([y, sc], i) => { const c = mesh(coneGeo, LEAF.pine[i], 0, y, 0); c.scale.setScalar(sc); g.add(c); });
  } else {
    g.add(mesh(trunkGeo, '#8F6243', 0, 1, 0));
    const mats = LEAF[kind] || LEAF.maple;
    const blobs = [[0, 2.6, 0, 1.2], [0.8, 2.2, 0.2, 0.85], [-0.75, 2.3, -0.2, 0.9], [0.1, 3.3, -0.1, 0.8]];
    blobs.forEach(([bx, by, bz, bs], i) => {
      const l = mesh(leafGeo, mats[i % 3], bx, by, bz);
      l.scale.setScalar(bs);
      g.add(l);
    });
    if (kind === 'persimmon') {   // 주렁주렁 감 (가을에만)
      const fruits = new THREE.Group();
      [[0.9, 2.5, 0.9], [-0.5, 2.0, 1.0], [0.3, 3.0, 1.15], [-1.2, 2.6, 0.4], [1.3, 2.0, -0.2], [0.1, 1.9, 1.25], [-0.6, 3.4, 0.7]]
        .forEach(([fx, fy, fz]) => fruits.add(mesh(fruitGeo, '#F28C28', fx, fy, fz)));
      fruits.userData.seasons = ['autumn'];
      g.add(fruits);
    }
  }
  g.position.set(x, 0, z);
  g.scale.setScalar(s);
  g.rotation.y = Math.random() * 6;
  return g;
}

export function bush(x, z, s = 1, i = 0) {
  const g = new THREE.Group();
  [[0, 0.45, 0, 0.6], [0.5, 0.35, 0.1, 0.45], [-0.45, 0.35, -0.05, 0.45]].forEach(([bx, by, bz, bs]) => {
    const b = mesh(leafGeo, bushMat(i), bx, by, bz);
    b.scale.setScalar(bs);
    g.add(b);
  });
  g.position.set(x, 0, z);
  g.scale.setScalar(s);
  return g;
}

const LAMP = {
  post: new THREE.CylinderGeometry(0.09, 0.13, 2.8, 8), base: new THREE.CylinderGeometry(0.24, 0.24, 0.12, 8),
  glass: new THREE.CylinderGeometry(0.2, 0.2, 0.42, 6), cap: new THREE.ConeGeometry(0.34, 0.28, 6),
  glassMat: new THREE.MeshBasicMaterial({ color: '#FFD27A' }),
};
export function lamp(x, z) {
  const g = new THREE.Group();
  g.add(mesh(LAMP.post, '#5E4433', 0, 1.4, 0));
  g.add(mesh(LAMP.base, '#5E4433', 0, 0.06, 0));
  const glass = new THREE.Mesh(LAMP.glass, LAMP.glassMat);   // 육각 초롱
  glass.position.y = 3.0;
  g.add(glass);
  g.add(mesh(LAMP.cap, '#5E4433', 0, 3.34, 0));
  g.position.set(x, 0, z);
  return g;
}

/* 밤에 켜지는 가로등 불빛 (조명 계산 없이 스프라이트 + 바닥 빛 웅덩이) */
let glowTex, poolMat;
function lampGlow(x, z) {
  if (!glowTex) {
    const c = document.createElement('canvas');
    c.width = c.height = 128;
    const g = c.getContext('2d');
    const r = g.createRadialGradient(64, 64, 4, 64, 64, 64);
    r.addColorStop(0, 'rgba(255,236,170,.95)'); r.addColorStop(0.35, 'rgba(255,220,140,.45)'); r.addColorStop(1, 'rgba(255,200,120,0)');
    g.fillStyle = r; g.fillRect(0, 0, 128, 128);
    glowTex = canvasTex(c);
  }
  const g = new THREE.Group();
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.9 }));
  sp.position.set(0, 3.0, 0);
  sp.scale.set(3.6, 3.6, 1);
  poolMat = poolMat || { geo: new THREE.CircleGeometry(2.6, 24), mat: new THREE.MeshBasicMaterial({ color: '#FFE4A8', transparent: true, opacity: 0.2, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }) };
  const pool = new THREE.Mesh(poolMat.geo, poolMat.mat);
  pool.rotation.x = -Math.PI / 2;
  pool.position.y = 0.04;
  g.add(sp, pool);
  g.position.set(x, 0, z);
  return g;
}

const BENCH = { seat: new THREE.BoxGeometry(1.8, 0.08, 0.16), back: new THREE.BoxGeometry(1.8, 0.14, 0.06), leg: new THREE.BoxGeometry(0.08, 0.5, 0.5), arm: new THREE.BoxGeometry(0.08, 0.6, 0.06) };
export function bench(x, z, rotY = 0) {
  const g = new THREE.Group();
  const wood = '#B07A4F';
  for (let i = 0; i < 3; i++) g.add(mesh(BENCH.seat, wood, 0, 0.5, -0.2 + i * 0.2));
  for (let i = 0; i < 2; i++) g.add(mesh(BENCH.back, wood, 0, 0.75 + i * 0.2, -0.32));
  for (const sx of [-0.75, 0.75]) {
    g.add(mesh(BENCH.leg, '#6E4B33', sx, 0.25, 0));
    g.add(mesh(BENCH.arm, '#6E4B33', sx, 0.8, -0.32));
  }
  g.position.set(x, 0, z);
  g.rotation.y = rotY;
  return g;
}

export function balloons(x, z, h = 3.2) {
  const g = new THREE.Group();
  const cols = ['#F4B8C0', '#FFFFFF', '#F7D58B', '#F9C59E', '#E88A98'];
  const items = [];
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    const bx = Math.cos(a) * 0.35, bz = Math.sin(a) * 0.35, by = h + (i % 2) * 0.35;
    const b = mesh(new THREE.SphereGeometry(0.34, 14, 12), cols[i], bx, by, bz);
    b.scale.y = 1.18;
    const string = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0.4, 0), new THREE.Vector3(bx, by - 0.4, bz)]),
      new THREE.LineBasicMaterial({ color: '#B8A59B' })
    );
    g.add(b, string);
    items.push({ b, base: by, off: Math.random() * 6 });
  }
  g.add(mesh(new THREE.SphereGeometry(0.12, 8, 6), '#C9637A', 0, 0.4, 0));
  g.add(mesh(new THREE.CylinderGeometry(0.2, 0.25, 0.4, 10), '#FFF3EA', 0, 0.2, 0));
  g.position.set(x, 0, z);
  g.userData.update = (t) => items.forEach(it => {
    it.b.position.y = it.base + Math.sin(t * 1.4 + it.off) * 0.12;
    it.b.rotation.z = Math.sin(t + it.off) * 0.08;
  });
  return g;
}

/* ---------- 🧑‍🌾 허수아비 (봄~가을) · 🍂 낙엽 더미 · 눈 무더기 ---------- */
export function scarecrow(x, z, rotY = 0) {
  const g = new THREE.Group();
  g.add(mesh(new THREE.CylinderGeometry(0.06, 0.07, 2.6, 6), '#8F6243', 0, 1.3, 0));
  const arm = mesh(new THREE.CylinderGeometry(0.05, 0.05, 1.9, 6), '#8F6243', 0, 1.75, 0);
  arm.rotation.z = Math.PI / 2;
  g.add(arm);
  const shirt = mesh(new THREE.BoxGeometry(0.75, 0.75, 0.3), '#C9452F', 0, 1.6, 0);
  g.add(shirt);
  for (const s of [-1, 1]) g.add(mesh(new THREE.BoxGeometry(0.45, 0.22, 0.24), '#C9452F', s * 0.55, 1.78, 0));
  g.add(mesh(new THREE.SphereGeometry(0.32, 12, 10), '#F1D9A8', 0, 2.3, 0));
  const hat = mesh(new THREE.ConeGeometry(0.5, 0.35, 12), '#E3B55A', 0, 2.6, 0);
  g.add(hat, mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.04, 14), '#E3B55A', 0, 2.48, 0));
  for (const s of [-1, 1]) g.add(new THREE.Mesh(new THREE.SphereGeometry(0.04, 6, 4), new THREE.MeshBasicMaterial({ color: '#3A2A24' })).translateX(s * 0.11).translateY(2.33).translateZ(0.29));
  g.position.set(x, 0, z);
  g.rotation.y = rotY;
  return g;
}
/* 🎄 겨울 광장의 크리스마스 트리 (전구가 반짝반짝) */
export const twinkle = [];   // 반짝이는 전구 재질 (집 지붕 전구도 같이 씀)
export function bulbMats() {
  if (!twinkle.length) ['#FF5A5A', '#FFD34D', '#6FD3FF', '#9BE87A', '#FFFFFF'].forEach((c, i) => twinkle.push({ mat: new THREE.MeshBasicMaterial({ color: c }), base: new THREE.Color(c), off: i * 1.3 }));
  return twinkle.map(b => b.mat);
}
export function christmasTree(x, z, s = 1) {
  const g = new THREE.Group();
  g.add(mesh(new THREE.CylinderGeometry(0.22, 0.3, 1.0, 8), '#7E553A', 0, 0.5, 0));
  g.add(mesh(new THREE.CylinderGeometry(0.7, 0.8, 0.5, 12), '#C94F4F', 0, 0.25, 0));   // 화분
  const greens = ['#2F6B3E', '#377747', '#2A603A', '#3E8250'];
  [[1.6, 1.45, 1.7], [2.55, 1.15, 1.4], [3.35, 0.85, 1.1], [4.0, 0.55, 0.85]].forEach(([y, r, h], i) => g.add(mesh(new THREE.ConeGeometry(r, h, 12), greens[i], 0, y, 0)));
  const bulbs = bulbMats(), bulbGeo = new THREE.SphereGeometry(0.09, 8, 6), ornGeo = new THREE.SphereGeometry(0.14, 10, 8);
  for (let i = 0; i < 46; i++) {   // 나선으로 감은 전구
    const k = i / 46, y = 1.0 + k * 3.2, r = 1.35 * (1 - k * 0.82) + 0.05, a = k * Math.PI * 9;
    const b = new THREE.Mesh(bulbGeo, bulbs[i % bulbs.length]);
    b.position.set(Math.cos(a) * r, y, Math.sin(a) * r);
    g.add(b);
  }
  ['#C94F4F', '#E2B865', '#4A7FB5', '#FFFFFF'].forEach((c, k) => {
    for (let i = 0; i < 4; i++) {
      const y = 1.3 + ((i * 4 + k) % 13) * 0.21, r = 1.4 * (1 - (y - 1) / 3.6) + 0.08, a = i * 1.7 + k * 0.6;
      g.add(mesh(ornGeo, c, Math.cos(a) * r, y, Math.sin(a) * r));
    }
  });
  const star = new THREE.Mesh(new THREE.OctahedronGeometry(0.32, 0), new THREE.MeshBasicMaterial({ color: '#FFD34D' }));
  star.position.y = 4.5; star.scale.set(1, 1.25, 0.45);
  star.userData.dynamic = true;   // 빙글빙글 도는 별
  g.add(star);
  g.position.set(x, 0, z);
  g.scale.setScalar(s);
  g.userData.star = star;
  return g;
}
export function leafPile(x, z, s = 1, winter = false) {
  const g = new THREE.Group();
  const cols = winter ? ['#FBFCFE', '#EEF3F8', '#F6F9FB', '#E6EDF4'] : ['#D9553B', '#E8763E', '#F2C14E', '#B9773E'];
  [[0, 0.22, 0, 0.75], [0.45, 0.16, 0.2, 0.5], [-0.4, 0.15, -0.15, 0.55], [0.1, 0.14, -0.45, 0.45]].forEach(([bx, by, bz, bs], i) => {
    const b = mesh(leafGeo, cols[i % cols.length], bx, by, bz);
    b.scale.set(bs, bs * 0.4, bs);
    g.add(b);
  });
  g.position.set(x, 0, z);
  g.scale.setScalar(s);
  return g;
}

/* ---------- 풀 · 꽃 · 버섯 (인스턴싱으로 가볍게) ---------- */
const FLORA_COLORS = {
  green: ['#FFFFFF', '#F7D84E', '#B9A4E8', '#F4A6C6', '#FFE07A', '#9FD3F0'],   // 들꽃
  autumn: ['#FFFFFF', '#F4A6C6', '#E07BB5', '#F2C14E', '#F6CBE0', '#E9894A'],  // 코스모스
};
function scatterFlora(scene, avoid) {
  const n = isMobile ? 500 : 900;
  const tuftGeo = new THREE.ConeGeometry(0.07, 0.4, 3);
  const tufts = new THREE.InstancedMesh(tuftGeo, seasonMat({ green: '#8DC175', autumn: '#A9B46C', winter: '#D8E2E8' }), n);
  const flowerGeo = new THREE.IcosahedronGeometry(0.11, 0);
  const nf = isMobile ? 260 : 480;
  const flowers = new THREE.InstancedMesh(flowerGeo, new THREE.MeshToonMaterial({ color: '#fff' }), nf);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3();
  const e = new THREE.Euler();
  const place = () => {
    for (let k = 0; k < 20; k++) {
      const a = Math.random() * Math.PI * 2, r = Math.sqrt(Math.random()) * 38;
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      if (!onPath(x, z) && !avoid(x, z)) return [x, z];
    }
    return [60, 60];
  };
  for (let i = 0; i < n; i++) {
    const [x, z] = place();
    e.set(rand(-0.2, 0.2), rand(0, 6), rand(-0.2, 0.2));
    q.setFromEuler(e);
    const sc = rand(0.7, 1.4);
    m.compose(p.set(x, 0.18 * sc, z), q, s.set(sc, sc, sc));
    tufts.setMatrixAt(i, m);
  }
  for (let i = 0; i < nf; i++) {
    const [x, z] = place();
    m.compose(p.set(x, 0.14, z), q.identity(), s.setScalar(rand(0.8, 1.3)));
    flowers.setMatrixAt(i, m);
  }
  tufts.receiveShadow = true;
  scene.add(onlyIn(tufts, 'green', 'autumn'), flowers);
  // 숲 가장자리의 빨간 버섯 (눈 오면 숨음)
  const nm = 22;
  const stems = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.06, 0.08, 0.26, 6), toon('#F6EBD8'), nm);
  const caps = new THREE.InstancedMesh(new THREE.SphereGeometry(0.17, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), toon('#D9553B'), nm);
  for (let i = 0; i < nm; i++) {
    let x = 60, z = 60;
    for (let k = 0; k < 20; k++) { const a = Math.random() * Math.PI * 2, r = rand(24, 38); const tx = Math.cos(a) * r, tz = Math.sin(a) * r; if (!onPath(tx, tz) && !avoid(tx, tz)) { x = tx; z = tz; break; } }
    const sc = rand(0.8, 1.5);
    m.compose(p.set(x, 0.13 * sc, z), q.identity(), s.setScalar(sc)); stems.setMatrixAt(i, m);
    m.compose(p.set(x, 0.25 * sc, z), q.identity(), s.setScalar(sc)); caps.setMatrixAt(i, m);
  }
  scene.add(onlyIn(stems, 'green', 'autumn'), onlyIn(caps, 'green', 'autumn'));
  return {
    setSeason(season) {
      const cols = FLORA_COLORS[season];
      flowers.visible = !!cols;
      if (!cols) return;
      const cc = cols.map(c => new THREE.Color(c));
      for (let i = 0; i < nf; i++) flowers.setColorAt(i, cc[i % cc.length]);
      flowers.instanceColor.needsUpdate = true;
    },
  };
}

/* ---------- 구름 ---------- */
function makeClouds(scene) {
  const clouds = [];
  const group = new THREE.Group();
  scene.add(group);
  const geo = new THREE.SphereGeometry(1, 12, 10);
  const mat = new THREE.MeshToonMaterial({ color: '#FFFFFF', emissive: '#FFF4EA', emissiveIntensity: 0.35 });
  for (let i = 0; i < 14; i++) {
    const g = new THREE.Group();
    const puffs = 4 + Math.floor(Math.random() * 3);
    for (let j = 0; j < puffs; j++) {
      const p = new THREE.Mesh(geo, mat);
      p.position.set(j * 2.2 - puffs, Math.random() * 1.2, Math.random() * 1.5);
      p.scale.setScalar(rand(1.6, 2.8));
      g.add(p);
    }
    const a = Math.random() * Math.PI * 2, r = rand(70, 150);
    g.position.set(Math.cos(a) * r, rand(28, 50), Math.sin(a) * r - 30);
    g.scale.set(1.3, 0.8, 1);
    group.add(g);
    clouds.push({ g, speed: rand(0.4, 1.0) });
  }
  group.userData.dynamic = true;   // 흘러가는 구름
  const update = (dt) => { if (!group.visible) return; clouds.forEach(c => { c.g.position.x += c.speed * dt; if (c.g.position.x > 170) c.g.position.x = -170; }); };
  return { group, update };
}

/* ---------- 날리는 것: 🌿 민들레 홀씨·꽃잎 / 🍂 단풍잎 / ❄️ 눈송이 ---------- */
function particleTexture(kind) {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d');
  if (kind === 'leaf') {   // 다섯 갈래 잎
    g.fillStyle = '#FFFFFF';
    g.beginPath();
    for (let i = 0; i < 10; i++) {
      const a = -Math.PI / 2 + (i / 10) * Math.PI * 2, r = i % 2 ? 11 : 27;
      g.lineTo(32 + Math.cos(a) * r, 30 + Math.sin(a) * r);
    }
    g.closePath(); g.fill();
    g.fillRect(31, 36, 2, 22);
  } else {   // 동그랗고 보송보송한 홀씨 · 눈송이
    const r = g.createRadialGradient(32, 32, 2, 32, 32, 28);
    r.addColorStop(0, 'rgba(255,255,255,1)'); r.addColorStop(kind === 'snow' ? 0.55 : 0.35, 'rgba(255,255,255,.85)'); r.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = r; g.fillRect(0, 0, 64, 64);
  }
  return canvasTex(c);
}
const PARTICLES = {
  green: { tex: 'fluff', size: 0.24, fall: 0.3, drift: 1.4, cols: ['#FFFFFF', '#FFF6D8', '#FCE4EC', '#FFFFFF'] },
  autumn: { tex: 'leaf', size: 0.36, fall: 1, drift: 1, cols: ['#D9553B', '#E8763E', '#F2C14E', '#B9773E', '#C9452F'] },
  winter: { tex: 'snow', size: 0.24, fall: 0.75, drift: 0.5, cols: ['#FFFFFF', '#F4F8FF', '#FFFFFF'] },
};
function makePetals(scene) {
  const n = reduceMotion ? 0 : isMobile ? 160 : 300;
  if (!n) return { group: new THREE.Group(), update() {}, setCount() {}, setSeason() {} };
  const pos = new Float32Array(n * 3), vel = [];
  const colors = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    pos[i * 3] = rand(-30, 30); pos[i * 3 + 1] = rand(0, 9); pos[i * 3 + 2] = rand(-30, 30);
    vel.push([rand(0.3, 0.9), rand(0.3, 0.8), rand(0, 6)]);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const mat = new THREE.PointsMaterial({ size: 0.3, transparent: true, depthWrite: false, vertexColors: true, alphaTest: 0.1 });
  const pts = new THREE.Points(geo, mat);
  pts.frustumCulled = false;
  scene.add(pts);
  const texs = {};
  let live = n, P = PARTICLES.green;
  return {
    group: pts,
    setCount(k) { live = Math.max(0, Math.min(n, k)); geo.setDrawRange(0, live); },
    setSeason(season) {
      P = PARTICLES[season] || PARTICLES.green;
      mat.map = texs[P.tex] || (texs[P.tex] = particleTexture(P.tex));
      mat.size = P.size; mat.needsUpdate = true;
      const cc = P.cols.map(c => new THREE.Color(c));
      for (let i = 0; i < n; i++) { const c = cc[i % cc.length]; colors.set([c.r, c.g, c.b], i * 3); }
      geo.attributes.color.needsUpdate = true;
    },
    update(dt, t, center) {
      if (!pts.visible) return;
      for (let i = 0; i < live; i++) {
        const v = vel[i];
        pos[i * 3] += (Math.sin(t * v[0] + v[2]) * 0.6 * P.drift + 0.35) * dt;
        pos[i * 3 + 1] -= v[1] * P.fall * dt;
        pos[i * 3 + 2] += Math.cos(t * v[0] * 0.7 + v[2]) * 0.4 * P.drift * dt;
        if (pos[i * 3 + 1] < 0) {
          pos[i * 3] = center.x + rand(-28, 28); pos[i * 3 + 1] = rand(6, 9); pos[i * 3 + 2] = center.z + rand(-28, 20);
        }
      }
      geo.attributes.position.needsUpdate = true;
    },
  };
}

/* ---------- 날아다니는 것: 🦋 나비 (봄·여름) · 고추잠자리 (가을) · 겨울엔 없음 ---------- */
function makeFlyers(scene) {
  const butterflies = new THREE.Group(), dragonflies = new THREE.Group();
  butterflies.userData.dynamic = dragonflies.userData.dynamic = true;
  scene.add(butterflies, dragonflies);
  const list = [];
  const count = reduceMotion ? 0 : 8;
  // 나비
  const bWing = new THREE.CircleGeometry(0.16, 10);
  const bCols = ['#F7D58B', '#F4B8C0', '#FFFFFF', '#BFE3F5'];
  for (let i = 0; i < count; i++) {
    const g = new THREE.Group();
    const mat = new THREE.MeshBasicMaterial({ color: bCols[i % 4], side: THREE.DoubleSide });
    const l = new THREE.Mesh(bWing, mat), r = new THREE.Mesh(bWing, mat);
    l.position.x = -0.14; r.position.x = 0.14;
    const lw = new THREE.Group(), rw = new THREE.Group();
    lw.add(l); rw.add(r);
    g.add(lw, rw);
    butterflies.add(g);
    list.push({ g, lw, rw, axis: 'y', amp: 1.1, freq: 18, cx: rand(-25, 25), cz: rand(-25, 25), r: rand(2, 5), sp: rand(0.3, 0.7), off: rand(0, 6) });
  }
  // 고추잠자리
  const dWing = new THREE.CircleGeometry(0.16, 10);
  const wingMat = new THREE.MeshBasicMaterial({ color: '#FFFFFF', transparent: true, opacity: 0.55, side: THREE.DoubleSide, depthWrite: false });
  const bodyGeo = new THREE.CylinderGeometry(0.025, 0.018, 0.42, 6);
  for (let i = 0; i < count; i++) {
    const g = new THREE.Group();
    const body = new THREE.Mesh(bodyGeo, new THREE.MeshBasicMaterial({ color: i % 3 ? '#D9452F' : '#E8763E' }));
    body.rotation.x = Math.PI / 2;
    g.add(body);
    const lw = new THREE.Group(), rw = new THREE.Group();
    for (const [grp, sx] of [[lw, -1], [rw, 1]]) for (const dz of [-0.05, 0.06]) {
      const w = new THREE.Mesh(dWing, wingMat);
      w.scale.set(1.4, 0.32, 1); w.position.set(sx * 0.2, 0, dz); w.rotation.x = -Math.PI / 2;
      grp.add(w);
    }
    g.add(lw, rw);
    dragonflies.add(g);
    list.push({ g, lw, rw, axis: 'z', amp: 0.35, freq: 30, cx: rand(-25, 25), cz: rand(-25, 25), r: rand(2, 5), sp: rand(0.3, 0.7), off: rand(0, 6) });
  }
  let lite = false, season = 'green';
  const paint = () => { butterflies.visible = !lite && season === 'green'; dragonflies.visible = !lite && season === 'autumn'; };
  return {
    setLite(on) { lite = on; paint(); },
    setSeason(s) { season = s; paint(); },
    get visible() { return butterflies.visible || dragonflies.visible; },
    update(dt, t) {
      if (!butterflies.visible && !dragonflies.visible) return;
      list.forEach(b => {
        if (!b.g.parent.visible) return;
        const a = t * b.sp + b.off;
        b.g.position.set(b.cx + Math.cos(a) * b.r, 1.2 + Math.sin(t * 2 + b.off) * 0.5, b.cz + Math.sin(a * 1.3) * b.r);
        b.g.rotation.y = -a;
        const f = Math.sin(t * b.freq + b.off) * b.amp;
        b.lw.rotation[b.axis] = f; b.rw.rotation[b.axis] = -f;
      });
    },
  };
}

/* ---------- 하트·이모지 터지는 효과 (이모지별 텍스처는 한 번만 만듦) ---------- */
const emojiTex = new Map();
export function emojiTexture(emoji = '💗') {
  if (emojiTex.has(emoji)) return emojiTex.get(emoji);
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d');
  g.font = '52px serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(emoji, 32, 36);
  const t = canvasTex(c);
  emojiTex.set(emoji, t);
  return t;
}
const bursts = [];
export function spawnHearts(scene, pos, count = 10, emoji = '💗') {
  const tex = emojiTexture(emoji);
  for (let i = 0; i < count; i++) {
    if (bursts.length > 90) break;
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false }));
    sp.position.copy(pos).add(new THREE.Vector3(rand(-0.4, 0.4), rand(0, 0.5), rand(-0.4, 0.4)));
    sp.scale.setScalar(rand(0.35, 0.6));
    scene.add(sp);
    bursts.push({ sp, v: new THREE.Vector3(rand(-1, 1), rand(2, 3.5), rand(-1, 1)), life: 1.4 + Math.random() * 0.4, scene });
  }
}
/* 한 점에서 목표까지 포물선으로 날아가는 스프라이트 (분수 동전) */
export function throwSprite(scene, from, to, emoji = '🪙', T = 0.7, onLand) {
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: emojiTexture(emoji), transparent: true, depthWrite: false }));
  sp.position.copy(from);
  sp.scale.setScalar(0.5);
  scene.add(sp);
  const g = 9;
  const v = new THREE.Vector3((to.x - from.x) / T, (to.y - from.y + 0.5 * g * T * T) / T, (to.z - from.z) / T);
  bursts.push({ sp, v, life: T, scene, g, onLand });
}
function updateBursts(dt) {
  for (let i = bursts.length - 1; i >= 0; i--) {
    const b = bursts[i];
    b.life -= dt;
    b.v.y -= (b.g || 1.2) * dt;
    b.sp.position.addScaledVector(b.v, dt);
    if (!b.g) b.sp.material.opacity = Math.min(1, b.life);
    if (b.life <= 0) {
      b.scene.remove(b.sp); b.sp.material.dispose(); bursts.splice(i, 1);
      b.onLand?.(b.sp.position);
    }
  }
}

/* =========================================================
   환경 만들기
   ========================================================= */
export function buildEnvironment(scene, avoid) {
  const group = new THREE.Group();
  scene.add(group);

  const sky = makeSky();
  scene.add(sky);

  // 땅 (계절마다 풀밭 텍스처를 바꿈)
  const ground = new THREE.Mesh(new THREE.CircleGeometry(160, 64), new THREE.MeshToonMaterial({ map: grassTexture(getSeason()), gradientMap }));
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  group.add(ground);

  // 길
  const pTex = pathTexture();
  const pathMat = new THREE.MeshToonMaterial({ map: pTex, gradientMap, polygonOffset: true, polygonOffsetFactor: -1 });
  for (const [x1, z1, x2, z2, w] of PATHS) {
    const len = Math.hypot(x2 - x1, z2 - z1);
    const geo = new THREE.PlaneGeometry(w, len);
    const uv = geo.attributes.uv;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * w / 3, uv.getY(i) * len / 3);
    const m = new THREE.Mesh(geo, pathMat);
    m.rotation.x = -Math.PI / 2;
    m.rotation.z = Math.atan2(x2 - x1, z2 - z1) + Math.PI;
    m.position.set((x1 + x2) / 2, 0.02, (z1 + z2) / 2);
    m.receiveShadow = true;
    group.add(m);
    for (const [cx, cz] of [[x1, z1], [x2, z2]]) {
      const cap = new THREE.Mesh(new THREE.CircleGeometry(w / 2, 20), pathMat);
      cap.rotation.x = -Math.PI / 2;
      cap.position.set(cx, 0.021, cz);
      cap.receiveShadow = true;
      group.add(cap);
    }
  }
  // 광장
  const plaza = new THREE.Mesh(new THREE.CircleGeometry(PLAZA.r, 48), pathMat);
  plaza.rotation.x = -Math.PI / 2;
  plaza.position.set(PLAZA.x, 0.025, PLAZA.z);
  plaza.receiveShadow = true;
  group.add(plaza);
  const ring = new THREE.Mesh(new THREE.RingGeometry(PLAZA.r - 0.35, PLAZA.r, 48), toon('#E6D2B5'));
  ring.rotation.x = -Math.PI / 2;
  ring.position.set(PLAZA.x, 0.03, PLAZA.z);
  group.add(ring);

  // 가장자리 숲 (경계) — 바깥 나무는 그림자 없이, 전부 한꺼번에 굽기
  const colliders = [];
  const outer = [], inner = [], props = [];
  for (let i = 0; i < 46; i++) {
    const a = (i / 46) * Math.PI * 2 + rand(-0.04, 0.04);
    const r = rand(41, 46);
    const x = Math.cos(a) * r, z = Math.sin(a) * r;
    if (Math.abs(x) < 4 && z > 30) continue; // 입구
    outer.push(tree(x, z, { kind: ['pine', 'maple', 'pine', 'ginkgo', 'pine', 'persimmon'][i % 6], s: rand(1.1, 1.6) }));
  }
  for (let i = 0; i < 30; i++) {
    const a = Math.random() * Math.PI * 2, r = rand(50, 75);
    outer.push(tree(Math.cos(a) * r, Math.sin(a) * r, { kind: ['pine', 'pine', 'maple', 'ginkgo'][i % 4], s: rand(1.4, 2.2) }));
  }
  // 입구 너머 언덕
  for (let i = 0; i < 8; i++) {
    const hill = mesh(new THREE.SphereGeometry(1, 20, 12), HILL[i % 4], rand(-120, 120), -rand(8, 14), -rand(90, 130));
    hill.scale.set(rand(25, 45), rand(18, 26), rand(20, 30));
    group.add(hill);
  }

  // 안쪽 나무들
  const innerTrees = [
    [-9, 27, 'persimmon'], [14.5, 31, 'maple'], [-24, 22, 'pine'], [24, 20, 'ginkgo'], [-30, 6, 'pine'],
    [30, 4, 'maple'], [-28, -20, 'ginkgo'], [33, -20, 'pine'], [-8, -28, 'pine'], [8, -29, 'maple'],
    [-15, 12, 'maple'], [16, 14, 'persimmon'], [-22, -2, 'ginkgo'], [11, -22, 'persimmon'], [-12, -24, 'maple'],
  ];
  innerTrees.forEach(([x, z, k]) => {
    inner.push(tree(x, z, { kind: k, s: rand(1, 1.3) }));
    colliders.push({ x, z, r: 0.7 });
  });

  // 덤불
  [[-5, 28], [12.5, 27.5], [-14, 8], [13, 3], [-3, -21], [3, -21], [-26, 12], [26, 10], [-20, -18], [28, -8]].forEach(([x, z], i) => {
    inner.push(bush(x, z, rand(0.9, 1.3), i));
    colliders.push({ x, z, r: 0.9 });
  });

  // 가로등 (+ 밤 불빛)
  const night = new THREE.Group();
  night.visible = false;
  night.userData.dynamic = true;   // 밤에만 켜짐
  group.add(night);
  [[-2.3, 30], [2.3, 24], [-2.3, 18], [2.3, 12], [7.5, -1], [14, -3.5], [-8.6, 5.5], [-12, -5], [-8, 9], [8, 12]].forEach(([x, z]) => {
    props.push(lamp(x, z));
    night.add(lampGlow(x, z));
    colliders.push({ x, z, r: 0.3 });
  });

  // 벤치
  [[-6.3, 8.8, 2.4], [6.3, 8.8, -2.4], [-6.8, -0.5, 1.2], [6.8, -1.0, -1.2]].forEach(([x, z, r]) => {
    props.push(bench(x, z, r));
    colliders.push({ x, z, r: 0.9 });
  });
  bake(group, outer, { shadows: false });
  bake(group, inner, { shadows: true });
  bake(group, props, { shadows: true });
  // 밤 불빛 웅덩이도 한 번에 (불빛 스프라이트는 그대로)
  const pools = [];
  night.children.forEach(lg => { const pool = lg.children.find(c => c.isMesh); if (pool) { lg.remove(pool); const h = new THREE.Group(); h.position.copy(lg.position); h.add(pool); pools.push(h); } });
  bake(night, pools, { shadows: false });

  // 입구의 허수아비(봄~가을), 겨울엔 광장 옆 크리스마스 트리 · 낙엽 더미(가을) / 눈 무더기(겨울)
  const updaters = [];
  group.add(onlyIn(scarecrow(-6.2, 30.5, 0.5), 'green', 'autumn'));
  colliders.push({ x: -6.2, z: 30.5, r: 0.6 });
  const xmas = onlyIn(christmasTree(6.4, 14.6, 1), 'winter');
  group.add(xmas);
  colliders.push({ x: 6.4, z: 14.6, r: 1.2 });
  updaters.push(t => {   // 전구 반짝이기 (겨울에만 계산)
    if (!xmas.visible) return;
    twinkle.forEach(b => { const k = 0.55 + 0.45 * Math.max(0, Math.sin(t * 2.6 + b.off)); b.mat.color.copy(b.base).multiplyScalar(k); });
    xmas.userData.star.rotation.y = t * 0.8;
  });
  [[3.9, 32.4, 1], [15.5, -7, 0.9], [24.5, -7, 0.9], [-7.5, 15.5, 0.8], [8.5, -5.2, 0.7]].forEach(([x, z, sc]) => {
    group.add(onlyIn(leafPile(x, z, sc), 'autumn'));
    group.add(onlyIn(leafPile(x, z, sc * 1.1, true), 'winter'));
    colliders.push({ x, z, r: 0.6 * sc });
  });

  const flora = scatterFlora(group, avoid);
  const clouds = makeClouds(group);
  const petals = makePetals(group);
  const flyers = makeFlyers(group);

  let mode = 'day', season = getSeason();
  const env = {
    group, sky, colliders,
    get time() { return mode; },
    get season() { return season; },
    palette: () => SKIES[season][mode],
    /* 낮 · 노을 · 밤 */
    setTime(m) {
      mode = SKIES[season][m] ? m : 'day';
      const p = SKIES[season][mode];
      sky.userData.setPalette(p);
      night.visible = p.lamps;
      return p;
    },
    /* 🌿 · 🍂 · ❄️ */
    setSeason(s) {
      season = SKIES[s] ? s : 'green';
      ground.material.map = grassTexture(season);
      ground.material.needsUpdate = true;
      applySeasonal(season);
      flora.setSeason(season);
      petals.setSeason(season);
      flyers.setSeason(season);
      return env.setTime(mode);
    },
    /* 느린 휴대폰: 1 = 날리는 것 절반, 2 = 구름·나비·날리는 것 끄기 */
    setLite(level) {
      petals.setCount(level >= 2 ? 0 : level === 1 ? 80 : 300);
      petals.group.visible = level < 2;
      clouds.group.visible = level < 2;
      flyers.setLite(level >= 2);
    },
    update(dt, t, center) {
      clouds.update(dt);
      petals.update(dt, t, center);
      flyers.update(dt, t);
      updaters.forEach(u => u(t));
    },
  };
  mergeStatic(group);   // 길·언덕·허수아비·낙엽 더미·크리스마스 트리 장식 등을 재질별로 합침
  env.setSeason(season);
  return env;
}

export { updateBursts };
