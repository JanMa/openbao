"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5954],{87948:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>i,toc:()=>a});var t=s(74848),r=s(28453);const p={description:"The `/sys/wrapping/lookup` endpoint returns wrapping token properties."},o="/sys/wrapping/lookup",i={id:"system/wrapping-lookup",title:"/sys/wrapping/lookup",description:"The `/sys/wrapping/lookup` endpoint returns wrapping token properties.",source:"@site/content/api-docs/system/wrapping-lookup.mdx",sourceDirName:"system",slug:"/system/wrapping-lookup",permalink:"/openbao/api-docs/system/wrapping-lookup",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/api-docs/system/wrapping-lookup.mdx",tags:[],version:"current",frontMatter:{description:"The `/sys/wrapping/lookup` endpoint returns wrapping token properties."},sidebar:"api",previous:{title:"/sys/version-history",permalink:"/openbao/api-docs/system/version-history"},next:{title:"/sys/wrapping/rewrap",permalink:"/openbao/api-docs/system/wrapping-rewrap"}},l={},a=[{value:"Wrapping lookup",id:"wrapping-lookup",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Sample payload",id:"sample-payload",level:3},{value:"Sample request",id:"sample-request",level:3},{value:"Sample response",id:"sample-response",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"syswrappinglookup",children:(0,t.jsx)(n.code,{children:"/sys/wrapping/lookup"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"/sys/wrapping/lookup"})," endpoint returns wrapping token properties."]}),"\n",(0,t.jsx)(n.h2,{id:"wrapping-lookup",children:"Wrapping lookup"}),"\n",(0,t.jsx)(n.p,{children:"This endpoint looks up wrapping properties for the given token."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"POST"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"/sys/wrapping/lookup"})})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"token"})," ",(0,t.jsx)(n.code,{children:"(string: <required>)"})," \u2013\xa0Specifies the wrapping token ID."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"sample-payload",children:"Sample payload"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "token": "abcd1234"\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"sample-request",children:"Sample request"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/sys/wrapping/lookup\n'})}),"\n",(0,t.jsx)(n.h3,{id:"sample-response",children:"Sample response"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "request_id": "481320f5-fdf8-885d-8050-65fa767fd19b",\n  "lease_id": "",\n  "lease_duration": 0,\n  "renewable": false,\n  "data": {\n    "creation_path": "sys/wrapping/wrap",\n    "creation_time": "2016-09-28T14:16:13.07103516-04:00",\n    "creation_ttl": 300\n  },\n  "wrap_info": null,\n  "warnings": null,\n  "auth": null\n}\n'})})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>i});var t=s(96540);const r={},p=t.createContext(r);function o(e){const n=t.useContext(p);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(p.Provider,{value:n},e.children)}}}]);