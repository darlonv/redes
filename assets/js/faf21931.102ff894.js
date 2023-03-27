"use strict";(self.webpackChunkalgoritmos=self.webpackChunkalgoritmos||[]).push([[9394],{3905:(e,o,a)=>{a.d(o,{Zo:()=>u,kt:()=>N});var r=a(7294);function t(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function n(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?n(Object(a),!0).forEach((function(o){t(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function s(e,o){if(null==e)return{};var a,r,t=function(e,o){if(null==e)return{};var a,r,t={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],o.indexOf(a)>=0||(t[a]=e[a]);return t}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var l=r.createContext({}),d=function(e){var o=r.useContext(l),a=o;return e&&(a="function"==typeof e?e(o):i(i({},o),e)),a},u=function(e){var o=d(e.components);return r.createElement(l.Provider,{value:o},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},c=r.forwardRef((function(e,o){var a=e.components,t=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=d(a),c=t,N=m["".concat(l,".").concat(c)]||m[c]||p[c]||n;return a?r.createElement(N,i(i({ref:o},u),{},{components:a})):r.createElement(N,i({ref:o},u))}));function N(e,o){var a=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var n=a.length,i=new Array(n);i[0]=c;var s={};for(var l in o)hasOwnProperty.call(o,l)&&(s[l]=o[l]);s.originalType=e,s[m]="string"==typeof e?e:t,i[1]=s;for(var d=2;d<n;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,o,a)=>{a.d(o,{Z:()=>i});var r=a(7294),t=a(6010);const n={tabItem:"tabItem_Ymn6"};function i(e){let{children:o,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,t.Z)(n.tabItem,i),hidden:a},o)}},4866:(e,o,a)=>{a.d(o,{Z:()=>D});var r=a(7462),t=a(7294),n=a(6010),i=a(2466),s=a(6550),l=a(1980),d=a(7392),u=a(12);function m(e){return function(e){return t.Children.map(e,(e=>{if((0,t.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:o,label:a,attributes:r,default:t}}=e;return{value:o,label:a,attributes:r,default:t}}))}function p(e){const{values:o,children:a}=e;return(0,t.useMemo)((()=>{const e=o??m(a);return function(e){const o=(0,d.l)(e,((e,o)=>e.value===o.value));if(o.length>0)throw new Error(`Docusaurus error: Duplicate values "${o.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[o,a])}function c(e){let{value:o,tabValues:a}=e;return a.some((e=>e.value===o))}function N(e){let{queryString:o=!1,groupId:a}=e;const r=(0,s.k6)(),n=function(e){let{queryString:o=!1,groupId:a}=e;if("string"==typeof o)return o;if(!1===o)return null;if(!0===o&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:o,groupId:a});return[(0,l._X)(n),(0,t.useCallback)((e=>{if(!n)return;const o=new URLSearchParams(r.location.search);o.set(n,e),r.replace({...r.location,search:o.toString()})}),[n,r])]}function v(e){const{defaultValue:o,queryString:a=!1,groupId:r}=e,n=p(e),[i,s]=(0,t.useState)((()=>function(e){let{defaultValue:o,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(o){if(!c({value:o,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${o}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return o}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:n}))),[l,d]=N({queryString:a,groupId:r}),[m,v]=function(e){let{groupId:o}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(o),[r,n]=(0,u.Nk)(a);return[r,(0,t.useCallback)((e=>{a&&n.set(e)}),[a,n])]}({groupId:r}),k=(()=>{const e=l??m;return c({value:e,tabValues:n})?e:null})();(0,t.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!c({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),v(e)}),[d,v,n]),tabValues:n}}var k=a(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:o,block:a,selectedValue:s,selectValue:l,tabValues:d}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),p=e=>{const o=e.currentTarget,a=u.indexOf(o),r=d[a].value;r!==s&&(m(o),l(r))},c=e=>{let o=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;o=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;o=u[a]??u[u.length-1];break}}o?.focus()};return t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},o)},d.map((e=>{let{value:o,label:a,attributes:i}=e;return t.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===o?0:-1,"aria-selected":s===o,key:o,ref:e=>u.push(e),onKeyDown:c,onClick:p},i,{className:(0,n.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":s===o})}),a??o)})))}function g(e){let{lazy:o,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],o){const e=a.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return t.createElement("div",{className:"margin-top--md"},a.map(((e,o)=>(0,t.cloneElement)(e,{key:o,hidden:e.props.value!==r}))))}function S(e){const o=v(e);return t.createElement("div",{className:(0,n.Z)("tabs-container",f.tabList)},t.createElement(b,(0,r.Z)({},e,o)),t.createElement(g,(0,r.Z)({},e,o)))}function D(e){const o=(0,k.Z)();return t.createElement(S,(0,r.Z)({key:String(o)},e))}},8840:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>u,contentTitle:()=>l,default:()=>N,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var r=a(7462),t=(a(7294),a(3905)),n=a(4866),i=a(5162);const s={sidebar_position:4},l="DNS",d={unversionedId:"Protocolos/Aplicacao/dns",id:"Protocolos/Aplicacao/dns",title:"DNS",description:"O DNS (**D**omain **N**ame **S**ystem - Sistema de nomes e dom\xednios) \xe9 um sistema respons\xe1vel por traduzir nomes de dom\xednio em endere\xe7os IP, o que ocorre sempre que acessamos um site na internet pelo seu nome.",source:"@site/docs/03-Protocolos/01-Aplicacao/03-dns.md",sourceDirName:"03-Protocolos/01-Aplicacao",slug:"/Protocolos/Aplicacao/dns",permalink:"/redes/docs/Protocolos/Aplicacao/dns",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-Protocolos/01-Aplicacao/03-dns.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"HTTP Server",permalink:"/redes/docs/Protocolos/Aplicacao/http_server"},next:{title:"SSH",permalink:"/redes/docs/Protocolos/Aplicacao/ssh"}},u={},m=[{value:"Funcionamento",id:"funcionamento",level:2},{value:"O protocolo",id:"o-protocolo",level:2},{value:"Tipos de registros",id:"tipos-de-registros",level:2},{value:"Ferramentas",id:"ferramentas",level:2},{value:"nslookup",id:"nslookup",level:3},{value:"Servidores DNS",id:"servidores-dns",level:2},{value:"Registro de dom\xednios",id:"registro-de-dom\xednios",level:2},{value:"Refer\xeancias",id:"refer\xeancias",level:2}],p={toc:m},c="wrapper";function N(e){let{components:o,...a}=e;return(0,t.kt)(c,(0,r.Z)({},p,a,{components:o,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"dns"},"DNS"),(0,t.kt)("p",null,"O DNS (",(0,t.kt)("em",{parentName:"p"},(0,t.kt)("strong",{parentName:"em"},"D"),"omain ",(0,t.kt)("strong",{parentName:"em"},"N"),"ame ",(0,t.kt)("strong",{parentName:"em"},"S"),"ystem")," - Sistema de nomes e dom\xednios) \xe9 um sistema respons\xe1vel por traduzir nomes de dom\xednio em endere\xe7os IP, o que ocorre sempre que acessamos um ",(0,t.kt)("em",{parentName:"p"},"site")," na internet pelo seu nome."),(0,t.kt)("p",null,"Seu funcionamento opera como um banco de dados distribu\xeddo, que tem como tarefa principal associar nomes de ",(0,t.kt)("em",{parentName:"p"},"hosts")," a endere\xe7os IP."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Atividade")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Para refletir:",(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"Como seria um mundo em que as pessoas n\xe3o tivesses nomes, apenas n\xfameros de CPF ou RG. Voc\xea lembraria o nome de muitas ou poucas pessoas?"),(0,t.kt)("li",{parentName:"ul"},"Como seria navegar pela internet se ao inv\xe9s de lembrarmos nomes de sites tiv\xe9ssemos que saber seus endere\xe7os IP?")))),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Atividade")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"A que site corresponde o endere\xe7o IP apresentado abaixo?",(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"177.11.21.36")))),(0,t.kt)("h2",{id:"funcionamento"},"Funcionamento"),(0,t.kt)("p",null,"Sabemos que a comunica\xe7\xe3o entre dispositivos \xe9 realizada utilizando os endere\xe7os IP. Por\xe9m, o que ocorre quando n\xe3o conhecemos o endere\xe7o IP do website?"),(0,t.kt)("p",null,"Vamos acessar um website, p.ex. ",(0,t.kt)("a",{parentName:"p",href:"http://www.example.com"},"www.example.com")," em nosso navegador. Inicialmente, o navegador verifica se j\xe1 possui o endere\xe7o IP em seu ",(0,t.kt)("em",{parentName:"p"},"cache"),". Caso n\xe3o, realiza uma solicita\xe7\xe3o ao sistema operaciona, que por sua vez, tamb\xe9m verifica em seu ",(0,t.kt)("em",{parentName:"p"},"cache"),". Caso n\xe3o possua, \xe9 realizada uma requisi\xe7\xe3o a um servidor DNS.    "),(0,t.kt)("p",null,"Caso o endere\xe7o IP do site a ser acessado ainda n\xe3o seja conhecido, \xe9 utilizado o protocolo DNS, que consiste em acessar um servidor de nomes e dom\xednios (servidor DNS) ",(0,t.kt)("strong",{parentName:"p"},"perguntando")," qual \xe9 o endere\xe7o IP do local que desejamos acessar. A resposta do servidor cont\xe9m o nome e o endere\xe7o IP do site. Ap\xf3s receber a resposta, o site \xe9 acessado utilizando seu endere\xe7o IP."),(0,t.kt)("p",null,"Observe que inicialmente deve ser conhecido o endere\xe7o IP de um servidor DNS. Este \xe9 o servidor para que ser\xe1 perguntado qual \xe9 o endere\xe7o IP do site em que se deseja acessar. Este endere\xe7o pode vir configurado no sistema ou ent\xe3o fornecido de maneira din\xe2mica, pelo DHCP (",(0,t.kt)("em",{parentName:"p"},"Dynamic Host Configuration Protocol"),"), junto com o endere\xe7o IP a ser utilizado pela m\xe1quina. Outra alternativa \xe9 defin\xed-lo manualmente, colocando um endere\xe7o IP de um servidor DNS j\xe1 conhecido.   "),(0,t.kt)("mermaid",{value:'sequenceDiagram\n    Cliente  ->> Servidor DNS: Qual o IP de "pudim.com.br"?\n    Servidor DNS ->> Cliente:  54.207.20.104'}),(0,t.kt)("p",null,"Consultas iterativas (mais comum)"),(0,t.kt)("mermaid",{value:'sequenceDiagram\n    Cliente      ->> DNS Local : IP de "ifpr.edu.br"?\n    DNS Local    ->> DNS Raiz  : IP de "ifpr.edu.br"?\n    DNS Raiz     ->> DNS Local : Consulte DNS TLD .br\n    DNS Local    ->> DNS TLD .br  : IP de "ifpr.edu.br"?\n    DNS TLD .br  ->> DNS Local : Consulte DNS autoritativo .edu.br\n    DNS Local    ->> DNS Autoritativo .edu.br  : IP de "ifpr.edu.br"?\n    DNS Autoritativo .edu.br ->> DNS Local : "54.207.20.104"\n    DNS Local    ->> Cliente  : "54.207.20.104"'}),(0,t.kt)("p",null,"Consultas recursivas"),(0,t.kt)("mermaid",{value:'sequenceDiagram\n    Cliente   ->> DNS Local : IP de "ifpr.edu.br"?\n    DNS Local ->> DNS Raiz  : IP de "ifpr.edu.br"?\n    DNS Raiz  ->> DNS TLD : IP de "ifpr.edu.br"?\n    DNS TLD   ->> DNS Autoritativo : IP de "ifpr.edu.br"?\n    DNS Autoritativo ->> DNS TLD : "54.207.20.104"\n    DNS TLD   ->> DNS Raiz : "54.207.20.104"\n    DNS Raiz  ->> DNS Local : "54.207.20.104"\n    DNS Local ->> Cliente  : "54.207.20.104"'}),(0,t.kt)("admonition",{title:"Informa\xe7\xe3o",type:"info"},(0,t.kt)(n.Z,{mdxType:"Tabs"},(0,t.kt)(i.Z,{value:"linux",label:"Linux",default:!0,mdxType:"TabItem"},(0,t.kt)("p",{parentName:"admonition"},"Comumente em sistemas Linux, a configura\xe7\xe3o do DNS pode ser encontrada no arquivo ",(0,t.kt)("inlineCode",{parentName:"p"},"/etc/resolv.conf"),", com a entrada ",(0,t.kt)("inlineCode",{parentName:"p"},"nameserver"),".")),(0,t.kt)(i.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,t.kt)("p",{parentName:"admonition"},"Em sistemas Windows, estas configura\xe7\xf5es normalmente podem ser realizadas nas configura\xe7\xf5es de rede, observando as propriedades da conex\xe3o.")))),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Atividade")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Obtenha o endere\xe7o IP do servidor DNS que est\xe1 sendo utilizado.")),(0,t.kt)("h2",{id:"o-protocolo"},"O protocolo"),(0,t.kt)("p",null,'O DNS \xe9 um sistema que permite que computadores na internet identifiquem e se comuniquem uns com os outros usando nomes de dom\xednio, em vez de endere\xe7os IP num\xe9ricos. Ele realiza a correspond\xeancia entre um nome de dom\xednio, como "google.com", e um endere\xe7o IP num\xe9rico, como "216.58.194.174", que \xe9 usado para identificar o servidor na internet.'),(0,t.kt)("p",null,"O processo de resolu\xe7\xe3o de nomes de dom\xednio come\xe7a quando um cliente envia uma solicita\xe7\xe3o para um servidor DNS. A solicita\xe7\xe3o cont\xe9m o nome de dom\xednio do site que o cliente est\xe1 tentando acessar. O servidor DNS ent\xe3o verifica seu banco de dados para encontrar o endere\xe7o IP associado a esse nome de dom\xednio. Se o servidor DNS n\xe3o tiver o endere\xe7o IP em seu banco de dados, ele envia uma solicita\xe7\xe3o para outros servidores DNS para encontrar a informa\xe7\xe3o."),(0,t.kt)("p",null,"A resolu\xe7\xe3o de nomes de dom\xednio \xe9 realizada usando um protocolo de rede chamado DNS. O protocolo DNS \xe9 baseado em uma arquitetura cliente/servidor e usa mensagens de protocolo para transferir informa\xe7\xf5es entre os clientes e os servidores DNS. As mensagens do protocolo DNS cont\xeam informa\xe7\xf5es como o nome de dom\xednio que est\xe1 sendo resolvido, o tipo de registro DNS que est\xe1 sendo solicitado (por exemplo, um registro de endere\xe7o IP), e informa\xe7\xf5es de controle para garantir a integridade e a confiabilidade da comunica\xe7\xe3o."),(0,t.kt)("p",null,"Existem dois tipos principais de servidores DNS: servidores de autoridade e servidores de ",(0,t.kt)("em",{parentName:"p"},"cache"),". Os servidores de autoridade s\xe3o respons\xe1veis por manter informa\xe7\xf5es sobre os nomes de dom\xednio e seus endere\xe7os IP associados. Os servidores de ",(0,t.kt)("em",{parentName:"p"},"cache")," mant\xeam uma das informa\xe7\xf5es de outros servidores DNS, com o intuito de diminuir o tempo de resposta das consultas DNS."),(0,t.kt)("h2",{id:"tipos-de-registros"},"Tipos de registros"),(0,t.kt)("p",null,"Existem v\xe1rios tipos de registros DNS, cada um com uma finalidade diferente. Alguns dos tipos mais comuns de registros s\xe3o:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Registro de endere\xe7o (",(0,t.kt)("inlineCode",{parentName:"p"},"A"),"): \xc9 utilizado para mapear um nome de dom\xednio para um endere\xe7o IP IPv4. Por exemplo, o registro A para o nome de dom\xednio ",(0,t.kt)("em",{parentName:"p"},'"',(0,t.kt)("a",{parentName:"em",href:"http://google.com"},"google.com"),'"'),' pode apontar para o endere\xe7o IP "',(0,t.kt)("a",{parentName:"p",href:"http://142.250.218.68"},"142.250.218.68"),'".')),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Registro de endere\xe7o IPv6 (",(0,t.kt)("inlineCode",{parentName:"p"},"AAAA"),"): \xc9 utilizado para mapear um nome de dom\xednio para um endere\xe7o IP IPv6. \xc9 semelhante ao registro A, por\xe9m para endere\xe7os IPv6.")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Registro de ",(0,t.kt)("em",{parentName:"p"},"alias")," (",(0,t.kt)("inlineCode",{parentName:"p"},"CNAME"),"): Este registro \xe9 usado para criar um alias para um nome de dom\xednio. Por exemplo, um registro CNAME pode ser usado para apontar ",(0,t.kt)("em",{parentName:"p"},'"',(0,t.kt)("a",{parentName:"em",href:"http://www.google.com"},"www.google.com"),'"')," para ",(0,t.kt)("em",{parentName:"p"},'"',(0,t.kt)("a",{parentName:"em",href:"http://google.com"},"google.com"),'"'),".")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Registro de servidor de nomes (",(0,t.kt)("inlineCode",{parentName:"p"},"NS"),"): Este registro \xe9 usado para identificar os servidores de nomes respons\xe1veis por um determinado nome de dom\xednio. Cada dom\xednio deve ter pelo menos um registro NS.")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Registro de correio (",(0,t.kt)("inlineCode",{parentName:"p"},"MX"),"): Este registro \xe9 usado para identificar o servidor de correio respons\xe1vel por um determinado nome de dom\xednio. Isso \xe9 usado para enviar e-mails para os dom\xednios.")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Registro de servi\xe7o (",(0,t.kt)("inlineCode",{parentName:"p"},"SRV"),"): Este registro \xe9 usado para identificar um servi\xe7o espec\xedfico que est\xe1 associado a um nome de dom\xednio. Por exemplo, um registro SRV pode ser usado para identificar um servidor de chat associado a um nome de dom\xednio.")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Registro de texto (",(0,t.kt)("inlineCode",{parentName:"p"},"TXT"),"): Este registro \xe9 usado para armazenar informa\xe7\xf5es arbitr\xe1rias em um nome de dom\xednio. Isso pode ser usado para fornecer informa\xe7\xf5es adicionais sobre o dom\xednio, como informa\xe7\xf5es de seguran\xe7a ou pol\xedticas de privacidade."))),(0,t.kt)("p",null,"Cada registro DNS \xe9 identificado por um tipo de recurso (RR) que \xe9 definido pelo c\xf3digo de tipo de recurso (TRR). O c\xf3digo TRR \xe9 usado para identificar o tipo de registro DNS associado a um nome de dom\xednio espec\xedfico. Os registros DNS s\xe3o armazenados em servidores DNS autorizados para o dom\xednio. Quando um cliente faz uma solicita\xe7\xe3o DNS para um nome de dom\xednio, o servidor DNS autorizado envia uma resposta contendo os registros DNS associados ao nome de dom\xednio."),(0,t.kt)("h2",{id:"ferramentas"},"Ferramentas"),(0,t.kt)("h3",{id:"nslookup"},"nslookup"),(0,t.kt)("p",null,"Uma ferramenta que resolve registros DNS \xe9 o ",(0,t.kt)("inlineCode",{parentName:"p"},"nslookup")),(0,t.kt)("admonition",{title:"Sintaxe",type:"info"},(0,t.kt)("pre",{parentName:"admonition"},(0,t.kt)("code",{parentName:"pre",className:"language-sh"},"nslookop <-type=tipo> <SERVER>\n")),(0,t.kt)("p",{parentName:"admonition"},"Par\xe2metros:"),(0,t.kt)("ul",{parentName:"admonition"},(0,t.kt)("li",{parentName:"ul"},"-type: corresponde ao tipo de registro. Opcional."),(0,t.kt)("li",{parentName:"ul"},"SERVER : servidor DNS a ser consultado. Caos seja omitido, usa o DNS configurado na m\xe1quina"))),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Exemplos"),"  "),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Realize as consultas a seguir utilizando ",(0,t.kt)("inlineCode",{parentName:"li"},"nslookup")," e observe os resultados obtidos.",(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"nslookup google.com")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"nslookup google.com 8.8.8.8")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"nslookup -type=a google.com 8.8.8.8")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"nslookup -type=aaaa google.com 8.8.8.8")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"nslookup -type=mx google.com")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"nslookup -type=a pudim.com.br")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"nslookup -type=aaaa pudim.com.br")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"nslookup -type=TXT facebook.com"))))),(0,t.kt)("h2",{id:"servidores-dns"},"Servidores DNS"),(0,t.kt)("p",null,"O DNS utiliza diversos servidores, organizados de forma hier\xe1rquica e distribu\xedda no mundo inteiro. H\xe1 tr\xeas tipos de servidores:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Raiz"),(0,t.kt)("li",{parentName:"ul"},"de Dom\xednio de Alto N\xedvel (TLD), e;"),(0,t.kt)("li",{parentName:"ul"},"Autoritativos.")),(0,t.kt)("p",null,"Estes servidores est\xe3o organizados hierarquicamente."),(0,t.kt)("mermaid",{value:"flowchart TD\n    %%{init: {'flowchart' : {'curve' : 'stepAfter'}}}%%\n    RAIZ[Servidores DNS Raiz]\n\n    COM[Servidores DNS .com]\n    ORG[Servidores DNS .org]\n    EDU[Servidores DNS .edu]\n\n    FACEBOOK[Servidores DNS facebook.com]\n    AMAZON[Servidores DNS amazon.com]\n    PBS[Servidores DNS pbs.org]\n    NYU[Servidores DNS nyu.edu]\n    UMASS[Servidores DNS umass.edu]\n\n    RAIZ --\x3e COM\n    RAIZ --\x3e ORG\n    RAIZ --\x3e EDU\n\n    COM --\x3e FACEBOOK\n    COM --\x3e AMAZON\n\n    ORG --\x3e PBS\n\n    EDU --\x3e NYU\n    EDU --\x3e UMASS\n\n"}),(0,t.kt)("p",null,"(Imagem adaptada de KUROSE,2021)."),(0,t.kt)("p",null,"O v\xeddeo abaixo (em ingl\xeas) apresenta um resumo do funcionamento dos servidores DNS."),(0,t.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/27r4Bzuj5NQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,t.kt)("h2",{id:"registro-de-dom\xednios"},"Registro de dom\xednios"),(0,t.kt)("p",null,"No Brasil, a entidade respons\xe1vel pelo registro de dom\xednios \xe9 o ",(0,t.kt)("a",{parentName:"p",href:"https://registro.br"},"Registro.br"),". Nele, \xe9 poss\xedvel verificar os dom\xednios est\xe3o dispon\xedveis, e tamb\xe9m, registrar dom\xednios."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Atividade")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Entre no Registro.br e procure um por um dom\xednio de sua escolha.")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Atividade")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"O qu\xea ocorre se um m\xe1quina que estiver conectada \xe0 internet n\xe3o tiver um servidor DNS configurado?"),(0,t.kt)("li",{parentName:"ul"},"H\xe1 diferen\xe7as entre utilizar diferentes servidores DNS? O qu\xea poderia ocorrer com a navega\xe7\xe3o se o servidor DNS configurado para uso estiver lento?")),(0,t.kt)("h2",{id:"refer\xeancias"},"Refer\xeancias"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://plataforma.bvirtual.com.br/Leitor/Publicacao/3843/pdf/0"},"KUROSE, Jim; ROSS, Keith W. Redes de computadores e a internet: uma abordagem top-down. 6.ed. S\xe3o Paulo: Pearson, 2013. ISBN 9788581436777.")," (Link biblioteca online)  "),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://plataforma.bvirtual.com.br/Leitor/Publicacao/787/epub/0"},"NEMETH, Evi; SNIDER, Garth; HEIN, Trent R. Manual Completo de Linux: guia do administrador. 2.ed. S\xe3o Paulo: Prentice Hall, 2007. 704 p. ISBN 978-85-7605-112-1")," (Link biblioteca online)  "),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://plataforma.bvirtual.com.br/Leitor/Publicacao/2610/pdf/0"},"TANENBAUM, Andrew S; WETHERAL, David. Redes de Computadores. 5.ed. S\xe3o Paulo: Pearson, 2011. ISBN 9788576059240."),"(Link biblioteca online)"))}N.isMDXComponent=!0}}]);