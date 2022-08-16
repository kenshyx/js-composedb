"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3236],{4852:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(9231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(f,l(l({ref:t},u),{},{components:n})):o.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4165:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(9231),r=n(9841);const a="tabItem_AZVv";function l(e){let{children:t,hidden:n,className:l}=e;return o.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,l),hidden:n},t)}},4957:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(4011),r=n(9231),a=n(9841),l=n(6289),i=n(4677),s=n(249),c=n(196);const u="tabList_yWYM",d="tabItem_DJsW";function p(e){var t,n;const{lazy:l,block:p,defaultValue:m,values:f,groupId:b,className:h}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:y.map((e=>{let{props:{value:t,label:n,attributes:o}}=e;return{value:t,label:n,attributes:o}})),v=(0,i.l)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===m?m:null!=(t=null!=m?m:null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)?t:y[0].props.value;if(null!==k&&!g.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:C}=(0,s.U)(),[x,O]=(0,r.useState)(k),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=b){const e=w[b];null!=e&&e!==x&&g.some((t=>t.value===e))&&O(e)}const j=e=>{const t=e.currentTarget,n=T.indexOf(t),o=g[n].value;o!==x&&(E(t),O(o),null!=b&&C(b,String(o)))},N=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var o;const t=T.indexOf(e.currentTarget)+1;n=null!=(o=T[t])?o:T[0];break}case"ArrowLeft":{var r;const t=T.indexOf(e.currentTarget)-1;n=null!=(r=T[t])?r:T[T.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":p},h)},g.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>T.push(e),onKeyDown:N,onFocus:j,onClick:j},l,{className:(0,a.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(y.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,l.Z)();return r.createElement(p,(0,o.Z)({key:String(t)},e))}},9007:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=n(4011),r=(n(9231),n(4852)),a=n(4957),l=n(4165);const i={},s="Composites deployment",c={unversionedId:"guides/using-composites/deployment",id:"version-0.2.x/guides/using-composites/deployment",title:"Composites deployment",description:"Valid composites can be deployed to any supporting Ceramic node, by ensuring the model streams described in the composite are available on the node, and that the node is configured to index theses models.",source:"@site/versioned_docs/version-0.2.x/guides/using-composites/deployment.mdx",sourceDirName:"guides/using-composites",slug:"/guides/using-composites/deployment",permalink:"/docs/0.2.x/guides/using-composites/deployment",draft:!1,tags:[],version:"0.2.x",frontMatter:{},sidebar:"docs",previous:{title:"Composites discovery",permalink:"/docs/0.2.x/guides/using-composites/discovery"},next:{title:"Composites customization",permalink:"/docs/0.2.x/guides/using-composites/customization"}},u={},d=[{value:"Models deployment",id:"models-deployment",level:2},{value:"Ceramic node configuration",id:"ceramic-node-configuration",level:2}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"composites-deployment"},"Composites deployment"),(0,r.kt)("p",null,"Valid composites can be deployed to any supporting Ceramic node, by ensuring the model streams described in the composite are available on the node, and that the node is configured to index theses models."),(0,r.kt)("h2",{id:"models-deployment"},"Models deployment"),(0,r.kt)(a.Z,{defaultValue:"api",groupId:"api-or-cli",values:[{label:"Using the CLI",value:"cli"},{label:"Using the API",value:"api"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"api",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { CeramicClient } from '@ceramicnetwork/http-client'\nimport { readEncodedComposite } from '@composedb/devtools-node'\n\n// Replace by the URL of the Ceramic node you want to deploy the models to\nconst ceramic = new CeramicClient('http://localhost:7007')\n\n// Replace by the path to the local encoded composite file\nconst composite = await readEncodedComposite(ceramic, 'my-composite.json')\n\nconsole.log('Model IDs to set in configuration:', composite.modelIDs)\n"))),(0,r.kt)(l.Z,{value:"cli",mdxType:"TabItem"},(0,r.kt)("p",null,"First, we need to ensure the model streams are available on the target Ceramic node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"composedb composite:deploy my-composite.json --ceramic-url=http://localhost:7007\n")),(0,r.kt)("p",null,"Then, we need to get the list of models that need to be set for indexing in the Ceramic node configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"composedb composite:models my-composite.json\n")))),(0,r.kt)("h2",{id:"ceramic-node-configuration"},"Ceramic node configuration"),(0,r.kt)("p",null,"The local Ceramic node then needs to be configured to index documents using the models listed in the previous step."),(0,r.kt)("p",null,"This can be done by editing Ceramic's config file, which defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.ceramic/daemon.config.json")," on Linux, macOS and WSL (Windows Subsystem for Linux), adding the necessary model stream IDs to the ",(0,r.kt)("inlineCode",{parentName:"p"},"indexing.models")," array:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "indexing": {\n    ...\n    "models": ["..."]\n  }\n}\n')))}m.isMDXComponent=!0}}]);