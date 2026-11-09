/* Service worker ASTRA Formazione – © 2026 dr. Jonathan D'Eugenio */
const V = 'astra-v5';
const BASE = ['./', './index.html', './manifest.webmanifest', './assets/app.css', './assets/app.js', './assets/data.js', './assets/foto.js',
  './loghi/astra_logo.svg', './loghi/aifos_logo.svg', './loghi/jd_logo_bianco.svg', './app/icon-192.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(V).then(c => c.addAll(BASE)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== V).map(x => caches.delete(x)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const r = e.request; if (r.method !== 'GET') return;
  const u = new URL(r.url);
  if (u.origin !== location.origin) return;
  if (/\.(jpg|png|svg|webp)$/.test(u.pathname)) {
    e.respondWith(caches.open(V).then(c => c.match(r).then(m => m || fetch(r).then(res => { if (res.ok) c.put(r, res.clone()); return res; }))));
  } else {
    e.respondWith(fetch(r).then(res => { if (res.ok) caches.open(V).then(c => c.put(r, res.clone())); return res; }).catch(() => caches.match(r).then(m => m || caches.match('./index.html'))));
  }
});
