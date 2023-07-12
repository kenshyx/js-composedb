"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6286],{4852:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>h});var a=o(9231);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(o),u=n,h=p["".concat(l,".").concat(u)]||p[u]||d[u]||i;return o?a.createElement(h,r(r({ref:t},m),{},{components:o})):a.createElement(h,r({ref:t},m))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,r[1]=s;for(var c=2;c<i;c++)r[c]=o[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},1521:(e,t,o)=>{o.d(t,{Z:()=>r});var a=o(9231),n=o(9841);const i={tabItem:"tabItem_k2x5"};function r(e){let{children:t,hidden:o,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(i.tabItem,r),hidden:o},t)}},7638:(e,t,o)=>{o.d(t,{Z:()=>w});var a=o(644),n=o(9231),i=o(9841),r=o(2136),s=o(9409),l=o(2765),c=o(4361),m=o(9657);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:o,attributes:a,default:n}}=e;return{value:t,label:o,attributes:a,default:n}}))}function d(e){const{values:t,children:o}=e;return(0,n.useMemo)((()=>{const e=t??p(o);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,o])}function u(e){let{value:t,tabValues:o}=e;return o.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:o}=e;const a=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:o}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:t,groupId:o});return[(0,l._X)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function f(e){const{defaultValue:t,queryString:o=!1,groupId:a}=e,i=d(e),[r,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=o.find((e=>e.default))??o[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[l,c]=h({queryString:o,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,m.Nk)(o);return[a,(0,n.useCallback)((e=>{o&&i.set(e)}),[o,i])]}({groupId:a}),g=(()=>{const e=l??p;return u({value:e,tabValues:i})?e:null})();(0,n.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:r,selectValue:(0,n.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),f(e)}),[c,f,i]),tabValues:i}}var g=o(3582);const k={tabList:"tabList_HLTO",tabItem:"tabItem_ug2a"};function y(e){let{className:t,block:o,selectedValue:s,selectValue:l,tabValues:c}=e;const m=[],{blockElementScrollPositionUntilNextRender:p}=(0,r.o5)(),d=e=>{const t=e.currentTarget,o=m.indexOf(t),a=c[o].value;a!==s&&(p(t),l(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const o=m.indexOf(e.currentTarget)+1;t=m[o]??m[0];break}case"ArrowLeft":{const o=m.indexOf(e.currentTarget)-1;t=m[o]??m[m.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},t)},c.map((e=>{let{value:t,label:o,attributes:r}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>m.push(e),onKeyDown:u,onClick:d},r,{className:(0,i.Z)("tabs__item",k.tabItem,r?.className,{"tabs__item--active":s===t})}),o??t)})))}function v(e){let{lazy:t,children:o,selectedValue:a}=e;const i=(Array.isArray(o)?o:[o]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function b(e){const t=f(e);return n.createElement("div",{className:(0,i.Z)("tabs-container",k.tabList)},n.createElement(y,(0,a.Z)({},e,t)),n.createElement(v,(0,a.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return n.createElement(b,(0,a.Z)({key:String(t)},e))}},434:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=o(644),n=(o(9231),o(4852)),i=o(7638),r=o(1521);const s={},l="Composites",c={unversionedId:"guides/data-modeling/composites",id:"version-0.4.x/guides/data-modeling/composites",title:"Composites",description:"Guides for creating, deploying, and using composites.",source:"@site/versioned_docs/version-0.4.x/guides/data-modeling/composites.mdx",sourceDirName:"guides/data-modeling",slug:"/guides/data-modeling/composites",permalink:"/docs/0.4.x/guides/data-modeling/composites",draft:!1,tags:[],version:"0.4.x",frontMatter:{},sidebar:"guides",previous:{title:"Example: Container of Items",permalink:"/docs/0.4.x/guides/data-modeling/relations-combine-items"},next:{title:"ComposeDB Client",permalink:"/docs/0.4.x/guides/composedb-client/"}},m={},p=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Creating composites",id:"creating-composites",level:3},{value:"Deploying composites",id:"deploying-composites",level:3},{value:"Compiling composites",id:"compiling-composites",level:3},{value:"Advanced",id:"advanced",level:2},{value:"Merging composites",id:"merging-composites",level:3},{value:"Extracting composites",id:"extracting-composites",level:3},{value:"Inspecting composites",id:"inspecting-composites",level:3},{value:"Aliasing composites",id:"aliasing-composites",level:3},{value:"Next Steps",id:"next-steps",level:2},{value:"Related Guides",id:"related-guides",level:2}],d={toc:p},u="wrapper";function h(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"composites"},"Composites"),(0,n.kt)("p",null,"Guides for creating, deploying, and using composites."),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"In order to start using a model in your app, you\u2019ll have to include it in a composite. Composites are collections of one or more models and represent the complete GraphQL schema for your app. For basic usage, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create a composite containing one or more models"),(0,n.kt)("li",{parentName:"ol"},"Deploy the composite to your ComposeDB server"),(0,n.kt)("li",{parentName:"ol"},"Compile the composite for usage by your ComposeDB client")),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If you want to manage your composites from the CLI, you will need to have it installed"),(0,n.kt)("li",{parentName:"ul"},"If you want to manage your composites from JavaScript, you will need to install the\xa0",(0,n.kt)("a",{parentName:"li",href:"/docs/0.4.x/api/modules/devtools"},(0,n.kt)("inlineCode",{parentName:"a"},"@composedb/devtools")),"\xa0library"),(0,n.kt)("li",{parentName:"ul"},"One or more ",(0,n.kt)("inlineCode",{parentName:"li"},".graphql")," files containing your models")),(0,n.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"creating-composites"},"Creating composites"),(0,n.kt)("p",null,"Let\u2019s say you have a model written in a ",(0,n.kt)("inlineCode",{parentName:"p"},"my-schema.graphql")," file. To convert this schema into a composite, run the following:"),(0,n.kt)(i.Z,{defaultValue:"cli",groupId:"cli-or-js",values:[{label:"CLI",value:"cli"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"cli",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"composedb composite:create my-schema.graphql --output=my-composite.json --did-private-key=your-private-key\n"))),(0,n.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"import { CeramicClient } from '@ceramicnetwork/http-client'\nimport { DID } from 'dids'\nimport { Ed25519Provider } from 'key-did-provider-ed25519'\nimport { getResolver } from 'key-did-resolver'\nimport { fromString } from 'uint8arrays/from-string'\n\n// Import the devtool node package\nimport { createComposite, writeEncodedComposite } from '@composedb/devtools-node'\n\n// Hexadecimal-encoded private key for a DID having admin access to the target Ceramic node\n// Replace the example key here by your admin private key\nconst privateKey = fromString('b0cb[...]515f', 'base16')\n\nconst did = new DID({\n  resolver: getResolver(),\n  provider: new Ed25519Provider(privateKey),\n})\nawait did.authenticate()\n\n// Replace by the URL of the Ceramic node you want to deploy the Models to\nconst ceramic = new CeramicClient('http://localhost:7007')\n// An authenticated DID with admin access must be set on the Ceramic instance\nceramic.did = did\n\n// Replace by the path to the source schema file\nconst composite = await createComposite(ceramic, './source-schema.graphql')\n\n// Replace by the path to the encoded composite file\nawait writeEncodedComposite(composite, './my-composite.json')\n")))),(0,n.kt)("p",null,"This will create a file called ",(0,n.kt)("inlineCode",{parentName:"p"},"my-composite.json")," which contains the composite in JSON. "),(0,n.kt)("h3",{id:"deploying-composites"},"Deploying composites"),(0,n.kt)("p",null,"After creating the composite, deploy it to your local node: "),(0,n.kt)(i.Z,{defaultValue:"cli",groupId:"cli-or-js",values:[{label:"CLI",value:"cli"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"cli",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"composedb composite:deploy my-composite.json --ceramic-url=http://localhost:7007 --did-private-key=your-private-key\n"))),(0,n.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"import { CeramicClient } from '@ceramicnetwork/http-client'\nimport { DID } from 'dids'\nimport { Ed25519Provider } from 'key-did-provider-ed25519'\nimport { getResolver } from 'key-did-resolver'\nimport { fromString } from 'uint8arrays/from-string'\n\nimport { readEncodedComposite } from '@composedb/devtools-node'\n\n// Hexadecimal-encoded private key for a DID having admin access to the target Ceramic node\n// Replace the example key here by your admin private key\nconst privateKey = fromString('b0cb[...]515f', 'base16')\n\nconst did = new DID({\n  resolver: getResolver(),\n  provider: new Ed25519Provider(privateKey),\n})\nawait did.authenticate()\n\n// Replace by the URL of the Ceramic node you want to deploy the Models to\nconst ceramic = new CeramicClient('http://localhost:7007')\n// An authenticated DID with admin access must be set on the Ceramic instance\nceramic.did = did\n\n// Replace by the path to the local encoded composite file\nconst composite = await readEncodedComposite(ceramic, 'my-first-composite.json')\n\n// Notify the Ceramic node to index the models present in the composite\nawait composite.startIndexingOn(ceramic)\n")))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"This will also automatically add all models contained in the composite to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.4.x/guides/data-modeling/model-catalog"},"Model Catalog"),".")),(0,n.kt)("h3",{id:"compiling-composites"},"Compiling composites"),(0,n.kt)("p",null,"After deploying your composite, compile it so you can start perform ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.4.x/guides/data-interactions/"},"data interactions")," using the ComposeDB client."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"composedb composite:compile my-first-composite.json runtime-composite.json\n")),(0,n.kt)("h2",{id:"advanced"},"Advanced"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"merging-composites"},"Merging composites"),(0,n.kt)("p",null,"If you have more than one composite, you need to merge them into a single composite for use in your app. This may apply when:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You want to use multiple models from the ",(0,n.kt)("a",{parentName:"li",href:"/docs/0.4.x/guides/data-modeling/model-catalog#using-multiple-models"},"catalog")),(0,n.kt)("li",{parentName:"ul"},"You want to use a model from the catalog and one or more models you created"),(0,n.kt)("li",{parentName:"ul"},"You create multiple models and store their schemas in different GraphQL files")),(0,n.kt)("p",null,"Let\u2019s say you have two composites where ",(0,n.kt)("inlineCode",{parentName:"p"},"simple-profile-composite.json")," contains the model for a profile model and ",(0,n.kt)("inlineCode",{parentName:"p"},"post-composite.json")," contains the model for a post. To merge, reference both composite JSON files and specify an output file path for the merged composite. "),(0,n.kt)(i.Z,{defaultValue:"cli",groupId:"cli-or-js",values:[{label:"CLI",value:"cli"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"cli",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"composedb composite:merge simple-profile-composite.json post-composite.json --output=merged-composite.json\n"))),(0,n.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"import { CeramicClient } from '@ceramicnetwork/http-client'\nimport { Composite } from '@composedb/devtools'\nimport { readEncodedComposite, writeEncodedComposite } from '@composedb/devtools-node'\n\nconst ceramic = new CeramicClient('http://localhost:7007')\n\nconst loadSources = [\n  'simple-profile-composite.json',\n  'post-composite.json',\n].map(async (path) => await readEncodedComposite(ceramic, path))\nconst sourceComposites = await Promise.all(loadSources)\nconst mergedComposite = Composite.from(sourceComposites)\n\nawait writeEncodedComposite(mergedComposite, 'merged-composite.json')\n")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Note:"))," To run the code above, you need a Ceramic JS HTTP client library installed on your machine to connect your app to a Ceramic node. Ceramic JS HTTP client can be installed by running the following command:"),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"pnpm install @ceramicnetwork/http-client"))))),(0,n.kt)("p",null,"The output of either example is a new file named ",(0,n.kt)("inlineCode",{parentName:"p"},"merged-composite.json")," which contains the models of both merged composites. From here you need to ",(0,n.kt)("a",{parentName:"p",href:"#deploying-composites"},"deploy")," the composite to your node, then ",(0,n.kt)("a",{parentName:"p",href:"#compiling-composites"},"compile")," the composite to start using it. "),(0,n.kt)("h3",{id:"extracting-composites"},"Extracting composites"),(0,n.kt)("p",null,"In cases where your composite contain models not needed by your application, or in other cases where you generally want to separate models in your composite, you can extract models into a separate composite. "),(0,n.kt)("p",null,"As an example, let\u2019s reuse the ",(0,n.kt)("inlineCode",{parentName:"p"},"merged-composite.json")," file from the previous section and assume you want to extract the profile model into a separate composite. To do this, load the ",(0,n.kt)("inlineCode",{parentName:"p"},"merged-composite.json")," file and specify which model(s) you\u2019d like to extract into a new composite file."),(0,n.kt)(i.Z,{defaultValue:"cli",groupId:"cli-or-js",values:[{label:"CLI",value:"cli"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"cli",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"composedb composite:extract-model merged-composite.json kjzl6hvfrbw6c7keo17n66rxyo21nqqaa9lh491jz16od43nokz7ksfcvzi6bwc --output=new-composite.json\n"))),(0,n.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"import { CeramicClient } from '@ceramicnetwork/http-client'\nimport { Composite } from '@composedb/devtools'\nimport { readEncodedComposite, writeEncodedComposite } from '@composedb/devtools-node'\n\nconst ceramic = new CeramicClient('http://localhost:7007')\nconst sourceComposite = await readEncodedComposite(ceramic, 'merged-composite.json')\n\nconst mergedComposite = sourceComposite.copy(['kjzl6hvfrbw6c7keo17n66rxyo21nqqaa9lh491jz16od43nokz7ksfcvzi6bwc'])\nawait writeEncodedComposite(mergedComposite, 'new-composite.json')\n")))),(0,n.kt)("p",null,"This will create a file called ",(0,n.kt)("inlineCode",{parentName:"p"},"new-composite.json")," with your profile model in it. From here you need to deploy the composite to your node, then ",(0,n.kt)("a",{parentName:"p",href:"#compiling-composites"},"compile")," the composite to start using it. "),(0,n.kt)("h3",{id:"inspecting-composites"},"Inspecting composites"),(0,n.kt)("p",null,"If you want to check what models are included in a specific composite, follow the steps below:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Compile the composite:\n",(0,n.kt)("inlineCode",{parentName:"p"},"composedb composite:compile my-first-composite.json runtime-composite.json"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"View the GraphQL schema of the composite:\n",(0,n.kt)("a",{parentName:"p",href:"/docs/0.4.x/api/commands/cli.graphql#composedb-graphqlschema"},(0,n.kt)("inlineCode",{parentName:"a"},"composedb graphql:schema runtime-composite.json --output=schema.graphql"))))),(0,n.kt)("h3",{id:"aliasing-composites"},"Aliasing composites"),(0,n.kt)("p",null,"In general, models are referenced using their unique model streamIDs which are not memorable. Models can be more easily referenced by aliasing them to your preferred names. "),(0,n.kt)("p",null,"To manually set aliases for your models, add the following section to your composite JSON file. In this case we will use the aliases ",(0,n.kt)("inlineCode",{parentName:"p"},"SimpleProfile")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Post"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},'"aliases":{\n      "kjzl6hvfrbw6c7keo17n66rxyo21nqqaa9lh491jz16od43nokz7ksfcvzi6bwc":"SimpleProfile",\n      "kjzl6hvfrbw6c99mdfpjx1z3fue7sesgua6gsl1vu97229lq56344zu9bawnf96":"Post"\n   }\n')),(0,n.kt)("p",null,"To do aliases programmatically, use the ComposeDB Devtools library. Here\u2019s an example script that loads a composite JSON file and assigns ",(0,n.kt)("inlineCode",{parentName:"p"},"SimpleProfile")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Post"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"import { CeramicClient } from '@ceramicnetwork/http-client'\nimport { Composite } from '@composedb/devtools'\nimport { readEncodedComposite, writeEncodedComposite } from '@composedb/devtools-node'\n\nconst ceramic = new CeramicClient('http://localhost:7007')\nconst sourceComposite = await readEncodedComposite(ceramic, 'merged-composite.json')\n\nconst newComposite = sourceComposite.setAliases({\n  'kjzl6hvfrbw6c7keo17n66rxyo21nqqaa9lh491jz16od43nokz7ksfcvzi6bwc': 'SimpleProfile',\n  'kjzl6hvfrbw6c99mdfpjx1z3fue7sesgua6gsl1vu97229lq56344zu9bawnf96': 'Post',\n})\nawait writeEncodedComposite(newComposite, 'new-composite.json')\n")),(0,n.kt)("p",null,"This script will create a file named ",(0,n.kt)("inlineCode",{parentName:"p"},"new-composite.json")," including model aliases:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},'"aliases":{\n      "kjzl6hvfrbw6c7keo17n66rxyo21nqqaa9lh491jz16od43nokz7ksfcvzi6bwc":"SimpleProfile",\n      "kjzl6hvfrbw6c99mdfpjx1z3fue7sesgua6gsl1vu97229lq56344zu9bawnf96":"Post"\n   }\n')),(0,n.kt)("p",null,"From here you need to ",(0,n.kt)("a",{parentName:"p",href:"#deploying-composites"},"deploy")," the composite to your node, then ",(0,n.kt)("a",{parentName:"p",href:"#compiling-composites"},"compile")," the composite to start using it. When interacting with the models inside your app, you can refer to them using their human-readable aliases rather than their streamIDs. "),(0,n.kt)("h2",{id:"next-steps"},"Next Steps"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Set up your ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.4.x/guides/composedb-client/"},(0,n.kt)("strong",{parentName:"a"},"ComposeDB Client"))),(0,n.kt)("h2",{id:"related-guides"},"Related Guides"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/0.4.x/guides/data-modeling/model-catalog"},"Model Catalog")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/0.4.x/guides/data-modeling/writing-models"},"Writing Models"))))}h.isMDXComponent=!0}}]);