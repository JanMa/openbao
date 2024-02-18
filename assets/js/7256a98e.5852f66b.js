"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7438],{43619:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>l});var s=t(74848),o=t(28453);const d={layout:"docs",page_title:"kv undelete - Command",description:'The "kv undelete" command undeletes the data for the provided version and path\nin the key-value store. This restores the data, allowing it to be returned on\nget requests.'},r="kv undelete",i={id:"commands/kv/undelete",title:"kv undelete",description:'The "kv undelete" command undeletes the data for the provided version and path\nin the key-value store. This restores the data, allowing it to be returned on\nget requests.',source:"@site/content/docs/commands/kv/undelete.mdx",sourceDirName:"commands/kv",slug:"/commands/kv/undelete",permalink:"/openbao/docs/commands/kv/undelete",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/commands/kv/undelete.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"kv undelete - Command",description:'The "kv undelete" command undeletes the data for the provided version and path\nin the key-value store. This restores the data, allowing it to be returned on\nget requests.'},sidebar:"docs",previous:{title:"kv rollback",permalink:"/openbao/docs/commands/kv/rollback"},next:{title:"lease",permalink:"/openbao/docs/commands/lease/"}},a={},l=[{value:"Examples",id:"examples",level:2},{value:"Usage",id:"usage",level:2},{value:"Output options",id:"output-options",level:3},{value:"Command options",id:"command-options",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"kv-undelete",children:"kv undelete"}),"\n",(0,s.jsxs)(n.p,{children:["~> ",(0,s.jsx)(n.strong,{children:"NOTE:"})," This is a ",(0,s.jsx)(n.a,{href:"/docs/secrets/kv/kv-v2",children:"K/V Version 2"})," secrets\nengine command, and not available for Version 1."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"kv undelete"})," command undoes the deletes of the data for the provided version\nand path in the key-value store. This restores the data, allowing it to be\nreturned on get requests."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:'Undelete version 3 of the key "creds":'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ bao kv undelete -mount=secret -versions=3 creds\nSuccess! Data written to: secret/undelete/creds\n"})}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:["There are no flags beyond the ",(0,s.jsx)(n.a,{href:"/docs/commands",children:"standard set of flags"}),"\nincluded on all commands."]}),"\n",(0,s.jsx)(n.h3,{id:"output-options",children:"Output options"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-format"})," ",(0,s.jsx)(n.code,{children:'(string: "table")'}),' - Print the output in the given format. Valid\nformats are "table", "json", or "yaml". This can also be specified via the\n',(0,s.jsx)(n.code,{children:"VAULT_FORMAT"})," environment variable."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"command-options",children:"Command options"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-mount"})," ",(0,s.jsx)(n.code,{children:'(string: "")'})," - Specifies the path where the KV backend is mounted.\nIf specified, the next argument will be interpreted as the secret path. If\nthis flag is not specified, the next argument will be interpreted as the\ncombined mount path and secret path, with /data/ automatically inserted for\nKV v2 secrets."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-versions"})," ",(0,s.jsx)(n.code,{children:"([]int: <required>)"})," - Specifies the version number that should\nbe made current again."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var s=t(96540);const o={},d=s.createContext(o);function r(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);