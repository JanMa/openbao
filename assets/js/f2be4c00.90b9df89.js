"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2963],{21102:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>g,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>p});var s=i(74848),t=i(28453);const a={description:"External Plugins are mountable backends that are implemented using OpenBao's plugin system."},l="Plugin management",r={id:"plugins/plugin-management",title:"Plugin management",description:"External Plugins are mountable backends that are implemented using OpenBao's plugin system.",source:"@site/content/docs/plugins/plugin-management.mdx",sourceDirName:"plugins",slug:"/plugins/plugin-management",permalink:"/docs/plugins/plugin-management",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/plugins/plugin-management.mdx",tags:[],version:"current",frontMatter:{description:"External Plugins are mountable backends that are implemented using OpenBao's plugin system."},sidebar:"docs",previous:{title:"Plugin development",permalink:"/docs/plugins/plugin-development"},next:{title:"Platforms",permalink:"/docs/platform/"}},g={},p=[{value:"Registering external plugins",id:"registering-external-plugins",level:2},{value:"Enabling/Disabling external plugins",id:"enablingdisabling-external-plugins",level:2},{value:"Upgrading plugins",id:"upgrading-plugins",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"plugin-management",children:"Plugin management"}),"\n",(0,s.jsx)(n.p,{children:"External plugins are the components in OpenBao that can be implemented separately\nfrom OpenBao's built-in plugins. These plugins can be either authentication or\nsecrets engines."}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"/docs/configuration#api_addr",children:(0,s.jsx)(n.code,{children:"api_addr"})})," must be set in order for the plugin process to\nestablish communication with the OpenBao server during mount time. If the storage\nbackend has HA enabled and supports automatic host address detection, OpenBao\nwill automatically attempt to determine the ",(0,s.jsx)(n.code,{children:"api_addr"})," as well."]}),"\n",(0,s.jsxs)(n.p,{children:["Detailed information regarding the plugin system can be found in the\n",(0,s.jsx)(n.a,{href:"/docs/plugins",children:"internals documentation"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"registering-external-plugins",children:"Registering external plugins"}),"\n",(0,s.jsxs)(n.p,{children:["Before an external plugin can be mounted, it needs to be\n",(0,s.jsx)(n.a,{href:"/docs/plugins/plugin-architecture#plugin-registration",children:"registered"})," in the\nplugin catalog to ensure the plugin invoked by OpenBao is authentic and maintains\nintegrity:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ bao plugin register -sha256=<SHA256 Hex value of the plugin binary> \\\n    secret \\                  # type\n    passthrough-plugin\n\nSuccess! Registered plugin: passthrough-plugin\n"})}),"\n",(0,s.jsx)(n.h2,{id:"enablingdisabling-external-plugins",children:"Enabling/Disabling external plugins"}),"\n",(0,s.jsx)(n.p,{children:"After the plugin is registered, it can be mounted by specifying the registered\nplugin name:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ bao secrets enable -path=my-secrets passthrough-plugin\nSuccess! Enabled the passthrough-plugin secrets engine at: my-secrets/\n"})}),"\n",(0,s.jsx)(n.p,{children:"Listing secrets engines will display secrets engines that are mounted as\nplugins:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ bao secrets list\nPath         Type       Accessor            Plugin              Default TTL  Max TTL  Force No Cache  Replication Behavior  Description\nmy-secrets/  plugin     plugin_deb84140     passthrough-plugin  system       system   false           replicated\n"})}),"\n",(0,s.jsx)(n.p,{children:"Disabling an external plugins is identical to disabling a built-in plugin:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ bao secrets disable my-secrets\n"})}),"\n",(0,s.jsx)(n.h2,{id:"upgrading-plugins",children:"Upgrading plugins"}),"\n",(0,s.jsxs)(n.p,{children:["Upgrade instructions can be found in the ",(0,s.jsx)(n.a,{href:"/docs/upgrading/plugins",children:"Upgrading Plugins - Guides"}),"\npage."]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>r});var s=i(96540);const t={},a=s.createContext(t);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);