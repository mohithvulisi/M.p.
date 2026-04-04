const CACHE_NAME = 'roomsync-v1';
const ASSETS = [
  '/roomsync.html',
  'https://cdnjs.cloudflare.com/ajax/libs/peerjs/1.4.7/peerjs.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js',
  'https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,500;0,700;1,300&family=JetBrains+Mono:wght@400;700&display=swap'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});