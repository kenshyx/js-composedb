"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9920],{4852:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(9231);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),m=i,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2259:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(1504),i=(a(9231),a(4852));const r={},o="Supported scalars",s={unversionedId:"guides/creating-composites/scalars",id:"version-0.2.x/guides/creating-composites/scalars",title:"Supported scalars",description:"Scalars represent the leaf values in the graph, either as part of key-value properties in shapes, or value of items in lists. You can learn more about scalars in the GraphQL specification.",source:"@site/versioned_docs/version-0.2.x/guides/creating-composites/scalars.md",sourceDirName:"guides/creating-composites",slug:"/guides/creating-composites/scalars",permalink:"/docs/0.2.x/guides/creating-composites/scalars",draft:!1,tags:[],version:"0.2.x",frontMatter:{},sidebar:"docs",previous:{title:"Schema definition",permalink:"/docs/0.2.x/guides/creating-composites/schema"},next:{title:"Supported directives",permalink:"/docs/0.2.x/guides/creating-composites/directives"}},l={},p=[{value:"Primitive types",id:"primitive-types",level:2},{value:"<code>Boolean</code>",id:"boolean",level:3},{value:"<code>Int</code>",id:"int",level:3},{value:"<code>Float</code>",id:"float",level:3},{value:"<code>String</code>",id:"string",level:3},{value:"Identifiers",id:"identifiers",level:2},{value:"<code>ID</code>",id:"id",level:3},{value:"<code>CommitID</code>",id:"commitid",level:3},{value:"<code>DID</code>",id:"did",level:3},{value:"Date and time",id:"date-and-time",level:2},{value:"<code>Date</code>",id:"date",level:3},{value:"<code>DateTime</code>",id:"datetime",level:3},{value:"<code>Time</code>",id:"time",level:3}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"supported-scalars"},"Supported scalars"),(0,i.kt)("p",null,"Scalars represent the leaf values in the graph, either as part of key-value properties in shapes, or value of items in lists. You can learn more about scalars in the ",(0,i.kt)("a",{parentName:"p",href:"https://graphql.org/learn/schema/#scalar-types"},"GraphQL specification"),"."),(0,i.kt)("h2",{id:"primitive-types"},"Primitive types"),(0,i.kt)("p",null,"The following scalars are part of the ",(0,i.kt)("a",{parentName:"p",href:"https://graphql.org/learn/schema/#scalar-types"},"GraphQL specification"),"."),(0,i.kt)("h3",{id:"boolean"},(0,i.kt)("inlineCode",{parentName:"h3"},"Boolean")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," value."),(0,i.kt)("h3",{id:"int"},(0,i.kt)("inlineCode",{parentName:"h3"},"Int")),(0,i.kt)("p",null,"A signed 32-bit integer."),(0,i.kt)("p",null,"A range of valid values can be defined using ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.2.x/guides/creating-composites/directives#int"},"the ",(0,i.kt)("inlineCode",{parentName:"a"},"@int")," directive"),"."),(0,i.kt)("h3",{id:"float"},(0,i.kt)("inlineCode",{parentName:"h3"},"Float")),(0,i.kt)("p",null,"A signed double-precision floating-point value."),(0,i.kt)("p",null,"A range of valid values can be defined using ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.2.x/guides/creating-composites/directives#float"},"the ",(0,i.kt)("inlineCode",{parentName:"a"},"@float")," directive"),"."),(0,i.kt)("h3",{id:"string"},(0,i.kt)("inlineCode",{parentName:"h3"},"String")),(0,i.kt)("p",null,"A UTF-8 character sequence."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.2.x/guides/creating-composites/directives#string"},(0,i.kt)("inlineCode",{parentName:"a"},"@string")," directive")," ",(0,i.kt)("strong",{parentName:"p"},"must be used")," along with ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," scalars to define the ",(0,i.kt)("inlineCode",{parentName:"p"},"maxLength")," of the string.")),(0,i.kt)("h2",{id:"identifiers"},"Identifiers"),(0,i.kt)("p",null,"The following scalars represent unique identifiers in the graph. In ComposedDB, they are all stored as string values."),(0,i.kt)("h3",{id:"id"},(0,i.kt)("inlineCode",{parentName:"h3"},"ID")),(0,i.kt)("p",null,"A Node identifier used by GraphQL."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.2.x/guides/creating-composites/directives#string"},(0,i.kt)("inlineCode",{parentName:"a"},"@string")," directive")," ",(0,i.kt)("strong",{parentName:"p"},"must be used")," along with ",(0,i.kt)("inlineCode",{parentName:"p"},"ID")," scalars to define the ",(0,i.kt)("inlineCode",{parentName:"p"},"maxLength")," of the ID string.")),(0,i.kt)("h3",{id:"commitid"},(0,i.kt)("inlineCode",{parentName:"h3"},"CommitID")),(0,i.kt)("p",null,"Identifies a specific version of a Stream in the Ceramic network."),(0,i.kt)("h3",{id:"did"},(0,i.kt)("inlineCode",{parentName:"h3"},"DID")),(0,i.kt)("p",null,"A Decentralized Identifier, representing an actor able to create and mutate Documents in the graph, using ",(0,i.kt)("a",{parentName:"p",href:"https://www.graphql-scalars.dev/docs/scalars/did"},"GraphQL Scalars"),"."),(0,i.kt)("h2",{id:"date-and-time"},"Date and time"),(0,i.kt)("p",null,"The following scalars can be used to store date and time values using standard representations."),(0,i.kt)("h3",{id:"date"},(0,i.kt)("inlineCode",{parentName:"h3"},"Date")),(0,i.kt)("p",null,"RFC 3339 compliant date string without time information, ",(0,i.kt)("inlineCode",{parentName:"p"},"2007-12-03")," for example, using ",(0,i.kt)("a",{parentName:"p",href:"https://www.graphql-scalars.dev/docs/scalars/date"},"GraphQL Scalars"),"."),(0,i.kt)("h3",{id:"datetime"},(0,i.kt)("inlineCode",{parentName:"h3"},"DateTime")),(0,i.kt)("p",null,"A date-time string at UTC, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"2007-12-03T10:15:30Z"),", using ",(0,i.kt)("a",{parentName:"p",href:"https://www.graphql-scalars.dev/docs/scalars/date-time"},"GraphQL Scalars"),"."),(0,i.kt)("h3",{id:"time"},(0,i.kt)("inlineCode",{parentName:"h3"},"Time")),(0,i.kt)("p",null,"A time string at UTC, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"10:15:30Z"),", using ",(0,i.kt)("a",{parentName:"p",href:"https://www.graphql-scalars.dev/docs/scalars/time"},"GraphQL Scalars"),"."))}c.isMDXComponent=!0}}]);