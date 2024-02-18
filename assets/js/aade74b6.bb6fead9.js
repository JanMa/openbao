"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8017],{66702:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>h,toc:()=>c});var o=n(74848),a=n(28453);const s={sidebar_label:"Tokens",description:"The token store auth method is used to authenticate using tokens."},i="Token auth method",h={id:"auth/token",title:"Token auth method",description:"The token store auth method is used to authenticate using tokens.",source:"@site/content/docs/auth/token.mdx",sourceDirName:"auth",slug:"/auth/token",permalink:"/openbao/docs/auth/token",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/auth/token.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Tokens",description:"The token store auth method is used to authenticate using tokens."},sidebar:"docs",previous:{title:"TLS Certificates",permalink:"/openbao/docs/auth/cert"},next:{title:"Username and Password",permalink:"/openbao/docs/auth/userpass"}},r={},c=[{value:"Authentication",id:"authentication",level:2},{value:"Via the CLI",id:"via-the-cli",level:3},{value:"Via the API",id:"via-the-api",level:3},{value:"API",id:"api",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"token-auth-method",children:"Token auth method"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"token"})," auth method is built-in and automatically available at ",(0,o.jsx)(t.code,{children:"/auth/token"}),". It\nallows users to authenticate using a token, as well to create new tokens, revoke\nsecrets by token, and more."]}),"\n",(0,o.jsx)(t.p,{children:"When any other auth method returns an identity, OpenBao core invokes the\ntoken method to create a new unique token for that identity."}),"\n",(0,o.jsx)(t.p,{children:"The token store can also be used to bypass any other auth method:\nyou can create tokens directly, as well as perform a variety of other\noperations on tokens such as renewal and revocation."}),"\n",(0,o.jsxs)(t.p,{children:["Please see the ",(0,o.jsx)(t.a,{href:"/docs/concepts/tokens",children:"token concepts"})," page dedicated\nto tokens."]}),"\n",(0,o.jsx)(t.h2,{id:"authentication",children:"Authentication"}),"\n",(0,o.jsx)(t.h3,{id:"via-the-cli",children:"Via the CLI"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell-session",children:"$ bao login token=<token>\n"})}),"\n",(0,o.jsx)(t.h3,{id:"via-the-api",children:"Via the API"}),"\n",(0,o.jsxs)(t.p,{children:["The token is set directly as a header for the HTTP API. The header should be\neither ",(0,o.jsx)(t.code,{children:"X-Vault-Token: <token>"})," or ",(0,o.jsx)(t.code,{children:"Authorization: Bearer <token>"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,o.jsxs)(t.p,{children:["The Token auth method has a full HTTP API. Please see the\n",(0,o.jsx)(t.a,{href:"/api-docs/auth/token",children:"Token auth method API"})," for more\ndetails."]})]})}function l(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>h});var o=n(96540);const a={},s=o.createContext(a);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);