const CACHE_NAME = 'university-portal-v1';

const CORE_ASSETS = [
  './',
  './index.html',
  './styles.css',
  './main.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './image.png',
  './image-1.png',
  './image-2.png',
  './image-3.png',
  './image-4.png',
  './image-5.png',
  './image-6.png',
  './image-7.png',
  './image-8.png',
  './image-9.png',
  './image-10.png',
  './image-11.png',
  './favicon.ico',
  './image-12.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((oldKey) => caches.delete(oldKey))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then((networkResponse) => {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
          return networkResponse;
        })
        .catch(async () => {
          if (event.request.mode === 'navigate') {
            const fallback = await caches.match('./index.html');
            if (fallback) {
              return fallback;
            }
          }
          throw new Error('Offline and no cached resource found.');
        });
    })
  );
});
