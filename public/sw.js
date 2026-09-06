const CACHE = "harbor-v1";
self.addEventListener("install", (e) => e.waitUntil(caches.open(CACHE).then((c) => c.addAll(["/", "/help", "/learn"])) ));
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request).then((h) => h || caches.match("/"))));
});
