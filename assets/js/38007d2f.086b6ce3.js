"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[355],{17030:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var s=t(74848),r=t(28453);const o={layout:"docs",page_title:"OpenBao Proxy Persistent Caching",description:"OpenBao Proxy Caching"},a="OpenBao proxy persistent caching",c={id:"agent-and-proxy/proxy/caching/persistent-caches/index",title:"OpenBao proxy persistent caching",description:"OpenBao Proxy Caching",source:"@site/content/docs/agent-and-proxy/proxy/caching/persistent-caches/index.mdx",sourceDirName:"agent-and-proxy/proxy/caching/persistent-caches",slug:"/agent-and-proxy/proxy/caching/persistent-caches/",permalink:"/openbao/docs/agent-and-proxy/proxy/caching/persistent-caches/",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/agent-and-proxy/proxy/caching/persistent-caches/index.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"OpenBao Proxy Persistent Caching",description:"OpenBao Proxy Caching"},sidebar:"tutorialSidebar",previous:{title:"OpenBao proxy caching",permalink:"/openbao/docs/agent-and-proxy/proxy/caching/"},next:{title:"OpenBao proxy kubernetes persistent cache",permalink:"/openbao/docs/agent-and-proxy/proxy/caching/persistent-caches/kubernetes"}},i={},p=[{value:"OpenBao proxy persistent cache types",id:"openbao-proxy-persistent-cache-types",level:2},{value:"Persistent cache example configuration",id:"persistent-cache-example-configuration",level:2}];function h(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"openbao-proxy-persistent-caching",children:"OpenBao proxy persistent caching"}),"\n",(0,s.jsx)(n.p,{children:"OpenBao Proxy can restore tokens and leases from a persistent cache file created\nby a previous OpenBao Proxy process. The persistent cache is a BoltDB file that\nincludes tuples encrypted by a generated encryption key. The encrypted tuples\ninclude the OpenBao token used to retrieve secrets, leases for tokens/secrets, and\nsecret values."}),"\n",(0,s.jsxs)(n.p,{children:["-> ",(0,s.jsx)(n.strong,{children:"Note:"})," OpenBao Proxy Persistent Caching will only restore ",(0,s.jsx)(n.em,{children:"leased"}),"\nsecrets. Secrets that are not renewable, such as KV v2, will not be persisted."]}),"\n",(0,s.jsx)(n.p,{children:"In order to use OpenBao Proxy persistent cache, auto-auth must be used. If the\nauto-auth token has expired by the time the cache is restored, the cache will\nbe invalidated and secrets will need to be re-fetched from OpenBao."}),"\n",(0,s.jsxs)(n.p,{children:["-> ",(0,s.jsx)(n.strong,{children:"Note"})," OpenBao Proxy persistent cache is currently supported only in a\nKubernetes environment."]}),"\n",(0,s.jsx)(n.h2,{id:"openbao-proxy-persistent-cache-types",children:"OpenBao proxy persistent cache types"}),"\n",(0,s.jsx)(n.p,{children:"Please see the sidebar for available types and their usage/configuration."}),"\n",(0,s.jsx)(n.h2,{id:"persistent-cache-example-configuration",children:"Persistent cache example configuration"}),"\n",(0,s.jsx)(n.p,{children:"Here is an example of a persistent cache configuration."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",children:'# Other OpenBao proxy configuration blocks\n# ...\n\ncache {\n  persist "kubernetes" {\n    path = "/openbao/proxy-cache"\n  }\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var s=t(96540);const r={},o=s.createContext(r);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);