"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5723],{53939:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=t(74848),s=t(28453);const o={layout:"docs",page_title:"patch - Command",description:'The "patch" command updates data in OpenBao at the given path. The data can be\ncredentials, secrets, configuration, or arbitrary data. The specific behavior\nof this command is determined at the thing mounted at the path.'},i="patch",r={id:"commands/patch",title:"patch",description:'The "patch" command updates data in OpenBao at the given path. The data can be\ncredentials, secrets, configuration, or arbitrary data. The specific behavior\nof this command is determined at the thing mounted at the path.',source:"@site/content/docs/commands/patch.mdx",sourceDirName:"commands",slug:"/commands/patch",permalink:"/openbao/docs/commands/patch",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/commands/patch.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"patch - Command",description:'The "patch" command updates data in OpenBao at the given path. The data can be\ncredentials, secrets, configuration, or arbitrary data. The specific behavior\nof this command is determined at the thing mounted at the path.'},sidebar:"docs",previous:{title:"operator usage",permalink:"/openbao/docs/commands/operator/usage"},next:{title:"path-help",permalink:"/openbao/docs/commands/path-help"}},c={},d=[{value:"Examples",id:"examples",level:2},{value:"API versus CLI",id:"api-versus-cli",level:3},{value:"Usage",id:"usage",level:2},{value:"Output options",id:"output-options",level:3},{value:"Command options",id:"command-options",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"patch",children:"patch"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"patch"})," command updates data in OpenBao at the given path (wrapper command for\nHTTP PATCH using the ",(0,a.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc6902",children:"JSON Patch format"}),").\nThe data can be credentials, secrets, configuration, or arbitrary data. The specific\nbehavior of the ",(0,a.jsx)(n.code,{children:"patch"})," command is determined at the thing mounted at the path."]}),"\n",(0,a.jsxs)(n.p,{children:['Data is specified as "',(0,a.jsx)(n.strong,{children:"key=value"}),'" pairs on the command line. If the value begins\nwith an "',(0,a.jsx)(n.strong,{children:"@"}),'", then it is loaded from a file. If the value for a key is "',(0,a.jsx)(n.strong,{children:"-"}),'", OpenBao\nwill read the value from stdin rather than the command line.']}),"\n",(0,a.jsxs)(n.p,{children:["Some API fields require more advanced structures such as maps. These cannot\ndirectly be represented on the command line. However, direct control of the\nrequest parameters can be achieved by using ",(0,a.jsx)(n.code,{children:"-"})," as the only data argument.\nThis causes ",(0,a.jsx)(n.code,{children:"bao patch"}),' to read a JSON blob containing all request parameters\nfrom stdin. This argument will be ignored if used in conjunction with any\n"key=value" pairs.']}),"\n",(0,a.jsx)(n.p,{children:"For a full list of examples and paths, please see the documentation that\ncorresponds to the secrets engines in use."}),"\n",(0,a.jsxs)(n.p,{children:["Unlike ",(0,a.jsxs)(n.a,{href:"/docs/commands/write",children:["the ",(0,a.jsx)(n.code,{children:"write"})," command"]}),", the ",(0,a.jsx)(n.code,{children:"patch"})," command only\nmodifies data specified on the command line."]}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.p,{children:"Updates a PKI role to modify a single parameter:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell-session",children:"$ bao patch pki/roles/example allow_localhost=false\n"})}),"\n",(0,a.jsx)(n.h3,{id:"api-versus-cli",children:"API versus CLI"}),"\n",(0,a.jsxs)(n.p,{children:["Updates a PKI role to modify the ",(0,a.jsx)(n.code,{children:"allow_localhost"})," parameter:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell-session",children:"$ bao patch pki/roles/example allow_localhost=false\n"})}),"\n",(0,a.jsx)(n.p,{children:"Equivalent cURL command for this operation:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell-session",children:'$ tee request_payload.json -<<EOF\n{\n   "organization": "hashicorp"\n}\nEOF\n\n$ curl --header "X-Vault-Token: $VAULT_TOKEN" \\\n    --request PATCH \\\n    --header \'Content-Type: application/merge-patch+json\'\n    --data @request_payload.json \\\n    $VAULT_ADDR/v1/pki/roles/example\n'})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"bao patch"})," command simplifies the API call."]}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(n.p,{children:["The following flags are available in addition to the ",(0,a.jsx)(n.a,{href:"/docs/commands",children:"standard set of\nflags"})," included on all commands."]}),"\n",(0,a.jsx)(n.h3,{id:"output-options",children:"Output options"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"-field"})," ",(0,a.jsx)(n.code,{children:'(string: "")'})," - Print only the field with the given name. Specifying\nthis option will take precedence over other formatting directives. The result\nwill not have a trailing newline making it ideal for piping to other processes."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"-format"})," ",(0,a.jsx)(n.code,{children:'(string: "table")'}),' - Print the output in the given format. Valid\nformats are "table", "json", or "yaml". This can also be specified via the\n',(0,a.jsx)(n.code,{children:"VAULT_FORMAT"})," environment variable."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"command-options",children:"Command options"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"-force"})," ",(0,a.jsx)(n.code,{children:"(bool: false)"})," - Allow the operation to continue with no key=value\npairs. This allows writing to keys that do not need or expect data. This is\naliased as ",(0,a.jsx)(n.code,{children:"-f"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var a=t(96540);const s={},o=a.createContext(s);function i(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);