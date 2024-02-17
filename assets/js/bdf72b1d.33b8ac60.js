"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6675],{78204:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>h});var s=t(74848),o=t(28453);const i={layout:"api",page_title:"/sys/host-info - HTTP API",description:"The '/sys/host-info' endpoint is used to retrieve host information"},r="/sys/host-info",a={id:"system/host-info",title:"/sys/host-info",description:"The '/sys/host-info' endpoint is used to retrieve host information",source:"@site/content/api-docs/system/host-info.mdx",sourceDirName:"system",slug:"/system/host-info",permalink:"/openbao/api-docs/system/host-info",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/api-docs/system/host-info.mdx",tags:[],version:"current",frontMatter:{layout:"api",page_title:"/sys/host-info - HTTP API",description:"The '/sys/host-info' endpoint is used to retrieve host information"},sidebar:"apiSidebar",previous:{title:"/sys/health",permalink:"/openbao/api-docs/system/health"},next:{title:"/sys/in-flight-req",permalink:"/openbao/api-docs/system/in-flight-req"}},l={},h=[{value:"Collect host information",id:"collect-host-information",level:2},{value:"Sample request",id:"sample-request",level:3},{value:"Sample response",id:"sample-response",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"syshost-info",children:(0,s.jsx)(n.code,{children:"/sys/host-info"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"/sys/host-info"})," endpoint is used retrieve information about the\nhost instance that the OpenBao server is running on."]}),"\n",(0,s.jsx)(n.h2,{id:"collect-host-information",children:"Collect host information"}),"\n",(0,s.jsx)(n.p,{children:"This endpoint returns information about the host instance that the OpenBao\nserver is running on. The data returned includes CPU information, CPU\ntimes, disk usage, host info, and memory statistics."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"GET"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"/sys/host-info"})})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"sample-request",children:"Sample request"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    http://127.0.0.1:8200/v1/sys/host-info\n'})}),"\n",(0,s.jsx)(n.h3,{id:"sample-response",children:"Sample response"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "cpu": [\n      {\n        "cpu": 0,\n        "vendorId": "GenuineIntel",\n        "family": "6",\n        "model": "78",\n        ...\n      },\n      ...\n    ],\n    "cpu_times": [\n      {\n        "cpu": "cpu",\n        "user": 7491,\n        "system": 16833,\n        "idle": 5726276,\n        ...\n      },\n      ...\n    ],\n    "disk": [\n      {\n        "path": "/",\n        "fstype": "ext4",\n        "total": 410352476160,\n        "free": 102141169664,\n        "used": 306428051456,\n        ...\n      },\n      ...\n    ],\n    "host": {\n      "hostname": "openbao-server-1",\n      "uptime": 28618,\n      "bootTime": 1570114491,\n      "procs": 439,\n      ...\n    },\n    "memory": {\n      "total": 17179869184,\n      "available": 6203424768,\n      "used": 10976444416,\n      ...\n    },\n    "timestamp": "2019-10-03T22:51:49.715927Z"\n  }\n}\n'})})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(96540);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);