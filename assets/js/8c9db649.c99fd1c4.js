"use strict";(self.webpackChunktauri_docs=self.webpackChunktauri_docs||[]).push([[34],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||l;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=f;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4292:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>g,default:()=>T,frontMatter:()=>m,metadata:()=>y,toc:()=>b});var r=t(5680),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&c(e,t,n[t]);if(o)for(var t of o(n))p.call(n,t)&&c(e,t,n[t]);return e},d=(e,n)=>l(e,i(n)),f=(e,n)=>{var t={};for(var r in e)s.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&o)for(var r of o(e))n.indexOf(r)<0&&p.call(e,r)&&(t[r]=e[r]);return t};const m={sidebar_position:1},g="HTTP Callback",y={unversionedId:"docs/httpcallback/http-callback",id:"docs/httpcallback/http-callback",title:"HTTP Callback",description:"Xiu supports notifying other services of push-pull stream events via HTTP callback.",source:"@site/docs/docs/httpcallback/http-callback.md",sourceDirName:"docs/httpcallback",slug:"/docs/httpcallback/http-callback",permalink:"/docs/httpcallback/http-callback",draft:!1,editUrl:"https://github.com/harlanc/xiu-doc/edit/main/docs/docs/httpcallback/http-callback.md",tags:[],version:"current",lastUpdatedAt:1719379301,formattedLastUpdatedAt:"Jun 26, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"HTTP Callback",permalink:"/docs/httpcallback/"},next:{title:"Introduction",permalink:"/docs/httpapi/"}},v={},b=[{value:"A HTTP-Server for Testing",id:"a-http-server-for-testing",level:2},{value:"Body Format",id:"body-format",level:2},{value:"RTMP Pushing Events",id:"rtmp-pushing-events",level:3},{value:"RTMP Pulling Events",id:"rtmp-pulling-events",level:3},{value:"HTTP-FLV Pulling Events",id:"http-flv-pulling-events",level:3}],h={toc:b},P="wrapper";function T(e){var n=e,{components:t}=n,a=f(n,["components"]);return(0,r.yg)(P,d(u(u({},h),a),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",u({},{id:"http-callback"}),"HTTP Callback"),(0,r.yg)("p",null,"Xiu supports notifying other services of push-pull stream events via HTTP callback."),(0,r.yg)("h2",u({},{id:"a-http-server-for-testing"}),"A HTTP-Server for Testing"),(0,r.yg)("p",null,"For the convenience of testing, a simple HTTP server has been implemented. After compiling the project, an executable file will be generated in the debug folder. Issuing the following command to start the server:"),(0,r.yg)("pre",null,(0,r.yg)("code",u({parentName:"pre"},{className:"language-shell"}),"xiu/target/debug/http-server\n")),(0,r.yg)("p",null,"Configure the http server address in the ",(0,r.yg)("a",u({parentName:"p"},{href:"../configurations/config-file#http-notify"}),"configuration file"),".After receiving the push/pull stream request, xiu will call the HTTP interface to pass the relevant information."),(0,r.yg)("h2",u({},{id:"body-format"}),"Body Format"),(0,r.yg)("h3",u({},{id:"rtmp-pushing-events"}),"RTMP Pushing Events"),(0,r.yg)("p",null,"The id is used to uniquely identify a stream."),(0,r.yg)("pre",null,(0,r.yg)("code",u({parentName:"pre"},{className:"language-json"}),'{\n    "Publish":{\n        "identifier":{\n            "Rtmp":{\n                "app_name":"live",\n                "stream_name":"test"\n            }\n        },\n        "info":{\n            "id":"17079766549390",\n            "sub_type":"PushRtmp",\n            "notify_info":{\n                "request_url":"rtmp://127.0.0.1:1935/live/test?token=password",\n                "remote_addr":"127.0.0.1:57792"\n            }\n        }\n    }\n}\n')),(0,r.yg)("pre",null,(0,r.yg)("code",u({parentName:"pre"},{className:"language-json"}),'{\n    "UnPublish":{\n        "identifier":{\n            "Rtmp":{\n                "app_name":"live",\n                "stream_name":"test"\n            }\n        },\n        "info":{\n            "id":"17079766549390",\n            "sub_type":"PushRtmp",\n            "notify_info":{\n                "request_url":"rtmp://127.0.0.1:1935/live/test?token=password",\n                "remote_addr":"127.0.0.1:57792"\n            }\n        }\n    }\n}\n')),(0,r.yg)("h3",u({},{id:"rtmp-pulling-events"}),"RTMP Pulling Events"),(0,r.yg)("pre",null,(0,r.yg)("code",u({parentName:"pre"},{className:"language-json"}),'{\n    "Subscribe":{\n        "identifier":{\n            "Rtmp":{\n                "app_name":"live",\n                "stream_name":"test"\n            }\n        },\n        "info":{\n            "id":"17079757737089",\n            "sub_type":"PlayerRtmp",\n            "notify_info":{\n                "request_url":"rtmp://127.0.0.1:1935/live/test?token=password",\n                "remote_addr":"127.0.0.1:56938"\n            }\n        }\n    }\n}\n')),(0,r.yg)("pre",null,(0,r.yg)("code",u({parentName:"pre"},{className:"language-json"}),'{\n    "UnSubscribe":{\n        "identifier":{\n            "Rtmp":{\n                "app_name":"live",\n                "stream_name":"test"\n            }\n        },\n        "info":{\n            "id":"17079757737089",\n            "sub_type":"PlayerRtmp",\n            "notify_info":{\n                "request_url":"rtmp://127.0.0.1:1935/live/test?token=password",\n                "remote_addr":"127.0.0.1:56938"\n            }\n        }\n    }\n}\n')),(0,r.yg)("h3",u({},{id:"http-flv-pulling-events"}),"HTTP-FLV Pulling Events"),(0,r.yg)("pre",null,(0,r.yg)("code",u({parentName:"pre"},{className:"language-json"}),'{\n    "Subscribe":{\n        "identifier":{\n            "Rtmp":{\n                "app_name":"live",\n                "stream_name":"test"\n            }\n        },\n        "info":{\n            "id":"17079760463966",\n            "sub_type":"PlayerHttpFlv",\n            "notify_info":{\n                "request_url":"/live/test.flv?token=password",\n                "remote_addr":"127.0.0.1:57196"\n            }\n        }\n    }\n}\n')),(0,r.yg)("pre",null,(0,r.yg)("code",u({parentName:"pre"},{className:"language-json"}),'{\n    "UnSubscribe":{\n        "identifier":{\n            "Rtmp":{\n                "app_name":"live",\n                "stream_name":"test"\n            }\n        },\n        "info":{\n            "id":"17079760463966",\n            "sub_type":"PlayerHttpFlv",\n            "notify_info":{\n                "request_url":"/live/test.flv?token=password",\n                "remote_addr":"127.0.0.1:57196"\n            }\n        }\n    }\n}\n')))}T.isMDXComponent=!0}}]);