"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3697],{51512:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var l=a(74848),n=a(28453);const r={layout:"docs",page_title:"Highly Available Vault Cluster with Raft",sidebar_current:"docs-platform-k8s-examples-ha-with-raft",description:"Describes how to set up a highly available Vault cluster with Integrated Storage (Raft)"},s="Highly available Vault cluster with integrated storage (Raft)",i={id:"platform/k8s/helm/examples/ha-with-raft",title:"Highly available Vault cluster with integrated storage (Raft)",description:"Describes how to set up a highly available Vault cluster with Integrated Storage (Raft)",source:"@site/content/docs/platform/k8s/helm/examples/ha-with-raft.mdx",sourceDirName:"platform/k8s/helm/examples",slug:"/platform/k8s/helm/examples/ha-with-raft",permalink:"/openbao/docs/platform/k8s/helm/examples/ha-with-raft",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/platform/k8s/helm/examples/ha-with-raft.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"Highly Available Vault Cluster with Raft",sidebar_current:"docs-platform-k8s-examples-ha-with-raft",description:"Describes how to set up a highly available Vault cluster with Integrated Storage (Raft)"},sidebar:"docs",previous:{title:"Bootstrapping kubernetes auth method",permalink:"/openbao/docs/platform/k8s/helm/examples/kubernetes-auth"},next:{title:"HA Cluster with Raft and TLS",permalink:"/openbao/docs/platform/k8s/helm/examples/ha-tls"}},o={},c=[];function u(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"highly-available-vault-cluster-with-integrated-storage-raft",children:"Highly available Vault cluster with integrated storage (Raft)"}),"\n",(0,l.jsxs)(t.p,{children:["~> ",(0,l.jsx)(t.strong,{children:"Important Note:"})," This chart is not compatible with Helm 2. Please use Helm 3.6+ with this chart."]}),"\n",(0,l.jsxs)(t.p,{children:["Integrated storage (raft) can be enabled using the ",(0,l.jsx)(t.code,{children:"server.ha.raft.enabled"})," value:"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell",children:"helm install vault hashicorp/vault \\\n  --set='server.ha.enabled=true' \\\n  --set='server.ha.raft.enabled=true'\n"})}),"\n",(0,l.jsxs)(t.p,{children:["Next, initialize and unseal ",(0,l.jsx)(t.code,{children:"vault-0"})," pod:"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell",children:"kubectl exec -ti vault-0 -- vault operator init\nkubectl exec -ti vault-0 -- vault operator unseal\n"})}),"\n",(0,l.jsx)(t.p,{children:"Finally, join the remaining pods to the Raft cluster and unseal them. The pods\nwill need to communicate directly so we'll configure the pods to use the internal\nservice provided by the Helm chart:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell",children:"kubectl exec -ti vault-1 -- vault operator raft join http://vault-0.vault-internal:8200\nkubectl exec -ti vault-1 -- vault operator unseal\n\nkubectl exec -ti vault-2 -- vault operator raft join http://vault-0.vault-internal:8200\nkubectl exec -ti vault-2 -- vault operator unseal\n"})}),"\n",(0,l.jsx)(t.p,{children:"To verify if the Raft cluster has successfully been initialized, run the following."}),"\n",(0,l.jsxs)(t.p,{children:["First, login using the ",(0,l.jsx)(t.code,{children:"root"})," token on the ",(0,l.jsx)(t.code,{children:"vault-0"})," pod:"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell",children:"kubectl exec -ti vault-0 -- vault login\n"})}),"\n",(0,l.jsx)(t.p,{children:"Next, list all the raft peers:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell",children:"$ kubectl exec -ti vault-0 -- vault operator raft list-peers\n\nNode                                    Address                        State       Voter\n----                                    -------                        -----       -----\na1799962-8711-7f28-23f0-cea05c8a527d    vault-0.vault-internal:8201    leader      true\ne6876c97-aaaa-a92e-b99a-0aafab105745    vault-1.vault-internal:8201    follower    true\n4b5d7383-ff31-44df-e008-6a606828823b    vault-2.vault-internal:8201    follower    true\n"})}),"\n",(0,l.jsx)(t.p,{children:"Vault with Integrated Storage (Raft) is now ready to use!"})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>i});var l=a(96540);const n={},r=l.createContext(n);function s(e){const t=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),l.createElement(r.Provider,{value:t},e.children)}}}]);