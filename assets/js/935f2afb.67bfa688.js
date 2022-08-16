"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":"unreleased","badge":true,"className":"docs-version-current","isLast":false,"docsSidebars":{"docs":[{"type":"link","label":"Introduction","href":"/docs/next/introduction","docId":"introduction"},{"type":"category","collapsed":false,"label":"Getting Started","items":[{"type":"link","label":"Installation","href":"/docs/next/installation","docId":"installation"},{"type":"link","label":"Your first composite","href":"/docs/next/first-composite","docId":"first-composite"},{"type":"link","label":"Client setup","href":"/docs/next/client-setup","docId":"client-setup"}],"collapsible":true},{"type":"category","collapsed":false,"label":"Guides","items":[{"type":"link","label":"Concepts overview","href":"/docs/next/guides/concepts-overview","docId":"guides/concepts-overview"},{"type":"link","label":"Data composition","href":"/docs/next/guides/data-composition","docId":"guides/data-composition"},{"type":"category","label":"Using composites","items":[{"type":"link","label":"Discovery","href":"/docs/next/guides/using-composites/discovery","docId":"guides/using-composites/discovery"},{"type":"link","label":"Deployment","href":"/docs/next/guides/using-composites/deployment","docId":"guides/using-composites/deployment"},{"type":"link","label":"Customization","href":"/docs/next/guides/using-composites/customization","docId":"guides/using-composites/customization"}],"collapsed":true,"collapsible":true,"href":"/docs/next/category/using-composites"},{"type":"category","label":"Creating composites","items":[{"type":"link","label":"Schema","href":"/docs/next/guides/creating-composites/schema","docId":"guides/creating-composites/schema"},{"type":"link","label":"Scalars","href":"/docs/next/guides/creating-composites/scalars","docId":"guides/creating-composites/scalars"},{"type":"link","label":"Directives","href":"/docs/next/guides/creating-composites/directives","docId":"guides/creating-composites/directives"}],"collapsed":true,"collapsible":true,"href":"/docs/next/guides/creating-composites/overview"},{"type":"category","label":"Interacting with data","items":[{"type":"link","label":"Querying the graph","href":"/docs/next/guides/interacting/queries","docId":"guides/interacting/queries"},{"type":"link","label":"Performing mutations","href":"/docs/next/guides/interacting/mutations","docId":"guides/interacting/mutations"},{"type":"link","label":"Using Apollo","href":"/docs/next/guides/interacting/using-apollo","docId":"guides/interacting/using-apollo"},{"type":"link","label":"Using Relay","href":"/docs/next/guides/interacting/using-relay","docId":"guides/interacting/using-relay"}],"collapsed":true,"collapsible":true,"href":"/docs/next/category/interacting-with-data"}],"collapsible":true,"href":"/docs/next/category/guides"}],"api":[{"type":"category","collapsed":false,"label":"Client module","items":[{"type":"link","label":"Overview","href":"/docs/next/api/modules/client","docId":"api/modules/client"},{"type":"link","label":"ComposeClient class","href":"/docs/next/api/classes/client.ComposeClient","docId":"api/classes/client.ComposeClient"},{"type":"link","label":"Context class","href":"/docs/next/api/classes/client.Context","docId":"api/classes/client.Context"}],"collapsible":true,"href":"/docs/next/category/client-module"},{"type":"category","collapsed":false,"label":"Developer tools","items":[{"type":"link","label":"Generic developer tools","href":"/docs/next/api/modules/devtools","docId":"api/modules/devtools"},{"type":"link","label":"Node.js developer tools","href":"/docs/next/api/modules/devtools_node","docId":"api/modules/devtools_node"},{"type":"link","label":"Composite class","href":"/docs/next/api/classes/devtools.Composite","docId":"api/classes/devtools.Composite"}],"collapsible":true,"href":"/docs/next/category/developer-tools"},{"type":"category","collapsed":false,"label":"CLI","items":[{"type":"link","label":"Overview","href":"/docs/next/api/modules/cli","docId":"api/modules/cli"},{"type":"link","label":"did commands","href":"/docs/next/api/commands/cli.did","docId":"api/commands/cli.did"},{"type":"link","label":"composite commands","href":"/docs/next/api/commands/cli.composite","docId":"api/commands/cli.composite"},{"type":"link","label":"model commands","href":"/docs/next/api/commands/cli.model","docId":"api/commands/cli.model"},{"type":"link","label":"document commands","href":"/docs/next/api/commands/cli.document","docId":"api/commands/cli.document"},{"type":"link","label":"graphql commands","href":"/docs/next/api/commands/cli.graphql","docId":"api/commands/cli.graphql"}],"collapsible":true,"href":"/docs/next/category/cli"}]},"docs":{"api/classes/client.ComposeClient":{"id":"api/classes/client.ComposeClient","title":"Class: ComposeClient","description":"client.ComposeClient","sidebar":"api"},"api/classes/client.Context":{"id":"api/classes/client.Context","title":"Class: Context","description":"client.Context","sidebar":"api"},"api/classes/devtools.Composite":{"id":"api/classes/devtools.Composite","title":"Class: Composite","description":"devtools.Composite","sidebar":"api"},"api/commands/cli.composite":{"id":"api/commands/cli.composite","title":"CLI: composite:* commands","description":"The group of CLI composite:* commands enables the creation and interactions with Composites","sidebar":"api"},"api/commands/cli.did":{"id":"api/commands/cli.did","title":"CLI: did:* commands","description":"The group of CLI did:* commands enables interactions with DIDs and private keys","sidebar":"api"},"api/commands/cli.document":{"id":"api/commands/cli.document","title":"CLI: document:* commands","description":"The group of CLI document:* commands enables the creation and interactions with Documents","sidebar":"api"},"api/commands/cli.graphql":{"id":"api/commands/cli.graphql","title":"CLI: graphql:* commands","description":"The group of CLI graphql:* commands makes it possible to generate GraphQL Schemas from runtime definitions of your Composites and run a local GraphQL HTTP server","sidebar":"api"},"api/commands/cli.model":{"id":"api/commands/cli.model","title":"CLI: model:* commands","description":"The group of CLI model:* commands enables discovery of Models, as well as their creation and interactions with them","sidebar":"api"},"api/index":{"id":"api/index","title":"ComposeDB API","description":"Modules"},"api/modules/cli":{"id":"api/modules/cli","title":"Module: CLI","description":"ComposeDB CLI - the Command Line Interface that enables interactions with a Ceramic Node","sidebar":"api"},"api/modules/client":{"id":"api/modules/client","title":"Module: client","description":"ComposeDB client.","sidebar":"api"},"api/modules/devtools":{"id":"api/modules/devtools","title":"Module: devtools","description":"Development tools library.","sidebar":"api"},"api/modules/devtools_node":{"id":"api/modules/devtools_node","title":"Module: devtools-node","description":"Node.js-specific development tools.","sidebar":"api"},"client-setup":{"id":"client-setup","title":"Client setup","description":"Compiling the composite","sidebar":"docs"},"first-composite":{"id":"first-composite","title":"Your first composite","description":"ComposeDB provides an abstraction on top of Ceramic streams by leveraging composites, an internal data structure referencing Ceramic model streams and associated metadata. Most of ComposeDB tools and clients interact with various representations of composites.","sidebar":"docs"},"guides/concepts-overview":{"id":"guides/concepts-overview","title":"Concepts overview","description":"ComposeDB provides a graph structure for interacting with data on the Ceramic network.","sidebar":"docs"},"guides/creating-composites/directives":{"id":"guides/creating-composites/directives","title":"Supported directives","description":"Directives provide extra metadata when declaring scalars, lists and shapes.","sidebar":"docs"},"guides/creating-composites/overview":{"id":"guides/creating-composites/overview","title":"Creating Composites","description":"Composites are the abstraction ComposeDB tools and client use to represent and manipulate data models used by applications.","sidebar":"docs"},"guides/creating-composites/scalars":{"id":"guides/creating-composites/scalars","title":"Supported scalars","description":"Scalars represent the leaf values in the graph, either as part of key-value properties in shapes, or value of items in lists. You can learn more about scalars in the GraphQL specification.","sidebar":"docs"},"guides/creating-composites/schema":{"id":"guides/creating-composites/schema","title":"Schema definition","description":"Composite schemas are based on GraphQL\'s Schema Definition Language, using a subset of functionalities offered by GraphQL to describe models used by ComposeDB.","sidebar":"docs"},"guides/data-composition":{"id":"guides/data-composition","title":"Data composition","description":"Data composition is at the heart of ComposeDB, using composites as a proxy for datasets of documents relevant to applications and services.","sidebar":"docs"},"guides/interacting/mutations":{"id":"guides/interacting/mutations","title":"Performing mutations","description":"Enabling mutations","sidebar":"docs"},"guides/interacting/queries":{"id":"guides/interacting/queries","title":"Querying the graph","description":"The ComposeClient automatically generates a GraphQL Schema from the runtime composite definition.","sidebar":"docs"},"guides/interacting/using-apollo":{"id":"guides/interacting/using-apollo","title":"Using Apollo","description":"Apollo is a popular GraphQL client for React and other platforms.","sidebar":"docs"},"guides/interacting/using-relay":{"id":"guides/interacting/using-relay","title":"Using Relay","description":"Relay is a popular GraphQL client for React.","sidebar":"docs"},"guides/using-composites/customization":{"id":"guides/using-composites/customization","title":"Composites customization","description":"Merging composites","sidebar":"docs"},"guides/using-composites/deployment":{"id":"guides/using-composites/deployment","title":"Composites deployment","description":"Valid composites can be deployed to any supporting Ceramic node, by ensuring the model streams described in the composite are available on the node, and that the node is configured to index theses models.","sidebar":"docs"},"guides/using-composites/discovery":{"id":"guides/using-composites/discovery","title":"Composites discovery","description":"ComposeDB does not yet provide a way to discover composites directly, however it is possible to create composites from known models.","sidebar":"docs"},"guides/using-composites/introduction":{"id":"guides/using-composites/introduction","title":"Using Composites","description":"Composites are the primary representation for data models used by ComposeDB. They allow developers to create, share, reuse and combine models together in a consistent way."},"installation":{"id":"installation","title":"Installation","description":"ComposeDB packages are still under development and only released as a developer preview, they are not ready for production use.","sidebar":"docs"},"introduction":{"id":"introduction","title":"Welcome to ComposeDB","description":"ComposeDB is a set of TypeScript libraries and tools to interact with the Dataverse using the Ceramic network.","sidebar":"docs"}}}')}}]);