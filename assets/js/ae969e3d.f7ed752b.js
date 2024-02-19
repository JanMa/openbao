"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1447],{81497:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var n=a(74848),t=a(28453);const r={sidebar_label:"Overview",description:"The database secrets engine generates database credentials dynamically based\non configured roles. It works with a number of different databases through a\nplugin interface. There are a number of built-in database types and an exposed\nframework for running custom database types for extendability."},i="Databases",d={id:"secrets/databases/index",title:"Databases",description:"The database secrets engine generates database credentials dynamically based\non configured roles. It works with a number of different databases through a\nplugin interface. There are a number of built-in database types and an exposed\nframework for running custom database types for extendability.",source:"@site/content/docs/secrets/databases/index.mdx",sourceDirName:"secrets/databases",slug:"/secrets/databases/",permalink:"/openbao/docs/secrets/databases/",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/secrets/databases/index.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Overview",description:"The database secrets engine generates database credentials dynamically based\non configured roles. It works with a number of different databases through a\nplugin interface. There are a number of built-in database types and an exposed\nframework for running custom database types for extendability."},sidebar:"docs",previous:{title:"Cubbyhole",permalink:"/openbao/docs/secrets/cubbyhole"},next:{title:"Cassandra",permalink:"/openbao/docs/secrets/databases/cassandra"}},o={},c=[{value:"Static roles",id:"static-roles",level:3},{value:"Setup",id:"setup",level:2},{value:"Usage",id:"usage",level:2},{value:"Database capabilities",id:"database-capabilities",level:2},{value:"Custom plugins",id:"custom-plugins",level:2},{value:"Credential types",id:"credential-types",level:2},{value:"Password generation",id:"password-generation",level:2},{value:"Disable character escaping",id:"disable-character-escaping",level:2},{value:"Tutorial",id:"tutorial",level:2},{value:"API",id:"api",level:2}];function l(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"databases",children:"Databases"}),"\n",(0,n.jsxs)(s.p,{children:["The database secrets engine generates database credentials dynamically based on\nconfigured roles. It works with a number of different databases through a plugin\ninterface. There are a number of built-in database types, and an exposed framework\nfor running custom database types for extendability. This means that services\nthat need to access a database no longer need to hardcode credentials: they can\nrequest them from OpenBao, and use OpenBao's ",(0,n.jsx)(s.a,{href:"/docs/concepts/lease",children:"leasing mechanism"}),'\nto more easily roll keys. These are referred to as "dynamic roles" or "dynamic\nsecrets".']}),"\n",(0,n.jsx)(s.p,{children:"Since every service is accessing the database with unique credentials, it makes\nauditing much easier when questionable data access is discovered. You can track\nit down to the specific instance of a service based on the SQL username."}),"\n",(0,n.jsx)(s.p,{children:"OpenBao makes use of its own internal revocation system to ensure that users\nbecome invalid within a reasonable time of the lease expiring."}),"\n",(0,n.jsx)(s.h3,{id:"static-roles",children:"Static roles"}),"\n",(0,n.jsxs)(s.p,{children:["With dynamic secrets, OpenBao generates a unique username and password pair for\neach unique credential request. OpenBao also supports ",(0,n.jsx)(s.strong,{children:"static roles"})," for\nsome database secrets engines. Static roles are a 1-to-1 mapping of OpenBao roles\nto usernames in a database. With static roles, OpenBao stores, and automatically\nrotates, passwords for the associated database user based on a configurable\nperiod of time."]}),"\n",(0,n.jsx)(s.p,{children:"When a client requests credentials for the static role, OpenBao\nreturns the current password for whichever database user is mapped to the\nrequested role. With static roles, anyone with the proper OpenBao policies can\naccess the associated user account in the database."}),"\n",(0,n.jsxs)(s.admonition,{title:"Do not use static roles for root database credentials",type:"warning",children:[(0,n.jsxs)(s.p,{children:["Do not manage the same root database credentials that you provide to OpenBao in\n",(0,n.jsx)("tt",{children:"config/"})," with static roles."]}),(0,n.jsxs)(s.p,{children:["OpenBao does not distinguish between standard credentials and root credentials\nwhen rotating passwords. If you assign your root credentials to a static\nrole, any dynamic or static users managed by that database configuration will\nfail after rotation because the password for ",(0,n.jsx)("tt",{children:"config/"})," is no longer\nvalid."]}),(0,n.jsxs)(s.p,{children:["If you need to rotate root credentials, use the\n",(0,n.jsx)(s.a,{href:"/api-docs/secret/databases/#rotate-root-credentials",children:"Rotate root credentials"}),"\nAPI endpoint."]})]}),"\n",(0,n.jsxs)(s.p,{children:["Consult the ",(0,n.jsx)(s.a,{href:"#db-capabilities-table",children:"database capabilities table"})," to determine\nif your chosen database backend supports static roles."]}),"\n",(0,n.jsx)(s.h2,{id:"setup",children:"Setup"}),"\n",(0,n.jsx)(s.p,{children:"Most secrets engines must be configured in advance before they can perform their\nfunctions. These steps are usually completed by an operator or configuration\nmanagement tool."}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Enable the database secrets engine:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell-session",children:"$ bao secrets enable database\nSuccess! Enabled the database secrets engine at: database/\n"})}),"\n",(0,n.jsxs)(s.p,{children:["By default, the secrets engine will enable at the name of the engine. To\nenable the secrets engine at a different path, use the ",(0,n.jsx)(s.code,{children:"-path"})," argument."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Configure OpenBao with the proper plugin and connection information:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell-session",children:'$ bao write database/config/my-database \\\n    plugin_name="..." \\\n    connection_url="..." \\\n    allowed_roles="..." \\\n    username="..." \\\n    password="..." \\\n'})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"warning",children:(0,n.jsx)(s.p,{children:'It is highly recommended a user within the database is created\nspecifically for OpenBao to use. This user will be used to manipulate\ndynamic and static users within the database. This user is called the\n"root" user within the documentation.'})}),"\n",(0,n.jsx)(s.p,{children:"OpenBao will use the user specified here to create/update/revoke database\ncredentials. That user must have the appropriate permissions to perform\nactions upon other database users (create, update credentials, delete, etc.)."}),"\n",(0,n.jsx)(s.p,{children:"This secrets engine can configure multiple database connections. For details\non the specific configuration options, please see the database-specific\ndocumentation."}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"After configuring the root user, it is highly recommended you rotate that user's\npassword such that the openbao user is not accessible by any users other than\nOpenBao itself:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell-session",children:"$ bao write -force database/rotate-root/my-database\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"danger",children:(0,n.jsx)(s.p,{children:"When this is done, the password for the user specified in the previous step\nis no longer accessible. Because of this, it is highly recommended that a\nuser is created specifically for OpenBao to use to manage database\nusers."})}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Configure a role that maps a name in OpenBao to a set of creation statements to\ncreate the database credential:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell-session",children:'$ bao write database/roles/my-role \\\n    db_name=my-database \\\n    creation_statements="..." \\\n    default_ttl="1h" \\\n    max_ttl="24h"\nSuccess! Data written to: database/roles/my-role\n'})}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"{{username}}"})," and ",(0,n.jsx)(s.code,{children:"{{password}}"})," fields will be populated by the plugin\nwith dynamically generated values. In some plugins the ",(0,n.jsx)(s.code,{children:"{{expiration}}"})," field is also supported."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(s.p,{children:"After the secrets engine is configured and a user/machine has an OpenBao token with\nthe proper permission, it can generate credentials."}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Generate a new credential by reading from the ",(0,n.jsx)(s.code,{children:"/creds"})," endpoint with the name\nof the role:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell-session",children:"$ bao read database/creds/my-role\nKey                Value\n---                -----\nlease_id           database/creds/my-role/2f6a614c-4aa2-7b19-24b9-ad944a8d4de6\nlease_duration     1h\nlease_renewable    true\npassword           FSREZ1S0kFsZtLat-y94\nusername           v-openbaouser-e2978cd0-ugp7iqI2hdlff5hfjylJ-1602537260\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"database-capabilities",children:"Database capabilities"}),"\n",(0,n.jsx)(s.p,{children:"All databases support dynamic roles and static roles. All plugins support rotating\nthe root user's credentials."}),"\n",(0,n.jsx)("a",{id:"db-capabilities-table"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Database"}),(0,n.jsx)(s.th,{children:"Root Credential Rotation"}),(0,n.jsx)(s.th,{children:"Dynamic Roles"}),(0,n.jsx)(s.th,{children:"Static Roles"}),(0,n.jsx)(s.th,{children:"Username Customization"}),(0,n.jsx)(s.th,{children:"Credential Types"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/docs/secrets/databases/cassandra",children:"Cassandra"})}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"password"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/docs/secrets/databases/influxdb",children:"InfluxDB"})}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"password"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/docs/secrets/databases/mysql-maria",children:"MySQL/MariaDB"})}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"password"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/docs/secrets/databases/postgresql",children:"PostgreSQL"})}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"password"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/docs/secrets/databases/redis",children:"Redis"})}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"password"})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"custom-plugins",children:"Custom plugins"}),"\n",(0,n.jsxs)(s.p,{children:["This secrets engine allows custom database types to be run through the exposed\nplugin interface. Please see the ",(0,n.jsx)(s.a,{href:"/docs/secrets/databases/custom",children:"custom database plugin"}),"\nfor more information."]}),"\n",(0,n.jsx)(s.h2,{id:"credential-types",children:"Credential types"}),"\n",(0,n.jsxs)(s.p,{children:["Database systems support a variety of authentication methods and credential types.\nThe database secrets engine supports management of credentials alternative to usernames\nand passwords. The ",(0,n.jsx)(s.a,{href:"/api-docs/secret/databases#credential_type",children:"credential_type"}),"\nand ",(0,n.jsx)(s.a,{href:"/api-docs/secret/databases#credential_config",children:"credential_config"})," parameters\nof dynamic and static roles configure the credential that OpenBao will generate and\nmake available to database plugins. See the documentation of individual database\nplugins for the credential types they support and usage examples."]}),"\n",(0,n.jsx)(s.h2,{id:"password-generation",children:"Password generation"}),"\n",(0,n.jsxs)(s.p,{children:["Passwords are generated via ",(0,n.jsx)(s.a,{href:"/docs/concepts/password-policies",children:"Password Policies"}),".\nDatabases can optionally set a password policy for use across all roles or at the\nindividual role level for that database. For example, each time you call\n",(0,n.jsx)(s.code,{children:"openbao write database/config/my-database"})," you can specify a password policy for all\nroles using ",(0,n.jsx)(s.code,{children:"my-database"}),". Each database has a default password policy defined as:\n20 characters with at least 1 uppercase character, at least 1 lowercase character,\nat least 1 number, and at least 1 dash character."]}),"\n",(0,n.jsx)(s.p,{children:"The default password generation can be represented as the following password policy:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-hcl",children:'length = 20\n\nrule "charset" {\n\tcharset = "abcdefghijklmnopqrstuvwxyz"\n\tmin-chars = 1\n}\nrule "charset" {\n\tcharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"\n\tmin-chars = 1\n}\nrule "charset" {\n\tcharset = "0123456789"\n\tmin-chars = 1\n}\nrule "charset" {\n\tcharset = "-"\n\tmin-chars = 1\n}\n'})}),"\n",(0,n.jsx)(s.h2,{id:"disable-character-escaping",children:"Disable character escaping"}),"\n",(0,n.jsxs)(s.p,{children:["You can specify the option ",(0,n.jsx)(s.code,{children:"disable_escaping"})," with a value of ",(0,n.jsx)(s.code,{children:"true "})," in some\nsecrets engines to prevent OpenBao from escaping special characters in the\nusername and password fields. This is necessary for some alternate connection\nstring formats. See the ",(0,n.jsx)(s.a,{href:"/api-docs/secret/databases#common-fields",children:"databases secrets engine API\ndocs"})," and reference individual\nplugin documentation to determine support for this parameter."]}),"\n",(0,n.jsxs)(s.p,{children:["For example, when the password contains URL-escaped characters like ",(0,n.jsx)(s.code,{children:"#"})," or ",(0,n.jsx)(s.code,{children:"%"})," they will\nremain as so instead of becoming ",(0,n.jsx)(s.code,{children:"%23"})," and ",(0,n.jsx)(s.code,{children:"%25"})," respectively."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell-session",children:'$ bao write database/config/my-mysql-database \\\nplugin_name="mysql-database-plugin" \\\nconnection_url=\'server=localhost;port=3306;user id={{username}};password={{password}};database=mydb;\' \\\nusername="root" \\\npassword=\'your#StrongPassword%\' \\\ndisable_escaping="true"\n'})}),"\n",(0,n.jsx)(s.h2,{id:"tutorial",children:"Tutorial"}),"\n",(0,n.jsx)(s.p,{children:"Refer to the following step-by-step tutorials for more information:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/tutorials/db-credentials/database-secrets",children:"Secrets as a Service: Dynamic Secrets"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/tutorials/db-credentials/database-root-rotation",children:"Database Root Credential Rotation"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/tutorials/db-credentials/database-creds-rotation",children:"Database Static Roles and Credential Rotation"})}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"api",children:"API"}),"\n",(0,n.jsxs)(s.p,{children:["The database secrets engine has a full HTTP API. Please see the ",(0,n.jsx)(s.a,{href:"/api-docs/secret/databases",children:"Database secret\nsecrets engine API"})," for more details."]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,s,a)=>{a.d(s,{R:()=>i,x:()=>d});var n=a(96540);const t={},r=n.createContext(t);function i(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);