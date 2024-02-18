"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3335],{86256:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=t(74848),i=t(28453);const o={layout:"docs",page_title:"Agent Sidecar Injector Annotations",description:"This section documents the configurable annotations for the Vault Agent Injector."},a="Annotations",c={id:"platform/k8s/injector/annotations",title:"Annotations",description:"This section documents the configurable annotations for the Vault Agent Injector.",source:"@site/content/docs/platform/k8s/injector/annotations.mdx",sourceDirName:"platform/k8s/injector",slug:"/platform/k8s/injector/annotations",permalink:"/openbao/docs/platform/k8s/injector/annotations",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/platform/k8s/injector/annotations.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"Agent Sidecar Injector Annotations",description:"This section documents the configurable annotations for the Vault Agent Injector."},sidebar:"docs",previous:{title:"Agent sidecar injector",permalink:"/openbao/docs/platform/k8s/injector/"},next:{title:"Installing the agent injector",permalink:"/openbao/docs/platform/k8s/injector/installation"}},r={},l=[{value:"Agent annotations",id:"agent-annotations",level:2},{value:"Vault annotations",id:"vault-annotations",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"annotations",children:"Annotations"}),"\n",(0,s.jsx)(n.p,{children:"The following are the available annotations for the injector. These annotations\nare organized into two sections: agent and vault. All of the annotations below\nchange the configurations of the Vault Agent containers injected into the pod."}),"\n",(0,s.jsx)(n.h2,{id:"agent-annotations",children:"Agent annotations"}),"\n",(0,s.jsx)(n.p,{children:"Agent annotations change the Vault Agent containers templating configuration. For\nexample, agent annotations allow users to define what secrets they want, how to render\nthem, optional commands to run, etc."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-inject"})," - configures whether injection is explicitly\nenabled or disabled for a pod. This should be set to a ",(0,s.jsx)(n.code,{children:"true"})," or ",(0,s.jsx)(n.code,{children:"false"})," value.\nDefaults to ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-inject-status"})," - blocks further mutations\nby adding the value ",(0,s.jsx)(n.code,{children:"injected"})," to the pod after a successful mutation."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-configmap"})," - name of the configuration map where Vault\nAgent configuration file and templates can be found."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-image"})," - name of the Vault docker image to use. This\nvalue overrides the default image configured in the injector and is usually\nnot needed. Defaults to ",(0,s.jsx)(n.code,{children:"hashicorp/vault:1.12.3"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-init-first"})," - configures the pod to run the Vault Agent\ninit container first if ",(0,s.jsx)(n.code,{children:"true"})," (last if ",(0,s.jsx)(n.code,{children:"false"}),"). This is useful when other init\ncontainers need pre-populated secrets. This should be set to a ",(0,s.jsx)(n.code,{children:"true"})," or ",(0,s.jsx)(n.code,{children:"false"}),"\nvalue. Defaults to ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-inject-command"})," - configures Vault Agent\nto run a command after the template has been rendered. To map a command to a specific\nsecret, use the same unique secret name: ",(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-inject-command-SECRET-NAME"}),".\nFor example, if a secret annotation ",(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-inject-secret-foobar"}),"\nis configured, ",(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-inject-command-foobar"})," would map a command\nto that secret."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-inject-secret"})," - configures Vault Agent\nto retrieve the secrets from Vault required by the container. The name of the\nsecret is any unique string after ",(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-inject-secret-"}),",\nsuch as ",(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-inject-secret-foobar"}),". The value is the path\nin Vault where the secret is located."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-inject-template"})," - configures the template Vault Agent\nshould use for rendering a secret. The name of the template is any\nunique string after ",(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-inject-template-"}),", such as\n",(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-inject-template-foobar"}),". This should map to the same\nunique value provided in ",(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-inject-secret-"}),". If not provided,\na default generic template is used."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-inject-containers"})," - comma-separated list that specifies in\nwhich containers the secrets volume should be mounted. If not provided, the secrets\nvolume will be mounted in all containers in the pod."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/secret-volume-path"})," - configures where on the filesystem a secret\nwill be rendered. To map a path to a specific secret, use the same unique secret name:\n",(0,s.jsx)(n.code,{children:"vault.hashicorp.com/secret-volume-path-SECRET-NAME"}),". For example, if a secret annotation\n",(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-inject-secret-foobar"})," is configured,\n",(0,s.jsx)(n.code,{children:"vault.hashicorp.com/secret-volume-path-foobar"})," would configure where that secret\nis rendered. If no secret name is provided, this sets the default for all rendered\nsecrets in the pod."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-inject-file"})," - configures the filename and path\nin the secrets volume where a Vault secret will be written. This should be used\nwith ",(0,s.jsx)(n.code,{children:"vault.hashicorp.com/secret-volume-path"}),", which mounts a memory volume to\nthe specified path. If ",(0,s.jsx)(n.code,{children:"secret-volume-path"})," is used, the path can be omitted from\nthis value. To map a filename to a specific secret, use the same unique secret name:\n",(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-inject-file-SECRET-NAME"}),". For example, if a secret annotation\n",(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-inject-secret-foobar"})," is configured,\n",(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-inject-file-foobar"})," would configure the filename."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-inject-perms"}),' - configures the permissions of the\nfile to create in the secrets volume. The name of the secret is the string\nafter "vault.hashicorp.com/agent-inject-perms-", and should map to the same\nunique value provided in "vault.hashicorp.com/agent-inject-secret-". The value\nis the octal permission, for example: ',(0,s.jsx)(n.code,{children:"0644"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-inject-template-file"})," - configures the path and filename of the\ncustom template to use. This should be used with ",(0,s.jsx)(n.code,{children:"vault.hashicorp.com/extra-secret"}),",\nwhich mounts a Kubernetes secret to ",(0,s.jsx)(n.code,{children:"/vault/custom"}),". To map a template file to a specific secret,\nuse the same unique secret name: ",(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-inject-template-file-SECRET-NAME"}),".\nFor example, if a secret annotation ",(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-inject-secret-foobar"})," is configured,\n",(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-inject-template-file-foobar"})," would configure the template file."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-inject-default-template"})," - configures the default template type for rendering\nsecrets if no custom template is defined. Possible values include ",(0,s.jsx)(n.code,{children:"map"})," and ",(0,s.jsx)(n.code,{children:"json"}),". Defaults to ",(0,s.jsx)(n.code,{children:"map"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/template-config-exit-on-retry-failure"})," - controls whether\nVault Agent exits after it has exhausted its number of template retry attempts\ndue to failures. Defaults to ",(0,s.jsx)(n.code,{children:"true"}),". See ",(0,s.jsx)(n.a,{href:"/docs/agent-and-proxy/agent/template#template-configurations",children:"Vault Agent Template\nConfig"})," for more details."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/template-static-secret-render-interval"})," - If specified,\nconfigures how often Vault Agent Template should render non-leased secrets such as KV v2.\nSee ",(0,s.jsx)(n.a,{href:"/docs/agent-and-proxy/agent/template#template-configurations",children:"Vault Agent Template Config"})," for more details."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-extra-secret"})," - mounts Kubernetes secret as a volume at\n",(0,s.jsx)(n.code,{children:"/vault/custom"})," in the sidecar/init containers. Useful for custom Agent configs with\nauto-auth methods such as approle that require paths to secrets be present."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-inject-token"})," - configures Vault Agent to share the Vault\ntoken with other containers in the pod, in a file named ",(0,s.jsx)(n.code,{children:"token"})," in the root of the\nsecrets volume (i.e. ",(0,s.jsx)(n.code,{children:"/vault/secrets/token"}),"). This is helpful when other containers\ncommunicate directly with Vault but require auto-authentication provided by Vault\nAgent. This should be set to a ",(0,s.jsx)(n.code,{children:"true"})," or ",(0,s.jsx)(n.code,{children:"false"})," value. Defaults to ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-limits-cpu"})," - configures the CPU limits on the Vault\nAgent containers. Defaults to ",(0,s.jsx)(n.code,{children:"500m"}),". Setting this to an empty string disables\nCPU limits."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-limits-mem"})," - configures the memory limits on the Vault\nAgent containers. Defaults to ",(0,s.jsx)(n.code,{children:"128Mi"}),". Setting this to an empty string disables\nmemory limits."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-limits-ephemeral"})," - configures the ephemeral\nstorage limit on the Vault Agent containers. Defaults to unset, which\ndisables ephemeral storage limits. Also available as a command-line option\n(",(0,s.jsx)(n.code,{children:"-ephemeral-storage-limit"}),") or environment variable (",(0,s.jsx)(n.code,{children:"AGENT_INJECT_EPHEMERAL_LIMIT"}),")\nto set the default for all injected Agent containers. ",(0,s.jsx)(n.strong,{children:"Note:"})," Pod limits are\nequal to the sum of all container limits. Setting this limit without setting it\nfor other containers will also affect the limits of other containers in the pod.\nSee ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#resource-requests-and-limits-of-pod-and-container",children:"Kubernetes resources documentation"})," for more details."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-requests-cpu"})," - configures the CPU requests on the\nVault Agent containers. Defaults to ",(0,s.jsx)(n.code,{children:"250m"}),". Setting this to an empty string disables\nCPU requests."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-requests-mem"})," - configures the memory requests on the\nVault Agent containers. Defaults to ",(0,s.jsx)(n.code,{children:"64Mi"}),". Setting this to an empty string disables\nmemory requests."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-requests-ephemeral"})," - configures the ephemeral\nstorage requests on the Vault Agent Containers. Defaults to unset, which\ndisables ephemeral storage requests (and will default to the ephemeral limit\nif set). Also available as a command-line option (",(0,s.jsx)(n.code,{children:"-ephemeral-storage-request"}),")\nor environment variable (",(0,s.jsx)(n.code,{children:"AGENT_INJECT_EPHEMERAL_REQUEST"}),") to set the default\nfor all injected Agent containers. ",(0,s.jsx)(n.strong,{children:"Note:"})," Pod requests are equal to the sum\nof all container requests. Setting this limit without setting it for other\ncontainers will also affect the requests of other containers in the pod. See\n",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#resource-requests-and-limits-of-pod-and-container",children:"Kubernetes resources documentation"})," for more details."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-revoke-on-shutdown"})," - configures whether the sidecar\nwill revoke it's own token before shutting down. This setting will only be applied\nto the Vault Agent sidecar container. This should be set to a ",(0,s.jsx)(n.code,{children:"true"})," or ",(0,s.jsx)(n.code,{children:"false"}),"\nvalue. Defaults to ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-revoke-grace"})," - configures the grace period, in seconds,\nfor revoking it's own token before shutting down. This setting will only be applied\nto the Vault Agent sidecar container. Defaults to ",(0,s.jsx)(n.code,{children:"5s"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-pre-populate"})," - configures whether an init container\nis included to pre-populate the shared memory volume with secrets prior to the\ncontainers starting."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-pre-populate-only"})," - configures whether an init container\nis the only injected container. If true, no sidecar container will be injected\nat runtime of the pod. Enabling this option is recommended for workloads of\ntype ",(0,s.jsx)(n.code,{children:"CronJob"})," or ",(0,s.jsx)(n.code,{children:"Job"})," to ensure a clean pod termination."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/preserve-secret-case"})," - configures Vault Agent to preserve\nthe secret name case when creating the secret files. This should be set to a ",(0,s.jsx)(n.code,{children:"true"}),"\nor ",(0,s.jsx)(n.code,{children:"false"})," value. Defaults to ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-run-as-user"})," - sets the user (uid) to run Vault\nagent as. Also available as a command-line option (",(0,s.jsx)(n.code,{children:"-run-as-user"}),") or\nenvironment variable (",(0,s.jsx)(n.code,{children:"AGENT_INJECT_RUN_AS_USER"}),") for the injector. Defaults\nto 100."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-run-as-group"})," - sets the group (gid) to run Vault\nagent as. Also available as a command-line option (",(0,s.jsx)(n.code,{children:"-run-as-group"}),") or\nenvironment variable (",(0,s.jsx)(n.code,{children:"AGENT_INJECT_RUN_AS_GROUP"}),") for the injector. Defaults\nto 1000."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-set-security-context"})," - controls whether\n",(0,s.jsx)(n.code,{children:"SecurityContext"})," is set in injected containers. Also available as a\ncommand-line option (",(0,s.jsx)(n.code,{children:"-set-security-context"}),") or environment variable\n(",(0,s.jsx)(n.code,{children:"AGENT_INJECT_SET_SECURITY_CONTEXT"}),"). Defaults to ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-run-as-same-user"})," - run the injected Vault agent\ncontainers as the User (uid) of the first application container in the pod.\nRequires ",(0,s.jsx)(n.code,{children:"Spec.Containers[0].SecurityContext.RunAsUser"})," to be set in the pod\nspec. Also available as a command-line option (",(0,s.jsx)(n.code,{children:"-run-as-same-user"}),") or\nenvironment variable (",(0,s.jsx)(n.code,{children:"AGENT_INJECT_RUN_AS_SAME_USER"}),"). Defaults to ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["~> ",(0,s.jsx)(n.strong,{children:"Note"}),": If the first application container in the pod is running as root\n(uid 0), the ",(0,s.jsx)(n.code,{children:"run-as-same-user"})," annotation will fail injection with an error."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-share-process-namespace"})," - sets\n",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/configure-pod-container/share-process-namespace/",children:"shareProcessNamespace"})," in the Pod spec where Vault Agent is injected.\nDefaults to ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-cache-enable"})," - configures Vault Agent to enable\n",(0,s.jsx)(n.a,{href:"/docs/agent-and-proxy/agent/caching",children:"caching"}),". In Vault 1.7+ this annotation will also enable\na Vault Agent persistent cache. This persistent cache will be shared between the init\nand sidecar container to reuse tokens and leases retrieved by the init container.\nDefaults to ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-cache-use-auto-auth-token"})," - configures Vault Agent cache\nto authenticate on behalf of the requester. Set to ",(0,s.jsx)(n.code,{children:"force"})," to enable. Disabled\nby default."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-cache-listener-port"})," - configures Vault Agent cache\nlistening port. Defaults to ",(0,s.jsx)(n.code,{children:"8200"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-copy-volume-mounts"})," - copies the mounts from the specified\ncontainer and mounts them to the Vault Agent containers. The service account volume is\nignored."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-service-account-token-volume-name"})," - the optional name of a projected volume containing a service account token for use with auto-auth against Vault's Kubernetes auth method. If the volume is mounted to another container in the deployment, the token volume will be mounted to the same location in the vault-agent containers. Otherwise it will be mounted at the default location of ",(0,s.jsx)(n.code,{children:"/var/run/secrets/vault.hashicorp.com/serviceaccount/"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-enable-quit"})," - enable the ",(0,s.jsxs)(n.a,{href:"/docs/agent-and-proxy/agent#quit",children:[(0,s.jsx)(n.code,{children:"/agent/v1/quit"})," endpoint"]})," on an injected agent. This option defaults to false, and if true will be set on the existing cache listener, or a new localhost listener with a basic cache stanza configured. The ",(0,s.jsx)(n.a,{href:"/docs/platform/k8s/injector/annotations#vault-hashicorp-com-agent-cache-listener-port",children:"agent-cache-listener-port annotation"})," can be used to change the port."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-telemetry"})," - specifies the ",(0,s.jsx)(n.a,{href:"/docs/configuration/telemetry",children:"telemetry"})," configuration for the\nVault Agent sidecar. The name of the config is any unique string after\n",(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-telemetry-"}),", such as ",(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-telemetry-prometheus_retention_time"}),".\nThis annotation can be reused multiple times to configure multiple settings for the agent telemetry."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/go-max-procs"})," - set the ",(0,s.jsx)(n.code,{children:"GOMAXPROCS"})," environment variable for injected agents"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-json-patch"})," - change the injected agent sidecar container using a ",(0,s.jsx)(n.a,{href:"https://jsonpatch.com/",children:"JSON patch"})," before it is created.\nThis can be used to add, remove, or modify any attribute of the container.\nFor example, setting this to ",(0,s.jsx)(n.code,{children:'[{"op": "replace", "path": "/name", "value": "different-name"}]'})," will update the agent container's name to be ",(0,s.jsx)(n.code,{children:"different-name"}),"\ninstead of the default ",(0,s.jsx)(n.code,{children:"vault-agent"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-init-json-patch"})," - same as ",(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-json-patch"}),", except that the JSON patch will be applied to the\ninjected init container instead."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"vault-annotations",children:"Vault annotations"}),"\n",(0,s.jsx)(n.p,{children:"Vault annotations change how the Vault Agent containers communicate with Vault. For\nexample, Vault's address, TLS certificates to use, client parameters such as timeouts,\netc."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/auth-config"})," - configures additional parameters for the configured\nauthentication method. The name of the config is any unique string after\n",(0,s.jsx)(n.code,{children:"vault.hashicorp.com/auth-config-"}),", such as ",(0,s.jsx)(n.code,{children:"vault.hashicorp.com/auth-config-role-id-file-path"}),".\nThis annotation can be reused multiple times to configure multiple settings for the authentication\nmethod. Some authentication methods may require additional secrets and should be mounted via the\n",(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-extra-secret"})," annotation. For a list of valid authentication configurations,\nsee the Vault Agent ",(0,s.jsx)(n.a,{href:"/docs/agent-and-proxy/autoauth/methods",children:"auto-auth documentation"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/auth-path"})," - configures the authentication path for the Kubernetes\nauth method. Defaults to ",(0,s.jsx)(n.code,{children:"auth/kubernetes"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/auth-type"})," - configures the authentication type for Vault Agent.\nDefaults to ",(0,s.jsx)(n.code,{children:"kubernetes"}),". For a list of valid authentication methods, see the Vault Agent\n",(0,s.jsx)(n.a,{href:"/docs/agent-and-proxy/autoauth/methods",children:"auto-auth documentation"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/auth-min-backoff"})," - set the ",(0,s.jsx)(n.a,{href:"/docs/agent-and-proxy/autoauth#min_backoff",children:"min_backoff"})," option in the auto-auth config. Requires Vault 1.11+."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/auth-max-backoff"})," - set the ",(0,s.jsx)(n.a,{href:"/docs/agent-and-proxy/autoauth#max_backoff",children:"max_backoff"})," option in the auto-auth config"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-auto-auth-exit-on-err"})," - set the ",(0,s.jsx)(n.a,{href:"/docs/agent-and-proxy/autoauth#exit_on_err",children:"exit_on_err"})," option in the auto-auth config"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/ca-cert"})," - path of the CA certificate used to verify Vault's\nTLS."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/ca-key"})," - path of the CA public key used to verify Vault's\nTLS."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/client-cert"})," - path of the client certificate used when\ncommunicating with Vault via mTLS."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/client-key"})," - path of the client public key used when communicating\nwith Vault via mTLS."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/client-max-retries"})," - configures number of Vault Agent retry\nattempts when certain errors are encountered. Defaults to 2, for 3 total attempts.\nSet this to ",(0,s.jsx)(n.code,{children:"0"})," or less to disable retrying. Error codes that are retried are 412\n(client consistency requirement not satisfied) and all 5xx except for 501 (not implemented)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/client-timeout"})," - configures the request timeout threshold,\nin seconds, of the Vault Agent when communicating with Vault. Defaults to ",(0,s.jsx)(n.code,{children:"60s"}),"\nand accepts value types of ",(0,s.jsx)(n.code,{children:"60"}),", ",(0,s.jsx)(n.code,{children:"60s"})," or ",(0,s.jsx)(n.code,{children:"1m"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/log-level"})," - configures the verbosity of the Vault Agent\nlog level. Default is ",(0,s.jsx)(n.code,{children:"info"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/log-format"})," - configures the log type for Vault Agent. Possible\nvalues are ",(0,s.jsx)(n.code,{children:"standard"})," and ",(0,s.jsx)(n.code,{children:"json"}),". Default is ",(0,s.jsx)(n.code,{children:"standard"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/proxy-address"})," - configures the HTTP proxy to use when connecting\nto a Vault server."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/role"})," - configures the Vault role used by the Vault Agent\nauto-auth method. Required when ",(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-configmap"})," is not set."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/service"})," - configures the Vault address for the injected\nVault Agent to use. This value overrides the default Vault address configured\nin the injector, and may either be the address of a Vault service within the\nsame Kubernetes cluster as the injector, or an external Vault URL."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/tls-secret"})," - name of the Kubernetes secret containing TLS\nClient and CA certificates and keys. This is mounted to ",(0,s.jsx)(n.code,{children:"/vault/tls"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/tls-server-name"})," - name of the Vault server to verify the\nauthenticity of the server when communicating with Vault over TLS."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/tls-skip-verify"})," - if true, configures the Vault Agent to\nskip verification of Vault's TLS certificate. It's not recommended to set this\nvalue to true in a production environment."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-disable-idle-connections"})," - Comma-separated ",(0,s.jsx)(n.a,{href:"/docs/agent-and-proxy/agent#disable_idle_connections",children:"list\nof Vault Agent features"})," where idle\nconnections should be disabled. Also available as a command-line option\n(",(0,s.jsx)(n.code,{children:"-disable-idle-connections"}),") or environment variable\n(",(0,s.jsx)(n.code,{children:"AGENT_INJECT_DISABLE_IDLE_CONNECTIONS"}),") to set the default for all injected\nAgents."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vault.hashicorp.com/agent-disable-keep-alives"})," - Comma-separated ",(0,s.jsx)(n.a,{href:"/docs/agent-and-proxy/agent#disable_keep_alives",children:"list of\nVault Agent features"})," where keep-alives\nshould be disabled. Also available as a command-line option\n(",(0,s.jsx)(n.code,{children:"-disable-keep-alives"}),") or environment variable\n(",(0,s.jsx)(n.code,{children:"AGENT_INJECT_DISABLE_KEEP_ALIVES"}),") to set the default for all injected\nAgents."]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var s=t(96540);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);