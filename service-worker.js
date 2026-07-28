const CACHE_NAME = 'shepot-v1.0.0';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/pages/main.html',
  '/pages/today.html',
  '/pages/questions.html',
  '/pages/games.html',
  '/pages/beyond.html',
  '/pages/moments.html',
  '/pages/we.html',
  '/pages/profile.html',
  '/pages/step2-how.html',
  '/pages/step3-name.html',
  '/pages/step4-qr.html',
  '/pages/truthordare.html',
  '/pages/strip.html',
  '/pages/cube.html',
  '/pages/kamasutra.html',
  '/pages/questions18.html',
  '/pages/fantasies.html',
  '/pages/mission.html',
  '/pages/morethanwords.html',
  '/pages/conversation.html',
  '/pages/blinddate.html',
  '/pages/wheel.html',
  '/css/global.css',
  '/js/qrcode.min.js',
  '/img/favicon.ico',
  '/img/icon-16x16.png',
  '/img/icon-32x32.png',
  '/img/icon-48x48.png',
  '/img/icon-72x72.png',
  '/img/icon-96x96.png',
  '/img/icon-128x128.png',
  '/img/icon-144x144.png',
  '/img/icon-152x152.png',
  '/img/icon-192x192.png',
  '/img/icon-384x384.png',
  '/img/icon-512x512.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('[SW] Кеширование ресурсов...');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Удалён старый кеш:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});