"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7484],{72338:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=r(74848),t=r(28453),s=r(11470),l=r(19365);const o={sidebar_label:"Terraform",sidebar_current:"docs-platform-k8s-terraform",description:"Describes how to configure the Vault Helm chart using Terraform"},u="Configuring Vault helm with terraform",i={id:"platform/k8s/helm/terraform",title:"Configuring Vault helm with terraform",description:"Describes how to configure the Vault Helm chart using Terraform",source:"@site/content/docs/platform/k8s/helm/terraform.mdx",sourceDirName:"platform/k8s/helm",slug:"/platform/k8s/helm/terraform",permalink:"/openbao/docs/platform/k8s/helm/terraform",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/platform/k8s/helm/terraform.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Terraform",sidebar_current:"docs-platform-k8s-terraform",description:"Describes how to configure the Vault Helm chart using Terraform"},sidebar:"docs",previous:{title:"Configuration",permalink:"/openbao/docs/platform/k8s/helm/configuration"},next:{title:"Overview",permalink:"/openbao/docs/platform/k8s/helm/examples/"}},c={},d=[{value:"Further examples",id:"further-examples",level:2},{value:"Vault config as a multi-line string",id:"vault-config-as-a-multi-line-string",level:3},{value:"Lists of volumes and volumeMounts",id:"lists-of-volumes-and-volumemounts",level:3},{value:"Annotations",id:"annotations",level:3}];function m(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"configuring-vault-helm-with-terraform",children:"Configuring Vault helm with terraform"}),"\n",(0,a.jsxs)(n.p,{children:["Terraform may also be used to configure and deploy the Vault Helm chart, by using the ",(0,a.jsx)(n.a,{href:"https://registry.terraform.io/providers/hashicorp/helm/latest/docs",children:"Helm provider"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["For example, to configure the chart to deploy ",(0,a.jsx)(n.a,{href:"/docs/platform/k8s/helm/examples/ha-with-raft",children:"HA Vault with integrated storage (raft)"}),", the values overrides can be set on the command-line, in a values yaml file, or with a Terraform configuration:"]}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(l.A,{value:"CLI",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell-session",children:"$ helm install vault hashicorp/vault \\\n  --set='server.ha.enabled=true' \\\n  --set='server.ha.raft.enabled=true'\n"})})}),(0,a.jsx)(l.A,{value:"Yaml",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"server:\n  ha:\n    enabled: true\n    raft:\n      enabled: true\n"})})}),(0,a.jsx)(l.A,{value:"OpenTofu",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-hcl",children:'provider "helm" {\n  kubernetes {\n    config_path = "~/.kube/config"\n  }\n}\n\nresource "helm_release" "vault" {\n  name       = "vault"\n  repository = "https://helm.releases.hashicorp.com"\n  chart      = "vault"\n\n  set {\n    name  = "server.ha.enabled"\n    value = "true"\n  }\n  set {\n    name  = "server.ha.raft.enabled"\n    value = "true"\n  }\n}\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["The values file can also be used directly in the Terraform configuration with the ",(0,a.jsxs)(n.a,{href:"https://registry.terraform.io/providers/hashicorp/helm/latest/docs/resources/release#values#values",children:[(0,a.jsx)(n.code,{children:"values"})," directive"]}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"further-examples",children:"Further examples"}),"\n",(0,a.jsx)(n.h3,{id:"vault-config-as-a-multi-line-string",children:"Vault config as a multi-line string"}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(l.A,{value:"Yaml",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'server:\n  ha:\n    enabled: true\n    raft:\n      enabled: true\n      setNodeId: true\n      config: |\n        ui = false\n\n        listener "tcp" {\n          tls_disable = 1\n          address = "[::]:8200"\n          cluster_address = "[::]:8201"\n        }\n\n        storage "raft" {\n          path    = "/vault/data"\n        }\n\n        service_registration "kubernetes" {}\n\n        seal "awskms" {\n          region     = "us-west-2"\n          kms_key_id = "alias/my-kms-key"\n        }\n'})})}),(0,a.jsx)(l.A,{value:"OpenTofu",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-hcl",children:'resource "helm_release" "vault" {\n  name       = "vault"\n  repository = "https://helm.releases.hashicorp.com"\n  chart      = "vault"\n\n  set {\n    name  = "server.ha.enabled"\n    value = "true"\n  }\n  set {\n    name  = "server.ha.raft.enabled"\n    value = "true"\n  }\n  set {\n    name  = "server.ha.raft.setNodeId"\n    value = "true"\n  }\n  set {\n    name  = "server.ha.raft.config"\n    value = <<EOT\nui = false\n\nlistener "tcp" {\n  tls_disable = 1\n  address = "[::]:8200"\n  cluster_address = "[::]:8201"\n}\n\nstorage "raft" {\n  path    = "/vault/data"\n}\n\nservice_registration "kubernetes" {}\n\nseal "awskms" {\n  region     = "us-west-2"\n  kms_key_id = "alias/my-kms-key"\n}\nEOT\n  }\n}\n'})})})]}),"\n",(0,a.jsx)(n.h3,{id:"lists-of-volumes-and-volumemounts",children:"Lists of volumes and volumeMounts"}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(l.A,{value:"Yaml",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"server:\n  volumes:\n    - name: userconfig-my-gcp-iam\n      secret:\n        defaultMode: 420\n        secretName: my-gcp-iam\n\n  volumeMounts:\n    - mountPath: /vault/userconfig/my-gcp-iam\n      name: userconfig-my-gcp-iam\n      readOnly: true\n"})})}),(0,a.jsx)(l.A,{value:"OpenTofu",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-hcl",children:'resource "helm_release" "vault" {\n  name       = "vault"\n  repository = "https://helm.releases.hashicorp.com"\n  chart      = "vault"\n\n  set {\n    name  = "server.volumes[0].name"\n    value = "userconfig-my-gcp-iam"\n  }\n  set {\n    name  = "server.volumes[0].secret.defaultMode"\n    value = "420"\n  }\n  set {\n    name  = "server.volumes[0].secret.secretName"\n    value = "my-gcp-iam"\n  }\n\n  set {\n    name  = "server.volumeMounts[0].mountPath"\n    value = "/vault/userconfig/my-gcp-iam"\n  }\n  set {\n    name  = "server.volumeMounts[0].name"\n    value = "userconfig-my-gcp-iam"\n  }\n  set {\n    name  = "server.volumeMounts[0].readOnly"\n    value = "true"\n  }\n}\n'})})})]}),"\n",(0,a.jsx)(n.h3,{id:"annotations",children:"Annotations"}),"\n",(0,a.jsx)(n.p,{children:"Annotations can be set as a YAML map:"}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(l.A,{value:"Yaml",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"server:\n  ingress:\n    annotations:\n      service.beta.kubernetes.io/azure-load-balancer-internal: true\n      service.beta.kubernetes.io/azure-load-balancer-internal-subnet: apps-subnet\n"})})}),(0,a.jsx)(l.A,{value:"OpenTofu",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-hcl",children:'  set {\n    name = "server.ingress.annotations.service\\\\.beta\\\\.kubernetes\\\\.io/azure-load-balancer-internal"\n    value = "true"\n  }\n\n  set {\n    name = "server.ingress.annotations.service\\\\.beta\\\\.kubernetes\\\\.io/azure-load-balancer-internal-subnet"\n    value = "apps-subnet"\n  }\n'})})})]}),"\n",(0,a.jsx)(n.p,{children:"or as a multi-line string:"}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(l.A,{value:"Yaml",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"server:\n  ingress:\n    annotations: |\n      service.beta.kubernetes.io/azure-load-balancer-internal: true\n      service.beta.kubernetes.io/azure-load-balancer-internal-subnet: apps-subnet\n"})})}),(0,a.jsx)(l.A,{value:"OpenTofu",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-hcl",children:'  set {\n    name = "server.ingress.annotations"\n    value = yamlencode({\n      "service.beta.kubernetes.io/azure-load-balancer-internal": "true"\n      "service.beta.kubernetes.io/azure-load-balancer-internal-subnet": "apps-subnet"\n    })\n    type = "auto"\n  }\n'})})})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>l});r(96540);var a=r(34164);const t={tabItem:"tabItem_Ymn6"};var s=r(74848);function l(e){let{children:n,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(t.tabItem,l),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>k});var a=r(96540),t=r(34164),s=r(23104),l=r(56347),o=r(205),u=r(57485),i=r(31682),c=r(89466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:r}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:a,default:t}}=e;return{value:n,label:r,attributes:a,default:t}}))}(r);return function(e){const n=(0,i.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:r}=e;const t=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,u.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(t.location.search);n.set(s,e),t.replace({...t.location,search:n.toString()})}),[s,t])]}function v(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,s=m(e),[l,u]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[i,d]=f({queryString:r,groupId:t}),[v,p]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,s]=(0,c.Dv)(r);return[t,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:t}),b=(()=>{const e=i??v;return h({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{b&&u(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),p(e)}),[d,p,s]),tabValues:s}}var p=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(74848);function x(e){let{className:n,block:r,selectedValue:a,selectValue:l,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.a_)(),c=e=>{const n=e.currentTarget,r=u.indexOf(n),t=o[r].value;t!==a&&(i(n),l(t))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;n=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;n=u[r]??u[u.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>u.push(e),onKeyDown:d,onClick:c,...s,className:(0,t.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":a===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:t}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=v(e);return(0,g.jsxs)("div",{className:(0,t.A)("tabs-container",b.tabList),children:[(0,g.jsx)(x,{...e,...n}),(0,g.jsx)(j,{...e,...n})]})}function k(e){const n=(0,p.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>o});var a=r(96540);const t={},s=a.createContext(t);function l(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);