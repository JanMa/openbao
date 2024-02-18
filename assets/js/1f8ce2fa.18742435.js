"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9435],{91823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=n(74848),s=n(28453);const o={description:"Describes how OpenBao can be an OIDC identity provider."},r="OIDC provider",a={id:"concepts/oidc-provider",title:"OIDC provider",description:"Describes how OpenBao can be an OIDC identity provider.",source:"@site/content/docs/concepts/oidc-provider.mdx",sourceDirName:"concepts",slug:"/concepts/oidc-provider",permalink:"/docs/concepts/oidc-provider",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/concepts/oidc-provider.mdx",tags:[],version:"current",frontMatter:{description:"Describes how OpenBao can be an OIDC identity provider."},sidebar:"docs",previous:{title:"Identity",permalink:"/docs/concepts/identity"},next:{title:"Response wrapping",permalink:"/docs/concepts/response-wrapping"}},d={},c=[{value:"Configuration options",id:"configuration-options",level:2},{value:"OIDC providers",id:"oidc-providers",level:3},{value:"Scopes",id:"scopes",level:3},{value:"Client applications",id:"client-applications",level:3},{value:"Client types",id:"client-types",level:4},{value:"Confidential",id:"confidential",level:5},{value:"Public",id:"public",level:5},{value:"Assignments",id:"assignments",level:3},{value:"Keys",id:"keys",level:3},{value:"OIDC flow",id:"oidc-flow",level:2},{value:"OpenID configuration",id:"openid-configuration",level:3},{value:"Keys",id:"keys-1",level:3},{value:"Authorization endpoint",id:"authorization-endpoint",level:3},{value:"Token endpoint",id:"token-endpoint",level:3},{value:"UserInfo endpoint",id:"userinfo-endpoint",level:3}];function l(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"oidc-provider",children:"OIDC provider"}),"\n",(0,i.jsxs)(t.p,{children:["This document provides conceptual information about the OpenBao ",(0,i.jsx)(t.strong,{children:"OpenID Connect (OIDC) identity\nprovider"})," feature. This feature enables client applications that speak the OIDC protocol to\nleverage OpenBao's source of ",(0,i.jsx)(t.a,{href:"/docs/concepts/identity",children:"identity"})," and wide range of ",(0,i.jsx)(t.a,{href:"/docs/auth",children:"authentication methods"}),"\nwhen authenticating end-users. For more information about the usage of OpenBao's OIDC provider,\nrefer to the ",(0,i.jsx)(t.a,{href:"/docs/secrets/identity/oidc-provider",children:"OIDC identity provider"})," documentation."]}),"\n",(0,i.jsx)(t.h2,{id:"configuration-options",children:"Configuration options"}),"\n",(0,i.jsx)(t.p,{children:"The next few sections of the document provide implementation details for each resource that permits OpenBao configuration as an OIDC identity provider."}),"\n",(0,i.jsx)(t.h3,{id:"oidc-providers",children:"OIDC providers"}),"\n",(0,i.jsxs)(t.p,{children:["Each OpenBao namespace will contain a built-in provider resource named ",(0,i.jsx)(t.code,{children:"default"}),". The ",(0,i.jsx)(t.code,{children:"default"}),"\nprovider will allow all client applications within the namespace to use it for OIDC flows.\nThe ",(0,i.jsx)(t.code,{children:"default"})," provider can be modified but not deleted."]}),"\n",(0,i.jsxs)(t.p,{children:["Additionally, an OpenBao namespace may contain several provider resources. Each configured provider will publish the APIs listed within the ",(0,i.jsx)(t.a,{href:"/docs/concepts/oidc-provider#oidc-flow",children:"OIDC flow"})," section. The APIs will be served via backend path-based routing on OpenBao's listen ",(0,i.jsx)(t.a,{href:"/docs/configuration/listener/tcp#address",children:"address"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"A provider has the following configuration parameters:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Issuer URL"}),": used in the ",(0,i.jsx)(t.code,{children:"iss"})," claim of ID tokens"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Allowed client IDs"}),": limits which clients can access the provider"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Scopes supported"}),": limits what identity information is available as claims"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The issuer URL parameter is necessary for the validation of ID tokens by clients. If an URL parameter is not provided explicitly, it will default to a URL with OpenBao's ",(0,i.jsx)(t.a,{href:"/docs/configuration#api_addr",children:"api_addr"})," as the ",(0,i.jsx)(t.code,{children:"scheme://host:port"})," component and ",(0,i.jsx)(t.code,{children:"/v1/:namespace/identity/oidc/provider/:name"})," as the path component. This means tokens issued by a provider in a specified OpenBao cluster must be validated within that same cluster. If the issuer URL is provided explicitly, it must point to an OpenBao instance that is network-reachable by clients for ID token validation."]}),"\n",(0,i.jsxs)(t.p,{children:["The allowed client IDs parameter utilizes the list of client IDs that have been generated by OpenBao as a part of client registration. By default, all clients will be ",(0,i.jsx)(t.em,{children:"disallowed"}),". Providing ",(0,i.jsx)(t.code,{children:"*"})," as the parameter value will allow all clients to use the provider."]}),"\n",(0,i.jsxs)(t.p,{children:["The scopes parameter employs a list of references to named scope resources. The values provided are discoverable by the ",(0,i.jsx)(t.code,{children:"scopes_supported"})," key in the OIDC discovery document of the provider. By default, a provider will have the ",(0,i.jsx)(t.code,{children:"openid"})," scope available. See the scopes section below for more details on the ",(0,i.jsx)(t.code,{children:"openid"})," scope."]}),"\n",(0,i.jsx)(t.h3,{id:"scopes",children:"Scopes"}),"\n",(0,i.jsxs)(t.p,{children:["Providers may reference scope resources via the ",(0,i.jsx)(t.code,{children:"scopes_supported"})," parameter to make specific identity information available as claims."]}),"\n",(0,i.jsx)(t.p,{children:"A scope will have the following configuration parameters:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Description"}),": identity information captured by the scope"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Template"}),": maps individual claims to OpenBao identity information"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The template parameter takes advantage of the ",(0,i.jsx)(t.a,{href:"/api-docs/secret/identity/tokens#template",children:"JSON-based templating"})," used by identity tokens for claims mapping. This means the parameter will take a JSON string of arbitrary structure where the values may be replaced with specific identity information. Template parameters that are not present for an OpenBao identity are omitted from the resulting claims without an error."]}),"\n",(0,i.jsx)(t.p,{children:"Example of a JSON template for a scope:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'{\n    "username": {{identity.entity.aliases.$MOUNT_ACCESSOR.name}},\n    "contact": {\n        "email": {{identity.entity.metadata.email}},\n        "phone_number": {{identity.entity.metadata.phone_number}}\n    },\n    "groups": {{identity.entity.groups.names}}\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"The full list of template parameters are included in the following table:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"identity.entity.id"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The entity's ID"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"identity.entity.name"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The entity's name"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"identity.entity.groups.ids"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The IDs of the groups the entity is a member of"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"identity.entity.groups.names"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The names of the groups the entity is a member of"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"identity.entity.metadata"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Metadata associated with the entity"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"identity.entity.metadata.<metadata key>"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Metadata associated with the entity for the given key"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"identity.entity.aliases.<mount accessor>.id"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Entity alias ID for the given mount"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"identity.entity.aliases.<mount accessor>.name"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Entity alias name for the given mount"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"identity.entity.aliases.<mount accessor>.metadata"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Metadata associated with the alias for the given mount"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"identity.entity.aliases.<mount accessor>.metadata.<metadata key>"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Metadata associated with the alias for the given mount and metadata key"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"identity.entity.aliases.<mount accessor>.custom_metadata"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Custom metadata associated with the alias for the given mount"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"identity.entity.aliases.<mount accessor>.custom_metadata.<custom_metadata key>"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Custom metadata associated with the alias for the given mount and custom metadata key"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"time.now"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Current time as integral seconds since the Epoch"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"time.now.plus.<duration>"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Current time plus a ",(0,i.jsx)(t.a,{href:"/docs/concepts/duration-format",children:"duration format string"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"time.now.minus.<duration>"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Current time minus a ",(0,i.jsx)(t.a,{href:"/docs/concepts/duration-format",children:"duration format string"})]})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"Several named scopes can be made available on an individual provider. Note that the top-level keys in a JSON template may conflict with those in another scope. When scopes are made available on a provider, their templates are checked for top-level conflicts. A warning will be issued to the OpenBao operator if any conflicts are found. This may result in an error if the scopes are requested in an OIDC Authentication Request."}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"openid"})," scope is a unique case scope that may not be modified or deleted. The scope will exist in OpenBao and supported by each provider by default. The scope represents the minimum set of claims required by the OIDC specification for inclusion in ID tokens. As such, templates may not contain top-level keys that overwrite the claims populated by the openid scope."]}),"\n",(0,i.jsxs)(t.p,{children:["The following defines the claims key and value mapping for the ",(0,i.jsx)(t.code,{children:"openid"})," scope:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"iss"}),"- configured issuer of the provider"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"sub"}),"- unique entity ID of the OpenBao user"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"aud"}),"- ID of the client"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"iat"}),"- time of token issue"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"exp"}),"- time of token issue + ID token TTL"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"client-applications",children:"Client applications"}),"\n",(0,i.jsxs)(t.p,{children:["A client resource represents an application that wants to delegate end-user authentication\nto OpenBao using the OIDC protocol. The information provided by a client resource can be used\nto configure an OIDC ",(0,i.jsx)(t.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#Terminology",children:"relying party"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"A client has the following configuration parameters:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Redirect URIs"}),": limits the valid redirect URIs in an authentication request"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Assignments"}),": determine who can authenticate with the client"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Key"}),": used to sign the ID tokens"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"ID token TTL"}),": specifies the time-to-live for ID tokens"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Access token TTL"}),": specifies the time-to-live for access tokens"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Client type"}),": determines the client's ability to maintain confidentiality of credentials"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"key"})," parameter is optional. The key will be used to sign ID tokens for the client.\nIt cannot be modified after creation. If not supplied, defaults to the built-in\n",(0,i.jsx)(t.a,{href:"/docs/concepts/oidc-provider#keys",children:"default key"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["A ",(0,i.jsx)(t.code,{children:"client_id"})," is generated and returned after a successful client registration. The\n",(0,i.jsx)(t.code,{children:"client_id"})," uniquely identifies the client. Its value will be a string with 32 random\ncharacters from the base62 character set."]}),"\n",(0,i.jsxs)(t.p,{children:["~> ",(0,i.jsx)(t.strong,{children:"Note"}),": At least one of the redirect URIs of a client must exactly match the ",(0,i.jsx)(t.code,{children:"redirect_uri"})," parameter used in an authentication request initiated by the client."]}),"\n",(0,i.jsx)(t.h4,{id:"client-types",children:"Client types"}),"\n",(0,i.jsxs)(t.p,{children:["A client resource has a ",(0,i.jsx)(t.code,{children:"client_type"})," parameter which specifies the OAuth 2.0\n",(0,i.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc6749#section-2.1",children:"client type"})," based on\nits ability to maintain confidentiality of credentials. The following sections detail\nthe differences between confidential and public clients in OpenBao."]}),"\n",(0,i.jsx)(t.h5,{id:"confidential",children:"Confidential"}),"\n",(0,i.jsxs)(t.p,{children:["Confidential clients are capable of maintaining the confidentiality of their credentials.\nConfidential clients have a ",(0,i.jsx)(t.code,{children:"client_secret"}),". The ",(0,i.jsx)(t.code,{children:"client_secret"})," will have a prefix of\n",(0,i.jsx)(t.code,{children:"hvo_secret"})," followed by 64 random characters in the base62 character set."]}),"\n",(0,i.jsxs)(t.p,{children:["Confidential clients may use Proof Key for Code Exchange (",(0,i.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc7636",children:"PKCE"}),")\nduring the authorization code flow."]}),"\n",(0,i.jsxs)(t.p,{children:["Confidential clients must authenticate to the token endpoint using the\n",(0,i.jsx)(t.code,{children:"client_secret_basic"})," or ",(0,i.jsx)(t.code,{children:"client_secret_post"})," ",(0,i.jsx)(t.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#ClientAuthentication",children:"client authentication method"}),"."]}),"\n",(0,i.jsx)(t.h5,{id:"public",children:"Public"}),"\n",(0,i.jsxs)(t.p,{children:["Public clients are not capable of maintaining the confidentiality of their credentials.\nAs such, public clients do not have a ",(0,i.jsx)(t.code,{children:"client_secret"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Public clients must use Proof Key for Code Exchange (",(0,i.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc7636",children:"PKCE"}),")\nduring the authorization code flow."]}),"\n",(0,i.jsxs)(t.p,{children:["Public clients use the ",(0,i.jsx)(t.code,{children:"none"})," ",(0,i.jsx)(t.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#ClientAuthentication",children:"client authentication method"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"assignments",children:"Assignments"}),"\n",(0,i.jsxs)(t.p,{children:["Assignment resources are referenced by clients via the ",(0,i.jsx)(t.code,{children:"assignments"})," parameter. This parameter limits the set of OpenBao users allowed to authenticate. The assignments of an associated client are validated during the authentication request, ensuring that the OpenBao identity associated with the request is a member of the assignment's entities or groups."]}),"\n",(0,i.jsxs)(t.p,{children:["Each OpenBao namespace will contain a built-in assignment resource named ",(0,i.jsx)(t.code,{children:"allow_all"}),". The\n",(0,i.jsx)(t.code,{children:"allow_all"})," assignment allows all OpenBao entities to authenticate through a client. The\n",(0,i.jsx)(t.code,{children:"allow_all"})," assignment cannot be modified or deleted."]}),"\n",(0,i.jsx)(t.h3,{id:"keys",children:"Keys"}),"\n",(0,i.jsxs)(t.p,{children:["Key resources are referenced by clients via the ",(0,i.jsx)(t.code,{children:"key"})," parameter. This parameter specifies\nthe key that will be used to sign ID tokens for the client. See existing\n",(0,i.jsx)(t.a,{href:"/api-docs/secret/identity/tokens#create-a-named-key",children:"documentation"})," for details on keyring\nmanagement, supported signing algorithms, rotation periods, and verification TTLs. Currently,\na key referenced by a client cannot be changed."]}),"\n",(0,i.jsxs)(t.p,{children:["Each OpenBao namespace will contain a built-in key resource named ",(0,i.jsx)(t.code,{children:"default"}),". The ",(0,i.jsx)(t.code,{children:"default"}),"\nkey can be modified but not deleted. Clients that don't specify the ",(0,i.jsx)(t.code,{children:"key"})," parameter at\ncreation time will use the ",(0,i.jsx)(t.code,{children:"default"})," key."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"default"})," key will have the following configuration:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"algorithm"})," - ",(0,i.jsx)(t.code,{children:"RS256"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"allowed_client_ids"})," - ",(0,i.jsx)(t.code,{children:"*"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"rotation_period"})," - ",(0,i.jsx)(t.code,{children:"24h"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"verification_ttl"})," - ",(0,i.jsx)(t.code,{children:"24h"})]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"oidc-flow",children:"OIDC flow"}),"\n",(0,i.jsxs)(t.p,{children:["~> ",(0,i.jsx)(t.strong,{children:"Note"}),": The OpenBao OIDC Provider feature currently only supports the ",(0,i.jsx)(t.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#CodeFlowAuth",children:"authorization code flow"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"The following sections provide implementation details for the OIDC compliant APIs provided by OpenBao OIDC providers."}),"\n",(0,i.jsxs)(t.p,{children:['OpenBao OIDC providers enable registered clients to authenticate and obtain identity information (or "claims") for their end-users. They do this by providing the APIs and behavior required to satisfy the OIDC specification for the ',(0,i.jsx)(t.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#CodeFlowAuth",children:"authorization code flow"}),". All clients are treated as first-party. This means that end-users will not be required to provide consent to the provider as detailed in section ",(0,i.jsx)(t.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#Consent",children:"3.1.2.4"})," of the OIDC specification. The provider will release information to clients as long as the end-user has ACL access to the provider and their identity has been authorized via an assignment."]}),"\n",(0,i.jsxs)(t.p,{children:["OpenBao OIDC providers implement Proof Key for Code Exchange (",(0,i.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc7636",children:"PKCE"}),")\nto mitigate authorization code interception attacks. PKCE is required for ",(0,i.jsx)(t.code,{children:"public"})," client types\nand optional for ",(0,i.jsx)(t.code,{children:"confidential"})," client types."]}),"\n",(0,i.jsx)(t.h3,{id:"openid-configuration",children:"OpenID configuration"}),"\n",(0,i.jsxs)(t.p,{children:["Each provider offers an unauthenticated endpoint that facilitates OIDC Discovery. All required metadata listed in ",(0,i.jsx)(t.a,{href:"https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata",children:"OpenID Provider Metadata"})," is included in the discovery document. Additionally, the recommended ",(0,i.jsx)(t.code,{children:"userinfo_endpoint"})," and ",(0,i.jsx)(t.code,{children:"scopes_supported"})," metadata are included."]}),"\n",(0,i.jsx)(t.h3,{id:"keys-1",children:"Keys"}),"\n",(0,i.jsxs)(t.p,{children:["Each provider offers an unauthenticated endpoint that provides the public portion of keys used to sign ID tokens. The keys are published in a JSON Web Key Set ",(0,i.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc7517",children:"(JWKS)"})," format. The keyset for an individual provider contains the keys referenced by all clients via the ",(0,i.jsx)(t.code,{children:"allowed_client_ids"})," configuration parameter. A ",(0,i.jsx)(t.code,{children:"Cache-Control"})," header to set based on responses, allowing clients to refresh their keys upon rotation. The ",(0,i.jsx)(t.code,{children:"max-age"})," of the header is set based on the earliest rotation time of any of the keys in the keyset."]}),"\n",(0,i.jsx)(t.h3,{id:"authorization-endpoint",children:"Authorization endpoint"}),"\n",(0,i.jsxs)(t.p,{children:["Each provider offers an authenticated ",(0,i.jsx)(t.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#AuthorizationEndpoint",children:"authorization endpoint"}),". The authorization endpoint for each provider is added to OpenBao's ",(0,i.jsx)(t.a,{href:"/docs/concepts/policies#default-policy",children:"default policy"})," using the ",(0,i.jsx)(t.code,{children:"identity/oidc/provider/+/authorize"})," path. The endpoint incorporates all required ",(0,i.jsx)(t.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest",children:"authentication request"})," parameters as input."]}),"\n",(0,i.jsxs)(t.p,{children:["The endpoint ",(0,i.jsx)(t.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#AuthRequestValidation",children:"validates"})," client requests and ensures that all required parameters are present and valid. The ",(0,i.jsx)(t.code,{children:"redirect_uri"})," of the request is validated against the client's ",(0,i.jsx)(t.code,{children:"redirect_uris"}),". The requesting OpenBao entity will be validated against the client's ",(0,i.jsx)(t.code,{children:"assignments"}),". An appropriate ",(0,i.jsx)(t.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#AuthError",children:"error code"})," is returned for invalid requests."]}),"\n",(0,i.jsxs)(t.p,{children:["An authorization code is generated with a successful validation of the request. The authorization code is single-use and cached with a lifetime of approximately 5 minutes, which mitigates the risk of leaks. A response including the original ",(0,i.jsx)(t.code,{children:"state"})," presented by the client and ",(0,i.jsx)(t.code,{children:"code"})," will be returned to the OpenBao UI which initiated the request. OpenBao will issue an HTTP 302 redirect to the ",(0,i.jsx)(t.code,{children:"redirect_uri"})," of the request, which includes the ",(0,i.jsx)(t.code,{children:"code"})," and ",(0,i.jsx)(t.code,{children:"state"})," as query parameters."]}),"\n",(0,i.jsx)(t.h3,{id:"token-endpoint",children:"Token endpoint"}),"\n",(0,i.jsxs)(t.p,{children:["Each provider will offer a ",(0,i.jsx)(t.a,{href:"/api-docs/secret/identity/oidc-provider#token-endpoint",children:"token endpoint"}),". The endpoint may be unauthenticated in OpenBao but is authenticated by requiring a ",(0,i.jsx)(t.code,{children:"client_secret"})," as described in ",(0,i.jsx)(t.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#ClientAuthentication",children:"client authentication"}),". The endpoint ingests all required ",(0,i.jsx)(t.a,{href:"/api-docs/secret/identity/oidc-provider#parameters-15",children:"token request"})," parameters as input. The endpoint ",(0,i.jsx)(t.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#TokenRequestValidation",children:"validates"})," the client requests and exchanges an authorization code for the ID token and access token. The cache of authorization codes will be verified against the code presented in the exchange. The appropriate ",(0,i.jsx)(t.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#TokenErrorResponse",children:"error codes"})," are returned for all invalid requests."]}),"\n",(0,i.jsxs)(t.p,{children:["The ID token is generated and returned upon successful client authentication and request validation. The ID token will contain a combination of required and configurable claims. The required claims are enumerated in the scopes section above for the ",(0,i.jsx)(t.code,{children:"openid"})," scope. The configurable claims are populated by templates associated with the scopes provided in the authentication request that generated the authorization code."]}),"\n",(0,i.jsxs)(t.p,{children:["An access token is also generated and returned upon successful client authentication and request validation. The access token is an OpenBao ",(0,i.jsx)(t.a,{href:"/docs/concepts/tokens#batch-tokens",children:"batch token"})," with a policy that only provides read access to the issuing provider's ",(0,i.jsx)(t.a,{href:"/api-docs/secret/identity/oidc-provider#userinfo-endpoint",children:"userinfo endpoint"}),". The access token is also a TTL as defined by the ",(0,i.jsx)(t.code,{children:"access_token_ttl"})," of the requesting client."]}),"\n",(0,i.jsx)(t.h3,{id:"userinfo-endpoint",children:"UserInfo endpoint"}),"\n",(0,i.jsxs)(t.p,{children:["Each provider provides an authenticated ",(0,i.jsx)(t.a,{href:"/api-docs/secret/identity/oidc-provider#userinfo-endpoint",children:"userinfo endpoint"}),". The endpoint accepts the access token obtained from the token endpoint as a ",(0,i.jsx)(t.a,{href:"/api-docs#authentication",children:"bearer token"}),". The userinfo response is a JSON object with the ",(0,i.jsx)(t.code,{children:"application/json"})," content type. The JSON object contains claims for the OpenBao entity associated with the access token. The claims returned are determined by the scopes requested in the authentication request that produced the access token. The ",(0,i.jsx)(t.code,{children:"sub"})," claim is always returned as the entity ID in the userinfo response."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(96540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);