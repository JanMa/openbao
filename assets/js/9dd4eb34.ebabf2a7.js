"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2544],{15076:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=t(74848),i=t(28453);const o={layout:"api",page_title:"/sys/internal/specs/openapi - HTTP API",description:"The `/sys/internal/specs/openapi` endpoint is used to generate an OpenAPI document of the mounted backends."},a="/sys/internal/specs/openapi",r={id:"system/internal-specs-openapi",title:"/sys/internal/specs/openapi",description:"The `/sys/internal/specs/openapi` endpoint is used to generate an OpenAPI document of the mounted backends.",source:"@site/content/api-docs/system/internal-specs-openapi.mdx",sourceDirName:"system",slug:"/system/internal-specs-openapi",permalink:"/openbao/api-docs/system/internal-specs-openapi",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/api-docs/system/internal-specs-openapi.mdx",tags:[],version:"current",frontMatter:{layout:"api",page_title:"/sys/internal/specs/openapi - HTTP API",description:"The `/sys/internal/specs/openapi` endpoint is used to generate an OpenAPI document of the mounted backends."},sidebar:"apiSidebar",previous:{title:"/sys/internal/counters",permalink:"/openbao/api-docs/system/internal-counters"},next:{title:"/sys/internal/ui/feature-flags",permalink:"/openbao/api-docs/system/internal-ui-feature"}},c={},l=[{value:"Get OpenAPI document",id:"get-openapi-document",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Sample request",id:"sample-request",level:3},{value:"Sample response",id:"sample-response",level:3}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"sysinternalspecsopenapi",children:(0,s.jsx)(n.code,{children:"/sys/internal/specs/openapi"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"/sys/internal/specs/openapi"})," endpoint is used to generate an OpenAPI document of the mounted backends.\nThe response conforms to the ",(0,s.jsx)(n.a,{href:"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md",children:"OpenAPI V3 specification"}),",\nwith path names matching the mount names used by the OpenBao server (i.e. customizations with ",(0,s.jsx)(n.code,{children:"-path"})," will be reflected).\nThe set of included paths is based on the permissions of the request token."]}),"\n",(0,s.jsxs)(n.p,{children:["The response may include OpenBao-specific ",(0,s.jsx)(n.a,{href:"https://github.com/oai/openapi-specification/blob/master/versions/3.0.2.md#specification-extensions",children:"extensions"}),". Three are currently defined:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"x-vault-sudo"})," - Endpoint requires ",(0,s.jsx)(n.a,{href:"/docs/concepts/policies#sudo",children:"sudo"})," privileges."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"x-vault-unauthenticated"})," - Endpoint is unauthenticated."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"x-vault-create-supported"})," - Endpoint allows creation of new items, in addition to updating existing items."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Basic documentation will be generated for all paths, but a newer path definition structure now allows for\nmore detailed documentation to be added. At this time the ",(0,s.jsx)(n.code,{children:"/sys"})," endpoints have been updated to use the new\nstructure, and other endpoints will be modified incrementally."]}),"\n",(0,s.jsx)(n.h2,{id:"get-openapi-document",children:"Get OpenAPI document"}),"\n",(0,s.jsx)(n.p,{children:"This endpoint returns a single OpenAPI document describing all paths visible to the requester."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"GET"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"/sys/internal/specs/openapi"})})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"generic_mount_paths"})," ",(0,s.jsx)(n.code,{children:"(bool: false)"})," \u2013 Used to specify whether to use generic mount paths. If set, the mount paths will be replaced with a dynamic parameter: ",(0,s.jsx)(n.code,{children:"{mountPath}"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"sample-request",children:"Sample request"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ curl http://127.0.0.1:8200/v1/sys/internal/specs/openapi?generic_mount_paths=false\n"})}),"\n",(0,s.jsx)(n.h3,{id:"sample-response",children:"Sample response"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "openapi": "3.0.2",\n  "info": {\n    "title": "OpenBao API",\n    "description": "HTTP API that gives you full access to OpenBao. All API routes are prefixed with `/v1/`.",\n    "version": "1.0.0",\n    "license": {\n      "name": "Mozilla Public License 2.0",\n      "url": "https://www.mozilla.org/en-US/MPL/2.0"\n    }\n  },\n  "paths": {\n    "/auth/token/create": {\n      "description": "The token create path is used to create new tokens.",\n      "post": {\n        "summary": "The token create path is used to create new tokens.",\n        "tags": [\n          "auth"\n        ],\n        "responses": {\n          "200": {\n            "description": "OK"\n          }\n        }\n      }\n    },\n    ...\n'})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(96540);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);