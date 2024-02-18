"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[912],{56799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(74848),r=n(28453);const a={sidebar_label:"rotate",description:'The "operator rotate" rotates the underlying encryption key which is used to\nsecure data written to the storage backend. This installs a new key in the key\nring. This new key is used to encrypt new data, while older keys in the ring\nare used to decrypt older data.'},s="operator rotate",i={id:"commands/operator/rotate",title:"operator rotate",description:'The "operator rotate" rotates the underlying encryption key which is used to\nsecure data written to the storage backend. This installs a new key in the key\nring. This new key is used to encrypt new data, while older keys in the ring\nare used to decrypt older data.',source:"@site/content/docs/commands/operator/rotate.mdx",sourceDirName:"commands/operator",slug:"/commands/operator/rotate",permalink:"/docs/commands/operator/rotate",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/commands/operator/rotate.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"rotate",description:'The "operator rotate" rotates the underlying encryption key which is used to\nsecure data written to the storage backend. This installs a new key in the key\nring. This new key is used to encrypt new data, while older keys in the ring\nare used to decrypt older data.'},sidebar:"docs",previous:{title:"rekey",permalink:"/docs/commands/operator/rekey"},next:{title:"seal",permalink:"/docs/commands/operator/seal"}},d={},c=[{value:"Examples",id:"examples",level:2},{value:"Usage",id:"usage",level:2},{value:"Output options",id:"output-options",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"operator-rotate",children:"operator rotate"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"operator rotate"})," rotates the underlying encryption key which is used to\nsecure data written to the storage backend. This installs a new key in the key\nring. This new key is used to encrypted new data, while older keys in the ring\nare used to decrypt older data."]}),"\n",(0,o.jsx)(t.p,{children:"This is an online operation and does not cause downtime. This command is run\nper-cluster (not per-server), since OpenBao servers in HA mode share the same\nstorage backend."}),"\n",(0,o.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(t.p,{children:"Rotate OpenBao's encryption key:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell-session",children:"$ bao operator rotate\nKey Term        3\nInstall Time    01 May 17 10:30 UTC\n"})}),"\n",(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:["The following flags are available in addition to the ",(0,o.jsx)(t.a,{href:"/docs/commands",children:"standard set of\nflags"})," included on all commands."]}),"\n",(0,o.jsx)(t.h3,{id:"output-options",children:"Output options"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"-format"})," ",(0,o.jsx)(t.code,{children:'(string: "table")'}),' - Print the output in the given format. Valid\nformats are "table", "json", or "yaml". This can also be specified via the\n',(0,o.jsx)(t.code,{children:"VAULT_FORMAT"})," environment variable."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var o=n(96540);const r={},a=o.createContext(r);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);