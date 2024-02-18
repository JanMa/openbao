"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4833],{66067:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var a=s(74848),t=s(28453);const i={sidebar_label:"InfluxDB",description:"InfluxDB is one of the supported plugins for the database secrets engine.\nThis plugin generates database credentials dynamically based on configured\nroles for the InfluxDB database."},r="InfluxDB database secrets engine",d={id:"secrets/databases/influxdb",title:"InfluxDB database secrets engine",description:"InfluxDB is one of the supported plugins for the database secrets engine.\nThis plugin generates database credentials dynamically based on configured\nroles for the InfluxDB database.",source:"@site/content/docs/secrets/databases/influxdb.mdx",sourceDirName:"secrets/databases",slug:"/secrets/databases/influxdb",permalink:"/docs/secrets/databases/influxdb",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/secrets/databases/influxdb.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"InfluxDB",description:"InfluxDB is one of the supported plugins for the database secrets engine.\nThis plugin generates database credentials dynamically based on configured\nroles for the InfluxDB database."},sidebar:"docs",previous:{title:"Custom",permalink:"/docs/secrets/databases/custom"},next:{title:"MySQL/MariaDB",permalink:"/docs/secrets/databases/mysql-maria"}},l={},o=[{value:"Capabilities",id:"capabilities",level:2},{value:"Setup",id:"setup",level:2},{value:"Usage",id:"usage",level:2},{value:"API",id:"api",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"influxdb-database-secrets-engine",children:"InfluxDB database secrets engine"}),"\n",(0,a.jsxs)(n.p,{children:["~> ",(0,a.jsx)(n.strong,{children:"Note"}),": This engine can use external X.509 certificates as part of TLS or signature validation.\nVerifying signatures against X.509 certificates that use SHA-1 is deprecated and is no longer\nusable without a workaround. See the\n",(0,a.jsx)(n.a,{href:"/docs/deprecation/faq#q-what-is-the-impact-of-removing-support-for-x-509-certificates-with-signatures-that-use-sha-1",children:"deprecation FAQ"}),"\nfor more information."]}),"\n",(0,a.jsx)(n.p,{children:"InfluxDB is one of the supported plugins for the database secrets engine. This\nplugin generates database credentials dynamically based on configured roles for\nthe InfluxDB database."}),"\n",(0,a.jsxs)(n.p,{children:["See the ",(0,a.jsx)(n.a,{href:"/docs/secrets/databases",children:"database secrets engine"})," docs for\nmore information about setting up the database secrets engine."]}),"\n",(0,a.jsx)(n.h2,{id:"capabilities",children:"Capabilities"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Plugin Name"}),(0,a.jsx)(n.th,{children:"Root Credential Rotation"}),(0,a.jsx)(n.th,{children:"Dynamic Roles"}),(0,a.jsx)(n.th,{children:"Static Roles"}),(0,a.jsx)(n.th,{children:"Username Customization"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"influxdb-database-plugin"})}),(0,a.jsx)(n.td,{children:"Yes"}),(0,a.jsx)(n.td,{children:"Yes"}),(0,a.jsx)(n.td,{children:"Yes (1.6+)"}),(0,a.jsx)(n.td,{children:"Yes (1.8+)"})]})})]}),"\n",(0,a.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Enable the database secrets engine if it is not already enabled:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"$ bao secrets enable database\nSuccess! Enabled the database secrets engine at: database/\n"})}),"\n",(0,a.jsxs)(n.p,{children:["By default, the secrets engine will enable at the name of the engine. To\nenable the secrets engine at a different path, use the ",(0,a.jsx)(n.code,{children:"-path"})," argument."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Configure OpenBao with the proper plugin and connection information:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:'$ bao write database/config/my-influxdb-database \\\n    plugin_name="influxdb-database-plugin" \\\n    host=127.0.0.1 \\\n    username=openbaouser \\\n    password=openbaopass \\\n    allowed_roles=my-role\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Configure a role that maps a name in OpenBao to an SQL statement to execute to\ncreate the database credential:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:'$ bao write database/roles/my-role \\\n    db_name=my-influxdb-database \\\n    creation_statements="CREATE USER \\"{{username}}\\" WITH PASSWORD \'{{password}}\'; \\\n          GRANT ALL ON \\"openbao\\" TO \\"{{username}}\\";" \\\n    default_ttl="1h" \\\n    max_ttl="24h"\nSuccess! Data written to: database/roles/my-role\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.p,{children:"After the secrets engine is configured and a user/machine has an OpenBao token with\nthe proper permission, it can generate credentials."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Generate a new credential by reading from the ",(0,a.jsx)(n.code,{children:"/creds"})," endpoint with the name\nof the role:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"$ bao read database/creds/my-role\nKey                Value\n---                -----\nlease_id           database/creds/my-role/2f6a614c-4aa2-7b19-24b9-ad944a8d4de6\nlease_duration     1h\nlease_renewable    true\npassword           ux-TAAKTSZex6jgXhe67\nusername           v_openbaouser_my_role_7XjvivMy80m7qQughmbk_1602541922\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,a.jsxs)(n.p,{children:["The full list of configurable options can be seen in the ",(0,a.jsx)(n.a,{href:"/api-docs/secret/databases/influxdb",children:"InfluxDB database\nplugin API"})," page."]}),"\n",(0,a.jsxs)(n.p,{children:["For more information on the database secrets engine's HTTP API please see the ",(0,a.jsx)(n.a,{href:"/api-docs/secret/databases",children:"Database secret\nsecrets engine API"})," page."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>d});var a=s(96540);const t={},i=a.createContext(t);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);