"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6242],{54337:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>a});var s=i(74848),o=i(28453);const r={sidebar_label:"GCP Cloud KMS",description:"The GCP Cloud KMS seal configures OpenBao to use GCP Cloud KMS as the seal wrapping\nmechanism."},c="gcpckms seal",t={id:"configuration/seal/gcpckms",title:"gcpckms seal",description:"The GCP Cloud KMS seal configures OpenBao to use GCP Cloud KMS as the seal wrapping\nmechanism.",source:"@site/content/docs/configuration/seal/gcpckms.mdx",sourceDirName:"configuration/seal",slug:"/configuration/seal/gcpckms",permalink:"/openbao/docs/configuration/seal/gcpckms",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/configuration/seal/gcpckms.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"GCP Cloud KMS",description:"The GCP Cloud KMS seal configures OpenBao to use GCP Cloud KMS as the seal wrapping\nmechanism."},sidebar:"docs",previous:{title:"Azure Key Vault",permalink:"/openbao/docs/configuration/seal/azurekeyvault"},next:{title:"OCI KMS",permalink:"/openbao/docs/configuration/seal/ocikms"}},l={},a=[{value:"<code>gcpckms</code> example",id:"gcpckms-example",level:2},{value:"<code>gcpckms</code> parameters",id:"gcpckms-parameters",level:2},{value:"Authentication &amp; permissions",id:"authentication--permissions",level:2},{value:"<code>gcpckms</code> environment variables",id:"gcpckms-environment-variables",level:2},{value:"Key rotation",id:"key-rotation",level:2},{value:"Tutorial",id:"tutorial",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"gcpckms-seal",children:[(0,s.jsx)(n.code,{children:"gcpckms"})," seal"]}),"\n",(0,s.jsx)(n.p,{children:"The GCP Cloud KMS seal configures OpenBao to use GCP Cloud KMS as the seal\nwrapping mechanism. The GCP Cloud KMS seal is activated by one of the following:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The presence of a ",(0,s.jsx)(n.code,{children:'seal "gcpckms"'})," block in OpenBao's configuration file."]}),"\n",(0,s.jsxs)(n.li,{children:["The presence of the environment variable ",(0,s.jsx)(n.code,{children:"VAULT_SEAL_TYPE"})," set to ",(0,s.jsx)(n.code,{children:"gcpckms"}),".\nIf enabling via environment variable, all other required values specific to\nCloud KMS (i.e. ",(0,s.jsx)(n.code,{children:"VAULT_GCPCKMS_SEAL_KEY_RING"}),", etc.) must be also supplied, as\nwell as all other GCP-related environment variables that lends to successful\nauthentication (i.e. ",(0,s.jsx)(n.code,{children:"GOOGLE_PROJECT"}),", etc.)."]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"gcpckms-example",children:[(0,s.jsx)(n.code,{children:"gcpckms"})," example"]}),"\n",(0,s.jsx)(n.p,{children:"This example shows configuring GCP Cloud KMS seal through the OpenBao\nconfiguration file by providing all the required values:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",children:'seal "gcpckms" {\n  credentials = "/usr/openbao/openbao-project-user-creds.json"\n  project     = "openbao-project"\n  region      = "global"\n  key_ring    = "openbao-keyring"\n  crypto_key  = "openbao-key"\n}\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"gcpckms-parameters",children:[(0,s.jsx)(n.code,{children:"gcpckms"})," parameters"]}),"\n",(0,s.jsxs)(n.p,{children:["These parameters apply to the ",(0,s.jsx)(n.code,{children:"seal"})," stanza in the OpenBao configuration file:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"credentials"})," ",(0,s.jsx)(n.code,{children:"(string: <required>)"}),": The path to the credentials JSON file\nto use. May be also specified by the ",(0,s.jsx)(n.code,{children:"GOOGLE_CREDENTIALS"})," or\n",(0,s.jsx)(n.code,{children:"GOOGLE_APPLICATION_CREDENTIALS"})," environment variable or set automatically if\nrunning under Google App Engine, Google Compute Engine or Google Kubernetes\nEngine."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"project"})," ",(0,s.jsx)(n.code,{children:"(string: <required>)"}),": The GCP project ID to use. May also be\nspecified by the ",(0,s.jsx)(n.code,{children:"GOOGLE_PROJECT"})," environment variable."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"region"})," ",(0,s.jsx)(n.code,{children:'(string: "us-east-1")'}),": The GCP region/location where the key ring\nlives. May also be specified by the ",(0,s.jsx)(n.code,{children:"GOOGLE_REGION"})," environment variable."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"key_ring"})," ",(0,s.jsx)(n.code,{children:"(string: <required>)"}),": The GCP CKMS key ring to use. May also be\nspecified by the ",(0,s.jsx)(n.code,{children:"VAULT_GCPCKMS_SEAL_KEY_RING"})," environment variable."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"crypto_key"})," ",(0,s.jsx)(n.code,{children:"(string: <required>)"}),": The GCP CKMS crypto key to use for\nencryption and decryption. May also be specified by the\n",(0,s.jsx)(n.code,{children:"VAULT_GCPCKMS_SEAL_CRYPTO_KEY"})," environment variable."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"disabled"})," ",(0,s.jsx)(n.code,{children:'(string: "")'}),": Set this to ",(0,s.jsx)(n.code,{children:"true"})," if OpenBao is migrating from an auto seal configuration. Otherwise, set to ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Refer to the ",(0,s.jsx)(n.a,{href:"/docs/concepts/seal#seal-migration",children:"Seal Migration"})," documentation for more information about the seal migration process."]}),"\n",(0,s.jsx)(n.h2,{id:"authentication--permissions",children:"Authentication & permissions"}),"\n",(0,s.jsx)(n.p,{children:"Authentication-related values must be provided, either as environment\nvariables or as configuration parameters."}),"\n",(0,s.jsx)(n.p,{children:"GCP authentication values:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"GOOGLE_CREDENTIALS"})," or ",(0,s.jsx)(n.code,{children:"GOOGLE_APPLICATION_CREDENTIALS"})]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"GOOGLE_PROJECT"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"GOOGLE_REGION"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Note: The client uses the official Google SDK and will use the specified\ncredentials, environment credentials, or ",(0,s.jsx)(n.a,{href:"https://developers.google.com/identity/protocols/application-default-credentials",children:"application default\ncredentials"}),"\nin that order, if the above GCP specific values are not provided."]}),"\n",(0,s.jsx)(n.p,{children:"The service account needs the following minimum permissions on the crypto key:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"cloudkms.cryptoKeyVersions.useToEncrypt\ncloudkms.cryptoKeyVersions.useToDecrypt\ncloudkms.cryptoKeys.get\n"})}),"\n",(0,s.jsx)(n.p,{children:"These permissions can be described with the following role:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"roles/cloudkms.cryptoKeyEncrypterDecrypter\ncloudkms.cryptoKeys.get\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"cloudkms.cryptoKeys.get"})," permission is used for retrieving metadata information of keys from CloudKMS within this engine initialization process."]}),"\n",(0,s.jsxs)(n.h2,{id:"gcpckms-environment-variables",children:[(0,s.jsx)(n.code,{children:"gcpckms"})," environment variables"]}),"\n",(0,s.jsx)(n.p,{children:"Alternatively, the GCP Cloud KMS seal can be activated by providing the following\nenvironment variables:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"VAULT_SEAL_TYPE"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"VAULT_GCPCKMS_SEAL_KEY_RING"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"VAULT_GCPCKMS_SEAL_CRYPTO_KEY"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"key-rotation",children:"Key rotation"}),"\n",(0,s.jsxs)(n.p,{children:["This seal supports rotating keys defined in Google Cloud KMS\n",(0,s.jsx)(n.a,{href:"https://cloud.google.com/kms/docs/rotating-keys",children:"doc"}),". Both scheduled rotation and manual\nrotation is supported for CKMS since the key information. Old keys version must not be\ndisabled or deleted and are used to decrypt older data. Any new or updated data will be\nencrypted with the primary key version."]}),"\n",(0,s.jsx)(n.h2,{id:"tutorial",children:"Tutorial"}),"\n",(0,s.jsxs)(n.p,{children:["Refer to the ",(0,s.jsx)(n.a,{href:"/tutorials/auto-unseal/autounseal-gcp-kms",children:"Auto-unseal using GCP Cloud KMS"}),"\nguide for a step-by-step tutorial."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>t});var s=i(96540);const o={},r=s.createContext(o);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);