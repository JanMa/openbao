"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9112],{94606:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>h});var l=n(74848),a=n(28453);const s={layout:"docs",page_title:"Running Vault - OpenShift",description:"Vault can run directly on OpenShift in various configurations.  For pure-OpenShift workloads, this enables Vault to also exist purely within Kubernetes."},r="Run Vault on OpenShift",i={id:"platform/k8s/helm/openshift",title:"Run Vault on OpenShift",description:"Vault can run directly on OpenShift in various configurations.  For pure-OpenShift workloads, this enables Vault to also exist purely within Kubernetes.",source:"@site/content/docs/platform/k8s/helm/openshift.mdx",sourceDirName:"platform/k8s/helm",slug:"/platform/k8s/helm/openshift",permalink:"/openbao/docs/platform/k8s/helm/openshift",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/platform/k8s/helm/openshift.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"Running Vault - OpenShift",description:"Vault can run directly on OpenShift in various configurations.  For pure-OpenShift workloads, this enables Vault to also exist purely within Kubernetes."},sidebar:"tutorialSidebar",previous:{title:"Standalone server with TLS",permalink:"/openbao/docs/platform/k8s/helm/examples/standalone-tls"},next:{title:"Run Vault on kubernetes",permalink:"/openbao/docs/platform/k8s/helm/run"}},o={},h=[{value:"Requirements",id:"requirements",level:2},{value:"Additional resources",id:"additional-resources",level:2},{value:"Helm chart",id:"helm-chart",level:2},{value:"How-To",id:"how-to",level:2},{value:"Install Vault",id:"install-vault",level:3},{value:"Dev mode",id:"dev-mode",level:4},{value:"Highly available raft mode",id:"highly-available-raft-mode",level:4},{value:"External mode",id:"external-mode",level:4},{value:"Tutorial",id:"tutorial",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"run-vault-on-openshift",children:"Run Vault on OpenShift"}),"\n",(0,l.jsxs)(t.p,{children:["~> ",(0,l.jsx)(t.strong,{children:"Important Note:"})," This chart is not compatible with Helm 2. Please use Helm 3.6+ with this chart."]}),"\n",(0,l.jsxs)(t.p,{children:["The following documentation describes installing, running, and using\nVault and ",(0,l.jsx)(t.strong,{children:"Vault Agent Injector"})," on OpenShift."]}),"\n",(0,l.jsxs)(t.p,{children:["~> ",(0,l.jsx)(t.strong,{children:"Note:"})," We recommend using the Vault agent injector on Openshift\ninstead of the Secrets Store CSI driver. OpenShift\n",(0,l.jsx)(t.a,{href:"https://docs.openshift.com/container-platform/4.9/storage/persistent_storage/persistent-storage-hostpath.html",children:"does not recommend"}),"\nusing ",(0,l.jsx)(t.code,{children:"hostPath"})," mounting in production or\n",(0,l.jsx)(t.a,{href:"https://github.com/redhat-certification/chart-verifier/blob/dbf89bff2d09142e4709d689a9f4037a739c2244/docs/helm-chart-checks.md#table-2-helm-chart-default-checks",children:"certify Helm charts"}),"\nusing CSI objects because pods must run as privileged. If you would like to run the Secrets Store\nCSI driver on a development or testing cluster, refer to\n",(0,l.jsx)(t.a,{href:"/docs/platform/k8s/csi/installation",children:"installation instructions for the Vault CSI provider"}),"."]}),"\n",(0,l.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,l.jsx)(t.p,{children:"The following are required to install Vault and Vault Agent Injector\non OpenShift:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["Cluster Admin privileges to bind the ",(0,l.jsx)(t.code,{children:"auth-delegator"})," role to Vault's service account"]}),"\n",(0,l.jsx)(t.li,{children:"Helm v3.6+"}),"\n",(0,l.jsx)(t.li,{children:"OpenShift 4.3+"}),"\n",(0,l.jsx)(t.li,{children:"Vault Helm v0.6.0+"}),"\n",(0,l.jsx)(t.li,{children:"Vault K8s v0.4.0+"}),"\n"]}),"\n",(0,l.jsxs)(t.p,{children:["~> ",(0,l.jsx)(t.strong,{children:"Note:"})," Support for Consul on OpenShift is available since ",(0,l.jsx)(t.a,{href:"https://www.hashicorp.com/blog/introducing-openshift-support-for-consul-on-kubernetes",children:"Consul 1.9"}),". However, for highly available\ndeployments, Raft integrated storage is recommended."]}),"\n",(0,l.jsx)(t.h2,{id:"additional-resources",children:"Additional resources"}),"\n",(0,l.jsx)(t.p,{children:"The documentation, configuration and examples for Vault Helm and Vault K8s Agent Injector\nare applicable to OpenShift installations. For more examples see the existing documentation:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"/docs/platform/k8s/helm",children:"Vault Helm documentation"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"/docs/platform/k8s/injector",children:"Vault K8s documentation"})}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"helm-chart",children:"Helm chart"}),"\n",(0,l.jsxs)(t.p,{children:["The ",(0,l.jsx)(t.a,{href:"https://github.com/hashicorp/vault-helm",children:"Vault Helm chart"}),"\nis the recommended way to install and configure Vault on OpenShift.\nIn addition to running Vault itself, the Helm chart is the primary\nmethod for installing and configuring Vault Agent Injection Mutating\nWebhook."]}),"\n",(0,l.jsxs)(t.p,{children:["While the Helm chart automatically sets up complex resources and exposes the\nconfiguration to meet your requirements, it ",(0,l.jsx)(t.strong,{children:"does not automatically operate\nVault."})," You are still responsible for learning how to monitor, backup, upgrade,\netc. the Vault cluster."]}),"\n",(0,l.jsxs)(t.p,{children:["~> ",(0,l.jsx)(t.strong,{children:"Security Warning:"})," By default, the chart runs in standalone mode. This\nmode uses a single Vault server with a file storage backend. This is a less\nsecure and less resilient installation that is ",(0,l.jsx)(t.strong,{children:"NOT"})," appropriate for a\nproduction setup. It is highly recommended to use a ",(0,l.jsx)(t.a,{href:"https://kubernetes.io/docs/tasks/administer-cluster/securing-a-cluster/",children:"properly secured Kubernetes\ncluster"}),",\n",(0,l.jsx)(t.a,{href:"/docs/platform/k8s/helm/configuration",children:"learn the available configuration\noptions"}),", and read the ",(0,l.jsx)(t.a,{href:"/docs/platform/k8s/helm/run#architecture",children:"production deployment\nchecklist"}),"."]}),"\n",(0,l.jsx)(t.h2,{id:"how-to",children:"How-To"}),"\n",(0,l.jsx)(t.h3,{id:"install-vault",children:"Install Vault"}),"\n",(0,l.jsx)(t.p,{children:"To use the Helm chart, add the Hashicorp helm repository and check that you have\naccess to the chart:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell-session",children:'$ helm repo add hashicorp https://helm.releases.hashicorp.com\n"hashicorp" has been added to your repositories\n\n$ helm search repo hashicorp/vault\nNAME           \tCHART VERSION\tAPP VERSION\tDESCRIPTION\nhashicorp/vault\t0.25.0       \t1.14.0     \tOfficial HashiCorp Vault Chart\n'})}),"\n",(0,l.jsxs)(t.p,{children:["-> ",(0,l.jsx)(t.strong,{children:"Important:"})," The Helm chart is new and under significant development.\nPlease always run Helm with ",(0,l.jsx)(t.code,{children:"--dry-run"})," before any install or upgrade to verify\nchanges."]}),"\n",(0,l.jsxs)(t.p,{children:["Use ",(0,l.jsx)(t.code,{children:"helm install"})," to install the latest release of the Vault Helm chart."]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell-session",children:"$ helm install vault hashicorp/vault\n"})}),"\n",(0,l.jsx)(t.p,{children:"Or install a specific version of the chart."}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sh",children:"# List the available releases\n$ helm search repo hashicorp/vault -l\nNAME           \tCHART VERSION\tAPP VERSION\tDESCRIPTION\nhashicorp/vault\t0.25.0       \t1.14.0     \tOfficial HashiCorp Vault Chart\nhashicorp/vault\t0.24.0       \t1.13.1     \tOfficial HashiCorp Vault Chart\nhashicorp/vault\t0.23.0       \t1.12.1     \tOfficial HashiCorp Vault Chart\nhashicorp/vault\t0.22.1       \t1.12.0     \tOfficial HashiCorp Vault Chart\nhashicorp/vault\t0.22.0       \t1.11.3     \tOfficial HashiCorp Vault Chart\nhashicorp/vault\t0.21.0       \t1.11.2     \tOfficial HashiCorp Vault Chart\nhashicorp/vault\t0.20.1       \t1.10.3     \tOfficial HashiCorp Vault Chart\n...\n\n# Install version 0.25.0\n$ helm install vault hashicorp/vault --version 0.25.0\n"})}),"\n",(0,l.jsxs)(t.p,{children:["The ",(0,l.jsx)(t.code,{children:"helm install"})," command accepts parameters to override default configuration\nvalues inline or defined in a file. For all OpenShift deployments, ",(0,l.jsx)(t.code,{children:"global.openshift"}),"\nshould be set to ",(0,l.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,l.jsxs)(t.p,{children:["Override the ",(0,l.jsx)(t.code,{children:"server.dev.enabled"})," configuration value:"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell-session",children:'$ helm install vault hashicorp/vault \\\n    --set "global.openshift=true" \\\n    --set "server.dev.enabled=true"\n'})}),"\n",(0,l.jsx)(t.p,{children:"Override all the configuration found in a file:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell-session",children:"$ cat override-values.yml\nglobal:\n  openshift: true\n\nserver:\n  ha:\n    enabled: true\n    replicas: 5\n##\n$ helm install vault hashicorp/vault \\\n    --values override-values.yml\n"})}),"\n",(0,l.jsx)(t.h4,{id:"dev-mode",children:"Dev mode"}),"\n",(0,l.jsx)(t.p,{children:"The Helm chart may run a Vault server in development. This installs a single\nVault server with a memory storage backend."}),"\n",(0,l.jsxs)(t.p,{children:["-> ",(0,l.jsx)(t.strong,{children:"Dev mode:"})," This is ideal for learning and demonstration environments but\nNOT recommended for a production environment."]}),"\n",(0,l.jsx)(t.p,{children:"Install the latest Vault Helm chart in development mode."}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell-session",children:'$ helm install vault hashicorp/vault \\\n    --set "global.openshift=true" \\\n    --set "server.dev.enabled=true"\n'})}),"\n",(0,l.jsx)(t.h4,{id:"highly-available-raft-mode",children:"Highly available raft mode"}),"\n",(0,l.jsx)(t.p,{children:"The following creates a Vault cluster using the Raft integrated storage backend."}),"\n",(0,l.jsx)(t.p,{children:"Install the latest Vault Helm chart in HA Raft mode:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell-session",children:"$ helm install vault hashicorp/vault \\\n  --set='global.openshift=true' \\\n  --set='server.ha.enabled=true' \\\n  --set='server.ha.raft.enabled=true'\n"})}),"\n",(0,l.jsxs)(t.p,{children:["Next, initialize and unseal ",(0,l.jsx)(t.code,{children:"vault-0"})," pod:"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell-session",children:"$ oc exec -ti vault-0 -- vault operator init\n$ oc exec -ti vault-0 -- vault operator unseal\n"})}),"\n",(0,l.jsx)(t.p,{children:"Finally, join the remaining pods to the Raft cluster and unseal them. The pods\nwill need to communicate directly so we'll configure the pods to use the internal\nservice provided by the Helm chart:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell-session",children:"$ oc exec -ti vault-1 -- vault operator raft join http://vault-0.vault-internal:8200\n$ oc exec -ti vault-1 -- vault operator unseal\n\n$ oc exec -ti vault-2 -- vault operator raft join http://vault-0.vault-internal:8200\n$ oc exec -ti vault-2 -- vault operator unseal\n"})}),"\n",(0,l.jsx)(t.p,{children:"To verify if the Raft cluster has successfully been initialized, run the following."}),"\n",(0,l.jsxs)(t.p,{children:["First, login using the ",(0,l.jsx)(t.code,{children:"root"})," token on the ",(0,l.jsx)(t.code,{children:"vault-0"})," pod:"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell-session",children:"$ oc exec -ti vault-0 -- vault login\n"})}),"\n",(0,l.jsx)(t.p,{children:"Next, list all the raft peers:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell-session",children:"$ oc exec -ti vault-0 -- vault operator raft list-peers\n\nNode                                    Address                        State       Voter\n----                                    -------                        -----       -----\na1799962-8711-7f28-23f0-cea05c8a527d    vault-0.vault-internal:8201    leader      true\ne6876c97-aaaa-a92e-b99a-0aafab105745    vault-1.vault-internal:8201    follower    true\n4b5d7383-ff31-44df-e008-6a606828823b    vault-2.vault-internal:8201    follower    true\n"})}),"\n",(0,l.jsx)(t.p,{children:"Vault with integrated storage (Raft) is now ready to use!"}),"\n",(0,l.jsx)(t.h4,{id:"external-mode",children:"External mode"}),"\n",(0,l.jsx)(t.p,{children:"The Helm chart may be run in external mode. This installs no Vault server and\nrelies on a network addressable Vault server to exist."}),"\n",(0,l.jsx)(t.p,{children:"Install the latest Vault Helm chart in external mode."}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell-session",children:'$ helm install vault hashicorp/vault \\\n    --set "global.openshift=true" \\\n    --set "injector.externalVaultAddr=http://external-vault:8200"\n'})}),"\n",(0,l.jsx)(t.h2,{id:"tutorial",children:"Tutorial"}),"\n",(0,l.jsxs)(t.p,{children:["Refer to the ",(0,l.jsx)(t.a,{href:"/tutorials/kubernetes/kubernetes-external-vault",children:"Integrate a Kubernetes Cluster with an\nExternal Vault"}),"\ntutorial to learn how to use an external Vault within a Kubernetes cluster."]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var l=n(96540);const a={},s=l.createContext(a);function r(e){const t=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),l.createElement(s.Provider,{value:t},e.children)}}}]);