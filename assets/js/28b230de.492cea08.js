"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[557],{5431:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var s=i(74848),t=i(28453);const a={sidebar_label:"OCI KMS",description:"The OCI KMS seal configures OpenBao to use OCI KMS as the seal wrapping\nmechanism."},o="ocikms seal",c={id:"configuration/seal/ocikms",title:"ocikms seal",description:"The OCI KMS seal configures OpenBao to use OCI KMS as the seal wrapping\nmechanism.",source:"@site/content/docs/configuration/seal/ocikms.mdx",sourceDirName:"configuration/seal",slug:"/configuration/seal/ocikms",permalink:"/openbao/docs/configuration/seal/ocikms",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/configuration/seal/ocikms.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"OCI KMS",description:"The OCI KMS seal configures OpenBao to use OCI KMS as the seal wrapping\nmechanism."},sidebar:"docs",previous:{title:"GCP Cloud KMS",permalink:"/openbao/docs/configuration/seal/gcpckms"},next:{title:"OpenBao Transit",permalink:"/openbao/docs/configuration/seal/transit"}},r={},l=[{value:"<code>ocikms</code> example",id:"ocikms-example",level:2},{value:"<code>ocikms</code> parameters",id:"ocikms-parameters",level:2},{value:"Authentication",id:"authentication",level:2},{value:"<code>ocikms</code> rotate OCI KMS master key",id:"ocikms-rotate-oci-kms-master-key",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"ocikms-seal",children:[(0,s.jsx)(n.code,{children:"ocikms"})," seal"]}),"\n",(0,s.jsx)(n.p,{children:"The OCI KMS seal configures OpenBao to use OCI KMS as the seal wrapping mechanism.\nThe OCI KMS seal is activated by one of the following:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The presence of a ",(0,s.jsx)(n.code,{children:'seal "ocikms"'})," block in OpenBao's configuration file"]}),"\n",(0,s.jsxs)(n.li,{children:["The presence of the environment variable ",(0,s.jsx)(n.code,{children:"VAULT_SEAL_TYPE"})," set to ",(0,s.jsx)(n.code,{children:"ocikms"}),". If\nenabling via environment variable, all other required values specific to OCI\nKMS (i.e. ",(0,s.jsx)(n.code,{children:"VAULT_OCIKMS_SEAL_KEY_ID"}),", ",(0,s.jsx)(n.code,{children:"VAULT_OCIKMS_CRYPTO_ENDPOINT"})," ",(0,s.jsx)(n.code,{children:"VAULT_OCIKMS_MANAGEMENT_ENDPOINT"}),") must be also supplied, as well as all\nother OCI-related ",(0,s.jsx)(n.a,{href:"https://docs.cloud.oracle.com/iaas/Content/API/Concepts/sdkconfig.htm",children:"environment variables"})," that lends to successful\nauthentication."]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"ocikms-example",children:[(0,s.jsx)(n.code,{children:"ocikms"})," example"]}),"\n",(0,s.jsx)(n.p,{children:"This example shows configuring the OCI KMS seal through the OpenBao configuration file\nby providing all the required values:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",children:'seal "ocikms" {\n    key_id               = "ocid1.key.oc1.iad.afnxza26aag4s.abzwkljsbapzb2nrha5nt3s7s7p42ctcrcj72vn3kq5qx"\n    crypto_endpoint      = "https://afnxza26aag4s-crypto.kms.us-ashburn-1.oraclecloud.com"\n    management_endpoint  = "https://afnxza26aag4s-management.kms.us-ashburn-1.oraclecloud.com"\n    auth_type_api_key    = "true"\n}\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"ocikms-parameters",children:[(0,s.jsx)(n.code,{children:"ocikms"})," parameters"]}),"\n",(0,s.jsxs)(n.p,{children:["These parameters apply to the ",(0,s.jsx)(n.code,{children:"seal"})," stanza in the OpenBao configuration file:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"key_id"})," ",(0,s.jsx)(n.code,{children:"(string: <required>)"}),": The OCI KMS key ID to use. May also be\nspecified by the ",(0,s.jsx)(n.code,{children:"VAULT_OCIKMS_SEAL_KEY_ID"})," environment variable."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"crypto_endpoint"})," ",(0,s.jsx)(n.code,{children:"(string: <required>)"}),": The OCI KMS cryptographic endpoint (or data plane endpoint)\nto be used to make OCI KMS encryption/decryption requests. May also be specified by the ",(0,s.jsx)(n.code,{children:"VAULT_OCIKMS_CRYPTO_ENDPOINT"})," environment\nvariable."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"management_endpoint"})," ",(0,s.jsx)(n.code,{children:"(string: <required>)"}),": The OCI KMS management endpoint (or control plane endpoint)\nto be used to make OCI KMS key management requests. May also be specified by the ",(0,s.jsx)(n.code,{children:"VAULT_OCIKMS_MANAGEMENT_ENDPOINT"})," environment\nvariable."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"auth_type_api_key"})," ",(0,s.jsx)(n.code,{children:"(boolean: false)"}),": Specifies if using API key to authenticate to OCI KMS service.\nIf it is ",(0,s.jsx)(n.code,{children:"false"}),", OpenBao authenticates using the instance principal from the compute instance. See Authentication section for details. Default is ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"disabled"})," ",(0,s.jsx)(n.code,{children:'(string: "")'}),": Set this to ",(0,s.jsx)(n.code,{children:"true"})," if OpenBao is migrating from an auto seal configuration. Otherwise, set to ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Refer to the ",(0,s.jsx)(n.a,{href:"/docs/concepts/seal#seal-migration",children:"Seal Migration"})," documentation for more information about the seal migration process."]}),"\n",(0,s.jsx)(n.h2,{id:"authentication",children:"Authentication"}),"\n",(0,s.jsx)(n.p,{children:"Authentication-related values must be provided, either as environment\nvariables or as configuration parameters."}),"\n",(0,s.jsxs)(n.p,{children:["If you want to use Instance Principal, add section configuration below and add further configuration settings as detailed in the ",(0,s.jsx)(n.a,{href:"/docs/configuration/",children:"configuration docs"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",children:'seal "ocikms" {\n    crypto_endpoint     = "<kms-crypto-endpoint>"\n    management_endpoint = "<kms-management-endpoint>"\n    key_id              = "<kms-key-id>"\n}\n# Notes:\n# crypto_endpoint can be replaced by VAULT_OCIKMS_CRYPTO_ENDPOINT environment var\n# management_endpoint can be replaced by VAULT_OCIKMS_MANAGEMENT_ENDPOINT environment var\n# key_id can be replaced by VAULT_OCIKMS_SEAL_KEY_ID environment var\n'})}),"\n",(0,s.jsxs)(n.p,{children:["If you want to use User Principal, the plugin will take the API key you defined for OCI SDK, often under ",(0,s.jsx)(n.code,{children:"~/.oci/config"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",children:'seal "ocikms" {\n    auth_type_api_key   = true\n    crypto_endpoint     = "<kms-crypto-endpoint>"\n    management_endpoint = "<kms-management-endpoint>"\n    key_id              = "<kms-key-id>"\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"To grant permission for a compute instance to use OCI KMS service, write policies for KMS access."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Create a ",(0,s.jsx)(n.a,{href:"https://docs.cloud.oracle.com/iaas/Content/Identity/Tasks/managingdynamicgroups.htm",children:"Dynamic Group"})," in your OCI tenancy."]}),"\n",(0,s.jsxs)(n.li,{children:["Create a policy that allows the Dynamic Group to use or manage keys from OCI KMS. There are multiple ways to write these policies. The ",(0,s.jsx)(n.a,{href:"https://docs.cloud.oracle.com/iaas/Content/Identity/Concepts/policies.htm",children:"OCI Identity Policy"})," can be used as a reference or starting point."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The most common policy allows a dynamic group of tenant A to use KMS's keys in tenant B:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"define tenancy tenantB as <tenantB-ocid>\n\nendorse dynamic-group <dynamic-group-name> to use keys in tenancy tenantB\n\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"define tenancy tenantA as <tenantA-ocid>\n\ndefine dynamic-group <dynamic-group-name> as <dynamic-group-ocid>\n\nadmit dynamic-group <dynamic-group-name> of tenancy tenantA to use keys in compartment <key-compartment>\n\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"ocikms-rotate-oci-kms-master-key",children:[(0,s.jsx)(n.code,{children:"ocikms"})," rotate OCI KMS master key"]}),"\n",(0,s.jsxs)(n.p,{children:["For the ",(0,s.jsx)(n.a,{href:"https://docs.cloud.oracle.com/iaas/Content/KeyManagement/Tasks/managingkeys.htm",children:"OCI KMS key rotation feature"}),", OCI KMS will create a new version of key internally. This process is independent from OpenBao, and OpenBao still uses the same ",(0,s.jsx)(n.code,{children:"key_id"})," without any interruption."]}),"\n",(0,s.jsxs)(n.p,{children:["If you want to change the ",(0,s.jsx)(n.code,{children:"key_id"}),": migrate to Shamir, change ",(0,s.jsx)(n.code,{children:"key_id"}),", and then migrate to OCI KMS with the new ",(0,s.jsx)(n.code,{children:"key_id"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var s=i(96540);const t={},a=s.createContext(t);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);