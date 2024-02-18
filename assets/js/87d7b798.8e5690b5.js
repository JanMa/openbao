"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7689],{29383:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=t(74848),r=t(28453);const s={description:"Recovery mode allows for doing surgery on an OpenBao that won't start."},a="Recovery mode",i={id:"concepts/recovery-mode",title:"Recovery mode",description:"Recovery mode allows for doing surgery on an OpenBao that won't start.",source:"@site/content/docs/concepts/recovery-mode.mdx",sourceDirName:"concepts",slug:"/concepts/recovery-mode",permalink:"/openbao/docs/concepts/recovery-mode",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/concepts/recovery-mode.mdx",tags:[],version:"current",frontMatter:{description:"Recovery mode allows for doing surgery on an OpenBao that won't start."},sidebar:"docs",previous:{title:"PGP, GnuPG and Keybase",permalink:"/openbao/docs/concepts/pgp-gpg-keybase"},next:{title:"Resource quotas",permalink:"/openbao/docs/concepts/resource-quotas"}},d={},c=[{value:"Recovery process",id:"recovery-process",level:2},{value:"Integrated storage for HA only (ha_storage)",id:"integrated-storage-for-ha-only-ha_storage",level:2},{value:"Integrated storage",id:"integrated-storage",level:2},{value:"Recovery tokens",id:"recovery-tokens",level:2},{value:"Raw requests",id:"raw-requests",level:2},{value:"Reform the raft cluster",id:"reform-the-raft-cluster",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"recovery-mode",children:"Recovery mode"}),"\n",(0,o.jsxs)(n.p,{children:["OpenBao can be started using the ",(0,o.jsx)(n.code,{children:"-recovery"})," flag to bring it up in Recovery Mode.\nThe main purpose of recovery mode is to allow direct access to storage in case\nOpenBao isn't starting up due to some newly discovered bug.  This probably won't\nbe helpful without an OpenBao expert on hand to advise."]}),"\n",(0,o.jsx)(n.p,{children:"Differences between recovery mode and regular OpenBao operation:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"none of the usual subsystems run, e.g. expiration, clustering, RPCs from other nodes"}),"\n",(0,o.jsx)(n.li,{children:"instead of a regular unseal request, unseal a node by generating a recovery token"}),"\n",(0,o.jsxs)(n.li,{children:["all requests are to ",(0,o.jsx)(n.code,{children:"sys/raw"})," and are authenticated using the recovery token"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"recovery-process",children:"Recovery process"}),"\n",(0,o.jsx)(n.p,{children:"The usual way recovery mode is used is:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"seal or stop all nodes in the cluster"}),"\n",(0,o.jsxs)(n.li,{children:["if using Integrated Storage, run ",(0,o.jsx)(n.code,{children:"bao status"})," on each node to find the highest-index ones\n(this will require they be running and sealed, as if unsealed a new leader might be\nelected and writes could happen, confusing the issue)"]}),"\n",(0,o.jsx)(n.li,{children:"restart the target node in recovery mode"}),"\n",(0,o.jsx)(n.li,{children:"generate a recovery token on that node"}),"\n",(0,o.jsx)(n.li,{children:"use the recovery token to perform sys/raw requests to repair the node"}),"\n",(0,o.jsx)(n.li,{children:"if using Integrated Storage, reform the raft cluster as described below"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"integrated-storage-for-ha-only-ha_storage",children:"Integrated storage for HA only (ha_storage)"}),"\n",(0,o.jsxs)(n.p,{children:["If Integrated Storage is used in hybrid mode (i.e. for ",(0,o.jsx)(n.code,{children:"ha_storage"}),"),\nrecovery mode will not allow for changes to the Raft data but instead allow for\nmodification of the underlying physical data that is associated with OpenBao's\nstorage backend.  This means that the notes regarding Integrated Storage in\nthis doc do not apply."]}),"\n",(0,o.jsx)(n.h2,{id:"integrated-storage",children:"Integrated storage"}),"\n",(0,o.jsx)(n.p,{children:"With Integrated Storage, not all nodes are equal.  It's possible that some\nnodes are further behind - i.e. haven't applied as many Raft logs.  It is\nimportant when choosing a node to use for recovery that it has the highest\nAppliedIndex found in the cluster."}),"\n",(0,o.jsxs)(n.p,{children:["Each node's AppliedIndex value can be obtained by running ",(0,o.jsx)(n.code,{children:"bao status"})," against\nthe node sealed nodes of the cluster after bringing it down."]}),"\n",(0,o.jsx)(n.h2,{id:"recovery-tokens",children:"Recovery tokens"}),"\n",(0,o.jsx)(n.p,{children:"Recovery tokens are issued in much the same way as root tokens are generated,\nonly using a different endpoint, and the OpenBao node must be sealed first.\nUnlike root tokens, the recovery token is not persisted, so if OpenBao\nis restarted into recovery mode a new one must be generated."}),"\n",(0,o.jsx)(n.p,{children:"Only a single recovery token can be generated. If lost, restart OpenBao and\ngenerate a new one."}),"\n",(0,o.jsx)(n.h2,{id:"raw-requests",children:"Raw requests"}),"\n",(0,o.jsxs)(n.p,{children:["Requests can be issued to ",(0,o.jsx)(n.code,{children:"sys/raw"})," in just the same way as in regular OpenBao\nserver mode. The only difference is that in recovery mode, ",(0,o.jsx)(n.code,{children:"X-Vault-Token"}),"\nmust contain a recovery token instead of a service or batch token."]}),"\n",(0,o.jsx)(n.h2,{id:"reform-the-raft-cluster",children:"Reform the raft cluster"}),"\n",(0,o.jsx)(n.p,{children:"Recovery mode OpenBao automatically resizes the cluster to size 1.  This is\nnecessary because the Raft protocol won't allow changes to be made without a\nquorum, and in recovery mode we wish to make changes using a single node."}),"\n",(0,o.jsxs)(n.p,{children:["This means that after having used recovery mode, part of the procedure for\nreturning to active service must include re-forming the raft cluster.  There\nare two ways to do so: either delete the OpenBao data directory on the other nodes\nand re-join them to the recovered node, or use the\n",(0,o.jsx)(n.a,{href:"/docs/concepts/integrated-storage#manual-recovery-using-peers-json",children:"Manual Recovery Using peers.json"}),"\napproach to get all nodes to agree on what nodes are part of the cluster."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var o=t(96540);const r={},s=o.createContext(r);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);