"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8526],{96452:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var n=s(74848),o=s(28453);const r={layout:"docs",page_title:"Filesystem - Storage Backends - Configuration",description:"The Filesystem storage backend stores OpenBao's data on the filesystem using a\nstandard directory structure. It can be used for durable single server\nsituations, or to develop locally where durability is not critical."},i="Filesystem storage backend",a={id:"configuration/storage/filesystem",title:"Filesystem storage backend",description:"The Filesystem storage backend stores OpenBao's data on the filesystem using a\nstandard directory structure. It can be used for durable single server\nsituations, or to develop locally where durability is not critical.",source:"@site/content/docs/configuration/storage/filesystem.mdx",sourceDirName:"configuration/storage",slug:"/configuration/storage/filesystem",permalink:"/openbao/docs/configuration/storage/filesystem",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/configuration/storage/filesystem.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"Filesystem - Storage Backends - Configuration",description:"The Filesystem storage backend stores OpenBao's data on the filesystem using a\nstandard directory structure. It can be used for durable single server\nsituations, or to develop locally where durability is not critical."},sidebar:"tutorialSidebar",previous:{title:"storage stanza",permalink:"/openbao/docs/configuration/storage/"},next:{title:"In-Memory storage backend",permalink:"/openbao/docs/configuration/storage/in-memory"}},l={},c=[{value:"<code>file</code> parameters",id:"file-parameters",level:2},{value:"<code>file</code> examples",id:"file-examples",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"filesystem-storage-backend",children:"Filesystem storage backend"}),"\n",(0,n.jsx)(t.p,{children:"The Filesystem storage backend stores OpenBao's data on the filesystem using a\nstandard directory structure. It can be used for durable single server\nsituations, or to develop locally where durability is not critical."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"No High Availability"})," \u2013 the Filesystem backend does not support high\navailability."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"HashiCorp Supported"})," \u2013 the Filesystem backend is officially supported by\nHashiCorp."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-hcl",children:'storage "file" {\n  path = "/mnt/openbao/data"\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"Even though OpenBao's data is encrypted at rest, you should still take appropriate\nmeasures to secure access to the filesystem."}),"\n",(0,n.jsxs)(t.h2,{id:"file-parameters",children:[(0,n.jsx)(t.code,{children:"file"})," parameters"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"path"})," ",(0,n.jsx)(t.code,{children:"(string: <required>)"})," \u2013 The absolute path on disk to the directory\nwhere the data will be stored. If the directory does not exist, OpenBao will\ncreate it."]}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"file-examples",children:[(0,n.jsx)(t.code,{children:"file"})," examples"]}),"\n",(0,n.jsxs)(t.p,{children:["This example shows the Filesystem storage backend being mounted at\n",(0,n.jsx)(t.code,{children:"/mnt/openbao/data"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-hcl",children:'storage "file" {\n  path = "/mnt/openbao/data"\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>a});var n=s(96540);const o={},r=n.createContext(o);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);