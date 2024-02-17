"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1440],{21840:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(74848),l=t(28453);const s={layout:"docs",page_title:"Install Vault ServiceNow Credential Resolver",description:"Installation steps for the Vault ServiceNow Credential Resolver."},i="Installing the Vault credential resolver",o={id:"platform/servicenow/installation",title:"Installing the Vault credential resolver",description:"Installation steps for the Vault ServiceNow Credential Resolver.",source:"@site/content/docs/platform/servicenow/installation.mdx",sourceDirName:"platform/servicenow",slug:"/platform/servicenow/installation",permalink:"/openbao/docs/platform/servicenow/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/platform/servicenow/installation.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"Install Vault ServiceNow Credential Resolver",description:"Installation steps for the Vault ServiceNow Credential Resolver."},sidebar:"tutorialSidebar",previous:{title:"Configuring the Vault credential resolver",permalink:"/openbao/docs/platform/servicenow/configuration"},next:{title:"Troubleshooting",permalink:"/openbao/docs/platform/servicenow/troubleshooting"}},a={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installing Vault agent",id:"installing-vault-agent",level:2},{value:"Uploading JAR file to MID server",id:"uploading-jar-file-to-mid-server",level:2},{value:"Next steps",id:"next-steps",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"installing-the-vault-credential-resolver",children:"Installing the Vault credential resolver"}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"ServiceNow version Quebec+ (untested on previous versions)"}),"\n",(0,r.jsx)(n.li,{children:"MID server version Quebec+ (untested on previous versions)"}),"\n",(0,r.jsx)(n.li,{children:"Discovery and external credential plugins activated on ServiceNow"}),"\n",(0,r.jsx)(n.li,{children:"Working Vault deployment accessible from the MID server"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"installing-vault-agent",children:"Installing Vault agent"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Select your desired auth method from Agent's ",(0,r.jsx)(n.a,{href:"/docs/agent-and-proxy/autoauth/methods",children:"supported auth methods"}),"\nand set it up in Vault"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["For example, to set up AppRole auth and a role called ",(0,r.jsx)(n.code,{children:"role1"})," with the ",(0,r.jsx)(n.code,{children:"demo"})," policy attached:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"vault auth enable approle\nvault write auth/approle/role/role1 bind_secret_id=true token_policies=demo\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"To get the files required for the example Agent config below, you can then\nrun:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"echo -n $(vault read -format json auth/approle/role/role1/role-id | jq -r '.data.role_id') > /path/to/roleID\necho -n $(vault write -format json -f auth/approle/role/role1/secret-id | jq -r '.data.secret_id') > /path/to/secretID\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create an ",(0,r.jsx)(n.code,{children:"agent.hcl"})," config file. Your exact configuration may vary, but you\nmust set ",(0,r.jsx)(n.code,{children:"cache.use_auto_auth_token = true"}),", and the ",(0,r.jsx)(n.code,{children:"listener"}),", ",(0,r.jsx)(n.code,{children:"vault"})," and\n",(0,r.jsx)(n.code,{children:"auto_auth"})," blocks are also required to set up a working Agent, e.g.:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-hcl",children:'listener "tcp" {\n  address = "127.0.0.1:8200"\n  tls_disable = false\n  tls_cert_file = "/path/to/cert.pem"\n  tls_key_file = "/path/to/key.pem"\n}\n\ncache {\n  use_auto_auth_token = true\n}\n\nvault {\n  address = "http://vault.example.com:8200"\n}\n\nauto_auth {\n    method {\n        type = "approle"\n        config = {\n            role_id_file_path = "/path/to/roleID"\n            secret_id_file_path = "/path/to/secretID"\n            remove_secret_id_file_after_reading = false\n        }\n    }\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Install Vault Agent as a service running ",(0,r.jsx)(n.code,{children:"vault agent -config=/path/to/agent.hcl"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Documentation for Windows service installation ",(0,r.jsx)(n.a,{href:"/docs/agent-and-proxy/agent/winsvc",children:"here"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"uploading-jar-file-to-mid-server",children:"Uploading JAR file to MID server"}),"\n",(0,r.jsxs)(n.admonition,{title:"Use the ServiceNow app store to install Vault Credential Resolver",type:"warning",children:[(0,r.jsxs)(n.p,{children:["The steps documented below are for ",(0,r.jsx)(n.strong,{children:"pre ServiceNow UTAH versions"}),"."]}),(0,r.jsxs)(n.p,{children:['As of ServiceNow version UTAH, use the "HashiCorp Vault Credential Resolver" App\nfrom the ServiceNow App store to install the Vault Credential Resolver and verify\nthe jar file installed is ',(0,r.jsx)(n.code,{children:"vault-servicenow-credential-resolver"}),". If you wish to\nuse a custom name, you must manually rename the deployed jar."]})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Download the latest version of the Vault Credential Resolver JAR file from\n",(0,r.jsx)(n.a,{href:"https://releases.hashicorp.com/vault-servicenow-credential-resolver/",children:"releases.hashicorp.com"})]}),"\n",(0,r.jsxs)(n.li,{children:['In ServiceNow, navigate to "MID server - JAR files" -> New',"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Manage Attachments -> upload Vault Credential Resolver JAR"}),"\n",(0,r.jsx)(n.li,{children:"Fill in name, version etc as desired"}),"\n",(0,r.jsx)(n.li,{children:"Click Submit"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:['Navigate to "MID server - Properties" -> New',"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Set Name: ",(0,r.jsx)(n.code,{children:"mid.external_credentials.vault.address"}),", Value: Address of Vault\nAgent listener from previous step, e.g. ",(0,r.jsx)(n.code,{children:"http://127.0.0.1:8200"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Optional:"})," Set the property ",(0,r.jsx)(n.code,{children:"mid.external_credentials.vault.ca"})," to the\ntrusted CA in PEM format if using TLS between the MID server and Vault\nAgent with a self-signed certificate."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/docs/platform/servicenow/configuration",children:"configuration"})," for details on\nconfiguring the resolver and using credentials for discovery."]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(96540);const l={},s=r.createContext(l);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);