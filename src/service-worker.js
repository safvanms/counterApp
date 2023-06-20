
window.addEventListener('install', event => {
     event.waitUntil(
       caches.open('tally-counter-app-v1').then(cache => {
         return cache.addAll([
           '/index.html',
         ]);
       })
     );
   });
   
   window.addEventListener('fetch', event => {
     event.respondWith(
       caches.match(event.request).then(response => {
         return response || fetch(event.request);
       })
     );
   });
   