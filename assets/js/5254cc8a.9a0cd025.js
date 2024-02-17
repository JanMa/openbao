"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1262],{39770:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=t(74848),r=t(28453);const o={layout:"docs",page_title:"KV - Secrets Engines",description:"The KV secrets engine can store arbitrary secrets."},i="KV secrets engine",a={id:"secrets/kv/index",title:"KV secrets engine",description:"The KV secrets engine can store arbitrary secrets.",source:"@site/content/docs/secrets/kv/index.mdx",sourceDirName:"secrets/kv",slug:"/secrets/kv/",permalink:"/openbao/docs/secrets/kv/",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/secrets/kv/index.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"KV - Secrets Engines",description:"The KV secrets engine can store arbitrary secrets."},sidebar:"tutorialSidebar",previous:{title:"Kubernetes secrets engine",permalink:"/openbao/docs/secrets/kubernetes"},next:{title:"KV secrets engine - version 1",permalink:"/openbao/docs/secrets/kv/kv-v1"}},c={},d=[{value:"KV version 1",id:"kv-version-1",level:2},{value:"KV version 2",id:"kv-version-2",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"kv-secrets-engine",children:"KV secrets engine"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"kv"})," secrets engine is a generic Key-Value store used to store arbitrary\nsecrets within the configured physical storage for OpenBao. This backend can be\nrun in one of two modes; either it can be configured to store a single value\nfor a key or, versioning can be enabled and a configurable number of versions\nfor each key will be stored."]}),"\n",(0,s.jsx)(n.h2,{id:"kv-version-1",children:"KV version 1"}),"\n",(0,s.jsxs)(n.p,{children:["When running the ",(0,s.jsx)(n.code,{children:"kv"})," secrets backend non-versioned, only the most recently\nwritten value for a key will be preserved. The benefits of non-versioned ",(0,s.jsx)(n.code,{children:"kv"}),"\nis a reduced storage size for each key since no additional metadata or history\nis stored. Additionally, requests going to a backend configured this way will be\nmore performant because for any given request there will be fewer storage calls\nand no locking."]}),"\n",(0,s.jsxs)(n.p,{children:["More information about running in this mode can be found in the ",(0,s.jsx)(n.a,{href:"/docs/secrets/kv/kv-v1",children:"K/V Version 1\nDocs"})]}),"\n",(0,s.jsx)(n.h2,{id:"kv-version-2",children:"KV version 2"}),"\n",(0,s.jsxs)(n.p,{children:["When running v2 of the ",(0,s.jsx)(n.code,{children:"kv"})," backend a key can retain a configurable number of\nversions. This defaults to 10 versions. The older versions' metadata and data\ncan be retrieved. Additionally, Check-and-Set operations can be used to avoid\noverwriting data unintentionally."]}),"\n",(0,s.jsx)(n.p,{children:"When a version is deleted the underlying data is not removed, rather it is\nmarked as deleted. Deleted versions can be undeleted. To permanently remove a\nversion's data the destroy command or API endpoint can be used. Additionally all\nversions and metadata for a key can be deleted by deleting on the metadata\ncommand or API endpoint. Each of these operations can be ACL'ed differently,\nrestricting who has permissions to soft delete, undelete, or fully remove data."}),"\n",(0,s.jsxs)(n.p,{children:["More information about running in this mode can be found in the ",(0,s.jsx)(n.a,{href:"/docs/secrets/kv/kv-v2",children:"K/V Version 2\nDocs"})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var s=t(96540);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);