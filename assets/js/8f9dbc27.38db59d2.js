"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8546],{12712:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var s=t(74848),i=t(28453);const l={description:"This is the API documentation for the OpenBao Kubernetes auth method plugin."},r="Kubernetes auth method (API)",a={id:"auth/kubernetes",title:"Kubernetes auth method (API)",description:"This is the API documentation for the OpenBao Kubernetes auth method plugin.",source:"@site/content/api-docs/auth/kubernetes.mdx",sourceDirName:"auth",slug:"/auth/kubernetes",permalink:"/api-docs/auth/kubernetes",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/api-docs/auth/kubernetes.mdx",tags:[],version:"current",frontMatter:{description:"This is the API documentation for the OpenBao Kubernetes auth method plugin."},sidebar:"api",previous:{title:"Kerberos",permalink:"/api-docs/auth/kerberos"},next:{title:"LDAP",permalink:"/api-docs/auth/ldap"}},d={},c=[{value:"Configure method",id:"configure-method",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Deprecated parameters",id:"deprecated-parameters",level:3},{value:"Caveats",id:"caveats",level:3},{value:"Sample payload",id:"sample-payload",level:3},{value:"Sample request",id:"sample-request",level:3},{value:"Read config",id:"read-config",level:2},{value:"Sample request",id:"sample-request-1",level:3},{value:"Sample response",id:"sample-response",level:3},{value:"Create/Update role",id:"createupdate-role",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Sample payload",id:"sample-payload-1",level:3},{value:"Sample request",id:"sample-request-2",level:3},{value:"Read role",id:"read-role",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Sample request",id:"sample-request-3",level:3},{value:"Sample response",id:"sample-response-1",level:3},{value:"List roles",id:"list-roles",level:2},{value:"Sample request",id:"sample-request-4",level:3},{value:"Sample response",id:"sample-response-2",level:3},{value:"Delete role",id:"delete-role",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"Sample request",id:"sample-request-5",level:3},{value:"Login",id:"login",level:2},{value:"Parameters",id:"parameters-4",level:3},{value:"Sample payload",id:"sample-payload-2",level:3},{value:"Sample request",id:"sample-request-6",level:3},{value:"Sample response",id:"sample-response-3",level:3}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"kubernetes-auth-method-api",children:"Kubernetes auth method (API)"}),"\n",(0,s.jsxs)(n.p,{children:["~> ",(0,s.jsx)(n.strong,{children:"Note"}),": This engine can use external X.509 certificates as part of TLS or signature validation.\nVerifying signatures against X.509 certificates that use SHA-1 is deprecated and is no longer\nusable without a workaround. See the\n",(0,s.jsx)(n.a,{href:"/docs/deprecation/faq#q-what-is-the-impact-of-removing-support-for-x-509-certificates-with-signatures-that-use-sha-1",children:"deprecation FAQ"}),"\nfor more information."]}),"\n",(0,s.jsxs)(n.p,{children:["This is the API documentation for the OpenBao Kubernetes auth method plugin. To\nlearn more about the usage and operation, see the\n",(0,s.jsx)(n.a,{href:"/docs/auth/kubernetes",children:"OpenBao Kubernetes auth method"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["This documentation assumes the Kubernetes method is mounted at the\n",(0,s.jsx)(n.code,{children:"/auth/kubernetes"})," path in OpenBao. Since it is possible to enable auth methods at\nany location, please update your API calls accordingly."]}),"\n",(0,s.jsx)(n.h2,{id:"configure-method",children:"Configure method"}),"\n",(0,s.jsx)(n.p,{children:"The Kubernetes auth method validates service account JWTs and verifies their\nexistence with the Kubernetes TokenReview API. This endpoint configures the\npublic key used to validate the JWT signature and the necessary information to\naccess the Kubernetes API."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"POST"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"/auth/kubernetes/config"})})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"kubernetes_host"})," ",(0,s.jsx)(n.code,{children:"(string: <required>)"})," - Host must be a host string, a host",":port"," pair, or a URL to the base of the Kubernetes API server."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"kubernetes_ca_cert"})," ",(0,s.jsx)(n.code,{children:'(string: "")'})," - PEM encoded CA cert for use by the TLS client used to talk with the Kubernetes API. NOTE: Every line must end with a newline: ",(0,s.jsx)(n.code,{children:"\\n"}),"\nIf not set, the local CA cert will be used if running in a Kubernetes pod."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"token_reviewer_jwt"})," ",(0,s.jsx)(n.code,{children:'(string: "")'})," - A service account JWT used to access the TokenReview\nAPI to validate other JWTs during login. If not set,\nthe local service account token is used if running in a Kubernetes pod, otherwise\nthe JWT submitted in the login payload will be used to access the Kubernetes TokenReview API."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"pem_keys"})," ",(0,s.jsx)(n.code,{children:"(array: [])"})," - Optional list of PEM-formatted public keys or certificates\nused to verify the signatures of Kubernetes service account\nJWTs. If a certificate is given, its public key will be\nextracted. Not every installation of Kubernetes exposes these\nkeys."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"disable_local_ca_jwt"})," ",(0,s.jsx)(n.code,{children:"(bool: false)"})," - Disable defaulting to the local CA cert and service account JWT when running in a Kubernetes pod."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"deprecated-parameters",children:"Deprecated parameters"}),"\n",(0,s.jsx)(n.p,{children:"-> The following fields have been deprecated and will be removed in a future release:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"disable_iss_validation"})," ",(0,s.jsx)(n.code,{children:"(bool: true)"})," ",(0,s.jsx)(n.strong,{children:"Deprecated"})," Disable JWT issuer validation. Allows to skip ISS validation."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"issuer"})," ",(0,s.jsx)(n.code,{children:'(string: "")'})," ",(0,s.jsx)(n.strong,{children:"Deprecated"})," Optional JWT issuer. If no issuer is specified, then this plugin will use ",(0,s.jsx)(n.code,{children:"kubernetes/serviceaccount"})," as the default issuer.\nSee ",(0,s.jsx)(n.a,{href:"/docs/auth/kubernetes#discovering-the-service-account-issuer",children:"these instructions"})," for looking up the issuer for a given Kubernetes cluster."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"caveats",children:"Caveats"}),"\n",(0,s.jsxs)(n.p,{children:["If OpenBao is running in a Kubernetes Pod, the ",(0,s.jsx)(n.code,{children:"kubernetes_ca_cert"})," and\n",(0,s.jsx)(n.code,{children:"token_reviewer_jwt"})," parameters will automatically default to the local CA cert\n(",(0,s.jsx)(n.code,{children:"/var/run/secrets/kubernetes.io/serviceaccount/ca.crt"}),") and local service\naccount JWT (",(0,s.jsx)(n.code,{children:"/var/run/secrets/kubernetes.io/serviceaccount/token"}),"). This\nbehavior may be disabled by setting ",(0,s.jsx)(n.code,{children:"disable_local_ca_jwt"})," to ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["When OpenBao is running in a non-Kubernetes environment, either\n",(0,s.jsx)(n.code,{children:"kubernetes_ca_cert"})," or ",(0,s.jsx)(n.code,{children:"pem_keys"})," must be set by the user."]}),"\n",(0,s.jsx)(n.h3,{id:"sample-payload",children:"Sample payload"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "kubernetes_host": "https://192.168.99.100:8443",\n  "kubernetes_ca_cert": "-----BEGIN CERTIFICATE-----\\n.....\\n-----END CERTIFICATE-----",\n  "pem_keys": "-----BEGIN CERTIFICATE-----\\n.....\\n-----END CERTIFICATE-----"\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"sample-request",children:"Sample request"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/auth/kubernetes/config\n'})}),"\n",(0,s.jsx)(n.h2,{id:"read-config",children:"Read config"}),"\n",(0,s.jsx)(n.p,{children:"Returns the previously configured config, excluding credentials."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"GET"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"/auth/kubernetes/config"})})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"sample-request-1",children:"Sample request"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    http://127.0.0.1:8200/v1/auth/kubernetes/config\n'})}),"\n",(0,s.jsx)(n.h3,{id:"sample-response",children:"Sample response"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "data":{\n    "kubernetes_host": "https://192.168.99.100:8443",\n    "kubernetes_ca_cert": "-----BEGIN CERTIFICATE-----.....-----END CERTIFICATE-----",\n    "pem_keys": ["-----BEGIN CERTIFICATE-----.....", .....],\n    "disable_local_ca_jwt": false\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"createupdate-role",children:"Create/Update role"}),"\n",(0,s.jsx)(n.p,{children:"Registers a role in the auth method. Role types have specific entities\nthat can perform login operations against this endpoint. Constraints specific\nto the role type must be set on the role. These are applied to the authenticated\nentities attempting to login."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"POST"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"/auth/kubernetes/role/:name"})})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"})," ",(0,s.jsx)(n.code,{children:"(string: <required>)"})," - Name of the role."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"bound_service_account_names"})," ",(0,s.jsx)(n.code,{children:"(array: <required>)"}),' - List of service account\nnames able to access this role. If set to "*" all names are allowed.']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"bound_service_account_namespaces"})," ",(0,s.jsx)(n.code,{children:"(array: <required>)"}),' - List of namespaces\nallowed to access this role. If set to "*" all namespaces are allowed.']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"audience"})," ",(0,s.jsx)(n.code,{children:'(string: "")'})," - Optional Audience claim to verify in the JWT."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"alias_name_source"})," ",(0,s.jsx)(n.code,{children:'(string: "serviceaccount_uid")'})," - Configures how identity aliases are generated.\nValid choices are: ",(0,s.jsx)(n.code,{children:"serviceaccount_uid"}),", ",(0,s.jsx)(n.code,{children:"serviceaccount_name"}),"\nWhen ",(0,s.jsx)(n.code,{children:"serviceaccount_uid"})," is specified, the machine generated UID from the service account will be used as the identity alias name.\nWhen ",(0,s.jsx)(n.code,{children:"serviceaccount_name"})," is specified, the service account's namespace and name will be used as the identity alias name e.g ",(0,s.jsx)(n.code,{children:"openbao/openbao-auth"}),".\nWhile it is strongly advised that you use ",(0,s.jsx)(n.code,{children:"serviceaccount_uid"}),", you may also use ",(0,s.jsx)(n.code,{children:"serviceaccount_name"})," in cases where\nyou want to set the alias ahead of time, and the risks are mitigated or otherwise acceptable given your use case.\nIt is very important to limit who is able to delete/create service accounts within a given cluster.\nSee the ",(0,s.jsx)(n.a,{href:"/api-docs/secret/identity/entity-alias#create-an-entity-alias",children:"Create an Entity Alias"})," document\nwhich further expands on the potential security implications mentioned above."]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"token_ttl"})," ",(0,s.jsx)(n.code,{children:'(integer: 0 or string: "")'})," - The incremental lifetime for\ngenerated tokens. This current value of this will be referenced at renewal\ntime."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"token_max_ttl"})," ",(0,s.jsx)(n.code,{children:'(integer: 0 or string: "")'})," - The maximum lifetime for\ngenerated tokens. This current value of this will be referenced at renewal\ntime."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"token_policies"})," ",(0,s.jsx)(n.code,{children:'(array: [] or comma-delimited string: "")'})," - List of\ntoken policies to encode onto generated tokens. Depending on the auth method, this\nlist may be supplemented by user/group/other values."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"policies"})," ",(0,s.jsx)(n.code,{children:'(array: [] or comma-delimited string: "")'})," - DEPRECATED: Please\nuse the ",(0,s.jsx)(n.code,{children:"token_policies"})," parameter instead. List of token policies to encode\nonto generated tokens. Depending on the auth method, this list may be\nsupplemented by user/group/other values."]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"token_bound_cidrs"})," ",(0,s.jsx)(n.code,{children:'(array: [] or comma-delimited string: "")'})," - List of\nCIDR blocks; if set, specifies blocks of IP addresses which can authenticate\nsuccessfully, and ties the resulting token to these blocks as well."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"token_explicit_max_ttl"})," ",(0,s.jsx)(n.code,{children:'(integer: 0 or string: "")'})," - If set, will encode\nan ",(0,s.jsx)(n.a,{href:"/docs/concepts/tokens#token-time-to-live-periodic-tokens-and-explicit-max-ttls",children:"explicit max\nTTL"}),"\nonto the token. This is a hard cap even if ",(0,s.jsx)(n.code,{children:"token_ttl"})," and ",(0,s.jsx)(n.code,{children:"token_max_ttl"}),"\nwould otherwise allow a renewal."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"token_no_default_policy"})," ",(0,s.jsx)(n.code,{children:"(bool: false)"})," - If set, the ",(0,s.jsx)(n.code,{children:"default"})," policy will\nnot be set on generated tokens; otherwise it will be added to the policies set\nin ",(0,s.jsx)(n.code,{children:"token_policies"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"token_num_uses"})," ",(0,s.jsx)(n.code,{children:"(integer: 0)"})," - The maximum number of times a generated\ntoken may be used (within its lifetime); 0 means unlimited.\nIf you require the token to have the ability to create child tokens,\nyou will need to set this value to 0."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"token_period"})," ",(0,s.jsx)(n.code,{children:'(integer: 0 or string: "")'})," - The maximum allowed ",(0,s.jsx)(n.a,{href:"/docs/concepts/tokens#token-time-to-live-periodic-tokens-and-explicit-max-ttls",children:"period"})," value when a periodic token is requested from this role."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"token_type"})," ",(0,s.jsx)(n.code,{children:'(string: "")'})," - The type of token that should be generated. Can\nbe ",(0,s.jsx)(n.code,{children:"service"}),", ",(0,s.jsx)(n.code,{children:"batch"}),", or ",(0,s.jsx)(n.code,{children:"default"})," to use the mount's tuned default (which\nunless changed will be ",(0,s.jsx)(n.code,{children:"service"})," tokens). For token store roles, there are two\nadditional possibilities: ",(0,s.jsx)(n.code,{children:"default-service"})," and ",(0,s.jsx)(n.code,{children:"default-batch"})," which specify\nthe type to return unless the client requests a different type at generation\ntime."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"sample-payload-1",children:"Sample payload"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "bound_service_account_names": "openbao-auth",\n  "bound_service_account_namespaces": "default",\n  "policies": ["dev", "prod"],\n  "max_ttl": 1800000\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"sample-request-2",children:"Sample request"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/auth/kubernetes/role/dev-role\n'})}),"\n",(0,s.jsx)(n.h2,{id:"read-role",children:"Read role"}),"\n",(0,s.jsx)(n.p,{children:"Returns the previously registered role configuration."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"GET"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"/auth/kubernetes/role/:name"})})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"})," ",(0,s.jsx)(n.code,{children:"(string: <required>)"})," - Name of the role."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"sample-request-3",children:"Sample request"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    http://127.0.0.1:8200/v1/auth/kubernetes/role/dev-role\n'})}),"\n",(0,s.jsx)(n.h3,{id:"sample-response-1",children:"Sample response"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "bound_service_account_names": "openbao-auth",\n    "bound_service_account_namespaces": "default",\n    "max_ttl": 1800000,\n    "ttl": 0,\n    "period": 0,\n    "policies": ["dev", "prod"]\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"list-roles",children:"List roles"}),"\n",(0,s.jsx)(n.p,{children:"Lists all the roles that are registered with the auth method."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"LIST"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"/auth/kubernetes/role"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"GET"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"/auth/kubernetes/role?list=true"})})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"sample-request-4",children:"Sample request"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request LIST \\\n    http://127.0.0.1:8200/v1/auth/kubernetes/role\n'})}),"\n",(0,s.jsx)(n.h3,{id:"sample-response-2",children:"Sample response"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "keys": ["dev-role", "prod-role"]\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"delete-role",children:"Delete role"}),"\n",(0,s.jsx)(n.p,{children:"Deletes the previously registered role."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"DELETE"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"/auth/kubernetes/role/:role"})})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"parameters-3",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"role"})," ",(0,s.jsx)(n.code,{children:"(string: <required>)"})," - Name of the role."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"sample-request-5",children:"Sample request"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request DELETE \\\n    http://127.0.0.1:8200/v1/auth/kubernetes/role/dev-role\n'})}),"\n",(0,s.jsx)(n.h2,{id:"login",children:"Login"}),"\n",(0,s.jsx)(n.p,{children:"Fetch a token. This endpoint takes a signed JSON Web Token (JWT) and\na role name for some entity. It verifies the JWT signature to authenticate that\nentity and then authorizes the entity for the given role."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"POST"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"/auth/kubernetes/login"})})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"parameters-4",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"role"})," ",(0,s.jsx)(n.code,{children:"(string: <required>)"})," - Name of the role against which the login is being\nattempted."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"jwt"})," ",(0,s.jsx)(n.code,{children:"(string: <required>)"})," - Signed ",(0,s.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7519",children:"JSON Web\nToken"})," (JWT) for authenticating a service\naccount."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"sample-payload-2",children:"Sample payload"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "role": "dev-role",\n  "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"sample-request-6",children:"Sample request"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ curl \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/auth/kubernetes/login\n"})}),"\n",(0,s.jsx)(n.h3,{id:"sample-response-3",children:"Sample response"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "auth": {\n    "client_token": "62b858f9-529c-6b26-e0b8-0457b6aacdb4",\n    "accessor": "afa306d0-be3d-c8d2-b0d7-2676e1c0d9b4",\n    "policies": ["default"],\n    "metadata": {\n      "role": "test",\n      "service_account_name": "openbao-auth",\n      "service_account_namespace": "default",\n      "service_account_secret_name": "openbao-auth-token-pd21c",\n      "service_account_uid": "aa9aa8ff-98d0-11e7-9bb7-0800276d99bf"\n    },\n    "lease_duration": 2764800,\n    "renewable": true\n  }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(96540);const i={},l=s.createContext(i);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);