"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5898],{4852:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(9231);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(r),u=n,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9543:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=r(1504),n=(r(9231),r(4852));const o={id:"cli.graphql",title:"CLI: graphql:* commands",custom_edit_url:null},i=void 0,p={unversionedId:"api/commands/cli.graphql",id:"api/commands/cli.graphql",title:"CLI: graphql:* commands",description:"The group of CLI graphql:* commands makes it possible to generate GraphQL Schemas from runtime definitions of your Composites and run a local GraphQL HTTP server",source:"@site/docs/api/commands/cli.graphql.md",sourceDirName:"api/commands",slug:"/api/commands/cli.graphql",permalink:"/docs/preview/api/commands/cli.graphql",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"cli.graphql",title:"CLI: graphql:* commands",custom_edit_url:null},sidebar:"api",previous:{title:"CLI: document:* commands",permalink:"/docs/preview/api/commands/cli.document"}},s={},l=[{value:"Command List",id:"command-list",level:2},{value:"Usage",id:"usage",level:2},{value:"<code>composedb graphql:schema</code>",id:"composedb-graphqlschema",level:3},{value:"<code>composedb graphql:server</code>",id:"composedb-graphqlserver",level:3}],c={toc:l};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The group of ",(0,n.kt)("a",{parentName:"p",href:"/docs/preview/api/modules/cli"},"CLI")," ",(0,n.kt)("inlineCode",{parentName:"p"},"graphql:*")," commands makes it possible to generate GraphQL Schemas from ",(0,n.kt)("a",{parentName:"p",href:"/docs/preview/api/commands/cli.composite#composedb-compositecompile"},"runtime definitions")," of your ",(0,n.kt)("a",{parentName:"p",href:"/docs/preview/data-modeling-concepts#composites"},"Composites")," and run a local GraphQL HTTP server"),(0,n.kt)("h2",{id:"command-list"},"Command List"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#composedb-graphqlschema"},(0,n.kt)("inlineCode",{parentName:"a"},"composedb graphql:schema PATH"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#composedb-graphqlserver"},(0,n.kt)("inlineCode",{parentName:"a"},"composedb graphql:server PATH")))),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("h3",{id:"composedb-graphqlschema"},(0,n.kt)("inlineCode",{parentName:"h3"},"composedb graphql:schema")),(0,n.kt)("p",null,"Load the runtime graphql schema for the composite with given runtime definition"),(0,n.kt)("p",null,"You can use this command to see the ComposeDB GraphQL Execution Schema for your composite.\nYou will be using this schema in your DApp to perform Queries and Mutations. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"USAGE\n  $ composedb graphql:schema PATH\n\nARGUMENTS\n  PATH                     a path to a runtime representation of a composite encoded as JSON\n\nOPTIONS\n  -o, --output             a path to a file where the schema should be saved\n")),(0,n.kt)("h3",{id:"composedb-graphqlserver"},(0,n.kt)("inlineCode",{parentName:"h3"},"composedb graphql:server")),(0,n.kt)("p",null,"Launch a graphQL server supporting the runtime schema of the composite with given runtime definition"),(0,n.kt)("p",null,"You can use this command to launch a local GraphQL HTTP server that will be able to process queries and mutations against\nyour Composite's ",(0,n.kt)("a",{parentName:"p",href:"/docs/preview/api/commands/cli.graphql#composedb-graphqlschema"},"GraphQL Execution Schema")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"USAGE\n  $ composedb graphql:server PATH\n\nARGUMENTS\n  PATH                     a path to a runtime representation of a composite encoded as JSON\n\nOPTIONS\n  -c, --ceramic-url        Ceramic API URL\n  -k, --did-private-key    DID Private Key that should be used to authenticate the queries and mutations (you can generate a fresh private key using composedb did:generate-private-key)\n  --readonly               a boolean indicating whether the server should load the schema without mutations\n  --port                   the port that the server should listen on\n  --graphiql               a boolean indicating whether the GraphiQL IDE should be available when opening the server's url in the browser. See https://github.com/graphql/graphiql for more info on GraphiQL\n  \n")))}m.isMDXComponent=!0}}]);