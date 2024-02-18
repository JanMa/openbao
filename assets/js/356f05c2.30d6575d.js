"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4725],{61630:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=n(74848),l=n(28453);const i={sidebar_label:"TLS Certificates",description:"This is the API documentation for the OpenBao TLS Certificate authentication\nmethod."},r="TLS certificate auth method (API)",a={id:"auth/cert",title:"TLS certificate auth method (API)",description:"This is the API documentation for the OpenBao TLS Certificate authentication\nmethod.",source:"@site/content/api-docs/auth/cert.mdx",sourceDirName:"auth",slug:"/auth/cert",permalink:"/openbao/api-docs/auth/cert",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/api-docs/auth/cert.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"TLS Certificates",description:"This is the API documentation for the OpenBao TLS Certificate authentication\nmethod."},sidebar:"api",previous:{title:"RADIUS",permalink:"/openbao/api-docs/auth/radius"},next:{title:"Tokens",permalink:"/openbao/api-docs/auth/token"}},c={},d=[{value:"Create CA certificate role",id:"create-ca-certificate-role",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Sample payload",id:"sample-payload",level:3},{value:"Sample request",id:"sample-request",level:3},{value:"Read CA certificate role",id:"read-ca-certificate-role",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Sample request",id:"sample-request-1",level:3},{value:"Sample response",id:"sample-response",level:3},{value:"List certificate roles",id:"list-certificate-roles",level:2},{value:"Sample request",id:"sample-request-2",level:3},{value:"Sample response",id:"sample-response-1",level:3},{value:"Delete certificate role",id:"delete-certificate-role",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Sample request",id:"sample-request-3",level:3},{value:"List CRLs",id:"list-crls",level:2},{value:"Sample request",id:"sample-request-4",level:3},{value:"Sample response",id:"sample-response-2",level:3},{value:"Create CRL",id:"create-crl",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"Sample payload",id:"sample-payload-1",level:3},{value:"Sample request",id:"sample-request-5",level:3},{value:"Read CRL",id:"read-crl",level:2},{value:"Parameters",id:"parameters-4",level:3},{value:"Sample request",id:"sample-request-6",level:3},{value:"Sample response",id:"sample-response-3",level:3},{value:"Delete CRL",id:"delete-crl",level:2},{value:"Parameters",id:"parameters-5",level:3},{value:"Sample request",id:"sample-request-7",level:3},{value:"Configure TLS certificate method",id:"configure-tls-certificate-method",level:2},{value:"Parameters",id:"parameters-6",level:3},{value:"Sample payload",id:"sample-payload-2",level:3},{value:"Sample request",id:"sample-request-8",level:3},{value:"Login with TLS certificate method",id:"login-with-tls-certificate-method",level:2},{value:"Parameters",id:"parameters-7",level:3},{value:"Sample payload",id:"sample-payload-3",level:3},{value:"Sample request",id:"sample-request-9",level:3},{value:"Sample response",id:"sample-response-4",level:3}];function o(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"tls-certificate-auth-method-api",children:"TLS certificate auth method (API)"}),"\n",(0,s.jsxs)(t.p,{children:["~> ",(0,s.jsx)(t.strong,{children:"Note"}),": This engine can use external X.509 certificates as part of TLS or signature validation.\nVerifying signatures against X.509 certificates that use SHA-1 is deprecated and is no longer\nusable without a workaround. See the\n",(0,s.jsx)(t.a,{href:"/docs/deprecation/faq#q-what-is-the-impact-of-removing-support-for-x-509-certificates-with-signatures-that-use-sha-1",children:"deprecation FAQ"}),"\nfor more information."]}),"\n",(0,s.jsxs)(t.p,{children:["This is the API documentation for the OpenBao TLS Certificate authentication\nmethod. For general information about the usage and operation of the TLS\nCertificate method, please see the ",(0,s.jsx)(t.a,{href:"/docs/auth/cert",children:"OpenBao TLS Certificate method documentation"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["This documentation assumes the TLS Certificate method is mounted at the\n",(0,s.jsx)(t.code,{children:"/auth/cert"})," path in OpenBao. Since it is possible to enable auth methods at any\nlocation, please update your API calls accordingly."]}),"\n",(0,s.jsx)(t.h2,{id:"create-ca-certificate-role",children:"Create CA certificate role"}),"\n",(0,s.jsx)(t.p,{children:"Sets a CA cert and associated parameters in a role name."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Method"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"POST"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"/auth/cert/certs/:name"})})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"name"})," ",(0,s.jsx)(t.code,{children:"(string: <required>)"})," - The name of the certificate role."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"certificate"})," ",(0,s.jsx)(t.code,{children:"(string: <required>)"})," - The PEM-format CA certificate."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"allowed_names"})," ",(0,s.jsx)(t.code,{children:'(string: "")'})," - DEPRECATED: Please use the individual\n",(0,s.jsx)(t.code,{children:"allowed_X_sans"})," parameters instead. Constrain the Common and Alternative\nNames in the client certificate with a ",(0,s.jsx)(t.a,{href:"https://github.com/ryanuber/go-glob/blob/master/README.md#example",children:"globbed pattern"}),". Value is\na comma-separated list of patterns. Authentication requires at least one Name\nmatching at least one pattern. If not set, defaults to allowing all names."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"allowed_common_names"})," ",(0,s.jsx)(t.code,{children:'(string: "" or array: [])'})," - Constrain the Common\nNames in the client certificate with a ",(0,s.jsx)(t.a,{href:"https://github.com/ryanuber/go-glob/blob/master/README.md#example",children:"globbed pattern"}),". Value is\na comma-separated list of patterns. Authentication requires at least one Name\nmatching at least one pattern. If not set, defaults to allowing all names."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"allowed_dns_sans"})," ",(0,s.jsx)(t.code,{children:'(string: "" or array: [])'})," - Constrain the Alternative\nNames in the client certificate with a ",(0,s.jsx)(t.a,{href:"https://github.com/ryanuber/go-glob/blob/master/README.md#example",children:"globbed pattern"}),". Value is\na comma-separated list of patterns. Authentication requires at least one DNS\nmatching at least one pattern. If not set, defaults to allowing all dns."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"allowed_email_sans"})," ",(0,s.jsx)(t.code,{children:'(string: "" or array: [])'})," - Constrain the Alternative\nNames in the client certificate with a ",(0,s.jsx)(t.a,{href:"https://github.com/ryanuber/go-glob/blob/master/README.md#example",children:"globbed pattern"}),". Value is\na comma-separated list of patterns. Authentication requires at least one\nEmail matching at least one pattern. If not set, defaults to allowing all\nemails."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"allowed_uri_sans"})," ",(0,s.jsx)(t.code,{children:'(string: "" or array: [])'})," - Constrain the Alternative\nNames in the client certificate with a ",(0,s.jsx)(t.a,{href:"https://github.com/ryanuber/go-glob/blob/master/README.md#example",children:"globbed pattern"}),". Value is\na comma-separated list of URI patterns. Authentication requires at least one\nURI matching at least one pattern. If not set, defaults to allowing all URIs."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"allowed_organizational_units"})," ",(0,s.jsx)(t.code,{children:'(string: "" or array: [])'})," - Constrain the\nOrganizational Units (OU) in the client certificate with a ",(0,s.jsx)(t.a,{href:"https://github.com/ryanuber/go-glob/blob/master/README.md#example",children:"globbed pattern"}),". Value is\na comma-separated list of OU patterns. Authentication requires at least one\nOU matching at least one pattern. If not set, defaults to allowing all OUs."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"required_extensions"})," ",(0,s.jsx)(t.code,{children:'(string: "" or array: [])'})," - Require specific Custom\nExtension OIDs to exist and match the pattern. Value is a comma separated\nstring or array of ",(0,s.jsx)(t.code,{children:"oid:value"}),". Expects the extension value to be some type\nof ASN1 encoded string. All conditions ",(0,s.jsx)(t.em,{children:"must"})," be met. Supports globbing on\n",(0,s.jsx)(t.code,{children:"value"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"allowed_metadata_extensions"})," ",(0,s.jsx)(t.code,{children:"(array:[])"})," - A comma separated string or\narray of oid extensions. Upon successful authentication, these extensions\nwill be added as metadata if they are present in the certificate. The\nmetadata key will be the string consisting of the oid numbers separated\nby a dash (-) instead of a dot (.) to allow usage in ACL templates."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"ocsp_enabled"})," ",(0,s.jsx)(t.code,{children:"(bool: false)"})," - If enabled, validate certificates' revocation\nstatus using OCSP."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"ocsp_ca_certificates"})," ",(0,s.jsx)(t.code,{children:'(string: "")'})," Any additional CA certificates needed to\nverify OCSP responses.  Provided as base64 encoded PEM data."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"ocsp_servers_override"})," ",(0,s.jsx)(t.code,{children:"(array: [])"}),": A comma-separated list of OCSP server\naddresses.  If unset, the OCSP server is determined from the AuthorityInformationAccess\nextension on the certificate being inspected."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"ocsp_fail_open"})," ",(0,s.jsx)(t.code,{children:"(bool: false)"})," - If true and an OCSP response cannot be fetched\nor is of an unknown status, the login will proceed as if the certificate has not\nbeen revoked."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"ocsp_query_all_servers"})," ",(0,s.jsx)(t.code,{children:"(bool: false)"})," - If set to true, rather than accepting\nthe first successful OCSP response, query all servers and consider the certificate\nvalid only if all servers agree."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"display_name"})," ",(0,s.jsx)(t.code,{children:'(string: "")'})," - The ",(0,s.jsx)(t.code,{children:"display_name"})," to set on tokens issued\nwhen authenticating against this CA certificate. If not set, defaults to the\nname of the role."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"token_ttl"})," ",(0,s.jsx)(t.code,{children:'(integer: 0 or string: "")'})," - The incremental lifetime for\ngenerated tokens. This current value of this will be referenced at renewal\ntime."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"token_max_ttl"})," ",(0,s.jsx)(t.code,{children:'(integer: 0 or string: "")'})," - The maximum lifetime for\ngenerated tokens. This current value of this will be referenced at renewal\ntime."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"token_policies"})," ",(0,s.jsx)(t.code,{children:'(array: [] or comma-delimited string: "")'})," - List of\ntoken policies to encode onto generated tokens. Depending on the auth method, this\nlist may be supplemented by user/group/other values."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"policies"})," ",(0,s.jsx)(t.code,{children:'(array: [] or comma-delimited string: "")'})," - DEPRECATED: Please\nuse the ",(0,s.jsx)(t.code,{children:"token_policies"})," parameter instead. List of token policies to encode\nonto generated tokens. Depending on the auth method, this list may be\nsupplemented by user/group/other values."]}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"token_bound_cidrs"})," ",(0,s.jsx)(t.code,{children:'(array: [] or comma-delimited string: "")'})," - List of\nCIDR blocks; if set, specifies blocks of IP addresses which can authenticate\nsuccessfully, and ties the resulting token to these blocks as well."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"token_explicit_max_ttl"})," ",(0,s.jsx)(t.code,{children:'(integer: 0 or string: "")'})," - If set, will encode\nan ",(0,s.jsx)(t.a,{href:"/docs/concepts/tokens#token-time-to-live-periodic-tokens-and-explicit-max-ttls",children:"explicit max\nTTL"}),"\nonto the token. This is a hard cap even if ",(0,s.jsx)(t.code,{children:"token_ttl"})," and ",(0,s.jsx)(t.code,{children:"token_max_ttl"}),"\nwould otherwise allow a renewal."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"token_no_default_policy"})," ",(0,s.jsx)(t.code,{children:"(bool: false)"})," - If set, the ",(0,s.jsx)(t.code,{children:"default"})," policy will\nnot be set on generated tokens; otherwise it will be added to the policies set\nin ",(0,s.jsx)(t.code,{children:"token_policies"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"token_num_uses"})," ",(0,s.jsx)(t.code,{children:"(integer: 0)"})," - The maximum number of times a generated\ntoken may be used (within its lifetime); 0 means unlimited.\nIf you require the token to have the ability to create child tokens,\nyou will need to set this value to 0."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"token_period"})," ",(0,s.jsx)(t.code,{children:'(integer: 0 or string: "")'})," - The maximum allowed ",(0,s.jsx)(t.a,{href:"/docs/concepts/tokens#token-time-to-live-periodic-tokens-and-explicit-max-ttls",children:"period"})," value when a periodic token is requested from this role."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"token_type"})," ",(0,s.jsx)(t.code,{children:'(string: "")'})," - The type of token that should be generated. Can\nbe ",(0,s.jsx)(t.code,{children:"service"}),", ",(0,s.jsx)(t.code,{children:"batch"}),", or ",(0,s.jsx)(t.code,{children:"default"})," to use the mount's tuned default (which\nunless changed will be ",(0,s.jsx)(t.code,{children:"service"})," tokens). For token store roles, there are two\nadditional possibilities: ",(0,s.jsx)(t.code,{children:"default-service"})," and ",(0,s.jsx)(t.code,{children:"default-batch"})," which specify\nthe type to return unless the client requests a different type at generation\ntime."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"sample-payload",children:"Sample payload"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "certificate": "-----BEGIN CERTIFICATE-----\\nMIIEtzCCA5+.......ZRtAfQ6r\\nwlW975rYa1ZqEdA=\\n-----END CERTIFICATE-----",\n  "display_name": "test",\n  "bound_cidrs": ["127.0.0.1/32", "128.252.0.0/16"]\n}\n'})}),"\n",(0,s.jsx)(t.h3,{id:"sample-request",children:"Sample request"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    --cacert openbao-ca.pem \\\n    --data @payload.json\n    https://127.0.0.1:8200/v1/auth/cert/certs/test-ca\n'})}),"\n",(0,s.jsx)(t.h2,{id:"read-ca-certificate-role",children:"Read CA certificate role"}),"\n",(0,s.jsx)(t.p,{children:"Gets information associated with the named role."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Method"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"GET"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"/auth/cert/certs/:name"})})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"name"})," ",(0,s.jsx)(t.code,{children:"(string: <required>)"})," - The name of the certificate role."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"sample-request-1",children:"Sample request"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --cacert openbao-ca.pem \\\n    https://127.0.0.1:8200/v1/auth/cert/certs/test-ca\n'})}),"\n",(0,s.jsx)(t.h3,{id:"sample-response",children:"Sample response"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "lease_id": "",\n  "renewable": false,\n  "lease_duration": 0,\n  "data": {\n    "certificate": "-----BEGIN CERTIFICATE-----\\nMIIEtzCCA5+.......ZRtAfQ6r\\nwlW975rYa1ZqEdA=\\n-----END CERTIFICATE-----",\n    "display_name": "test",\n    "policies": "",\n    "allowed_names": "",\n    "required_extensions": "",\n    "ttl": 2764800,\n    "max_ttl": 2764800,\n    "period": 0\n  },\n  "warnings": null,\n  "auth": null\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"list-certificate-roles",children:"List certificate roles"}),"\n",(0,s.jsx)(t.p,{children:"Lists configured certificate names."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Method"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"LIST"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"/auth/cert/certs"})})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"sample-request-2",children:"Sample request"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request LIST \\\n    --cacert openbao-ca.pem \\\n    https://127.0.0.1:8200/v1/auth/cert/certs\n'})}),"\n",(0,s.jsx)(t.h3,{id:"sample-response-1",children:"Sample response"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "auth": null,\n  "warnings": null,\n  "wrap_info": null,\n  "data": {\n    "keys": ["cert1", "cert2"]\n  },\n  "lease_duration": 0,\n  "renewable": false,\n  "lease_id": ""\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"delete-certificate-role",children:"Delete certificate role"}),"\n",(0,s.jsx)(t.p,{children:"Deletes the named role and CA cert from the method mount."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Method"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"DELETE"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"/auth/cert/certs/:name"})})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"name"})," ",(0,s.jsx)(t.code,{children:"(string: <required>)"})," - The name of the certificate role."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"sample-request-3",children:"Sample request"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request DELETE \\\n    --cacert openbao-ca.pem \\\n    https://127.0.0.1:8200/v1/auth/cert/certs/cert1\n'})}),"\n",(0,s.jsx)(t.h2,{id:"list-crls",children:"List CRLs"}),"\n",(0,s.jsx)(t.p,{children:"Lists configured certificate revocation lists."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Method"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"LIST"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"/auth/cert/crls"})})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"sample-request-4",children:"Sample request"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request LIST \\\n    --cacert openbao-ca.pem \\\n    https://127.0.0.1:8200/v1/auth/cert/crls\n'})}),"\n",(0,s.jsx)(t.h3,{id:"sample-response-2",children:"Sample response"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "auth": null,\n  "warnings": null,\n  "wrap_info": null,\n  "data": {\n    "keys": ["crl1", "crl2"]\n  },\n  "lease_duration": 0,\n  "renewable": false,\n  "lease_id": ""\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"create-crl",children:"Create CRL"}),"\n",(0,s.jsx)(t.p,{children:"Sets a named CRL."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Method"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"POST"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"/auth/cert/crls/:name"})})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"parameters-3",children:"Parameters"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"name"})," ",(0,s.jsx)(t.code,{children:"(string: <required>)"})," - The name of the CRL."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"crl"})," ",(0,s.jsx)(t.code,{children:'(string: "")'})," - The PEM format CRL."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"url"})," ",(0,s.jsx)(t.code,{children:'(string: "")'})," - The URL of a CRL distribution point."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"}),": Either 'crl' or 'url' parameters must be provided, if both are provided, 'crl' is used."]}),"\n",(0,s.jsx)(t.h3,{id:"sample-payload-1",children:"Sample payload"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "crl": "-----BEGIN X509 CRL-----\\n...\\n-----END X509 CRL-----"\n}\n'})}),"\n",(0,s.jsx)(t.h3,{id:"sample-request-5",children:"Sample request"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    --cacert openbao-ca.pem \\\n    --data @payload.json \\\n    https://127.0.0.1:8200/v1/auth/cert/crls/custom-crl\n'})}),"\n",(0,s.jsx)(t.h2,{id:"read-crl",children:"Read CRL"}),"\n",(0,s.jsx)(t.p,{children:"Gets information associated with the named CRL (currently, the serial\nnumbers contained within). As the serials can be integers up to an\narbitrary size, these are returned as strings."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Method"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"GET"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"/auth/cert/crls/:name"})})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"parameters-4",children:"Parameters"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"name"})," ",(0,s.jsx)(t.code,{children:"(string: <required>)"})," - The name of the CRL."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"sample-request-6",children:"Sample request"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --cacert openbao-ca.pem \\\n    https://127.0.0.1:8200/v1/auth/cert/crls/custom-crl\n'})}),"\n",(0,s.jsx)(t.h3,{id:"sample-response-3",children:"Sample response"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "auth": null,\n  "data": {\n    "serials": {\n      "13": {}\n    }\n  },\n  "lease_duration": 0,\n  "lease_id": "",\n  "renewable": false,\n  "warnings": null\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"delete-crl",children:"Delete CRL"}),"\n",(0,s.jsx)(t.p,{children:"Deletes the named CRL from the auth method mount."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Method"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"DELETE"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"/auth/cert/crls/:name"})})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"parameters-5",children:"Parameters"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"name"})," ",(0,s.jsx)(t.code,{children:"(string: <required>)"})," - The name of the CRL."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"sample-request-7",children:"Sample request"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request DELETE \\\n    --cacert openbao-ca.pem \\\n    https://127.0.0.1:8200/v1/auth/cert/crls/cert1\n'})}),"\n",(0,s.jsx)(t.h2,{id:"configure-tls-certificate-method",children:"Configure TLS certificate method"}),"\n",(0,s.jsx)(t.p,{children:"Configuration options for the method."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Method"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"POST"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"/auth/cert/config"})})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"parameters-6",children:"Parameters"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"disable_binding"})," ",(0,s.jsx)(t.code,{children:"(boolean: false)"})," - If set, during renewal, skips the\nmatching of presented client identity with the client identity used during\nlogin."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"enable_identity_alias_metadata"})," ",(0,s.jsx)(t.code,{children:"(boolean: false)"})," - If set, metadata of\nthe certificate including the metadata corresponding to\n",(0,s.jsx)(t.code,{children:"allowed_metadata_extensions"})," will be stored in the alias"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"ocsp_cache_size"})," ",(0,s.jsx)(t.code,{children:"(int: 100)"})," - The size of the OCSP response LRU cache.  Note\nthat this cache is used for all configured certificates."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"sample-payload-2",children:"Sample payload"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "disable_binding": true\n}\n'})}),"\n",(0,s.jsx)(t.h3,{id:"sample-request-8",children:"Sample request"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    --cacert openbao-ca.pem \\\n    --data @payload.json \\\n    https://127.0.0.1:8200/v1/auth/cert/certs/cert1\n'})}),"\n",(0,s.jsx)(t.h2,{id:"login-with-tls-certificate-method",children:"Login with TLS certificate method"}),"\n",(0,s.jsxs)(t.p,{children:["Log in and fetch a token. If there is a valid chain to a CA configured in the\nmethod and all role constraints are matched, a token will be issued. If the\ncertificate has DNS SANs in it, each of those will be verified. If Common Name\nis required to be verified, then it should be a fully qualified DNS domain name\nand must be duplicated as a DNS SAN (see\n",(0,s.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc6125#section-2.3",children:"https://tools.ietf.org/html/rfc6125#section-2.3"}),")"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Method"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"POST"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"/auth/cert/login"})})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"parameters-7",children:"Parameters"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"name"})," ",(0,s.jsx)(t.code,{children:'(string: "")'})," - Authenticate against only the named certificate role,\nreturning its policy list if successful. If not set, defaults to trying all\ncertificate roles and returning any one that matches."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"sample-payload-3",children:"Sample payload"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "name": "cert1"\n}\n'})}),"\n",(0,s.jsx)(t.h3,{id:"sample-request-9",children:"Sample request"}),"\n",(0,s.jsxs)(t.p,{children:["~> ",(0,s.jsx)(t.strong,{children:"NOTE"})," The ",(0,s.jsx)(t.code,{children:"--cacert"})," value used here is for the OpenBao TLS Listener CA\ncertificate, not the CA that issued the client authentication certificate. This\ncan be omitted if the CA used to issue the OpenBao server certificate is trusted\nby the local system executing this command."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell-session",children:"$ curl \\\n    --request POST \\\n    --cacert openbao-ca.pem \\\n    --cert cert.pem \\\n    --key key.pem \\\n    --data @payload.json \\\n    https://127.0.0.1:8200/v1/auth/cert/login\n"})}),"\n",(0,s.jsx)(t.h3,{id:"sample-response-4",children:"Sample response"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "auth": {\n    "client_token": "cf95f87d-f95b-47ff-b1f5-ba7bff850425",\n    "policies": ["web", "stage"],\n    "lease_duration": 3600,\n    "renewable": true\n  }\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(96540);const l={},i=s.createContext(l);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);