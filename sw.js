(()=>{"use strict";var e={136:()=>{try{self["workbox:core:6.5.3"]&&_()}catch(e){}},447:()=>{try{self["workbox:precaching:6.5.3"]&&_()}catch(e){}},227:()=>{try{self["workbox:routing:6.5.3"]&&_()}catch(e){}},390:()=>{try{self["workbox:strategies:6.5.3"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(136);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(447);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(390);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}class v extends _{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(v.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||t:void 0})),t&&r&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==v.copyRedirectedCacheableResponsesPlugin&&(a===v.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(v.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}v.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},v.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class m{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new v({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(227);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"5bd5c5027dfab05954a29599c2d4d628","url":"404.html"},{"revision":"ab754fb4eccaecc920030ee8130c68ae","url":"assets/css/styles.caa7d0e5.css"},{"revision":"cbb5d2241ddee0e1ba2457432ab55b7e","url":"assets/js/120.8d85b5e5.js"},{"revision":"f8a96c574c6ad66d4ff2e3ece41d7f05","url":"assets/js/17896441.af870e7e.js"},{"revision":"28277ac0b9ffbc13ffe45c0826b7cf5c","url":"assets/js/1a4e3797.b3984812.js"},{"revision":"ff7b0f854316d7b43ae51bac4059bf46","url":"assets/js/1be78505.97c9aa59.js"},{"revision":"f67686ce4aeaea1777c0a2dc3a8e1612","url":"assets/js/20.361031a9.js"},{"revision":"b1d93a9b0ae2cb207a83e07dd01659f9","url":"assets/js/2178acc5.6f54cb24.js"},{"revision":"15bc352c6b6883efb37ed429c9f9d235","url":"assets/js/22cfc285.cdaf1441.js"},{"revision":"7a86a1c1cd2cc036f2bda8364e23c3d2","url":"assets/js/247.f7555aa9.js"},{"revision":"ca75ce028bda7807ec745be8f7a0175e","url":"assets/js/2cad1e57.9a5f41e1.js"},{"revision":"9d62ff0c155e9a319247491ce8d117c2","url":"assets/js/416.88a6079b.js"},{"revision":"5ff43d69cc35098ea827550bab689a58","url":"assets/js/477.7ec1c3f1.js"},{"revision":"07ea455fc7e3e3ae370e33265eb3c633","url":"assets/js/490b6bda.5ed88e1a.js"},{"revision":"b7e50f437dfafe89b8ddd89946e35ced","url":"assets/js/4bc4b752.0d4ffc8a.js"},{"revision":"f1283115bd955ff07bff95eb9e4590b7","url":"assets/js/4f3cde37.bf2fe6e8.js"},{"revision":"49dc81f505ce686c042545acde8a5632","url":"assets/js/570393f1.9c3d1e07.js"},{"revision":"64225be4ae440673ee858bdfc6857a3b","url":"assets/js/62b2c6e9.81309a15.js"},{"revision":"dc4b609dd7523ccef12eaa2b92046881","url":"assets/js/730.d628f758.js"},{"revision":"3607c8dfb04e58b2dd5f55c10df5f21f","url":"assets/js/75b21bdb.edb29efe.js"},{"revision":"b73c61570a4dc6cff40ed3e64965a197","url":"assets/js/82bbc8de.495c22c3.js"},{"revision":"59ebf17a153c831ed026b7cd2654366b","url":"assets/js/84a02282.15361225.js"},{"revision":"0cf55eb6f15ede7e776c1481fc458710","url":"assets/js/8c9db649.b810b16d.js"},{"revision":"98006c6b823188ee2d56ab28bef3ab50","url":"assets/js/8e3344a9.98b4970d.js"},{"revision":"81034212919baacff20f562e8601092b","url":"assets/js/9128c845.197bb9a4.js"},{"revision":"c0e8725fe692d9db1b6290e7f238bca6","url":"assets/js/913.3444c47e.js"},{"revision":"a7d3678da9a28ecbf2d5d51b2e7b8b48","url":"assets/js/920.20fbd7f9.js"},{"revision":"dd78871654172d795b4afea14571c9a1","url":"assets/js/935f2afb.bc0ba736.js"},{"revision":"1370167d2779f00669dfc3bbabbba716","url":"assets/js/a159278a.3556e723.js"},{"revision":"4e05836c1467e975cb793f10626eb5ed","url":"assets/js/b130b964.f01fec72.js"},{"revision":"8021ca7c89319b933e17d0e7f818fb3c","url":"assets/js/c3f1a749.677cc2e6.js"},{"revision":"d0ff60b9ddb8b74e940b603c76b40517","url":"assets/js/c4f5d8e4.356655b0.js"},{"revision":"8f0085ba2cd1acb92b0913aa295ddcc8","url":"assets/js/c92d19bb.ce4bc471.js"},{"revision":"4865a244f7e413ebee3b47a1ae516320","url":"assets/js/cea978a6.88999101.js"},{"revision":"3401a98d1e701fd133fdf946cc18cad9","url":"assets/js/d019af2f.5e53d39a.js"},{"revision":"f24885cd78571965478fe9a4eca1b684","url":"assets/js/d0e8a198.346cc809.js"},{"revision":"2a8ad362151f46c1cd570cdf1557326f","url":"assets/js/d723d50d.d703cc04.js"},{"revision":"c17f56a345f9f5d52f87fd099c354eb1","url":"assets/js/db473160.b32a4ae7.js"},{"revision":"bde16854a859a532980ef61d8521222a","url":"assets/js/e20c9528.2f4c870c.js"},{"revision":"a75e70c83f0f84b406273580e9aad965","url":"assets/js/e8dca8f4.df6d5c20.js"},{"revision":"53b5f8ca75d66ec0b598d003c7aba978","url":"assets/js/f922c59e.32f24e5c.js"},{"revision":"dcb9d14b635deadb02c61c3769c59ce1","url":"assets/js/main.31a63330.js"},{"revision":"b5f51b1f27c73cf843b735739a191862","url":"assets/js/runtime~main.28d3e23a.js"},{"revision":"e11404dbf1c476f174c8d4862063251b","url":"index.html"},{"revision":"30d0742e028887c3a8813ff2d0bee533","url":"meta/manifest.json"},{"revision":"37890cdf6be08589aa412b22eb5c5fd1","url":"search/index.html"},{"revision":"6fd492cd72c5b9f35ff8ea794af4739b","url":"v0.10.0/blog/index.html"},{"revision":"c3f2ae874eaf1d996dffd9db5db79fbb","url":"v0.10.0/docs/authentication/index.html"},{"revision":"fe8dee5076170cb17d0be7d4c9a1c734","url":"v0.10.0/docs/authentication/introduction/index.html"},{"revision":"b6995d35467b260762b13601cfe62cde","url":"v0.10.0/docs/configurations/cli/index.html"},{"revision":"3a634b565fc05432a0fe03d7ee68bc27","url":"v0.10.0/docs/configurations/config-file/index.html"},{"revision":"07c9db071f65be2984438b1ad219f08a","url":"v0.10.0/docs/configurations/index.html"},{"revision":"f9f7d3ef4c1b49ce5887ae9ca08f0439","url":"v0.10.0/docs/faq/index.html"},{"revision":"5f149d1e59703059a6f6647ee56dc399","url":"v0.10.0/docs/getting-started/index.html"},{"revision":"0a0a0bd00b537d1d663c7b7cd0c925d7","url":"v0.10.0/docs/getting-started/prerequisites/index.html"},{"revision":"d47775cbcc7a9c3e0800fc9aee653039","url":"v0.10.0/docs/getting-started/setup/index.html"},{"revision":"3ded0c42271576c6abde9e87a24e6025","url":"v0.10.0/docs/httpapi/http-api/index.html"},{"revision":"1f7df82b176efbbf94772ac3f4089e7c","url":"v0.10.0/docs/httpapi/index.html"},{"revision":"06cdb128c92b13b28cce21ff5be6fa97","url":"v0.10.0/docs/httpcallback/http-callback/index.html"},{"revision":"20dd11cf55cc0aa69210c051afb162da","url":"v0.10.0/docs/httpcallback/index.html"},{"revision":"8a37955f425635d7eeefe06c58112a37","url":"v0.10.0/docs/index.html"},{"revision":"93b035ff8bbb8affc842549c1c511b0b","url":"v0.10.0/docs/record/index.html"},{"revision":"4bbe1dcc4fe84df84bbaf195b10f6aa8","url":"v0.10.0/docs/record/introduction/index.html"},{"revision":"a9d88bf5760d90b20ab0f7b844938621","url":"v0.10.0/docs/remuxers/index.html"},{"revision":"0735a97bba82828dbc90b9a847821b5d","url":"v0.10.0/docs/remuxers/introduction/index.html"},{"revision":"12cbdc3087413ca86cdd250dd86ec8f6","url":"v0.10.0/docs/scenarios/index.html"},{"revision":"a2722ef97ebedb879e822597d1c5daff","url":"v0.10.0/docs/scenarios/rtmp/index.html"},{"revision":"882309a9fb1fbdc9c1ddc0eb90f1d563","url":"v0.10.0/docs/scenarios/rtsp/index.html"},{"revision":"288a513557a34034ca69074716d77795","url":"v0.10.0/docs/scenarios/webrtc/index.html"},{"revision":"ed21678601a83ad4ae691ec8aec66a25","url":"assets/images/obs_rtmp_push_en-3646b92913bd4ee0b452fb6f5719b9e9.png"},{"revision":"350f2453cfe152c88ba569df070eb58e","url":"assets/images/obs_whip_push_en-2c4b862d5be6a64f43db4376794799a4.png"},{"revision":"8870079e1255f705bce3b6c6045f7bf6","url":"assets/images/play_whep-297af6c77c3dfda15a34a9003ffb3561.png"},{"revision":"9c8e96ecc7fa01e6ebcd196495ed2db5","url":"fonts/themify.svg"},{"revision":"2fceea3634a91a717925b40bde2c4516","url":"img/contrast.svg"},{"revision":"ed21678601a83ad4ae691ec8aec66a25","url":"img/docs/scenarios/rtmp/obs_rtmp_push_en.png"},{"revision":"780412212ab0f53e17ec1abfa4879d87","url":"img/docs/scenarios/rtmp/obs_rtmp_push.png"},{"revision":"350f2453cfe152c88ba569df070eb58e","url":"img/docs/scenarios/webrtc/obs_whip_push_en.png"},{"revision":"0127c98986ab33143a6fedf8aebad446","url":"img/docs/scenarios/webrtc/obs_whip_push.png"},{"revision":"8870079e1255f705bce3b6c6045f7bf6","url":"img/docs/scenarios/webrtc/play_whep.png"},{"revision":"338abbb5ea8d80b9869555eca253d49d","url":"img/favicon.ico"},{"revision":"eeb558422baffdaf41e339fc5181490c","url":"img/oss_logo.png"},{"revision":"79b02dc026ee6a936604b11a13dff6ec","url":"img/smile.png"},{"revision":"8fcbcbdba9d613292672730965ec2fbd","url":"img/xiu.png"},{"revision":"c74d29119fe80aa46c23d19a93bfddad","url":"meta/xiu_logo.svg"},{"revision":"8fcbcbdba9d613292672730965ec2fbd","url":"meta/xiu.png"},{"revision":"ba49e844892321d8540ea3b7c088cf97","url":"assets/fonts/bootstrap-icons-39795c0b4513de014cf8685fc5c923fe.woff"},{"revision":"cc1e5eda776be5f0ff614285c31d4892","url":"assets/fonts/bootstrap-icons-b7bcc075b395c14ce8c2d75dcd5fabe5.woff2"},{"revision":"da5c366eba60c5c3eaa590feb37ddf0a","url":"assets/fonts/rubik-arabic-400-normal-9b7e86b9f74ba1c2e5a660c23fa95f9c.woff"},{"revision":"63549755866162e8d79b079c97384386","url":"assets/fonts/rubik-arabic-400-normal-fb7a9eb9da73dfe4012dfbcb2f338903.woff2"},{"revision":"9b52bd7bb49d1d47f2b0401b0cb4af35","url":"assets/fonts/rubik-latin-400-normal-5903a23647de7c1c373f38b926f34eab.woff2"},{"revision":"6695a59cec5f938fc49f53ef95d7cb2e","url":"assets/fonts/rubik-latin-400-normal-870dcb9ca975e7fa06a964358a4a8ede.woff"},{"revision":"e969d157e5e7b691e194e81826b5c82e","url":"assets/fonts/rubik-latin-ext-400-normal-128f0ade4a0f37464020c56b1564e1b4.woff2"},{"revision":"ee7b4fb969b9c166ba3e51f919754ec2","url":"assets/fonts/rubik-latin-ext-400-normal-b22669ae614939bed8f430ba75cbb1b5.woff"},{"revision":"2c454669bdf3aebf32a1bd8ac1e0d2d6","url":"fonts/themify.eot"},{"revision":"e23a7dcaefbde4e74e263247aa42ecd7","url":"fonts/themify.ttf"},{"revision":"a1ecc3b826d01251edddf29c3e4e1e97","url":"fonts/themify.woff"}],s=new m({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();