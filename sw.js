(()=>{"use strict";var e={136:()=>{try{self["workbox:core:6.5.3"]&&_()}catch(e){}},447:()=>{try{self["workbox:precaching:6.5.3"]&&_()}catch(e){}},227:()=>{try{self["workbox:routing:6.5.3"]&&_()}catch(e){}},390:()=>{try{self["workbox:strategies:6.5.3"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(136);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(447);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(390);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}class v extends _{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(v.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||t:void 0})),t&&r&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==v.copyRedirectedCacheableResponsesPlugin&&(a===v.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(v.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}v.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},v.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class m{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new v({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(227);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"21f914a3e27f731c112ccbc5589ae7be","url":"404.html"},{"revision":"a2741ddffdf103a69471c3a28d4c5870","url":"assets/css/styles.1fea59b9.css"},{"revision":"cbb5d2241ddee0e1ba2457432ab55b7e","url":"assets/js/120.8d85b5e5.js"},{"revision":"0b9db47be56a8b332ed6bb6f4a31900c","url":"assets/js/17896441.9032185d.js"},{"revision":"28277ac0b9ffbc13ffe45c0826b7cf5c","url":"assets/js/1a4e3797.b3984812.js"},{"revision":"999d5303f480aa74c7433ec2e2d185d3","url":"assets/js/1be78505.f28b410c.js"},{"revision":"4dc37ff61f35b72202f5b5f83405e7a0","url":"assets/js/1f391b9e.83b8af8f.js"},{"revision":"f67686ce4aeaea1777c0a2dc3a8e1612","url":"assets/js/20.361031a9.js"},{"revision":"56f86b4179980ea89c382ee32882693d","url":"assets/js/2178acc5.50015d20.js"},{"revision":"c515fb542cfd93ad2a706f598419fdec","url":"assets/js/22cfc285.ede35c60.js"},{"revision":"7a86a1c1cd2cc036f2bda8364e23c3d2","url":"assets/js/247.f7555aa9.js"},{"revision":"039d5ce8f2ea5146eece232cb88c90f3","url":"assets/js/2cad1e57.6fa5685d.js"},{"revision":"9d62ff0c155e9a319247491ce8d117c2","url":"assets/js/416.88a6079b.js"},{"revision":"5ff43d69cc35098ea827550bab689a58","url":"assets/js/477.7ec1c3f1.js"},{"revision":"b69dd0d6b53d88be3e2ae83923f89113","url":"assets/js/490b6bda.3d4164e2.js"},{"revision":"93989def1f87f4c384a5f8a3192a8e3c","url":"assets/js/4bc4b752.eb497bcb.js"},{"revision":"f1283115bd955ff07bff95eb9e4590b7","url":"assets/js/4f3cde37.bf2fe6e8.js"},{"revision":"01fc0c6891acca0a38d7a0d14b494b0f","url":"assets/js/53.ce710704.js"},{"revision":"49dc81f505ce686c042545acde8a5632","url":"assets/js/570393f1.9c3d1e07.js"},{"revision":"27e20017e4b6a8015586af6cd925c074","url":"assets/js/62b2c6e9.ddccb53b.js"},{"revision":"d390af7a36f46a5f5ef579d6fb324a06","url":"assets/js/699.5b0e2f4b.js"},{"revision":"dc4b609dd7523ccef12eaa2b92046881","url":"assets/js/730.d628f758.js"},{"revision":"8bec8846951d44564f077b5acc499697","url":"assets/js/75b21bdb.4f216e08.js"},{"revision":"7196f74c2bbb320ecd3ba3a9b1f49ba7","url":"assets/js/7ef71a47.d855dd5e.js"},{"revision":"0b64eaea0ad73a34c8218e34782436b4","url":"assets/js/82bbc8de.7a26b8ad.js"},{"revision":"59ebf17a153c831ed026b7cd2654366b","url":"assets/js/84a02282.15361225.js"},{"revision":"7ef2ad27cf929e79ddc1efeb1f17ef89","url":"assets/js/8c9db649.50d795aa.js"},{"revision":"46f66125e30754193c0472fb324b0a34","url":"assets/js/8e3344a9.0134865c.js"},{"revision":"bc881eee35a517a9803719188182e0aa","url":"assets/js/9128c845.abf1f510.js"},{"revision":"c0e8725fe692d9db1b6290e7f238bca6","url":"assets/js/913.3444c47e.js"},{"revision":"cbd6b0fd79fa020b140e3a0a994a17bf","url":"assets/js/935f2afb.13d88e88.js"},{"revision":"c3b4018da1ff475ad837fd892118849b","url":"assets/js/a159278a.d11c5926.js"},{"revision":"4feb76eaa4588d7dbd1371815502c8b6","url":"assets/js/b130b964.77c01e38.js"},{"revision":"b647c8728b1b5e141dd7ef28ab47f7d8","url":"assets/js/c3f1a749.7a5aa407.js"},{"revision":"d0ff60b9ddb8b74e940b603c76b40517","url":"assets/js/c4f5d8e4.356655b0.js"},{"revision":"a2638a4d30d0c4d86ce1492ff3503583","url":"assets/js/c92d19bb.3753c606.js"},{"revision":"e6bcb93bdc82f311e1149d9d28997227","url":"assets/js/cea978a6.b874a865.js"},{"revision":"0861c840276b0c14d5d4214f36d39440","url":"assets/js/d019af2f.243a913f.js"},{"revision":"93638f05e0be3ef826bfaf0e0a89e358","url":"assets/js/d0e8a198.392696d9.js"},{"revision":"73ffc923a6ae1cc2f07cfc67ceb6788f","url":"assets/js/d723d50d.24f287f7.js"},{"revision":"2ad57154b3bc5777bf6600f38f1dbe49","url":"assets/js/db473160.d0a5c514.js"},{"revision":"cc6c6897805a3548a998feefced6e73e","url":"assets/js/e20c9528.97493111.js"},{"revision":"306d350b835c5b1404124eed8ef5d263","url":"assets/js/e8dca8f4.67157270.js"},{"revision":"afb6fff90c9b4fdc53546010d9dc23ba","url":"assets/js/f922c59e.c80987b1.js"},{"revision":"ec4a14bc083815a87705e2ef1761f442","url":"assets/js/main.1478605b.js"},{"revision":"c70fb1b4415432394a35019402e4ab07","url":"assets/js/runtime~main.c10bc8ad.js"},{"revision":"7d1aaa9082aead1d9a6bd5a6ecb3442b","url":"index.html"},{"revision":"f3875f8174b1eb776065246ace2d0e8b","url":"meta/manifest.json"},{"revision":"b85536b630ddc627b96d5220a9c77f89","url":"releases/index.html"},{"revision":"307dc1d29166e4b4333d8749e4474721","url":"search/index.html"},{"revision":"f2ee3825bf0347fd4ce8939ca7a6c00a","url":"tauri-splash.json"},{"revision":"4a1134fae11d027250b38145351479de","url":"v0.10.0/blog/index.html"},{"revision":"3cc00b472d19bbd396a4a2a31ebfbf75","url":"v0.10.0/docs/authentication/index.html"},{"revision":"9d41ad939771fb0aff7c3fbc767a5dfe","url":"v0.10.0/docs/authentication/introduction/index.html"},{"revision":"61b190ae4ee8aee5685e3790283d4887","url":"v0.10.0/docs/configurations/cli/index.html"},{"revision":"db7475fc687b64bba2812aacdd84afb5","url":"v0.10.0/docs/configurations/config-file/index.html"},{"revision":"1ba54c1c3fbe34d1759346b4a98e37d2","url":"v0.10.0/docs/configurations/index.html"},{"revision":"2c54a55f6fcf057d6b6e8b8bcad04ce1","url":"v0.10.0/docs/faq/index.html"},{"revision":"c75dcf86ee35ec49402af4adc1d3cbcb","url":"v0.10.0/docs/getting-started/index.html"},{"revision":"a582d4a0424853ad120140d4cb15d462","url":"v0.10.0/docs/getting-started/prerequisites/index.html"},{"revision":"cdef1d516cf1eca9ee79747f1f0e0962","url":"v0.10.0/docs/getting-started/setup/index.html"},{"revision":"ab0bad1e3e4fdd891c79a3c67db9fddd","url":"v0.10.0/docs/httpapi/http-api/index.html"},{"revision":"ccffcee5604e77322cfe7795e1da252f","url":"v0.10.0/docs/httpapi/index.html"},{"revision":"cbc719ee7be01ee73df22ca3cd46a7b7","url":"v0.10.0/docs/httpcallback/http-callback/index.html"},{"revision":"9e520bd2d96d11129ebda95cd4181e2f","url":"v0.10.0/docs/httpcallback/index.html"},{"revision":"b0d4f014872eb6514400b772e2f4c16e","url":"v0.10.0/docs/index.html"},{"revision":"317eba3d279d41171ddb402a3341d2a9","url":"v0.10.0/docs/record/index.html"},{"revision":"636da3245437efc09006f51b6cde3f57","url":"v0.10.0/docs/record/introduction/index.html"},{"revision":"85377797d7d5ad1eead11cd14aa1bd0d","url":"v0.10.0/docs/remuxers/index.html"},{"revision":"589949a22811f7b7724680aa292ab885","url":"v0.10.0/docs/remuxers/introduction/index.html"},{"revision":"14585cf6ac51d408d8993633ae8e2814","url":"v0.10.0/docs/scenarios/index.html"},{"revision":"da2f2355e3e8e6bd2259c5bbac1f8aff","url":"v0.10.0/docs/scenarios/rtmp/index.html"},{"revision":"15111cad2caab027f2fae46d7cc738cd","url":"v0.10.0/docs/scenarios/rtsp/index.html"},{"revision":"c0a8e61ca9b2f86238734c8b521b7806","url":"v0.10.0/docs/scenarios/webrtc/index.html"},{"revision":"ed21678601a83ad4ae691ec8aec66a25","url":"assets/images/obs_rtmp_push_en-3646b92913bd4ee0b452fb6f5719b9e9.png"},{"revision":"350f2453cfe152c88ba569df070eb58e","url":"assets/images/obs_whip_push_en-2c4b862d5be6a64f43db4376794799a4.png"},{"revision":"8870079e1255f705bce3b6c6045f7bf6","url":"assets/images/play_whep-297af6c77c3dfda15a34a9003ffb3561.png"},{"revision":"9c8e96ecc7fa01e6ebcd196495ed2db5","url":"fonts/themify.svg"},{"revision":"cdb469468cb47f7620d3528621da8284","url":"img/bookCover.png"},{"revision":"2fceea3634a91a717925b40bde2c4516","url":"img/contrast.svg"},{"revision":"ed21678601a83ad4ae691ec8aec66a25","url":"img/docs/scenarios/rtmp/obs_rtmp_push_en.png"},{"revision":"780412212ab0f53e17ec1abfa4879d87","url":"img/docs/scenarios/rtmp/obs_rtmp_push.png"},{"revision":"350f2453cfe152c88ba569df070eb58e","url":"img/docs/scenarios/webrtc/obs_whip_push_en.png"},{"revision":"0127c98986ab33143a6fedf8aebad446","url":"img/docs/scenarios/webrtc/obs_whip_push.png"},{"revision":"8870079e1255f705bce3b6c6045f7bf6","url":"img/docs/scenarios/webrtc/play_whep.png"},{"revision":"338abbb5ea8d80b9869555eca253d49d","url":"img/favicon.ico"},{"revision":"29827909ffa6338118fa9393a9efafd0","url":"img/index/blue_loops.svg"},{"revision":"75a76d0dc709bf38e0774b13c8048200","url":"img/index/blue_package.svg"},{"revision":"fb5f7ebeb63120a426ac638f4a162c87","url":"img/index/header_dark.svg"},{"revision":"d810c5a5389929678e0d309bcb912f76","url":"img/index/header_light.svg"},{"revision":"34cafb3f4b9cc88a1c32872a89c31ed9","url":"img/index/illustrations/box.svg"},{"revision":"933edc308c41b823b7526481b846a9d9","url":"img/index/illustrations/brownfield.svg"},{"revision":"e2679b42ee15b4b94e1397b7f982b686","url":"img/index/illustrations/code.svg"},{"revision":"7b370cb38e9239983f3f72d36a78f1a1","url":"img/index/illustrations/cross_platform.svg"},{"revision":"a08fd9787d6409aef0ddcfee727bf8ec","url":"img/index/illustrations/floss.svg"},{"revision":"63bda70bcde5bbb1e35687f282570244","url":"img/index/illustrations/security.svg"},{"revision":"8e4425a5dde0bb9e8b29fb6d0a5d78e2","url":"img/index/orange_loops.svg"},{"revision":"df4cee3c07429032aaf80d39bda46f5c","url":"img/index/orange_package.svg"},{"revision":"730af10f67646f312b883df6a831a5a1","url":"img/index/partners/1Password_color_dark.svg"},{"revision":"90bf4f480a92ed23d03203844f40077f","url":"img/index/partners/1Password_color_light.svg"},{"revision":"f464d77611228e6ed4508f9a5ded1375","url":"img/index/partners/AWS_color_dark.svg"},{"revision":"fbb8a045b22f02929f9b98ee069217ff","url":"img/index/partners/AWS_color_light.svg"},{"revision":"047338aeaee58c72d75ffa7bf8ab66a5","url":"img/index/partners/ClickUp_color_dark.svg"},{"revision":"926d575a34c5f9c504592f12202cc625","url":"img/index/partners/ClickUp_color_light.svg"},{"revision":"02cfbe2354ce25757c98acbec5d15819","url":"img/index/partners/Cloudflare_color_dark.svg"},{"revision":"61c42dc7b98c263571f5653da28f5648","url":"img/index/partners/Cloudflare_color_light.svg"},{"revision":"15cbb55acf20be91d6ee428397be5b08","url":"img/index/partners/crabnebula_color_dark.svg"},{"revision":"6f9df597f349ef58b82b7eeee4a70a0f","url":"img/index/partners/crabnebula_color_light.svg"},{"revision":"71f3b4a1f5f8e3b253821d560cb6b416","url":"img/index/partners/DigitalOcean_color_dark.svg"},{"revision":"e87fe65f0a3185464b8f8daf3525820d","url":"img/index/partners/DigitalOcean_color_light.svg"},{"revision":"83a241e2b85811458598db1da77bd0a5","url":"img/index/partners/dimension_color_dark.svg"},{"revision":"a8367659f3be03610bd75bbd5d695c10","url":"img/index/partners/dimension_color_light.svg"},{"revision":"85a32c9c419fa7b512e0898f9bd9aff0","url":"img/index/partners/keygen_color_dark.svg"},{"revision":"5cbce605106e59a2f1ded06dbd249d09","url":"img/index/partners/keygen_color_light.svg"},{"revision":"6ed8d5104126ac937a323c93b13a649d","url":"img/index/partners/leniolabs_color_dark.svg"},{"revision":"43e53d219449c54641a5f4de6e3285f2","url":"img/index/partners/leniolabs_color_light.svg"},{"revision":"cd50e472be4014613a80c71f246d4e05","url":"img/index/partners/lightfinder_color_dark.svg"},{"revision":"41ec940d8c5249281ccd3e1f1832d42e","url":"img/index/partners/lightfinder_color_light.svg"},{"revision":"7d006bd392dc0af16f496dc7306b72b7","url":"img/index/partners/meilisearch_color_dark.svg"},{"revision":"4576ec491351ad25cb6d93519b46a603","url":"img/index/partners/meilisearch_color_light.svg"},{"revision":"bce2eed36bb5b03c06ca64d09d4becb1","url":"img/index/partners/Mintter_color_dark.svg"},{"revision":"0a3d23b02e4d81f8ede90891262bbfa4","url":"img/index/partners/Mintter_color_light.svg"},{"revision":"7b34c1f3d4a092cd8d4e1d29f6d7843f","url":"img/index/partners/Netlify_color_dark.svg"},{"revision":"d97368a7ee2b3c1c274aedb9371aa9bc","url":"img/index/partners/Netlify_color_light.svg"},{"revision":"75eb378153dc8ec56ab2ff256a694c94","url":"img/index/partners/nlnet_color_dark.svg"},{"revision":"0970a8d0db4e9f6f601b128723dfa7d8","url":"img/index/partners/nlnet_color_light.svg"},{"revision":"54543115252f64851211eb35659f5bb1","url":"img/index/partners/padloc_color_light.svg"},{"revision":"69ff56fbc354720562f8c6fb6784be4c","url":"img/index/partners/vps_server_color_dark.svg"},{"revision":"d65e19a813d92607317c703ac0d85cc5","url":"img/index/partners/vps_server_color_light.svg"},{"revision":"eeb558422baffdaf41e339fc5181490c","url":"img/oss_logo.png"},{"revision":"71d16e16f8885c162d5d0e42fdcb63d4","url":"img/recipes/Bridge.svg"},{"revision":"0e3d433f14866aea9f9a314103fc41ab","url":"img/recipes/Cloudbridge.svg"},{"revision":"604bf1f121562f16ec2793099ddb5d0a","url":"img/recipes/Cloudish.svg"},{"revision":"7067f8ab83fd614dbd85c9cb17dd1f38","url":"img/recipes/GLUI.svg"},{"revision":"10643eee88fcbb6e8cb61c099aacd5c6","url":"img/recipes/Hermit.svg"},{"revision":"c198fa88fe75e7396bbf6e6b7f21fdb1","url":"img/recipes/Lockdown.svg"},{"revision":"0b5704a3c4d7537d98a22c3113be7b68","url":"img/recipes/Multiwin.svg"},{"revision":"79b02dc026ee6a936604b11a13dff6ec","url":"img/smile.png"},{"revision":"97087ecf99aba7b3f760c6904f00a474","url":"img/social.png"},{"revision":"333e3a4b09ba824bf15e9f605b714a38","url":"img/webdriver/hello-tauri-webdriver.png"},{"revision":"c74d29119fe80aa46c23d19a93bfddad","url":"meta/xiu_logo.svg"},{"revision":"8fcbcbdba9d613292672730965ec2fbd","url":"meta/xiu.png"},{"revision":"ba49e844892321d8540ea3b7c088cf97","url":"assets/fonts/bootstrap-icons-39795c0b4513de014cf8685fc5c923fe.woff"},{"revision":"cc1e5eda776be5f0ff614285c31d4892","url":"assets/fonts/bootstrap-icons-b7bcc075b395c14ce8c2d75dcd5fabe5.woff2"},{"revision":"da5c366eba60c5c3eaa590feb37ddf0a","url":"assets/fonts/rubik-arabic-400-normal-9b7e86b9f74ba1c2e5a660c23fa95f9c.woff"},{"revision":"63549755866162e8d79b079c97384386","url":"assets/fonts/rubik-arabic-400-normal-fb7a9eb9da73dfe4012dfbcb2f338903.woff2"},{"revision":"9b52bd7bb49d1d47f2b0401b0cb4af35","url":"assets/fonts/rubik-latin-400-normal-5903a23647de7c1c373f38b926f34eab.woff2"},{"revision":"6695a59cec5f938fc49f53ef95d7cb2e","url":"assets/fonts/rubik-latin-400-normal-870dcb9ca975e7fa06a964358a4a8ede.woff"},{"revision":"e969d157e5e7b691e194e81826b5c82e","url":"assets/fonts/rubik-latin-ext-400-normal-128f0ade4a0f37464020c56b1564e1b4.woff2"},{"revision":"ee7b4fb969b9c166ba3e51f919754ec2","url":"assets/fonts/rubik-latin-ext-400-normal-b22669ae614939bed8f430ba75cbb1b5.woff"},{"revision":"2c454669bdf3aebf32a1bd8ac1e0d2d6","url":"fonts/themify.eot"},{"revision":"e23a7dcaefbde4e74e263247aa42ecd7","url":"fonts/themify.ttf"},{"revision":"a1ecc3b826d01251edddf29c3e4e1e97","url":"fonts/themify.woff"}],s=new m({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();