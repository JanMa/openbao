"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4379],{56815:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>a,toc:()=>o});var l=n(74848),i=n(28453);const t={layout:"api",page_title:"/sys/policies/password - HTTP API",description:"The `/sys/policies/password` endpoints are used to manage password generation policies in OpenBao."},r="/sys/policies/password/",a={id:"system/policies-password",title:"/sys/policies/password/",description:"The `/sys/policies/password` endpoints are used to manage password generation policies in OpenBao.",source:"@site/content/api-docs/system/policies-password.mdx",sourceDirName:"system",slug:"/system/policies-password",permalink:"/openbao/api-docs/system/policies-password",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/api-docs/system/policies-password.mdx",tags:[],version:"current",frontMatter:{layout:"api",page_title:"/sys/policies/password - HTTP API",description:"The `/sys/policies/password` endpoints are used to manage password generation policies in OpenBao."},sidebar:"apiSidebar",previous:{title:"/sys/plugins/reload/backend",permalink:"/openbao/api-docs/system/plugins-reload-backend"},next:{title:"/sys/policies/",permalink:"/openbao/api-docs/system/policies"}},d={},o=[{value:"Create/Update password policy",id:"createupdate-password-policy",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Sample payload",id:"sample-payload",level:3},{value:"Sample request",id:"sample-request",level:3},{value:"List password policies",id:"list-password-policies",level:2},{value:"Sample request",id:"sample-request-1",level:3},{value:"Sample response",id:"sample-response",level:3},{value:"Read password policy",id:"read-password-policy",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Sample request",id:"sample-request-2",level:3},{value:"Sample response",id:"sample-response-1",level:3},{value:"Delete password policy",id:"delete-password-policy",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Sample request",id:"sample-request-3",level:3},{value:"Generate password from password policy",id:"generate-password-from-password-policy",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"Sample request",id:"sample-request-4",level:3},{value:"Sample response",id:"sample-response-2",level:3}];function c(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h1,{id:"syspoliciespassword",children:(0,l.jsx)(s.code,{children:"/sys/policies/password/"})}),"\n",(0,l.jsxs)(s.p,{children:["The ",(0,l.jsx)(s.code,{children:"/sys/policies/password/"})," endpoints are used to manage password generation policies in OpenBao.\nNot all secret engines utilize password policies, so check the documentation for the engine you\nare using for compatibility."]}),"\n",(0,l.jsxs)(s.p,{children:["See ",(0,l.jsx)(s.a,{href:"/docs/concepts/password-policies",children:"Password Policies"})," for details of how password policies work\nas well as the syntax of the policies themselves."]}),"\n",(0,l.jsx)(s.h2,{id:"createupdate-password-policy",children:"Create/Update password policy"}),"\n",(0,l.jsx)(s.p,{children:"This endpoint adds a new or updates an existing password policy. Once a policy is updated,\nit takes effect immediately to all associated secret engines."}),"\n",(0,l.jsx)(s.p,{children:"Prior to OpenBao saving the password policy, it will attempt to generate a number of passwords\nfrom the policy. This helps prevent creating password policies that are impossible to satisfy\nas well as prevent password policies that are overly restrictive which prevents both a poor\nsecurity posture for the policy as well as preventing performance problems due to slow\ngeneration times."}),"\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{style:{textAlign:"left"},children:"Method"}),(0,l.jsx)(s.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,l.jsx)(s.tbody,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.code,{children:"POST"})}),(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.code,{children:"/sys/policies/password/:name"})})]})})]}),"\n",(0,l.jsx)(s.h3,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"name"})," ",(0,l.jsx)(s.code,{children:"(string: <required>)"})," \u2013\xa0Specifies the name of the password policy to create.\nThis is specified as part of the request URL."]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"policy"})," ",(0,l.jsx)(s.code,{children:"(string: <required>)"})," -\xa0Specifies the password policy document. This can be\nbase64-encoded to avoid string escaping. See ",(0,l.jsx)(s.a,{href:"/docs/concepts/password-policies#password-policy-syntax",children:"Password Policy Syntax"}),"\nfor details on password policy definitions."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.h3,{id:"sample-payload",children:"Sample payload"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-json",children:'{\n  "policy": "length = 20\\nrule \\"charset\\" { ..."\n}\n'})}),"\n",(0,l.jsx)(s.h3,{id:"sample-request",children:"Sample request"}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"cURL:"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:'$ cat payload.json\n{\n  "policy": "length = 20\\nrule \\"charset\\" {\\n  charset = \\"abcde\\"\\n}\\n"\n}\n\n$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/sys/policies/password/my-policy\n'})}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"OpenBao CLI:"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:'$ cat my-policy.hcl\nlength = 20\nrule "charset" {\n    charset = "abcde"\n}\n\n$ openbao write sys/policies/password/my-policy policy=@my-policy.hcl\n'})}),"\n",(0,l.jsx)(s.h2,{id:"list-password-policies",children:"List password policies"}),"\n",(0,l.jsx)(s.p,{children:"This endpoints list the password policies."}),"\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{style:{textAlign:"left"},children:"Method"}),(0,l.jsx)(s.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.code,{children:"LIST"})}),(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.code,{children:"/sys/policies/password"})})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.code,{children:"GET"})}),(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.code,{children:"/sys/policies/password?list=true"})})]})]})]}),"\n",(0,l.jsx)(s.h3,{id:"sample-request-1",children:"Sample request"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request LIST \\\n    http://127.0.0.1:8200/v1/sys/policies/password\n'})}),"\n",(0,l.jsx)(s.h3,{id:"sample-response",children:"Sample response"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-json",children:'{\n  "request_id": "58e2540f-8c51-6390-46de-38e279e75468",\n  "lease_id": "",\n  "renewable": false,\n  "lease_duration": 0,\n  "data": {\n    "keys": [\n      "my-policy"\n    ]\n  },\n  "wrap_info": null,\n  "warnings": null,\n  "auth": null\n}\n'})}),"\n",(0,l.jsx)(s.h2,{id:"read-password-policy",children:"Read password policy"}),"\n",(0,l.jsx)(s.p,{children:"This endpoint retrieves information about the named password policy."}),"\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{style:{textAlign:"left"},children:"Method"}),(0,l.jsx)(s.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,l.jsx)(s.tbody,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.code,{children:"GET"})}),(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.code,{children:"/sys/policies/password/:name"})})]})})]}),"\n",(0,l.jsx)(s.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"name"})," ",(0,l.jsx)(s.code,{children:"(string: <required>)"})," \u2013\xa0Specifies the name of the password policy to retrieve.\nThis is specified as part of the request URL."]}),"\n"]}),"\n",(0,l.jsx)(s.h3,{id:"sample-request-2",children:"Sample request"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    http://127.0.0.1:8200/v1/sys/policies/password/my-policy\n'})}),"\n",(0,l.jsx)(s.h3,{id:"sample-response-1",children:"Sample response"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-json",children:'{\n  "policy": "length = 20\\nrule \\"charset\\" { ..."\n}\n'})}),"\n",(0,l.jsx)(s.h2,{id:"delete-password-policy",children:"Delete password policy"}),"\n",(0,l.jsx)(s.p,{children:"This endpoint deletes the password policy with the given name. This does not check if any\nsecret engines are using it prior to deletion, so you should ensure that any engines that\nare utilizing this password policy are changed to a different policy (or to that engines'\ndefault behavior)."}),"\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{style:{textAlign:"left"},children:"Method"}),(0,l.jsx)(s.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,l.jsx)(s.tbody,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.code,{children:"DELETE"})}),(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.code,{children:"/sys/policies/password/:name"})})]})})]}),"\n",(0,l.jsx)(s.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"name"})," ",(0,l.jsx)(s.code,{children:"(string: <required>)"})," \u2013\xa0Specifies the name of the password policy to delete.\nThis is specified as part of the request URL."]}),"\n"]}),"\n",(0,l.jsx)(s.h3,{id:"sample-request-3",children:"Sample request"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request DELETE\n    http://127.0.0.1:8200/v1/sys/policies/password/my-policy\n'})}),"\n",(0,l.jsx)(s.h2,{id:"generate-password-from-password-policy",children:"Generate password from password policy"}),"\n",(0,l.jsx)(s.p,{children:"This endpoint generates a password from the specified existing password policy."}),"\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{style:{textAlign:"left"},children:"Method"}),(0,l.jsx)(s.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,l.jsx)(s.tbody,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.code,{children:"GET"})}),(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.code,{children:"/sys/policies/password/:name/generate"})})]})})]}),"\n",(0,l.jsx)(s.h3,{id:"parameters-3",children:"Parameters"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"name"})," ",(0,l.jsx)(s.code,{children:"(string: <required>)"})," \u2013\xa0Specifies the name of the password policy to generate\na password from. This is specified as part of the request URL."]}),"\n"]}),"\n",(0,l.jsx)(s.h3,{id:"sample-request-4",children:"Sample request"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    http://127.0.0.1:8200/v1/sys/policies/password/my-policy/generate\n'})}),"\n",(0,l.jsx)(s.h3,{id:"sample-response-2",children:"Sample response"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-json",children:'{\n  "password": "..."\n}\n'})})]})}function p(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>a});var l=n(96540);const i={},t=l.createContext(i);function r(e){const s=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(t.Provider,{value:s},e.children)}}}]);