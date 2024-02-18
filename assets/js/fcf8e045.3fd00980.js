"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6142],{6776:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=s(74848),t=s(28453);const r={sidebar_label:"OpenBao Transit",description:"The Transit seal configures OpenBao to use OpenBao's Transit Secret Engine as the\nautoseal mechanism."},a="transit seal",o={id:"configuration/seal/transit",title:"transit seal",description:"The Transit seal configures OpenBao to use OpenBao's Transit Secret Engine as the\nautoseal mechanism.",source:"@site/content/docs/configuration/seal/transit.mdx",sourceDirName:"configuration/seal",slug:"/configuration/seal/transit",permalink:"/docs/configuration/seal/transit",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/configuration/seal/transit.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"OpenBao Transit",description:"The Transit seal configures OpenBao to use OpenBao's Transit Secret Engine as the\nautoseal mechanism."},sidebar:"docs",previous:{title:"OCI KMS",permalink:"/docs/configuration/seal/ocikms"},next:{title:"Overview",permalink:"/docs/configuration/service-registration/"}},c={},l=[{value:"<code>transit</code> example",id:"transit-example",level:2},{value:"<code>transit</code> parameters",id:"transit-parameters",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Key rotation",id:"key-rotation",level:2},{value:"Tutorial",id:"tutorial",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"transit-seal",children:[(0,i.jsx)(n.code,{children:"transit"})," seal"]}),"\n",(0,i.jsx)(n.p,{children:"The Transit seal configures OpenBao to use OpenBao's Transit Secret Engine as the\nautoseal mechanism.\nThe Transit seal is activated by one of the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The presence of a ",(0,i.jsx)(n.code,{children:'seal "transit"'})," block in OpenBao's configuration file"]}),"\n",(0,i.jsxs)(n.li,{children:["The presence of the environment variable ",(0,i.jsx)(n.code,{children:"VAULT_SEAL_TYPE"})," set to ",(0,i.jsx)(n.code,{children:"transit"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"transit-example",children:[(0,i.jsx)(n.code,{children:"transit"})," example"]}),"\n",(0,i.jsx)(n.p,{children:"This example shows configuring Transit seal through the OpenBao configuration file\nby providing all the required values:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-hcl",children:'seal "transit" {\n  address            = "https://openbao:8200"\n  token              = "s.Qf1s5zigZ4OX6akYjQXJC1jY"\n  disable_renewal    = "false"\n\n  // Key configuration\n  key_name           = "transit_key_name"\n  mount_path         = "transit/"\n  namespace          = "ns1/"\n\n  // TLS Configuration\n  tls_ca_cert        = "/etc/openbao/ca_cert.pem"\n  tls_client_cert    = "/etc/openbao/client_cert.pem"\n  tls_client_key     = "/etc/openbao/ca_cert.pem"\n  tls_server_name    = "openbao"\n  tls_skip_verify    = "false"\n}\n'})}),"\n",(0,i.jsxs)(n.h2,{id:"transit-parameters",children:[(0,i.jsx)(n.code,{children:"transit"})," parameters"]}),"\n",(0,i.jsxs)(n.p,{children:["These parameters apply to the ",(0,i.jsx)(n.code,{children:"seal"})," stanza in the OpenBao configuration file:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"address"})," ",(0,i.jsx)(n.code,{children:"(string: <required>)"}),": The full address to the OpenBao cluster.\nThis may also be specified by the ",(0,i.jsx)(n.code,{children:"VAULT_ADDR"})," environment variable."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"token"})," ",(0,i.jsx)(n.code,{children:"(string: <required>)"}),": The OpenBao token to use. This may also be\nspecified by the ",(0,i.jsx)(n.code,{children:"VAULT_TOKEN"})," environment variable."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"key_name"})," ",(0,i.jsx)(n.code,{children:"(string: <required>)"}),": The transit key to use for encryption and\ndecryption. This may also be supplied using the ",(0,i.jsx)(n.code,{children:"VAULT_TRANSIT_SEAL_KEY_NAME"}),"\nenvironment variable."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"mount_path"})," ",(0,i.jsx)(n.code,{children:"(string: <required>)"}),": The mount path to the transit secret engine.\nThis may also be supplied using the ",(0,i.jsx)(n.code,{children:"VAULT_TRANSIT_SEAL_MOUNT_PATH"})," environment\nvariable."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"namespace"})," ",(0,i.jsx)(n.code,{children:'(string: "")'}),": The namespace path to the transit secret engine.\nThis may also be supplied using the ",(0,i.jsx)(n.code,{children:"VAULT_NAMESPACE"})," environment variable."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"disable_renewal"})," ",(0,i.jsx)(n.code,{children:'(string: "false")'}),": Disables the automatic renewal of the token\nin case the lifecycle of the token is managed with some other mechanism outside of\nOpenBao, such as OpenBao Agent. This may also be specified using the\n",(0,i.jsx)(n.code,{children:"VAULT_TRANSIT_SEAL_DISABLE_RENEWAL"})," environment variable."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"tls_ca_cert"})," ",(0,i.jsx)(n.code,{children:'(string: "")'}),": Specifies the path to the CA certificate file used\nfor communication with the OpenBao server. This may also be specified using the\n",(0,i.jsx)(n.code,{children:"VAULT_CACERT"})," environment variable."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"tls_client_cert"})," ",(0,i.jsx)(n.code,{children:'(string: "")'}),": Specifies the path to the client certificate\nfor communication with the OpenBao server. This may also be specified using the\n",(0,i.jsx)(n.code,{children:"VAULT_CLIENT_CERT"})," environment variable."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"tls_client_key"})," ",(0,i.jsx)(n.code,{children:'(string: "")'}),": Specifies the path to the private key for\ncommunication with the OpenBao server. This may also be specified using the\n",(0,i.jsx)(n.code,{children:"VAULT_CLIENT_KEY"})," environment variable."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"tls_server_name"})," ",(0,i.jsx)(n.code,{children:'(string: "")'}),": Name to use as the SNI host when connecting\nto the OpenBao server via TLS. This may also be specified via the\n",(0,i.jsx)(n.code,{children:"VAULT_TLS_SERVER_NAME"})," environment variable."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"tls_skip_verify"})," ",(0,i.jsx)(n.code,{children:'(bool: "false")'}),": Disable verification of TLS certificates.\nUsing this option is highly discouraged and decreases the security of data\ntransmissions to and from the OpenBao server. This may also be specified using the\n",(0,i.jsx)(n.code,{children:"VAULT_SKIP_VERIFY"})," environment variable."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"disabled"})," ",(0,i.jsx)(n.code,{children:'(string: "")'}),": Set this to ",(0,i.jsx)(n.code,{children:"true"})," if OpenBao is migrating from an auto seal configuration. Otherwise, set to ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Refer to the ",(0,i.jsx)(n.a,{href:"/docs/concepts/seal#seal-migration",children:"Seal Migration"})," documentation for more information about the seal migration process."]}),"\n",(0,i.jsx)(n.h2,{id:"authentication",children:"Authentication"}),"\n",(0,i.jsx)(n.p,{children:"Authentication-related values must be provided, either as environment\nvariables or as configuration parameters."}),"\n",(0,i.jsxs)(n.p,{children:["~> ",(0,i.jsx)(n.strong,{children:"Note:"})," Although the configuration file allows you to pass in\n",(0,i.jsx)(n.code,{children:"VAULT_TOKEN"})," as part of the seal's parameters, it is ",(0,i.jsx)(n.em,{children:"strongly"})," recommended\nto set these values via environment variables."]}),"\n",(0,i.jsx)(n.p,{children:"The OpenBao token used to authenticate needs the following permissions on the\ntransit key:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-hcl",children:'path "<mount path>/encrypt/<key name>" {\n  capabilities = ["update"]\n}\n\npath "<mount path>/decrypt/<key name>" {\n  capabilities = ["update"]\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Other considerations for the token used:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["it should probably be an ",(0,i.jsx)(n.a,{href:"/docs/concepts/tokens#token-hierarchies-and-orphan-tokens",children:"orphan token"}),",\notherwise when the parent token expires or gets revoked the seal will break."]}),"\n",(0,i.jsxs)(n.li,{children:["consider making it a ",(0,i.jsx)(n.a,{href:"/docs/concepts/tokens#periodic-tokens",children:"periodic token"}),"\nand not setting an explicit max TTL, otherwise at some point it will cease to be renewable."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"key-rotation",children:"Key rotation"}),"\n",(0,i.jsxs)(n.p,{children:["This seal supports key rotation using the Transit Secret Engine's key rotation endpoints. See\n",(0,i.jsx)(n.a,{href:"/api-docs/secret/transit#rotate-key",children:"doc"}),". Old keys must not be disabled or deleted and are\nused to decrypt older data."]}),"\n",(0,i.jsx)(n.h2,{id:"tutorial",children:"Tutorial"}),"\n",(0,i.jsxs)(n.p,{children:["Refer to the ",(0,i.jsx)(n.a,{href:"/tutorials/auto-unseal/autounseal-transit",children:"Auto-unseal using Transit Secrets Engine"}),"\ntutorial to learn how use the transit secrets engine to automatically unseal OpenBao."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var i=s(96540);const t={},r=i.createContext(t);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);