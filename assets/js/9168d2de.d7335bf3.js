"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4500],{47350:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>r,contentTitle:()=>l,default:()=>o,frontMatter:()=>d,metadata:()=>a,toc:()=>c});var n=i(74848),t=i(28453);const d={description:"The `/sys/audit` endpoint is used to enable and disable audit devices."},l="/sys/audit",a={id:"system/audit",title:"/sys/audit",description:"The `/sys/audit` endpoint is used to enable and disable audit devices.",source:"@site/content/api-docs/system/audit.mdx",sourceDirName:"system",slug:"/system/audit",permalink:"/openbao/api-docs/system/audit",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/api-docs/system/audit.mdx",tags:[],version:"current",frontMatter:{description:"The `/sys/audit` endpoint is used to enable and disable audit devices."},sidebar:"api",previous:{title:"Overview",permalink:"/openbao/api-docs/system/"},next:{title:"/sys/audit-hash",permalink:"/openbao/api-docs/system/audit-hash"}},r={},c=[{value:"List enabled audit devices",id:"list-enabled-audit-devices",level:2},{value:"Sample request",id:"sample-request",level:3},{value:"Sample response",id:"sample-response",level:3},{value:"Enable audit device",id:"enable-audit-device",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Sample payload",id:"sample-payload",level:3},{value:"Sample request",id:"sample-request-1",level:3},{value:"Disable audit device",id:"disable-audit-device",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Sample request",id:"sample-request-2",level:3}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"sysaudit",children:(0,n.jsx)(s.code,{children:"/sys/audit"})}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"/sys/audit"})," endpoint is used to list, enable, and disable audit devices.\nAudit devices must be enabled before use, and more than one device may be\nenabled at a time."]}),"\n",(0,n.jsx)(s.h2,{id:"list-enabled-audit-devices",children:"List enabled audit devices"}),"\n",(0,n.jsx)(s.p,{children:"This endpoint lists only the enabled audit devices (it does not list all\navailable audit devices)."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsxs)(s.strong,{children:[(0,n.jsx)(s.code,{children:"sudo"})," required"]})," \u2013\xa0This endpoint requires ",(0,n.jsx)(s.code,{children:"sudo"})," capability in addition to\nany path-specific capabilities."]}),"\n"]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Method"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"GET"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"/sys/audit"})})]})})]}),"\n",(0,n.jsx)(s.h3,{id:"sample-request",children:"Sample request"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    http://127.0.0.1:8200/v1/sys/audit\n'})}),"\n",(0,n.jsx)(s.h3,{id:"sample-response",children:"Sample response"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:'{\n  "file": {\n    "type": "file",\n    "description": "Store logs in a file",\n    "options": {\n      "file_path": "/var/log/openbao.log"\n    }\n  }\n}\n'})}),"\n",(0,n.jsx)(s.h2,{id:"enable-audit-device",children:"Enable audit device"}),"\n",(0,n.jsx)(s.p,{children:"This endpoint enables a new audit device at the supplied path. The path can be a\nsingle word name or a more complex, nested path."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsxs)(s.strong,{children:[(0,n.jsx)(s.code,{children:"sudo"})," required"]})," \u2013\xa0This endpoint requires ",(0,n.jsx)(s.code,{children:"sudo"})," capability in addition to\nany path-specific capabilities."]}),"\n"]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Method"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"POST"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"/sys/audit/:path"})})]})})]}),"\n",(0,n.jsx)(s.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"path"})," ",(0,n.jsx)(s.code,{children:"(string: <required>)"})," \u2013\xa0Specifies the path in which to enable the audit\ndevice. This is part of the request URL."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"description"})," ",(0,n.jsx)(s.code,{children:'(string: "")'})," \u2013\xa0Specifies a human-friendly description of the\naudit device."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"options"})," ",(0,n.jsx)(s.code,{children:"(map<string|string>: nil)"})," \u2013\xa0Specifies configuration options to pass to the audit device itself.\nFor more details, please see the relevant page for an audit device ",(0,n.jsx)(s.code,{children:"type"}),", under ",(0,n.jsx)(s.a,{href:"/docs/audit",children:"Audit Devices docs"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"type"})," ",(0,n.jsx)(s.code,{children:"(string: <required>)"})," \u2013\xa0Specifies the type of the audit device.\nValid types are ",(0,n.jsx)(s.code,{children:"file"}),", ",(0,n.jsx)(s.code,{children:"socket"})," and ",(0,n.jsx)(s.code,{children:"syslog"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"sample-payload",children:"Sample payload"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\n  "type": "file",\n  "options": {\n    "file_path": "/var/log/openbao/log"\n  }\n}\n'})}),"\n",(0,n.jsx)(s.h3,{id:"sample-request-1",children:"Sample request"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/sys/audit/example-audit\n'})}),"\n",(0,n.jsx)(s.h2,{id:"disable-audit-device",children:"Disable audit device"}),"\n",(0,n.jsx)(s.p,{children:"This endpoint disables the audit device at the given path."}),"\n",(0,n.jsx)(s.p,{children:"~> Note: Once an audit device is disabled, you will no longer be able to HMAC values\nfor comparison with entries in the audit logs. This is true even if you re-enable\nthe audit device at the same path, as a new salt will be created for hashing."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsxs)(s.strong,{children:[(0,n.jsx)(s.code,{children:"sudo"})," required"]})," \u2013\xa0This endpoint requires ",(0,n.jsx)(s.code,{children:"sudo"})," capability in addition to\nany path-specific capabilities."]}),"\n"]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Method"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"DELETE"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"/sys/audit/:path"})})]})})]}),"\n",(0,n.jsx)(s.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"path"})," ",(0,n.jsx)(s.code,{children:"(string: <required>)"})," \u2013\xa0Specifies the path of the audit device to\ndelete. This is part of the request URL."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"sample-request-2",children:"Sample request"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request DELETE \\\n    http://127.0.0.1:8200/v1/sys/audit/example-audit\n'})})]})}function o(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>l,x:()=>a});var n=i(96540);const t={},d=n.createContext(t);function l(e){const s=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(d.Provider,{value:s},e.children)}}}]);