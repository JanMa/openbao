"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[753],{22260:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=s(74848),r=s(28453);const i={sidebar_label:"Configurations",description:"This section documents the configurables for the Vault CSI Provider."},c="Command line arguments",l={id:"platform/k8s/csi/configurations",title:"Command line arguments",description:"This section documents the configurables for the Vault CSI Provider.",source:"@site/content/docs/platform/k8s/csi/configurations.mdx",sourceDirName:"platform/k8s/csi",slug:"/platform/k8s/csi/configurations",permalink:"/docs/platform/k8s/csi/configurations",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/platform/k8s/csi/configurations.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Configurations",description:"This section documents the configurables for the Vault CSI Provider."},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/platform/k8s/csi/installation"},next:{title:"Examples",permalink:"/docs/platform/k8s/csi/examples"}},o={},d=[];function a(e){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"command-line-arguments",children:"Command line arguments"}),"\n",(0,t.jsx)(n.p,{children:"The following command line arguments are supported by the Vault CSI provider.\nMost settings support being set by, in ascending order of precedence:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Environment variables"}),"\n",(0,t.jsx)(n.li,{children:"Command line arguments"}),"\n",(0,t.jsx)(n.li,{children:"Secret Provider Class parameters"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["If installing via the helm chart, they can be set using e.g.\n",(0,t.jsx)(n.code,{children:'--set "csi.extraArgs={-debug=true}"'}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-cache-size"})," ",(0,t.jsx)(n.code,{children:"(int: 1000)"})," - Set the maximum number of Vault tokens that will\nbe cached in-memory. One Vault token will be stored for each pod on the same\nnode that mounts secrets. Setting to 0 will disable the cache and force each\nvolume mount request to reauthenticate to Vault."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-debug"})," ",(0,t.jsx)(n.code,{children:"(bool: false)"})," - Set to true to enable debug level logging."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-endpoint"})," ",(0,t.jsx)(n.code,{children:'(string: "/tmp/vault.sock")'})," - Path to unix socket on which the\nprovider will listen for gRPC calls from the driver."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-health-addr"})," ",(0,t.jsx)(n.code,{children:'(string: ":8080")'})," - The address of the HTTP listener\nfor reporting health."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-hmac-secret-name"})," ",(0,t.jsx)(n.code,{children:'(string: "vault-csi-provider-hmac-key")'})," - Configure the\nKubernetes secret name that the provider creates to store an HMAC key for\ngenerating secret version hashes."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-vault-addr"})," ",(0,t.jsx)(n.code,{children:'(string: "https://127.0.0.1:8200")'})," - Default address\nfor connecting to Vault. Can also be specified via the ",(0,t.jsx)(n.code,{children:"VAULT_ADDR"})," environment\nvariable. ",(0,t.jsx)(n.strong,{children:"Note:"})," It is highly recommended to only set the Vault address when\ninstalling the helm chart. The helm chart will install Vault Agent as a sidecar\nto the Vault CSI Provider for caching and renewals, but setting ",(0,t.jsx)(n.code,{children:"-vault-addr"}),"\nhere will cause the Vault CSI Provider to bypass the Agent's cache."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-vault-mount"})," ",(0,t.jsx)(n.code,{children:'(string: "kubernetes")'})," - Default Vault mount path\nfor Kubernetes authentication. Can be overridden per Secret Provider Class\nobject."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-vault-namespace"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - (v1.1.0+) Default Vault namespace for Vault\nrequests. Can also be specified via the ",(0,t.jsx)(n.code,{children:"VAULT_NAMESPACE"})," environment variable."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-vault-tls-ca-cert"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - (v1.1.0+) Path on disk to a single\nPEM-encoded CA certificate to trust for Vault. Takes precendence over\n",(0,t.jsx)(n.code,{children:"-vault-tls-ca-directory"}),". Can also be specified via the ",(0,t.jsx)(n.code,{children:"VAULT_CACERT"}),"\nenvironment variable."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-vault-tls-ca-directory"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - (v1.1.0+) Path on disk to a\ndirectory of PEM-encoded CA certificates to trust for Vault. Can also be\nspecified via the ",(0,t.jsx)(n.code,{children:"VAULT_CAPATH"})," environment variable."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-vault-tls-server-name"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - (v1.1.0+) Name to use as the SNI\nhost when connecting to Vault via TLS. Can also be specified via the\n",(0,t.jsx)(n.code,{children:"VAULT_TLS_SERVER_NAME"})," environment variable."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-vault-tls-client-cert"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - (v1.1.0+) Path on disk to a\nPEM-encoded client certificate for mTLS communication with Vault. If set,\nalso requires ",(0,t.jsx)(n.code,{children:"-vault-tls-client-key"}),". Can also be specified via the\n",(0,t.jsx)(n.code,{children:"VAULT_CLIENT_CERT"})," environment variable."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-vault-tls-client-key"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - (v1.1.0+) Path on disk to a\nPEM-encoded client key for mTLS communication with Vault. If set, also\nrequires ",(0,t.jsx)(n.code,{children:"-vault-tls-client-cert"}),". Can also be specified via the\n",(0,t.jsx)(n.code,{children:"VAULT_CLIENT_KEY"})," environment variable."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-vault-tls-skip-verify"})," ",(0,t.jsx)(n.code,{children:"(bool: false)"})," - (v1.1.0+) Disable verification of\nTLS certificates. Can also be specified via the ",(0,t.jsx)(n.code,{children:"VAULT_SKIP_VERIFY"})," environment\nvariable."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-version"})," ",(0,t.jsx)(n.code,{children:"(bool: false)"})," - print version information and exit."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"secret-provider-class-parameters",children:"Secret provider class parameters"}),"\n",(0,t.jsxs)(n.p,{children:["The following parameters are supported by the Vault provider. Each parameter is\nan entry under ",(0,t.jsx)(n.code,{children:"spec.parameters"})," in a SecretProviderClass object. The full\nstructure is illustrated in the ",(0,t.jsx)(n.a,{href:"/docs/platform/k8s/csi/examples",children:"examples"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"roleName"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - Name of the role to be used during login with Vault."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"vaultAddress"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - The address of the Vault server. ",(0,t.jsx)(n.strong,{children:"Note:"})," It is\nhighly recommended to only set the Vault address when installing the helm chart.\nThe helm chart will install Vault Agent as a sidecar to the Vault CSI Provider\nfor caching and renewals, but setting ",(0,t.jsx)(n.code,{children:"vaultAddress"})," here will cause the Vault\nCSI Provider to bypass the Agent's cache."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"vaultSkipTLSVerify"})," ",(0,t.jsx)(n.code,{children:'(string: "false")'})," - When set to true, skips verification of the Vault server\ncertificate. Setting this to true is not recommended for production."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"vaultCACertPath"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - The path on disk where the Vault CA certificate can be found\nwhen verifying the Vault server certificate."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"vaultCADirectory"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - The directory on disk where the Vault CA certificate can be found\nwhen verifying the Vault server certificate."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"vaultTLSClientCertPath"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - The path on disk where the client certificate can be found\nfor mTLS communications with Vault."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"vaultTLSClientKeyPath"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - The path on disk where the client key can be found\nfor mTLS communications with Vault."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"vaultTLSServerName"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - The name to use as the SNI host when connecting via TLS."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"vaultAuthMountPath"})," ",(0,t.jsx)(n.code,{children:'(string: "kubernetes")'})," - The name of the auth mount used for login.\nCan be a Kubernetes or JWT auth mount. Mutually exclusive with ",(0,t.jsx)(n.code,{children:"vaultKubernetesMountPath"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"vaultKubernetesMountPath"})," ",(0,t.jsx)(n.code,{children:'(string: "kubernetes")'})," - The name of the auth mount used for login.\nCan be a Kubernetes or JWT auth mount. Mutually exclusive with ",(0,t.jsx)(n.code,{children:"vaultAuthMountPath"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"audience"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - Specifies a custom audience for the requesting pod's service account token,\ngenerated using the\n",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/kubernetes-api/authentication-resources/token-request-v1/#TokenRequestSpec",children:"TokenRequest API"}),".\nThe resulting token is used to authenticate to Vault, so if you specify an\n",(0,t.jsx)(n.a,{href:"/api-docs/auth/kubernetes#audience",children:"audience"})," for your Kubernetes auth\nrole, it must match the audience specified here. If not set, the token audiences will default to\nthe Kubernetes cluster's default API audiences."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"objects"})," ",(0,t.jsx)(n.code,{children:"(array)"})," - An array of secrets to retrieve from Vault."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"objectName"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - The alias of the object which can be referenced within the secret provider class and\nthe name of the secret file."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"method"})," ",(0,t.jsx)(n.code,{children:'(string: "GET")'}),' - The type of HTTP request. Supported values include "GET" and "PUT".']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"secretPath"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - The path in Vault where the secret is located.\nFor secrets that are retrieved via HTTP GET method, the ",(0,t.jsx)(n.code,{children:"secretPath"})," can include optional URI parameters,\nfor example, the ",(0,t.jsx)(n.a,{href:"/api-docs/secret/kv/kv-v2#read-secret-version",children:"version of the KV2 secret"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'objects: |\n  - objectName: "app-secret"\n    secretPath: "secret/data/test?version=1"\n    secretKey: "password"\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"secretKey"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - The key in the Vault secret to extract. If omitted, the whole response from Vault will be written as JSON."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"filePermission"})," ",(0,t.jsx)(n.code,{children:"(integer: 0o644)"})," - The file permissions to set for this secret's file."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"encoding"})," ",(0,t.jsx)(n.code,{children:'(string: "utf-8")'})," - The encoding of the secret value. Supports decoding ",(0,t.jsx)(n.code,{children:"utf-8"})," (default), ",(0,t.jsx)(n.code,{children:"hex"}),", and ",(0,t.jsx)(n.code,{children:"base64"})," values."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"secretArgs"})," ",(0,t.jsx)(n.code,{children:"(map: {})"})," - Additional arguments to be sent to Vault for a specific secret. Arguments can vary\nfor different secret engines. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"secretArgs:\n  common_name: 'test.example.com'\n  ttl: '24h'\n"})}),"\n",(0,t.jsxs)(n.p,{children:["~> ",(0,t.jsx)(n.code,{children:"secretArgs"})," are sent as part of the HTTP request body. Therefore, they are only effective for HTTP PUT/POST requests, for instance,\nthe ",(0,t.jsx)(n.a,{href:"/api-docs/secret/pki#generate-certificate",children:"request used to generate a new certificate"}),".\nTo supply additional parameters for secrets retrieved via HTTP GET, include optional URI parameters in ",(0,t.jsx)(n.a,{href:"#secretpath",children:(0,t.jsx)(n.code,{children:"secretPath"})}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>l});var t=s(96540);const r={},i=t.createContext(r);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);