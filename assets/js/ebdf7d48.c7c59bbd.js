"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8358],{4852:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(9231);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4875:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(9231),i=n(9841);const r={tabItem:"tabItem_JmOu"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r.tabItem,o),hidden:n},t)}},3573:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(5675),i=n(9231),r=n(9841),o=n(497),l=n(9409),s=n(4215),u=n(2550),d=n(7012);function p(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:i}}=e;return{value:t,label:n,attributes:a,default:i}}))}function c(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=c(e),[o,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[s,u]=h({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,d.Nk)(n);return[a,(0,i.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),b=(()=>{const e=s??p;return m({value:e,tabValues:r})?e:null})();(0,i.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var b=n(5638);const g={tabList:"tabList_t7gZ",tabItem:"tabItem_cwyH"};function k(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),c=e=>{const t=e.currentTarget,n=d.indexOf(t),a=u[n].value;a!==l&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:c},o,{className:(0,r.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=f(e);return i.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},i.createElement(k,(0,a.Z)({},e,t)),i.createElement(v,(0,a.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return i.createElement(y,(0,a.Z)({key:String(t)},e))}},1463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(5675),i=(n(9231),n(4852)),r=n(3573),o=n(4875);const l={},s="Mutations",u={unversionedId:"guides/data-interactions/mutations",id:"version-0.4.x/guides/data-interactions/mutations",title:"Mutations",description:"Create or update data on ComposeDB.",source:"@site/versioned_docs/version-0.4.x/guides/data-interactions/mutations.mdx",sourceDirName:"guides/data-interactions",slug:"/guides/data-interactions/mutations",permalink:"/docs/0.4.x/guides/data-interactions/mutations",draft:!1,tags:[],version:"0.4.x",frontMatter:{},sidebar:"guides",previous:{title:"Queries",permalink:"/docs/0.4.x/guides/data-interactions/queries"}},d={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Enable mutations",id:"enable-mutations",level:2},{value:"Create data",id:"create-data",level:2},{value:"Update data",id:"update-data",level:2},{value:"Update Options",id:"update-options",level:3},{value:"Delete data",id:"delete-data",level:2},{value:"Next Steps",id:"next-steps",level:2}],c={toc:p},m="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mutations"},"Mutations"),(0,i.kt)("p",null,"Create or update data on ComposeDB."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An authenticated user"),(0,i.kt)("li",{parentName:"ul"},"A deployed composite"),(0,i.kt)("li",{parentName:"ul"},"A compiled composite")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The ComposeDB Client automatically generates a GraphQL Schema from your compiled composite.")),(0,i.kt)("h2",{id:"enable-mutations"},"Enable mutations"),(0,i.kt)("p",null,"Mutations require an authenticated user. After you have an authenticated user, enable mutations by setting their authenticated account on the ComposeDB client:"),(0,i.kt)(r.Z,{defaultValue:"with-sessions",groupId:"with-or-without-sessions",values:[{label:"With Sessions",value:"with-sessions"},{label:"Without Sessions",value:"without-sessions"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"with-sessions",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"// Assign the authorized did from your session to your client\n\ncompose.setDID(session.did)\n"))),(0,i.kt)(o.Z,{value:"without-sessions",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"// Call setDID method on ComposeClient instance\n// Using authenticated did instance\n\ncompose.setDID(did)\n")))),(0,i.kt)("h2",{id:"create-data"},"Create data"),(0,i.kt)("p",null,"Let\u2019s say your app uses a ",(0,i.kt)("inlineCode",{parentName:"p"},"Post")," model:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'type Post @createModel(accountRelation: LIST, description: "A simple text post") {\n  author: DID! @documentAccount\n  title: String! @string(minLength: 10, maxLength: 100)\n  text: String! @string(maxLength: 500)\n}\n')),(0,i.kt)("p",null,"Users will generate data as they interact with your app. Your app needs to perform mutations to write that data to the network. Here\u2019s a mutation query that creates a new post:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},'# Create post\n\nmutation CreateNewPost($i: CreatePostInput!){\n  createPost(input: $i){\n        document{\n            id\n            title\n      text\n    }\n  }\n}\n\n# Content for the post\n\n{\n  "i": {\n    "content": {\n      "title": "Getting started with ComposeDB"\n      "text": "A Post created using composites and GraphQL" \n    }\n  }\n}\n')),(0,i.kt)("p",null,"Where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mutation"),": GraphQL keyword for creating a write operation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CreateNewPost"),": custom name given to this mutation. This name should represent what the mutation is doing and can be anything you\u2019d like it to be."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"($i: CreatePostInput!)")," creates a variable named ",(0,i.kt)("inlineCode",{parentName:"li"},"i")," with the requirement that its value is of the type ",(0,i.kt)("inlineCode",{parentName:"li"},"CreatePostInput"),".  This type is automatically created for you as a part of the run-time composite.  Notice the ",(0,i.kt)("inlineCode",{parentName:"li"},"!"),", which informs us that this input is required."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"createPost")," corresponds to an automatically generated GraphQL binding that is part of the run-time representation of your composite. Then names of these bindings follow a naming convention ",(0,i.kt)("inlineCode",{parentName:"li"},"create<your-model-name>"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"(input: $i)")," is using the value provided for ",(0,i.kt)("inlineCode",{parentName:"li"},"$i")," as the input for the mutation.  This will be defined as a variable to this operation."),(0,i.kt)("li",{parentName:"ul"},"The final piece to this, ",(0,i.kt)("inlineCode",{parentName:"li"},"document{id,title,text}")," is defining the fields of the document we would like this mutation to create.  It\u2019s important to note that you need to include ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," here in the mutation, but you will not need to include it in the query variables as it is automatically generated."),(0,i.kt)("li",{parentName:"ul"},"Variables: As you can see, ",(0,i.kt)("inlineCode",{parentName:"li"},"i")," contains ",(0,i.kt)("inlineCode",{parentName:"li"},"content")," that matches the fields in the above schema ",(0,i.kt)("inlineCode",{parentName:"li"},"title")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"text"),".  Both have the proper values supplied of a type ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),". This sets up the variables needed for the query.")),(0,i.kt)("h2",{id:"update-data"},"Update data"),(0,i.kt)("p",null,"Let\u2019s say a user wanted to modify the title of a previous post. Your app would need to perform a mutation to update that field in the post."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},'# Update post\n\nmutation UpdatePost($i: UpdatePostInput!) {\n    updatePost(input: $i) {\n        document {\n            id\n            title\n                        text\n        }\n    }\n}\n\n# Content to be updated\n\n{\n    "i": {\n          "id": <streamID of the stream you wish to update,\n            "content": {    \n            "title": "Getting started with ComposeDB and Ceramic"\n        }\n    }\n}\n')),(0,i.kt)("p",null,"Where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You will notice that the naming of the mutation is ",(0,i.kt)("inlineCode",{parentName:"li"},"UpdatePost")," which indicates that this mutation will update existing records."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"updatePost")," binding has a prefix ",(0,i.kt)("inlineCode",{parentName:"li"},"update")," which is very defines the behaviour of your mutation - updating the existing data instead of creating new records."),(0,i.kt)("li",{parentName:"ul"},"Finally, just like before, we define the variables that should be passed to update record. Here, very important difference is that you will be required to specify all variables, including the stream id so that ComposeDB would know which record should be updated.")),(0,i.kt)("h3",{id:"update-options"},"Update Options"),(0,i.kt)("p",null,"Update mutations can be provided with an options object containing the following fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"replace: Boolean"),": by default the update logic performs a shallow (1 level) merge of the document contents, so existing contents of the document are not removed unless explicitly changed. When setting\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"replace"),"\xa0to\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", the document contents will be fully replaced by the contents provided in the update mutation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"version: CommitID"),": version of the document the update should be applied on. If set, the update logic will load the latest version of the document and throw an error if it doesn't match the expected version.")),(0,i.kt)("h2",{id:"delete-data"},"Delete data"),(0,i.kt)("p",null,"Currently, data deletion is not supported. All ComposeDB data transactions are timestamped via Ceramic into the public Ethereum blockchain. This means that data can always be retrieved from the blockchain."),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)("p",null,"At this stage, you should have a strong understanding of how to create applications using ComposeDB and interact with the data that is stored on the network. Congrats!"),(0,i.kt)("p",null,"If you need more inspiration for what can be built on ComposeDB, check out the ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.4.x/next-steps#examples"},(0,i.kt)("strong",{parentName:"a"},"example applications"))," built by Ceramic community members."))}h.isMDXComponent=!0}}]);