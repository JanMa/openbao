"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9173],{68502:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var t=a(74848),i=a(28453);const s={sidebar_label:"Overview",description:"Multi-factor authentication (MFA) is supported for several authentication\nmethods."},o="Login MFA",r={id:"auth/login-mfa/index",title:"Login MFA",description:"Multi-factor authentication (MFA) is supported for several authentication\nmethods.",source:"@site/content/docs/auth/login-mfa/index.mdx",sourceDirName:"auth/login-mfa",slug:"/auth/login-mfa/",permalink:"/openbao/docs/auth/login-mfa/",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/auth/login-mfa/index.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Overview",description:"Multi-factor authentication (MFA) is supported for several authentication\nmethods."},sidebar:"docs",previous:{title:"LDAP",permalink:"/openbao/docs/auth/ldap"},next:{title:"FAQ",permalink:"/openbao/docs/auth/login-mfa/faq"}},l={},d=[{value:"MFA types",id:"mfa-types",level:2},{value:"Login MFA procedure",id:"login-mfa-procedure",level:2},{value:"Single-Phase login",id:"single-phase-login",level:3},{value:"Sample request",id:"sample-request",level:4},{value:"Two-Phase login",id:"two-phase-login",level:3},{value:"Sample Two-Phase login response",id:"sample-two-phase-login-response",level:4},{value:"Sample payload",id:"sample-payload",level:4},{value:"Sample request",id:"sample-request-1",level:4},{value:"Sample CLI request",id:"sample-cli-request",level:4},{value:"Interactive CLI for login MFA",id:"interactive-cli-for-login-mfa",level:4},{value:"TOTP passcode validation rate limit",id:"totp-passcode-validation-rate-limit",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"login-mfa",children:"Login MFA"}),"\n",(0,t.jsx)(n.p,{children:"OpenBao supports Multi-factor Authentication (MFA) for authenticating to an auth\nmethod using different authentication types.  Login MFA is built on top of the\nIdentity system of OpenBao."}),"\n",(0,t.jsx)(n.h2,{id:"mfa-types",children:"MFA types"}),"\n",(0,t.jsx)(n.p,{children:"MFA in OpenBao includes the following login types:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Time-based One-time Password (TOTP)"})," - If configured and enabled on a login path,\nthis would require a TOTP passcode along with an OpenBao token to be presented\nwhile invoking the API login request. The passcode will be validated against the\nTOTP key present in the caller's identify in OpenBao."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Okta"})," - If Okta push is configured and enabled on a login path, then the enrolled\ndevice of the user will receive a push notification to either approve or deny access\nto the API. The Okta username will be derived from the caller identity's\nalias."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Duo"})," - If Duo push is configured and enabled on a login path, then the enrolled\ndevice of the user will receive a push notification to either approve or deny access\nto the API. The Duo username will be derived from the caller identity's\nalias. Note that Duo could also be configured to use passcodes for authentication."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"PingID"})," - If PingID push is configured and enabled on a login path, the\nenrolled device of the user will receive a push notification to either approve or deny\naccess to the API. The PingID username will be derived from the caller\nidentity's alias."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"login-mfa-procedure",children:"Login MFA procedure"}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"NOTE:"})," OpenBao's built-in Login MFA feature does not protect against brute forcing of\nTOTP passcodes by default. We recommend that per-client ",(0,t.jsx)(n.a,{href:"/docs/concepts/resource-quotas",children:"rate limits"}),"\nare applied to the relevant login and/or mfa paths (e.g. ",(0,t.jsx)(n.code,{children:"/sys/mfa/validate"}),"). External MFA\nmethods (",(0,t.jsx)(n.code,{children:"Duo"}),", ",(0,t.jsx)(n.code,{children:"Ping"})," and ",(0,t.jsx)(n.code,{children:"Okta"}),") may already provide configurable rate limiting. Rate limiting of\nLogin MFA paths are enforced by default."]})}),"\n",(0,t.jsxs)(n.p,{children:["Login MFA can be configured to secure further authenticating to an auth method. To enable login\nMFA, an MFA method needs to be configured. Please see ",(0,t.jsx)(n.a,{href:"/api-docs/secret/identity/mfa",children:"Login MFA API"})," for details\non how to configure an MFA method. Once an MFA method is configured, an operator can configure an MFA enforcement using the returned unique MFA method ID.\nPlease see ",(0,t.jsx)(n.a,{href:"/api-docs/secret/identity/mfa/login-enforcement",children:"Login MFA Enforcement API"}),"\nfor details on how to configure an MFA enforcement config. MFA could be enforced for an entity, a group of\nentities, a specific auth method accessor, or an auth method type. A login request that matches\nany MFA enforcement restrictions is subject to further MFA validation,\nsuch as a one-time passcode, before being authenticated."]}),"\n",(0,t.jsx)(n.p,{children:"There are two ways to validate a login request that is subject to MFA validation."}),"\n",(0,t.jsx)(n.h3,{id:"single-phase-login",children:"Single-Phase login"}),"\n",(0,t.jsxs)(n.p,{children:["In the Single-phase login, the required MFA information is embedded in a login request using\nthe ",(0,t.jsx)(n.code,{children:"X-Vault-MFA"})," header. In this case, the MFA validation is done\nas a part of the login request."]}),"\n",(0,t.jsxs)(n.p,{children:["MFA credentials are retrieved from the ",(0,t.jsx)(n.code,{children:"X-Vault-MFA"})," HTTP header. The format of\nthe header is either ",(0,t.jsx)(n.code,{children:"mfa_method_id[:passcode]"})," or\n",(0,t.jsx)(n.code,{children:"mfa_method_id[:passcode=<passcode>]"}),", and one can use either of the above two\nformats.  The item in the ",(0,t.jsx)(n.code,{children:"[]"})," is optional.  If there are multiple MFA methods\nthat need to be validated, a user can pass in multiple ",(0,t.jsx)(n.code,{children:"X-Vault-MFA"})," HTTP\nheaders."]}),"\n",(0,t.jsx)(n.h4,{id:"sample-request",children:"Sample request"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --header "X-Vault-MFA: d16fd3c2-50de-0b9b-eed3-0301dadeca10:695452" \\\n    http://127.0.0.1:8200/v1/auth/userpass/login/alice\n'})}),"\n",(0,t.jsx)(n.p,{children:"If an MFA method does not require a passcode, the login request MFA header only contains the method ID."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:' $ curl \\\n     --header "X-Vault-Token: ..." \\\n     --header "X-Vault-MFA: d16fd3c2-50de-0b9b-eed3-0301dadeca10" \\\n     http://127.0.0.1:8200/v1/auth/userpass/login/alice\n'})}),"\n",(0,t.jsx)(n.p,{children:"An operator can configure a name for an MFA method.\nThis name should be unique in the namespace in which the MFA method is configured.\nThe MFA method name can be used in the MFA header."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --header "X-Vault-MFA: sample_mfa_method_name:695452" \\\n    http://127.0.0.1:8200/v1/auth/userpass/login/alice\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In cases where the MFA method is configured in a specific namespace, the MFA method name should be prefixed with the namespace path.\nBelow shows an example where an MFA method is configured in ",(0,t.jsx)(n.code,{children:"ns1"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --header "X-Vault-MFA: ns1/sample_mfa_method_name:695452" \\\n    http://127.0.0.1:8200/v1/auth/userpass/login/alice\n'})}),"\n",(0,t.jsx)(n.h3,{id:"two-phase-login",children:"Two-Phase login"}),"\n",(0,t.jsxs)(n.p,{children:["The more conventional and prevalent MFA method is a two-request mechanism, also referred to as Two-phase Login MFA.\nIn Two-phase login, the ",(0,t.jsx)(n.code,{children:"X-Vault-MFA"})," header is not provided in the request. In this case, after sending a regular login request,\nthe user receives an auth response in which MFA requirements are included. MFA requirements contain an MFA request ID\nwhich identifies the login request that needs validation. In addition, MFA requirements contain MFA constraints\nthat determine which MFA types should be used to validate the request, the corresponding method IDs, and\na boolean value showing whether the MFA method uses passcodes or not. MFA constraints form a nested map in MFA Requirement\nand represent all MFA enforcements that match a login request. While the example below is for the userpass login,\nnote that this can affect the login response on any auth mount protected by MFA validation."]}),"\n",(0,t.jsx)(n.h4,{id:"sample-two-phase-login-response",children:"Sample Two-Phase login response"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "request_id": "1044c151-13ea-1cf5-f6ed-000c42efd477",\n  "lease_id": "",\n  "lease_duration": 0,\n  "renewable": false,\n  "data": null,\n  "warnings": [\n    "A login request was issued that is subject to MFA validation. Please make sure to validate the login by sending another request to mfa/validate endpoint."\n  ],\n  "auth": {\n    "client_token": "",\n    "accessor": "",\n    "policies": null,\n    "token_policies": null,\n    "identity_policies": null,\n    "metadata": null,\n    "orphan": false,\n    "entity_id": "",\n    "lease_duration": 0,\n    "renewable": false,\n    "mfa_requirement": {\n      "mfa_request_id": "d0c9eec7-6921-8cc0-be62-202b289ef163",\n      "mfa_constraints": {\n        "enforcementConfigUserpass": {\n          "any": [\n            {\n              "type": "totp",\n              "id": "820997b3-110e-c251-7e8b-ff4aa428a6e1",\n              "uses_passcode": true,\n              "name": "sample_mfa_method_name",\n            }\n          ]\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Note that the ",(0,t.jsx)(n.code,{children:"uses_passcode"})," boolean value will always show true for TOTP, and false for Okta and PingID.\nFor Duo method, the value can be configured as part of the method configuration, using the ",(0,t.jsx)(n.code,{children:"use_passcode"})," parameter.\nPlease see ",(0,t.jsx)(n.a,{href:"/api-docs/secret/identity/mfa/duo",children:"Duo API"})," for details\non how to configure the boolean value for Duo."]}),"\n",(0,t.jsxs)(n.p,{children:["To validate the MFA restricted login request, the user sends a second request to the ",(0,t.jsx)(n.a,{href:"/api-docs/system/mfa/validate",children:"validate"}),"\nendpoint including the MFA request ID and MFA payload. MFA payload contains a map of methodIDs and their associated credentials.\nIf the configured MFA methods, such as PingID, Okta, and Duo, do not require a passcode, the associated\ncredentials will be a list with one empty string."]}),"\n",(0,t.jsx)(n.h4,{id:"sample-payload",children:"Sample payload"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "mfa_request_id": "5879c74a-1418-1948-7be9-97b209d693a7",\n  "mfa_payload": {\n    "d16fd3c2-50de-0b9b-eed3-0301dadeca10": ["910201"]\n  }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"If an MFA method is configured in a namespace, the MFA method name prefixed with the namespace path can be used in the validation payload."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "mfa_request_id": "5879c74a-1418-1948-7be9-97b209d693a7",\n  "mfa_payload": {\n    "ns1/sample_mfa_method_name": ["910201"]\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"sample-request-1",children:"Sample request"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/sys/mfa/validate\n'})}),"\n",(0,t.jsx)(n.h4,{id:"sample-cli-request",children:"Sample CLI request"}),"\n",(0,t.jsx)(n.p,{children:"A user is also able to use the CLI write command to validate the login request."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"$ bao write sys/mfa/validate -format=json @payload.json\n"})}),"\n",(0,t.jsx)(n.h4,{id:"interactive-cli-for-login-mfa",children:"Interactive CLI for login MFA"}),"\n",(0,t.jsxs)(n.p,{children:["OpenBao supports an interactive way of authenticating to an auth method using CLI only if the\nlogin request is subject to a single MFA method validation. In this situation, if the MFA method\nis configured to use passcodes, after sending a regular login request, the user is prompted to\ninsert the passcode. Upon successful MFA validation, a client token is returned.\nIf the configured MFA methods, such as PingID, Okta, and Duo, do not require a passcode and have out of band\nmechanisms for verifying the extra factor, the user is notified to check their authenticator application.\nThis alleviates a user from sending the second request separately to validate a login request.\nTo disable the interactive login experience, a user needs to pass in the ",(0,t.jsx)(n.code,{children:"non-interactive"})," flag to the login request."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"$ bao write -non-interactive sys/mfa/validate -format=json @payload.json\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To get started with Login MFA, refer to the ",(0,t.jsx)(n.a,{href:"/tutorials/auth-methods/multi-factor-authentication",children:"Login MFA"})," tutorial."]}),"\n",(0,t.jsx)(n.h3,{id:"totp-passcode-validation-rate-limit",children:"TOTP passcode validation rate limit"}),"\n",(0,t.jsxs)(n.p,{children:["Rate limiting of Login MFA paths are enforced by default.  OpenBao allows for 5\nconsecutive failed TOTP passcode validations.  This value can also be configured\nby adding ",(0,t.jsx)(n.code,{children:"max_validation_attempts"})," to the TOTP configuration.  If the number of\nconsecutive failed TOTP passcode validation exceeds the configured value, the\nuser needs to wait until a fresh TOTP passcode is available."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>r});var t=a(96540);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);