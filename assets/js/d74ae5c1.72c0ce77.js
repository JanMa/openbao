"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6547],{53984:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>n,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var i=r(74848),o=r(28453);const s={layout:"docs",page_title:"OIDC Provider Setup - Auth Methods - IBM Security Access Manager (ISAM)",description:"OIDC provider configuration for IBM Security Access Manager (recently renamed to IBM Security Verify Access)"},n=void 0,c={id:"auth/jwt/oidc-providers/ibmisam",title:"ibmisam",description:"OIDC provider configuration for IBM Security Access Manager (recently renamed to IBM Security Verify Access)",source:"@site/content/docs/auth/jwt/oidc-providers/ibmisam.mdx",sourceDirName:"auth/jwt/oidc-providers",slug:"/auth/jwt/oidc-providers/ibmisam",permalink:"/openbao/docs/auth/jwt/oidc-providers/ibmisam",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/auth/jwt/oidc-providers/ibmisam.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"OIDC Provider Setup - Auth Methods - IBM Security Access Manager (ISAM)",description:"OIDC provider configuration for IBM Security Access Manager (recently renamed to IBM Security Verify Access)"},sidebar:"tutorialSidebar",previous:{title:"google",permalink:"/openbao/docs/auth/jwt/oidc-providers/google"},next:{title:"keycloak",permalink:"/openbao/docs/auth/jwt/oidc-providers/keycloak"}},a={},d=[{value:"IBM ISAM",id:"ibm-isam",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"ibm-isam",children:"IBM ISAM"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://www.ibm.com/de-de/products/verify-access",children:"IBM ISAM"})," identity provider\nreturns group membership claims as a space-separated list of strings (e.g.\n",(0,i.jsx)(t.code,{children:'groups: "group-1 group-2"'}),") instead of a list of strings."]}),"\n",(0,i.jsxs)(t.p,{children:["To properly obtain group membership when using IBMISAM as the identity provider for\nOpenBao's OIDC Auth Method, the ",(0,i.jsx)(t.code,{children:"ibmisam"})," provider must be explicitly configured as\nshown below."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:'bao write auth/oidc/config -<<"EOH"\n{\n   "oidc_client_id": "your_client_id",\n   "oidc_client_secret": "your_client_secret",\n   "default_role": "your_default_role",\n   "oidc_discovery_url": "https://your.idp.host",\n   "provider_config": {\n      "provider": "ibmisam"\n   }\n}\nEOH\n'})}),"\n",(0,i.jsxs)(t.p,{children:["This will instruct the OIDC Auth Method to parse the space-separated groups claims string\ninto individual groups. Note that the role's ",(0,i.jsx)(t.a,{href:"/api-docs/auth/jwt#groups_claim",children:(0,i.jsx)(t.code,{children:"groups_claim"})}),"\nvalue must be properly configured to target the groups claim for your IBM ISAM identity\nprovider."]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>c});var i=r(96540);const o={},s=i.createContext(o);function n(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);