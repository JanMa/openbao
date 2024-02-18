"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[599],{83359:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var t=n(74848),o=n(28453);const r={layout:"docs",page_title:"One-Time SSH Passwords (OTP) - SSH - Secrets Engines",description:"The One-Time SSH Password (OTP) SSH secrets engine type allows an OpenBao server\nto issue a One-Time Password every time a client wants to SSH into a remote\nhost using a helper command on the remote host to perform verification."},a="One-Time SSH passwords",i={id:"secrets/ssh/one-time-ssh-passwords",title:"One-Time SSH passwords",description:"The One-Time SSH Password (OTP) SSH secrets engine type allows an OpenBao server\nto issue a One-Time Password every time a client wants to SSH into a remote\nhost using a helper command on the remote host to perform verification.",source:"@site/content/docs/secrets/ssh/one-time-ssh-passwords.mdx",sourceDirName:"secrets/ssh",slug:"/secrets/ssh/one-time-ssh-passwords",permalink:"/openbao/docs/secrets/ssh/one-time-ssh-passwords",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/secrets/ssh/one-time-ssh-passwords.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"One-Time SSH Passwords (OTP) - SSH - Secrets Engines",description:"The One-Time SSH Password (OTP) SSH secrets engine type allows an OpenBao server\nto issue a One-Time Password every time a client wants to SSH into a remote\nhost using a helper command on the remote host to perform verification."},sidebar:"docs",previous:{title:"Signed SSH certificates",permalink:"/openbao/docs/secrets/ssh/signed-ssh-certificates"},next:{title:"TOTP secrets engine",permalink:"/openbao/docs/secrets/totp"}},c={},l=[{value:"Drawbacks",id:"drawbacks",level:3},{value:"Mount the secrets engine",id:"mount-the-secrets-engine",level:3},{value:"Create a role",id:"create-a-role",level:3},{value:"Create a credential",id:"create-a-credential",level:3},{value:"Establish an SSH session",id:"establish-an-ssh-session",level:3},{value:"Automate it!",id:"automate-it",level:3},{value:"Tutorial",id:"tutorial",level:2},{value:"API",id:"api",level:2}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"one-time-ssh-passwords",children:"One-Time SSH passwords"}),"\n",(0,t.jsx)(s.p,{children:"The One-Time SSH Password (OTP) SSH secrets engine type allows an OpenBao server to\nissue a One-Time Password every time a client wants to SSH into a remote host\nusing a helper command on the remote host to perform verification."}),"\n",(0,t.jsx)(s.p,{children:"An authenticated client requests credentials from the OpenBao server and, if\nauthorized, is issued an OTP. When the client establishes an SSH connection to\nthe desired remote host, the OTP used during SSH authentication is received by\nthe OpenBao helper, which then validates the OTP with the OpenBao server. The OpenBao\nserver then deletes this OTP, ensuring that it is only used once."}),"\n",(0,t.jsx)(s.p,{children:"Since the OpenBao server is contacted during SSH connection establishment, every\nlogin attempt and the correlating OpenBao lease information is logged to the audit\nsecrets engine."}),"\n",(0,t.jsxs)(s.p,{children:["See ",(0,t.jsx)(s.a,{href:"https://github.com/hashicorp/vault-ssh-helper",children:"Vault-SSH-Helper"})," for\ndetails on the helper."]}),"\n",(0,t.jsxs)(s.p,{children:["This page will show a quick start for this secrets engine. For detailed\ndocumentation on every path, use ",(0,t.jsx)(s.code,{children:"bao path-help"})," after mounting the secrets\nengine."]}),"\n",(0,t.jsx)(s.h3,{id:"drawbacks",children:"Drawbacks"}),"\n",(0,t.jsx)(s.p,{children:"The main concern with the OTP secrets engine type is the remote host's\nconnection to OpenBao; if compromised, an attacker could spoof the OpenBao server\nreturning a successful request. This risk can be mitigated by using TLS for the\nconnection to OpenBao and checking certificate validity; future enhancements to\nthis secrets engine may allow for extra security on top of what TLS provides."}),"\n",(0,t.jsx)(s.h3,{id:"mount-the-secrets-engine",children:"Mount the secrets engine"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell-session",children:"$ bao secrets enable ssh\nSuccessfully mounted 'ssh' at 'ssh'!\n"})}),"\n",(0,t.jsx)(s.h3,{id:"create-a-role",children:"Create a role"}),"\n",(0,t.jsxs)(s.p,{children:["Create a role with the ",(0,t.jsx)(s.code,{children:"key_type"})," parameter set to ",(0,t.jsx)(s.code,{children:"otp"}),". All of the machines\nrepresented by the role's CIDR list should have helper properly installed and\nconfigured."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell-session",children:"$ bao write ssh/roles/otp_key_role \\\n    key_type=otp \\\n    default_user=username \\\n    cidr_list=x.x.x.x/y,m.m.m.m/n\nSuccess! Data written to: ssh/roles/otp_key_role\n"})}),"\n",(0,t.jsx)(s.h3,{id:"create-a-credential",children:"Create a credential"}),"\n",(0,t.jsxs)(s.p,{children:["Create an OTP credential for an IP of the remote host that belongs to\n",(0,t.jsx)(s.code,{children:"otp_key_role"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell-session",children:"$ bao write ssh/creds/otp_key_role ip=x.x.x.x\nKey            \tValue\nlease_id       \tssh/creds/otp_key_role/73bbf513-9606-4bec-816c-5a2f009765a5\nlease_duration \t600\nlease_renewable\tfalse\nport           \t22\nusername       \tusername\nip             \tx.x.x.x\nkey            \t2f7e25a2-24c9-4b7b-0d35-27d5e5203a5c\nkey_type       \totp\n"})}),"\n",(0,t.jsx)(s.h3,{id:"establish-an-ssh-session",children:"Establish an SSH session"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell-session",children:"$ ssh username@x.x.x.x\nPassword: <Enter OTP>\nusername@x.x.x.x:~$\n"})}),"\n",(0,t.jsx)(s.h3,{id:"automate-it",children:"Automate it!"}),"\n",(0,t.jsx)(s.p,{children:"A single CLI command can be used to create a new OTP and invoke SSH with the\ncorrect parameters to connect to the host."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell-session",children:"$ bao ssh -role otp_key_role -mode otp username@x.x.x.x\nOTP for the session is `b4d47e1b-4879-5f4e-ce5c-7988d7986f37`\n[Note: Install `sshpass` to automate typing in OTP]\nPassword: <Enter OTP>\n"})}),"\n",(0,t.jsxs)(s.p,{children:["The OTP will be entered automatically using ",(0,t.jsx)(s.code,{children:"sshpass"})," if it is installed."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell-session",children:"$ bao ssh -role otp_key_role -mode otp -strict-host-key-checking=no username@x.x.x.x\nusername@<IP of remote host>:~$\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Note: ",(0,t.jsx)(s.code,{children:"sshpass"})," cannot handle host key checking. Host key checking can be\ndisabled by setting ",(0,t.jsx)(s.code,{children:"-strict-host-key-checking=no"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"tutorial",children:"Tutorial"}),"\n",(0,t.jsxs)(s.p,{children:["Refer to the ",(0,t.jsx)(s.a,{href:"/tutorials/secrets-management/ssh-otp",children:"SSH Secrets Engine: One-Time SSH\nPassword"})," tutorial\nto learn how to use the OpenBao SSH secrets engine to secure authentication and authorization for access to machines."]}),"\n",(0,t.jsx)(s.h2,{id:"api",children:"API"}),"\n",(0,t.jsxs)(s.p,{children:["The SSH secrets engine has a full HTTP API. Please see the\n",(0,t.jsx)(s.a,{href:"/api-docs/secret/ssh",children:"SSH secrets engine API"})," for more\ndetails."]})]})}function d(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>i});var t=n(96540);const o={},r=t.createContext(o);function a(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);