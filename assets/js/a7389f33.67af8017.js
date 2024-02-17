"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3777],{82188:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>h});var a=n(74848),o=n(28453),i=n(11470),r=n(19365);const s={layout:"docs",page_title:"Authentication",description:"Before performing any operation with OpenBao, the connecting client must be authenticated."},l="Authentication",u={id:"concepts/auth",title:"Authentication",description:"Before performing any operation with OpenBao, the connecting client must be authenticated.",source:"@site/content/docs/concepts/auth.mdx",sourceDirName:"concepts",slug:"/concepts/auth",permalink:"/openbao/docs/concepts/auth",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/concepts/auth.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"Authentication",description:"Before performing any operation with OpenBao, the connecting client must be authenticated."},sidebar:"tutorialSidebar",previous:{title:"Concepts",permalink:"/openbao/docs/concepts/"},next:{title:"Clients and entities",permalink:"/openbao/docs/concepts/client-count/"}},c={},h=[{value:"auth methods",id:"auth-methods",level:2},{value:"Tokens",id:"tokens",level:2},{value:"Authenticating",id:"authenticating",level:2},{value:"Via the CLI",id:"via-the-cli",level:3},{value:"Via the API",id:"via-the-api",level:3},{value:"Auth leases",id:"auth-leases",level:2},{value:"Code example",id:"code-example",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"authentication",children:"Authentication"}),"\n",(0,a.jsxs)(t.p,{children:["Authentication in OpenBao is the process by which user or machine supplied\ninformation is verified against an internal or external system. OpenBao supports\nmultiple ",(0,a.jsx)(t.a,{href:"/docs/auth",children:"auth methods"})," including GitHub,\nLDAP, AppRole, and more. Each auth method has a specific use case."]}),"\n",(0,a.jsxs)(t.p,{children:["Before a client can interact with OpenBao, it must ",(0,a.jsx)(t.em,{children:"authenticate"})," against an\nauth method. Upon authentication, a token is generated. This token is\nconceptually similar to a session ID on a website. The token may have attached\npolicy, which is mapped at authentication time. This process is described in\ndetail in the ",(0,a.jsx)(t.a,{href:"/docs/concepts/policies",children:"policies concepts"})," documentation."]}),"\n",(0,a.jsx)(t.h2,{id:"auth-methods",children:"auth methods"}),"\n",(0,a.jsx)(t.p,{children:"OpenBao supports a number of auth methods. Some backends are targeted\ntoward users while others are targeted toward machines. Most authentication\nbackends must be enabled before use. To enable an auth method:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell-session",children:"$ bao write sys/auth/my-auth type=userpass\n"})}),"\n",(0,a.jsx)(t.p,{children:'This enables the "userpass" auth method at the path "my-auth". This\nauthentication will be accessible at the path "my-auth". Often you will see\nauthentications at the same path as their name, but this is not a requirement.'}),"\n",(0,a.jsxs)(t.p,{children:["To learn more about this authentication, use the built-in ",(0,a.jsx)(t.code,{children:"path-help"})," command:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell-session",children:"$ bao path-help auth/my-auth\n# ...\n"})}),"\n",(0,a.jsx)(t.p,{children:"OpenBao supports multiple auth methods simultaneously, and you can even\nmount the same type of auth method at different paths. Only one\nauthentication is required to gain access to OpenBao, and it is not currently\npossible to force a user through multiple auth methods to gain\naccess, although some backends do support MFA."}),"\n",(0,a.jsx)(t.h2,{id:"tokens",children:"Tokens"}),"\n",(0,a.jsxs)(t.p,{children:["There is an ",(0,a.jsx)(t.a,{href:"/docs/concepts/tokens",children:"entire page dedicated to tokens"}),",\nbut it is important to understand that authentication works by verifying\nyour identity and then generating a token to associate with that identity."]}),"\n",(0,a.jsx)(t.p,{children:"For example, even though you may authenticate using something like GitHub,\nOpenBao generates a unique access token for you to use for future requests.\nThe CLI automatically attaches this token to requests, but if you're using\nthe API you'll have to do this manually."}),"\n",(0,a.jsxs)(t.p,{children:["This token given for authentication with any backend can also be used\nwith the full set of token commands, such as creating new sub-tokens,\nrevoking tokens, and renewing tokens. This is all covered on the\n",(0,a.jsx)(t.a,{href:"/docs/concepts/tokens",children:"token concepts page"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"authenticating",children:"Authenticating"}),"\n",(0,a.jsx)(t.h3,{id:"via-the-cli",children:"Via the CLI"}),"\n",(0,a.jsxs)(t.p,{children:["To authenticate with the CLI, ",(0,a.jsx)(t.code,{children:"bao login"})," is used. This supports many\nof the built-in auth methods. For example, with GitHub:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell-session",children:"$ bao login -method=github token=<token>\n...\n"})}),"\n",(0,a.jsx)(t.p,{children:'After authenticating, you will be logged in. The CLI command will also\noutput your raw token. This token is used for revocation and renewal.\nAs the user logging in, the primary use case of the token is renewal,\ncovered below in the "Auth Leases" section.'}),"\n",(0,a.jsxs)(t.p,{children:["To determine what variables are needed for an auth method,\nsupply the ",(0,a.jsx)(t.code,{children:"-method"})," flag without any additional arguments and help\nwill be shown."]}),"\n",(0,a.jsx)(t.p,{children:"If you're using a method that isn't supported via the CLI, then the API\nmust be used."}),"\n",(0,a.jsx)(t.h3,{id:"via-the-api",children:"Via the API"}),"\n",(0,a.jsxs)(t.p,{children:["API authentication is generally used for machine authentication. Each\nauth method implements its own login endpoint. Use the ",(0,a.jsx)(t.code,{children:"bao path-help"}),"\nmechanism to find the proper endpoint."]}),"\n",(0,a.jsxs)(t.p,{children:["For example, the GitHub login endpoint is located at ",(0,a.jsx)(t.code,{children:"auth/github/login"}),".\nAnd to determine the arguments needed, ",(0,a.jsx)(t.code,{children:"bao path-help auth/github/login"})," can\nbe used."]}),"\n",(0,a.jsx)(t.h2,{id:"auth-leases",children:"Auth leases"}),"\n",(0,a.jsxs)(t.p,{children:["Just like secrets, identities have\n",(0,a.jsx)(t.a,{href:"/docs/concepts/lease",children:"leases"})," associated with them. This means that\nyou must reauthenticate after the given lease period to continue accessing\nOpenBao."]}),"\n",(0,a.jsx)(t.p,{children:"To set the lease associated with an identity, reference the help for\nthe specific auth method in use. It is specific to each backend\nhow leasing is implemented."}),"\n",(0,a.jsxs)(t.p,{children:["And just like secrets, identities can be renewed without having to\ncompletely reauthenticate. Just use ",(0,a.jsx)(t.code,{children:"bao token renew <token>"})," with the\nleased token associated with your identity to renew it."]}),"\n",(0,a.jsx)(t.h2,{id:"code-example",children:"Code example"}),"\n",(0,a.jsx)(t.p,{children:"The following code snippet demonstrates how to renew auth tokens."}),"\n",(0,a.jsx)(i.A,{children:(0,a.jsx)(r.A,{value:"Go",heading:"Go",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",metastring:"showLineNumbers",children:'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"log"\n\n\topenbao "github.com/openbao/openbao/api"\n\tauth "github.com/openbao/openbao/api/auth/userpass"\n)\n\n// Once you\'ve set the token for your OpenBao client, you will need to\n// periodically renew its lease.\n//\n// A function like this should be run as a goroutine to avoid blocking.\n//\n// Production applications may also wish to be more tolerant of failures and\n// retry rather than exiting.\nfunc renewToken(client *openbao.Client) {\n\tfor {\n\t\topenbaoLoginResp, err := login(client)\n\t\tif err != nil {\n\t\t\tlog.Fatalf("unable to authenticate to OpenBao: %v", err)\n\t\t}\n\t\ttokenErr := manageTokenLifecycle(client, openbaoLoginResp)\n\t\tif tokenErr != nil {\n\t\t\tlog.Fatalf("unable to start managing token lifecycle: %v", tokenErr)\n\t\t}\n\t}\n}\n\n// Starts token lifecycle management. Returns only fatal errors as errors,\n// otherwise returns nil so we can attempt login again.\nfunc manageTokenLifecycle(client *openbao.Client, token *openbao.Secret) error {\n\trenew := token.Auth.Renewable // You may notice a different top-level field called Renewable. That one is used for dynamic secrets renewal, not token renewal.\n\tif !renew {\n\t\tlog.Printf("Token is not configured to be renewable. Re-attempting login.")\n\t\treturn nil\n\t}\n\n\twatcher, err := client.NewLifetimeWatcher(&openbao.LifetimeWatcherInput{\n\t\tSecret:    token,\n\t\tIncrement: 3600, // Learn more about this optional value in https://www.vaultproject.io/docs/concepts/lease#lease-durations-and-renewal\n\t})\n\tif err != nil {\n\t\treturn fmt.Errorf("unable to initialize new lifetime watcher for renewing auth token: %w", err)\n\t}\n\n\tgo watcher.Start()\n\tdefer watcher.Stop()\n\n\tfor {\n\t\tselect {\n\t\t// `DoneCh` will return if renewal fails, or if the remaining lease\n\t\t// duration is under a built-in threshold and either renewing is not\n\t\t// extending it or renewing is disabled. In any case, the caller\n\t\t// needs to attempt to log in again.\n\t\tcase err := <-watcher.DoneCh():\n\t\t\tif err != nil {\n\t\t\t\tlog.Printf("Failed to renew token: %v. Re-attempting login.", err)\n\t\t\t\treturn nil\n\t\t\t}\n\t\t\t// This occurs once the token has reached max TTL.\n\t\t\tlog.Printf("Token can no longer be renewed. Re-attempting login.")\n\t\t\treturn nil\n\n\t\t// Successfully completed renewal\n\t\tcase renewal := <-watcher.RenewCh():\n\t\t\tlog.Printf("Successfully renewed: %#v", renewal)\n\t\t}\n\t}\n}\n\nfunc login(client *openbao.Client) (*openbao.Secret, error) {\n\t// WARNING: A plaintext password like this is obviously insecure.\n\t// See the hashicorp/vault-examples repo for full examples of how to securely\n\t// log in to OpenBao using various auth methods. This function is just\n\t// demonstrating the basic idea that a *openbao.Secret is returned by\n\t// the login call.\n\tuserpassAuth, err := auth.NewUserpassAuth("my-user", &auth.Password{FromString: "my-password"})\n\tif err != nil {\n\t\treturn nil, fmt.Errorf("unable to initialize userpass auth method: %w", err)\n\t}\n\n\tauthInfo, err := client.Auth().Login(context.TODO(), userpassAuth)\n\tif err != nil {\n\t\treturn nil, fmt.Errorf("unable to login to userpass auth method: %w", err)\n\t}\n\tif authInfo == nil {\n\t\treturn nil, fmt.Errorf("no auth info was returned after login")\n\t}\n\n\treturn authInfo, nil\n}\n'})})})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var a=n(34164);const o={tabItem:"tabItem_Ymn6"};var i=n(74848);function r(e){let{children:t,hidden:n,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,r),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>k});var a=n(96540),o=n(34164),i=n(23104),r=n(56347),s=n(205),l=n(57485),u=n(31682),c=n(89466);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const o=(0,r.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(o.location.search);t.set(i,e),o.replace({...o.location,search:t.toString()})}),[i,o])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,i=d(e),[r,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[u,h]=m({queryString:n,groupId:o}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,i]=(0,c.Dv)(n);return[o,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:o}),g=(()=>{const e=u??f;return p({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{g&&l(g)}),[g]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),b(e)}),[h,b,i]),tabValues:i}}var b=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=n(74848);function v(e){let{className:t,block:n,selectedValue:a,selectValue:r,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),o=s[n].value;o!==a&&(u(t),r(o))},h=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:h,onClick:c,...i,className:(0,o.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:o}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function x(e){const t=f(e);return(0,w.jsxs)("div",{className:(0,o.A)("tabs-container",g.tabList),children:[(0,w.jsx)(v,{...e,...t}),(0,w.jsx)(y,{...e,...t})]})}function k(e){const t=(0,b.A)();return(0,w.jsx)(x,{...e,children:h(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var a=n(96540);const o={},i=a.createContext(o);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);