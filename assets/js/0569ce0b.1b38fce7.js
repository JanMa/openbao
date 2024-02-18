"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7351],{85546:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var s=i(74848),t=i(28453);const r={sidebar_label:"register",description:'The "plugin register" command registers a new plugin in OpenBao\'s plugin\ncatalog.'},l="plugin register",o={id:"commands/plugin/register",title:"plugin register",description:'The "plugin register" command registers a new plugin in OpenBao\'s plugin\ncatalog.',source:"@site/content/docs/commands/plugin/register.mdx",sourceDirName:"commands/plugin",slug:"/commands/plugin/register",permalink:"/docs/commands/plugin/register",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/commands/plugin/register.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"register",description:'The "plugin register" command registers a new plugin in OpenBao\'s plugin\ncatalog.'},sidebar:"docs",previous:{title:"list",permalink:"/docs/commands/plugin/list"},next:{title:"reload",permalink:"/docs/commands/plugin/reload"}},c={},a=[{value:"Examples",id:"examples",level:2},{value:"Usage",id:"usage",level:2},{value:"Output options",id:"output-options",level:3},{value:"Command options",id:"command-options",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"plugin-register",children:"plugin register"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"plugin register"}),' command registers a new plugin in OpenBao\'s plugin catalog.\nThe plugin\'s type of "auth", "database", or "secret" must be included.']}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"Register a plugin:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ bao plugin register \\\n    -sha256=d3f0a8be02f6c074cf38c9c99d4d04c9c6466249 \\\n    auth my-custom-plugin\nSuccess! Registered plugin: my-custom-plugin\n"})}),"\n",(0,s.jsx)(n.p,{children:"Register a plugin with custom args:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ bao plugin register \\\n    -sha256=d3f0a8be02f6c074cf38c9c99d4d04c9c6466249 \\\n    -args=--with-glibc,--with-curl-bindings \\\n    auth my-custom-plugin\n"})}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:["The following flags are available in addition to the ",(0,s.jsx)(n.a,{href:"/docs/commands",children:"standard set of\nflags"})," included on all commands."]}),"\n",(0,s.jsx)(n.h3,{id:"output-options",children:"Output options"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-format"})," ",(0,s.jsx)(n.code,{children:'(string: "table")'}),' - Print the output in the given format. Valid\nformats are "table", "json", or "yaml". This can also be specified via the\n',(0,s.jsx)(n.code,{children:"VAULT_FORMAT"})," environment variable."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"command-options",children:"Command options"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-sha256"})," ",(0,s.jsx)(n.code,{children:"(string: <required>)"})," - Checksum (SHA256) of the plugin binary."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-args"})," ",(0,s.jsx)(n.code,{children:'(string: "")'})," - List of arguments to pass to the binary plugin during\neach invocation. Specify multiple arguments with commas."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-command"})," ",(0,s.jsx)(n.code,{children:'(string: "")'})," - Name of the command to run to invoke the binary.\nBy default, this is the name of the plugin."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-plugin-version"})," ",(0,s.jsx)(n.code,{children:'(string: "")'})," - Semantic version of the plugin to run from\nthe catalog. If unspecified, refers to the unversioned plugin registered with\nthe same name and type, or the built-in plugin, in that order of precedence."]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var s=i(96540);const t={},r=s.createContext(t);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);