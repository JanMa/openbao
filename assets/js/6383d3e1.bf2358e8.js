"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3460],{15678:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>t,metadata:()=>c,toc:()=>r});var a=n(74848),o=n(28453);const t={layout:"docs",page_title:"lease - Command",description:'The "lease" command groups subcommands for interacting with leases attached to\nsecrets.'},d="lease",c={id:"commands/lease/index",title:"lease",description:'The "lease" command groups subcommands for interacting with leases attached to\nsecrets.',source:"@site/content/docs/commands/lease/index.mdx",sourceDirName:"commands/lease",slug:"/commands/lease/",permalink:"/openbao/docs/commands/lease/",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/commands/lease/index.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"lease - Command",description:'The "lease" command groups subcommands for interacting with leases attached to\nsecrets.'},sidebar:"tutorialSidebar",previous:{title:"kv undelete",permalink:"/openbao/docs/commands/kv/undelete"},next:{title:"lease lookup",permalink:"/openbao/docs/commands/lease/lookup"}},l={},r=[{value:"Examples",id:"examples",level:2},{value:"Usage",id:"usage",level:2}];function i(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"lease",children:"lease"}),"\n",(0,a.jsxs)(s.p,{children:["The ",(0,a.jsx)(s.code,{children:"lease"})," command groups subcommands for interacting with leases attached to\nsecrets. For leases attached to tokens, use the ",(0,a.jsx)(s.a,{href:"/docs/commands/token",children:(0,a.jsx)(s.code,{children:"bao token"})})," subcommand."]}),"\n",(0,a.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(s.p,{children:"Lookup a lease:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-shell-session",children:"$ bao lease lookup database/creds/readonly/27e1b9a1-27b8-83d9-9fe0-d99d786bdc83\nKey             Value\n---             -----\nexpire_time     2021-03-17T11:55:50.755313-05:00\nid              database/creds/readonly/27e1b9a1-27b8-83d9-9fe0-d99d786bdc83\nissue_time      2021-03-17T11:45:50.755312-05:00\nlast_renewal    <nil>\nrenewable       true\nttl             9m52s\n"})}),"\n",(0,a.jsx)(s.p,{children:"Renew a lease:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-shell-session",children:"$ bao lease renew database/creds/readonly/27e1b9a1-27b8-83d9-9fe0-d99d786bdc83\nKey                Value\n---                -----\nlease_id           database/creds/readonly/27e1b9a1-27b8-83d9-9fe0-d99d786bdc83\nlease_duration     5m\nlease_renewable    true\n"})}),"\n",(0,a.jsx)(s.p,{children:"Revoke a lease:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-shell-session",children:"$ bao lease revoke database/creds/readonly/27e1b9a1-27b8-83d9-9fe0-d99d786bdc83\nSuccess! Revoked lease: database/creds/readonly/27e1b9a1-27b8-83d9-9fe0-d99d786bdc83\n"})}),"\n",(0,a.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-text",children:"Usage: bao lease <subcommand> [options] [args]\n\n  # ...\n\nSubcommands:\n    lookup    Lookup lease information by lease id\n    renew     Renews the lease of a secret\n    revoke    Revokes leases and secrets\n"})}),"\n",(0,a.jsx)(s.p,{children:"For more information, examples, and usage about a subcommand, click on the name\nof the subcommand in the sidebar."})]})}function m(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>c});var a=n(96540);const o={},t=a.createContext(o);function d(e){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),a.createElement(t.Provider,{value:s},e.children)}}}]);