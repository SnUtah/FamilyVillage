/* =========================================================
   📱 가족 마을 서비스 워커 — 홈 화면에 설치한 '앱'이 인터넷이 끊겨도 열리게
   - 마을 파일: 항상 새 버전을 먼저 받고, 안 되면(오프라인) 마지막 저장본
   - 글꼴: 한 번 받으면 저장본 사용 (주소가 바뀌지 않음)
   - 구글 시트(가족 글)는 건드리지 않음 → 끊겼을 때 쓴 글은 store.js가 휴대폰에 보관했다가 다시 보냄
   ========================================================= */
const CACHE = 'family-village-v1';
const SHELL = ['./', 'css/style.css', 'config.js', 'js/app.js', 'manifest.webmanifest', 'icon-192.png', 'apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
const save = (req, res) => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res; };
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const font = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
  if (font) {
    e.respondWith(caches.match(req).then(r => r || fetch(req).then(res => save(req, res))));
    return;
  }
  if (url.origin !== self.location.origin) return;
  e.respondWith(
    fetch(req)
      .then(res => (res.ok && !res.redirected ? save(req, res) : res))
      .catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || (req.mode === 'navigate' ? caches.match('./') : Response.error())))
  );
});
