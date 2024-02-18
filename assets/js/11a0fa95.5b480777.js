"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2451],{66873:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>o,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var l=s(74848),i=s(28453);const t={description:"The `/sys/plugins/catalog` endpoint is used to manage plugins."},r="/sys/plugins/catalog",d={id:"system/plugins-catalog",title:"/sys/plugins/catalog",description:"The `/sys/plugins/catalog` endpoint is used to manage plugins.",source:"@site/content/api-docs/system/plugins-catalog.mdx",sourceDirName:"system",slug:"/system/plugins-catalog",permalink:"/openbao/api-docs/system/plugins-catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/api-docs/system/plugins-catalog.mdx",tags:[],version:"current",frontMatter:{description:"The `/sys/plugins/catalog` endpoint is used to manage plugins."},sidebar:"api",previous:{title:"/sys/plugins/reload/backend",permalink:"/openbao/api-docs/system/plugins-reload-backend"},next:{title:"/sys/policy",permalink:"/openbao/api-docs/system/policy"}},a={},c=[{value:"LIST plugins",id:"list-plugins",level:2},{value:"Sample request",id:"sample-request",level:3},{value:"Sample response",id:"sample-response",level:3},{value:"LIST plugins",id:"list-plugins-1",level:2},{value:"Sample request",id:"sample-request-1",level:3},{value:"Sample response",id:"sample-response-1",level:3},{value:"Register plugin",id:"register-plugin",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Sample payload",id:"sample-payload",level:3},{value:"Sample request",id:"sample-request-2",level:3},{value:"Read plugin",id:"read-plugin",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Sample request",id:"sample-request-3",level:3},{value:"Sample response",id:"sample-response-2",level:3},{value:"Remove plugin from catalog",id:"remove-plugin-from-catalog",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Sample request",id:"sample-request-4",level:3}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"syspluginscatalog",children:(0,l.jsx)(n.code,{children:"/sys/plugins/catalog"})}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"/sys/plugins/catalog"})," endpoint is used to read, register, update, and\nremove plugins in OpenBao's catalog. Plugins must be registered before use, and\nonce registered backends can use the plugin by querying the catalog."]}),"\n",(0,l.jsx)(n.h2,{id:"list-plugins",children:"LIST plugins"}),"\n",(0,l.jsx)(n.p,{children:"This endpoint lists the plugins in the catalog by type."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"GET"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"/sys/plugins/catalog"})})]})})]}),"\n",(0,l.jsx)(n.h3,{id:"sample-request",children:"Sample request"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    http://127.0.0.1:8200/v1/sys/plugins/catalog\n'})}),"\n",(0,l.jsx)(n.h3,{id:"sample-response",children:"Sample response"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n    "data": {\n        "auth": [\n            "custom-auth-plugin",\n            "ldap"\n        ],\n        "database": [\n            "cassandra-database-plugin",\n            "mysql-database-plugin",\n            "postgresql-database-plugin"\n        ],\n        "detailed": [\n            {\n                "builtin": true,\n                "deprecation_status": "supported",\n                "name": "ldap",\n                "type": "auth",\n                "version": "v1.14.8+builtin.openbao"\n            },\n            ...\n            {\n                "builtin": true,\n                "deprecation_status": "supported",\n                "name": "cassandra-database-plugin",\n                "type": "database",\n                "version": "v1.14.8+builtin.openbao"\n            },\n            ...\n        ],\n        "secret": [\n            "transit"\n        ]\n    }\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"list-plugins-1",children:"LIST plugins"}),"\n",(0,l.jsx)(n.p,{children:"This endpoint lists the plugins in the catalog by type."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"LIST"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"/sys/plugins/catalog/auth"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"LIST"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"/sys/plugins/catalog/database"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"LIST"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"/sys/plugins/catalog/secret"})})]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"sample-request-1",children:"Sample request"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request LIST\n    http://127.0.0.1:8200/v1/sys/plugins/catalog/auth\n'})}),"\n",(0,l.jsx)(n.h3,{id:"sample-response-1",children:"Sample response"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n    "data": {\n        "keys": [\n            "custom-auth-plugin",\n            "ldap"\n        ]\n    }\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"register-plugin",children:"Register plugin"}),"\n",(0,l.jsx)(n.p,{children:"This endpoint registers a new plugin, or updates an existing one with the\nsupplied name."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsxs)(n.strong,{children:[(0,l.jsx)(n.code,{children:"sudo"})," required"]})," \u2013\xa0This endpoint requires ",(0,l.jsx)(n.code,{children:"sudo"})," capability in addition to\nany path-specific capabilities."]}),"\n"]}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"POST"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"/sys/plugins/catalog/:type/:name"})})]})})]}),"\n",(0,l.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"name"})," ",(0,l.jsx)(n.code,{children:"(string: <required>)"})," \u2013\xa0Specifies the name for this plugin. The name\nis what is used to look up plugins in the catalog. This is part of the request\nURL."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"type"})," ",(0,l.jsx)(n.code,{children:"(string: <required>)"}),' \u2013\xa0Specifies the type of this plugin. May be\n"auth", "database", or "secret".']}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"version"})," ",(0,l.jsx)(n.code,{children:'(string: "")'})," - Specifies the semantic version of this plugin."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"sha256"})," ",(0,l.jsx)(n.code,{children:"(string: <required>)"})," \u2013\xa0This is the SHA256 sum of the plugin's\nbinary. Before a plugin is run it's SHA will be checked against this value, if\nthey do not match the plugin can not be run."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"command"})," ",(0,l.jsx)(n.code,{children:"(string: <required>)"})," \u2013\xa0Specifies the command used to execute the\nplugin. This is relative to the plugin directory. e.g. ",(0,l.jsx)(n.code,{children:'"myplugin"'}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"args"})," ",(0,l.jsx)(n.code,{children:"(array: [])"})," \u2013 Specifies the arguments used to execute the plugin. If\nthe arguments are provided here, the ",(0,l.jsx)(n.code,{children:"command"})," parameter should only contain\nthe named program. e.g. ",(0,l.jsx)(n.code,{children:'"--my_flag=1"'}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"env"})," ",(0,l.jsx)(n.code,{children:"(array: [])"}),' \u2013 Specifies the environment variables used during the\nexecution of the plugin. Each entry is of the form "key=value". e.g\n',(0,l.jsx)(n.code,{children:'"FOO=BAR"'}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"sample-payload",children:"Sample payload"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "sha256": "d130b9a0fbfddef9709d8ff92e5e6053ccd246b78632fc03b8548457026961e9",\n  "command": "mysql-database-plugin"\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"sample-request-2",children:"Sample request"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/sys/plugins/catalog/secret/example-plugin\n'})}),"\n",(0,l.jsx)(n.h2,{id:"read-plugin",children:"Read plugin"}),"\n",(0,l.jsx)(n.p,{children:"This endpoint returns the configuration data for the plugin with the given name."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsxs)(n.strong,{children:[(0,l.jsx)(n.code,{children:"sudo"})," required"]})," \u2013\xa0This endpoint requires ",(0,l.jsx)(n.code,{children:"sudo"})," capability in addition to\nany path-specific capabilities."]}),"\n"]}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"GET"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"/sys/plugins/catalog/:type/:name?version=:version"})})]})})]}),"\n",(0,l.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"name"})," ",(0,l.jsx)(n.code,{children:"(string: <required>)"})," \u2013\xa0Specifies the name of the plugin to retrieve.\nThis is part of the request URL."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"type"})," ",(0,l.jsx)(n.code,{children:"(string: <required>)"}),' \u2013\xa0Specifies the type of this plugin. May be\n"auth", "database", or "secret".']}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"version"})," ",(0,l.jsx)(n.code,{children:'(string: "")'})," \u2013\xa0The semantic version of the plugin to read. Required\nif the plugin was registered with a version."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"sample-request-3",children:"Sample request"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request GET \\\n    http://127.0.0.1:8200/v1/sys/plugins/catalog/secret/example-plugin?version=v1.0.0\n'})}),"\n",(0,l.jsx)(n.h3,{id:"sample-response-2",children:"Sample response"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "args": [],\n    "builtin": false,\n    "command": "/tmp/openbao-plugins/mysql-database-plugin",\n    "name": "example-plugin",\n    "sha256": "0TC5oPv93vlwnY/5Ll5gU8zSRreGMvwDuFSEVwJpYek=",\n    "version": "v1.0.0"\n  }\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"remove-plugin-from-catalog",children:"Remove plugin from catalog"}),"\n",(0,l.jsx)(n.p,{children:"This endpoint removes the plugin with the given name."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsxs)(n.strong,{children:[(0,l.jsx)(n.code,{children:"sudo"})," required"]})," \u2013\xa0This endpoint requires ",(0,l.jsx)(n.code,{children:"sudo"})," capability in addition to\nany path-specific capabilities."]}),"\n"]}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"DELETE"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"/sys/plugins/catalog/:type/:name?version=:version"})})]})})]}),"\n",(0,l.jsx)(n.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"name"})," ",(0,l.jsx)(n.code,{children:"(string: <required>)"})," \u2013\xa0Specifies the name of the plugin to delete.\nThis is part of the request URL."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"type"})," ",(0,l.jsx)(n.code,{children:"(string: <required>)"}),' \u2013\xa0Specifies the type of this plugin. May be\n"auth", "database", or "secret".']}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"version"})," ",(0,l.jsx)(n.code,{children:'(string: "")'})," \u2013\xa0Specifies the semantic version of the plugin\nto delete."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"sample-request-4",children:"Sample request"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request DELETE \\\n    http://127.0.0.1:8200/v1/sys/plugins/catalog/secret/example-plugin?version=v1.0.0\n'})})]})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>d});var l=s(96540);const i={},t=l.createContext(i);function r(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);