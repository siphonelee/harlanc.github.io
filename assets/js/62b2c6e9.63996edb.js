"use strict";(self.webpackChunktauri_docs=self.webpackChunktauri_docs||[]).push([[190],{5680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>d});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),g=a,d=u["".concat(s,".").concat(g)]||u[g]||m[g]||o;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},5683:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>f,default:()=>P,frontMatter:()=>d,metadata:()=>y,toc:()=>v});var n=r(5680),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&c(e,r,t[r]);return e},m=(e,t)=>o(e,l(t)),g=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const d={sidebar_position:2},f="RTMP",y={unversionedId:"docs/scenarios/rtmp",id:"docs/scenarios/rtmp",title:"RTMP",description:"Push",source:"@site/docs/docs/scenarios/rtmp.md",sourceDirName:"docs/scenarios",slug:"/docs/scenarios/rtmp",permalink:"/docs/scenarios/rtmp",draft:!1,editUrl:"https://github.com/harlanc/xiu-doc/edit/main/docs/docs/scenarios/rtmp.md",tags:[],version:"current",lastUpdatedAt:1719379301,formattedLastUpdatedAt:"Jun 26, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Scenarious",permalink:"/docs/scenarios/"},next:{title:"RTSP",permalink:"/docs/scenarios/rtsp"}},h={},v=[{value:"Push",id:"push",level:2},{value:"FFmpeg Push",id:"ffmpeg-push",level:3},{value:"OBS Push",id:"obs-push",level:3},{value:"Play",id:"play",level:2},{value:"Clusters",id:"clusters",level:2},{value:"Static Push",id:"static-push",level:3},{value:"Static Pull",id:"static-pull",level:3}],b={toc:v},O="wrapper";function P(e){var t=e,{components:a}=t,o=g(t,["components"]);return(0,n.yg)(O,m(u(u({},b),o),{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",u({},{id:"rtmp"}),"RTMP"),(0,n.yg)("h2",u({},{id:"push"}),"Push"),(0,n.yg)("h3",u({},{id:"ffmpeg-push"}),"FFmpeg Push"),(0,n.yg)("p",null,"Use ffmpeg CLI to push a live stream:"),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{className:"language-shell"}),"ffmpeg -re -stream_loop -1 -i test.mp4 -c:a copy -c:v copy -f flv -flvflags no_duration_filesize rtmp://127.0.0.1:1935/live/test\n")),(0,n.yg)("h3",u({},{id:"obs-push"}),"OBS Push"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Add Run/Debug Configuration",src:r(850).A,width:"956",height:"685"})),(0,n.yg)("admonition",u({},{type:"caution"}),(0,n.yg)("p",{parentName:"admonition"},"Beginners may often make mistakes when using OBS for live streaming, for example, the streaming address above:"),(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",u({parentName:"pre"},{}),"rtmp://127.0.0.1:1935/live/test?token=123\n")),(0,n.yg)("p",{parentName:"admonition"},"Need to cut at app name and stream name, fill them into ",(0,n.yg)("strong",{parentName:"p"},"Server")," and ",(0,n.yg)("strong",{parentName:"p"},"Bearer Token")," respectively.")),(0,n.yg)("h2",u({},{id:"play"}),"Play"),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{className:"language-shell"}),"ffplay -i rtmp://127.0.0.1:1935/live/test?token=123\n")),(0,n.yg)("h2",u({},{id:"clusters"}),"Clusters"),(0,n.yg)("p",null,"Xiu supports deploying RTMP service clusters, achieving it through static relay."),(0,n.yg)("h3",u({},{id:"static-push"}),"Static Push"),(0,n.yg)("p",null,"The application scenario is to relay the live streams from edge nodes to the origin server. The configuration is as follows:"),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{className:"language-toml",metastring:'title="config_push.toml"',title:'"config_push.toml"'}),'[rtmp] \nenabled = true\nport = 1935\n[[rtmp.push]]\nenabled = true\naddress = "localhost"\nport = 1936\n')),(0,n.yg)("p",null,"The configuration file for origin server:"),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{className:"language-toml",metastring:'title="config.toml"',title:'"config.toml"'}),"[rtmp]\nenabled = true\nport = 1936\n")),(0,n.yg)("p",null,"Start the two services:"),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{}),"./xiu config.toml\n./xiu config_push.toml\n")),(0,n.yg)("p",null,"Push one RTMP live stream to the edge node, and this live stream will be automatically relayed to the origin server. We can play the stream from the two servers:"),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{}),"ffplay -i rtmp://localhost:1935/live/test\nffplay -i rtmp://localhost:1936/live/test\n")),(0,n.yg)("h3",u({},{id:"static-pull"}),"Static Pull"),(0,n.yg)("p",null,"The application scenario is that during playback, if a user pulls the stream from the edge node and it does not exist, the edge node will pull it from the origin, and the configuration file is as follows:"),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{className:"language-toml",metastring:'title="config.toml"',title:'"config.toml"'}),"[rtmp]\nenabled = true\nport = 1935\n")),(0,n.yg)("p",null,"The configuration file for edge node:"),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{className:"language-toml",metastring:'title="config_pull.toml"',title:'"config_pull.toml"'}),'[rtmp]\nenabled = true\nport = 1936\n[rtmp.pull]\nenabled = false\naddress = "localhost"\nport = 1935\n')),(0,n.yg)("p",null,"Start the two services:"),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{}),"./xiu config.toml\n./xiu config_pull.toml\n")),(0,n.yg)("p",null,"Directly push the live stream to the origin server. When the edge node requests this live stream, it will pull the stream from the origin, so the stream exists on both the edge and origin server:"),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{}),"ffplay -i rtmp://localhost:1935/live/test\nffplay -i rtmp://localhost:1936/live/test\n")))}P.isMDXComponent=!0},850:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/obs_rtmp_push_en-3646b92913bd4ee0b452fb6f5719b9e9.png"}}]);