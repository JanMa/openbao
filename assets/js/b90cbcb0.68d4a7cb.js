"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7432],{15899:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var i=t(74848),s=t(28453);const a={layout:"api",page_title:"Identity Secret Backend: Entity Alias - HTTP API",description:"This is the API documentation for managing entity aliases in the identity store."},l=void 0,d={id:"secret/identity/entity-alias",title:"entity-alias",description:"This is the API documentation for managing entity aliases in the identity store.",source:"@site/content/api-docs/secret/identity/entity-alias.mdx",sourceDirName:"secret/identity",slug:"/secret/identity/entity-alias",permalink:"/openbao/api-docs/secret/identity/entity-alias",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/api-docs/secret/identity/entity-alias.mdx",tags:[],version:"current",frontMatter:{layout:"api",page_title:"Identity Secret Backend: Entity Alias - HTTP API",description:"This is the API documentation for managing entity aliases in the identity store."},sidebar:"apiSidebar",previous:{title:"Identity secrets engine (API)",permalink:"/openbao/api-docs/secret/identity/"},next:{title:"entity",permalink:"/openbao/api-docs/secret/identity/entity"}},r={},c=[{value:"Create an entity alias",id:"create-an-entity-alias",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Sample payload",id:"sample-payload",level:3},{value:"Sample request",id:"sample-request",level:3},{value:"Sample response",id:"sample-response",level:3},{value:"Read entity alias by ID",id:"read-entity-alias-by-id",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Sample request",id:"sample-request-1",level:3},{value:"Sample response",id:"sample-response-1",level:3},{value:"Update entity alias by ID",id:"update-entity-alias-by-id",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Sample payload",id:"sample-payload-1",level:3},{value:"Sample request",id:"sample-request-2",level:3},{value:"Sample response",id:"sample-response-2",level:3},{value:"Delete entity alias by ID",id:"delete-entity-alias-by-id",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"Sample request",id:"sample-request-3",level:3},{value:"List entity aliases by ID",id:"list-entity-aliases-by-id",level:2},{value:"Sample request",id:"sample-request-4",level:3},{value:"Sample response",id:"sample-response-3",level:3}];function o(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["~> ",(0,i.jsx)(n.strong,{children:"NOTE:"})," Be careful in granting permissions to non-readonly identity endpoints.\nIf a user can modify an entity, they can grant it additional privileges through\npolicies.  If a user can modify an alias they can login with, they can bind it to\nan entity with higher privileges."]}),"\n",(0,i.jsx)(n.h2,{id:"create-an-entity-alias",children:"Create an entity alias"}),"\n",(0,i.jsxs)(n.p,{children:["~> ",(0,i.jsx)(n.strong,{children:"IMPORTANT NOTE:"})," Prior to creating any alias it is important to consider the cardinality of the alias' name,\nsince there are potential security issues to be aware of. The main one revolves around alias reuse. It is possible\nfor multiple authenticated entities to be bound to the same alias, and therefore gain access to all of its privileges.\nIt is recommended, whenever possible, to create a unique alias for each entity. This is especially true in the case\nof machine generated entities."]}),"\n",(0,i.jsx)(n.p,{children:"This endpoint creates a new alias for an entity."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"POST"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"/identity/entity-alias"})})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"name"})," ",(0,i.jsx)(n.code,{children:"(string: <required>)"})," - Name of the alias. Name should be the identifier\nof the client in the authentication source. For example, if the alias belongs\nto userpass backend, the name should be a valid username within userpass\nauth method. If the alias belongs to GitHub, it should be the GitHub username. If the alias\nbelongs to an approle auth method, the name should be a valid RoleID."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"id"})," ",(0,i.jsx)(n.code,{children:"(string: <optional>)"})," - ID of the entity alias. If set, updates the\ncorresponding entity alias."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"canonical_id"})," ",(0,i.jsx)(n.code,{children:"(string: <required>)"})," - Entity ID to which this alias belongs to."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"mount_accessor"})," ",(0,i.jsx)(n.code,{children:"(string: <required>)"})," - Accessor of the mount to which the\nalias should belong to."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"custom_metadata"})," ",(0,i.jsx)(n.code,{children:"(map<string|string>: <optional>)"})," - A map of arbitrary string to string valued\nuser-provided metadata meant to describe the alias."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"sample-payload",children:"Sample payload"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "name": "testuser",\n  "canonical_id": "404e57bc-a0b1-a80f-0a73-b6e92e8a52d3",\n  "mount_accessor": "auth_userpass_e50b1a44",\n  "custom_metadata": {\n    "contact_email": "james_updated@example.com"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"sample-request",children:"Sample request"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/identity/entity-alias\n'})}),"\n",(0,i.jsx)(n.h3,{id:"sample-response",children:"Sample response"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "canonical_id": "404e57bc-a0b1-a80f-0a73-b6e92e8a52d3",\n    "id": "34982d3d-e3ce-5d8b-6e5f-b9bb34246c31"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"read-entity-alias-by-id",children:"Read entity alias by ID"}),"\n",(0,i.jsx)(n.p,{children:"This endpoint queries the entity alias by its identifier."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"GET"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"/identity/entity-alias/id/:id"})})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"id"})," ",(0,i.jsx)(n.code,{children:"(string: <required>)"})," \u2013 Identifier of entity alias."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"sample-request-1",children:"Sample request"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    http://127.0.0.1:8200/v1/identity/entity-alias/id/34982d3d-e3ce-5d8b-6e5f-b9bb34246c31\n'})}),"\n",(0,i.jsx)(n.h3,{id:"sample-response-1",children:"Sample response"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "creation_time": "2017-07-25T21:41:09.820717636Z",\n    "canonical_id": "404e57bc-a0b1-a80f-0a73-b6e92e8a52d3",\n    "custom_metadata": {\n      "contact_email":"james@example.com"\n    },\n    "id": "34982d3d-e3ce-5d8b-6e5f-b9bb34246c31",\n    "last_update_time": "2017-07-25T21:41:09.820717636Z",\n    "local": false,\n    "metadata": {\n      "group": "san_francisco",\n      "region": "west"\n    },\n    "mount_accessor": "auth_userpass_e50b1a44",\n    "mount_path": "userpass/",\n    "mount_type": "userpass",\n    "name": "testuser"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"update-entity-alias-by-id",children:"Update entity alias by ID"}),"\n",(0,i.jsx)(n.p,{children:"This endpoint is used to update an existing entity alias."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"POST"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"/identity/entity-alias/id/:id"})})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"id"})," ",(0,i.jsx)(n.code,{children:"(string: <required>)"})," \u2013 Identifier of the entity alias."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"name"})," ",(0,i.jsx)(n.code,{children:'(string: "")'})," - Name of the alias. Name should be the identifier\nof the client in the authentication source. For example, if the alias belongs\nto userpass backend, the name should be a valid username within userpass\nbackend. If alias belongs to GitHub, it should be the GitHub username."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"canonical_id"})," ",(0,i.jsx)(n.code,{children:'(string: "")'})," - Entity ID to which this alias belongs to."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"mount_accessor"})," ",(0,i.jsx)(n.code,{children:'(string: "")'})," - Accessor of the mount to which the\nalias should belong to."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"custom_metadata"})," ",(0,i.jsx)(n.code,{children:"(map<string|string>: <optional>)"})," - A map of arbitrary string to string valued\nuser-provided metadata meant to describe the alias."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"sample-payload-1",children:"Sample payload"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "name": "testuser",\n  "canonical_id": "404e57bc-a0b1-a80f-0a73-b6e92e8a52d3",\n  "mount_accessor": "auth_userpass_e50b1a44"\n   "custom_metadata": {\n    "contact_email": "james@example.com"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"sample-request-2",children:"Sample request"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/identity/entity-alias/id/34982d3d-e3ce-5d8b-6e5f-b9bb34246c31\n'})}),"\n",(0,i.jsx)(n.h3,{id:"sample-response-2",children:"Sample response"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "canonical_id": "404e57bc-a0b1-a80f-0a73-b6e92e8a52d3",\n    "id": "34982d3d-e3ce-5d8b-6e5f-b9bb34246c31"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"delete-entity-alias-by-id",children:"Delete entity alias by ID"}),"\n",(0,i.jsx)(n.p,{children:"This endpoint deletes an alias from its corresponding entity."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"DELETE"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"/identity/entity-alias/id/:id"})})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"parameters-3",children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"id"})," ",(0,i.jsx)(n.code,{children:"(string: <required>)"})," \u2013 Identifier of the entity alias."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"sample-request-3",children:"Sample request"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request DELETE \\\n    http://127.0.0.1:8200/v1/identity/entity-alias/id/34982d3d-e3ce-5d8b-6e5f-b9bb34246c31\n'})}),"\n",(0,i.jsx)(n.h2,{id:"list-entity-aliases-by-id",children:"List entity aliases by ID"}),"\n",(0,i.jsx)(n.p,{children:"The list by ID endpoint returns the available entity aliases and key data by their identifiers."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"LIST"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"/identity/entity-alias/id"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"GET"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"/identity/entity-alias/id?list=true"})})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"sample-request-4",children:"Sample request"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request LIST \\\n    http://127.0.0.1:8200/v1/identity/entity-alias/id\n'})}),"\n",(0,i.jsx)(n.h3,{id:"sample-response-3",children:"Sample response"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "data": {\n        "key_info": {\n            "35405f3c-884a-a3ff-4176-bac57f220811": {\n                "canonical_id": "0c34f097-6313-9597-3b22-91e34072ad28",\n                "custom_metadata": null,\n                "local": false,\n                "mount_accessor": "auth_jwt_e47c5220",\n                "mount_path": "auth/tfc_jwt/",\n                "mount_type": "jwt",\n                "name": "app-alias-1"\n            },\n            "4065d8c7-4fa6-db9d-e190-f9644c09638a": {\n                "canonical_id": "21c6f2bf-b9b0-db44-242f-18bf76cb9ff0",\n                "custom_metadata": null,\n                "local": false,\n                "mount_accessor": "auth_ns_token_79c4d932",\n                "mount_path": "auth/token/",\n                "mount_type": "ns_token",\n                "name": "app-alias-2"\n            }\n        },\n        "keys": [\n            "35405f3c-884a-a3ff-4176-bac57f220811",\n            "4065d8c7-4fa6-db9d-e190-f9644c09638a"\n        ]\n    }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>d});var i=t(96540);const s={},a=i.createContext(s);function l(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);