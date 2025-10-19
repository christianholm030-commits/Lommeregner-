const CACHE = 'calc-v1';
const ASSETS = [
  '/Lommeregner-/',
  '/Lommeregner-/index.html',
  '/Lommeregner-/manifest.webmanifest',
  '/Lommeregner-/sw.js',
  '/Lommeregner-/icons/icon-192.png',
  '/Lommeregner-/icons/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
