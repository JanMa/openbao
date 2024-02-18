"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4515],{81876:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>p,frontMatter:()=>d,metadata:()=>a,toc:()=>c});var n=s(74848),o=s(28453);const d={description:"The `/sys/step-down` endpoint causes the node to give up active status."},i="/sys/step-down",a={id:"system/step-down",title:"/sys/step-down",description:"The `/sys/step-down` endpoint causes the node to give up active status.",source:"@site/content/api-docs/system/step-down.mdx",sourceDirName:"system",slug:"/system/step-down",permalink:"/openbao/api-docs/system/step-down",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/api-docs/system/step-down.mdx",tags:[],version:"current",frontMatter:{description:"The `/sys/step-down` endpoint causes the node to give up active status."},sidebar:"api",previous:{title:"/sys/seal-status",permalink:"/openbao/api-docs/system/seal-status"},next:{title:"Overview",permalink:"/openbao/api-docs/system/storage/"}},r={},c=[{value:"Step down leader",id:"step-down-leader",level:2},{value:"Sample request",id:"sample-request",level:3}];function l(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"sysstep-down",children:(0,n.jsx)(t.code,{children:"/sys/step-down"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"/sys/step-down"})," endpoint causes the node to give up active status."]}),"\n",(0,n.jsx)(t.h2,{id:"step-down-leader",children:"Step down leader"}),"\n",(0,n.jsxs)(t.p,{children:["This endpoint forces the node to give up active status. If the node does not\nhave active status, this endpoint does nothing. Note that the node will sleep\nfor ten seconds before attempting to grab the active lock again, but if no\nstandby nodes grab the active lock in the interim, the same node may become the\nactive node again. Requires a token with ",(0,n.jsx)(t.code,{children:"root"})," policy or ",(0,n.jsx)(t.code,{children:"sudo"})," capability on\nthe path."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Method"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"POST"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"/sys/step-down"})})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"sample-request",children:"Sample request"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    http://127.0.0.1:8200/v1/sys/step-down\n'})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>a});var n=s(96540);const o={},d=n.createContext(o);function i(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);