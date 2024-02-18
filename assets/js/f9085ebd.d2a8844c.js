"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[696],{53772:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>o,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var i=t(74848),s=t(28453);const l={sidebar_label:"Entity",description:"This is the API documentation for managing entities in the identity store."},d=void 0,a={id:"secret/identity/entity",title:"entity",description:"This is the API documentation for managing entities in the identity store.",source:"@site/content/api-docs/secret/identity/entity.mdx",sourceDirName:"secret/identity",slug:"/secret/identity/entity",permalink:"/openbao/api-docs/secret/identity/entity",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/api-docs/secret/identity/entity.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Entity",description:"This is the API documentation for managing entities in the identity store."},sidebar:"api",previous:{title:"Overview",permalink:"/openbao/api-docs/secret/identity/"},next:{title:"Entity Alias",permalink:"/openbao/api-docs/secret/identity/entity-alias"}},r={},c=[{value:"Create an entity",id:"create-an-entity",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Sample payload",id:"sample-payload",level:3},{value:"Sample request",id:"sample-request",level:3},{value:"Sample response",id:"sample-response",level:3},{value:"Read entity by ID",id:"read-entity-by-id",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Sample request",id:"sample-request-1",level:3},{value:"Sample response",id:"sample-response-1",level:3},{value:"Update entity by ID",id:"update-entity-by-id",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Sample payload",id:"sample-payload-1",level:3},{value:"Sample request",id:"sample-request-2",level:3},{value:"Sample response",id:"sample-response-2",level:3},{value:"Delete entity by ID",id:"delete-entity-by-id",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"Sample request",id:"sample-request-3",level:3},{value:"Batch delete entities",id:"batch-delete-entities",level:2},{value:"Parameters",id:"parameters-4",level:3},{value:"Sample payload",id:"sample-payload-2",level:3},{value:"Sample request",id:"sample-request-4",level:3},{value:"List entities by ID",id:"list-entities-by-id",level:2},{value:"Sample request",id:"sample-request-5",level:3},{value:"Sample response",id:"sample-response-3",level:3},{value:"Create/Update entity by name",id:"createupdate-entity-by-name",level:2},{value:"Parameters",id:"parameters-5",level:3},{value:"Sample payload",id:"sample-payload-3",level:3},{value:"Sample request",id:"sample-request-6",level:3},{value:"Sample response",id:"sample-response-4",level:3},{value:"Read entity by name",id:"read-entity-by-name",level:2},{value:"Parameters",id:"parameters-6",level:3},{value:"Sample request",id:"sample-request-7",level:3},{value:"Sample response",id:"sample-response-5",level:3},{value:"Delete entity by name",id:"delete-entity-by-name",level:2},{value:"Parameters",id:"parameters-7",level:3},{value:"Sample request",id:"sample-request-8",level:3},{value:"List entities by name",id:"list-entities-by-name",level:2},{value:"Sample request",id:"sample-request-9",level:3},{value:"Sample response",id:"sample-response-6",level:3},{value:"Merge entities",id:"merge-entities",level:2},{value:"Parameters",id:"parameters-8",level:3},{value:"Sample payload",id:"sample-payload-4",level:3},{value:"Sample request",id:"sample-request-10",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"create-an-entity",children:"Create an entity"}),"\n",(0,i.jsx)(n.p,{children:"This endpoint creates or updates an Entity."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"POST"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"/identity/entity"})})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"name"})," ",(0,i.jsx)(n.code,{children:"(string: entity-<UUID>)"})," \u2013 Name of the entity."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"id"})," ",(0,i.jsx)(n.code,{children:"(string: <optional>)"})," - ID of the entity. If set, updates the\ncorresponding existing entity."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"metadata"})," ",(0,i.jsx)(n.code,{children:"(key-value-map: {})"})," \u2013 Metadata to be associated with the\nentity."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"policies"})," ",(0,i.jsx)(n.code,{children:"(list of strings: [])"})," \u2013 Policies to be tied to the entity."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"disabled"})," ",(0,i.jsx)(n.code,{children:"(bool: false)"})," \u2013 Whether the entity is disabled. Disabled\nentities' associated tokens cannot be used, but are not revoked."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"sample-payload",children:"Sample payload"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "metadata": {\n    "organization": "openbao",\n    "team": "openbao"\n  },\n  "policies": ["eng-dev", "infra-dev"]\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"sample-request",children:"Sample request"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/identity/entity\n'})}),"\n",(0,i.jsx)(n.h3,{id:"sample-response",children:"Sample response"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "id": "8d6a45e5-572f-8f13-d226-cd0d1ec57297",\n    "aliases": null\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"read-entity-by-id",children:"Read entity by ID"}),"\n",(0,i.jsx)(n.p,{children:"This endpoint queries the entity by its identifier."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"GET"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"/identity/entity/id/:id"})})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"id"})," ",(0,i.jsx)(n.code,{children:"(string: <required>)"})," \u2013 Identifier of the entity."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"sample-request-1",children:"Sample request"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    http://127.0.0.1:8200/v1/identity/entity/id/8d6a45e5-572f-8f13-d226-cd0d1ec57297\n'})}),"\n",(0,i.jsx)(n.h3,{id:"sample-response-1",children:"Sample response"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "bucket_key_hash": "177553e4c58987f4cc5d7e530136c642",\n    "creation_time": "2017-07-25T20:29:22.614756844Z",\n    "disabled": false,\n    "id": "8d6a45e5-572f-8f13-d226-cd0d1ec57297",\n    "last_update_time": "2017-07-25T20:29:22.614756844Z",\n    "metadata": {\n      "organization": "openbao",\n      "team": "openbao"\n    },\n    "name": "entity-c323de27-2ad2-5ded-dbf3-0c7ef98bc613",\n    "aliases": [],\n    "policies": ["eng-dev", "infra-dev"]\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"update-entity-by-id",children:"Update entity by ID"}),"\n",(0,i.jsx)(n.p,{children:"This endpoint is used to update an existing entity."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"POST"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"/identity/entity/id/:id"})})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"id"})," ",(0,i.jsx)(n.code,{children:"(string: <required>)"})," \u2013 Identifier of the entity."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"name"})," ",(0,i.jsx)(n.code,{children:"(string: entity-<UUID>)"})," \u2013 Name of the entity."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"metadata"})," ",(0,i.jsx)(n.code,{children:"(key-value-map: {})"})," \u2013 Metadata to be associated with the entity."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"policies"})," ",(0,i.jsx)(n.code,{children:"(list of strings: [])"})," \u2013 Policies to be tied to the entity."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"disabled"})," ",(0,i.jsx)(n.code,{children:"(bool: false)"})," \u2013 Whether the entity is disabled. Disabled\nentities' associated tokens cannot be used, but are not revoked."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"sample-payload-1",children:"Sample payload"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "name": "updatedEntityName",\n  "metadata": {\n    "organization": "openbao",\n    "team": "nomad"\n  },\n  "policies": ["eng-developers", "infra-developers"]\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"sample-request-2",children:"Sample request"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/identity/entity/id/8d6a45e5-572f-8f13-d226-cd0d1ec57297\n'})}),"\n",(0,i.jsx)(n.h3,{id:"sample-response-2",children:"Sample response"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "id": "8d6a45e5-572f-8f13-d226-cd0d1ec57297",\n    "aliases": null\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"delete-entity-by-id",children:"Delete entity by ID"}),"\n",(0,i.jsx)(n.p,{children:"This endpoint deletes an entity and all its associated aliases."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"DELETE"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"/identity/entity/id/:id"})})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"parameters-3",children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"id"})," ",(0,i.jsx)(n.code,{children:"(string: <required>)"})," \u2013 Identifier of the entity."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"sample-request-3",children:"Sample request"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request DELETE \\\n    http://127.0.0.1:8200/v1/identity/entity/id/8d6a45e5-572f-8f13-d226-cd0d1ec57297\n'})}),"\n",(0,i.jsx)(n.h2,{id:"batch-delete-entities",children:"Batch delete entities"}),"\n",(0,i.jsx)(n.p,{children:"This endpoint deletes all entities provided."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"POST"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"/identity/entity/batch-delete"})})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"parameters-4",children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"entity_ids"})," ",(0,i.jsx)(n.code,{children:"([]string: <required>)"})," \u2013 List of entity identifiers to delete."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"sample-payload-2",children:"Sample payload"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "entity_ids": [\n    "02fe5a88-912b-6794-62ed-db873ef86a95",\n    "3bf81bc9-44df-8138-57f9-724a9ae36d04",\n    "627fba68-98c9-c012-71ba-bfb349585ce1",\n    "6c4c805b-b384-3d0e-4d51-44d349887b96",\n    "70a72feb-35d1-c775-0813-8efaa8b4b9b5",\n    "f1092a67-ce34-48fd-161d-c13a367bc1cd",\n    "faedd89a-0d82-c197-c8f9-93a3e6cf0cd0"\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"sample-request-4",children:"Sample request"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/identity/entity/batch-delete\n'})}),"\n",(0,i.jsx)(n.h2,{id:"list-entities-by-id",children:"List entities by ID"}),"\n",(0,i.jsx)(n.p,{children:"This endpoint returns a list of available entities by their identifiers."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"LIST"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"/identity/entity/id"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"GET"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"/identity/entity/id?list=true"})})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"sample-request-5",children:"Sample request"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request LIST \\\n    http://127.0.0.1:8200/v1/identity/entity/id\n'})}),"\n",(0,i.jsx)(n.h3,{id:"sample-response-3",children:"Sample response"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "keys": [\n      "02fe5a88-912b-6794-62ed-db873ef86a95",\n      "3bf81bc9-44df-8138-57f9-724a9ae36d04",\n      "627fba68-98c9-c012-71ba-bfb349585ce1",\n      "6c4c805b-b384-3d0e-4d51-44d349887b96",\n      "70a72feb-35d1-c775-0813-8efaa8b4b9b5",\n      "f1092a67-ce34-48fd-161d-c13a367bc1cd",\n      "faedd89a-0d82-c197-c8f9-93a3e6cf0cd0"\n    ]\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"createupdate-entity-by-name",children:"Create/Update entity by name"}),"\n",(0,i.jsx)(n.p,{children:"This endpoint is used to create or update an entity by a given name."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"POST"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"/identity/entity/name/:name"})})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"parameters-5",children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"name"})," ",(0,i.jsx)(n.code,{children:"(string: entity-<UUID>)"})," \u2013 Name of the entity."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"metadata"})," ",(0,i.jsx)(n.code,{children:"(key-value-map: {})"})," \u2013 Metadata to be associated with the entity."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"policies"})," ",(0,i.jsx)(n.code,{children:"(list of strings: [])"})," \u2013 Policies to be tied to the entity."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"disabled"})," ",(0,i.jsx)(n.code,{children:"(bool: false)"})," \u2013 Whether the entity is disabled. Disabled\nentities' associated tokens cannot be used, but are not revoked."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"sample-payload-3",children:"Sample payload"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "metadata": {\n    "organization": "openbao",\n    "team": "nomad"\n  },\n  "policies": ["eng-developers", "infra-developers"]\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"sample-request-6",children:"Sample request"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/identity/entity/name/testentityname\n'})}),"\n",(0,i.jsx)(n.h3,{id:"sample-response-4",children:"Sample response"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "aliases": null,\n    "id": "0826be06-577c-a076-3942-2f92da0310ce"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"read-entity-by-name",children:"Read entity by name"}),"\n",(0,i.jsx)(n.p,{children:"This endpoint queries the entity by its name."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"GET"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"/identity/entity/name/:name"})})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"parameters-6",children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"name"})," ",(0,i.jsx)(n.code,{children:"(string: <required>)"})," \u2013 Name of the entity."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"sample-request-7",children:"Sample request"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    http://127.0.0.1:8200/v1/identity/entity/name/testentityname\n'})}),"\n",(0,i.jsx)(n.h3,{id:"sample-response-5",children:"Sample response"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "aliases": [],\n    "creation_time": "2018-09-19T17:20:27.705389973Z",\n    "direct_group_ids": [],\n    "disabled": false,\n    "group_ids": [],\n    "id": "0826be06-577c-a076-3942-2f92da0310ce",\n    "inherited_group_ids": [],\n    "last_update_time": "2018-09-19T17:20:27.705389973Z",\n    "merged_entity_ids": null,\n    "metadata": {\n      "organization": "openbao",\n      "team": "nomad"\n    },\n    "name": "testentityname",\n    "policies": ["eng-developers", "infra-developers"]\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"delete-entity-by-name",children:"Delete entity by name"}),"\n",(0,i.jsx)(n.p,{children:"This endpoint deletes an entity and all its associated aliases, given the\nentity name."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"DELETE"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"/identity/entity/name/:name"})})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"parameters-7",children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"name"})," ",(0,i.jsx)(n.code,{children:"(string: <required>)"})," \u2013 Name of the entity."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"sample-request-8",children:"Sample request"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request DELETE \\\n    http://127.0.0.1:8200/v1/identity/entity/name/testentityname\n'})}),"\n",(0,i.jsx)(n.h2,{id:"list-entities-by-name",children:"List entities by name"}),"\n",(0,i.jsx)(n.p,{children:"This endpoint returns a list of available entities by their names."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"LIST"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"/identity/entity/name"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"GET"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"/identity/entity/name?list=true"})})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"sample-request-9",children:"Sample request"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request LIST \\\n    http://127.0.0.1:8200/v1/identity/entity/name\n'})}),"\n",(0,i.jsx)(n.h3,{id:"sample-response-6",children:"Sample response"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "keys": ["testentityname"]\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"merge-entities",children:"Merge entities"}),"\n",(0,i.jsxs)(n.p,{children:["This endpoint merges many entities into one entity. Additionally, all groups associated with ",(0,i.jsx)(n.code,{children:"from_entity_ids"})," are merged with those of ",(0,i.jsx)(n.code,{children:"to_entity_id"}),".\nNote that if these entities contain aliases sharing the same mount accessor, the merge will fail unless ",(0,i.jsx)(n.code,{children:"conflicting_alias_ids_to_keep"})," is present, and\nentities must be merged one at a time. This is because each entity can only have one alias with each mount accessor - for more\ninformation, see the ",(0,i.jsx)(n.a,{href:"/docs/concepts/identity",children:"identity concepts page"}),"."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"POST"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"/identity/entity/merge"})})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"parameters-8",children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"from_entity_ids"})," ",(0,i.jsx)(n.code,{children:"(list of strings: <required>)"})," - Entity IDs which need to get\nmerged."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"to_entity_id"})," ",(0,i.jsx)(n.code,{children:"(string: <required>)"})," - Entity ID into which all the other\nentities need to get merged."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"force"})," ",(0,i.jsx)(n.code,{children:"(bool: false)"})," - Setting this will follow the 'mine' strategy for\nmerging MFA secrets. If there are secrets of the same type both in entities\nthat are merged from and in entity into which all others are getting merged,\nsecrets in the destination will be unaltered. If not set, this API will throw\nan error containing all the conflicts."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"conflicting_alias_ids_to_keep"})," ",(0,i.jsx)(n.code,{children:"(list of strings: [])"})," - A list of entity\naliases to keep in the case where the to-Entity and from-Entity have aliases\nwith the same mount accessor. In the case where alias share mount accessors,\nthe alias ID given in this list will be kept or merged, and the other alias will be deleted.\nNote that merges requiring this parameter must have only one from-Entity."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"sample-payload-4",children:"Sample payload"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "to_entity_id": "f2cdefbe-f510-a226-77fa-989a48ba6abc",\n  "from_entity_ids": [\n    "1ade80ec-ba5c-8eed-91e2-b9dcd41d6fff",\n    "270976d0-9bab-14a5-4b92-3861805ef73d"\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"sample-request-10",children:"Sample request"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/identity/entity/merge\n'})})]})}function o(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>a});var i=t(96540);const s={},l=i.createContext(s);function d(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);