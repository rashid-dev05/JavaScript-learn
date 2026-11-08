/**
 * JSÖyrən - Progressive Web App (PWA) Service Worker
 * Versiya: 1.0.0
 * Strategiya: Stale-While-Revalidate (Lokal resurslar & CDN) + Network-First (Naviqasiya üçün Offline Fallback)
 */

const CACHE_NAME = 'jsoyren-pwa-v1.0.0';

// İlkin keşlənməli olan lokal və xarici kritik resurslar
const PRECACHE_ASSETS = [
    './',
    './index.html',
    './style.css',
    './manifest.json',
    './icon-192.svg',
    './icon-512.svg',
    './storage_engine.js',
    './roadmap.js',
    './exam.js',
    './data_hourglass_challenges.js',
    './data_sections_1_5.js',
    './data_sections_6_9.js',
    './data_sections_10_13.js',
    './data_section_14.js',
    './data_section_15.js',
    './data_section_16.js',
    './data_section_17.js',
    './data_section_18.js',
    './data_section_19.js',
    './data_section_20.js',
    './data_section_21.js',
    './panel_data.js',
    './data_bug_panel.js',
    './ecosystem_lessons_data.js',
    './data_exam_questions.js',
    './app.js',
    // CodeMirror CDN faylları (Offline işləməsi üçün)
    'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/theme/dracula.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/javascript/javascript.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/addon/edit/matchbrackets.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/addon/edit/closebrackets.min.js',
    // Google Fonts
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap'
];

/**
 * 1. INSTALL Hadisəsi: Resursların təhlükəsiz keşlənməsi
 */
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(async (cache) => {
            console.log('[SW] PWA Statik resurslar keşlənir...');
            
            // Fərdi olaraq əlavə edirik ki, tək bir CDN xətası bütün quraşdırmanı dayandırmasın
            const cachePromises = PRECACHE_ASSETS.map(async (assetUrl) => {
                try {
                    const response = await fetch(assetUrl, { cache: 'no-cache' });
                    if (response && (response.status === 200 || response.type === 'opaque')) {
                        await cache.put(assetUrl, response);
                    }
                } catch (err) {
                    console.warn(`[SW] Resurs ilkin keşlənmədi: ${assetUrl}`, err.message);
                }
            });

            await Promise.allSettled(cachePromises);
            console.log('[SW] İlkin keşləmə tamamlandı.');
        }).then(() => self.skipWaiting())
    );
});

/**
 * 2. ACTIVATE Hadisəsi: Köhnə keşlərin təmizlənməsi və nəzarətin ələ alınması
 */
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME && cacheName.startsWith('jsoyren-')) {
                        console.log('[SW] Köhnə keş silinir:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            console.log('[SW] Service Worker aktivləşdi və bütün müştərilərə bağlandı.');
            return self.clients.claim();
        })
    );
});

/**
 * 3. FETCH Hadisəsi: Ağıllı Offline və Stale-While-Revalidate Strategiyası
 */
self.addEventListener('fetch', (event) => {
    const request = event.request;

    // Yalnız GET sorğularını keşləyirik
    if (request.method !== 'GET') {
        return;
    }

    const url = new URL(request.url);

    // Brauzer genişlənmələri və ya qeyri-http protokolları buraxırıq
    if (!url.protocol.startsWith('http')) {
        return;
    }

    // A. Səhifə Naviqasiyası (HTML)
    if (request.mode === 'navigate') {
        event.respondWith(
            fetch(request).then((networkResponse) => {
                // Şəbəkədən gələn təzə nüsxəni keşə yazırıq
                if (networkResponse && networkResponse.status === 200) {
                    const cloned = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => cache.put(request, cloned));
                }
                return networkResponse;
            }).catch(async () => {
                // Şəbəkə yoxdursa, keşlənmiş index.html-i qaytarırıq (Tam offline işləmə zəmanəti)
                const cache = await caches.open(CACHE_NAME);
                const cachedIndex = await cache.match('./index.html') || await cache.match('index.html') || await cache.match('./');
                if (cachedIndex) return cachedIndex;
                return new Response('Oflayn rejim aktivdir. JSÖyrən tətbiqi yüklənə bilmədi.', {
                    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
                });
            })
        );
        return;
    }

    // B. Statik Fayllar və CDN Aktivləri (Stale-While-Revalidate)
    event.respondWith(
        caches.match(request).then((cachedResponse) => {
            // Arxa planda şəbəkədən təzələmə sorğusu
            const fetchPromise = fetch(request).then((networkResponse) => {
                if (networkResponse && (networkResponse.status === 200 || networkResponse.type === 'opaque')) {
                    const clonedResponse = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(request, clonedResponse);
                    });
                }
                return networkResponse;
            }).catch(() => {
                // Şəbəkə xətası halında sakit keç (keş artıq xilas edəcək)
            });

            // Keşdə varsa dərhal ver (0ms gecikmə), arxa planda yenilənəcək; yoxdursa şəbəkədən gələn cavabı gözlə
            return cachedResponse || fetchPromise;
        })
    );
});
