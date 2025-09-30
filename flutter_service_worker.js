'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "82a1b83303b6c8a16e1f6d4ca87985be",
"version.json": "18188d81714b2f549d7f21f3050f3f9f",
"index.html": "fa7dec150db637212d4131a0ca51d12b",
"/": "fa7dec150db637212d4131a0ca51d12b",
"main.dart.js": "5a93c0ebbaa1eb2e8ee90b5a811d62d4",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "18d18f98ef9361bf112d9853589dd57c",
".git/config": "b8b8d80f95c292c666bd2988d900856e",
".git/objects/92/9b81700335bb7ac6cf3ec1414c7d158a5228a6": "60b326102293834ee0df6708a5c0217b",
".git/objects/92/21c3352a60e6ab0f953d62ad3afd8bcb5fbd44": "4c845dd2c1b213b4cde4738271ca9ca5",
".git/objects/68/ed2c941c86bb1a2cdc0e18421d8cc673b7cd46": "821799ea52c1d2b0389444440f2b7eb9",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/04/061b337526ac2548cce7aa6c5d2b066d222a30": "e0ca3befe0763b7ec4aa8152ec302b95",
".git/objects/35/3ddbe8a898dc732172322a7a49b605dbb297f7": "5055af28e0a1c574705cf23505cafcb5",
".git/objects/d9/024de30fad841ba85a4ad84acdbc9038d01584": "4da52c4e7a49e013e99d676b5387198f",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/da/0d5aa44a8c93eda469f7a99ed8feac32d5b19d": "25d25e93b491abda0b2b909e7485f4d1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/8128adaad90d2fd7cdabe7b36eaaaed0d3a25b": "3d15963af0d77c1cd40702fb7c18fa93",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/e3/649e2fa76b841862e14ccdcda0034d5a1a9a6e": "b880f0735c0e9746bdc4de9a20357816",
".git/objects/e3/3793a17445958266f2bad9246a9d5004b98941": "9d53a2eeca71f405fe6b13c4fb427ba2",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/ed/bf4ce02f1a64456450dd45d490f573aadd1def": "3870cad7b68909b99e71071f22caeefb",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/c6/80a5dca73ed8780ac748a3b5a1ea3c9c8cd719": "372656247d5a148b8610ddb2f3a1687a",
".git/objects/ec/9f0b8aefb2001738f38ac6293306b7d15ff85b": "092912140da1900a628bc2b21a198209",
".git/objects/20/bc4c1b5bb051db0c71d266efe6e9f50ff3d42c": "5dd27509b7047794258fa6d86bc11a5e",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/20/4c3a04416823642e07f082cd7848125b8a22c7": "e2ddeb7527c0239fc347af17b2e40d34",
".git/objects/4b/c6120c85f6f66c7a007aec991053a8394a5a51": "7e49a7d44bffe8e32615456d5f03f958",
".git/objects/7d/fe5eeccaf2cf6c6d8b8b2527a1d3f3313b7177": "d290c785a38ad74a9698a26cda7ef5a6",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/89/9a8c18e67aaee351024210354bed9c142b6a7e": "690691cf5baae04e87b10b5a889139b6",
".git/objects/8f/bd38863de11d59354d983bc736f5d5a49139ed": "d1753a3f989fafd99bf8a19347c37a97",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/75/83c275d3812ec4243b18ff466b5366a25862f8": "9cfb15e82ef6910e9e8e13c43c343226",
".git/objects/44/3753503740733323d080bf79a48d83e22a01d8": "db41139babfc993d0a4703d971dac45b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/0a4d91d1323e7a2093c8919383903bf88536fb": "559cd809dc5cc9e81eddc2c15e04e0f3",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/5c/7287848b711ab72c25c8951c4ff27a0080bd1a": "6ac58d0af45876de88f646688ac098a4",
".git/objects/96/d01b439b3d8896653ec7ceac8f6d68749a2750": "0cb259816a92a04258015ef259f91a67",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/5b/a2082fb7140ca093d12cc73206b4357228d2ef": "a513087fa2cab152e31320bc542d7803",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/898aaa0743dbe2c062dccc12e180c0b3d4924e": "9729d83f461719657e65a96b767e18b6",
".git/objects/db/aa6162e01b6356a17c2310c2adfe0f919738c9": "f027bb8238f001f062cbd69b6c275b5d",
".git/objects/de/69f776fe7455eabe4c7ecebfcf85245374ee63": "3de343a50780c2603a0c9a8ba6abf56b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/f0cca9232823c4ca05dc457ded37ce5679a66a": "40d3876362afb69810a5bf1e6adc3ac7",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/e1/0afc9dd219b2b84fc1a4d5ef0b31da27e1f1a7": "9f6b1cff261348872ca8ca2209467fbb",
".git/objects/e1/b5dd9189243dc66cc494c452bc2ed5a112bcc5": "0728a3c70ff8788011e3f08bd282430e",
".git/objects/cd/da3fd9b28979eb83f541a4fb5ab7f8f998d576": "f9b955d1653e98335af019a2277a0e08",
".git/objects/fa/81cbd8373d55103916c7c16f3a664bfb9f7c6b": "55ce2285425d5f304f25a6bc38e2dbb1",
".git/objects/e9/568a4662369c7b617514b30f79cef65c7c3ff9": "b88a47094b60cf3f2b58ed8aad0d003c",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/83/f33606a370d554fd6e80f795feaff42bd7183b": "23c44c689666506874514736352e9eef",
".git/objects/48/655002a5b9a3044025e7f79442b6c103b05d09": "774e87585f9ba2a849b5a0c0078d8076",
".git/objects/84/4936593e53139593b6db04c2b13696501e6f1d": "2a8d7584f63700a65f79806374928441",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/15/8a706749c3d6601948898e2856b51ecfdd1f3e": "a16dd0212b1351e0e9dd640f41ace100",
".git/objects/8c/8f8f7a5f393876677753cc9c5e5cdf4dcd1889": "19d5074b3cccd01ea12b890d5924c14e",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/14/c83af09a892deee725c02b14da2593f462c5e1": "53d41051bb584663ab75d1eca4840785",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4d074c9cc77167fd0ed500f6a3208ec1",
".git/logs/refs/heads/gh-pages": "4d074c9cc77167fd0ed500f6a3208ec1",
".git/logs/refs/remotes/origin/gh-pages": "5255ccd000c721f7c6c42028232af546",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/gh-pages": "cee5a2c274e3599d73fe2d1ae3480c27",
".git/refs/remotes/origin/gh-pages": "cee5a2c274e3599d73fe2d1ae3480c27",
".git/index": "3921dfbb2c24e96b1c7d0ca7b346a3f1",
".git/COMMIT_EDITMSG": "029ca738d680ad8e74b7b9cb019b9a69",
"assets/AssetManifest.json": "cc615585f8f5bd06cf75164813f60d5f",
"assets/NOTICES": "9fb80c7dba4d90c4f1b6a6ab2e5422c4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "5721dde9aa75a3314770dd68cb718a23",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4fb36aa779c8889cddb90a4f0b826d23",
"assets/fonts/MaterialIcons-Regular.otf": "bf716f89665c355f8c871a12b18f6b7a",
"assets/assets/all.html": "472a6ff67549b595cd192e3bc059309f",
"assets/assets/map.html": "68f37e0f62173ab34db5a6d9c2e67350",
"assets/assets/map1_clean.html": "be7b828a6c6409f5e9d17c269718fcd7",
"assets/assets/map1.html": "14487d7422a7e9f27d2d458b4d737456",
"assets/assets/images/shopping.svg": "62fca6d40f72f335916c903ad436cbfd",
"assets/assets/images/image1.jpeg": "a4aac465c29b13b95bea73595beb46c6",
"assets/assets/images/taiwan.svg": "94ea6a1d6786d68cdef62a6bbb456dd0",
"assets/assets/images/image6.jpeg": "657804b856c48fbf32b23bc6121f6a4c",
"assets/assets/images/bookstore.svg": "294ee790696924a56eb6b74c9e4dcc0c",
"assets/assets/images/image7.jpeg": "a65374581ad7d50c1c6eaf7e1d560626",
"assets/assets/images/image8.jpeg": "0b764b33d10a69819fe00bde86375a0d",
"assets/assets/images/marker.svg": "15052975e6ada183e754d1b614ae4bb4",
"assets/assets/images/image4.jpeg": "4d296f7469fd43dc9c2cb498fe9cb41f",
"assets/assets/images/taichung.gif": "64729cedd7549eebabd8a214961aea61",
"assets/assets/images/museum.svg": "f2f40b996ded01a98bd14579b978c3bb",
"assets/assets/images/image5.jpeg": "0c939aef43b2c68d9b944fe3dbdecc31",
"assets/assets/images/image9.jpeg": "dc4ee2b15b847f10cbbf4aebbdfe015b",
"assets/assets/images/image2.jpeg": "148f68ce09f4a64b25f844b72cfd169b",
"assets/assets/images/image3.jpeg": "ff44218c8b15177726482d020747f837",
"assets/assets/favicon.svg": "93c812f645f9209ed4711b3964aada3a",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
