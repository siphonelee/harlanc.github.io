(()=>{"use strict";var e={136:()=>{try{self["workbox:core:6.5.3"]&&_()}catch(e){}},447:()=>{try{self["workbox:precaching:6.5.3"]&&_()}catch(e){}},227:()=>{try{self["workbox:routing:6.5.3"]&&_()}catch(e){}},390:()=>{try{self["workbox:strategies:6.5.3"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(136);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(447);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(390);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}class v extends _{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(v.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||t:void 0})),t&&r&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==v.copyRedirectedCacheableResponsesPlugin&&(a===v.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(v.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}v.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},v.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class m{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new v({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(227);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"72894b842802465deda4ee28231f6ca5","url":"404.html"},{"revision":"dfbd815e1b72157e512b32a6d93d4c9a","url":"assets/css/styles.7affd273.css"},{"revision":"7eb58d2d5f16478dd44d84762a24f715","url":"assets/js/0b1c863a.2e3d6e47.js"},{"revision":"9b1558bcc3e85dbd8e671779c7de3121","url":"assets/js/120.c3cb7c35.js"},{"revision":"f8a96c574c6ad66d4ff2e3ece41d7f05","url":"assets/js/17896441.af870e7e.js"},{"revision":"233ccd7e88db371263dd7f315679e7b9","url":"assets/js/1a4e3797.3b824a95.js"},{"revision":"ff7b0f854316d7b43ae51bac4059bf46","url":"assets/js/1be78505.97c9aa59.js"},{"revision":"f67686ce4aeaea1777c0a2dc3a8e1612","url":"assets/js/20.361031a9.js"},{"revision":"3e9b237579a1053e09a6d3bc339faf7d","url":"assets/js/2319abfe.d13e581e.js"},{"revision":"7a86a1c1cd2cc036f2bda8364e23c3d2","url":"assets/js/247.f7555aa9.js"},{"revision":"927b8ad8ba03e07f32653482441ef28f","url":"assets/js/24d945a1.1692f8cd.js"},{"revision":"5155388ec69b0ae2c8916308f3dd3558","url":"assets/js/2b38b4ea.2f3ac44f.js"},{"revision":"ed4ddae715b3c95f0f1bce4eec14aecf","url":"assets/js/31b1d168.257ae353.js"},{"revision":"030a1015d70a1ddec91d0980cc8b2f1f","url":"assets/js/328acd00.f0ad799d.js"},{"revision":"acb4bc55996cba7c5862f6ad8c556b56","url":"assets/js/38c5eb65.3ab27c57.js"},{"revision":"9d62ff0c155e9a319247491ce8d117c2","url":"assets/js/416.88a6079b.js"},{"revision":"ab17d6c37de0abc3b0609217b5d6820d","url":"assets/js/477.69bef7e2.js"},{"revision":"115daca4ff4616d3328af052f7b4c286","url":"assets/js/47bb72c6.b9a98d76.js"},{"revision":"68004a80270ad4e7f61948815c1e9a97","url":"assets/js/47e3f17e.2bacd6e9.js"},{"revision":"f1283115bd955ff07bff95eb9e4590b7","url":"assets/js/4f3cde37.bf2fe6e8.js"},{"revision":"fa2c8273fe2a93fa1d212b5c3fa4e498","url":"assets/js/54aa7c27.5cc25465.js"},{"revision":"49dc81f505ce686c042545acde8a5632","url":"assets/js/570393f1.9c3d1e07.js"},{"revision":"766a4cfd2f7c5b02844426dcb9395df9","url":"assets/js/6106e0b7.eccd9cd9.js"},{"revision":"dc4b609dd7523ccef12eaa2b92046881","url":"assets/js/730.d628f758.js"},{"revision":"bfc6bea5e1dc37cfa9bf22ed1b876344","url":"assets/js/7b8e4038.9d113f91.js"},{"revision":"59ebf17a153c831ed026b7cd2654366b","url":"assets/js/84a02282.15361225.js"},{"revision":"bdf0bae2dd000d661cfd552693f2e30c","url":"assets/js/8cd18e0d.499c90f3.js"},{"revision":"c0e8725fe692d9db1b6290e7f238bca6","url":"assets/js/913.3444c47e.js"},{"revision":"a7d3678da9a28ecbf2d5d51b2e7b8b48","url":"assets/js/920.20fbd7f9.js"},{"revision":"4342b47b477a35b46c2f77df508b0661","url":"assets/js/935f2afb.e5a8f053.js"},{"revision":"44c5b7678f58625efde36e6c3d70335f","url":"assets/js/9747e2e2.3e78fca4.js"},{"revision":"ba22a50c14da810d6236259bd4c30da3","url":"assets/js/9884dc77.ca827cbe.js"},{"revision":"e7420eae2478a6f839c9d905f7df65e9","url":"assets/js/a05cb2d6.2e705ae0.js"},{"revision":"a751fa10e2869bb3f12f3f10f72bae78","url":"assets/js/ad5feeb0.a1b0e234.js"},{"revision":"392b65e696dce90e355b23055e4db497","url":"assets/js/b6a5e7f1.af5b2cd2.js"},{"revision":"9d6ef46c29eb4056415eefb37d8e8697","url":"assets/js/bf2c2908.18b15323.js"},{"revision":"a02baff55aa1ff0ec18f52eececcf4a7","url":"assets/js/c4f5d8e4.d71cfac9.js"},{"revision":"6997ea0eea3cd29e5260840705751275","url":"assets/js/d4d5c465.08adfcbb.js"},{"revision":"dc06459387e4e363b215c8c60023c0dc","url":"assets/js/dd761320.0dec7038.js"},{"revision":"44766c382396e379f191f63dec1cb59e","url":"assets/js/f217299c.b911e614.js"},{"revision":"816a7d49c4846c316ca958a5202d71c0","url":"assets/js/f6f71fb1.cce12275.js"},{"revision":"8fd701bddd74054807f47cca67db7d89","url":"assets/js/main.f16b9bee.js"},{"revision":"5044658c5f684d6442ea1657fc230c33","url":"assets/js/runtime~main.45bd6f6c.js"},{"revision":"2b33a3c40b6457e48e9f37c6be067263","url":"blog/index.html"},{"revision":"ba3d305649882b85eb2363b3a101221e","url":"docs/authentication/index.html"},{"revision":"00bd4167e5613b1ab8014bee8782b221","url":"docs/authentication/introduction/index.html"},{"revision":"e0d1c9c1f85e57b30992c5e61b93571d","url":"docs/configurations/cli/index.html"},{"revision":"8b3331b0f868e2f692a65b35931a2a7d","url":"docs/configurations/config-file/index.html"},{"revision":"27d1a2237f65067b791a3428679cdd17","url":"docs/configurations/index.html"},{"revision":"718bce39343d4faf4fd06d9fb930c692","url":"docs/faq/index.html"},{"revision":"1d9c5b2a53ab9fcc6653ff41fe92fcf4","url":"docs/getting-started/index.html"},{"revision":"4bdf3b0f591a870e355878215880f5b2","url":"docs/getting-started/prerequisites/index.html"},{"revision":"efe8929ce949cd846aa4cfe73be94f04","url":"docs/getting-started/quickstart/index.html"},{"revision":"88eeab6a72fe9651b847f5e10eb2c277","url":"docs/httpapi/http-api/index.html"},{"revision":"d8761aa58e33bebe9efa54d762bc2e09","url":"docs/httpapi/index.html"},{"revision":"fbac4627089a668bb207d28c92a1cbd9","url":"docs/httpcallback/http-callback/index.html"},{"revision":"9261887739d049eeb9b66c29eb21e234","url":"docs/httpcallback/index.html"},{"revision":"9a7d7c1e452b0d5cbe2b9235ffa14a66","url":"docs/index.html"},{"revision":"0149e96c49a84a6e35d2b55066be39e6","url":"docs/record/index.html"},{"revision":"f00a00c6ff0cf5285ca4868fa0116c34","url":"docs/record/introduction/index.html"},{"revision":"ae774c1dfab9dac91348a8947292746c","url":"docs/remuxers/index.html"},{"revision":"fee46ca68839a43ac198c12240e63418","url":"docs/remuxers/introduction/index.html"},{"revision":"e870251527e5680c30ba67df493634b9","url":"docs/scenarios/index.html"},{"revision":"59ee1076aa21d496ee49de5ceffcea8d","url":"docs/scenarios/rtmp/index.html"},{"revision":"e0bb29b4409e51b3853e3a45ac8bc32e","url":"docs/scenarios/rtsp/index.html"},{"revision":"0a19bffc9478d61c5c5067ff379ed8b1","url":"docs/scenarios/webrtc/index.html"},{"revision":"e618824be6c7ea435b150c274ec321f5","url":"index.html"},{"revision":"30d0742e028887c3a8813ff2d0bee533","url":"meta/manifest.json"},{"revision":"e79c8b9f1d4471368f1e67f8f24c859d","url":"search/index.html"},{"revision":"780412212ab0f53e17ec1abfa4879d87","url":"assets/images/obs_rtmp_push-579a2c9e86107ae299fa83a53da686f7.png"},{"revision":"0127c98986ab33143a6fedf8aebad446","url":"assets/images/obs_whip_push-31d7be43d9648fb99c5d75b27c939541.png"},{"revision":"8870079e1255f705bce3b6c6045f7bf6","url":"assets/images/play_whep-297af6c77c3dfda15a34a9003ffb3561.png"},{"revision":"9c8e96ecc7fa01e6ebcd196495ed2db5","url":"fonts/themify.svg"},{"revision":"2fceea3634a91a717925b40bde2c4516","url":"img/contrast.svg"},{"revision":"ed21678601a83ad4ae691ec8aec66a25","url":"img/docs/scenarios/rtmp/obs_rtmp_push_en.png"},{"revision":"780412212ab0f53e17ec1abfa4879d87","url":"img/docs/scenarios/rtmp/obs_rtmp_push.png"},{"revision":"350f2453cfe152c88ba569df070eb58e","url":"img/docs/scenarios/webrtc/obs_whip_push_en.png"},{"revision":"0127c98986ab33143a6fedf8aebad446","url":"img/docs/scenarios/webrtc/obs_whip_push.png"},{"revision":"8870079e1255f705bce3b6c6045f7bf6","url":"img/docs/scenarios/webrtc/play_whep.png"},{"revision":"338abbb5ea8d80b9869555eca253d49d","url":"img/favicon.ico"},{"revision":"eeb558422baffdaf41e339fc5181490c","url":"img/oss_logo.png"},{"revision":"79b02dc026ee6a936604b11a13dff6ec","url":"img/smile.png"},{"revision":"8fcbcbdba9d613292672730965ec2fbd","url":"img/xiu.png"},{"revision":"c74d29119fe80aa46c23d19a93bfddad","url":"meta/xiu_logo.svg"},{"revision":"8fcbcbdba9d613292672730965ec2fbd","url":"meta/xiu.png"},{"revision":"ba49e844892321d8540ea3b7c088cf97","url":"assets/fonts/bootstrap-icons-39795c0b4513de014cf8685fc5c923fe.woff"},{"revision":"cc1e5eda776be5f0ff614285c31d4892","url":"assets/fonts/bootstrap-icons-b7bcc075b395c14ce8c2d75dcd5fabe5.woff2"},{"revision":"da5c366eba60c5c3eaa590feb37ddf0a","url":"assets/fonts/rubik-arabic-400-normal-9b7e86b9f74ba1c2e5a660c23fa95f9c.woff"},{"revision":"63549755866162e8d79b079c97384386","url":"assets/fonts/rubik-arabic-400-normal-fb7a9eb9da73dfe4012dfbcb2f338903.woff2"},{"revision":"9b52bd7bb49d1d47f2b0401b0cb4af35","url":"assets/fonts/rubik-latin-400-normal-5903a23647de7c1c373f38b926f34eab.woff2"},{"revision":"6695a59cec5f938fc49f53ef95d7cb2e","url":"assets/fonts/rubik-latin-400-normal-870dcb9ca975e7fa06a964358a4a8ede.woff"},{"revision":"e969d157e5e7b691e194e81826b5c82e","url":"assets/fonts/rubik-latin-ext-400-normal-128f0ade4a0f37464020c56b1564e1b4.woff2"},{"revision":"ee7b4fb969b9c166ba3e51f919754ec2","url":"assets/fonts/rubik-latin-ext-400-normal-b22669ae614939bed8f430ba75cbb1b5.woff"},{"revision":"2c454669bdf3aebf32a1bd8ac1e0d2d6","url":"fonts/themify.eot"},{"revision":"e23a7dcaefbde4e74e263247aa42ecd7","url":"fonts/themify.ttf"},{"revision":"a1ecc3b826d01251edddf29c3e4e1e97","url":"fonts/themify.woff"}],s=new m({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();