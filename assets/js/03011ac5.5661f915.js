"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2403],{81920:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=t(74848),l=t(28453);const a={description:"The `/sys/seal` endpoint seals the OpenBao."},o="/sys/seal",i={id:"system/seal",title:"/sys/seal",description:"The `/sys/seal` endpoint seals the OpenBao.",source:"@site/content/api-docs/system/seal.mdx",sourceDirName:"system",slug:"/system/seal",permalink:"/api-docs/system/seal",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/api-docs/system/seal.mdx",tags:[],version:"current",frontMatter:{description:"The `/sys/seal` endpoint seals the OpenBao."},sidebar:"api",previous:{title:"/sys/rotate/config",permalink:"/api-docs/system/rotate-config"},next:{title:"/sys/seal-status",permalink:"/api-docs/system/seal-status"}},r={},d=[{value:"Seal",id:"seal",level:2},{value:"Sample request",id:"sample-request",level:3}];function c(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"sysseal",children:(0,n.jsx)(s.code,{children:"/sys/seal"})}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"/sys/seal"})," endpoint seals the OpenBao."]}),"\n",(0,n.jsx)(s.h2,{id:"seal",children:"Seal"}),"\n",(0,n.jsxs)(s.p,{children:["This endpoint seals the OpenBao. In HA mode, only an active node can be sealed.\nStandby nodes should be restarted to get the same effect. Requires a token with\n",(0,n.jsx)(s.code,{children:"root"})," policy or ",(0,n.jsx)(s.code,{children:"sudo"})," capability on the path."]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Method"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"POST"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"/sys/seal"})})]})})]}),"\n",(0,n.jsx)(s.h3,{id:"sample-request",children:"Sample request"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    http://127.0.0.1:8200/v1/sys/seal\n'})})]})}function h(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>i});var n=t(96540);const l={},a=n.createContext(l);function o(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);