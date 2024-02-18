"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7442],{69467:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>a});var o=r(74848),s=r(28453);const n={description:"The Vault Secrets Operator allows Pods to consume Vault secrets natively from Kubernetes Secrets."},i="Telemetry",l={id:"platform/k8s/vso/telemetry",title:"Telemetry",description:"The Vault Secrets Operator allows Pods to consume Vault secrets natively from Kubernetes Secrets.",source:"@site/content/docs/platform/k8s/vso/telemetry.mdx",sourceDirName:"platform/k8s/vso",slug:"/platform/k8s/vso/telemetry",permalink:"/openbao/docs/platform/k8s/vso/telemetry",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/platform/k8s/vso/telemetry.mdx",tags:[],version:"current",frontMatter:{description:"The Vault Secrets Operator allows Pods to consume Vault secrets natively from Kubernetes Secrets."},sidebar:"docs",previous:{title:"Helm Chart",permalink:"/openbao/docs/platform/k8s/vso/helm"},next:{title:"OpenShift",permalink:"/openbao/docs/platform/k8s/vso/openshift"}},c={},a=[];function m(e){const t={a:"a",code:"code",h1:"h1",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"telemetry",children:"Telemetry"}),"\n",(0,o.jsx)(t.p,{children:"The Vault Secrets Operator is instrumented with Prometheus metrics in the following ways:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["The operator will emit the default controller-runtime metrics as outlined in the ",(0,o.jsx)(t.a,{href:"https://book-v1.book.kubebuilder.io/beyond_basics/controller_metrics.html",children:"monitoring"})]}),"\n",(0,o.jsxs)(t.li,{children:["Custom metrics related to the operator internals which are defined in ",(0,o.jsx)(t.a,{href:"https://github.com/hashicorp/vault-secrets-operator/blob/main/internal/metrics/metrics.go",children:(0,o.jsx)(t.code,{children:"internal/metrics/metrics.go"})})]}),"\n",(0,o.jsxs)(t.li,{children:["Ability to deploy a Prometheus Service Monitor, configured via the Helm Chart ",(0,o.jsx)(t.a,{href:"/docs/platform/k8s/vso/helm#h-telemetry",children:(0,o.jsx)(t.code,{children:"telemetry"})})," stanza."]}),"\n",(0,o.jsxs)(t.li,{children:["Ability to deploy a Metrics Service, configured via the Helm Chart ",(0,o.jsx)(t.a,{href:"/docs/platform/k8s/vso/helm#h-metricsservice",children:(0,o.jsx)(t.code,{children:"metricsService"})})," stanza."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>l});var o=r(96540);const s={},n=o.createContext(s);function i(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);