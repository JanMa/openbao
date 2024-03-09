"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[764],{67689:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=n(74848),t=n(28453);const i={sidebar_label:"K/V Version 1",description:"The KV secrets engine can store arbitrary secrets."},a="KV secrets engine - version 1",l={id:"secrets/kv/kv-v1",title:"KV secrets engine - version 1",description:"The KV secrets engine can store arbitrary secrets.",source:"@site/content/docs/secrets/kv/kv-v1.mdx",sourceDirName:"secrets/kv",slug:"/secrets/kv/kv-v1",permalink:"/openbao/docs/secrets/kv/kv-v1",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/secrets/kv/kv-v1.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"K/V Version 1",description:"The KV secrets engine can store arbitrary secrets."},sidebar:"docs",previous:{title:"Overview",permalink:"/openbao/docs/secrets/kv/"},next:{title:"K/V Version 2",permalink:"/openbao/docs/secrets/kv/kv-v2"}},c={},o=[{value:"Setup",id:"setup",level:2},{value:"Usage",id:"usage",level:2},{value:"TTLs",id:"ttls",level:2},{value:"Tutorial",id:"tutorial",level:2},{value:"API",id:"api",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"kv-secrets-engine---version-1",children:"KV secrets engine - version 1"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"kv"})," secrets engine is used to store arbitrary secrets within the\nconfigured physical storage for OpenBao."]}),"\n",(0,r.jsxs)(s.p,{children:["Writing to a key in the ",(0,r.jsx)(s.code,{children:"kv"})," backend will replace the old value; sub-fields are\nnot merged together."]}),"\n",(0,r.jsx)(s.p,{children:"Key names must always be strings. If you write non-string values directly via\nthe CLI, they will be converted into strings. However, you can preserve\nnon-string values by writing the key/value pairs to OpenBao from a JSON file or\nusing the HTTP API."}),"\n",(0,r.jsxs)(s.p,{children:["This secrets engine honors the distinction between the ",(0,r.jsx)(s.code,{children:"create"})," and ",(0,r.jsx)(s.code,{children:"update"}),"\ncapabilities inside ACL policies."]}),"\n",(0,r.jsx)(s.admonition,{type:"warning",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note"}),": Path and key names are ",(0,r.jsx)(s.em,{children:"not"})," obfuscated or encrypted; only the\nvalues set on keys are. You should not store sensitive information as part of a\nsecret's path."]})}),"\n",(0,r.jsx)(s.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsx)(s.p,{children:"To enable a version 1 kv store:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell-session",children:"$ bao secrets enable -version=1 kv\n"})}),"\n",(0,r.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(s.p,{children:["After the secrets engine is configured and a user/machine has an OpenBao token with\nthe proper permission, it can generate credentials. The ",(0,r.jsx)(s.code,{children:"kv"})," secrets engine\nallows for writing keys with arbitrary values."]}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Write arbitrary data:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell-session",children:"$ bao kv put kv/my-secret my-value=s3cr3t\nSuccess! Data written to: kv/my-secret\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Read arbitrary data:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell-session",children:"$ bao kv get kv/my-secret\nKey                 Value\n---                 -----\nmy-value            s3cr3t\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"List the keys:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell-session",children:"$ bao kv list kv/\nKeys\n----\nmy-secret\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Delete a key:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell-session",children:"$ bao kv delete kv/my-secret\nSuccess! Data deleted (if it existed) at: kv/my-secret\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["You can also use ",(0,r.jsx)(s.a,{href:"/docs/concepts/password-policies",children:"OpenBao's password policy"})," feature to generate arbitrary values."]}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Write a password policy:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell-session",children:'$ bao write sys/policies/password/example policy=-<<EOF\n\n  length=20\n\n  rule "charset" {\n    charset = "abcdefghij0123456789"\n    min-chars = 1\n  }\n\n  rule "charset" {\n    charset = "!@#$%^&*STUVWXYZ"\n    min-chars = 1\n  }\n\nEOF\n'})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Write data using the ",(0,r.jsx)(s.code,{children:"example"})," policy:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell-session",children:"$ bao kv put kv/my-generated-secret \\\n    password=$(bao read -field password sys/policies/password/example/generate)\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Read the generated data:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell-session",children:"$ bao kv get kv/my-generated-secret\n====== Data ======\nKey         Value\n---         -----\npassword    ^dajd609Xf8Zhac$dW24\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"ttls",children:"TTLs"}),"\n",(0,r.jsxs)(s.p,{children:["Unlike other secrets engines, the KV secrets engine does not enforce TTLs\nfor expiration. Instead, the ",(0,r.jsx)(s.code,{children:"lease_duration"})," is a hint for how often consumers\nshould check back for a new value."]}),"\n",(0,r.jsxs)(s.p,{children:["If provided a key of ",(0,r.jsx)(s.code,{children:"ttl"}),", the KV secrets engine will utilize this value\nas the lease duration:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell-session",children:"$ bao kv put kv/my-secret ttl=30m my-value=s3cr3t\nSuccess! Data written to: kv/my-secret\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Even with a ",(0,r.jsx)(s.code,{children:"ttl"})," set, the secrets engine ",(0,r.jsx)(s.em,{children:"never"})," removes data on its own. The\n",(0,r.jsx)(s.code,{children:"ttl"})," key is merely advisory."]}),"\n",(0,r.jsxs)(s.p,{children:["When reading a value with a ",(0,r.jsx)(s.code,{children:"ttl"}),", both the ",(0,r.jsx)(s.code,{children:"ttl"})," key ",(0,r.jsx)(s.em,{children:"and"})," the refresh interval\nwill reflect the value:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell-session",children:"$ bao kv get kv/my-secret\nKey                 Value\n---                 -----\nmy-value            s3cr3t\nttl                 30m\n"})}),"\n",(0,r.jsx)(s.h2,{id:"tutorial",children:"Tutorial"}),"\n",(0,r.jsxs)(s.p,{children:["Refer to the ",(0,r.jsx)(s.a,{href:"/tutorials/secrets-management/static-secrets",children:"Static Secrets: Key/Value Secrets\nEngine"}),"\ntutorial to learn how to set up a uniform workflow to securely store sensitive information."]}),"\n",(0,r.jsx)(s.h2,{id:"api",children:"API"}),"\n",(0,r.jsxs)(s.p,{children:["The KV secrets engine has a full HTTP API. Please see the\n",(0,r.jsx)(s.a,{href:"/api-docs/secret/kv/kv-v1",children:"KV secrets engine API"})," for more\ndetails."]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>l});var r=n(96540);const t={},i=r.createContext(t);function a(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);