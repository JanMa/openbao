"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2082],{78357:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=s(74848),i=s(28453);const o={sidebar_label:"tune",description:'The "secrets tune" command tunes the configuration options for the secrets engine at the given PATH.'},r="secrets tune",c={id:"commands/secrets/tune",title:"secrets tune",description:'The "secrets tune" command tunes the configuration options for the secrets engine at the given PATH.',source:"@site/content/docs/commands/secrets/tune.mdx",sourceDirName:"commands/secrets",slug:"/commands/secrets/tune",permalink:"/openbao/docs/commands/secrets/tune",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/commands/secrets/tune.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"tune",description:'The "secrets tune" command tunes the configuration options for the secrets engine at the given PATH.'},sidebar:"docs",previous:{title:"move",permalink:"/openbao/docs/commands/secrets/move"},next:{title:"server",permalink:"/openbao/docs/commands/server"}},a={},l=[{value:"Examples",id:"examples",level:2},{value:"Usage",id:"usage",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"secrets-tune",children:"secrets tune"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"secrets tune"})," command tunes the configuration options for the secrets\nengine at the given PATH. The argument corresponds to the PATH where the secrets\nengine is enabled, not the type."]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:'Before tuning the secret mount, view the current configuration of the\nmount enabled at "pki/":'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"$ bao read sys/mounts/pki/tune\nKey                             Value\n---                             -----\ndefault_lease_ttl               12h\ndescription                     Example PKI mount\nforce_no_cache                  false\nmax_lease_ttl                   24h\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Tune the default lease, exclude ",(0,t.jsx)(n.code,{children:"common_name"})," and ",(0,t.jsx)(n.code,{children:"serial_number"})," from being HMAC'd in the audit log for the PKI secrets engine:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"$ bao secrets tune -default-lease-ttl=18h -audit-non-hmac-request-keys=common_name -audit-non-hmac-response-keys=serial_number pki/\nSuccess! Tuned the secrets engine at: pki/\n\n$ bao read sys/mounts/pki/tune\nKey                             Value\n---                             -----\naudit_non_hmac_request_keys     [common_name]\naudit_non_hmac_response_keys    [serial_number]\ndefault_lease_ttl               18h\ndescription                     Example PKI mount\nforce_no_cache                  false\nmax_lease_ttl                   24h\n"})}),"\n",(0,t.jsx)(n.p,{children:"Specify multiple audit non-hmac request keys:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"$ bao secrets tune -audit-non-hmac-request-keys=common_name -audit-non-hmac-request-keys=ttl pki/\n"})}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:["The following flags are available in addition to the ",(0,t.jsx)(n.a,{href:"/docs/commands",children:"standard set of\nflags"})," included on all commands."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-allowed-response-headers"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - response header values that the\nsecrets engine will be allowed to set. Note that multiple keys may be\nspecified by providing this option multiple times, each time with 1 key."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-audit-non-hmac-request-keys"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - Key that will not be HMAC'd\nby audit devices in the request data object. Note that multiple keys may be\nspecified by providing this option multiple times, each time with 1 key."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-audit-non-hmac-response-keys"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - Key that will not be HMAC'd\nby audit devices in the response data object. Note that multiple keys may be\nspecified by providing this option multiple times, each time with 1 key."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-default-lease-ttl"})," ",(0,t.jsx)(n.code,{children:'(duration: "")'})," - The default lease TTL for this secrets\nengine. If unspecified, this defaults to the OpenBao server's globally\nconfigured default lease TTL, or a previously configured value for the secrets\nengine. Uses ",(0,t.jsx)(n.a,{href:"/docs/concepts/duration-format",children:"duration format strings"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-description"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - Specifies the description of the mount.\nThis overrides the current stored value, if any."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-listing-visibility"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - The flag to toggle whether to show the\nmount in the UI-specific listing endpoint. Valid values are ",(0,t.jsx)(n.code,{children:'"unauth"'})," or ",(0,t.jsx)(n.code,{children:'"hidden"'}),".\nPassing empty string leaves the current setting unchanged."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-max-lease-ttl"})," ",(0,t.jsx)(n.code,{children:'(duration: "")'})," - The maximum lease TTL for this secrets\nengine. If unspecified, this defaults to the OpenBao server's globally\nconfigured ",(0,t.jsx)(n.a,{href:"/docs/configuration#max_lease_ttl",children:"maximum lease TTL"}),", or a\npreviously configured value for the secrets engine. This value is allowed to\noverride the server's global max TTL; it can be longer or shorter.\nUses ",(0,t.jsx)(n.a,{href:"/docs/concepts/duration-format",children:"duration format strings"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-passthrough-request-headers"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - request header values that will\nbe sent to the secrets engine. Note that multiple keys may be\nspecified by providing this option multiple times, each time with 1 key."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-plugin-version"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - Configures the semantic version of the plugin\nto use. The new version will not start running until the mount is\n",(0,t.jsx)(n.a,{href:"/docs/commands/plugin/reload",children:"reloaded"}),"."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var t=s(96540);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);