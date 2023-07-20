"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2742],{4852:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>N});var n=a(9231);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(a),u=r,N=d["".concat(p,".").concat(u)]||d[u]||k[u]||o;return a?n.createElement(N,l(l({ref:t},m),{},{components:a})):n.createElement(N,l({ref:t},m))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4543:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(5675),r=(a(9231),a(4852));const o={id:"devtools.Composite",title:"Class: Composite",custom_edit_url:null},l=void 0,i={unversionedId:"api/classes/devtools.Composite",id:"version-0.3.x/api/classes/devtools.Composite",title:"Class: Composite",description:"devtools.Composite",source:"@site/versioned_docs/version-0.3.x/api/classes/devtools.Composite.md",sourceDirName:"api/classes",slug:"/api/classes/devtools.Composite",permalink:"/docs/0.3.x/api/classes/devtools.Composite",draft:!1,editUrl:null,tags:[],version:"0.3.x",frontMatter:{id:"devtools.Composite",title:"Class: Composite",custom_edit_url:null},sidebar:"api",previous:{title:"Module: devtools-node",permalink:"/docs/0.3.x/api/modules/devtools_node"},next:{title:"CLI",permalink:"/docs/0.3.x/category/cli"}},p={},s=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Properties",id:"properties",level:2},{value:"VERSION",id:"version",level:3},{value:"Accessors",id:"accessors",level:2},{value:"hash",id:"hash",level:3},{value:"Returns",id:"returns",level:4},{value:"modelIDs",id:"modelids",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Methods",id:"methods",level:2},{value:"copy",id:"copy",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"equals",id:"equals",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"merge",id:"merge",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"setAliases",id:"setaliases",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"setCommonEmbeds",id:"setcommonembeds",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-6",level:4},{value:"setViews",id:"setviews",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-7",level:4},{value:"startIndexingOn",id:"startindexingon",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-8",level:4},{value:"toJSON",id:"tojson",level:3},{value:"Returns",id:"returns-9",level:4},{value:"toParams",id:"toparams",level:3},{value:"Returns",id:"returns-10",level:4},{value:"toRuntime",id:"toruntime",level:3},{value:"Returns",id:"returns-11",level:4},{value:"create",id:"create",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-12",level:4},{value:"from",id:"from",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-13",level:4},{value:"fromJSON",id:"fromjson",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"Returns",id:"returns-14",level:4},{value:"fromModels",id:"frommodels",level:3},{value:"Parameters",id:"parameters-11",level:4},{value:"Returns",id:"returns-15",level:4}],m={toc:s},d="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/modules/devtools"},"devtools"),".Composite"),(0,r.kt)("p",null,"The Composite class provides APIs for managing composites (sets of Model streams) through their\ndevelopment lifecycle, including the creation of new Models, import and export of existing\ncomposites encoded as JSON, and compilation to the runtime format used by the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/classes/client.ComposeClient"},(0,r.kt)("inlineCode",{parentName:"a"},"ComposeClient class")),"."),(0,r.kt)("p",null,"Composite instances are ",(0,r.kt)("strong",{parentName:"p"},"immutable"),", so methods affecting the contents of the internal\ncomposite definition will ",(0,r.kt)("strong",{parentName:"p"},"return new instances")," of the Composite class."),(0,r.kt)("p",null,"Composite class is exported by the ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/modules/devtools"},(0,r.kt)("inlineCode",{parentName:"a"},"devtools"))," module."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"import { Composite } from '@composedb/devtools'\n")),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new Composite"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"params"),")"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/0.3.x/api/modules/devtools#compositeparams"},(0,r.kt)("inlineCode",{parentName:"a"},"CompositeParams")))))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"version"},"VERSION"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"VERSION"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"'1.0'")),(0,r.kt)("p",null,"Current version of the composites format."),(0,r.kt)("h2",{id:"accessors"},"Accessors"),(0,r.kt)("h3",{id:"hash"},"hash"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"hash"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Stable hash of the internal definition, mostly used for comparisons."),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"modelids"},"modelIDs"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"modelIDs"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,r.kt)("p",null,"StreamID of the Models used in the Composite."),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"copy"},"copy"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"copy"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"models"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/classes/devtools.Composite"},(0,r.kt)("inlineCode",{parentName:"a"},"Composite"))),(0,r.kt)("p",null,"Copy a given set of Models identified by their stream ID, name or alias into a new Composite."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"models")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"),"[]")))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/classes/devtools.Composite"},(0,r.kt)("inlineCode",{parentName:"a"},"Composite"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"equals"},"equals"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"equals"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"other"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Check if the composite is equal to the other one provided as input."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"other")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/0.3.x/api/modules/devtools#compositeinput"},(0,r.kt)("inlineCode",{parentName:"a"},"CompositeInput")))))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"merge"},"merge"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"merge"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"other"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/classes/devtools.Composite"},(0,r.kt)("inlineCode",{parentName:"a"},"Composite"))),(0,r.kt)("p",null,"Merge the composite with the other one(s) into a new Composite."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"other")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/0.3.x/api/modules/devtools#compositeinput"},(0,r.kt)("inlineCode",{parentName:"a"},"CompositeInput"))," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/docs/0.3.x/api/modules/devtools#compositeinput"},(0,r.kt)("inlineCode",{parentName:"a"},"CompositeInput")),"[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/0.3.x/api/modules/devtools#compositeoptions"},(0,r.kt)("inlineCode",{parentName:"a"},"CompositeOptions")))))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/classes/devtools.Composite"},(0,r.kt)("inlineCode",{parentName:"a"},"Composite"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setaliases"},"setAliases"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"setAliases"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"aliases"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"replace?"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/classes/devtools.Composite"},(0,r.kt)("inlineCode",{parentName:"a"},"Composite"))),(0,r.kt)("p",null,"Set aliases for the Models in the composite, merging with existing ones unless ",(0,r.kt)("inlineCode",{parentName:"p"},"replace")," is\n",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", and return a new Composite."),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"aliases")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"replace")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/classes/devtools.Composite"},(0,r.kt)("inlineCode",{parentName:"a"},"Composite"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setcommonembeds"},"setCommonEmbeds"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"setCommonEmbeds"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"names"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"replace?"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/classes/devtools.Composite"},(0,r.kt)("inlineCode",{parentName:"a"},"Composite"))),(0,r.kt)("p",null,"Set common embeds for the Models in the composite, merging with existing ones unless ",(0,r.kt)("inlineCode",{parentName:"p"},"replace"),"\nis ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", and return a new Composite."),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"names")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Iterable"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"string"),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"replace")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/classes/devtools.Composite"},(0,r.kt)("inlineCode",{parentName:"a"},"Composite"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setviews"},"setViews"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"setViews"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"views"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"replace?"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/classes/devtools.Composite"},(0,r.kt)("inlineCode",{parentName:"a"},"Composite"))),(0,r.kt)("p",null,"Set views for the Models in the composite, merging with existing ones unless ",(0,r.kt)("inlineCode",{parentName:"p"},"replace")," is\n",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", and return a new Composite."),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"views")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"CompositeViewsDefinition")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"replace")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/classes/devtools.Composite"},(0,r.kt)("inlineCode",{parentName:"a"},"Composite"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"startindexingon"},"startIndexingOn"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"startIndexingOn"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"ceramic"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("p",null,"Configure the Ceramic node to index the models defined in the composite. An authenticated DID\nset as admin in the Ceramic node configuration must be attached to the Ceramic instance."),(0,r.kt)("h4",{id:"parameters-7"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ceramic")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"CeramicApi"))))),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tojson"},"toJSON"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"toJSON"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"EncodedCompositeDefinition")),(0,r.kt)("p",null,"Return a JSON-encoded ",(0,r.kt)("inlineCode",{parentName:"p"},"CompositeDefinition")," structure that can be shared and reused."),(0,r.kt)("h4",{id:"returns-9"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"EncodedCompositeDefinition")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"toparams"},"toParams"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"toParams"),"(): ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/modules/devtools#compositeparams"},(0,r.kt)("inlineCode",{parentName:"a"},"CompositeParams"))),(0,r.kt)("p",null,"Return a deep clone of the internal ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/modules/devtools#compositeparams"},(0,r.kt)("inlineCode",{parentName:"a"},"CompositeParams"))," for safe external access."),(0,r.kt)("h4",{id:"returns-10"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/modules/devtools#compositeparams"},(0,r.kt)("inlineCode",{parentName:"a"},"CompositeParams"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"toruntime"},"toRuntime"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"toRuntime"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"RuntimeCompositeDefinition")),(0,r.kt)("p",null,"Return a ",(0,r.kt)("inlineCode",{parentName:"p"},"RuntimeCompositeDefinition")," to be used at runtime by the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/classes/client.ComposeClient"},(0,r.kt)("inlineCode",{parentName:"a"},"ComposeClient")),"."),(0,r.kt)("h4",{id:"returns-11"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"RuntimeCompositeDefinition")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"create"},"create"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"create"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"params"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/classes/devtools.Composite"},(0,r.kt)("inlineCode",{parentName:"a"},"Composite")),">"),(0,r.kt)("p",null,"Create new model streams based on the provided ",(0,r.kt)("inlineCode",{parentName:"p"},"schema")," and group them in a composite\nwrapped in a Composite instance."),(0,r.kt)("h4",{id:"parameters-8"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/0.3.x/api/modules/devtools#createparams"},(0,r.kt)("inlineCode",{parentName:"a"},"CreateParams")))))),(0,r.kt)("h4",{id:"returns-12"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/classes/devtools.Composite"},(0,r.kt)("inlineCode",{parentName:"a"},"Composite")),">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"from"},"from"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"from"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"composites"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/classes/devtools.Composite"},(0,r.kt)("inlineCode",{parentName:"a"},"Composite"))),(0,r.kt)("p",null,"Create a Composite instance by merging existing composites."),(0,r.kt)("h4",{id:"parameters-9"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"composites")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Iterable"),"<",(0,r.kt)("a",{parentName:"td",href:"/docs/0.3.x/api/modules/devtools#compositeinput"},(0,r.kt)("inlineCode",{parentName:"a"},"CompositeInput")),">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/0.3.x/api/modules/devtools#compositeoptions"},(0,r.kt)("inlineCode",{parentName:"a"},"CompositeOptions")))))),(0,r.kt)("h4",{id:"returns-13"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/classes/devtools.Composite"},(0,r.kt)("inlineCode",{parentName:"a"},"Composite"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fromjson"},"fromJSON"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"fromJSON"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"params"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/classes/devtools.Composite"},(0,r.kt)("inlineCode",{parentName:"a"},"Composite")),">"),(0,r.kt)("p",null,"Create a Composite instance from a JSON-encoded ",(0,r.kt)("inlineCode",{parentName:"p"},"CompositeDefinition"),"."),(0,r.kt)("h4",{id:"parameters-10"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/0.3.x/api/modules/devtools#fromjsonparams"},(0,r.kt)("inlineCode",{parentName:"a"},"FromJSONParams")))))),(0,r.kt)("h4",{id:"returns-14"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/classes/devtools.Composite"},(0,r.kt)("inlineCode",{parentName:"a"},"Composite")),">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"frommodels"},"fromModels"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"fromModels"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"params"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/classes/devtools.Composite"},(0,r.kt)("inlineCode",{parentName:"a"},"Composite")),">"),(0,r.kt)("p",null,"Create a Composite instance from a set of Model streams already present on a Ceramic node."),(0,r.kt)("h4",{id:"parameters-11"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/0.3.x/api/modules/devtools#frommodelsparams"},(0,r.kt)("inlineCode",{parentName:"a"},"FromModelsParams")))))),(0,r.kt)("h4",{id:"returns-15"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/classes/devtools.Composite"},(0,r.kt)("inlineCode",{parentName:"a"},"Composite")),">"))}k.isMDXComponent=!0}}]);