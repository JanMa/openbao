"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6805],{31329:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var t=s(74848),i=s(28453);const r={sidebar_label:"Cassandra",description:"The Cassandra plugin for OpenBao's database secrets engine generates database credentials to access Cassandra servers."},a="Cassandra database plugin HTTP API",c={id:"secret/databases/cassandra",title:"Cassandra database plugin HTTP API",description:"The Cassandra plugin for OpenBao's database secrets engine generates database credentials to access Cassandra servers.",source:"@site/content/api-docs/secret/databases/cassandra.mdx",sourceDirName:"secret/databases",slug:"/secret/databases/cassandra",permalink:"/openbao/api-docs/secret/databases/cassandra",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/api-docs/secret/databases/cassandra.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Cassandra",description:"The Cassandra plugin for OpenBao's database secrets engine generates database credentials to access Cassandra servers."},sidebar:"api",previous:{title:"Overview",permalink:"/openbao/api-docs/secret/databases/"},next:{title:"InfluxDB",permalink:"/openbao/api-docs/secret/databases/influxdb"}},d={},o=[{value:"Configure connection",id:"configure-connection",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Sample payload",id:"sample-payload",level:3},{value:"Sample request",id:"sample-request",level:3},{value:"Statements",id:"statements",level:2},{value:"Parameters",id:"parameters-1",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"cassandra-database-plugin-http-api",children:"Cassandra database plugin HTTP API"}),"\n",(0,t.jsx)(n.p,{children:":::warning"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"}),": This engine can use external X.509 certificates as part of TLS or signature validation.\nVerifying signatures against X.509 certificates that use SHA-1 is deprecated and is no longer\nusable without a workaround. See the\n",(0,t.jsx)(n.a,{href:"/docs/deprecation/faq#q-what-is-the-impact-of-removing-support-for-x-509-certificates-with-signatures-that-use-sha-1",children:"deprecation FAQ"}),"\nfor more information."]}),"\n",(0,t.jsx)(n.p,{children:":::"}),"\n",(0,t.jsx)(n.p,{children:"The Cassandra database plugin is one of the supported plugins for the database\nsecrets engine. This plugin generates database credentials dynamically based on\nconfigured roles for the Cassandra database."}),"\n",(0,t.jsx)(n.h2,{id:"configure-connection",children:"Configure connection"}),"\n",(0,t.jsxs)(n.p,{children:["In addition to the parameters defined by the ",(0,t.jsx)(n.a,{href:"/api-docs/secret/databases#configure-connection",children:"Database\nSecrets Engine"}),", this plugin\nhas a number of parameters to further configure a connection."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"POST"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"/database/config/:name"})})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"hosts"})," ",(0,t.jsx)(n.code,{children:"(string: <required>)"})," \u2013 Specifies a set of comma-delineated Cassandra\nhosts to connect to."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"port"})," ",(0,t.jsx)(n.code,{children:"(int: 9042)"})," \u2013 Specifies the default port to use if none is provided\nas part of the host URI. Defaults to Cassandra's default transport port, 9042."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"username"})," ",(0,t.jsx)(n.code,{children:"(string: <required>)"})," \u2013 Specifies the username to use for\nsuperuser access."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"password"})," ",(0,t.jsx)(n.code,{children:"(string: <required>)"})," \u2013 Specifies the password corresponding to\nthe given username."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"tls"})," ",(0,t.jsx)(n.code,{children:"(bool: true)"})," \u2013 Specifies whether to use TLS when connecting to\nCassandra."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"insecure_tls"})," ",(0,t.jsx)(n.code,{children:"(bool: false)"})," \u2013 Specifies whether to skip verification of the\nserver certificate when using TLS."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"tls_server_name"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," \u2013 Specifies the name to use as the SNI host when\nconnecting to the Cassandra server via TLS."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"pem_bundle"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," \u2013 Specifies concatenated PEM blocks containing a\ncertificate and private key; a certificate, private key, and issuing CA\ncertificate; or just a CA certificate. Only one of ",(0,t.jsx)(n.code,{children:"pem_bundle"})," or ",(0,t.jsx)(n.code,{children:"pem_json"})," can be specified."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"pem_json"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," \u2013 Specifies JSON containing a certificate and\nprivate key; a certificate, private key, and issuing CA certificate; or just a\nCA certificate. The value in this field must be an encoded JSON object. For convenience format is the\nsame as the output of the ",(0,t.jsx)(n.code,{children:"issue"})," command from the ",(0,t.jsx)(n.code,{children:"pki"})," secrets engine; see\n",(0,t.jsx)(n.a,{href:"/docs/secrets/pki",children:"the pki documentation"}),". Only one of ",(0,t.jsx)(n.code,{children:"pem_bundle"})," or ",(0,t.jsx)(n.code,{children:"pem_json"})," can be specified."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsxs)("b",{children:[(0,t.jsx)("tt",{children:"pem_json"})," example"]})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "certificate": "<client certificate as a PEM>",\n  "private_key": "<private key as a PEM>",\n  "ca_chain": ["<CA as a PEM>", "<Additional PEM for the CA chain if needed"]\n}\n'})}),(0,t.jsx)(n.p,{children:"If using the OpenBao CLI, it's probably easiest to write the JSON to a file and then reference the file:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"openbao write database/config/cassandra-example <...other fields> pem_json=@/path/to/file.json\n"})})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"skip_verification"})," ",(0,t.jsx)(n.code,{children:"(bool: false)"})," - Skip permissions checks when a connection to Cassandra\nis first created. These checks ensure that OpenBao is able to create roles, but can be resource\nintensive in clusters with many roles."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"protocol_version"})," ",(0,t.jsx)(n.code,{children:"(int: 2)"})," \u2013 Specifies the CQL protocol version to use."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"connect_timeout"})," ",(0,t.jsx)(n.code,{children:'(string: "5s")'})," \u2013 Specifies the timeout to use, both for\nconnections and in general."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"local_datacenter"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," \u2013 If set, enables host selection policy\nwhich will prioritize and use hosts which are in the local datacenter before\nhosts in all other datacenters (for example ",(0,t.jsx)(n.code,{children:"dc-01"}),")."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"socket_keep_alive"})," ",(0,t.jsx)(n.code,{children:'(string: "0s")'})," \u2013 the keep-alive period for an active\nnetwork connection. If zero, keep-alives are not enabled."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"consistency"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," \u2013 Specifies the consistency option to use. See\nthe ",(0,t.jsx)(n.a,{href:"https://github.com/gocql/gocql/blob/master/frame.go#L188",children:"gocql\ndefinition"})," for\nvalid options."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"username_template"})," ",(0,t.jsx)(n.code,{children:"(string)"})," - ",(0,t.jsx)(n.a,{href:"/docs/concepts/username-templating",children:"Template"})," describing how\ndynamic usernames are generated."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"Default Username Template"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{{ printf "v_%s_%s_%s_%s" (.DisplayName | truncate 15) (.RoleName | truncate 15) (random 20) (unix_time) | truncate 100 | replace "-" "_" | lowercase }}\n'})}),(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"Example Usernames:"})}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Example"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"DisplayName"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"token"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"RoleName"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"myrolename"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Username"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"v_token_myrolename_uszt1n4cyhal4m0xtgx3_1614294836"})})]})]})]}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Example"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"DisplayName"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"amuchlonger_dispname"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"RoleName"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"role-name-with-dashes"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Username"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"v_amuchlonger_dis_role_name_with__s0t9xb0jsab9nqz7yj40_1614294836"})})]})]})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"TLS works as follows:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.code,{children:"tls"})," is set to true, the connection will use TLS; this happens\nautomatically if ",(0,t.jsx)(n.code,{children:"pem_bundle"}),", ",(0,t.jsx)(n.code,{children:"pem_json"}),", or ",(0,t.jsx)(n.code,{children:"insecure_tls"})," is set"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.code,{children:"insecure_tls"})," is set to true, the connection will not perform verification\nof the server certificate; this also sets ",(0,t.jsx)(n.code,{children:"tls"})," to true"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If only ",(0,t.jsx)(n.code,{children:"issuing_ca"})," is set in ",(0,t.jsx)(n.code,{children:"pem_json"}),", or the only certificate in\n",(0,t.jsx)(n.code,{children:"pem_bundle"})," is a CA certificate, the given CA certificate will be used for\nserver certificate verification; otherwise the system CA certificates will be\nused"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.code,{children:"certificate"})," and ",(0,t.jsx)(n.code,{children:"private_key"})," are set in ",(0,t.jsx)(n.code,{children:"pem_bundle"})," or ",(0,t.jsx)(n.code,{children:"pem_json"}),",\nclient auth will be turned on for the connection"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"pem_bundle"})," should be a PEM-concatenated bundle of a private key + client\ncertificate, an issuing CA certificate, or both. ",(0,t.jsx)(n.code,{children:"pem_json"})," should contain the\nsame information; for convenience, the JSON format is the same as that output by\nthe issue command from the PKI secrets engine."]}),"\n",(0,t.jsx)(n.h3,{id:"sample-payload",children:"Sample payload"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "plugin_name": "cassandra-database-plugin",\n  "allowed_roles": "readonly",\n  "hosts": "cassandra1.local",\n  "username": "user",\n  "password": "pass"\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"sample-request",children:"Sample request"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/cassandra/config/connection\n'})}),"\n",(0,t.jsx)(n.h2,{id:"statements",children:"Statements"}),"\n",(0,t.jsxs)(n.p,{children:["Statements are configured during role creation and are used by the plugin to\ndetermine what is sent to the database on user creation, renewing, and\nrevocation. For more information on configuring roles see the ",(0,t.jsx)(n.a,{href:"/api-docs/secret/databases#create-role",children:"Role\nAPI"})," in the database secrets engine docs."]}),"\n",(0,t.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsx)(n.p,{children:"The following are the statements used by this plugin. If not mentioned in this\nlist the plugin does not support that statement type."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"creation_statements"})," ",(0,t.jsx)(n.code,{children:"(list: [])"})," \u2013 Specifies the database\nstatements executed to create and configure a user. Must be a\nsemicolon-separated string, a base64-encoded semicolon-separated string, a\nserialized JSON string array, or a base64-encoded serialized JSON string\narray. The ",(0,t.jsx)(n.code,{children:"{{username}}"})," and ",(0,t.jsx)(n.code,{children:"{{password}}"})," values will be substituted. If not\nprovided, defaults to a generic create user statements that creates a\nnon-superuser."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"revocation_statements"})," ",(0,t.jsx)(n.code,{children:"(list: [])"})," \u2013 Specifies the database statements to\nbe executed to revoke a user. Must be a semicolon-separated string, a\nbase64-encoded semicolon-separated string, a serialized JSON string array, or\na base64-encoded serialized JSON string array. The ",(0,t.jsx)(n.code,{children:"{{username}}"})," value will be\nsubstituted. If not provided defaults to a generic drop user statement."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"rollback_statements"})," ",(0,t.jsx)(n.code,{children:"(list: [])"})," \u2013 Specifies the database statements to be\nexecuted to rollback a create operation in the event of an error. Must be a\nsemicolon-separated string, a base64-encoded semicolon-separated string, a\nserialized JSON string array, or a base64-encoded serialized JSON string\narray. The ",(0,t.jsx)(n.code,{children:"{{username}}"})," value will be substituted. If not provided, defaults to\na generic drop user statement"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"root_rotation_statements"})," ",(0,t.jsx)(n.code,{children:"(list: [])"})," - Specifies the database statements\nto be executed when rotating the root user's password. Must be a\nsemicolon-separated string, a base64-encoded semicolon-separated string, a\nserialized JSON string array, or a base64-encoded serialized JSON string\narray. The ",(0,t.jsx)(n.code,{children:"{{username}}"})," value will be substituted. If not provided, defaults to\na reasonable default alter user statement."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>c});var t=s(96540);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);