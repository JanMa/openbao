"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5057],{34793:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=n(74848),i=n(28453);const s={layout:"docs",page_title:"Integrated Storage Autopilot",description:"Learn about the autopilot subsystem of integrated raft storage in OpenBao."},r="Autopilot",a={id:"concepts/integrated-storage/autopilot",title:"Autopilot",description:"Learn about the autopilot subsystem of integrated raft storage in OpenBao.",source:"@site/content/docs/concepts/integrated-storage/autopilot.mdx",sourceDirName:"concepts/integrated-storage",slug:"/concepts/integrated-storage/autopilot",permalink:"/openbao/docs/concepts/integrated-storage/autopilot",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/concepts/integrated-storage/autopilot.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"Integrated Storage Autopilot",description:"Learn about the autopilot subsystem of integrated raft storage in OpenBao."},sidebar:"tutorialSidebar",previous:{title:"Integrated storage",permalink:"/openbao/docs/concepts/integrated-storage/"},next:{title:"Lease, renew, and revoke",permalink:"/openbao/docs/concepts/lease"}},l={},d=[{value:"Server stabilization",id:"server-stabilization",level:2},{value:"Dead server cleanup",id:"dead-server-cleanup",level:2},{value:"State API",id:"state-api",level:2},{value:"Follower health",id:"follower-health",level:3},{value:"Default configuration",id:"default-configuration",level:3},{value:"Tutorial",id:"tutorial",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"autopilot",children:"Autopilot"}),"\n",(0,o.jsx)(t.p,{children:"Autopilot enables automated workflows for managing Raft clusters. The current\nfeature set includes 3 main features: Server Stabilization, Dead Server Cleanup\nand State API."}),"\n",(0,o.jsx)(t.h2,{id:"server-stabilization",children:"Server stabilization"}),"\n",(0,o.jsxs)(t.p,{children:["Server stabilization helps to retain the stability of the Raft cluster by safely\njoining new voting nodes to the cluster. When a new voter node is joined to an\nexisting cluster, autopilot adds it as a non-voter instead, and waits for a\npre-configured amount of time to monitor it's health. If the node remains to be\nhealthy for the entire duration of stabilization, then that node will be\npromoted as a voter. The server stabilization period can be tuned using\n",(0,o.jsx)(t.code,{children:"server_stabilization_time"})," (see below)."]}),"\n",(0,o.jsx)(t.h2,{id:"dead-server-cleanup",children:"Dead server cleanup"}),"\n",(0,o.jsxs)(t.p,{children:["Dead server cleanup automatically removes nodes deemed unhealthy from the\nRaft cluster, avoiding the manual operator intervention. This feature can be\ntuned using the ",(0,o.jsx)(t.code,{children:"cleanup_dead_servers"}),", ",(0,o.jsx)(t.code,{children:"dead_server_last_contact_threshold"}),",\nand ",(0,o.jsx)(t.code,{children:"min_quorum"})," (see below)."]}),"\n",(0,o.jsx)(t.h2,{id:"state-api",children:"State API"}),"\n",(0,o.jsx)(t.p,{children:"State API provides detailed information about all the nodes in the Raft cluster\nin a single call. This API can be used for monitoring for cluster health."}),"\n",(0,o.jsx)(t.h3,{id:"follower-health",children:"Follower health"}),"\n",(0,o.jsx)(t.p,{children:"Follower node health is determined by 2 factors."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Its ability to heartbeat to leader node at regular intervals. Tuned using\n",(0,o.jsx)(t.code,{children:"last_contact_threshold"})," (see below)."]}),"\n",(0,o.jsxs)(t.li,{children:["Its ability to keep up with data replication from the leader node. Tuned using\n",(0,o.jsx)(t.code,{children:"max_trailing_logs"})," (see below)."]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"default-configuration",children:"Default configuration"}),"\n",(0,o.jsx)(t.p,{children:"By default, Autopilot is enabled in OpenBao, although dead server cleanup is not\nenabled by default."}),"\n",(0,o.jsxs)(t.p,{children:["Autopilot exposes a ",(0,o.jsx)(t.a,{href:"/api-docs/system/storage/raftautopilot#set-configuration",children:"configuration\nAPI"})," to manage its\nbehavior. Autopilot gets initialized with the following default values. If these\ndefault values do not meet your expected autopilot behavior, don't forget to set\nthem to your desired values."]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"cleanup_dead_servers"})," - ",(0,o.jsx)(t.code,{children:"false"})]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["This controls whether to remove dead servers from\nthe Raft peer list periodically or when a new server joins. This requires that\n",(0,o.jsx)(t.code,{children:"min-quorum"})," is also set."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"dead_server_last_contact_threshold"})," - ",(0,o.jsx)(t.code,{children:"24h"})]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Limit on the amount of time\na server can go without leader contact before being considered failed. This\ntakes effect only when ",(0,o.jsx)(t.code,{children:"cleanup_dead_servers"})," is set."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"min_quorum"})," - This doesn't default to anything and should be set to the expected\nnumber of voters in your cluster when ",(0,o.jsx)(t.code,{children:"cleanup_dead_servers"})," is set as ",(0,o.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Minimum number of servers that should always be present in a cluster.\nAutopilot will not prune servers below this number."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"max_trailing_logs"})," - ",(0,o.jsx)(t.code,{children:"1000"})]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Amount of entries in the Raft Log that a server\ncan be behind before being considered unhealthy."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"last_contact_threshold"})," - ",(0,o.jsx)(t.code,{children:"10s"})]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Limit on the amount of time a server can go without leader contact before being considered unhealthy."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"server_stabilization_time"})," - ",(0,o.jsx)(t.code,{children:"10s"})]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Minimum amount of time a server must be in a healthy state before it can become a voter. Until that happens,\nit will be visible as a peer in the cluster, but as a non-voter, meaning it won't contribute to quorum."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["~> ",(0,o.jsx)(t.strong,{children:"Note"}),": Autopilot in OpenBao does similar things to what autopilot does in\n",(0,o.jsx)(t.a,{href:"https://www.consul.io/",children:"Consul"}),". However, the configuration in these 2 systems\ndiffer in terms of default values and thresholds; some additional parameters\nmight also show up in OpenBao in comparison to Consul as well. Autopilot in OpenBao\nand Consul use different technical underpinnings requiring these differences, to\nprovide the autopilot functionality."]}),"\n",(0,o.jsx)(t.h2,{id:"tutorial",children:"Tutorial"}),"\n",(0,o.jsx)(t.p,{children:"Refer to the following tutorials to learn more."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/tutorials/raft/raft-autopilot",children:"Integrated Storage Autopilot"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/tutorials/raft/raft-redundancy-zones",children:"Fault Tolerance with Redundancy Zones"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var o=n(96540);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);