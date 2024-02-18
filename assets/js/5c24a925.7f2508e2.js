"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9108],{85173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(74848),o=n(28453);const a={sidebar_label:"Overview",description:"The storage stanza configures the storage backend, which represents the\nlocation for the durable storage of OpenBao's information. Each backend has\npros, cons, advantages, and trade-offs. For example, some backends support\nhigh availability while others provide a more robust backup and restoration\nprocess."},s="storage stanza",i={id:"configuration/storage/index",title:"storage stanza",description:"The storage stanza configures the storage backend, which represents the\nlocation for the durable storage of OpenBao's information. Each backend has\npros, cons, advantages, and trade-offs. For example, some backends support\nhigh availability while others provide a more robust backup and restoration\nprocess.",source:"@site/content/docs/configuration/storage/index.mdx",sourceDirName:"configuration/storage",slug:"/configuration/storage/",permalink:"/openbao/docs/configuration/storage/",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/configuration/storage/index.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Overview",description:"The storage stanza configures the storage backend, which represents the\nlocation for the durable storage of OpenBao's information. Each backend has\npros, cons, advantages, and trade-offs. For example, some backends support\nhigh availability while others provide a more robust backup and restoration\nprocess."},sidebar:"docs",previous:{title:"Kubernetes",permalink:"/openbao/docs/configuration/service-registration/kubernetes"},next:{title:"Filesystem",permalink:"/openbao/docs/configuration/storage/filesystem"}},d={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Integrated storage vs. external storage",id:"integrated-storage-vs-external-storage",level:2},{value:"Tutorial",id:"tutorial",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h1,{id:"storage-stanza",children:[(0,r.jsx)(t.code,{children:"storage"})," stanza"]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"storage"})," stanza configures the storage backend, which represents the\nlocation for the durable storage of OpenBao's information. Each backend has pros,\ncons, advantages, and trade-offs. For example, some backends support high\navailability while others provide a more robust backup and restoration process.\nFor information about a specific backend, choose one from the navigation on the\nleft."]}),"\n",(0,r.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(t.p,{children:["Storage backend configuration is done through the OpenBao configuration file using\nthe ",(0,r.jsx)(t.code,{children:"storage"})," stanza:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-hcl",children:"storage [NAME] {\n  [PARAMETERS...]\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"For example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-hcl",children:'storage "file" {\n  path = "/mnt/openbao/data"\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"For configuration options which also read an environment variable, the\nenvironment variable will take precedence over values in the configuration\nfile."}),"\n",(0,r.jsx)(t.h2,{id:"integrated-storage-vs-external-storage",children:"Integrated storage vs. external storage"}),"\n",(0,r.jsxs)(t.p,{children:["It is recommended to use OpenBao's ",(0,r.jsx)(t.a,{href:"/docs/configuration/storage/raft",children:"integrated\nstorage"})," for most use cases rather than\nconfiguring another system to store OpenBao data externally. (Integrated Storage is\nan ",(0,r.jsx)(t.strong,{children:"embedded OpenBao data storage"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"The table below compares the characteristics of Integrated Storage and External\nStorage. Suppose you decide that the additional operational complexity of\nexternal storage is worth it for your use case. In that case, there are several\ncommunity supported external storage options to choose from."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Integrated Storage"}),(0,r.jsx)(t.th,{children:"External Storage"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"OpenBao Supported"}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"Limited support"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Operation"}),(0,r.jsx)(t.td,{children:"Operationally simpler with no additional software installation required."}),(0,r.jsx)(t.td,{children:"Must install and configure the external storage environment outside of OpenBao. For high availability, the external storage should be clustered."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Networking"}),(0,r.jsx)(t.td,{children:"One less network hop."}),(0,r.jsx)(t.td,{children:"Extra network hop between OpenBao and the external storage system."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Troubleshooting and monitoring"}),(0,r.jsx)(t.td,{children:"Integrated Storage is a part of OpenBao; therefore, OpenBao is the only system you need to monitor and troubleshoot."}),(0,r.jsx)(t.td,{children:"The source of failure could be the external storage; therefore, you need to check the health of both OpenBao and the external storage. This requires expertise in the chosen storage backend and additional monitoring of that storage."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Data location"}),(0,r.jsx)(t.td,{children:"The encrypted OpenBao data is stored on the same host where the OpenBao server process runs."}),(0,r.jsx)(t.td,{children:"The encrypted OpenBao data is stored where the external storage is located. Therefore, the OpenBao server and the data storage are hosted on physically separate hosts."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"System requirements"}),(0,r.jsxs)(t.td,{children:['Avoid "burstable" CPU and storage options. SSDs should be used for the hard drive. ',(0,r.jsx)("p",{}),"See the ",(0,r.jsx)(t.a,{href:"/tutorials/day-one-raft/raft-reference-architecture#system-requirements",children:"Reference Architecture"})," guide."]}),(0,r.jsx)(t.td,{children:"Follow the system requirements given by your chosen storage backend."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"tutorial",children:"Tutorial"}),"\n",(0,r.jsxs)(t.p,{children:["Refer to the ",(0,r.jsx)(t.a,{href:"/tutorials/raft",children:"Integrated\nStorage"})," tutorials\nto learn more about Integrated Storage."]})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(96540);const o={},a=r.createContext(o);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);