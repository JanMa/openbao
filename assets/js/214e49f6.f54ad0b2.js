"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2868],{23415:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var l=s(74848),t=s(28453);const i={sidebar_label:"Identity Tokens",description:"This is the API documentation for configuring, acquiring, and validating openbao issued identity tokens."},d=void 0,r={id:"secret/identity/tokens",title:"tokens",description:"This is the API documentation for configuring, acquiring, and validating openbao issued identity tokens.",source:"@site/content/api-docs/secret/identity/tokens.mdx",sourceDirName:"secret/identity",slug:"/secret/identity/tokens",permalink:"/openbao/api-docs/secret/identity/tokens",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/api-docs/secret/identity/tokens.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Identity Tokens",description:"This is the API documentation for configuring, acquiring, and validating openbao issued identity tokens."},sidebar:"api",previous:{title:"Group Alias",permalink:"/openbao/api-docs/secret/identity/group-alias"},next:{title:"Lookup",permalink:"/openbao/api-docs/secret/identity/lookup"}},a={},c=[{value:"Configure the identity tokens backend",id:"configure-the-identity-tokens-backend",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Sample payload",id:"sample-payload",level:3},{value:"Sample request",id:"sample-request",level:3},{value:"Sample response",id:"sample-response",level:3},{value:"Read configurations for the identity tokens backend",id:"read-configurations-for-the-identity-tokens-backend",level:2},{value:"Sample request",id:"sample-request-1",level:3},{value:"Sample response",id:"sample-response-1",level:3},{value:"Create a named key",id:"create-a-named-key",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Sample payload",id:"sample-payload-1",level:3},{value:"Sample request",id:"sample-request-2",level:3},{value:"Read a named key",id:"read-a-named-key",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Sample request",id:"sample-request-3",level:3},{value:"Sample response",id:"sample-response-2",level:3},{value:"Delete a named key",id:"delete-a-named-key",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"Sample request",id:"sample-request-4",level:3},{value:"List named keys",id:"list-named-keys",level:2},{value:"Sample request",id:"sample-request-5",level:3},{value:"Sample response",id:"sample-response-3",level:3},{value:"Rotate a named key",id:"rotate-a-named-key",level:2},{value:"Parameters",id:"parameters-4",level:3},{value:"Sample payload",id:"sample-payload-2",level:3},{value:"Sample request",id:"sample-request-6",level:3},{value:"Create or update a role",id:"create-or-update-a-role",level:2},{value:"Parameters",id:"parameters-5",level:3},{value:"Sample payload",id:"sample-payload-3",level:3},{value:"Sample request",id:"sample-request-7",level:3},{value:"Read a role",id:"read-a-role",level:2},{value:"Parameters",id:"parameters-6",level:3},{value:"Sample request",id:"sample-request-8",level:3},{value:"Sample response",id:"sample-response-4",level:3},{value:"Delete a role",id:"delete-a-role",level:2},{value:"Parameters",id:"parameters-7",level:3},{value:"Sample request",id:"sample-request-9",level:3},{value:"List roles",id:"list-roles",level:2},{value:"Sample request",id:"sample-request-10",level:3},{value:"Sample response",id:"sample-response-5",level:3},{value:"Generate a signed ID token",id:"generate-a-signed-id-token",level:2},{value:"Parameters",id:"parameters-8",level:3},{value:"Sample request",id:"sample-request-11",level:3},{value:"Sample response",id:"sample-response-6",level:3},{value:"Introspect a signed ID token",id:"introspect-a-signed-id-token",level:2},{value:"Parameters",id:"parameters-9",level:3},{value:"Sample payload",id:"sample-payload-4",level:3},{value:"Sample request",id:"sample-request-12",level:3},{value:"Sample response",id:"sample-response-7",level:3},{value:"Read .well-known configurations",id:"read-well-known-configurations",level:2},{value:"Sample request",id:"sample-request-13",level:3},{value:"Sample response",id:"sample-response-8",level:3},{value:"Read active public keys",id:"read-active-public-keys",level:2},{value:"Sample request",id:"sample-request-14",level:3},{value:"Sample response",id:"sample-response-9",level:3}];function o(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"configure-the-identity-tokens-backend",children:"Configure the identity tokens backend"}),"\n",(0,l.jsx)(n.p,{children:"This endpoint updates configurations for OIDC-compliant identity tokens issued by OpenBao."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"POST"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"identity/oidc/config"})})]})})]}),"\n",(0,l.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"issuer"})," ",(0,l.jsx)(n.code,{children:'(string: "")'})," \u2013 Issuer URL to be used in the iss claim of the token. If not set, OpenBao's api_addr will be used. The issuer is a case sensitive URL using the https scheme that contains scheme, host, and an optional port number."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"sample-payload",children:"Sample payload"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "issuer": "https://example.com:1234"\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"sample-request",children:"Sample request"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/identity/oidc/config\n'})}),"\n",(0,l.jsx)(n.h3,{id:"sample-response",children:"Sample response"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "data": null,\n  "warnings": [\n    "If \\"issuer\\" is set explicitly, all tokens must be validated against that address, including those issued by secondary clusters. Setting issuer to \\"\\" will restore the default behavior of using the cluster\'s api_addr as the issuer."\n  ]\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"read-configurations-for-the-identity-tokens-backend",children:"Read configurations for the identity tokens backend"}),"\n",(0,l.jsx)(n.p,{children:"This endpoint queries OpenBao identity tokens configurations."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"GET"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"identity/oidc/config"})})]})})]}),"\n",(0,l.jsx)(n.h3,{id:"sample-request-1",children:"Sample request"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request GET \\\n    http://127.0.0.1:8200/v1/identity/oidc/config\n'})}),"\n",(0,l.jsx)(n.h3,{id:"sample-response-1",children:"Sample response"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "issuer": "https://example.com:1234"\n  }\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"create-a-named-key",children:"Create a named key"}),"\n",(0,l.jsx)(n.p,{children:"This endpoint creates or updates a named key which is used by a role to sign tokens."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"POST"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"identity/oidc/key/:name"})})]})})]}),"\n",(0,l.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"name"})," ",(0,l.jsx)(n.code,{children:"(string)"})," \u2013 Name of the named key."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"rotation_period"})," ",(0,l.jsx)(n.code,{children:'(int or time string: "24h")'})," - How often to generate a new signing key. Uses ",(0,l.jsx)(n.a,{href:"/docs/concepts/duration-format",children:"duration format strings"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"verification_ttl"})," ",(0,l.jsx)(n.code,{children:'(int or time string: "24h")'})," - Controls how long the public portion of a signing key will be available for verification after being rotated. Uses ",(0,l.jsx)(n.a,{href:"/docs/concepts/duration-format",children:"duration format strings"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"allowed_client_ids"})," ",(0,l.jsx)(n.code,{children:"(list: [])"}),' - Array of role client ids allowed to use this key for signing. If empty, no roles are allowed. If "*", all roles are allowed.']}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"algorithm"})," ",(0,l.jsx)(n.code,{children:'(string: "RS256")'})," - Signing algorithm to use. Allowed values are: RS256 (default), RS384, RS512, ES256, ES384, ES512, EdDSA."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"sample-payload-1",children:"Sample payload"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "rotation_period": "12h",\n  "verification_ttl": 43200\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"sample-request-2",children:"Sample request"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/identity/oidc/key/named-key-001\n'})}),"\n",(0,l.jsx)(n.h2,{id:"read-a-named-key",children:"Read a named key"}),"\n",(0,l.jsx)(n.p,{children:"This endpoint queries a named key and returns its configurations."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"GET"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"identity/oidc/key/:name"})})]})})]}),"\n",(0,l.jsx)(n.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"name"})," ",(0,l.jsx)(n.code,{children:"(string)"})," \u2013 Name of the key."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"sample-request-3",children:"Sample request"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request GET \\\n    http://127.0.0.1:8200/v1/identity/oidc/key/named-key-001\n'})}),"\n",(0,l.jsx)(n.h3,{id:"sample-response-2",children:"Sample response"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "algorithm": "RS256",\n    "rotation_period": 43200,\n    "verification_ttl": 43200\n  }\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"delete-a-named-key",children:"Delete a named key"}),"\n",(0,l.jsx)(n.p,{children:"This endpoint deletes a named key."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"DELETE"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"identity/oidc/key/:name"})})]})})]}),"\n",(0,l.jsx)(n.h3,{id:"parameters-3",children:"Parameters"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"name"})," ",(0,l.jsx)(n.code,{children:"(string)"})," \u2013 Name of the key."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"sample-request-4",children:"Sample request"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request DELETE \\\n    http://127.0.0.1:8200/v1/identity/oidc/key/named-key-001\n'})}),"\n",(0,l.jsx)(n.h2,{id:"list-named-keys",children:"List named keys"}),"\n",(0,l.jsx)(n.p,{children:"This endpoint will List all named keys."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"LIST"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"identity/oidc/key"})})]})})]}),"\n",(0,l.jsx)(n.h3,{id:"sample-request-5",children:"Sample request"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request LIST \\\n    http://127.0.0.1:8200/v1/identity/oidc/key\n'})}),"\n",(0,l.jsx)(n.h3,{id:"sample-response-3",children:"Sample response"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "keys": ["named-key-001", "named-key-002"]\n  }\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"rotate-a-named-key",children:"Rotate a named key"}),"\n",(0,l.jsx)(n.p,{children:"This endpoint rotates a named key."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"POST"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"identity/oidc/key/:name/rotate"})})]})})]}),"\n",(0,l.jsx)(n.h3,{id:"parameters-4",children:"Parameters"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"name"})," ",(0,l.jsx)(n.code,{children:"(string)"})," \u2013 Name of the key to be rotated."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"verification_ttl"})," ",(0,l.jsx)(n.code,{children:"(string: <optional>)"})," - Controls how long the public portion of the key will be available for verification after being rotated. Setting verification_ttl here will override the verification_ttl set on the key."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"sample-payload-2",children:"Sample payload"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "verification_ttl": 0\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"sample-request-6",children:"Sample request"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/identity/oidc/key/named-key-001/rotate\n'})}),"\n",(0,l.jsx)(n.h2,{id:"create-or-update-a-role",children:"Create or update a role"}),"\n",(0,l.jsx)(n.p,{children:"Create or update a role. ID tokens are generated against a role and signed against a named key."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"POST"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"identity/oidc/role/:name"})})]})})]}),"\n",(0,l.jsx)(n.h3,{id:"parameters-5",children:"Parameters"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"name"})," ",(0,l.jsx)(n.code,{children:"(string)"})," \u2013 Name of the role."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"key"})," ",(0,l.jsx)(n.code,{children:"(string)"})," \u2013 A configured named key, the key must already exist."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"template"})," ",(0,l.jsx)(n.code,{children:"(string: <optional>)"})," - The template string to use for generating tokens. This may be in string-ified JSON or base64 format."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"client_id"})," ",(0,l.jsx)(n.code,{children:"(string: <optional>)"})," - Optional client ID. A random ID will be generated if left unset."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"ttl"})," ",(0,l.jsx)(n.code,{children:'(int or time string: "24h")'})," - TTL of the tokens generated against the role. Uses ",(0,l.jsx)(n.a,{href:"/docs/concepts/duration-format",children:"duration format strings"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"sample-payload-3",children:"Sample payload"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "key": "named-key-001",\n  "ttl": "12h"\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"sample-request-7",children:"Sample request"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/identity/oidc/role/role-001\n'})}),"\n",(0,l.jsx)(n.h2,{id:"read-a-role",children:"Read a role"}),"\n",(0,l.jsx)(n.p,{children:"This endpoint queries a role and returs its configuration."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"GET"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"identity/oidc/role/:name"})})]})})]}),"\n",(0,l.jsx)(n.h3,{id:"parameters-6",children:"Parameters"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"name"})," ",(0,l.jsx)(n.code,{children:"(string)"})," \u2013 Name of the role."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"sample-request-8",children:"Sample request"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request GET \\\n    http://127.0.0.1:8200/v1/identity/oidc/role/role-001\n'})}),"\n",(0,l.jsx)(n.h3,{id:"sample-response-4",children:"Sample response"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "client_id": "PGE8tf4RmJkDwvjI1FgARkXEmH",\n    "key": "named-key-001",\n    "template": "",\n    "ttl": 43200\n  }\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"delete-a-role",children:"Delete a role"}),"\n",(0,l.jsx)(n.p,{children:"This endpoint deletes a role."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"DELETE"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"identity/oidc/role/:name"})})]})})]}),"\n",(0,l.jsx)(n.h3,{id:"parameters-7",children:"Parameters"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"name"})," ",(0,l.jsx)(n.code,{children:"(string)"})," \u2013 Name of the role."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"sample-request-9",children:"Sample request"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request DELETE \\\n    http://127.0.0.1:8200/v1/identity/oidc/role/role-001\n'})}),"\n",(0,l.jsx)(n.h2,{id:"list-roles",children:"List roles"}),"\n",(0,l.jsx)(n.p,{children:"This endpoint will list all signing keys."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"LIST"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"identity/oidc/role"})})]})})]}),"\n",(0,l.jsx)(n.h3,{id:"sample-request-10",children:"Sample request"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request LIST \\\n    http://127.0.0.1:8200/v1/identity/oidc/role\n'})}),"\n",(0,l.jsx)(n.h3,{id:"sample-response-5",children:"Sample response"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "keys": ["role-001", "role-002", "testrole"]\n  }\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"generate-a-signed-id-token",children:"Generate a signed ID token"}),"\n",(0,l.jsx)(n.p,{children:"Use this endpoint to generate a signed ID (OIDC) token."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"GET"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"identity/oidc/token/:name"})})]})})]}),"\n",(0,l.jsx)(n.h3,{id:"parameters-8",children:"Parameters"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"name"})," ",(0,l.jsx)(n.code,{children:'(string: "")'})," \u2013 The name of the role against which to generate a signed ID token"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"sample-request-11",children:"Sample request"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request GET \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/identity/oidc/token/role-001\n'})}),"\n",(0,l.jsx)(n.h3,{id:"sample-response-6",children:"Sample response"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "client_id": "P6CfCzyHsQY4pMcA6kWAOCItA7",\n    "token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjJkMGI4YjlkLWYwNGQtNzFlYy1iNjc0LWM3MzU4NDMyYmM1YiJ9.eyJhdWQiOiJQNkNmQ3p5SHNRWTRwTWNBNmtXQU9DSXRBNyIsImV4cCI6MTU2MTQ4ODQxMiwiaWF0IjoxNTYxNDAyMDEyLCJpc3MiOiJodHRwczovL2V4YW1wbGUuY29tOjEyMzQiLCJzdWIiOiI2YzY1ZWFmNy1kNGY0LTEzMzMtMDJiYy0xYzc1MjE5YzMxMDIifQ.IcbWTmks7P5eVtwmIBl5rL1B88MI55a9JJuYVLIlwE9aP_ilXpX5fE38CDm5PixDDVJb8TI2Q_FO4GMMH0ymHDO25ZvA917WcyHCSBGaQlgcS-WUL2fYTqFjSh-pezszaYBgPuGvH7hJjlTZO6g0LPCyUWat3zcRIjIQdXZum-OyhWAelQlveEL8sOG_ldyZ8v7fy7GXDxfJOK1kpw5AX9DXJKylbwZTBS8tLb-7edq8uZ0lNQyWy9VPEW_EEIZvGWy0AHua-Loa2l59GRRP8mPxuMYxH_c88x1lsSw0vH9E3rU8AXLyF3n4d40PASXEjZ-7dnIf4w4hf2P4L0xs_g",\n    "ttl": 86400\n  }\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"introspect-a-signed-id-token",children:"Introspect a signed ID token"}),"\n",(0,l.jsx)(n.p,{children:"This endpoint can verify the authenticity and active state of a signed ID token."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"POST"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"identity/oidc/introspect"})})]})})]}),"\n",(0,l.jsx)(n.h3,{id:"parameters-9",children:"Parameters"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"token"})," ",(0,l.jsx)(n.code,{children:"(string)"})," \u2013 A signed OIDC compliant ID token"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"client_id"})," ",(0,l.jsx)(n.code,{children:"(string: <optional>)"})," - Specifying the client ID additionally requires the token to contain a matching ",(0,l.jsx)(n.code,{children:"aud"})," claim"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"sample-payload-4",children:"Sample payload"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "token": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE4NDQ4YmVkLTk4ZTMtMDNhMC01ODY4LTdmOWYyZDc5NWY2NSJ9.eyJhdWQiOiJpUDdyV1A4dmhDVFFpOTAydGhaR0hUazJMbyIsImV4cCI6MTU2MTQ4OTE0OSwiaWF0IjoxNTYxNDAyNzQ5LCJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgyMDAvdjEvaWRlbnRpdHkvb2lkYyIsInN1YiI6IjQ1NDQxZTg3LWMyMWQtYzY5NS0wNGM3LWU0YmU4MGU1M2Y0ZiJ9.IYZx1bBofBgwphLZggugFUE7V3ZLFDNr0UYv3hhc4RlIu5WgFZPRjpKVXPdORozYJJB_37aJW6qm5j8nNSz4WrWUmMcrVxoZi2VBExu-GcHHniEPRryR9t_45rqP2MycLBz0dICOjFDWvfkp6ddyCsQfkRnplPGCaN67MUEdgYQf5QNyxaG-yabRPiATY_OtXSjiNsMhJe6ZloYTZZc9gTTfKcKQf4mfy5yRY6471qkqeTuYNhKjwdkEnCSaEjHmCdZOYC5DAet16eQ7ankcwBno17_zs7vbPmkXNttALOrjSQgGe1td1SCfZeg5UOs7_IPk0qqdwOdyQ8wsrDmSyg"\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"sample-request-12",children:"Sample request"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/identity/oidc/introspect\n'})}),"\n",(0,l.jsx)(n.h3,{id:"sample-response-7",children:"Sample response"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "active": true\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"read-well-known-configurations",children:"Read .well-known configurations"}),"\n",(0,l.jsxs)(n.p,{children:["Query this path to retrieve a set of claims about the identity tokens' configuration. The response is a compliant ",(0,l.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfigurationResponse",children:"OpenID Provider Configuration Response"}),"."]}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"GET"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"identity/oidc/.well-known/openid-configuration"})})]})})]}),"\n",(0,l.jsx)(n.h3,{id:"sample-request-13",children:"Sample request"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell-session",children:"$ curl \\\n    --request GET \\\n    http://127.0.0.1:8200/v1/identity/oidc/.well-known/openid-configuration\n"})}),"\n",(0,l.jsx)(n.h3,{id:"sample-response-8",children:"Sample response"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "issuer": "https://example.com:1234",\n  "authorization_endpoint": "",\n  "token_endpoint": "",\n  "jwks_uri": "https://example.com:1234/.well-known/keys",\n  "response_types_supported": null,\n  "subject_types_supported": ["public"],\n  "id_token_signing_alg_values_supported": ["RS256"],\n  "scopes_supported": null,\n  "token_endpoint_auth_methods_supported": null,\n  "claims_supported": null\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"read-active-public-keys",children:"Read active public keys"}),"\n",(0,l.jsx)(n.p,{children:"Query this path to retrieve the public portion of named keys. Clients can use this to validate the authenticity of an identity token."}),"\n",(0,l.jsx)(n.h3,{id:"sample-request-14",children:"Sample request"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell-session",children:"$ curl \\\n    --request GET \\\n    http://127.0.0.1:8200/v1/identity/oidc/.well-known/keys\n"})}),"\n",(0,l.jsx)(n.h3,{id:"sample-response-9",children:"Sample response"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "keys": [\n    {\n      "use": "sig",\n      "kty": "RSA",\n      "kid": "94178020-55b5-e18d-b32b-1010ba5a35b4",\n      "alg": "RS256",\n      "n": "1bt-V8T7g0zr7koNbdppFrUM5YrnybPDOt-cK3MKmL1FcN3aOltCw9tCYStHgm8mIz_DJ1HgIjA-DcK_O9gacEGFCidUuudV8O4TixToHEVyRe1yXu-Q98hwkm9JtFF9PvMzDXhn4s3bLanOZzO15JAdVCo0JnwSIT9Ay3LxPLbWHYbPj7ROScuvic99OyvWz87qBK-AoXmxo9lRNY39LtieMr1D2iq0HvtjHkfiarr34CSTcuksknOsY49BU5ktrs_YJSEVpeRQ8RywY1sWrq8w_UmGsNFfPr--crXQw0ekJCXzmotsRHE5jwMuhjuucVlnyQFBYEdfDB_iPbC7Hw",\n      "e": "AQAB"\n    }\n  ]\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>r});var l=s(96540);const t={},i=l.createContext(t);function d(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);