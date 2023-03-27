"use strict";(self.webpackChunkalgoritmos=self.webpackChunkalgoritmos||[]).push([[9092],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(a),d=n,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return a?r.createElement(k,l(l({ref:t},p),{},{components:a})):r.createElement(k,l({ref:t},p))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(7294),n=a(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>y});var r=a(7462),n=a(7294),o=a(6010),l=a(2466),i=a(6550),s=a(1980),u=a(7392),p=a(12);function c(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=m(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,u]=k({queryString:a,groupId:r}),[c,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,p.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),h=(()=>{const e=s??c;return d({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var h=a(2389);const N={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),r=u[a].value;r!==i&&(c(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},l,{className:(0,o.Z)("tabs__item",N.tabItem,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function g(e){const t=f(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",N.tabList)},n.createElement(v,(0,r.Z)({},e,t)),n.createElement(b,(0,r.Z)({},e,t)))}function y(e){const t=(0,h.Z)();return n.createElement(g,(0,r.Z)({key:String(t)},e))}},4143:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));a(4866),a(5162);const o={sidebar_position:5},l="SSH",i={unversionedId:"Protocolos/Aplicacao/ssh",id:"Protocolos/Aplicacao/ssh",title:"SSH",description:"O ssh \xe9 o acr\xf4nimo de secure shell, uma vers\xe3o atualizada do rsh (remote shell), que criptografa os dados trafegados. Opera com a arquitetura cliente/servidor, tendo a porta 22 como padr\xe3o.",source:"@site/docs/03-Protocolos/01-Aplicacao/04-ssh.md",sourceDirName:"03-Protocolos/01-Aplicacao",slug:"/Protocolos/Aplicacao/ssh",permalink:"/redes/docs/Protocolos/Aplicacao/ssh",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-Protocolos/01-Aplicacao/04-ssh.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"DNS",permalink:"/redes/docs/Protocolos/Aplicacao/dns"},next:{title:"Exerc\xedcios",permalink:"/redes/docs/category/exerc\xedcios"}},s={},u=[{value:"scp",id:"scp",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ssh"},"SSH"),(0,n.kt)("p",null,"O ",(0,n.kt)("strong",{parentName:"p"},"ssh")," \xe9 o acr\xf4nimo de ",(0,n.kt)("em",{parentName:"p"},"secure shell"),", uma vers\xe3o atualizada do rsh (",(0,n.kt)("em",{parentName:"p"},"remote shell"),"), que criptografa os dados trafegados. Opera com a arquitetura cliente/servidor, tendo a porta 22 como padr\xe3o."),(0,n.kt)("p",null,"O ssh \xe9 uma ferramenta para acesso remoto, amplamente utilizado em ambientes Linux."),(0,n.kt)("p",null,"O ssh \xe9 extremamente cuidadoso em suas conex\xf5es. A primeira vez em uma m\xe1quina \xe9 acessada, o cliente ssh sempre pergunta ao usu\xe1rio se ele realmente conhece aquela m\xe1quina. Nesta primeira conex\xe3o, \xe9 necess\xe1rio digitar explicitamente que ",(0,n.kt)("strong",{parentName:"p"},"sim")," (ou ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"yes")),"), informando que conhecemos o servidor e temos certeza do IP que estamos acessando (ciente que n\xe3o estamos sofrendo um ataque do tipo ",(0,n.kt)("strong",{parentName:"p"},"MITM")," (",(0,n.kt)("em",{parentName:"p"},"Man In The Middle"),"), p.ex.). A lista com as m\xe1quinas j\xe1 conhecidas \xe9 armazenada no arquivo ",(0,n.kt)("inlineCode",{parentName:"p"},".ssh/known_hosts"),", na ",(0,n.kt)("em",{parentName:"p"},"home")," do usu\xe1rio."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Sintaxe"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"ssh <usuario>@<destino> <comando>\n")),(0,n.kt)("p",null,"onde:  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"<usuario>")," : nome de usu\xe1rio no servidor remoto. Caso omitido, utiliza o usu\xe1rio logado na m\xe1quina local.  ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"<destino>")," : endere\xe7o de destino")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"<comando>")," : comando a ser executado no servidor. Caso omitido, \xe9 aberto um terminal interativo.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"op\xe7\xf5es:  "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-p <porta>")," : especifica que a conex\xe3o deve ser realizada utilizando uma porta espec\xedfica.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Exemplos"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"ssh 192.168.0.10  \nssh aluno@10.1.1.50\nssh root@10.1.1.1 \nssh -p 2230 aluno@10.1.1.50\nssh aluno@10.1.1.20 ifconfig\nssh root@10.1.1.1 apt update\n")),(0,n.kt)("admonition",{title:"Cuidado",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Lembre-se que ap\xf3s logar com o ssh, os comandos ser\xe3o executados na m\xe1quina ",(0,n.kt)("strong",{parentName:"p"},"remota"),", e n\xe3o mais na m\xe1quina local. Por exemplo, executar o comando ",(0,n.kt)("inlineCode",{parentName:"p"},"poweroff"),", desligar\xe1 a m\xe1quina remota.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Atividade"),(0,n.kt)("br",{parentName:"p"}),"\n","Acesse o servidor apontado pelo professor, com os usu\xe1rios:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"aluno")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"root"),"  ")),(0,n.kt)("p",null,"Qual a diferen\xe7a?  "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Atividade")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Na m\xe1quina remota, execute os seguintes comandos:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"- `who`\n")),"Analise os resultados.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Atividade")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Execute em sua m\xe1quina o servidor SSH dentro de um ",(0,n.kt)("em",{parentName:"li"},"container"),":")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"docker pull darlon/ssh\ndocker run --rm -d --name ssh -p 2222:22  darlon/ssh\n")),(0,n.kt)("p",null,"Para fechar o servidor:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"docker stop ssh\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Em seguida, conecte a essa m\xe1quina.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"ssh -p 2222 <seu endere\xe7o ip>\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Atividade")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Conecte ao servidor SSH em uma outra m\xe1quina.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"ssh -p 2222 <endere\xe7o ip>\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Atividade"),"  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"qual \xe9 o endere\xe7o IP da m\xe1quina conectada remotamente?"),(0,n.kt)("li",{parentName:"ul"},"quanto de mem\xf3ria RAM possui a m\xe1quina remota?",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"free -h")))),(0,n.kt)("li",{parentName:"ul"},"quais s\xe3o os nomes dos arquivos existentes no diret\xf3rio ",(0,n.kt)("inlineCode",{parentName:"li"},"home")," do usu\xe1rio?")),(0,n.kt)("h2",{id:"scp"},"scp"),(0,n.kt)("p",null,"O ",(0,n.kt)("inlineCode",{parentName:"p"},"scp")," \xe9 um servi\xe7o que permite a c\xf3pia de arquivos e diret\xf3rios entre m\xe1quinas, utilizando o protocolo e servi\xe7o SSH."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Sintaxe"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"scp <arquivo/diret\xf3rio local> <usu\xe1rio>@<endere\xe7o>:<diret\xf3rio remoto onde ser\xe1 feita a c\xf3pia>\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Par\xe2metros"),"  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-r")," recursivo. Utilizado para c\xf3pia de diret\xf3rios."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-P <porta>")," porta. Caso o ",(0,n.kt)("inlineCode",{parentName:"li"},"ssh")," esteja operando em outra porta diferente da padr\xe3o (22), pode utilizar este par\xe2metro para informar a porta correta.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Exemplo"),"  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"C\xf3pia do arquivo ",(0,n.kt)("inlineCode",{parentName:"li"},"hello.txt"),", no diret\xf3rio em que o comando est\xe1 sendo executado na m\xe1quina local, para o diret\xf3rio ",(0,n.kt)("em",{parentName:"li"},"home")," do usu\xe1rio no servidor.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"scp hello.txt aluno@10.1.1.20:\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"C\xf3pia do arquivo ",(0,n.kt)("inlineCode",{parentName:"li"},"texto.txt"),", no diret\xf3rio ",(0,n.kt)("inlineCode",{parentName:"li"},"/tmp/")," do usu\xe1rio na m\xe1quina local, para o diret\xf3rio ",(0,n.kt)("inlineCode",{parentName:"li"},"/tmp")," do usu\xe1rio no servidor.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"scp /tmp/texto.txt aluno@10.1.1.20:/tmp/\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Observa\xe7\xe3o"),(0,n.kt)("br",{parentName:"p"}),"\n","Para a c\xf3pia de diret\xf3rios, \xe9 necess\xe1rio utilizar o par\xe2metro ",(0,n.kt)("inlineCode",{parentName:"p"},"-r")," (",(0,n.kt)("em",{parentName:"p"},"recursive"),")."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Atividade")),(0,n.kt)("p",null,"Para esta atividade, utilize servidor e endere\xe7o IP informado pelo professor."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Qual \xe9 o conte\xfado do arquivo ",(0,n.kt)("inlineCode",{parentName:"li"},"campus.jpg"),", que est\xe1 no servidor?"),(0,n.kt)("li",{parentName:"ul"},"Envie um arquivo do seu computador para o servidor."),(0,n.kt)("li",{parentName:"ul"},"Copie o diret\xf3rio ",(0,n.kt)("inlineCode",{parentName:"li"},"trabalhos")," para o seu computador.")))}m.isMDXComponent=!0}}]);