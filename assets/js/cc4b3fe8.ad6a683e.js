"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4011],{92100:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var n=r(74848),s=r(28453);const i={layout:"docs",page_title:"Telemetry reference: Core system metrics",description:"Technical reference for core system telemetry values."},l="Core system telemetry",c={id:"internals/telemetry/metrics/core-system",title:"Core system telemetry",description:"Technical reference for core system telemetry values.",source:"@site/content/docs/internals/telemetry/metrics/core-system.mdx",sourceDirName:"internals/telemetry/metrics",slug:"/internals/telemetry/metrics/core-system",permalink:"/openbao/docs/internals/telemetry/metrics/core-system",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/internals/telemetry/metrics/core-system.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"Telemetry reference: Core system metrics",description:"Technical reference for core system telemetry values."},sidebar:"tutorialSidebar",previous:{title:"Availability telemetry",permalink:"/openbao/docs/internals/telemetry/metrics/availability"},next:{title:"Database telemetry",permalink:"/openbao/docs/internals/telemetry/metrics/database"}},d={},h=[{value:"Default metrics",id:"default-metrics",level:2},{value:"Barrier metrics",id:"barrier-metrics",level:2},{value:"Caching metrics",id:"caching-metrics",level:2},{value:"Metric collection metrics",id:"metric-collection-metrics",level:2},{value:"Quota metrics",id:"quota-metrics",level:2},{value:"Rollback metrics",id:"rollback-metrics",level:2},{value:"Route metrics",id:"route-metrics",level:2},{value:"Runtime metrics",id:"runtime-metrics",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"core-system-telemetry",children:"Core system telemetry"}),"\n",(0,n.jsx)(t.p,{children:"Core system telemetry provides information about the operational health of your\nOpenBao instance."}),"\n",(0,n.jsx)(t.h2,{id:"default-metrics",children:"Default metrics"}),"\n",(0,n.jsx)(t.h3,{children:"vault.core.active ((#vault-core-active))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"gauge"}),(0,n.jsx)(t.td,{children:"boolean"}),(0,n.jsx)(t.td,{children:"Indicates whether the OpenBao node is active"})]})})]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["A value of ",(0,n.jsx)(t.code,{children:"1"})," indicates that the node is active."]}),"\n",(0,n.jsxs)(t.li,{children:["A value of ",(0,n.jsx)(t.code,{children:"0"})," indicates that the node is in standby."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{children:"vault.core.activity.fragment_size ((#vault-core-activity-fragment_size))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"counter"}),(0,n.jsx)(t.td,{children:"number"}),(0,n.jsxs)(t.td,{children:["Number of ",(0,n.jsx)(t.code,{children:"type"})," objects observed by the local node"]})]})})]}),"\n",(0,n.jsx)(t.p,{children:"The fragment size metric includes labels to indicate if the objects counted were\nentities or tokens."}),"\n",(0,n.jsx)(t.h3,{children:"vault.core.activity.segment_write ((#vault-core-activity-segment_write))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"summary"}),(0,n.jsx)(t.td,{children:"ms"}),(0,n.jsx)(t.td,{children:"Time required to write activity log segments to storage"})]})})]}),"\n",(0,n.jsx)(t.h3,{children:"vault.core.check_token ((#vault-core-check_token))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"summary"}),(0,n.jsx)(t.td,{children:"ms"}),(0,n.jsx)(t.td,{children:"Time required to complete a token check"})]})})]}),"\n",(0,n.jsx)(t.h3,{children:"vault.core.fetch_acl_and_token ((#vault-core-fetch_acl_and_token))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"summary"}),(0,n.jsx)(t.td,{children:"ms"}),(0,n.jsx)(t.td,{children:"Time required to fetch ACL and token entries"})]})})]}),"\n",(0,n.jsx)(t.h3,{children:"vault.core.handle_login_request ((#vault-core-handle_login_request))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"summary"}),(0,n.jsx)(t.td,{children:"ms"}),(0,n.jsx)(t.td,{children:"Time required to complete a login request"})]})})]}),"\n",(0,n.jsx)(t.h3,{children:"vault.core.handle_request ((#vault-core-handle_request))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"summary"}),(0,n.jsx)(t.td,{children:"ms"}),(0,n.jsx)(t.td,{children:"Time required to complete a non-login request"})]})})]}),"\n",(0,n.jsx)(t.h3,{children:"vault.core.in_flight_requests ((#vault-core-in_flight_requests))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"gauge"}),(0,n.jsx)(t.td,{children:"requests"}),(0,n.jsx)(t.td,{children:"Number of requests currently in progress"})]})})]}),"\n",(0,n.jsx)(t.h3,{children:"vault.core.leadership_lost ((#vault-core-leadership_lost))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"summary"}),(0,n.jsx)(t.td,{children:"ms"}),(0,n.jsx)(t.td,{children:"Total time that a high-availability cluster node last maintained leadership"})]})})]}),"\n",(0,n.jsxs)(t.p,{children:["Leadership time updates occur whenever leadership changes. Frequent updates to\n",(0,n.jsx)(t.code,{children:"vault.core.leadership_lost"})," with low leadership times indicates flapping as\nleader status rotates between nodes."]}),"\n",(0,n.jsx)(t.h3,{children:"vault.core.leadership_setup_failed ((#vault-core-leadership_setup_failed))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"summary"}),(0,n.jsx)(t.td,{children:"ms"}),(0,n.jsx)(t.td,{children:"Time taken by the most recent leadership setup failure"})]})})]}),"\n",(0,n.jsxs)(t.p,{children:["Setup failure time is an important health metric for your high-availability\nOpenBao installation. We strongly recommend that you closely monitor\n",(0,n.jsx)(t.code,{children:"vault.core.leadership_setup_failed"})," and set alerts that keep you informed of\nthe overall cluster leadership status."]}),"\n",(0,n.jsx)(t.h3,{children:"vault.core.license.expiration_time_epoch ((#vault-core-license-expiration_time_epoch))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"gauge"}),(0,n.jsx)(t.td,{children:"timestamp"}),(0,n.jsx)(t.td,{children:"Epoch time (seconds since 1970-01-01) at which the license will expire"})]})})]}),"\n",(0,n.jsx)(t.h3,{children:"vault.core.locked_users ((#vault-core-locked_users))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"gauge"}),(0,n.jsx)(t.td,{children:"users"}),(0,n.jsx)(t.td,{children:"The number of users currently locked out of OpenBao"})]})})]}),"\n",(0,n.jsx)(t.p,{children:"The number of locked users refreshes every 15 minutes."}),"\n",(0,n.jsx)(t.h3,{children:"vault.core.mount_table.num_entries ((#vault-core-mount_table-num_entries))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"gauge"}),(0,n.jsx)(t.td,{children:"objects"}),(0,n.jsx)(t.td,{children:"Number of mounts in the given mount table"})]})})]}),"\n",(0,n.jsx)(t.p,{children:"Mountpoint count metrics include labels to indicate whether the relevant table\nis an authentication table or a logical table and whether the table is\nreplicated or local."}),"\n",(0,n.jsx)(t.h3,{children:"vault.core.mount_table.size ((#vault-core-mount_table-size))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"gauge"}),(0,n.jsx)(t.td,{children:"bytes"}),(0,n.jsx)(t.td,{children:"The current size of the relevant mount table."})]})})]}),"\n",(0,n.jsx)(t.p,{children:"Table size metrics include labels to indicate whether the relevant table is an\nauthentication table or a logical table and whether the table is replicated or\nlocal."}),"\n",(0,n.jsx)(t.h3,{children:"vault.core.post_unseal ((#vault-core-post_unseal))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"summary"}),(0,n.jsx)(t.td,{children:"ms"}),(0,n.jsx)(t.td,{children:"Time required to complete post-unseal operations"})]})})]}),"\n",(0,n.jsx)(t.h3,{children:"vault.core.pre_seal ((#vault-core-pre_seal))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"summary"}),(0,n.jsx)(t.td,{children:"ms"}),(0,n.jsx)(t.td,{children:"Time required to complete pre-seal operations"})]})})]}),"\n",(0,n.jsx)(t.h3,{children:"vault.core.seal-internal ((#vault-core-seal_internal))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"summary"}),(0,n.jsx)(t.td,{children:"ms"}),(0,n.jsx)(t.td,{children:"Time required to complete internal OpenBao seal operations"})]})})]}),"\n",(0,n.jsx)(t.h3,{children:"vault.core.seal-with-request ((#vault-core-seal_with_request))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"summary"}),(0,n.jsx)(t.td,{children:"ms"}),(0,n.jsx)(t.td,{children:"Time required to complete seal operations that were triggered by explicit request"})]})})]}),"\n",(0,n.jsx)(t.h3,{children:"vault.core.step_down ((#vault-core-step_down))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"summary"}),(0,n.jsx)(t.td,{children:"ms"}),(0,n.jsx)(t.td,{children:"Time required to step down cluster leadership"})]})})]}),"\n",(0,n.jsx)(t.h3,{children:"vault.core.unseal ((#vault-core-unseal))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"summary"}),(0,n.jsx)(t.td,{children:"ms"}),(0,n.jsx)(t.td,{children:"Time required to complete unseal operations"})]})})]}),"\n",(0,n.jsx)(t.h3,{children:"vault.core.unsealed ((#vault-core-unsealed))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"gauge"}),(0,n.jsx)(t.td,{children:"boolean"}),(0,n.jsx)(t.td,{children:"Indicates whether OpenBao is currently unsealed"})]})})]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["A value of ",(0,n.jsx)(t.code,{children:"1"})," indicates OpenBao is currently ",(0,n.jsx)(t.strong,{children:"unsealed"})," and clients ",(0,n.jsx)(t.strong,{children:"can"}),"\nread secrets."]}),"\n",(0,n.jsxs)(t.li,{children:["A value of ",(0,n.jsx)(t.code,{children:"0"})," indicates OpenBao is currently ",(0,n.jsx)(t.strong,{children:"sealed"})," and clients ",(0,n.jsx)(t.strong,{children:"cannot"}),"\nread secrets."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"barrier-metrics",children:"Barrier metrics"}),"\n",(0,n.jsx)(t.h3,{children:"vault.barrier.delete ((#vault-barrier-delete))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"summary"}),(0,n.jsx)(t.td,{children:"ms"}),(0,n.jsxs)(t.td,{children:["Time required to complete a ",(0,n.jsx)(t.code,{children:"DELETE"})," operation at the barrier"]})]})})]}),"\n",(0,n.jsx)(t.h3,{children:"vault.barrier.get ((#vault-barrier-get))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"summary"}),(0,n.jsx)(t.td,{children:"ms"}),(0,n.jsxs)(t.td,{children:["Time required to complete a ",(0,n.jsx)(t.code,{children:"GET"})," operation at the barrier"]})]})})]}),"\n",(0,n.jsx)(t.h3,{children:"vault.barrier.list ((#vault-barrier-list))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"summary"}),(0,n.jsx)(t.td,{children:"ms"}),(0,n.jsxs)(t.td,{children:["Time required to complete a ",(0,n.jsx)(t.code,{children:"LIST"})," operation at the barrier"]})]})})]}),"\n",(0,n.jsx)(t.h3,{children:"vault.barrier.put ((#vault-barrier-put))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"summary"}),(0,n.jsx)(t.td,{children:"ms"}),(0,n.jsxs)(t.td,{children:["Time required to complete a ",(0,n.jsx)(t.code,{children:"PUT"})," operation at the barrier"]})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"caching-metrics",children:"Caching metrics"}),"\n",(0,n.jsx)(t.h3,{children:"vault.cache.delete ((#vault-cache-delete))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"counter"}),(0,n.jsx)(t.td,{children:"number"}),(0,n.jsx)(t.td,{children:"Number of deletes from the LRU cache"})]})})]}),"\n",(0,n.jsx)(t.h3,{children:"vault.cache.hit ((#vault-cache-hit))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"counter"}),(0,n.jsx)(t.td,{children:"number"}),(0,n.jsx)(t.td,{children:"Number of hits against the LRU cache that avoided a read from configured storage"})]})})]}),"\n",(0,n.jsx)(t.h3,{children:"vault.cache.miss ((#vault-cache-miss))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"counter"}),(0,n.jsx)(t.td,{children:"number"}),(0,n.jsx)(t.td,{children:"Number of misses against the LRU cache that required a read from configured storage"})]})})]}),"\n",(0,n.jsx)(t.h3,{children:"vault.cache.write ((#vault-cache-write))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"counter"}),(0,n.jsx)(t.td,{children:"number"}),(0,n.jsx)(t.td,{children:"Number of writes to the LRU cache"})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"metric-collection-metrics",children:"Metric collection metrics"}),"\n",(0,n.jsx)(t.h3,{children:"vault.metrics.collection ((#vault-metrics-collection))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"summary"}),(0,n.jsx)(t.td,{children:"ms"}),(0,n.jsx)(t.td,{children:"The average time required (per gauge type) to collect usage data"})]})})]}),"\n",(0,n.jsx)(t.h3,{children:"vault.metrics.collection.error ((#vault-metrics-collection-error))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"counter"}),(0,n.jsx)(t.td,{children:"number"}),(0,n.jsx)(t.td,{children:"The total number of errors (per gauge type) that OpenBao encountered while collecting usage data"})]})})]}),"\n",(0,n.jsx)(t.h3,{children:"vault.metrics.collection.interval ((#vault-metrics-collection-interval))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Units"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"summary"}),(0,n.jsx)(t.td,{children:"time duration"}),(0,n.jsxs)(t.td,{children:["The current value of ",(0,n.jsx)(t.code,{children:"usage_gauge_period"})]})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"quota-metrics",children:"Quota metrics"}),"\n",(0,n.jsxs)(t.p,{children:["Quota metrics relate to rate limit and lease count quotas. Each metric comes\nwith a ",(0,n.jsx)(t.code,{children:"name"})," label that identifies the specific quota."]}),"\n",(0,n.jsx)(t.h3,{children:"vault.quota.lease_count.counter ((#vault-quota-lease_count-counter))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"gauge"}),(0,n.jsx)(t.td,{children:"lease"}),(0,n.jsx)(t.td,{children:"Total number of leases associated with the named quota rule"})]})})]}),"\n",(0,n.jsxs)(t.p,{children:["The number of leases reported is specific to the quota rule listed in the ",(0,n.jsx)(t.code,{children:"name"}),"\nlabel, not the number of leases in general. For example, if the named rule\nallows for 50 leases max and there are currently 40 leases in the scope of that\nquota rule, the value of ",(0,n.jsx)(t.code,{children:"vault.quota.lease_count.counter"})," is 40 even if there\nare 1000 other leases that are unscoped or in the scope of other quota rules."]}),"\n",(0,n.jsx)(t.h3,{children:"vault.quota.lease_count.max ((#vault-quota-lease_count-max))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"gauge"}),(0,n.jsx)(t.td,{children:"lease"}),(0,n.jsx)(t.td,{children:"Maximum number of leases allowed by the named quota rule"})]})})]}),"\n",(0,n.jsx)(t.h3,{children:"vault.quota.lease_count.violation ((#vault-quota-lease_count-violation))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"counter"}),(0,n.jsx)(t.td,{children:"number"}),(0,n.jsx)(t.td,{children:"Number of requests rejected due to exceeding the named lease count quota"})]})})]}),"\n",(0,n.jsx)(t.h3,{children:"vault.quota.rate_limit.violation ((#vault-quota-rate_limit-violation))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"counter"}),(0,n.jsx)(t.td,{children:"number"}),(0,n.jsx)(t.td,{children:"Number of requests rejected due to exceeding the named rate limit quota rule"})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"rollback-metrics",children:"Rollback metrics"}),"\n",(0,n.jsxs)(t.p,{children:["Rollback metrics for each configured mount point. Metric names convert\nforward slashes (",(0,n.jsx)(t.code,{children:"/"}),") in mount names to dashes (",(0,n.jsx)(t.code,{children:"-"}),"). For example, if you\nhave the ",(0,n.jsx)(t.code,{children:"auth/token"})," backend configured, the corresponding mount point metric\nstring is ",(0,n.jsx)(t.code,{children:"auth-token"})]}),"\n",(0,n.jsx)(t.h3,{children:"vault.rollback.attempt.{MOUNTPOINT} ((#vault-rollback-attempt-mountpoint))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"summary"}),(0,n.jsx)(t.td,{children:"ms"}),(0,n.jsx)(t.td,{children:"Time required to perform a rollback operation on the given mount point"})]})})]}),"\n",(0,n.jsx)(t.h3,{children:"vault.rollback.inflight ((#vault-rollback-inflight))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"gauge"}),(0,n.jsx)(t.td,{children:"number"}),(0,n.jsx)(t.td,{children:"Number of rollback operations inflight"})]})})]}),"\n",(0,n.jsx)(t.h3,{children:"vault.rollback.queued ((#vault-rollback-queued))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"guage"}),(0,n.jsx)(t.td,{children:"number"}),(0,n.jsx)(t.td,{children:"The number of rollback operations waiting to be started"})]})})]}),"\n",(0,n.jsx)(t.h3,{children:"vault.rollback.waiting ((#vault-rollback-waiting))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"summary"}),(0,n.jsx)(t.td,{children:"ms"}),(0,n.jsx)(t.td,{children:"Time between queueing a rollback operation and the operation starting"})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"route-metrics",children:"Route metrics"}),"\n",(0,n.jsxs)(t.p,{children:["Mount-specific route metrics for each configured mount point. Metric names\nconvert forward slashes (",(0,n.jsx)(t.code,{children:"/"}),") in mount names to dashes (",(0,n.jsx)(t.code,{children:"-"}),"). For example, if\nyou have the ",(0,n.jsx)(t.code,{children:"auth/token"})," backend configured, the corresponding mount point\nmetric string is ",(0,n.jsx)(t.code,{children:"auth-token"})]}),"\n",(0,n.jsx)(t.h3,{children:"vault.route.create.{MOUNTPOINT} ((#vault-route-create-mountpoint))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"summary"}),(0,n.jsx)(t.td,{children:"ms"}),(0,n.jsx)(t.td,{children:"Time required to send a create request to the backend and for the backend to complete the operation for the given mount point"})]})})]}),"\n",(0,n.jsx)(t.h3,{children:"vault.route.delete.{MOUNTPOINT} ((#vault-route-delete-mountpoint))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"summary"}),(0,n.jsx)(t.td,{children:"ms"}),(0,n.jsx)(t.td,{children:"Time required to send a delete request to the backend and for the backend to complete the operation for the given mount point"})]})})]}),"\n",(0,n.jsx)(t.h3,{children:"vault.route.list.{MOUNTPOINT} ((#vault-route-list-mountpoint))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"summary"}),(0,n.jsx)(t.td,{children:"ms"}),(0,n.jsx)(t.td,{children:"Time required to send a list request to the backend and for the backend to complete the operation for the given mount point"})]})})]}),"\n",(0,n.jsx)(t.h3,{children:"vault.route.read.{MOUNTPOINT} ((#vault-route-read-mountpoint))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"summary"}),(0,n.jsx)(t.td,{children:"ms"}),(0,n.jsx)(t.td,{children:"Time required to send a read request to the backend and for the backend to complete the operation for the given mount point"})]})})]}),"\n",(0,n.jsx)(t.h3,{children:"vault.route.rollback.{MOUNTPOINT} ((#vault-route-rollback-mountpoint))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"summary"}),(0,n.jsx)(t.td,{children:"ms"}),(0,n.jsx)(t.td,{children:"Time required to send a rollback request to the backend and for the backend to complete the operation for the given mount point"})]})})]}),"\n",(0,n.jsx)(t.p,{children:"OpenBao automatically schedules and performs mount point rollback operations to\nclean up partial errors."}),"\n",(0,n.jsx)(t.h2,{id:"runtime-metrics",children:"Runtime metrics"}),"\n",(0,n.jsxs)(t.p,{children:["Runtime metrics relate specifically to the ",(0,n.jsx)(t.strong,{children:"Go runtime"})," for your OpenBao\ninstance."]}),"\n",(0,n.jsx)(t.h3,{children:"vault.runtime.alloc_bytes ((#vault-runtime-alloc_bytes))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"gauge"}),(0,n.jsx)(t.td,{children:"bytes"}),(0,n.jsx)(t.td,{children:"Space currently allocated to OpenBao processes"})]})})]}),"\n",(0,n.jsx)(t.p,{children:"The number of allocated bytes may peak from time to time, but should\nalways return to a steady state value in a health OpenBao installation."}),"\n",(0,n.jsx)(t.h3,{children:"vault.runtime.free_count ((#vault-runtime-free_count))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"gauge"}),(0,n.jsx)(t.td,{children:"number"}),(0,n.jsx)(t.td,{children:"Number of freed objects"})]})})]}),"\n",(0,n.jsx)(t.h3,{children:"vault.runtime.gc_pause_ns ((#vault-runtime-gc_pause_ns))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"summary"}),(0,n.jsx)(t.td,{children:"ns"}),(0,n.jsx)(t.td,{children:"Time required to complete the last garbage collection run"})]})})]}),"\n",(0,n.jsx)(t.h3,{children:"vault.runtime.heap_objects ((#vault-runtime-heap_objects))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"gauge"}),(0,n.jsx)(t.td,{children:"number"}),(0,n.jsx)(t.td,{children:"Total number of objects on the heap in memory"})]})})]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"vault.runtime.heap_objects"})," metric is a good memory pressure indicator. We\nrecommend monitoring ",(0,n.jsx)(t.code,{children:"vault.runtime.heap_objects"})," to establish an accurate\nbaseline and thresholds for alerting on the health of your OpenBao installation."]}),"\n",(0,n.jsx)(t.h3,{children:"vault.runtime.malloc_count ((#vault-runtime-malloc_count))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"gauge"}),(0,n.jsx)(t.td,{children:"number"}),(0,n.jsx)(t.td,{children:"Total number of allocated heap objects in memory"})]})})]}),"\n",(0,n.jsx)(t.h3,{children:"vault.runtime.num_goroutines ((#vault-runtime-num_goroutines))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"gauge"}),(0,n.jsx)(t.td,{children:"number"}),(0,n.jsx)(t.td,{children:"Total number of Go routines running in memory"})]})})]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"vault.runtime.num_goroutines"})," metric is a good system load indicator. We\nrecommend monitoring ",(0,n.jsx)(t.code,{children:"vault.runtime.num_goroutines"})," to establish an accurate\nbaseline and thresholds for alerting on the health of your OpenBao installation."]}),"\n",(0,n.jsx)(t.h3,{children:"vault.runtime.sys_bytes ((#vault-runtime-sys_bytes))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"gauge"}),(0,n.jsx)(t.td,{children:"number"}),(0,n.jsx)(t.td,{children:"Total number of bytes allocated to OpenBao"})]})})]}),"\n",(0,n.jsx)(t.p,{children:"The total number of allocated system bytes includes space currently used by the\nheap plus space that has been reclaimed by, but not returned to, the operating\nsystem."}),"\n",(0,n.jsx)(t.h3,{children:"vault.runtime.total_gc_pause_ns ((#vault-runtime-total_gc_pause_ns))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"gauge"}),(0,n.jsx)(t.td,{children:"ns"}),(0,n.jsx)(t.td,{children:"The total garbage collector pause time since OpenBao was last started"})]})})]}),"\n",(0,n.jsx)(t.h3,{children:"vault.runtime.total_gc_runs ((#vault-runtime-total_gc_runs))"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric type"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"gauge"}),(0,n.jsx)(t.td,{children:"number"}),(0,n.jsx)(t.td,{children:"The total number of garbage collection runs since OpenBao was last started"})]})})]})]})}function o(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>c});var n=r(96540);const s={},i=n.createContext(s);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);