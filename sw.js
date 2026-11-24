/* =========================================================
   📱 Family village service worker — lets the 'app' installed on the home screen open even without internet
   - Village files: always fetch the new version first; if that fails (offline), the last saved copy
   - Fonts: once downloaded, the saved copy is used (their addresses do not change)
   - The Google Sheet (family posts) is left alone → posts written while offline are kept on the phone by store.js and sent again later
   ========================================================= */
const CACHE = 'family-village-v1';
const SHELL = ['./', 'css/style.css', 'config.js', 'js/app.js', 'manifest.webmanifest', 'manifest.ko.webmanifest', 'icon-192.png', 'apple-touch-icon.png'];

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
  // pages are kept under their address without ?query (so ?lang=en does not keep a second copy that is never refreshed)
  const key = req.mode === 'navigate' ? url.origin + url.pathname : req;
  e.respondWith(
    fetch(req)
      .then(res => (res.ok && !res.redirected ? save(key, res) : res))
      .catch(() => caches.match(key, { ignoreSearch: true }).then(r => r || (req.mode === 'navigate' ? caches.match('./') : Response.error())))
  );
});
