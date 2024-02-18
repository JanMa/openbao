"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9113],{92337:(e,s,l)=>{l.r(s),l.d(s,{assets:()=>r,contentTitle:()=>c,default:()=>p,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var i=l(74848),n=l(28453);const t={description:"The `/sys/policies/` endpoints are used to manage ACL policies in OpenBao."},c="/sys/policies/",d={id:"system/policies",title:"/sys/policies/",description:"The `/sys/policies/` endpoints are used to manage ACL policies in OpenBao.",source:"@site/content/api-docs/system/policies.mdx",sourceDirName:"system",slug:"/system/policies",permalink:"/openbao/api-docs/system/policies",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/api-docs/system/policies.mdx",tags:[],version:"current",frontMatter:{description:"The `/sys/policies/` endpoints are used to manage ACL policies in OpenBao."},sidebar:"api",previous:{title:"/sys/policy",permalink:"/openbao/api-docs/system/policy"},next:{title:"/sys/policies/password/",permalink:"/openbao/api-docs/system/policies-password"}},r={},a=[{value:"List ACL policies",id:"list-acl-policies",level:2},{value:"Sample request",id:"sample-request",level:3},{value:"Sample response",id:"sample-response",level:3},{value:"Read ACL policy",id:"read-acl-policy",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Sample request",id:"sample-request-1",level:3},{value:"Sample response",id:"sample-response-1",level:3},{value:"Create/Update ACL policy",id:"createupdate-acl-policy",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Sample payload",id:"sample-payload",level:3},{value:"Sample request",id:"sample-request-2",level:3},{value:"Delete ACL policy",id:"delete-acl-policy",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Sample request",id:"sample-request-3",level:3}];function o(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"syspolicies",children:(0,i.jsx)(s.code,{children:"/sys/policies/"})}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"/sys/policies"})," endpoints are used to manage ACL, RGP, and EGP policies in OpenBao."]}),"\n",(0,i.jsx)(s.h2,{id:"list-acl-policies",children:"List ACL policies"}),"\n",(0,i.jsx)(s.p,{children:"This endpoint lists all configured ACL policies."}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Method"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"LIST"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"/sys/policies/acl"})})]})})]}),"\n",(0,i.jsx)(s.h3,{id:"sample-request",children:"Sample request"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell-session",children:'$ curl \\\n    -X LIST --header "X-Vault-Token: ..." \\\n    http://127.0.0.1:8200/v1/sys/policies/acl\n'})}),"\n",(0,i.jsx)(s.h3,{id:"sample-response",children:"Sample response"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-json",children:'{\n  "keys": ["root", "my-policy"]\n}\n'})}),"\n",(0,i.jsx)(s.h2,{id:"read-acl-policy",children:"Read ACL policy"}),"\n",(0,i.jsx)(s.p,{children:"This endpoint retrieves information about the named ACL policy."}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Method"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"GET"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"/sys/policies/acl/:name"})})]})})]}),"\n",(0,i.jsx)(s.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"name"})," ",(0,i.jsx)(s.code,{children:"(string: <required>)"})," \u2013\xa0Specifies the name of the policy to retrieve.\nThis is specified as part of the request URL."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"sample-request-1",children:"Sample request"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    http://127.0.0.1:8200/v1/sys/policies/acl/my-policy\n'})}),"\n",(0,i.jsx)(s.h3,{id:"sample-response-1",children:"Sample response"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-json",children:'{\n  "name": "deploy",\n  "policy": "path \\"secret/foo\\" {..."\n}\n'})}),"\n",(0,i.jsx)(s.h2,{id:"createupdate-acl-policy",children:"Create/Update ACL policy"}),"\n",(0,i.jsx)(s.p,{children:"This endpoint adds a new or updates an existing ACL policy. Once a policy is\nupdated, it takes effect immediately to all associated users."}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Method"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"POST"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"/sys/policies/acl/:name"})})]})})]}),"\n",(0,i.jsx)(s.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"name"})," ",(0,i.jsx)(s.code,{children:"(string: <required>)"})," \u2013\xa0Specifies the name of the policy to create.\nThis is specified as part of the request URL."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"policy"})," ",(0,i.jsx)(s.code,{children:"(string: <required>)"})," -\xa0Specifies the policy document. This can be\nbase64-encoded to avoid string escaping."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"sample-payload",children:"Sample payload"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-json",children:'{\n  "policy": "path \\"secret/foo\\" {..."\n}\n'})}),"\n",(0,i.jsx)(s.h3,{id:"sample-request-2",children:"Sample request"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/sys/policies/acl/my-policy\n'})}),"\n",(0,i.jsx)(s.h2,{id:"delete-acl-policy",children:"Delete ACL policy"}),"\n",(0,i.jsx)(s.p,{children:"This endpoint deletes the ACL policy with the given name. This will immediately\naffect all users associated with this policy. (A deleted policy set on a token\nacts as an empty policy.)"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Method"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"DELETE"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"/sys/policies/acl/:name"})})]})})]}),"\n",(0,i.jsx)(s.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"name"})," ",(0,i.jsx)(s.code,{children:"(string: <required>)"})," \u2013\xa0Specifies the name of the policy to delete.\nThis is specified as part of the request URL."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"sample-request-3",children:"Sample request"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request DELETE \\\n    http://127.0.0.1:8200/v1/sys/policies/acl/my-policy\n'})})]})}function p(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,s,l)=>{l.d(s,{R:()=>c,x:()=>d});var i=l(96540);const n={},t=i.createContext(n);function c(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);