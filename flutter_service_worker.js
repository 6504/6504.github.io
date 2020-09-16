'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "0837d8717f4d23a3aea2979a7c5f16ce",
"assets/NOTICES": "1cafa6b5655c225ba39577e8da866d35",
"assets/FontManifest.json": "00428751445f9e7531ccdcc9f777b971",
"assets/fonts/Nunito-ExtraLight.ttf": "e4d1c12ea1abfeb86eb484acfb1472f3",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/fonts/Nunito-Bold.ttf": "6cfc350084372090228fc8630b3c7eb1",
"assets/fonts/concertone-regular.ttf": "088abd3ba599c7bd3f3e54045cac3e1a",
"assets/fonts/Nunito-Regular.ttf": "6198e4056babec12dec402d68fb002f7",
"assets/images/frc_logo.png": "529e987b75fbba2b49d198021be72364",
"assets/images/main_logo.png": "2eaa295ce203258876c40169cb3bc6de",
"assets/images/vex_logo.png": "dcd70acc6ebafdaa80c8095826d8a8c4",
"assets/images/team2019-2020.jpg": "7ecf8363bb3524ada51b06282731c527",
"assets/images/team2018-2019.jpg": "3f04892622fdeffefcb02c79ef670d9a",
"assets/images/members/francisco.jpg": "eaeb605f71a2064434fd5d0367f393f9",
"assets/images/members/johny.jpg": "c345e0d07fe9e43594242b26eb2960b2",
"assets/images/members/ved.jpg": "f0110f9d11de41aededd8844179aedce",
"assets/images/members/steven.jpg": "648c74e7fe087923c85252eb3a638dfa",
"assets/images/members/akira.jpg": "112f0e5f8cccef79641b282220ce3ce8",
"assets/images/members/chandi.jpg": "556c553878abfd8ededce92438d279d3",
"assets/images/members/lizzie.jpg": "b4418144b15dbf51f00be97189f8d514",
"assets/images/members/boothinator.jpg": "fa7eb7e8b3919cf4f544bfa014b354b3",
"assets/images/members/nopic.png": "b6681619dcc616623083589aa826d2be",
"assets/images/members/dylanthekneekid.jpg": "75b82d8dc30bfce59337371040d89d4a",
"assets/images/members/bertha.jpg": "48b36c1211908dbebdbe412fc8a3efcc",
"assets/images/ftc_logo.png": "18ddb46dc250fc645dd8fc771afbfb4b",
"assets/AssetManifest.json": "733fbd4914a4822d4cc4a02f0822c4f2",
"index.html": "b217119db47cdfed910114785160b7b7",
"/": "b217119db47cdfed910114785160b7b7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a 'reload' param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'reload'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
