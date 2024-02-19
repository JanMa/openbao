"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2266],{64669:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=t(74848),i=t(28453);const r={sidebar_label:"Installation",description:"The Vault CSI Provider can be installed using Vault Helm."},o="Installing the Vault CSI provider",a={id:"platform/k8s/csi/installation",title:"Installing the Vault CSI provider",description:"The Vault CSI Provider can be installed using Vault Helm.",source:"@site/content/docs/platform/k8s/csi/installation.mdx",sourceDirName:"platform/k8s/csi",slug:"/platform/k8s/csi/installation",permalink:"/openbao/docs/platform/k8s/csi/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/platform/k8s/csi/installation.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Installation",description:"The Vault CSI Provider can be installed using Vault Helm."},sidebar:"docs",previous:{title:"Overview",permalink:"/openbao/docs/platform/k8s/csi/"},next:{title:"Configurations",permalink:"/openbao/docs/platform/k8s/csi/configurations"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation using helm",id:"installation-using-helm",level:2},{value:"Installation on OpenShift",id:"installation-on-openshift",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"installing-the-vault-csi-provider",children:"Installing the Vault CSI provider"}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Kubernetes 1.16+ for both the master and worker nodes (Linux-only)"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://secrets-store-csi-driver.sigs.k8s.io/getting-started/installation.html",children:"Secrets store CSI driver"})," installed"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"TokenRequest"})," endpoint available, which requires setting the flags\n",(0,s.jsx)(n.code,{children:"--service-account-signing-key-file"})," and ",(0,s.jsx)(n.code,{children:"--service-account-issuer"})," for\n",(0,s.jsx)(n.code,{children:"kube-apiserver"}),". Set by default from 1.20+ and earlier in most managed services."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"installation-using-helm",children:"Installation using helm"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"/docs/platform/k8s/helm",children:"Vault Helm chart"})," is the recommended way to\ninstall and configure the Vault CSI Provider in Kubernetes."]}),"\n",(0,s.jsx)(n.p,{children:"To install a new instance of Vault and the Vault CSI Provider, first add the\nHashiCorp helm repository and ensure you have access to the chart:"}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," Vault CSI Provider Helm installation requires Vault Helm 0.10.0+."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:'$ helm repo add hashicorp https://helm.releases.hashicorp.com\n"hashicorp" has been added to your repositories\n\n$ helm search repo hashicorp/vault\nNAME           \tCHART VERSION\tAPP VERSION\tDESCRIPTION\nhashicorp/vault\t0.25.0       \t1.14.0     \tOfficial HashiCorp Vault Chart\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Then install the chart and enable the CSI feature by setting the\n",(0,s.jsx)(n.code,{children:"csi.enabled"})," value to ",(0,s.jsx)(n.code,{children:"true"}),":"]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," this will also install the Vault server and Agent Injector."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:'$ helm install vault hashicorp/vault --set="csi.enabled=true"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Upgrades may be performed with ",(0,s.jsx)(n.code,{children:"helm upgrade"})," on an existing installation. Please\nalways run Helm with ",(0,s.jsx)(n.code,{children:"--dry-run"})," before any install or upgrade to verify\nchanges."]}),"\n",(0,s.jsxs)(n.p,{children:["You can see all the available values settings by running ",(0,s.jsx)(n.code,{children:"helm inspect values hashicorp/vault"})," or by reading the ",(0,s.jsx)(n.a,{href:"/docs/platform/k8s/helm/configuration",children:"Vault Helm Configuration\nDocs"}),". Commonly used values in the Helm\nchart include limiting the namespaces the Vault CSI Provider runs in, TLS options and\nmore."]}),"\n",(0,s.jsx)(n.h2,{id:"installation-on-openshift",children:"Installation on OpenShift"}),"\n",(0,s.jsxs)(n.p,{children:["We recommend using the ",(0,s.jsx)(n.a,{href:"/docs/platform/k8s/helm/openshift",children:"Vault agent injector on Openshift"}),"\ninstead of the Secrets Store CSI driver. OpenShift\n",(0,s.jsx)(n.a,{href:"https://docs.openshift.com/container-platform/4.9/storage/persistent_storage/persistent-storage-hostpath.html",children:"does not recommend"}),"\nusing ",(0,s.jsx)(n.code,{children:"hostPath"})," mounting in production or\n",(0,s.jsx)(n.a,{href:"https://github.com/redhat-certification/chart-verifier/blob/dbf89bff2d09142e4709d689a9f4037a739c2244/docs/helm-chart-checks.md#table-2-helm-chart-default-checks",children:"certify Helm charts"}),"\nusing CSI objects because pods must run as privileged. Pods will have elevated access to\nother pods on the same node, which OpenShift does not recommend."]}),"\n",(0,s.jsx)(n.p,{children:"You can run the Secrets Store CSI driver with additional\nsecurity configurations on a OpenShift development\nor testing cluster."}),"\n",(0,s.jsx)(n.p,{children:"Deploy the Secrets Store CSI driver and Vault Helm chart\nto your OpenShift cluster."}),"\n",(0,s.jsxs)(n.p,{children:["Then, patch the ",(0,s.jsx)(n.code,{children:"DaemonSet"})," for the Vault CSI provider to\nrun with a privileged security context."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:'$ kubectl patch daemonset vault-csi-provider \\\n  --type=\'json\' \\\n  --patch=\'[{"op": "add", "path": "/spec/template/spec/containers/0/securityContext", "value": {"privileged": true} }]\'\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The Secrets Store CSI driver and Vault CSI provider need ",(0,s.jsx)(n.code,{children:"hostPath"})," mount access.\nAdd the service account for the Secrets Store CSI driver to the ",(0,s.jsx)(n.code,{children:"privileged"}),"\n",(0,s.jsx)(n.a,{href:"https://cloud.redhat.com/blog/managing-sccs-in-openshift",children:"security context constraint"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ oc adm policy add-scc-to-user privileged system:serviceaccount:${KUBERNETES_VAULT_NAMESPACE}:secrets-store-csi-driver\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Add the service account for the Vault CSI provider to the ",(0,s.jsx)(n.code,{children:"privileged"}),"\nsecurity context constraint."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ oc adm policy add-scc-to-user privileged system:serviceaccount:${KUBERNETES_VAULT_NAMESPACE}:vault-csi-provider\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You need to give additional access to the application retrieving secrets with the Vault CSI provider.\nCreate a ",(0,s.jsx)(n.code,{children:"SecurityContextConstraint"})," to ",(0,s.jsx)(n.code,{children:"allowHostDirVolumePlugin"}),", ",(0,s.jsx)(n.code,{children:"allowHostDirVolumePlugin"}),", and\n",(0,s.jsx)(n.code,{children:"allowHostPorts"})," for the application's service account.\nYou can adjust the other attributes based on your application's runtime configuration."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ cat > application-scc.yaml << EOF\napiVersion: security.openshift.io/v1\nkind: SecurityContextConstraints\nmetadata:\n  name: vault-csi-provider\nallowPrivilegedContainer: false\nallowHostDirVolumePlugin: true\nallowHostNetwork: true\nallowHostPorts: true\nallowHostIPC: false\nallowHostPID: false\nreadOnlyRootFilesystem: false\ndefaultAddCapabilities:\n- SYS_ADMIN\nrunAsUser:\n  type: RunAsAny\nseLinuxContext:\n  type: RunAsAny\nfsGroup:\n  type: RunAsAny\nusers:\n- system:serviceaccount:${KUBERNETES_APPLICATION_NAMESPACE}:${APPLICATION_SERVICE_ACCOUNT}\nEOF\n"})}),"\n",(0,s.jsx)(n.p,{children:"Add the security context constraint for the application."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ kubectl apply -f application-scc.yaml\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(96540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);