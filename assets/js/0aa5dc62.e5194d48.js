"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5103],{46008:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var i=r(74848),s=r(28453);const l={sidebar_label:"Audit log metrics",description:"Technical reference for audit log telemetry values."},n="Audit log telemetry",d={id:"internals/telemetry/metrics/audit",title:"Audit log telemetry",description:"Technical reference for audit log telemetry values.",source:"@site/content/docs/internals/telemetry/metrics/audit.mdx",sourceDirName:"internals/telemetry/metrics",slug:"/internals/telemetry/metrics/audit",permalink:"/docs/internals/telemetry/metrics/audit",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/internals/telemetry/metrics/audit.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Audit log metrics",description:"Technical reference for audit log telemetry values."},sidebar:"docs",previous:{title:"Core system metrics",permalink:"/docs/internals/telemetry/metrics/core-system"},next:{title:"Authentication metrics",permalink:"/docs/internals/telemetry/metrics/authn"}},c={},o=[{value:"Default metrics",id:"default-metrics",level:2},{value:"Audit device metrics",id:"audit-device-metrics",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"audit-log-telemetry",children:"Audit log telemetry"}),"\n",(0,i.jsx)(t.p,{children:"Audit log telemetry provides information on the health of your configured audit\ndevices."}),"\n",(0,i.jsx)(t.h2,{id:"default-metrics",children:"Default metrics"}),"\n",(0,i.jsx)(t.h3,{children:"vault.audit.log_request_failure ((#vault-audit-log_request_failure))"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Metric type"}),(0,i.jsx)(t.th,{children:"Value"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"counter"}),(0,i.jsx)(t.td,{children:"number"}),(0,i.jsx)(t.td,{children:"Number of audit log request failures across all devices"})]})})]}),"\n",(0,i.jsxs)(t.p,{children:["The number of request failures is a ",(0,i.jsx)(t.strong,{children:"crucial metric"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["A non-zero value for ",(0,i.jsx)(t.code,{children:"vault.audit.log_request_failure"})," indicates that all your\nconfigured audit devices failed to log a request (or response). If OpenBao cannot\nproperly audit a request, or the response to a request, the original request\nwill fail."]}),"\n",(0,i.jsx)(t.p,{children:"Refer to the OpenBao logs and any device-specific metrics to troubleshoot the\nfailing audit log device."}),"\n",(0,i.jsx)(t.h3,{children:"vault.audit.log_request ((#vault-audit-log_request))"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Metric type"}),(0,i.jsx)(t.th,{children:"Value"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"summary"}),(0,i.jsx)(t.td,{children:"ms"}),(0,i.jsx)(t.td,{children:"Time required to complete all audit log requests across all audit log devices"})]})})]}),"\n",(0,i.jsx)(t.h3,{children:"vault.audit.log_response_failure ((#vault-audit-log_response_failure))"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Metric type"}),(0,i.jsx)(t.th,{children:"Value"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"counter"}),(0,i.jsx)(t.td,{children:"number"}),(0,i.jsx)(t.td,{children:"Number of audit log request failures across all devices"})]})})]}),"\n",(0,i.jsxs)(t.p,{children:["The number of request failures is a ",(0,i.jsx)(t.strong,{children:"crucial metric"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["A non-zero value for ",(0,i.jsx)(t.code,{children:"vault.audit.log_response_failure"})," indicates that one of\nthe configured audit log devices failed to respond to OpenBao. If OpenBao cannot\nproperly audit a request, or the response to a request, the original request\nwill fail."]}),"\n",(0,i.jsx)(t.p,{children:"Refer to the device-specific metrics and logs to troubleshoot the failing audit\nlog device."}),"\n",(0,i.jsx)(t.h3,{children:"vault.audit.log_response ((#vault-audit-log_response))"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Metric type"}),(0,i.jsx)(t.th,{children:"Value"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"summary"}),(0,i.jsx)(t.td,{children:"ms"}),(0,i.jsx)(t.td,{children:"Time required to complete audit log responses across all audit log devices"})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"audit-device-metrics",children:"Audit device metrics"}),"\n",(0,i.jsxs)(t.p,{children:["Device-specific metrics for each enabled audit device. For example, if you\nenable a file audit device, the related metrics are:\n",(0,i.jsx)(t.code,{children:"vault.audit.file.log_request"})," and ",(0,i.jsx)(t.code,{children:"vault.audit.file.log_response"}),"."]}),"\n",(0,i.jsx)(t.h3,{children:"vault.audit.{DEVICE}.log_request ((#vault-audit-device-log_request))"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Metric type"}),(0,i.jsx)(t.th,{children:"Value"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"summary"}),(0,i.jsx)(t.td,{children:"ms"}),(0,i.jsx)(t.td,{children:"Time required to complete all audit log requests across the device"})]})})]}),"\n",(0,i.jsx)(t.h3,{children:"vault.audit.{DEVICE}.log_response ((#vault-audit-device-log_response))"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Metric type"}),(0,i.jsx)(t.th,{children:"Value"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"summary"}),(0,i.jsx)(t.td,{children:"ms"}),(0,i.jsx)(t.td,{children:"Time required to complete all audit log responses across the device"})]})})]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>d});var i=r(96540);const s={},l=i.createContext(s);function n(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);