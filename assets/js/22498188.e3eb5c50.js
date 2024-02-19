"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4755],{65269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var a=n(74848),s=n(28453);const l={sidebar_current:"docs-platform-k8s-examples-standalone-audit",description:"Describes how to set up a standalone Vault with audit storage"},o="Standalone server with audit storage",r={id:"platform/k8s/helm/examples/standalone-audit",title:"Standalone server with audit storage",description:"Describes how to set up a standalone Vault with audit storage",source:"@site/content/docs/platform/k8s/helm/examples/standalone-audit.mdx",sourceDirName:"platform/k8s/helm/examples",slug:"/platform/k8s/helm/examples/standalone-audit",permalink:"/openbao/docs/platform/k8s/helm/examples/standalone-audit",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/platform/k8s/helm/examples/standalone-audit.mdx",tags:[],version:"current",frontMatter:{sidebar_current:"docs-platform-k8s-examples-standalone-audit",description:"Describes how to set up a standalone Vault with audit storage"},sidebar:"docs",previous:{title:"Standalone server with TLS",permalink:"/openbao/docs/platform/k8s/helm/examples/standalone-tls"},next:{title:"External Vault",permalink:"/openbao/docs/platform/k8s/helm/examples/external"}},i={},d=[];function c(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"standalone-server-with-audit-storage",children:"Standalone server with audit storage"}),"\n",(0,a.jsx)(t.p,{children:":::warning"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Important Note:"})," This chart is not compatible with Helm 2. Please use Helm 3.6+ with this chart."]}),"\n",(0,a.jsx)(t.p,{children:":::"}),"\n",(0,a.jsxs)(t.p,{children:["The below ",(0,a.jsx)(t.code,{children:"values.yaml"})," can be used to set up a single server Vault cluster with\nauditing enabled."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:'server:\n  standalone:\n    enabled: true\n    config: |\n      listener "tcp" {\n        tls_disable = true\n        address = "[::]:8200"\n        cluster_address = "[::]:8201"\n      }\n\n      storage "file" {\n        path = "/vault/data"\n      }\n\n  service:\n    enabled: true\n\n  dataStorage:\n    enabled: true\n    size: 10Gi\n    storageClass: null\n    accessMode: ReadWriteOnce\n\n  auditStorage:\n    enabled: true\n    size: 10Gi\n    storageClass: null\n    accessMode: ReadWriteOnce\n'})}),"\n",(0,a.jsx)(t.p,{children:"After Vault has been deployed, initialized and unsealed, auditing can be enabled\nby running the following command against the Vault pod:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell-session",children:"$ kubectl exec -ti <POD NAME> --  vault audit enable file file_path=/vault/audit/vault_audit.log\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var a=n(96540);const s={},l=a.createContext(s);function o(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);