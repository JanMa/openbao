"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4493],{2068:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=e(74848),s=e(28453);const r={layout:"docs",page_title:"Transform",description:"Part of OpenBao's Advanced Data Protection solution, protecting sensitive information stored outside of OpenBao."},i="Transform secrets engine",a={id:"concepts/transform",title:"Transform secrets engine",description:"Part of OpenBao's Advanced Data Protection solution, protecting sensitive information stored outside of OpenBao.",source:"@site/content/docs/concepts/transform.mdx",sourceDirName:"concepts",slug:"/concepts/transform",permalink:"/openbao/docs/concepts/transform",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/concepts/transform.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"Transform",description:"Part of OpenBao's Advanced Data Protection solution, protecting sensitive information stored outside of OpenBao."},sidebar:"docs",previous:{title:"Client count FAQ",permalink:"/openbao/docs/concepts/client-count/faq"},next:{title:"Mount migration",permalink:"/openbao/docs/concepts/mount-migration"}},c={},l=[{value:"Comparison to transit",id:"comparison-to-transit",level:2},{value:"What solution when?",id:"what-solution-when",level:2}];function p(n){const t={em:"em",h1:"h1",h2:"h2",img:"img",p:"p",strong:"strong",...(0,s.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"transform-secrets-engine",children:"Transform secrets engine"}),"\n",(0,o.jsxs)(t.p,{children:["Part of OpenBao's Advanced Data Protection solutions, Transform provides mechanisms\nfor ",(0,o.jsx)(t.em,{children:"transforming"})," sensitive information to protect it even as it lives outside\nOpenBao's sphere."]}),"\n",(0,o.jsxs)(t.p,{children:["Transform consists of three modes, called ",(0,o.jsx)(t.em,{children:"transformations"}),". Format Preserving\nEncryption (",(0,o.jsx)(t.strong,{children:"FPE"}),") for encrypting and decrypting values while retaining their\nformats. ",(0,o.jsx)(t.strong,{children:"Masking"})," for replacing sensitive information with masking\ncharacters. And ",(0,o.jsx)(t.strong,{children:"Tokenization"})," which replaces sensitive information with\nmathematically unrelated tokens."]}),"\n",(0,o.jsx)(t.h2,{id:"comparison-to-transit",children:"Comparison to transit"}),"\n",(0,o.jsx)(t.p,{children:"Transit implements many traditional cryptographic primitives, such as AES encryption and\nRSA signatures (among others). Transform implements solutions to protect sensitive\nvalues in more narrow, but still critical use cases."}),"\n",(0,o.jsx)(t.h2,{id:"what-solution-when",children:"What solution when?"}),"\n",(0,o.jsx)(t.p,{children:"When should one use a particular transform or transit encryption? Based on your\nuse case and its requirements, this flowchart can help you choose the right\nsolution."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Transit vs Transform",src:e(21839).A+"",width:"1000",height:"626"})}),"\n",(0,o.jsx)(t.p,{children:"Keep in mind that unlike all other solutions, Tokenization is stateful, and all\nvalues must be stored either within OpenBao or a supported external store. As such\nall other solutions will outperform and outscale tokenization."})]})}function d(n={}){const{wrapper:t}={...(0,s.R)(),...n.components};return t?(0,o.jsx)(t,{...n,children:(0,o.jsx)(p,{...n})}):p(n)}},21839:(n,t,e)=>{e.d(t,{A:()=>o});const o=e.p+"assets/images/transit-or-transform-b84c173a34cbb9cc16fa12a4b6284d59.png"},28453:(n,t,e)=>{e.d(t,{R:()=>i,x:()=>a});var o=e(96540);const s={},r=o.createContext(s);function i(n){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function a(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),o.createElement(r.Provider,{value:t},n.children)}}}]);