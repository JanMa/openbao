"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5581],{10968:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>i});var a=s(74848),t=s(28453);const r={sidebar_label:"Examples",description:"This section documents examples of using the Vault CSI Provider."},d="Vault CSI provider examples",o={id:"platform/k8s/csi/examples",title:"Vault CSI provider examples",description:"This section documents examples of using the Vault CSI Provider.",source:"@site/content/docs/platform/k8s/csi/examples.mdx",sourceDirName:"platform/k8s/csi",slug:"/platform/k8s/csi/examples",permalink:"/openbao/docs/platform/k8s/csi/examples",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/platform/k8s/csi/examples.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Examples",description:"This section documents examples of using the Vault CSI Provider."},sidebar:"docs",previous:{title:"Configurations",permalink:"/openbao/docs/platform/k8s/csi/configurations"},next:{title:"Overview",permalink:"/openbao/docs/platform/k8s/vso/"}},c={},i=[{value:"File based dynamic database credentials",id:"file-based-dynamic-database-credentials",level:2},{value:"Environment variable dynamic database credentials",id:"environment-variable-dynamic-database-credentials",level:2}];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"vault-csi-provider-examples",children:"Vault CSI provider examples"}),"\n",(0,a.jsx)(n.p,{children:"The following examples demonstrate how the Vault CSI Provider can be used."}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"A common mistake is to not install the CSI Secret Store Driver before using the Vault CSI Provider."})}),"\n",(0,a.jsx)(n.h2,{id:"file-based-dynamic-database-credentials",children:"File based dynamic database credentials"}),"\n",(0,a.jsx)(n.p,{children:"The following Secret Provider Class retrieves dynamic database credentials from Vault and\nextracts the generated username and password. The secrets are then mounted as files in the\nconfigured mount location."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'---\napiVersion: secrets-store.csi.x-k8s.io/v1alpha1\nkind: SecretProviderClass\nmetadata:\n  name: vault-db-creds\nspec:\n  provider: vault\n  parameters:\n    roleName: \'app\'\n    objects: |\n      - objectName: "dbUsername"\n        secretPath: "database/creds/db-app"\n        secretKey: "username"\n      - objectName: "dbPassword"\n        secretPath: "database/creds/db-app"\n        secretKey: "password"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Next, a pod can be created to use this Secret Provider Class to populate the secrets in the pod:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: app\n  labels:\n    app: demo\nspec:\n  selector:\n    matchLabels:\n      app: demo\n  replicas: 1\n  template:\n    metadata:\n      annotations:\n      labels:\n        app: demo\n    spec:\n      serviceAccountName: app\n      containers:\n        - name: app\n          image: my-app:1.0.0\n          volumeMounts:\n            - name: 'vault-db-creds'\n              mountPath: '/mnt/secrets-store'\n              readOnly: true\n      volumes:\n        - name: vault-db-creds\n          csi:\n            driver: 'secrets-store.csi.k8s.io'\n            readOnly: true\n            volumeAttributes:\n              secretProviderClass: 'vault-db-creds'\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The pod mounts a CSI volume and specifies the Secret Provider Class (",(0,a.jsx)(n.code,{children:"vault-db-creds"}),") created above.\nThe secrets created from that provider class are mounted to ",(0,a.jsx)(n.code,{children:"/mnt/secrets-store"}),". When this pod is\ncreated the containers will find two files containing secrets:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"/mnt/secrets-store/dbUsername"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"/mnt/secrets-store/dbPassword"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"environment-variable-dynamic-database-credentials",children:"Environment variable dynamic database credentials"}),"\n",(0,a.jsx)(n.p,{children:"The following Secret Provider Class retrieves dynamic database credentials from Vault and\nextracts the generated username and password. The secrets are then synced to Kubernetes secrets\nso that they can be mounted as environment variables in the containers."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'---\napiVersion: secrets-store.csi.x-k8s.io/v1alpha1\nkind: SecretProviderClass\nmetadata:\n  name: vault-db-creds\nspec:\n  provider: vault\n  secretObjects:\n    - secretName: vault-db-creds-secret\n      type: Opaque\n      data:\n        - objectName: dbUsername # References dbUsername below\n          key: username # Key within k8s secret for this value\n        - objectName: dbPassword\n          key: password\n  parameters:\n    roleName: \'app\'\n    objects: |\n      - objectName: "dbUsername"\n        secretPath: "database/creds/db-app"\n        secretKey: "username"\n      - objectName: "dbPassword"\n        secretPath: "database/creds/db-app"\n        secretKey: "password"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Next, a pod can be created which uses this Secret Provider Class to populate the secrets in the pod's environment:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: app\n  labels:\n    app: demo\nspec:\n  selector:\n    matchLabels:\n      app: demo\n  replicas: 1\n  template:\n    metadata:\n      annotations:\n      labels:\n        app: demo\n    spec:\n      serviceAccountName: app\n      containers:\n        - name: app\n          image: my-app:1.0.0\n          env:\n            - name: DB_USERNAME\n              valueFrom:\n                secretKeyRef:\n                  name: vault-db-creds-secret\n                  key: username\n            - name: DB_PASSWORD\n              valueFrom:\n                secretKeyRef:\n                  name: vault-db-creds-secret\n                  key: password\n          volumeMounts:\n            - name: 'vault-db-creds'\n              mountPath: '/mnt/secrets-store'\n              readOnly: true\n      volumes:\n        - name: vault-db-creds\n          csi:\n            driver: 'secrets-store.csi.k8s.io'\n            readOnly: true\n            volumeAttributes:\n              secretProviderClass: 'vault-db-creds'\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The pod mounts a CSI volume and specifies the Secret Provider Class (",(0,a.jsx)(n.code,{children:"vault-db-creds"}),") created above.\nThe secrets created from that provider class are mounted to ",(0,a.jsx)(n.code,{children:"/mnt/secrets-store"}),", additionally a Kubernetes\nsecret called ",(0,a.jsx)(n.code,{children:"vault-db-creds"})," is created and referenced in two environment variables."]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>o});var a=s(96540);const t={},r=a.createContext(t);function d(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);