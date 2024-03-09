"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5693],{82424:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>o});var t=s(74848),r=s(28453);const a={description:"\nThe `/sys/storage/raft` endpoints are used to manage OpenBao's Raft storage\nbackend."},l="/sys/storage/raft",i={id:"system/storage/raft",title:"/sys/storage/raft",description:"\nThe `/sys/storage/raft` endpoints are used to manage OpenBao's Raft storage\nbackend.",source:"@site/content/api-docs/system/storage/raft.mdx",sourceDirName:"system/storage",slug:"/system/storage/raft",permalink:"/openbao/api-docs/system/storage/raft",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/api-docs/system/storage/raft.mdx",tags:[],version:"current",frontMatter:{description:"\nThe `/sys/storage/raft` endpoints are used to manage OpenBao's Raft storage\nbackend."},sidebar:"api",previous:{title:"Overview",permalink:"/openbao/api-docs/system/storage/"},next:{title:"/sys/storage/raft/autopilot",permalink:"/openbao/api-docs/system/storage/raftautopilot"}},d={},o=[{value:"Join a raft cluster",id:"join-a-raft-cluster",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Sample payload",id:"sample-payload",level:3},{value:"Sample request",id:"sample-request",level:3},{value:"Read raft configuration",id:"read-raft-configuration",level:2},{value:"Sample request",id:"sample-request-1",level:3},{value:"Sample response",id:"sample-response",level:3},{value:"Remove a node from raft cluster",id:"remove-a-node-from-raft-cluster",level:2},{value:"Sample payload",id:"sample-payload-1",level:3},{value:"Sample request",id:"sample-request-2",level:3},{value:"Take a snapshot of the raft cluster",id:"take-a-snapshot-of-the-raft-cluster",level:2},{value:"Sample request",id:"sample-request-3",level:3},{value:"Restore raft using a snapshot",id:"restore-raft-using-a-snapshot",level:2},{value:"Sample request",id:"sample-request-4",level:3},{value:"Force restore raft using a snapshot",id:"force-restore-raft-using-a-snapshot",level:2},{value:"Sample request",id:"sample-request-5",level:3},{value:"Bootstrap an HA node",id:"bootstrap-an-ha-node",level:2},{value:"Sample request",id:"sample-request-6",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"sysstorageraft",children:(0,t.jsx)(n.code,{children:"/sys/storage/raft"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"/sys/storage/raft"})," endpoints are used to manage OpenBao's Raft storage\nbackend."]}),"\n",(0,t.jsx)(n.h2,{id:"join-a-raft-cluster",children:"Join a raft cluster"}),"\n",(0,t.jsxs)(n.p,{children:["This endpoint joins a new server node to the Raft cluster. When using Shamir\nseal, as soon as the OpenBao server is brought up, this API should be invoked\ninstead of ",(0,t.jsx)(n.code,{children:"sys/init"}),". This API completes in 2 phases. Once this is invoked,\nthe joining node will receive a challenge from the Raft's leader node. This\nchallenge can be answered by the joining node only after a successful unseal.\nHence, the joining node should be unsealed using the unseal keys of the Raft's\nleader node."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"POST"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"/sys/storage/raft/join"})})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"leader_api_addr"})," ",(0,t.jsx)(n.code,{children:"(string: <required>)"})," \u2013 Address of the leader node in the\nRaft cluster to which this node is trying to join."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"retry"})," ",(0,t.jsx)(n.code,{children:"(bool: false)"})," - Retry joining the Raft cluster in case of\nfailures."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"leader_ca_cert"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - CA certificate used to communicate with\nRaft's leader node."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"leader_client_cert"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - Client certificate used to communicate\nwith Raft's leader node."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"leader_client_key"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - Client key used to communicate with\nRaft's leader node."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"leader_tls_servername"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - TLS servername to use when connecting with HTTPS.\nShould match one of the names in the DNS SANs of the remote server certificate."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"auto_join"})," ",(0,t.jsx)(n.code,{children:'(string: "")'})," - Defines any cloud auto-join metadata. If\nsupplied, OpenBao will attempt to automatically discover peers in addition to what\ncan be provided via 'leader_api_addr'."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"auto_join_scheme"})," ",(0,t.jsx)(n.code,{children:'(string: "https")'})," - URI scheme to be used for ",(0,t.jsx)(n.code,{children:"auto_join"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"auto_join_port"})," ",(0,t.jsx)(n.code,{children:"(int: 8200)"})," - Port to be used for ",(0,t.jsx)(n.code,{children:"auto_join"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"sample-payload",children:"Sample payload"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "leader_api_addr": "https://127.0.0.1:8200",\n  "leader_ca_cert": "-----BEGIN CERTIFICATE-----\\nMIIDKTCCAhGgAwIBAgIUcd+Uyk1Tz+FhcbYP0zmynlkARoEwDQYJKoZIhvcNAQEL\\nBQAwFDESMBAGA1UEAxMJbG9jYWxob3N0MB4XDTE5MDYyNDIyMjgzNVoXDTE5MDYy\\nNzIyMjkwNVowADCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAKdYr6rU\\n21vYf7q/cpPigtBchqHvGZvpbA9DZucuUdQ0g4oAXRyShQ8omzmZOmO4A1GI3gqz\\nHBePSYl+1IZCwgbPBk2CH7MhlMMINdwoEH6IxFgHNBkNK6GbwnGLyKL0Sym88ly1\\n+sPP6+llS8uWNKu5GcObHLysD3Ce6QTt3usDPiw0cxp/KL1EkMi2dT7PvxTsX137\\nsEsuQcylltGEtRb67xvFBP8XhQZAEGw+u4S3EmtwWMwZixB45WQhj2Ncz5U0+w8V\\ncp9DSqB1QheoGPBBI62jHle05kzG85ZKmLBgHE6HEGS8biIHpannM7dgI0cRH6i2\\nF69N0rcbzK+NInUCAwEAAaOBhjCBgzAOBgNVHQ8BAf8EBAMCA6gwHQYDVR0lBBYw\\nFAYIKwYBBQUHAwEGCCsGAQUFBwMCMB0GA1UdDgQWBBQelJT5fthHdbCyD5zaI4tw\\n7mfp8zAfBgNVHSMEGDAWgBSuG6hyoOWoiGvSA3kqwo9DirS+pzASBgNVHREBAf8E\\nCDAGhwR/AAABMA0GCSqGSIb3DQEBCwUAA4IBAQCmetSH5w835RbbyHZD8e3ClHzi\\n210SrvzWkx3N0JcBOjs47jlLuqVTl0HRr2xMoIkErFbhPDBXARYV8eezhQ6G5M60\\n8AwVsG56rCa1l0weK2JfnEWgkwXZ/zbpZ2yNkWatWNSHdlJwGp99JTSriQYNOnMG\\nWvBDA8ukoOkIJd/a8+aXZBdUiAcFvlLWmX73pYGTlnQDiIqJvhrlkgCKPvzZqvV+\\njtz7kCt9EfT6sN6Xcny7GusRBSs+XfEe8u10+mbud+ufE/QSJ2D3tTYrS6eGqpVD\\nrezD8jS9PfZgQfHXVaphMADyw4flaSVxfJ/ZRFxXql3oJSuj02+VX6QsXex+\\n-----END CERTIFICATE-----",\n  "leader_client_cert": "-----BEGIN CERTIFICATE-----\\nMIIDNTCCAh2gAwIBAgIULkPFG+qu7tGv21Plc1sg4eGbMPkwDQYJKoZIhvcNAQEL\\nBQAwFDESMBAGA1UEAxMJbG9jYWxob3N0MB4XDTE5MDYyNDIyMjgwNVoXDTI5MDYy\\nMTIyMjgzNVowFDESMBAGA1UEAxMJbG9jYWxob3N0MIIBIjANBgkqhkiG9w0BAQEF\\nAAOCAQ8AMIIBCgKCAQEAwszD+A5vWD8S1N632ElHA5Px2dk97wJBKNYc/7RPNptn\\n+EOmMTXPfuA3LB92FoSMCR7ye3wvSTzyK9nqafS7U2tlOF4PJrJoNZyzrVwBVLXg\\n7Pd8qQxnxbonc3bscWZuEfbFsugkPHgBtnSkyCffXKhhwM5LbJqmK5cfJRZZ0eRy\\nwmOCQCJ8ZmN2KfjHiGSEw9v19CNtvFNLyfiTZZLO9M5n4dgainZZCs+vdKD7tSJf\\nycwWiZ4ezOwLMIgxdbLYKVglbZsPcMVVPLTskmY8WiHUM6sy3HAbFQn20Rj7JGE6\\nldR3NX80YtCMt8/d+xzBfxu4x8juxHCgZFGt3nUS0wIDAQABo38wfTAOBgNVHQ8B\\nAf8EBAMCAQYwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUrhuocqDlqIhr0gN5\\nKsKPQ4q0vqcwHwYDVR0jBBgwFoAUrhuocqDlqIhr0gN5KsKPQ4q0vqcwGgYDVR0R\\nBBMwEYIJbG9jYWxob3N0hwR/AAABMA0GCSqGSIb3DQEBCwUAA4IBAQBRno9NOaat\\n8g1ma/6OxP1JUt1VRao4+t2GQTCJ697d2SmpHr8CYanMPog+QhDj/lderA/oS0V3\\n2jruH9CyH0smFMIsLBZpnRIwdhTISbIXdU3Uvcd6nne/f7LiUUmqf8YS9SHxWPFq\\nI72QvtPrsjYKCZwJsHZe071lYScjrjGnlUhhbrug2g6/ZMHJ7mndGE022zMn/XD/\\njrrKE6fCDCjJ4PRrta7+G7BvsFHqMSQ+2/947TGohxW69cbNyDeiQVDQ5mpJUy2b\\nnOCVVnq0nafSuvBTHCCLxjd7f+9TiB/B3qT8GA9V6LANDSdQ15MRIhpup/yosmqX\\nl5goCY/j3bDh\\n-----END CERTIFICATE-----",\n  "leader_client_key": "-----BEGIN RSA PRIVATE KEY-----\\nMIIEpAIBAAKCAQEAp1ivqtTbW9h/ur9yk+KC0FyGoe8Zm+lsD0Nm5y5R1DSDigBd\\nHJKFDyibOZk6Y7gDUYjeCrMcF49JiX7UhkLCBs8GTYIfsyGUwwg13CgQfojEWAc0\\nGQ0roZvCcYvIovRLKbzyXLX6w8/r6WVLy5Y0q7kZw5scvKwPcJ7pBO3e6wM+LDRz\\nGn8ovUSQyLZ1Ps+/FOxfXfuwSy5BzKWW0YS1FvrvG8UE/xeFBkAQbD67hLcSa3BY\\nzBmLEHjlZCGPY1zPlTT7DxVyn0NKoHVCF6gY8EEjraMeV7TmTMbzlkqYsGAcTocQ\\nZLxuIgelqeczt2AjRxEfqLYXr03StxvMr40idQIDAQABAoIBAHCOhhkw8hnklITX\\nIAm34KSklylz2JW1eqkJfL0huogwigjYFciSBE0d0sn69fr8Wb8Nf8tSjSKLjbqd\\nQ/TKEhbiSCr5yriBbb2AWDmr+OwisW1D6xaudRpN2Yrlqh1wkt2P6LPS8sehodtp\\n9oEIloSqC1o1ii6czAXD3JckJzuJ66yoVyCo2oVC3NETujjJRhdRcNY0dYUGx47M\\n+hQo7b4s79wlMFmccrgyJcKI7Ra3DtMrBIaVXm4WcjX2x4DduZX6L4mfG83uLWng\\nhbvcEPKGamUErjPGYixKE5XOwgJT6Nzq/ZZJZpok6DbHBCtqvwwByWlfLzh8lc4o\\nz+Pl5EECgYEA3pJXRM+SdVUCnWIpMFOAiNstOwz3nm0/c8GDdYYNq0ere1tKCVV0\\nii+ujMQY8vEdRrp7fbqJEPJANyI6sM4Jc2nxMveFuBoEsEClZuE4KBFquW8CQU4R\\nGNkzKF1W0GaTI5O4QDUag+lFG6TPCwZiejTIkt65o5bnSzGLgdC546sCgYEAwHr9\\nlq9HytWkV9OLz0zbcAUEIrFAljnC32Mybsj8LzdSKIZ3wErf9Txh8zqZqMyhedxL\\nOn17cpJAq5Vi71uXOaxnhkf7TPuRs8nBRRJfgyNHPXuXLkuWeuvXEe/PIC+nvOIX\\nas0Ab0Pvx0fRGl4EkZ2pV9oDAEUezbVVZCoO8l8CgYEAp4p3YNfzwpj0d+5tXPBu\\ngBakzJ+tQjewnP1dbLk1TuqLXjdQ2wfVyzOrbFEtCquPwy8bSICDLxt8VURR88eU\\n+6kTJK+InBYR029GUtRUhmzd7qpugyQ14IOXa9ofQI8GUbCf8M1IoWWWXQHJzN3I\\ngX98QHqiOU+d2k94WYb6dzMCgYA3E7p2oMdZShLRss3hzqtH/Zd2WeQSWIrjox3u\\nR4Kp/Bl9UST5GDPHl7SrhcwsWgmmthusq/VkDmeE8aUyurGmJigla3mESMQjfwrX\\nue8sti6PcEsNS0HPAKc1EbriCeDkkomC3RBPxk/ZZTp3YgnKpSOs6MxNCnpLAKVj\\nmQlX3wKBgQCFYyYJdCKMoaoMrNjMM34sAfTqmZT4Hbxg9KM4OMDSxyvIi0ZaVcnB\\nkzssvt0FOMucp4o7h8Iujt8xsgnBHwg81IV7WOw+ZwpUDAzgVc7+kCU6CLd2Q40j\\n5uFnuRgiWeGm1aT4arNLWlJrDLSGbyrf59SlGJV1hmu/7SMaYIZHSQ==\\n-----END RSA PRIVATE KEY-----"\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"sample-request",children:"Sample request"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"$ curl \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/sys/storage/raft/join\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," Unseal the joining node immediately after this API is invoked."]}),"\n",(0,t.jsx)(n.h2,{id:"read-raft-configuration",children:"Read raft configuration"}),"\n",(0,t.jsx)(n.p,{children:"This endpoint returns the details of all the nodes in the raft cluster."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"GET"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"/sys/storage/raft/configuration"})})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"sample-request-1",children:"Sample request"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    http://127.0.0.1:8200/v1/sys/storage/raft/configuration\n'})}),"\n",(0,t.jsx)(n.h3,{id:"sample-response",children:"Sample response"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "request_id": "ca4b5a1d-38d6-e27e-e756-269521328a15",\n  "lease_id": "",\n  "lease_duration": 0,\n  "renewable": false,\n  "data": {\n    "config": {\n      "index": 24,\n      "servers": [\n        {\n          "address": "127.0.0.1:8201",\n          "leader": true,\n          "node_id": "raft1",\n          "protocol_version": "\\u0003",\n          "voter": true\n        },\n        {\n          "address": "127.0.0.2:8201",\n          "leader": false,\n          "node_id": "raft2",\n          "protocol_version": "\\u0003",\n          "voter": true\n        }\n      ]\n    }\n  },\n  "warnings": null\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"remove-a-node-from-raft-cluster",children:"Remove a node from raft cluster"}),"\n",(0,t.jsxs)(n.p,{children:["This endpoint removes a node from the raft cluster. An optional ",(0,t.jsx)(n.code,{children:"dr_operation_token"}),"\nmay be provided if the node is in a DR secondary cluster."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"POST"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"/sys/storage/raft/remove-peer"})})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"sample-payload-1",children:"Sample payload"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "server_id": "raft1",\n  "dr_operation_token": ""\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"sample-request-2",children:"Sample request"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    --data @payload.json \\\n    http://127.0.0.1:8200/v1/sys/storage/raft/remove-peer\n'})}),"\n",(0,t.jsx)(n.h2,{id:"take-a-snapshot-of-the-raft-cluster",children:"Take a snapshot of the raft cluster"}),"\n",(0,t.jsxs)(n.p,{children:["This endpoint returns a snapshot of the current state of the raft cluster. The\nsnapshot is returned as binary data and should be redirected to a file.\nUnavailable if Raft is used exclusively for ",(0,t.jsx)(n.code,{children:"ha_storage"}),"."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"GET"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"/sys/storage/raft/snapshot"})})]})})]}),"\n",(0,t.jsx)(n.h3,{children:"Large raft snapshots"}),"\n",(0,t.jsxs)(n.p,{children:["Taking and restoring Raft snapshots can exceed OpenBao's default and recommended\ntimeout settings. The\n",(0,t.jsx)(n.a,{href:"/docs/commands#vault_client_timeout",children:(0,t.jsx)(n.code,{children:"VAULT_CLIENT_TIMEOUT"})})," environment variable can\nbe used to allow for more time to take or restore a snapshot."]}),"\n",(0,t.jsx)(n.h3,{id:"sample-request-3",children:"Sample request"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request GET \\\n    http://127.0.0.1:8200/v1/sys/storage/raft/snapshot > raft.snap\n'})}),"\n",(0,t.jsx)(n.h2,{id:"restore-raft-using-a-snapshot",children:"Restore raft using a snapshot"}),"\n",(0,t.jsxs)(n.p,{children:["Installs the provided snapshot, returning the cluster to the state defined in\nit. Unavailable if Raft is used exclusively for ",(0,t.jsx)(n.code,{children:"ha_storage"}),"."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"POST"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"/sys/storage/raft/snapshot"})})]})})]}),"\n",(0,t.jsx)(n.h3,{children:"Large raft snapshots"}),"\n",(0,t.jsxs)(n.p,{children:["Taking and restoring Raft snapshots can exceed OpenBao's default and recommended\ntimeout settings. The\n",(0,t.jsx)(n.a,{href:"/docs/commands#vault_client_timeout",children:(0,t.jsx)(n.code,{children:"VAULT_CLIENT_TIMEOUT"})})," environment variable can\nbe used to allow for more time to take or restore a snapshot."]}),"\n",(0,t.jsx)(n.h3,{id:"sample-request-4",children:"Sample request"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    --data-binary @raft.snap \\\n    http://127.0.0.1:8200/v1/sys/storage/raft/snapshot\n'})}),"\n",(0,t.jsx)(n.h2,{id:"force-restore-raft-using-a-snapshot",children:"Force restore raft using a snapshot"}),"\n",(0,t.jsxs)(n.p,{children:["Installs the provided snapshot, returning the cluster to the state defined in\nit. This is same as writing to ",(0,t.jsx)(n.code,{children:"/sys/storage/raft/snapshot"})," except that this\nbypasses checks ensuring the Autounseal or shamir keys are consistent with the\nsnapshot data. Unavailable if Raft is used exclusively for ",(0,t.jsx)(n.code,{children:"ha_storage"}),"."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"POST"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"/sys/storage/raft/snapshot-force"})})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"sample-request-5",children:"Sample request"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    --data-binary @raft.snap \\\n    http://127.0.0.1:8200/v1/sys/storage/raft/snapshot-force\n'})}),"\n",(0,t.jsx)(n.h2,{id:"bootstrap-an-ha-node",children:"Bootstrap an HA node"}),"\n",(0,t.jsxs)(n.p,{children:["When a node uses Raft exclusively for ",(0,t.jsx)(n.code,{children:"ha_storage"}),", this endpoint is used to activate\nRaft.  It is analogous to using ",(0,t.jsx)(n.code,{children:"sys/init"})," to initialize storage, in that it\nonly needs to be done once per cluster, after which ",(0,t.jsx)(n.code,{children:"openbao operator raft join"}),"\nis used to add more nodes to the Raft cluster."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"POST"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"/sys/storage/raft/bootstrap"})})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"sample-request-6",children:"Sample request"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:'$ curl \\\n    --header "X-Vault-Token: ..." \\\n    --request POST \\\n    http://127.0.0.1:8200/v1/sys/storage/raft/bootstrap\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>i});var t=s(96540);const r={},a=t.createContext(r);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);