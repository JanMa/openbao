"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9258],{31491:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var s=t(74848),r=t(28453);const a={layout:"docs",page_title:"TOTP - Secrets Engines",description:"The TOTP secrets engine for OpenBao generates time-based one-time use passwords."},i="TOTP secrets engine",o={id:"secrets/totp",title:"TOTP secrets engine",description:"The TOTP secrets engine for OpenBao generates time-based one-time use passwords.",source:"@site/content/docs/secrets/totp.mdx",sourceDirName:"secrets",slug:"/secrets/totp",permalink:"/openbao/docs/secrets/totp",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/secrets/totp.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"TOTP - Secrets Engines",description:"The TOTP secrets engine for OpenBao generates time-based one-time use passwords."},sidebar:"tutorialSidebar",previous:{title:"Signed SSH certificates",permalink:"/openbao/docs/secrets/ssh/signed-ssh-certificates"},next:{title:"Transit secrets engine",permalink:"/openbao/docs/secrets/transit/"}},c={},d=[{value:"As a generator",id:"as-a-generator",level:2},{value:"Setup",id:"setup",level:3},{value:"Usage",id:"usage",level:3},{value:"As a provider",id:"as-a-provider",level:2},{value:"Setup",id:"setup-1",level:3},{value:"Usage",id:"usage-1",level:3},{value:"API",id:"api",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"totp-secrets-engine",children:"TOTP secrets engine"}),"\n",(0,s.jsx)(n.p,{children:"The TOTP secrets engine generates time-based credentials according to the TOTP\nstandard. The secrets engine can also be used to generate a new key and validate\npasswords generated by that key."}),"\n",(0,s.jsx)(n.p,{children:"The TOTP secrets engine can act as both a generator (like Google Authenticator)\nand a provider (like the Google.com sign in service)."}),"\n",(0,s.jsx)(n.h2,{id:"as-a-generator",children:"As a generator"}),"\n",(0,s.jsx)(n.p,{children:"The TOTP secrets engine can act as a TOTP code generator. In this mode, it can\nreplace traditional TOTP generators like Google Authenticator. It provides an\nadded layer of security since the ability to generate codes is guarded by\npolicies and the entire process is audited."}),"\n",(0,s.jsx)(n.h3,{id:"setup",children:"Setup"}),"\n",(0,s.jsx)(n.p,{children:"Most secrets engines must be configured in advance before they can perform their\nfunctions. These steps are usually completed by an operator or configuration\nmanagement tool."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Enable the TOTP secrets engine:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"$ bao secrets enable totp\nSuccess! Enabled the totp secrets engine at: totp/\n"})}),"\n",(0,s.jsxs)(n.p,{children:["By default, the secrets engine will mount at the name of the engine. To\nenable the secrets engine at a different path, use the ",(0,s.jsx)(n.code,{children:"-path"})," argument."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Configure a named key. The name of this key will be a human identifier as to\nits purpose."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'$ bao write totp/keys/my-key \\\n    url="otpauth://totp/OpenBao:test@test.com?secret=Y64VEVMBTSXCYIWRSHRNDZW62MPGVU2G&issuer=OpenBao"\nSuccess! Data written to: totp/keys/my-key\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"url"})," corresponds to the secret key or value from the barcode provided\nby the third-party service."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.p,{children:"After the secrets engine is configured and a user/machine has an OpenBao token with\nthe proper permission, it can generate credentials."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Generate a new time-based OTP by reading from the ",(0,s.jsx)(n.code,{children:"/code"})," endpoint with the\nname of the key:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"$ bao read totp/code/my-key\nKey     Value\n---     -----\ncode    260610\n"})}),"\n",(0,s.jsx)(n.p,{children:"Using ACLs, it is possible to restrict using the TOTP secrets engine such\nthat trusted operators can manage the key definitions, and both users and\napplications are restricted in the credentials they are allowed to read."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"as-a-provider",children:"As a provider"}),"\n",(0,s.jsx)(n.p,{children:"The TOTP secrets engine can also act as a TOTP provider. In this mode, it can be\nused to generate new keys and validate passwords generated using those keys."}),"\n",(0,s.jsx)(n.h3,{id:"setup-1",children:"Setup"}),"\n",(0,s.jsx)(n.p,{children:"Most secrets engines must be configured in advance before they can perform their\nfunctions. These steps are usually completed by an operator or configuration\nmanagement tool."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Enable the TOTP secrets engine:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"$ bao secrets enable totp\nSuccess! Enabled the totp secrets engine at: totp/\n"})}),"\n",(0,s.jsxs)(n.p,{children:["By default, the secrets engine will mount at the name of the engine. To\nenable the secrets engine at a different path, use the ",(0,s.jsx)(n.code,{children:"-path"})," argument."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Create a named key, using the ",(0,s.jsx)(n.code,{children:"generate"})," option. This tells OpenBao to be the\nprovider:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"$ bao write totp/keys/my-user \\\n    generate=true \\\n    issuer=OpenBao \\\n    account_name=user@test.com\n\nKey        Value\n---        -----\nbarcode    iVBORw0KGgoAAAANSUhEUgAAAMgAAADIEAAAAADYoy0BA...\nurl        otpauth://totp/OpenBao:user@test.com?algorithm=SHA1&digits=6&issuer=OpenBao&period=30&secret=V7MBSK324I7KF6KVW34NDFH2GYHIF6JY\n"})}),"\n",(0,s.jsx)(n.p,{children:"The response includes a base64-encoded barcode and OTP url. Both are\nequivalent. Give these to the user who is authenticating with TOTP."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"usage-1",children:"Usage"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"As a user, validate a TOTP code generated by a third-party app:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"$ bao write totp/code/my-user code=886531\nKey      Value\n---      -----\nvalid    true\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,s.jsxs)(n.p,{children:["The TOTP secrets engine has a full HTTP API. Please see the\n",(0,s.jsx)(n.a,{href:"/api-docs/secret/totp",children:"TOTP secrets engine API"})," for more\ndetails."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(96540);const r={},a=s.createContext(r);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);