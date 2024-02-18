"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6003],{95671:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=a(74848),r=a(28453);const l={layout:"docs",page_title:"HA Cluster with Raft and TLS",sidebar_current:"docs-platform-k8s-examples-ha-tls",description:"Describes how to set up a Raft HA Vault cluster with TLS certificate"},s="HA Cluster with Raft and TLS",o={id:"platform/k8s/helm/examples/ha-tls",title:"HA Cluster with Raft and TLS",description:"Describes how to set up a Raft HA Vault cluster with TLS certificate",source:"@site/content/docs/platform/k8s/helm/examples/ha-tls.mdx",sourceDirName:"platform/k8s/helm/examples",slug:"/platform/k8s/helm/examples/ha-tls",permalink:"/openbao/docs/platform/k8s/helm/examples/ha-tls",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/platform/k8s/helm/examples/ha-tls.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"HA Cluster with Raft and TLS",sidebar_current:"docs-platform-k8s-examples-ha-tls",description:"Describes how to set up a Raft HA Vault cluster with TLS certificate"},sidebar:"docs",previous:{title:"Highly available Vault cluster with integrated storage (Raft)",permalink:"/openbao/docs/platform/k8s/helm/examples/ha-with-raft"},next:{title:"Vault agent injector TLS configuration",permalink:"/openbao/docs/platform/k8s/helm/examples/injector-tls"}},i={},c=[{value:"Before you start",id:"before-you-start",level:2},{value:"Solution 1: Use auto-join and set the TLS server in your Raft configuration",id:"solution-1-use-auto-join-and-set-the-tls-server-in-your-raft-configuration",level:2},{value:"Solution 2:  Add a load balancer to your Raft configuration",id:"solution-2--add-a-load-balancer-to-your-raft-configuration",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"ha-cluster-with-raft-and-tls",children:"HA Cluster with Raft and TLS"}),"\n",(0,n.jsxs)(t.p,{children:["The overview for ",(0,n.jsx)(t.a,{href:"/docs/concepts/integrated-storage#integrated-storage-and-tls",children:"Integrated Storage and\nTLS"})," covers\nthe various options for mitigating TLS verification warnings and bootstrapping\nyour Raft cluster."]}),"\n",(0,n.jsx)(t.p,{children:"Without proper configuration, you will see the following warning before cluster\ninitialization:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:'core: join attempt failed: error="error during raft bootstrap init call: Put "https://vault-${N}.${SERVICE}:8200/v1/sys/storage/raft/bootstrap/challenge": x509: certificate is valid for ${SERVICE}, ${SERVICE}.${NAMESPACE}, ${SERVICE}.${NAMESPACE}.svc, ${SERVICE}.${NAMESPACE}.svc.cluster.local, not vault-${N}.${SERVICE}"\n'})}),"\n",(0,n.jsxs)(t.p,{children:["The examples below demonstrate two specific solutions. Both solutions ensure\nthat the common name (CN) used for the ",(0,n.jsx)(t.code,{children:"leader_api_addr"})," in the Raft stanza\nmatches the name(s) listed in the TLS certificate."]}),"\n",(0,n.jsx)(t.h2,{id:"before-you-start",children:"Before you start"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Follow the steps from the example ",(0,n.jsx)(t.a,{href:"/docs/platform/k8s/helm/examples/ha-with-raft",children:"HA Vault Cluster with Integrated\nStorage"})," to build the cluster."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Follow the examples and instructions in ",(0,n.jsx)(t.a,{href:"/docs/platform/k8s/helm/examples/standalone-tls",children:"Standalone Server with\nTLS"})," to create a TLS\ncertificate."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"solution-1-use-auto-join-and-set-the-tls-server-in-your-raft-configuration",children:"Solution 1: Use auto-join and set the TLS server in your Raft configuration"}),"\n",(0,n.jsxs)(t.p,{children:["The join warning disappears if you use auto-join and set the expected TLS\nserver name (",(0,n.jsx)(t.code,{children:"${CN}"}),") with\n",(0,n.jsx)(t.a,{href:"/docs/configuration/storage/raft#leader_tls_servername",children:(0,n.jsx)(t.code,{children:"leader_tls_servername"})}),"\nin the Raft stanza for your Vault configuration."]}),"\n",(0,n.jsx)(t.p,{children:"For example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-hcl",metastring:"{6,14,22}",children:'storage "raft" {\n  path = "/vault/data"\n\n  retry_join {\n    leader_api_addr = "https://vault-0.${SERVICE}:8200"\n    leader_tls_servername = "${CN}"\n    leader_client_cert_file = "/vault/tls/vault.crt"\n    leader_client_key_file = "/vault/tls/vault.key"\n    leader_ca_cert_file = "/vault/tls/vault.ca"\n  }\n\n  retry_join {\n    leader_api_addr = "https://vault-1.${SERVICE}:8200"\n    leader_tls_servername = "${CN}"\n    leader_client_cert_file = "/vault/tls/vault.crt"\n    leader_client_key_file = "/vault/tls/vault.key"\n    leader_ca_cert_file = "/vault/tls/vault.ca"\n  }\n\n  retry_join {\n    leader_api_addr = "https://vault-2.${SERVICE}:8200"\n    leader_tls_servername = "${CN}"\n    leader_client_cert_file = "/vault/tls/vault.crt"\n    leader_client_key_file = "/vault/tls/vault.key"\n    leader_ca_cert_file = "/vault/tls/vault.ca"\n  }\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"solution-2--add-a-load-balancer-to-your-raft-configuration",children:"Solution 2:  Add a load balancer to your Raft configuration"}),"\n",(0,n.jsxs)(t.p,{children:["If you have a load balancer for your Vault cluster, you can add a single\n",(0,n.jsx)(t.code,{children:"retry_join"})," stanza to your Raft configuration and use the load balancer\naddress for ",(0,n.jsx)(t.code,{children:"leader_api_addr"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"For example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-hcl",metastring:"{5}",children:'storage "raft" {\n  path = "/vault/data"\n\n  retry_join {\n    leader_api_addr = "https://vault-active:8200"\n    leader_client_cert_file = "/vault/tls/vault.crt"\n    leader_client_key_file = "/vault/tls/vault.key"\n    leader_ca_cert_file = "/vault/tls/vault.ca"\n  }\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>o});var n=a(96540);const r={},l=n.createContext(r);function s(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);