"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1348],{83269:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var n=i(74848),s=i(28453);const a={layout:"docs",page_title:"audit list - Command",description:'The "audit list" command lists the audit devices enabled. The output lists the\nenabled audit devices and options for those devices.'},o="audit list",d={id:"commands/audit/list",title:"audit list",description:'The "audit list" command lists the audit devices enabled. The output lists the\nenabled audit devices and options for those devices.',source:"@site/content/docs/commands/audit/list.mdx",sourceDirName:"commands/audit",slug:"/commands/audit/list",permalink:"/openbao/docs/commands/audit/list",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/commands/audit/list.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"audit list - Command",description:'The "audit list" command lists the audit devices enabled. The output lists the\nenabled audit devices and options for those devices.'},sidebar:"docs",previous:{title:"audit enable",permalink:"/openbao/docs/commands/audit/enable"},next:{title:"auth",permalink:"/openbao/docs/commands/auth/"}},l={},c=[{value:"Examples",id:"examples",level:2},{value:"Usage",id:"usage",level:2},{value:"Output options",id:"output-options",level:3},{value:"Command options",id:"command-options",level:3}];function r(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"audit-list",children:"audit list"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"audit list"})," command lists the audit devices enabled. The output lists the\nenabled audit devices and options for those devices."]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.p,{children:"List all audit devices:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell-session",children:"$ bao audit list\nPath     Type    Description\n----     ----    -----------\nfile/    file    n/a\n"})}),"\n",(0,n.jsx)(t.p,{children:"List detailed audit device information:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell-session",children:"$ bao audit list -detailed\nPath     Type    Description    Replication    Options\n----     ----    -----------    -----------    -------\nfile/    file    n/a            replicated     file_path=/var/log/audit.log\n"})}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:["The following flags are available in addition to the ",(0,n.jsx)(t.a,{href:"/docs/commands",children:"standard set of\nflags"})," included on all commands."]}),"\n",(0,n.jsx)(t.h3,{id:"output-options",children:"Output options"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"-format"})," ",(0,n.jsx)(t.code,{children:'(string: "table")'}),' - Print the output in the given format. Valid\nformats are "table", "json", or "yaml". This can also be specified via the\n',(0,n.jsx)(t.code,{children:"VAULT_FORMAT"})," environment variable."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"command-options",children:"Command options"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"-detailed"})," ",(0,n.jsx)(t.code,{children:"(bool: false)"})," - Print detailed information such as options and\nreplication status about each auth device."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>d});var n=i(96540);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);