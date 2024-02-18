"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4491],{80263:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=s(74848),t=s(28453);const r={sidebar_label:"Signed Certificate",description:"The signed SSH certificates is the simplest and most powerful in terms of\nsetup complexity and in terms of being platform agnostic. When using this\ntype, an SSH CA signing key is generated or configured at the secrets engine's mount.\nThis key will be used to sign other SSH keys."},a="Signed SSH certificates",o={id:"secrets/ssh/signed-ssh-certificates",title:"Signed SSH certificates",description:"The signed SSH certificates is the simplest and most powerful in terms of\nsetup complexity and in terms of being platform agnostic. When using this\ntype, an SSH CA signing key is generated or configured at the secrets engine's mount.\nThis key will be used to sign other SSH keys.",source:"@site/content/docs/secrets/ssh/signed-ssh-certificates.mdx",sourceDirName:"secrets/ssh",slug:"/secrets/ssh/signed-ssh-certificates",permalink:"/openbao/docs/secrets/ssh/signed-ssh-certificates",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/secrets/ssh/signed-ssh-certificates.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Signed Certificate",description:"The signed SSH certificates is the simplest and most powerful in terms of\nsetup complexity and in terms of being platform agnostic. When using this\ntype, an SSH CA signing key is generated or configured at the secrets engine's mount.\nThis key will be used to sign other SSH keys."},sidebar:"docs",previous:{title:"Overview",permalink:"/openbao/docs/secrets/ssh/"},next:{title:"SSH OTP",permalink:"/openbao/docs/secrets/ssh/one-time-ssh-passwords"}},l={},c=[{value:"Client key signing",id:"client-key-signing",level:2},{value:"Signing key &amp; role configuration",id:"signing-key--role-configuration",level:3},{value:"Client SSH authentication",id:"client-ssh-authentication",level:3},{value:"Host key signing",id:"host-key-signing",level:2},{value:"Signing key configuration",id:"signing-key-configuration",level:3},{value:"Client-Side host verification",id:"client-side-host-verification",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Name is not a listed principal",id:"name-is-not-a-listed-principal",level:3},{value:"No prompt after login",id:"no-prompt-after-login",level:3},{value:"No port forwarding",id:"no-port-forwarding",level:3},{value:"No x11 forwarding",id:"no-x11-forwarding",level:3},{value:"No agent forwarding",id:"no-agent-forwarding",level:3},{value:"Key comments",id:"key-comments",level:3},{value:"Known issues",id:"known-issues",level:3},{value:"API",id:"api",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"signed-ssh-certificates",children:"Signed SSH certificates"}),"\n",(0,i.jsx)(n.p,{children:"The signed SSH certificates is the simplest and most powerful in terms of setup\ncomplexity and in terms of being platform agnostic. By leveraging OpenBao's\npowerful CA capabilities and functionality built into OpenSSH, clients can SSH\ninto target hosts using their own local SSH keys."}),"\n",(0,i.jsxs)(n.p,{children:['In this section, the term "',(0,i.jsx)(n.strong,{children:"client"}),'" refers to the person or machine\nperforming the SSH operation. The "',(0,i.jsx)(n.strong,{children:"host"}),'" refers to the target machine. If\nthis is confusing, substitute "client" with "user".']}),"\n",(0,i.jsxs)(n.p,{children:["This page will show a quick start for this secrets engine. For detailed documentation\non every path, use ",(0,i.jsx)(n.code,{children:"bao path-help"})," after mounting the secrets engine."]}),"\n",(0,i.jsx)(n.h2,{id:"client-key-signing",children:"Client key signing"}),"\n",(0,i.jsx)(n.p,{children:"Before a client can request their SSH key be signed, the OpenBao SSH secrets engine must\nbe configured. Usually an OpenBao administrator or security team performs these\nsteps. It is also possible to automate these actions using a configuration\nmanagement tool like Chef, Puppet, Ansible, or Salt."}),"\n",(0,i.jsx)(n.h3,{id:"signing-key--role-configuration",children:"Signing key & role configuration"}),"\n",(0,i.jsx)(n.p,{children:"The following steps are performed in advance by an OpenBao administrator, security\nteam, or configuration management tooling."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Mount the secrets engine. Like all secrets engines in OpenBao, the SSH secrets engine\nmust be mounted before use."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"$ bao secrets enable -path=ssh-client-signer ssh\nSuccessfully mounted 'ssh' at 'ssh-client-signer'!\n"})}),"\n",(0,i.jsxs)(n.p,{children:['This enables the SSH secrets engine at the path "ssh-client-signer". It is\npossible to mount the same secrets engine multiple times using different\n',(0,i.jsx)(n.code,{children:"-path"}),' arguments. The name "ssh-client-signer" is not special - it can be\nany name, but this documentation will assume "ssh-client-signer".']}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Configure OpenBao with a CA for signing client keys using the ",(0,i.jsx)(n.code,{children:"/config/ca"}),"\nendpoint. If you do not have an internal CA, OpenBao can generate a keypair for\nyou."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"$ bao write ssh-client-signer/config/ca generate_signing_key=true\nKey             Value\n---             -----\npublic_key      ssh-rsa AAAAB3NzaC1yc2EA...\n"})}),"\n",(0,i.jsx)(n.p,{children:"If you already have a keypair, specify the public and private key parts as\npart of the payload:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'$ bao write ssh-client-signer/config/ca \\\n    private_key="..." \\\n    public_key="..."\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Regardless of whether it is generated or uploaded, the client signer public\nkey is accessible via the API at the ",(0,i.jsx)(n.code,{children:"/public_key"})," endpoint or the CLI (see next step)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Add the public key to all target host's SSH configuration. This process can\nbe manual or automated using a configuration management tool. The public key is\naccessible via the API and does not require authentication."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"$ curl -o /etc/ssh/trusted-user-ca-keys.pem http://127.0.0.1:8200/v1/ssh-client-signer/public_key\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"$ bao read -field=public_key ssh-client-signer/config/ca > /etc/ssh/trusted-user-ca-keys.pem\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Add the path where the public key contents are stored to the SSH\nconfiguration file as the ",(0,i.jsx)(n.code,{children:"TrustedUserCAKeys"})," option."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"# /etc/ssh/sshd_config\n# ...\nTrustedUserCAKeys /etc/ssh/trusted-user-ca-keys.pem\n"})}),"\n",(0,i.jsx)(n.p,{children:"Restart the SSH service to pick up the changes."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create a named OpenBao role for signing client keys."}),"\n",(0,i.jsxs)(n.p,{children:["Because of the way some SSH certificate features are implemented, options\nare passed as a map. The following example adds the ",(0,i.jsx)(n.code,{children:"permit-pty"})," extension\nto the certificate, and allows the user to specify their own values for ",(0,i.jsx)(n.code,{children:"permit-pty"})," and ",(0,i.jsx)(n.code,{children:"permit-port-forwarding"}),"\nwhen requesting the certificate."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'$ bao write ssh-client-signer/roles/my-role -<<"EOH"\n{\n  "algorithm_signer": "rsa-sha2-256",\n  "allow_user_certificates": true,\n  "allowed_users": "*",\n  "allowed_extensions": "permit-pty,permit-port-forwarding",\n  "default_extensions": {\n    "permit-pty": ""\n  },\n  "key_type": "ca",\n  "default_user": "ubuntu",\n  "ttl": "30m0s"\n}\nEOH\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"client-ssh-authentication",children:"Client SSH authentication"}),"\n",(0,i.jsx)(n.p,{children:"The following steps are performed by the client (user) that wants to\nauthenticate to machines managed by OpenBao. These commands are usually run from\nthe client's local workstation."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Locate or generate the SSH public key. Usually this is ",(0,i.jsx)(n.code,{children:"~/.ssh/id_rsa.pub"}),".\nIf you do not have an SSH keypair, generate one:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'$ ssh-keygen -t rsa -C "user@example.com"\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Ask OpenBao to sign your ",(0,i.jsx)(n.strong,{children:"public key"}),". This file usually ends in ",(0,i.jsx)(n.code,{children:".pub"})," and\nthe contents begin with ",(0,i.jsx)(n.code,{children:"ssh-rsa ..."}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"$ bao write ssh-client-signer/sign/my-role \\\n    public_key=@$HOME/.ssh/id_rsa.pub\n\nKey             Value\n---             -----\nserial_number   c73f26d2340276aa\nsigned_key      ssh-rsa-cert-v01@openssh.com AAAAHHNzaC1...\n"})}),"\n",(0,i.jsx)(n.p,{children:"The result will include the serial and the signed key. This signed key is\nanother public key."}),"\n",(0,i.jsx)(n.p,{children:"To customize the signing options, use a JSON payload:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'$ bao write ssh-client-signer/sign/my-role -<<"EOH"\n{\n  "public_key": "ssh-rsa AAA...",\n  "valid_principals": "my-user",\n  "key_id": "custom-prefix",\n  "extensions": {\n    "permit-pty": "",\n    "permit-port-forwarding": ""\n  }\n}\nEOH\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Save the resulting signed, public key to disk. Limit permissions as needed."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"$ bao write -field=signed_key ssh-client-signer/sign/my-role \\\n    public_key=@$HOME/.ssh/id_rsa.pub > signed-cert.pub\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you are saving the certificate directly beside your SSH keypair, suffix\nthe name with ",(0,i.jsx)(n.code,{children:"-cert.pub"})," (",(0,i.jsx)(n.code,{children:"~/.ssh/id_rsa-cert.pub"}),"). With this naming\nscheme, OpenSSH will automatically use it during authentication."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"(Optional) View enabled extensions, principals, and metadata of the signed\nkey."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"$ ssh-keygen -Lf ~/.ssh/signed-cert.pub\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["SSH into the host machine using the signed key. You must supply both the\nsigned public key from OpenBao ",(0,i.jsx)(n.strong,{children:"and"})," the corresponding private key as\nauthentication to the SSH call."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"$ ssh -i signed-cert.pub -i ~/.ssh/id_rsa username@10.0.23.5\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"host-key-signing",children:"Host key signing"}),"\n",(0,i.jsx)(n.p,{children:"For an added layer of security, we recommend enabling host key signing. This is\nused in conjunction with client key signing to provide an additional integrity\nlayer. When enabled, the SSH agent will verify the target host is valid and\ntrusted before attempting to SSH. This will reduce the probability of a user\naccidentally SSHing into an unmanaged or malicious machine."}),"\n",(0,i.jsx)(n.h3,{id:"signing-key-configuration",children:"Signing key configuration"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Mount the secrets engine. For the most security, mount at a different path from the\nclient signer."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"$ bao secrets enable -path=ssh-host-signer ssh\nSuccessfully mounted 'ssh' at 'ssh-host-signer'!\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Configure OpenBao with a CA for signing host keys using the ",(0,i.jsx)(n.code,{children:"/config/ca"}),"\nendpoint. If you do not have an internal CA, OpenBao can generate a keypair for\nyou."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"$ bao write ssh-host-signer/config/ca generate_signing_key=true\nKey             Value\n---             -----\npublic_key      ssh-rsa AAAAB3NzaC1yc2EA...\n"})}),"\n",(0,i.jsx)(n.p,{children:"If you already have a keypair, specify the public and private key parts as\npart of the payload:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'$ bao write ssh-host-signer/config/ca \\\n    private_key="..." \\\n    public_key="..."\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Regardless of whether it is generated or uploaded, the host signer public\nkey is accessible via the API at the ",(0,i.jsx)(n.code,{children:"/public_key"})," endpoint."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Extend host key certificate TTLs."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"$ bao secrets tune -max-lease-ttl=87600h ssh-host-signer\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create a role for signing host keys. Be sure to fill in the list of allowed\ndomains, set ",(0,i.jsx)(n.code,{children:"allow_bare_domains"}),", or both."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'$ bao write ssh-host-signer/roles/hostrole \\\n    key_type=ca \\\n    algorithm_signer=rsa-sha2-256 \\\n    ttl=87600h \\\n    allow_host_certificates=true \\\n    allowed_domains="localdomain,example.com" \\\n    allow_subdomains=true\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Sign the host's SSH public key."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"$ bao write ssh-host-signer/sign/hostrole \\\n    cert_type=host \\\n    public_key=@/etc/ssh/ssh_host_rsa_key.pub\nKey             Value\n---             -----\nserial_number   3746eb17371540d9\nsigned_key      ssh-rsa-cert-v01@openssh.com AAAAHHNzaC1y...\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Set the resulting signed certificate as ",(0,i.jsx)(n.code,{children:"HostCertificate"})," in the SSH\nconfiguration on the host machine."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"$ bao write -field=signed_key ssh-host-signer/sign/hostrole \\\n    cert_type=host \\\n    public_key=@/etc/ssh/ssh_host_rsa_key.pub > /etc/ssh/ssh_host_rsa_key-cert.pub\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Set permissions on the certificate to be ",(0,i.jsx)(n.code,{children:"0640"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"$ chmod 0640 /etc/ssh/ssh_host_rsa_key-cert.pub\n"})}),"\n",(0,i.jsx)(n.p,{children:"Add host key and host certificate to the SSH configuration file."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"# /etc/ssh/sshd_config\n# ...\n\n# For client keys\nTrustedUserCAKeys /etc/ssh/trusted-user-ca-keys.pem\n\n# For host keys\nHostKey /etc/ssh/ssh_host_rsa_key\nHostCertificate /etc/ssh/ssh_host_rsa_key-cert.pub\n"})}),"\n",(0,i.jsx)(n.p,{children:"Restart the SSH service to pick up the changes."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"client-side-host-verification",children:"Client-Side host verification"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Retrieve the host signing CA public key to validate the host signature of\ntarget machines."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"$ curl http://127.0.0.1:8200/v1/ssh-host-signer/public_key\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"$ bao read -field=public_key ssh-host-signer/config/ca\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Add the resulting public key to the ",(0,i.jsx)(n.code,{children:"known_hosts"})," file with authority."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"# ~/.ssh/known_hosts\n@cert-authority *.example.com ssh-rsa AAAAB3NzaC1yc2EAAA...\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"SSH into target machines as usual."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,i.jsxs)(n.p,{children:["When initially configuring this type of key signing, enable ",(0,i.jsx)(n.code,{children:"VERBOSE"})," SSH\nlogging to help annotate any errors in the log."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"# /etc/ssh/sshd_config\n# ...\nLogLevel VERBOSE\n"})}),"\n",(0,i.jsx)(n.p,{children:"Restart SSH after making these changes."}),"\n",(0,i.jsxs)(n.p,{children:["By default, SSH logs to ",(0,i.jsx)(n.code,{children:"/var/log/auth.log"}),", but so do many other things. To\nextract just the SSH logs, use the following:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:'$ tail -f /var/log/auth.log | grep --line-buffered "sshd"\n'})}),"\n",(0,i.jsx)(n.p,{children:"If you are unable to make a connection to the host, the SSH server logs may\nprovide guidance and insights."}),"\n",(0,i.jsx)(n.h3,{id:"name-is-not-a-listed-principal",children:"Name is not a listed principal"}),"\n",(0,i.jsxs)(n.p,{children:["If the ",(0,i.jsx)(n.code,{children:"auth.log"})," displays the following messages:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"# /var/log/auth.log\nkey_cert_check_authority: invalid certificate\nCertificate invalid: name is not a listed principal\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The certificate does not permit the username as a listed principal for\nauthenticating to the system. This is most likely due to an OpenSSH bug (see\n",(0,i.jsx)(n.a,{href:"#known-issues",children:"known issues"})," for more information). This bug does not respect\nthe ",(0,i.jsx)(n.code,{children:"allowed_users"}),' option value of "*". Here are ways to work around this\nissue:']}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Set ",(0,i.jsx)(n.code,{children:"default_user"})," in the role. If you are always authenticating as the same\nuser, set the ",(0,i.jsx)(n.code,{children:"default_user"})," in the role to the username you are SSHing into the\ntarget machine:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'$ bao write ssh/roles/my-role -<<"EOH"\n{\n  "default_user": "YOUR_USER",\n  // ...\n}\nEOH\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Set ",(0,i.jsx)(n.code,{children:"valid_principals"})," during signing. In situations where multiple users may\nbe authenticating to SSH vian OpenBao, set the list of valid principles during key\nsigning to include the current username:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'$ bao write ssh-client-signer/sign/my-role -<<"EOH"\n{\n  "valid_principals": "my-user"\n  // ...\n}\nEOH\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"no-prompt-after-login",children:"No prompt after login"}),"\n",(0,i.jsxs)(n.p,{children:["If you do not see a prompt after authenticating to the host machine, the signed\ncertificate may not have the ",(0,i.jsx)(n.code,{children:"permit-pty"})," extension. There are two ways to add\nthis extension to the signed certificate."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"As part of the role creation"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'$ bao write ssh-client-signer/roles/my-role -<<"EOH"\n{\n  "default_extensions": {\n    "permit-pty": ""\n  }\n  // ...\n}\nEOH\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"As part of the signing operation itself:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'$ bao write ssh-client-signer/sign/my-role -<<"EOH"\n{\n  "extensions": {\n    "permit-pty": ""\n  }\n  // ...\n}\nEOH\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"no-port-forwarding",children:"No port forwarding"}),"\n",(0,i.jsxs)(n.p,{children:["If port forwarding from the guest to the host is not working, the signed\ncertificate may not have the ",(0,i.jsx)(n.code,{children:"permit-port-forwarding"})," extension. Add the\nextension as part of the role creation or signing process to enable port\nforwarding. See ",(0,i.jsx)(n.a,{href:"#no-prompt-after-login",children:"no prompt after login"})," for examples."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "default_extensions": {\n    "permit-port-forwarding": ""\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"no-x11-forwarding",children:"No x11 forwarding"}),"\n",(0,i.jsxs)(n.p,{children:["If X11 forwarding from the guest to the host is not working, the signed\ncertificate may not have the ",(0,i.jsx)(n.code,{children:"permit-X11-forwarding"})," extension. Add the\nextension as part of the role creation or signing process to enable X11\nforwarding. See ",(0,i.jsx)(n.a,{href:"#no-prompt-after-login",children:"no prompt after login"})," for examples."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "default_extensions": {\n    "permit-X11-forwarding": ""\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"no-agent-forwarding",children:"No agent forwarding"}),"\n",(0,i.jsxs)(n.p,{children:["If agent forwarding from the guest to the host is not working, the signed\ncertificate may not have the ",(0,i.jsx)(n.code,{children:"permit-agent-forwarding"})," extension. Add the\nextension as part of the role creation or signing process to enable agent\nforwarding. See ",(0,i.jsx)(n.a,{href:"#no-prompt-after-login",children:"no prompt after login"})," for examples."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "default_extensions": {\n    "permit-agent-forwarding": ""\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"key-comments",children:"Key comments"}),"\n",(0,i.jsxs)(n.p,{children:["There are additional steps needed to preserve ",(0,i.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc4716#section-3.3.2",children:"comment attributes"}),"\nin keys which ought to be considered if they are required. Private and public\nkey may have comments applied to them and for example where ",(0,i.jsx)(n.code,{children:"ssh-keygen"})," is used\nwith its ",(0,i.jsx)(n.code,{children:"-C"})," parameter - similar to:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:'ssh-keygen -C "...Comments" -N "" -t rsa -b 4096 -f host-ca\n'})}),"\n",(0,i.jsx)(n.p,{children:"Adapted key values containing comments must be provided with the key related\nparameters as per the OpenBao CLI and API steps demonstrated below."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-extension",children:"# Using CLI:\nbao secrets enable -path=hosts-ca ssh\nKEY_PRI=$(cat ~/.ssh/id_rsa | sed -z 's/\\n/\\\\n/g')\nKEY_PUB=$(cat ~/.ssh/id_rsa.pub | sed -z 's/\\n/\\\\n/g')\n# Create / update keypair in OpenBao\nbao write ssh-client-signer/config/ca \\\n  generate_signing_key=false \\\n  private_key=\"${KEY_PRI}\" \\\n  public_key=\"${KEY_PUB}\"\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-extension",children:'# Using API:\ncurl -X POST -H "X-Vault-Token: ..." -d \'{"type":"ssh"}\' http://127.0.0.1:8200/v1/sys/mounts/hosts-ca\nKEY_PRI=$(cat ~/.ssh/id_rsa | sed -z \'s/\\n/\\\\n/g\')\nKEY_PUB=$(cat ~/.ssh/id_rsa.pub | sed -z \'s/\\n/\\\\n/g\')\ntee payload.json <<EOF\n{\n  "generate_signing_key" : false,\n  "private_key"          : "${KEY_PRI}",\n  "public_key"           : "${KEY_PUB}"\n}\nEOF\n# Create / update keypair in OpenBao\ncurl -X POST -H "X-Vault-Token: ..." -d @payload.json http://127.0.0.1:8200/v1/hosts-ca/config/ca\n'})}),"\n",(0,i.jsxs)(n.p,{children:["~> ",(0,i.jsx)(n.strong,{children:"IMPORTANT:"})," Do NOT add a private key password since OpenBao can't decrypt it.\nDestroy the keypair and ",(0,i.jsx)(n.code,{children:"payload.json"})," from your hosts immediately after they have been confirmed as successfully uploaded."]}),"\n",(0,i.jsx)(n.h3,{id:"known-issues",children:"Known issues"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["On SELinux-enforcing systems, you may need to adjust related types so that the\nSSH daemon is able to read it. For example, adjust the signed host certificate\nto be an ",(0,i.jsx)(n.code,{children:"sshd_key_t"})," type."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"On some versions of SSH, you may get the following error:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"no separate private key for certificate\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This is a bug introduced in OpenSSH version 7.2 and fixed in 7.5. See\n",(0,i.jsx)(n.a,{href:"https://bugzilla.mindrot.org/show_bug.cgi?id=2617",children:"OpenSSH bug 2617"})," for\ndetails."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"On some versions of SSH, you may get the following error on target host:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"userauth_pubkey: certificate signature algorithm ssh-rsa: signature algorithm not supported [preauth]\n"})}),"\n",(0,i.jsx)(n.p,{children:"Fix is to add below line to /etc/ssh/sshd_config"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"CASignatureAlgorithms ^ssh-rsa\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ssh-rsa algorithm is no longer supported in ",(0,i.jsx)(n.a,{href:"https://www.openssh.com/txt/release-8.2",children:"OpenSSH 8.2"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,i.jsxs)(n.p,{children:["The SSH secrets engine has a full HTTP API. Please see the\n",(0,i.jsx)(n.a,{href:"/api-docs/secret/ssh",children:"SSH secrets engine API"})," for more\ndetails."]})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var i=s(96540);const t={},r=i.createContext(t);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);