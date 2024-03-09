"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5521],{2218:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var o=n(74848),r=n(28453);const s={sidebar_label:"Kubernetes",description:"Kubernetes Method for OpenBao Auto-Auth"},a="OpenBao Auto-Auth kubernetes method",u={id:"agent-and-proxy/autoauth/methods/kubernetes",title:"OpenBao Auto-Auth kubernetes method",description:"Kubernetes Method for OpenBao Auto-Auth",source:"@site/content/docs/agent-and-proxy/autoauth/methods/kubernetes.mdx",sourceDirName:"agent-and-proxy/autoauth/methods",slug:"/agent-and-proxy/autoauth/methods/kubernetes",permalink:"/openbao/docs/agent-and-proxy/autoauth/methods/kubernetes",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/agent-and-proxy/autoauth/methods/kubernetes.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Kubernetes",description:"Kubernetes Method for OpenBao Auto-Auth"},sidebar:"docs",previous:{title:"Kerberos",permalink:"/openbao/docs/agent-and-proxy/autoauth/methods/kerberos"},next:{title:"Token file",permalink:"/openbao/docs/agent-and-proxy/autoauth/methods/token_file"}},i={},d=[{value:"Configuration",id:"configuration",level:2},{value:"Tutorial",id:"tutorial",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"openbao-auto-auth-kubernetes-method",children:"OpenBao Auto-Auth kubernetes method"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"kubernetes"})," method reads in a Kubernetes service account token from the\nrunning pod (via ",(0,o.jsx)(t.code,{children:"/var/run/secrets/kubernetes.io/serviceaccount/token"}),") and\nsends it to the ",(0,o.jsx)(t.a,{href:"/docs/auth/kubernetes/",children:"Kubernetes Auth\nmethod"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"role"})," ",(0,o.jsx)(t.code,{children:"(string: required)"})," - The role to authenticate against on OpenBao"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"token_path"})," ",(0,o.jsx)(t.code,{children:"(string: optional)"})," - The file path to a custom JWT token to use\nfor authentication. If omitted, the default service account token path is used."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"tutorial",children:"Tutorial"}),"\n",(0,o.jsxs)(t.p,{children:["Refer to the ",(0,o.jsx)(t.a,{href:"/tutorials/kubernetes/agent-kubernetes",children:"OpenBao Agent with\nKubernetes"}),"\ntutorial to learn how to authenticate the clients using a Kubernetes Service Account Token and manage the tokens lifecycle."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>u});var o=n(96540);const r={},s=o.createContext(r);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);