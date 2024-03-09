"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4064],{74131:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=i(74848),r=i(28453);const o={sidebar_label:"Overview",description:"OpenBao server configuration reference."},t="OpenBao configuration",a={id:"configuration/index",title:"OpenBao configuration",description:"OpenBao server configuration reference.",source:"@site/content/docs/configuration/index.mdx",sourceDirName:"configuration",slug:"/configuration/",permalink:"/openbao/docs/configuration/",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/configuration/index.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Overview",description:"OpenBao server configuration reference."},sidebar:"docs",previous:{title:"Events",permalink:"/openbao/docs/concepts/events"},next:{title:"Overview",permalink:"/openbao/docs/configuration/listener/"}},l={},d=[{value:"Parameters",id:"parameters",level:2},{value:"High availability parameters",id:"high-availability-parameters",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"openbao-configuration",children:"OpenBao configuration"}),"\n",(0,s.jsxs)(n.p,{children:["Outside of development mode, OpenBao servers are configured using a file.\nThe format of this file is ",(0,s.jsx)(n.a,{href:"https://github.com/hashicorp/hcl",children:"HCL"})," or JSON."]}),"\n",(0,s.jsxs)(n.p,{children:["Enabling the file permissions check via the environment variable ",(0,s.jsx)(n.code,{children:"VAULT_ENABLE_FILE_PERMISSIONS_CHECK"}),"\nallows OpenBao to check if the config directory and files are owned by the user running OpenBao.\nIt also checks if there are no write or execute permissions for group or others.\nOpenBao allows operators to specify the user and permissions of the plugin directory and binaries\nusing parameters ",(0,s.jsx)(n.code,{children:"plugin_file_uid"})," and ",(0,s.jsx)(n.code,{children:"plugin_file_permissions"})," in config if an operator needs those to be different. This check is disabled by default."]}),"\n",(0,s.jsx)(n.p,{children:"An example configuration is shown below:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",children:'ui            = true\ncluster_addr  = "https://127.0.0.1:8201"\napi_addr      = "https://127.0.0.1:8200"\ndisable_mlock = true\n\nstorage "raft" {\n  path = "/path/to/raft/data"\n  node_id = "raft_node_1"\n}\n\nlistener "tcp" {\n  address       = "127.0.0.1:8200"\n  tls_cert_file = "/path/to/full-chain.pem"\n  tls_key_file  = "/path/to/private-key.pem"\n}\n\ntelemetry {\n  statsite_address = "127.0.0.1:8125"\n  disable_hostname = true\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["After the configuration is written, use the ",(0,s.jsx)(n.code,{children:"-config"})," flag with ",(0,s.jsx)(n.code,{children:"bao server"}),"\nto specify where the configuration is."]}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"storage"})," ",(0,s.jsx)(n.code,{children:"([StorageBackend][storage-backend]: <required>)"})," \u2013\nConfigures the storage backend where OpenBao data is stored. Please see the\n",(0,s.jsx)(n.a,{href:"/docs/configuration/storage",children:"storage backends documentation"})," for the full list of\navailable storage backends. Running OpenBao in HA mode would require\ncoordination semantics to be supported by the backend. If the storage backend\nsupports HA coordination, HA backend options can also be specified in this\nparameter block. If not, a separate ",(0,s.jsx)(n.code,{children:"ha_storage"})," parameter should be\nconfigured with a backend that supports HA, along with corresponding HA\noptions."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ha_storage"})," ",(0,s.jsx)(n.code,{children:"([StorageBackend][storage-backend]: nil)"})," \u2013 Configures\nthe storage backend where OpenBao HA coordination will take place. This must be\nan HA-supporting backend. If not set, HA will be attempted on the backend\ngiven in the ",(0,s.jsx)(n.code,{children:"storage"})," parameter. This parameter is not required if the\nstorage backend supports HA coordination and if HA specific options are\nalready specified with ",(0,s.jsx)(n.code,{children:"storage"})," parameter. (Refer to ",(0,s.jsx)(n.a,{href:"/tutorials/raft/raft-ha-storage",children:"Use Integrated Storage\nfor HA\nCoordination"}),"\nfor a usage example.)"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"listener"})," ",(0,s.jsx)(n.code,{children:"([Listener][listener]: <required>)"})," \u2013 Configures how\nOpenBao is listening for API requests."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"user_lockout"})," ",(0,s.jsx)(n.code,{children:"([UserLockout][user-lockout]: nil)"})," \u2013\nConfigures the user-lockout behaviour for failed logins. For more information, please see the\n",(0,s.jsx)(n.a,{href:"/docs/configuration/user-lockout",children:"user lockout configuration documentation"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"seal"})," ",(0,s.jsx)(n.code,{children:"([Seal][seal]: nil)"})," \u2013 Configures the seal type to use for\nauto-unsealing, as well as for\n[seal wrapping][sealwrap] as an additional layer of data protection."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"cluster_name"})," ",(0,s.jsx)(n.code,{children:"(string: <generated>)"})," \u2013 Specifies the identifier for the\nOpenBao cluster. If omitted, OpenBao will generate a value."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"cache_size"})," ",(0,s.jsx)(n.code,{children:'(string: "131072")'})," \u2013 Specifies the size of the read cache used\nby the physical storage subsystem. The value is in number of entries, so the\ntotal cache size depends on the size of stored entries."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"disable_cache"})," ",(0,s.jsx)(n.code,{children:"(bool: false)"})," \u2013 Disables all caches within OpenBao, including\nthe read cache used by the physical storage subsystem. This will very\nsignificantly impact performance."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"disable_mlock"})," ",(0,s.jsx)(n.code,{children:"(bool: false)"})," \u2013\xa0Disables the server from executing the\n",(0,s.jsx)(n.code,{children:"mlock"})," syscall. ",(0,s.jsx)(n.code,{children:"mlock"})," prevents memory from being swapped to disk. Disabling\n",(0,s.jsx)(n.code,{children:"mlock"})," is not recommended unless using ",(0,s.jsx)(n.a,{href:"/docs/internals/integrated-storage",children:"integrated storage"}),".\nFollow the additional security precautions outlined below when disabling ",(0,s.jsx)(n.code,{children:"mlock"}),".\nThis can also be provided via the environment variable ",(0,s.jsx)(n.code,{children:"VAULT_DISABLE_MLOCK"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Disabling ",(0,s.jsx)(n.code,{children:"mlock"})," is not recommended unless the systems running OpenBao only\nuse encrypted swap or do not use swap at all. OpenBao only supports memory\nlocking on UNIX-like systems that support the mlock() syscall (Linux, FreeBSD, etc).\nNon UNIX-like systems (e.g. Windows, NaCL, Android) lack the primitives to keep a\nprocess's entire memory address space from spilling to disk and is therefore\nautomatically disabled on unsupported platforms."]}),"\n",(0,s.jsxs)(n.p,{children:["Disabling ",(0,s.jsx)(n.code,{children:"mlock"})," is strongly recommended if using ",(0,s.jsx)(n.a,{href:"/docs/internals/integrated-storage",children:"integrated\nstorage"})," due to\nthe fact that ",(0,s.jsx)(n.code,{children:"mlock"})," does not interact well with memory mapped files such as\nthose created by BoltDB, which is used by Raft to track state. When using\n",(0,s.jsx)(n.code,{children:"mlock"}),", memory-mapped files get loaded into resident memory which causes\nOpenBao's entire dataset to be loaded in-memory and cause out-of-memory\nissues if OpenBao's data becomes larger than the available RAM. In this case,\neven though the data within BoltDB remains encrypted at rest, swap should be\ndisabled to prevent OpenBao's other in-memory sensitive data from being dumped\ninto disk."]}),"\n",(0,s.jsxs)(n.p,{children:["On Linux, to give the OpenBao executable the ability to use the ",(0,s.jsx)(n.code,{children:"mlock"}),"\nsyscall without running the process as root, run:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sudo setcap cap_ipc_lock=+ep $(readlink -f $(which bao))\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Note: Since each plugin runs as a separate process, you need to do the same\nfor each plugin in your ",(0,s.jsx)(n.a,{href:"/docs/plugins/plugin-architecture#plugin-directory",children:"plugins\ndirectory"}),"."]})}),"\n",(0,s.jsx)(n.p,{children:'If you use a Linux distribution with a modern version of systemd, you can add\nthe following directive to the "[Service]" configuration section:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ini",children:"LimitMEMLOCK=infinity\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"plugin_directory"})," ",(0,s.jsx)(n.code,{children:'(string: "")'})," \u2013 A directory from which plugins are\nallowed to be loaded. OpenBao must have permission to read files in this\ndirectory to successfully load plugins, and the value cannot be a symbolic link."]}),"\n",(0,s.jsxs)(n.p,{children:["Enabling the file permissions check via the environment variable ",(0,s.jsx)(n.code,{children:"VAULT_ENABLE_FILE_PERMISSIONS_CHECK"}),"\nallows OpenBao to check if the config directory and files are owned by the user running OpenBao.\nIt also checks if there are no write or execute permissions for group or others.\nOpenBao allows operators to specify the user and permissions of the plugin directory and binaries\nusing parameters ",(0,s.jsx)(n.code,{children:"plugin_file_uid"})," and ",(0,s.jsx)(n.code,{children:"plugin_file_permissions"})," in config if an operator needs those to be different. This check is disabled by default."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"plugin_file_uid"})," ",(0,s.jsx)(n.code,{children:"(integer: 0)"})," \u2013 Uid of the plugin directories and plugin binaries if they\nare owned by an user other than the user running OpenBao. This only needs to be set if the\nfile permissions check is enabled via the environment variable ",(0,s.jsx)(n.code,{children:"VAULT_ENABLE_FILE_PERMISSIONS_CHECK"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"plugin_file_permissions"})," ",(0,s.jsx)(n.code,{children:'(string: "")'})," \u2013 Octal permission string of the plugin\ndirectories and plugin binaries if they have write or execute permissions for group or others.\nThis only needs to be set if the file permissions check is enabled via the environment variable\n",(0,s.jsx)(n.code,{children:"VAULT_ENABLE_FILE_PERMISSIONS_CHECK"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"telemetry"})," ",(0,s.jsx)(n.code,{children:"([Telemetry][telemetry]: <none>)"})," \u2013 Specifies the telemetry\nreporting system."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"default_lease_ttl"})," ",(0,s.jsx)(n.code,{children:'(string: "768h")'})," \u2013 Specifies the default lease duration\nfor tokens and secrets. This is specified using a label suffix like ",(0,s.jsx)(n.code,{children:'"30s"'})," or\n",(0,s.jsx)(n.code,{children:'"1h"'}),". This value cannot be larger than ",(0,s.jsx)(n.code,{children:"max_lease_ttl"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"max_lease_ttl"})," ",(0,s.jsx)(n.code,{children:'(string: "768h")'})," \u2013\xa0Specifies the maximum possible lease\nduration for tokens and secrets. This is specified using a label\nsuffix like ",(0,s.jsx)(n.code,{children:'"30s"'})," or ",(0,s.jsx)(n.code,{children:'"1h"'}),". Individual mounts can override this value\nby tuning the mount with the ",(0,s.jsx)(n.code,{children:"max-lease-ttl"})," flag of the\n",(0,s.jsx)(n.a,{href:"/docs/commands/auth/tune#max-lease-ttl",children:"auth"})," or\n",(0,s.jsx)(n.a,{href:"/docs/commands/secrets/tune#max-lease-ttl",children:"secret"})," commands."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"default_max_request_duration"})," ",(0,s.jsx)(n.code,{children:'(string: "90s")'})," \u2013\xa0Specifies the default\nmaximum request duration allowed before OpenBao cancels the request. This can\nbe overridden per listener via the ",(0,s.jsx)(n.code,{children:"max_request_duration"})," value."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"detect_deadlocks"})," ",(0,s.jsx)(n.code,{children:'(string: "")'})," - A comma separated string that specifies the internal\nmutex locks that should be monitored for potential deadlocks. Currently supported values\ninclude ",(0,s.jsx)(n.code,{children:"statelock"}),", ",(0,s.jsx)(n.code,{children:"quotas"})," and ",(0,s.jsx)(n.code,{children:"expiration"}),' which will cause "POTENTIAL DEADLOCK:"\nto be logged when an attempt at a core state lock appears to be deadlocked. Enabling this\ncan have a negative effect on performance due to the tracking of each lock attempt.']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"raw_storage_endpoint"})," ",(0,s.jsx)(n.code,{children:"(bool: false)"})," \u2013 Enables the ",(0,s.jsx)(n.code,{children:"sys/raw"})," endpoint which\nallows the decryption/encryption of raw data into and out of the security\nbarrier. This is a highly privileged endpoint."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"introspection_endpoint"})," ",(0,s.jsx)(n.code,{children:"(bool: false)"})," - Enables the ",(0,s.jsx)(n.code,{children:"sys/internal/inspect"})," endpoint\nwhich allows users with a root token or sudo privileges to inspect certain subsystems inside OpenBao."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ui"})," ",(0,s.jsx)(n.code,{children:"(bool: false)"})," \u2013 Enables the built-in web UI, which is available on all\nlisteners (address + port) at the ",(0,s.jsx)(n.code,{children:"/ui"})," path. Browsers accessing the standard\nOpenBao API address will automatically redirect there. This can also be provided\nvia the environment variable ",(0,s.jsx)(n.code,{children:"VAULT_UI"}),". For more information, please see the\n",(0,s.jsx)(n.a,{href:"/docs/configuration/ui",children:"ui configuration documentation"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"pid_file"})," ",(0,s.jsx)(n.code,{children:'(string: "")'})," - Path to the file in which the OpenBao server's\nProcess ID (PID) should be stored."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"enable_response_header_hostname"})," ",(0,s.jsx)(n.code,{children:"(bool: false)"})," - Enables the addition of an HTTP header\nin all of OpenBao's HTTP responses: ",(0,s.jsx)(n.code,{children:"X-Vault-Hostname"}),". This will contain the\nhost name of the OpenBao node that serviced the HTTP request. This information\nis best effort and is not guaranteed to be present. If this configuration\noption is enabled and the ",(0,s.jsx)(n.code,{children:"X-Vault-Hostname"})," header is not present in a response,\nit means there was some kind of error retrieving the host name from the\noperating system."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"enable_response_header_raft_node_id"})," ",(0,s.jsx)(n.code,{children:"(bool: false)"})," - Enables the addition of an HTTP header\nin all of OpenBao's HTTP responses: ",(0,s.jsx)(n.code,{children:"X-Vault-Raft-Node-ID"}),". If OpenBao is participating\nin a Raft cluster (i.e. using integrated storage), this header will contain the\nRaft node ID of the OpenBao node that serviced the HTTP request. If OpenBao is not\nparticipating in a Raft cluster, this header will be omitted, whether this configuration\noption is enabled or not."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"log_level"})," ",(0,s.jsx)(n.code,{children:'(string: "info")'})," - Log verbosity level.\nSupported values (in order of descending detail) are ",(0,s.jsx)(n.code,{children:"trace"}),", ",(0,s.jsx)(n.code,{children:"debug"}),", ",(0,s.jsx)(n.code,{children:"info"}),", ",(0,s.jsx)(n.code,{children:"warn"}),", and ",(0,s.jsx)(n.code,{children:"error"}),".\nThis can also be specified via the ",(0,s.jsx)(n.code,{children:"VAULT_LOG_LEVEL"})," environment variable."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Note: On SIGHUP (",(0,s.jsx)(n.code,{children:"sudo kill -s HUP"})," ",(0,s.jsx)(n.em,{children:"pid of bao"}),"), if a valid value is specified, OpenBao will update the existing log level,\noverriding (even if specified) both the CLI flag and environment variable."]})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"Note: Not all parts of OpenBao's logging can have its log level be changed dynamically this way; in particular,\nsecrets/auth plugins are currently not updated dynamically."})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"log_format"})," - Equivalent to the ",(0,s.jsxs)(n.a,{href:"/docs/commands/server#_log_format",children:[(0,s.jsx)(n.code,{children:"-log-format"})," command-line flag"]}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"log_file"})," - Equivalent to the ",(0,s.jsxs)(n.a,{href:"/docs/commands/server#_log_file",children:[(0,s.jsx)(n.code,{children:"-log-file"})," command-line flag"]}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"log_rotate_duration"})," - Equivalent to the ",(0,s.jsxs)(n.a,{href:"/docs/commands/server#_log_rotate_duration",children:[(0,s.jsx)(n.code,{children:"-log-rotate-duration"})," command-line flag"]}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"log_rotate_bytes"})," - Equivalent to the ",(0,s.jsxs)(n.a,{href:"/docs/commands/server#_log_rotate_bytes",children:[(0,s.jsx)(n.code,{children:"-log-rotate-bytes"})," command-line flag"]}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"log_rotate_max_files"})," - Equivalent to the ",(0,s.jsxs)(n.a,{href:"/docs/commands/server#_log_rotate_max_files",children:[(0,s.jsx)(n.code,{children:"-log-rotate-max-files"})," command-line flag"]}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"experiments"})," ",(0,s.jsx)(n.code,{children:"(string array: [])"})," - The list of experiments to enable for this node.\nExperiments should NOT be used in production, and the associated APIs may have backwards\nincompatible changes between releases. Additional experiments can also be specified via\nthe ",(0,s.jsx)(n.code,{children:"VAULT_EXPERIMENTS"})," environment variable as a comma-separated list, or via the\n",(0,s.jsx)(n.a,{href:"/docs/commands/server#experiment",children:(0,s.jsx)(n.code,{children:"-experiment"})})," flag."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"imprecise_lease_role_tracking"})," ",(0,s.jsx)(n.code,{children:'(bool: "false")'})," - Skip lease counting by role if there are no role based quotas enabled.\nWhen ",(0,s.jsx)(n.code,{children:"imprecise_lease_role_tracking"})," is set to true and a new role-based quota is enabled, subsequent lease counts start from 0.\n",(0,s.jsx)(n.code,{children:"imprecise_lease_role_tracking"})," affects role-based lease count quotas, but reduces latencies when not using role based quotas."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"high-availability-parameters",children:"High availability parameters"}),"\n",(0,s.jsxs)(n.p,{children:["The following parameters are used on backends that support ",(0,s.jsx)(n.a,{href:"/docs/concepts/ha",children:"high availability"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"api_addr"})," ",(0,s.jsx)(n.code,{children:'(string: "")'})," \u2013 Specifies the address (full URL) to advertise to\nother OpenBao servers in the cluster for client redirection. This value is also\nused for ",(0,s.jsx)(n.a,{href:"/docs/plugins",children:"plugin backends"}),". This can also be provided via the\nenvironment variable ",(0,s.jsx)(n.code,{children:"VAULT_API_ADDR"}),". In general this should be set as a full\nURL that points to the value of the ",(0,s.jsx)(n.a,{href:"#listener",children:(0,s.jsx)(n.code,{children:"listener"})})," address.\nThis can be dynamically defined with a\n",(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/hashicorp/go-sockaddr/template",children:"go-sockaddr template"}),"\nthat is resolved at runtime."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"cluster_addr"})," ",(0,s.jsx)(n.code,{children:'(string: "")'})," \u2013 Specifies the address to advertise to other\nOpenBao servers in the cluster for request forwarding. This can also be provided\nvia the environment variable ",(0,s.jsx)(n.code,{children:"VAULT_CLUSTER_ADDR"}),". This is a full URL, like\n",(0,s.jsx)(n.code,{children:"api_addr"}),", but OpenBao will ignore the scheme (all cluster members always\nuse TLS with a private key/certificate).\nThis can be dynamically defined with a\n",(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/hashicorp/go-sockaddr/template",children:"go-sockaddr template"}),"\nthat is resolved at runtime."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"disable_clustering"})," ",(0,s.jsx)(n.code,{children:"(bool: false)"})," \u2013 Specifies whether clustering features\nsuch as request forwarding are enabled. Setting this to true on one OpenBao node\nwill disable these features ",(0,s.jsx)(n.em,{children:"only when that node is the active node"}),". This\nparameter cannot be set to ",(0,s.jsx)(n.code,{children:"true"})," if ",(0,s.jsx)(n.code,{children:"raft"})," is the storage type."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>a});var s=i(96540);const r={},o=s.createContext(r);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);