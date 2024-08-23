async function addResourcesToCache(resources) {
  const cache = await caches.open("v1");
  await cache.addAll(resources); 
}
async function putInCache(request, response) {
  const cache = await caches.open("v1");
  await cache.put(request, response);
}
self.addEventListener("install", event => {
  event.waituntil()[
    "/asimtraders",
    "/asimtraders/index.html",
    "/asimtraders/style.css",
    "/asimtraders/script.js",
    "/asimtraders/car1.jpeg",
    "/asimtraders/car2.jpeg",
    "/asimtraders/car3.jpeg",
    "/asimtraders/love.png",
    "/asimtraders/love.m4a"
  ];
});
async function cacheFirst({request, preloadResponsePromise}) {
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }
  const preloadResponse = await preloadResponsePromise;
  if (preloadResponse) {
    console.info("Using preload response", preloadResponse);
    putInCache(request, preloadResponse.clone());
    return preloadResponse;
  }
  try {
    const responseFromNetwork = await fetch(request);
    putInCache(request, responseFromCache.clone());
    return responseFromNetwork;
  } 
  catch (error) {
    return new Response("Netwrok Error Happened", {
      status: 408,
      headers: {"Content-Type": "text/plain"},
    });
  }
}
self.addEventListener("fetch", event => {
  event.respondWith(cacheFirst({
    request: event.request,
    preloadResponsePromise: event.preloadResponse,
  });
});
self.addEventListener("activate", event => {
  event.waitUntil(async () => {
    if (self.registration.navigationPreload) {
      await self.registration.navigationPreload.enable();
    }
  });
});
