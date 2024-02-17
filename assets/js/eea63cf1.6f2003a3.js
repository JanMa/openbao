"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1765],{66429:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var n=t(74848),a=t(28453);const l={layout:"api",page_title:"/sys/seal-status - HTTP API",description:"The `/sys/seal-status` endpoint is used to check the seal status of an OpenBao."},i="/sys/seal-status",r={id:"system/seal-status",title:"/sys/seal-status",description:"The `/sys/seal-status` endpoint is used to check the seal status of an OpenBao.",source:"@site/content/api-docs/system/seal-status.mdx",sourceDirName:"system",slug:"/system/seal-status",permalink:"/openbao/api-docs/system/seal-status",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/api-docs/system/seal-status.mdx",tags:[],version:"current",frontMatter:{layout:"api",page_title:"/sys/seal-status - HTTP API",description:"The `/sys/seal-status` endpoint is used to check the seal status of an OpenBao."},sidebar:"apiSidebar",previous:{title:"/sys/rotate",permalink:"/openbao/api-docs/system/rotate"},next:{title:"/sys/seal",permalink:"/openbao/api-docs/system/seal"}},o={},d=[{value:"Seal status",id:"seal-status",level:2},{value:"Sample request",id:"sample-request",level:3},{value:"Sample response",id:"sample-response",level:3}];function c(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"sysseal-status",children:(0,n.jsx)(s.code,{children:"/sys/seal-status"})}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"/sys/seal-status"})," endpoint is used to check the seal status of an OpenBao."]}),"\n",(0,n.jsx)(s.h2,{id:"seal-status",children:"Seal status"}),"\n",(0,n.jsx)(s.p,{children:"This endpoint returns the seal status of the OpenBao. This is an unauthenticated\nendpoint."}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Method"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"GET"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"/sys/seal-status"})})]})})]}),"\n",(0,n.jsx)(s.h3,{id:"sample-request",children:"Sample request"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell-session",children:"$ curl \\\n    http://127.0.0.1:8200/v1/sys/seal-status\n"})}),"\n",(0,n.jsx)(s.h3,{id:"sample-response",children:"Sample response"}),"\n",(0,n.jsx)(s.p,{children:'The "t" parameter is the threshold, and "n" is the number of shares.'}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\n  "type": "shamir",\n  "initialized": true,\n  "sealed": true,\n  "t": 3,\n  "n": 5,\n  "progress": 2,\n  "nonce": "",\n  "version": "1.11.0",\n  "build_date": "2022-05-03T08:34:11Z",\n  "migration": false,\n  "recovery_seal": false,\n  "storage_type": "file"\n}\n'})}),"\n",(0,n.jsx)(s.p,{children:"Sample response when OpenBao is unsealed."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\n  "type": "shamir",\n  "initialized": true,\n  "sealed": false,\n  "t": 3,\n  "n": 5,\n  "progress": 0,\n  "nonce": "",\n  "version": "1.11.0",\n  "build_date": "2022-05-03T08:34:11Z",\n  "migration": false,\n  "cluster_name": "openbao-cluster-336172e1",\n  "cluster_id": "f94053ad-d80e-4270-2006-2efd67d0910a",\n  "recovery_seal": false,\n  "storage_type": "file"\n}\n'})})]})}function u(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>r});var n=t(96540);const a={},l=n.createContext(a);function i(e){const s=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(l.Provider,{value:s},e.children)}}}]);