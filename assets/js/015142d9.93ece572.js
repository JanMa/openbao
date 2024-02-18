"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2791],{99585:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>l,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var a=t(74848),s=t(28453);const c={sidebar_label:"Overview",description:"OpenBao Agent Caching"},r="OpenBao agent persistent caching",i={id:"agent-and-proxy/agent/caching/persistent-caches/index",title:"OpenBao agent persistent caching",description:"OpenBao Agent Caching",source:"@site/content/docs/agent-and-proxy/agent/caching/persistent-caches/index.mdx",sourceDirName:"agent-and-proxy/agent/caching/persistent-caches",slug:"/agent-and-proxy/agent/caching/persistent-caches/",permalink:"/openbao/docs/agent-and-proxy/agent/caching/persistent-caches/",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/agent-and-proxy/agent/caching/persistent-caches/index.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Overview",description:"OpenBao Agent Caching"},sidebar:"docs",previous:{title:"Overview",permalink:"/openbao/docs/agent-and-proxy/agent/caching/"},next:{title:"Kubernetes",permalink:"/openbao/docs/agent-and-proxy/agent/caching/persistent-caches/kubernetes"}},o={},p=[{value:"OpenBao agent persistent cache types",id:"openbao-agent-persistent-cache-types",level:2},{value:"Persistent cache example configuration",id:"persistent-cache-example-configuration",level:2}];function h(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"openbao-agent-persistent-caching",children:"OpenBao agent persistent caching"}),"\n",(0,a.jsx)(n.p,{children:"OpenBao Agent can restore tokens and leases from a persistent cache file created\nby a previous OpenBao Agent process. The persistent cache is a BoltDB file that\nincludes tuples encrypted by a generated encryption key. The encrypted tuples\ninclude the OpenBao token used to retrieve secrets, leases for tokens/secrets, and\nsecret values."}),"\n",(0,a.jsxs)(n.p,{children:["-> ",(0,a.jsx)(n.strong,{children:"Note:"})," OpenBao Agent Persistent Caching will only restore ",(0,a.jsx)(n.em,{children:"leased"}),"\nsecrets. Secrets that are not renewable, such as KV v2, will not be persisted."]}),"\n",(0,a.jsx)(n.p,{children:"In order to use OpenBao Agent persistent cache, auto-auth must be used. If the\nauto-auth token has expired by the time the cache is restored, the cache will\nbe invalidated and secrets will need to be re-fetched from OpenBao."}),"\n",(0,a.jsx)(n.p,{children:"If OpenBao Agent templating is enabled alongside of the persistent cache, OpenBao\nAgent will automatically route templating requests through the cache. This\nensures template requests are cached and restored properly."}),"\n",(0,a.jsxs)(n.p,{children:["-> ",(0,a.jsx)(n.strong,{children:"Note"})," OpenBao Agent persistent cache is currently supported only in a\nKubernetes environment."]}),"\n",(0,a.jsx)(n.h2,{id:"openbao-agent-persistent-cache-types",children:"OpenBao agent persistent cache types"}),"\n",(0,a.jsx)(n.p,{children:"Please see the sidebar for available types and their usage/configuration."}),"\n",(0,a.jsx)(n.h2,{id:"persistent-cache-example-configuration",children:"Persistent cache example configuration"}),"\n",(0,a.jsx)(n.p,{children:"Here is an example of a persistent cache configuration."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-hcl",children:'# Other OpenBao agent configuration blocks\n# ...\n\ncache {\n  persist "kubernetes" {\n    path = "/openbao/agent-cache"\n  }\n}\n'})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var a=t(96540);const s={},c=a.createContext(s);function r(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);