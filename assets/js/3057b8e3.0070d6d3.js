"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[636],{80735:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>r});var i=s(74848),t=s(28453);const l={sidebar_label:"Lookup",description:"This is the API documentation for entity and group lookups from identity\nstore."},d=void 0,o={id:"secret/identity/lookup",title:"lookup",description:"This is the API documentation for entity and group lookups from identity\nstore.",source:"@site/content/api-docs/secret/identity/lookup.mdx",sourceDirName:"secret/identity",slug:"/secret/identity/lookup",permalink:"/api-docs/secret/identity/lookup",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/api-docs/secret/identity/lookup.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Lookup",description:"This is the API documentation for entity and group lookups from identity\nstore."},sidebar:"api",previous:{title:"Identity Tokens",permalink:"/api-docs/secret/identity/tokens"},next:{title:"OIDC Provider",permalink:"/api-docs/secret/identity/oidc-provider"}},a={},r=[{value:"Lookup an entity",id:"lookup-an-entity",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Sample payload",id:"sample-payload",level:3},{value:"Sample request",id:"sample-request",level:3},{value:"Sample response",id:"sample-response",level:3},{value:"Lookup a group",id:"lookup-a-group",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Sample payload",id:"sample-payload-1",level:3},{value:"Sample request",id:"sample-request-1",level:3},{value:"Sample response",id:"sample-response-1",level:3}];function c(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"lookup-an-entity",children:"Lookup an entity"}),"\n",(0,i.jsxs)(n.p,{children:["This endpoint looks up an entity based on the given criteria. The criteria can\nbe ",(0,i.jsx)(n.code,{children:"name"}),", ",(0,i.jsx)(n.code,{children:"id"}),", ",(0,i.jsx)(n.code,{children:"alias_id"}),", or a combination of ",(0,i.jsx)(n.code,{children:"alias_name"})," and\n",(0,i.jsx)(n.code,{children:"alias_mount_accessor"}),"."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"POST"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"/identity/lookup/entity"})})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"name"})," ",(0,i.jsx)(n.code,{children:'(string: "")'})," \u2013 Name of the entity."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"id"})," ",(0,i.jsx)(n.code,{children:'(string: "")'})," - ID of the entity."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"alias_id"})," ",(0,i.jsx)(n.code,{children:'(string: "")'})," - ID of the alias."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"alias_name"})," ",(0,i.jsx)(n.code,{children:'(string: "")'})," - Name of the alias. This should be supplied in\nconjunction with ",(0,i.jsx)(n.code,{children:"alias_mount_accessor"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"alias_mount_accessor"})," ",(0,i.jsx)(n.code,{children:'(string: "")'})," - Accessor of the mount to which the\nalias belongs to. This should be supplied in conjunction with ",(0,i.jsx)(n.code,{children:"alias_name"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"sample-payload",children:"Sample payload"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "id": "043fedec-967d-b2c9-d3af-0c467b04e1fd"\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"sample-request",children:"Sample request"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/identity/lookup/entity\n'})}),"\n",(0,i.jsx)(n.h3,{id:"sample-response",children:"Sample response"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "aliases": [],\n    "creation_time": "2017-11-13T21:01:33.543497Z",\n    "direct_group_ids": [],\n    "group_ids": [],\n    "id": "043fedec-967d-b2c9-d3af-0c467b04e1fd",\n    "inherited_group_ids": [],\n    "last_update_time": "2017-11-13T21:01:33.543497Z",\n    "merged_entity_ids": null,\n    "metadata": null,\n    "name": "entity_43cc451b",\n    "policies": null\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"lookup-a-group",children:"Lookup a group"}),"\n",(0,i.jsxs)(n.p,{children:["This endpoint looks up a group based on the given criteria. The criteria can\nbe ",(0,i.jsx)(n.code,{children:"name"}),", ",(0,i.jsx)(n.code,{children:"id"}),", ",(0,i.jsx)(n.code,{children:"alias_id"}),", or a combination of ",(0,i.jsx)(n.code,{children:"alias_name"})," and\n",(0,i.jsx)(n.code,{children:"alias_mount_accessor"}),"."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"POST"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"/identity/lookup/group"})})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"name"})," ",(0,i.jsx)(n.code,{children:'(string: "")'})," \u2013 Name of the group."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"id"})," ",(0,i.jsx)(n.code,{children:'(string: "")'})," - ID of the group."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"alias_id"})," ",(0,i.jsx)(n.code,{children:'(string: "")'})," - ID of the alias."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"alias_name"})," ",(0,i.jsx)(n.code,{children:'(string: "")'})," - Name of the alias. This should be supplied in\nconjunction with ",(0,i.jsx)(n.code,{children:"alias_mount_accessor"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"alias_mount_accessor"})," ",(0,i.jsx)(n.code,{children:'(string: "")'})," - Accessor of the mount to which the\nalias belongs to. This should be supplied in conjunction with ",(0,i.jsx)(n.code,{children:"alias_name"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"sample-payload-1",children:"Sample payload"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "id": "70a4bdef-9da3-4460-b524-bb08542eef25"\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"sample-request-1",children:"Sample request"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/identity/lookup/group\n'})}),"\n",(0,i.jsx)(n.h3,{id:"sample-response-1",children:"Sample response"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "alias": {},\n    "creation_time": "2017-11-13T21:06:44.475587Z",\n    "id": "70a4bdef-9da3-4460-b524-bb08542eef25",\n    "last_update_time": "2017-11-13T21:06:44.475587Z",\n    "member_entity_ids": [],\n    "member_group_ids": null,\n    "metadata": null,\n    "modify_index": 1,\n    "name": "group_eaf2aab1",\n    "policies": null,\n    "type": "internal"\n  }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>o});var i=s(96540);const t={},l=i.createContext(t);function d(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);