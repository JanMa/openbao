"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8227],{52325:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var l=i(74848),t=i(28453);const s={layout:"docs",page_title:"plugin list - Command",description:'The "plugin list" command lists all available plugins in the plugin catalog.'},a="plugin list",o={id:"commands/plugin/list",title:"plugin list",description:'The "plugin list" command lists all available plugins in the plugin catalog.',source:"@site/content/docs/commands/plugin/list.mdx",sourceDirName:"commands/plugin",slug:"/commands/plugin/list",permalink:"/openbao/docs/commands/plugin/list",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/commands/plugin/list.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"plugin list - Command",description:'The "plugin list" command lists all available plugins in the plugin catalog.'},sidebar:"tutorialSidebar",previous:{title:"plugin info",permalink:"/openbao/docs/commands/plugin/info"},next:{title:"plugin register",permalink:"/openbao/docs/commands/plugin/register"}},c={},d=[{value:"Deprecation status column",id:"deprecation-status-column",level:2},{value:"Examples",id:"examples",level:2},{value:"Usage",id:"usage",level:2},{value:"Output options",id:"output-options",level:3},{value:"Command options",id:"command-options",level:3}];function r(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"plugin-list",children:"plugin list"}),"\n",(0,l.jsxs)(e.p,{children:["The ",(0,l.jsx)(e.code,{children:"plugin list"}),' command lists all available plugins in the plugin catalog.\nIt can be used alone or with a type such as "auth", "database", or "secret".']}),"\n",(0,l.jsx)(e.h2,{id:"deprecation-status-column",children:"Deprecation status column"}),"\n",(0,l.jsxs)(e.p,{children:["As of 1.12, all builtin plugins will have an associated Deprecation\nStatus. This status will be reflected in the ",(0,l.jsx)(e.code,{children:"Deprecation Status"})," column, seen\nbelow. All non-builtin plugins will show a ",(0,l.jsx)(e.code,{children:"Deprecation Status"}),' of "n/a".']}),"\n",(0,l.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(e.p,{children:"List all available plugins in the catalog."}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell-session",children:"$ bao plugin list\nName                                 Type        Version\n----                                 ----        -------\napprole                              auth        v1.14.8+builtin.bao\n# ...\n\n$ bao plugin list database\nName                                 Version\n----                                 -------\ncassandra-database-plugin            v1.13.0+builtin.bao\n# ...\n"})}),"\n",(0,l.jsx)(e.p,{children:"List detailed plugin information:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell-session",children:"$ bao plugin list -detailed\nName                             Type        Version                                          Deprecation Status\n----                             ----        -------                                          ------------------\napprole                          auth        v1.14.8+builtin.bao                              supported\n# ...\n"})}),"\n",(0,l.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsxs)(e.p,{children:["The following flags are available in addition to the ",(0,l.jsx)(e.a,{href:"/docs/commands",children:"standard set of\nflags"})," included on all commands."]}),"\n",(0,l.jsx)(e.h3,{id:"output-options",children:"Output options"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"-format"})," ",(0,l.jsx)(e.code,{children:'(string: "table")'}),' - Print the output in the given format. Valid\nformats are "table", "json", or "yaml". This can also be specified via the\n',(0,l.jsx)(e.code,{children:"VAULT_FORMAT"})," environment variable."]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"command-options",children:"Command options"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"-detailed"})," ",(0,l.jsx)(e.code,{children:"(bool: false)"})," - Print detailed information such as version and\ndeprecation status about each plugin."]}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(r,{...n})}):r(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>a,x:()=>o});var l=i(96540);const t={},s=l.createContext(t);function a(n){const e=l.useContext(s);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:a(n.components),l.createElement(s.Provider,{value:e},n.children)}}}]);