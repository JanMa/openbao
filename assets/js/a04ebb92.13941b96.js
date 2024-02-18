"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5664],{77421:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>o,frontMatter:()=>l,metadata:()=>a,toc:()=>h});var t=s(74848),i=s(28453);const l={description:"The `/sys/auth` endpoint is used to manage auth methods in OpenBao."},d="/sys/auth",a={id:"system/auth",title:"/sys/auth",description:"The `/sys/auth` endpoint is used to manage auth methods in OpenBao.",source:"@site/content/api-docs/system/auth.mdx",sourceDirName:"system",slug:"/system/auth",permalink:"/openbao/api-docs/system/auth",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/api-docs/system/auth.mdx",tags:[],version:"current",frontMatter:{description:"The `/sys/auth` endpoint is used to manage auth methods in OpenBao."},sidebar:"api",previous:{title:"/sys/audit-hash",permalink:"/openbao/api-docs/system/audit-hash"},next:{title:"/sys/capabilities",permalink:"/openbao/api-docs/system/capabilities"}},r={},h=[{value:"List auth methods",id:"list-auth-methods",level:2},{value:"Sample request",id:"sample-request",level:3},{value:"Sample response",id:"sample-response",level:3},{value:"Enable auth method",id:"enable-auth-method",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Sample payload",id:"sample-payload",level:3},{value:"Sample request",id:"sample-request-1",level:3},{value:"Read auth method configuration",id:"read-auth-method-configuration",level:2},{value:"Sample request",id:"sample-request-2",level:3},{value:"Sample response",id:"sample-response-1",level:3},{value:"Disable auth method",id:"disable-auth-method",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Sample request",id:"sample-request-3",level:3},{value:"Read auth method tuning",id:"read-auth-method-tuning",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Sample request",id:"sample-request-4",level:3},{value:"Sample response",id:"sample-response-2",level:3},{value:"Tune auth method",id:"tune-auth-method",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"Sample payload",id:"sample-payload-1",level:3},{value:"Sample request",id:"sample-request-5",level:3}];function c(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"sysauth",children:(0,t.jsx)(n.code,{children:"/sys/auth"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"/sys/auth"})," endpoint is used to list, create, update, and delete auth\nmethods. Auth methods convert user or machine-supplied information into a\ntoken which can be used for all future requests."]}),"\n",(0,t.jsx)(n.h2,{id:"list-auth-methods",children:"List auth methods"}),"\n",(0,t.jsx)(n.p,{children:"This endpoint lists all enabled auth methods."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"GET"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"/sys/auth"})})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"sample-request",children:"Sample request"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    http://127.0.0.1:8200/v1/sys/auth\n'})}),"\n",(0,t.jsx)(n.h3,{id:"sample-response",children:"Sample response"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "request_id": "9bc0fab8-d65c-3961-afe6-d05f50c5fd22",\n  "lease_id": "",\n  "lease_duration": 0,\n  "renewable": false,\n  "data": {\n    "github/": {\n      "accessor": "auth_github_badd7fd0",\n      "config": {\n        "default_lease_ttl": 0,\n        "force_no_cache": false,\n        "max_lease_ttl": 0,\n        "token_type": "default-service"\n      },\n      "deprecation_status": "supported",\n      "description": "",\n      "external_entropy_access": false,\n      "local": false,\n      "options": null,\n      "plugin_version": "",\n      "running_plugin_version": "v1.12.0+builtin.openbao",\n      "running_sha256": "",\n      "seal_wrap": false,\n      "type": "github",\n      "uuid": "4b42d1a4-0a0d-3c88-ae90-997e0c8b41be"\n    },\n    "token/": {\n      "accessor": "auth_token_bd90f507",\n      "config": {\n        "default_lease_ttl": 0,\n        "force_no_cache": false,\n        "max_lease_ttl": 0,\n        "token_type": "default-service"\n      },\n      "description": "token based credentials",\n      "external_entropy_access": false,\n      "local": false,\n      "options": null,\n      "plugin_version": "",\n      "running_plugin_version": "v1.12.0+builtin.openbao",\n      "running_sha256": "",\n      "seal_wrap": false,\n      "type": "token",\n      "uuid": "e162baec-721b-7657-7913-c960df402f8a"\n    }\n  },\n  "warnings": null\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"enable-auth-method",children:"Enable auth method"}),"\n",(0,t.jsxs)(n.p,{children:["This endpoint enables a new auth method. After enabling, the auth method can\nbe accessed and configured via the auth path specified as part of the URL. This\nauth path will be nested under the ",(0,t.jsx)(n.code,{children:"auth"})," prefix."]}),"\n",(0,t.jsxs)(n.p,{children:['For example, enable the "foo" auth method will make it accessible at\n',(0,t.jsx)(n.code,{children:"/auth/foo"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(n.code,{children:"sudo"})," required"]})," \u2013\xa0This endpoint requires ",(0,t.jsx)(n.code,{children:"sudo"})," capability in addition to\nany path-specific capabilities."]}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"POST"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"/sys/auth/:path"})})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"path"})," ",(0,t.jsx)(n.code,{children:"(string: <required>)"})," \u2013\xa0Specifies the path in which to enable the auth\nmethod. This is part of the request URL."]}),"\n",(0,t.jsxs)(n.p,{children:["!> ",(0,t.jsx)(n.strong,{children:"NOTE:"})," Use ASCII printable characters to specify the desired path."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"description"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," \u2013\xa0Specifies a human-friendly description of the\nauth method."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"type"})," ",(0,t.jsx)(n.code,{children:"(string: <required>)"}),' \u2013\xa0Specifies the name of the authentication\nmethod type, such as "github" or "token".']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"config"})," ",(0,t.jsx)(n.code,{children:"(map<string|string>: nil)"})," \u2013\xa0Specifies configuration options for\nthis auth method. These are the possible values:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"default_lease_ttl"})," ",(0,t.jsx)(n.code,{children:'(string: "")'}),' - The default lease duration, specified\nas a string duration like "5s" or "30m".']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"max_lease_ttl"})," ",(0,t.jsx)(n.code,{children:'(string: "")'}),' - The maximum lease duration, specified as a\nstring duration like "5s" or "30m".']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"audit_non_hmac_request_keys"})," ",(0,t.jsx)(n.code,{children:"(array: [])"})," - List of keys that will not be\nHMAC'd by audit devices in the request data object."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"audit_non_hmac_response_keys"})," ",(0,t.jsx)(n.code,{children:"(array: [])"})," - List of keys that will not be\nHMAC'd by audit devices in the response data object."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"listing_visibility"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - Specifies whether to show this mount\nin the UI-specific listing endpoint. Valid values are ",(0,t.jsx)(n.code,{children:'"unauth"'})," or ",(0,t.jsx)(n.code,{children:'"hidden"'}),",\nwith the default ",(0,t.jsx)(n.code,{children:'""'})," being equivalent to ",(0,t.jsx)(n.code,{children:'"hidden"'}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"passthrough_request_headers"})," ",(0,t.jsx)(n.code,{children:"(array: [])"})," - List of headers to allow\nand pass from the request to the plugin."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"allowed_response_headers"})," ",(0,t.jsx)(n.code,{children:"(array: [])"})," - List of headers to allow,\nallowing a plugin to include them in the response."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"plugin_version"})," ",(0,t.jsx)(n.code,{children:'(string: "")'}),' \u2013 Specifies the semantic version of the plugin\nto use, e.g. "v1.0.0". If unspecified, the server will select any matching\nunversioned plugin that may have been registered, the latest versioned plugin\nregistered, or a built-in plugin in that order of precendence.']}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"sample-payload",children:"Sample payload"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "type": "github",\n  "description": "Login with GitHub"\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"sample-request-1",children:"Sample request"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/sys/auth/my-auth\n'})}),"\n",(0,t.jsx)(n.h2,{id:"read-auth-method-configuration",children:"Read auth method configuration"}),"\n",(0,t.jsx)(n.p,{children:"This endpoints returns the configuration of the auth method at the given path."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"GET"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"/sys/auth/:path"})})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"sample-request-2",children:"Sample request"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    http://127.0.0.1:8200/v1/sys/auth/my-auth\n'})}),"\n",(0,t.jsx)(n.h3,{id:"sample-response-1",children:"Sample response"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "request_id": "8d2a1e33-4c00-46a5-f50d-4dc5f5d96f12",\n  "lease_id": "",\n  "lease_duration": 0,\n  "renewable": false,\n  "data": {\n    "accessor": "auth_github_badd7fd0",\n    "config": {\n      "default_lease_ttl": 0,\n      "force_no_cache": false,\n      "max_lease_ttl": 0,\n      "token_type": "default-service"\n    },\n    "deprecation_status": "supported",\n    "description": "",\n    "external_entropy_access": false,\n    "local": false,\n    "options": null,\n    "plugin_version": "",\n    "running_plugin_version": "v1.12.0+builtin.openbao",\n    "running_sha256": "",\n    "seal_wrap": false,\n    "type": "github",\n    "uuid": "4b42d1a4-0a0d-3c88-ae90-997e0c8b41be"\n  },\n  "warnings": null\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"disable-auth-method",children:"Disable auth method"}),"\n",(0,t.jsx)(n.p,{children:"This endpoint disables the auth method at the given auth path."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(n.code,{children:"sudo"})," required"]})," \u2013\xa0This endpoint requires ",(0,t.jsx)(n.code,{children:"sudo"})," capability in addition to\nany path-specific capabilities."]}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"DELETE"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"/sys/auth/:path"})})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"path"})," ",(0,t.jsx)(n.code,{children:"(string: <required>)"})," \u2013\xa0Specifies the path to disable. This is part of\nthe request URL."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"sample-request-3",children:"Sample request"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request DELETE \\\n    http://127.0.0.1:8200/v1/sys/auth/my-auth\n'})}),"\n",(0,t.jsx)(n.h2,{id:"read-auth-method-tuning",children:"Read auth method tuning"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["This endpoint reads the given auth path's configuration. This endpoint requires\n",(0,t.jsx)(n.code,{children:"sudo"})," capability on the final path, but the same functionality can be achieved\nwithout ",(0,t.jsx)(n.code,{children:"sudo"})," via ",(0,t.jsx)(n.code,{children:"sys/mounts/auth/[auth-path]/tune"}),"._"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(n.code,{children:"sudo"})," required"]})," \u2013\xa0This endpoint requires ",(0,t.jsx)(n.code,{children:"sudo"})," capability in addition to\nany path-specific capabilities."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"GET"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"/sys/auth/:path/tune"})})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"path"})," ",(0,t.jsx)(n.code,{children:"(string: <required>)"})," \u2013\xa0Specifies the path in which to tune."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"sample-request-4",children:"Sample request"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    http://127.0.0.1:8200/v1/sys/auth/my-auth/tune\n'})}),"\n",(0,t.jsx)(n.h3,{id:"sample-response-2",children:"Sample response"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "default_lease_ttl": 2764800,\n  "description": "",\n  "force_no_cache": false,\n  "max_lease_ttl": 2764800,\n  "token_type": "default-service"\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"tune-auth-method",children:"Tune auth method"}),"\n",(0,t.jsxs)(n.p,{children:["Tune configuration parameters for a given auth path. ",(0,t.jsxs)(n.em,{children:["This endpoint\nrequires ",(0,t.jsx)(n.code,{children:"sudo"})," capability on the final path, but the same functionality\ncan be achieved without ",(0,t.jsx)(n.code,{children:"sudo"})," via ",(0,t.jsx)(n.code,{children:"sys/mounts/auth/[auth-path]/tune"}),"."]})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(n.code,{children:"sudo"})," required"]})," \u2013\xa0This endpoint requires ",(0,t.jsx)(n.code,{children:"sudo"})," capability in addition to\nany path-specific capabilities."]}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"POST"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"/sys/auth/:path/tune"})})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"parameters-3",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"default_lease_ttl"})," ",(0,t.jsx)(n.code,{children:"(int: 0)"})," \u2013 Specifies the default time-to-live. If set on\na specific auth path, this overrides the global default."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"max_lease_ttl"})," ",(0,t.jsx)(n.code,{children:"(int: 0)"})," \u2013\xa0Specifies the maximum time-to-live. If set on a\nspecific auth path, this overrides the global default."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"description"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," \u2013 Specifies the description of the mount. This\noverrides the current stored value, if any."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"audit_non_hmac_request_keys"})," ",(0,t.jsx)(n.code,{children:"(array: [])"})," - Specifies the list of keys\nthat will not be HMAC'd by audit devices in the request data object."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"audit_non_hmac_response_keys"})," ",(0,t.jsx)(n.code,{children:"(array: [])"})," - Specifies the list of keys\nthat will not be HMAC'd by audit devices in the response data object."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"listing_visibility"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - Specifies whether to show this mount\nin the UI-specific listing endpoint. Valid values are ",(0,t.jsx)(n.code,{children:'"unauth"'})," or ",(0,t.jsx)(n.code,{children:'"hidden"'}),",\nwith the default ",(0,t.jsx)(n.code,{children:'""'})," being equivalent to ",(0,t.jsx)(n.code,{children:'"hidden"'}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"passthrough_request_headers"})," ",(0,t.jsx)(n.code,{children:"(array: [])"})," - List of headers to allow\nand pass from the request to the plugin."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"allowed_response_headers"})," ",(0,t.jsx)(n.code,{children:"(array: [])"})," - List of headers to allow,\nallowing a plugin to include them in the response."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"token_type"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," \u2013 Specifies the type of tokens that should be\nreturned by the mount. The following values are available:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"default-service"}),": Unless the auth method requests a different type, issue\nservice tokens"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"default-batch"}),": Unless the auth method requests a different type, issue\nbatch tokens"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"service"}),": Override any auth method preference and always issue service\ntokens from this mount"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"batch"}),": Override any auth method preference and always issue batch tokens\nfrom this mount"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"plugin_version"})," ",(0,t.jsx)(n.code,{children:'(string: "")'}),' \u2013 Specifies the semantic version of the plugin\nto use, e.g. "v1.0.0". Changes will not take effect until the mount is reloaded.']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"user_lockout_config"})," ",(0,t.jsx)(n.code,{children:"(map<string|string>: nil)"})," \u2013 Specifies the user lockout configuration\nfor the mount. These are the possible values:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"lockout_threshold"})," ",(0,t.jsx)(n.code,{children:'(string: "")'}),' - Specifies the number of failed login attempts after\nwhich the user is locked out, specified as a string like "15".']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"lockout_duration"})," ",(0,t.jsx)(n.code,{children:'(string: "")'}),' - Specifies the duration for which an user will be locked out,\nspecified as a string duration like "5s" or "30m".']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"lockout_counter_reset"})," ",(0,t.jsx)(n.code,{children:'(string: "")'}),' - Specifies the duration after which the lockout counter is\nreset with no failed login attempts, specified as a string duration like "5s" or "30m".']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"lockout_disable"})," ",(0,t.jsx)(n.code,{children:"(bool: false)"})," - Disables the user lockout feature for this mount\nif set to true."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"sample-payload-1",children:"Sample payload"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "default_lease_ttl": 1800,\n  "max_lease_ttl": 86400,\n  "audit_non_hmac_request_keys": ["client_nonce"],\n  "user_lockout_config":{\n    "lockout_threshold":"20",\n    "lockout_duration":"5m",\n    "lockout_counter_reset":"5m"\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"sample-request-5",children:"Sample request"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/sys/auth/my-auth/tune\n'})})]})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>a});var t=s(96540);const i={},l=t.createContext(i);function d(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);