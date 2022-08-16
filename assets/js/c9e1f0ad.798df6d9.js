"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8003],{4852:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>d});var a=o(9231);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(o),d=n,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||r;return o?a.createElement(h,s(s({ref:t},u),{},{components:o})):a.createElement(h,s({ref:t},u))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<r;c++)s[c]=o[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},4165:(e,t,o)=>{o.d(t,{Z:()=>s});var a=o(9231),n=o(9841);const r="tabItem_AZVv";function s(e){let{children:t,hidden:o,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(r,s),hidden:o},t)}},4957:(e,t,o)=>{o.d(t,{Z:()=>d});var a=o(4011),n=o(9231),r=o(9841),s=o(6289),i=o(4677),l=o(249),c=o(196);const u="tabList_yWYM",p="tabItem_DJsW";function m(e){var t,o;const{lazy:s,block:m,defaultValue:d,values:h,groupId:v,className:b}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:f.map((e=>{let{props:{value:t,label:o,attributes:a}}=e;return{value:t,label:o,attributes:a}})),y=(0,i.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===d?d:null!=(t=null!=d?d:null==(o=f.find((e=>e.props.default)))?void 0:o.props.value)?t:f[0].props.value;if(null!==w&&!g.some((e=>e.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:C}=(0,l.U)(),[O,E]=(0,n.useState)(w),T=[],{blockElementScrollPositionUntilNextRender:x}=(0,c.o5)();if(null!=v){const e=k[v];null!=e&&e!==O&&g.some((t=>t.value===e))&&E(e)}const N=e=>{const t=e.currentTarget,o=T.indexOf(t),a=g[o].value;a!==O&&(x(t),E(a),null!=v&&C(v,String(a)))},j=e=>{var t;let o=null;switch(e.key){case"ArrowRight":{var a;const t=T.indexOf(e.currentTarget)+1;o=null!=(a=T[t])?a:T[0];break}case"ArrowLeft":{var n;const t=T.indexOf(e.currentTarget)-1;o=null!=(n=T[t])?n:T[T.length-1];break}}null==(t=o)||t.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},b)},g.map((e=>{let{value:t,label:o,attributes:s}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>T.push(e),onKeyDown:j,onFocus:N,onClick:N},s,{className:(0,r.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":O===t})}),null!=o?o:t)}))),s?(0,n.cloneElement)(f.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function d(e){const t=(0,s.Z)();return n.createElement(m,(0,a.Z)({key:String(t)},e))}},5157:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=o(4011),n=(o(9231),o(4852)),r=o(4957),s=o(4165);const i={},l="Creating Composites",c={unversionedId:"guides/creating-composites/overview",id:"guides/creating-composites/overview",title:"Creating Composites",description:"Composites are the abstraction ComposeDB tools and client use to represent and manipulate data models used by applications.",source:"@site/docs/guides/creating-composites/overview.mdx",sourceDirName:"guides/creating-composites",slug:"/guides/creating-composites/overview",permalink:"/docs/next/guides/creating-composites/overview",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Composites customization",permalink:"/docs/next/guides/using-composites/customization"},next:{title:"Schema definition",permalink:"/docs/next/guides/creating-composites/schema"}},u={},p=[{value:"Composite schema",id:"composite-schema",level:2},{value:"Converting a schema to a composite",id:"converting-a-schema-to-a-composite",level:2}],m={toc:p};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"creating-composites"},"Creating Composites"),(0,n.kt)("p",null,"Composites are the abstraction ComposeDB tools and client use to represent and manipulate data models used by applications."),(0,n.kt)("p",null,"In order to create new composites, especially to create new models that do not already exist on the Ceramic network, a high-level schema can be used as an abstraction for the composite structure."),(0,n.kt)("h2",{id:"composite-schema"},"Composite schema"),(0,n.kt)("p",null,"The recommended way to create composites including new models is to use a schema file based on GraphQL, described in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/guides/creating-composites/schema"},"dedicated documentation page"),"."),(0,n.kt)("h2",{id:"converting-a-schema-to-a-composite"},"Converting a schema to a composite"),(0,n.kt)("p",null,"After a schema file has been created, it must be converted to a composite to be usable by the other tools and client."),(0,n.kt)(r.Z,{defaultValue:"api",groupId:"api-or-cli",values:[{label:"Using the CLI",value:"cli"},{label:"Using the API",value:"api"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"api",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import { CeramicClient } from '@ceramicnetwork/http-client'\nimport { createComposite, writeEncodedComposite } from '@composedb/devtools-node'\n\n// Replace by the URL of the Ceramic node you want to deploy the models to\nconst ceramic = new CeramicClient('http://localhost:7007')\n\n// Replace by the path to the source schema file\nconst composite = await createComposite(ceramic, 'source-schema.graphql')\n\n// Replace by the path to the encoded composite file\nawait writeEncodedComposite(composite, 'my-composite.json')\n")),(0,n.kt)("p",null,"More details: ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/api/modules/devtools_node#createcomposite"},(0,n.kt)("inlineCode",{parentName:"a"},"createComposite")),", ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/api/modules/devtools_node#writeencodedcomposite"},(0,n.kt)("inlineCode",{parentName:"a"},"writeEncodedComposite")))),(0,n.kt)(s.Z,{value:"cli",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"composedb composite:create source-schema.graphql --output=my-composite.json --ceramic-url=http://localhost:7007\n")))))}d.isMDXComponent=!0}}]);