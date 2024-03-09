"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9872],{52179:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>h});var i=s(74848),t=s(28453);const o={description:'The "ssh" command establishes an SSH connection with the target machine using\ncredentials obtained from an SSH secrets engine.'},c="ssh",r={id:"commands/ssh",title:"ssh",description:'The "ssh" command establishes an SSH connection with the target machine using\ncredentials obtained from an SSH secrets engine.',source:"@site/content/docs/commands/ssh.mdx",sourceDirName:"commands",slug:"/commands/ssh",permalink:"/openbao/docs/commands/ssh",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/commands/ssh.mdx",tags:[],version:"current",frontMatter:{description:'The "ssh" command establishes an SSH connection with the target machine using\ncredentials obtained from an SSH secrets engine.'},sidebar:"docs",previous:{title:"server",permalink:"/openbao/docs/commands/server"},next:{title:"status",permalink:"/openbao/docs/commands/status"}},a={},h=[{value:"Examples",id:"examples",level:2},{value:"Usage",id:"usage",level:2},{value:"Output options",id:"output-options",level:3},{value:"SSH options",id:"ssh-options",level:3},{value:"CA mode options",id:"ca-mode-options",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"ssh",children:"ssh"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"ssh"})," command establishes an SSH connection with the target machine."]}),"\n",(0,i.jsx)(n.p,{children:"This command uses one of the SSH secrets engines to authenticate and\nautomatically establish an SSH connection to a host. This operation requires\nthat the SSH secrets engine is mounted and configured."}),"\n",(0,i.jsxs)(n.p,{children:["The user must have ",(0,i.jsx)(n.code,{children:"ssh"}),' installed locally - this command will exec out to it\nwith the proper commands to provide an "SSH-like" consistent experience.']}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.p,{children:["SSH using the OTP mode (requires ",(0,i.jsx)(n.a,{href:"https://linux.die.net/man/1/sshpass",children:"sshpass"}),"\nfor full automation):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:"$ bao ssh -mode=otp -role=my-role user@1.2.3.4\n"})}),"\n",(0,i.jsx)(n.p,{children:"SSH using the CA mode:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:"$ bao ssh -mode=ca -role=my-role user@1.2.3.4\n"})}),"\n",(0,i.jsx)(n.p,{children:"SSH using CA mode with host key verification:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:"$ bao ssh \\\n    -mode=ca \\\n    -role=my-role \\\n    -host-key-mount-point=host-signer \\\n    -host-key-hostnames=example.com \\\n    user@example.com\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For step-by-step guides and instructions for each of the available SSH\nauth methods, please see the corresponding ",(0,i.jsx)(n.a,{href:"/docs/secrets/ssh",children:"SSH secrets\nengine"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(n.p,{children:["The following flags are available in addition to the ",(0,i.jsx)(n.a,{href:"/docs/commands",children:"standard set of\nflags"})," included on all commands."]}),"\n",(0,i.jsx)(n.h3,{id:"output-options",children:"Output options"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-field"})," ",(0,i.jsx)(n.code,{children:'(string: "")'})," - Print only the field with the given name. Specifying\nthis option will take precedence over other formatting directives. The result\nwill not have a trailing newline making it ideal for piping to other processes."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-format"})," ",(0,i.jsx)(n.code,{children:'(string: "table")'}),' - Print the output in the given format. Valid\nformats are "table", "json", or "yaml". This can also be specified via the\n',(0,i.jsx)(n.code,{children:"VAULT_FORMAT"})," environment variable."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"ssh-options",children:"SSH options"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-mode"})," ",(0,i.jsx)(n.code,{children:'(string: "")'}),' - Name of the authentication mode (ca, dynamic, otp)."']}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-mount-point"})," ",(0,i.jsx)(n.code,{children:'(string: "ssh/")'})," - Mount point to the SSH secrets engine."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-no-exec"})," ",(0,i.jsx)(n.code,{children:"(bool: false)"})," - Print the generated credentials, but do not\nestablish a connection."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-role"})," ",(0,i.jsx)(n.code,{children:'(string: "")'})," - Name of the role to use to generate the key."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-strict-host-key-checking"})," ",(0,i.jsx)(n.code,{children:'(string: "")'}),' - Value to use for the SSH\nconfiguration option "StrictHostKeyChecking". The default is ask. This can\nalso be specified via the ',(0,i.jsx)(n.code,{children:"VAULT_SSH_STRICT_HOST_KEY_CHECKING"})," environment\nvariable."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-user-known-hosts-file"})," ",(0,i.jsx)(n.code,{children:'(string: "~/.ssh/known_hosts")'}),' - Value to use for\nthe SSH configuration option "UserKnownHostsFile". This can also be specified\nvia the ',(0,i.jsx)(n.code,{children:"VAULT_SSH_USER_KNOWN_HOSTS_FILE"})," environment variable."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"ca-mode-options",children:"CA mode options"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-host-key-hostnames"})," ",(0,i.jsx)(n.code,{children:'(string: "*")'})," - List of hostnames to delegate for the\nCA. The default value allows all domains and IPs. This is specified as a\ncomma-separated list of values. This can also be specified via the\n",(0,i.jsx)(n.code,{children:"VAULT_SSH_HOST_KEY_HOSTNAMES"})," environment variable."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-host-key-mount-point"})," ",(0,i.jsx)(n.code,{children:'(string: "")'}),' - Mount point to the SSH\nsecrets engine where host keys are signed. When given a value, OpenBao will\ngenerate a custom "known_hosts" file with delegation to the CA at the provided\nmount point to verify the SSH connection\'s host keys against the provided CA.\nBy default, host keys are validated against the user\'s local "known_hosts"\nfile. This flag forces strict key host checking and ignores a custom user\nknown hosts file. This can also be specified via the\n',(0,i.jsx)(n.code,{children:"VAULT_SSH_HOST_KEY_MOUNT_POINT"})," environment variable."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-private-key-path"})," ",(0,i.jsx)(n.code,{children:'(string: "~/.ssh/id_rsa")'})," - Path to the SSH private key\nto use for authentication. This must be the corresponding private key to\n",(0,i.jsx)(n.code,{children:"-public-key-path"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-public-key-path"})," ",(0,i.jsx)(n.code,{children:'(string: "~/.ssh/id_rsa.pub")'})," - Path to the SSH public\nkey to send to OpenBao for signing."]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>r});var i=s(96540);const t={},o=i.createContext(t);function c(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);