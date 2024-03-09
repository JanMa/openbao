"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5463],{35345:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>h,toc:()=>d});var s=t(74848),a=t(28453);const i={sidebar_label:"enable",description:'The "auth enable" command enables an auth method at a given path. If an auth\nmethod already exists at the given path, an error is returned. After the auth\nmethod is enabled, it usually needs configuration.'},o="auth enable",h={id:"commands/auth/enable",title:"auth enable",description:'The "auth enable" command enables an auth method at a given path. If an auth\nmethod already exists at the given path, an error is returned. After the auth\nmethod is enabled, it usually needs configuration.',source:"@site/content/docs/commands/auth/enable.mdx",sourceDirName:"commands/auth",slug:"/commands/auth/enable",permalink:"/openbao/docs/commands/auth/enable",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/commands/auth/enable.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"enable",description:'The "auth enable" command enables an auth method at a given path. If an auth\nmethod already exists at the given path, an error is returned. After the auth\nmethod is enabled, it usually needs configuration.'},sidebar:"docs",previous:{title:"disable",permalink:"/openbao/docs/commands/auth/disable"},next:{title:"help",permalink:"/openbao/docs/commands/auth/help"}},l={},d=[{value:"Examples",id:"examples",level:2},{value:"Usage",id:"usage",level:2}];function r(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"auth-enable",children:"auth enable"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"auth enable"})," command enables an auth method at a given path. If an auth\nmethod already exists at the given path, an error is returned. After the auth\nmethod is enabled, it usually needs configuration. The configuration varies by\nauth method."]}),"\n",(0,s.jsxs)(n.p,{children:["An auth method is responsible for authenticating users or machines and assigning\nthem policies and a token with which they can access OpenBao. Authentication is\nusually mapped to policy. Please see the ",(0,s.jsx)(n.a,{href:"/docs/concepts/policies",children:"policies\nconcepts"})," page for more information."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:'Enable the auth method "userpass" enabled at "userpass/":'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ bao auth enable userpass\nSuccess! Enabled the userpass auth method at: userpass/\n"})}),"\n",(0,s.jsx)(n.p,{children:"Create a user:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ bao write auth/userpass/users/sethvargo password=secret\nSuccess! Data written to: auth/userpass/users/sethvargo\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For more information on the specific configuration options and paths, please see\nthe ",(0,s.jsx)(n.a,{href:"/docs/auth",children:"auth method"})," documentation."]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:["The following flags are available in addition to the ",(0,s.jsx)(n.a,{href:"/docs/commands",children:"standard set of\nflags"})," included on all commands."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-audit-non-hmac-request-keys"})," ",(0,s.jsx)(n.code,{children:'(string: "")'})," - Key that will not be HMAC'd\nby audit devices in the request data object. Note that multiple keys may be\nspecified by providing this option multiple times, each time with 1 key.\nAn example of this is provided in the ",(0,s.jsx)(n.a,{href:"/docs/commands/auth/tune",children:"tune section"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-audit-non-hmac-response-keys"})," ",(0,s.jsx)(n.code,{children:'(string: "")'})," - Key that will not be HMAC'd\nby audit devices in the response data object. Note that multiple keys may be\nspecified by providing this option multiple times, each time with 1 key."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-default-lease-ttl"})," ",(0,s.jsx)(n.code,{children:'(duration: "")'})," - The default lease TTL for this auth\nmethod. If unspecified, this defaults to the OpenBao server's globally\nconfigured default lease TTL, or a previously configured value for the auth\nmethod. Uses ",(0,s.jsx)(n.a,{href:"/docs/concepts/duration-format",children:"duration format strings"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-passthrough-request-headers"})," ",(0,s.jsx)(n.code,{children:'(string: "")'})," - request header values that will\nbe sent to the auth method. Note that multiple keys may be\nspecified by providing this option multiple times, each time with 1 key."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-allowed-response-headers"})," ",(0,s.jsx)(n.code,{children:'(string: "")'})," - response header values that the auth\nmethod will be allowed to set. Note that multiple keys may be\nspecified by providing this option multiple times, each time with 1 key."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-description"})," ",(0,s.jsx)(n.code,{children:'(string: "")'})," - Human-friendly description for the purpose of\nthis auth method."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-listing-visibility"})," ",(0,s.jsx)(n.code,{children:'(string: "")'})," - The flag to toggle whether to show the\nmount in the UI-specific listing endpoint. Valid values are ",(0,s.jsx)(n.code,{children:'"unauth"'})," or ",(0,s.jsx)(n.code,{children:'"hidden"'}),",\nwith the default ",(0,s.jsx)(n.code,{children:'""'})," being equivalent to ",(0,s.jsx)(n.code,{children:'"hidden"'}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-local"})," ",(0,s.jsx)(n.code,{children:"(bool: false)"})," - Mark the auth method as local-only. Local auth\nmethods are not replicated nor removed by replication."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-max-lease-ttl"})," ",(0,s.jsx)(n.code,{children:'(string: "")'}),' - The maximum lease duration, specified as\na string duration like "5s" or "30m".']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-path"})," ",(0,s.jsx)(n.code,{children:'(string: "")'}),' - Place where the auth method will be accessible. This\nmust be unique across all auth methods. This defaults to the "type" of the\nauth method. The auth method will be accessible at ',(0,s.jsx)(n.code,{children:"/auth/<path>"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-seal-wrap"})," ",(0,s.jsx)(n.code,{children:"(bool: false)"})," - Enable seal wrapping for the mount, causing\nvalues stored by the mount to be wrapped by the seal's encryption capability."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-token-type"})," ",(0,s.jsx)(n.code,{children:'(string: "")'})," - Specifies the type of tokens that should be\nreturned by the auth method."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-plugin-version"})," ",(0,s.jsx)(n.code,{children:'(string: "")'})," - Configures the semantic version of the plugin\nto use. If unspecified, implies the built-in or any matching unversioned plugin\nthat may have been registered."]}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>h});var s=t(96540);const a={},i=s.createContext(a);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function h(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);