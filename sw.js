const CACHE_NAME = 'lesny-kviz-v1.1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './js/html5-qrcode.min.js',
  './images/home.jpg',
  './images/path.jpg',
  './images/quiz_default.jpg',
  './images/finish.jpg',
  './images/placeholder.jpg',
  './images/stop_1.jpg',
  './images/stop_2.jpg',
  './images/stop_3.jpg',
  './images/icon.png'
];

// Inštalácia - uloženie súborov do cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Aktivácia
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

// Načítavanie zo systému cache (offline prístup)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
