"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7047],{82830:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=i(74848),s=i(28453);const a={layout:"docs",page_title:"External Plugin Architecture",description:"Learn about OpenBao's plugin architecture."},l="External plugin architecture",o={id:"plugins/plugin-architecture",title:"External plugin architecture",description:"Learn about OpenBao's plugin architecture.",source:"@site/content/docs/plugins/plugin-architecture.mdx",sourceDirName:"plugins",slug:"/plugins/plugin-architecture",permalink:"/openbao/docs/plugins/plugin-architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/plugins/plugin-architecture.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"External Plugin Architecture",description:"Learn about OpenBao's plugin architecture."},sidebar:"docs",previous:{title:"Plugin system",permalink:"/openbao/docs/plugins/"},next:{title:"Plugin development",permalink:"/openbao/docs/plugins/plugin-development"}},r={},c=[{value:"External plugin lifecycle",id:"external-plugin-lifecycle",level:2},{value:"Plugin communication",id:"plugin-communication",level:2},{value:"Plugin registration",id:"plugin-registration",level:2},{value:"Plugin directory",id:"plugin-directory",level:3},{value:"Plugin catalog",id:"plugin-catalog",level:3},{value:"Plugin execution",id:"plugin-execution",level:3},{value:"Plugin upgrades",id:"plugin-upgrades",level:3},{value:"Plugin multiplexing",id:"plugin-multiplexing",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Unrecognized remote plugin message",id:"unrecognized-remote-plugin-message",level:3}];function u(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"external-plugin-architecture",children:"External plugin architecture"}),"\n",(0,t.jsx)(n.p,{children:"OpenBao's external plugins are completely separate, standalone applications that OpenBao\nexecutes and communicates with over RPC. This means the plugin process does not\nshare the same memory space as OpenBao and therefore can only access the\ninterfaces and arguments given to it. This also means a crash in a plugin cannot\ncrash the entirety of OpenBao."}),"\n",(0,t.jsx)(n.p,{children:"It is possible to enable a custom plugin with a name that's identical to a\nbuilt-in plugin. In such a situation, OpenBao will always choose the custom plugin\nwhen enabling it."}),"\n",(0,t.jsxs)(n.p,{children:["-> ",(0,t.jsx)(n.strong,{children:"NOTE:"})," See the ",(0,t.jsx)(n.a,{href:"/integrations",children:"OpenBao Integrations"})," page to find a\ncurated collection of official, partner, and community OpenBao plugins."]}),"\n",(0,t.jsx)(n.h2,{id:"external-plugin-lifecycle",children:"External plugin lifecycle"}),"\n",(0,t.jsx)(n.p,{children:"OpenBao external plugins are long-running processes that remain running once they are\nspawned by OpenBao, the parent process. Plugin processes can be started by OpenBao's\nactive node. Additionally, there are cases where plugin processes may be\nterminated by OpenBao. These cases include, but are not limited to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"OpenBao active node step-down"}),"\n",(0,t.jsx)(n.li,{children:"OpenBao barrier seal"}),"\n",(0,t.jsx)(n.li,{children:"OpenBao graceful shutdown"}),"\n",(0,t.jsx)(n.li,{children:"Disabling a Secrets Engine or Auth method that uses external plugins"}),"\n",(0,t.jsx)(n.li,{children:"Database configured connection deletion"}),"\n",(0,t.jsx)(n.li,{children:"Database configured connection update"}),"\n",(0,t.jsx)(n.li,{children:"Database configured connection reset request"}),"\n",(0,t.jsx)(n.li,{children:"Database root credentials rotation"}),"\n",(0,t.jsx)(n.li,{children:"WAL Rollback from a previously failed root credentials rotation operation"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The lifecycle of plugin processes are managed automatically by OpenBao.\nTermination of these processes are typical in certain scenarios, such as the\nones listed above. OpenBao will start plugin processes when they are enabled. A\nplugin process may be started or terminated through other internal processes\nwithin OpenBao as well. Since OpenBao manages and tracks the lifecycle of its\nplugins, these processes should not be terminated by anything other than OpenBao.\nIf a plugin process is shutdown out-of-band, the plugin process will be lazily\nloaded when a request that requires the plugin is received by OpenBao."}),"\n",(0,t.jsx)(n.h2,{id:"plugin-communication",children:"Plugin communication"}),"\n",(0,t.jsxs)(n.p,{children:["OpenBao communicates with external plugins over RPC. To secure this\ncommunication, OpenBao creates a mutually authenticated TLS connection with the\nplugin's RPC server. Plugins make use of the AutoMTLS feature of\n",(0,t.jsx)(n.a,{href:"https://www.github.com/hashicorp/go-plugin",children:"go-plugin"})," which will\nautomatically negotiate mutual TLS for transport authentication."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"/docs/configuration#api_addr",children:(0,t.jsx)(n.code,{children:"api_addr"})})," must be set in order for the\nplugin process to establish communication with the OpenBao server during mount\ntime. If the storage backend has HA enabled and supports automatic host address\ndetection, OpenBao will automatically attempt to determine the ",(0,t.jsx)(n.code,{children:"api_addr"})," as\nwell."]}),"\n",(0,t.jsx)(n.h2,{id:"plugin-registration",children:"Plugin registration"}),"\n",(0,t.jsx)(n.p,{children:"An important consideration of OpenBao's plugin system is to ensure the plugin\ninvoked by OpenBao is authentic and maintains integrity. There are two components\nthat an OpenBao operator needs to configure before external plugins can be run- the\nplugin directory and the plugin catalog entry."}),"\n",(0,t.jsx)(n.h3,{id:"plugin-directory",children:"Plugin directory"}),"\n",(0,t.jsxs)(n.p,{children:["The plugin directory is a configuration option of OpenBao and can be specified in\nthe ",(0,t.jsx)(n.a,{href:"/docs/configuration",children:"configuration file"}),".\nThis setting specifies a directory in which all plugin binaries must live;\n",(0,t.jsx)(n.em,{children:"this value cannot be a symbolic link"}),". A plugin\ncannot be added to OpenBao unless it exists in the plugin directory. There is no\ndefault for this configuration option, and if it is not set, plugins cannot be\nadded to OpenBao."]}),"\n",(0,t.jsxs)(n.p,{children:["Enabling the file permissions check via the environment variable ",(0,t.jsx)(n.code,{children:"VAULT_ENABLE_FILE_PERMISSIONS_CHECK"}),"\nallows OpenBao to check if the config directory and files are owned by the user running OpenBao.\nIt also checks if there are no write or execute permissions for group or others.\nOpenBao allows operators to specify the user and permissions of the plugin directory and binaries\nusing parameters ",(0,t.jsx)(n.code,{children:"plugin_file_uid"})," and ",(0,t.jsx)(n.code,{children:"plugin_file_permissions"})," in config if an operator needs those to be different. This check is disabled by default."]}),"\n",(0,t.jsx)(n.h3,{id:"plugin-catalog",children:"Plugin catalog"}),"\n",(0,t.jsxs)(n.p,{children:["The plugin catalog is OpenBao's list of approved plugins. The catalog is stored in\nOpenBao's barrier and can only be updated by an OpenBao user with sudo permissions.\nUpon adding a new plugin, the plugin name, SHA256 sum of the executable, and the\ncommand that should be used to run the plugin must be provided. The catalog will\nensure the executable referenced in the command exists in the plugin\ndirectory. When added to the catalog, the plugin is not automatically executed,\nbut becomes visible to backends and can be executed by them. For more\ninformation on the plugin catalog please see the ",(0,t.jsx)(n.a,{href:"/api-docs/system/plugins-catalog",children:"Plugin Catalog API\ndocs"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"An example of plugin registration in current versions of OpenBao:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"$ bao plugin register -sha256=<SHA256 Hex value of the plugin binary> \\\n    secret \\                  # type\n    myplugin-database-plugin\n\nSuccess! Registered plugin: myplugin-database-plugin\n"})}),"\n",(0,t.jsx)(n.h3,{id:"plugin-execution",children:"Plugin execution"}),"\n",(0,t.jsxs)(n.p,{children:["When a backend wants to run a plugin, it first looks up the plugin, by name, in\nthe catalog. It then checks the executable's SHA256 sum against the one\nconfigured in the plugin catalog. Finally OpenBao runs the command configured in\nthe catalog, sending along the JWT formatted response wrapping token and mlock\nsettings. Like OpenBao, plugins support ",(0,t.jsx)(n.a,{href:"/docs/configuration#disable_mlock",children:"the use of mlock when available"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["~> Note: If OpenBao is configured with ",(0,t.jsx)(n.code,{children:"mlock"})," enabled, then the OpenBao executable\nand each plugin executable in your ",(0,t.jsx)(n.a,{href:"/docs/plugins/plugin-architecture#plugin-directory",children:"plugins directory"}),"\nmust be given the ability to use the ",(0,t.jsx)(n.code,{children:"mlock"})," syscall."]}),"\n",(0,t.jsx)(n.h3,{id:"plugin-upgrades",children:"Plugin upgrades"}),"\n",(0,t.jsxs)(n.p,{children:["External plugins may be updated by registering and reloading them. More details\non the upgrade procedure can be found in\n",(0,t.jsx)(n.a,{href:"/docs/upgrading/plugins",children:"Upgrading OpenBao Plugins"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"plugin-multiplexing",children:"Plugin multiplexing"}),"\n",(0,t.jsx)(n.p,{children:"To avoid spawning multiple plugin processes for mounts of the same type,\nplugins can implement plugin multiplexing. This allows a single\nplugin process to be used for multiple mounts of a given type. This single\nprocess will be multiplexed across all OpenBao namespaces for mounts of this\ntype. Multiplexing a plugin does not affect the current behavior of existing\nplugins."}),"\n",(0,t.jsxs)(n.p,{children:["To enable multiplexing, the plugin must be compiled with the ",(0,t.jsx)(n.code,{children:"ServeMultiplex"}),"\nfunction call from OpenBao's respective ",(0,t.jsx)(n.code,{children:"plugin"})," or ",(0,t.jsx)(n.code,{children:"dbplugin"})," SDK packages. At\nthis time, there is no opt-out capability for plugins that implement\nmultiplexing. To use a non-multiplexed plugin, run an older version of the\nplugin, i.e., the plugin calls the ",(0,t.jsx)(n.code,{children:"Serve"})," function."]}),"\n",(0,t.jsx)(n.p,{children:"More resources on implementing plugin multiplexing:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/secrets/databases/custom#serving-a-plugin-with-multiplexing",children:"Database secrets engines"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/plugins/plugin-development",children:"Secrets engines and auth methods"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsx)(n.h3,{id:"unrecognized-remote-plugin-message",children:"Unrecognized remote plugin message"}),"\n",(0,t.jsx)(n.p,{children:"If the following error is encountered when enabling a plugin secret engine or\nauth method:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"Unrecognized remote plugin message:\n\nThis usually means that the plugin is either invalid or simply\nneeds to be recompiled to support the latest protocol.\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Verify whether the OpenBao process has ",(0,t.jsx)(n.code,{children:"mlock"})," enabled, and if so, run the\nfollowing command against the plugin binary:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"$ sudo setcap cap_ipc_lock=+ep <plugin-binary>\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var t=i(96540);const s={},a=t.createContext(s);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);