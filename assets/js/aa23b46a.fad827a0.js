"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1829],{46614:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var t=s(74848),r=s(28453);const l={sidebar_label:"Kubernetes",description:"This is the API documentation for the OpenBao Kubernetes secrets engine."},a="Kubernetes secrets engine (API)",i={id:"secret/kubernetes",title:"Kubernetes secrets engine (API)",description:"This is the API documentation for the OpenBao Kubernetes secrets engine.",source:"@site/content/api-docs/secret/kubernetes.mdx",sourceDirName:"secret",slug:"/secret/kubernetes",permalink:"/openbao/api-docs/secret/kubernetes",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/api-docs/secret/kubernetes.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Kubernetes",description:"This is the API documentation for the OpenBao Kubernetes secrets engine."},sidebar:"api",previous:{title:"K/V Version 2",permalink:"/openbao/api-docs/secret/kv/kv-v2"},next:{title:"LDAP",permalink:"/openbao/api-docs/secret/ldap"}},c={},d=[{value:"Write configuration",id:"write-configuration",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Sample payload",id:"sample-payload",level:3},{value:"Sample request",id:"sample-request",level:3},{value:"Read configuration",id:"read-configuration",level:2},{value:"Sample request",id:"sample-request-1",level:3},{value:"Sample response",id:"sample-response",level:3},{value:"Delete configuration",id:"delete-configuration",level:2},{value:"Sample request",id:"sample-request-2",level:3},{value:"Create role",id:"create-role",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Sample payload 1",id:"sample-payload-1",level:3},{value:"Sample payload 2",id:"sample-payload-2",level:3},{value:"Sample payload 3",id:"sample-payload-3",level:3},{value:"Sample payload 4",id:"sample-payload-4",level:3},{value:"Sample payload 5",id:"sample-payload-5",level:3},{value:"Sample request",id:"sample-request-3",level:3},{value:"Read role",id:"read-role",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Sample request",id:"sample-request-4",level:3},{value:"Sample response",id:"sample-response-1",level:3},{value:"List roles",id:"list-roles",level:2},{value:"Sample request",id:"sample-request-5",level:3},{value:"Sample response",id:"sample-response-2",level:3},{value:"Delete role",id:"delete-role",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"Sample request",id:"sample-request-6",level:3},{value:"Generate credentials",id:"generate-credentials",level:2},{value:"Parameters",id:"parameters-4",level:3},{value:"Sample payload",id:"sample-payload-6",level:3},{value:"Sample request",id:"sample-request-7",level:3},{value:"Sample response",id:"sample-response-3",level:3}];function o(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"kubernetes-secrets-engine-api",children:"Kubernetes secrets engine (API)"}),"\n",(0,t.jsxs)(n.p,{children:["~> ",(0,t.jsx)(n.strong,{children:"Note"}),": This engine can use external X.509 certificates as part of TLS or signature validation.\nVerifying signatures against X.509 certificates that use SHA-1 is deprecated and is no longer\nusable without a workaround. See the\n",(0,t.jsx)(n.a,{href:"/docs/deprecation/faq#q-what-is-the-impact-of-removing-support-for-x-509-certificates-with-signatures-that-use-sha-1",children:"deprecation FAQ"}),"\nfor more information."]}),"\n",(0,t.jsxs)(n.p,{children:["This is the API documentation for the OpenBao Kubernetes secrets engine. To\nlearn more about the usage and operation, see the\n",(0,t.jsx)(n.a,{href:"/docs/secrets/kubernetes",children:"Kubernetes secrets engine documentation"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["This documentation assumes the Kubernetes secrets engine is mounted at the\n",(0,t.jsx)(n.code,{children:"/kubernetes"})," path in OpenBao. Since it is possible to enable secrets engines at\nany location, please update your API calls accordingly."]}),"\n",(0,t.jsx)(n.h2,{id:"write-configuration",children:"Write configuration"}),"\n",(0,t.jsx)(n.p,{children:"This endpoint configures the plugin with the necessary information to reach the\nKubernetes API and authenticate with it."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"POST"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"/kubernetes/config"})})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"kubernetes_host"})," ",(0,t.jsx)(n.code,{children:'(string: "https://$KUBERNETES_SERVICE_HOST:KUBERNETES_SERVICE_PORT_HTTPS")'})," -\nKubernetes API URL to connect to. Must be specified if the standard pod environment\nvariables ",(0,t.jsx)(n.code,{children:"KUBERNETES_SERVICE_HOST"})," or ",(0,t.jsx)(n.code,{children:"KUBERNETES_SERVICE_PORT_HTTPS"})," are not set."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"kubernetes_ca_cert"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - PEM encoded CA certificate to verify the\nKubernetes API server certificate. Defaults to the local pod's CA certificate\nat ",(0,t.jsx)(n.code,{children:"/var/run/secrets/kubernetes.io/serviceaccount/ca.crt"})," if found, or\notherwise the host's root CA set."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"service_account_jwt"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - The JSON web token of the service account\nused by the secrets engine to manage Kubernetes credentials. Defaults to the local pod's\nJWT at ",(0,t.jsx)(n.code,{children:"/var/run/secrets/kubernetes.io/serviceaccount/token"})," if found."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"disable_local_ca_jwt"})," ",(0,t.jsx)(n.code,{children:"(bool: false)"})," - Disable defaulting to the local CA\ncertificate and service account JWT when running in a Kubernetes pod."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"sample-payload",children:"Sample payload"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "kubernetes_host": "https://192.168.99.100:8443",\n  "kubernetes_ca_cert": "-----BEGIN CERTIFICATE-----\\n.....\\n-----END CERTIFICATE-----"\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"sample-request",children:"Sample request"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/kubernetes/config\n'})}),"\n",(0,t.jsx)(n.h2,{id:"read-configuration",children:"Read configuration"}),"\n",(0,t.jsx)(n.p,{children:"Returns the config previously set, excluding credentials."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"GET"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"/kubernetes/config"})})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"sample-request-1",children:"Sample request"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    http://127.0.0.1:8200/v1/kubernetes/config\n'})}),"\n",(0,t.jsx)(n.h3,{id:"sample-response",children:"Sample response"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "data":{\n    "kubernetes_host": "https://192.168.99.100:8443",\n    "kubernetes_ca_cert": "-----BEGIN CERTIFICATE-----.....-----END CERTIFICATE-----",\n    "disable_local_ca_jwt": false\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"delete-configuration",children:"Delete configuration"}),"\n",(0,t.jsx)(n.p,{children:"Deletes the config previously set."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"DELETE"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"/kubernetes/config"})})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"sample-request-2",children:"Sample request"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request DELETE\n    http://127.0.0.1:8200/v1/kubernetes/config\n'})}),"\n",(0,t.jsx)(n.h2,{id:"create-role",children:"Create role"}),"\n",(0,t.jsx)(n.p,{children:"A role configures what service account tokens can be generated, and what\npermissions will be attached to them. The permissions attached to a service\naccount token depend on the Kubernetes roles applied to its service account."}),"\n",(0,t.jsx)(n.p,{children:"Each Kubernetes secrets engine role can operate in one of 3 modes. Each successive\nmode generates more Kubernetes objects, and therefore requires more permissions\nfor OpenBao's own Kubernetes service account."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Generate a service account token for a pre-existing service account - set ",(0,t.jsx)(n.code,{children:"service_account_name"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Generate a service account ",(0,t.jsx)(n.em,{children:"and"})," a token, and bind a pre-existing Kubernetes role - set ",(0,t.jsx)(n.code,{children:"kubernetes_role_name"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Generate a Kubernetes role, role binding, service account and token - set ",(0,t.jsx)(n.code,{children:"generated_role_rules"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Only one of ",(0,t.jsx)(n.code,{children:"service_account_name"}),", ",(0,t.jsx)(n.code,{children:"kubernetes_role_name"})," or\n",(0,t.jsx)(n.code,{children:"generated_role_rules"})," can be set."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"POST"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"/kubernetes/roles/:name"})})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"name"})," ",(0,t.jsx)(n.code,{children:"(string: <required>)"})," - The name of the role. Included in the path."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"allowed_kubernetes_namespaces"})," ",(0,t.jsx)(n.code,{children:"(array: [])"})," - The list of Kubernetes\nnamespaces this role can generate credentials for. If set to ",(0,t.jsx)(n.code,{children:'"*"'})," all\nnamespaces are allowed. If set with ",(0,t.jsx)(n.code,{children:"allowed_kubernetes_namespace_selector"}),", the conditions are\n",(0,t.jsx)(n.code,{children:"OR"}),"ed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"allowed_kubernetes_namespace_selector"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - A label selector for Kubernetes\nnamespaces in which credentials can be generated. Accepts either a JSON or YAML object. The value\nshould be of type\n",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#labelselector-v1-meta",children:"LabelSelector"}),"\nas illustrated in ",(0,t.jsx)(n.a,{href:"/api-docs/secret/kubernetes#sample-payload-4",children:"Sample Payload 4"})," and\n",(0,t.jsx)(n.a,{href:"/api-docs/secret/kubernetes#sample-payload-5",children:"Sample Payload 5"})," below.\nIf set with ",(0,t.jsx)(n.code,{children:"allowed_kubernetes_namespaces"}),", the conditions are ",(0,t.jsx)(n.code,{children:"OR"}),"ed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"token_max_ttl"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - The maximum TTL for generated Kubernetes\ntokens, specified in seconds or as a Go duration format string, e.g. ",(0,t.jsx)(n.code,{children:'"1h"'}),".\nIf not set or set to 0, the ",(0,t.jsx)(n.a,{href:"/docs/configuration#max_lease_ttl",children:"system default"})," will be used."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"token_default_ttl"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - The default TTL for generated Kubernetes\ntokens, specified in seconds or as a Go duration format string, e.g. ",(0,t.jsx)(n.code,{children:'"1h"'}),".\nIf not set or set to 0, the ",(0,t.jsx)(n.a,{href:"/docs/configuration#default_lease_ttl",children:"system default"})," will be used."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"token_default_audiences"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - The default intended audiences for generated Kubernetes\ntokens, specified by a comma separated string. e.g ",(0,t.jsx)(n.code,{children:'"custom-audience-0,custom-audience-1"'}),".\nIf not set or set to ",(0,t.jsx)(n.code,{children:'""'}),", the Kubernetes cluster default for audiences of service account tokens will be used."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"service_account_name"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - The pre-existing service account to\ngenerate tokens for. Mutually exclusive with all role parameters. If set, only\na Kubernetes token will be created when credentials are requested. See the\n",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/service-accounts-admin/",children:"Kubernetes service account documentation"}),"\nfor more details on service accounts."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"kubernetes_role_name"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - The pre-existing Role or ClusterRole\nto bind a generated service account to. If set, Kubernetes token, service\naccount, and role binding objects will be created when credentials are requested.\nSee the ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/#role-and-clusterrole",children:"Kubernetes roles documentation"}),"\nfor more details on Kubernetes roles."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"kubernetes_role_type"})," ",(0,t.jsx)(n.code,{children:'(string: "Role")'})," - Specifies whether the Kubernetes\nrole is a ",(0,t.jsx)(n.code,{children:"Role"})," or ",(0,t.jsx)(n.code,{children:"ClusterRole"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"generated_role_rules"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - The Role or ClusterRole rules to use\nwhen generating a role. Accepts either JSON or YAML formatted rules. If set, the\nentire chain of Kubernetes objects will be generated when credentials are\nrequested. The value should be a ",(0,t.jsx)(n.code,{children:"rules"})," key with an array of\n",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.23/#policyrule-v1-rbac-authorization-k8s-io",children:"PolicyRule"}),"\nobjects, as illustrated in the\n",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/",children:"Kubernetes RBAC documentation"}),"\nand ",(0,t.jsx)(n.a,{href:"/api-docs/secret/kubernetes#sample-payload-3",children:"Sample Payload 3"})," below."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"name_template"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - The name template to use when generating\nservice accounts, roles and role bindings. If unset, a default template is\nused. See ",(0,t.jsx)(n.a,{href:"/docs/concepts/username-templating",children:"username templating"}),"\nfor details on how to write a custom template."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"extra_annotations"})," ",(0,t.jsx)(n.code,{children:"(map<string|string>: nil)"})," - Additional annotations to\napply to all generated Kubernetes objects. See the\n",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/",children:"Kubernetes annotations documentation"}),"\nfor more details on annotations."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"extra_labels"})," ",(0,t.jsx)(n.code,{children:"(map<string|string>: nil)"})," - Additional labels to apply to\nall generated Kubernetes objects. See the\n",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/",children:"Kubernetes labels documentation"}),"\nfor more details on labels."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"sample-payload-1",children:"Sample payload 1"}),"\n",(0,t.jsx)(n.p,{children:"To generate tokens for a pre-existing service account:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "allowed_kubernetes_namespaces": "*",\n  "service_account_name": "default",\n  "token_max_ttl": "24h"\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"sample-payload-2",children:"Sample payload 2"}),"\n",(0,t.jsx)(n.p,{children:"To generate tokens for a pre-existing ClusterRole:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "allowed_kubernetes_namespaces": "*",\n  "kubernetes_role_type": "ClusterRole",\n  "kubernetes_role_name": "openbao-k8s-secrets-role"\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"sample-payload-3",children:"Sample payload 3"}),"\n",(0,t.jsx)(n.p,{children:"To generate tokens for a defined set of Kubernetes role rules:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "allowed_kubernetes_namespaces": "*",\n  "generated_role_rules": "rules:\\n- apiGroups: [\\"\\"]\\n  resources: [\\"pods\\"]\\n  verbs: [\\"list\\"]\\n",\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Or to define the same rules as JSON:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"{\n  \"allowed_kubernetes_namespaces\": \"*\",\n  \"generated_role_rules\": \"'rules': [{'apiGroups': [''],'resources': ['pods'],'verbs': ['list']}]\"\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"sample-payload-4",children:"Sample payload 4"}),"\n",(0,t.jsx)(n.p,{children:"To generate tokens in namespaces based on a label selector for the namespaces:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "allowed_kubernetes_namespace_selector": "matchLabels:\\n  stage: prod\\n  sa-generator: openbao",\n  "service_account_name": "default",\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Or to define the same selector as JSON:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"{\n  \"allowed_kubernetes_namespace_selector\": \"'{'matchLabels':{'stage':'prod','sa-generator':'openbao'}}\",\n  \"service_account_name\": \"default\",\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"sample-payload-5",children:"Sample payload 5"}),"\n",(0,t.jsx)(n.p,{children:"To generate tokens in namespaces based on a label selector for the namespaces and via a normal\nnamespace array:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "allowed_kubernetes_namespaces": "openbao-system,testing",\n  "allowed_kubernetes_namespace_selector": "\'{\'matchLabels\':{\'stage\':\'prod\',\'sa-generator\':\'openbao\'}}",\n  "service_account_name": "default",\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In the payload above, the token can be generated for any namespace that either contains the labels\ndefined in the selector, or is named ",(0,t.jsx)(n.code,{children:"openbao-system"})," or ",(0,t.jsx)(n.code,{children:"testing"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"sample-request-3",children:"Sample request"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/kubernetes/roles/default-role\n'})}),"\n",(0,t.jsx)(n.h2,{id:"read-role",children:"Read role"}),"\n",(0,t.jsx)(n.p,{children:"Returns the previously configured role."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"GET"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"/kubernetes/roles/:name"})})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"name"})," ",(0,t.jsx)(n.code,{children:"(string: <required>)"})," - Name of the role."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"sample-request-4",children:"Sample request"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    http://127.0.0.1:8200/v1/kubernetes/role/default-role\n'})}),"\n",(0,t.jsx)(n.h3,{id:"sample-response-1",children:"Sample response"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "additional_metadata": {},\n    "allowed_kubernetes_namespaces": [\n      "*"\n    ],\n    "generated_role_rules": "",\n    "kubernetes_role_name": "",\n    "kubernetes_role_type": "Role",\n    "name": "default-role",\n    "name_template": "",\n    "service_account_name": "default",\n    "token_default_ttl": 0,\n    "token_max_ttl": 86400\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"list-roles",children:"List roles"}),"\n",(0,t.jsx)(n.p,{children:"Lists all the roles that are configured."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"LIST"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"/kubernetes/roles"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"GET"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"/kubernetes/roles?list=true"})})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"sample-request-5",children:"Sample request"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request LIST \\\n    http://127.0.0.1:8200/v1/kubernetes/roles\n'})}),"\n",(0,t.jsx)(n.h3,{id:"sample-response-2",children:"Sample response"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "keys": ["default-role", "prod-role"]\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"delete-role",children:"Delete role"}),"\n",(0,t.jsx)(n.p,{children:"Deletes the previously configured role."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"DELETE"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"/kubernetes/roles/:role"})})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"parameters-3",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"role"})," ",(0,t.jsx)(n.code,{children:"(string: <required>)"})," - Name of the role."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"sample-request-6",children:"Sample request"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request DELETE \\\n    http://127.0.0.1:8200/v1/kubernetes/role/default-role\n'})}),"\n",(0,t.jsx)(n.h2,{id:"generate-credentials",children:"Generate credentials"}),"\n",(0,t.jsx)(n.p,{children:"Generate a service account token."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"POST"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"/kubernetes/creds/:role"})})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"parameters-4",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"role"})," ",(0,t.jsx)(n.code,{children:"(string: <required>)"})," - Name of the role to generate credentials for."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"kubernetes_namespace"})," ",(0,t.jsx)(n.code,{children:"(string)"})," - The name of the Kubernetes\nnamespace in which to generate the credentials. Optional if the OpenBao role is configured\nwith a single namespace that is not ",(0,t.jsx)(n.code,{children:'"*"'}),"; required otherwise."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"cluster_role_binding"})," ",(0,t.jsx)(n.code,{children:"(bool: false)"})," - If true, generate a ClusterRoleBinding\nto grant permissions across the whole cluster instead of within a namespace.\nRequires the OpenBao role to have ",(0,t.jsx)(n.code,{children:"kubernetes_role_type"})," set to ClusterRole."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ttl"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - The TTL of the generated Kubernetes service account token,\nspecified in seconds or as a Go duration format string, e.g. ",(0,t.jsx)(n.code,{children:'"1h"'}),". The TTL\nreturned may be different from the TTL specified due to limits specified in\nKubernetes, OpenBao system-wide controls, or role-specific controls."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"audiences"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - A comma separated string containing the intended audiences\nof the generated Kubernetes service account the token, e.g.  ",(0,t.jsx)(n.code,{children:'"custom-audience-0,custom-audience-1"'}),".\nIf not set or set to ",(0,t.jsx)(n.code,{children:'""'}),",\nthe ",(0,t.jsx)(n.a,{href:"/api-docs/secret/kubernetes#token_default_audiences",children:"token_default_audiences"})," will be used."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"sample-payload-6",children:"Sample payload"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "kubernetes_namespace": "default",\n  "ttl": "1h"\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"sample-request-7",children:"Sample request"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"$ curl \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/kubernetes/creds/default-role\n"})}),"\n",(0,t.jsx)(n.h3,{id:"sample-response-3",children:"Sample response"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "request_id": "58fefc6c-5195-c17a-94f2-8f889f3df57c",\n  "lease_id": "kubernetes/creds/default-role/aWczfcfJ7NKUdiirJrPXIs38",\n  "renewable": false,\n  "lease_duration": 3600,\n  "data": {\n    "service_account_name": "default",\n    "service_account_namespace": "default",\n    "service_account_token": "eyJhbG..."\n  }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>i});var t=s(96540);const r={},l=t.createContext(r);function a(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);