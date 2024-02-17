"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7028],{85732:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var o=t(74848),s=t(28453);const a={layout:"docs",page_title:"Mount Migration",description:"Move secrets and auth mounts within and across namespaces"},i="Mount migration",r={id:"concepts/mount-migration",title:"Mount migration",description:"Move secrets and auth mounts within and across namespaces",source:"@site/content/docs/concepts/mount-migration.mdx",sourceDirName:"concepts",slug:"/concepts/mount-migration",permalink:"/openbao/docs/concepts/mount-migration",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/concepts/mount-migration.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"Mount Migration",description:"Move secrets and auth mounts within and across namespaces"},sidebar:"tutorialSidebar",previous:{title:"Lease, renew, and revoke",permalink:"/openbao/docs/concepts/lease"},next:{title:"OIDC provider",permalink:"/openbao/docs/concepts/oidc-provider"}},c={},l=[{value:"Why",id:"why",level:2},{value:"Async behavior",id:"async-behavior",level:2},{value:"Namespaces",id:"namespaces",level:2},{value:"Leases",id:"leases",level:2},{value:"Configurations",id:"configurations",level:2},{value:"Cleanup operations",id:"cleanup-operations",level:2},{value:"Entities and aliases",id:"entities-and-aliases",level:3},{value:"Policies",id:"policies",level:3},{value:"Quotas",id:"quotas",level:2},{value:"Path filters",id:"path-filters",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"mount-migration",children:"Mount migration"}),"\n",(0,o.jsx)(n.p,{children:"OpenBao supports moving secrets and auth mounts, both within and across namespaces. The operation\nis supported by API endpoints and a CLI helper around them."}),"\n",(0,o.jsx)(n.h2,{id:"why",children:"Why"}),"\n",(0,o.jsx)(n.p,{children:"There can be several reasons for wanting to migrate mounts. In OpenBao, the use cases could be for\nrenaming mounts to align with org standards."}),"\n",(0,o.jsx)(n.h2,{id:"async-behavior",children:"Async behavior"}),"\n",(0,o.jsxs)(n.p,{children:["The first thing to note about the ",(0,o.jsx)(n.code,{children:"sys/remount"})," endpoint is that it is an asynchronous endpoint. An invocation\nwill start the migration process, and the API will return a migration ID. This ID, in turn, be used to monitor\nthe migration status using the ",(0,o.jsx)(n.code,{children:"sys/remount/status"})," endpoint."]}),"\n",(0,o.jsx)(n.h2,{id:"namespaces",children:"Namespaces"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"sys/remount"})," endpoint can move mounts across namespaces with the namespaces supplied as prefixes\non the path arguments. In this case, namespaces, for both the source and destination mounts, must be\neither the namespace in which the ",(0,o.jsx)(n.code,{children:"/sys/remount"})," endpoint is called or the children of that namespace. Let us assume that\nwe have three namespaces ns1/, ns1/ns2/, and ns1/ns3. We want to move the mount ",(0,o.jsx)(n.code,{children:"my-secret"})," from ns1/ns2/my-secret to ns1/ns3/my-secret.\nMoving the mount can be accomplished in two ways. The first way is to invoke ",(0,o.jsx)(n.code,{children:"/sys/remount"})," from the root namespace with the ",(0,o.jsx)(n.code,{children:"from"})," argument as ns1/ns2/my-secret\nand ",(0,o.jsx)(n.code,{children:"to"})," argument as ns1/ns3/my-secret. The second way is to invoke ",(0,o.jsx)(n.code,{children:"/sys/remount"})," from the namespace ns1/, with ",(0,o.jsx)(n.code,{children:"from"})," as ns2/my-secret and ",(0,o.jsx)(n.code,{children:"to"}),"\nas ns3/my-secret."]}),"\n",(0,o.jsx)(n.h2,{id:"leases",children:"Leases"}),"\n",(0,o.jsx)(n.p,{children:"The remount operation will result in existing leases on a mount being revoked. On mounts with a large number of leases, the revocation process and hence remounting as a whole may be a time consuming process.\nAny dynamic secrets for a secrets mount and any tokens associated\nwith an auth mount, will be revoked during the remount process."}),"\n",(0,o.jsx)(n.h2,{id:"configurations",children:"Configurations"}),"\n",(0,o.jsx)(n.p,{children:"The remount operation will retain all the configurations of the mount. For example, if you create a read-only role\non a database mount or a user on a userpass mount, those will be available at the new location after remounting."}),"\n",(0,o.jsx)(n.h2,{id:"cleanup-operations",children:"Cleanup operations"}),"\n",(0,o.jsx)(n.p,{children:"There are two primary cleanup operations that OpenBao operators will need to keep in mind after performing a remount."}),"\n",(0,o.jsx)(n.h3,{id:"entities-and-aliases",children:"Entities and aliases"}),"\n",(0,o.jsx)(n.p,{children:"Any aliases that refer to users on the auth mount could now point to an invalid mount when an auth mount is moved. Pointing to an invalid mount may not be the case for every instance;\na remount within a namespace will end in the aliases pointing to a valid mount.\nStill, a remount across namespaces will always result in the aliases pointing to an invalid mount. In the latter case,\nthe OpenBao operator should find and remove those aliases from the source namespace, and create equivalent aliases\nand entities for the new mount in the target namespace. If new entities and aliases aren't created in the target namespace,\nOpenBao will dynamically generate them upon login operations."}),"\n",(0,o.jsx)(n.h3,{id:"policies",children:"Policies"}),"\n",(0,o.jsx)(n.p,{children:"Remounting can also result in policies referring to invalid paths. Any policy that refers to a moved secrets engine\nwould need to be updated to point to the new location of the engine, assuming that the policy is in the target namespace\nor a parent of the target namespace, or updated to remove the original mount path if not.\nAny policies associated with roles on a moved auth mount need to be inspected\nto see if they still refer to valid paths after the remount operation. Say in namespace ns1/, a child of the root namespace, a role on the mount approle/\nhas policies granting access to /my-secret. If the mount is moved to another child of the root namespace, say ns2/,\nwhich does not have a secrets engine called my-secret/, the OpenBao operator would either create an equivalent my-secret/\nmount in ns2/, or update the policy to refer to paths valid from the ns2/ namespace."}),"\n",(0,o.jsx)(n.h2,{id:"quotas",children:"Quotas"}),"\n",(0,o.jsx)(n.p,{children:"The mount being moved may have rate limit or lease count quotas.. The remount process\nwill update these quotas to refer to the new path of the mount."}),"\n",(0,o.jsx)(n.h2,{id:"path-filters",children:"Path filters"}),"\n",(0,o.jsx)(n.p,{children:"The remount operation will respect any existing path filters. Three uses cases, in particular, are shown below.\nhere."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"If a mount is moved into a namespace denylisted on a secondary cluster, it will not be available on that cluster."}),"\n",(0,o.jsx)(n.li,{children:"If a mount is moved from a namespace denylisted on a secondary cluster to one that is not, it will now be available\non the cluster."}),"\n",(0,o.jsx)(n.li,{children:"If a mount is specifically denylisted on a secondary cluster and is moved, it will now be available on the cluster."}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var o=t(96540);const s={},a=o.createContext(s);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);