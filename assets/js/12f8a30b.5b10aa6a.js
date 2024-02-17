"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8542],{36766:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var s=t(74848),d=t(28453);const o={layout:"docs",page_title:"kv delete - Command",description:'The "kv delete" command deletes the data for the provided path in the key/value secrets engine.'},r="kv delete",i={id:"commands/kv/delete",title:"kv delete",description:'The "kv delete" command deletes the data for the provided path in the key/value secrets engine.',source:"@site/content/docs/commands/kv/delete.mdx",sourceDirName:"commands/kv",slug:"/commands/kv/delete",permalink:"/openbao/docs/commands/kv/delete",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/commands/kv/delete.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"kv delete - Command",description:'The "kv delete" command deletes the data for the provided path in the key/value secrets engine.'},sidebar:"tutorialSidebar",previous:{title:"kv",permalink:"/openbao/docs/commands/kv/"},next:{title:"kv destroy",permalink:"/openbao/docs/commands/kv/destroy"}},l={},a=[{value:"Examples",id:"examples",level:2},{value:"Usage",id:"usage",level:2},{value:"Command options",id:"command-options",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"kv-delete",children:"kv delete"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"kv delete"})," command deletes the data for the provided path in\nthe key/value secrets engine. If using K/V Version 2, its versioned data will\nnot be fully removed, but marked as deleted and will no longer be returned in\nnormal get requests."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:'Delete the latest version of the key "creds":'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ bao kv delete -mount=secret creds\nSuccess! Data deleted (if it existed) at: secret/creds\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"[K/V Version 2]"}),' Delete version 11 of key "creds":']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ bao kv delete -mount=secret -versions=11 creds\nSuccess! Data deleted (if it existed) at: secret/data/creds\n"})}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:["There are no flags beyond the ",(0,s.jsx)(n.a,{href:"/docs/commands",children:"standard set of flags"}),"\nincluded on all commands."]}),"\n",(0,s.jsx)(n.h3,{id:"command-options",children:"Command options"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-mount"})," ",(0,s.jsx)(n.code,{children:'(string: "")'})," - Specifies the path where the KV backend is mounted.\nIf specified, the next argument will be interpreted as the secret path. If\nthis flag is not specified, the next argument will be interpreted as the\ncombined mount path and secret path, with /data/ automatically inserted for\nKV v2 secrets."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-versions"})," ",(0,s.jsx)(n.code,{children:"([]int: <required>)"})," - The versions to be deleted. The versioned\ndata will not be deleted, but it will no longer be returned in normal get\nrequests."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["~> ",(0,s.jsx)(n.strong,{children:"NOTE:"})," The ",(0,s.jsx)(n.code,{children:"-versions"})," command option is only for K/V v2."]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var s=t(96540);const d={},o=s.createContext(d);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);