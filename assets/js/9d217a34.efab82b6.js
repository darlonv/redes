"use strict";(self.webpackChunkalgoritmos=self.webpackChunkalgoritmos||[]).push([[1776],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2221:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294);function a(e){let t,{bib:r,page:a,type:o,inline:c=!1,link:l=!1}=e,i={tanenbaum_2011_book:{cite:"TANENBAUM 2011",abnt:"TANENBAUM, A.S., Wetherall, D. Redes de Computadores. 5. ed. S\xe3o Paulo: Pearson do Brasil, 2011.",link:"https://plataforma.bvirtual.com.br/Acervo/Publicacao/2610"},kurose_2013_book:{cite:"KUROSE 2013",abnt:"KUROSE, Jim; ROSS, Keith W. Redes de computadores e a internet: uma abordagem top-down. 6.ed. S\xe3o Paulo: Pearson, 2013. ISBN 9788581436777.",link:"https://plataforma.bvirtual.com.br/Acervo/Publicacao/198909"},torres_2009_book:{cite:"TORRES 2009",abnt:"TORRES, G. Redes de Computadores. Rio de Janeiro: Novaterra, 2009. ISBN 978-85-61893-05-7."},stevens_1994_book:{cite:"STEVENS 1994",abnt:"STEVENS, W. R. TCP/IP Illustrated, Volume 1: The Protocols. Boston, USA: Addison-Wesley/Pearson Education, 1994. ISBN 0-201-63346-9."},rfc_791_site:{cite:"IETF 1981",abnt:"IETF. RFC 791: Internet Protocol. 1981.",link:"https://datatracker.ietf.org/doc/html/rfc791"}};return o?(t=i[r][o],l&&(t=n.createElement("a",{href:i[r].link,target:"_blank"},t))):(t=a?i[r].cite+", pg. "+a:i[r].cite,c||(t="("+t+")"),l&&(t=n.createElement("a",{href:i[r].link,target:"_blank"},t))),n.createElement(n.Fragment,null,t)}},3010:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905)),o=r(2221);const c={},l="Camada de enlace",i={unversionedId:"Enlace/Enlace",id:"Enlace/Enlace",title:"Camada de enlace",description:"Refer\xeancias",source:"@site/docs/06-Enlace/01-Enlace.mdx",sourceDirName:"06-Enlace",slug:"/Enlace/Enlace",permalink:"/redes/docs/Enlace/Enlace",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/06-Enlace/01-Enlace.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BGP",permalink:"/redes/docs/Rede/Roteamento/BGP"},next:{title:"Comutadores",permalink:"/redes/docs/Enlace/Comutadores"}},s={},u=[{value:"Refer\xeancias",id:"refer\xeancias",level:2}],d={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"camada-de-enlace"},"Camada de enlace"),(0,a.kt)("h2",{id:"refer\xeancias"},"Refer\xeancias"),(0,a.kt)(o.Z,{bib:"tanenbaum_2011_book",type:"abnt",mdxType:"Bib"}),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Outros materiais")))}m.isMDXComponent=!0}}]);