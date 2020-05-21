'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "d98b23d062b45b75ae6bab75143bb174",
"assets/FontManifest.json": "791fab775c0982373093ff2f089d2e53",
"assets/fonts/concertone-regular.ttf": "088abd3ba599c7bd3f3e54045cac3e1a",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/Nunito-Bold.ttf": "6cfc350084372090228fc8630b3c7eb1",
"assets/fonts/Nunito-ExtraLight.ttf": "e4d1c12ea1abfeb86eb484acfb1472f3",
"assets/fonts/Nunito-Regular.ttf": "6198e4056babec12dec402d68fb002f7",
"assets/images/frc_logo.png": "529e987b75fbba2b49d198021be72364",
"assets/images/ftc_logo.png": "18ddb46dc250fc645dd8fc771afbfb4b",
"assets/images/main_logo.png": "2eaa295ce203258876c40169cb3bc6de",
"assets/images/members/akira.jpg": "112f0e5f8cccef79641b282220ce3ce8",
"assets/images/members/bertha.jpg": "48b36c1211908dbebdbe412fc8a3efcc",
"assets/images/members/boothinator.jpg": "fa7eb7e8b3919cf4f544bfa014b354b3",
"assets/images/members/chandi.jpg": "556c553878abfd8ededce92438d279d3",
"assets/images/members/dylanthekneekid.jpg": "75b82d8dc30bfce59337371040d89d4a",
"assets/images/members/francisco.jpg": "eaeb605f71a2064434fd5d0367f393f9",
"assets/images/members/johny.jpg": "c345e0d07fe9e43594242b26eb2960b2",
"assets/images/members/lizzie.jpg": "b4418144b15dbf51f00be97189f8d514",
"assets/images/members/nopic.png": "b6681619dcc616623083589aa826d2be",
"assets/images/members/steven.jpg": "648c74e7fe087923c85252eb3a638dfa",
"assets/images/members/ved.jpg": "f0110f9d11de41aededd8844179aedce",
"assets/images/team.jpg": "3f04892622fdeffefcb02c79ef670d9a",
"assets/images/vex_logo.png": "dcd70acc6ebafdaa80c8095826d8a8c4",
"assets/LICENSE": "053c898f817a45dc644074b7d4d95f7e",
"index.html": "6c67a265af543d3b864e3c79e2e2fab0",
"/": "6c67a265af543d3b864e3c79e2e2fab0",
"main.dart.js": "8dd86d6ba35f499b05a91444567a0048"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
