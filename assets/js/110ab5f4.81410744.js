"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2781],{92797:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=t(74848),i=t(28453);const o={sidebar_label:"Process Supervisor Mode",description:"OpenBao Agent's Process Supervisor Mode allows OpenBao secrets to be injected into a process via environment variables using Consul Template markup."},r="OpenBao agent's process supervisor mode",a={id:"agent-and-proxy/agent/process-supervisor",title:"OpenBao agent's process supervisor mode",description:"OpenBao Agent's Process Supervisor Mode allows OpenBao secrets to be injected into a process via environment variables using Consul Template markup.",source:"@site/content/docs/agent-and-proxy/agent/process-supervisor.mdx",sourceDirName:"agent-and-proxy/agent",slug:"/agent-and-proxy/agent/process-supervisor",permalink:"/openbao/docs/agent-and-proxy/agent/process-supervisor",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/agent-and-proxy/agent/process-supervisor.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Process Supervisor Mode",description:"OpenBao Agent's Process Supervisor Mode allows OpenBao secrets to be injected into a process via environment variables using Consul Template markup."},sidebar:"docs",previous:{title:"generate-config",permalink:"/openbao/docs/agent-and-proxy/agent/generate-config/"},next:{title:"Templates",permalink:"/openbao/docs/agent-and-proxy/agent/template"}},c={},l=[{value:"Functionality",id:"functionality",level:2},{value:"Configuration",id:"configuration",level:2},{value:"<code>env_template</code>",id:"env_template",level:3},{value:"<code>exec</code>",id:"exec",level:3},{value:"Configuration example",id:"configuration-example",level:2},{value:"Tutorial",id:"tutorial",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"openbao-agents-process-supervisor-mode",children:"OpenBao agent's process supervisor mode"}),"\n",(0,s.jsxs)(n.p,{children:["OpenBao Agent's Process Supervisor Mode allows OpenBao secrets to be injected into\na process via environment variables using\n",(0,s.jsx)(n.a,{href:"https://github.com/hashicorp/consul-template/blob/v0.28.1/docs/templating-language.md",children:"Consul Template markup"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["If you are running your applications in a Kubernetes cluster, we recommend\nevaluating the ",(0,s.jsx)(n.a,{href:"/docs/platform/k8s/vso",children:"OpenBao Secrets Operator"})," and\nthe ",(0,s.jsx)(n.a,{href:"/docs/platform/k8s/injector",children:"OpenBao Agent Sidecar Injector"}),"."]})}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsxs)(n.p,{children:["OpenBao Agent's Process Supervisor Mode is in public beta. Please provide your\nfeedback by opening a GitHub issue ",(0,s.jsx)(n.a,{href:"https://github.com/openbao/openbao/issues",children:"here"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"functionality",children:"Functionality"}),"\n",(0,s.jsxs)(n.p,{children:["OpenBao Agent will inject secrets referenced in the ",(0,s.jsx)(n.code,{children:"env_template"})," configuration\nblocks as environment variables into the child process specified in the ",(0,s.jsx)(n.code,{children:"exec"})," block."]}),"\n",(0,s.jsxs)(n.p,{children:["When you start OpenBao Agent in process supervisor mode, it will wait until each\nenvironment variable template has rendered at least once before starting the\nprocess. If ",(0,s.jsx)(n.code,{children:"restart_on_secret_changes"})," is set to ",(0,s.jsx)(n.code,{children:"always"})," (default), Agent\nwill restart the process whenever an update to an injected secret is detected.\nThis could be either a static secret update (done on\n",(0,s.jsx)(n.a,{href:"/docs/agent-and-proxy/agent/template#static_secret_render_interval",children:(0,s.jsx)(n.code,{children:"static_secret_render_interval"})}),")\nor dynamic secret being close to its expiration."]}),"\n",(0,s.jsxs)(n.p,{children:["In many ways, OpenBao Agent will mirror the child process. Standard intput and\noutput streams (",(0,s.jsx)(n.code,{children:"stdin"})," / ",(0,s.jsx)(n.code,{children:"stdout"})," / ",(0,s.jsx)(n.code,{children:"stderr"}),") are all forwarded to the child\nprocess. Additionally, OpenBao Agent will exit when the child process exits on\nits own with the same exit code."]}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Agent's ",(0,s.jsx)(n.a,{href:"/docs/agent-and-proxy/agent/generate-config",children:"generate-config"}),"\ntool will help you get started by generating a valid agent configuration\nfile from the given inputs."]})}),"\n",(0,s.jsxs)(n.p,{children:["The process supervisor mode requires at least one ",(0,s.jsx)(n.code,{children:"env_template"})," block and\nexactly one top level ",(0,s.jsx)(n.code,{children:"exec"})," block. It is incompatible with regular file\n",(0,s.jsx)(n.code,{children:"template"})," entries."]}),"\n",(0,s.jsx)(n.h3,{id:"env_template",children:(0,s.jsx)(n.code,{children:"env_template"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"env_template"})," stanza maps the template specified in the ",(0,s.jsx)(n.code,{children:"contents"})," field or\nreferenced in the ",(0,s.jsx)(n.code,{children:"source"})," field to the environment variable name in the title\nof the stanza. It uses the same\n",(0,s.jsx)(n.a,{href:"/docs/agent-and-proxy/agent/template#templating-language",children:"templating language"}),"\nas file templates but permits only a subset of\n",(0,s.jsx)(n.a,{href:"/docs/agent-and-proxy/agent/template#template_configurations",children:"its configuration parameters"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["environment variable name ",(0,s.jsx)(n.code,{children:"(string: <required>)"})," - the name of the\nenvironment variable to which the contents of the template should map."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"contents"})," ",(0,s.jsx)(n.code,{children:'(string: "")'})," - This option allows embedding the contents of\na template in the configuration file rather then supplying the ",(0,s.jsx)(n.code,{children:"source"})," path to\nthe template file. This is useful for short templates. This option is mutually\nexclusive with the ",(0,s.jsx)(n.code,{children:"source"})," option."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"source"})," ",(0,s.jsx)(n.code,{children:'(string: "")'})," - Path on disk to use as the input template. This\noption is required if not using the ",(0,s.jsx)(n.code,{children:"contents"})," option."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"error_on_missing_key"})," ",(0,s.jsx)(n.code,{children:"(bool: false)"})," - Exit with an error when accessing\na struct or map field/key that does notexist. The default behavior will print ",(0,s.jsx)(n.code,{children:"<no value>"}),'\nwhen accessing a field that does not exist. It is highly recommended you set this\nto "true". Also see\n',(0,s.jsxs)(n.a,{href:"/docs/agent-and-proxy/agent/template#interaction-between-exit_on_retry_failure-and-error_on_missing_key",children:[(0,s.jsx)(n.code,{children:"exit_on_retry_failure"})," in global OpenBao Agent Template Config"]}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"left_delimiter"})," ",(0,s.jsx)(n.code,{children:'(string: "\\{\\{")'}),' - Delimiter to use in the template. The\ndefault is "{{" but for some templates, it may be easier to use a different\ndelimiter that does not conflict with the output file itself.']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"right_delimiter"})," ",(0,s.jsx)(n.code,{children:'(string: "}}")'}),' - Delimiter to use in the template. The\ndefault is "}}" but for some templates, it may be easier to use a different\ndelimiter that does not conflict with the output file itself.']}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"exec",children:(0,s.jsx)(n.code,{children:"exec"})}),"\n",(0,s.jsxs)(n.p,{children:["The top level ",(0,s.jsx)(n.code,{children:"exec"})," block has the following configuration entries."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"command"})," ",(0,s.jsx)(n.code,{children:"(string array: required)"})," - Specify the command for the child\nprocess with optional arguments. The executable's path must be either\nabsolute or relative to the current working directory."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"restart_on_secret_changes"})," ",(0,s.jsx)(n.code,{children:'(string: "always")'})," - Controls whether agent\nwill restart the child process on secret changes. There are two types of\nsecret changes relevant to this configuration: a static secret update (on\n[static_secret_render_interval",(0,s.jsx)(n.code,{children:"](/docs/agent-and-proxy/agent/template#static_secret_render_interval)) and dynamic secret being close to its expiration. The configuration supports two options: "}),"always",(0,s.jsx)(n.code,{children:"and"}),"never`."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"restart_stop_signal"})," ",(0,s.jsx)(n.code,{children:'(string: "SIGTERM")'})," - Signal to send to the child\nprocess when a secret has been updated and the process needs to be restarted.\nThe process has 30 seconds after this signal is sent until ",(0,s.jsx)(n.code,{children:"SIGKILL"})," is sent\nto force the child process to stop."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"configuration-example",children:"Configuration example"}),"\n",(0,s.jsxs)(n.p,{children:["The following example was generated using\n",(0,s.jsx)(n.a,{href:"/docs/agent-and-proxy/agent/generate-config",children:(0,s.jsx)(n.code,{children:"bao agent generate-config"})}),",\na configuration helper tool. Given this configuration, OpenBao Agent will run\nthe child process (",(0,s.jsx)(n.code,{children:"./my-app arg1 arg2"}),") with two additional environment\nvariables (",(0,s.jsx)(n.code,{children:"FOO_USER"})," and ",(0,s.jsx)(n.code,{children:"FOO_PASSWORD"}),") populated with secrets from OpenBao."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",children:'auto_auth {\n\n  method {\n    type = "token_file"\n\n    config {\n      token_file_path = "/Users/avean/.vault-token"\n    }\n  }\n}\n\ntemplate_config {\n  static_secret_render_interval = "5m"\n  exit_on_retry_failure         = true\n}\n\nvault {\n  address = "http://localhost:8200"\n}\n\nenv_template "FOO_PASSWORD" {\n  contents             = "{{ with secret \\"secret/data/foo\\" }}{{ .Data.data.password }}{{ end }}"\n  error_on_missing_key = true\n}\nenv_template "FOO_USER" {\n  contents             = "{{ with secret \\"secret/data/foo\\" }}{{ .Data.data.user }}{{ end }}"\n  error_on_missing_key = true\n}\n\nexec {\n  command                   = ["./my-app", "arg1", "arg2"]\n  restart_on_secret_changes = "always"\n  restart_stop_signal       = "SIGTERM"\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"tutorial",children:"Tutorial"}),"\n",(0,s.jsxs)(n.p,{children:["Refer to the ",(0,s.jsx)(n.a,{href:"/tutorials/vault-agent/agent-env-vars",children:"OpenBao Agent - secrets as environment\nvariables"})," tutorial for an\nend-to-end example."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(96540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);