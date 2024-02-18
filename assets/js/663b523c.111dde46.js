"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6287],{88463:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var i=s(74848),t=s(28453);const r={sidebar_label:"deregister",description:'The "plugin deregister" command deregisters a new plugin in OpenBao\'s plugin\ncatalog.'},o="plugin deregister",l={id:"commands/plugin/deregister",title:"plugin deregister",description:'The "plugin deregister" command deregisters a new plugin in OpenBao\'s plugin\ncatalog.',source:"@site/content/docs/commands/plugin/deregister.mdx",sourceDirName:"commands/plugin",slug:"/commands/plugin/deregister",permalink:"/docs/commands/plugin/deregister",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/commands/plugin/deregister.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"deregister",description:'The "plugin deregister" command deregisters a new plugin in OpenBao\'s plugin\ncatalog.'},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/commands/plugin/"},next:{title:"info",permalink:"/docs/commands/plugin/info"}},d={},a=[{value:"Examples",id:"examples",level:2},{value:"Usage",id:"usage",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"plugin-deregister",children:"plugin deregister"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"plugin deregister"}),' command deregisters an existing plugin from OpenBao\'s\nplugin catalog. If the plugin does not exist, no error is returned. The plugin\'s\ntype of "auth", "database", or "secret" must be included.']}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.p,{children:"Deregister a plugin:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:"$ bao plugin deregister auth my-custom-plugin\nSuccess! Deregistered plugin (if it was registered): my-custom-plugin\n"})}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(n.p,{children:["The following flags are available in addition to the ",(0,i.jsx)(n.a,{href:"/docs/commands",children:"standard set of\nflags"})," included on all commands."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-version"})," ",(0,i.jsx)(n.code,{children:'(string: "")'})," - Semantic version of the plugin to deregister.\nIf unset, only an unversioned plugin may be deregistered."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var i=s(96540);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);