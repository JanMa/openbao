"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5325],{245:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var a=n(74848),i=n(28453);const s={description:"Learn about the security model of OpenBao."},o="Security model",r={id:"internals/security",title:"Security model",description:"Learn about the security model of OpenBao.",source:"@site/content/docs/internals/security.mdx",sourceDirName:"internals",slug:"/internals/security",permalink:"/docs/internals/security",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/internals/security.mdx",tags:[],version:"current",frontMatter:{description:"Learn about the security model of OpenBao."},sidebar:"docs",previous:{title:"Integrated storage",permalink:"/docs/internals/integrated-storage"},next:{title:"Overview",permalink:"/docs/internals/telemetry/"}},c={},l=[];function d(e){const t={a:"a",em:"em",h1:"h1",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"security-model",children:"Security model"}),"\n",(0,a.jsxs)(t.p,{children:["Due to the nature of OpenBao and the confidentiality of data it manages,\nthe OpenBao security model is very critical. The overall goal of OpenBao's security\nmodel is to provide ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Information_security",children:"confidentiality, integrity, availability, accountability,\nauthentication"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"This means that data at rest and in transit must be secure from eavesdropping\nor tampering. Clients must be appropriately authenticated and authorized\nto access data or modify policies. All interactions must be auditable and traced\nuniquely back to the origin entity, and the system must be robust against intentional\nattempts to bypass any of its access controls."}),"\n",(0,a.jsx)(t.h1,{id:"threat-model",children:"Threat model"}),"\n",(0,a.jsx)(t.p,{children:"The following are the various parts of the OpenBao threat model:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Eavesdropping on any OpenBao communication. Client communication with OpenBao\nshould be secure from eavesdropping as well as communication from OpenBao to\nits storage backend or between OpenBao cluster nodes."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Tampering with data at rest or in transit. Any tampering should be detectable\nand cause OpenBao to abort processing of the transaction."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Access to data or controls without authentication or authorization. All requests\nmust be proceeded by the applicable security policies."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Access to data or controls without accountability. If audit logging\nis enabled, requests and responses must be logged before the client receives\nany secret material."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Confidentiality of stored secrets. Any data that leaves OpenBao to rest in the\nstorage backend must be safe from eavesdropping. In practice, this means all\ndata at rest must be encrypted."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Availability of secret material in the face of failure. OpenBao supports\nrunning in a highly available configuration to avoid loss of availability."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"The following are not considered part of the OpenBao threat model:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Protecting against arbitrary control of the storage backend. An attacker\nthat can perform arbitrary operations against the storage backend can\nundermine security in any number of ways that are difficult or impossible to protect\nagainst. As an example, an attacker could delete or corrupt all the contents\nof the storage backend causing total data loss for OpenBao. The ability to control\nreads would allow an attacker to snapshot in a well-known state and rollback state\nchanges if that would be beneficial to them."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Protecting against the leakage of the existence of secret material. An attacker\nthat can read from the storage backend may observe that secret material exists\nand is stored, even if it is kept confidential."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Protecting against memory analysis of a running OpenBao. If an attacker is able\nto inspect the memory state of a running OpenBao instance, then the confidentiality\nof data may be compromised."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Protecting against flaws in external systems or services used by OpenBao.\nSome authentication methods or secrets engines delegate sensitive operations to\nsystems external to OpenBao. If an attacker can compromise credentials or otherwise\nexploit a vulnerability in these external systems, then the confidentiality or\nintegrity of data may be compromised."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Protecting against malicious plugins or code execution on the underlying host.\nIf an attacker can gain code execution or write privileges to the underlying host,\nthen the confidentiality or the integrity of data may be compromised."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Protecting against flaws in clients or systems that access OpenBao. If an attacker\ncan compromise an OpenBao client (e.g., system, browser) and obtain this client\u2019s OpenBao\ncredentials, they can access OpenBao with the level of privilege associated with this\nclient."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Protecting against OpenBao administrators supplying vulnerable or malicious configuration\ndata. Any data provided as configuration values to OpenBao's administrative endpoints\n(e.g. ",(0,a.jsx)(t.a,{href:"/docs/secrets",children:"secret engines"})," configurations), or OpenBao's\nconfiguration files should be validated. If an attacker can write to OpenBao's\nconfiguration, then the confidentiality or integrity of data can be compromised."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h1,{id:"external-threat-overview",children:"External threat overview"}),"\n",(0,a.jsx)(t.p,{children:"OpenBao architecture compromises of three distinct systems:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Client: Speaks to OpenBao over an API."}),"\n",(0,a.jsx)(t.li,{children:"Server: Provides an API and serves requests."}),"\n",(0,a.jsx)(t.li,{children:"Storage backend: Utilized by the server to read and write data."}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["There is no mutual trust between the OpenBao client and server. Clients use\n",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Transport_Layer_Security",children:"TLS"})," to verify the\nidentity of the server and to establish a secure communication channel. Servers\nrequire that a client provides a client token for every request which is used\nto identify the client. A client that does not provide their token is only\npermitted to make login requests."]}),"\n",(0,a.jsxs)(t.p,{children:["All server-to-server traffic between OpenBao instances within a cluster uses\nmutually-authenticated TLS to ensure the confidentiality and integrity of data\nin transit. Nodes are authenticated prior to joining the cluster by an\n",(0,a.jsx)(t.a,{href:"/docs/concepts/integrated-storage#vault-networking-recap",children:"unseal challenge"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["The storage backends used by OpenBao are also untrusted by design. OpenBao uses a\nsecurity barrier for all requests made to the backend. The security barrier\nautomatically encrypts all data leaving OpenBao using a 256-bit ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Advanced_Encryption_Standard",children:"Advanced\nEncryption Standard\n(AES)"})," cipher in\nthe ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Galois/Counter_Mode",children:"Galois Counter Mode\n(GCM)"})," with 96-bit nonces.\nThe nonce is randomly generated for every encrypted object. When data is read\nfrom the security barrier, the GCM authentication tag is verified during the\ndecryption process to detect any tampering."]}),"\n",(0,a.jsx)(t.p,{children:"Depending on the backend used, OpenBao may communicate with the backend over TLS\nto provide an added layer of security. In some cases, such as a file backend,\nthis is not applicable. Because storage backends are untrusted, an eavesdropper\nwould only gain access to encrypted data even if communication with the backend\nwas intercepted."}),"\n",(0,a.jsx)(t.h1,{id:"internal-threat-overview",children:"Internal threat overview"}),"\n",(0,a.jsx)(t.p,{children:"Within the OpenBao system, a critical security concern is an attacker attempting\nto gain access to secret material they are not authorized to. This is an internal\nthreat if the attacker is already permitted to some level of access to OpenBao, and is\nable to authenticate."}),"\n",(0,a.jsx)(t.p,{children:'When a client first authenticates with OpenBao, an auth method is used to verify\nthe identity of the client and to return a list of associated ACL policies.\nThis association is configured by operators of OpenBao ahead of time. For\nexample, GitHub users in the "engineering" team may be mapped to the\n"engineering" and "ops" OpenBao policies. OpenBao then generates a client token\nwhich is a randomly generated, serialized value and maps it to the policy list.\nThis client token is then returned to the client.'}),"\n",(0,a.jsxs)(t.p,{children:['On each request, a client provides this token. OpenBao then uses it to check that\nthe token is valid and has not been revoked or expired, and generates an ACL\nbased on the associated policies. OpenBao uses a strict default deny\nenforcement strategy. This means unless an associated policy allows for a given action,\nit will be denied. Each policy specifies a level of access granted to a path in\nOpenBao. When the policies are merged (if multiple policies are associated with a\nclient), the highest access level permitted is used. For example, if the\n"engineering" policy permits read/update access to the "eng/" path, and the\n"ops" policy permits read access to the "ops/" path, then the user gets the\nunion of those. Policy is matched using the most specific defined policy, which\nmay be an exact match or the longest-prefix match glob pattern. See\n',(0,a.jsx)(t.a,{href:"/docs/concepts/policies#policy-syntax",children:"Policy Syntax"})," for more details."]}),"\n",(0,a.jsx)(t.p,{children:'Certain operations are only permitted by "root" users, which is a distinguished\npolicy built into OpenBao. This is similar to the concept of a root user on a\nUnix system or an administrator on Windows. In cases where clients are provided\nwith root tokens or associated with the root policy, OpenBao supports the\nnotion of "sudo" privilege. As part of a policy, users may be granted "sudo"\nprivileges to certain paths, so that they can still perform security sensitive\noperations without being granted global root access to OpenBao.'}),"\n",(0,a.jsxs)(t.p,{children:["Lastly, OpenBao supports using a ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Two-person_rule",children:"Two-person\nrule"})," for unsealing using ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Shamir's_Secret_Sharing",children:"Shamir's\nSecret Sharing\ntechnique"}),". When OpenBao\nis started, it starts in a ",(0,a.jsx)(t.em,{children:"sealed"})," state. This means that the encryption key\nneeded to read and write from the storage backend is not yet known. The process\nof unsealing requires providing the root key so that the encryption key can\nbe retrieved. The risk of distributing the root key is that a single\nmalicious attacker with access to it can decrypt the entire OpenBao. Instead,\nShamir's technique allows us to split the root key into multiple shares or\nparts. The number of shares and the threshold needed is configurable, but by\ndefault OpenBao generates 5 shares, any 3 of which must be provided to\nreconstruct the root key."]}),"\n",(0,a.jsx)(t.p,{children:"By using a secret sharing technique, we avoid the need to place absolute trust\nin the holder of the root key, and avoid storing the root key at all. The\nroot key is only retrievable by reconstructing the shares. The shares are not\nuseful for making any requests to OpenBao, and can only be used for unsealing.\nOnce unsealed the standard ACL mechanisms are used for all requests."}),"\n",(0,a.jsx)(t.p,{children:"To make an analogy, a bank puts security deposit boxes inside of a vault. Each\nsecurity deposit box has a key, while the vault door has both a combination and\na key. The vault is encased in steel and concrete so that the door is the only\npractical entrance. The analogy to OpenBao is that the cryptosystem is the\nsteel and concrete protecting the data. While you could tunnel through the\nconcrete or brute force the encryption keys, it would be prohibitively time\nconsuming. Opening the bank vault requires two-factors: the key and the\ncombination. Similarly, OpenBao requires multiple shares be provided to\nreconstruct the root key. Once unsealed, each security deposit boxes still\nrequires that the owner provide a key, and similarly the OpenBao ACL system protects\nall the secrets stored."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var a=n(96540);const i={},s=a.createContext(i);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);