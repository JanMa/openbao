"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5910],{78516:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var o=s(74848),i=s(28453);const t={description:"A description of OpenBao's duration string format used throughout OpenBao."},r="Duration string format",c={id:"concepts/duration-format",title:"Duration string format",description:"A description of OpenBao's duration string format used throughout OpenBao.",source:"@site/content/docs/concepts/duration-format.mdx",sourceDirName:"concepts",slug:"/concepts/duration-format",permalink:"/docs/concepts/duration-format",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/concepts/duration-format.mdx",tags:[],version:"current",frontMatter:{description:"A description of OpenBao's duration string format used throughout OpenBao."},sidebar:"docs",previous:{title:"Mount migration",permalink:"/docs/concepts/mount-migration"},next:{title:"User lockout",permalink:"/docs/concepts/user-lockout"}},d={},a=[{value:"How it works",id:"how-it-works",level:2},{value:"Examples",id:"examples",level:2}];function l(n){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"duration-string-format",children:"Duration string format"}),"\n",(0,o.jsxs)(e.p,{children:["OpenBao uses a unique duration string format as part of its configuration and APIs.\nThis format is used throughout OpenBao wherever durations are provided. For\nexample, telemetry configuration contains various options using this format, such as\n",(0,o.jsx)(e.code,{children:"usage_gauge_period"}),", which is the interval of collection for high-cardinality usage data."]}),"\n",(0,o.jsx)(e.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,o.jsx)(e.p,{children:"A duration string is a possibly signed sequence of decimal numbers, each with an optional fraction and\nan optional unit suffix. If no unit is given, we interpret the numbers as seconds."}),"\n",(0,o.jsx)(e.p,{children:"Valid time units are:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"ns"})," Nanoseconds"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"us"})," (or ",(0,o.jsx)(e.code,{children:"\xb5s"}),"): Microseconds"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"ms"}),": Milliseconds"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"s"}),": Seconds"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"m"}),": Minutes"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"h"}),": Hours"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"d"}),": Days"]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(e.p,{children:"Example values could be:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"100"})," (One hundred seconds, equivalent to ",(0,o.jsx)(e.code,{children:"100s"}),")"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"60h"})," (Sixty hours)"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"1.5h"})," (One and a half hours)"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"50d"})," (Fifty days)"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"100ms"})," (One hundred milliseconds)"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"50ns"})," (Fifty nanoseconds)"]}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>c});var o=s(96540);const i={},t=o.createContext(i);function r(n){const e=o.useContext(t);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),o.createElement(t.Provider,{value:e},n.children)}}}]);