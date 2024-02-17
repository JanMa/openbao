"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3118],{35138:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=t(74848),s=t(28453);const i={layout:"docs",page_title:"login - Command",description:'The "login" command authenticates users or machines to OpenBao using the\nprovided arguments. A successful authentication results in an OpenBao token -\nconceptually similar to a session token on a website.'},a="login",l={id:"commands/login",title:"login",description:'The "login" command authenticates users or machines to OpenBao using the\nprovided arguments. A successful authentication results in an OpenBao token -\nconceptually similar to a session token on a website.',source:"@site/content/docs/commands/login.mdx",sourceDirName:"commands",slug:"/commands/login",permalink:"/openbao/docs/commands/login",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/commands/login.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"login - Command",description:'The "login" command authenticates users or machines to OpenBao using the\nprovided arguments. A successful authentication results in an OpenBao token -\nconceptually similar to a session token on a website.'},sidebar:"tutorialSidebar",previous:{title:"list",permalink:"/openbao/docs/commands/list"},next:{title:"monitor",permalink:"/openbao/docs/commands/monitor"}},r={},d=[{value:"Examples",id:"examples",level:2},{value:"Usage",id:"usage",level:2},{value:"Output options",id:"output-options",level:3},{value:"Command options",id:"command-options",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"login",children:"login"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"login"})," command authenticates users or machines to OpenBao using the provided\narguments. A successful authentication results in an OpenBao token - conceptually\nsimilar to a session token on a website. By default, this token is cached on the\nlocal machine for future requests."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"-method"}),' flag allows using other auth methods, such as userpass,\ngithub, or cert. For these, additional "K=V" pairs may be required. For more\ninformation about the list of configuration parameters available for a given\nauth method, use the "bao auth help TYPE" command. You can also use "bao\nauth list" to see the list of enabled auth methods.']}),"\n",(0,o.jsxs)(n.p,{children:["If an auth method is enabled at a non-standard path, the ",(0,o.jsx)(n.code,{children:"-method"}),"\nflag still refers to the canonical type, but the ",(0,o.jsx)(n.code,{children:"-path"})," flag refers to the\nenabled path."]}),"\n",(0,o.jsxs)(n.p,{children:["If the authentication is requested with response wrapping (via ",(0,o.jsx)(n.code,{children:"-wrap-ttl"}),"),\nthe returned token is automatically unwrapped unless:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"-token-only"})," flag is used, in which case this command will output\nthe wrapping token."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"-no-store"})," flag is used, in which case this command will output the\ndetails of the wrapping token."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.p,{children:'By default, login uses a "token" method and reads from stdin:'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell-session",children:'$ bao login\nToken (will be hidden):\nSuccess! You are now authenticated. The token information displayed below\nis already stored in the token helper. You do NOT need to run "bao login"\nagain. Future OpenBao requests will automatically use this token.\n\nKey                  Value\n---                  -----\ntoken                s.nDj4BB2tK8NaFffwBZBxyIa1\ntoken_accessor       ZuaObqdTeCHZ4oa9HWmdQJuZ\ntoken_duration       \u221e\ntoken_renewable      false\ntoken_policies       ["root"]\nidentity_policies    []\npolicies             ["root"]\n'})}),"\n",(0,o.jsx)(n.p,{children:"Alternatively, the token may be provided as a command line argument (note that\nthis may be captured by shell history or process listings):"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell-session",children:'$ bao login s.3jnbMAKl1i4YS3QoKdbHzGXq\nSuccess! You are now authenticated. The token information displayed below\nis already stored in the token helper. You do NOT need to run "bao login"\nagain. Future OpenBao requests will automatically use this token.\n\nKey                  Value\n---                  -----\ntoken                s.3jnbMAKl1i4YS3QoKdbHzGXq\ntoken_accessor       7Uod1Rm0ejUAz77Oh7SxpAM0\ntoken_duration       767h59m49s\ntoken_renewable      true\ntoken_policies       ["admin" "default"]\nidentity_policies    []\npolicies             ["admin" "default"]\n'})}),"\n",(0,o.jsxs)(n.p,{children:["To login with a different method, use ",(0,o.jsx)(n.code,{children:"-method"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell-session",children:'$ bao login -method=userpass username=my-username\nPassword (will be hidden):\nSuccess! You are now authenticated. The token information below is already\nstored in the token helper. You do NOT need to run "bao login" again. Future\nrequests will use this token automatically.\n\nKey                    Value\n---                    -----\ntoken                  s.2y4SU3Sk46dK3p2Y8q2jSBwL\ntoken_accessor         8J125x9SZyB76MI9uF2jSJZf\ntoken_duration         768h\ntoken_renewable        true\ntoken_policies         ["default"]\nidentity_policies      []\npolicies               ["default"]\ntoken_meta_username    my-username\n'})}),"\n",(0,o.jsxs)(n.p,{children:["~> Notice that the command option (",(0,o.jsx)(n.code,{children:"-method=userpass"}),") precedes the command\nargument (",(0,o.jsx)(n.code,{children:"username=my-username"}),")."]}),"\n",(0,o.jsx)(n.p,{children:'If a github auth method was enabled at the path "github-prod":'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell-session",children:'$ bao login -method=github -path=github-prod\nSuccess! You are now authenticated. The token information below is already\nstored in the token helper. You do NOT need to run "bao login" again. Future\nrequests will use this token automatically.\n\nKey                    Value\n---                    -----\ntoken                  s.2f3c5L1MHtnqbuNCbx90utmC\ntoken_accessor         JLUIXJ6ltUftTt2UYRl2lTAC\ntoken_duration         768h\ntoken_renewable        true\ntoken_policies         ["default"]\nidentity_policies      []\npolicies               ["default"]\ntoken_meta_org         hashicorp\ntoken_meta_username    my-username\n'})}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:["The following flags are available in addition to the ",(0,o.jsx)(n.a,{href:"/docs/commands",children:"standard set of\nflags"})," included on all commands."]}),"\n",(0,o.jsx)(n.h3,{id:"output-options",children:"Output options"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"-field"})," ",(0,o.jsx)(n.code,{children:'(string: "")'})," - Print only the field with the given name. Specifying\nthis option will take precedence over other formatting directives. The result\nwill not have a trailing newline making it ideal for piping to other processes."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"-format"})," ",(0,o.jsx)(n.code,{children:'(string: "table")'}),' - Print the output in the given format. Valid\nformats are "table", "json", or "yaml". This can also be specified via the\n',(0,o.jsx)(n.code,{children:"VAULT_FORMAT"})," environment variable."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"command-options",children:"Command options"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"-method"})," ",(0,o.jsx)(n.code,{children:'(string "token")'}),' - Type of authentication to use such as\n"userpass" or "ldap". Note this corresponds to the TYPE, not the enabled path.\nUse -path to specify the path where the authentication is enabled.']}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"-no-print"})," ",(0,o.jsx)(n.code,{children:"(bool: false)"})," - Do not display the token. The token will\nstill be stored to the configured token helper. The default is false."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"-no-store"})," ",(0,o.jsx)(n.code,{children:"(bool: false)"})," - Do not persist the token to the token helper\n(usually the local filesystem) after authentication for use in future\nrequests. The token will only be displayed in the command output."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"-path"})," ",(0,o.jsx)(n.code,{children:'(string: "")'})," - Remote path in OpenBao where the auth method\nis enabled. This defaults to the TYPE of method (e.g. userpass -> userpass/)."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"-token-only"})," ",(0,o.jsx)(n.code,{children:"(bool: false)"}),' - Output only the token with no verification.\nThis flag is a shortcut for "-field=token -no-store". Setting those\nflags to other values will have no affect.']}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var o=t(96540);const s={},i=o.createContext(s);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);