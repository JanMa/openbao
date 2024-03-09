"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[586],{83821:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=t(74848),s=t(28453);const i={sidebar_label:"Import Key Wrapping Guide",description:"Details about wrapping keys for import into the transit secrets engine."},a="Key wrapping for transit key import",o={id:"secrets/transit/key-wrapping-guide",title:"Key wrapping for transit key import",description:"Details about wrapping keys for import into the transit secrets engine.",source:"@site/content/docs/secrets/transit/key-wrapping-guide.mdx",sourceDirName:"secrets/transit",slug:"/secrets/transit/key-wrapping-guide",permalink:"/openbao/docs/secrets/transit/key-wrapping-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/secrets/transit/key-wrapping-guide.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Import Key Wrapping Guide",description:"Details about wrapping keys for import into the transit secrets engine."},sidebar:"docs",previous:{title:"Overview",permalink:"/openbao/docs/secrets/transit/"},next:{title:"Overview",permalink:"/openbao/docs/auth/"}},h={},p=[{value:"Mount the secrets engine",id:"mount-the-secrets-engine",level:3},{value:"Retrieve the transit wrapping key",id:"retrieve-the-transit-wrapping-key",level:3},{value:"Software example (Go)",id:"software-example-go",level:3},{value:"AWS CloudHSM example",id:"aws-cloudhsm-example",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"key-wrapping-for-transit-key-import",children:"Key wrapping for transit key import"}),"\n",(0,r.jsx)(n.p,{children:'The "bring your own key" (BYOK) functionality for the transit\nsecrets engine allows users to import keys that were generated\noutside of OpenBao into the transit secrets engine.'}),"\n",(0,r.jsx)(n.p,{children:"This document describes the process for wrapping an externally-generated\nkey (the target key) for import into OpenBao. It describes the processes\nfor importing a software-stored key using Golang and for importing a key\nthat is stored in an HSM."}),"\n",(0,r.jsx)(n.h3,{id:"mount-the-secrets-engine",children:"Mount the secrets engine"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell-session",children:"$ bao secrets enable transit\nSuccess! Enabled the transit secrets engine at: transit/\n"})}),"\n",(0,r.jsx)(n.h3,{id:"retrieve-the-transit-wrapping-key",children:"Retrieve the transit wrapping key"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell-session",children:"$ bao read transit/wrapping_key\n"})}),"\n",(0,r.jsx)(n.p,{children:"This returns a 4096-bit RSA key."}),"\n",(0,r.jsx)(n.p,{children:"The steps after this depend on whether the key is stored using\na software solution or in an HSM."}),"\n",(0,r.jsx)(n.h3,{id:"software-example-go",children:"Software example (Go)"}),"\n",(0,r.jsxs)(n.p,{children:["This example assumes that the key is stored in software using the\nvariable name ",(0,r.jsx)(n.code,{children:"key"}),". It demonstrates how to wrap the target key using\nGolang crypto libraries."]}),"\n",(0,r.jsxs)(n.p,{children:["Once you have the wrapping key, you can parse it using the ",(0,r.jsx)(n.code,{children:"encoding/pem"}),"\nand ",(0,r.jsx)(n.code,{children:"crypto/x509"})," libraries (the example code below assumes that the wrapping\nkey has been written to a variable called ",(0,r.jsx)(n.code,{children:"wrappingKeyString"}),"):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"keyBlock, _ := pem.Decode([]byte(wrappingKeyString))\nparsedKey, err := x509.ParsePKIXPublicKey(keyBlock.Bytes)\nif err != nil {\n    return err\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then generate an ephemeral AES key for wrapping the target key.\nThis example uses Golang's ",(0,r.jsx)(n.code,{children:"crypto/rand"})," library for generating the key:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"ephemeralAESKey := make([]byte, 32)\n_, err := rand.Read(ephemeralAESKey)\nif err != nil {\n        return err\n}\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"NOTE"}),": Be sure to securely delete the ephemeral AES key once it\nhas been used!"]})}),"\n",(0,r.jsxs)(n.p,{children:["Google's ",(0,r.jsx)(n.a,{href:"https://pkg.go.dev/github.com/google/tink/go@v1.6.1/kwp/subtle",children:"tink library"}),"\nprovides a function for performing the key wrap operation:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"wrapKWP, err := subtle.NewKWP(aesKey)\nif err != nil {\n        return err\n}\nwrappedTargetKey, err := wrapKWP.Wrap(key)\nif err != nil {\n        return err\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Then encrypt the ephemeral AES key using the transit wrapping key:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"wrappedAESKey, err := rsa.EncryptOAEP(\n        sha256.New(),\n        rand.Reader,\n        wrappingKey,\n        ephemeralAESKey,\n        []byte{},\n)\nif err != nil {\n        return err\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Note that though this example uses SHA256, OpenBao also supports the use of\nSHA1, SHA384, or SHA512. The hash function that was used at this step will\nneed to be provided as a parameter when importing the key."}),"\n",(0,r.jsx)(n.p,{children:"Finally, concatenate the wrapped keys into a single byte string.\nThe leftmost 4096 bits of the string should be the wrapped AES key, and\nthe remaining bits should be the wrapped target key. Then the resulting\nbytes should be base64-encoded."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"combinedCiphertext := append(wrappedAESKey, wrappedTargetKey...)\nbase64Ciphertext := base64.StdEncoding.EncodeToString(combinedCiphertext)\n"})}),"\n",(0,r.jsx)(n.p,{children:"This is the ciphertext that should be provided to OpenBao when importing a\nkey into the transit secrets engine."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell-session",children:"$ bao write transit/keys/test-key/import ciphertext=$CIPHERTEXT hash_function=SHA256 type=$KEY_TYPE\n"})}),"\n",(0,r.jsx)(n.h3,{id:"aws-cloudhsm-example",children:"AWS CloudHSM example"}),"\n",(0,r.jsx)(n.p,{children:"This example demonstrates how to import a key into the transit secrets engine from\nan AWS CloudHSM cluster. The process and mechanisms used will apply to importing\na key from an HSM in general, but the details will differ between HSMs."}),"\n",(0,r.jsxs)(n.p,{children:["For information on creating and communicating with an AWS CloudHSM cluster, see\nthe ",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/cloudhsm/latest/userguide/getting-started.html",children:"Getting Started guide in the AWS CloudHSM documentation"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Communication with the HSM uses AWS's ",(0,r.jsx)(n.code,{children:"key_mgmt_util"})," tool. For help setting that\nup, see the ",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/cloudhsm/latest/userguide/key_mgmt_util-getting-started.html",children:"Getting Started page for key_mgmt_util"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The first step is writing the transit wrapping key to the HSM. This involves\ncreating a new RSA public key object with the key returned by transit's\n",(0,r.jsx)(n.code,{children:"wrapping_key"})," endpoint."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell-session",children:'$ importPubKey -f wrapping_key.pem -l "openbao-transit-wrapping-key"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["This will create the public key in the HSM with all of the necessary permissions.\nIf you're using a different tool, make sure that the usage for the wrapping key\nincludes the attribute ",(0,r.jsx)(n.code,{children:"CKA_WRAP"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The next step is wrapping the target key using the wrapping key. If the\nID of the target key is ",(0,r.jsx)(n.code,{children:"1"})," and the wrapping key is ",(0,r.jsx)(n.code,{children:"2"}),", the command looks like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell-session",children:"$ wrapKey -noheader -k 1 -w 2 -t 3 -m 7 -out ciphertext.key\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"-m 7"})," flag specifies the mechanism to use for the key wrapping. For AWS CloudHSM,\n7 corresponds to the PKCS11 mechanism ",(0,r.jsx)(n.code,{children:"CKM_AES_RSA_KEY_WRAP"})," (",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/cloudhsm/latest/userguide/key_mgmt_util-wrapKey.html",children:"see the AWS documentation for details"}),").\nThe ",(0,r.jsx)(n.code,{children:"-t 3"})," flag specifies ",(0,r.jsx)(n.code,{children:"SHA256"})," as the hash function. The result is written to a\nfile called ",(0,r.jsx)(n.code,{children:"ciphertext.key"}),". The ",(0,r.jsx)(n.code,{children:"noheader"})," flag ensures that the ciphertext does\nnot include an AWS-specific header."]}),"\n",(0,r.jsx)(n.p,{children:"The output from this is a binary file, which needs to be base64-encoded when it\nis provided to OpenBao."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell-session",children:"$ export CIPHERTEXT=$(base64 ciphertext.key)\n$ bao write transit/keys/test-key/import ciphertext=$CIPHERTEXT hash_function=SHA256 type=$KEY_TYPE\n"})}),"\n",(0,r.jsx)(n.p,{children:"Once the key has been imported, it can be used like any other transit key."})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(96540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);