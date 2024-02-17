"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[124],{26589:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>h});var o=t(74848),r=t(28453);const s={layout:"docs",page_title:"Token Helpers",description:"The OpenBao CLI supports external token helpers that make retrieving, setting and erasing tokens simpler to use."},i="Token helpers",a={id:"commands/token-helper",title:"Token helpers",description:"The OpenBao CLI supports external token helpers that make retrieving, setting and erasing tokens simpler to use.",source:"@site/content/docs/commands/token-helper.mdx",sourceDirName:"commands",slug:"/commands/token-helper",permalink:"/openbao/docs/commands/token-helper",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/commands/token-helper.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"Token Helpers",description:"The OpenBao CLI supports external token helpers that make retrieving, setting and erasing tokens simpler to use."},sidebar:"tutorialSidebar",previous:{title:"token revoke",permalink:"/openbao/docs/commands/token/revoke"},next:{title:"transit",permalink:"/openbao/docs/commands/transit/"}},l={},h=[{value:"Configuration",id:"configuration",level:2},{value:"Developing a token helper",id:"developing-a-token-helper",level:2},{value:"Example token helper",id:"example-token-helper",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"token-helpers",children:"Token helpers"}),"\n",(0,o.jsx)(n.p,{children:"A token helper is an external program that OpenBao calls to save, retrieve or erase\na saved token. The token helper could be a very simple script or a more complex\nprogram depending on your needs. The interface to the external token helper is\nextremely simple."}),"\n",(0,o.jsxs)(n.p,{children:["By default the OpenBao CLI provides a built in tool for authenticating with any\nof the enabled authentication backends. Once authenticated, the CLI will store\nthe generated token on disk in the ",(0,o.jsx)(n.code,{children:"~/.vault-token"})," file. By using a token helper,\nthis default functionality can be changed."]}),"\n",(0,o.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsxs)(n.p,{children:["To configure a token helper, edit (or create) the file ",(0,o.jsx)(n.code,{children:"~/.openbao"})," and add a line similar to:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'token_helper = "/path/to/token/helper.sh"\n'})}),"\n",(0,o.jsx)(n.p,{children:"You will need to use the fully qualified path to the token helper script. The script should be executable."}),"\n",(0,o.jsx)(n.h2,{id:"developing-a-token-helper",children:"Developing a token helper"}),"\n",(0,o.jsxs)(n.p,{children:["The interface to a token helper is extremely simple: the script is passed with one argument that could be ",(0,o.jsx)(n.code,{children:"get"}),", ",(0,o.jsx)(n.code,{children:"store"})," or ",(0,o.jsx)(n.code,{children:"erase"}),". If the argument is ",(0,o.jsx)(n.code,{children:"get"}),", the script should do whatever work it needs to do to retrieve the stored token and then print the token to ",(0,o.jsx)(n.code,{children:"STDOUT"}),". If the argument is ",(0,o.jsx)(n.code,{children:"store"}),", OpenBao is asking you to store the token. Finally, if the argument is ",(0,o.jsx)(n.code,{children:"erase"}),", your program should erase the stored token."]}),"\n",(0,o.jsxs)(n.p,{children:["If your program succeeds, it should exit with status code 0. If it encounters an issue that prevents it from working, it should exit with some other status code. You should write a user-friendly error message to ",(0,o.jsx)(n.code,{children:"STDERR"}),". You should never write anything other than the token to ",(0,o.jsx)(n.code,{children:"STDOUT"}),", as OpenBao assumes whatever it gets on ",(0,o.jsx)(n.code,{children:"STDOUT"})," is the token."]}),"\n",(0,o.jsx)(n.h3,{id:"example-token-helper",children:"Example token helper"}),"\n",(0,o.jsxs)(n.p,{children:["This is an example token helper written in Ruby that stores and retrieves tokens in a json file called ",(0,o.jsx)(n.code,{children:"~/.openbao_tokens"}),". The key is the environment variable $VAULT_ADDR, this allows the OpenBao user to easily store and retrieve tokens from a number of different OpenBao servers."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ruby",children:"#!/usr/bin/env ruby\n\nrequire 'json'\n\nunless ENV['VAULT_ADDR']\n  STDERR.puts \"No VAULT_ADDR environment variable set. Set it and run me again!\"\n  exit 100\nend\n\nbegin\n  tokens = JSON.parse(File.read(\"#{ENV['HOME']}/.openbao_tokens\"))\nrescue Errno::ENOENT => e\n  # file doesn't exist so create a blank hash for it\n  tokens = {}\nend\n\ncase ARGV.first\nwhen 'get'\n  print tokens[ENV['VAULT_ADDR']] if tokens[ENV['VAULT_ADDR']]\n  exit 0\nwhen 'store'\n  tokens[ENV['VAULT_ADDR']] = STDIN.read\nwhen 'erase'\n  tokens.delete!(ENV['VAULT_ADDR'])\nend\n\nFile.open(\"#{ENV['HOME']}/.openbao_tokens\", 'w') { |file| file.write(tokens.to_json) }\n"})})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(96540);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);