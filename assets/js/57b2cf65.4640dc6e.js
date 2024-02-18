"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6051],{97094:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var o=t(74848),i=t(28453);const s={sidebar_label:"File",description:"File sink for Auto-Auth"},a="OpenBao agent and OpenBao proxy Auto-Auth file sink",r={id:"agent-and-proxy/autoauth/sinks/file",title:"OpenBao agent and OpenBao proxy Auto-Auth file sink",description:"File sink for Auto-Auth",source:"@site/content/docs/agent-and-proxy/autoauth/sinks/file.mdx",sourceDirName:"agent-and-proxy/autoauth/sinks",slug:"/agent-and-proxy/autoauth/sinks/file",permalink:"/openbao/docs/agent-and-proxy/autoauth/sinks/file",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/agent-and-proxy/autoauth/sinks/file.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"File",description:"File sink for Auto-Auth"},sidebar:"docs",previous:{title:"Overview",permalink:"/openbao/docs/agent-and-proxy/autoauth/sinks/"},next:{title:"Overview",permalink:"/openbao/docs/agent-and-proxy/proxy/"}},l={},c=[{value:"Configuration",id:"configuration",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"openbao-agent-and-openbao-proxy-auto-auth-file-sink",children:"OpenBao agent and OpenBao proxy Auto-Auth file sink"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"file"})," sink writes tokens, optionally response-wrapped and/or encrypted, to\na file. This may be a local file or a file mapped via some other process (NFS,\nGluster, CIFS, etc.)."]}),"\n",(0,o.jsx)(n.p,{children:"Once the sink writes the file, it is up to the client to control lifecycle;\ngenerally it is best for the client to remove the file as soon as it is seen."}),"\n",(0,o.jsxs)(n.p,{children:["It is also best practice to write the file to a ramdisk, ideally an encrypted\nramdisk, and use appropriate filesystem permissions. The file is currently\nwritten with ",(0,o.jsx)(n.code,{children:"0640"})," permissions as default, but can be overridden with the optional\n'mode' setting."]}),"\n",(0,o.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"path"})," ",(0,o.jsx)(n.code,{children:"(string: required)"})," - The path to use to write the token file"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"mode"})," ",(0,o.jsx)(n.code,{children:"(int: optional)"})," - A string containing an octal number representing the bit pattern for the file mode, similar to chmod. Set to ",(0,o.jsx)(n.code,{children:"0000"})," to prevent OpenBao from modifying the file mode."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["~> Note: Configuration options for response-wrapping and encryption for the sink\nfile are located within the ",(0,o.jsx)(n.a,{href:"/docs/agent-and-proxy/autoauth#configuration-sinks",children:"options common to all sinks"})," documentation."]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var o=t(96540);const i={},s=o.createContext(i);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);