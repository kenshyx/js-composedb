"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3217],{4852:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>f});var n=o(9231);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(o),u=a,f=m["".concat(c,".").concat(u)]||m[u]||p[u]||i;return o?n.createElement(f,r(r({ref:t},d),{},{components:o})):n.createElement(f,r({ref:t},d))}));function f(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=o[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},4349:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var n=o(1504),a=(o(9231),o(4852)),i=o(2868),r=o(198);const s={},c="Data Composition",l={unversionedId:"guides/data-composition",id:"guides/data-composition",title:"Data Composition",description:"Data composition is at the heart of ComposeDB, using composites as a proxy for datasets of documents relevant to applications and services.",source:"@site/docs/guides/data-composition.mdx",sourceDirName:"guides",slug:"/guides/data-composition",permalink:"/docs/preview/guides/data-composition",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Guides",permalink:"/docs/preview/category/guides"},next:{title:"Using composites",permalink:"/docs/preview/category/using-composites"}},d={},m=[{value:"Models Composition",id:"models-composition",level:2},{value:"Relations",id:"relations",level:2},{value:"Account to document",id:"account-to-document",level:3},{value:"Account to single document",id:"account-to-single-document",level:4},{value:"Account to multiple documents",id:"account-to-multiple-documents",level:4},{value:"Document to account",id:"document-to-account",level:3},{value:"Document to document",id:"document-to-document",level:3}],p={toc:m};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"data-composition"},"Data Composition"),(0,a.kt)("p",null,"Data composition is at the heart of ComposeDB, using composites as a proxy for datasets of documents relevant to applications and services."),(0,a.kt)("p",null,"Composites represent sets of models that can be used to query, create and update documents, therefore it is important for developers to identify models to use, whether by ",(0,a.kt)("a",{parentName:"p",href:"/docs/preview/create-your-composite"},"reusing models already adopted by the ecosystem")," in order to access the set of documents already created using these models, or ",(0,a.kt)("a",{parentName:"p",href:"/docs/preview/guides/creating-composites/overview"},"creating new models")," that would better suit specific needs."),(0,a.kt)("h2",{id:"models-composition"},"Models Composition"),(0,a.kt)("p",null,"The following schema describes how composites can be created by merging existing composites (see composites ",(0,a.kt)("inlineCode",{parentName:"p"},"D")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"A'")," below) and extracting models from a composite (represented by composites ",(0,a.kt)("inlineCode",{parentName:"p"},"E")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"F")," below)."),(0,a.kt)("p",null,"The same datasets can be represented by different composites, such as the composites ",(0,a.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"A'")," below that contain the same models."),(0,a.kt)(r.Z,{alt:"Models composition schema",sources:{light:(0,i.Z)("/img/models-composition-light.png"),dark:(0,i.Z)("/img/models-composition-dark.png")},mdxType:"ThemedImage"}),(0,a.kt)("h2",{id:"relations"},"Relations"),(0,a.kt)("p",null,"The ComposeDB graph representation supports the following types of edges (relations) between nodes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#account-to-document"},"Account to document"),", with two variants:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Single: an account can only be related to ",(0,a.kt)("strong",{parentName:"li"},"one")," document of a given model."),(0,a.kt)("li",{parentName:"ul"},"Multiple: an account can be related to ",(0,a.kt)("strong",{parentName:"li"},"many")," documents of a given model."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#document-to-account"},"Document to account"),": a document can contain properties storing relations to an account."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#document-to-account"},"Document to document"),": a document can contain properties storing relations to another document.")),(0,a.kt)("p",null,"Direct edges between accounts are ",(0,a.kt)("strong",{parentName:"p"},"not supported")," by ComposeDB, but relations can be defined indirectly by using an intermediary document."),(0,a.kt)("h3",{id:"account-to-document"},"Account to document"),(0,a.kt)("p",null,"The relations between documents and the account controlling (having created and being able to update) them are defined in the model used by the document."),(0,a.kt)("p",null,"ComposeDB currently supports two variants for these relations:"),(0,a.kt)("h4",{id:"account-to-single-document"},"Account to single document"),(0,a.kt)("p",null,"This variant ensures the indexing service stores ",(0,a.kt)("strong",{parentName:"p"},"at most one document")," of the given model for the account. This can be useful notably to store a profile or similar information."),(0,a.kt)("p",null,"These relations can be defined when creating new models, using the ",(0,a.kt)("a",{parentName:"p",href:"/docs/preview/guides/creating-composites/directives#createmodel"},(0,a.kt)("inlineCode",{parentName:"a"},"@createModel")," directive")," with the ",(0,a.kt)("inlineCode",{parentName:"p"},"accountRelation")," argument set to ",(0,a.kt)("inlineCode",{parentName:"p"},"SINGLE"),"."),(0,a.kt)("h4",{id:"account-to-multiple-documents"},"Account to multiple documents"),(0,a.kt)("p",null,"This variant allows ",(0,a.kt)("strong",{parentName:"p"},"any number of documents")," of a given model to be associated to the account."),(0,a.kt)("p",null,"These relations can be defined when creating new models, using the ",(0,a.kt)("a",{parentName:"p",href:"/docs/preview/guides/creating-composites/directives#createmodel"},(0,a.kt)("inlineCode",{parentName:"a"},"@createModel")," directive")," with the ",(0,a.kt)("inlineCode",{parentName:"p"},"accountRelation")," argument set to ",(0,a.kt)("inlineCode",{parentName:"p"},"LIST"),"."),(0,a.kt)("h3",{id:"document-to-account"},"Document to account"),(0,a.kt)("p",null,"The ComposeDB runtime logic automatically replaces ",(0,a.kt)("a",{parentName:"p",href:"/docs/preview/guides/creating-composites/scalars#did"},(0,a.kt)("inlineCode",{parentName:"a"},"DID")," scalars")," defined in a schema by ",(0,a.kt)("a",{parentName:"p",href:"/docs/preview/guides/interacting/queries#ceramicaccount-object"},(0,a.kt)("inlineCode",{parentName:"a"},"CeramicAccount")," objects"),", allowing to access the documents associated to the given account."),(0,a.kt)("p",null,"In order to make these fields directly queryable from the index, the schema must use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/preview/guides/creating-composites/directives#accountreference"},(0,a.kt)("inlineCode",{parentName:"a"},"@accountReference")," directive")," on these fields."),(0,a.kt)("h3",{id:"document-to-document"},"Document to document"),(0,a.kt)("p",null,"Relations between documents can be defined on fields using the ",(0,a.kt)("a",{parentName:"p",href:"/docs/preview/guides/creating-composites/scalars#streamid"},(0,a.kt)("inlineCode",{parentName:"a"},"StreamID")," scalar")," with the ",(0,a.kt)("a",{parentName:"p",href:"/docs/preview/guides/creating-composites/directives#documentreference"},(0,a.kt)("inlineCode",{parentName:"a"},"@documentReference")," directive")," specifying the model the related document must use. This allows to define ",(0,a.kt)("strong",{parentName:"p"},"many-to-one"),' relations between documents, for example many "comment" documents to a single "post" document.'),(0,a.kt)("p",null,"Using the ComposeDB runtime, the associated document can be accessed directly if a view using the ",(0,a.kt)("a",{parentName:"p",href:"/docs/preview/guides/creating-composites/directives#relationdocument"},(0,a.kt)("inlineCode",{parentName:"a"},"@relationDocument")," directive")," is defined in the model."),(0,a.kt)("p",null,"It is also possible to represent ",(0,a.kt)("strong",{parentName:"p"},"one-to-many"),' relations, for example one "post" document to many "comment" documents, by using the ',(0,a.kt)("a",{parentName:"p",href:"/docs/preview/guides/creating-composites/directives#relationfrom"},(0,a.kt)("inlineCode",{parentName:"a"},"@relationFrom"))," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/preview/guides/creating-composites/directives#relationcountfrom"},(0,a.kt)("inlineCode",{parentName:"a"},"@relationCountFrom"))," directives to represent the other side of the relations."))}u.isMDXComponent=!0}}]);