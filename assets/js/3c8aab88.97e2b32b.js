"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7025],{66985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=n(74848),a=n(28453);const s={layout:"docs",page_title:"operator usage - Command",description:'"operator usage" produces a report on active clients.'},r="operator usage",i={id:"commands/operator/usage",title:"operator usage",description:'"operator usage" produces a report on active clients.',source:"@site/content/docs/commands/operator/usage.mdx",sourceDirName:"commands/operator",slug:"/commands/operator/usage",permalink:"/openbao/docs/commands/operator/usage",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/commands/operator/usage.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"operator usage - Command",description:'"operator usage" produces a report on active clients.'},sidebar:"tutorialSidebar",previous:{title:"operator unseal",permalink:"/openbao/docs/commands/operator/unseal"},next:{title:"patch",permalink:"/openbao/docs/commands/patch"}},c={},l=[{value:"Examples",id:"examples",level:2},{value:"Usage",id:"usage",level:2},{value:"Output options",id:"output-options",level:3},{value:"Command options",id:"command-options",level:3}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"operator-usage",children:"operator usage"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"operator usage"})," command allows an administrator to retrieve a\n",(0,o.jsx)(t.a,{href:"/docs/concepts/client-count",children:"client count"})," report\nfor the default reporting period, or for a specific time range of months."]}),"\n",(0,o.jsx)(t.p,{children:"The command output will list clients by distinct entities, non-entity tokens, and total\nactive clients for each namespace, and the total for the entire cluster. It may\nindicate that no data is available for the requested time range, which may be\nbecause the client count reporting is disabled, the time range is too far\nin the past, or no data has yet been collected since the feature was enabled."}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["Refer to the ",(0,o.jsx)(t.a,{href:"/tutorials/monitoring/usage-metrics",children:"OpenBao Usage Metrics"})," tutorial to learn more about usage metrics,\nincluding required policy and data collection details."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(t.p,{children:"Retrieve the client counts for the default reporting period:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell-session",children:"$ bao operator usage\nPeriod start: 2019-11-01T00:00:00Z\nPeriod end: 2020-10-31T23:59:59Z\n\nNamespace path   Distinct entities   Non-Entity tokens   Active clients\n--------------   -----------------   -----------------   --------------\n[root]           1581                332                 1913\n\nTotal            1581                332                 1913\n"})}),"\n",(0,o.jsx)(t.p,{children:"Retrieve the client counts for a specific month in the past:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell-session",children:"$ bao operator usage -start-time=2020-01 -end-time=2020-01\nPeriod start: 2020-01-01T00:00:00Z\nPeriod end: 2020-01-31T23:59:59Z\n\nNamespace path   Distinct entities   Non-Entity tokens   Active clients\n--------------   -----------------   -----------------   --------------\n[root]           954                 176                 1130\n\nTotal            954                 176                 1130\n"})}),"\n",(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:["The following flags are available in addition to the ",(0,o.jsx)(t.a,{href:"/docs/commands",children:"standard set of\nflags"})," included on all commands."]}),"\n",(0,o.jsx)(t.h3,{id:"output-options",children:"Output options"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"-format"})," ",(0,o.jsx)(t.code,{children:'(string: "table")'}),' - Print the output in the given format. Valid\nformats are "table", "json", or "yaml". This can also be specified via the\n',(0,o.jsx)(t.code,{children:"VAULT_FORMAT"})," environment variable."]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"command-options",children:"Command options"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"-start-time"})," ",(0,o.jsx)(t.code,{children:"(date)"})," - Start month of the report to generate. May be given as YYYY-MM-DD, YYYY-MM-DD,\na full RFC3339 timestamp, or a Unix epoch timestamp. Defaults to the configurable ",(0,o.jsx)(t.code,{children:"default_report_months"}),"\nprior to ",(0,o.jsx)(t.code,{children:"end-time"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"-end-time"})," ",(0,o.jsx)(t.code,{children:"(date: previous month)"})," - End month of the report to generate. Defaults to the end of the\nprevious calendar month."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"The output shows the exact time range being reported, which may not match the input parameters if a full\nmonth is not available, or if the available reports are a subset of the months requested."})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var o=n(96540);const a={},s=o.createContext(a);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);