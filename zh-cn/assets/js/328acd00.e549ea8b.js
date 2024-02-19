"use strict";(self.webpackChunktauri_docs=self.webpackChunktauri_docs||[]).push([[548],{5680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>f});var n=t(6540);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,c=function(e,r){if(null==e)return{};var t,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(c[t]=e[t]);return c}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,c=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(t),p=c,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||o;return t?n.createElement(f,a(a({ref:r},u),{},{components:t})):n.createElement(f,a({ref:r},u))}));function f(e,r){var t=arguments,c=r&&r.mdxType;if("string"==typeof e||c){var o=t.length,a=new Array(o);a[0]=p;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[m]="string"==typeof e?e:c,a[1]=i;for(var s=2;s<o;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},982:(e,r,t)=>{t.d(r,{A:()=>E});var n=t(6540),c=t(53),o=t(6764),a=t(7449),i=t(5068);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",cardImage:"cardImage_G0zJ",cardColumn:"cardColumn_qHzJ"};function s({href:e,children:r}){return n.createElement(a.A,{href:e,className:(0,c.A)("card padding--lg",l.cardContainer)},r)}function u({href:e,icon:r,title:t,description:o,image:a,imageDark:i}){return n.createElement(s,{href:e},a&&n.createElement("div",{className:l.cardImage},n.createElement("img",{src:a+(i?"#gh-light-mode-only":"")}),i&&n.createElement("img",{src:i+"#gh-dark-mode-only"})),n.createElement("div",{className:l.cardColumn},n.createElement("h2",{className:(0,c.A)("text--truncate",l.cardTitle),title:t},a?"":r," ",t),o&&n.createElement("p",{className:(0,c.A)("text--truncate",l.cardDescription),title:o},o)))}function m({item:e}){var r;const t=(0,o._o)(e);return t?n.createElement(u,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null==(r=e.customProps)?void 0:r.description}):null}function d({item:e}){var r,t,c;const a=(0,i.A)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,o.cC)(null!=(r=e.docId)?r:void 0);return n.createElement(u,{href:e.href,icon:a,title:e.label,description:null==l?void 0:l.description,image:null==(t=e.customProps)?void 0:t.doc_card_image,imageDark:null==(c=e.customProps)?void 0:c.doc_card_image_dark})}function p({item:e}){switch(e.type){case"link":return n.createElement(d,{item:e});case"category":return n.createElement(m,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var f=Object.defineProperty,y=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,v=(e,r,t)=>r in e?f(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,O=(e,r)=>{for(var t in r||(r={}))b.call(r,t)&&v(e,t,r[t]);if(y)for(var t of y(r))g.call(r,t)&&v(e,t,r[t]);return e};function h({className:e}){const r=(0,o.$S)();return n.createElement(E,{items:r.items,className:e})}function E(e){const{items:r,className:t}=e;if(!r)return n.createElement(h,O({},e));const a=(0,o.d1)(r);return n.createElement("section",{className:(0,c.A)("row",t)},a.map(((e,r)=>n.createElement("article",{key:r,className:"col col--6 margin-bottom--lg"},n.createElement(p,{item:e})))))}},987:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>O,contentTitle:()=>g,default:()=>j,frontMatter:()=>b,metadata:()=>v,toc:()=>h});var n=t(5680),c=t(982),o=t(6764),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))u.call(r,t)&&d(e,t,r[t]);if(s)for(var t of s(r))m.call(r,t)&&d(e,t,r[t]);return e},f=(e,r)=>i(e,l(r)),y=(e,r)=>{var t={};for(var n in e)u.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&s)for(var n of s(e))r.indexOf(n)<0&&m.call(e,n)&&(t[n]=e[n]);return t};const b={},g="\u534f\u8bae\u8f6c\u6362",v={unversionedId:"docs/remuxers/README",id:"docs/remuxers/README",title:"\u534f\u8bae\u8f6c\u6362",description:"",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/docs/remuxers/README.md",sourceDirName:"docs/remuxers",slug:"/docs/remuxers/",permalink:"/zh-cn/v0.10.0/docs/remuxers/",draft:!1,editUrl:"https://github.com/harlanc/xiu-doc/edit/dev/docs/docs/remuxers/README.md",tags:[],version:"current",lastUpdatedAt:1708350283,formattedLastUpdatedAt:"2024\u5e742\u670819\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"\u5f55\u5236\u4ecb\u7ecd",permalink:"/zh-cn/v0.10.0/docs/record/introduction"},next:{title:"\u4ecb\u7ecd",permalink:"/zh-cn/v0.10.0/docs/remuxers/introduction"}},O={},h=[],E={toc:h},w="wrapper";function j(e){var r=e,{components:t}=r,a=y(r,["components"]);return(0,n.yg)(w,f(p(p({},E),a),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",p({},{id:"\u534f\u8bae\u8f6c\u6362"}),"\u534f\u8bae\u8f6c\u6362"),(0,n.yg)(c.A,{items:(0,o.$S)().items,mdxType:"DocCardList"}))}j.isMDXComponent=!0}}]);