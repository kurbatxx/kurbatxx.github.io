'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "f33c2b31a5cf2dcb50e3d21adc9a14e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "cb1ec0be45a5229a1096879eb86ecdb6",
"/": "2e350a6013bf67f79a447e8a8eb3e270",
"kurbatxx.github.io/.git/COMMIT_EDITMSG": "a8ba672d93697971031015181d7008c3",
"kurbatxx.github.io/.git/config": "15c70b7feb1455fff0a121f65fff5fd6",
"kurbatxx.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"kurbatxx.github.io/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"kurbatxx.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"kurbatxx.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"kurbatxx.github.io/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"kurbatxx.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"kurbatxx.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"kurbatxx.github.io/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"kurbatxx.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"kurbatxx.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"kurbatxx.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"kurbatxx.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"kurbatxx.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"kurbatxx.github.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"kurbatxx.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"kurbatxx.github.io/.git/index": "d71f709da26e1e84e8777cd2bbad11bf",
"kurbatxx.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"kurbatxx.github.io/.git/logs/HEAD": "0b829228ba35e98b27950bf36abe8d15",
"kurbatxx.github.io/.git/logs/refs/heads/master": "0b829228ba35e98b27950bf36abe8d15",
"kurbatxx.github.io/.git/logs/refs/remotes/origin/master": "554a730f5f224eaea5809d1aaf142b3d",
"kurbatxx.github.io/.git/objects/03/9006dcf1a350eac92507decd98a316114bf895": "b3921d8ef1490f4b3a5fc26cbebbe7a3",
"kurbatxx.github.io/.git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
"kurbatxx.github.io/.git/objects/17/fdf961fa8cfa79727e76368bd38f761cfba327": "1b4118dd56482981d8f6517e232d46f0",
"kurbatxx.github.io/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"kurbatxx.github.io/.git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
"kurbatxx.github.io/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
"kurbatxx.github.io/.git/objects/47/3d6983cda321588d884a83be3cc9f9df09e246": "3d92bb5e39f573bf82e329c8cbb17f2c",
"kurbatxx.github.io/.git/objects/79/023ef502d84fc84bc510b6f1d991ee96265bc9": "0a55b6f7545f0323d787e2be8496c7c7",
"kurbatxx.github.io/.git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
"kurbatxx.github.io/.git/objects/7f/8b4ca9d7e36c61ff08276cb28c6858cee512ee": "a41127a0bf97172a36391d8b7fddf4a4",
"kurbatxx.github.io/.git/objects/82/4d9da2c9529e231875355ca64dd0903ff3dc85": "a0bec92f33362e6c33a5fb9f60f05da4",
"kurbatxx.github.io/.git/objects/85/c2e2d3cd5517a129d34e7826fd5f75bd26d896": "249ff70261c3f2cce48e30bfc87c4753",
"kurbatxx.github.io/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"kurbatxx.github.io/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"kurbatxx.github.io/.git/objects/8b/58d15edc7e550f1319220c190b19440a983445": "a467292796ce12991482ee537001c9eb",
"kurbatxx.github.io/.git/objects/8e/f3a7620bdcb22fb7a33c4cd90963197a491d54": "1d1e2f0fd1a62a745cafa7efd85def0d",
"kurbatxx.github.io/.git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
"kurbatxx.github.io/.git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
"kurbatxx.github.io/.git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
"kurbatxx.github.io/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"kurbatxx.github.io/.git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
"kurbatxx.github.io/.git/refs/heads/master": "c970cb3ee21633c369040c5dc94503fe",
"kurbatxx.github.io/.git/refs/remotes/origin/master": "c970cb3ee21633c369040c5dc94503fe",
"kurbatxx.github.io/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"kurbatxx.github.io/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"kurbatxx.github.io/assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"kurbatxx.github.io/assets/NOTICES": "011eabfc085777551f90dfcf3a82d215",
"kurbatxx.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"kurbatxx.github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"kurbatxx.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"kurbatxx.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"kurbatxx.github.io/index.html": "2e350a6013bf67f79a447e8a8eb3e270",
"kurbatxx.github.io/main.dart.js": "0f75275fab599bc54c6512c0b2ce1a14",
"kurbatxx.github.io/manifest.json": "bef057cc251ae1f4ea5155e8f2ef2857",
"kurbatxx.github.io/version.json": "19004d263c5771f092ecbd062cdafad7",
"main.dart.js": "df42ee6921d970392bbdec590a224020",
"manifest.json": "bef057cc251ae1f4ea5155e8f2ef2857",
"version.json": "19004d263c5771f092ecbd062cdafad7"
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
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
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
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
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
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
