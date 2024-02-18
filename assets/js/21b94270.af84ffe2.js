"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2136],{12345:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var s=t(74848),r=t(28453);const a={description:"OpenBao has an HTTP API that can be used to control every aspect of OpenBao.",displayed_sidebar:"api"},i="HTTP API",o={id:"index",title:"HTTP API",description:"OpenBao has an HTTP API that can be used to control every aspect of OpenBao.",source:"@site/content/api-docs/index.mdx",sourceDirName:".",slug:"/",permalink:"/openbao/api-docs/",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/api-docs/index.mdx",tags:[],version:"current",frontMatter:{description:"OpenBao has an HTTP API that can be used to control every aspect of OpenBao.",displayed_sidebar:"api"},sidebar:"api"},c={},d=[{value:"Transport",id:"transport",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Parameter restrictions",id:"parameter-restrictions",level:2},{value:"API operations",id:"api-operations",level:2},{value:"The <code>X-Vault-Request</code> header",id:"the-x-vault-request-header",level:2},{value:"Help",id:"help",level:2},{value:"Error response",id:"error-response",level:2},{value:"HTTP status codes",id:"http-status-codes",level:2},{value:"Limits",id:"limits",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"http-api",children:"HTTP API"}),"\n",(0,s.jsxs)(n.p,{children:["The OpenBao HTTP API gives you full access to OpenBao using ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Representational_state_transfer",children:"REST like HTTP verbs"}),".\nEvery aspect of OpenBao can be controlled using the APIs. The OpenBao CLI uses the\nHTTP API to access OpenBao similar to all other consumers."]}),"\n",(0,s.jsxs)(n.p,{children:["All API routes are prefixed with ",(0,s.jsx)(n.code,{children:"/v1/"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"This documentation is only for the v1 API, which is currently the only version."}),"\n",(0,s.jsxs)(n.p,{children:["~> ",(0,s.jsx)(n.strong,{children:"Backwards compatibility:"})," At the current version, OpenBao does not yet\npromise backwards compatibility even with the v1 prefix. We'll remove this\nwarning when this policy changes. At this point in time the core API (that\nis, ",(0,s.jsx)(n.code,{children:"sys/"})," routes) change very infrequently, but various secrets engines/auth\nmethods/etc. sometimes have minor changes to accommodate new features as\nthey're developed."]}),"\n",(0,s.jsx)(n.h2,{id:"transport",children:"Transport"}),"\n",(0,s.jsx)(n.p,{children:"The API is expected to be accessed over a TLS connection at all times, with a\nvalid certificate that is verified by a well-behaved client. It is possible to\ndisable TLS verification for listeners, however, so API clients should expect\nto have to do both depending on user settings."}),"\n",(0,s.jsx)(n.h2,{id:"authentication",children:"Authentication"}),"\n",(0,s.jsxs)(n.p,{children:["Once OpenBao is unsealed, almost every other operation requires a ",(0,s.jsx)(n.em,{children:"client token"}),".\nA user may have a client token sent to them. The client token must be sent as\neither the ",(0,s.jsx)(n.code,{children:"X-Vault-Token"})," HTTP Header or as ",(0,s.jsx)(n.code,{children:"Authorization"})," HTTP Header using\nthe ",(0,s.jsx)(n.code,{children:"Bearer <token>"})," scheme."]}),"\n",(0,s.jsxs)(n.p,{children:["Otherwise, a client token can be retrieved using an ",(0,s.jsx)(n.a,{href:"/docs/auth",children:"authentication\nengine"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Each auth method has one or more unauthenticated login endpoints. These\nendpoints can be reached without any authentication, and are used for\nauthentication to OpenBao itself. These endpoints are specific to each auth\nmethod."}),"\n",(0,s.jsxs)(n.p,{children:["Responses from auth login methods that generate an authentication token are\nsent back to the client in JSON. The resulting token should be saved on the\nclient or passed via the ",(0,s.jsx)(n.code,{children:"X-Vault-Token"})," or ",(0,s.jsx)(n.code,{children:"Authorization"})," header for future requests."]}),"\n",(0,s.jsx)(n.h2,{id:"parameter-restrictions",children:"Parameter restrictions"}),"\n",(0,s.jsx)(n.p,{children:"Several OpenBao APIs require specifying path parameters. The path parameter cannot end\nin periods. Otherwise, OpenBao will return a 404 unsupported path error."}),"\n",(0,s.jsx)(n.h2,{id:"api-operations",children:"API operations"}),"\n",(0,s.jsxs)(n.p,{children:["Typically the request data, body and response data to and from OpenBao is in JSON.\nOpenBao sets the ",(0,s.jsx)(n.code,{children:"Content-Type"})," header appropriately with its response and does\nnot require it from the clients request."]}),"\n",(0,s.jsxs)(n.p,{children:["The demonstration below uses the ",(0,s.jsxs)(n.a,{href:"/api-docs/secret/kv/kv-v1",children:[(0,s.jsx)(n.code,{children:"KVv1"})," secrets engine"]}),", which is a\nsimple Key/Value store. Please read ",(0,s.jsx)(n.a,{href:"/api-docs/secret/kv",children:"the API documentation of KV secret engines"}),"\nfor details of ",(0,s.jsx)(n.code,{children:"KVv1"})," compared to ",(0,s.jsx)(n.code,{children:"KVv2"})," and how they differ in their URI paths\nas well as the features available in version 2 of the KV secrets engine."]}),"\n",(0,s.jsxs)(n.p,{children:["For ",(0,s.jsx)(n.code,{children:"KVv1"}),", reading a secret using the HTTP API is done by issuing a GET:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"/v1/secret/foo\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This maps to ",(0,s.jsx)(n.code,{children:"secret/foo"})," where ",(0,s.jsx)(n.code,{children:"foo"})," is the key in the ",(0,s.jsx)(n.code,{children:"secret/"})," mount, which\nis mounted by default on a fresh OpenBao install and is of type ",(0,s.jsx)(n.code,{children:"kv"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Here is an example of reading a secret using cURL:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    -H "X-Vault-Token: f3b09679-3001-009d-2b80-9c306ab81aa6" \\\n    -X GET \\\n    http://127.0.0.1:8200/v1/secret/foo\n'})}),"\n",(0,s.jsxs)(n.p,{children:["A few endpoints consume calls with ",(0,s.jsx)(n.code,{children:"GET"})," query string parameters, but only if\nthose parameters are not sensitive, especially since  some load balancers will\nbe able log these. Most endpoints that accept ",(0,s.jsx)(n.code,{children:"POST"})," query string parameters\nexpect those parameters in the request body."]}),"\n",(0,s.jsxs)(n.p,{children:["You can list secrets as well. To do this, either issue a ",(0,s.jsx)(n.code,{children:"GET"})," with the query\nstring parameter ",(0,s.jsx)(n.code,{children:"list=true"}),", or you use the ",(0,s.jsx)(n.code,{children:"LIST"})," HTTP verb. For the ",(0,s.jsx)(n.code,{children:"kv"})," secrets\nengine, listing is allowed on directories only, which returns the keys at the\nrequested path:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    -H "X-Vault-Token: f3b09679-3001-009d-2b80-9c306ab81aa6" \\\n    -X LIST \\\n    http://127.0.0.1:8200/v1/secret/\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The API documentation uses ",(0,s.jsx)(n.code,{children:"LIST"})," as the HTTP verb, but you can still use ",(0,s.jsx)(n.code,{children:"GET"}),"\nwith the ",(0,s.jsx)(n.code,{children:"?list=true"})," query string."]}),"\n",(0,s.jsxs)(n.p,{children:["To make an API with specific data in request body, issue a ",(0,s.jsx)(n.code,{children:"POST"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"/v1/secret/foo\n"})}),"\n",(0,s.jsx)(n.p,{children:"with a JSON body like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'{\n  "value": "bar"\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Here is an example of writing a secret using cURL:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    -H "X-Vault-Token: f3b09679-3001-009d-2b80-9c306ab81aa6" \\\n    -H "Content-Type: application/json" \\\n    -X POST \\\n    -d \'{"data":{"value":"bar"}}\' \\\n    http://127.0.0.1:8200/v1/secret/baz\n'})}),"\n",(0,s.jsxs)(n.p,{children:["OpenBao currently considers ",(0,s.jsx)(n.code,{children:"PUT"})," and ",(0,s.jsx)(n.code,{children:"POST"})," to be synonyms. Rather than trust a\nclient's stated intentions, OpenBao engines can implement an existence check to\ndiscover whether an operation is actually a create or update operation based on\nthe data already stored within OpenBao. This makes permission management via ACLs\nmore flexible."]}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.a,{href:"/api-docs/secret/kv/kv-v2#sample-request-3",children:"KVv2 example"})," for the engine path of ",(0,s.jsx)(n.code,{children:"secret"})," requires that URI is\nappended with ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"data/"})})}),"  prior to the secret name (",(0,s.jsx)(n.code,{children:"baz"}),") such as:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    -H "X-Vault-Token: f3b09679-3001-009d-2b80-9c306ab81aa6" \\\n    -H "Content-Type: application/json" \\\n    -X POST \\\n    -d \'{"data":{"value":"bar"}}\' \\\n    http://127.0.0.1:8200/v1/secret/data/baz\n'})}),"\n",(0,s.jsx)(n.p,{children:"For more examples, please look at the OpenBao API client."}),"\n",(0,s.jsxs)(n.h2,{id:"the-x-vault-request-header",children:["The ",(0,s.jsx)(n.code,{children:"X-Vault-Request"})," header"]}),"\n",(0,s.jsxs)(n.p,{children:["Requests that are sent to a ",(0,s.jsx)(n.a,{href:"/docs/agent-and-proxy/proxy#listener-stanza",children:"OpenBao Proxy"})," that is configured to use the\n",(0,s.jsx)(n.code,{children:"require_request_header"})," option must include the ",(0,s.jsx)(n.code,{children:"X-Vault-Request"})," header\nentry, e.g.:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    -H "X-Vault-Token: f3b09679-3001-009d-2b80-9c306ab81aa6" \\\n    -H "X-Vault-Request: true" \\\n    -H "Content-Type: application/json" \\\n    -X POST \\\n    -d \'{"value":"bar"}\' \\\n    http://127.0.0.1:8200/v1/secret/baz\n'})}),"\n",(0,s.jsx)(n.p,{children:"The OpenBao CLI always adds this header to every request, regardless of whether\nthe request is being sent to an OpenBao Agent or directly to an OpenBao Server. In\naddition, the OpenBao SDK always adds this header to every request."}),"\n",(0,s.jsx)(n.h2,{id:"help",children:"Help"}),"\n",(0,s.jsxs)(n.p,{children:["To retrieve the help for any API within OpenBao, including mounted engines, auth\nmethods, etc. then append ",(0,s.jsx)(n.code,{children:"?help=1"})," to any URL. If you have valid permission to\naccess the path, then the help text will be returned as a markdown-formatted block\nin the ",(0,s.jsx)(n.code,{children:"help"})," attribute of the response."]}),"\n",(0,s.jsxs)(n.p,{children:["Additionally, with the ",(0,s.jsx)(n.a,{href:"/api-docs/system/internal-specs-openapi",children:"OpenAPI generation"})," in OpenBao, you will get back a small\nOpenAPI document in the ",(0,s.jsx)(n.code,{children:"openapi"})," attribute. This document is relevant for the\npath you're looking up and any paths under it - also note paths in the OpenAPI\ndocument are relative to the initial path queried."]}),"\n",(0,s.jsx)(n.p,{children:"Example request:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    -H "X-Vault-Token: f3b09679-3001-009d-2b80-9c306ab81aa6" \\\n    http://127.0.0.1:8200/v1/secret?help=1\n'})}),"\n",(0,s.jsx)(n.p,{children:"Example response:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'{\n  "help": "## DESCRIPTION\\n\\nThis backend provides a versioned key-value store. The kv backend reads and\\nwrites arbitrary secrets to the storage backend. The secrets are\\nencrypted/decrypted by OpenBao: they are never stored unencrypted in the backend\\nand the backend never has an opportunity to see the unencrypted value. Each key\\ncan have a configured number of versions, and versions can be retrieved based on\\ntheir version numbers.\\n\\n## PATHS\\n\\nThe following paths are supported by this backend. To view help for\\nany of the paths below, use the help command with any route matching\\nthe path pattern. Note that depending on the policy of your auth token,\\nyou may or may not be able to access certain paths.\\n\\n    ^.*$\\n\\n\\n    ^config$\\n        Configures settings for the KV store\\n\\n    ^data/(?P<path>.*)$\\n        Write, Read, and Delete data in the Key-Value Store.\\n\\n    ^delete/(?P<path>.*)$\\n        Marks one or more versions as deleted in the KV store.\\n\\n    ^destroy/(?P<path>.*)$\\n        Permanently removes one or more versions in the KV store\\n\\n    ^metadata/(?P<path>.*)$\\n        Configures settings for the KV store\\n\\n    ^undelete/(?P<path>.*)$\\n        Undeletes one or more versions from the KV store.",\n  "openapi": {\n    "openapi": "3.0.2",\n    "info": {\n      "title": "OpenBao API",\n      "description": "HTTP API that gives you full access to OpenBao. All API routes are prefixed with `/v1/`.",\n      "version": "1.0.0",\n      "license": {\n        "name": "Mozilla Public License 2.0",\n        "url": "https://www.mozilla.org/en-US/MPL/2.0"\n      }\n    },\n    "paths": {\n      "/.*": {},\n      "/config": {\n        "description": "Configures settings for the KV store",\n        "x-vault-create-supported": true,\n        "get": {\n          "summary": "Read the backend level settings.",\n          "tags": [\n            "secrets"\n          ],\n          "responses": {\n            "200": {\n              "description": "OK"\n            }\n          }\n        },\n     ...[output truncated]...\n     }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"error-response",children:"Error response"}),"\n",(0,s.jsx)(n.p,{children:"A common JSON structure is always returned to return errors:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'{\n  "errors": [\n    "message",\n    "another message"\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"This structure will be returned for any HTTP status greater than or equal to 400."}),"\n",(0,s.jsx)(n.h2,{id:"http-status-codes",children:"HTTP status codes"}),"\n",(0,s.jsxs)(n.p,{children:["The following HTTP status codes are used throughout the API. OpenBao tries to\nadhere to these whenever possible, but in case it doesn't -- then feel free to\n",(0,s.jsx)(n.a,{href:"https://github.com/openbao/openbao/issues",children:"raise a bug"})," for our attention!"]}),"\n",(0,s.jsxs)(n.p,{children:["~> ",(0,s.jsx)(n.em,{children:"Note"}),": Applications should be prepared to accept both ",(0,s.jsx)(n.code,{children:"200"})," and ",(0,s.jsx)(n.code,{children:"204"})," as\nsuccess. ",(0,s.jsx)(n.code,{children:"204"})," is simply an indication that there is no response body to parse,\nbut API endpoints that indicate that they return a ",(0,s.jsx)(n.code,{children:"204"})," may return a ",(0,s.jsx)(n.code,{children:"200"})," if\nwarnings are generated during the operation."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"200"})," - Success with data."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"204"})," - Success, no data returned."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"400"})," - Invalid request, missing or invalid data."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"403"})," - Forbidden, your authentication details are either incorrect, you\ndon't have access to this feature, or - if CORS is enabled - you made a\ncross-origin request from an origin that is not allowed to make such\nrequests."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"404"})," - Invalid path. This can both mean that the path truly doesn't exist or\nthat you don't have permission to view a specific path. We use 404 in some\ncases to avoid state leakage."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"405"})," - Unsupported operation.  You tried to use a method inappropriate to\nthe request path, e.g. a POST on an endpoint that only accepts GETs."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"429"})," - Default return code for health status of standby nodes. This will\nlikely change in the future."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"500"})," - Internal server error. An internal error has occurred, try again\nlater. If the error persists, report a bug."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"502"})," - A request to OpenBao required OpenBao making a request to a third party;\nthe third party responded with an error of some kind."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"503"})," - OpenBao is down for maintenance or is currently sealed. Try again\nlater."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"limits",children:"Limits"}),"\n",(0,s.jsxs)(n.p,{children:["A maximum request size of 32MB is imposed to prevent a denial of service attack\nwith arbitrarily large requests; this can be tuned per ",(0,s.jsx)(n.code,{children:"listener"})," block in\nOpenBao's server configuration file."]})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(96540);const r={},a=s.createContext(r);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);