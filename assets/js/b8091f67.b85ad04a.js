"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3632],{95895:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>r});var t=s(74848),i=s(28453);const a={layout:"docs",page_title:"status - Command",description:'The "status" command prints the current state of OpenBao including whether it is\nsealed and if HA mode is enabled. This command prints regardless of whether\nthe OpenBao is sealed.'},l="status",d={id:"commands/status",title:"status",description:'The "status" command prints the current state of OpenBao including whether it is\nsealed and if HA mode is enabled. This command prints regardless of whether\nthe OpenBao is sealed.',source:"@site/content/docs/commands/status.mdx",sourceDirName:"commands",slug:"/commands/status",permalink:"/openbao/docs/commands/status",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/commands/status.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"status - Command",description:'The "status" command prints the current state of OpenBao including whether it is\nsealed and if HA mode is enabled. This command prints regardless of whether\nthe OpenBao is sealed.'},sidebar:"tutorialSidebar",previous:{title:"ssh",permalink:"/openbao/docs/commands/ssh"},next:{title:"token",permalink:"/openbao/docs/commands/token/"}},o={},r=[{value:"Examples",id:"examples",level:2},{value:"Usage",id:"usage",level:2},{value:"Output options",id:"output-options",level:3},{value:"Output fields",id:"output-fields",level:4}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"status",children:"status"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"status"})," command prints the current state of OpenBao including whether it is\nsealed and if HA mode is enabled. This command prints regardless of whether the\nOpenBao is sealed."]}),"\n",(0,t.jsx)(n.p,{children:"The exit code reflects the seal status:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"0 - unsealed"}),"\n",(0,t.jsx)(n.li,{children:"1 - error"}),"\n",(0,t.jsx)(n.li,{children:"2 - sealed"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:"Check the status:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"$ bao status\n\nSealed: false\nKey Shares: 5\nKey Threshold: 3\nUnseal Progress: 0\nUnseal Nonce:\nVersion: x.y.z\nBuild Date: 2022-05-03T08:34:11Z\nCluster Name: openbao-cluster-49ffd45f\nCluster ID: d2dad792-fb99-1c8d-452e-528d073ba205\n\nHigh-Availability Enabled: false\n"})}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:["The following flags are available in addition to the ",(0,t.jsx)(n.a,{href:"/docs/commands",children:"standard set of\nflags"})," included on all commands."]}),"\n",(0,t.jsx)(n.h3,{id:"output-options",children:"Output options"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-format"})," ",(0,t.jsx)(n.code,{children:'(string: "table")'}),' - Print the output in the given format. Valid\nformats are "table", "json", or "yaml". This can also be specified via the\n',(0,t.jsx)(n.code,{children:"VAULT_FORMAT"})," environment variable."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'By default, the output is displayed in "table" format.'}),"\n",(0,t.jsx)(n.h4,{id:"output-fields",children:"Output fields"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["The field for total shares is displayed as ",(0,t.jsx)(n.code,{children:'"n"'})," instead of ",(0,t.jsx)(n.code,{children:"n"})," in yaml outputs."]}),"\n",(0,t.jsx)(n.li,{children:'The following fields in "table" format are displayed only when relevant:'}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'"Unseal Progress" and "Unseal Nonce" are displayed when OpenBao is sealed.'}),"\n",(0,t.jsx)(n.li,{children:'"Seal Migration in Progress" is displayed when it is in progress.'}),"\n",(0,t.jsx)(n.li,{children:'"Cluster Name" and "Cluster ID" are displayed if they have a value.'}),"\n",(0,t.jsx)(n.li,{children:'"Raft Committed Index", "Raft Applied Index", "Last WAL" are diplayed if they are non-zero.'}),"\n",(0,t.jsx)(n.li,{children:'"Warnings" are displayed if the warnings apply.'}),"\n",(0,t.jsxs)(n.li,{children:["The following fields are displayed only when HA mode is enabled and is unsealed:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'"HA Cluster".'}),"\n",(0,t.jsx)(n.li,{children:'"HA Mode".'}),"\n",(0,t.jsx)(n.li,{children:'"Active Since" is displayed if the node is active and has a valid active time.'}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>d});var t=s(96540);const i={},a=t.createContext(i);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);