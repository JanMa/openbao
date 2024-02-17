"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1132],{25443:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>n,metadata:()=>u,toc:()=>a});var o=r(74848),i=r(28453);const n={layout:"docs",page_title:"OIDC Provider Setup - Auth Methods - SecureAuth",description:"OIDC provider configuration for SecureAuth"},s=void 0,u={id:"auth/jwt/oidc-providers/secureauth",title:"secureauth",description:"OIDC provider configuration for SecureAuth",source:"@site/content/docs/auth/jwt/oidc-providers/secureauth.mdx",sourceDirName:"auth/jwt/oidc-providers",slug:"/auth/jwt/oidc-providers/secureauth",permalink:"/openbao/docs/auth/jwt/oidc-providers/secureauth",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/auth/jwt/oidc-providers/secureauth.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"OIDC Provider Setup - Auth Methods - SecureAuth",description:"OIDC provider configuration for SecureAuth"},sidebar:"tutorialSidebar",previous:{title:"okta",permalink:"/openbao/docs/auth/jwt/oidc-providers/okta"},next:{title:"Kerberos auth method",permalink:"/openbao/docs/auth/kerberos"}},c={},a=[{value:"SecureAuth",id:"secureauth",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"secureauth",children:"SecureAuth"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.a,{href:"https://www.secureauth.com/",children:"SecureAuth"})," identity provider returns group membership\nclaims as a comma-separated list of strings (e.g. ",(0,o.jsx)(t.code,{children:'groups: "group-1,group-2"'}),") instead\nof a list of strings."]}),"\n",(0,o.jsxs)(t.p,{children:["To properly obtain group membership when using SecureAuth as the identity provider for\nOpenBao's OIDC Auth Method, the ",(0,o.jsx)(t.code,{children:"secureauth"})," provider must be explicitly configured as\nshown below."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:'bao write auth/oidc/config -<<"EOH"\n{\n   "oidc_client_id": "your_client_id",\n   "oidc_client_secret": "your_client_secret",\n   "default_role": "your_default_role",\n   "oidc_discovery_url": "https://idp.sasp.gosecureauth.com/your_secure_auth",\n   "provider_config": {\n      "provider": "secureauth"\n   }\n}\nEOH\n'})}),"\n",(0,o.jsxs)(t.p,{children:["This will instruct the OIDC Auth Method to parse the comma-separated groups claims string\ninto individual groups. Note that the role's ",(0,o.jsx)(t.a,{href:"/api-docs/auth/jwt#groups_claim",children:(0,o.jsx)(t.code,{children:"groups_claim"})}),"\nvalue must be properly configured to target the groups claim for your SecureAuth identity\nprovider."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>u});var o=r(96540);const i={},n=o.createContext(i);function s(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);