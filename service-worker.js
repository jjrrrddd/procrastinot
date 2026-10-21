const CACHE_NAME = 'procrastinot-app-shell-v1';
const APP_SHELL = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './assets/app-icon.svg'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(APP_SHELL))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => Promise.all(
                cacheNames
                    .filter((cacheName) => cacheName.startsWith('procrastinot-app-shell-') && cacheName !== CACHE_NAME)
                    .map((cacheName) => caches.delete(cacheName))
            ))
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    const request = event.request;
    const scope = self.registration.scope;

    if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) {
        return;
    }

    if (request.mode === 'navigate') {
        event.respondWith(
            fetch(request).catch(() => caches.match(new URL('./index.html', scope).href))
        );
        return;
    }

    const shellUrls = APP_SHELL.map((asset) => new URL(asset, scope).href);
    if (!shellUrls.includes(request.url)) {
        return;
    }

    event.respondWith(
        caches.open(CACHE_NAME).then(async (cache) => {
            try {
                const response = await fetch(request);
                if (response.ok) {
                    await cache.put(request, response.clone());
                }
                return response;
            } catch {
                return cache.match(request);
            }
        })
    );
});