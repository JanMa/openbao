"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4679],{35635:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var s=n(74848),d=n(28453);const i={sidebar_label:"Okta",description:"The '/identity/mfa/method/okta' endpoint focuses on managing Okta MFA behaviors in OpenBao."},a=void 0,l={id:"secret/identity/mfa/okta",title:"okta",description:"The '/identity/mfa/method/okta' endpoint focuses on managing Okta MFA behaviors in OpenBao.",source:"@site/content/api-docs/secret/identity/mfa/okta.mdx",sourceDirName:"secret/identity/mfa",slug:"/secret/identity/mfa/okta",permalink:"/openbao/api-docs/secret/identity/mfa/okta",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/api-docs/secret/identity/mfa/okta.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Okta",description:"The '/identity/mfa/method/okta' endpoint focuses on managing Okta MFA behaviors in OpenBao."},sidebar:"api",previous:{title:"Duo",permalink:"/openbao/api-docs/secret/identity/mfa/duo"},next:{title:"PingID",permalink:"/openbao/api-docs/secret/identity/mfa/pingid"}},r={},o=[{value:"Configure okta MFA method",id:"configure-okta-mfa-method",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Sample payload",id:"sample-payload",level:3},{value:"Sample request",id:"sample-request",level:3},{value:"Read okta MFA method",id:"read-okta-mfa-method",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Sample request",id:"sample-request-1",level:3},{value:"Sample response",id:"sample-response",level:3},{value:"Delete okta MFA method",id:"delete-okta-mfa-method",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Sample request",id:"sample-request-2",level:3},{value:"List okta MFA methods",id:"list-okta-mfa-methods",level:2},{value:"Sample request",id:"sample-request-3",level:3},{value:"Sample response",id:"sample-response-1",level:3}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"configure-okta-mfa-method",children:"Configure okta MFA method"}),"\n",(0,s.jsx)(t.p,{children:"This endpoint defines an MFA method of type Okta."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Method"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"POST"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"/identity/mfa/method/okta/:method_id"})})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"method_id"})," ",(0,s.jsx)(t.code,{children:'(string: "")'})," - Optional UUID to specify if updating an existing method."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"method_name"})," ",(0,s.jsx)(t.code,{children:"(string)"})," - The unique name identifier for this MFA method."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"username_format"})," ",(0,s.jsx)(t.code,{children:"(string)"})," - A format string for mapping Identity names to MFA method names. Values to substitute should be placed in ",(0,s.jsx)(t.code,{children:"{{}}"}),". For example, ",(0,s.jsx)(t.code,{children:'"{{identity.entity.name}}@example.com"'}),". If blank, the Entity's Name field is used as-is."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"org_name"})," ",(0,s.jsx)(t.code,{children:"(string: <required>)"})," - Name of the organization to be used in the Okta API."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"api_token"})," ",(0,s.jsx)(t.code,{children:"(string: <required>)"})," - Okta API key."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"base_url"})," ",(0,s.jsx)(t.code,{children:"(string)"})," - If set, will be used as the base domain for API requests. Examples are okta.com, oktapreview.com, and okta-emea.com."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"primary_email"})," ",(0,s.jsx)(t.code,{children:"(bool: false)"})," - If set, the username will only match the primary email for the account."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"sample-payload",children:"Sample payload"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "username_format": "{{identity.entity.aliases.auth_userpass_1793464a.name}}",\n  "org_name": "dev-262778",\n  "api_token": "0081u7KrReNkzmABZJAP2oDyIXccveqx9vIOEyCZDC"\n}\n'})}),"\n",(0,s.jsx)(t.h3,{id:"sample-request",children:"Sample request"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/identity/mfa/method/okta\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/identity/mfa/method/okta/1db034b5-81f1-4a2b-8c2b-0f51ed0bd9fc\n'})}),"\n",(0,s.jsx)(t.h2,{id:"read-okta-mfa-method",children:"Read okta MFA method"}),"\n",(0,s.jsx)(t.p,{children:"This endpoint queries the MFA configuration of Okta type for a given method\nname."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Method"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"GET"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"/identity/mfa/method/okta/:id"})})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"id"})," ",(0,s.jsx)(t.code,{children:"(string: <required>)"})," \u2013 UUID of the MFA method."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"sample-request-1",children:"Sample request"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request GET \\\n    http://127.0.0.1:8200/v1/identity/mfa/method/okta/1db034b5-81f1-4a2b-8c2b-0f51ed0bd9fc\n'})}),"\n",(0,s.jsx)(t.h3,{id:"sample-response",children:"Sample response"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "data": {\n    "api_token": "0081u7KrReNkzmABZJAP2oDyIXccveqx9vIOEyCZDC",\n    "id": "1db034b5-81f1-4a2b-8c2b-0f51ed0bd9fc",\n    "name": "my_okta",\n    "org_name": "dev-262778",\n    "type": "okta",\n    "username_format": "{{identity.entity.aliases.auth_userpass_1793464a.name}}"\n  }\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"delete-okta-mfa-method",children:"Delete okta MFA method"}),"\n",(0,s.jsxs)(t.p,{children:["This endpoint deletes a Okta MFA method. The MFA methods can only be deleted if they're not currently in use\nby a ",(0,s.jsx)(t.a,{href:"/api-docs/secret/identity/mfa/login-enforcement",children:"login enforcement"}),"."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Method"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"DELETE"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"/identity/mfa/method/okta/:id"})})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"id"})," ",(0,s.jsx)(t.code,{children:"(string: <required>)"})," - UUID of the MFA method."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"sample-request-2",children:"Sample request"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request DELETE \\\n    http://127.0.0.1:8200/v1/identity/mfa/method/okta/1db034b5-81f1-4a2b-8c2b-0f51ed0bd9fc\n'})}),"\n",(0,s.jsx)(t.h2,{id:"list-okta-mfa-methods",children:"List okta MFA methods"}),"\n",(0,s.jsx)(t.p,{children:"This endpoint lists Okta MFA methods that are visible."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Method"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"LIST"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"/identity/mfa/method/okta"})})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"sample-request-3",children:"Sample request"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request LIST \\\n    http://127.0.0.1:8200/v1/identity/mfa/method/okta\n'})}),"\n",(0,s.jsx)(t.h3,{id:"sample-response-1",children:"Sample response"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "data": {\n    "keys": [\n      "1db034b5-81f1-4a2b-8c2b-0f51ed0bd9fc"\n    ]\n  }\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var s=n(96540);const d={},i=s.createContext(d);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);