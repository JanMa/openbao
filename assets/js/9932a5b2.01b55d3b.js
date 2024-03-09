"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9768],{17582:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>r});var s=t(74848),i=t(28453);const o={sidebar_label:"tune",description:'The "auth tune" command tunes the configuration options for the auth method at\nthe given PATH.'},a="auth tune",l={id:"commands/auth/tune",title:"auth tune",description:'The "auth tune" command tunes the configuration options for the auth method at\nthe given PATH.',source:"@site/content/docs/commands/auth/tune.mdx",sourceDirName:"commands/auth",slug:"/commands/auth/tune",permalink:"/openbao/docs/commands/auth/tune",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/commands/auth/tune.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"tune",description:'The "auth tune" command tunes the configuration options for the auth method at\nthe given PATH.'},sidebar:"docs",previous:{title:"move",permalink:"/openbao/docs/commands/auth/move"},next:{title:"debug",permalink:"/openbao/docs/commands/debug"}},h={},r=[{value:"Examples",id:"examples",level:2},{value:"Enable user lockout",id:"enable-user-lockout",level:3},{value:"Usage",id:"usage",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"auth-tune",children:"auth tune"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"auth tune"})," command tunes the configuration options for the auth method at\nthe given PATH."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The argument corresponds to the ",(0,s.jsx)(n.strong,{children:"path"})," where the auth method is\nenabled, not the auth ",(0,s.jsx)(n.strong,{children:"type"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.p,{children:["Before tuning the auth method configuration, view the current configuration of the\nauth method enabled at ",(0,s.jsx)(n.code,{children:"github/"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ bao read sys/auth/github/tune\nKey                  Value\n---                  -----\ndefault_lease_ttl    768h\ndescription          n/a\nforce_no_cache       false\nmax_lease_ttl        768h\ntoken_type           default-service\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The default lease for the auth method enabled at ",(0,s.jsx)(n.code,{children:"github/"})," is currently set to\n768 hours. Tune this value to 72 hours."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ bao auth tune -default-lease-ttl=72h github/\nSuccess! Tuned the auth method at: github/\n"})}),"\n",(0,s.jsx)(n.p,{children:"Verify the updated configuration."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",metastring:"{1,4}",children:"$ bao read sys/auth/github/tune\nKey                  Value\n---                  -----\ndefault_lease_ttl    72h\ndescription          n/a\nforce_no_cache       false\nmax_lease_ttl        768h\ntoken_type           default-service\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To restore back to the system default, you can use ",(0,s.jsx)(n.code,{children:"-1"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ bao auth tune -default-lease-ttl=-1 github/\nSuccess! Tuned the auth method at: github/\n"})}),"\n",(0,s.jsx)(n.p,{children:"Verify the updated configuration."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",metastring:"{1,4}",children:"$ bao read sys/auth/github/tune\nKey                  Value\n---                  -----\ndefault_lease_ttl    768h\ndescription          n/a\nforce_no_cache       false\nmax_lease_ttl        768h\ntoken_type           default-service\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can specify multiple audit non-hmac request keys."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ bao auth tune -audit-non-hmac-request-keys=value1 -audit-non-hmac-request-keys=value2 github/\nSuccess! Tuned the auth method at: github/\n"})}),"\n",(0,s.jsx)(n.h3,{id:"enable-user-lockout",children:"Enable user lockout"}),"\n",(0,s.jsxs)(n.p,{children:["User lockout feature is only supported for\n",(0,s.jsx)(n.a,{href:"/docs/auth/userpass",children:"userpass"}),", ",(0,s.jsx)(n.a,{href:"/docs/auth/ldap",children:"ldap"}),", and\n",(0,s.jsx)(n.a,{href:"/docs/auth/approle",children:"approle"})," auth methods."]}),"\n",(0,s.jsxs)(n.p,{children:["Tune the ",(0,s.jsx)(n.code,{children:"userpass/"})," auth method to lock out the user after 10 failed login\nattempts within 10 minutes."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ bao auth tune -user-lockout-threshold=10  -user-lockout-duration=10m userpass/\nSuccess! Tuned the auth method at: userpass/\n"})}),"\n",(0,s.jsxs)(n.p,{children:["View the current configuration of the auth method enabled at ",(0,s.jsx)(n.code,{children:"userpass/"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",metastring:"{1,11-13}",children:"$ bao read sys/auth/userpass/tune\n\nKey                  Value\n---                  -----\ndefault_lease_ttl    768h\ndescription          n/a\nforce_no_cache       false\nmax_lease_ttl        768h\ntoken_type           default-service\nuser_lockout_counter_reset_duration    0s\nuser_lockout_disable                   false\nuser_lockout_duration                  10m\nuser_lockout_threshold                 10\n"})}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:["The following flags are available in addition to the ",(0,s.jsx)(n.a,{href:"/docs/commands",children:"standard set of\nflags"})," included on all commands."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-allowed-response-headers"})," ",(0,s.jsx)(n.code,{children:'(string: "")'})," - response header values that the auth\nmethod will be allowed to set."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-audit-non-hmac-request-keys"})," ",(0,s.jsx)(n.code,{children:'(string: "")'})," - Key that will not be HMAC'd\nby audit devices in the request data object. Note that multiple keys may be\nspecified by providing this option multiple times, each time with 1 key."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-audit-non-hmac-response-keys"})," ",(0,s.jsx)(n.code,{children:'(string: "")'})," - Key that will not be HMAC'd\nby audit devices in the response data object. Note that multiple keys may be\nspecified by providing this option multiple times, each time with 1 key."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-default-lease-ttl"})," ",(0,s.jsx)(n.code,{children:'(duration: "")'})," - The default lease TTL for this auth\nmethod. If unspecified, this defaults to the OpenBao server's globally\nconfigured default lease TTL, or a previously configured value for the auth\nmethod."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-description"})," ",(0,s.jsx)(n.code,{children:'(string: "")'})," - Specifies the description of the auth method.\nThis overrides the current stored value, if any."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-listing-visibility"})," ",(0,s.jsx)(n.code,{children:'(string: "")'})," - The flag to toggle whether to show the\nmount in the UI-specific listing endpoint. Valid values are ",(0,s.jsx)(n.code,{children:'"unauth"'})," or ",(0,s.jsx)(n.code,{children:'"hidden"'}),".\nPassing empty string leaves the current setting unchanged."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-max-lease-ttl"})," ",(0,s.jsx)(n.code,{children:'(duration: "")'})," - The maximum lease TTL for this auth\nmethod. If unspecified, this defaults to the OpenBao server's globally\nconfigured ",(0,s.jsx)(n.a,{href:"/docs/configuration#max_lease_ttl",children:"maximum lease TTL"}),", or a\npreviously configured value for the auth method. This value is allowed to\noverride the server's global max TTL; it can be longer or shorter."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-passthrough-request-headers"})," ",(0,s.jsx)(n.code,{children:'(string: "")'})," - request header values that will\nbe sent to the auth method. Note that multiple keys may be\nspecified by providing this option multiple times, each time with 1 key."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-token-type"})," ",(0,s.jsx)(n.code,{children:'(string: "")'})," - Specifies the type of tokens that should be\nreturned by the auth method."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-plugin-version"})," ",(0,s.jsx)(n.code,{children:'(string: "")'})," - Configures the semantic version of the plugin\nto use. The new version will not start running until the mount is\n",(0,s.jsx)(n.a,{href:"/docs/commands/plugin/reload",children:"reloaded"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-user-lockout-threshold"})," ",(0,s.jsx)(n.code,{children:'(string: "")'})," - Specifies the number of failed login attempts\nafter which the user is locked out."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-user-lockout-duration"})," ",(0,s.jsx)(n.code,{children:'(duration: "")'})," - Specifies the duration for which a user will be locked out."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-user-lockout-counter-reset-duration"})," ",(0,s.jsx)(n.code,{children:'(duration: "")'})," - Specifies the duration after which the lockout\ncounter is reset with no failed login attempts."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-user-lockout-disable"})," ",(0,s.jsx)(n.code,{children:"(bool: false)"})," - Disables the user lockout feature if set to true."]}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var s=t(96540);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);