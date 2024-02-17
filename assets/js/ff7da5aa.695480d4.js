"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1642],{79896:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var t=o(74848),s=o(28453);const a={layout:"docs",page_title:"operator - Command",description:'The "operator" command groups subcommands for operators interacting with\nOpenBao. Most users will not need to interact with these commands.'},r="operator",i={id:"commands/operator/index",title:"operator",description:'The "operator" command groups subcommands for operators interacting with\nOpenBao. Most users will not need to interact with these commands.',source:"@site/content/docs/commands/operator/index.mdx",sourceDirName:"commands/operator",slug:"/commands/operator/",permalink:"/openbao/docs/commands/operator/",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/commands/operator/index.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"operator - Command",description:'The "operator" command groups subcommands for operators interacting with\nOpenBao. Most users will not need to interact with these commands.'},sidebar:"tutorialSidebar",previous:{title:"monitor",permalink:"/openbao/docs/commands/monitor"},next:{title:"operator diagnose",permalink:"/openbao/docs/commands/operator/diagnose"}},c={},d=[{value:"Examples",id:"examples",level:2},{value:"Usage",id:"usage",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"operator",children:"operator"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"operator"})," command groups subcommands for operators interacting with OpenBao.\nMost users will not need to interact with these commands."]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:"Initialize a new OpenBao cluster:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"$ bao operator init\nUnseal Key 1: sP/4C/fwIDjJmHEC2bi/1Pa43uKhsUQMmiB31GRzFc0R\nUnseal Key 2: kHkw2xTBelbDFIMEgEC8NVX7NDSAZ+rdgBJ/HuJwxOX+\nUnseal Key 3: +1+1ZnkQDfJFHDZPRq0wjFxEuEEHxDDOQxa8JJ/AYWcb\nUnseal Key 4: cewseNJTLovmFrgpyY+9Hi5OgJlJgGGCg7PZyiVdPwN0\nUnseal Key 5: wyd7rMGWX5fi0k36X4e+C4myt5CoTmJsHJ0rdYT7BQcF\n\nInitial Root Token: 6662bb4a-afd0-4b6b-faad-e237fb564568\n\n# ...\n"})}),"\n",(0,t.jsx)(n.p,{children:"Force an OpenBao to resign leadership in a cluster:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"$ bao operator step-down\nSuccess! Stepped down: https://127.0.0.1:8200\n"})}),"\n",(0,t.jsx)(n.p,{children:"Rotate OpenBao's underlying encryption key:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"$ bao operator rotate\nSuccess! Rotated key\n\nKey Term        2\nInstall Time    01 Jan 07 12:30 UTC\n"})}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"Usage: bao operator <subcommand> [options] [args]\n\n  # ...\n\nSubcommands:\n    generate-root    Generates a new root token\n    init             Initializes a server\n    key-status       Provides information about the active encryption key\n    rekey            Generates new unseal keys\n    rotate           Rotates the underlying encryption key\n    seal             Seals the OpenBao server\n    step-down        Forces OpenBao to resign active duty\n    unseal           Unseals the OpenBao server\n"})}),"\n",(0,t.jsx)(n.p,{children:"For more information, examples, and usage about a subcommand, click on the name\nof the subcommand in the sidebar."})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>i});var t=o(96540);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);