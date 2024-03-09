"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8993],{23284:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=t(74848),r=t(28453);const s={sidebar_label:"Installation",description:"The Vault Agent Sidecar Injector can be installed using Vault Helm."},i="Installing the agent injector",l={id:"platform/k8s/injector/installation",title:"Installing the agent injector",description:"The Vault Agent Sidecar Injector can be installed using Vault Helm.",source:"@site/content/docs/platform/k8s/injector/installation.mdx",sourceDirName:"platform/k8s/injector",slug:"/platform/k8s/injector/installation",permalink:"/openbao/docs/platform/k8s/injector/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/platform/k8s/injector/installation.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Installation",description:"The Vault Agent Sidecar Injector can be installed using Vault Helm."},sidebar:"docs",previous:{title:"Annotations",permalink:"/openbao/docs/platform/k8s/injector/annotations"},next:{title:"Examples",permalink:"/openbao/docs/platform/k8s/injector/examples"}},o={},c=[{value:"TLS options",id:"tls-options",level:2},{value:"Auto TLS",id:"auto-tls",level:3},{value:"Manual TLS",id:"manual-tls",level:3},{value:"Multiple replicas and TLS",id:"multiple-replicas-and-tls",level:2},{value:"Namespace selector",id:"namespace-selector",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"installing-the-agent-injector",children:"Installing the agent injector"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"/docs/platform/k8s/helm",children:"Vault Helm chart"})," is the recommended way to\ninstall and configure the Agent Injector in Kubernetes."]}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"The Vault Agent Injector requires Vault 1.3.1 or greater."})}),"\n",(0,a.jsx)(n.p,{children:"To install a new instance of Vault and the Vault Agent Injector, first add the\nHashicorp helm repository and ensure you have access to the chart:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell-session",children:'$ helm repo add hashicorp https://helm.releases.hashicorp.com\n"hashicorp" has been added to your repositories\n\n$ helm search repo hashicorp/vault\nNAME           \tCHART VERSION\tAPP VERSION\tDESCRIPTION\nhashicorp/vault\t0.25.0       \t1.14.0     \tOfficial HashiCorp Vault Chart\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Then install the chart and enable the injection feature by setting the\n",(0,a.jsx)(n.code,{children:"injector.enabled"})," value to ",(0,a.jsx)(n.code,{children:"true"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'helm install vault hashicorp/vault --set="injector.enabled=true"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Upgrades may be performed with ",(0,a.jsx)(n.code,{children:"helm upgrade"})," on an existing install. Please\nalways run Helm with ",(0,a.jsx)(n.code,{children:"--dry-run"})," before any install or upgrade to verify\nchanges."]}),"\n",(0,a.jsxs)(n.p,{children:["You can see all the available values settings by running ",(0,a.jsx)(n.code,{children:"helm inspect values hashicorp/vault"})," or by reading the ",(0,a.jsx)(n.a,{href:"/docs/platform/k8s/helm/configuration",children:"Vault Helm Configuration\nDocs"}),". Commonly used values in the Helm\nchart include limiting the namespaces the injector runs in, TLS options and\nmore."]}),"\n",(0,a.jsx)(n.h2,{id:"tls-options",children:"TLS options"}),"\n",(0,a.jsx)(n.p,{children:"Admission webhook controllers require TLS to run within Kubernetes. The Injector\ndefaults to supporting TLS 1.2 and above, and supports configuring the minimum\nsupported TLS version and list of enabled cipher suites. These can be set via\nthe following environment variables:"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Environment variable"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"AGENT_INJECT_TLS_MIN_VERSION"})}),(0,a.jsxs)(n.td,{children:["Minimum supported version of TLS. Defaults to ",(0,a.jsx)(n.strong,{children:"tls12"}),". Accepted values are ",(0,a.jsx)(n.code,{children:"tls10"}),", ",(0,a.jsx)(n.code,{children:"tls11"}),", ",(0,a.jsx)(n.code,{children:"tls12"}),", or ",(0,a.jsx)(n.code,{children:"tls13"}),"."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"AGENT_INJECT_TLS_CIPHER_SUITES"})}),(0,a.jsxs)(n.td,{children:["Comma-separated list of enabled ",(0,a.jsx)(n.a,{href:"https://golang.org/src/crypto/tls/cipher_suites.go",children:"cipher suites"})," for TLS 1.0-1.2. (Cipher suites are not configurable for TLS 1.3.)"]})]})]})]}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Warning"}),": TLS 1.1 and lower are generally considered insecure."]})}),"\n",(0,a.jsxs)(n.p,{children:["These may be set in a Helm chart deployment via the\n",(0,a.jsx)(n.a,{href:"/docs/platform/k8s/helm/configuration#extraenvironmentvars",children:"injector.extraEnvironmentVars"}),"\noption:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'helm install vault hashicorp/vault \\\n  --set="injector.extraEnvironmentVars.AGENT_INJECT_TLS_MIN_VERSION=tls13" \\\n  --set="injector.extraEnvironmentVars.AGENT_INJECT_TLS_CIPHER_SUITES=..."\n'})}),"\n",(0,a.jsx)(n.p,{children:"The Vault Agent Injector also supports two TLS management options:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Auto TLS generation (default)"}),"\n",(0,a.jsx)(n.li,{children:"Manual TLS"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"auto-tls",children:"Auto TLS"}),"\n",(0,a.jsx)(n.p,{children:"By default, the Vault Agent Injector will bootstrap TLS by generating a certificate\nauthority and creating a certificate/key to be used by the controller. If using\nVault Helm, the chart will automatically create the necessary DNS entries for the\ncontroller's service used to verify the certificate."}),"\n",(0,a.jsx)(n.h3,{id:"manual-tls",children:"Manual TLS"}),"\n",(0,a.jsx)(n.p,{children:"If desired, users can supply their own TLS certificates, key and certificate authority.\nThe following is required to configure TLS manually:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Server certificate/key"}),"\n",(0,a.jsx)(n.li,{children:"Base64 PEM encoded Certificate Authority bundle"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["For more information on configuring manual TLS, see the ",(0,a.jsx)(n.a,{href:"/docs/platform/k8s/helm/configuration#certs",children:"Vault Helm cert values"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["This option may also be used in conjunction with ",(0,a.jsx)(n.a,{href:"/docs/platform/k8s/helm/examples/injector-tls-cert-manager",children:"cert-manager for certificate management"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"multiple-replicas-and-tls",children:"Multiple replicas and TLS"}),"\n",(0,a.jsxs)(n.p,{children:["The Vault Agent Injector can be run with multiple replicas if using ",(0,a.jsx)(n.a,{href:"#manual-tls",children:"Manual\nTLS"})," or ",(0,a.jsx)(n.a,{href:"/docs/platform/k8s/helm/examples/injector-tls-cert-manager",children:"cert-manager"}),", and as of v0.7.0 multiple replicas are also supported with\n",(0,a.jsx)(n.a,{href:"#auto-tls",children:"Auto TLS"}),". The number of replicas is controlled in the Vault Helm\nchart by the ",(0,a.jsx)(n.a,{href:"/docs/platform/k8s/helm/configuration#replicas",children:"injector.replicas\nvalue"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["With Auto TLS and multiple replicas, a leader replica is determined by ownership\nof a ConfigMap named ",(0,a.jsx)(n.code,{children:"vault-k8s-leader"}),'. Another replica can become the leader\nonce the current leader replica stops running, and the Kubernetes garbage\ncollector deletes the ConfigMap. The leader replica is in charge of generating\nthe CA and patching the webhook caBundle in Kubernetes, and also generating and\ndistributing the certificate and key to the "followers". The followers read the\ncertificate and key needed for the webhook service listener from a Kubernetes\nSecret, which is updated by the leader when a certificate is near expiration.']}),"\n",(0,a.jsxs)(n.p,{children:["With Manual TLS and multiple replicas,\n",(0,a.jsx)(n.a,{href:"/docs/platform/k8s/helm/configuration#enabled-2",children:"injector.leaderElector.enabled"}),"\ncan be set to ",(0,a.jsx)(n.code,{children:"false"})," since leader determination is not necessary in this case."]}),"\n",(0,a.jsx)(n.h2,{id:"namespace-selector",children:"Namespace selector"}),"\n",(0,a.jsxs)(n.p,{children:["By default, the Vault Agent Injector will process all namespaces in Kubernetes except\nthe system namespaces ",(0,a.jsx)(n.code,{children:"kube-system"})," and ",(0,a.jsx)(n.code,{children:"kube-public"}),". To limit what namespaces\nthe injector can work in a namespace selector can be defined to match labels attached\nto namespaces."]}),"\n",(0,a.jsxs)(n.p,{children:["For more information on configuring namespace selection, see the ",(0,a.jsx)(n.a,{href:"/docs/platform/k8s/helm/configuration#namespaceselector",children:"Vault Helm namespaceSelector value"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var a=t(96540);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);