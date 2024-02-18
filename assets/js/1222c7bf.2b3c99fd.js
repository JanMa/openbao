"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3920],{44249:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>o,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var t=n(74848),l=n(28453);const i={sidebar_label:"TOTP",description:"This is the API documentation for the OpenBao TOTP secrets engine."},r="TOTP secrets engine (API)",d={id:"secret/totp",title:"TOTP secrets engine (API)",description:"This is the API documentation for the OpenBao TOTP secrets engine.",source:"@site/content/api-docs/secret/totp.mdx",sourceDirName:"secret",slug:"/secret/totp",permalink:"/api-docs/secret/totp",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/api-docs/secret/totp.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"TOTP",description:"This is the API documentation for the OpenBao TOTP secrets engine."},sidebar:"api",previous:{title:"SSH",permalink:"/api-docs/secret/ssh"},next:{title:"Transit",permalink:"/api-docs/secret/transit"}},a={},c=[{value:"Create key",id:"create-key",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Sample payload",id:"sample-payload",level:3},{value:"Sample request",id:"sample-request",level:3},{value:"Sample payload",id:"sample-payload-1",level:3},{value:"Sample request",id:"sample-request-1",level:3},{value:"Sample response",id:"sample-response",level:3},{value:"Read key",id:"read-key",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Sample request",id:"sample-request-2",level:3},{value:"Sample response",id:"sample-response-1",level:3},{value:"List keys",id:"list-keys",level:2},{value:"Sample request",id:"sample-request-3",level:3},{value:"Sample response",id:"sample-response-2",level:3},{value:"Delete key",id:"delete-key",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Sample request",id:"sample-request-4",level:3},{value:"Generate code",id:"generate-code",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"Sample request",id:"sample-request-5",level:3},{value:"Sample response",id:"sample-response-3",level:3},{value:"Validate code",id:"validate-code",level:2},{value:"Parameters",id:"parameters-4",level:3},{value:"Sample payload",id:"sample-payload-2",level:3},{value:"Sample request",id:"sample-request-6",level:3},{value:"Sample response",id:"sample-response-4",level:3}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"totp-secrets-engine-api",children:"TOTP secrets engine (API)"}),"\n",(0,t.jsxs)(s.p,{children:["This is the API documentation for the OpenBao TOTP secrets engine. For general\ninformation about the usage and operation of the TOTP secrets engine, please see\nthe ",(0,t.jsx)(s.a,{href:"/docs/secrets/totp",children:"TOTP documentation"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["This documentation assumes the TOTP secrets engine is enabled at the ",(0,t.jsx)(s.code,{children:"/totp"}),"\npath in OpenBao. Since it is possible to enable secrets engines at any location,\nplease update your API calls accordingly."]}),"\n",(0,t.jsx)(s.h2,{id:"create-key",children:"Create key"}),"\n",(0,t.jsx)(s.p,{children:"This endpoint creates or updates a key definition."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Method"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"POST"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"/totp/keys/:name"})})]})})]}),"\n",(0,t.jsx)(s.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"name"})," ",(0,t.jsx)(s.code,{children:"(string: <required>)"})," \u2013 Specifies the name of the key to create. This is specified as part of the URL."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"generate"})," ",(0,t.jsx)(s.code,{children:"(bool: false)"})," \u2013 Specifies if a key should be generated by OpenBao or if a key is being passed from another service."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"exported"})," ",(0,t.jsx)(s.code,{children:"(bool: true)"})," \u2013 Specifies if a QR code and url are returned upon generating a key. Only used if generate is true."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"key_size"})," ",(0,t.jsx)(s.code,{children:"(int: 20)"})," \u2013 Specifies the size in bytes of the OpenBao generated key. Only used if generate is true."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"url"})," ",(0,t.jsx)(s.code,{children:'(string: "")'})," \u2013 Specifies the TOTP key url string that can be used to configure a key. Only used if generate is false."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"key"})," ",(0,t.jsx)(s.code,{children:"(string: <required - if generate is false and url is empty>)"})," \u2013 Specifies the root key used to generate a TOTP code. Only used if generate is false."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"issuer"})," ",(0,t.jsx)(s.code,{children:'(string: "" <required - if generate is true>)'}),"\xa0\u2013\xa0Specifies the name of the key\u2019s issuing organization."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"account_name"})," ",(0,t.jsx)(s.code,{children:'(string: "" <required - if generate is true>)'}),"\xa0\u2013\xa0Specifies the name of the account associated with the key."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"period"})," ",(0,t.jsx)(s.code,{children:"(int or duration format string: 30)"}),"\xa0\u2013\xa0Specifies the length of time in seconds used to generate a counter for the TOTP code calculation."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"algorithm"})," ",(0,t.jsx)(s.code,{children:'(string: "SHA1")'}),'\xa0\u2013\xa0Specifies the hashing algorithm used to generate the TOTP code. Options include "SHA1", "SHA256" and "SHA512".']}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"digits"})," ",(0,t.jsx)(s.code,{children:"(int: 6)"}),"\xa0\u2013\xa0Specifies the number of digits in the generated TOTP code. This value can be set to 6 or 8."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"skew"})," ",(0,t.jsx)(s.code,{children:"(int: 1)"}),"\xa0\u2013\xa0Specifies the number of delay periods that are allowed when validating a TOTP code. This value can be either 0 or 1. Only used if generate is true."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"qr_size"})," ",(0,t.jsx)(s.code,{children:"(int: 200)"}),"\xa0\u2013\xa0Specifies the pixel size of the square QR code when generating a new key. Only used if generate is true and exported is true. If this value is 0, a QR code will not be returned."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"sample-payload",children:"Sample payload"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "url": "otpauth://totp/Google:test@gmail.com?secret=Y64VEVMBTSXCYIWRSHRNDZW62MPGVU2G&issuer=Google"\n}\n'})}),"\n",(0,t.jsx)(s.h3,{id:"sample-request",children:"Sample request"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/totp/keys/my-key\n'})}),"\n",(0,t.jsx)(s.h3,{id:"sample-payload-1",children:"Sample payload"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "generate": true,\n  "issuer": "Google",\n  "account_name": "test@gmail.com"\n}\n'})}),"\n",(0,t.jsx)(s.h3,{id:"sample-request-1",children:"Sample request"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/totp/keys/my-key\n'})}),"\n",(0,t.jsx)(s.h3,{id:"sample-response",children:"Sample response"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "data": {\n    "barcode": "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",\n    "url": "otpauth://totp/Google:test@gmail.com?algorithm=SHA1&digits=6&issuer=Google&period=30&secret=HTXT7KJFVNAJUPYWQRWMNVQE5AF5YZI2"\n  }\n}\n'})}),"\n",(0,t.jsxs)(s.p,{children:["If a QR code is returned, it consists of base64-formatted PNG bytes. You can embed it in a web page by including the base64 string in an ",(0,t.jsx)(s.code,{children:"img"})," tag with the prefix ",(0,t.jsx)(s.code,{children:"data:image/png;base64"})]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'<img src="data:image/png;base64,iVBORw0KGgoAAAANSUh.." />\n'})}),"\n",(0,t.jsx)(s.h2,{id:"read-key",children:"Read key"}),"\n",(0,t.jsx)(s.p,{children:"This endpoint queries the key definition."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Method"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"GET"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"/totp/keys/:name"})})]})})]}),"\n",(0,t.jsx)(s.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"name"})," ",(0,t.jsx)(s.code,{children:"(string: <required>)"})," \u2013 Specifies the name of the key to read. This is specified as part of the URL."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"sample-request-2",children:"Sample request"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    http://127.0.0.1:8200/v1/totp/keys/my-key\n'})}),"\n",(0,t.jsx)(s.h3,{id:"sample-response-1",children:"Sample response"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "data": {\n    "account_name": "test@gmail.com",\n    "algorithm": "SHA1",\n    "digits": 6,\n    "issuer": "Google",\n    "period": 30\n  }\n}\n'})}),"\n",(0,t.jsx)(s.h2,{id:"list-keys",children:"List keys"}),"\n",(0,t.jsx)(s.p,{children:"This endpoint returns a list of available keys. Only the key names are\nreturned, not any values."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Method"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"LIST"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"/totp/keys"})})]})})]}),"\n",(0,t.jsx)(s.h3,{id:"sample-request-3",children:"Sample request"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request LIST \\\n    http://127.0.0.1:8200/v1/totp/keys\n'})}),"\n",(0,t.jsx)(s.h3,{id:"sample-response-2",children:"Sample response"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "auth": null,\n  "data": {\n    "keys": ["my-key"]\n  },\n  "lease_duration": 0,\n  "lease_id": "",\n  "renewable": false\n}\n'})}),"\n",(0,t.jsx)(s.h2,{id:"delete-key",children:"Delete key"}),"\n",(0,t.jsx)(s.p,{children:"This endpoint deletes the key definition."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Method"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"DELETE"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"/totp/keys/:name"})})]})})]}),"\n",(0,t.jsx)(s.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"name"})," ",(0,t.jsx)(s.code,{children:"(string: <required>)"})," \u2013 Specifies the name of the key to delete. This\nis specified as part of the URL."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"sample-request-4",children:"Sample request"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request DELETE \\\n    http://127.0.0.1:8200/v1/totp/keys/my-key\n'})}),"\n",(0,t.jsx)(s.h2,{id:"generate-code",children:"Generate code"}),"\n",(0,t.jsx)(s.p,{children:"This endpoint generates a new time-based one-time use password based on the named\nkey."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Method"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"GET"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"/totp/code/:name"})})]})})]}),"\n",(0,t.jsx)(s.h3,{id:"parameters-3",children:"Parameters"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"name"})," ",(0,t.jsx)(s.code,{children:"(string: <required>)"})," \u2013 Specifies the name of the key to create\ncredentials against. This is specified as part of the URL."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"sample-request-5",children:"Sample request"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    http://127.0.0.1:8200/v1/totp/code/my-key\n'})}),"\n",(0,t.jsx)(s.h3,{id:"sample-response-3",children:"Sample response"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "data": {\n    "code": "810920"\n  }\n}\n'})}),"\n",(0,t.jsx)(s.h2,{id:"validate-code",children:"Validate code"}),"\n",(0,t.jsx)(s.p,{children:"This endpoint validates a time-based one-time use password generated from the named\nkey."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Method"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"POST"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"/totp/code/:name"})})]})})]}),"\n",(0,t.jsx)(s.h3,{id:"parameters-4",children:"Parameters"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"name"})," ",(0,t.jsx)(s.code,{children:"(string: <required>)"})," \u2013 Specifies the name of the key used to generate the password. This is specified as part of the URL."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"code"})," ",(0,t.jsx)(s.code,{children:"(string: <required>)"})," \u2013 Specifies the password you want to validate."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"sample-payload-2",children:"Sample payload"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "code": "123802"\n}\n'})}),"\n",(0,t.jsx)(s.h3,{id:"sample-request-6",children:"Sample request"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/totp/code/my-key\n'})}),"\n",(0,t.jsx)(s.h3,{id:"sample-response-4",children:"Sample response"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "data": {\n    "valid": true\n  }\n}\n'})})]})}function o(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>d});var t=n(96540);const l={},i=t.createContext(l);function r(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);