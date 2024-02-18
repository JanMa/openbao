"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9859],{9275:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var s=t(74848),n=t(28453);const r={layout:"docs",page_title:"pki list-intermediates - Command",description:'The "pki list-intermediates" command searches a mount, or set of mounts for\nchild certificates.'},c="pki list-intermediates",d={id:"commands/pki/list-intermediates",title:"pki list-intermediates",description:'The "pki list-intermediates" command searches a mount, or set of mounts for\nchild certificates.',source:"@site/content/docs/commands/pki/list-intermediates.mdx",sourceDirName:"commands/pki",slug:"/commands/pki/list-intermediates",permalink:"/openbao/docs/commands/pki/list-intermediates",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/commands/pki/list-intermediates.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"pki list-intermediates - Command",description:'The "pki list-intermediates" command searches a mount, or set of mounts for\nchild certificates.'},sidebar:"docs",previous:{title:"pki verify-sign",permalink:"/openbao/docs/commands/pki/verify-sign"},next:{title:"pki issue",permalink:"/openbao/docs/commands/pki/issue"}},a={},o=[{value:"Usage",id:"usage",level:2},{value:"Flags",id:"flags",level:3},{value:"Accessed APIs",id:"accessed-apis",level:3},{value:"Examples",id:"examples",level:2}];function h(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"pki-list-intermediates",children:"pki list-intermediates"}),"\n",(0,s.jsx)(i.p,{children:"This command determines which of a list of certificates were issued by a given\nparent certificate."}),"\n",(0,s.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(i.p,{children:["Usage: ",(0,s.jsx)(i.code,{children:"bao pki list-intermediates [flags] <parent> [child] [child] [child..."})]}),"\n",(0,s.jsx)(i.p,{children:"Lists the set of intermediate CAs issued by this parent issuer."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"[flags]"})," listed below determine the type of match required between the ",(0,s.jsx)(i.code,{children:"<parent>"}),"\nand each potential child, and the type of output"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"<parent>"})," is the certificate that might be the issuer which everything is\nverified against."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"[child]"})," is an optional path to a certificate to be compared to the ",(0,s.jsx)(i.code,{children:"<parent>"}),",\nor pki mounts to look for certificates on. If ",(0,s.jsx)(i.code,{children:"[child]"})," is omitted entirely, the\nlist will be constructed from all accessible pki mounts."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["This returns a list of issuing certificates and whether they are a match.\nBy default, the type of match required is whether the ",(0,s.jsx)(i.code,{children:"<parent>"})," has the\nexpected subject, ",(0,s.jsx)(i.a,{href:"https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.1",children:"authority/subject key id match"}),", and could have (directly) signed this issuer.\nThe match criteria can be updated by changed the corresponding flag."]}),"\n",(0,s.jsx)(i.h3,{id:"flags",children:"Flags"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"-use_names"})," ",(0,s.jsx)(i.code,{children:'(bool: "false")'})," - this determines how issuers are referred to\nin the output, whether by issuer_id (the default), or by their name, or status\nas default issuer (when use_names is true)"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"The following flags determine what sorts of relationship between the parent and\npotential child issuers are considered a match."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"-subject_match"})," ",(0,s.jsx)(i.code,{children:'(bool: "true")'})," - determines whether the subject of the\nparent-issuer must match the issuer of the potential child for this to be\nconsidered a match"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"-key_id_match"})," ",(0,s.jsx)(i.code,{children:'(bool: "true")'})," - determines whether the identifier of the\nparent-issuer must match the IUI of the potential child for this to be\nconsidered a match"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"-direct_verify"})," ",(0,s.jsx)(i.code,{children:'(bool: "true")'})," - determines whether it is required for this\nto be a match that someone trusting the parent certificate would trust the\npotential-child certificate (without any more information)"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"-indirect-sign"})," ",(0,s.jsx)(i.code,{children:'(bool: "true")'})," - determines whether it is required for this\nto be a match that if someone trusted the first certificate, they would trust\nthe potential-child certificate (using the certificate chains available)"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"-path_contains"})," ",(0,s.jsx)(i.code,{children:'(bool: "false")'})," - determines whether it is required for\nthis to be a match for the ca_chain of the potential child certificate to\ncontain the parent certificate"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"accessed-apis",children:"Accessed APIs"}),"\n",(0,s.jsx)(i.p,{children:"Note that the OpenBao user running this command will need to have access to the\nfollowing API endpoints, each representing a step in the process:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"READ /:parent"})}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"LIST /sys/mounts"})," - when no ",(0,s.jsx)(i.code,{children:"[child]"})," argument is provided, this is used to\nfind a list of pki mounts"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"LIST /:child_mount/issuers/"})," - when no ",(0,s.jsx)(i.code,{children:"[child]"})," argument is provided, or the\n",(0,s.jsx)(i.code,{children:"[child]"})," argument is a mount rather than an issuer, this is used to find a list\nof pki issuers on the mount"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"READ /:child"})," - each potential child issuer is read for comparison against\nthe parent"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-shell-session",children:"$ bao pki list-intermediates /pki_root/issuer/default\nintermediate                                             match?\n------------                                             ------\npki_int_2/issuer/d4404ccc-3ad4-83a9-f5df-398637654b3b    true\npki_int_2/issuer/db0b0a6c-6641-ac15-363a-4e5261315581    true\npki_root/issuer/9464c4fe-e8a6-d96a-0566-021575e7382c     true\npki_int/issuer/2f958ec5-1838-336e-331b-07032379b958      true\npki_int/issuer/b8cc0b41-e0e9-1a92-12c4-6849c9d6f837      true\n"})})]})}function l(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>c,x:()=>d});var s=t(96540);const n={},r=s.createContext(n);function c(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);