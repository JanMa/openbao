"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6810],{13672:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var r=s(74848),t=s(28453);const a={layout:"api",page_title:"MySQL/MariaDB - Database - Secrets Engines - HTTP API",description:"The MySQL/MariaDB plugin for OpenBao's database secrets engine generates database credentials to access MySQL and MariaDB servers."},i="MySQL/MariaDB database plugin HTTP API",d={id:"secret/databases/mysql-maria",title:"MySQL/MariaDB database plugin HTTP API",description:"The MySQL/MariaDB plugin for OpenBao's database secrets engine generates database credentials to access MySQL and MariaDB servers.",source:"@site/content/api-docs/secret/databases/mysql-maria.mdx",sourceDirName:"secret/databases",slug:"/secret/databases/mysql-maria",permalink:"/openbao/api-docs/secret/databases/mysql-maria",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/api-docs/secret/databases/mysql-maria.mdx",tags:[],version:"current",frontMatter:{layout:"api",page_title:"MySQL/MariaDB - Database - Secrets Engines - HTTP API",description:"The MySQL/MariaDB plugin for OpenBao's database secrets engine generates database credentials to access MySQL and MariaDB servers."},sidebar:"apiSidebar",previous:{title:"Influxdb database plugin HTTP API",permalink:"/openbao/api-docs/secret/databases/influxdb"},next:{title:"PostgreSQL database plugin HTTP API",permalink:"/openbao/api-docs/secret/databases/postgresql"}},c={},l=[{value:"Configure connection",id:"configure-connection",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Sample payload",id:"sample-payload",level:3},{value:"Sample request",id:"sample-request",level:3},{value:"Statements",id:"statements",level:2},{value:"Parameters",id:"parameters-1",level:3}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"mysqlmariadb-database-plugin-http-api",children:"MySQL/MariaDB database plugin HTTP API"}),"\n",(0,r.jsxs)(n.p,{children:["~> ",(0,r.jsx)(n.strong,{children:"Note"}),": This engine can use external X.509 certificates as part of TLS or signature validation.\nVerifying signatures against X.509 certificates that use SHA-1 is deprecated and is no longer\nusable without a workaround. See the\n",(0,r.jsx)(n.a,{href:"/docs/deprecation/faq#q-what-is-the-impact-of-removing-support-for-x-509-certificates-with-signatures-that-use-sha-1",children:"deprecation FAQ"}),"\nfor more information."]}),"\n",(0,r.jsx)(n.p,{children:"The MySQL database plugin is one of the supported plugins for the database\nsecrets engine. This plugin generates database credentials dynamically based on\nconfigured roles for the MySQL database."}),"\n",(0,r.jsx)(n.h2,{id:"configure-connection",children:"Configure connection"}),"\n",(0,r.jsxs)(n.p,{children:["In addition to the parameters defined by the ",(0,r.jsx)(n.a,{href:"/api-docs/secret/databases#configure-connection",children:"Database\nBackend"}),", this plugin\nhas a number of parameters to further configure a connection."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"POST"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"/database/config/:name"})})]})})]}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"connection_url"})," ",(0,r.jsx)(n.code,{children:"(string: <required>)"})," - Specifies the MySQL DSN. This field\ncan be templated and supports passing the username and password\nparameters in the following format ",(0,r.jsx)(n.code,{children:"{{field_name}}"}),". A templated connection URL is\nrequired when using root credential rotation."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"max_open_connections"})," ",(0,r.jsx)(n.code,{children:"(int: 4)"})," - Specifies the maximum number of open\nconnections to the database."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"max_idle_connections"})," ",(0,r.jsx)(n.code,{children:"(int: 0)"})," - Specifies the maximum number of idle\nconnections to the database. A zero uses the value of ",(0,r.jsx)(n.code,{children:"max_open_connections"}),"\nand a negative value disables idle connections. If larger than\n",(0,r.jsx)(n.code,{children:"max_open_connections"})," it will be reduced to be equal."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"max_connection_lifetime"})," ",(0,r.jsx)(n.code,{children:'(string: "0s")'})," - Specifies the maximum amount of\ntime a connection may be reused. If \u2264 0s connections are reused forever."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"username"})," ",(0,r.jsx)(n.code,{children:'(string: "")'})," - The root credential username used in the connection URL."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"password"})," ",(0,r.jsx)(n.code,{children:'(string: "")'})," - The root credential password used in the connection URL."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"tls_certificate_key"})," ",(0,r.jsx)(n.code,{children:'(string: "")'})," - x509 certificate for connecting to the database.\nThis must be a PEM encoded version of the private key and the certificate combined."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"tls_ca"})," ",(0,r.jsx)(n.code,{children:'(string: "")'})," - x509 CA file for validating the certificate presented by the\nMySQL server. Must be PEM encoded."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"tls_server_name"})," ",(0,r.jsx)(n.code,{children:'(string: "")'})," - Specifies the subject alternative name should be present in the\nserver's certificate."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"tls_skip_verify"})," ",(0,r.jsx)(n.code,{children:"(boolean: false)"})," - When set to true, disables the server certificate verification.\nSetting this to true is not recommended for production."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"username_template"})," ",(0,r.jsx)(n.code,{children:"(string)"})," - ",(0,r.jsx)(n.a,{href:"/docs/concepts/username-templating",children:"Template"})," describing how\ndynamic usernames are generated."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"disable_escaping"})," ",(0,r.jsx)(n.code,{children:"(boolean: false)"})," - Turns off the escaping of special characters inside of the username\nand password fields. See the ",(0,r.jsx)(n.a,{href:"/docs/secrets/databases#disable-character-escaping",children:"databases secrets engine docs"}),"\nfor more information. Defaults to ",(0,r.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Default Username Templates:"})}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("b",{children:(0,r.jsx)("code",{children:"mysql-database-plugin"})})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{{ printf "v-%s-%s-%s-%s" (.DisplayName | truncate 10) (.RoleName | truncate 10) (random 20) (unix_time) | truncate 32 }}\n'})}),(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("b",{children:"Example Usernames:"})}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Example"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"DisplayName"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"token"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"RoleName"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"myrolename"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Username"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"v-token-myrolename-jNFRlKsZZMxJE"})})]})]})]}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Example"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"DisplayName"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"amuchlonger_dispname"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"RoleName"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"role-name-with-dashes"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Username"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"v-amuchlonge-role-name--LUHU9xqm"})})]})]})]})]})]}),"\n",(0,r.jsx)("p",{}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("code",{children:"mysql-aurora-database-plugin"}),", ",(0,r.jsx)("code",{children:"mysql-rds-database-plugin"}),", ",(0,r.jsx)("code",{children:"mysql-legacy-database-plugin"})]})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{{ printf "v-%s-%s-%s" (.RoleName | truncate 4) (random 20) | truncate 16 }}\n'})}),(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("b",{children:"Example Usernames:"})}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Example"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"DisplayName"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"token"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"RoleName"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"myrolename"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Username"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"v-myro-jNFRlKsZZ"})})]})]})]}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Example"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"DisplayName"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"amuchlonger_dispname"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"RoleName"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"role-name-with-dashes"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Username"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"v-role-b9ODeKsfl"})})]})]})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"sample-payload",children:"Sample payload"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "plugin_name": "mysql-database-plugin",\n  "allowed_roles": "readonly",\n  "connection_url": "{{username}}:{{password}}@tcp(127.0.0.1:3306)/",\n  "max_open_connections": 5,\n  "max_connection_lifetime": "5s",\n  "username": "root",\n  "password": "mysql"\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"sample-request",children:"Sample request"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/database/config/mysql\n'})}),"\n",(0,r.jsx)(n.h2,{id:"statements",children:"Statements"}),"\n",(0,r.jsxs)(n.p,{children:["Statements are configured during role creation and are used by the plugin to\ndetermine what is sent to the database on user creation, renewing, and\nrevocation. For more information on configuring roles see the ",(0,r.jsx)(n.a,{href:"/api-docs/secret/databases#create-role",children:"Role\nAPI"})," in the database secrets engine docs."]}),"\n",(0,r.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsx)(n.p,{children:"The following are the statements used by this plugin. If not mentioned in this\nlist the plugin does not support that statement type."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"creation_statements"})," ",(0,r.jsx)(n.code,{children:"(list: <required>)"})," \u2013 Specifies the database\nstatements executed to create and configure a user. Must be a\nsemicolon-separated string, a base64-encoded semicolon-separated string, a\nserialized JSON string array, or a base64-encoded serialized JSON string\narray. The ",(0,r.jsx)(n.code,{children:"{{name}}"})," and ",(0,r.jsx)(n.code,{children:"{{password}}"})," values will be substituted. The\ngenerated password will be a random alphanumeric 20 character string."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"revocation_statements"})," ",(0,r.jsx)(n.code,{children:"(list: [])"})," \u2013 Specifies the database statements to\nbe executed to revoke a user. Must be a semicolon-separated string, a\nbase64-encoded semicolon-separated string, a serialized JSON string array, or\na base64-encoded serialized JSON string array. The ",(0,r.jsx)(n.code,{children:"{{name}}"})," value will be\nsubstituted. If not provided defaults to a generic drop user statement."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>d});var r=s(96540);const t={},a=r.createContext(t);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);