"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[836],{33963:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var i=n(74848),a=n(28453);const s={layout:"docs",page_title:"TLS Certificates - Auth Methods",description:'The "cert" auth method allows users to authenticate with OpenBao using TLS client certificates.'},c="TLS certificates auth method",r={id:"auth/cert",title:"TLS certificates auth method",description:'The "cert" auth method allows users to authenticate with OpenBao using TLS client certificates.',source:"@site/content/docs/auth/cert.mdx",sourceDirName:"auth",slug:"/auth/cert",permalink:"/openbao/docs/auth/cert",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/auth/cert.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"TLS Certificates - Auth Methods",description:'The "cert" auth method allows users to authenticate with OpenBao using TLS client certificates.'},sidebar:"tutorialSidebar",previous:{title:"AppRole auth method",permalink:"/openbao/docs/auth/approle"},next:{title:"JWT/OIDC auth method",permalink:"/openbao/docs/auth/jwt/"}},o={},h=[{value:"Revocation checking",id:"revocation-checking",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Via the CLI",id:"via-the-cli",level:3},{value:"Via the API",id:"via-the-api",level:3},{value:"Configuration",id:"configuration",level:2},{value:"API",id:"api",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"tls-certificates-auth-method",children:"TLS certificates auth method"}),"\n",(0,i.jsxs)(t.p,{children:["~> ",(0,i.jsx)(t.strong,{children:"Note"}),": This engine can use external X.509 certificates as part of TLS or signature validation.\nVerifying signatures against X.509 certificates that use SHA-1 is deprecated and is no longer\nusable without a workaround. See the\n",(0,i.jsx)(t.a,{href:"/docs/deprecation/faq#q-what-is-the-impact-of-removing-support-for-x-509-certificates-with-signatures-that-use-sha-1",children:"deprecation FAQ"}),"\nfor more information."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"cert"})," auth method allows authentication using SSL/TLS client certificates\nwhich are either signed by a CA or self-signed. SSL/TLS client certificates\nare defined as having an ",(0,i.jsx)(t.code,{children:"ExtKeyUsage"})," extension with the usage set to either\n",(0,i.jsx)(t.code,{children:"ClientAuth"})," or ",(0,i.jsx)(t.code,{children:"Any"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["The trusted certificates and CAs are configured directly to the auth method\nusing the ",(0,i.jsx)(t.code,{children:"certs/"})," path. This method cannot read trusted certificates from an\nexternal source."]}),"\n",(0,i.jsx)(t.p,{children:"CA certificates are associated with a role; role names and CRL names are normalized to\nlower-case."}),"\n",(0,i.jsxs)(t.p,{children:["Please note that to use this auth method, ",(0,i.jsx)(t.code,{children:"tls_disable"})," and ",(0,i.jsx)(t.code,{children:"tls_disable_client_certs"})," must be false in the OpenBao\nconfiguration. This is because the certificates are sent through TLS communication itself."]}),"\n",(0,i.jsx)(t.h2,{id:"revocation-checking",children:"Revocation checking"}),"\n",(0,i.jsx)(t.p,{children:"An authorized user can submit PEM-formatted CRLs identified by a given name;\nthese can be updated or deleted at will. They may also set the URL of a\ntrusted CRL distribution point, and have OpenBao fetch the CRL as needed."}),"\n",(0,i.jsx)(t.p,{children:"When there are CRLs present, at the time of client authentication:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"If the client presents any chain where no certificate in the chain matches a\nrevoked serial number, authentication is allowed"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"If there is no chain presented by the client without a revoked serial number,\nauthentication is denied"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"This method provides good security while also allowing for flexibility. For\ninstance, if an intermediate CA is going to be retired, a client can be\nconfigured with two certificate chains: one that contains the initial\nintermediate CA in the path, and the other that contains the replacement. When\nthe initial intermediate CA is revoked, the chain containing the replacement\nwill still allow the client to successfully authenticate."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"N.B."}),": Matching is performed by ",(0,i.jsx)(t.em,{children:"serial number only"}),". For most CAs,\nincluding OpenBao's ",(0,i.jsx)(t.code,{children:"pki"})," method, multiple CRLs can successfully be used as\nserial numbers are globally unique. However, since RFCs only specify that\nserial numbers must be unique per-CA, some CAs issue serial numbers in-order,\nwhich may cause clashes if attempting to use CRLs from two such CAs in the same\nmount of the method. The workaround here is to mount multiple copies of the\n",(0,i.jsx)(t.code,{children:"cert"})," method, configure each with one CA/CRL, and have clients connect to the\nappropriate mount."]}),"\n",(0,i.jsx)(t.p,{children:"In addition, if a CRL distribution point is not set the method will not\nfetch the CRLs itself, the CRL's designated time to next update is not\nconsidered. If a CRL is no longer in use, it is up to the administrator to\nremove it from the method."}),"\n",(0,i.jsx)(t.p,{children:"In addition to automatic or manual CRL management, OCSP may be enabled for\na configured certificate, in which case OpenBao will query the OCSP server either\nspecified in the presented certificate or configured in the auth method to\ncheck revocation."}),"\n",(0,i.jsx)(t.h2,{id:"authentication",children:"Authentication"}),"\n",(0,i.jsx)(t.h3,{id:"via-the-cli",children:"Via the CLI"}),"\n",(0,i.jsxs)(t.p,{children:["The below authenticates against the ",(0,i.jsx)(t.code,{children:"web"})," cert role by presenting a certificate\n(",(0,i.jsx)(t.code,{children:"cert.pem"}),") and key (",(0,i.jsx)(t.code,{children:"key.pem"}),") signed by the CA associated with the ",(0,i.jsx)(t.code,{children:"web"})," cert\nrole. Note that the name ",(0,i.jsx)(t.code,{children:"web"})," ties to the configuration example below writing\nto a path of ",(0,i.jsx)(t.code,{children:"auth/cert/certs/web"}),". If a certificate role name is not specified,\nthe auth method will try to authenticate against all trusted certificates."]}),"\n",(0,i.jsxs)(t.p,{children:["~> ",(0,i.jsx)(t.strong,{children:"NOTE"})," The ",(0,i.jsx)(t.code,{children:"-ca-cert"})," value used here is for the OpenBao TLS Listener CA\ncertificate, not the CA that issued the client authentication certificate. This\ncan be omitted if the CA used to issue the OpenBao server certificate is trusted\nby the local system executing this command."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell-session",children:"$ bao login \\\n    -method=cert \\\n    -ca-cert=openbao-ca.pem \\\n    -client-cert=cert.pem \\\n    -client-key=key.pem \\\n    name=web\n"})}),"\n",(0,i.jsx)(t.h3,{id:"via-the-api",children:"Via the API"}),"\n",(0,i.jsxs)(t.p,{children:["The endpoint for the login is ",(0,i.jsx)(t.code,{children:"/login"}),". The client simply connects with their\nTLS certificate and when the login endpoint is hit, the auth method will\ndetermine if there is a matching trusted certificate to authenticate the client.\nOptionally, you may specify a single certificate role to authenticate against."]}),"\n",(0,i.jsxs)(t.p,{children:["~> ",(0,i.jsx)(t.strong,{children:"NOTE"})," The ",(0,i.jsx)(t.code,{children:"--cacert"})," value used here is for the OpenBao TLS Listener CA\ncertificate, not the CA that issued the client authentication certificate. This\ncan be omitted if the CA used to issue the OpenBao server certificate is trusted\nby the local system executing this command."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell-session",children:'$ curl \\\n    --request POST \\\n    --cacert openbao-ca.pem \\\n    --cert cert.pem \\\n    --key key.pem \\\n    --data \'{"name": "web"}\' \\\n    https://127.0.0.1:8200/v1/auth/cert/login\n'})}),"\n",(0,i.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(t.p,{children:"Auth methods must be configured in advance before users or machines can\nauthenticate. These steps are usually completed by an operator or configuration\nmanagement tool."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Enable the certificate auth method:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"$ bao auth enable cert\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Configure it with trusted certificates that are allowed to authenticate:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"$ bao write auth/cert/certs/web \\\n    display_name=web \\\n    policies=web,prod \\\n    certificate=@web-cert.pem \\\n    ttl=3600\n"})}),"\n",(0,i.jsxs)(t.p,{children:['This creates a new trusted certificate "web" with same display name and the\n"web" and "prod" policies. The certificate (public key) used to verify\nclients is given by the "web-cert.pem" file. Lastly, an optional ',(0,i.jsx)(t.code,{children:"ttl"})," value\ncan be provided in seconds to limit the lease duration."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,i.jsxs)(t.p,{children:["The TLS Certificate auth method has a full HTTP API. Please see the\n",(0,i.jsx)(t.a,{href:"/api-docs/auth/cert",children:"TLS Certificate API"})," for more details."]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>r});var i=n(96540);const a={},s=i.createContext(a);function c(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);