"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7733],{26464:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var o=s(74848),i=s(28453);const r={description:'The "server" command starts an OpenBao server that responds to API requests. By\ndefault, OpenBao will start in a "sealed" state. The OpenBao cluster must be\ninitialized before use.'},t="server",d={id:"commands/server",title:"server",description:'The "server" command starts an OpenBao server that responds to API requests. By\ndefault, OpenBao will start in a "sealed" state. The OpenBao cluster must be\ninitialized before use.',source:"@site/content/docs/commands/server.mdx",sourceDirName:"commands",slug:"/commands/server",permalink:"/openbao/docs/commands/server",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/commands/server.mdx",tags:[],version:"current",frontMatter:{description:'The "server" command starts an OpenBao server that responds to API requests. By\ndefault, OpenBao will start in a "sealed" state. The OpenBao cluster must be\ninitialized before use.'},sidebar:"docs",previous:{title:"tune",permalink:"/openbao/docs/commands/secrets/tune"},next:{title:"ssh",permalink:"/openbao/docs/commands/ssh"}},l={},a=[{value:"Examples",id:"examples",level:2},{value:"Usage",id:"usage",level:2},{value:"Command options",id:"command-options",level:3},{value:"Dev options",id:"dev-options",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"server",children:"server"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"server"}),' command starts an OpenBao server that responds to API requests. By\ndefault, OpenBao will start in a "sealed" state. The OpenBao cluster must be\ninitialized before use, usually by the ',(0,o.jsx)(n.code,{children:"bao operator init"})," command. Each OpenBao\nserver must also be unsealed using the ",(0,o.jsx)(n.code,{children:"bao operator unseal"})," command or the\nAPI before the server can respond to requests."]}),"\n",(0,o.jsx)(n.p,{children:"For more information, please see:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsxs)(n.a,{href:"/docs/commands/operator/init",children:[(0,o.jsx)(n.code,{children:"operator init"})," command"]})," for information\non initializing an OpenBao server."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsxs)(n.a,{href:"/docs/commands/operator/unseal",children:[(0,o.jsx)(n.code,{children:"operator unseal"})," command"]})," for\ninformation on providing unseal keys."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/configuration",children:"OpenBao configuration"})," for the syntax and\nvarious configuration options for an OpenBao server."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.p,{children:"Start a server with a configuration file:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell-session",children:"$ bao server -config=/etc/openbao/config.hcl\n"})}),"\n",(0,o.jsx)(n.p,{children:'Run in "dev" mode with a custom initial root token:'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell-session",children:'$ bao server -dev -dev-root-token-id="root"\n'})}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:["The following flags are available in addition to the ",(0,o.jsx)(n.a,{href:"/docs/commands",children:"standard set of\nflags"})," included on all commands."]}),"\n",(0,o.jsx)(n.h3,{id:"command-options",children:"Command options"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"-config"})," ",(0,o.jsx)(n.code,{children:'(string: "")'})," - Path to a configuration file or directory of\nconfiguration files. This flag can be specified multiple times to load\nmultiple configurations. If the path is a directory, all files which end in\n.hcl or .json are loaded."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"-log-level"})," ((#_log_level)) ",(0,o.jsx)(n.code,{children:'(string: "info")'})," - Log verbosity level. Supported values (in\norder of descending detail) are ",(0,o.jsx)(n.code,{children:"trace"}),", ",(0,o.jsx)(n.code,{children:"debug"}),", ",(0,o.jsx)(n.code,{children:"info"}),", ",(0,o.jsx)(n.code,{children:"warn"}),", and ",(0,o.jsx)(n.code,{children:"error"}),". This can\nalso be specified via the ",(0,o.jsx)(n.code,{children:"VAULT_LOG_LEVEL"})," environment variable."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"-log-format"})," ((#_log_format)) ",(0,o.jsx)(n.code,{children:'(string: "standard")'})," - Log format. Supported values\nare ",(0,o.jsx)(n.code,{children:"standard"})," and ",(0,o.jsx)(n.code,{children:"json"}),". This can also be specified via the\n",(0,o.jsx)(n.code,{children:"VAULT_LOG_FORMAT"})," environment variable."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"-log-file"})," ((#_log_file)) - the absolute path where OpenBao should save log\nmessages in addition to other, existing outputs like journald / stdout. Paths\nthat end with a path separator use the default file name, ",(0,o.jsx)(n.code,{children:"openbao.log"}),". Paths\nthat do not end with a file extension use the default ",(0,o.jsx)(n.code,{children:".log"})," extension. If the\nlog file rotates, OpenBao appends the current timestamp to the file name\nat the time of rotation. For example:"]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:(0,o.jsx)(n.code,{children:"log-file"})}),(0,o.jsx)(n.th,{children:"Full log file"}),(0,o.jsx)(n.th,{children:"Rotated log file"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"/var/log"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"/var/log/openbao.log"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"/var/log/openbao-{timestamp}.log"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"/var/log/my-diary"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"/var/log/my-diary.log"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"/var/log/my-diary-{timestamp}.log"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"/var/log/my-diary.txt"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"/var/log/my-diary.txt"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"/var/log/my-diary-{timestamp}.txt"})})]})]})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"-log-rotate-bytes"})," ((#_log_rotate_bytes)) - to specify the number of\nbytes that should be written to a log before it needs to be rotated. Unless specified,\nthere is no limit to the number of bytes that can be written to a log file."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"-log-rotate-duration"})," ((#_log_rotate_duration)) - to specify the maximum\nduration a log should be written to before it needs to be rotated. Must be a duration\nvalue such as 30s. Defaults to 24h."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"-log-rotate-max-files"})," ((#_log_rotate_max_files)) - to specify the maximum\nnumber of older log file archives to keep. Defaults to 0 (no files are ever deleted).\nSet to -1 to discard old log files when a new one is created."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"-experiment"})," ",(0,o.jsx)(n.code,{children:"(string array: [])"})," - The name of an experiment to enable for this node.\nThis flag can be specified multiple times to enable multiple experiments. Experiments\nshould NOT be used in production, and the associated APIs may have backwards incompatible\nchanges between releases. Additional experiments can also be specified via the\n",(0,o.jsx)(n.code,{children:"VAULT_EXPERIMENTS"})," environment variable as a comma-separated list, or via the\n",(0,o.jsx)(n.a,{href:"/docs/configuration#experiments",children:(0,o.jsx)(n.code,{children:"experiments"})})," config key."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"VAULT_ALLOW_PENDING_REMOVAL_MOUNTS"})," ",(0,o.jsx)(n.code,{children:"(bool: false)"})," - (environment variable)\nAllow OpenBao to be started with builtin engines which have the ",(0,o.jsx)(n.code,{children:"Pending Removal"}),"\ndeprecation state. This is a temporary stopgap in place in order to perform an\nupgrade and disable these engines. Once these engines are marked ",(0,o.jsx)(n.code,{children:"Removed"})," (in\nthe next major release of OpenBao), the environment variable will no longer work\nand a downgrade must be performed in order to remove the offending engines. For\nmore information, see the ",(0,o.jsx)(n.a,{href:"/docs/deprecation/faq/#q-what-are-the-phases-of-deprecation",children:"deprecation faq"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"dev-options",children:"Dev options"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"-dev"})," ",(0,o.jsx)(n.code,{children:"(bool: false)"}),' - Enable development mode. In this mode, OpenBao runs\nin-memory and starts unsealed. As the name implies, do not run "dev" mode in\nproduction.']}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"-dev-tls"})," ",(0,o.jsx)(n.code,{children:"(bool: false)"}),' - Enable TLS development mode. In this mode, OpenBao runs\nin-memory and starts unsealed with a generated TLS CA, certificate and key.\nAs the name implies, do not run "dev" mode in production.']}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"-dev-tls-cert-dir"})," ",(0,o.jsx)(n.code,{children:'(string: "")'})," - Directory where generated TLS files are created if ",(0,o.jsx)(n.code,{children:"-dev-tls"})," is specified. If left unset, files are generated in a temporary directory."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"-dev-listen-address"})," ",(0,o.jsx)(n.code,{children:'(string: "127.0.0.1:8200")'}),' - Address to bind to in\n"dev" mode. This can also be specified via the ',(0,o.jsx)(n.code,{children:"VAULT_DEV_LISTEN_ADDRESS"}),"\nenvironment variable."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"-dev-root-token-id"})," ",(0,o.jsx)(n.code,{children:'(string: "")'}),' - Initial root token. This only applies\nwhen running in "dev" mode. This can also be specified via the\n',(0,o.jsx)(n.code,{children:"VAULT_DEV_ROOT_TOKEN_ID"})," environment variable."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"Note:"})," The token ID should not start with the ",(0,o.jsx)(n.code,{children:"s."})," prefix."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"-dev-no-store-token"})," ",(0,o.jsx)(n.code,{children:'(string: "")'})," - Do not persist the dev root token to\nthe token helper (usually the local filesystem) for use in future requests.\nThe token will only be displayed in the command output."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"-dev-plugin-dir"})," ",(0,o.jsx)(n.code,{children:'(string: "")'}),' - Directory from which plugins are allowed to be loaded. Only applies in "dev" mode, it will automatically register all the plugins in the provided directory.']}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>d});var o=s(96540);const i={},r=o.createContext(i);function t(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);