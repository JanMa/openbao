"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3967],{19724:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=s(74848),o=s(28453);const r={sidebar_label:"init",description:'The "operator init" command initializes an OpenBao server. Initialization is the\nprocess by which OpenBao\'s storage backend is prepared to receive data. Since\nOpenBao servers share the same storage backend in HA mode, you only need to\ninitialize one OpenBao to initialize the storage backend.'},t="operator init",a={id:"commands/operator/init",title:"operator init",description:'The "operator init" command initializes an OpenBao server. Initialization is the\nprocess by which OpenBao\'s storage backend is prepared to receive data. Since\nOpenBao servers share the same storage backend in HA mode, you only need to\ninitialize one OpenBao to initialize the storage backend.',source:"@site/content/docs/commands/operator/init.mdx",sourceDirName:"commands/operator",slug:"/commands/operator/init",permalink:"/docs/commands/operator/init",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/commands/operator/init.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"init",description:'The "operator init" command initializes an OpenBao server. Initialization is the\nprocess by which OpenBao\'s storage backend is prepared to receive data. Since\nOpenBao servers share the same storage backend in HA mode, you only need to\ninitialize one OpenBao to initialize the storage backend.'},sidebar:"docs",previous:{title:"generate-root",permalink:"/docs/commands/operator/generate-root"},next:{title:"key-status",permalink:"/docs/commands/operator/key-status"}},l={},c=[{value:"Examples",id:"examples",level:2},{value:"Usage",id:"usage",level:2},{value:"Output options",id:"output-options",level:3},{value:"Common options",id:"common-options",level:3},{value:"Consul options",id:"consul-options",level:3},{value:"HSM and KMS options",id:"hsm-and-kms-options",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"operator-init",children:"operator init"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"operator init"})," command initializes an OpenBao server. Initialization is the\nprocess by which OpenBao's storage backend is prepared to receive data. Since\nOpenBao servers share the same storage backend in HA mode, you only need to\ninitialize one OpenBao to initialize the storage backend.\nThis command cannot be run against already-initialized OpenBao cluster."]}),"\n",(0,i.jsxs)(n.p,{children:["During initialization, OpenBao generates a root key, which is stored in the storage backend alongside all other OpenBao data. The root key itself is encrypted and requires an ",(0,i.jsx)(n.em,{children:"unseal key"})," to decrypt it."]}),"\n",(0,i.jsxs)(n.p,{children:["The default OpenBao configuration uses ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Shamir%27s_Secret_Sharing",children:"Shamir's Secret Sharing"})," to split the root key into a configured number of shards (referred as key shares, or unseal keys). A certain threshold of shards is required to reconstruct the root key, which is then used to decrypt the OpenBao's encryption key."]}),"\n",(0,i.jsxs)(n.p,{children:["Refer to the ",(0,i.jsx)(n.a,{href:"/docs/concepts/seal#seal-unseal",children:"Seal/Unseal"})," documentation for further details."]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.p,{children:"Start initialization with the default options:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:"$ bao operator init\n"})}),"\n",(0,i.jsx)(n.p,{children:"Initialize, but encrypt the unseal keys with pgp keys:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:'$ bao operator init \\\n    -key-shares=3 \\\n    -key-threshold=2 \\\n    -pgp-keys="keybase:hashicorp,keybase:jefferai,keybase:sethvargo"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Initialize Auto Unseal with a non-default threshold and number of recovery keys, and encrypt the recovery keys with pgp keys:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:'$ bao operator init \\\n    -recovery-shares=7 \\\n    -recovery-threshold=4 \\\n    -recovery-pgp-keys="keybase:jeff,keybase:chris,keybase:brian,keybase:calvin,keybase:matthew,keybase:vishal,keybase:nick"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Encrypt the initial root token using a pgp key:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:'$ bao operator init -root-token-pgp-key="keybase:hashicorp"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(n.p,{children:["The following flags are available in addition to the ",(0,i.jsx)(n.a,{href:"/docs/commands",children:"standard set of\nflags"})," included on all commands."]}),"\n",(0,i.jsx)(n.h3,{id:"output-options",children:"Output options"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-format"})," ",(0,i.jsx)(n.code,{children:'(string: "")'}),' - Print the output in the given format. Valid formats\nare "table", "json", or "yaml". The default is table. This can also be\nspecified via the ',(0,i.jsx)(n.code,{children:"VAULT_FORMAT"})," environment variable."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"common-options",children:"Common options"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-key-shares"})," ",(0,i.jsx)(n.code,{children:"(int: 5)"}),' - Number of key shares to split the generated master\nkey into. This is the number of "unseal keys" to generate. This is aliased as\n',(0,i.jsx)(n.code,{children:"-n"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-key-threshold"})," ",(0,i.jsx)(n.code,{children:"(int: 3)"})," - Number of key shares required to reconstruct the\nroot key. This must be less than or equal to -key-shares. This is aliased as\n",(0,i.jsx)(n.code,{children:"-t"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-pgp-keys"})," ",(0,i.jsx)(n.code,{children:'(string: "...")'})," - Comma-separated list of paths to files on disk\ncontaining public PGP keys OR a comma-separated list of Keybase usernames\nusing the format ",(0,i.jsx)(n.code,{children:"keybase:<username>"}),". When supplied, the generated unseal\nkeys will be encrypted and base64-encoded in the order specified in this list.\nThe number of entries must match -key-shares, unless -stored-shares are used."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-root-token-pgp-key"})," ",(0,i.jsx)(n.code,{children:'(string: "")'})," - Path to a file on disk containing a\nbinary or base64-encoded public PGP key. This can also be specified as a\nKeybase username using the format ",(0,i.jsx)(n.code,{children:"keybase:<username>"}),". When supplied, the\ngenerated root token will be encrypted and base64-encoded with the given\npublic key."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-status"})," ",(0,i.jsx)(n.code,{children:'(bool": false)'})," - Print the current initialization status. An exit\ncode of 0 means the OpenBao is already initialized. An exit code of 1 means an\nerror occurred. An exit code of 2 means the OpenBao is not initialized."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"consul-options",children:"Consul options"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-consul-auto"})," ",(0,i.jsx)(n.code,{children:"(bool: false)"})," - Perform automatic service discovery using\nConsul in HA mode. When all nodes in an OpenBao HA cluster are registered with\nConsul, enabling this option will trigger automatic service discovery based on\nthe provided -consul-service value. Ensure the proper Consul environment\nvariables are set (CONSUL_HTTP_ADDR, etc). When only one OpenBao server is\ndiscovered, it will be initialized automatically. When more than one OpenBao\nserver is discovered, they will each be output for selection. The default is\nfalse."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-consul-service"})," ",(0,i.jsx)(n.code,{children:'(string: "openbao")'})," - Name of the service in Consul under\nwhich the OpenBao servers are registered."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"hsm-and-kms-options",children:"HSM and KMS options"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-recovery-pgp-keys"})," ",(0,i.jsx)(n.code,{children:'(string: "...")'})," - Behaves like ",(0,i.jsx)(n.code,{children:"-pgp-keys"}),", but for the\nrecovery key shares. This is only available with ",(0,i.jsx)(n.a,{href:"/docs/concepts/seal#auto-unseal",children:"Auto Unseal"})," seals (HSM, KMS and Transit seals)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-recovery-shares"})," ",(0,i.jsx)(n.code,{children:"(int: 5)"})," - Number of key shares to split the recovery key\ninto. This is only available with ",(0,i.jsx)(n.a,{href:"/docs/concepts/seal#auto-unseal",children:"Auto Unseal"})," seals (HSM, KMS and Transit seals)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-recovery-threshold"})," ",(0,i.jsx)(n.code,{children:"(int: 3)"})," - Number of key shares required to\nreconstruct the recovery key. This is only available with ",(0,i.jsx)(n.a,{href:"/docs/concepts/seal#auto-unseal",children:"Auto Unseal"})," seals (HSM, KMS and Transit seals)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-stored-shares"})," ",(0,i.jsx)(n.code,{children:"(int: 0)"})," - Number of unseal keys to store on an HSM. This\nmust be equal to ",(0,i.jsx)(n.code,{children:"-key-shares"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["-> ",(0,i.jsx)(n.strong,{children:"Recovery keys:"})," Refer to the\n",(0,i.jsx)(n.a,{href:"/docs/concepts/seal#recovery-key",children:"Seal/Unseal"})," documentation to learn more\nabout recovery keys."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>a});var i=s(96540);const o={},r=i.createContext(o);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);