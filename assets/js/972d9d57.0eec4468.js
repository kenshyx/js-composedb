"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[937],{4852:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(9231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6403:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(644),r=(n(9231),n(4852));const o={},i="ComposeDB Docs",l={unversionedId:"introduction",id:"introduction",title:"ComposeDB Docs",description:"Introduction",source:"@site/docs/introduction.mdx",sourceDirName:".",slug:"/introduction",permalink:"/docs/preview/introduction",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",next:{title:"Getting Started",permalink:"/docs/preview/getting-started"}},p={},s=[{value:"Use Cases",id:"use-cases",level:3},{value:"Why ComposeDB?",id:"why-composedb",level:3},{value:"Project Status: <code>Beta</code>",id:"project-status-beta",level:3},{value:"Get Started \u2192",id:"get-started-",level:3},{value:"Development Guides \u2192",id:"development-guides-",level:3},{value:"Core concepts \u2192",id:"core-concepts-",level:3},{value:"Community \u2192",id:"community-",level:3}],d={toc:s},c="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"composedb-docs"},"ComposeDB Docs"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Introduction",src:n(7762).Z,width:"2948",height:"1890"})),(0,r.kt)("p",null,"ComposeDB is a composable graph database built on ",(0,r.kt)("a",{parentName:"p",href:"https://ceramic.network"},"Ceramic"),", designed for Web3 applications. "),(0,r.kt)("h3",{id:"use-cases"},"Use Cases"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Use Case"),(0,r.kt)("th",{parentName:"tr",align:null},"Examples"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Decentralized identity")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"user profiles")," ",(0,r.kt)("inlineCode",{parentName:"td"},"credentials")," ",(0,r.kt)("inlineCode",{parentName:"td"},"reputation systems"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Web3 social")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"social graphs")," ",(0,r.kt)("inlineCode",{parentName:"td"},"posts")," ",(0,r.kt)("inlineCode",{parentName:"td"},"reactions")," ",(0,r.kt)("inlineCode",{parentName:"td"},"comments")," ",(0,r.kt)("inlineCode",{parentName:"td"},"messages"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"DAO tools")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"proposals")," ",(0,r.kt)("inlineCode",{parentName:"td"},"projects")," ",(0,r.kt)("inlineCode",{parentName:"td"},"tasks")," ",(0,r.kt)("inlineCode",{parentName:"td"},"votes")," ",(0,r.kt)("inlineCode",{parentName:"td"},"contribution graphs"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Open information graphs")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DeSci graphs")," ",(0,r.kt)("inlineCode",{parentName:"td"},"knowledge graphs")," ",(0,r.kt)("inlineCode",{parentName:"td"},"discourse graphs"))))),(0,r.kt)("h3",{id:"why-composedb"},"Why ComposeDB?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Store and query data with powerful, easy-to-use GraphQL APIs"),(0,r.kt)("li",{parentName:"ul"},"Build faster with a catalog of plug-and-play schemas"),(0,r.kt)("li",{parentName:"ul"},"Bootstrap content by plugging into a composable data ecosystem"),(0,r.kt)("li",{parentName:"ul"},"Deliver great UX with sign-in with Ethereum, Solana, and more"),(0,r.kt)("li",{parentName:"ul"},"Eliminate trust and guarantee data verifiability"),(0,r.kt)("li",{parentName:"ul"},"Scale your Web3 data infrastructure beyond L1 or L2 blockchains")),(0,r.kt)("h3",{id:"project-status-beta"},"Project Status: ",(0,r.kt)("inlineCode",{parentName:"h3"},"Beta")),(0,r.kt)("p",null,"ComposeDB officially entered ",(0,r.kt)("inlineCode",{parentName:"p"},"Beta")," on February 28, 2023. What does this mean?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can now build and deploy apps to production on mainnet! "),(0,r.kt)("li",{parentName:"ul"},"Core features like GraphQL APIs, reusable models, and data composability are available"),(0,r.kt)("li",{parentName:"ul"},"We will continue to improve performance and add more features"),(0,r.kt)("li",{parentName:"ul"},"We are not yet guaranteeing a 100% stable, bug-free platform")),(0,r.kt)("p",null,"If you want to provide feedback, request new features, or report insufficient performance, please ",(0,r.kt)("a",{parentName:"p",href:"https://forum.ceramic.network/c/graph/9"},"make a post on the Forum"),", as we'd like to work with you.\nThank you for being a ComposeDB pioneer and understanding that great Web3 protocols take time to mature."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"get-started-"},(0,r.kt)("a",{parentName:"h3",href:"./getting-started"},"Get Started \u2192")),(0,r.kt)("p",null,"Build a Hello World application and interact from the CLI."),(0,r.kt)("h3",{id:"development-guides-"},(0,r.kt)("a",{parentName:"h3",href:"./getting-started"},"Development Guides \u2192")),(0,r.kt)("p",null,"Learn about data modeling, application set up, and data interactions."),(0,r.kt)("h3",{id:"core-concepts-"},(0,r.kt)("a",{parentName:"h3",href:"./core-concepts"},"Core concepts \u2192")),(0,r.kt)("p",null,"Dive deeper into the ComposeDB protocol and its components."),(0,r.kt)("h3",{id:"community-"},(0,r.kt)("a",{parentName:"h3",href:"/docs/preview/community"},"Community \u2192")),(0,r.kt)("p",null,"Connect with the ComposeDB developer community."))}u.isMDXComponent=!0},7762:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/intro-dataverse-935780e95ca0a7e26127b095164db5cb.png"}}]);