"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4901],{28461:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var s=t(74848),i=t(28453);const a={sidebar_label:"Overview",description:"OpenBao Agent Caching allows client-side caching of responses containing newly\ncreated tokens and responses containing leased secrets generated off of these\nnewly created tokens."},c="OpenBao agent caching",r={id:"agent-and-proxy/agent/caching/index",title:"OpenBao agent caching",description:"OpenBao Agent Caching allows client-side caching of responses containing newly\ncreated tokens and responses containing leased secrets generated off of these\nnewly created tokens.",source:"@site/content/docs/agent-and-proxy/agent/caching/index.mdx",sourceDirName:"agent-and-proxy/agent/caching",slug:"/agent-and-proxy/agent/caching/",permalink:"/openbao/docs/agent-and-proxy/agent/caching/",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/agent-and-proxy/agent/caching/index.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Overview",description:"OpenBao Agent Caching allows client-side caching of responses containing newly\ncreated tokens and responses containing leased secrets generated off of these\nnewly created tokens."},sidebar:"docs",previous:{title:"API proxy",permalink:"/openbao/docs/agent-and-proxy/agent/apiproxy"},next:{title:"Overview",permalink:"/openbao/docs/agent-and-proxy/agent/caching/persistent-caches/"}},o={},l=[{value:"Caching and renewals",id:"caching-and-renewals",level:2},{value:"Persistent cache",id:"persistent-cache",level:2},{value:"Cache evictions",id:"cache-evictions",level:2},{value:"Request uniqueness",id:"request-uniqueness",level:2},{value:"Renewal management",id:"renewal-management",level:2},{value:"Agent CLI",id:"agent-cli",level:3},{value:"API",id:"api",level:2},{value:"Cache clear",id:"cache-clear",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Sample payload",id:"sample-payload",level:3},{value:"Sample request",id:"sample-request",level:3},{value:"Configuration (<code>cache</code>)",id:"configuration-cache",level:2},{value:"Configuration (Persist)",id:"configuration-persist",level:3},{value:"Configuration (<code>listener</code>)",id:"configuration-listener",level:2},{value:"Example configuration",id:"example-configuration",level:3},{value:"Tutorial",id:"tutorial",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"openbao-agent-caching",children:"OpenBao agent caching"}),"\n",(0,s.jsx)(n.p,{children:"OpenBao Agent Caching allows client-side caching of responses containing newly\ncreated tokens and responses containing leased secrets generated off of these\nnewly created tokens. The renewals of the cached tokens and leases are also\nmanaged by the agent."}),"\n",(0,s.jsx)(n.h2,{id:"caching-and-renewals",children:"Caching and renewals"}),"\n",(0,s.jsx)(n.p,{children:"Response caching and renewals are managed by the agent only under these\nspecific scenarios."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Token creation requests are made through the agent. This means that any\nlogin operations performed using various auth methods and invoking the token\ncreation endpoints of the token auth method via the agent will result in the\nresponse getting cached by the agent. Responses containing new tokens will\nbe cached by the agent only if the parent token is already being managed by\nthe agent or if the new token is an orphan token."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Leased secret creation requests are made through the agent using tokens that\nare already managed by the agent. This means that any dynamic credentials\nthat are issued using the tokens managed by the agent, will be cached and\nits renewals are taken care of."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"persistent-cache",children:"Persistent cache"}),"\n",(0,s.jsx)(n.p,{children:"OpenBao Agent can restore tokens and leases from a persistent cache file created\nby a previous OpenBao Agent process."}),"\n",(0,s.jsxs)(n.p,{children:["Refer to the ",(0,s.jsx)(n.a,{href:"/docs/agent-and-proxy/agent/caching/persistent-caches",children:"OpenBao Agent Persistent\nCaching"})," page for more information on\nthis functionality."]}),"\n",(0,s.jsx)(n.h2,{id:"cache-evictions",children:"Cache evictions"}),"\n",(0,s.jsx)(n.p,{children:"The eviction of cache entries pertaining to secrets will occur when the agent\ncan no longer renew them. This can happen when the secrets hit their maximum\nTTL or if the renewals result in errors."}),"\n",(0,s.jsx)(n.p,{children:"Agent does some best-effort cache evictions by observing specific request types\nand response codes. For example, if a token revocation request is made via the\nagent and if the forwarded request to the OpenBao server succeeds, then agent\nevicts all the cache entries associated with the revoked token. Similarly, any\nlease revocation operation will also be intercepted by the agent and the\nrespective cache entries will be evicted."}),"\n",(0,s.jsxs)(n.p,{children:["Note that while agent evicts the cache entries upon secret expirations and upon\nintercepting revocation requests, it is still possible for the agent to be\ncompletely unaware of the revocations that happen through direct client\ninteractions with the OpenBao server. This could potentially lead to stale cache\nentries. For managing the stale entries in the cache, an endpoint\n",(0,s.jsx)(n.code,{children:"/agent/v1/cache-clear"}),"(see below) is made available to manually evict cache\nentries based on some of the query criteria used for indexing the cache entries."]}),"\n",(0,s.jsx)(n.h2,{id:"request-uniqueness",children:"Request uniqueness"}),"\n",(0,s.jsx)(n.p,{children:"In order to detect repeat requests and return cached responses, agent will need\nto have a way to uniquely identify the requests. This computation as it stands\ntoday takes a simplistic approach (may change in future) of serializing and\nhashing the HTTP request along with all the headers and the request body. This\nhash value is then used as an index into the cache to check if the response is\nreadily available. The consequence of this approach is that the hash value for\nany request will differ if any data in the request is modified. This has the\nside-effect of resulting in false negatives if say, the ordering of the request\nparameters are modified. As long as the requests come in without any change,\ncaching behavior should be consistent. Identical requests with differently\nordered request values will result in duplicated cache entries. A heuristic\nassumption that the clients will use consistent mechanisms to make requests,\nthereby resulting in consistent hash values per request is the idea upon which\nthe caching functionality is built upon."}),"\n",(0,s.jsx)(n.h2,{id:"renewal-management",children:"Renewal management"}),"\n",(0,s.jsxs)(n.p,{children:["The tokens and leases are renewed by the agent using the secret renewer that is\nmade available via the OpenBao server's ",(0,s.jsx)(n.a,{href:"https://godoc.org/github.com/openbao/openbao/api#Renewer",children:"Go\nAPI"}),". Agent performs\nall operations in memory and does not persist anything to storage. This means\nthat when the agent is shut down, all the renewal operations are immediately\nterminated and there is no way for agent to resume renewals after the fact.\nNote that shutting down the agent does not indicate revocations of the secrets,\ninstead it only means that renewal responsibility for all the valid unrevoked\nsecrets are no longer performed by the OpenBao agent."]}),"\n",(0,s.jsx)(n.h3,{id:"agent-cli",children:"Agent CLI"}),"\n",(0,s.jsxs)(n.p,{children:["Agent's listener address will be picked up by the CLI through the\n",(0,s.jsx)(n.code,{children:"VAULT_AGENT_ADDR"})," environment variable. This should be a complete URL such as\n",(0,s.jsx)(n.code,{children:'"http://127.0.0.1:8200"'}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,s.jsx)(n.h3,{id:"cache-clear",children:"Cache clear"}),"\n",(0,s.jsxs)(n.p,{children:["This endpoint clears the cache based on given criteria. To use this\nAPI, some information on how the agent caches values should be known\nbeforehand. Each response that is cached in the agent will be indexed on some\nfactors depending on the type of request. Those factors can be the ",(0,s.jsx)(n.code,{children:"token"})," that\nis belonging to the cached response, the ",(0,s.jsx)(n.code,{children:"token_accessor"})," of the token\nbelonging to the cached response, the ",(0,s.jsx)(n.code,{children:"request_path"})," that resulted in the\ncached response, the ",(0,s.jsx)(n.code,{children:"lease"})," that is attached to the cached response, the\n",(0,s.jsx)(n.code,{children:"namespace"})," to which the cached response belongs to, and a few more. This API\nexposes some factors through which associated cache entries are fetched and\nevicted. For listeners without caching enabled, this API will still be available,\nbut will do nothing (there is no cache to clear) and will return a ",(0,s.jsx)(n.code,{children:"200"})," response."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Path"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Produces"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"POST"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"/agent/v1/cache-clear"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"200 application/json"})})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"type"})," ",(0,s.jsx)(n.code,{children:"(strings: required)"})," - The type of cache entries to evict. Valid\nvalues are ",(0,s.jsx)(n.code,{children:"request_path"}),", ",(0,s.jsx)(n.code,{children:"lease"}),", ",(0,s.jsx)(n.code,{children:"token"}),", ",(0,s.jsx)(n.code,{children:"token_accessor"}),", and ",(0,s.jsx)(n.code,{children:"all"}),".\nIf the ",(0,s.jsx)(n.code,{children:"type"})," is set to ",(0,s.jsx)(n.code,{children:"all"}),", the ",(0,s.jsx)(n.em,{children:"entire cache"})," is cleared."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"value"})," ",(0,s.jsx)(n.code,{children:"(string: required)"})," - An exact value or the prefix of the value for\nthe ",(0,s.jsx)(n.code,{children:"type"})," selected. This parameter is optional when the ",(0,s.jsx)(n.code,{children:"type"})," is set\nto ",(0,s.jsx)(n.code,{children:"all"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"namespace"})," ",(0,s.jsx)(n.code,{children:"(string: optional)"})," - This is only applicable when the ",(0,s.jsx)(n.code,{children:"type"})," is set to\n",(0,s.jsx)(n.code,{children:"request_path"}),". The namespace of which the cache entries to be evicted for\nthe given request path."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"sample-payload",children:"Sample payload"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "type": "token",\n  "value": "hvs.rlNjegSKykWcplOkwsjd8bP9"\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"sample-request",children:"Sample request"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ curl \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:1234/agent/v1/cache-clear\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"configuration-cache",children:["Configuration (",(0,s.jsx)(n.code,{children:"cache"}),")"]}),"\n",(0,s.jsxs)(n.p,{children:["The presence of the top level ",(0,s.jsx)(n.code,{children:"cache"})," block in any way (including an empty ",(0,s.jsx)(n.code,{children:"cache"})," block)  will enable the cache.\nThe top level ",(0,s.jsx)(n.code,{children:"cache"})," block has the following configuration entry:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"persist"})," ",(0,s.jsx)(n.code,{children:"(object: optional)"})," - Configuration for the persistent cache."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"cache"})," block also supports the ",(0,s.jsx)(n.code,{children:"use_auto_auth_token"}),", ",(0,s.jsx)(n.code,{children:"enforce_consistency"}),", and\n",(0,s.jsx)(n.code,{children:"when_inconsistent"})," configuration values of the ",(0,s.jsx)(n.code,{children:"api_proxy"})," block\n",(0,s.jsx)(n.a,{href:"/docs/agent-and-proxy/agent/apiproxy#configuration-api_proxy",children:"described in the API Proxy documentation"})," only to\nmaintain backwards compatibility. This configuration ",(0,s.jsx)(n.strong,{children:"cannot"})," be specified alongside ",(0,s.jsx)(n.code,{children:"api_proxy"})," equivalents,\nshould not be preferred over configuring these values in the ",(0,s.jsx)(n.code,{children:"api_proxy"})," block,\nand ",(0,s.jsx)(n.code,{children:"api_proxy"})," should be the preferred place to configure these values."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," When the ",(0,s.jsx)(n.code,{children:"cache"})," block is defined, at least one\n",(0,s.jsx)(n.a,{href:"/docs/agent-and-proxy/agent/template",children:"template"})," or ",(0,s.jsx)(n.a,{href:"/docs/agent-and-proxy/agent#listener-stanza",children:"listener"})," must also be defined\nin the config, otherwise there is no way to utilize the cache."]})}),"\n",(0,s.jsx)(n.h3,{id:"configuration-persist",children:"Configuration (Persist)"}),"\n",(0,s.jsxs)(n.p,{children:["These are common configuration values that live within the ",(0,s.jsx)(n.code,{children:"persist"})," block:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"type"})," ",(0,s.jsx)(n.code,{children:"(string: required)"})," - The type of the persistent cache to use,\ne.g. ",(0,s.jsx)(n.code,{children:"kubernetes"}),". ",(0,s.jsx)(n.em,{children:"Note"}),": when using HCL this can be used as the key for\nthe block, e.g. ",(0,s.jsx)(n.code,{children:'persist "kubernetes" {...}'}),". Currently, only ",(0,s.jsx)(n.code,{children:"kubernetes"}),"\nis supported."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"path"})," ",(0,s.jsx)(n.code,{children:"(string: required)"})," - The path on disk where the persistent cache file\nshould be created or restored from."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"keep_after_import"})," ",(0,s.jsx)(n.code,{children:"(bool: optional)"})," - When set to true, a restored cache file\nis not deleted. Defaults to ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"exit_on_err"})," ",(0,s.jsx)(n.code,{children:"(bool: optional)"})," - When set to true, if any errors occur during\na persistent cache restore, OpenBao Agent will exit with an error. Defaults to ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"service_account_token_file"})," ",(0,s.jsx)(n.code,{children:"(string: optional)"})," - When ",(0,s.jsx)(n.code,{children:"type"})," is set to ",(0,s.jsx)(n.code,{children:"kubernetes"}),",\nthis configures the path on disk where the Kubernetes service account token can be found.\nDefaults to ",(0,s.jsx)(n.code,{children:"/var/run/secrets/kubernetes.io/serviceaccount/token"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"configuration-listener",children:["Configuration (",(0,s.jsx)(n.code,{children:"listener"}),")"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"listener"})," ",(0,s.jsx)(n.code,{children:"(array of objects: required)"})," - Configuration for the listeners."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["There can be one or more ",(0,s.jsx)(n.code,{children:"listener"})," blocks at the top level. Adding a listener enables\nthe ",(0,s.jsx)(n.a,{href:"/docs/agent-and-proxy/agent/apiproxy",children:"API Proxy"})," and enables the API proxy to use the cache, if configured.\nThese configuration values are common to both ",(0,s.jsx)(n.code,{children:"tcp"})," and ",(0,s.jsx)(n.code,{children:"unix"})," listener blocks. Blocks of type\n",(0,s.jsx)(n.code,{children:"tcp"})," support the standard ",(0,s.jsx)(n.code,{children:"tcp"})," ",(0,s.jsx)(n.a,{href:"/docs/configuration/listener/tcp",children:"listener"}),"\noptions. Additionally, the ",(0,s.jsx)(n.code,{children:"role"})," string option is available as part of the top level\nof the ",(0,s.jsx)(n.code,{children:"listener"})," block, which can be configured to ",(0,s.jsx)(n.code,{children:"metrics_only"})," to serve only metrics,\nor the default role, ",(0,s.jsx)(n.code,{children:"default"}),", which serves everything (including metrics)."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"type"})," ",(0,s.jsx)(n.code,{children:"(string: required)"})," - The type of the listener to use. Valid values\nare ",(0,s.jsx)(n.code,{children:"tcp"})," and ",(0,s.jsx)(n.code,{children:"unix"}),".\n",(0,s.jsx)(n.em,{children:"Note"}),": when using HCL this can be used as the key for the block, e.g.\n",(0,s.jsx)(n.code,{children:'listener "tcp" {...}'}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"address"})," ",(0,s.jsx)(n.code,{children:"(string: required)"})," - The address for the listener to listen to.\nThis can either be a URL path when using ",(0,s.jsx)(n.code,{children:"tcp"})," or a file path when using\n",(0,s.jsx)(n.code,{children:"unix"}),". For example, ",(0,s.jsx)(n.code,{children:"127.0.0.1:8200"})," or ",(0,s.jsx)(n.code,{children:"/path/to/socket"}),". Defaults to\n",(0,s.jsx)(n.code,{children:"127.0.0.1:8200"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"tls_disable"})," ",(0,s.jsx)(n.code,{children:"(bool: false)"})," - Specifies if TLS will be disabled."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"tls_key_file"})," ",(0,s.jsx)(n.code,{children:"(string: optional)"})," - Specifies the path to the private key\nfor the certificate."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"tls_cert_file"})," ",(0,s.jsx)(n.code,{children:"(string: optional)"})," - Specifies the path to the certificate\nfor TLS."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"example-configuration",children:"Example configuration"}),"\n",(0,s.jsxs)(n.p,{children:["Here is an example of a cache configuration with the optional ",(0,s.jsx)(n.code,{children:"persist"})," block,\nalongside a regular listener, and a listener that only serves metrics."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",children:'# Other OpenBao agent configuration blocks\n# ...\n\ncache {\n\tpersist = {\n\t\ttype = "kubernetes"\n\t\tpath = "/openbao/agent-cache/"\n\t\tkeep_after_import = true\n\t\texit_on_err = true\n\t\tservice_account_token_file = "/tmp/serviceaccount/token"\n\t}\n}\n\nlistener "tcp" {\n    address = "127.0.0.1:8100"\n    tls_disable = true\n}\n\nlistener "tcp" {\n    address = "127.0.0.1:3000"\n    tls_disable = true\n    role = "metrics_only"\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"tutorial",children:"Tutorial"}),"\n",(0,s.jsxs)(n.p,{children:["Refer to the ",(0,s.jsx)(n.a,{href:"/tutorials/vault-agent/agent-caching",children:"OpenBao Agent\nCaching"}),"\ntutorial to learn how to use the OpenBao Agent to increase the availability of tokens and secrets to clients using its Caching function."]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var s=t(96540);const i={},a=s.createContext(i);function c(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);