"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9424],{70329:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=t(74848),o=t(28453);const i={layout:"docs",page_title:"UI - Configuration",description:"OpenBao features a user interface (web interface) for interacting with OpenBao.\nEasily create, read, update, and delete secrets, authenticate, unseal, and\nmore with the OpenBao UI."},s="OpenBao UI",r={id:"configuration/ui",title:"OpenBao UI",description:"OpenBao features a user interface (web interface) for interacting with OpenBao.\nEasily create, read, update, and delete secrets, authenticate, unseal, and\nmore with the OpenBao UI.",source:"@site/content/docs/configuration/ui.mdx",sourceDirName:"configuration",slug:"/configuration/ui",permalink:"/openbao/docs/configuration/ui",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/configuration/ui.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"UI - Configuration",description:"OpenBao features a user interface (web interface) for interacting with OpenBao.\nEasily create, read, update, and delete secrets, authenticate, unseal, and\nmore with the OpenBao UI."},sidebar:"tutorialSidebar",previous:{title:"telemetry stanza",permalink:"/openbao/docs/configuration/telemetry"},next:{title:"User lockout",permalink:"/openbao/docs/configuration/user-lockout"}},c={},l=[{value:"Activating the OpenBao UI",id:"activating-the-openbao-ui",level:2},{value:"Accessing the OpenBao UI",id:"accessing-the-openbao-ui",level:2},{value:"Note on TLS",id:"note-on-tls",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"openbao-ui",children:"OpenBao UI"}),"\n",(0,a.jsx)(n.p,{children:"OpenBao features a user interface (web interface) for interacting with OpenBao.\nEasily create, read, update, and delete secrets, authenticate, unseal, and\nmore with the OpenBao UI."}),"\n",(0,a.jsx)(n.h2,{id:"activating-the-openbao-ui",children:"Activating the OpenBao UI"}),"\n",(0,a.jsxs)(n.p,{children:["The OpenBao UI is not activated by default. To activate the UI, set the ",(0,a.jsx)(n.code,{children:"ui"}),"\nconfiguration option in the OpenBao server configuration. OpenBao clients do not\nneed to set this option, since they will not be serving the UI."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-hcl",children:'ui = true\n\nlistener "tcp" {\n  # ...\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["For more information, please see the\n",(0,a.jsx)(n.a,{href:"/docs/configuration",children:"OpenBao configuration options"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"accessing-the-openbao-ui",children:"Accessing the OpenBao UI"}),"\n",(0,a.jsxs)(n.p,{children:["The UI runs on the same port as the OpenBao listener. As such, you must configure\nat least one ",(0,a.jsx)(n.code,{children:"listener"})," stanza in order to access the UI."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-hcl",children:'listener "tcp" {\n  address = "10.0.1.35:8200"\n\n  # If bound to localhost, the OpenBao UI is only\n  # accessible from the local machine!\n  # address = "127.0.0.1:8200"\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"In this case, the UI is accessible at the following URL from any machine on the\nsubnet (provided no network firewalls are in place):"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"https://10.0.1.35:8200/ui/\n"})}),"\n",(0,a.jsx)(n.p,{children:"It is also accessible at any DNS entry that resolves to that IP address, such as\nthe Consul service address (if using Consul):"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"https://openbao.service.consul:8200/ui/\n"})}),"\n",(0,a.jsx)(n.h3,{id:"note-on-tls",children:"Note on TLS"}),"\n",(0,a.jsx)(n.p,{children:'When using TLS (recommended), the certificate must be valid for all DNS entries\nyou will be accessing the OpenBao UI on, and any IP addresses on the SAN. If you\nare running OpenBao with a self-signed certificate, any browsers that access the\nOpenBao UI will need to have the root CA installed. Failure to do so may result in\nthe browser displaying a warning that the site is "untrusted". It is highly\nrecommended that client browsers accessing the OpenBao UI install the proper CA\nroot for validation to reduce the chance of a MITM attack.'})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var a=t(96540);const o={},i=a.createContext(o);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);