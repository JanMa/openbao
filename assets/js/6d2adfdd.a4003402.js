"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6404],{45465:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var n=s(74848),i=s(28453);const a={description:"The `/sys/quotas/config` endpoint is used to configure rate limit quotas."},l="/sys/quotas/config",r={id:"system/quotas-config",title:"/sys/quotas/config",description:"The `/sys/quotas/config` endpoint is used to configure rate limit quotas.",source:"@site/content/api-docs/system/quotas-config.mdx",sourceDirName:"system",slug:"/system/quotas-config",permalink:"/openbao/api-docs/system/quotas-config",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/api-docs/system/quotas-config.mdx",tags:[],version:"current",frontMatter:{description:"The `/sys/quotas/config` endpoint is used to configure rate limit quotas."},sidebar:"api",previous:{title:"/sys/pprof",permalink:"/openbao/api-docs/system/pprof"},next:{title:"/sys/quotas/rate-limit",permalink:"/openbao/api-docs/system/rate-limit-quotas"}},o={},d=[{value:"Create or update the rate limit configuration",id:"create-or-update-the-rate-limit-configuration",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Sample payload",id:"sample-payload",level:3},{value:"Sample request",id:"sample-request",level:3},{value:"Get the rate limit configuration",id:"get-the-rate-limit-configuration",level:2},{value:"Sample request",id:"sample-request-1",level:3},{value:"Sample response",id:"sample-response",level:3}];function c(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"sysquotasconfig",children:(0,n.jsx)(t.code,{children:"/sys/quotas/config"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"/sys/quotas/config"})," endpoint is used to configure rate limit quotas."]}),"\n",(0,n.jsx)(t.h2,{id:"create-or-update-the-rate-limit-configuration",children:"Create or update the rate limit configuration"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Method"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"POST"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"/sys/quotas/config"})})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"rate_limit_exempt_paths"})," ",(0,n.jsx)(t.code,{children:"([]string: [])"})," - Specifies the list of exempt paths\nfrom all rate limit quotas. If empty no paths will be exempt."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"enable_rate_limit_audit_logging"})," ",(0,n.jsx)(t.code,{children:"(bool: false)"})," - If set, starts audit logging\nof requests that get rejected due to rate limit quota rule violations."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"enable_rate_limit_response_headers"})," ",(0,n.jsx)(t.code,{children:"(bool: false)"})," - If set, additional rate\nlimit quota HTTP headers will be added to responses."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"sample-payload",children:"Sample payload"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "rate_limit_exempt_paths": [\n    "sys/internal/ui/mounts",\n    "sys/generate-recovery-token/attempt",\n    "sys/generate-recovery-token/update",\n    "sys/generate-root/attempt",\n    "sys/generate-root/update",\n    "sys/health",\n    "sys/seal-status",\n    "sys/unseal"\n  ],\n  "enable_rate_limit_audit_logging": true,\n  "enable_rate_limit_response_headers": true\n}\n'})}),"\n",(0,n.jsx)(t.h3,{id:"sample-request",children:"Sample request"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell-session",children:'$ curl \\\n    --request POST \\\n    --header "X-Vault-Token: ..." \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/sys/quotas/config\n'})}),"\n",(0,n.jsx)(t.h2,{id:"get-the-rate-limit-configuration",children:"Get the rate limit configuration"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Method"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"GET"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"/sys/quotas/config"})})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"sample-request-1",children:"Sample request"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell-session",children:'$ curl \\\n    --request GET \\\n    --header "X-Vault-Token: ..." \\\n    http://127.0.0.1:8200/v1/sys/quotas/config\n'})}),"\n",(0,n.jsx)(t.h3,{id:"sample-response",children:"Sample response"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "request_id": "259801bd-a0c9-9350-8eb9-26c91afd19c6",\n  "lease_id": "",\n  "lease_duration": 0,\n  "renewable": false,\n  "data": {\n    "enable_rate_limit_audit_logging": false,\n    "enable_rate_limit_response_headers": false,\n    "rate_limit_exempt_paths": [\n      "sys/internal/ui/mounts",\n      "sys/generate-recovery-token/attempt",\n      "sys/generate-recovery-token/update",\n      "sys/generate-root/attempt",\n      "sys/generate-root/update",\n      "sys/health",\n      "sys/seal-status",\n      "sys/unseal"\n    ]\n  },\n  "warnings": null\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>r});var n=s(96540);const i={},a=n.createContext(i);function l(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);