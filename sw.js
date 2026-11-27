// おとみち — オフラインでも開けるようにする
const CACHE = 'otomichi-v6';
const FILES = ['./', 'index.html', 'css/style.css', 'js/audio.js', 'js/content.js', 'js/assets.js', 'js/app.js', 'manifest.webmanifest', 'icons/icon.svg', 'icons/apple-touch-icon.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
// 自分のファイルは「ネット優先、だめならキャッシュ」。フォントは「キャッシュ優先」
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  // フォントと SoundQuest の画像は「キャッシュ優先」（一度見ればオフラインでも出る）
  if (url.hostname.includes('fonts.g') || (url.hostname === 'soundquest.jp' && url.pathname.startsWith('/files/'))) {
    e.respondWith(caches.match(e.request).then((hit) => hit || fetch(e.request).then((res) => {
      const copy = res.clone(); caches.open(CACHE).then((c) => c.put(e.request, copy)); return res;
    })));
    return;
  }
  if (url.origin !== location.origin) return;
  e.respondWith(fetch(e.request).then((res) => {
    const copy = res.clone(); caches.open(CACHE).then((c) => c.put(e.request, copy)); return res;
  }).catch(() => caches.match(e.request).then((hit) => hit || caches.match('index.html'))));
});
