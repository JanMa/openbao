"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1722],{22097:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=s(74848),t=s(28453);const r={layout:"api",page_title:"/sys/init - HTTP API",description:"The `/sys/init` endpoint is used to initialize a new OpenBao."},l="/sys/init",a={id:"system/init",title:"/sys/init",description:"The `/sys/init` endpoint is used to initialize a new OpenBao.",source:"@site/content/api-docs/system/init.mdx",sourceDirName:"system",slug:"/system/init",permalink:"/openbao/api-docs/system/init",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/api-docs/system/init.mdx",tags:[],version:"current",frontMatter:{layout:"api",page_title:"/sys/init - HTTP API",description:"The `/sys/init` endpoint is used to initialize a new OpenBao."},sidebar:"apiSidebar",previous:{title:"/sys/in-flight-req",permalink:"/openbao/api-docs/system/in-flight-req"},next:{title:"/sys/internal/inspect",permalink:"/openbao/api-docs/system/inspect/"}},o={},d=[{value:"Read initialization status",id:"read-initialization-status",level:2},{value:"Sample request",id:"sample-request",level:3},{value:"Sample response",id:"sample-response",level:3},{value:"Start initialization",id:"start-initialization",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Sample payload",id:"sample-payload",level:3},{value:"Sample request",id:"sample-request-1",level:3},{value:"Sample response",id:"sample-response-1",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"sysinit",children:(0,i.jsx)(n.code,{children:"/sys/init"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"/sys/init"})," endpoint is used to initialize a new OpenBao."]}),"\n",(0,i.jsx)(n.h2,{id:"read-initialization-status",children:"Read initialization status"}),"\n",(0,i.jsx)(n.p,{children:"This endpoint returns the initialization status of OpenBao."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"GET"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"/sys/init"})})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"sample-request",children:"Sample request"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:"$ curl \\\n    http://127.0.0.1:8200/v1/sys/init\n"})}),"\n",(0,i.jsx)(n.h3,{id:"sample-response",children:"Sample response"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "initialized": true\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"start-initialization",children:"Start initialization"}),"\n",(0,i.jsxs)(n.p,{children:["This endpoint initializes a new OpenBao. The OpenBao must not have been previously\ninitialized. The recovery options, as well as the stored shares option, are only\navailable when using ",(0,i.jsx)(n.a,{href:"/docs/concepts/seal#auto-unseal",children:"Auto Unseal"}),"."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"POST"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"/sys/init"})})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"pgp_keys"})," ",(0,i.jsx)(n.code,{children:"(array<string>: nil)"})," \u2013 Specifies an array of PGP public keys used\nto encrypt the output unseal keys. Ordering is preserved. The keys must be\nbase64-encoded from their original binary representation. The size of this\narray must be the same as ",(0,i.jsx)(n.code,{children:"secret_shares"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"root_token_pgp_key"})," ",(0,i.jsx)(n.code,{children:'(string: "")'})," \u2013\xa0Specifies a PGP public key used to\nencrypt the initial root token. The key must be base64-encoded from its\noriginal binary representation."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"secret_shares"})," ",(0,i.jsx)(n.code,{children:"(int: <required>)"})," \u2013\xa0Specifies the number of shares to\nsplit the root key into."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"secret_threshold"})," ",(0,i.jsx)(n.code,{children:"(int: <required>)"})," \u2013\xa0Specifies the number of shares\nrequired to reconstruct the root key. This must be less than or equal\n",(0,i.jsx)(n.code,{children:"secret_shares"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Additionally, the following options are only supported using Auto Unseal:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"stored_shares"})," ",(0,i.jsx)(n.code,{children:"(int: <required>)"})," \u2013 Specifies the number of shares that\nshould be encrypted by the HSM and stored for auto-unsealing. Currently must\nbe the same as ",(0,i.jsx)(n.code,{children:"secret_shares"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"recovery_shares"})," ",(0,i.jsx)(n.code,{children:"(int: 0)"})," \u2013 Specifies the number of shares to\nsplit the recovery key into. This is only available when using Auto Unseal."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"recovery_threshold"})," ",(0,i.jsx)(n.code,{children:"(int: 0)"}),"\xa0\u2013\xa0Specifies the number of shares\nrequired to reconstruct the recovery key. This must be less than or equal to\n",(0,i.jsx)(n.code,{children:"recovery_shares"}),". This is only available when using Auto Unseal."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"recovery_pgp_keys"})," ",(0,i.jsx)(n.code,{children:"(array<string>: nil)"})," \u2013 Specifies an array of PGP public\nkeys used to encrypt the output recovery keys. Ordering is preserved. The keys\nmust be base64-encoded from their original binary representation. The size of\nthis array must be the same as ",(0,i.jsx)(n.code,{children:"recovery_shares"}),". This is only available when using Auto Unseal."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"sample-payload",children:"Sample payload"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "secret_shares": 10,\n  "secret_threshold": 5\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"sample-request-1",children:"Sample request"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:"$ curl \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/sys/init\n"})}),"\n",(0,i.jsx)(n.h3,{id:"sample-response-1",children:"Sample response"}),"\n",(0,i.jsxs)(n.p,{children:["A JSON-encoded object including the (possibly encrypted, if ",(0,i.jsx)(n.code,{children:"pgp_keys"})," was\nprovided) root keys, base 64 encoded root keys and initial root token:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "keys": ["one", "two", "three"],\n  "keys_base64": ["cR9No5cBC", "F3VLrkOo", "zIDSZNGv"],\n  "root_token": "foo"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["-> ",(0,i.jsx)(n.strong,{children:"Warning:"})," Please be reminded that recovery keys are used as an\nauthentication flow for rekeying and regeneration of root credentials and cannot\nbe used to unseal OpenBao in the case of the unavailability of the seal mechanism.\nRefer to the full warning in the documentation for\n",(0,i.jsx)(n.a,{href:"/docs/concepts/seal#auto-unseal",children:"Auto Unseal"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>a});var i=s(96540);const t={},r=i.createContext(t);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);