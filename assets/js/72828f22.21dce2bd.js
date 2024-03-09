"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1140],{58401:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var r=n(74848),t=n(28453);const l={description:"The `/sys/rekey-recovery-key` endpoints are used to rekey the recovery keys for OpenBao."},i="/sys/rekey-recovery-key",a={id:"system/rekey-recovery-key",title:"/sys/rekey-recovery-key",description:"The `/sys/rekey-recovery-key` endpoints are used to rekey the recovery keys for OpenBao.",source:"@site/content/api-docs/system/rekey-recovery-key.mdx",sourceDirName:"system",slug:"/system/rekey-recovery-key",permalink:"/openbao/api-docs/system/rekey-recovery-key",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/api-docs/system/rekey-recovery-key.mdx",tags:[],version:"current",frontMatter:{description:"The `/sys/rekey-recovery-key` endpoints are used to rekey the recovery keys for OpenBao."},sidebar:"api",previous:{title:"/sys/rekey",permalink:"/openbao/api-docs/system/rekey"},next:{title:"Remount ( API )",permalink:"/openbao/api-docs/system/remount"}},c={},d=[{value:"Read rekey progress",id:"read-rekey-progress",level:2},{value:"Sample request",id:"sample-request",level:3},{value:"Sample response",id:"sample-response",level:3},{value:"Start rekey",id:"start-rekey",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Sample payload",id:"sample-payload",level:3},{value:"Sample request",id:"sample-request-1",level:3},{value:"Cancel rekey",id:"cancel-rekey",level:2},{value:"Sample request",id:"sample-request-2",level:3},{value:"Read backup key",id:"read-backup-key",level:2},{value:"Sample request",id:"sample-request-3",level:3},{value:"Sample response",id:"sample-response-1",level:3},{value:"Delete backup key",id:"delete-backup-key",level:2},{value:"Sample request",id:"sample-request-4",level:3},{value:"Submit key",id:"submit-key",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Sample payload",id:"sample-payload-1",level:3},{value:"Sample request",id:"sample-request-5",level:3},{value:"Sample response",id:"sample-response-2",level:3},{value:"Read rekey recovery key verification progress",id:"read-rekey-recovery-key-verification-progress",level:2},{value:"Sample request",id:"sample-request-6",level:3},{value:"Sample response",id:"sample-response-3",level:3},{value:"Cancel rekey verification",id:"cancel-rekey-verification",level:2},{value:"Sample request",id:"sample-request-7",level:3},{value:"Sample response",id:"sample-response-4",level:3},{value:"Submit verification key",id:"submit-verification-key",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Sample payload",id:"sample-payload-2",level:3},{value:"Sample request",id:"sample-request-8",level:3},{value:"Sample response",id:"sample-response-5",level:3}];function o(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"sysrekey-recovery-key",children:(0,r.jsx)(s.code,{children:"/sys/rekey-recovery-key"})}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"/sys/rekey-recovery-key"})," endpoints are used to rekey the recovery keys for\nOpenBao. Rekey endpoints only apply to seals that support recovery keys."]}),"\n",(0,r.jsx)(s.h2,{id:"read-rekey-progress",children:"Read rekey progress"}),"\n",(0,r.jsx)(s.p,{children:"This endpoint reads the configuration and progress of the current rekey attempt."}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Method"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"GET"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"/sys/rekey-recovery-key/init"})})]})})]}),"\n",(0,r.jsx)(s.h3,{id:"sample-request",children:"Sample request"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    http://127.0.0.1:8200/v1/sys/rekey-recovery-key/init\n'})}),"\n",(0,r.jsx)(s.h3,{id:"sample-response",children:"Sample response"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "started": true,\n  "nonce": "2dbd10f1-8528-6246-09e7-82b25b8aba63",\n  "t": 3,\n  "n": 5,\n  "progress": 1,\n  "required": 3,\n  "pgp_fingerprints": ["abcd1234"],\n  "backup": true,\n  "verification_required": false\n}\n'})}),"\n",(0,r.jsxs)(s.p,{children:["If a rekey is started, then ",(0,r.jsx)(s.code,{children:"n"})," is the new shares to generate and ",(0,r.jsx)(s.code,{children:"t"})," is the\nthreshold required for the new shares. ",(0,r.jsx)(s.code,{children:"progress"})," is how many recovery keys have\nbeen provided for this rekey, where ",(0,r.jsx)(s.code,{children:"required"})," must be reached to complete. The\n",(0,r.jsx)(s.code,{children:"nonce"})," for the current rekey operation is also displayed. If PGP keys are being\nused to encrypt the final shares, the key fingerprints and whether the final\nkeys will be backed up to physical storage will also be displayed.\n",(0,r.jsx)(s.code,{children:"verification_required"})," indicates whether verification was enabled for this\noperation."]}),"\n",(0,r.jsx)(s.h2,{id:"start-rekey",children:"Start rekey"}),"\n",(0,r.jsx)(s.p,{children:"This endpoint initializes a new rekey attempt. Only a single recovery key rekey\nattempt can take place at a time, and changing the parameters of a rekey\nrequires canceling and starting a new rekey, which will also provide a new\nnonce."}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Method"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"POST"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"/sys/rekey-recovery-key/init"})})]})})]}),"\n",(0,r.jsx)(s.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"secret_shares"})," ",(0,r.jsx)(s.code,{children:"(int: <required>)"}),"\xa0\u2013\xa0Specifies the number of shares to split\nthe recovery key into."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"secret_threshold"})," ",(0,r.jsx)(s.code,{children:"(int: <required>)"})," \u2013\xa0Specifies the number of shares\nrequired to reconstruct the recovery key. This must be less than or equal to\n",(0,r.jsx)(s.code,{children:"secret_shares"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"pgp_keys"})," ",(0,r.jsx)(s.code,{children:"(array<string>: nil)"})," \u2013\xa0Specifies an array of PGP public keys used\nto encrypt the output recovery key shares. Ordering is preserved. The keys must be\nbase64-encoded from their original binary representation. The size of this\narray must be the same as ",(0,r.jsx)(s.code,{children:"secret_shares"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"backup"})," ",(0,r.jsx)(s.code,{children:"(bool: false)"})," \u2013\xa0Specifies if using PGP-encrypted keys, whether\nOpenBao should also store a plaintext backup of the PGP-encrypted keys at\n",(0,r.jsx)(s.code,{children:"core/recovery-keys-backup"})," in the physical storage backend. These can then\nbe retrieved and removed via the ",(0,r.jsx)(s.code,{children:"sys/rekey-recovery-key/backup"})," endpoint."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"require_verification"})," ",(0,r.jsx)(s.code,{children:"(bool: false)"})," \u2013\xa0This turns on verification\nfunctionality. When verification is turned on, after successful authorization\nwith the current unseal keys, the new unseal keys are returned but the\nrecovery key is not actually rotated. The new keys must be provided to\nauthorize the actual rotation of the key. This ensures that the new keys have\nbeen successfully saved and protects against a risk of the keys being lost\nafter rotation but before they can be persisted. This can be used with\nwithout ",(0,r.jsx)(s.code,{children:"pgp_keys"}),", and when used with it, it allows ensuring that the\nreturned keys can be successfully decrypted before committing to the new\nshares, which the backup functionality does not provide."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"sample-payload",children:"Sample payload"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "secret_shares": 10,\n  "secret_threshold": 5\n}\n'})}),"\n",(0,r.jsx)(s.h3,{id:"sample-request-1",children:"Sample request"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/sys/rekey-recovery-key/init\n'})}),"\n",(0,r.jsx)(s.h2,{id:"cancel-rekey",children:"Cancel rekey"}),"\n",(0,r.jsx)(s.p,{children:"This endpoint cancels any in-progress rekey. This clears the rekey settings as\nwell as any progress made. This must be called to change the parameters of the\nrekey. Note: verification is still a part of a rekey. If rekeying is canceled\nduring the verification flow, the current unseal keys remain valid."}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Method"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"DELETE"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"/sys/rekey-recovery-key/init"})})]})})]}),"\n",(0,r.jsx)(s.h3,{id:"sample-request-2",children:"Sample request"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request DELETE \\\n    http://127.0.0.1:8200/v1/sys/rekey-recovery-key/init\n'})}),"\n",(0,r.jsx)(s.h2,{id:"read-backup-key",children:"Read backup key"}),"\n",(0,r.jsx)(s.p,{children:"This endpoint returns the backup copy of PGP-encrypted recovery key shares. The\nreturned value is the nonce of the rekey operation and a map of PGP key\nfingerprint to hex-encoded PGP-encrypted key."}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Method"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"GET"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"/sys/rekey/recovery-key-backup"})})]})})]}),"\n",(0,r.jsx)(s.h3,{id:"sample-request-3",children:"Sample request"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    http://127.0.0.1:8200/v1/sys/rekey/recovery-key-backup\n'})}),"\n",(0,r.jsx)(s.h3,{id:"sample-response-1",children:"Sample response"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "nonce": "2dbd10f1-8528-6246-09e7-82b25b8aba63",\n  "keys": {\n    "abcd1234": "..."\n  }\n}\n'})}),"\n",(0,r.jsx)(s.h2,{id:"delete-backup-key",children:"Delete backup key"}),"\n",(0,r.jsx)(s.p,{children:"This endpoint deletes the backup copy of PGP-encrypted recovery key shares."}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Method"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"DELETE"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"/sys/rekey/recovery-key-backup"})})]})})]}),"\n",(0,r.jsx)(s.h3,{id:"sample-request-4",children:"Sample request"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token" \\\n    --request DELETE \\\n    http://127.0.0.1:8200/v1/sys/rekey/recovery-key-backup\n'})}),"\n",(0,r.jsx)(s.h2,{id:"submit-key",children:"Submit key"}),"\n",(0,r.jsx)(s.p,{children:"This endpoint is used to enter a single recovery key share to progress the rekey\nof the OpenBao. If the threshold number of recovery key shares is reached, OpenBao\nwill complete the rekey. Otherwise, this API must be called multiple times until\nthat threshold is met. The rekey nonce operation must be provided with each\ncall."}),"\n",(0,r.jsxs)(s.p,{children:["When the operation is complete, this will return a response like the example\nbelow; otherwise the response will be the same as the ",(0,r.jsx)(s.code,{children:"GET"})," method against\n",(0,r.jsx)(s.code,{children:"sys/rekey/init"}),", providing status on the operation itself."]}),"\n",(0,r.jsx)(s.p,{children:"If verification was requested, successfully completing this flow will\nimmediately put the operation into a verification state, and provide the nonce\nfor the verification operation."}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Method"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"POST"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"/sys/rekey-recovery-key/update"})})]})})]}),"\n",(0,r.jsx)(s.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"key"})," ",(0,r.jsx)(s.code,{children:"(string: <required>)"})," \u2013\xa0Specifies a single recovery share key."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"nonce"})," ",(0,r.jsx)(s.code,{children:"(string: <required>)"})," \u2013 Specifies the nonce of the rekey operation."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"sample-payload-1",children:"Sample payload"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "key": "AB32...",\n  "nonce": "abcd1234..."\n}\n'})}),"\n",(0,r.jsx)(s.h3,{id:"sample-request-5",children:"Sample request"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token" \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/sys/rekey-recovery-key/update\n'})}),"\n",(0,r.jsx)(s.h3,{id:"sample-response-2",children:"Sample response"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "complete": true,\n  "keys": ["one", "two", "three"],\n  "nonce": "2dbd10f1-8528-6246-09e7-82b25b8aba63",\n  "pgp_fingerprints": ["abcd1234"],\n  "keys_base64": ["base64keyvalue"],\n  "backup": true,\n  "verification_required": true,\n  "verification_nonce": "8b112c9e-2738-929d-bcc2-19aff249ff10"\n}\n'})}),"\n",(0,r.jsx)(s.p,{children:"If the keys are PGP-encrypted, an array of key fingerprints will also be\nprovided (with the order in which the keys were used for encryption) along with\nwhether or not the keys were backed up to physical storage."}),"\n",(0,r.jsx)(s.h2,{id:"read-rekey-recovery-key-verification-progress",children:"Read rekey recovery key verification progress"}),"\n",(0,r.jsx)(s.p,{children:"This endpoint reads the configuration and progress of the current rekey\nverification attempt."}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Method"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"GET"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"/sys/rekey-recovery-key/verify"})})]})})]}),"\n",(0,r.jsx)(s.h3,{id:"sample-request-6",children:"Sample request"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    http://127.0.0.1:8200/v1/sys/rekey-recovery-key/verify\n'})}),"\n",(0,r.jsx)(s.h3,{id:"sample-response-3",children:"Sample response"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "nonce": "8b112c9e-2738-929d-bcc2-19aff249ff10",\n  "t": 3,\n  "n": 5,\n  "progress": 1\n}\n'})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"n"})," is the total number of new shares that were generated and ",(0,r.jsx)(s.code,{children:"t"})," is the\nthreshold required for the new shares to pass verification. ",(0,r.jsx)(s.code,{children:"progress"})," is how\nmany of the new unseal keys have been provided for this verification operation.\nThe ",(0,r.jsx)(s.code,{children:"nonce"})," for the current rekey operation is also displayed."]}),"\n",(0,r.jsx)(s.h2,{id:"cancel-rekey-verification",children:"Cancel rekey verification"}),"\n",(0,r.jsxs)(s.p,{children:["This endpoint cancels any in-progress rekey verification operation. This clears\nany progress made and resets the nonce. Unlike a ",(0,r.jsx)(s.code,{children:"DELETE"})," against\n",(0,r.jsx)(s.code,{children:"sys/rekey-recovery-key/init"}),", this only resets the current verification\noperation, not the entire rekey atttempt. The return value is the same as ",(0,r.jsx)(s.code,{children:"GET"}),"\nalong with the new nonce."]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Method"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"DELETE"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"/sys/rekey-recovery-key/verify"})})]})})]}),"\n",(0,r.jsx)(s.h3,{id:"sample-request-7",children:"Sample request"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token" \\\n    --request DELETE \\\n    http://127.0.0.1:8200/v1/sys/rekey-recovery-key/verify\n'})}),"\n",(0,r.jsx)(s.h3,{id:"sample-response-4",children:"Sample response"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "nonce": "5827bbc1-0110-5725-cc21-beddc129d942",\n  "t": 3,\n  "n": 5,\n  "progress": 0\n}\n'})}),"\n",(0,r.jsx)(s.h2,{id:"submit-verification-key",children:"Submit verification key"}),"\n",(0,r.jsx)(s.p,{children:"This endpoint is used to enter a single new key share to progress the rekey\nverification operation. If the threshold number of new key shares is reached,\nOpenBao will complete the rekey by performing the actual rotation of the recovery\nkey. Otherwise, this API must be called multiple times until that threshold is\nmet. The nonce must be provided with each call."}),"\n",(0,r.jsxs)(s.p,{children:["When the operation is complete, this will return a response like the example\nbelow; otherwise the response will be the same as the ",(0,r.jsx)(s.code,{children:"GET"})," method against\n",(0,r.jsx)(s.code,{children:"sys/rekey-recovery-key/verify"}),", providing status on the operation itself."]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Method"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"POST"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"/sys/rekey-recovery-key/verify"})})]})})]}),"\n",(0,r.jsx)(s.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"key"})," ",(0,r.jsx)(s.code,{children:"(string: <required>)"})," \u2013\xa0Specifies a single recovery share key from the\nnew set of shares."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"nonce"})," ",(0,r.jsx)(s.code,{children:"(string: <required>)"})," \u2013 Specifies the nonce of the rekey\nverification operation."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"sample-payload-2",children:"Sample payload"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "key": "A58d...",\n  "nonce": "5a27bbc1..."\n}\n'})}),"\n",(0,r.jsx)(s.h3,{id:"sample-request-8",children:"Sample request"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token" \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/sys/rekey-recovery-key/verify\n'})}),"\n",(0,r.jsx)(s.h3,{id:"sample-response-5",children:"Sample response"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "nonce": "5827bbc1-0110-5725-cc21-beddc129d942",\n  "complete": true\n}\n'})})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>a});var r=n(96540);const t={},l=r.createContext(t);function i(e){const s=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(l.Provider,{value:s},e.children)}}}]);