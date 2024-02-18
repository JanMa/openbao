"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5681],{14491:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=n(74848),a=n(28453);const r={layout:"docs",page_title:"secrets disable - Command",description:'The "secrets disable" command disables an secrets engine at a given PATH. The\nargument corresponds to the enabled PATH of the engine, not the TYPE! All\nsecrets created by this engine are revoked and its OpenBao data is removed.'},i="secrets disable",o={id:"commands/secrets/disable",title:"secrets disable",description:'The "secrets disable" command disables an secrets engine at a given PATH. The\nargument corresponds to the enabled PATH of the engine, not the TYPE! All\nsecrets created by this engine are revoked and its OpenBao data is removed.',source:"@site/content/docs/commands/secrets/disable.mdx",sourceDirName:"commands/secrets",slug:"/commands/secrets/disable",permalink:"/openbao/docs/commands/secrets/disable",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/commands/secrets/disable.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"secrets disable - Command",description:'The "secrets disable" command disables an secrets engine at a given PATH. The\nargument corresponds to the enabled PATH of the engine, not the TYPE! All\nsecrets created by this engine are revoked and its OpenBao data is removed.'},sidebar:"docs",previous:{title:"secrets",permalink:"/openbao/docs/commands/secrets/"},next:{title:"secrets enable",permalink:"/openbao/docs/commands/secrets/enable"}},c={},d=[{value:"Examples",id:"examples",level:2},{value:"Usage",id:"usage",level:2},{value:"Force disable",id:"force-disable",level:2}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"secrets-disable",children:"secrets disable"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"secrets disable"})," command disables an secrets engine at a given PATH. The\nargument corresponds to the enabled PATH of the engine, not the TYPE! All\nsecrets created by this engine are revoked and its OpenBao data is removed."]}),"\n",(0,t.jsxs)(s.p,{children:["When a secrets engine is disabled, ",(0,t.jsx)(s.strong,{children:"all secrets generated via the secrets\nengine are immediately revoked."})," Care should be taken when disabling a\nsecret mount with a large number of secrets, as it can cause a high load on\nthe system during revocation time."]}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.p,{children:"Disable the secrets engine enabled at kv/:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell-session",children:"$ bao secrets disable kv/\n"})}),"\n",(0,t.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(s.p,{children:["There are no flags beyond the ",(0,t.jsx)(s.a,{href:"/docs/commands",children:"standard set of flags"}),"\nincluded on all commands."]}),"\n",(0,t.jsx)(s.h2,{id:"force-disable",children:"Force disable"}),"\n",(0,t.jsxs)(s.p,{children:["Because ",(0,t.jsx)(s.code,{children:"secrets disable"})," revokes secrets associated with this mount, possible\nerrors can prevent the secrets engine from being disabled if the revocation\nfails."]}),"\n",(0,t.jsx)(s.p,{children:"The best way to resolve this is to figure out the underlying issue and then\ndisable the secrets engine once the underlying issue is resolved. Often, this\ncan be as simple as increasing the timeout (in the event of timeout errors)."}),"\n",(0,t.jsxs)(s.p,{children:["For recovery situations where the secret was manually removed from the\nsecrets backing service, one can force a secrets engine disable in OpenBao by\nperforming a ",(0,t.jsx)(s.a,{href:"/docs/commands/lease/revoke",children:"prefix force revoke"})," on the mount\nprefix, followed by a ",(0,t.jsx)(s.code,{children:"secrets disable"})," when that completes.\nIf the underlying secrets were not manually cleaned up, this method might result\nin dangling credentials. This is meant for extreme circumstances."]})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>o});var t=n(96540);const a={},r=t.createContext(a);function i(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);