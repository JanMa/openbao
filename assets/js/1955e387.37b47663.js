"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7352],{68038:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var a=n(74848),o=n(28453);const t={layout:"docs",page_title:"lease revoke - Command",description:'The "lease revoke" command revokes the lease on a secret, invalidating the\nunderlying secret.'},l="lease revoke",r={id:"commands/lease/revoke",title:"lease revoke",description:'The "lease revoke" command revokes the lease on a secret, invalidating the\nunderlying secret.',source:"@site/content/docs/commands/lease/revoke.mdx",sourceDirName:"commands/lease",slug:"/commands/lease/revoke",permalink:"/openbao/docs/commands/lease/revoke",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/commands/lease/revoke.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"lease revoke - Command",description:'The "lease revoke" command revokes the lease on a secret, invalidating the\nunderlying secret.'},sidebar:"tutorialSidebar",previous:{title:"lease renew",permalink:"/openbao/docs/commands/lease/renew"},next:{title:"list",permalink:"/openbao/docs/commands/list"}},i={},c=[{value:"Examples",id:"examples",level:2},{value:"Usage",id:"usage",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"lease-revoke",children:"lease revoke"}),"\n",(0,a.jsxs)(s.p,{children:["The ",(0,a.jsx)(s.code,{children:"lease revoke"})," command revokes the lease on a secret, invalidating the\nunderlying secret."]}),"\n",(0,a.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(s.p,{children:"Revoke a lease:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-shell-session",children:"$ bao lease revoke database/creds/readonly/27e1b9a1-27b8-83d9-9fe0-d99d786bdc83\nSuccess! Revoked lease: database/creds/readonly/27e1b9a1-27b8-83d9-9fe0-d99d786bdc83\n"})}),"\n",(0,a.jsx)(s.p,{children:"Revoke a lease which starts with a prefix:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-shell-session",children:"$ bao lease revoke -prefix database/creds\nSuccess! Revoked any leases with prefix: database/creds\n"})}),"\n",(0,a.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(s.p,{children:["The following flags are available in addition to the ",(0,a.jsx)(s.a,{href:"/docs/commands",children:"standard set of\nflags"})," included on all commands."]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"-force"})," ",(0,a.jsx)(s.code,{children:"(bool: false)"}),' - Delete the lease from OpenBao even if the secret\nengine revocation fails. This is meant for recovery situations where the\nsecret in the target secrets engine was manually removed. If this flag is\nspecified, -prefix is also required. This is aliased as "-f". The default is\nfalse.']}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"-prefix"})," ",(0,a.jsx)(s.code,{children:"(bool: false)"})," - Treat the ID as a prefix instead of an exact lease\nID. This can revoke multiple leases simultaneously. The default is false."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"-sync"})," ",(0,a.jsx)(s.code,{children:"(bool: false)"})," - Make the operation synchronous instead of queuing the\nrevocations to be done in the background."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>r});var a=n(96540);const o={},t=a.createContext(o);function l(e){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),a.createElement(t.Provider,{value:s},e.children)}}}]);