"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8074],{2670:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=t(74848),s=t(28453);const a={sidebar_label:"generate-config",description:"Generates a simple OpenBao Agent configuration file from the given parameters."},i="agent generate-config",o={id:"agent-and-proxy/agent/generate-config/index",title:"agent generate-config",description:"Generates a simple OpenBao Agent configuration file from the given parameters.",source:"@site/content/docs/agent-and-proxy/agent/generate-config/index.mdx",sourceDirName:"agent-and-proxy/agent/generate-config",slug:"/agent-and-proxy/agent/generate-config/",permalink:"/docs/agent-and-proxy/agent/generate-config/",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/agent-and-proxy/agent/generate-config/index.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"generate-config",description:"Generates a simple OpenBao Agent configuration file from the given parameters."},sidebar:"docs",previous:{title:"Kubernetes",permalink:"/docs/agent-and-proxy/agent/caching/persistent-caches/kubernetes"},next:{title:"Process Supervisor Mode",permalink:"/docs/agent-and-proxy/agent/process-supervisor"}},c={},l=[{value:"Example",id:"example",level:2},{value:"Usage",id:"usage",level:2},{value:"Tutorial",id:"tutorial",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"agent-generate-config",children:"agent generate-config"}),"\n",(0,r.jsx)(n.p,{children:"Generates a simple OpenBao Agent configuration file from the given parameters."}),"\n",(0,r.jsxs)(n.p,{children:["Currently, the only supported configuration type is ",(0,r.jsx)(n.code,{children:"env-template"}),", which\nhelps you generate a configuration file with environment variable templates\nfor running OpenBao Agent in\n",(0,r.jsx)(n.a,{href:"/docs/agent-and-proxy/agent/process-supervisor",children:"process supervisor"}),"\nmode."]}),"\n",(0,r.jsxs)(n.p,{children:["For every specified secret ",(0,r.jsx)(n.code,{children:"-path"}),", the command will attempt to generate one or\nmultiple ",(0,r.jsx)(n.code,{children:"env_template"})," entries based on the ",(0,r.jsx)(n.code,{children:"JSON"})," key(s) stored in the\nspecified secret. If the secret ",(0,r.jsx)(n.code,{children:"-path"})," ends with ",(0,r.jsx)(n.code,{children:"/*"}),", the command will\nattempt to recurse through the secrets tree rooted at the given path,\ngenerating ",(0,r.jsx)(n.code,{children:"env_template"})," entries for each encountered secret. Currently,\nonly ",(0,r.jsx)(n.a,{href:"/docs/secrets/kv/kv-v1",children:"kv-v1"})," and\n",(0,r.jsx)(n.a,{href:"/docs/secrets/kv/kv-v2",children:"kv-v2"})," paths are supported."]}),"\n",(0,r.jsxs)(n.p,{children:["The command specified in the ",(0,r.jsx)(n.code,{children:"-exec"})," option will be used to generate an\n",(0,r.jsx)(n.code,{children:"exec"})," entry, which will tell OpenBao Agent which child process to run."]}),"\n",(0,r.jsxs)(n.p,{children:["In addition to the ",(0,r.jsx)(n.code,{children:"env_template"})," entries, the command generates an ",(0,r.jsx)(n.code,{children:"auto_auth"}),"\nsection with ",(0,r.jsx)(n.code,{children:"token_file"})," authentication method. While this method is very\nconvenient for local testing, it should ",(0,r.jsx)(n.strong,{children:"NOT"})," be used in production. In a\nproduction environment, please use any other\n",(0,r.jsx)(n.a,{href:"/docs/agent-and-proxy/autoauth/methods",children:"Auto-Auth method"})," instead."]}),"\n",(0,r.jsxs)(n.p,{children:["By default, the file will be generated in the local directory as ",(0,r.jsx)(n.code,{children:"agent.hcl"}),"\nunless a path is specified as an argument."]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["Before generating a configuration file, let's insert a secret ",(0,r.jsx)(n.code,{children:"foo"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell-session",children:'$ bao kv put -mount=secret foo user="admin" password="s3cr3t"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Generate an agent configuration file which will reference ",(0,r.jsx)(n.code,{children:"secret/foo"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell-session",children:'$ bao agent generate-config \\\n         -type="env-template" \\\n         -exec="./my-app arg1 arg2" \\\n         -namespace="my/ns/" \\\n         -path="secret/foo" \\\n         my-config.hcl\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Expected output:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"Successfully generated \"my-config.hcl\" configuration file!\nWarning: the generated file uses 'token_file' authentication method, which is not suitable for production environments.\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This will produce ",(0,r.jsx)(n.code,{children:"my-config.hcl"})," file in the current directory with contents\nsimilar to the following:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-hcl",children:'auto_auth {\n\n  method {\n    type = "token_file"\n\n    config {\n      token_file_path = "/Users/avean/.vault-token"\n    }\n  }\n}\n\ntemplate_config {\n  static_secret_render_interval = "5m"\n  exit_on_retry_failure         = true\n}\n\nvault {\n  address = "http://localhost:8200"\n}\n\nenv_template "FOO_PASSWORD" {\n  contents             = "{{ with secret \\"secret/data/foo\\" }}{{ .Data.data.password }}{{ end }}"\n  error_on_missing_key = true\n}\nenv_template "FOO_USER" {\n  contents             = "{{ with secret \\"secret/data/foo\\" }}{{ .Data.data.user }}{{ end }}"\n  error_on_missing_key = true\n}\n\nexec {\n  command                   = ["./my-app", "arg1", "arg2"]\n  restart_on_secret_changes = "always"\n  restart_stop_signal       = "SIGTERM"\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:["The following flags are available in addition to the ",(0,r.jsx)(n.a,{href:"/docs/commands",children:"standard set of\nflags"})," included in all commands."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"type"})," ",(0,r.jsx)(n.code,{children:"(string: <required>)"})," - The type of configuration file to generate;\ncurrently, only ",(0,r.jsx)(n.code,{children:"env-template"})," is supported."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"path"})," ",(0,r.jsx)(n.code,{children:'(string: "")'})," - Path to a kv-v1 or kv-v2 secret\n(e.g. ",(0,r.jsx)(n.code,{children:"secret/data/foo"}),", ",(0,r.jsx)(n.code,{children:"kv-v2/my-app/*"}),"); multiple secrets and tail ",(0,r.jsx)(n.code,{children:"*"}),"\nwildcards are allowed."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"-exec"})," ",(0,r.jsx)(n.code,{children:'(string: "env")'})," - The command to execute in agent process\nsupervisor mode."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"tutorial",children:"Tutorial"}),"\n",(0,r.jsxs)(n.p,{children:["Refer to the ",(0,r.jsx)(n.a,{href:"/tutorials/vault-agent/agent-env-vars",children:"OpenBao Agent - secrets as environment\nvariables"})," tutorial for an\nend-to-end example."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(96540);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);