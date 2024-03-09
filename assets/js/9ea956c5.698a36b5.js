"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6094],{34993:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var t=o(74848),s=o(28453);const a={sidebar_label:"revoke",description:'The "token revoke" revokes authentication tokens and their children. If a\nTOKEN is not provided, the locally authenticated token is used.'},i="token revoke",r={id:"commands/token/revoke",title:"token revoke",description:'The "token revoke" revokes authentication tokens and their children. If a\nTOKEN is not provided, the locally authenticated token is used.',source:"@site/content/docs/commands/token/revoke.mdx",sourceDirName:"commands/token",slug:"/commands/token/revoke",permalink:"/openbao/docs/commands/token/revoke",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/commands/token/revoke.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"revoke",description:'The "token revoke" revokes authentication tokens and their children. If a\nTOKEN is not provided, the locally authenticated token is used.'},sidebar:"docs",previous:{title:"renew",permalink:"/openbao/docs/commands/token/renew"},next:{title:"Overview",permalink:"/openbao/docs/commands/transit/"}},d={},c=[{value:"Examples",id:"examples",level:2},{value:"Usage",id:"usage",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"token-revoke",children:"token revoke"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"token revoke"})," revokes authentication tokens and their children. If a TOKEN\nis not provided, the locally authenticated token is used. The ",(0,t.jsx)(n.code,{children:"-mode"})," flag can\nbe used to control the behavior of the revocation."]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:"Revoke a token and all the token's children:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"$ bao token revoke 96ddf4bc-d217-f3ba-f9bd-017055595017\nSuccess! Revoked token (if it existed)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Revoke a token leaving the token's children:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"$ bao token revoke -mode=orphan 96ddf4bc-d217-f3ba-f9bd-017055595017\nSuccess! Revoked token (if it existed)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Revoke a token by accessor:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"$ bao token revoke -accessor 9793c9b3-e04a-46f3-e7b8-748d7da248da\nSuccess! Revoked token (if it existed)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:["The following flags are available in addition to the ",(0,t.jsx)(n.a,{href:"/docs/commands",children:"standard set of\nflags"})," included on all commands."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-accessor"})," ",(0,t.jsx)(n.code,{children:"(bool: false)"})," - Treat the argument as an accessor instead of a\ntoken."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-mode"})," ",(0,t.jsx)(n.code,{children:'(string: "")'}),' - Type of revocation to perform. If unspecified, OpenBao\nwill revoke the token and all of the token\'s children. If "orphan", OpenBao will\nrevoke only the token, leaving the children as orphans. If "path", tokens\ncreated from the given authentication path prefix are deleted along with their\nchildren.']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-self"})," - Perform the revocation on the currently authenticated token."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>r});var t=o(96540);const s={},a=t.createContext(s);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);