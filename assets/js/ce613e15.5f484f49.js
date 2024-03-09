"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2770],{14966:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>h,toc:()=>c});var a=s(74848),t=s(28453);const o={sidebar_label:"Overview",description:'The "auth" command groups subcommands for interacting with OpenBao\'s auth\nmethods. Users can list, enable, disable, and get help for different auth\nmethods.'},i="auth",h={id:"commands/auth/index",title:"auth",description:'The "auth" command groups subcommands for interacting with OpenBao\'s auth\nmethods. Users can list, enable, disable, and get help for different auth\nmethods.',source:"@site/content/docs/commands/auth/index.mdx",sourceDirName:"commands/auth",slug:"/commands/auth/",permalink:"/openbao/docs/commands/auth/",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/commands/auth/index.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Overview",description:'The "auth" command groups subcommands for interacting with OpenBao\'s auth\nmethods. Users can list, enable, disable, and get help for different auth\nmethods.'},sidebar:"docs",previous:{title:"list",permalink:"/openbao/docs/commands/audit/list"},next:{title:"disable",permalink:"/openbao/docs/commands/auth/disable"}},d={},c=[{value:"Examples",id:"examples",level:2},{value:"Usage",id:"usage",level:2}];function r(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"auth",children:"auth"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"auth"})," command groups subcommands for interacting with OpenBao's auth methods.\nUsers can list, enable, disable, and get help for different auth methods."]}),"\n",(0,a.jsxs)(n.p,{children:["For more information, please see the ",(0,a.jsx)(n.a,{href:"/docs/auth",children:"auth method\ndocumentation"})," or the ",(0,a.jsx)(n.a,{href:"/docs/concepts/auth",children:"authentication\nconcepts"})," page."]}),"\n",(0,a.jsxs)(n.p,{children:["To authenticate to OpenBao as a user or machine, use the ",(0,a.jsx)(n.a,{href:"/docs/commands/login",children:(0,a.jsx)(n.code,{children:"bao login"})})," command instead. This command is for\ninteracting with the auth methods themselves, not authenticating to OpenBao."]}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.p,{children:"Enable an auth method:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell-session",children:"$ bao auth enable userpass\nSuccess! Enabled userpass auth method at: userpass/\n"})}),"\n",(0,a.jsx)(n.p,{children:"List all auth methods:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell-session",children:"$ bao auth list\nPath         Type        Description\n----         ----        -----------\ntoken/       token       token based credentials\nuserpass/    userpass    n/a\n"})}),"\n",(0,a.jsx)(n.p,{children:"Get help about how to authenticate to a particular auth method:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell-session",children:"$ bao auth help userpass/\nUsage: bao login -method=userpass [CONFIG K=V...]\n# ...\n"})}),"\n",(0,a.jsx)(n.p,{children:"Disable an auth method:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell-session",children:"$ bao auth disable userpass/\nSuccess! Disabled the auth method (if it existed) at: userpass/\n"})}),"\n",(0,a.jsx)(n.p,{children:"Tune an auth method:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell-session",children:"$ bao auth tune -max-lease-ttl=30m userpass/\nSuccess! Tuned the auth method at: userpass/\n"})}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Usage: bao auth <subcommand> [options] [args]\n\n  # ...\n\nSubcommands:\n    disable    Disables an auth method\n    enable     Enables a new auth method\n    help       Prints usage for an auth method\n    list       Lists enabled auth methods\n    tune       Tunes an auth method configuration\n"})}),"\n",(0,a.jsx)(n.p,{children:"For more information, examples, and usage about a subcommand, click on the name\nof the subcommand in the sidebar."})]})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>h});var a=s(96540);const t={},o=a.createContext(t);function i(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function h(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);