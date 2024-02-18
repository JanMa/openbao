"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4324],{72955:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var t=s(74848),r=s(28453);const a={sidebar_current:"docs-platform-k8s-examples-standalone-tls",description:"Describes how to set up a standalone Vault with TLS certificate"},i="Standalone server with TLS",l={id:"platform/k8s/helm/examples/standalone-tls",title:"Standalone server with TLS",description:"Describes how to set up a standalone Vault with TLS certificate",source:"@site/content/docs/platform/k8s/helm/examples/standalone-tls.mdx",sourceDirName:"platform/k8s/helm/examples",slug:"/platform/k8s/helm/examples/standalone-tls",permalink:"/openbao/docs/platform/k8s/helm/examples/standalone-tls",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/platform/k8s/helm/examples/standalone-tls.mdx",tags:[],version:"current",frontMatter:{sidebar_current:"docs-platform-k8s-examples-standalone-tls",description:"Describes how to set up a standalone Vault with TLS certificate"},sidebar:"docs",previous:{title:"Standalone server with load balanced UI",permalink:"/openbao/docs/platform/k8s/helm/examples/standalone-load-balanced-ui"},next:{title:"Standalone server with audit storage",permalink:"/openbao/docs/platform/k8s/helm/examples/standalone-audit"}},c={},o=[{value:"1. create key &amp; certificate using kubernetes CA",id:"1-create-key--certificate-using-kubernetes-ca",level:2},{value:"2. store key, cert, and kubernetes CA into kubernetes secrets store",id:"2-store-key-cert-and-kubernetes-ca-into-kubernetes-secrets-store",level:2},{value:"3. helm configuration",id:"3-helm-configuration",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"standalone-server-with-tls",children:"Standalone server with TLS"}),"\n",(0,t.jsxs)(n.p,{children:["~> ",(0,t.jsx)(n.strong,{children:"Important Note:"})," This chart is not compatible with Helm 2. Please use Helm 3.6+ with this chart."]}),"\n",(0,t.jsx)(n.p,{children:"This example can be used to set up a single server Vault cluster using TLS."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Create key & certificate using Kubernetes CA"}),"\n",(0,t.jsxs)(n.li,{children:["Store key & cert into ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/configuration/secret/",children:"Kubernetes secrets store"})]}),"\n",(0,t.jsx)(n.li,{children:"Configure helm chart to use Kubernetes secret from step 2"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"1-create-key--certificate-using-kubernetes-ca",children:"1. create key & certificate using kubernetes CA"}),"\n",(0,t.jsx)(n.p,{children:"There are four variables that will be used in this example."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# SERVICE is the name of the Vault service in kubernetes.\n# It does not have to match the actual running service, though it may help for consistency.\nexport SERVICE=vault-server-tls\n\n# NAMESPACE where the Vault service is running.\nexport NAMESPACE=vault-namespace\n\n# SECRET_NAME to create in the kubernetes secrets store.\nexport SECRET_NAME=vault-server-tls\n\n# TMPDIR is a temporary working directory.\nexport TMPDIR=/tmp\n\n# CSR_NAME will be the name of our certificate signing request as seen by kubernetes.\nexport CSR_NAME=vault-csr\n"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create a key for Kubernetes to sign."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"$ openssl genrsa -out ${TMPDIR}/vault.key 2048\nGenerating RSA private key, 2048 bit long modulus\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"...................................................................................................+++\n...............+++\ne is 65537 (0x10001)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\n2. Create a Certificate Signing Request (CSR).\n\n1. Create a file `${TMPDIR}/csr.conf` with the following contents:\n\n   ```bash\n   cat <<EOF >${TMPDIR}/csr.conf\n   [req]\n   req_extensions = v3_req\n   distinguished_name = req_distinguished_name\n   [req_distinguished_name]\n   [ v3_req ]\n   basicConstraints = CA:FALSE\n   keyUsage = nonRepudiation, digitalSignature, keyEncipherment\n   extendedKeyUsage = serverAuth\n   subjectAltName = @alt_names\n   [alt_names]\n   DNS.1 = *.${SERVICE}\n   DNS.2 = *.${SERVICE}.${NAMESPACE}\n   DNS.3 = *.${SERVICE}.${NAMESPACE}.svc\n   DNS.4 = *.${SERVICE}.${NAMESPACE}.svc.cluster.local\n   IP.1 = 127.0.0.1\n   EOF\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create a CSR."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'openssl req -new \\\n            -key ${TMPDIR}/vault.key \\\n            -subj "/CN=system:node:${SERVICE}.${NAMESPACE}.svc;/O=system:nodes" \\\n            -out ${TMPDIR}/server.csr \\\n            -config ${TMPDIR}/csr.conf\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create the certificate"}),"\n",(0,t.jsxs)(n.p,{children:["~> ",(0,t.jsx)(n.strong,{children:"Important Note:"})," If you are using EKS, certificate signing requirements have changed.  As per the AWS ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/cert-signing.html",children:"certificate signing"})," documentation, EKS version ",(0,t.jsx)(n.code,{children:"1.22"})," and later now requires the ",(0,t.jsx)(n.code,{children:"signerName"})," to be ",(0,t.jsx)(n.code,{children:"beta.eks.amazonaws.com/app-serving"}),", otherwise, the CSR will be approved but the certificate will not be issued."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a file ",(0,t.jsx)(n.code,{children:"${TMPDIR}/csr.yaml"})," with the following contents:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cat <<EOF >${TMPDIR}/csr.yaml\napiVersion: certificates.k8s.io/v1\nkind: CertificateSigningRequest\nmetadata:\n  name: ${CSR_NAME}\nspec:\n  signerName: kubernetes.io/kubelet-serving\n  groups:\n  - system:authenticated\n  request: $(base64 ${TMPDIR}/server.csr | tr -d '\\n')\n  signerName: kubernetes.io/kubelet-serving\n  usages:\n  - digital signature\n  - key encipherment\n  - server auth\nEOF\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Send the CSR to Kubernetes."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"$ kubectl create -f ${TMPDIR}/csr.yaml\ncertificatesigningrequest.certificates.k8s.io/vault-csr created\n"})}),"\n",(0,t.jsxs)(n.p,{children:["-> If this process is automated, you may need to wait to ensure the CSR has been received and stored:\n",(0,t.jsx)(n.code,{children:"kubectl get csr ${CSR_NAME}"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Approve the CSR in Kubernetes."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"$ kubectl certificate approve ${CSR_NAME}\ncertificatesigningrequest.certificates.k8s.io/vault-csr approved\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Verify that the certificate was approved and issued."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"$ kubectl get csr ${CSR_NAME}\nNAME        AGE     SIGNERNAME                                    REQUESTOR                        CONDITION\nvault-csr   1m13s   kubernetes.io/kubelet-serving                 kubernetes-admin                 Approved,Issued\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"2-store-key-cert-and-kubernetes-ca-into-kubernetes-secrets-store",children:"2. store key, cert, and kubernetes CA into kubernetes secrets store"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Retrieve the certificate."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"$ serverCert=$(kubectl get csr ${CSR_NAME} -o jsonpath='{.status.certificate}')\n"})}),"\n",(0,t.jsx)(n.p,{children:"-> If this process is automated, you may need to wait to ensure the certificate has been created.\nIf it hasn't, this will return an empty string."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Write the certificate out to a file."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:'$ echo "${serverCert}" | openssl base64 -d -A -out ${TMPDIR}/vault.crt\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Retrieve Kubernetes CA."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'kubectl get secret \\\n  -o jsonpath="{.items[?(@.type==\\"kubernetes.io/service-account-token\\")].data[\'ca\\.crt\']}" \\\n  | base64 --decode > ${TMPDIR}/vault.ca\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create the namespace."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"$ kubectl create namespace ${NAMESPACE}\nnamespace/vault-namespace created\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Store the key, cert, and Kubernetes CA into Kubernetes secrets."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"$ kubectl create secret generic ${SECRET_NAME} \\\n    --namespace ${NAMESPACE} \\\n    --from-file=vault.key=${TMPDIR}/vault.key \\\n    --from-file=vault.crt=${TMPDIR}/vault.crt \\\n    --from-file=vault.ca=${TMPDIR}/vault.ca\n\n# secret/vault-server-tls created\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"3-helm-configuration",children:"3. helm configuration"}),"\n",(0,t.jsxs)(n.p,{children:["The below ",(0,t.jsx)(n.code,{children:"custom-values.yaml"})," can be used to set up a single server Vault cluster using TLS.\nThis assumes that a Kubernetes ",(0,t.jsx)(n.code,{children:"secret"})," exists with the server certificate, key and\ncertificate authority:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'global:\n  enabled: true\n  tlsDisable: false\n\nserver:\n  extraEnvironmentVars:\n    VAULT_CACERT: /vault/userconfig/vault-server-tls/vault.ca\n\n  volumes:\n    - name: userconfig-vault-server-tls\n      secret:\n        defaultMode: 420\n        secretName: vault-server-tls # Matches the ${SECRET_NAME} from above\n\n  volumeMounts:\n    - mountPath: /vault/userconfig/vault-server-tls\n      name: userconfig-vault-server-tls\n      readOnly: true\n\n  standalone:\n    enabled: true\n    config: |\n      listener "tcp" {\n        address = "[::]:8200"\n        cluster_address = "[::]:8201"\n        tls_cert_file = "/vault/userconfig/vault-server-tls/vault.crt"\n        tls_key_file  = "/vault/userconfig/vault-server-tls/vault.key"\n        tls_client_ca_file = "/vault/userconfig/vault-server-tls/vault.ca"\n      }\n\n      storage "file" {\n        path = "/vault/data"\n      }\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var t=s(96540);const r={},a=t.createContext(r);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);