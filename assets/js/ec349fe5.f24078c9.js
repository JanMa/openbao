"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[649],{64857:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=n(74848),a=n(28453);const r={layout:"docs",page_title:"OpenBao Auto-Auth AppRole Method",description:"AppRole Method for OpenBao Auto-Auth"},i="OpenBao Auto-Auth AppRole method",s={id:"agent-and-proxy/autoauth/methods/approle",title:"OpenBao Auto-Auth AppRole method",description:"AppRole Method for OpenBao Auto-Auth",source:"@site/content/docs/agent-and-proxy/autoauth/methods/approle.mdx",sourceDirName:"agent-and-proxy/autoauth/methods",slug:"/agent-and-proxy/autoauth/methods/approle",permalink:"/openbao/docs/agent-and-proxy/autoauth/methods/approle",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/agent-and-proxy/autoauth/methods/approle.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"OpenBao Auto-Auth AppRole Method",description:"AppRole Method for OpenBao Auto-Auth"},sidebar:"tutorialSidebar",previous:{title:"OpenBao Auto-Auth methods",permalink:"/openbao/docs/agent-and-proxy/autoauth/methods/"},next:{title:"OpenBao Auto-Auth cert method",permalink:"/openbao/docs/agent-and-proxy/autoauth/methods/cert"}},l={},d=[{value:"Configuration",id:"configuration",level:2},{value:"Example configuration",id:"example-configuration",level:2}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"openbao-auto-auth-approle-method",children:"OpenBao Auto-Auth AppRole method"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"approle"})," method reads in a role ID and a secret ID from files and sends\nthe values to the ",(0,o.jsx)(t.a,{href:"/docs/auth/approle",children:"AppRole Auth\nmethod"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"The method caches values and it is safe to delete the role ID/secret ID files\nafter they have been read. In fact, by default, after reading the secret ID,\nthe agent will delete the file. New files or values written at the expected\nlocations will be used on next authentication and the new values will be\ncached."}),"\n",(0,o.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"role_id_file_path"})," ",(0,o.jsx)(t.code,{children:"(string: required)"})," - The path to the file with role ID"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"secret_id_file_path"})," ",(0,o.jsx)(t.code,{children:"(string: optional)"})," - The path to the file with secret\nID.\nIf not set, only the ",(0,o.jsx)(t.code,{children:"role-id"})," will be used.\nIn that case, the AppRole should have ",(0,o.jsx)(t.code,{children:"bind_secret_id"})," set to ",(0,o.jsx)(t.code,{children:"false"})," otherwise\nOpenBao Agent wouldn't be able to login."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"remove_secret_id_file_after_reading"})," ",(0,o.jsx)(t.code,{children:"(bool: optional, defaults to true)"})," -\nThis can be set to ",(0,o.jsx)(t.code,{children:"false"})," to disable the default behavior of removing the\nsecret ID file after it's been read."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"secret_id_response_wrapping_path"})," ",(0,o.jsx)(t.code,{children:"(string: optional)"})," - If set, the value\nat ",(0,o.jsx)(t.code,{children:"secret_id_file_path"})," will be expected to be a ",(0,o.jsx)(t.a,{href:"/docs/concepts/response-wrapping",children:"Response-Wrapping\nToken"}),"\ncontaining the output of the secret ID retrieval endpoint for the role (e.g.\n",(0,o.jsx)(t.code,{children:"auth/approle/role/webservers/secret-id"}),") and the creation path for the\nresponse-wrapping token must match the value set here."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"example-configuration",children:"Example configuration"}),"\n",(0,o.jsxs)(t.p,{children:["An example configuration, using approle to enable ",(0,o.jsx)(t.a,{href:"/docs/agent-and-proxy/autoauth",children:"auto-auth"}),"\nand creating both a plaintext token sink and a ",(0,o.jsx)(t.a,{href:"/docs/agent-and-proxy/autoauth#wrap_ttl",children:"response-wrapped token sink file"}),", follows:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-hcl",children:'pid_file = "./pidfile"\n\nvault {\n  address = "https://127.0.0.1:8200"\n}\n\nauto_auth {\n  method {\n    type      = "approle"\n\n    config = {\n      role_id_file_path = "roleid"\n      secret_id_file_path = "secretid"\n      remove_secret_id_file_after_reading = false\n    }\n  }\n\n  sink {\n    type = "file"\n    wrap_ttl = "30m"\n    config = {\n      path = "sink_file_wrapped_1.txt"\n    }\n  }\n\n  sink {\n    type = "file"\n    config = {\n      path = "sink_file_unwrapped_2.txt"\n    }\n  }\n}\n\n\napi_proxy {\n  use_auto_auth_token = true\n}\n\nlistener "tcp" {\n  address = "127.0.0.1:8100"\n  tls_disable = true\n}\n\ntemplate {\n  source      = "/etc/openbao/server.key.ctmpl"\n  destination = "/etc/openbao/server.key"\n}\n\ntemplate {\n  source      = "/etc/openbao/server.crt.ctmpl"\n  destination = "/etc/openbao/server.crt"\n}\n'})})]})}function c(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var o=n(96540);const a={},r=o.createContext(a);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);