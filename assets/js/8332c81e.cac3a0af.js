"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[464],{35766:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var s=t(74848),i=t(28453);const l={description:"The `/sys/internal/ui/mounts` endpoint is used to manage mount listing visibility."},a="/sys/internal/ui/mounts",o={id:"system/internal-ui-mounts",title:"/sys/internal/ui/mounts",description:"The `/sys/internal/ui/mounts` endpoint is used to manage mount listing visibility.",source:"@site/content/api-docs/system/internal-ui-mounts.mdx",sourceDirName:"system",slug:"/system/internal-ui-mounts",permalink:"/api-docs/system/internal-ui-mounts",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/api-docs/system/internal-ui-mounts.mdx",tags:[],version:"current",frontMatter:{description:"The `/sys/internal/ui/mounts` endpoint is used to manage mount listing visibility."},sidebar:"api",previous:{title:"/sys/internal/ui/feature-flags",permalink:"/api-docs/system/internal-ui-feature"},next:{title:"/sys/internal/ui/namespaces",permalink:"/api-docs/system/internal-ui-namespaces"}},r={},d=[{value:"Get available visible mounts",id:"get-available-visible-mounts",level:2},{value:"Sample request",id:"sample-request",level:3},{value:"Sample response",id:"sample-response",level:3},{value:"Get single mount details",id:"get-single-mount-details",level:2},{value:"Sample request",id:"sample-request-1",level:3},{value:"Sample response",id:"sample-response-1",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"sysinternaluimounts",children:(0,s.jsx)(n.code,{children:"/sys/internal/ui/mounts"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"/sys/internal/ui/mounts"})," endpoint is used to manage mount listing\nvisibility. The response generated by this endpoint is based on the\n",(0,s.jsx)(n.code,{children:"listing_visibility"})," value on the mount, which can be set during mount time or\nvia mount tuning. This is currently only being used internally, for the UI and\nfor CLI preflight checks, and is an unauthenticated endpoint."]}),"\n",(0,s.jsxs)(n.p,{children:["If called with a valid token in ",(0,s.jsx)(n.code,{children:"X-Vault-Token"})," header, the response will\ninclude additional mounts which the token has been granted path capabilities on."]}),"\n",(0,s.jsx)(n.p,{children:"Due to the nature of its intended usage, there is no guarantee on backwards\ncompatibility for this endpoint."}),"\n",(0,s.jsx)(n.h2,{id:"get-available-visible-mounts",children:"Get available visible mounts"}),"\n",(0,s.jsx)(n.p,{children:"This endpoint lists all enabled auth methods."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"GET"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"/sys/internal/ui/mounts"})})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"sample-request",children:"Sample request"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ curl \\\n    http://127.0.0.1:8200/v1/sys/internal/ui/mounts\n"})}),"\n",(0,s.jsx)(n.h3,{id:"sample-response",children:"Sample response"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "auth": {\n    "github/": {\n      "description": "GitHub auth",\n      "type": "github"\n    }\n  },\n  "secret": {\n    "custom-secrets/": {\n      "description": "Custom secrets",\n      "options": {\n        "version": "2"\n      },\n      "type": "kv"\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"get-single-mount-details",children:"Get single mount details"}),"\n",(0,s.jsx)(n.p,{children:"This endpoint lists details for a specific mount path. This is an\nauthenticated endpoint, and is currently only being used internally."}),"\n",(0,s.jsxs)(n.p,{children:["The calling token should not be granted permissions to these API endpoints\ndirectly, but instead rely on permissions granted to the individual mount path.\nThis means that if you give a token a policy with capabilities on a ",(0,s.jsx)(n.code,{children:":path"}),"\n(e.g. ",(0,s.jsx)(n.code,{children:"/secret/*"}),"), the token will be able to call\n",(0,s.jsx)(n.code,{children:"sys/internal/ui/mounts/:path"})," (e.g. ",(0,s.jsx)(n.code,{children:"sys/internal/ui/mounts/secret"}),") without\nhaving to add that literal path to the policy document."]}),"\n",(0,s.jsxs)(n.p,{children:["On certain mounts, it is possible to call an arbitrary path within the engine\n(for example, ",(0,s.jsx)(n.code,{children:"/sys/internal/ui/mounts/secret/path/to/secret"})," when the mount\npath is ",(0,s.jsx)(n.code,{children:"/secret"}),"). If called in this manner, then this endpoint will return the\ndata for the mount that hosts that path. Therefore, a call to\n",(0,s.jsx)(n.code,{children:"/sys/internal/ui/mounts/secret/path/to/secret"})," and a call to\n",(0,s.jsx)(n.code,{children:"/sys/internal/ui/mounts/secret"})," will yield an identical response."]}),"\n",(0,s.jsx)(n.p,{children:"Due to the nature of its intended usage, there is no guarantee on backwards\ncompatibility for this endpoint."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"GET"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"/sys/internal/ui/mounts/:path"})})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"sample-request-1",children:"Sample request"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    http://127.0.0.1:8200/v1/sys/internal/ui/mounts/cubbyhole\n'})}),"\n",(0,s.jsx)(n.h3,{id:"sample-response-1",children:"Sample response"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "accessor": "cubbyhole_50fbe8d2",\n  "config": {\n    "default_lease_ttl": 0,\n    "force_no_cache": false,\n    "max_lease_ttl": 0\n  },\n  "description": "per-token private secret storage",\n  "external_entropy_access": false,\n  "local": true,\n  "options": null,\n  "path": "cubbyhole/",\n  "seal_wrap": false,\n  "type": "cubbyhole",\n  "uuid": "4bb40403-d9ba-d2ee-087a-4c6d371db5f2"\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var s=t(96540);const i={},l=s.createContext(i);function a(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);