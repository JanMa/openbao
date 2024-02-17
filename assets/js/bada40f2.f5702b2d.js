"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2361],{61788:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=i(74848),o=i(28453);const r={layout:"docs",page_title:"OpenBao Proxy",description:"OpenBao Proxy is a daemon that can be used to perform some OpenBao\nfunctionality automatically, and act as a proxy for OpenBao's APIs."},s="What is OpenBao Proxy?",a={id:"agent-and-proxy/proxy/index",title:"What is OpenBao Proxy?",description:"OpenBao Proxy is a daemon that can be used to perform some OpenBao\nfunctionality automatically, and act as a proxy for OpenBao's APIs.",source:"@site/content/docs/agent-and-proxy/proxy/index.mdx",sourceDirName:"agent-and-proxy/proxy",slug:"/agent-and-proxy/proxy/",permalink:"/openbao/docs/agent-and-proxy/proxy/",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/agent-and-proxy/proxy/index.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"OpenBao Proxy",description:"OpenBao Proxy is a daemon that can be used to perform some OpenBao\nfunctionality automatically, and act as a proxy for OpenBao's APIs."},sidebar:"tutorialSidebar",previous:{title:"OpenBao agent and OpenBao proxy Auto-Auth file sink",permalink:"/openbao/docs/agent-and-proxy/autoauth/sinks/file"},next:{title:"OpenBao proxy API proxy",permalink:"/openbao/docs/agent-and-proxy/proxy/apiproxy"}},l={},d=[{value:"Auto-Auth",id:"auto-auth",level:2},{value:"API proxy",id:"api-proxy",level:2},{value:"Caching",id:"caching",level:2},{value:"API",id:"api",level:2},{value:"Quit",id:"quit",level:3},{value:"Cache",id:"cache",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Command options",id:"command-options",level:3},{value:"Configuration file options",id:"configuration-file-options",level:3},{value:"vault stanza",id:"vault-stanza",level:3},{value:"retry stanza",id:"retry-stanza",level:4},{value:"listener stanza",id:"listener-stanza",level:3},{value:"proxy_api stanza",id:"proxy_api-stanza",level:4},{value:"telemetry stanza",id:"telemetry-stanza",level:3},{value:"Start OpenBao proxy",id:"start-openbao-proxy",level:2},{value:"Example configuration",id:"example-configuration",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"what-is-openbao-proxy",children:"What is OpenBao Proxy?"}),"\n",(0,t.jsxs)(n.p,{children:["OpenBao Proxy aims to remove the initial hurdle to adopt OpenBao by providing a\nmore scalable and simpler way for applications to integrate with OpenBao.\nOpenBao Proxy acts as an ",(0,t.jsx)(n.a,{href:"/docs/agent-and-proxy/proxy/apiproxy",children:"API Proxy"})," for OpenBao, and can optionally allow\nor force interacting clients to use its ",(0,t.jsx)(n.a,{href:"/docs/agent-and-proxy/autoauth",children:"automatically authenticated token"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"OpenBao Proxy is a client daemon that provides the following features:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/agent-and-proxy/autoauth",children:"Auto-Auth"})," - Automatically authenticate to OpenBao and manage the\ntoken renewal process for locally-retrieved dynamic secrets."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/agent-and-proxy/proxy/apiproxy",children:"API Proxy"})," - Acts as a proxy for OpenBao's API,\noptionally using (or forcing the use of) the Auto-Auth token."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/agent-and-proxy/proxy/caching",children:"Caching"})," - Allows client-side caching of responses containing newly\ncreated tokens and responses containing leased secrets generated off of these\nnewly created tokens. The agent also manages the renewals of the cached tokens and leases."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"auto-auth",children:"Auto-Auth"}),"\n",(0,t.jsxs)(n.p,{children:["OpenBao Proxy allows easy authentication to OpenBao in a wide variety of\nenvironments. Please see the ",(0,t.jsx)(n.a,{href:"/docs/agent-and-proxy/autoauth",children:"Auto-Auth docs"}),"\nfor information."]}),"\n",(0,t.jsxs)(n.p,{children:["Auto-Auth functionality takes place within an ",(0,t.jsx)(n.code,{children:"auto_auth"})," configuration stanza."]}),"\n",(0,t.jsx)(n.h2,{id:"api-proxy",children:"API proxy"}),"\n",(0,t.jsxs)(n.p,{children:["OpenBao Proxy's primary purpose is to act as an API proxy for OpenBao, allowing you to talk to OpenBao's\nAPI via a listener. It can be configured to optionally allow or force the automatic use of\nthe Auto-Auth token for these requests. Please see the ",(0,t.jsx)(n.a,{href:"/docs/agent-and-proxy/proxy/apiproxy",children:"API Proxy docs"}),"\nfor more information."]}),"\n",(0,t.jsxs)(n.p,{children:["API Proxy functionality takes place within a defined ",(0,t.jsx)(n.code,{children:"listener"}),", and its behaviour can be configured with an\n",(0,t.jsxs)(n.a,{href:"/docs/agent-and-proxy/proxy/apiproxy#configuration-api_proxy",children:[(0,t.jsx)(n.code,{children:"api_proxy"})," stanza"]}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"caching",children:"Caching"}),"\n",(0,t.jsxs)(n.p,{children:["OpenBao Proxy allows client-side caching of responses containing newly created tokens\nand responses containing leased secrets generated off of these newly created tokens.\nPlease see the ",(0,t.jsx)(n.a,{href:"/docs/agent-and-proxy/proxy/caching",children:"Caching docs"})," for information."]}),"\n",(0,t.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,t.jsx)(n.h3,{id:"quit",children:"Quit"}),"\n",(0,t.jsxs)(n.p,{children:["This endpoint triggers shutdown of the proxy. By default, it is disabled, and can\nbe enabled per listener using the ",(0,t.jsx)(n.a,{href:"/docs/agent-and-proxy/proxy/#proxy_api-stanza",children:(0,t.jsx)(n.code,{children:"proxy_api"})})," stanza. It is recommended\nto only enable this on trusted interfaces, as it does not require any authorization to use."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"POST"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"/proxy/v1/quit"})})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"cache",children:"Cache"}),"\n",(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(n.a,{href:"/docs/agent-and-proxy/proxy/caching#api",children:"caching"})," page for details on the cache API."]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.h3,{id:"command-options",children:"Command options"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-log-level"})," ((#_log_level)) ",(0,t.jsx)(n.code,{children:'(string: "info")'})," - Log verbosity level. Supported values (in\norder of descending detail) are ",(0,t.jsx)(n.code,{children:"trace"}),", ",(0,t.jsx)(n.code,{children:"debug"}),", ",(0,t.jsx)(n.code,{children:"info"}),", ",(0,t.jsx)(n.code,{children:"warn"}),", and ",(0,t.jsx)(n.code,{children:"error"}),". This can\nalso be specified via the ",(0,t.jsx)(n.code,{children:"VAULT_LOG_LEVEL"})," environment variable."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-log-format"})," ((#_log_format)) ",(0,t.jsx)(n.code,{children:'(string: "standard")'})," - Log format. Supported values\nare ",(0,t.jsx)(n.code,{children:"standard"})," and ",(0,t.jsx)(n.code,{children:"json"}),". This can also be specified via the\n",(0,t.jsx)(n.code,{children:"VAULT_LOG_FORMAT"})," environment variable."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-log-file"})," ((#_log_file)) - the absolute path where OpenBao Proxy should save\nlog messages. Paths that end with a path separator use the default file name,\n",(0,t.jsx)(n.code,{children:"proxy.log"}),". Paths that do not end with a file extension use the default\n",(0,t.jsx)(n.code,{children:".log"})," extension. If the log file rotates, OpenBao Proxy appends the current\ntimestamp to the file name at the time of rotation. For example:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.code,{children:"log-file"})}),(0,t.jsx)(n.th,{children:"Full log file"}),(0,t.jsx)(n.th,{children:"Rotated log file"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/var/log"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/var/log/proxy.log"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/var/log/proxy-{timestamp}.log"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/var/log/my-diary"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/var/log/my-diary.log"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/var/log/my-diary-{timestamp}.log"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/var/log/my-diary.txt"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/var/log/my-diary.txt"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/var/log/my-diary-{timestamp}.txt"})})]})]})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-log-rotate-bytes"})," ((#_log_rotate_bytes)) - to specify the number of\nbytes that should be written to a log before it needs to be rotated. Unless specified,\nthere is no limit to the number of bytes that can be written to a log file."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-log-rotate-duration"})," ((#_log_rotate_duration)) - to specify the maximum\nduration a log should be written to before it needs to be rotated. Must be a duration\nvalue such as 30s. Defaults to 24h."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-log-rotate-max-files"})," ((#_log_rotate_max_files)) - to specify the maximum\nnumber of older log file archives to keep. Defaults to ",(0,t.jsx)(n.code,{children:"0"})," (no files are ever deleted).\nSet to ",(0,t.jsx)(n.code,{children:"-1"})," to discard old log files when a new one is created."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"configuration-file-options",children:"Configuration file options"}),"\n",(0,t.jsx)(n.p,{children:"These are the currently-available general configuration options:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"vault"})," ",(0,t.jsxs)("code",{children:["(",(0,t.jsx)(n.a,{href:"/docs/agent-and-proxy/proxy#vault-stanza",children:"vault"}),": <optional>)"]})," - Specifies the remote OpenBao server the Proxy connects to."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"auto_auth"})," ",(0,t.jsxs)("code",{children:["(",(0,t.jsx)(n.a,{href:"/docs/agent-and-proxy/autoauth",children:"auto_auth"}),": <optional>)"]})," - Specifies the method and other options used for Auto-Auth functionality."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"api_proxy"})," ",(0,t.jsxs)("code",{children:["(",(0,t.jsx)(n.a,{href:"/docs/agent-and-proxy/proxy/apiproxy",children:"api_proxy"}),": <optional>)"]})," - Specifies options used for API Proxy functionality."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"cache"})," ",(0,t.jsxs)("code",{children:["(",(0,t.jsx)(n.a,{href:"/docs/agent-and-proxy/proxy/caching",children:"cache"}),": <optional>)"]})," - Specifies options used for Caching functionality."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"listener"})," ",(0,t.jsxs)("code",{children:["(",(0,t.jsx)(n.a,{href:"/docs/agent-and-proxy/proxy#listener-stanza",children:"listener"}),": <optional>)"]})," - Specifies the addresses and ports on which the Proxy will respond to requests."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["~> ",(0,t.jsx)(n.strong,{children:"Note:"})," On ",(0,t.jsx)(n.code,{children:"SIGHUP"})," (",(0,t.jsx)(n.code,{children:"kill -SIGHUP $(pidof bao)"}),"), OpenBao Proxy will attempt to reload listener TLS configuration.\nThis method can be used to refresh certificates used by OpenBao Proxy without having to restart its process."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"pid_file"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - Path to the file in which the Proxy's Process ID\n(PID) should be stored"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"exit_after_auth"})," ",(0,t.jsx)(n.code,{children:"(bool: false)"})," - If set to ",(0,t.jsx)(n.code,{children:"true"}),", the proxy will exit\nwith code ",(0,t.jsx)(n.code,{children:"0"})," after a single successful auth, where success means that a\ntoken was retrieved and all sinks successfully wrote it"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"disable_idle_connections"})," ",(0,t.jsx)(n.code,{children:"(string array: [])"})," - A list of strings that disables idle connections for various features in OpenBao Proxy.\nValid values include: ",(0,t.jsx)(n.code,{children:"auto-auth"}),", and ",(0,t.jsx)(n.code,{children:"proxying"}),". Can also be configured by setting the ",(0,t.jsx)(n.code,{children:"VAULT_PROXY_DISABLE_IDLE_CONNECTIONS"}),"\nenvironment variable as a comma separated string. This environment variable will override any values found in a configuration file."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"disable_keep_alives"})," ",(0,t.jsx)(n.code,{children:"(string array: [])"})," - A list of strings that disables keep alives for various features in OpenBao Agent.\nValid values include: ",(0,t.jsx)(n.code,{children:"auto-auth"}),", and ",(0,t.jsx)(n.code,{children:"proxying"}),". Can also be configured by setting the ",(0,t.jsx)(n.code,{children:"VAULT_PROXY_DISABLE_KEEP_ALIVES"}),"\nenvironment variable as a comma separated string. This environment variable will override any values found in a configuration file."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"template"})," ",(0,t.jsxs)("code",{children:["(",(0,t.jsx)(n.a,{href:"/docs/agent-and-proxy/proxy/template",children:"template"}),": <optional>)"]})," - Specifies options used for templating OpenBao secrets to files."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"template_config"})," ",(0,t.jsxs)("code",{children:["(",(0,t.jsx)(n.a,{href:"/docs/agent-and-proxy/proxy/template#template-configurations",children:"template_config"}),": <optional>)"]})," - Specifies templating engine behavior."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"telemetry"})," ",(0,t.jsxs)("code",{children:["(",(0,t.jsx)(n.a,{href:"/docs/configuration/telemetry",children:"telemetry"}),": <optional>)"]})," \u2013 Specifies the telemetry\nreporting system. See the ",(0,t.jsx)(n.a,{href:"/docs/agent-and-proxy/proxy#telemetry-stanza",children:"telemetry Stanza"})," section below\nfor a list of metrics specific to Proxy."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"log_level"})," - Equivalent to the ",(0,t.jsxs)(n.a,{href:"#_log_level",children:[(0,t.jsx)(n.code,{children:"-log-level"})," command-line flag"]}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["~> ",(0,t.jsx)(n.strong,{children:"Note:"})," On ",(0,t.jsx)(n.code,{children:"SIGHUP"})," (",(0,t.jsx)(n.code,{children:"kill -SIGHUP $(pidof bao)"}),"), OpenBao Proxy will update the log level to the value\nspecified by configuration file (including overriding values set using CLI or environment variable parameters)."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"log_format"})," - Equivalent to the ",(0,t.jsxs)(n.a,{href:"#_log_format",children:[(0,t.jsx)(n.code,{children:"-log-format"})," command-line flag"]}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"log_file"})," - Equivalent to the ",(0,t.jsxs)(n.a,{href:"#_log_file",children:[(0,t.jsx)(n.code,{children:"-log-file"})," command-line flag"]}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"log_rotate_duration"})," - Equivalent to the ",(0,t.jsxs)(n.a,{href:"#_log_rotate_duration",children:[(0,t.jsx)(n.code,{children:"-log-rotate-duration"})," command-line flag"]}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"log_rotate_bytes"})," - Equivalent to the ",(0,t.jsxs)(n.a,{href:"#_log_rotate_bytes",children:[(0,t.jsx)(n.code,{children:"-log-rotate-bytes"})," command-line flag"]}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"log_rotate_max_files"})," - Equivalent to the ",(0,t.jsxs)(n.a,{href:"#_log_rotate_max_files",children:[(0,t.jsx)(n.code,{children:"-log-rotate-max-files"})," command-line flag"]}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"vault-stanza",children:"vault stanza"}),"\n",(0,t.jsxs)(n.p,{children:["There can at most be one top level ",(0,t.jsx)(n.code,{children:"vault"})," block, and it has the following\nconfiguration entries:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"address"})," ",(0,t.jsx)(n.code,{children:"(string: <optional>)"})," - The address of the OpenBao server to\nconnect to. This should be a Fully Qualified Domain Name (FQDN) or IP\nsuch as ",(0,t.jsx)(n.code,{children:"https://openbao-fqdn:8200"})," or ",(0,t.jsx)(n.code,{children:"https://172.16.9.8:8200"}),".\nThis value can be overridden by setting the ",(0,t.jsx)(n.code,{children:"VAULT_ADDR"})," environment variable."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ca_cert"})," ",(0,t.jsx)(n.code,{children:"(string: <optional>)"})," - Path on the local disk to a single PEM-encoded\nCA certificate to verify the OpenBao server's SSL certificate. This value can\nbe overridden by setting the ",(0,t.jsx)(n.code,{children:"VAULT_CACERT"})," environment variable."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ca_path"})," ",(0,t.jsx)(n.code,{children:"(string: <optional>)"})," - Path on the local disk to a directory of\nPEM-encoded CA certificates to verify the OpenBao server's SSL certificate.\nThis value can be overridden by setting the ",(0,t.jsx)(n.code,{children:"VAULT_CAPATH"})," environment\nvariable."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"client_cert"})," ",(0,t.jsx)(n.code,{children:"(string: <optional>)"})," - Path on the local disk to a single\nPEM-encoded CA certificate to use for TLS authentication to the OpenBao server.\nThis value can be overridden by setting the ",(0,t.jsx)(n.code,{children:"VAULT_CLIENT_CERT"})," environment\nvariable."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"client_key"})," ",(0,t.jsx)(n.code,{children:"(string: <optional>)"})," - Path on the local disk to a single\nPEM-encoded private key matching the client certificate from ",(0,t.jsx)(n.code,{children:"client_cert"}),".\nThis value can be overridden by setting the ",(0,t.jsx)(n.code,{children:"VAULT_CLIENT_KEY"})," environment\nvariable."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"tls_skip_verify"})," ",(0,t.jsx)(n.code,{children:"(string: <optional>)"})," - Disable verification of TLS\ncertificates. Using this option is highly discouraged as it decreases the\nsecurity of data transmissions to and from the OpenBao server. This value can\nbe overridden by setting the ",(0,t.jsx)(n.code,{children:"VAULT_SKIP_VERIFY"})," environment variable."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"tls_server_name"})," ",(0,t.jsx)(n.code,{children:"(string: <optional>)"})," - Name to use as the SNI host when\nconnecting via TLS. This value can be overridden by setting the\n",(0,t.jsx)(n.code,{children:"VAULT_TLS_SERVER_NAME"})," environment variable."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"retry-stanza",children:"retry stanza"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"vault"})," stanza may contain a ",(0,t.jsx)(n.code,{children:"retry"})," stanza that controls how failing OpenBao\nrequests are handled. Auto-auth, however, has its own notion of retrying and is not\naffected by this section."]}),"\n",(0,t.jsxs)(n.p,{children:["Here are the options for the ",(0,t.jsx)(n.code,{children:"retry"})," stanza:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"num_retries"})," ",(0,t.jsx)(n.code,{children:"(int: 12)"})," - Specify how many times a failing request will\nbe retried. A value of ",(0,t.jsx)(n.code,{children:"0"})," translates to the default, i.e. 12 retries.\nA value of ",(0,t.jsx)(n.code,{children:"-1"})," disables retries. The environment variable ",(0,t.jsx)(n.code,{children:"VAULT_MAX_RETRIES"}),"\noverrides this setting."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'Requests originating from the proxy cache will only be retried if they resulted\nin specific HTTP result codes: any 50x code except 501 ("not implemented").\nRequests coming from the template subsystem are retried regardless of the\nfailure.'}),"\n",(0,t.jsx)(n.h3,{id:"listener-stanza",children:"listener stanza"}),"\n",(0,t.jsxs)(n.p,{children:["OpenBao Proxy supports one or more ",(0,t.jsx)(n.a,{href:"/docs/configuration/listener/tcp",children:"listener"})," stanzas. Listeners\ncan be configured with or without ",(0,t.jsx)(n.a,{href:"/docs/agent-and-proxy/proxy/caching",children:"caching"}),", but will use the cache if it\nhas been configured, and will enable the ",(0,t.jsx)(n.a,{href:"/docs/agent-and-proxy/proxy/apiproxy",children:"API proxy"}),". In addition to the standard\nlistener configuration, a Proxy's listener configuration also supports the following:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"require_request_header"})," ",(0,t.jsx)(n.code,{children:"(bool: false)"})," - Require that all incoming HTTP\nrequests on this listener must have an ",(0,t.jsx)(n.code,{children:"X-Vault-Request: true"})," header entry.\nUsing this option offers an additional layer of protection from Server Side\nRequest Forgery attacks. Requests on the listener that do not have the proper\n",(0,t.jsx)(n.code,{children:"X-Vault-Request"})," header will fail, with a HTTP response status code of ",(0,t.jsx)(n.code,{children:"412: Precondition Failed"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"role"})," ",(0,t.jsx)(n.code,{children:"(string: default)"})," - ",(0,t.jsx)(n.code,{children:"role"})," determines which APIs the listener serves.\nIt can be configured to ",(0,t.jsx)(n.code,{children:"metrics_only"})," to serve only metrics, or the default role, ",(0,t.jsx)(n.code,{children:"default"}),",\nwhich serves everything (including metrics). The ",(0,t.jsx)(n.code,{children:"require_request_header"})," does not apply\nto ",(0,t.jsx)(n.code,{children:"metrics_only"})," listeners."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"proxy_api"})," ",(0,t.jsxs)("code",{children:["(",(0,t.jsx)(n.a,{href:"/docs/agent-and-proxy/proxy/#proxy_api-stanza",children:"proxy_api"}),": <optional>)"]})," - Manages optional Proxy API endpoints."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"proxy_api-stanza",children:"proxy_api stanza"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"enable_quit"})," ",(0,t.jsx)(n.code,{children:"(bool: false)"})," - If set to ",(0,t.jsx)(n.code,{children:"true"}),", the Proxy will enable the ",(0,t.jsx)(n.a,{href:"/docs/agent-and-proxy/proxy#quit",children:"quit"})," API."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"telemetry-stanza",children:"telemetry stanza"}),"\n",(0,t.jsxs)(n.p,{children:["OpenBao Proxy supports the ",(0,t.jsx)(n.a,{href:"/docs/configuration/telemetry",children:"telemetry"})," stanza and collects various\nruntime metrics about its performance, the auto-auth and the cache status:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Metric"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"vault.proxy.auth.failure"})}),(0,t.jsx)(n.td,{children:"Number of authentication failures"}),(0,t.jsx)(n.td,{children:"counter"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"vault.proxy.auth.success"})}),(0,t.jsx)(n.td,{children:"Number of authentication successes"}),(0,t.jsx)(n.td,{children:"counter"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"vault.proxy.proxy.success"})}),(0,t.jsx)(n.td,{children:"Number of requests successfully proxied"}),(0,t.jsx)(n.td,{children:"counter"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"vault.proxy.proxy.client_error"})}),(0,t.jsx)(n.td,{children:"Number of requests for which OpenBao returned an error"}),(0,t.jsx)(n.td,{children:"counter"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"vault.proxy.proxy.error"})}),(0,t.jsx)(n.td,{children:"Number of requests the proxy failed to proxy"}),(0,t.jsx)(n.td,{children:"counter"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"vault.proxy.cache.hit"})}),(0,t.jsx)(n.td,{children:"Number of cache hits"}),(0,t.jsx)(n.td,{children:"counter"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"vault.proxy.cache.miss"})}),(0,t.jsx)(n.td,{children:"Number of cache misses"}),(0,t.jsx)(n.td,{children:"counter"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"start-openbao-proxy",children:"Start OpenBao proxy"}),"\n",(0,t.jsx)(n.p,{children:"To run OpenBao Proxy:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/downloads",children:"Download"})," the OpenBao binary where the client application runs\n(virtual machine, Kubernetes pod, etc.)"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create an OpenBao Proxy configuration file. (See the ",(0,t.jsx)(n.a,{href:"#example-configuration",children:"Example\nConfiguration"})," section for an example configuration.)"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Start an OpenBao Proxy with the configuration file."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"$ bao proxy -config=/etc/openbao/proxy-config.hcl\n"})}),"\n",(0,t.jsx)(n.p,{children:"To get help, run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"$ bao proxy -h\n"})}),"\n",(0,t.jsxs)(n.p,{children:["As with OpenBao, the ",(0,t.jsx)(n.code,{children:"-config"})," flag can be used in three different ways:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Use the flag once to name the path to a single specific configuration file."}),"\n",(0,t.jsx)(n.li,{children:"Use the flag multiple times to name multiple configuration files, which will be composed at runtime."}),"\n",(0,t.jsx)(n.li,{children:"Use the flag to name a directory of configuration files, the contents of which will be composed at runtime."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example-configuration",children:"Example configuration"}),"\n",(0,t.jsx)(n.p,{children:"An example configuration, with very contrived values, follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-hcl",children:'pid_file = "./pidfile"\n\nvault {\n  address = "https://openbao-fqdn:8200"\n  retry {\n    num_retries = 5\n  }\n}\n\nauto_auth {\n  method "kubernetes" {\n    config = {\n      role = "foobar"\n    }\n  }\n\n  sink "file" {\n    config = {\n      path = "/tmp/file-foo"\n    }\n  }\n\n  sink "file" {\n    wrap_ttl = "5m"\n    aad_env_var = "TEST_AAD_ENV"\n    dh_type = "curve25519"\n    dh_path = "/tmp/file-foo-dhpath2"\n    config = {\n      path = "/tmp/file-bar"\n    }\n  }\n}\n\ncache {\n  // An empty cache stanza still enables caching\n}\n\napi_proxy {\n  use_auto_auth_token = true\n}\n\nlistener "unix" {\n  address = "/path/to/socket"\n  tls_disable = true\n\n  agent_api {\n    enable_quit = true\n  }\n}\n\nlistener "tcp" {\n  address = "127.0.0.1:8100"\n  tls_disable = true\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>a});var t=i(96540);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);