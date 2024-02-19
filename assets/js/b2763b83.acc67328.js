"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[888],{22961:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=a(74848),t=a(28453);const s={sidebar_label:"disable",description:'The "audit disable" command disables an audit device at a given path, if one\nexists. This command is idempotent, meaning it succeeds even if no audit\ndevice is enabled at the path.'},d="audit disable",o={id:"commands/audit/disable",title:"audit disable",description:'The "audit disable" command disables an audit device at a given path, if one\nexists. This command is idempotent, meaning it succeeds even if no audit\ndevice is enabled at the path.',source:"@site/content/docs/commands/audit/disable.mdx",sourceDirName:"commands/audit",slug:"/commands/audit/disable",permalink:"/openbao/docs/commands/audit/disable",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/commands/audit/disable.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"disable",description:'The "audit disable" command disables an audit device at a given path, if one\nexists. This command is idempotent, meaning it succeeds even if no audit\ndevice is enabled at the path.'},sidebar:"docs",previous:{title:"Overview",permalink:"/openbao/docs/commands/audit/"},next:{title:"enable",permalink:"/openbao/docs/commands/audit/enable"}},c={},l=[{value:"Examples",id:"examples",level:2},{value:"Usage",id:"usage",level:2}];function r(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"audit-disable",children:"audit disable"}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"audit disable"})," command disables an audit device at a given path, if one\nexists. This command is idempotent, meaning it succeeds even if no audit device\nis enabled at the path."]}),"\n",(0,n.jsx)(i.p,{children:"Once an audit device is disabled, no future audit logs are dispatched to it. The\ndata associated with the audit device is unaffected. For example, if you\ndisabled an audit device that was logging to a file, the file would still exist\nand have stored contents."}),"\n",(0,n.jsx)(i.admonition,{type:"warning",children:(0,n.jsx)(i.p,{children:"Note: Once an audit device is disabled, you will no longer be able to HMAC values\nfor comparison with entries in the audit logs. This is true even if you re-enable\nthe audit device at the same path, as a new salt will be created for hashing."})}),"\n",(0,n.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(i.p,{children:'Disable the audit device enabled at "file/":'}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-shell-session",children:"$ bao audit disable file/\nSuccess! Disabled audit device (if it was enabled) at: file/\n"})}),"\n",(0,n.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(i.p,{children:["There are no flags beyond the ",(0,n.jsx)(i.a,{href:"/docs/commands",children:"standard set of flags"}),"\nincluded on all commands."]})]})}function u(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}},28453:(e,i,a)=>{a.d(i,{R:()=>d,x:()=>o});var n=a(96540);const t={},s=n.createContext(t);function d(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);