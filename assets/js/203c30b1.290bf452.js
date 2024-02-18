"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2309],{31358:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var t=s(74848),i=s(28453);const a={sidebar_label:"enable",description:'The "secrets enable" command enables a secrets engine at a given path. If an\nsecrets engine already exists at the given path, an error is returned. After\nthe secrets engine is enabled, it usually needs configuration. The\nconfiguration varies by secrets engine.'},r="secrets enable",c={id:"commands/secrets/enable",title:"secrets enable",description:'The "secrets enable" command enables a secrets engine at a given path. If an\nsecrets engine already exists at the given path, an error is returned. After\nthe secrets engine is enabled, it usually needs configuration. The\nconfiguration varies by secrets engine.',source:"@site/content/docs/commands/secrets/enable.mdx",sourceDirName:"commands/secrets",slug:"/commands/secrets/enable",permalink:"/openbao/docs/commands/secrets/enable",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/commands/secrets/enable.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"enable",description:'The "secrets enable" command enables a secrets engine at a given path. If an\nsecrets engine already exists at the given path, an error is returned. After\nthe secrets engine is enabled, it usually needs configuration. The\nconfiguration varies by secrets engine.'},sidebar:"docs",previous:{title:"disable",permalink:"/openbao/docs/commands/secrets/disable"},next:{title:"list",permalink:"/openbao/docs/commands/secrets/list"}},l={},o=[{value:"Examples",id:"examples",level:2},{value:"Usage",id:"usage",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"secrets-enable",children:"secrets enable"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"secrets enable"})," command enables a secrets engine at a given path. If an\nsecrets engine already exists at the given path, an error is returned. After the\nsecrets engine is enabled, it usually needs configuration. The configuration\nvaries by secrets engine."]}),"\n",(0,t.jsxs)(n.p,{children:["By default, secrets engines are enabled at the path corresponding to their TYPE,\nbut users can customize the path using the ",(0,t.jsx)(n.code,{children:"-path"})," option."]}),"\n",(0,t.jsxs)(n.p,{children:["Some secrets engines persist data, some act as data pass-through, and some\ngenerate dynamic credentials. The secrets engine will likely require\nconfiguration after it is mounted. For details on the specific configuration\noptions, please see the ",(0,t.jsx)(n.a,{href:"/docs/secrets",children:"secrets engine\ndocumentation"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:'Enable the KV secrets engine at "kv/":'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"$ bao secrets enable kv\nSuccess! Enabled the kv secrets engine at: kv/\n"})}),"\n",(0,t.jsx)(n.p,{children:"Enable the SSH secrets engine at ssh-prod/:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"$ bao secrets enable -path=ssh-prod ssh\n"})}),"\n",(0,t.jsx)(n.p,{children:"Enable the database secrets engine with an explicit maximum TTL of 30m:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"$ bao secrets enable -max-lease-ttl=30m database\n"})}),"\n",(0,t.jsx)(n.p,{children:"Enable a custom plugin (after it is registered in the plugin registry):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"$ bao secrets enable -path=my-secrets my-plugin\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For more information on the specific configuration options and paths, please see\nthe ",(0,t.jsx)(n.a,{href:"/docs/secrets",children:"secrets engine"})," documentation."]}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:["The following flags are available in addition to the ",(0,t.jsx)(n.a,{href:"/docs/commands",children:"standard set of\nflags"})," included on all commands."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-audit-non-hmac-request-keys"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - Key that will not be HMAC'd\nby audit devices in the request data object. Note that multiple keys may be\nspecified by providing this option multiple times, each time with 1 key.\nAn example of this is provided in the ",(0,t.jsx)(n.a,{href:"/docs/commands/secrets/tune",children:"tune section"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-audit-non-hmac-response-keys"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - Key that will not be HMAC'd\nby audit devices in the response data object. Note that multiple keys may be\nspecified by providing this option multiple times, each time with 1 key."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-default-lease-ttl"})," ",(0,t.jsx)(n.code,{children:'(duration: "")'})," - The default lease TTL for this secrets\nengine. If unspecified, this defaults to the OpenBao server's globally\nconfigured default lease TTL."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-description"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - Human-friendly description for the purpose of\nthis engine."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-force-no-cache"})," ",(0,t.jsx)(n.code,{children:"(bool: false)"})," - Force the secrets engine to disable\ncaching. If unspecified, this defaults to the OpenBao server's globally\nconfigured cache settings. This does not affect caching of the underlying\nencrypted data storage."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-local"})," ",(0,t.jsx)(n.code,{children:"(bool: false)"})," - Mark the secrets engine as local-only. Local\nengines are not replicated or removed by replication."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-max-lease-ttl"})," ",(0,t.jsx)(n.code,{children:'(duration: "")'})," The maximum lease TTL for this secrets\nengine. If unspecified, this defaults to the OpenBao server's globally\nconfigured maximum lease TTL."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-path"})," ",(0,t.jsx)(n.code,{children:'(string: "")'}),' Place where the secrets engine will be accessible. This\nmust be unique cross all secrets engines. This defaults to the "type" of the\nsecrets engine.']}),"\n",(0,t.jsxs)(n.p,{children:["!> ",(0,t.jsx)(n.strong,{children:"Case-sensitive:"})," The path where you enable secrets engines is case-sensitive. For\nexample, the KV secrets engine enabled at ",(0,t.jsx)(n.code,{children:"kv/"})," and ",(0,t.jsx)(n.code,{children:"KV/"})," are treated as two\ndistinct instances of KV secrets engine."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-passthrough-request-headers"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - request header values that will\nbe sent to the secrets engine. Note that multiple keys may be\nspecified by providing this option multiple times, each time with 1 key."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-allowed-response-headers"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - response header values that the secrets\nengine will be allowed to set. Note that multiple keys may be\nspecified by providing this option multiple times, each time with 1 key."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-plugin-version"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - Configures the semantic version of the plugin\nto use. If unspecified, implies the built-in or any matching unversioned plugin\nthat may have been registered."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var t=s(96540);const i={},a=t.createContext(i);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);