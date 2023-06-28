/**
 * @generated SignedSource<<2727fa1175c304816a577828c2a056f0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type CompositesScreenQuery$variables = {};
export type CompositesScreenQuery$data = {
  readonly composites: ReadonlyArray<{
    readonly compositeID: string;
    readonly description: string | null;
    readonly id: string;
    readonly isEnabled: boolean;
    readonly modelsCount: number;
    readonly mutationsEnabled: boolean;
    readonly subscriptionsEnabled: boolean;
  }>;
};
export type CompositesScreenQuery = {
  response: CompositesScreenQuery$data;
  variables: CompositesScreenQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Composite",
    "kind": "LinkedField",
    "name": "composites",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "compositeID",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "isEnabled",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "mutationsEnabled",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "subscriptionsEnabled",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "modelsCount",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CompositesScreenQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CompositesScreenQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "de9b1b2712c301830f6b22c6134f0cc9",
    "id": null,
    "metadata": {},
    "name": "CompositesScreenQuery",
    "operationKind": "query",
    "text": "query CompositesScreenQuery {\n  composites {\n    id\n    compositeID\n    description\n    isEnabled\n    mutationsEnabled\n    subscriptionsEnabled\n    modelsCount\n  }\n}\n"
  }
};
})();

(node as any).hash = "ba0d4211cfbac343399f691922d236d0";

export default node;
