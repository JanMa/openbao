"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[247],{39059:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>h});var n=o(74848),r=o(28453);const s={layout:"docs",page_title:"OpenBao Auto-Auth JWT Method",description:"JWT Method for OpenBao Auto-Auth"},d="OpenBao Auto-Auth JWT method",a={id:"agent-and-proxy/autoauth/methods/jwt",title:"OpenBao Auto-Auth JWT method",description:"JWT Method for OpenBao Auto-Auth",source:"@site/content/docs/agent-and-proxy/autoauth/methods/jwt.mdx",sourceDirName:"agent-and-proxy/autoauth/methods",slug:"/agent-and-proxy/autoauth/methods/jwt",permalink:"/openbao/docs/agent-and-proxy/autoauth/methods/jwt",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/agent-and-proxy/autoauth/methods/jwt.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"OpenBao Auto-Auth JWT Method",description:"JWT Method for OpenBao Auto-Auth"},sidebar:"docs",previous:{title:"OpenBao Auto-Auth cert method",permalink:"/openbao/docs/agent-and-proxy/autoauth/methods/cert"},next:{title:"OpenBao Auto-Auth Kerberos method",permalink:"/openbao/docs/agent-and-proxy/autoauth/methods/kerberos"}},i={},h=[{value:"Configuration",id:"configuration",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"openbao-auto-auth-jwt-method",children:"OpenBao Auto-Auth JWT method"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"jwt"})," method reads in a JWT from a file and sends it to the ",(0,n.jsx)(t.a,{href:"/docs/auth/jwt",children:"JWT Auth\nmethod"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"path"})," ",(0,n.jsx)(t.code,{children:"(string: required)"})," - The path to the JWT file"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"role"})," ",(0,n.jsx)(t.code,{children:"(string: required)"})," - The role to authenticate against on OpenBao"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"remove_jwt_after_reading"})," ",(0,n.jsx)(t.code,{children:"(bool: optional, defaults to true)"})," -\nThis can be set to ",(0,n.jsx)(t.code,{children:"false"})," to disable the default behavior of removing the\nJWT after it's been read."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"remove_jwt_follows_symlinks"})," ",(0,n.jsx)(t.code,{children:"(bool: optional, defaults to false)"})," -\nThis can be set to ",(0,n.jsx)(t.code,{children:"true"})," to follow symlinks when removing the JWT after it has been read\nwhen executing the ",(0,n.jsx)(t.code,{children:"remove_jwt_after_reading"})," behaviour. If set to false, it will delete\nthe symlink, not the JWT. Does nothing if ",(0,n.jsx)(t.code,{children:"remove_jwt_after_reading"})," is false."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"jwt_read_period"})," ",(0,n.jsx)(t.code,{children:'(duration: "0.5s", optional)'})," - The duration after which\nAgent will attempt to read the JWT stored at ",(0,n.jsx)(t.code,{children:"path"}),". Defaults to ",(0,n.jsx)(t.code,{children:"1m"})," if\n",(0,n.jsx)(t.code,{children:"remove_jwt_after_reading"})," is set to ",(0,n.jsx)(t.code,{children:"true"}),", or ",(0,n.jsx)(t.code,{children:"0.5s"})," otherwise.\nUses ",(0,n.jsx)(t.a,{href:"/docs/concepts/duration-format",children:"duration format strings"}),"."]}),"\n"]}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>d,x:()=>a});var n=o(96540);const r={},s=n.createContext(r);function d(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);