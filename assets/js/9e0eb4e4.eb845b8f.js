"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2297],{27712:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=n(74848),i=n(28453);const r={layout:"api",page_title:"/sys/in-flight-req - HTTP API",description:"The `/sys/in-flight-req` endpoint is used to get information on in-flight requests."},o="/sys/in-flight-req",l={id:"system/in-flight-req",title:"/sys/in-flight-req",description:"The `/sys/in-flight-req` endpoint is used to get information on in-flight requests.",source:"@site/content/api-docs/system/in-flight-req.mdx",sourceDirName:"system",slug:"/system/in-flight-req",permalink:"/openbao/api-docs/system/in-flight-req",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/api-docs/system/in-flight-req.mdx",tags:[],version:"current",frontMatter:{layout:"api",page_title:"/sys/in-flight-req - HTTP API",description:"The `/sys/in-flight-req` endpoint is used to get information on in-flight requests."},sidebar:"apiSidebar",previous:{title:"/sys/host-info",permalink:"/openbao/api-docs/system/host-info"},next:{title:"/sys/init",permalink:"/openbao/api-docs/system/init"}},d={},c=[{value:"Collect In-Flight request information",id:"collect-in-flight-request-information",level:2},{value:"Sample request",id:"sample-request",level:3},{value:"Sample response",id:"sample-response",level:3}];function h(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"sysin-flight-req",children:(0,s.jsx)(t.code,{children:"/sys/in-flight-req"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"/sys/in-flight-req"})," endpoint is used to get information on in-flight requests.\nThe returned information contains the ",(0,s.jsx)(t.code,{children:"start_time"}),", ",(0,s.jsx)(t.code,{children:"client_remote_address"}),", ",(0,s.jsx)(t.code,{children:"request_path"}),",\n",(0,s.jsx)(t.code,{children:"request_method"}),", and ",(0,s.jsx)(t.code,{children:"client_id"})," of the in-flight requests."]}),"\n",(0,s.jsx)(t.h2,{id:"collect-in-flight-request-information",children:"Collect In-Flight request information"}),"\n",(0,s.jsx)(t.p,{children:"This endpoint returns the information about the in-flight requests."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Method"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"GET"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"/sys/in-flight-req"})})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"sample-request",children:"Sample request"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    http://127.0.0.1:8200/v1/sys/in-flight-req\n'})}),"\n",(0,s.jsx)(t.h3,{id:"sample-response",children:"Sample response"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "9049326b-ceed-1033-c099-96c5cc97db1f": {\n    "start_time": "2021-11-19T09:13:01.34157-08:00",\n    "client_remote_address": "127.0.0.3:49816",\n    "request_path": "/v1/sys/in-flight-req",\n    "request_method": "GET",\n    "client_id": "",\n  }\n}\n'})})]})}function a(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var s=n(96540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);