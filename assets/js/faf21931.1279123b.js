"use strict";(self.webpackChunkalgoritmos=self.webpackChunkalgoritmos||[]).push([[9394],{3905:(e,o,r)=>{r.d(o,{Zo:()=>c,kt:()=>f});var a=r(7294);function s(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function t(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?t(Object(r),!0).forEach((function(o){s(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function i(e,o){if(null==e)return{};var r,a,s=function(e,o){if(null==e)return{};var r,a,s={},t=Object.keys(e);for(a=0;a<t.length;a++)r=t[a],o.indexOf(r)>=0||(s[r]=e[r]);return s}(e,o);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)r=t[a],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var d=a.createContext({}),m=function(e){var o=a.useContext(d),r=o;return e&&(r="function"==typeof e?e(o):n(n({},o),e)),r},c=function(e){var o=m(e.components);return a.createElement(d.Provider,{value:o},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var o=e.children;return a.createElement(a.Fragment,{},o)}},l=a.forwardRef((function(e,o){var r=e.components,s=e.mdxType,t=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=m(r),l=s,f=p["".concat(d,".").concat(l)]||p[l]||u[l]||t;return r?a.createElement(f,n(n({ref:o},c),{},{components:r})):a.createElement(f,n({ref:o},c))}));function f(e,o){var r=arguments,s=o&&o.mdxType;if("string"==typeof e||s){var t=r.length,n=new Array(t);n[0]=l;var i={};for(var d in o)hasOwnProperty.call(o,d)&&(i[d]=o[d]);i.originalType=e,i[p]="string"==typeof e?e:s,n[1]=i;for(var m=2;m<t;m++)n[m]=r[m];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}l.displayName="MDXCreateElement"},8840:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>d,contentTitle:()=>n,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>m});var a=r(7462),s=(r(7294),r(3905));const t={sidebar_position:3},n="DNS",i={unversionedId:"Protocolos/Aplicacao/dns",id:"Protocolos/Aplicacao/dns",title:"DNS",description:"O DNS (**D**omain **N**ame **S**ystem - Sistema de nomes e dom\xednios) \xe9 um sistema respons\xe1vel por traduzir nomes de dom\xednio em endere\xe7os IP, o que ocorre sempre que acessamos um site na internet pelo seu nome.",source:"@site/docs/03-Protocolos/01-Aplicacao/03-dns.md",sourceDirName:"03-Protocolos/01-Aplicacao",slug:"/Protocolos/Aplicacao/dns",permalink:"/redes/docs/Protocolos/Aplicacao/dns",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-Protocolos/01-Aplicacao/03-dns.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"HTTP",permalink:"/redes/docs/Protocolos/Aplicacao/http"},next:{title:"Exerc\xedcios",permalink:"/redes/docs/category/exerc\xedcios"}},d={},m=[],c={toc:m},p="wrapper";function u(e){let{components:o,...r}=e;return(0,s.kt)(p,(0,a.Z)({},c,r,{components:o,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"dns"},"DNS"),(0,s.kt)("p",null," O DNS (",(0,s.kt)("em",{parentName:"p"},(0,s.kt)("strong",{parentName:"em"},"D"),"omain ",(0,s.kt)("strong",{parentName:"em"},"N"),"ame ",(0,s.kt)("strong",{parentName:"em"},"S"),"ystem")," - Sistema de nomes e dom\xednios) \xe9 um sistema respons\xe1vel por traduzir nomes de dom\xednio em endere\xe7os IP, o que ocorre sempre que acessamos um ",(0,s.kt)("em",{parentName:"p"},"site")," na internet pelo seu nome."),(0,s.kt)("p",null,'O DNS \xe9 um sistema que permite que computadores na internet identifiquem e se comuniquem uns com os outros usando nomes de dom\xednio, em vez de endere\xe7os IP num\xe9ricos. Ele realiza a correspond\xeancia entre um nome de dom\xednio, como "google.com", e um endere\xe7o IP num\xe9rico, como "216.58.194.174", que \xe9 usado para identificar o servidor na internet.'),(0,s.kt)("p",null,"O processo de resolu\xe7\xe3o de nomes de dom\xednio come\xe7a quando um cliente envia uma solicita\xe7\xe3o para um servidor DNS. A solicita\xe7\xe3o cont\xe9m o nome de dom\xednio do site que o cliente est\xe1 tentando acessar. O servidor DNS ent\xe3o verifica seu banco de dados para encontrar o endere\xe7o IP associado a esse nome de dom\xednio. Se o servidor DNS n\xe3o tiver o endere\xe7o IP em seu banco de dados, ele envia uma solicita\xe7\xe3o para outros servidores DNS para encontrar a informa\xe7\xe3o."),(0,s.kt)("p",null,"A resolu\xe7\xe3o de nomes de dom\xednio \xe9 realizada usando um protocolo de rede chamado DNS. O protocolo DNS \xe9 baseado em uma arquitetura cliente/servidor e usa mensagens de protocolo para transferir informa\xe7\xf5es entre os clientes e os servidores DNS. As mensagens do protocolo DNS cont\xeam informa\xe7\xf5es como o nome de dom\xednio que est\xe1 sendo resolvido, o tipo de registro DNS que est\xe1 sendo solicitado (por exemplo, um registro de endere\xe7o IP), e informa\xe7\xf5es de controle para garantir a integridade e a confiabilidade da comunica\xe7\xe3o."),(0,s.kt)("p",null,"Existem dois tipos principais de servidores DNS: servidores de autoridade e servidores de cache. Os servidores de autoridade s\xe3o respons\xe1veis por manter informa\xe7\xf5es sobre os nomes de dom\xednio e seus endere\xe7os IP associados. Os servidores de cache mant\xeam uma c\xf3pia em cache das informa\xe7\xf5es de outros servidores DNS para acelerar a resolu\xe7\xe3o de nomes de dom\xednio."),(0,s.kt)("p",null,"Em resumo, o protocolo DNS \xe9 usado para resolver nomes de dom\xednio em endere\xe7os IP num\xe9ricos para permitir a comunica\xe7\xe3o entre computadores na internet. Ele usa uma arquitetura cliente/servidor e mensagens de protocolo para transferir informa\xe7\xf5es entre os clientes e os servidores DNS. O DNS \xe9 uma parte essencial da infraestrutura da internet e permite que as pessoas naveguem na web usando nomes de dom\xednio amig\xe1veis em vez de endere\xe7os IP num\xe9ricos complicados."),(0,s.kt)("p",null,"Existem v\xe1rios tipos de registros DNS, cada um com uma finalidade diferente. Aqui est\xe3o alguns dos tipos mais comuns de registros DNS:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},'Registro de endere\xe7o (A): Este registro \xe9 usado para mapear um nome de dom\xednio para um endere\xe7o IP IPv4. Por exemplo, o registro A para o nome de dom\xednio "google.com" pode apontar para o endere\xe7o IP "216.58.194.174".')),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Registro de endere\xe7o IPv6 (AAAA): Este registro \xe9 usado para mapear um nome de dom\xednio para um endere\xe7o IP IPv6. \xc9 semelhante ao registro A, mas \xe9 usado para endere\xe7os IP IPv6 em vez de endere\xe7os IP IPv4.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},'Registro de alias (CNAME): Este registro \xe9 usado para criar um alias para um nome de dom\xednio. Por exemplo, um registro CNAME pode ser usado para apontar "',(0,s.kt)("a",{parentName:"p",href:"http://www.google.com%22"},'www.google.com"'),' para "google.com".')),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Registro de servidor de nomes (NS): Este registro \xe9 usado para identificar os servidores de nomes respons\xe1veis por um determinado nome de dom\xednio. Cada dom\xednio deve ter pelo menos um registro NS.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Registro de correio (MX): Este registro \xe9 usado para identificar o servidor de correio respons\xe1vel por um determinado nome de dom\xednio. Isso \xe9 usado para enviar e-mails para os dom\xednios.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Registro de servi\xe7o (SRV): Este registro \xe9 usado para identificar um servi\xe7o espec\xedfico que est\xe1 associado a um nome de dom\xednio. Por exemplo, um registro SRV pode ser usado para identificar um servidor de chat associado a um nome de dom\xednio.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Registro de texto (TXT): Este registro \xe9 usado para armazenar informa\xe7\xf5es arbitr\xe1rias em um nome de dom\xednio. Isso pode ser usado para fornecer informa\xe7\xf5es adicionais sobre o dom\xednio, como informa\xe7\xf5es de seguran\xe7a ou pol\xedticas de privacidade."))),(0,s.kt)("p",null,"Cada registro DNS \xe9 identificado por um tipo de recurso (RR) que \xe9 definido pelo c\xf3digo de tipo de recurso (TRR). O c\xf3digo TRR \xe9 usado para identificar o tipo de registro DNS associado a um nome de dom\xednio espec\xedfico. Os registros DNS s\xe3o armazenados em servidores DNS autorizados para o dom\xednio. Quando um cliente faz uma solicita\xe7\xe3o DNS para um nome de dom\xednio, o servidor DNS autorizado envia uma resposta contendo os registros DNS associados ao nome de dom\xednio."))}u.isMDXComponent=!0}}]);