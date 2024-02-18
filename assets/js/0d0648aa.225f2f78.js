"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7591],{59929:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>x,frontMatter:()=>c,metadata:()=>a,toc:()=>h});var r=n(74848),i=n(28453),s=n(11470),l=n(19365);const c={description:"Technical overview of client count calculations in OpenBao "},o="Client count calculation",a={id:"concepts/client-count/counting",title:"Client count calculation",description:"Technical overview of client count calculations in OpenBao ",source:"@site/content/docs/concepts/client-count/counting.mdx",sourceDirName:"concepts/client-count",slug:"/concepts/client-count/counting",permalink:"/openbao/docs/concepts/client-count/counting",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/concepts/client-count/counting.mdx",tags:[],version:"current",frontMatter:{description:"Technical overview of client count calculations in OpenBao "},sidebar:"docs",previous:{title:"Overview",permalink:"/openbao/docs/concepts/client-count/"},next:{title:"FAQ",permalink:"/openbao/docs/concepts/client-count/faq"}},d={},h=[{value:"How OpenBao tracks clients",id:"how-openbao-tracks-clients",level:2},{value:"How OpenBao approximates current-month client count",id:"how-openbao-approximates-current-month-client-count",level:2},{value:"Testing verification for client count approximations",id:"testing-verification-for-client-count-approximations",level:3},{value:"Resource costs for client computation",id:"resource-costs-for-client-computation",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"client-count-calculation",children:"Client count calculation"}),"\n",(0,r.jsx)(t.p,{children:"OpenBao provides usage telemetry for the number of clients based on the number of\nunique entity assignments within an OpenBao cluster over a given billing period:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Standard entity assignments based on authentication method for active entities."}),"\n",(0,r.jsx)(t.li,{children:"Constructed entity assignments for active non-entity tokens."}),"\n",(0,r.jsx)(t.li,{children:"Certificate entity assignments for ACME connections."}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-markdown",children:"CLIENT_COUNT_PER_CLUSTER = UNIQUE_STANDARD_ENTITIES +\n                           UNIQUE_CONSTRUCTED_ENTITIES +\n                           UNIQUE CERTIFICATE_ENTITIES\n"})}),"\n",(0,r.jsx)(t.admonition,{title:"Certificate entities currently reported as non-entity clients",type:"note",children:(0,r.jsxs)(t.p,{children:["OpenBao currently rolls certificate entities into the non-entity client count\nin the UI and API query requests. For more detailed information on certificate\nentities, use the\n",(0,r.jsx)(t.a,{href:"/api-docs/system/internal-counters",children:"internal counter endpoint"})," to query\nmonthly data for the PKI mount path or export historic data and look for\n",(0,r.jsx)(t.code,{children:"client_type=pki-acme"}),"."]})}),"\n",(0,r.jsx)(t.h2,{id:"how-openbao-tracks-clients",children:"How OpenBao tracks clients"}),"\n",(0,r.jsx)(t.p,{children:"Each time a client authenticates, OpenBao checks whether the corresponding entity\nID has already been recorded in the client log as active for the current month:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"If no record exists"}),", OpenBao adds an entry for the entity ID."]}),"\n",(0,r.jsxs)(t.li,{children:["If a record exists but the entity was last active ",(0,r.jsx)(t.strong,{children:"prior to the current month"}),",\nOpenBao adds a new entry to the client record for the entity ID."]}),"\n",(0,r.jsxs)(t.li,{children:["If a record exists and the entity was last active ",(0,r.jsx)(t.strong,{children:"within the current month"}),",\nOpenBao does not add a new entry to the client record for the entity ID."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"For example:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Two non-entity tokens under the same namespace, with the same alias name and\npolicy assignment receive the same entity assignment and are only counted\n",(0,r.jsx)(t.strong,{children:"once"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Two authentication requests from a single ACME client for the same certificate\nidentifiers from different mounts receive the same entity assignments and\nare counted ",(0,r.jsx)(t.strong,{children:"once"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["An application authenticating with AppRole receive the same entity assignment\nevery time and only counted ",(0,r.jsx)(t.strong,{children:"once"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["At the ",(0,r.jsx)(t.strong,{children:"end of each month"}),", OpenBao pre-computes reports for each cluster on the\nnumber of active entities, per namespace, for each time period within the\nconfigured retention period. By de-duplicating records from the current month\nagainst records for the previous month, OpenBao ensures entities that remain\nactive within every calendar month are only counted once for the year."]}),"\n",(0,r.jsx)(t.p,{children:"The deduplication process has two additional consequences:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Detailed reporting lags by 1 month at the start of the billing period."}),"\n",(0,r.jsx)(t.li,{children:"Billing period reports that include the current month must use an\napproximation for the number of new clients in the current month."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"how-openbao-approximates-current-month-client-count",children:"How OpenBao approximates current-month client count"}),"\n",(0,r.jsxs)(t.p,{children:["OpenBao approximates client count for the current month using a\n",(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/HyperLogLog",children:"hyperloglog algorithm"})," that looks\nat the difference between the cardinalities of:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["the number of clients across the ",(0,r.jsx)(t.strong,{children:"entire"})," billing period, and"]}),"\n",(0,r.jsxs)(t.li,{children:["the number of clients across the billing period ",(0,r.jsx)(t.strong,{children:"excluding"})," clients from the current month."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["The approximation algorithm uses the\n",(0,r.jsx)(t.a,{href:"https://github.com/axiomhq/hyperloglog",children:"axiomhq"})," library with fourteen\nregisters and sparse representations (when applicable). The multiset for the\ncalculation is the total number of clients within a billing period, and the\naccuracy estimate for the approximation decreases as the difference between the\nnumber of clients in the current month and the number of clients in the billing\nperiod increases."]}),"\n",(0,r.jsx)(t.h3,{id:"testing-verification-for-client-count-approximations",children:"Testing verification for client count approximations"}),"\n",(0,r.jsxs)(t.p,{children:["Given ",(0,r.jsx)(t.code,{children:"CM"})," as the number of clients for the current month and ",(0,r.jsx)(t.code,{children:"BP"})," as the number\nof clients in the billing period, we found that the approximation becomes\nincreasingly imprecise as:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["the difference between ",(0,r.jsx)(t.code,{children:"BC"})," and ",(0,r.jsx)(t.code,{children:"CM"})," increases"]}),"\n",(0,r.jsxs)(t.li,{children:["the value of ",(0,r.jsx)(t.code,{children:"CM"})," approaches zero."]}),"\n",(0,r.jsx)(t.li,{children:"the number of months in the billing period increase."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["The maximum observed error rate\n(",(0,r.jsx)(t.code,{children:"ER = (FOUND_NEW_CLIENTS / EXPECTED_NEW_CLIENTS)"}),") was 30% for 10,000 clients\nor less, with an error rate of 5 \u2013 10% in the average case."]}),"\n",(0,r.jsxs)(t.p,{children:["For the purposes of predictive analysis, the following tables list a random\nsample the values we found during testing for ",(0,r.jsx)(t.code,{children:"CM"}),", ",(0,r.jsx)(t.code,{children:"BP"}),", and ",(0,r.jsx)(t.code,{children:"ER"}),"."]}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(l.A,{value:"Single-month tests",heading:"Single-month tests",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.th,{style:{textAlign:"center"},children:["Current month (",(0,r.jsx)(t.code,{children:"CM"}),")"]}),(0,r.jsxs)(t.th,{style:{textAlign:"center"},children:["Billing period (",(0,r.jsx)(t.code,{children:"BP"}),")"]}),(0,r.jsxs)(t.th,{style:{textAlign:"center"},children:["Error rate (",(0,r.jsx)(t.code,{children:"ER"}),")"]})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"7"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"10"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"0%"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"20"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"600"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"0%"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"20"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"1000"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"0%"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"20"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"6000"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"10%"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"20"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"10000"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"10%"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"200"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"600"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"0%"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"200"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"10000"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"7%"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"400"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"6000"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"5%"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"2000"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"10000"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"4%"})]})]})]})}),(0,r.jsx)(l.A,{value:"Multi-month / multi-segment tests",heading:"Multi-month / multi-segment tests",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.th,{style:{textAlign:"center"},children:["Current month (",(0,r.jsx)(t.code,{children:"CM"}),")"]}),(0,r.jsxs)(t.th,{style:{textAlign:"center"},children:["Billing period (",(0,r.jsx)(t.code,{children:"BP"}),")"]}),(0,r.jsxs)(t.th,{style:{textAlign:"center"},children:["Error rate (",(0,r.jsx)(t.code,{children:"ER"}),")"]})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"20"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"15"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"0%"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"20"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"100"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"0%"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"20"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"1000"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"0%"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"20"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"10000"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"30%"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"200"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"10000"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"6%"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"2000"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"10000"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"2%"})]})]})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"resource-costs-for-client-computation",children:"Resource costs for client computation"}),"\n",(0,r.jsx)(t.p,{children:"In addition to the storage used for storing the pre-computed reports, each\nactive entity in the client log consumes a few bytes of storage. As a safety\nmeasure against runaway storage growth, OpenBao limits the number of entity\nrecords to 656,000 per month, but typical storage costs are much less."}),"\n",(0,r.jsx)(t.p,{children:"On average, 1000 monthly active entities requires 1.5 MiB of storage capacity\nover the default 24-month retention period."}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(l.A,{value:"Related concepts",heading:"Related concepts",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/docs/concepts/client-count/",children:"Clients and entities"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/docs/concepts/client-count/faq",children:"Client count FAQ"})})]})}),(0,r.jsx)(l.A,{value:"Related API docs",heading:"Related API docs",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/api-docs/system/internal-counters#client-count",children:"Client Count API"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/api-docs/system/internal-counters",children:"Internal counters API"})})]})}),(0,r.jsx)(l.A,{value:"Related tutorials",heading:"Related tutorials",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/tutorials/monitoring/usage-metrics",children:(0,r.jsx)(t.p,{children:"OpenBao Usage Metrics in OpenBao UI"})})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/tutorials/monitoring/usage-metrics",children:"KMIP Client metrics"})})]})}),(0,r.jsx)(l.A,{value:"Other resources",heading:"Other resources",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://github.com/axiomhq/hyperloglog#readme",children:"Accuracy estimates for the axiomhq hyperloglog library"})}),(0,r.jsx)("li",{children:(0,r.jsxs)(t.p,{children:["Blog post:\n",(0,r.jsx)("a",{href:"https://www.hashicorp.com/blog/onboarding-applications-to-vault-using-terraform-a-practical-guide",children:"Onboarding Applications to Vault Using Terraform: A Practical Guide"})]})})]})})]})]})}function x(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var r=n(34164);const i={tabItem:"tabItem_Ymn6"};var s=n(74848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,l),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>A});var r=n(96540),i=n(34164),s=n(23104),l=n(56347),c=n(205),o=n(57485),a=n(31682),d=n(89466);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}(n);return function(e){const t=(0,a.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function x(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const i=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,s=u(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[a,h]=p({queryString:n,groupId:i}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,s]=(0,d.Dv)(n);return[i,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:i}),j=(()=>{const e=a??m;return x({value:e,tabValues:s})?e:null})();(0,c.A)((()=>{j&&o(j)}),[j]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),g(e)}),[h,g,s]),tabValues:s}}var g=n(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(74848);function y(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:c}=e;const o=[],{blockElementScrollPositionUntilNextRender:a}=(0,s.a_)(),d=e=>{const t=e.currentTarget,n=o.indexOf(t),i=c[n].value;i!==r&&(a(t),l(i))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:c.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:h,onClick:d,...s,className:(0,i.A)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:i}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function v(e){const t=m(e);return(0,f.jsxs)("div",{className:(0,i.A)("tabs-container",j.tabList),children:[(0,f.jsx)(y,{...e,...t}),(0,f.jsx)(b,{...e,...t})]})}function A(e){const t=(0,g.A)();return(0,f.jsx)(v,{...e,children:h(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>c});var r=n(96540);const i={},s=r.createContext(i);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);