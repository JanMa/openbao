"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1084],{41858:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var t=n(74848),i=n(28453);const a={sidebar_label:"Redis",description:"The Redis plugin for OpenBao's database secrets engine generates [ACL credentials](https://redis.io/docs/manual/security/acl/) to access Redis servers."},r="Redis database plugin HTTP API",d={id:"secret/databases/redis",title:"Redis database plugin HTTP API",description:"The Redis plugin for OpenBao's database secrets engine generates [ACL credentials](https://redis.io/docs/manual/security/acl/) to access Redis servers.",source:"@site/content/api-docs/secret/databases/redis.mdx",sourceDirName:"secret/databases",slug:"/secret/databases/redis",permalink:"/openbao/api-docs/secret/databases/redis",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/api-docs/secret/databases/redis.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Redis",description:"The Redis plugin for OpenBao's database secrets engine generates [ACL credentials](https://redis.io/docs/manual/security/acl/) to access Redis servers."},sidebar:"api",previous:{title:"PostgreSQL",permalink:"/openbao/api-docs/secret/databases/postgresql"},next:{title:"Overview",permalink:"/openbao/api-docs/secret/identity/"}},o={},c=[{value:"Configure connection",id:"configure-connection",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Sample payload",id:"sample-payload",level:3},{value:"Sample request",id:"sample-request",level:3},{value:"Statements",id:"statements",level:2},{value:"Parameters",id:"parameters-1",level:3}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"redis-database-plugin-http-api",children:"Redis database plugin HTTP API"}),"\n",(0,t.jsx)(s.p,{children:"The Redis database plugin is one of the supported plugins for the database\nsecrets engine. This plugin generates database credentials dynamically based on\nconfigured roles for the Redis database."}),"\n",(0,t.jsx)(s.h2,{id:"configure-connection",children:"Configure connection"}),"\n",(0,t.jsxs)(s.p,{children:["In addition to the parameters defined by the ",(0,t.jsx)(s.a,{href:"/api-docs/secret/databases#configure-connection",children:"Database\nSecrets Engine"}),", this plugin\nhas a number of parameters to further configure a connection."]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Method"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"POST"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"/database/config/:name"})})]})})]}),"\n",(0,t.jsx)(s.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"host"})," ",(0,t.jsx)(s.code,{children:"(string: <required>)"})," \u2013 Specifies the host to connect to."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"port"})," ",(0,t.jsx)(s.code,{children:"(int: <required>)"})," \u2013 Specifies the port number of the connection."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"username"})," ",(0,t.jsx)(s.code,{children:"(string: <required>)"})," \u2013 Specifies the username for OpenBao to use."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"password"})," ",(0,t.jsx)(s.code,{children:"(string: <required>)"})," \u2013 Specifies the password corresponding to the given username."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"tls"})," ",(0,t.jsx)(s.code,{children:"(bool: false)"})," \u2013 Specifies whether to use TLS when connecting to Redis."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"insecure_tls"})," ",(0,t.jsx)(s.code,{children:"(bool: false)"})," \u2013 Specifies whether to skip verification of the\nserver certificate when using TLS."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"sample-payload",children:"Sample payload"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "plugin_name": "redis-database-plugin",\n  "host": "localhost://127.0.0.1",\n  "username": "user",\n  "password": "pass",\n  "allowed-roles": "my-*-role"\n}\n'})}),"\n",(0,t.jsx)(s.h3,{id:"sample-request",children:"Sample request"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/database/config/redis\n'})}),"\n",(0,t.jsx)(s.h2,{id:"statements",children:"Statements"}),"\n",(0,t.jsxs)(s.p,{children:["Statements are configured during role creation and are used by the plugin to\ndetermine what is sent to the database on user creation, renewing, and\nrevocation. For more information on configuring roles see the ",(0,t.jsx)(s.a,{href:"/api-docs/secret/databases#create-role",children:"Role\nAPI"})," in the database secrets engine docs."]}),"\n",(0,t.jsx)(s.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsx)(s.p,{children:"The following are the statements used by this plugin. If not mentioned in this\nlist the plugin does not support that statement type."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"creation_statements"})," ",(0,t.jsx)(s.code,{children:"(list: [])"})," \u2013 Specifies a JSON string containing\n",(0,t.jsx)(s.a,{href:"https://redis.io/commands/acl-cat",children:"Redis ACL rules"})," to assign to created users. If not provided, defaults to\na read-only user that can read any key."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>d});var t=n(96540);const i={},a=t.createContext(i);function r(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);