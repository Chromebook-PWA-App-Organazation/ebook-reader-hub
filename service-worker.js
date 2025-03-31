const CACHE_NAME = "ebook-reader-cache-v1";
const ASSETS_TO_CACHE = [
    "./",
    "./index.html",
    "./styles.css",
    "./epub.html",
    "./cbz.html",
    "./pdf.html",
    "./manifest.json",
    "./icons/icon-192x192.png",
    "./icons/icon-512x512.png",
    "./preview/preview-1.png",  // Added preview images
    "./preview/preview-2.png",  // Added preview images
    "./preview/preview-3.png"   // Added preview images
];

// Install Service Worker and Cache Assets
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});
