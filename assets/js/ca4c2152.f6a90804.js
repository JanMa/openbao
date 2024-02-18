"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7934],{11989:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var o=t(74848),a=t(28453);const i={sidebar_label:"Overview",description:"The seal stanza configures the seal type to use for additional data protection."},s="seal stanza",r={id:"configuration/seal/index",title:"seal stanza",description:"The seal stanza configures the seal type to use for additional data protection.",source:"@site/content/docs/configuration/seal/index.mdx",sourceDirName:"configuration/seal",slug:"/configuration/seal/",permalink:"/docs/configuration/seal/",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/configuration/seal/index.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Overview",description:"The seal stanza configures the seal type to use for additional data protection."},sidebar:"docs",previous:{title:"TCP",permalink:"/docs/configuration/listener/tcp"},next:{title:"AliCloud KMS",permalink:"/docs/configuration/seal/alicloudkms"}},c={},l=[{value:"Configuration",id:"configuration",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"seal-stanza",children:[(0,o.jsx)(n.code,{children:"seal"})," stanza"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"seal"})," stanza configures the seal type to use for additional data\nprotection, such as using HSM or Cloud KMS solutions to encrypt and decrypt the\nroot key. This stanza is optional, and in the case of the root key, OpenBao\nwill use the Shamir algorithm to cryptographically split the root key if this\nis not configured."]}),"\n",(0,o.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsxs)(n.p,{children:["Seal configuration can be done through the OpenBao configuration file using the\n",(0,o.jsx)(n.code,{children:"seal"})," stanza:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-hcl",children:"seal [NAME] {\n  # ...\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"For example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-hcl",children:'seal "pkcs11" {\n  # ...\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"For configuration options which also read an environment variable, the\nenvironment variable will take precedence over values in the configuration file."})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var o=t(96540);const a={},i=o.createContext(a);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);