"use strict";(self.webpackChunktauri_docs=self.webpackChunktauri_docs||[]).push([[869],{5680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>d});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=i(r),f=a,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(d,p(p({ref:t},c),{},{components:r})):n.createElement(d,p({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,p[1]=l;for(var i=2;i<o;i++)p[i]=r[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2817:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>O,frontMatter:()=>d,metadata:()=>g,toc:()=>P});var n=r(5680),a=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))i.call(t,r)&&c(e,r,t[r]);return e},m=(e,t)=>o(e,p(t)),f=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&i.call(e,n)&&(r[n]=e[n]);return r};const d={sidebar_position:3},y="RTSP",g={unversionedId:"docs/scenarios/rtsp",id:"docs/scenarios/rtsp",title:"RTSP",description:"FFmpeg Push",source:"@site/docs/docs/scenarios/rtsp.md",sourceDirName:"docs/scenarios",slug:"/docs/scenarios/rtsp",permalink:"/docs/scenarios/rtsp",draft:!1,editUrl:"https://github.com/harlanc/xiu-doc/edit/main/docs/docs/scenarios/rtsp.md",tags:[],version:"current",lastUpdatedAt:1728782941,formattedLastUpdatedAt:"Oct 13, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"RTMP",permalink:"/docs/scenarios/rtmp"},next:{title:"WEBRTC",permalink:"/docs/scenarios/webrtc"}},v={},P=[{value:"FFmpeg Push",id:"ffmpeg-push",level:2},{value:"Over TCP(Interleaved mode)",id:"over-tcpinterleaved-mode",level:3},{value:"Over UDP",id:"over-udp",level:3},{value:"Play",id:"play",level:2},{value:"Play Streams over TCP",id:"play-streams-over-tcp",level:3},{value:"Play Streams over UDP",id:"play-streams-over-udp",level:3},{value:"Pull remote RTSP stream to XIU",id:"pull-remote-rtsp-stream-to-xiu",level:2},{value:"Configuration",id:"configuration",level:3},{value:"HTTP-API",id:"http-api",level:3}],h={toc:P},b="wrapper";function O(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.yg)(b,m(u(u({},h),a),{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h1",u({},{id:"rtsp"}),"RTSP"),(0,n.yg)("h2",u({},{id:"ffmpeg-push"}),"FFmpeg Push"),(0,n.yg)("p",null,"RTSP protocol streaming supports both TCP and UDP modes."),(0,n.yg)("h3",u({},{id:"over-tcpinterleaved-mode"}),"Over TCP(Interleaved mode)"),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{className:"language-shell"}),'ffmpeg -re -stream_loop -1  -i test.mp4 -c:v copy  -c:a copy  -rtsp_transport tcp -f rtsp "rtsp://127.0.0.1:5544/live/test?token=123"\n')),(0,n.yg)("h3",u({},{id:"over-udp"}),"Over UDP"),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{className:"language-shell"}),'ffmpeg -re -stream_loop -1  -i test.mp4 -c:v copy  -c:a copy -f rtsp "rtsp://127.0.0.1:5544/live/test?token=123"\n')),(0,n.yg)("admonition",u({},{type:"info"}),(0,n.yg)("p",{parentName:"admonition"},"Reference\uff1a",(0,n.yg)("a",u({parentName:"p"},{href:"https://www.ycmds.cc/en/ffmpeg/ffmpeg/#3transfer-rtsp-stream"}),"Transfer RTSP Stream"))),(0,n.yg)("h2",u({},{id:"play"}),"Play"),(0,n.yg)("h3",u({},{id:"play-streams-over-tcp"}),"Play Streams over TCP"),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{className:"language-shell"}),'ffplay -rtsp_transport tcp -i "rtsp://127.0.0.1:5544/live/test?token=123"\n')),(0,n.yg)("h3",u({},{id:"play-streams-over-udp"}),"Play Streams over UDP"),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{className:"language-shell"}),'ffplay -i "rtsp://127.0.0.1:5544/live/test?token=123"\n')),(0,n.yg)("admonition",u({},{type:"info"}),(0,n.yg)("p",{parentName:"admonition"},"Reference\uff1a",(0,n.yg)("a",u({parentName:"p"},{href:"https://www.ycmds.cc/en/ffmpeg/ffplay/#play-rtsp-stream"}),"Play RTSP Stream"))),(0,n.yg)("h2",u({},{id:"pull-remote-rtsp-stream-to-xiu"}),"Pull remote RTSP stream to XIU"),(0,n.yg)("p",null,"You can pull an RTSP stream from a remote camera to the xiu server and remux it into RTMP/HTTP-FLV/HLS, follow the following steps:"),(0,n.yg)("h3",u({},{id:"configuration"}),"Configuration"),(0,n.yg)("p",null,"Make sure to enable the RTSP relay switch:"),(0,n.yg)("p",null,(0,n.yg)("a",u({parentName:"p"},{href:"../configurations/config-file#rtsp"}),"RTSP Configuration")),(0,n.yg)("p",null,"To remux into RTMP/HTTP-FLV/HLS, add the relevant protocol configurations to the configuration file."),(0,n.yg)("h3",u({},{id:"http-api"}),"HTTP-API"),(0,n.yg)("p",null,"Use the HTTP-API to start and stop the pulling tasks: "),(0,n.yg)("p",null,(0,n.yg)("a",u({parentName:"p"},{href:"../httpapi/http-api#pull-the-rtsp-stream-from-remote-to-xiu"}),"HTTP-API")))}O.isMDXComponent=!0}}]);