"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2579],{55787:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var a=n(74848),t=n(28453);const l={layout:"api",page_title:"/sys/namespaces - HTTP API",description:"The `/sys/namespaces` endpoint is used manage namespaces in OpenBao."},i="/sys/namespaces",d={id:"system/namespaces",title:"/sys/namespaces",description:"The `/sys/namespaces` endpoint is used manage namespaces in OpenBao.",source:"@site/content/api-docs/system/namespaces.mdx",sourceDirName:"system",slug:"/system/namespaces",permalink:"/openbao/api-docs/system/namespaces",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/api-docs/system/namespaces.mdx",tags:[],version:"current",frontMatter:{layout:"api",page_title:"/sys/namespaces - HTTP API",description:"The `/sys/namespaces` endpoint is used manage namespaces in OpenBao."},sidebar:"apiSidebar",previous:{title:"/sys/mounts",permalink:"/openbao/api-docs/system/mounts"},next:{title:"/sys/plugins/catalog",permalink:"/openbao/api-docs/system/plugins-catalog"}},r={},c=[{value:"List namespaces",id:"list-namespaces",level:2},{value:"Sample request",id:"sample-request",level:3},{value:"Sample response",id:"sample-response",level:3},{value:"Create namespace",id:"create-namespace",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Sample payload",id:"sample-payload",level:3},{value:"Sample request",id:"sample-request-1",level:3},{value:"Patch namespace",id:"patch-namespace",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Sample payload",id:"sample-payload-1",level:3},{value:"Sample request",id:"sample-request-2",level:3},{value:"Delete namespace",id:"delete-namespace",level:2},{value:"Sample request",id:"sample-request-3",level:3},{value:"Read namespace information",id:"read-namespace-information",level:2},{value:"Sample request",id:"sample-request-4",level:3},{value:"Sample response",id:"sample-response-1",level:3}];function h(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"sysnamespaces",children:(0,a.jsx)(s.code,{children:"/sys/namespaces"})}),"\n",(0,a.jsxs)(s.p,{children:["The ",(0,a.jsx)(s.code,{children:"/sys/namespaces"})," endpoint is used manage namespaces in OpenBao."]}),"\n",(0,a.jsx)(s.h2,{id:"list-namespaces",children:"List namespaces"}),"\n",(0,a.jsx)(s.p,{children:"This endpoints lists all the namespaces."}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{style:{textAlign:"left"},children:"Method"}),(0,a.jsx)(s.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,a.jsx)(s.tbody,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{style:{textAlign:"left"},children:(0,a.jsx)(s.code,{children:"LIST"})}),(0,a.jsx)(s.td,{style:{textAlign:"left"},children:(0,a.jsx)(s.code,{children:"/sys/namespaces"})})]})})]}),"\n",(0,a.jsx)(s.h3,{id:"sample-request",children:"Sample request"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    -X LIST \\\n    http://127.0.0.1:8200/v1/sys/namespaces\n'})}),"\n",(0,a.jsx)(s.h3,{id:"sample-response",children:"Sample response"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-json",children:'{\n  "data": {\n    "key_info": {\n      "bar/": {\n        "custom_metadata": {},\n        "id": "HWmNL",\n        "path": "bar/"\n      },\n      "foo/": {\n        "custom_metadata": {},\n        "id": "5q39x",\n        "path": "foo/"\n      }\n    },\n    "keys": [\n      "bar/",\n      "foo/"\n    ]\n  }\n}\n'})}),"\n",(0,a.jsx)(s.h2,{id:"create-namespace",children:"Create namespace"}),"\n",(0,a.jsx)(s.p,{children:"This endpoint creates a namespace at the given path."}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{style:{textAlign:"left"},children:"Method"}),(0,a.jsx)(s.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,a.jsx)(s.tbody,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{style:{textAlign:"left"},children:(0,a.jsx)(s.code,{children:"POST"})}),(0,a.jsx)(s.td,{style:{textAlign:"left"},children:(0,a.jsx)(s.code,{children:"/sys/namespaces/:path"})})]})})]}),"\n",(0,a.jsx)(s.h3,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"path"})," ",(0,a.jsx)(s.code,{children:"(string: <required>)"})," \u2013\xa0Specifies the path where the namespace\nwill be created."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"custom_metadata"})," ",(0,a.jsx)(s.code,{children:"(map<string|string>: nil)"})," -\xa0A map of arbitrary string to string valued user-provided metadata meant\nto describe the namespace."]}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"sample-payload",children:"Sample payload"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-json",children:'{\n  "custom_metadata": {\n    "foo": "abc",\n    "bar": "123"\n  }\n}\n'})}),"\n",(0,a.jsx)(s.h3,{id:"sample-request-1",children:"Sample request"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/sys/namespaces/ns1\n'})}),"\n",(0,a.jsx)(s.h2,{id:"patch-namespace",children:"Patch namespace"}),"\n",(0,a.jsx)(s.p,{children:"This endpoint patches an existing namespace at the specified path."}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{style:{textAlign:"left"},children:"Method"}),(0,a.jsx)(s.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,a.jsx)(s.tbody,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{style:{textAlign:"left"},children:(0,a.jsx)(s.code,{children:"PATCH"})}),(0,a.jsx)(s.td,{style:{textAlign:"left"},children:(0,a.jsx)(s.code,{children:"/sys/namespaces/:path"})})]})})]}),"\n",(0,a.jsx)(s.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"path"})," ",(0,a.jsx)(s.code,{children:"(string: <required>)"})," \u2013\xa0Specifies the path of the existing namespace."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"custom_metadata"})," ",(0,a.jsx)(s.code,{children:"(map<string|string>: nil)"})," -\xa0A map of arbitrary string to string valued user-provided metadata meant\nto describe the namespace."]}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"sample-payload-1",children:"Sample payload"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-json",children:'{\n  "custom_metadata": {\n    "foo": "abc",\n    "bar": "123"\n  }\n}\n'})}),"\n",(0,a.jsx)(s.h3,{id:"sample-request-2",children:"Sample request"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --header "Content-Type: application/merge-patch+json"\n    --request PATCH \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/sys/namespaces/ns1\n'})}),"\n",(0,a.jsx)(s.h2,{id:"delete-namespace",children:"Delete namespace"}),"\n",(0,a.jsx)(s.p,{children:"This endpoint deletes a namespace at the specified path."}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{style:{textAlign:"left"},children:"Method"}),(0,a.jsx)(s.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,a.jsx)(s.tbody,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{style:{textAlign:"left"},children:(0,a.jsx)(s.code,{children:"DELETE"})}),(0,a.jsx)(s.td,{style:{textAlign:"left"},children:(0,a.jsx)(s.code,{children:"/sys/namespaces/:path"})})]})})]}),"\n",(0,a.jsx)(s.h3,{id:"sample-request-3",children:"Sample request"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request DELETE \\\n    http://127.0.0.1:8200/v1/sys/namespaces/ns1\n'})}),"\n",(0,a.jsx)(s.h2,{id:"read-namespace-information",children:"Read namespace information"}),"\n",(0,a.jsx)(s.p,{children:"This endpoint gets the metadata for the given namespace path."}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{style:{textAlign:"left"},children:"Method"}),(0,a.jsx)(s.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,a.jsx)(s.tbody,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{style:{textAlign:"left"},children:(0,a.jsx)(s.code,{children:"GET"})}),(0,a.jsx)(s.td,{style:{textAlign:"left"},children:(0,a.jsx)(s.code,{children:"/sys/namespaces/:path"})})]})})]}),"\n",(0,a.jsx)(s.h3,{id:"sample-request-4",children:"Sample request"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    http://127.0.0.1:8200/v1/sys/namespaces/ns1\n'})}),"\n",(0,a.jsx)(s.h3,{id:"sample-response-1",children:"Sample response"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-json",children:'{\n  "id": "gsudj",\n  "path": "ns1/",\n  "custom_metadata": {\n    "foo": "abc",\n    "bar": "123"\n  }\n}\n'})})]})}function p(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>d});var a=n(96540);const t={},l=a.createContext(t);function i(e){const s=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(l.Provider,{value:s},e.children)}}}]);