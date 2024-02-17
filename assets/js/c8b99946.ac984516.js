"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9593],{43689:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=r(74848),i=r(28453);const s={layout:"docs",page_title:"Metrics reference overview",description:"Learn about how telemetry metrics are structured in OpenBao"},d="Telemetry metrics overview",c={id:"internals/telemetry/metrics/index",title:"Telemetry metrics overview",description:"Learn about how telemetry metrics are structured in OpenBao",source:"@site/content/docs/internals/telemetry/metrics/index.mdx",sourceDirName:"internals/telemetry/metrics",slug:"/internals/telemetry/metrics/",permalink:"/openbao/docs/internals/telemetry/metrics/",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/internals/telemetry/metrics/index.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"Metrics reference overview",description:"Learn about how telemetry metrics are structured in OpenBao"},sidebar:"tutorialSidebar",previous:{title:"Enable OpenBao telemetry gathering",permalink:"/openbao/docs/internals/telemetry/enable-telemetry"},next:{title:"All OpenBao telemetry metrics",permalink:"/openbao/docs/internals/telemetry/metrics/all"}},o={},l=[{value:"Metric types",id:"metric-types",level:2},{value:"Metric labels",id:"metric-labels",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"telemetry-metrics-overview",children:"Telemetry metrics overview"}),"\n",(0,n.jsx)(t.h2,{id:"metric-types",children:"Metric types"}),"\n",(0,n.jsx)(t.p,{children:"OpenBao provides three types of telemetry metrics:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Counter metrics"})," increment when an event occurs. Counters are cumulative\nand reset at the end of reporting intervals."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Gauge metrics"})," provide measurements of current values."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Summary metrics"})," provide observational values. OpenBao commonly uses\nsummaries to measure the time required to for a discrete event to complete."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["High-cardinality gauges, like ",(0,n.jsx)(t.code,{children:"vault.kv.secret.count"}),", update at the interval\nconfigured with ",(0,n.jsx)(t.code,{children:"usage_gauge_period"})," in the ",(0,n.jsx)(t.code,{children:"telemetry"})," stanza. The default\nreporting interval for gauge metrics is 10 minutes."]}),"\n",(0,n.jsx)(t.h2,{id:"metric-labels",children:"Metric labels"}),"\n",(0,n.jsx)(t.p,{children:"Some telemetry metrics come with additional metadata that provides context for\nthe measurement. For example, a token metric might include the namespace it\nbelongs to or the authentication method used to create it."}),"\n",(0,n.jsx)(t.p,{children:"Metric metadata is labeled and incorporated into the metric name for the\nin-memory telemetry and any other telemetry engine that does not support custom\nlabels."}),"\n",(0,n.jsx)(t.p,{children:"The metric name in the table below is followed by a list of labels supported,\nin the order in which they appear, if flattened."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Label"}),(0,n.jsx)(t.th,{children:"Example"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"auth_method"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"userpass"})}),(0,n.jsx)(t.td,{children:"Authorization engine type"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"cluster"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"openbao-cluster-d54ad07"})}),(0,n.jsx)(t.td,{children:"Name of the cluster where the metric originated"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"creation_ttl"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"7d"})}),(0,n.jsxs)(t.td,{children:["Time-to-live assigned at creation, rounded up to the next-highest bucket: ",(0,n.jsx)(t.code,{children:"1m"}),", ",(0,n.jsx)(t.code,{children:"10m"}),", ",(0,n.jsx)(t.code,{children:"20m"}),", ",(0,n.jsx)(t.code,{children:"1h"}),", ",(0,n.jsx)(t.code,{children:"2h"}),", ",(0,n.jsx)(t.code,{children:"1d"}),", ",(0,n.jsx)(t.code,{children:"2d"}),", ",(0,n.jsx)(t.code,{children:"7d"}),", ",(0,n.jsx)(t.code,{children:"30d"}),", or ",(0,n.jsx)(t.code,{children:"+Inf"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"mount_point"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"auth/userpass/"})}),(0,n.jsx)(t.td,{children:"Path at which an authentication method or secret engine is mounted"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"name"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"memoryLimit"})}),(0,n.jsx)(t.td,{children:"Name of the object being aggregated (for example, a quota or quota rule)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"namespace"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"ns1"})}),(0,n.jsxs)(t.td,{children:["A namespace path or ",(0,n.jsx)(t.code,{children:"root"})," for the root namespace"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"policy"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"default"})}),(0,n.jsx)(t.td,{children:"Name of the associated policy"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"secret_engine"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"kv"})}),(0,n.jsx)(t.td,{children:"Secrets engine type"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"token_type"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"service"})}),(0,n.jsxs)(t.td,{children:["Type of the associated token: ",(0,n.jsx)(t.code,{children:"batch"})," or ",(0,n.jsx)(t.code,{children:"service"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"peer_id"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"node-1"})}),(0,n.jsx)(t.td,{children:"Unique identifier of a raft peer node"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"node_id"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"node-42"})}),(0,n.jsxs)(t.td,{children:["Unique identifier of a raft peer node (duplicates ",(0,n.jsx)(t.code,{children:"peer_id"}),")"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"snapshot_config_name"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"config1"})}),(0,n.jsx)(t.td,{children:"Name of the configuration used for automated snapshots"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>c});var n=r(96540);const i={},s=n.createContext(i);function d(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);