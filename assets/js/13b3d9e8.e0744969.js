"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1468],{67143:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=t(74848),s=t(28453);const r={layout:"docs",page_title:"kv rollback - Command",description:'The "kv rollback" command restores a given previous version to the current\nversion at the given path.'},i="kv rollback",a={id:"commands/kv/rollback",title:"kv rollback",description:'The "kv rollback" command restores a given previous version to the current\nversion at the given path.',source:"@site/content/docs/commands/kv/rollback.mdx",sourceDirName:"commands/kv",slug:"/commands/kv/rollback",permalink:"/openbao/docs/commands/kv/rollback",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/commands/kv/rollback.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"kv rollback - Command",description:'The "kv rollback" command restores a given previous version to the current\nversion at the given path.'},sidebar:"tutorialSidebar",previous:{title:"kv put",permalink:"/openbao/docs/commands/kv/put"},next:{title:"kv undelete",permalink:"/openbao/docs/commands/kv/undelete"}},c={},l=[{value:"Examples",id:"examples",level:2},{value:"Usage",id:"usage",level:2},{value:"Output options",id:"output-options",level:3},{value:"Command options",id:"command-options",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"kv-rollback",children:"kv rollback"}),"\n",(0,o.jsxs)(n.p,{children:["~> ",(0,o.jsx)(n.strong,{children:"NOTE:"})," This is a ",(0,o.jsx)(n.a,{href:"/docs/secrets/kv/kv-v2",children:"K/V Version 2"})," secrets\nengine command, and not available for Version 1."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"kv rollback"})," command restores a given previous version to the current\nversion at the given path. The value is written as a new version; for instance,\nif the current version is 5 and the rollback version is 2, the data from version\n2 will become version 6. This command makes it easy to restore unintentionally\noverwritten data."]}),"\n",(0,o.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.p,{children:'Restores the version 2 of the data at key "creds":'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell-session",children:"$ bao kv rollback -mount=secret -version=2 creds\nKey              Value\n---              -----\ncreated_time     2019-06-06T17:07:19.299831Z\ndeletion_time    n/a\ndestroyed        false\nversion          6\n"})}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:["There are no flags beyond the ",(0,o.jsx)(n.a,{href:"/docs/commands",children:"standard set of flags"}),"\nincluded on all commands."]}),"\n",(0,o.jsx)(n.h3,{id:"output-options",children:"Output options"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"-format"})," ",(0,o.jsx)(n.code,{children:'(string: "table")'}),' - Print the output in the given format. Valid\nformats are "table", "json", or "yaml". This can also be specified via the\n',(0,o.jsx)(n.code,{children:"VAULT_FORMAT"})," environment variable."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"command-options",children:"Command options"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"-mount"})," ",(0,o.jsx)(n.code,{children:'(string: "")'})," - Specifies the path where the KV backend is mounted.\nIf specified, the next argument will be interpreted as the secret path. If\nthis flag is not specified, the next argument will be interpreted as the\ncombined mount path and secret path, with /data/ automatically inserted for\nKV v2 secrets."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"-version"})," ",(0,o.jsx)(n.code,{children:"(int: 0)"})," - Specifies the version number that should be made\ncurrent again."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(96540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);