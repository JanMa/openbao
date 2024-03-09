"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8133],{73971:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=n(74848),t=n(28453);const r={sidebar_label:"PostgreSQL",description:"PostgreSQL is one of the supported plugins for the database secrets engine.\nThis plugin generates database credentials dynamically based on configured\nroles for the PostgreSQL database."},i="PostgreSQL database secrets engine",o={id:"secrets/databases/postgresql",title:"PostgreSQL database secrets engine",description:"PostgreSQL is one of the supported plugins for the database secrets engine.\nThis plugin generates database credentials dynamically based on configured\nroles for the PostgreSQL database.",source:"@site/content/docs/secrets/databases/postgresql.mdx",sourceDirName:"secrets/databases",slug:"/secrets/databases/postgresql",permalink:"/openbao/docs/secrets/databases/postgresql",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/secrets/databases/postgresql.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"PostgreSQL",description:"PostgreSQL is one of the supported plugins for the database secrets engine.\nThis plugin generates database credentials dynamically based on configured\nroles for the PostgreSQL database."},sidebar:"docs",previous:{title:"MySQL/MariaDB",permalink:"/openbao/docs/secrets/databases/mysql-maria"},next:{title:"Redis",permalink:"/openbao/docs/secrets/databases/redis"}},d={},l=[{value:"Capabilities",id:"capabilities",level:2},{value:"Setup",id:"setup",level:2},{value:"Usage",id:"usage",level:2},{value:"API",id:"api",level:2}];function c(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"postgresql-database-secrets-engine",children:"PostgreSQL database secrets engine"}),"\n",(0,a.jsxs)(s.p,{children:["PostgreSQL is one of the supported plugins for the database secrets engine. This\nplugin generates database credentials dynamically based on configured roles for\nthe PostgreSQL database, and also supports ",(0,a.jsx)(s.a,{href:"/docs/secrets/databases#static-roles",children:"Static\nRoles"}),"."]}),"\n",(0,a.jsxs)(s.p,{children:["See the ",(0,a.jsx)(s.a,{href:"/docs/secrets/databases",children:"database secrets engine"})," docs for\nmore information about setting up the database secrets engine."]}),"\n",(0,a.jsxs)(s.p,{children:["The PostgreSQL secrets engine uses ",(0,a.jsx)(s.a,{href:"https://pkg.go.dev/github.com/jackc/pgx/stdlib",children:"pgx"}),", the same database library as the\n",(0,a.jsx)(s.a,{href:"/docs/configuration/storage/postgresql",children:"PostgreSQL storage backend"}),". Connection string\noptions, including SSL options, can be found in the ",(0,a.jsx)(s.a,{href:"https://pkg.go.dev/github.com/jackc/pgx/stdlib",children:"pgx"})," and\n",(0,a.jsx)(s.a,{href:"https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING",children:"PostgreSQL connection string"})," documentation."]}),"\n",(0,a.jsx)(s.h2,{id:"capabilities",children:"Capabilities"}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Plugin Name"}),(0,a.jsx)(s.th,{children:"Root Credential Rotation"}),(0,a.jsx)(s.th,{children:"Dynamic Roles"}),(0,a.jsx)(s.th,{children:"Static Roles"}),(0,a.jsx)(s.th,{children:"Username Customization"})]})}),(0,a.jsx)(s.tbody,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"postgresql-database-plugin"})}),(0,a.jsx)(s.td,{children:"Yes"}),(0,a.jsx)(s.td,{children:"Yes"}),(0,a.jsx)(s.td,{children:"Yes"}),(0,a.jsx)(s.td,{children:"Yes (1.7+)"})]})})]}),"\n",(0,a.jsx)(s.h2,{id:"setup",children:"Setup"}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Enable the database secrets engine if it is not already enabled:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-shell-session",children:"$ bao secrets enable database\nSuccess! Enabled the database secrets engine at: database/\n"})}),"\n",(0,a.jsxs)(s.p,{children:["By default, the secrets engine will enable at the name of the engine. To\nenable the secrets engine at a different path, use the ",(0,a.jsx)(s.code,{children:"-path"})," argument."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Configure OpenBao with the proper plugin and connection information:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-shell-session",children:'$ bao write database/config/my-postgresql-database \\\n    plugin_name="postgresql-database-plugin" \\\n    allowed_roles="my-role" \\\n    connection_url="postgresql://{{username}}:{{password}}@localhost:5432/database-name" \\\n    username="openbaouser" \\\n    password="openbaopass" \\\n    password_authentication="scram-sha-256"\n'})}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Configure a role that maps a name in OpenBao to an SQL statement to execute to\ncreate the database credential:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-shell-session",children:'$ bao write database/roles/my-role \\\n    db_name="my-postgresql-database" \\\n    creation_statements="CREATE ROLE \\"{{name}}\\" WITH LOGIN PASSWORD \'{{password}}\' VALID UNTIL \'{{expiration}}\'; \\\n        GRANT SELECT ON ALL TABLES IN SCHEMA public TO \\"{{name}}\\";" \\\n    default_ttl="1h" \\\n    max_ttl="24h"\nSuccess! Data written to: database/roles/my-role\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(s.p,{children:"After the secrets engine is configured and a user/machine has an OpenBao token with\nthe proper permission, it can generate credentials."}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Generate a new credential by reading from the ",(0,a.jsx)(s.code,{children:"/creds"})," endpoint with the name\nof the role:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-shell-session",children:"$ bao read database/creds/my-role\nKey                Value\n---                -----\nlease_id           database/creds/my-role/2f6a614c-4aa2-7b19-24b9-ad944a8d4de6\nlease_duration     1h\nlease_renewable    true\npassword           SsnoaA-8Tv4t34f41baD\nusername           v-openbaouse-my-role-x\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"api",children:"API"}),"\n",(0,a.jsxs)(s.p,{children:["The full list of configurable options can be seen in the ",(0,a.jsx)(s.a,{href:"/api-docs/secret/databases/postgresql",children:"PostgreSQL database\nplugin API"})," page."]}),"\n",(0,a.jsxs)(s.p,{children:["For more information on the database secrets engine's HTTP API please see the\n",(0,a.jsx)(s.a,{href:"/api-docs/secret/databases",children:"Database secrets engine API"})," page."]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>o});var a=n(96540);const t={},r=a.createContext(t);function i(e){const s=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(r.Provider,{value:s},e.children)}}}]);