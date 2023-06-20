"use strict";(self.webpackChunkalgoritmos=self.webpackChunkalgoritmos||[]).push([[912],{3905:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>k});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=r.createContext({}),i=function(e){var a=r.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},l=function(e){var a=i(e.components);return r.createElement(d.Provider,{value:a},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},c=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=i(t),c=n,k=m["".concat(d,".").concat(c)]||m[c]||u[c]||o;return t?r.createElement(k,s(s({ref:a},l),{},{components:t})):r.createElement(k,s({ref:a},l))}));function k(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=c;var p={};for(var d in a)hasOwnProperty.call(a,d)&&(p[d]=a[d]);p.originalType=e,p[m]="string"==typeof e?e:n,s[1]=p;for(var i=2;i<o;i++)s[i]=t[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7130:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var r=t(7462),n=(t(7294),t(3905));const o={},s="CIDR",p={unversionedId:"Rede/CIDR",id:"Rede/CIDR",title:"CIDR",description:"Ao observar as classes de IPs, percebe-se que a forma como elas s\xe3o projetadas n\xe3o \xe9 poss\xedvel que cada m\xe1quina ligada \xe0 internet possua um \xfanico endere\xe7o.",source:"@site/docs/05-Rede/04-CIDR.md",sourceDirName:"05-Rede",slug:"/Rede/CIDR",permalink:"/redes/docs/Rede/CIDR",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/05-Rede/04-CIDR.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Classes",permalink:"/redes/docs/Rede/Classes"},next:{title:"NAT",permalink:"/redes/docs/Rede/NAT"}},d={},i=[{value:"Sub-redes",id:"sub-redes",level:2},{value:"CIDR",id:"cidr-1",level:2},{value:"<em>Default gateway</em>",id:"default-gateway",level:2},{value:"Materiais <em>online</em>",id:"materiais-online",level:2},{value:"Refer\xeancias",id:"refer\xeancias",level:2}],l={toc:i},m="wrapper";function u(e){let{components:a,...t}=e;return(0,n.kt)(m,(0,r.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"cidr"},"CIDR"),(0,n.kt)("p",null,"Ao observar as classes de IPs, percebe-se que a forma como elas s\xe3o projetadas n\xe3o \xe9 poss\xedvel que cada m\xe1quina ligada \xe0 internet possua um \xfanico endere\xe7o. "),(0,n.kt)("p",null,"Neste ponto, conv\xe9m observarmos que um endere\xe7o IP pode ser das seguintes categorias:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Endere\xe7o de rede: este \xe9 o primeiro endere\xe7o IP poss\xedvel em uma determinada rede, e n\xe3o pode ser atribu\xeddo a um ",(0,n.kt)("em",{parentName:"li"},"host"),". Este tamb\xe9m \xe9 dito ser o nome da rede."),(0,n.kt)("li",{parentName:"ul"},"Endere\xe7o de ",(0,n.kt)("em",{parentName:"li"},"host"),": endere\xe7o de uma m\xe1quina em uma rede."),(0,n.kt)("li",{parentName:"ul"},"Endere\xe7o de ",(0,n.kt)("em",{parentName:"li"},"broadcast"),": endere\xe7o utilizado para se comunicar com todas as m\xe1quinas de uma rede simultaneamente. \xc9 o \xfaltimo endere\xe7o de IP poss\xedvel em uma rede.")),(0,n.kt)("h2",{id:"sub-redes"},"Sub-redes"),(0,n.kt)("p",null,"Uma sub-rede \xe9 uma ilha de comunica\xe7\xe3o isolada, um conjuntos de ",(0,n.kt)("em",{parentName:"p"},"hosts")," que entre si comunicam-se diretamente. Para a comunica\xe7\xe3o com uma outra sub-rede, \xe9 necess\xe1rio um roteador para interconectar tais redes."),(0,n.kt)("p",null,"Vale observar que um endere\xe7o IP \xe9 atribu\xeddo a cada ",(0,n.kt)("strong",{parentName:"p"},"interface")," dos dispositivos, e se um roteador interconecta v\xe1rias sub-redes, ele pode possuir v\xe1rias interfaces, e consequentemente, v\xe1rios endere\xe7os IP."),(0,n.kt)("h2",{id:"cidr-1"},"CIDR"),(0,n.kt)("p",null,"Um mecanismo para trabalhar com redes de maneira interna, onde deve ser especificado ",(0,n.kt)("strong",{parentName:"p"},"quantos bits")," do endere\xe7o devem ser reservados para a redes e quantos devem ser reservados para ",(0,n.kt)("em",{parentName:"p"},"hosts")," \xe9 o ",(0,n.kt)("em",{parentName:"p"},"Classless Inter-Domain Routing")," (roteamento inter dom\xednio sem classes), o CIDR, especificado nos RFCs ",(0,n.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc1517"},"1517"),", ",(0,n.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc1518"},"1518"),", ",(0,n.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc1519"},"1519")," e ",(0,n.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc1520"},"1520"),"."),(0,n.kt)("p",null,"O endere\xe7amento utilizando CIDR, consiste em uma informa\xe7\xe3o adicional chamada ",(0,n.kt)("strong",{parentName:"p"},"m\xe1scara")," de sub-rede, que pode ser representada de diferentes maneiras:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ap\xf3s o endere\xe7o, separado por /  ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Exemplo"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"10.1.1.1/24\n")),(0,n.kt)("p",null,"Nesta nota\xe7\xe3o o n\xfamero logo ap\xf3s a / corresponde ao ",(0,n.kt)("strong",{parentName:"p"},"n\xfamero de bits")," dedicados \xe0 rede."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"No formato ",(0,n.kt)("em",{parentName:"li"},"dotted-decimal"),"  ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Exemplo"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"255.255.255.0\n")),(0,n.kt)("p",null,"Nesta nota\xe7\xe3o, os bits da m\xe1scara referentes a cada octeto s\xe3o convertidos para a base decimal."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"No formato bin\xe1rio")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Exemplo"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"11111111.11111111.11111111.00000000\n")),(0,n.kt)("p",null,"Repare que nos exemplos acima, a m\xe1scara de sub-rede \xe9 a mesma, o que altera \xe9 apenas sua representa\xe7\xe3o."),(0,n.kt)("h2",{id:"default-gateway"},(0,n.kt)("em",{parentName:"h2"},"Default gateway")),(0,n.kt)("p",null,"O ",(0,n.kt)("em",{parentName:"p"},"Gateway")," \xe9 um ",(0,n.kt)("em",{parentName:"p"},"host")," com fun\xe7\xe3o de estabelecer comunica\xe7\xe3o entre diferentes redes, comumente sendo um roteador."),(0,n.kt)("p",null,"Em resumo, m\xe1quinas que est\xe3o na mesma sub-rede conseguem comunicar-se diretamente, sem intermedi\xe1rios. J\xe1 a comunica\xe7\xe3o entre diferentes sub-redes precisa passar por um ",(0,n.kt)("em",{parentName:"p"},"gateway"),". O ",(0,n.kt)("em",{parentName:"p"},"gateway default")," \xe9 a m\xe1quina que deve ser acessada como intermedi\xe1rio, caso o destino n\xe3o esteja na mesma sub-rede. O endere\xe7o IP do ",(0,n.kt)("em",{parentName:"p"},"gateway")," \xe9 uma informa\xe7\xe3o adicional, que faz parte da defini\xe7\xe3o de rotas de comunica\xe7\xe3o."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"192      .168    .10      .10 (IP)\n255      .255    .255     .0  (MR) /24\n11000000.10101000.00001010.00001010 (IP)\n11111111.11111111.11111111.00000000 (MR)\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Endere\xe7o da rede:\n11000000.1010000.00001010.00000000 = 192.168.10.0\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Endere\xe7o de broadcast:\n11000000.10101000.00001010.00001010 (IP)\n11111111.11111111.11111111.00000000 (MR)\n\n11000000.10101000.00001010.00001010 (IP)\n00000000.00000000.00000000.11111111 (~MR)\n\n11000000.10101000.00001010.11111111 = 192.168.10.255 (Bcast)\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Endere\xe7o da m\xe1quina:\n00000000.00000000.00000000.00001010   = 0.0.0.10\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"192      .168    .10      .10 (IP)\n255      .255    .0       .0  (MR) /16\n11000000.10101000.00001010.00001010 (IP)\n11111111.11111111.00000000.00000000 (MR)\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Endere\xe7o IP: 32\n192.168.10.10/24\n\nMascara /24\n    Redes poss\xedveis: 2^24 =  16777216\n    Endere\xe7os na rede: 2^(32-24) = 2^8 = 256\n    Endere\xe7os de host: 2^(32-24)-2 = 2^8-2\n")),(0,n.kt)("h2",{id:"materiais-online"},"Materiais ",(0,n.kt)("em",{parentName:"h2"},"online")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://www.subnet-calculator.com/subnet.php?"},"IP Subnet Calculator"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"http://www.subnetmask.info"},"Network Calculators"),"  "),(0,n.kt)("h2",{id:"refer\xeancias"},"Refer\xeancias"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://plataforma.bvirtual.com.br/Leitor/Publicacao/3843/pdf/23?code=opaQM91XXDo3M6f51IIiU5X7T6DUUY4tnUbUN9g9xAn0nY6qeBM0WLTVwycNe9XtrqzhJL34gWxykS9MrPGJQA=="},"KUROSE, Jim; ROSS, Keith W. Redes de computadores e a internet: uma abordagem top-down. 6.ed. S\xe3o Paulo: Pearson, 2013. ISBN 9788581436777.")," (Link biblioteca online)"),(0,n.kt)("p",null,"STEVENS, W. Richard. TCP/IP illustrated, vol. I: the protocols. Addison Wesley, 1994."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Outros materiais"),"  "),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://www.subnet-calculator.com/subnet.php?"},"IP Subnet Calculator"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"http://www.subnetmask.info"},"Network Calculators"),"  "))}u.isMDXComponent=!0}}]);