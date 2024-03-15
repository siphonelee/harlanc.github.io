"use strict";(self.webpackChunktauri_docs=self.webpackChunktauri_docs||[]).push([[396],{5680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>f});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return t?r.createElement(f,o(o({ref:n},s),{},{components:t})):r.createElement(f,o({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2781:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>y,default:()=>T,frontMatter:()=>f,metadata:()=>b,toc:()=>v});var r=t(5680),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&s(e,t,n[t]);if(i)for(var t of i(n))c.call(n,t)&&s(e,t,n[t]);return e},d=(e,n)=>l(e,o(n)),m=(e,n)=>{var t={};for(var r in e)p.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&i)for(var r of i(e))n.indexOf(r)<0&&c.call(e,r)&&(t[r]=e[r]);return t};const f={sidebar_position:1},y="HTTP Callback",b={unversionedId:"docs/httpcallback/http-callback",id:"docs/httpcallback/http-callback",title:"HTTP Callback",description:"xiu\u652f\u6301\u628a\u63a8\u62c9\u6d41\u4e8b\u4ef6\u4ee5HTTP\u56de\u8c03\u7684\u65b9\u5f0f\u544a\u77e5\u5176\u5b83\u670d\u52a1\uff0c\u53ef\u4ee5\u7528\u6765\u505a\u4e00\u4e9b\u4e8b\u60c5\uff0c\u6bd4\u5982\uff1a\u505a\u9274\u6743\u6216\u8005\u5728\u642d\u5efa\u6d41\u5a92\u4f53\u96c6\u7fa4\u7684\u65f6\u5019\u544a\u77e5\u4e1a\u52a1\u65b9\u4e00\u4e2a\u6d41\u5728\u54ea\u53f0\u673a\u5668\u4e0a\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/docs/httpcallback/http-callback.md",sourceDirName:"docs/httpcallback",slug:"/docs/httpcallback/http-callback",permalink:"/zh-cn/docs/httpcallback/http-callback",draft:!1,editUrl:"https://github.com/harlanc/xiu-doc/edit/main/docs/docs/httpcallback/http-callback.md",tags:[],version:"current",lastUpdatedAt:1710501832,formattedLastUpdatedAt:"2024\u5e743\u670815\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"HTTP Callback",permalink:"/zh-cn/docs/httpcallback/"},next:{title:"\u7b80\u4ecb",permalink:"/zh-cn/docs/httpapi/"}},g={},v=[{value:"\u6d4b\u8bd5 HTTP-Server",id:"\u6d4b\u8bd5-http-server",level:2},{value:"Http-Callback\u7684Body\u683c\u5f0f",id:"http-callback\u7684body\u683c\u5f0f",level:2},{value:"RTMP\u63a8\u6d41\u548c\u505c\u6b62\u63a8\u6d41\u4e8b\u4ef6",id:"rtmp\u63a8\u6d41\u548c\u505c\u6b62\u63a8\u6d41\u4e8b\u4ef6",level:3},{value:"RTMP\u62c9\u6d41\u548c\u505c\u6b62\u62c9\u6d41\u4e8b\u4ef6",id:"rtmp\u62c9\u6d41\u548c\u505c\u6b62\u62c9\u6d41\u4e8b\u4ef6",level:3},{value:"HTTP-FLV\u62c9\u6d41\u548c\u505c\u6b62\u62c9\u6d41\u4e8b\u4ef6",id:"http-flv\u62c9\u6d41\u548c\u505c\u6b62\u62c9\u6d41\u4e8b\u4ef6",level:3}],h={toc:v},P="wrapper";function T(e){var n=e,{components:t}=n,a=m(n,["components"]);return(0,r.yg)(P,d(u(u({},h),a),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",u({},{id:"http-callback"}),"HTTP Callback"),(0,r.yg)("p",null,"xiu\u652f\u6301\u628a\u63a8\u62c9\u6d41\u4e8b\u4ef6\u4ee5HTTP\u56de\u8c03\u7684\u65b9\u5f0f\u544a\u77e5\u5176\u5b83\u670d\u52a1\uff0c\u53ef\u4ee5\u7528\u6765\u505a\u4e00\u4e9b\u4e8b\u60c5\uff0c\u6bd4\u5982\uff1a\u505a\u9274\u6743\u6216\u8005\u5728\u642d\u5efa\u6d41\u5a92\u4f53\u96c6\u7fa4\u7684\u65f6\u5019\u544a\u77e5\u4e1a\u52a1\u65b9\u4e00\u4e2a\u6d41\u5728\u54ea\u53f0\u673a\u5668\u4e0a\u3002"),(0,r.yg)("h2",u({},{id:"\u6d4b\u8bd5-http-server"}),"\u6d4b\u8bd5 HTTP-Server"),(0,r.yg)("p",null,"\u4e3a\u4e86\u6d4b\u8bd5\u65b9\u4fbf\uff0c\u5b9e\u73b0\u4e86\u4e00\u4e2a\u7b80\u5355\u7684Http-server\uff0c\u7f16\u8bd1\u9879\u76ee\u4e4b\u540e\uff0c\u4f1a\u5728debug\u6587\u4ef6\u5939\u4e0b\u751f\u6210\u4e00\u4e2a\u53ef\u6267\u884c\u6587\u4ef6\uff0c\u8fd0\u884c\u8d77\u6765\u5373\u53ef\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",u({parentName:"pre"},{className:"language-shell"}),"xiu/target/debug/http-server\n")),(0,r.yg)("p",null,"\u5728xiu\u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\u5199\u4e0a\u6b64\u6d4b\u8bd5HTTP-Server\u7684\u5730\u5740\uff1a",(0,r.yg)("a",u({parentName:"p"},{href:"../configurations/config-file#http-%E9%80%9A%E7%9F%A5"}),"\u914d\u7f6e"),"\u3002xiu\u5728\u6536\u5230\u63a8\u62c9\u6d41\u8bf7\u6c42\u540e\uff0c\u4f1a\u8c03\u7528\u6b64HTTP-Server\u7684\u63a5\u53e3\uff0c\u628a\u4e8b\u4ef6\u7684\u76f8\u5173\u4fe1\u606f\u5199\u5728HTTP Body\u4e2d\u544a\u77e5HTTP-server"),(0,r.yg)("h2",u({},{id:"http-callback\u7684body\u683c\u5f0f"}),"Http-Callback\u7684Body\u683c\u5f0f"),(0,r.yg)("h3",u({},{id:"rtmp\u63a8\u6d41\u548c\u505c\u6b62\u63a8\u6d41\u4e8b\u4ef6"}),"RTMP\u63a8\u6d41\u548c\u505c\u6b62\u63a8\u6d41\u4e8b\u4ef6"),(0,r.yg)("p",null,"id\u7528\u4e8e\u552f\u4e00\u6807\u8bc6\u4e00\u4e2a\u6d41\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",u({parentName:"pre"},{className:"language-json"}),'{\n    "Publish":{\n        "identifier":{\n            "Rtmp":{\n                "app_name":"live",\n                "stream_name":"test"\n            }\n        },\n        "info":{\n            "id":"17079766549390",\n            "sub_type":"PushRtmp",\n            "notify_info":{\n                "request_url":"rtmp://127.0.0.1:1935/live/test?token=password",\n                "remote_addr":"127.0.0.1:57792"\n            }\n        }\n    }\n}\n')),(0,r.yg)("pre",null,(0,r.yg)("code",u({parentName:"pre"},{className:"language-json"}),'{\n    "UnPublish":{\n        "identifier":{\n            "Rtmp":{\n                "app_name":"live",\n                "stream_name":"test"\n            }\n        },\n        "info":{\n            "id":"17079766549390",\n            "sub_type":"PushRtmp",\n            "notify_info":{\n                "request_url":"rtmp://127.0.0.1:1935/live/test?token=password",\n                "remote_addr":"127.0.0.1:57792"\n            }\n        }\n    }\n}\n')),(0,r.yg)("h3",u({},{id:"rtmp\u62c9\u6d41\u548c\u505c\u6b62\u62c9\u6d41\u4e8b\u4ef6"}),"RTMP\u62c9\u6d41\u548c\u505c\u6b62\u62c9\u6d41\u4e8b\u4ef6"),(0,r.yg)("pre",null,(0,r.yg)("code",u({parentName:"pre"},{className:"language-json"}),'{\n    "Subscribe":{\n        "identifier":{\n            "Rtmp":{\n                "app_name":"live",\n                "stream_name":"test"\n            }\n        },\n        "info":{\n            "id":"17079757737089",\n            "sub_type":"PlayerRtmp",\n            "notify_info":{\n                "request_url":"rtmp://127.0.0.1:1935/live/test?token=password",\n                "remote_addr":"127.0.0.1:56938"\n            }\n        }\n    }\n}\n')),(0,r.yg)("pre",null,(0,r.yg)("code",u({parentName:"pre"},{className:"language-json"}),'{\n    "UnSubscribe":{\n        "identifier":{\n            "Rtmp":{\n                "app_name":"live",\n                "stream_name":"test"\n            }\n        },\n        "info":{\n            "id":"17079757737089",\n            "sub_type":"PlayerRtmp",\n            "notify_info":{\n                "request_url":"rtmp://127.0.0.1:1935/live/test?token=password",\n                "remote_addr":"127.0.0.1:56938"\n            }\n        }\n    }\n}\n')),(0,r.yg)("h3",u({},{id:"http-flv\u62c9\u6d41\u548c\u505c\u6b62\u62c9\u6d41\u4e8b\u4ef6"}),"HTTP-FLV\u62c9\u6d41\u548c\u505c\u6b62\u62c9\u6d41\u4e8b\u4ef6"),(0,r.yg)("pre",null,(0,r.yg)("code",u({parentName:"pre"},{className:"language-json"}),'{\n    "Subscribe":{\n        "identifier":{\n            "Rtmp":{\n                "app_name":"live",\n                "stream_name":"test"\n            }\n        },\n        "info":{\n            "id":"17079760463966",\n            "sub_type":"PlayerHttpFlv",\n            "notify_info":{\n                "request_url":"/live/test.flv?token=password",\n                "remote_addr":"127.0.0.1:57196"\n            }\n        }\n    }\n}\n')),(0,r.yg)("pre",null,(0,r.yg)("code",u({parentName:"pre"},{className:"language-json"}),'{\n    "UnSubscribe":{\n        "identifier":{\n            "Rtmp":{\n                "app_name":"live",\n                "stream_name":"test"\n            }\n        },\n        "info":{\n            "id":"17079760463966",\n            "sub_type":"PlayerHttpFlv",\n            "notify_info":{\n                "request_url":"/live/test.flv?token=password",\n                "remote_addr":"127.0.0.1:57196"\n            }\n        }\n    }\n}\n')))}T.isMDXComponent=!0}}]);