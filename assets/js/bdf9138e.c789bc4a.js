"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3951],{71006:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var n=a(74848),s=a(28453);const i={layout:"docs",page_title:"auth disable - Command",description:'The "auth disable" command disables an auth method at a given path, if one\nexists. This command is idempotent, meaning it succeeds even if no auth method\nis enabled at the path.'},o="auth disable",d={id:"commands/auth/disable",title:"auth disable",description:'The "auth disable" command disables an auth method at a given path, if one\nexists. This command is idempotent, meaning it succeeds even if no auth method\nis enabled at the path.',source:"@site/content/docs/commands/auth/disable.mdx",sourceDirName:"commands/auth",slug:"/commands/auth/disable",permalink:"/openbao/docs/commands/auth/disable",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/commands/auth/disable.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"auth disable - Command",description:'The "auth disable" command disables an auth method at a given path, if one\nexists. This command is idempotent, meaning it succeeds even if no auth method\nis enabled at the path.'},sidebar:"tutorialSidebar",previous:{title:"auth",permalink:"/openbao/docs/commands/auth/"},next:{title:"auth enable",permalink:"/openbao/docs/commands/auth/enable"}},h={},c=[{value:"Examples",id:"examples",level:2},{value:"Usage",id:"usage",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"auth-disable",children:"auth disable"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"auth disable"})," command disables an auth method at a given path, if one\nexists. This command is idempotent, meaning it succeeds even if no auth method\nis enabled at the path."]}),"\n",(0,n.jsxs)(t.p,{children:["Once an auth method is disabled, it can no longer be used for authentication.\n",(0,n.jsx)(t.strong,{children:"All access tokens generated via the disabled auth method are immediately\nrevoked."})," This command will block until all tokens are revoked."]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.p,{children:'Disable the auth method enabled at "userpass/":'}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell-session",children:"$ bao auth disable userpass/\nSuccess! Disabled the auth method (if it existed) at: userpass/\n"})}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:["There are no flags beyond the ",(0,n.jsx)(t.a,{href:"/docs/commands",children:"standard set of flags"}),"\nincluded on all commands."]})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>d});var n=a(96540);const s={},i=n.createContext(s);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);