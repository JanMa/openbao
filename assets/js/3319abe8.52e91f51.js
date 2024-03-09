"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2469],{64474:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=s(74848),n=s(28453);const i={sidebar_label:"Database metrics",description:"Technical reference for database telemetry values."},d="Database telemetry",a={id:"internals/telemetry/metrics/database",title:"Database telemetry",description:"Technical reference for database telemetry values.",source:"@site/content/docs/internals/telemetry/metrics/database.mdx",sourceDirName:"internals/telemetry/metrics",slug:"/internals/telemetry/metrics/database",permalink:"/openbao/docs/internals/telemetry/metrics/database",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/internals/telemetry/metrics/database.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Database metrics",description:"Technical reference for database telemetry values."},sidebar:"docs",previous:{title:"Availability metics",permalink:"/openbao/docs/internals/telemetry/metrics/availability"},next:{title:"Policy metrics",permalink:"/openbao/docs/internals/telemetry/metrics/policy"}},c={},l=[{value:"Secrets database metrics",id:"secrets-database-metrics",level:2}];function h(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"database-telemetry",children:"Database telemetry"}),"\n",(0,t.jsx)(r.p,{children:"Database telemetry provides general information about configured secrets engines\nand databases."}),"\n",(0,t.jsx)(r.h2,{id:"secrets-database-metrics",children:"Secrets database metrics"}),"\n",(0,t.jsxs)(r.p,{children:["Metrics related to your configured ",(0,t.jsx)(r.strong,{children:"secrets engines"}),", including\ndatabase-specific metrics for each named secrets engine. For example, if you\nenable a PostgreSQL secrets engine called ",(0,t.jsx)(r.code,{children:"postgresql-prod"}),", the related\n",(0,t.jsx)(r.code,{children:"CreateUser.error"})," metric is ",(0,t.jsx)(r.code,{children:"database.postgresql-prod.CreateUser.error"}),"."]}),"\n",(0,t.jsx)(r.h3,{children:"database.Close {#database-close}"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Metric type"}),(0,t.jsx)(r.th,{children:"Value"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"summary"}),(0,t.jsx)(r.td,{children:"ms"}),(0,t.jsx)(r.td,{children:"Time required to close a database secret engine (across all database secrets engines)"})]})})]}),"\n",(0,t.jsx)(r.h3,{children:"database.Close.error {#database-close-error}"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Metric type"}),(0,t.jsx)(r.th,{children:"Value"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"counter"}),(0,t.jsx)(r.td,{children:"number"}),(0,t.jsx)(r.td,{children:"Number of errors encountered across all database secrets engines while closing database connections"})]})})]}),"\n",(0,t.jsx)(r.h3,{children:"database.CreateUser {#database-createuser}"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Metric type"}),(0,t.jsx)(r.th,{children:"Value"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"summary"}),(0,t.jsx)(r.td,{children:"ms"}),(0,t.jsx)(r.td,{children:"Time required to create a user across all database secrets engines"})]})})]}),"\n",(0,t.jsx)(r.h3,{children:"database.CreateUser.error {#database-createuser-error}"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Metric type"}),(0,t.jsx)(r.th,{children:"Value"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"counter"}),(0,t.jsx)(r.td,{children:"number"}),(0,t.jsx)(r.td,{children:"Number of errors encountered across all database secrets engines while creating users"})]})})]}),"\n",(0,t.jsx)(r.h3,{children:"database.Initialize {#database-initialize}"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Metric type"}),(0,t.jsx)(r.th,{children:"Value"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"summary"}),(0,t.jsx)(r.td,{children:"ms"}),(0,t.jsx)(r.td,{children:"Time required to initialize a database secret engine (across all database secrets engines)"})]})})]}),"\n",(0,t.jsx)(r.h3,{children:"database.Initialize.error {#database-initialize-error}"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Metric type"}),(0,t.jsx)(r.th,{children:"Value"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"counter"}),(0,t.jsx)(r.td,{children:"number"}),(0,t.jsx)(r.td,{children:"Number of errors encountered across all database secrets engines while initializing the database"})]})})]}),"\n",(0,t.jsx)(r.h3,{children:"database.{NAME}.Close {#database-name-close}"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Metric type"}),(0,t.jsx)(r.th,{children:"Value"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"summary"}),(0,t.jsx)(r.td,{children:"ms"}),(0,t.jsx)(r.td,{children:"Time required to close the database secrets engine {NAME}"})]})})]}),"\n",(0,t.jsx)(r.h3,{children:"database.{NAME}.Close.error {#database-name-close-error}"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Metric type"}),(0,t.jsx)(r.th,{children:"Value"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"counter"}),(0,t.jsx)(r.td,{children:"number"}),(0,t.jsx)(r.td,{children:"Number of errors encountered for the named database secrets engines while closing database connections"})]})})]}),"\n",(0,t.jsx)(r.h3,{children:"database.{NAME}.CreateUser {#database-name-createuser}"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Metric type"}),(0,t.jsx)(r.th,{children:"Value"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"summary"}),(0,t.jsx)(r.td,{children:"ms"}),(0,t.jsx)(r.td,{children:"Time required to create a user for the named database secrets engine"})]})})]}),"\n",(0,t.jsx)(r.h3,{children:"database.{NAME}.CreateUser.error {#database-name-createuser-error}"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Metric type"}),(0,t.jsx)(r.th,{children:"Value"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"counter"}),(0,t.jsx)(r.td,{children:"number"}),(0,t.jsx)(r.td,{children:"Number of errors encountered for the named database secrets engines while creating users"})]})})]}),"\n",(0,t.jsx)(r.h3,{children:"database.{NAME}.Initialize {#database-name-initialize}"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Metric type"}),(0,t.jsx)(r.th,{children:"Value"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"summary"}),(0,t.jsx)(r.td,{children:"ms"}),(0,t.jsx)(r.td,{children:"Time required to initialize a database secret engine for the named database"})]})})]}),"\n",(0,t.jsx)(r.h3,{children:"database.{NAME}.Initialize.error {#database-name-initialize-error}"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Metric type"}),(0,t.jsx)(r.th,{children:"Value"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"counter"}),(0,t.jsx)(r.td,{children:"number"}),(0,t.jsx)(r.td,{children:"Number of errors encountered for the named database secrets engines while initializing the database"})]})})]}),"\n",(0,t.jsx)(r.h3,{children:"database.{NAME}.RenewUser {#database-name-renewuser}"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Metric type"}),(0,t.jsx)(r.th,{children:"Value"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"summary"}),(0,t.jsx)(r.td,{children:"ms"}),(0,t.jsx)(r.td,{children:"Time required to renew a user for the named database secrets engine"})]})})]}),"\n",(0,t.jsx)(r.h3,{children:"database.{NAME}.RenewUser.error {#database-name-renewuser-error}"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Metric type"}),(0,t.jsx)(r.th,{children:"Value"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"counter"}),(0,t.jsx)(r.td,{children:"number"}),(0,t.jsx)(r.td,{children:"Number of errors encountered for the named database secrets engines while renewing users"})]})})]}),"\n",(0,t.jsx)(r.h3,{children:"database.{NAME}.RevokeUser {#database-name-revokeuser}"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Metric type"}),(0,t.jsx)(r.th,{children:"Value"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"summary"}),(0,t.jsx)(r.td,{children:"ms"}),(0,t.jsx)(r.td,{children:"Time required to revoke a user for the named database secrets engine"})]})})]}),"\n",(0,t.jsx)(r.h3,{children:"database.{NAME}.RevokeUser.error {#database-name-revokeuser-error}"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Metric type"}),(0,t.jsx)(r.th,{children:"Value"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"counter"}),(0,t.jsx)(r.td,{children:"number"}),(0,t.jsx)(r.td,{children:"Number of errors encountered for the named database secrets engines while revoking users"})]})})]}),"\n",(0,t.jsx)(r.h3,{children:"database.RenewUser {#database-renewuser}"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Metric type"}),(0,t.jsx)(r.th,{children:"Value"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"summary"}),(0,t.jsx)(r.td,{children:"ms"}),(0,t.jsx)(r.td,{children:"Time required to renew a user across all database secrets engines"})]})})]}),"\n",(0,t.jsx)(r.h3,{children:"database.RenewUser.error {#database-renewuser-error}"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Metric type"}),(0,t.jsx)(r.th,{children:"Value"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"counter"}),(0,t.jsx)(r.td,{children:"number"}),(0,t.jsx)(r.td,{children:"Number of errors encountered across all database secrets engines while renewing users"})]})})]}),"\n",(0,t.jsx)(r.h3,{children:"database.RevokeUser {#database-revokeuser}"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Metric type"}),(0,t.jsx)(r.th,{children:"Value"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"summary"}),(0,t.jsx)(r.td,{children:"ms"}),(0,t.jsx)(r.td,{children:"Time required to revoke a user across all database secrets engines"})]})})]}),"\n",(0,t.jsx)(r.h3,{children:"database.RevokeUser.error {#database-revokeuser-error}"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Metric type"}),(0,t.jsx)(r.th,{children:"Value"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"counter"}),(0,t.jsx)(r.td,{children:"number"}),(0,t.jsx)(r.td,{children:"Number of errors encountered across all database secrets engines while revoking users"})]})})]})]})}function x(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>d,x:()=>a});var t=s(96540);const n={},i=t.createContext(n);function d(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);