"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6758],{52851:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=n(74848),s=n(28453);const i={description:"If a user provides bad credentials several times in quick succession,  OpenBao will stop trying to validate their credentials for a while, instead  returning immediately with a permission denied error."},r="User lockout",a={id:"concepts/user-lockout",title:"User lockout",description:"If a user provides bad credentials several times in quick succession,  OpenBao will stop trying to validate their credentials for a while, instead  returning immediately with a permission denied error.",source:"@site/content/docs/concepts/user-lockout.mdx",sourceDirName:"concepts",slug:"/concepts/user-lockout",permalink:"/openbao/docs/concepts/user-lockout",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/concepts/user-lockout.mdx",tags:[],version:"current",frontMatter:{description:"If a user provides bad credentials several times in quick succession,  OpenBao will stop trying to validate their credentials for a while, instead  returning immediately with a permission denied error."},sidebar:"docs",previous:{title:"Duration string format",permalink:"/openbao/docs/concepts/duration-format"},next:{title:"Events",permalink:"/openbao/docs/concepts/events"}},l={},c=[{value:"Precendence",id:"precendence",level:2},{value:"Configuration",id:"configuration",level:2},{value:"API",id:"api",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"user-lockout",children:"User lockout"}),"\n",(0,o.jsx)(t.p,{children:'If a user provides bad credentials several times in quick succession,\nOpenBao will stop trying to validate their credentials for a while, instead returning immediately\nwith a permission denied error. We call this behavior "user lockout". The time for which\na user will be locked out is called \u201clockout duration\u201d. The user will be able to login after the lockout\nduration has passed. The number of failed login attempts after which the user is locked out is called\n\u201clockout threshold\u201d. The lockout threshold counter is reset to zero after a few minutes without login attempts,\nor upon a successful login attempt. The duration after which the counter will be reset to zero\nafter no login attempts is called "lockout counter reset". This can defeat both automated and targeted requests\ni.e, user-based password guessing attacks as well as automated attacks.'}),"\n",(0,o.jsx)(t.p,{children:'The user lockout feature is enabled by default. The default values for "lockout threshold" is 5 attempts,\n"lockout duration" is 15 minutes, "lockout counter reset" is 15 minutes.'}),"\n",(0,o.jsx)(t.p,{children:"The user lockout feature can be disabled as follows:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["It can be disabled globally using environment variable ",(0,o.jsx)(t.code,{children:"VAULT_DISABLE_USER_LOCKOUT"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["It can be disabled for all supported auth methods (ldap, userpass and approle) or a specific supported auth method using the ",(0,o.jsx)(t.code,{children:"disable_lockout"}),"\nparameter within ",(0,o.jsx)(t.code,{children:"user_lockout"})," stanza in configuration file.\nPlease see ",(0,o.jsx)(t.a,{href:"/docs/configuration/user-lockout#user_lockout-stanza",children:"user lockout configuration"})," for more details."]}),"\n",(0,o.jsxs)(t.li,{children:['It can be disabled for a specific auth mount using "auth tune". Please see ',(0,o.jsx)(t.a,{href:"/docs/commands/auth/tune",children:"auth tune command"}),"\nor ",(0,o.jsx)(t.a,{href:"/api-docs/system/auth#tune-auth-method",children:"auth tune api"})," for more details."]}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"NOTE"}),": This feature is only supported by the userpass, ldap, and approle auth methods."]})}),"\n",(0,o.jsx)(t.h2,{id:"precendence",children:"Precendence"}),"\n",(0,o.jsx)(t.p,{children:"The precedence for user lockout configuration is as follows:"}),"\n",(0,o.jsx)(t.p,{children:'Configuration for an auth mount using tune >> Configuration for an auth method in config file >>\nConfiguration for "all" auth methods in config file >> Default values.'}),"\n",(0,o.jsx)(t.p,{children:"The precedence for user lockout disable is as follows:"}),"\n",(0,o.jsx)(t.p,{children:'Disable using environment variable VAULT_DISABLE_USER_LOCKOUT >>\nConfiguration for an auth mount using tune >> Configuration for an auth method in config file >>\nConfiguration for "all" auth methods in config file >> Default values.'}),"\n",(0,o.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsxs)(t.p,{children:['User lockout parameters can be configured using config file for "all" auth methods or a specific auth method (userpass, ldap, or approle).\nPlease see ',(0,o.jsx)(t.a,{href:"/docs/configuration/user-lockout#user_lockout-stanza",children:"user lockout configuration"})," for more details."]}),"\n",(0,o.jsxs)(t.p,{children:["The user lockout configuration for the auth method at a given path can be tuned using auth tune. Please see ",(0,o.jsx)(t.a,{href:"/docs/commands/auth/tune",children:"auth tune command"}),"\nor ",(0,o.jsx)(t.a,{href:"/api-docs/system/auth#tune-auth-method",children:"auth tune api"})," for more details."]}),"\n",(0,o.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,o.jsxs)(t.p,{children:["Please see ",(0,o.jsx)(t.a,{href:"/api-docs/system/user-lockout",children:"sys/locked-users API"})," for more details."]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var o=n(96540);const s={},i=o.createContext(s);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);