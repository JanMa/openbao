"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5529],{46537:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var s=n(74848),t=n(28453);const a={layout:"docs",page_title:"operator seal - Command",description:'The "operator seal" command seals the OpenBao server. Sealing tells the OpenBao server to\nstop responding to any operations until it is unsealed. When sealed, the OpenBao\nserver discards its in-memory root key to unlock the data, so it is\nphysically blocked from responding to operations unsealed.'},r="operator seal",i={id:"commands/operator/seal",title:"operator seal",description:'The "operator seal" command seals the OpenBao server. Sealing tells the OpenBao server to\nstop responding to any operations until it is unsealed. When sealed, the OpenBao\nserver discards its in-memory root key to unlock the data, so it is\nphysically blocked from responding to operations unsealed.',source:"@site/content/docs/commands/operator/seal.mdx",sourceDirName:"commands/operator",slug:"/commands/operator/seal",permalink:"/openbao/docs/commands/operator/seal",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/commands/operator/seal.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"operator seal - Command",description:'The "operator seal" command seals the OpenBao server. Sealing tells the OpenBao server to\nstop responding to any operations until it is unsealed. When sealed, the OpenBao\nserver discards its in-memory root key to unlock the data, so it is\nphysically blocked from responding to operations unsealed.'},sidebar:"tutorialSidebar",previous:{title:"operator rotate",permalink:"/openbao/docs/commands/operator/rotate"},next:{title:"operator step-down",permalink:"/openbao/docs/commands/operator/step-down"}},l={},d=[{value:"Examples",id:"examples",level:2},{value:"Usage",id:"usage",level:2}];function p(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h1,{id:"operator-seal",children:"operator seal"}),"\n",(0,s.jsxs)(o.p,{children:["The ",(0,s.jsx)(o.code,{children:"operator seal"})," seals the OpenBao server. Sealing tells the OpenBao server to\nstop responding to any operations until it is unsealed. When sealed, the OpenBao\nserver discards its in-memory root key to unlock the data, so it is physically\nblocked from responding to operations unsealed."]}),"\n",(0,s.jsx)(o.p,{children:"If an unseal is in progress, sealing the OpenBao will reset the unsealing process.\nUsers will have to re-enter their portions of the root key again."}),"\n",(0,s.jsx)(o.p,{children:"This command does nothing if the OpenBao server is already sealed."}),"\n",(0,s.jsxs)(o.p,{children:["For more information on sealing and unsealing, please the ",(0,s.jsx)(o.a,{href:"/docs/concepts/seal",children:"seal concepts\npage"}),"."]}),"\n",(0,s.jsx)(o.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(o.p,{children:"Seal an OpenBao server:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-shell-session",children:"$ bao operator seal\nSuccess! OpenBao is sealed.\n"})}),"\n",(0,s.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(o.p,{children:["There are no flags beyond the ",(0,s.jsx)(o.a,{href:"/docs/commands",children:"standard set of flags"}),"\nincluded on all commands."]})]})}function c(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>r,x:()=>i});var s=n(96540);const t={},a=s.createContext(t);function r(e){const o=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(a.Provider,{value:o},e.children)}}}]);