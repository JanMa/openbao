"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5707],{70937:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>r});var t=i(74848),s=i(28453);const o={sidebar_label:"info",description:'The "plugin info" command displays information about a plugin in the catalog.'},a="plugin info",l={id:"commands/plugin/info",title:"plugin info",description:'The "plugin info" command displays information about a plugin in the catalog.',source:"@site/content/docs/commands/plugin/info.mdx",sourceDirName:"commands/plugin",slug:"/commands/plugin/info",permalink:"/openbao/docs/commands/plugin/info",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/commands/plugin/info.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"info",description:'The "plugin info" command displays information about a plugin in the catalog.'},sidebar:"docs",previous:{title:"deregister",permalink:"/openbao/docs/commands/plugin/deregister"},next:{title:"list",permalink:"/openbao/docs/commands/plugin/list"}},d={},r=[{value:"deprecation_status field",id:"deprecation_status-field",level:2},{value:"Examples",id:"examples",level:2},{value:"Usage",id:"usage",level:2},{value:"Output options",id:"output-options",level:3},{value:"Command options",id:"command-options",level:3}];function c(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"plugin-info",children:"plugin info"}),"\n",(0,t.jsxs)(e.p,{children:["The ",(0,t.jsx)(e.code,{children:"plugin info"}),' displays information about a plugin in the catalog.\nThe plugin\'s type of "auth", "database", or "secret" must be included.']}),"\n",(0,t.jsx)(e.h2,{id:"deprecation_status-field",children:"deprecation_status field"}),"\n",(0,t.jsxs)(e.p,{children:["As of 1.12, all builtin plugins will have an associated Deprecation\nStatus. This status will be reflected in the ",(0,t.jsx)(e.code,{children:"deprecation_status"})," key/value\npair, seen below."]}),"\n",(0,t.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(e.p,{children:"Display information about a plugin"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell-session",children:"$ bao plugin info -version=v1.0.0 auth my-custom-plugin\n\nKey                   Value\n---                   -----\nargs                  []\nbuiltin               false\ncommand               my-custom-plugin\ndeprecation_status    n/a\nname                  my-custom-plugin\nsha256                04ce575260fa3a2cfc477d13ac327108c50838a03917ec4d6df38ecdc64452d1\nversion               v1.0.0\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell-session",children:"$ bao plugin info database postgresql-database-plugin\nKey                   Value\n---                   -----\nargs                  []\nbuiltin               true\ncommand               n/a\ndeprecation_status    supported\nname                  postgresql-database-plugin\nsha256                n/a\nversion               n/a\n"})}),"\n",(0,t.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(e.p,{children:["The following flags are available in addition to the ",(0,t.jsx)(e.a,{href:"/docs/commands",children:"standard set of\nflags"})," included on all commands."]}),"\n",(0,t.jsx)(e.h3,{id:"output-options",children:"Output options"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"-field"})," ",(0,t.jsx)(e.code,{children:'(string: "")'})," - Print only the field with the given name. Specifying\nthis option will take precedence over other formatting directives. The result\nwill not have a trailing newline making it ideal for piping to other\nprocesses."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"-format"})," ",(0,t.jsx)(e.code,{children:'(string: "table")'}),' - Print the output in the given format. Valid\nformats are "table", "json", or "yaml". This can also be specified via the\n',(0,t.jsx)(e.code,{children:"VAULT_FORMAT"})," environment variable."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"command-options",children:"Command options"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"-plugin-version"})," ",(0,t.jsx)(e.code,{children:'(string: "")'})," - Semantic version of the plugin to read from\nthe catalog. If unspecified, refers to the unversioned plugin registered with\nthe same name and type, or the built-in plugin, in that order of precedence."]}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>a,x:()=>l});var t=i(96540);const s={},o=t.createContext(s);function a(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);