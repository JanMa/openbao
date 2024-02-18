"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7235],{33930:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var a=s(74848),r=s(28453);const t={description:"The `/sys/wrapping/wrap` endpoint wraps the given values in a\nresponse-wrapped token."},p="/sys/wrapping/wrap",i={id:"system/wrapping-wrap",title:"/sys/wrapping/wrap",description:"The `/sys/wrapping/wrap` endpoint wraps the given values in a\nresponse-wrapped token.",source:"@site/content/api-docs/system/wrapping-wrap.mdx",sourceDirName:"system",slug:"/system/wrapping-wrap",permalink:"/api-docs/system/wrapping-wrap",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/api-docs/system/wrapping-wrap.mdx",tags:[],version:"current",frontMatter:{description:"The `/sys/wrapping/wrap` endpoint wraps the given values in a\nresponse-wrapped token."},sidebar:"api",previous:{title:"/sys/wrapping/unwrap",permalink:"/api-docs/system/wrapping-unwrap"}},l={},d=[{value:"Wrapping wrap",id:"wrapping-wrap",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Sample payload",id:"sample-payload",level:3},{value:"Sample request",id:"sample-request",level:3},{value:"Sample response",id:"sample-response",level:3}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"syswrappingwrap",children:(0,a.jsx)(n.code,{children:"/sys/wrapping/wrap"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"/sys/wrapping/wrap"})," endpoint wraps the given values in a response-wrapped\ntoken."]}),"\n",(0,a.jsx)(n.h2,{id:"wrapping-wrap",children:"Wrapping wrap"}),"\n",(0,a.jsx)(n.p,{children:"This endpoint wraps the given user-supplied data inside a response-wrapped\ntoken."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,a.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{style:{textAlign:"left"},children:(0,a.jsx)(n.code,{children:"POST"})}),(0,a.jsx)(n.td,{style:{textAlign:"left"},children:(0,a.jsx)(n.code,{children:"/sys/wrapping/wrap"})})]})})]}),"\n",(0,a.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:":any"})," ",(0,a.jsx)(n.code,{children:"(map<string|string>: nil)"})," \u2013\xa0Parameters should be supplied as\nkeys/values in a JSON object. The exact set of given parameters will be\ncontained in the wrapped response."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"sample-payload",children:"Sample payload"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "foo": "bar",\n  "zip": "zap"\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"sample-request",children:"Sample request"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --header "X-Vault-Wrap-TTL: 60" \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/sys/wrapping/wrap\n'})}),"\n",(0,a.jsx)(n.h3,{id:"sample-response",children:"Sample response"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "request_id": "",\n  "lease_id": "",\n  "lease_duration": 0,\n  "renewable": false,\n  "data": null,\n  "warnings": null,\n  "wrap_info": {\n    "token": "fb79b9d3-d94e-9eb6-4919-c559311133d6",\n    "ttl": 300,\n    "creation_time": "2016-09-28T14:41:00.56961496-04:00",\n    "creation_path": "sys/wrapping/wrap"\n  }\n}\n'})})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>p,x:()=>i});var a=s(96540);const r={},t=a.createContext(r);function p(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:p(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);