"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2964],{33019:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=n(74848),a=n(28453);const s={sidebar_label:"raft",description:'The "operator raft" command is used to interact with the integrated Raft storage backend.'},r="operator raft",i={id:"commands/operator/raft",title:"operator raft",description:'The "operator raft" command is used to interact with the integrated Raft storage backend.',source:"@site/content/docs/commands/operator/raft.mdx",sourceDirName:"commands/operator",slug:"/commands/operator/raft",permalink:"/docs/commands/operator/raft",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/commands/operator/raft.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"raft",description:'The "operator raft" command is used to interact with the integrated Raft storage backend.'},sidebar:"docs",previous:{title:"migrate",permalink:"/docs/commands/operator/migrate"},next:{title:"rekey",permalink:"/docs/commands/operator/rekey"}},d={},l=[{value:"join",id:"join",level:2},{value:"Parameters",id:"parameters",level:3},{value:"list-peers",id:"list-peers",level:2},{value:"Example output",id:"example-output",level:3},{value:"remove-peer",id:"remove-peer",level:2},{value:"snapshot",id:"snapshot",level:2},{value:"snapshot save",id:"snapshot-save",level:3},{value:"snapshot restore",id:"snapshot-restore",level:3},{value:"autopilot",id:"autopilot",level:2},{value:"autopilot state",id:"autopilot-state",level:3},{value:"Example output",id:"example-output-1",level:4},{value:"autopilot get-config",id:"autopilot-get-config",level:3},{value:"autopilot set-config",id:"autopilot-set-config",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"operator-raft",children:"operator raft"}),"\n",(0,o.jsx)(t.p,{children:"This command groups subcommands for operators to manage the Integrated Storage Raft backend."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",children:"Usage: bao operator raft <subcommand> [options] [args]\n\n This command groups subcommands for operators interacting with the OpenBao\n integrated Raft storage backend. Most users will not need to interact with these\n commands. Here are a few examples of the Raft operator commands:\n\nSubcommands:\n    join           Joins a node to the Raft cluster\n    list-peers     Returns the Raft peer set\n    remove-peer    Removes a node from the Raft cluster\n    snapshot       Restores and saves snapshots from the Raft cluster\n"})}),"\n",(0,o.jsx)(t.h2,{id:"join",children:"join"}),"\n",(0,o.jsx)(t.p,{children:"This command is used to join a new node as a peer to the Raft cluster. In order\nto join, there must be at least one existing member of the cluster. If Shamir\nseal is in use, then unseal keys are to be supplied before or after the\njoin process, depending on whether it's being used exclusively for HA."}),"\n",(0,o.jsxs)(t.p,{children:["If raft is used for ",(0,o.jsx)(t.code,{children:"storage"}),", the node must be joined before unsealing and the\n",(0,o.jsx)(t.code,{children:"leader-api-addr"})," argument must be provided. If raft is used for ",(0,o.jsx)(t.code,{children:"ha_storage"}),",\nthe node must be first unsealed before joining and the ",(0,o.jsx)(t.code,{children:"leader-api-addr"})," must\n",(0,o.jsx)(t.em,{children:"not"})," be provided."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",children:'Usage: bao operator raft join [options] <leader-api-addr>\n\n  Join the current node as a peer to the Raft cluster by providing the address\n  of the Raft leader node.\n\n\t  $ bao operator raft join "http://127.0.0.2:8200"\n'})}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"join"})," command also allows operators to specify cloud auto-join configuration\ninstead of a static IP address or hostname. When provided, OpenBao will attempt to\nautomatically discover and resolve potential leader addresses based on the provided\nauto-join configuration."]}),"\n",(0,o.jsxs)(t.p,{children:["OpenBao uses go-discover to support the auto-join functionality. Please see the\ngo-discover\n",(0,o.jsx)(t.a,{href:"https://github.com/hashicorp/go-discover/blob/master/README.md",children:"README"})," for\ndetails on the format."]}),"\n",(0,o.jsxs)(t.p,{children:["By default, OpenBao will attempt to reach discovered peers using HTTPS and port 8200.\nOperators may override these through the ",(0,o.jsx)(t.code,{children:"--auto-join-scheme"})," and ",(0,o.jsx)(t.code,{children:"--auto-join-port"}),"\nCLI flags respectively."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",children:'Usage: bao operator raft join [options] <auto-join-configuration>\n  Join the current node as a peer to the Raft cluster by providing cloud auto-join\n  metadata configuration.\n    $ bao operator raft join "provider=aws region=eu-west-1 ..."\n'})}),"\n",(0,o.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(t.p,{children:["The following flags are available for the ",(0,o.jsx)(t.code,{children:"operator raft join"})," command."]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"-leader-ca-cert"})," ",(0,o.jsx)(t.code,{children:'(string: "")'})," - CA cert to communicate with Raft leader."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"-leader-client-cert"})," ",(0,o.jsx)(t.code,{children:'(string: "")'})," - Client cert to authenticate to Raft leader."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"-leader-client-key"})," ",(0,o.jsx)(t.code,{children:'(string: "")'})," - Client key to authenticate to Raft leader."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"-retry"})," ",(0,o.jsx)(t.code,{children:"(bool: false)"})," - Continuously retry joining the Raft cluster upon\nfailures. The default is false."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["Please be aware that the content (not the path to the file) of the certificate or key is expected for these parameters: ",(0,o.jsx)(t.code,{children:"-leader-ca-cert"}),", ",(0,o.jsx)(t.code,{children:"-leader-client-cert"}),", ",(0,o.jsx)(t.code,{children:"-leader-client-key"}),"."]})}),"\n",(0,o.jsx)(t.h2,{id:"list-peers",children:"list-peers"}),"\n",(0,o.jsx)(t.p,{children:"This command is used to list the full set of peers in the Raft cluster."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",children:"Usage: bao operator raft list-peers\n\n  Provides the details of all the peers in the Raft cluster.\n\n\t  $ bao operator raft list-peers\n"})}),"\n",(0,o.jsx)(t.h3,{id:"example-output",children:"Example output"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n ...\n  "data": {\n    "config": {\n      "index": 62,\n      "servers": [\n        {\n          "address": "127.0.0.2:8201",\n          "leader": true,\n          "node_id": "node1",\n          "protocol_version": "3",\n          "voter": true\n        },\n        {\n          "address": "127.0.0.4:8201",\n          "leader": false,\n          "node_id": "node3",\n          "protocol_version": "3",\n          "voter": true\n        }\n      ]\n    }\n  }\n}\n'})}),"\n",(0,o.jsx)(t.h2,{id:"remove-peer",children:"remove-peer"}),"\n",(0,o.jsx)(t.p,{children:"This command is used to remove a node from being a peer to the Raft cluster. In\ncertain cases where a peer may be left behind in the Raft configuration even\nthough the server is no longer present and known to the cluster, this command\ncan be used to remove the failed server so that it is no longer affects the Raft\nquorum."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",children:"Usage: bao operator raft remove-peer <server_id>\n\n  Removes a node from the Raft cluster.\n\n\t  $ bao operator raft remove-peer node1\n"})}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(t.p,{children:"Once a node is removed, its Raft data needs to be deleted before it may be joined back into an existing cluster. This requires shutting down the OpenBao process, deleting the data, then restarting the OpenBao process on the removed node."})}),"\n",(0,o.jsx)(t.h2,{id:"snapshot",children:"snapshot"}),"\n",(0,o.jsxs)(t.p,{children:["This command groups subcommands for operators interacting with the snapshot\nfunctionality of the integrated Raft storage backend. There are 2 subcommands\nsupported: ",(0,o.jsx)(t.code,{children:"save"})," and ",(0,o.jsx)(t.code,{children:"restore"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",children:"Usage: bao operator raft snapshot <subcommand> [options] [args]\n\n  This command groups subcommands for operators interacting with the snapshot\n  functionality of the integrated Raft storage backend.\n\nSubcommands:\n    restore    Installs the provided snapshot, returning the cluster to the state defined in it\n    save       Saves a snapshot of the current state of the Raft cluster into a file\n"})}),"\n",(0,o.jsx)(t.h3,{id:"snapshot-save",children:"snapshot save"}),"\n",(0,o.jsx)(t.p,{children:"Takes a snapshot of the OpenBao data. The snapshot can be used to restore OpenBao to\nthe point in time when a snapshot was taken."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",children:"Usage: bao operator raft snapshot save <snapshot_file>\n\n  Saves a snapshot of the current state of the Raft cluster into a file.\n\n\t  $ bao operator raft snapshot save raft.snap\n"})}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["Snapshot is not supported when Raft is used only for ",(0,o.jsx)(t.code,{children:"ha_storage"}),"."]})}),"\n",(0,o.jsx)(t.h3,{id:"snapshot-restore",children:"snapshot restore"}),"\n",(0,o.jsxs)(t.p,{children:["Restores a snapshot of OpenBao data taken with ",(0,o.jsx)(t.code,{children:"bao operator raft snapshot save"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",children:"Usage: bao operator raft snapshot restore <snapshot_file>\n\n  Installs the provided snapshot, returning the cluster to the state defined in it.\n\n\t  $ bao operator raft snapshot restore raft.snap\n"})}),"\n",(0,o.jsx)(t.h2,{id:"autopilot",children:"autopilot"}),"\n",(0,o.jsxs)(t.p,{children:["This command groups subcommands for operators interacting with the autopilot\nfunctionality of the integrated Raft storage backend. There are 3 subcommands\nsupported: ",(0,o.jsx)(t.code,{children:"get-config"}),", ",(0,o.jsx)(t.code,{children:"set-config"})," and ",(0,o.jsx)(t.code,{children:"state"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["For a more detailed overview of autopilot features, see the ",(0,o.jsx)(t.a,{href:"/docs/concepts/integrated-storage/autopilot",children:"concepts page"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",children:"Usage: bao operator raft autopilot <subcommand> [options] [args]\n\nThis command groups subcommands for operators interacting with the autopilot\nfunctionality of the integrated Raft storage backend.\n\nSubcommands:\n    get-config    Returns the configuration of the autopilot subsystem under integrated storage\n    set-config    Modify the configuration of the autopilot subsystem under integrated storage\n    state         Displays the state of the raft cluster under integrated storage as seen by autopilot\n"})}),"\n",(0,o.jsx)(t.h3,{id:"autopilot-state",children:"autopilot state"}),"\n",(0,o.jsx)(t.p,{children:'Displays the state of the raft cluster under integrated storage as seen by\nautopilot. It shows whether autopilot thinks the cluster is healthy or not,\nand how many nodes could fail before the cluster becomes unhealthy ("Failure Tolerance").'}),"\n",(0,o.jsx)(t.p,{children:"State includes a list of all servers by nodeID and IP address. Last Index\nindicates how close the state on each node is to the leader's."}),"\n",(0,o.jsx)(t.p,{children:'A node can have a status of "leader" or "voter".'}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",children:"Usage: bao operator raft autopilot state\n\n  Displays the state of the raft cluster under integrated storage as seen by autopilot.\n\n    $ bao operator raft autopilot state\n"})}),"\n",(0,o.jsx)(t.h4,{id:"example-output-1",children:"Example output"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",children:"Healthy:                      true\nFailure Tolerance:            1\nLeader:                       raft1\nVoters:\n   raft1\n   raft2\n   raft3\nServers:\n   raft1\n      Name:            raft1\n      Address:         127.0.0.1:8201\n      Status:          leader\n      Node Status:     alive\n      Healthy:         true\n      Last Contact:    0s\n      Last Term:       3\n      Last Index:      38\n   raft2\n      Name:            raft2\n      Address:         127.0.0.2:8201\n      Status:          voter\n      Node Status:     alive\n      Healthy:         true\n      Last Contact:    2.514176729s\n      Last Term:       3\n      Last Index:      38\n"})}),"\n",(0,o.jsx)(t.h3,{id:"autopilot-get-config",children:"autopilot get-config"}),"\n",(0,o.jsx)(t.p,{children:"Returns the configuration of the autopilot subsystem under integrated storage."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",children:"Usage: bao operator raft autopilot get-config\n\n  Returns the configuration of the autopilot subsystem under integrated storage.\n\n    $ bao operator raft autopilot get-config\n"})}),"\n",(0,o.jsx)(t.h3,{id:"autopilot-set-config",children:"autopilot set-config"}),"\n",(0,o.jsx)(t.p,{children:"Modify the configuration of the autopilot subsystem under integrated storage."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",children:"Usage: bao operator raft autopilot set-config [options]\n\n  Modify the configuration of the autopilot subsystem under integrated storage.\n\n\t  $ bao operator raft autopilot set-config -server-stabilization-time 10s\n\n"})}),"\n",(0,o.jsx)(t.p,{children:"Flags applicable to this command are the following:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"cleanup-dead-servers"})," ",(0,o.jsx)(t.code,{children:"(bool)"})," - Controls whether to remove dead servers from\nthe Raft peer list periodically or when a new server joins. This requires that\n",(0,o.jsx)(t.code,{children:"min-quorum"})," is also set. Defaults to ",(0,o.jsx)(t.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"last-contact-threshold"})," ",(0,o.jsx)(t.code,{children:"(string)"})," - Limit on the amount of time a server can\ngo without leader contact before being considered unhealthy. Defaults to ",(0,o.jsx)(t.code,{children:"10s"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"dead-server-last-contact-threshold"})," ",(0,o.jsx)(t.code,{children:"(string)"})," - Limit on the amount of time\na server can go without leader contact before being considered failed.\nThis takes effect only when ",(0,o.jsx)(t.code,{children:"cleanup_dead_servers"})," is set as ",(0,o.jsx)(t.code,{children:"true"}),". Defaults to ",(0,o.jsx)(t.code,{children:"24h"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(t.p,{children:"A failed server that autopilot has removed from the raft configuration cannot rejoin the cluster without being reinitialized."})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"max-trailing-logs"})," ",(0,o.jsx)(t.code,{children:"(int)"})," - Amount of entries in the Raft Log that a server\ncan be behind before being considered unhealthy. Defaults to ",(0,o.jsx)(t.code,{children:"1000"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"min-quorum"})," ",(0,o.jsx)(t.code,{children:"(int)"})," - Minimum number of servers that should always be present in a cluster.\nAutopilot will not prune servers below this number. This should be set to the expected number\nof voters in your cluster. There is no default."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"server-stabilization-time"})," ",(0,o.jsx)(t.code,{children:"(string)"})," - Minimum amount of time a server must be in a healthy state before it\ncan become a voter. Until that happens, it will be visible as a peer in the cluster, but as a non-voter, meaning it\nwon't contribute to quorum. Defaults to ",(0,o.jsx)(t.code,{children:"10s"}),"."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var o=n(96540);const a={},s=o.createContext(a);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);