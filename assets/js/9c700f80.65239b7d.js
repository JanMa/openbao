"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7512],{62127:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=t(74848),s=t(28453);const r={layout:"docs",page_title:"PKI - Secrets Engines",description:"The PKI secrets engine for OpenBao generates TLS certificates."},a="PKI secrets engine",o={id:"secrets/pki/index",title:"PKI secrets engine",description:"The PKI secrets engine for OpenBao generates TLS certificates.",source:"@site/content/docs/secrets/pki/index.mdx",sourceDirName:"secrets/pki",slug:"/secrets/pki/",permalink:"/openbao/docs/secrets/pki/",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/secrets/pki/index.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"PKI - Secrets Engines",description:"The PKI secrets engine for OpenBao generates TLS certificates."},sidebar:"docs",previous:{title:"LDAP secrets engine",permalink:"/openbao/docs/secrets/ldap"},next:{title:"PKI secrets engine - setup and usage",permalink:"/openbao/docs/secrets/pki/setup"}},c={},l=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Tutorial",id:"tutorial",level:2},{value:"API",id:"api",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"pki-secrets-engine",children:"PKI secrets engine"}),"\n",(0,i.jsxs)(n.p,{children:["~> ",(0,i.jsx)(n.strong,{children:"Note"}),": This engine can use external X.509 certificates as part of TLS or signature validation.\nVerifying signatures against X.509 certificates that use SHA-1 is deprecated and is no longer\nusable without a workaround. See the\n",(0,i.jsx)(n.a,{href:"/docs/deprecation/faq#q-what-is-the-impact-of-removing-support-for-x-509-certificates-with-signatures-that-use-sha-1",children:"deprecation FAQ"}),"\nfor more information."]}),"\n",(0,i.jsxs)(n.p,{children:["-> ",(0,i.jsx)(n.strong,{children:"OpenBao as Consul CA provider:"})," If you are using OpenBao as a Connect CA,\nrun a Consul version greater than 1.12.8."]}),"\n",(0,i.jsx)(n.p,{children:"The PKI secrets engine generates dynamic X.509 certificates. With this secrets\nengine, services can get certificates without going through the usual manual\nprocess of generating a private key and CSR, submitting to a CA, and waiting for\na verification and signing process to complete. OpenBao's built-in authentication\nand authorization mechanisms provide the verification functionality."}),"\n",(0,i.jsx)(n.p,{children:"By keeping TTLs relatively short, revocations are less likely to be needed,\nkeeping CRLs short and helping the secrets engine scale to large workloads. This\nin turn allows each instance of a running application to have a unique\ncertificate, eliminating sharing and the accompanying pain of revocation and\nrollover."}),"\n",(0,i.jsx)(n.p,{children:"In addition, by allowing revocation to mostly be forgone, this secrets engine\nallows for ephemeral certificates. Certificates can be fetched and stored in\nmemory upon application startup and discarded upon shutdown, without ever being\nwritten to disk."}),"\n",(0,i.jsx)(n.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,i.jsx)(n.p,{children:"The PKI Secrets Engine documentation is split into the following pieces:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/secrets/pki",children:"Overview"})," - this document."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/secrets/pki/setup",children:"Setup and Usage"})," - a brief description of setting\nup and using the PKI Secrets Engine to issue certificates."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/secrets/pki/quick-start-root-ca",children:"Quick Start - Root CA Setup"})," - A\nquick start guide for setting up a root CA."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/secrets/pki/quick-start-intermediate-ca",children:"Quick Start - Intermediate CA Setup"})," - A\nquick start guide for setting up an intermediate CA."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/secrets/pki/considerations",children:"Considerations"})," - A list of helpful\nconsiderations to keep in mind when using and operating the PKI Secrets\nEngine."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/secrets/pki/troubleshooting-acme",children:"Troubleshooting ACME"})," - A list of\nadvice for troubleshooting failures with ACME issuance and OpenBao PKI."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/secrets/pki/rotation-primitives",children:"Rotation Primitives"})," - A document\nwhich explains different types of certificates used to achieve rotation."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"tutorial",children:"Tutorial"}),"\n",(0,i.jsx)(n.p,{children:"Refer to the following tutorials for PKI secrets engine usage examples:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/tutorials/secrets-management/pki-engine",children:"Build Your Own Certificate Authority (CA)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/tutorials/secrets-management/pki-engine-external-ca",children:"Build Certificate Authority (CA) in Vault with an offline Root"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/tutorials/secrets-management/pki-acme-caddy",children:"Enable ACME with PKI secrets engine"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/tutorials/secrets-management/pki-unified-crl-ocsp-cross-cluster",children:"PKI Unified CRL and OCSP With Cross Cluster\nRevocation"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/tutorials/kubernetes/kubernetes-cert-manager",children:"Configure OpenBao as a Certificate Manager in Kubernetes with\nHelm"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/tutorials/secrets-management/vault-pki-nomad",children:"Generate mTLS Certificates for Nomad using\nOpenBao"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,i.jsxs)(n.p,{children:["The PKI secrets engine has a full HTTP API. Please see the\n",(0,i.jsx)(n.a,{href:"/api-docs/secret/pki",children:"PKI secrets engine API"})," for more\ndetails."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(96540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);