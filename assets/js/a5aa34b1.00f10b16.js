"use strict";(self.webpackChunkalgoritmos=self.webpackChunkalgoritmos||[]).push([[1807],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),u=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,f=p["".concat(d,".").concat(m)]||p[m]||l[m]||o;return r?a.createElement(f,s(s({ref:t},c),{},{components:r})):a.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5384:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const o={},s="VLSM",i={unversionedId:"Rede/VLSM",id:"Rede/VLSM",title:"VLSM",description:"O VLSM (Variable Length Subnet Masking) possibilita que no espa\xe7o de endere\xe7amento destinado a uma rede de uma determinada classe, \xe9 poss\xedvel que sejam definidos sub-redes com diferentes quantidades de m\xe1quinas.",source:"@site/docs/05-Rede/05-VLSM.md",sourceDirName:"05-Rede",slug:"/Rede/VLSM",permalink:"/redes/docs/Rede/VLSM",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/05-Rede/05-VLSM.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CIDR",permalink:"/redes/docs/Rede/CIDR"},next:{title:"NAT",permalink:"/redes/docs/Rede/NAT"}},d={},u=[{value:"Refer\xeancias",id:"refer\xeancias",level:2}],c={toc:u},p="wrapper";function l(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"vlsm"},"VLSM"),(0,n.kt)("p",null,"O VLSM (",(0,n.kt)("em",{parentName:"p"},"Variable Length Subnet Masking"),") possibilita que no espa\xe7o de endere\xe7amento destinado a uma rede de uma determinada classe, \xe9 poss\xedvel que sejam definidos sub-redes com diferentes quantidades de m\xe1quinas."),(0,n.kt)("p",null,"Tomemos como exemplo uma rede classe C, que possui 24 bits dedicados \xe0 defini\xe7\xe3o da rede. Poder\xedamos dividir o espa\xe7o de m\xe1quinas em 8 sub-redes, utilizando a m\xe1scara /27. Desta forma, cada sub-rede poderia ter 30 ",(0,n.kt)("em",{parentName:"p"},"hosts"),"."),(0,n.kt)("p",null,"A utiliza\xe7\xe3o do VLSM possibilita que ao inv\xe9s de todo o espa\xe7o dispon\xedvel a ",(0,n.kt)("em",{parentName:"p"},"hosts")," da classe C seja dividido de maneira igual, \xe9 permitido que as sub-redes sejam divididas. Com isto, dentro da rede classe C poderia haver a sub-rede /25 (126 ",(0,n.kt)("em",{parentName:"p"},"hosts"),"), /26 (62 ",(0,n.kt)("em",{parentName:"p"},"hosts"),"), /28 (14 ",(0,n.kt)("em",{parentName:"p"},"hosts"),") e assim sucessivamente."),(0,n.kt)("h2",{id:"refer\xeancias"},"Refer\xeancias"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Outros materiais")))}l.isMDXComponent=!0}}]);