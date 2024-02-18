"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8348],{60387:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var i=n(74848),s=n(28453);const a={description:"GitHub Actions"},c="GitHub actions",r={id:"platform/github-actions",title:"github-actions",description:"GitHub Actions",source:"@site/content/docs/platform/github-actions.mdx",sourceDirName:"platform",slug:"/platform/github-actions",permalink:"/docs/platform/github-actions",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/platform/github-actions.mdx",tags:[],version:"current",frontMatter:{description:"GitHub Actions"},sidebar:"docs",previous:{title:"lambda-extension",permalink:"/docs/platform/aws/lambda-extension"},next:{title:"Overview",permalink:"/docs/platform/k8s/"}},o={},l=[{value:"Example",id:"example",level:2},{value:"Further information",id:"further-information",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"github-actions",children:"GitHub actions"}),"\n",(0,i.jsxs)(t.p,{children:["Workflows in GitHub Actions can make use of secrets stored in Vault by using a\n",(0,i.jsx)(t.a,{href:"https://github.com/marketplace/actions/hashicorp-vault",children:(0,i.jsx)(t.code,{children:"vault-action"})})," step."]}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(t.p,{children:["Here is an example ",(0,i.jsx)(t.code,{children:"vault-action"})," step in a workflow:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"jobs:\n    build:\n        # ...\n        steps:\n            # ...\n            - name: Import Secrets\n              uses: hashicorp/vault-action@v2.4.0\n              with:\n                url: https://vault.example.com:8200\n                token: ${{ secrets.VAULT_TOKEN }}\n                caCertificate: ${{ secrets.VAULT_CA_CERT }}\n                secrets: |\n                    secret/data/ci/aws accessKey | AWS_ACCESS_KEY_ID ;\n                    secret/data/ci/aws secretKey | AWS_SECRET_ACCESS_KEY ;\n                    secret/data/ci npm_token\n"})}),"\n",(0,i.jsxs)(t.p,{children:["This example will authenticate to Vault instance at ",(0,i.jsx)(t.code,{children:"https://vault.example.com:8200"})," with the GitHub secrets defined in\n",(0,i.jsx)(t.code,{children:"VAULT_TOKEN"})," and ",(0,i.jsx)(t.code,{children:"VAULT_CA_CERT"}),", and will add environment variables available for next steps in the workflow:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The secret at path ",(0,i.jsx)(t.code,{children:"secret/data/ci/aws"})," with the key ",(0,i.jsx)(t.code,{children:"accessKey"})," available in the environment variable ",(0,i.jsx)(t.code,{children:"AWS_ACCESS_KEY_ID"})]}),"\n",(0,i.jsxs)(t.li,{children:["The secret at path ",(0,i.jsx)(t.code,{children:"secret/data/ci/aws"})," with the key ",(0,i.jsx)(t.code,{children:"secretKey"})," available in the environment variable ",(0,i.jsx)(t.code,{children:"AWS_SECRET_ACCESS_KEY"})]}),"\n",(0,i.jsxs)(t.li,{children:["The secret at path ",(0,i.jsx)(t.code,{children:"secret/data/ci"})," with the key ",(0,i.jsx)(t.code,{children:"npm_token"})," available in the environment variable ",(0,i.jsx)(t.code,{children:"NPM_TOKEN"})]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"further-information",children:"Further information"}),"\n",(0,i.jsxs)(t.p,{children:["For more information on using the ",(0,i.jsx)(t.code,{children:"vault-action"})," GitHub Action, visit:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/marketplace/actions/hashicorp-vault",children:"Vault GitHub action documentation"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/tutorials/app-integration/github-actions",children:"Vault GitHub actions tutorial"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>r});var i=n(96540);const s={},a=i.createContext(s);function c(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);