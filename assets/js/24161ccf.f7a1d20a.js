"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5079],{24382:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var a=n(74848),r=n(28453);const c={sidebar_current:"docs-platform-k8s-examples-injector-tls",description:"Describes how to set up the Vault Agent Injector with manually generated certificates and keys."},s="Vault agent injector TLS configuration",i={id:"platform/k8s/helm/examples/injector-tls",title:"Vault agent injector TLS configuration",description:"Describes how to set up the Vault Agent Injector with manually generated certificates and keys.",source:"@site/content/docs/platform/k8s/helm/examples/injector-tls.mdx",sourceDirName:"platform/k8s/helm/examples",slug:"/platform/k8s/helm/examples/injector-tls",permalink:"/openbao/docs/platform/k8s/helm/examples/injector-tls",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/platform/k8s/helm/examples/injector-tls.mdx",tags:[],version:"current",frontMatter:{sidebar_current:"docs-platform-k8s-examples-injector-tls",description:"Describes how to set up the Vault Agent Injector with manually generated certificates and keys."},sidebar:"docs",previous:{title:"HA Cluster with Raft and TLS",permalink:"/openbao/docs/platform/k8s/helm/examples/ha-tls"},next:{title:"Vault agent injector TLS with Cert-Manager",permalink:"/openbao/docs/platform/k8s/helm/examples/injector-tls-cert-manager"}},o={},l=[{value:"Create a certificate authority (CA)",id:"create-a-certificate-authority-ca",level:2},{value:"Create Vault agent injector certificate",id:"create-vault-agent-injector-certificate",level:2},{value:"Configuration",id:"configuration",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"vault-agent-injector-tls-configuration",children:"Vault agent injector TLS configuration"}),"\n",(0,a.jsxs)(t.p,{children:["~> ",(0,a.jsx)(t.strong,{children:"Important Note:"})," This chart is not compatible with Helm 2. Please use Helm 3.6+ with this chart."]}),"\n",(0,a.jsx)(t.p,{children:"The following instructions demonstrate how to manually configure the Vault Agent Injector\nwith self-signed certificates."}),"\n",(0,a.jsx)(t.h2,{id:"create-a-certificate-authority-ca",children:"Create a certificate authority (CA)"}),"\n",(0,a.jsx)(t.p,{children:"First, create a private key to be used by our custom Certificate Authority (CA):"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"$ openssl genrsa -out injector-ca.key 2048\n"})}),"\n",(0,a.jsx)(t.p,{children:"Next, create a certificate authority certificate:"}),"\n",(0,a.jsxs)(t.p,{children:["~> ",(0,a.jsx)(t.strong,{children:"Important Note:"})," Values such as days (how long the certificate is valid for) should be configured for your environment."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:'$ openssl req \\\n   -x509 \\\n   -new \\\n   -nodes \\\n   -key injector-ca.key \\\n   -sha256 \\\n   -days 1825 \\\n   -out injector-ca.crt \\\n   -subj "/C=US/ST=CA/L=San Francisco/O=HashiCorp/CN=vault-agent-injector-svc"\n'})}),"\n",(0,a.jsx)(t.h2,{id:"create-vault-agent-injector-certificate",children:"Create Vault agent injector certificate"}),"\n",(0,a.jsx)(t.p,{children:"Next we can create a certificate and key signed by the certificate authority generated above. This\ncertificate and key will be used by the Vault Agent Injector for TLS communications with the Kubernetes\nAPI."}),"\n",(0,a.jsx)(t.p,{children:"First, create a private key for the certificate:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"$ openssl genrsa -out tls.key 2048\n"})}),"\n",(0,a.jsx)(t.p,{children:"Next, create a certificate signing request (CSR) to be used when signing the certificate:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:'$ openssl req \\\n   -new \\\n   -key tls.key \\\n   -out tls.csr \\\n   -subj "/C=US/ST=CA/L=San Francisco/O=HashiCorp/CN=vault-agent-injector-svc"\n'})}),"\n",(0,a.jsx)(t.p,{children:"After creating the CSR, create an extension file to configure additional parameters for signing\nthe certificate."}),"\n",(0,a.jsxs)(t.p,{children:["~> ",(0,a.jsx)(t.strong,{children:"Important Note:"})," The alternative names for the certificate must be configured to use the name\nof the Vault Agent Injector Kubernetes service and namespace where its created."]}),"\n",(0,a.jsxs)(t.p,{children:["In this example the Vault Agent Injector service name is ",(0,a.jsx)(t.code,{children:"vault-agent-injector-svc"})," in the ",(0,a.jsx)(t.code,{children:"vault"})," namespace.\nThis uses the pattern ",(0,a.jsx)(t.code,{children:"<k8s service name>.<k8s namespace>.svc.cluster.local"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"$ cat <<EOF >csr.conf\nauthorityKeyIdentifier=keyid,issuer\nbasicConstraints=CA:FALSE\nkeyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment\nsubjectAltName = @alt_names\n\n[alt_names]\nDNS.1 = vault-agent-injector-svc\nDNS.2 = vault-agent-injector-svc.vault\nDNS.3 = vault-agent-injector-svc.vault.svc\nDNS.4 = vault-agent-injector-svc.vault.svc.cluster.local\nEOF\n"})}),"\n",(0,a.jsx)(t.p,{children:"Finally, sign the certificate:"}),"\n",(0,a.jsxs)(t.p,{children:["~> ",(0,a.jsx)(t.strong,{children:"Important Note:"})," Values such as days (how long the certificate is valid for) should be configured for your environment."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"$ openssl x509 \\\n  -req \\\n  -in tls.csr \\\n  -CA injector-ca.crt \\\n  -CAkey injector-ca.key \\\n  -CAcreateserial \\\n  -out tls.crt \\\n  -days 1825 \\\n  -sha256 \\\n  -extfile csr.conf\n"})}),"\n",(0,a.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,a.jsx)(t.p,{children:"Now that a certificate authority and a signed certificate have been created, we can now configure\nHelm and the Vault Agent Injector to use them."}),"\n",(0,a.jsx)(t.p,{children:"First, create a Kubernetes secret containing the certificate and key created above:"}),"\n",(0,a.jsxs)(t.p,{children:["~> ",(0,a.jsx)(t.strong,{children:"Important Note:"})," This example assumes the Vault Agent Injector is running in the ",(0,a.jsx)(t.code,{children:"vault"})," namespace."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"$ kubectl create secret generic injector-tls \\\n    --from-file tls.crt \\\n    --from-file tls.key \\\n    --namespace=vault\n"})}),"\n",(0,a.jsx)(t.p,{children:"Next, base64 encode the certificate authority so Kubernetes can verify the authenticity of the certificate:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"$ export CA_BUNDLE=$(cat injector-ca.crt | base64)\n"})}),"\n",(0,a.jsx)(t.p,{children:"Finally, install the Vault Agent Injector with the following custom values:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:'$ helm install vault hashicorp/vault \\\n  --namespace=vault \\\n  --set="injector.certs.secretName=injector-tls" \\\n  --set="injector.certs.caBundle=${CA_BUNDLE?}"\n'})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var a=n(96540);const r={},c=a.createContext(r);function s(e){const t=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(c.Provider,{value:t},e.children)}}}]);