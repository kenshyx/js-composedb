"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2248],{4852:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>d});var n=o(9231);function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){s(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,s=function(e,t){if(null==e)return{};var o,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(s[o]=e[o]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(o),d=s,g=u["".concat(l,".").concat(d)]||u[d]||p[d]||r;return o?n.createElement(g,a(a({ref:t},m),{},{components:o})):n.createElement(g,a({ref:t},m))}));function d(e,t){var o=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=o.length,a=new Array(r);a[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var c=2;c<r;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},4165:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(9231),s=o(9841);const r="tabItem_AZVv";function a(e){let{children:t,hidden:o,className:a}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(r,a),hidden:o},t)}},4957:(e,t,o)=>{o.d(t,{Z:()=>d});var n=o(4011),s=o(9231),r=o(9841),a=o(6289),i=o(4677),l=o(249),c=o(196);const m="tabList_yWYM",p="tabItem_DJsW";function u(e){var t,o;const{lazy:a,block:u,defaultValue:d,values:g,groupId:v,className:f}=e,b=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=g?g:b.map((e=>{let{props:{value:t,label:o,attributes:n}}=e;return{value:t,label:o,attributes:n}})),y=(0,i.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const C=null===d?d:null!=(t=null!=d?d:null==(o=b.find((e=>e.props.default)))?void 0:o.props.value)?t:b[0].props.value;if(null!==C&&!h.some((e=>e.value===C)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+C+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:k}=(0,l.U)(),[E,j]=(0,s.useState)(C),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=v){const e=w[v];null!=e&&e!==E&&h.some((t=>t.value===e))&&j(e)}const O=e=>{const t=e.currentTarget,o=x.indexOf(t),n=h[o].value;n!==E&&(T(t),j(n),null!=v&&k(v,String(n)))},N=e=>{var t;let o=null;switch(e.key){case"ArrowRight":{var n;const t=x.indexOf(e.currentTarget)+1;o=null!=(n=x[t])?n:x[0];break}case"ArrowLeft":{var s;const t=x.indexOf(e.currentTarget)-1;o=null!=(s=x[t])?s:x[x.length-1];break}}null==(t=o)||t.focus()};return s.createElement("div",{className:(0,r.Z)("tabs-container",m)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":u},f)},h.map((e=>{let{value:t,label:o,attributes:a}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>x.push(e),onKeyDown:N,onFocus:O,onClick:O},a,{className:(0,r.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":E===t})}),null!=o?o:t)}))),a?(0,s.cloneElement)(b.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function d(e){const t=(0,a.Z)();return s.createElement(u,(0,n.Z)({key:String(t)},e))}},3123:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=o(4011),s=(o(9231),o(4852)),r=o(4957),a=o(4165);const i={},l="Composites customization",c={unversionedId:"guides/using-composites/customization",id:"version-0.2.x/guides/using-composites/customization",title:"Composites customization",description:"Merging composites",source:"@site/versioned_docs/version-0.2.x/guides/using-composites/customization.mdx",sourceDirName:"guides/using-composites",slug:"/guides/using-composites/customization",permalink:"/docs/0.2.x/guides/using-composites/customization",draft:!1,tags:[],version:"0.2.x",frontMatter:{},sidebar:"docs",previous:{title:"Composites deployment",permalink:"/docs/0.2.x/guides/using-composites/deployment"},next:{title:"Creating Composites",permalink:"/docs/0.2.x/guides/creating-composites/overview"}},m={},p=[{value:"Merging composites",id:"merging-composites",level:2},{value:"Extracting models",id:"extracting-models",level:2},{value:"Aliasing Models",id:"aliasing-models",level:2}],u={toc:p};function d(e){let{components:t,...o}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"composites-customization"},"Composites customization"),(0,s.kt)("h2",{id:"merging-composites"},"Merging composites"),(0,s.kt)("p",null,"Multiple composites can be merged together into a single composite including all the models from the source composites."),(0,s.kt)(r.Z,{defaultValue:"api",groupId:"api-or-cli",values:[{label:"Using the CLI",value:"cli"},{label:"Using the API",value:"api"}],mdxType:"Tabs"},(0,s.kt)(a.Z,{value:"api",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { CeramicClient } from '@ceramicnetwork/http-client'\nimport { Composite } from '@composedb/devtools'\nimport { readEncodedComposite, writeEncodedComposite } from '@composedb/devtools-node'\n\nconst ceramic = new CeramicClient('http://localhost:7007')\n\nconst loadSources = [\n  'src/first-composite.json',\n  'src/second-composite.json',\n  'src/third-composite.json',\n].map(async (path) => await readEncodedComposite(ceramic, path))\nconst sourceComposites = await Promise.all(loadSources)\nconst mergedComposite = Composite.from(sourceComposites)\n\nawait writeEncodedComposite(mergedComposite, 'merged-composite.json')\n"))),(0,s.kt)(a.Z,{value:"cli",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"composedb composite:merge src/first-composite.json src/second-composite.json src/third-composite.json --output=merged-composite.json\n")))),(0,s.kt)("h2",{id:"extracting-models"},"Extracting models"),(0,s.kt)("p",null,"Composites can contain more models than useful to a given app. To avoid using unnecessary models, it is possible to extract only the wanted models from a given composite, to create a new composite."),(0,s.kt)(r.Z,{defaultValue:"api",groupId:"api-or-cli",values:[{label:"Using the CLI",value:"cli"},{label:"Using the API",value:"api"}],mdxType:"Tabs"},(0,s.kt)(a.Z,{value:"api",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { CeramicClient } from '@ceramicnetwork/http-client'\nimport { Composite } from '@composedb/devtools'\nimport { readEncodedComposite, writeEncodedComposite } from '@composedb/devtools-node'\n\nconst ceramic = new CeramicClient('http://localhost:7007')\nconst sourceComposite = await readEncodedComposite(ceramic, 'source-composite.json')\n\nconst newComposite = sourceComposite.copy(['modelID1', 'modelID2'])\nawait writeEncodedComposite(mergedComposite, 'new-composite.json')\n"))),(0,s.kt)(a.Z,{value:"cli",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"composedb composite:from-model source-composite.json modelID1 modelID2 --output=new-composite.json\n")))),(0,s.kt)("h2",{id:"aliasing-models"},"Aliasing Models"),(0,s.kt)("p",null,"Models can be aliases in a given composite, so that the GraphQL Schema uses the provided names instead of the ones defined in the model definition."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { CeramicClient } from '@ceramicnetwork/http-client'\nimport { Composite } from '@composedb/devtools'\nimport { readEncodedComposite, writeEncodedComposite } from '@composedb/devtools-node'\n\nconst sourceComposite = await readEncodedComposite(ceramic, 'source-composite.json')\n\nconst newComposite = sourceComposite.setAliases({\n  'kjz...123': 'SomeName',\n  'kjz...456': 'SomeOtherName',\n})\nawait writeEncodedComposite(newComposite, 'new-composite.json')\n")))}d.isMDXComponent=!0}}]);