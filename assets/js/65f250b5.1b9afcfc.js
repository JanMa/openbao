"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[892],{10791:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var o=a(74848),t=a(28453);const s={sidebar_label:"Storage",description:"OpenBao relies on external storage to save its durable information."},r="Storage",i={id:"concepts/storage",title:"Storage",description:"OpenBao relies on external storage to save its durable information.",source:"@site/content/docs/concepts/storage.mdx",sourceDirName:"concepts",slug:"/concepts/storage",permalink:"/openbao/docs/concepts/storage",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/concepts/storage.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Storage",description:"OpenBao relies on external storage to save its durable information."},sidebar:"docs",previous:{title:"High Availability",permalink:"/openbao/docs/concepts/ha"},next:{title:"Overview",permalink:"/openbao/docs/concepts/integrated-storage/"}},c={},d=[{value:"Supported storage backends",id:"supported-storage-backends",level:2},{value:"Backups",id:"backups",level:2},{value:"The big question - why take backups?",id:"the-big-question---why-take-backups",level:3},{value:"Backing up OpenBao&#39;s persisted data",id:"backing-up-openbaos-persisted-data",level:3},{value:"Configuration",id:"configuration",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"storage",children:"Storage"}),"\n",(0,o.jsxs)(n.p,{children:["As described on our ",(0,o.jsx)(n.a,{href:"/docs/internals/architecture",children:"Architecture"})," page, OpenBao's\nstorage backend is untrusted storage used purely to keep encrypted information."]}),"\n",(0,o.jsx)(n.h2,{id:"supported-storage-backends",children:"Supported storage backends"}),"\n",(0,o.jsxs)(n.p,{children:["Many other options for storage are available for OpenBao - see our\n",(0,o.jsx)(n.a,{href:"/docs/configuration/storage",children:"Storage Configuration"})," section for more\ninformation."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Choosing a storage backend:"})," Refer to the ",(0,o.jsx)(n.a,{href:"/docs/configuration/storage#integrated-storage-vs-external-storage",children:"integrated storage vs. external\nstorage"}),"\nsection of the storage configuration page to help make a decision about which\nstorage backend to use."]})}),"\n",(0,o.jsx)(n.h2,{id:"backups",children:"Backups"}),"\n",(0,o.jsx)(n.p,{children:"Due to the highly flexible nature of OpenBao's potential storage configurations,\nproviding exact guidance on backing up OpenBao is challenging."}),"\n",(0,o.jsx)(n.p,{children:"When backing up OpenBao, there are two pieces to consider:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"OpenBao's encrypted data in the storage backend"}),"\n",(0,o.jsx)(n.li,{children:"Configuration files and management scripts for running the OpenBao server"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"There's also a big question - what is the error case you're trying to guard\nagainst by saving a backup?"}),"\n",(0,o.jsx)(n.h3,{id:"the-big-question---why-take-backups",children:"The big question - why take backups?"}),"\n",(0,o.jsx)(n.p,{children:'It\'s important to consider the question of "why take a backup" while developing\nyour ongoing backup and disaster recovery strategy.'}),"\n",(0,o.jsx)(n.p,{children:"Taking a backup is recommended prior to upgrades, as downgrading OpenBao storage\nis not always possible. Generally, a backup is recommended any time a major\nchange is planned for a cluster."}),"\n",(0,o.jsxs)(n.p,{children:["More specifically, we recommend taking backups ",(0,o.jsx)(n.strong,{children:"before"}),", but not during, write\noperations to the ",(0,o.jsx)(n.code,{children:"/sys"})," API (excluding the ",(0,o.jsx)(n.code,{children:"/sys/leases"}),", ",(0,o.jsx)(n.code,{children:"/sys/namespaces"}),",\n",(0,o.jsx)(n.code,{children:"/sys/tools"}),", ",(0,o.jsx)(n.code,{children:"/sys/wrapping"}),", ",(0,o.jsx)(n.code,{children:"/sys/policies"}),", and ",(0,o.jsx)(n.code,{children:"/sys/pprof"})," endpoints).\nSome examples of workflows that write to the ",(0,o.jsx)(n.code,{children:"/sys"})," API are upgrades and rekeys.\nIn the future, this guidance may change for the Integrated Storage backend."]}),"\n",(0,o.jsxs)(n.p,{children:["Backups ",(0,o.jsx)(n.em,{children:"can"})," also help with accidental data deletions or modifications. In\nthis case, the story can get a little tricky. If you simply recover a backup\nfrom 5AM with the correct data, but the current time is 10AM, you will lose data\nwritten between 5 and 10AM. Lucy Davinhart gave a HashiConf talk that serves as\nan interesting ",(0,o.jsx)(n.a,{href:"https://www.hashicorp.com/resources/oh-no-i-deleted-my-vault-secret",children:"case\nstudy"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["We do not recommend backups as protection against the failure of an individual\nmachine. OpenBao servers can run in clusters, so to protect against server\nfailure, we recommend running OpenBao in ",(0,o.jsx)(n.a,{href:"/docs/internals/high-availability",children:"HA\nmode"}),". An  OpenBao cluster can extend\nacross multiple availability zones within a region."]}),"\n",(0,o.jsxs)(n.p,{children:["When using OpenBao in ",(0,o.jsx)(n.a,{href:"/docs/internals/high-availability",children:"HA Mode"}),", a\nbackup can help guard against the failure of a data center."]}),"\n",(0,o.jsx)(n.p,{children:"Ultimately, backups are not a replacement for running in HA. As you develop a\nplan for recovering from or guarding against failure, you should consider both\nbackups and HA as critical components of that plan."}),"\n",(0,o.jsx)(n.h3,{id:"backing-up-openbaos-persisted-data",children:"Backing up OpenBao's persisted data"}),"\n",(0,o.jsxs)(n.p,{children:["Backups and restores are ideally performed while OpenBao is offline. If offline\nbackups are not feasible, we recommend using a storage backend that supports\natomic snapshots (such as ",(0,o.jsx)(n.a,{href:"/docs/commands/operator/raft#snapshot",children:"Integrated\nStorage"}),")."]}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"If your storage backend does not support atomic snapshots, we recommend only\ntaking offline backups."})}),"\n",(0,o.jsx)(n.p,{children:"To perform a backup or restore of OpenBao's encrypted data when using an\nofficially supported storage backend, see the instructions linked below. For\nother storage backends, follow the documentation of that backend for taking and\nrestoring backups."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Integrated Storage ",(0,o.jsx)(n.a,{href:"/docs/commands/operator/raft#snapshot",children:"snapshots"})]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsx)(n.p,{children:"In addition to backing up OpenBao's encrypted data via the storage backend, you\nmay also wish to save the server configuration files, any scripts for managing\nthe OpenBao service, and ensure you can reinstall any user-installed plugins. The\nlocation of these files will be specific to your installation of OpenBao."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"NOTE"}),": Although a backup or snapshot of OpenBao's data from the storage\nbackend is encrypted, some of your configuration may be sensitive (an OpenBao token\nfor Transit Autounseal or a TLS private key in your configuration, for example).\nThe presence of this information in your backups will mean that they may need\nto be carefully protected."]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>i});var o=a(96540);const t={},s=o.createContext(t);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);