"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9630],{59818:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var r=i(74848),s=i(28453);const t={sidebar_label:"Kerberos",description:"The Kerberos auth method allows automated authentication of Kerberos entities."},o="Kerberos auth method",a={id:"auth/kerberos",title:"Kerberos auth method",description:"The Kerberos auth method allows automated authentication of Kerberos entities.",source:"@site/content/docs/auth/kerberos.mdx",sourceDirName:"auth",slug:"/auth/kerberos",permalink:"/docs/auth/kerberos",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/auth/kerberos.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Kerberos",description:"The Kerberos auth method allows automated authentication of Kerberos entities."},sidebar:"docs",previous:{title:"secureauth",permalink:"/docs/auth/jwt/oidc-providers/secureauth"},next:{title:"Kubernetes",permalink:"/docs/auth/kubernetes"}},h={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Identify the malfunctioning piece",id:"identify-the-malfunctioning-piece",level:3},{value:"Build clear steps to reproduce the problem",id:"build-clear-steps-to-reproduce-the-problem",level:3},{value:"Additional troubleshooting resources",id:"additional-troubleshooting-resources",level:3},{value:"API",id:"api",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"kerberos-auth-method",children:"Kerberos auth method"}),"\n",(0,r.jsxs)(n.p,{children:["~> ",(0,r.jsx)(n.strong,{children:"Note"}),": This engine can use external X.509 certificates as part of TLS or signature validation.\nVerifying signatures against X.509 certificates that use SHA-1 is deprecated and is no longer\nusable without a workaround. See the\n",(0,r.jsx)(n.a,{href:"/docs/deprecation/faq#q-what-is-the-impact-of-removing-support-for-x-509-certificates-with-signatures-that-use-sha-1",children:"deprecation FAQ"}),"\nfor more information."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"kerberos"})," auth method provides an automated mechanism to retrieve\nan OpenBao token for Kerberos entities."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://web.mit.edu/kerberos/",children:"Kerberos"})," is a network authentication\nprotocol invented by MIT in the 1980s. Its name is inspired by Cerberus,\nthe three-headed hound of Hades from Greek mythology. The three heads\nrefer to Kerberos' three entities - an authentication server, a ticket\ngranting server, and a principals database. Kerberos underlies\nauthentication in Active Directory, and its purpose is to ",(0,r.jsx)(n.em,{children:"distribute"}),"\na network's authentication workload."]}),"\n",(0,r.jsxs)(n.p,{children:["OpenBao's Kerberos auth method was originally written by the folks at\n",(0,r.jsx)(n.a,{href:"https://github.com/wintoncode",children:"Winton"}),", to whom we owe a special thanks\nfor both originally building the plugin, and for collaborating to bring\nit into HashiCorp's maintenance."]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.p,{children:["Kerberos is a very hands-on auth method. Other auth methods like\n",(0,r.jsx)(n.a,{href:"/docs/auth/ldap",children:"LDAP"})," only require\na cursory amount of knowledge for configuration and use.\nKerberos, on the other hand, is best used by people already familiar\nwith it. We recommend that you use simpler authentication methods if\nyour use case is achievable through them. If not, we recommend that\nbefore approaching Kerberos, you become familiar with its fundamentals."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.youtube.com/watch?v=kp5d8Yv3-0c",children:"MicroNugget: How Kerberos Works in Windows Active Directory"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://web.mit.edu/kerberos/",children:"MIT's Kerberos Documentation"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.amazon.com/Kerberos-Definitive-Guide-ebook-dp-B004P1J81C/dp/B004P1J81C/ref=mt_kindle?_encoding=UTF8&me=&qid=1573685442",children:"Kerberos: The Definitive Guide"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Regardless of how you gain your knowledge, before using this auth method,\nensure you are comfortable with Kerberos' high-level architecture, and\nensure you've gone through the exercise of:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Creating a valid ",(0,r.jsx)(n.code,{children:"krb5.conf"})," file"]}),"\n",(0,r.jsxs)(n.li,{children:["Creating a valid ",(0,r.jsx)(n.code,{children:"keytab"})," file"]}),"\n",(0,r.jsxs)(n.li,{children:["Authenticating to your domain server with your ",(0,r.jsx)(n.code,{children:"keytab"})," file using ",(0,r.jsx)(n.code,{children:"kinit"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"With that knowledge in hand, and with an environment that's already tested\nand confirmed working, you will be ready to use Kerberos with OpenBao."}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Enable Kerberos authentication in OpenBao:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell-session",children:"$ bao auth enable \\\n    -passthrough-request-headers=Authorization \\\n    -allowed-response-headers=www-authenticate \\\n    kerberos\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Create a ",(0,r.jsx)(n.code,{children:"keytab"})," for the Kerberos plugin (this keytab is used by the OpenBao server itself, another keytab should be generated for login purposes):"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell-session",children:"$ ktutil\nktutil:  addent -password -p your_service_account@REALM.COM -e aes256-cts -k 1\nPassword for your_service_account@REALM.COM:\nktutil:  list -e\nslot KVNO Principal\n---- ---- ---------------------------------------------------------------------\n  1    1            your_service_account@REALM.COM (aes256-cts-hmac-sha1-96)\nktutil:  wkt openbao.keytab\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The KVNO (",(0,r.jsx)(n.code,{children:"-k 1"}),") should match the KVNO of the service account. An error will show in the OpenBao logs if this is incorrect."]}),"\n",(0,r.jsxs)(n.p,{children:["Different encryption types can also be added to the ",(0,r.jsx)(n.code,{children:"keytab"}),", for example ",(0,r.jsx)(n.code,{children:"-e rc4-hmac"})," with additional ",(0,r.jsx)(n.code,{children:"addent"})," commands."]}),"\n",(0,r.jsx)(n.p,{children:"Then base64 encode it:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell-session",children:"$ base64 openbao.keytab > openbao.keytab.base64\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Configure the Kerberos auth method with the ",(0,r.jsx)(n.code,{children:"keytab"})," and\nentry name that will be used to verify inbound login\nrequests:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell-session",children:'$ bao write auth/kerberos/config \\\n    keytab=@openbao.keytab.base64 \\\n    service_account="openbao_svc"\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Configure the Kerberos auth method to communicate with\nLDAP using the service account configured above. This is\na sample LDAP configuration. Yours will vary. Ensure you've\nfirst tested your configuration from the OpenBao server using\na tool like ",(0,r.jsx)(n.code,{children:"ldapsearch"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell-session",children:'$ bao write auth/kerberos/config/ldap \\\n    binddn=openbao_svc@MATRIX.LAN \\\n    bindpass=$OPENBAO_SVC_PASSWORD \\\n    groupattr=sAMAccountName \\\n    groupdn="DC=MATRIX,DC=LAN" \\\n    groupfilter="(&(objectClass=group)(member:1.2.840.113556.1.4.1941:={{.UserDN}}))" \\\n    userdn="CN=Users,DC=MATRIX,DC=LAN" \\\n    userattr=sAMAccountName \\\n    upndomain=MATRIX.LAN \\\n    url=ldaps://somewhere.foo\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The LDAP above relies upon the same code as the LDAP auth method.\nSee ",(0,r.jsx)(n.a,{href:"/docs/auth/ldap",children:"its documentation"}),"\nfor further discussion of available parameters."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Configure the OpenBao policies that should be granted to those\nwho successfully authenticate based on their LDAP group membership.\nSince this is identical to the LDAP auth method, see\n",(0,r.jsx)(n.a,{href:"/docs/auth/ldap#group-membership-resolution",children:"Group Membership Resolution"}),"\nand ",(0,r.jsx)(n.a,{href:"/docs/auth/ldap#ldap-group-policy-mapping",children:"LDAP Group -> Policy Mapping"}),"\nfor further discussion."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell-session",children:"$ bao write auth/kerberos/groups/engineering-team \\\n    policies=engineers\n"})}),"\n",(0,r.jsx)(n.p,{children:'The above group grants the "engineers" policy to those who authenticate\nvia Kerberos and are found to be members of the "engineering-team" LDAP\ngroup.'}),"\n",(0,r.jsx)(n.h2,{id:"authentication",children:"Authentication"}),"\n",(0,r.jsxs)(n.p,{children:["From a client machine with a valid ",(0,r.jsx)(n.code,{children:"krb5.conf"})," and ",(0,r.jsx)(n.code,{children:"keytab"}),", perform a command\nlike the following:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell-session",children:"$ bao login -method=kerberos \\\n    username=grace \\\n    service=HTTP/my-service \\\n    realm=MATRIX.LAN \\\n    keytab_path=/etc/krb5/krb5.keytab  \\\n    krb5conf_path=/etc/krb5.conf \\\n    disable_fast_negotiation=false\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"krb5conf_path"})," is the path to a valid ",(0,r.jsx)(n.code,{children:"krb5.conf"})," file describing how to\ncommunicate with the Kerberos environment."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"keytab_path"})," is the path to the ",(0,r.jsx)(n.code,{children:"keytab"})," in which the entry lives for the\nentity authenticating to OpenBao. Keytab files should be protected from other\nusers on a shared server using appropriate file permissions."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"username"})," is the username for the entry ",(0,r.jsx)(n.em,{children:"within"})," the ",(0,r.jsx)(n.code,{children:"keytab"})," to use for\nlogging into Kerberos. This username must match a service account in LDAP."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"service"})," is the service principal name to use in obtaining a service ticket for\ngaining a SPNEGO token. This service must exist in LDAP."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"realm"})," is the name of the Kerberos realm. This realm must match the UPNDomain\nconfigured on the LDAP connection. This check is case-sensitive."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"disable_fast_negotiation"})," is for disabling the Kerberos auth method's default\nof using FAST negotiation. FAST is a pre-authentication framework for Kerberos.\nIt includes a mechanism for tunneling pre-authentication exchanges using armoured\nKDC messages. FAST provides increased resistance to passive password guessing attacks.\nSome common Kerberos implementations do not support FAST negotiation."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"remove_instance_name"})," removes any instance names from a Kerberos service\nprincipal name when parsing the keytab file. For example when this is set to true,\nif a keytab has the service principal name ",(0,r.jsx)(n.code,{children:"foo/localhost@example.com"}),", the CLI\nwill strip the service principal name to just be ",(0,r.jsx)(n.code,{children:"foo@example.com"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,r.jsx)(n.h3,{id:"identify-the-malfunctioning-piece",children:"Identify the malfunctioning piece"}),"\n",(0,r.jsx)(n.p,{children:"Once the malfunctioning piece of the journey is identified, you can focus\nyour debugging efforts in the most useful direction."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Use ",(0,r.jsx)(n.code,{children:"ldapsearch"})," while logged into your machine hosting OpenBao to ensure\nyour LDAP configuration is functional."]}),"\n",(0,r.jsxs)(n.li,{children:["Authenticate to your domain server using ",(0,r.jsx)(n.code,{children:"kinit"}),", your ",(0,r.jsx)(n.code,{children:"keytab"}),", and your\n",(0,r.jsx)(n.code,{children:"krb5.conf"}),". Do this with both OpenBao's ",(0,r.jsx)(n.code,{children:"keytab"}),", and any client ",(0,r.jsx)(n.code,{children:"keytab"})," being\nused for logging in. This ensures your Kerberos network is working."]}),"\n",(0,r.jsxs)(n.li,{children:["While logged into your client machine, verify you can reach OpenBao\nthrough the following command: ",(0,r.jsx)(n.code,{children:"$ curl $VAULT_ADDR/v1/sys/health"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"build-clear-steps-to-reproduce-the-problem",children:"Build clear steps to reproduce the problem"}),"\n",(0,r.jsx)(n.p,{children:"If possible, make it easy for someone else to reproduce the problem who\nis outside of your company. For instance, if you expect that you should\nbe able to login using a command like:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell-session",children:"$ bao login -method=kerberos \\\n    username=my-name \\\n    service=HTTP/my-service \\\n    realm=EXAMPLE.COM \\\n    keytab_path=/etc/krb5/krb5.keytab  \\\n    krb5conf_path=/etc/krb5.conf\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then make sure you're ready to share the error output of that command, the\ncontents of the ",(0,r.jsx)(n.code,{children:"krb5.conf"})," file, and ",(0,r.jsx)(n.a,{href:"https://docs.oracle.com/cd/E19683-01/806-4078/6jd6cjs1q/index.html",children:"the entries listed"}),"\nin the ",(0,r.jsx)(n.code,{children:"keytab"})," file."]}),"\n",(0,r.jsx)(n.h3,{id:"additional-troubleshooting-resources",children:"Additional troubleshooting resources"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/tutorials/monitoring/troubleshooting-vault",children:"Troubleshooting OpenBao"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/hashicorp/vault-plugin-auth-kerberos",children:"The plugin's code"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The OpenBao Kerberos library has a working integration test environment that\ncan be referenced as an example of a full Kerberos and LDAP environment.\nIt runs through Docker and can be started through either one of the following\ncommands:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell-session",children:"$ make integration\n$ make dev-env\n"})}),"\n",(0,r.jsxs)(n.p,{children:["These commands run variations of ",(0,r.jsx)(n.a,{href:"https://github.com/hashicorp/vault-plugin-auth-kerberos/blob/master/scripts/integration_env.sh",children:"a script"}),"\nthat spins up a full environment, adds users, and executes a login from a\nclient."]}),"\n",(0,r.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,r.jsxs)(n.p,{children:["The Kerberos auth method has a full HTTP API. Please see the\n",(0,r.jsx)(n.a,{href:"/api-docs/auth/kerberos",children:"Kerberos auth method API"})," for more\ndetails."]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var r=i(96540);const s={},t=r.createContext(s);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);