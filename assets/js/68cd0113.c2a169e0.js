"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2737],{26373:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var s=t(74848),i=t(28453);const r={layout:"docs",page_title:"Events",description:"Events are an experimental feature that allows OpenBao and plugins to exchange arbitrary activity data within OpenBao and with external subscribers via WebSockets."},c="Events",d={id:"concepts/events",title:"Events",description:"Events are an experimental feature that allows OpenBao and plugins to exchange arbitrary activity data within OpenBao and with external subscribers via WebSockets.",source:"@site/content/docs/concepts/events.mdx",sourceDirName:"concepts",slug:"/concepts/events",permalink:"/openbao/docs/concepts/events",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/concepts/events.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"Events",description:"Events are an experimental feature that allows OpenBao and plugins to exchange arbitrary activity data within OpenBao and with external subscribers via WebSockets."},sidebar:"tutorialSidebar",previous:{title:"Duration string format",permalink:"/openbao/docs/concepts/duration-format"},next:{title:"High availability mode (HA)",permalink:"/openbao/docs/concepts/ha"}},a={},o=[{value:"Event types",id:"event-types",level:2},{value:"Event format",id:"event-format",level:2},{value:"Subscribing to events",id:"subscribing-to-events",level:2},{value:"Policies",id:"policies",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"events",children:"Events"}),"\n",(0,s.jsxs)(n.p,{children:["~> ",(0,s.jsx)(n.strong,{children:"Important:"})," Events are experimental, and may have backwards incompatible changes introduced in subsequent versions of OpenBao, or be removed altogether."]}),"\n",(0,s.jsxs)(n.p,{children:["Events are arbitrary, ",(0,s.jsx)(n.strong,{children:"non-secret"})," data that can be exchanged between producers (OpenBao and plugins)\nand subscribers (OpenBao components and external users via the API).\nEvents are delivered on a ",(0,s.jsx)(n.em,{children:"best-effort"})," basis, so do not have delivery guarantees at this time."]}),"\n",(0,s.jsxs)(n.p,{children:["Events are not considered production-ready, and so are disabled by default when starting a OpenBao server.\nEvents can be enabled via the ",(0,s.jsx)(n.code,{children:"events.alpha1"})," ",(0,s.jsx)(n.a,{href:"/docs/configuration#experiments",children:"experiment option"})," in the OpenBao\nconfiguration or on the command-line:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ bao server -experiment events.alpha1\n"})}),"\n",(0,s.jsx)(n.p,{children:"-> Note: Experiments can only be enabled at startup, and cannot be disabled or enabled at runtime."}),"\n",(0,s.jsx)(n.h2,{id:"event-types",children:"Event types"}),"\n",(0,s.jsxs)(n.p,{children:['Internal components of OpenBao as well as external plugins can generate events.\nThese are published to "event types", sometimes called "topics" in some event systems.\nAll events of a specific event type will have the same format for their\nadditional ',(0,s.jsx)(n.code,{children:"metadata"})," field."]}),"\n",(0,s.jsx)(n.p,{children:"The following events are currently generated by OpenBao and its builtin plugins automatically:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Plugin"}),(0,s.jsx)(n.th,{children:"Event Type"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"kv"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"kv-v1/delete"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"kv"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"kv-v1/write"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"kv"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"kv-v2/config-write"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"kv"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"kv-v2/data-delete"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"kv"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"kv-v2/data-patch"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"kv"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"kv-v2/data-write"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"kv"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"kv-v2/delete"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"kv"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"kv-v2/destroy"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"kv"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"kv-v2/metadata-delete"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"kv"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"kv-v2/metadata-patch"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"kv"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"kv-v2/metadata-write"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"kv"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"kv-v2/undelete"})})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"event-format",children:"Event format"}),"\n",(0,s.jsxs)(n.p,{children:["Events may be formatted in protobuf binary format or as JSON.\nSee ",(0,s.jsx)(n.code,{children:"EventReceived"})," in ",(0,s.jsx)(n.a,{href:"https://github.com/openbao/openbao/blob/main/sdk/logical/event.proto",children:(0,s.jsx)(n.code,{children:"sdk/logical/event.proto"})})," in the relevant OpenBao version for the protobuf schema."]}),"\n",(0,s.jsxs)(n.p,{children:["When formatted as JSON, the event conforms to the ",(0,s.jsx)(n.a,{href:"https://cloudevents.io/",children:"CloudEvents"})," specification."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"id"})," ",(0,s.jsx)(n.code,{children:"(string)"})," - CloudEvents unique identifier for the event. The ",(0,s.jsx)(n.code,{children:"id"})," is unique for each event, and events with the same ",(0,s.jsx)(n.code,{children:"id"})," represent the same event."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"source"})," ",(0,s.jsx)(n.code,{children:"(string)"})," - CloudEvents source, which is currently ",(0,s.jsx)(n.code,{children:"https://vaultproject.io"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"specversion"})," ",(0,s.jsx)(n.code,{children:"(string)"})," - The CloudEvents specification version this conforms to."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"type"})," ",(0,s.jsx)(n.code,{children:"(string)"})," - CloudEvents type this event corresponds to, which is currently always ",(0,s.jsx)(n.code,{children:"*"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:" datacontenttype"})," ",(0,s.jsx)(n.code,{children:"(string)"})," - CloudEvents content type of the event, which is currently always ",(0,s.jsx)(n.code,{children:"application/json"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"time"})," ",(0,s.jsx)(n.code,{children:"(string)"})," - ISO 8601-formatted timestamp for when the event was generated."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:" data"})," ",(0,s.jsx)(n.code,{children:"(object)"})," - OpenBao-specific data."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"event"})," ",(0,s.jsx)(n.code,{children:"(Event)"})," - contains the event that happened."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"id"})," ",(0,s.jsx)(n.code,{children:"(string)"})," - (repeat of the ",(0,s.jsx)(n.code,{children:"id"})," parameter)"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"metadata"})," ",(0,s.jsx)(n.code,{children:"(object)"})," - arbitrary extra data customized for the event type."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"eventType"})," ",(0,s.jsx)(n.code,{children:"(string)"})," - the event type that was published."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"pluginInfo"})," ",(0,s.jsx)(n.code,{children:"(PluginInfo)"})," - information about the plugin that generated the event, if applicable."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"mountClass"})," ",(0,s.jsx)(n.code,{children:"(string)"})," - the class of plugin, e.g., ",(0,s.jsx)(n.code,{children:"secret"}),", ",(0,s.jsx)(n.code,{children:"auth"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"mountAccessor"})," ",(0,s.jsx)(n.code,{children:"(string)"})," - the unique ID of the mounted plugin."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"mountPath"})," ",(0,s.jsx)(n.code,{children:"(string)"})," - the path that the plugin is mounted at."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"plugin"})," ",(0,s.jsx)(n.code,{children:"(string)"})," - the name of the plugin, e.g., ",(0,s.jsx)(n.code,{children:"kv"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Here is an example event in JSON format:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "id": "901f2388-aabb-a385-7bc0-0b09d5fa060b",\n  "source": "https://vaultproject.io/",\n  "specversion": "1.0",\n  "type": "*",\n  "data": {\n    "event": {\n      "id": "901f2388-aabb-a385-7bc0-0b09d5fa060b",\n      "metadata": {\n        "current_version": "1",\n        "oldest_version": "0",\n        "path": "data/foo"\n      }\n    },\n    "event_type": "kv-v2/data-write",\n    "plugin_info": {\n      "mount_class": "secret",\n      "mount_accessor": "kv_a6081d01",\n      "mount_path": "secret/",\n      "plugin": "kv"\n    }\n  },\n  "datacontentype": "application/cloudevents",\n  "time": "2023-02-17T13:11:39.227341-08:00"\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"subscribing-to-events",children:"Subscribing to events"}),"\n",(0,s.jsxs)(n.p,{children:["OpenBao has an API endpoint, ",(0,s.jsx)(n.code,{children:"/v1/sys/events/subscribe/{eventType}"}),", that allows users to subscribe to events via a\nWebSocket stream.\nThis endpoint supports the standard authentication and authorization workflows used by other OpenBao endpoints.\nThe ",(0,s.jsx)(n.code,{children:"{eventType}"})," parameter is a non-empty string of what event type to subscribe to, which may contain wildcards (",(0,s.jsx)(n.code,{children:"*"}),")\nto subscribe to multiple events, e.g., ",(0,s.jsx)(n.code,{children:"kv-v2/data-*"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["By default, the events are delivered in protobuf binary format.\nThe endpoint can also format the data as JSON if the ",(0,s.jsx)(n.code,{children:"json"})," query parameter is set to ",(0,s.jsx)(n.code,{children:"true"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:'$ wscat -H "X-Vault-Token: $(bao print token)" --connect \'ws://127.0.0.1:8200/v1/sys/events/subscribe/kv-v2/data-write?json=true\n{"id":"901f2388-aabb-a385-7bc0-0b09d5fa060b","source":"https://vaultproject.io/","specversion":"1.0","type":"*","data":{"event":{"id":"901f2388-aabb-a385-7bc0-0b09d5fa060b","metadata":{"current_version":"1","oldest_version":"0","path":"data/foo"}},"event_type":"kv-v2/data-write","plugin_info":{"mount_class":"secret","mount_accessor":"kv_a6081d01","mount_path":"secret/","plugin":"kv"}},"datacontentype":"application/cloudevents","time":"2023-02-17T13:11:39.227341-08:00"}\n...\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The OpenBao CLI support this endpoint via the ",(0,s.jsx)(n.code,{children:"events subscribe"})," command, which will output a stream of\nJSON for the requested events (one line per event):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:'$ bao events subscribe kv-v2/data-write\n{"id":"901f2388-aabb-a385-7bc0-0b09d5fa060b","source":"https://vaultproject.io/","specversion":"1.0","type":"*","data":{"event":{"id":"901f2388-aabb-a385-7bc0-0b09d5fa060b","metadata":{"current_version":"1","oldest_version":"0","path":"data/foo"}},"event_type":"kv-v2/data-write","plugin_info":{"mount_class":"secret","mount_accessor":"kv_a6081d01","mount_path":"secret/","plugin":"kv"}},"datacontentype":"application/cloudevents","time":"2023-02-17T13:11:39.227341-08:00"}\n...\n'})}),"\n",(0,s.jsx)(n.h2,{id:"policies",children:"Policies"}),"\n",(0,s.jsxs)(n.p,{children:["To subscribe, the ",(0,s.jsx)(n.code,{children:"read"})," capability must be granted by a ",(0,s.jsx)(n.a,{href:"/docs/concepts/policies",children:"policy"}),"\non the ",(0,s.jsx)(n.code,{children:"/v1/sys/events/subscribe/{eventType}"})," path, where ",(0,s.jsx)(n.code,{children:"{eventType}"})," is the event type that will be\nsubscribed to. The path may contain wildcards."]}),"\n",(0,s.jsx)(n.p,{children:"An example blanket policy is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",children:'path "sys/events/subscribe/*" {\n    capabilities = ["read"]\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>d});var s=t(96540);const i={},r=s.createContext(i);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);