"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6141],{4852:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(9231);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(a),m=r,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6036:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(9231),r=a(9841);const o="tabItem_N5HX";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:a},t)}},1227:(e,t,a)=>{a.d(t,{Z:()=>C});var n=a(1504),r=a(9231),o=a(9841),s=a(4618),i=a(9409),c=a(6100),l=a(7647),u=a(7688);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[c,l]=h({queryString:a,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),b=(()=>{const e=c??p;return m({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),l(e),f(e)}),[l,f,o]),tabValues:o}}var b=a(9776);const v="tabList_O0ei",g="tabItem_dekm";function y(e){let{className:t,block:a,selectedValue:i,selectValue:c,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=l[a].value;n!==i&&(p(t),c(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},l.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},s,{className:(0,o.Z)("tabs__item",g,s?.className,{"tabs__item--active":i===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",v)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(k,(0,n.Z)({},e,t)))}function C(e){const t=(0,b.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},7389:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(1504),r=(a(9231),a(4852)),o=a(1227),s=a(6036);const i={},c="Creating Composites",l={unversionedId:"guides/creating-composites/overview",id:"version-0.2.x/guides/creating-composites/overview",title:"Creating Composites",description:"Composites are the abstraction ComposeDB tools and client use to represent and manipulate data models used by applications.",source:"@site/versioned_docs/version-0.2.x/guides/creating-composites/overview.mdx",sourceDirName:"guides/creating-composites",slug:"/guides/creating-composites/overview",permalink:"/docs/0.2.x/guides/creating-composites/overview",draft:!1,tags:[],version:"0.2.x",frontMatter:{},sidebar:"docs",previous:{title:"Composites customization",permalink:"/docs/0.2.x/guides/using-composites/customization"},next:{title:"Schema definition",permalink:"/docs/0.2.x/guides/creating-composites/schema"}},u={},p=[{value:"Composite schema",id:"composite-schema",level:2},{value:"Converting a schema to a composite",id:"converting-a-schema-to-a-composite",level:2}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-composites"},"Creating Composites"),(0,r.kt)("p",null,"Composites are the abstraction ComposeDB tools and client use to represent and manipulate data models used by applications."),(0,r.kt)("p",null,"In order to create new composites, especially to create new models that do not already exist on the Ceramic network, a high-level schema can be used as an abstraction for the composite structure."),(0,r.kt)("h2",{id:"composite-schema"},"Composite schema"),(0,r.kt)("p",null,"The recommended way to create composites including new models is to use a schema file based on GraphQL, described in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.2.x/guides/creating-composites/schema"},"dedicated documentation page"),"."),(0,r.kt)("h2",{id:"converting-a-schema-to-a-composite"},"Converting a schema to a composite"),(0,r.kt)("p",null,"After a schema file has been created, it must be converted to a composite to be usable by the other tools and client."),(0,r.kt)(o.Z,{defaultValue:"api",groupId:"api-or-cli",values:[{label:"Using the CLI",value:"cli"},{label:"Using the API",value:"api"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"api",mdxType:"TabItem"},(0,r.kt)("p",null,"Make sure you have the ",(0,r.kt)("inlineCode",{parentName:"p"},"composedb")," packages ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.2.x/installation"},"installed"),", before running the code below."),(0,r.kt)("p",null,"In order to create a Composite using the API, you also need to have an authenticated DID instance. You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"did-session")," package from ",(0,r.kt)("inlineCode",{parentName:"p"},"js-did")," to achieve this: ",(0,r.kt)("a",{parentName:"p",href:"https://did.js.org/docs/api/classes/did_session.DIDSession#did"},"DIDSession.DID Documentation")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { CeramicClient } from '@ceramicnetwork/http-client'\nimport { createComposite, writeEncodedComposite } from '@composedb/devtools-node'\n\n// Replace by the URL of the Ceramic node you want to deploy the models to\nconst ceramic = new CeramicClient('http://localhost:7007')\n\nceramic.setDID(<Authenticated DID instance>)\n\n// Replace by the path to the source schema file\nconst composite = await createComposite(ceramic, 'source-schema.graphql')\n\n// Replace by the path to the encoded composite file\nawait writeEncodedComposite(composite, 'my-composite.json')\n")),(0,r.kt)("p",null,"More details: ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.2.x/api/modules/devtools_node#createcomposite"},(0,r.kt)("inlineCode",{parentName:"a"},"createComposite")),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.2.x/api/modules/devtools_node#writeencodedcomposite"},(0,r.kt)("inlineCode",{parentName:"a"},"writeEncodedComposite")))),(0,r.kt)(s.Z,{value:"cli",mdxType:"TabItem"},(0,r.kt)("p",null,"If you want to create a composite using the CLI, you need to pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"--did-private-key")," flag. More details: ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.2.x/api/commands/cli.did#composedb-didgenerate-private-key"},(0,r.kt)("inlineCode",{parentName:"a"},"did:generate-private-key CLI command"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"composedb composite:create source-schema.graphql --output=my-composite.json --did-private-key='<DID Private Key>' --ceramic-url=http://localhost:7007\n")))))}m.isMDXComponent=!0}}]);