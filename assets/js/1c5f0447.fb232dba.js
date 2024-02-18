"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7377],{89162:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=t(74848),a=t(28453);const i={sidebar_label:"MySQL/MariaDB",description:"MySQL is one of the supported plugins for the database secrets engine. This\nplugin generates database credentials dynamically based on configured roles\nfor the MySQL database."},r="MySQL/MariaDB database secrets engine",o={id:"secrets/databases/mysql-maria",title:"MySQL/MariaDB database secrets engine",description:"MySQL is one of the supported plugins for the database secrets engine. This\nplugin generates database credentials dynamically based on configured roles\nfor the MySQL database.",source:"@site/content/docs/secrets/databases/mysql-maria.mdx",sourceDirName:"secrets/databases",slug:"/secrets/databases/mysql-maria",permalink:"/openbao/docs/secrets/databases/mysql-maria",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/secrets/databases/mysql-maria.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"MySQL/MariaDB",description:"MySQL is one of the supported plugins for the database secrets engine. This\nplugin generates database credentials dynamically based on configured roles\nfor the MySQL database."},sidebar:"docs",previous:{title:"InfluxDB",permalink:"/openbao/docs/secrets/databases/influxdb"},next:{title:"PostgreSQL",permalink:"/openbao/docs/secrets/databases/postgresql"}},l={},c=[{value:"Capabilities",id:"capabilities",level:2},{value:"Setup",id:"setup",level:2},{value:"Usage",id:"usage",level:2},{value:"Client x509 certificate authentication",id:"client-x509-certificate-authentication",level:2},{value:"Examples",id:"examples",level:2},{value:"Using wildcards in grant statements",id:"using-wildcards-in-grant-statements",level:3},{value:"Rotating root credentials in MySQL 5.6",id:"rotating-root-credentials-in-mysql-56",level:3},{value:"API",id:"api",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"mysqlmariadb-database-secrets-engine",children:"MySQL/MariaDB database secrets engine"}),"\n",(0,s.jsxs)(n.p,{children:["~> ",(0,s.jsx)(n.strong,{children:"Note"}),": This engine can use external X.509 certificates as part of TLS or signature validation.\nVerifying signatures against X.509 certificates that use SHA-1 is deprecated and is no longer\nusable without a workaround. See the\n",(0,s.jsx)(n.a,{href:"/docs/deprecation/faq#q-what-is-the-impact-of-removing-support-for-x-509-certificates-with-signatures-that-use-sha-1",children:"deprecation FAQ"}),"\nfor more information."]}),"\n",(0,s.jsxs)(n.p,{children:["MySQL is one of the supported plugins for the database secrets engine. This\nplugin generates database credentials dynamically based on configured roles for\nthe MySQL database, and also supports ",(0,s.jsx)(n.a,{href:"/docs/secrets/databases#static-roles",children:"Static\nRoles"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"This plugin has a few different instances built into OpenBao, each instance is for\na slightly different MySQL driver. The only difference between these plugins is\nthe length of usernames generated by the plugin as different versions of mysql\naccept different lengths. The available plugins are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"mysql-database-plugin"}),"\n",(0,s.jsx)(n.li,{children:"mysql-aurora-database-plugin"}),"\n",(0,s.jsx)(n.li,{children:"mysql-rds-database-plugin"}),"\n",(0,s.jsx)(n.li,{children:"mysql-legacy-database-plugin"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["See the ",(0,s.jsx)(n.a,{href:"/docs/secrets/databases",children:"database secrets engine"})," docs for\nmore information about setting up the database secrets engine."]}),"\n",(0,s.jsx)(n.h2,{id:"capabilities",children:"Capabilities"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Plugin Name"}),(0,s.jsx)(n.th,{children:"Root Credential Rotation"}),(0,s.jsx)(n.th,{children:"Dynamic Roles"}),(0,s.jsx)(n.th,{children:"Static Roles"}),(0,s.jsx)(n.th,{children:"Username Customization"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["Depends (see: ",(0,s.jsx)(n.a,{href:"#mysql-mariadb-database-secrets-engine",children:"above"}),")"]}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Yes (1.7+)"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Enable the database secrets engine if it is not already enabled:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"$ bao secrets enable database\nSuccess! Enabled the database secrets engine at: database/\n"})}),"\n",(0,s.jsxs)(n.p,{children:["By default, the secrets engine will enable at the name of the engine. To\nenable the secrets engine at a different path, use the ",(0,s.jsx)(n.code,{children:"-path"})," argument."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Configure OpenBao with the proper plugin and connection information:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'$ bao write database/config/my-mysql-database \\\n    plugin_name=mysql-database-plugin \\\n    connection_url="{{username}}:{{password}}@tcp(127.0.0.1:3306)/" \\\n    allowed_roles="my-role" \\\n    username="openbaouser" \\\n    password="openbaopass"\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Configure a role that maps a name in OpenBao to an SQL statement to execute to\ncreate the database credential:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"$ bao write database/roles/my-role \\\n    db_name=my-mysql-database \\\n    creation_statements=\"CREATE USER '{{name}}'@'%' IDENTIFIED BY '{{password}}';GRANT SELECT ON *.* TO '{{name}}'@'%';\" \\\n    default_ttl=\"1h\" \\\n    max_ttl=\"24h\"\nSuccess! Data written to: database/roles/my-role\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.p,{children:"After the secrets engine is configured and a user/machine has an OpenBao token with\nthe proper permission, it can generate credentials."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Generate a new credential by reading from the ",(0,s.jsx)(n.code,{children:"/creds"})," endpoint with the name\nof the role:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"$ bao read database/creds/my-role\nKey                Value\n---                -----\nlease_id           database/creds/my-role/2f6a614c-4aa2-7b19-24b9-ad944a8d4de6\nlease_duration     1h\nlease_renewable    true\npassword           yY-57n3X5UQhxnmFRP3f\nusername           v_openbaouser_my-role_crBWVqVh2Hc1\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"client-x509-certificate-authentication",children:"Client x509 certificate authentication"}),"\n",(0,s.jsxs)(n.p,{children:["This plugin supports using MySQL's ",(0,s.jsx)(n.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/using-encrypted-connections.html#using-encrypted-connections-client-side-configuration",children:"x509 Client-side Certificate Authentication"})]}),"\n",(0,s.jsx)(n.p,{children:"To use this authentication mechanism, configure the plugin:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:'$ bao write database/config/my-mysql-database \\\n    plugin_name=mysql-database-plugin \\\n    allowed_roles="my-role" \\\n    connection_url="user:password@tcp(localhost:3306)/test" \\\n    tls_certificate_key=@/path/to/client.pem \\\n    tls_ca=@/path/to/client.ca\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Note: ",(0,s.jsx)(n.code,{children:"tls_certificate_key"})," and ",(0,s.jsx)(n.code,{children:"tls_ca"})," map to ",(0,s.jsx)(n.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/connection-options.html#option_general_ssl-cert",children:(0,s.jsx)(n.code,{children:"ssl-cert (combined with ssl-key)"})}),"\nand ",(0,s.jsx)(n.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/connection-options.html#option_general_ssl-ca",children:(0,s.jsx)(n.code,{children:"ssl-ca"})})," configuration options\nfrom MySQL with the exception that the OpenBao parameters are the contents of those files, not filenames. As such,\nthe two options are independent of each other. See the ",(0,s.jsx)(n.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/connection-options.html",children:"MySQL Connection Options"}),"\nfor more information."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.h3,{id:"using-wildcards-in-grant-statements",children:"Using wildcards in grant statements"}),"\n",(0,s.jsxs)(n.p,{children:["MySQL supports using wildcards in grant statements. These are sometimes needed\nby applications which expect access to a large number of databases inside MySQL.\nThis can be realized by using a wildcard in the grant statement. For example if\nyou want the user created by OpenBao to have access to all databases starting with\n",(0,s.jsx)(n.code,{children:"fooapp_"})," you could use the following creation statement:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"CREATE USER '{{name}}'@'%' IDENTIFIED BY '{{password}}'; GRANT SELECT ON `fooapp\\_%`.* TO '{{name}}'@'%';\n"})}),"\n",(0,s.jsx)(n.p,{children:"MySQL expects the part in which the wildcards are to be placed inside backticks.\nIf you want to add this creation statement to OpenBao via the OpenBao CLI you cannot\nsimply paste the above statement on the CLI because the shell will interpret the\ntext between the backticks as something that must be executed. The easiest way to\nget around this is to encode the creation statement as Base64 and feed this to OpenBao.\nFor example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:'$ bao write database/roles/my-role \\\n    db_name=mysql \\\n    creation_statements="Q1JFQVRFIFVTRVIgJ3t7bmFtZX19J0AnJScgSURFTlRJRklFRCBCWSAne3twYXNzd29yZH19JzsgR1JBTlQgU0VMRUNUIE9OIGBmb29hcHBcXyVgLiogVE8gJ3t7bmFtZX19J0AnJSc7" \\\n    default_ttl="1h" \\\n    max_ttl="24h"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"rotating-root-credentials-in-mysql-56",children:"Rotating root credentials in MySQL 5.6"}),"\n",(0,s.jsxs)(n.p,{children:["The default root rotation setup for MySQL uses the ",(0,s.jsx)(n.code,{children:"ALTER USER"})," syntax present\nin MySQL 5.7 and up. For MySQL 5.6, the ",(0,s.jsx)(n.a,{href:"/api-docs/secret/databases#root_rotation_statements",children:"root rotation\nstatements"}),"\nmust be configured to use the old ",(0,s.jsx)(n.code,{children:"SET PASSWORD"})," syntax. For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:'$ bao write database/config/my-mysql-database \\\n    plugin_name=mysql-database-plugin \\\n    connection_url="{{username}}:{{password}}@tcp(127.0.0.1:3306)/" \\\n    root_rotation_statements="SET PASSWORD = PASSWORD(\'{{password}}\')" \\\n    allowed_roles="my-role" \\\n    username="root" \\\n    password="mysql"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["For a guide in root credential rotation, see ",(0,s.jsx)(n.a,{href:"/tutorials/db-credentials/database-root-rotation",children:"Database Root Credential\nRotation"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,s.jsxs)(n.p,{children:["The full list of configurable options can be seen in the ",(0,s.jsx)(n.a,{href:"/api-docs/secret/databases/mysql-maria",children:"MySQL database plugin\nAPI"})," page."]}),"\n",(0,s.jsxs)(n.p,{children:["For more information on the database secrets engine's HTTP API please see the\n",(0,s.jsx)(n.a,{href:"/api-docs/secret/databases",children:"Database secrets engine API"})," page."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(96540);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);