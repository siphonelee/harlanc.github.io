"use strict";(self.webpackChunktauri_docs=self.webpackChunktauri_docs||[]).push([[804],{5680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>y});var n=t(6540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(t),f=a,y=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return t?n.createElement(y,p(p({ref:r},c),{},{components:t})):n.createElement(y,p({ref:r},c))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[u]="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=t[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9268:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>m,default:()=>b,frontMatter:()=>y,metadata:()=>g,toc:()=>P});var n=t(5680),a=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&c(e,t,r[t]);if(i)for(var t of i(r))s.call(r,t)&&c(e,t,r[t]);return e},d=(e,r)=>o(e,p(r)),f=(e,r)=>{var t={};for(var n in e)l.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))r.indexOf(n)<0&&s.call(e,n)&&(t[n]=e[n]);return t};const y={sidebar_position:3},m="RTSP",g={unversionedId:"docs/scenarios/rtsp",id:"docs/scenarios/rtsp",title:"RTSP",description:"FFmpeg\u63a8\u6d41",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/docs/scenarios/rtsp.md",sourceDirName:"docs/scenarios",slug:"/docs/scenarios/rtsp",permalink:"/zh-cn/docs/scenarios/rtsp",draft:!1,editUrl:"https://github.com/harlanc/xiu-doc/edit/main/docs/docs/scenarios/rtsp.md",tags:[],version:"current",lastUpdatedAt:1728782941,formattedLastUpdatedAt:"2024\u5e7410\u670813\u65e5",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"RTMP",permalink:"/zh-cn/docs/scenarios/rtmp"},next:{title:"WEBRTC",permalink:"/zh-cn/docs/scenarios/webrtc"}},v={},P=[{value:"FFmpeg\u63a8\u6d41",id:"ffmpeg\u63a8\u6d41",level:2},{value:"Over TCP(Interleaved mode)",id:"over-tcpinterleaved-mode",level:3},{value:"Over UDP",id:"over-udp",level:3},{value:"\u64ad\u653e",id:"\u64ad\u653e",level:2},{value:"\u64ad\u653eOver TCP\u7684RTSP\u6d41",id:"\u64ad\u653eover-tcp\u7684rtsp\u6d41",level:3},{value:"\u64ad\u653eOver UDP\u7684RTSP\u6d41",id:"\u64ad\u653eover-udp\u7684rtsp\u6d41",level:3},{value:"\u62c9\u53d6\u8fdc\u7aefRTSP\u6444\u50cf\u5934\u6d41\u5230xiu",id:"\u62c9\u53d6\u8fdc\u7aefrtsp\u6444\u50cf\u5934\u6d41\u5230xiu",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3},{value:"HTTP-API",id:"http-api",level:3}],O={toc:P},h="wrapper";function b(e){var r=e,{components:t}=r,a=f(r,["components"]);return(0,n.yg)(h,d(u(u({},O),a),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",u({},{id:"rtsp"}),"RTSP"),(0,n.yg)("h2",u({},{id:"ffmpeg\u63a8\u6d41"}),"FFmpeg\u63a8\u6d41"),(0,n.yg)("p",null,"RTSP\u534f\u8bae\u63a8\u6d41\u652f\u6301TCP\u548cUDP\u6a21\u5f0f\u3002"),(0,n.yg)("h3",u({},{id:"over-tcpinterleaved-mode"}),"Over TCP(Interleaved mode)"),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{className:"language-shell"}),'ffmpeg -re -stream_loop -1  -i test.mp4 -c:v copy  -c:a copy  -rtsp_transport tcp -f rtsp "rtsp://127.0.0.1:5544/live/test?token=123"\n')),(0,n.yg)("h3",u({},{id:"over-udp"}),"Over UDP"),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{className:"language-shell"}),'ffmpeg -re -stream_loop -1  -i test.mp4 -c:v copy  -c:a copy -f rtsp "rtsp://127.0.0.1:5544/live/test?token=123"\n')),(0,n.yg)("admonition",u({},{type:"info"}),(0,n.yg)("p",{parentName:"admonition"},"\u53c2\u8003\uff1a",(0,n.yg)("a",u({parentName:"p"},{href:"https://www.ycmds.cc/ffmpeg/ffmpeg/#3%E8%BD%AC%E6%8E%A8rtsp%E5%8D%8F%E8%AE%AE%E6%B5%81"}),"\u8f6c\u63a8RTSP\u534f\u8bae\u6d41"))),(0,n.yg)("h2",u({},{id:"\u64ad\u653e"}),"\u64ad\u653e"),(0,n.yg)("h3",u({},{id:"\u64ad\u653eover-tcp\u7684rtsp\u6d41"}),"\u64ad\u653eOver TCP\u7684RTSP\u6d41"),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{className:"language-shell"}),'ffplay -rtsp_transport tcp -i "rtsp://127.0.0.1:5544/live/test?token=123"\n')),(0,n.yg)("h3",u({},{id:"\u64ad\u653eover-udp\u7684rtsp\u6d41"}),"\u64ad\u653eOver UDP\u7684RTSP\u6d41"),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{className:"language-shell"}),'ffplay -i "rtsp://127.0.0.1:5544/live/test?token=123"\n')),(0,n.yg)("admonition",u({},{type:"info"}),(0,n.yg)("p",{parentName:"admonition"},"\u53c2\u8003\uff1a",(0,n.yg)("a",u({parentName:"p"},{href:"https://www.ycmds.cc/ffmpeg/ffplay/#%E6%92%AD%E6%94%BErtsp%E5%8D%8F%E8%AE%AE%E6%B5%81"}),"\u64ad\u653eRTSP\u534f\u8bae\u6d41"))),(0,n.yg)("h2",u({},{id:"\u62c9\u53d6\u8fdc\u7aefrtsp\u6444\u50cf\u5934\u6d41\u5230xiu"}),"\u62c9\u53d6\u8fdc\u7aefRTSP\u6444\u50cf\u5934\u6d41\u5230xiu"),(0,n.yg)("p",null,"\u53ef\u4ee5\u62c9\u53d6\u8fdc\u7aef\u6444\u50cf\u5934\u7684\u6d41\u5230xiu server\uff0c\u5e76\u4e14\u53ef\u4ee5\u8f6c\u5c01\u88c5\u6210RTMP/HTTP-FLV/HLS\u3002"),(0,n.yg)("h3",u({},{id:"\u914d\u7f6e"}),"\u914d\u7f6e"),(0,n.yg)("p",null,"\u9700\u8981\u6253\u5f00RTSP\u7684relay\u5f00\u5173\uff1a"),(0,n.yg)("p",null,(0,n.yg)("a",u({parentName:"p"},{href:"../configurations/config-file#rtsp"}),"RTSP\u914d\u7f6e")),(0,n.yg)("p",null,"\u5982\u679c\u9700\u8981\u8f6c\u5c01\u88c5\u6210RTMP/HTTP-FLV/HLS\uff0c\u9700\u8981\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u6dfb\u52a0\u534f\u8bae\u7684\u76f8\u5173\u914d\u7f6e\u3002"),(0,n.yg)("h3",u({},{id:"http-api"}),"HTTP-API"),(0,n.yg)("p",null,"\u4f7f\u7528HTTP-API\u542f\u52a8\u548c\u505c\u6b62\u62c9\u53d6\u4efb\u52a1\uff1a",(0,n.yg)("a",u({parentName:"p"},{href:"../httpapi/http-api#%E6%8B%89%E5%8F%96%E6%91%84%E5%83%8F%E5%A4%B4%E7%9A%84rtsp%E6%B5%81%E5%88%B0xiu"}),"HTTP-API")))}b.isMDXComponent=!0}}]);