"use strict";(self.webpackChunkalgoritmos=self.webpackChunkalgoritmos||[]).push([[6292],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=i(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(7294),a=r(6010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:r,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,s),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(7462),a=r(7294),o=r(6010),s=r(2466),l=r(6550),c=r(1980),i=r(7392),u=r(12);function d(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=p(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[c,i]=f({queryString:r,groupId:n}),[d,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),v=(()=>{const e=c??d;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),i(e),h(e)}),[i,h,o]),tabValues:o}}var v=r(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:r,selectedValue:l,selectValue:c,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,r=u.indexOf(t),n=i[r].value;n!==l&&(d(t),c(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},i.map((e=>{let{value:t,label:r,attributes:s}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},s,{className:(0,o.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":l===t})}),r??t)})))}function T(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function g(e){const t=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},a.createElement(k,(0,n.Z)({},e,t)),a.createElement(T,(0,n.Z)({},e,t)))}function y(e){const t=(0,v.Z)();return a.createElement(g,(0,n.Z)({key:String(t)},e))}},1294:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=r(7462),a=(r(7294),r(3905)),o=r(4866),s=r(5162);const l={sidebar_position:3},c="HTTP Server",i={unversionedId:"Protocolos/Aplicacao/http_server",id:"Protocolos/Aplicacao/http_server",title:"HTTP Server",description:"HTTP com sockets",source:"@site/docs/03-Protocolos/01-Aplicacao/02-http_server.md",sourceDirName:"03-Protocolos/01-Aplicacao",slug:"/Protocolos/Aplicacao/http_server",permalink:"/redes/docs/Protocolos/Aplicacao/http_server",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-Protocolos/01-Aplicacao/02-http_server.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"HTTP",permalink:"/redes/docs/Protocolos/Aplicacao/http"},next:{title:"DNS",permalink:"/redes/docs/Protocolos/Aplicacao/dns"}},u={},d=[{value:"HTTP com sockets",id:"http-com-sockets",level:2},{value:"HTTP com sockets e threads",id:"http-com-sockets-e-threads",level:2}],p={toc:d},m="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"http-server"},"HTTP Server"),(0,a.kt)("h2",{id:"http-com-sockets"},"HTTP com sockets"),(0,a.kt)("p",null,"Podemos implementar um servidor HTTP simples utilizando sockets."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"servidor",label:"Servidor",mdxType:"TabItem"},(0,a.kt)("p",null,"  C\xf3digo ",(0,a.kt)("inlineCode",{parentName:"p"},"server_http.py"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"#Bibliotecas\nimport socket\nfrom datetime import datetime\n\n#Porta do servidor\nport = 8084\n\ndef get_http_response(addr):\n\n    now = datetime.now().strftime('%a, %d %b %Y %H:%M:%S GMT-3')\n    \n    #Mensagem que o servidor envia\n    http_response = f'''\nHTTP/1.0 200 OK\nDate: {now}\nServer: AulaRedes/1.0\nContent-Type: text/HTML\n\n<html>\n    <h1>Aula De Redes de Computadores - IFPR Cascavel</h1>\n    IP   : {addr[0]}<br>\n    Porta: {addr[1]}<br>\n    {now}<br>\n</html>\n'''\n    \n    return http_response\n\ndef main():\n    #Objeto socket\n    serv  = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n\n    #Associa o socket a uma porta local\n    serv.bind(('0.0.0.0',port))\n    serv.listen()\n\n    #Servidor fica aguardando conex\xf5es\n    while True:\n        print(f'== Servidor aguardando conex\xf5es na porta {port} ==')\n\n        conn, addr = serv.accept()\n\n        #Prepara a resposta HTTP\n        http_response = get_http_response(addr)\n\n        #Envia uma mensagem\n        conn.send(http_response.encode())\n\n        #Fecha a conexao\n        conn.close()\n    \n    \nif __name__ == '__main__':\n    main()\n")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Execute o servidor")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python3 server_http.py\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Acesse o servidor utilizando um navegador ",(0,a.kt)("em",{parentName:"p"},"web")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://localhost:8084"},"http://localhost:8084")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Responda:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Quais s\xe3o as limita\xe7\xf5es deste servidor?")))),(0,a.kt)("h2",{id:"http-com-sockets-e-threads"},"HTTP com sockets e threads"),(0,a.kt)("p",null,'Para resolver o problema do acesso por diversos cliente ao "mesmo" tempo, podemos incrementar o servidor HTTP desenvolvido anteriormente utilizando ',(0,a.kt)("em",{parentName:"p"},"threads"),". Nesta abordagem, cada conex\xe3o \xe9 tratada separadamente."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"servidor",label:"Servidor",mdxType:"TabItem"},(0,a.kt)("p",null,"  C\xf3digo ",(0,a.kt)("inlineCode",{parentName:"p"},"server_http_threads.py"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"#Bibliotecas\nimport socket\nfrom datetime import datetime\nfrom threading import Thread\n\n#Porta do servidor\nport = 8084\n\ndef get_http_response(addr):\n\n    now = datetime.now().strftime('%a, %d %b %Y %H:%M:%S GMT-3')\n    \n    #Mensagem que o servidor envia\n    http_response = f'''\nHTTP/1.0 200 OK\nDate: {now}\nServer: AulaRedes/1.0\nContent-Type: text/HTML\n\n<html>\n    <h1>Aula De Redes de Computadores - IFPR Cascavel</h1>\n    <h2>Servidor Multithread</h2>\n    IP   : {addr[0]}<br>\n    Porta: {addr[1]}<br>\n    {now}<br>\n</html>\n'''\n    \n    return http_response\n\nclass ThreadServer(Thread):\n\n    def __init__ (self, addr, conn):\n        Thread.__init__(self)\n        self.addr = addr\n        self.conn = conn\n\n    def run(self):\n        #Recebe os dados\n        data = self.conn.recv(4096)\n\n        #Prepara a resposta HTTP e responde ao cliente\n        http_response = get_http_response(self.addr)\n        self.conn.send(http_response.encode())\n\n        #Fecha a conexao\n        self.conn.close()\n\n\n\ndef main():\n    #Objeto socket\n    serv  = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n\n    #Associa o socket a uma porta local\n    serv.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1) #Possibilita reusar portas\n    serv.bind(('0.0.0.0',port))\n    serv.listen()\n\n    #Servidor fica aguardando conex\xf5es. \n    #Quando receber uma conex\xe3o, repassa para um thread processar a conex\xe3o\n    while True:\n        conn, addr = serv.accept()\n        ThreadServer(addr,conn).start()\n\n\nif __name__ == '__main__':\n    main()\n")))))}f.isMDXComponent=!0}}]);