"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2934],{22959:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(74848),o=t(28453);const i={sidebar_label:"migrate",description:'The "operator migrate" command copies data between storage backends to facilitate\nmigrating OpenBao between configurations. It operates directly at the storage\nlevel, with no decryption involved.'},r="operator migrate",s={id:"commands/operator/migrate",title:"operator migrate",description:'The "operator migrate" command copies data between storage backends to facilitate\nmigrating OpenBao between configurations. It operates directly at the storage\nlevel, with no decryption involved.',source:"@site/content/docs/commands/operator/migrate.mdx",sourceDirName:"commands/operator",slug:"/commands/operator/migrate",permalink:"/openbao/docs/commands/operator/migrate",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/commands/operator/migrate.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"migrate",description:'The "operator migrate" command copies data between storage backends to facilitate\nmigrating OpenBao between configurations. It operates directly at the storage\nlevel, with no decryption involved.'},sidebar:"docs",previous:{title:"members",permalink:"/openbao/docs/commands/operator/members"},next:{title:"raft",permalink:"/openbao/docs/commands/operator/raft"}},d={},c=[{value:"Examples",id:"examples",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Migrating to integrated raft storage",id:"migrating-to-integrated-raft-storage",level:2},{value:"Example configuration",id:"example-configuration",level:3},{value:"Run the migration",id:"run-the-migration",level:3},{value:"Join additional nodes",id:"join-additional-nodes",level:3},{value:"Usage",id:"usage",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"operator-migrate",children:"operator migrate"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"operator migrate"})," command copies data between storage backends to facilitate\nmigrating OpenBao between configurations. It operates directly at the storage\nlevel, with no decryption involved. Keys in the destination storage backend will\nbe overwritten, and the destination should ",(0,a.jsx)(n.em,{children:"not"})," be initialized prior to the\nmigrate operation. The source data is not modified, with the exception of a small lock\nkey added during migration."]}),"\n",(0,a.jsx)(n.p,{children:"This is intended to be an offline operation to ensure data consistency, and OpenBao\nwill not allow starting the server if a migration is in progress."}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.p,{children:"Migrate all keys:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell-session",children:"$ bao operator migrate -config migrate.hcl\n\n2018-09-20T14:23:23.656-0700 [INFO ] copied key: data/core/seal-config\n2018-09-20T14:23:23.657-0700 [INFO ] copied key: data/core/wrapping/jwtkey\n2018-09-20T14:23:23.658-0700 [INFO ] copied key: data/logical/fd1bed89-ffc4-d631-00dd-0696c9f930c6/31c8e6d9-2a17-d98f-bdf1-aa868afa1291/archive/metadata\n2018-09-20T14:23:23.660-0700 [INFO ] copied key: data/logical/fd1bed89-ffc4-d631-00dd-0696c9f930c6/31c8e6d9-2a17-d98f-bdf1-aa868afa1291/metadata/5kKFZ4YnzgNfy9UcWOzxxzOMpqlp61rYuq6laqpLQDnB3RawKpqi7yBTrawj1P\n...\n"})}),"\n",(0,a.jsx)(n.p,{children:"Migration is done in a consistent, sorted order. If the migration is halted or\nexits before completion (e.g. due to a connection error with a storage backend),\nit may be resumed from an arbitrary key prefix:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell-session",children:'$ bao operator migrate -config migrate.hcl -start "data/logical/fd"\n'})}),"\n",(0,a.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"operator migrate"})," command uses a dedicated configuration file to specify the source\nand destination storage backends. The format of the storage stanzas is identical\nto that used to ",(0,a.jsx)(n.a,{href:"/docs/configuration/storage",children:"configure OpenBao"}),",\nwith the only difference being that two stanzas are required: ",(0,a.jsx)(n.code,{children:"storage_source"})," and ",(0,a.jsx)(n.code,{children:"storage_destination"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-hcl",children:'storage_source "inmem" {}\n\nstorage_destination "file" {\n  path = "/mnt/openbao/data"\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"migrating-to-integrated-raft-storage",children:"Migrating to integrated raft storage"}),"\n",(0,a.jsx)(n.h3,{id:"example-configuration",children:"Example configuration"}),"\n",(0,a.jsxs)(n.p,{children:["The below configuration will migrate away from Filesystem storage to integrated\nraft storage. The raft data will be stored on the local filesystem in the\ndefined ",(0,a.jsx)(n.code,{children:"path"}),". ",(0,a.jsx)(n.code,{children:"node_id"})," can optionally be set to identify this node.\n",(0,a.jsx)(n.a,{href:"/docs/configuration#cluster_addr",children:"cluster_addr"})," must be set to the\ncluster hostname of this node. For more configuration options see the ",(0,a.jsx)(n.a,{href:"/docs/configuration/storage/raft",children:"raft\nstorage configuration documentation"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:['If the original configuration uses "raft" for ',(0,a.jsx)(n.code,{children:"ha_storage"})," a different\n",(0,a.jsx)(n.code,{children:"path"})," needs to be declared for the path in ",(0,a.jsx)(n.code,{children:"storage_destination"})," and the new\nconfiguration for the node post-migration."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-hcl",children:'storage_source "file" {\n  path = "/mnt/openbao/data"\n}\n\nstorage_destination "raft" {\n  path = "/path/to/raft/data"\n  node_id = "raft_node_1"\n}\ncluster_addr = "http://127.0.0.1:8201"\n'})}),"\n",(0,a.jsx)(n.h3,{id:"run-the-migration",children:"Run the migration"}),"\n",(0,a.jsx)(n.p,{children:"OpenBao will need to be offline during the migration process. First, stop OpenBao.\nThen, run the migration on the server you wish to become a the new OpenBao node."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell-session",children:"$ bao operator migrate -config migrate.hcl\n\n2018-09-20T14:23:23.656-0700 [INFO ] copied key: data/core/seal-config\n2018-09-20T14:23:23.657-0700 [INFO ] copied key: data/core/wrapping/jwtkey\n2018-09-20T14:23:23.658-0700 [INFO ] copied key: data/logical/fd1bed89-ffc4-d631-00dd-0696c9f930c6/31c8e6d9-2a17-d98f-bdf1-aa868afa1291/archive/metadata\n2018-09-20T14:23:23.660-0700 [INFO ] copied key: data/logical/fd1bed89-ffc4-d631-00dd-0696c9f930c6/31c8e6d9-2a17-d98f-bdf1-aa868afa1291/metadata/5kKFZ4YnzgNfy9UcWOzxxzOMpqlp61rYuq6laqpLQDnB3RawKpqi7yBTrawj1P\n...\n"})}),"\n",(0,a.jsxs)(n.p,{children:["After migration has completed, the data is stored on the local file system. To\nuse the new storage backend with OpenBao, update OpenBao's configuration file as\ndescribed in the ",(0,a.jsx)(n.a,{href:"/docs/configuration/storage/raft",children:"raft storage configuration\ndocumentation"}),". Then start and unseal the\nOpenBao server."]}),"\n",(0,a.jsx)(n.h3,{id:"join-additional-nodes",children:"Join additional nodes"}),"\n",(0,a.jsx)(n.p,{children:"After migration the raft cluster will only have a single node. Additional peers\nshould be joined to this node."}),"\n",(0,a.jsxs)(n.p,{children:['If the cluster was previously HA-enabled using "raft" as the ',(0,a.jsx)(n.code,{children:"ha_storage"}),", the\nnodes will have to re-join to the migrated node before unsealing."]}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(n.p,{children:["The following flags are available for the ",(0,a.jsx)(n.code,{children:"operator migrate"})," command."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"-config"})," ",(0,a.jsx)(n.code,{children:"(string: <required>)"})," - Path to the migration configuration file."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"-start"})," ",(0,a.jsx)(n.code,{children:'(string: "")'})," - Migration starting key prefix. Only keys at or after this value will be copied."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"-reset"})," - Reset the migration lock. A lock file is added during migration to prevent\nstarting the OpenBao server or another migration. The ",(0,a.jsx)(n.code,{children:"-reset"})," option can be used to\nremove a stale lock file if present."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"-max-parallel"})," ",(0,a.jsx)(n.code,{children:"int: 10"})," - Allows the operator to specify the maximum number of lightweight threads (goroutines)\nwhich may be used to migrate data in parallel. This can potentially speed up migration on slower backends at\nthe cost of more resources (e.g. CPU, memory). Permitted values range from ",(0,a.jsx)(n.code,{children:"1"})," (synchronous) to the maximum value\nfor an ",(0,a.jsx)(n.code,{children:"integer"}),". If not supplied, a default of ",(0,a.jsx)(n.code,{children:"10"})," parallel goroutines will be used."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Note: The maximum number of concurrent requests handled by a storage backend is ultimately governed by the\nstorage backend configuration setting, which enforces a maximum number of concurrent requests (",(0,a.jsx)(n.code,{children:"max_parallel"}),")."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var a=t(96540);const o={},i=a.createContext(o);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);