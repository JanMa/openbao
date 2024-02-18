"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2127],{17227:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>r,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var t=n(74848),a=n(28453);const c={sidebar_label:"Overview",description:'The "secrets" command groups subcommands for interacting with OpenBao\'s secrets\nengines.'},r="secrets",o={id:"commands/secrets/index",title:"secrets",description:'The "secrets" command groups subcommands for interacting with OpenBao\'s secrets\nengines.',source:"@site/content/docs/commands/secrets/index.mdx",sourceDirName:"commands/secrets",slug:"/commands/secrets/",permalink:"/openbao/docs/commands/secrets/",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/commands/secrets/index.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Overview",description:'The "secrets" command groups subcommands for interacting with OpenBao\'s secrets\nengines.'},sidebar:"docs",previous:{title:"read",permalink:"/openbao/docs/commands/read"},next:{title:"disable",permalink:"/openbao/docs/commands/secrets/disable"}},i={},d=[{value:"Examples",id:"examples",level:2},{value:"Usage",id:"usage",level:2}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"secrets",children:"secrets"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"secrets"})," command groups subcommands for interacting with OpenBao's secrets\nengines. Each secrets engine behaves differently. Please see the documentation\nfor more information."]}),"\n",(0,t.jsxs)(s.p,{children:["Some secrets engines persist data, some act as data pass-through, and some\ngenerate dynamic credentials. The secrets engine will likely require\nconfiguration after it is mounted. For details on the specific configuration\noptions, please see the ",(0,t.jsx)(s.a,{href:"/docs/secrets",children:"secrets engine\ndocumentation"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.p,{children:"Enable a secrets engine:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell-session",children:"$ bao secrets enable database\nSuccess! Enabled the database secrets engine at: database/\n"})}),"\n",(0,t.jsx)(s.p,{children:"List all secrets engines:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell-session",children:"$ bao secrets list\nPath          Type         Description\n----          ----         -----------\ncubbyhole/    cubbyhole    per-token private secret storage\ndatabase/     database     n/a\nsecret/       kv           key/value secret storage\nsys/          system       system endpoints used for control, policy and debugging\n"})}),"\n",(0,t.jsx)(s.p,{children:"Move a secrets engine to a new path:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell-session",children:"$ bao secrets move database/ db-prod/\nSuccess! Moved secrets engine database/ to: db-prod/\n"})}),"\n",(0,t.jsx)(s.p,{children:"Tune a secrets engine:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell-session",children:"$ bao secrets tune -max-lease-ttl=30m db-prod/\nSuccess! Tuned the secrets engine at: db-prod/\n"})}),"\n",(0,t.jsx)(s.p,{children:"Disable a secrets engine:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell-session",children:"$ bao secrets disable db-prod/\nSuccess! Disabled the secrets engine (if it existed) at: db-prod/\n"})}),"\n",(0,t.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-text",children:"Usage: bao secrets <subcommand> [options] [args]\n\n  # ...\n\nSubcommands:\n    disable    Disable a secrets engine\n    enable     Enable a secrets engine\n    list       List enabled secrets engines\n    move       Move a secrets engine to a new path\n    tune       Tune a secrets engine configuration\n"})}),"\n",(0,t.jsx)(s.p,{children:"For more information, examples, and usage about a subcommand, click on the name\nof the subcommand in the sidebar."})]})}function m(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>o});var t=n(96540);const a={},c=t.createContext(a);function r(e){const s=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(c.Provider,{value:s},e.children)}}}]);