"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7586],{28593:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var s=t(74848),i=t(28453);const l={sidebar_label:"JWT/OIDC",description:"This is the API documentation for the OpenBao JWT/OIDC authentication\nmethod plugin."},r="JWT/OIDC auth method (API)",o={id:"auth/jwt",title:"JWT/OIDC auth method (API)",description:"This is the API documentation for the OpenBao JWT/OIDC authentication\nmethod plugin.",source:"@site/content/api-docs/auth/jwt.mdx",sourceDirName:"auth",slug:"/auth/jwt",permalink:"/api-docs/auth/jwt",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/api-docs/auth/jwt.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"JWT/OIDC",description:"This is the API documentation for the OpenBao JWT/OIDC authentication\nmethod plugin."},sidebar:"api",previous:{title:"AppRole",permalink:"/api-docs/auth/approle"},next:{title:"Kerberos",permalink:"/api-docs/auth/kerberos"}},d={},a=[{value:"Configure",id:"configure",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Sample payload",id:"sample-payload",level:3},{value:"Sample request",id:"sample-request",level:3},{value:"Read config",id:"read-config",level:2},{value:"Sample request",id:"sample-request-1",level:3},{value:"Sample response",id:"sample-response",level:3},{value:"Create/Update role",id:"createupdate-role",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Sample payload",id:"sample-payload-1",level:3},{value:"Sample request",id:"sample-request-2",level:3},{value:"Read role",id:"read-role",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Sample request",id:"sample-request-3",level:3},{value:"Sample response",id:"sample-response-1",level:3},{value:"List roles",id:"list-roles",level:2},{value:"Sample request",id:"sample-request-4",level:3},{value:"Sample response",id:"sample-response-2",level:3},{value:"Delete role",id:"delete-role",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"Sample request",id:"sample-request-5",level:3},{value:"OIDC authorization URL request",id:"oidc-authorization-url-request",level:2},{value:"Parameters",id:"parameters-4",level:3},{value:"Sample payload",id:"sample-payload-2",level:3},{value:"Sample request",id:"sample-request-6",level:3},{value:"Sample response",id:"sample-response-3",level:3},{value:"OIDC callback",id:"oidc-callback",level:2},{value:"Parameters",id:"parameters-5",level:3},{value:"Sample request",id:"sample-request-7",level:3},{value:"Sample response",id:"sample-response-4",level:3},{value:"JWT login",id:"jwt-login",level:2},{value:"Parameters",id:"parameters-6",level:3},{value:"Sample payload",id:"sample-payload-3",level:3},{value:"Sample request",id:"sample-request-8",level:3},{value:"Sample response",id:"sample-response-5",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"jwtoidc-auth-method-api",children:"JWT/OIDC auth method (API)"}),"\n",(0,s.jsxs)(n.p,{children:["~> ",(0,s.jsx)(n.strong,{children:"Note"}),": This engine can use external X.509 certificates as part of TLS or signature validation.\nVerifying signatures against X.509 certificates that use SHA-1 is deprecated and is no longer\nusable without a workaround. See the\n",(0,s.jsx)(n.a,{href:"/docs/deprecation/faq#q-what-is-the-impact-of-removing-support-for-x-509-certificates-with-signatures-that-use-sha-1",children:"deprecation FAQ"}),"\nfor more information."]}),"\n",(0,s.jsxs)(n.p,{children:["This is the API documentation for the OpenBao JWT/OIDC auth method\nplugin. To learn more about the usage and operation, see the\n",(0,s.jsx)(n.a,{href:"/docs/auth/jwt",children:"OpenBao JWT/OIDC method documentation"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["This documentation assumes the plugin method is mounted at the\n",(0,s.jsx)(n.code,{children:"/auth/jwt"})," path in OpenBao. Since it is possible to enable auth methods\nat any location, please update your API calls accordingly."]}),"\n",(0,s.jsx)(n.h2,{id:"configure",children:"Configure"}),"\n",(0,s.jsxs)(n.p,{children:["Configures the validation information to be used globally across all roles. One\n(and only one) of ",(0,s.jsx)(n.code,{children:"oidc_discovery_url"}),", ",(0,s.jsx)(n.code,{children:"jwks_url"}),", and ",(0,s.jsx)(n.code,{children:"jwt_validation_pubkeys"})," must be\nset."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"POST"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"/auth/jwt/config"})})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"oidc_discovery_url"})," ",(0,s.jsx)(n.code,{children:"(string: <optional>)"}),' - The OIDC Discovery URL, without any .well-known component (base path). Cannot be used with "jwks_url" or "jwt_validation_pubkeys".']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"oidc_discovery_ca_pem"})," ",(0,s.jsx)(n.code,{children:"(string: <optional>)"})," - The contents of a CA certificate or chain of certificates, in PEM format, to use to validate connections to the OIDC Discovery URL. If not set, system certificates are used."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"oidc_client_id"})," ",(0,s.jsx)(n.code,{children:"(string: <optional>)"})," - The OAuth Client ID from the provider for OIDC roles."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"oidc_client_secret"})," ",(0,s.jsx)(n.code,{children:"(string: <optional>)"})," - The OAuth Client Secret from the provider for OIDC roles."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"oidc_response_mode"})," ",(0,s.jsx)(n.code,{children:"(string: <optional>)"}),' - The response mode to be used in the OAuth2 request. Allowed values are "query" and "form_post". Defaults to "query".']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"oidc_response_types"})," ",(0,s.jsx)(n.code,{children:"(comma-separated string, or array of strings: <optional>)"}),' - The response types to request. Allowed values are "code" and "id_token". Defaults to "code".\nNote: "id_token" may only be used if "oidc_response_mode" is set to "form_post".']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"jwks_url"})," ",(0,s.jsx)(n.code,{children:"(string: <optional>)"}),' - JWKS URL to use to authenticate signatures. Cannot be used with "oidc_discovery_url" or "jwt_validation_pubkeys".']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"jwks_ca_pem"})," ",(0,s.jsx)(n.code,{children:"(string: <optional>)"})," - The contents of a CA certificate or chain of certificates, in PEM format, to use to validate connections to the JWKS URL. If not set, system certificates are used."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"jwt_validation_pubkeys"})," ",(0,s.jsx)(n.code,{children:"(comma-separated string, or array of strings: <optional>)"}),' - A list of PEM-encoded public keys to use to authenticate signatures locally. Cannot be used with "jwks_url" or "oidc_discovery_url".']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"bound_issuer"})," ",(0,s.jsx)(n.code,{children:"(string: <optional>)"})," - The value against which to match the ",(0,s.jsx)(n.code,{children:"iss"})," claim in a JWT."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"jwt_supported_algs"})," ",(0,s.jsx)(n.code,{children:"(comma-separated string, or array of strings: <optional>)"})," - A list of supported signing algorithms. Defaults to [RS256] for OIDC roles. Defaults to all ",(0,s.jsx)(n.a,{href:"https://github.com/hashicorp/cap/blob/main/jwt/algs.go",children:"available algorithms"})," for JWT roles."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"default_role"})," ",(0,s.jsx)(n.code,{children:"(string: <optional>)"})," - The default role to use if none is provided during login."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"provider_config"})," ",(0,s.jsx)(n.code,{children:"(map: <optional>)"})," - Configuration options for provider-specific handling. Providers with specific handling include: Azure, Google, SecureAuth, IBM ISAM. The options are described in each provider's section in ",(0,s.jsx)(n.a,{href:"/docs/auth/jwt/oidc-providers",children:"OIDC Provider Setup"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"namespace_in_state"})," ",(0,s.jsx)(n.code,{children:"(bool: true)"})," - Pass namespace in the OIDC state parameter instead of as a separate query parameter. With this setting, the allowed redirect URL(s) in OpenBao and on the provider side should not contain a namespace query parameter. This means only one redirect URL entry needs to be maintained on the provider side for all vault namespaces that will be authenticating against it. Defaults to true for new configs."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"sample-payload",children:"Sample payload"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "oidc_discovery_url": "https://myco.auth0.com/",\n  "bound_issuer": "https://myco.auth0.com/"\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"sample-request",children:"Sample request"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    --data @payload.json \\\n    https://127.0.0.1:8200/v1/auth/jwt/config\n'})}),"\n",(0,s.jsx)(n.h2,{id:"read-config",children:"Read config"}),"\n",(0,s.jsx)(n.p,{children:"Returns the previously configured config."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"GET"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"/auth/jwt/config"})})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"sample-request-1",children:"Sample request"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    https://127.0.0.1:8200/v1/auth/jwt/config\n'})}),"\n",(0,s.jsx)(n.h3,{id:"sample-response",children:"Sample response"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "data":{\n    "oidc_discovery_url": "https://myco.auth0.com/",\n    "oidc_discovery_ca_pem": [],\n    "bound_issuer": "https://myco.auth0.com/",\n    "jwt_validation_pubkeys": []\n  },\n  ...\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"createupdate-role",children:"Create/Update role"}),"\n",(0,s.jsx)(n.p,{children:"Registers a role in the method. Role types have specific entities\nthat can perform login operations against this endpoint. Constraints specific\nto the role type must be set on the role. These are applied to the authenticated\nentities attempting to login. At least one of the bound values must be set."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"POST"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"/auth/jwt/role/:name"})})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"})," ",(0,s.jsx)(n.code,{children:"(string: <required>)"})," - Name of the role."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"role_type"})," ",(0,s.jsx)(n.code,{children:"(string: <optional>)"}),' - Type of role, either "oidc" (default) or "jwt".']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"bound_audiences"})," ",(0,s.jsx)(n.code,{children:"(array: <optional>)"})," - List of ",(0,s.jsx)(n.code,{children:"aud"}),' claims to match against.\nAny match is sufficient. For "jwt" roles, at least one of ',(0,s.jsx)(n.code,{children:"bound_audiences"}),", ",(0,s.jsx)(n.code,{children:"bound_subject"}),",\n",(0,s.jsx)(n.code,{children:"bound_claims"})," or ",(0,s.jsx)(n.code,{children:"token_bound_cidrs"}),' is required. Optional for "oidc" roles.']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"user_claim"})," ",(0,s.jsx)(n.code,{children:"(string: <required>)"})," - The claim to use to uniquely identify\nthe user; this will be used as the name for the Identity entity alias created\ndue to a successful login. The claim value must be a string."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"user_claim_json_pointer"})," ",(0,s.jsx)(n.code,{children:"(bool: false)"})," - Specifies if the ",(0,s.jsx)(n.code,{children:"user_claim"})," value uses\n",(0,s.jsx)(n.a,{href:"/docs/auth/jwt#claim-specifications-and-json-pointer",children:"JSON pointer"})," syntax for\nreferencing claims. By default, the ",(0,s.jsx)(n.code,{children:"user_claim"})," value will not use JSON pointer."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"clock_skew_leeway"})," ",(0,s.jsx)(n.code,{children:"(int or string: <optional>)"})," - The amount of leeway to add to all claims to\naccount for clock skew, in seconds. Defaults to ",(0,s.jsx)(n.code,{children:"60"})," seconds if set to ",(0,s.jsx)(n.code,{children:"0"})," and can be disabled\nif set to ",(0,s.jsx)(n.code,{children:"-1"}),'. Accepts an integer number of seconds, or a Go duration format string. Only applicable\nwith "jwt" roles.']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"expiration_leeway"})," ",(0,s.jsx)(n.code,{children:"(int or string: <optional>)"})," - The amount of leeway to add to expiration (",(0,s.jsx)(n.code,{children:"exp"}),") claims to\naccount for clock skew, in seconds. Defaults to ",(0,s.jsx)(n.code,{children:"150"})," seconds if set to ",(0,s.jsx)(n.code,{children:"0"})," and can be disabled\nif set to ",(0,s.jsx)(n.code,{children:"-1"}),'. Accepts an integer number of seconds, or a Go duration format string. Only applicable\nwith "jwt" roles.']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"not_before_leeway"})," ",(0,s.jsx)(n.code,{children:"(int or string: <optional>)"})," - The amount of leeway to add to not before (",(0,s.jsx)(n.code,{children:"nbf"}),") claims to\naccount for clock skew, in seconds. Defaults to ",(0,s.jsx)(n.code,{children:"150"})," seconds if set to ",(0,s.jsx)(n.code,{children:"0"})," and can be disabled\nif set to ",(0,s.jsx)(n.code,{children:"-1"}),'. Accepts an integer number of seconds, or a Go duration format string. Only applicable\nwith "jwt" roles.']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"bound_subject"})," ",(0,s.jsx)(n.code,{children:"(string: <optional>)"})," - If set, requires that the ",(0,s.jsx)(n.code,{children:"sub"}),"\nclaim matches this value."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"bound_claims"})," ",(0,s.jsx)(n.code,{children:"(map: <optional>)"})," - If set, a map of claims (keys) to match against respective claim values (values).\nThe expected value may be a single string or a list of strings. The interpretation of the bound\nclaim values is configured with ",(0,s.jsx)(n.code,{children:"bound_claims_type"}),". Keys support ",(0,s.jsx)(n.a,{href:"/docs/auth/jwt#claim-specifications-and-json-pointer",children:"JSON pointer"}),"\nsyntax for referencing claims."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"bound_claims_type"})," ",(0,s.jsx)(n.code,{children:'(string: "string")'})," - Configures the interpretation of the bound_claims values.\nIf ",(0,s.jsx)(n.code,{children:'"string"'})," (the default), the values will treated as string literals and must match exactly.\nIf set to ",(0,s.jsx)(n.code,{children:'"glob"'}),", the values will be interpreted as globs, with ",(0,s.jsx)(n.code,{children:"*"})," matching any number of\ncharacters."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"groups_claim"})," ",(0,s.jsx)(n.code,{children:"(string: <optional>)"})," - The claim to use to uniquely identify\nthe set of groups to which the user belongs; this will be used as the names\nfor the Identity group aliases created due to a successful login. The claim\nvalue must be a list of strings. Supports ",(0,s.jsx)(n.a,{href:"/docs/auth/jwt#claim-specifications-and-json-pointer",children:"JSON pointer"}),"\nsyntax for referencing claims."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"claim_mappings"})," ",(0,s.jsx)(n.code,{children:"(map: <optional>)"})," - If set, a map of claims (keys) to be copied to\nspecified metadata fields (values). Keys support ",(0,s.jsx)(n.a,{href:"/docs/auth/jwt#claim-specifications-and-json-pointer",children:"JSON pointer"}),"\nsyntax for referencing claims."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"oidc_scopes"})," ",(0,s.jsx)(n.code,{children:"(list: <optional>)"}),' - If set, a list of OIDC scopes to be used with an OIDC role.\nThe standard scope "openid" is automatically included and need not be specified.']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"allowed_redirect_uris"})," ",(0,s.jsx)(n.code,{children:"(list: <required>)"})," - The list of allowed values for redirect_uri\nduring OIDC logins."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"verbose_oidc_logging"})," ",(0,s.jsx)(n.code,{children:"(bool: false)"})," - Log received OIDC tokens and claims when debug-level\nlogging is active. Not recommended in production since sensitive information may be present\nin OIDC responses."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"max_age"})," ",(0,s.jsx)(n.code,{children:"(int or string: <optional>)"})," - Specifies the allowable elapsed time in seconds since the last\ntime the user was actively authenticated with the OIDC provider. If set, the ",(0,s.jsx)(n.code,{children:"max_age"})," request parameter\nwill be included in the authentication request. See ",(0,s.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest",children:"AuthRequest"}),"\nfor additional details. Accepts an integer number of seconds, or a Go duration format string."]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"token_ttl"})," ",(0,s.jsx)(n.code,{children:'(integer: 0 or string: "")'})," - The incremental lifetime for\ngenerated tokens. This current value of this will be referenced at renewal\ntime."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"token_max_ttl"})," ",(0,s.jsx)(n.code,{children:'(integer: 0 or string: "")'})," - The maximum lifetime for\ngenerated tokens. This current value of this will be referenced at renewal\ntime."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"token_policies"})," ",(0,s.jsx)(n.code,{children:'(array: [] or comma-delimited string: "")'})," - List of\ntoken policies to encode onto generated tokens. Depending on the auth method, this\nlist may be supplemented by user/group/other values."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"policies"})," ",(0,s.jsx)(n.code,{children:'(array: [] or comma-delimited string: "")'})," - DEPRECATED: Please\nuse the ",(0,s.jsx)(n.code,{children:"token_policies"})," parameter instead. List of token policies to encode\nonto generated tokens. Depending on the auth method, this list may be\nsupplemented by user/group/other values."]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"token_bound_cidrs"})," ",(0,s.jsx)(n.code,{children:'(array: [] or comma-delimited string: "")'})," - List of\nCIDR blocks; if set, specifies blocks of IP addresses which can authenticate\nsuccessfully, and ties the resulting token to these blocks as well."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"token_explicit_max_ttl"})," ",(0,s.jsx)(n.code,{children:'(integer: 0 or string: "")'})," - If set, will encode\nan ",(0,s.jsx)(n.a,{href:"/docs/concepts/tokens#token-time-to-live-periodic-tokens-and-explicit-max-ttls",children:"explicit max\nTTL"}),"\nonto the token. This is a hard cap even if ",(0,s.jsx)(n.code,{children:"token_ttl"})," and ",(0,s.jsx)(n.code,{children:"token_max_ttl"}),"\nwould otherwise allow a renewal."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"token_no_default_policy"})," ",(0,s.jsx)(n.code,{children:"(bool: false)"})," - If set, the ",(0,s.jsx)(n.code,{children:"default"})," policy will\nnot be set on generated tokens; otherwise it will be added to the policies set\nin ",(0,s.jsx)(n.code,{children:"token_policies"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"token_num_uses"})," ",(0,s.jsx)(n.code,{children:"(integer: 0)"})," - The maximum number of times a generated\ntoken may be used (within its lifetime); 0 means unlimited.\nIf you require the token to have the ability to create child tokens,\nyou will need to set this value to 0."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"token_period"})," ",(0,s.jsx)(n.code,{children:'(integer: 0 or string: "")'})," - The maximum allowed ",(0,s.jsx)(n.a,{href:"/docs/concepts/tokens#token-time-to-live-periodic-tokens-and-explicit-max-ttls",children:"period"})," value when a periodic token is requested from this role."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"token_type"})," ",(0,s.jsx)(n.code,{children:'(string: "")'})," - The type of token that should be generated. Can\nbe ",(0,s.jsx)(n.code,{children:"service"}),", ",(0,s.jsx)(n.code,{children:"batch"}),", or ",(0,s.jsx)(n.code,{children:"default"})," to use the mount's tuned default (which\nunless changed will be ",(0,s.jsx)(n.code,{children:"service"})," tokens). For token store roles, there are two\nadditional possibilities: ",(0,s.jsx)(n.code,{children:"default-service"})," and ",(0,s.jsx)(n.code,{children:"default-batch"})," which specify\nthe type to return unless the client requests a different type at generation\ntime."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"sample-payload-1",children:"Sample payload"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "policies": ["dev", "prod"],\n  "bound_subject": "sl29dlldsfj3uECzsU3Sbmh0F29Fios1@clients",\n  "bound_audiences": "https://myco.test",\n  "user_claim": "https://openbao/user",\n  "groups_claim": "https://openbao/groups",\n  "bound_claims": {\n    "department": "engineering",\n    "sector": "7g"\n  },\n  "claim_mappings": {\n    "preferred_language": "language",\n    "group": "group"\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"sample-request-2",children:"Sample request"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    --data @payload.json \\\n    https://127.0.0.1:8200/v1/auth/jwt/role/dev-role\n'})}),"\n",(0,s.jsx)(n.h2,{id:"read-role",children:"Read role"}),"\n",(0,s.jsx)(n.p,{children:"Returns the previously registered role configuration."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"GET"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"/auth/jwt/role/:name"})})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"})," ",(0,s.jsx)(n.code,{children:"(string: <required>)"})," - Name of the role."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"sample-request-3",children:"Sample request"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    https://127.0.0.1:8200/v1/auth/jwt/role/dev-role\n'})}),"\n",(0,s.jsx)(n.h3,{id:"sample-response-1",children:"Sample response"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "data":{\n    "bound_subject": "sl29dlldsfj3uECzsU3Sbmh0F29Fios1@clients",\n    "bound_audiences": [\n      "https://myco.test"\n    ],\n    "bound_cidrs": [],\n    "user_claim": "https://openbao/user",\n    "groups_claim": "https://openbao/groups",\n    "policies": [\n      "dev",\n      "prod"\n    ],\n    "period": 0,\n    "ttl": 0,\n    "num_uses": 0,\n    "max_ttl": 0\n  },\n  ...\n}\n\n'})}),"\n",(0,s.jsx)(n.h2,{id:"list-roles",children:"List roles"}),"\n",(0,s.jsx)(n.p,{children:"Lists all the roles that are registered with the plugin."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"LIST"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"/auth/jwt/role"})})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"sample-request-4",children:"Sample request"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request LIST \\\n    https://127.0.0.1:8200/v1/auth/jwt/role\n'})}),"\n",(0,s.jsx)(n.h3,{id:"sample-response-2",children:"Sample response"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "keys": [\n      "dev-role",\n      "prod-role"\n    ]\n  },\n  ...\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"delete-role",children:"Delete role"}),"\n",(0,s.jsx)(n.p,{children:"Deletes the previously registered role."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"DELETE"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"/auth/jwt/role/:name"})})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"parameters-3",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"})," ",(0,s.jsx)(n.code,{children:"(string: <required>)"})," - Name of the role."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"sample-request-5",children:"Sample request"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request DELETE \\\n    https://127.0.0.1:8200/v1/auth/jwt/role/dev-role\n'})}),"\n",(0,s.jsx)(n.h2,{id:"oidc-authorization-url-request",children:"OIDC authorization URL request"}),"\n",(0,s.jsx)(n.p,{children:"Obtain an authorization URL from OpenBao to start an OIDC login flow."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"POST"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"/auth/jwt/oidc/auth_url"})})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"parameters-4",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"role"})," ",(0,s.jsx)(n.code,{children:"(string: <optional>)"})," - Name of the role against which the login is being\nattempted. Defaults to configured ",(0,s.jsx)(n.code,{children:"default_role"})," if not provided."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"redirect_uri"})," ",(0,s.jsx)(n.code,{children:"(string: <required>)"}),' - Path to the callback to complete the login. This will be\nof the form, "',(0,s.jsx)(n.a,{href:"https://.../oidc/callback",children:"https://.../oidc/callback"}),'"'," where the leading portion is dependent on your OpenBao\nserver location, port, and the mount of the JWT plugin. This must be configured with OpenBao and the\nprovider. See ",(0,s.jsx)(n.a,{href:"/docs/auth/jwt#redirect-uris",children:"Redirect URIs"})," for more information."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"client_nonce"})," ",(0,s.jsx)(n.code,{children:"(string: <optional>)"})," - Optional client-provided nonce that\nmust match the ",(0,s.jsx)(n.code,{children:"client_nonce"})," value provided during a subsequent request to the\n",(0,s.jsx)(n.a,{href:"/api-docs/auth/jwt#oidc-callback",children:"callback"})," API."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"sample-payload-2",children:"Sample payload"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "role": "dev-role",\n  "redirect_uri": "https://openbao.myco.com:8200/ui/openbao/auth/jwt/oidc/callback"\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"sample-request-6",children:"Sample request"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ curl \\\n    --request POST \\\n    --data @payload.json \\\n    https://127.0.0.1:8200/v1/auth/jwt/oidc/auth_url\n"})}),"\n",(0,s.jsx)(n.h3,{id:"sample-response-3",children:"Sample response"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "request_id": "c701169c-64f8-26cc-0315-078e8c3ce897",\n  "data": {\n    "auth_url": "https://myco.auth0.com/authorize?client_id=r3qXcK2bezU3Sbmh0K16fatW6&nonce=851b69a9bfa5a6a5668111314414e3687891a599&redirect_uri=https%3A%2F%2Fopenbao.myco.com3A8200%2Fui%2Fopenbao%2Fauth%2Fjwt%2Foidc%2Fcallback&response_type=code&scope=openid+email+profile&state=1011e726d24960e09cfca2e04b36b38593cb6a22"\n  },\n  ...\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"oidc-callback",children:"OIDC callback"}),"\n",(0,s.jsx)(n.p,{children:"Exchange an authorization code for an OIDC ID Token. The ID token will be further validated\nagainst any bound claims, and if valid an OpenBao token will be returned."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"GET"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"/auth/jwt/oidc/callback"})})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"parameters-5",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"state"})," ",(0,s.jsx)(n.code,{children:"(string: <required>)"})," - Opaque state ID that is part of the Authorization URL and will\nbe included in the the redirect following successful authentication on the provider."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"nonce"})," ",(0,s.jsx)(n.code,{children:"(string: <required>)"})," - Opaque nonce that is part of the Authorization URL and will\nbe included in the the redirect following successful authentication on the provider."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"code"})," ",(0,s.jsx)(n.code,{children:"(string: <required>)"})," - Provider-generated authorization code that OpenBao will exchange for\nan ID token."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"client_nonce"})," ",(0,s.jsx)(n.code,{children:"(string: <optional>)"})," - Optional client-provided nonce that must\nmatch the ",(0,s.jsx)(n.code,{children:"client_nonce"})," value provided during the prior request to the\n",(0,s.jsx)(n.a,{href:"/api-docs/auth/jwt#oidc-authorization-url-request",children:"auth_url"})," API."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"sample-request-7",children:"Sample request"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ curl \\\n    https://127.0.0.1:8200/v1/auth/jwt/oidc/callback?state=n2kfh3nsl&code=mn2ldl2nv98h2jl&nonce=ni42i2idj2jj\n"})}),"\n",(0,s.jsx)(n.h3,{id:"sample-response-4",children:"Sample response"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "auth":{\n        "client_token":"f33f8c72-924e-11f8-cb43-ac59d697597c",\n        "accessor":"0e9e354a-520f-df04-6867-ee81cae3d42d",\n        "policies":[\n            "default",\n            "dev",\n            "prod"\n        ],\n        "lease_duration":2764800,\n        "renewable":true\n    },\n    ...\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"jwt-login",children:"JWT login"}),"\n",(0,s.jsx)(n.p,{children:"Fetch a token. This endpoint takes a signed JSON Web Token (JWT) and\na role name for some entity. It verifies the JWT signature to authenticate that\nentity and then authorizes the entity for the given role."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"POST"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"/auth/jwt/login"})})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"parameters-6",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"role"})," ",(0,s.jsx)(n.code,{children:"(string: <optional>)"})," - Name of the role against which the login is being\nattempted. Defaults to configured ",(0,s.jsx)(n.code,{children:"default_role"})," if not provided."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"jwt"})," ",(0,s.jsx)(n.code,{children:"(string: <required>)"})," - Signed ",(0,s.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7519",children:"JSON Web Token"})," (JWT)."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"sample-payload-3",children:"Sample payload"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "role": "dev-role",\n  "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"sample-request-8",children:"Sample request"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ curl \\\n    --request POST \\\n    --data @payload.json \\\n    https://127.0.0.1:8200/v1/auth/jwt/login\n"})}),"\n",(0,s.jsx)(n.h3,{id:"sample-response-5",children:"Sample response"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "auth":{\n        "client_token":"f33f8c72-924e-11f8-cb43-ac59d697597c",\n        "accessor":"0e9e354a-520f-df04-6867-ee81cae3d42d",\n        "policies":[\n            "default",\n            "dev",\n            "prod"\n        ],\n        "lease_duration":2764800,\n        "renewable":true\n    },\n    ...\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(96540);const i={},l=s.createContext(i);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);