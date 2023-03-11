"use strict";(self.webpackChunkalgoritmos=self.webpackChunkalgoritmos||[]).push([[8845],{3905:(e,a,o)=>{o.d(a,{Zo:()=>m,kt:()=>k});var r=o(7294);function t(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function n(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?n(Object(o),!0).forEach((function(a){t(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function i(e,a){if(null==e)return{};var o,r,t=function(e,a){if(null==e)return{};var o,r,t={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],a.indexOf(o)>=0||(t[o]=e[o]);return t}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var l=r.createContext({}),p=function(e){var a=r.useContext(l),o=a;return e&&(o="function"==typeof e?e(a):s(s({},a),e)),o},m=function(e){var a=p(e.components);return r.createElement(l.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},c=r.forwardRef((function(e,a){var o=e.components,t=e.mdxType,n=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(o),c=t,k=u["".concat(l,".").concat(c)]||u[c]||d[c]||n;return o?r.createElement(k,s(s({ref:a},m),{},{components:o})):r.createElement(k,s({ref:a},m))}));function k(e,a){var o=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var n=o.length,s=new Array(n);s[0]=c;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[u]="string"==typeof e?e:t,s[1]=i;for(var p=2;p<n;p++)s[p]=o[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}c.displayName="MDXCreateElement"},2688:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var r=o(7462),t=(o(7294),o(3905));const n={sidebar_position:4},s="Tipos primitivos de dados",i={unversionedId:"Basicos/Tipos_primitivos_de_dados",id:"Basicos/Tipos_primitivos_de_dados",title:"Tipos primitivos de dados",description:"Os dados compreendem a mat\xe9ria-prima b\xe1sica a execu\xe7\xe3o dos sistemas computacionais. Com eles podemos process\xe1-los, transform\xe1los, armazen\xe1-los e apresent\xe1-los, ou seja, as tarefas que um computador \xe9 capaz de realizar.",source:"@site/docs/02-Basicos/04-Tipos_primitivos_de_dados.md",sourceDirName:"02-Basicos",slug:"/Basicos/Tipos_primitivos_de_dados",permalink:"/redes/docs/Basicos/Tipos_primitivos_de_dados",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-Basicos/04-Tipos_primitivos_de_dados.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Elementos b\xe1sicos",permalink:"/redes/docs/category/elementos-b\xe1sicos"},next:{title:"Constantes e Vari\xe1veis",permalink:"/redes/docs/Basicos/Variaveis"}},l={},p=[{value:"Inteiro",id:"inteiro",level:2},{value:"Real",id:"real",level:2},{value:"Caractere",id:"caractere",level:2},{value:"L\xf3gico",id:"l\xf3gico",level:2},{value:"Refer\xeancias",id:"refer\xeancias",level:2}],m={toc:p},u="wrapper";function d(e){let{components:a,...o}=e;return(0,t.kt)(u,(0,r.Z)({},m,o,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"tipos-primitivos-de-dados"},"Tipos primitivos de dados"),(0,t.kt)("p",null,"Os dados compreendem a mat\xe9ria-prima b\xe1sica a execu\xe7\xe3o dos sistemas computacionais. Com eles podemos process\xe1-los, transform\xe1los, armazen\xe1-los e apresent\xe1-los, ou seja, as tarefas que um computador \xe9 capaz de realizar."),(0,t.kt)("p",null,"\xc9 necess\xe1rio observar a diferen\xe7a entre ",(0,t.kt)("strong",{parentName:"p"},"dado")," e ",(0,t.kt)("strong",{parentName:"p"},"informa\xe7\xe3o"),". Uma informa\xe7\xe3o \xe9 um dado com valor. Por exemplo quando observamos a data 19 de abril, temos um dado. Ao sabermos que este \xe9 o dia do \xedndio, temos uma informa\xe7\xe3o."),(0,t.kt)("h2",{id:"inteiro"},"Inteiro"),(0,t.kt)("p",null,"Um ",(0,t.kt)("strong",{parentName:"p"},"inteiro")," \xe9 uma informa\xe7\xe3o num\xe9rica, que compreende valores que correspondem ao conjunto dos n\xfameros inteiros (positivos, nulo e negativos)"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Exemplo"),"  "),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"O Campus possui 4 constru\xe7\xf5es;"),(0,t.kt)("li",{parentName:"ul"},"Est\xe3o construindo 22 casas novas no bairro vizinho;"),(0,t.kt)("li",{parentName:"ul"},"O cachorro tem 8 anos de idade.")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Observa\xe7\xe3o"),(0,t.kt)("br",{parentName:"p"}),"\n","Nas linguagens de programa\xe7\xe3o, \xe9 comum observarmos o tipo inteiro como ",(0,t.kt)("strong",{parentName:"p"},"int"),"."),(0,t.kt)("h2",{id:"real"},"Real"),(0,t.kt)("p",null,"O tipo de dado ",(0,t.kt)("strong",{parentName:"p"},"real")," \xe9 aquele que possui um valor que est\xe1 compreendido no conjunto dos n\xfameros reais. S\xe3o abordados os n\xfameros negativos, positivos e nulo, considerando as casas decimais."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Exemplo"),"  "),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"A dist\xe2ncia do port\xe3o at\xe9 a sala \xe9 de 25,7 metros."),(0,t.kt)("li",{parentName:"ul"},"O saldo banc\xe1rio \xe9 de R\\$ 357,32."),(0,t.kt)("li",{parentName:"ul"},"O saldo banc\xe1rio \xe9 de R\\$ -169,20.")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Observa\xe7\xe3o"),(0,t.kt)("br",{parentName:"p"}),"\n","Nas linguagens de programa\xe7\xe3o, \xe9 comum observarmos o tipo real como ",(0,t.kt)("strong",{parentName:"p"},"float")," ou ",(0,t.kt)("strong",{parentName:"p"},"double"),"."),(0,t.kt)("h2",{id:"caractere"},"Caractere"),(0,t.kt)("p",null,"Os dado do tipo ",(0,t.kt)("strong",{parentName:"p"},"caractere")," s\xe3o aqueles que pertencem ao conjunto de valores alfanum\xe9ricos (0-9), alfab\xe9ticos (a-z, A-Z) e especiais (","!","\\@","#","\\$\\%","*","+-/, dentre outros)."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Exemplo"),"  "),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},'O professor disse: "N\xe3o use o celular durante a aula!".'),(0,t.kt)("li",{parentName:"ul"},'Ao final do jornal, ele sempre fala "Boa noite".'),(0,t.kt)("li",{parentName:"ul"},'O nome do presidente do clube \xe9 "Celso da Silva".')),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Observa\xe7\xe3o"),(0,t.kt)("br",{parentName:"p"}),"\n","Nas linguagens de programa\xe7\xe3o, \xe9 comum observarmos o tipo caractere como ",(0,t.kt)("strong",{parentName:"p"},"string")," (ou str)."),(0,t.kt)("h2",{id:"l\xf3gico"},"L\xf3gico"),(0,t.kt)("p",null,"Um dado do tipo ",(0,t.kt)("strong",{parentName:"p"},"l\xf3gico")," \xe9 aquele em que dois valores podem ser asssumidos: verdadeiro ou falso."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Exemplo"),"  "),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"A janela est\xe1 aberta."),(0,t.kt)("li",{parentName:"ul"},"O carro est\xe1 ligado."),(0,t.kt)("li",{parentName:"ul"},"A bicicleta est\xe1 parada.")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Observa\xe7\xe3o"),(0,t.kt)("br",{parentName:"p"}),"\n","Nas linguagens de programa\xe7\xe3o, \xe9 comum observarmos o tipo l\xf3gico como ",(0,t.kt)("strong",{parentName:"p"},"bool")," (ou boolean)."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Exerc\xedcios"),(0,t.kt)("br",{parentName:"p"}),"\n","Observe qual \xe9 o tipo de dado em cada situa\xe7\xe3o (",(0,t.kt)("a",{parentName:"p",href:"https://plataforma.bvirtual.com.br/Leitor/Publicacao/200078/pdf/44"},"FORBELLONE, pg. 20"),"):"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},'A placa "Pare!" tinha 2 furos de bala.')),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Josefina subiu 5 degraus para pegar uma ma\xe7\xe3 boa.")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Alberta levou 3,5 horas para chegar ao hospital.")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},'Astrogilda mandou pintar em um lote de 10 camisetas: "Preserve o meio ambiente", e ficou devendo R\\$ 150,00 para a estamparia Pinte e Borde a ser pago em 3 parcelas.')),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Felisberto recebeu sua 18\xaa medalha por ter alcan\xe7ado a marca de 578,3 segundos nos 100 metros rasos."))),(0,t.kt)("h2",{id:"refer\xeancias"},"Refer\xeancias"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://plataforma.bvirtual.com.br/Leitor/Publicacao/200078/pdf"},"FORBELLONE, Andr\xe9 Luiz Villar; EBERSP\xc4TCHER, Henri Frederico. L\xf3gica de programa\xe7\xe3o: A constru\xe7\xe3o de algoritmoss e estruturas de dados com aplica\xe7\xf5es em Python. 4.ed. S\xe3o Paulo: Pearson; Porto Alegre: Bookman, 2022"))))}d.isMDXComponent=!0}}]);