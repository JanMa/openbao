"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4094],{76537:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=n(74848),r=n(28453);const s={sidebar_label:"Kerberos",sidebar_current:"docs-agent-and-proxy-autoauth-methods-kerberos",description:"Kerberos Method for OpenBao Auto-Auth"},i="OpenBao Auto-Auth Kerberos method",a={id:"agent-and-proxy/autoauth/methods/kerberos",title:"OpenBao Auto-Auth Kerberos method",description:"Kerberos Method for OpenBao Auto-Auth",source:"@site/content/docs/agent-and-proxy/autoauth/methods/kerberos.mdx",sourceDirName:"agent-and-proxy/autoauth/methods",slug:"/agent-and-proxy/autoauth/methods/kerberos",permalink:"/docs/agent-and-proxy/autoauth/methods/kerberos",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/agent-and-proxy/autoauth/methods/kerberos.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Kerberos",sidebar_current:"docs-agent-and-proxy-autoauth-methods-kerberos",description:"Kerberos Method for OpenBao Auto-Auth"},sidebar:"docs",previous:{title:"JWT",permalink:"/docs/agent-and-proxy/autoauth/methods/jwt"},next:{title:"Kubernetes",permalink:"/docs/agent-and-proxy/autoauth/methods/kubernetes"}},d={},c=[{value:"Configuration",id:"configuration",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"openbao-auto-auth-kerberos-method",children:"OpenBao Auto-Auth Kerberos method"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"kerberos"})," auto-auth method provides an automated mechanism to retrieve\nan OpenBao token for Kerberos entities. It reads in configuration and\nidentification information from the surrounding environment, and uses\nit to authenticate to OpenBao."]}),"\n",(0,o.jsxs)(t.p,{children:["For more on this auth method, see the ",(0,o.jsx)(t.a,{href:"/docs/auth/kerberos",children:"Kerberos auth method"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"krb5conf_path"})," ",(0,o.jsx)(t.code,{children:"(string: required)"})," is the path to a valid ",(0,o.jsx)(t.code,{children:"krb5.conf"})," file describing how to\ncommunicate with the Kerberos environment."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"keytab_path"})," ",(0,o.jsx)(t.code,{children:"(string: required)"})," is the path to the ",(0,o.jsx)(t.code,{children:"keytab"})," in which the entry lives for the\nentity authenticating to OpenBao. Keytab files should be protected from other\nusers on a shared server using appropriate file permissions."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"username"})," ",(0,o.jsx)(t.code,{children:"(string: required)"})," is the username for the entry ",(0,o.jsx)(t.em,{children:"within"})," the ",(0,o.jsx)(t.code,{children:"keytab"})," to use for\nlogging into Kerberos. This username must match a service account in LDAP."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"service"})," ",(0,o.jsx)(t.code,{children:"(string: required)"})," is the service principal name to use in obtaining a service ticket for\ngaining a SPNEGO token. This service must exist in LDAP."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"realm"})," ",(0,o.jsx)(t.code,{children:"(string: required)"})," is the name of the Kerberos realm. This realm must match the UPNDomain\nconfigured on the LDAP connection. This check is case-sensitive."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"disable_fast_negotiation"})," ",(0,o.jsx)(t.code,{children:"(bool: optional)"})," is for disabling the Kerberos auth method's default\nof using FAST negotiation. FAST is a pre-authentication framework for Kerberos.\nIt includes a mechanism for tunneling pre-authentication exchanges using armoured\nKDC messages. FAST provides increased resistance to passive password guessing attacks.\nSome common Kerberos implementations do not support FAST negotiation. The default is false."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var o=n(96540);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);