"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4406],{17745:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var t=n(74848),s=n(28453);const a={sidebar_label:"lookup",description:'The "token lookup" displays information about a token or accessor. If a TOKEN\nis not provided, the locally authenticated token is used.'},i="token lookup",l={id:"commands/token/lookup",title:"token lookup",description:'The "token lookup" displays information about a token or accessor. If a TOKEN\nis not provided, the locally authenticated token is used.',source:"@site/content/docs/commands/token/lookup.mdx",sourceDirName:"commands/token",slug:"/commands/token/lookup",permalink:"/openbao/docs/commands/token/lookup",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/commands/token/lookup.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"lookup",description:'The "token lookup" displays information about a token or accessor. If a TOKEN\nis not provided, the locally authenticated token is used.'},sidebar:"docs",previous:{title:"create",permalink:"/openbao/docs/commands/token/create"},next:{title:"renew",permalink:"/openbao/docs/commands/token/renew"}},c={},d=[{value:"Examples",id:"examples",level:2},{value:"Usage",id:"usage",level:2},{value:"Output options",id:"output-options",level:3},{value:"Command options",id:"command-options",level:3}];function r(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"token-lookup",children:"token lookup"}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"token lookup"})," displays information about a token or accessor. If a TOKEN is\nnot provided, the locally authenticated token is used."]}),"\n",(0,t.jsx)(o.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(o.p,{children:["Get information about the locally authenticated token (this uses the\n",(0,t.jsx)(o.code,{children:"/auth/token/lookup-self"})," endpoint and permission):"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-shell-session",children:"$ bao token lookup\n"})}),"\n",(0,t.jsxs)(o.p,{children:["Get information about a particular token (this uses the ",(0,t.jsx)(o.code,{children:"/auth/token/lookup"}),"\nendpoint and permission):"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-shell-session",children:"$ bao token lookup 96ddf4bc-d217-f3ba-f9bd-017055595017\n"})}),"\n",(0,t.jsx)(o.p,{children:"Get information about a token via its accessor:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-shell-session",children:"$ bao token lookup -accessor 9793c9b3-e04a-46f3-e7b8-748d7da248da\n"})}),"\n",(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(o.p,{children:["The following flags are available in addition to the ",(0,t.jsx)(o.a,{href:"/docs/commands",children:"standard set of\nflags"})," included on all commands."]}),"\n",(0,t.jsx)(o.h3,{id:"output-options",children:"Output options"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"-format"})," ",(0,t.jsx)(o.code,{children:'(default: "table")'}),' - Print the output in the given format. Valid\nformats are "table", "json", or "yaml". This can also be specified via the\n',(0,t.jsx)(o.code,{children:"VAULT_FORMAT"})," environment variable."]}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"command-options",children:"Command options"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"-accessor"})," ",(0,t.jsx)(o.code,{children:"(bool: false)"})," - Treat the argument as an accessor instead of a\ntoken. When this option is selected, the output will NOT include the token."]}),"\n"]})]})}function u(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>i,x:()=>l});var t=n(96540);const s={},a=t.createContext(s);function i(e){const o=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:o},e.children)}}}]);