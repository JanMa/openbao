"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9910],{59574:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var r=s(74848),n=s(28453);const o={sidebar_label:"Overview",description:"The Vault Secrets Operator allows Pods to consume HashiCorp secrets natively from Kubernetes Secrets."},i="Vault Secrets Operator",l={id:"platform/k8s/vso/index",title:"Vault Secrets Operator",description:"The Vault Secrets Operator allows Pods to consume HashiCorp secrets natively from Kubernetes Secrets.",source:"@site/content/docs/platform/k8s/vso/index.mdx",sourceDirName:"platform/k8s/vso",slug:"/platform/k8s/vso/",permalink:"/docs/platform/k8s/vso/",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/platform/k8s/vso/index.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Overview",description:"The Vault Secrets Operator allows Pods to consume HashiCorp secrets natively from Kubernetes Secrets."},sidebar:"docs",previous:{title:"Examples",permalink:"/docs/platform/k8s/csi/examples"},next:{title:"Installation",permalink:"/docs/platform/k8s/vso/installation"}},c={},a=[{value:"Overview",id:"overview",level:2},{value:"Features",id:"features",level:2},{value:"Supported secret sources",id:"supported-secret-sources",level:2},{value:"Supported Kubernetes distributions",id:"supported-kubernetes-distributions",level:2},{value:"Tutorial",id:"tutorial",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"vault-secrets-operator",children:"Vault Secrets Operator"}),"\n",(0,r.jsx)(t.p,{children:"The Vault Secrets Operator (VSO) allows Pods to consume Vault secrets and HCP Vault Secrets Apps natively from Kubernetes Secrets."}),"\n",(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(t.p,{children:["The Vault Secrets Operator operates by watching for changes to its supported set of Custom Resource Definitions (CRD).\nEach CRD provides the specification required to allow the operator to synchronize from one of the supported sources for secrets to a Kubernetes Secret.\nThe operator writes the ",(0,r.jsx)(t.em,{children:"source"})," secret data directly to the ",(0,r.jsx)(t.em,{children:"destination"})," Kubernetes Secret, ensuring that any\nchanges made to the ",(0,r.jsx)(t.em,{children:"source"})," are replicated to the ",(0,r.jsx)(t.em,{children:"destination"})," over its lifetime. In this way, an application only needs\nto have access to the ",(0,r.jsx)(t.em,{children:"destination"})," secret in order to make use of the secret data contained within."]}),"\n",(0,r.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,r.jsx)(t.p,{children:"The following features are supported by the Vault Secrets Operator:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Support for syncing from multiple secret sources."}),"\n",(0,r.jsx)(t.li,{children:"Automatic secret drift and remediation."}),"\n",(0,r.jsxs)(t.li,{children:["Automatic secret rotation for ",(0,r.jsx)(t.code,{children:"Deployment"}),", ",(0,r.jsx)(t.code,{children:"ReplicaSet"}),", ",(0,r.jsx)(t.code,{children:"StatefulSet"})," Kubernetes resource types."]}),"\n",(0,r.jsxs)(t.li,{children:["Prometheus specific instrumentation for ",(0,r.jsx)(t.a,{href:"/docs/platform/k8s/vso/telemetry",children:"monitoring"})," the Operator."]}),"\n",(0,r.jsxs)(t.li,{children:["Support for installing using: ",(0,r.jsx)(t.code,{children:"Helm"})," or ",(0,r.jsx)(t.code,{children:"Kustomize"}),(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(t.em,{children:["see the ",(0,r.jsx)(t.a,{href:"/docs/platform/k8s/vso/installation",children:"installation"})," docs for more details"]})]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"supported-secret-sources",children:"Supported secret sources"}),"\n",(0,r.jsxs)(t.p,{children:["The Vault Secrets Operator supports syncing from multiple secret sources.\nRefer to the ",(0,r.jsx)(t.a,{href:"/docs/platform/k8s/vso/sources",children:"secret sources overview"})," for more details."]}),"\n",(0,r.jsx)(t.h2,{children:"Supported kubernetes versions"}),"\n",(0,r.jsxs)(t.p,{children:["The following ",(0,r.jsx)(t.a,{href:"https://kubernetes.io/releases/",children:"Kubernetes minor releases"})," are currently supported.\nThe latest version is tested against each Kubernetes version. It may work with\nother versions of Kubernetes, but those are not supported."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"1.27"}),"\n",(0,r.jsx)(t.li,{children:"1.26"}),"\n",(0,r.jsx)(t.li,{children:"1.25"}),"\n",(0,r.jsx)(t.li,{children:"1.24"}),"\n",(0,r.jsx)(t.li,{children:"1.23"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"supported-kubernetes-distributions",children:"Supported Kubernetes distributions"}),"\n",(0,r.jsx)(t.p,{children:"The Vault Secrets Operator has been tested successfully in the following hosted Kubernetes environments:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Amazon Elastic Kubernetes Service (EKS)"}),"\n",(0,r.jsx)(t.li,{children:"Google Kubernetes Engine (GKE)"}),"\n",(0,r.jsx)(t.li,{children:"Microsoft Azure Kubernetes Service (AKS)"}),"\n",(0,r.jsx)(t.li,{children:"Red Hat OpenShift"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Basic integration tests are available in the project repository.\nPlease report any issues ",(0,r.jsx)(t.a,{href:"https://github.com/hashicorp/vault-secrets-operator/issues",children:"here"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"tutorial",children:"Tutorial"}),"\n",(0,r.jsxs)(t.p,{children:["Refer to the ",(0,r.jsx)(t.a,{href:"/tutorials/kubernetes/vault-secrets-operator",children:"Vault Secrets Operator on\nKubernetes"})," tutorial to\nlearn the end-to-end workflow using the Vault Secrets Operator."]})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>l});var r=s(96540);const n={},o=r.createContext(n);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);