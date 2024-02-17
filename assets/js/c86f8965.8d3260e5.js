"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9972],{64991:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var t=i(74848),o=i(28453);const a={layout:"docs",page_title:"JWT/OIDC - Auth Methods",description:"The JWT/OIDC auth method allows authentication using OIDC and user-provided JWTs"},s="JWT/OIDC auth method",r={id:"auth/jwt/index",title:"JWT/OIDC auth method",description:"The JWT/OIDC auth method allows authentication using OIDC and user-provided JWTs",source:"@site/content/docs/auth/jwt/index.mdx",sourceDirName:"auth/jwt",slug:"/auth/jwt/",permalink:"/openbao/docs/auth/jwt/",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/auth/jwt/index.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"JWT/OIDC - Auth Methods",description:"The JWT/OIDC auth method allows authentication using OIDC and user-provided JWTs"},sidebar:"tutorialSidebar",previous:{title:"TLS certificates auth method",permalink:"/openbao/docs/auth/cert"},next:{title:"OIDC provider configuration",permalink:"/openbao/docs/auth/jwt/oidc-providers/"}},l={},c=[{value:"OIDC authentication",id:"oidc-authentication",level:2},{value:"Redirect URIs",id:"redirect-uris",level:3},{value:"OIDC login (OpenBao UI)",id:"oidc-login-openbao-ui",level:3},{value:"OIDC login (CLI)",id:"oidc-login-cli",level:3},{value:"OIDC provider configuration",id:"oidc-provider-configuration",level:3},{value:"OIDC configuration troubleshooting",id:"oidc-configuration-troubleshooting",level:3},{value:"JWT authentication",id:"jwt-authentication",level:2},{value:"JWT verification",id:"jwt-verification",level:3},{value:"Via the CLI",id:"via-the-cli",level:3},{value:"Via the API",id:"via-the-api",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Bound claims",id:"bound-claims",level:3},{value:"Claims as metadata",id:"claims-as-metadata",level:3},{value:"Claim specifications and JSON pointer",id:"claim-specifications-and-json-pointer",level:3},{value:"Tutorial",id:"tutorial",level:2},{value:"API",id:"api",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"jwtoidc-auth-method",children:"JWT/OIDC auth method"}),"\n",(0,t.jsxs)(n.p,{children:["~> ",(0,t.jsx)(n.strong,{children:"Note"}),": This engine can use external X.509 certificates as part of TLS or signature validation.\nVerifying signatures against X.509 certificates that use SHA-1 is deprecated and is no longer\nusable without a workaround. See the\n",(0,t.jsx)(n.a,{href:"/docs/deprecation/faq#q-what-is-the-impact-of-removing-support-for-x-509-certificates-with-signatures-that-use-sha-1",children:"deprecation FAQ"}),"\nfor more information."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"jwt"})," auth method can be used to authenticate with OpenBao using\n",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/OpenID_Connect",children:"OIDC"})," or by providing a\n",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/JSON_Web_Token",children:"JWT"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The OIDC method allows authentication via a configured OIDC provider using the\nuser's web browser. This method may be initiated from the OpenBao UI or the\ncommand line. Alternatively, a JWT can be provided directly. The JWT is\ncryptographically verified using locally-provided keys, or, if configured, an\nOIDC Discovery service can be used to fetch the appropriate keys. The choice of\nmethod is configured per role."}),"\n",(0,t.jsx)(n.p,{children:"Both methods allow additional processing of the claims data in the JWT. Some of\nthe concepts common to both methods will be covered first, followed by specific\nexamples of OIDC and JWT usage."}),"\n",(0,t.jsx)(n.h2,{id:"oidc-authentication",children:"OIDC authentication"}),"\n",(0,t.jsxs)(n.p,{children:["This section covers the setup and use of OIDC roles. If a JWT is to be provided directly,\nrefer to the ",(0,t.jsx)(n.a,{href:"/docs/auth/jwt#jwt-authentication",children:"JWT Authentication"})," section below. Basic\nfamiliarity with ",(0,t.jsx)(n.a,{href:"https://developer.okta.com/blog/2017/07/25/oidc-primer-part-1",children:"OIDC concepts"}),"\nis assumed. The Authorization Code flow makes use of the Proof Key for Code\nExchange (PKCE) extension."]}),"\n",(0,t.jsxs)(n.p,{children:["OpenBao includes two built-in OIDC login flows: the OpenBao UI, and the CLI\nusing a ",(0,t.jsx)(n.code,{children:"bao login"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"redirect-uris",children:"Redirect URIs"}),"\n",(0,t.jsxs)(n.p,{children:["An important part of OIDC role configuration is properly setting redirect URIs. This must be\ndone both in OpenBao and with the OIDC provider, and these configurations must align. The\nredirect URIs are specified for a role with the ",(0,t.jsx)(n.code,{children:"allowed_redirect_uris"})," parameter. There are\ndifferent redirect URIs to configure the OpenBao UI and CLI flows, so one or both will need to\nbe set up depending on the installation."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"CLI"})}),"\n",(0,t.jsxs)(n.p,{children:["If you plan to support authentication via ",(0,t.jsx)(n.code,{children:"bao login -method=oidc"}),", a localhost redirect URI\nmust be set. This can usually be: ",(0,t.jsx)(n.code,{children:"http://localhost:8250/oidc/callback"}),'. Logins via the CLI may\nspecify a different host and/or listening port if needed, and a URI with this host/port must match one\nof the configured redirected URIs. These same "localhost" URIs must be added to the provider as well.']}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"OpenBao UI"})}),"\n",(0,t.jsx)(n.p,{children:"Logging in via the OpenBao UI requires a redirect URI of the form:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"https://{host:port}/ui/vault/auth/{path}/oidc/callback"})}),"\n",(0,t.jsxs)(n.p,{children:['The "host',":port",'" must be correct for the OpenBao server, and "path" must match the path the JWT\nbackend is mounted at (e.g. "oidc" or "jwt").']}),"\n",(0,t.jsxs)(n.p,{children:["If the ",(0,t.jsx)(n.a,{href:"/api-docs/auth/jwt#oidc_response_mode",children:"oidc_response_mode"})," is set to ",(0,t.jsx)(n.code,{children:"form_post"}),", then\nlogging in via the OpenBao UI requires a redirect URI of the form:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"https://{host:port}/v1/auth/{path}/oidc/callback"})}),"\n",(0,t.jsx)(n.h3,{id:"oidc-login-openbao-ui",children:"OIDC login (OpenBao UI)"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:'Select the "OIDC" login method.'}),"\n",(0,t.jsx)(n.li,{children:"Enter a role name if necessary."}),"\n",(0,t.jsx)(n.li,{children:'Press "Sign In" and complete the authentication with the configured provider.'}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"oidc-login-cli",children:"OIDC login (CLI)"}),"\n",(0,t.jsxs)(n.p,{children:["The CLI login defaults to path of ",(0,t.jsx)(n.code,{children:"/oidc"}),". If this auth method was enabled at a\ndifferent path, specify ",(0,t.jsx)(n.code,{children:"-path=/my-path"})," in the CLI."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"$ bao login -method=oidc port=8400 role=test\n\nComplete the login via your OIDC provider. Launching browser to:\n\n    https://myco.auth0.com/authorize?redirect_uri=http%3A%2F%2Flocalhost%3A8400%2Foidc%2Fcallback&client_id=r3qXc2bix9eF...\n"})}),"\n",(0,t.jsx)(n.p,{children:"The browser will open to the generated URL to complete the provider's login. The\nURL may be entered manually if the browser cannot be automatically opened."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"skip_browser"}),' (default: "false"). Toggle the automatic launching of the default browser to the login URL.']}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The callback listener may be customized with the following optional parameters. These are typically\nnot required to be set:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"mount"}),' (default: "oidc")']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"listenaddress"}),' (default: "localhost")']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"port"})," (default: 8250)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"callbackhost"}),' (default: "localhost")']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"callbackmethod"}),' (default: "http")']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"callbackport"})," (default: value set for ",(0,t.jsx)(n.code,{children:"port"}),"). This value is used in the ",(0,t.jsx)(n.code,{children:"redirect_uri"}),", whereas\n",(0,t.jsx)(n.code,{children:"port"})," is the localhost port that the listener is using. These two may be different in advanced setups."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"oidc-provider-configuration",children:"OIDC provider configuration"}),"\n",(0,t.jsxs)(n.p,{children:["The OIDC authentication flow has been successfully tested with a number of providers. A full\nguide to configuring OAuth/OIDC applications is beyond the scope of OpenBao documentation, but a\ncollection of provider configuration steps has been collected to help get started:\n",(0,t.jsx)(n.a,{href:"/docs/auth/jwt/oidc-providers",children:"OIDC Provider Setup"})]}),"\n",(0,t.jsx)(n.h3,{id:"oidc-configuration-troubleshooting",children:"OIDC configuration troubleshooting"}),"\n",(0,t.jsx)(n.p,{children:"This amount of configuration required for OIDC is relatively small, but it can be tricky to debug\nwhy things aren't working. Some tips for setting up OIDC:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If a role parameter (e.g. ",(0,t.jsx)(n.code,{children:"bound_claims"}),") requires a map value, it can't be set individually using\nthe OpenBao CLI. In these cases the best approach is to write the entire configuration as a single\nJSON object:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'bao write auth/oidc/role/demo -<<EOF\n{\n  "user_claim": "sub",\n  "bound_audiences": "abc123",\n  "role_type": "oidc",\n  "policies": "demo",\n  "ttl": "1h",\n  "bound_claims": { "groups": ["mygroup/mysubgroup"] }\n}\nEOF\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Monitor OpenBao's log output. Important information about OIDC validation failures will be emitted."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Ensure Redirect URIs are correct in OpenBao and on the provider. They need to match exactly. Check:\nhttp/https, 127.0.0.1/localhost, port numbers, whether trailing slashes are present."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Start simple. The only claim configuration a role requires is ",(0,t.jsx)(n.code,{children:"user_claim"}),". After authentication is\nknown to work, you can add additional claims bindings and metadata copying."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"bound_audiences"})," is optional for OIDC roles and typically not required. OIDC providers will use\nthe client_id as the audience and OIDC validation expects this."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:['Check your provider for what scopes are required in order to receive all\nof the information you need. The scopes "profile" and "groups" often need to be\nrequested, and can be added by setting ',(0,t.jsx)(n.code,{children:'oidc_scopes="profile,groups"'})," on the role."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If you're seeing claim-related errors in logs, review the provider's docs very carefully to see\nhow they're naming and structuring their claims. Depending on the provider, you may be able to\nconstruct a simple ",(0,t.jsx)(n.code,{children:"curl"}),' implicit grant request to obtain a JWT that you can inspect. An example\nof how to decode the JWT (in this case located in the "access_token" field of a JSON response):']}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"cat jwt.json | jq -r .access_token | cut -d. -f2 | base64 -D"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"/api-docs/auth/jwt#verbose_oidc_logging",children:(0,t.jsx)(n.code,{children:"verbose_oidc_logging"})})," role\noption is available which will log the received OIDC token to the ",(0,t.jsx)(n.em,{children:"server"})," logs if debug-level logging is enabled. This can\nbe helpful when debugging provider setup and verifying that the received claims are what you expect.\nSince claims data is logged verbatim and may contain sensitive information, this option should not be\nused in production."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Azure requires some additional configuration when a user is a member of more\nthan 200 groups, described in ",(0,t.jsx)(n.a,{href:"/docs/auth/jwt/oidc-providers/azuread#optional-azure-specific-configuration",children:"Azure-specific handling\nconfiguration"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"jwt-authentication",children:"JWT authentication"}),"\n",(0,t.jsx)(n.p,{children:'The authentication flow for roles of type "jwt" is simpler than OIDC since OpenBao\nonly needs to validate the provided JWT.'}),"\n",(0,t.jsx)(n.h3,{id:"jwt-verification",children:"JWT verification"}),"\n",(0,t.jsx)(n.p,{children:"JWT signatures will be verified against public keys from the issuer. This process can be done in\nthree different ways, though only one method may be configured for a single backend:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Static Keys"}),". A set of public keys is stored directly in the backend configuration."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"JWKS"}),". A JSON Web Key Set (",(0,t.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7517",children:"JWKS"}),") URL (and optional\ncertificate chain) is configured. Keys will be fetched from this endpoint during authentication."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"OIDC Discovery"}),". An OIDC Discovery URL (and optional certificate chain) is configured. Keys\nwill be fetched from this URL during authentication. When OIDC Discovery is used, OIDC validation\ncriteria (e.g. ",(0,t.jsx)(n.code,{children:"iss"}),", ",(0,t.jsx)(n.code,{children:"aud"}),", etc.) will be applied."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If multiple methods are needed, another instance of the backend can be mounted and configured\nat a different path."}),"\n",(0,t.jsx)(n.h3,{id:"via-the-cli",children:"Via the CLI"}),"\n",(0,t.jsxs)(n.p,{children:["The default path is ",(0,t.jsx)(n.code,{children:"/jwt"}),". If this auth method was enabled at a\ndifferent path, specify ",(0,t.jsx)(n.code,{children:"-path=/my-path"})," in the CLI."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"$ bao write auth/jwt/login role=demo jwt=...\n"})}),"\n",(0,t.jsx)(n.h3,{id:"via-the-api",children:"Via the API"}),"\n",(0,t.jsxs)(n.p,{children:["The default endpoint is ",(0,t.jsx)(n.code,{children:"auth/jwt/login"}),". If this auth method was enabled\nat a different path, use that value instead of ",(0,t.jsx)(n.code,{children:"jwt"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --request POST \\\n    --data \'{"jwt": "your_jwt", "role": "demo"}\' \\\n    http://127.0.0.1:8200/v1/auth/jwt/login\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The response will contain a token at ",(0,t.jsx)(n.code,{children:"auth.client_token"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "auth": {\n    "client_token": "38fe9691-e623-7238-f618-c94d4e7bc674",\n    "accessor": "78e87a38-84ed-2692-538f-ca8b9f400ab3",\n    "policies": ["default"],\n    "metadata": {\n      "role": "demo"\n    },\n    "lease_duration": 2764800,\n    "renewable": true\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.p,{children:"Auth methods must be configured in advance before users or machines can\nauthenticate. These steps are usually completed by an operator or configuration\nmanagement tool."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Enable the JWT auth method. Either the "jwt" or "oidc" name may be used. The\nbackend will be mounted at the chosen name.'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"$ bao auth enable jwt\n  or\n$ bao auth enable oidc\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.code,{children:"/config"})," endpoint to configure OpenBao. To support JWT roles, either local keys, a JWKS URL, or an OIDC\nDiscovery URL must be present. For OIDC roles, OIDC Discovery URL, OIDC Client ID and OIDC Client Secret are required. For the\nlist of available configuration options, please see the ",(0,t.jsx)(n.a,{href:"/api-docs/auth/jwt",children:"API documentation"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'$ bao write auth/jwt/config \\\n    oidc_discovery_url="https://myco.auth0.com/" \\\n    oidc_client_id="m5i8bj3iofytj" \\\n    oidc_client_secret="f4ubv72nfiu23hnsj" \\\n    default_role="demo"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["If you need to perform JWT verification with JWT token validation, then leave the ",(0,t.jsx)(n.code,{children:"oidc_client_id"})," and ",(0,t.jsx)(n.code,{children:"oidc_client_secret"})," blank."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'$ bao write auth/jwt/config \\\n   oidc_discovery_url="https://MYDOMAIN.eu.auth0.com/" \\\n   oidc_client_id="" \\\n   oidc_client_secret="" \\\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'\n1. Create a named role:\n\n ```text\n bao write auth/jwt/role/demo \\\n     allowed_redirect_uris="http://localhost:8250/oidc/callback" \\\n     bound_subject="r3qX9DljwFIWhsiqwFiu38209F10atW6@clients" \\\n     bound_audiences="https://vault.plugin.auth.jwt.test" \\\n     user_claim="https://vault/user" \\\n     groups_claim="https://vault/groups" \\\n     policies=webapps \\\n     ttl=1h\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This role authorizes JWTs with the given subject and audience claims, gives\nit the ",(0,t.jsx)(n.code,{children:"webapps"})," policy, and uses the given user/groups claims to set up\nIdentity aliases."]}),"\n",(0,t.jsx)(n.p,{children:"For the complete list of configuration options, please see the API\ndocumentation."}),"\n",(0,t.jsx)(n.h3,{id:"bound-claims",children:"Bound claims"}),"\n",(0,t.jsxs)(n.p,{children:['Once a JWT has been validated as being properly signed and not expired, the\nauthorization flow will validate that any configured "bound" parameters match.\nIn some cases there are dedicated parameters, for example ',(0,t.jsx)(n.code,{children:"bound_subject"}),",\nwhich must match the JWT's ",(0,t.jsx)(n.code,{children:"sub"})," parameter. A role may also be configured to\ncheck arbitrary claims through the ",(0,t.jsx)(n.code,{children:"bound_claims"})," map. The map contains a set\nof claims and their required values. For example, assume ",(0,t.jsx)(n.code,{children:"bound_claims"})," is set\nto:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "division": "Europe",\n  "department": "Engineering"\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:'Only JWTs containing both the "division" and "department" claims, and\nrespective matching values of "Europe" and "Engineering", would be authorized.\nIf the expected value is a list, the claim must match one of the items in the list.\nTo limit authorization to a set of email addresses:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "email": ["fred@example.com", "julie@example.com"]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Bound claims can optionally be configured with globs. See the ",(0,t.jsx)(n.a,{href:"/api-docs/auth/jwt#bound_claims_type",children:"API documentation"})," for more details."]}),"\n",(0,t.jsx)(n.h3,{id:"claims-as-metadata",children:"Claims as metadata"}),"\n",(0,t.jsxs)(n.p,{children:["Data from claims can be copied into the resulting auth token and alias metadata by configuring ",(0,t.jsx)(n.code,{children:"claim_mappings"}),". This role\nparameter is a map of items to copy. The map elements are of the form: ",(0,t.jsx)(n.code,{children:'"<JWT claim>":"<metadata key>"'}),". Assume\n",(0,t.jsx)(n.code,{children:"claim_mappings"})," is set to:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "division": "organization",\n  "department": "department"\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:['This specifies that the value in the JWT claim "division" should be copied to the metadata key "organization". The JWT\n"department" claim value will also be copied into metadata but will retain the key name. If a claim is configured in ',(0,t.jsx)(n.code,{children:"claim_mappings"}),",\nit must existing in the JWT or else the authentication will fail."]}),"\n",(0,t.jsx)(n.p,{children:'Note: the metadata key name "role" is reserved and may not be used for claim mappings.'}),"\n",(0,t.jsx)(n.h3,{id:"claim-specifications-and-json-pointer",children:"Claim specifications and JSON pointer"}),"\n",(0,t.jsxs)(n.p,{children:["Some parameters (e.g. ",(0,t.jsx)(n.code,{children:"bound_claims"}),", ",(0,t.jsx)(n.code,{children:"groups_claim"}),", ",(0,t.jsx)(n.code,{children:"claim_mappings"}),", ",(0,t.jsx)(n.code,{children:"user_claim"}),") are\nused to point to data within the JWT. If the desired key is at the top of level of the JWT,\nthe name can be provided directly. If it is nested at a lower level, a JSON Pointer may be\nused."]}),"\n",(0,t.jsx)(n.p,{children:"Assume the following JSON data to be referenced:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "division": "North America",\n  "groups": {\n    "primary": "Engineering",\n    "secondary": "Software"\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["A parameter of ",(0,t.jsx)(n.code,{children:'"division"'}),' will reference "North America", as this is a top level key. A parameter\n',(0,t.jsx)(n.code,{children:'"/groups/primary"'}),' uses JSON Pointer syntax to reference "Engineering" at a lower level. Any valid\nJSON Pointer can be used as a selector. Refer to the\n',(0,t.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc6901",children:"JSON Pointer RFC"})," for a full description of the syntax."]}),"\n",(0,t.jsx)(n.h2,{id:"tutorial",children:"Tutorial"}),"\n",(0,t.jsx)(n.p,{children:"Refer to the following tutorials for OIDC auth method usage examples:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/tutorials/auth-methods/oidc-auth",children:"OIDC Auth Method"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/tutorials/auth-methods/oidc-auth-azure",children:"Azure Active Directory with OIDC Auth Method and External\nGroups"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/tutorials/auth-methods/vault-oidc-okta",children:"OIDC Authentication with Okta"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/tutorials/auth-methods/google-workspace-oauth",children:"OIDC Authentication with Google Workspace"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,t.jsxs)(n.p,{children:["The JWT Auth Plugin has a full HTTP API. Please see the\n",(0,t.jsx)(n.a,{href:"/api-docs/auth/jwt",children:"API docs"})," for more details."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>r});var t=i(96540);const o={},a=t.createContext(o);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);