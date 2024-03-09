"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6522],{33362:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var i=t(74848),a=t(28453);const s={sidebar_label:"Quick Start - Intermediate CA Setup",description:"The PKI secrets engine for OpenBao generates TLS certificates."},r="PKI secrets engine - quick start - intermediate CA setup",c={id:"secrets/pki/quick-start-intermediate-ca",title:"PKI secrets engine - quick start - intermediate CA setup",description:"The PKI secrets engine for OpenBao generates TLS certificates.",source:"@site/content/docs/secrets/pki/quick-start-intermediate-ca.mdx",sourceDirName:"secrets/pki",slug:"/secrets/pki/quick-start-intermediate-ca",permalink:"/openbao/docs/secrets/pki/quick-start-intermediate-ca",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/secrets/pki/quick-start-intermediate-ca.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Quick Start - Intermediate CA Setup",description:"The PKI secrets engine for OpenBao generates TLS certificates."},sidebar:"docs",previous:{title:"Quick Start - Root CA Setup",permalink:"/openbao/docs/secrets/pki/quick-start-root-ca"},next:{title:"Considerations",permalink:"/openbao/docs/secrets/pki/considerations"}},o={},l=[{value:"Mount the backend",id:"mount-the-backend",level:4},{value:"Configure an intermediate CA",id:"configure-an-intermediate-ca",level:4},{value:"Set URL configuration",id:"set-url-configuration",level:4},{value:"Configure a role",id:"configure-a-role",level:4},{value:"Issue certificates",id:"issue-certificates",level:4},{value:"Tutorial",id:"tutorial",level:2},{value:"API",id:"api",level:2}];function A(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"pki-secrets-engine---quick-start---intermediate-ca-setup",children:"PKI secrets engine - quick start - intermediate CA setup"}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.a,{href:"/docs/secrets/pki/quick-start-root-ca",children:"first Quick Start guide"}),",\ncertificates were issued directly from the root certificate authority.\nAs described in the example, this is not a recommended practice. This guide\nbuilds on the previous guide's root certificate authority and creates an\nintermediate authority using the root authority to sign the intermediate's\ncertificate."]}),"\n",(0,i.jsx)(n.h4,{id:"mount-the-backend",children:"Mount the backend"}),"\n",(0,i.jsx)(n.p,{children:"To add another certificate authority to our OpenBao instance, we have to mount it\nat a different path."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:"$ bao secrets enable -path=pki_int pki\nSuccessfully mounted 'pki' at 'pki_int'!\n"})}),"\n",(0,i.jsx)(n.h4,{id:"configure-an-intermediate-ca",children:"Configure an intermediate CA"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:"$ bao secrets tune -max-lease-ttl=43800h pki_int\nSuccessfully tuned mount 'pki_int'!\n"})}),"\n",(0,i.jsx)(n.p,{children:"That sets the maximum TTL for secrets issued from the mount to 5 years. This\nvalue should be less than or equal to the root certificate authority."}),"\n",(0,i.jsx)(n.p,{children:"Now, we generate our intermediate certificate signing request:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:'$ bao write pki_int/intermediate/generate/internal common_name="myopenbao.com Intermediate Authority" ttl=43800h\nKey Value\ncsr -----BEGIN CERTIFICATE REQUEST-----\nMIICsjCCAZoCAQAwLTErMCkGA1UEAxMibXl2YXVsdC5jb20gSW50ZXJtZWRpYXRl\nIEF1dGhvcml0eTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAJU1Qh8l\nBW16WHAu34Fy92FnSy4219WVlKw1xwpKxjd95xH6WcxXozOs6oHFQ9c592bz51F8\nKK3FFJYraUrGONI5Cz9qHbzC1mFCmjnXVXCoeNKIzEBG0Y+ehH7MQ1SvDCyvaJPX\nItFXaGf6zENiGsApw3Y3lFr0MjPzZDBH1p4Nq3aA6L2BaxvO5vczdQl5tE2ud/zs\nGIdCWnl1ThDEeiX1Ppduos/dx3gaZa9ly3iCuDMKIL9yK5XTBTgKB6ALPApekLQB\nkcUFbOuMzjrDSBe9ytu65yICYp26iAPPA8aKTj5cUgscgzEvQS66rSAVG/unrWxb\nwbl8b7eQztCmp60CAwEAAaBAMD4GCSqGSIb3DQEJDjExMC8wLQYDVR0RBCYwJIIi\nbXl2YXVsdC5jb20gSW50ZXJtZWRpYXRlIEF1dGhvcml0eTANBgkqhkiG9w0BAQsF\nAAOCAQEAZA9A1QvTdAd45+Ay55FmKNWnis1zLjbmWNJURUoDei6i6SCJg0YGX1cZ\nWkD0ibxPYihSsKRaIUwC2bE8cxZM57OSs7ISUmyPQAT2IHTHvuGK72qlFRBlFOzg\nSHEG7gfyKdrALphyF8wM3u4gXhcnY3CdltjabL3YakZqd3Ey4870/0XXeo5c4k7w\n/+n9M4xED4TnXYCGfLAlu5WWKSeCvu9mHXnJcLo1MiYjX7KGey/xYYbfxHSPm4ul\ntI6Vf59zDRscfNmq37fERD3TiKP0QZNGTSRvnrxrx2RUQGXFywM8l4doG8nS5BxU\n2jP20cdv0lJFvHr9663/8B/+F5L6Yw==\n-----END CERTIFICATE REQUEST-----\n'})}),"\n",(0,i.jsx)(n.p,{children:"Take the signing request from the intermediate authority and sign it using\nanother certificate authority, in this case the root certificate authority\ngenerated in the first example."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:"$ bao write pki/root/sign-intermediate csr=@pki_int.csr format=pem_bundle ttl=43800h\nKey             Value\ncertificate     -----BEGIN CERTIFICATE-----\nMIIDZTCCAk2gAwIBAgIUENxQD7KIJi1zE/jEiYqAG1VC4NwwDQYJKoZIhvcNAQEL\nBQAwFjEUMBIGA1UEAxMLbXl2YXVsdC5jb20wHhcNMTcxMTI4MTcwNzIzWhcNMjIx\nMTI3MTcwNzUzWjAtMSswKQYDVQQDEyJteXZhdWx0LmNvbSBJbnRlcm1lZGlhdGUg\nQXV0aG9yaXR5MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA5seNV4Yd\nuCMX0POUUuSzCBiR3Cyf9b9tGsCX7UfvZmjPs+Fl/X+Ovq6UtHM9RuTGlyfFrCWy\npflO7mc0H8PBzlvhv1WQet5aRyUOXkG6iYmooG9iobIY8z/TZCaCF605pgygfOaS\nDIlwOdJkfiXxGpQ00pfIwe/Y2OK2I5e36u0E2EA6kXvcfexLjQGFPbod+H0R29Ro\n/GwOJ6MpSHqB77mF025x1y08EtqT1z1kFCiDzFSkzNZEZYWljhDS6ZRY9ctzKufm\n5CkUwmvCVRI2CivDJvmfhXyv0DRoq4IhYdJHo179RSObq3BY9f9LQ0balNLiM0Ft\nO8f0urTqUAbySwIDAQABo4GTMIGQMA4GA1UdDwEB/wQEAwIBBjAPBgNVHRMBAf8E\nBTADAQH/MB0GA1UdDgQWBBSQgTfcMrKYzyckP6t/0iVQkl0ZBDAfBgNVHSMEGDAW\ngBRccsCARqs3wQDjW7JMNXS6pWlFSDAtBgNVHREEJjAkgiJteXZhdWx0LmNvbSBJ\nbnRlcm1lZGlhdGUgQXV0aG9yaXR5MA0GCSqGSIb3DQEBCwUAA4IBAQABNg2HxccY\nDwRpsJ+sxA0BgDyF+tYtOlXViVNv6Z+nOU0nNhQSCjfzjYWmBg25nfKaFhQSC3b7\nfIW+e7it/FLVrCgaqdysoxljqhR0gXMAy8S/ubmskPWjJiKauJB5bfB59Uf2GP6j\nzimZDu6WjWvvgkKcJqJEbOOS9DWBvCTdmmml1NMXZtcytpod2Y7mxninqNRx3qpx\nPst4vgAbyM/3zLSzkyUD+MXIyRXwxktFlyEYBHvMd9OoHzLO6WLxk22FyQQ+w4by\nNfXJY4r5pj6a4lJ6pPuqyfBhidYMTdY3AI7w/QRGk4qQv1iDmnZspk2AxdbR5Lwe\nYmChIML/f++S\n-----END CERTIFICATE-----\nexpiration      1669568873\nissuing_ca      -----BEGIN CERTIFICATE-----\nMIIDNTCCAh2gAwIBAgIUdR44qhhyh3CZjnCtflGKQlTI8NswDQYJKoZIhvcNAQEL\nBQAwFjEUMBIGA1UEAxMLbXl2YXVsdC5jb20wHhcNMTcxMTI4MTYxODA2WhcNMjcx\nMTI2MTYxODM1WjAWMRQwEgYDVQQDEwtteXZhdWx0LmNvbTCCASIwDQYJKoZIhvcN\nAQEBBQADggEPADCCAQoCggEBANTPnQ2CUkuLrYT4V6/IIK/gWFZXFG4lWTmgM5Zh\nPDquMhLEikZCbZKbupouBI8MOr5i8tycENaTnSs9dBwVEOWAHbLkliVgvCKgLi0F\nPfPM87FnBoKVctO2ip8AdmYcAt/wc096dWBG6eKLVP5xsAe7NcYDtF/inHgEZ22q\nZjGVEyC6WntIASgULoHGgHakPp1AHLhGm8nL5YbusWY7RgZIlNeGWLVoneG0pxdV\n7W1SPO67dsQyq58mTxMIGVUj5YE1q7/C6OhCTnAHc+sRm0oUehPfO8kY4NHpCJGv\nnDRdJi6k6ewk94c0KK2tUUM/TN6ZSRfx6ccgfPH8zNcVPVcCAwEAAaN7MHkwDgYD\nVR0PAQH/BAQDAgEGMA8GA1UdEwEB/wQFMAMBAf8wHQYDVR0OBBYEFFxywIBGqzfB\nAONbskw1dLqlaUVIMB8GA1UdIwQYMBaAFFxywIBGqzfBAONbskw1dLqlaUVIMBYG\nA1UdEQQPMA2CC215dmF1bHQuY29tMA0GCSqGSIb3DQEBCwUAA4IBAQBgvsgpBuVR\niKVdXXpFyoQLImuoaHZgaj5tuUDqnMoxOA1XWW6SVlZmGfDQ7+u5NBkp2cGSDRGm\nARHJTeURvdZIwdFdGkNqfAZjutRjjQOnXgS65ujZd7AnlZq1v0ZOZqVVk9YEOhOe\nRh2MjnHGNuiLBib1YNQHNuRef1mPwIE2Gm/Tz/z3JPHtkKNIKbn60zHrIIM/OT2Z\nHYjcMUcqXtKGYfNjVspJm3lSDUoyJdaq80Afmy2Ez1Vt9crGG3Dj8mgs59lEhEyo\nMDVhOP116M5HJfQlRPVd29qS8pFrjBvXKjJSnJNG1UFdrWBJRJ3QrBxUQALKrJlR\ng5lvTeymHjS/\n-----END CERTIFICATE-----\nserial_number   10:dc:50:0f:b2:88:26:2d:73:13:f8:c4:89:8a:80:1b:55:42:e0:dc\n"})}),"\n",(0,i.jsx)(n.p,{children:"Now set the intermediate certificate authorities signing certificate to the\nroot-signed certificate."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:"$ bao write pki_int/intermediate/set-signed certificate=@signed_certificate.pem\nSuccess! Data written to: pki_int/intermediate/set-signed\n"})}),"\n",(0,i.jsx)(n.p,{children:"The intermediate certificate authority is now configured and ready to issue\ncertificates."}),"\n",(0,i.jsx)(n.h4,{id:"set-url-configuration",children:"Set URL configuration"}),"\n",(0,i.jsx)(n.p,{children:"Generated certificates can have the CRL location and the location of the\nissuing certificate encoded. These values must be set manually, but can be\nchanged at any time."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:'$ bao write pki_int/config/urls issuing_certificates="http://127.0.0.1:8200/v1/pki_int/ca" crl_distribution_points="http://127.0.0.1:8200/v1/pki_int/crl"\nSuccess! Data written to: pki_int/ca/urls\n'})}),"\n",(0,i.jsx)(n.h4,{id:"configure-a-role",children:"Configure a role"}),"\n",(0,i.jsx)(n.p,{children:'The next step is to configure a role. A role is a logical name that maps to a\npolicy used to generate those credentials. For example, let\'s create an\n"example-dot-com" role:'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:"$ bao write pki_int/roles/example-dot-com \\\n    allowed_domains=example.com \\\n    allow_subdomains=true max_ttl=72h\nSuccess! Data written to: pki_int/roles/example-dot-com\n"})}),"\n",(0,i.jsx)(n.h4,{id:"issue-certificates",children:"Issue certificates"}),"\n",(0,i.jsxs)(n.p,{children:["By writing to the ",(0,i.jsx)(n.code,{children:"roles/example-dot-com"})," path we are defining the\n",(0,i.jsx)(n.code,{children:"example-dot-com"})," role. To generate a new certificate, we simply write\nto the ",(0,i.jsx)(n.code,{children:"issue"})," endpoint with that role name: OpenBao is now configured to create\nand manage certificates!"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:"$ bao write pki_int/issue/example-dot-com \\\n    common_name=blah.example.com\nKey                 Value\n---                 -----\ncertificate         -----BEGIN CERTIFICATE-----\nMIIDbDCCAlSgAwIBAgIUPiAyxq+nIE6xlWf7hrzLkPQxtvMwDQYJKoZIhvcNAQEL\nBQAwMzExMC8GA1UEAxMoVmF1bHQgVGVzdGluZyBJbnRlcm1lZGlhdGUgU3ViIEF1\ndGhvcml0eTAeFw0xNjA5MjcwMDA5MTNaFw0xNjA5MjcwMTA5NDNaMBsxGTAXBgNV\nBAMTEGJsYWguZXhhbXBsZS5jb20wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEK\nAoIBAQDJAYB04IVdmSC/TimaA6BbXlvgBTZHL5wBUTmO4iHhenL0eDEXVe2Fd7Yq\n75LiBJmcC96hKbqh5rwS8KwN9ElZI52/mSMC+IvoNlYHAf7shwfsjrVx3q7/bTFg\nlz6wECn1ugysxynmMvgQD/pliRkxTQ7RMh4Qlh75YG3R9BHy9ZddklZp0aNaitts\n0uufHnN1UER/wxBCZdWTUu34KDL9I6yE7Br0slKKHPdEsGlFcMkbZhvjslZ7DGvO\n974S0qtOdKiawJZbpNPg0foGZ3AxesDUlkHmmgzUNes/sjknDYTHEfeXM6Uap0j6\nXvyhCxqdeahb/Vtibg0z9I0IusJbAgMBAAGjgY8wgYwwDgYDVR0PAQH/BAQDAgOo\nMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAdBgNVHQ4EFgQU/5oy0rL7\nTT0wX7KZK7qcXqgayNwwHwYDVR0jBBgwFoAUgM37P8oXmA972ztLfw+b1eIY5now\nGwYDVR0RBBQwEoIQYmxhaC5leGFtcGxlLmNvbTANBgkqhkiG9w0BAQsFAAOCAQEA\nCT2vI6/taeLTw6ZulUhLXEXYXWZu1gF8n2COjZzbZXmHxQAoZ3GtnSNwacPHAyIj\nf3cA9Moo552y39LUtWk+wgFtQokWGK7LXglLaveNUBowOHq/xk0waiIinJcgTG53\nZ/qnbJnTjAOG7JwVJplWUIiS1avCksrHt7heE2EGRGJALqyLZ119+PW6ogtCLUv1\nX8RCTw/UkIF/LT+sLF0bXWy4Hn38Gjwj1MVv1l76cEGOVSHyrYkN+6AMnAP58L5+\nIWE9tN3oac4x7jhbuNpfxazIJ8Q6l/Up5U5Evfbh6N1DI0/gFCP20fMBkHwkuLfZ\n2ekZoSeCgFRDlHGkr7Vv9w==\n-----END CERTIFICATE-----\nissuing_ca          -----BEGIN CERTIFICATE-----\nMIIDijCCAnKgAwIBAgIUB28DoGwgGFKL7fbOu9S4FalHLn0wDQYJKoZIhvcNAQEL\nBQAwLzEtMCsGA1UEAxMkVmF1bHQgVGVzdGluZyBJbnRlcm1lZGlhdGUgQXV0aG9y\naXR5MB4XDTE2MDkyNzAwMDgyMVoXDTI2MDkxNjE2MDg1MVowMzExMC8GA1UEAxMo\nVmF1bHQgVGVzdGluZyBJbnRlcm1lZGlhdGUgU3ViIEF1dGhvcml0eTCCASIwDQYJ\nKoZIhvcNAQEBBQADggEPADCCAQoCggEBAOSCiSij4wy1wiMwvZt+rtU3IaO6ZTn9\nLfIPuGsR5/QSJk37pCZQco1LgoE/rTl+/xu3bDovyHDmgObghC6rzVOX2Tpi7kD+\nDOZpqxOsaS8ebYgxB/XJTSxyEJuSAcpSNLqqAiZivuQXdaD0N7H3Or0awwmKE9mD\nI0g8CF4fPDmuuOG0ASn9fMqXVVt5tXtEqZ9yJYfNOXx3FOPjRVOZf+kvSc31wCKe\ni/KmR0AQOmToKMzq988nLqFPTi9KZB8sEU20cGFeTQFol+m3FTcIru94EPD+nLUn\nxtlLELVspYb/PP3VpvRj9b+DY8FGJ5nfSJl7Rkje+CD4VxJpSadin3kCAwEAAaOB\nmTCBljAOBgNVHQ8BAf8EBAMCAQYwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQU\ngM37P8oXmA972ztLfw+b1eIY5nowHwYDVR0jBBgwFoAUj4YAIxRwrBy0QMRKLnD0\nkVidIuYwMwYDVR0RBCwwKoIoVmF1bHQgVGVzdGluZyBJbnRlcm1lZGlhdGUgU3Vi\nIEF1dGhvcml0eTANBgkqhkiG9w0BAQsFAAOCAQEAA4buJuPNJvA1kiATLw1dVU2J\nHPubk2Kp26Mg+GwLn7Vz45Ub133JCYfF3/zXLFZZ5Yub9gWTtjScrvNfQTAbNGdQ\nBdnUlMmIRmfB7bfckhryR2R9byumeHATgNKZF7h8liNHI7X8tTzZGs6wPdXOLlzR\nTlM3m1RNK8pbSPOkfPb06w9cBRlD8OAbNtJmuypXA6tYyiiMYBhP0QLAO3i4m1ns\naAjAgEjtkB1rQxW5DxoTArZ0asiIdmIcIGmsVxfDQIjFlRxAkafMs74v+5U5gbBX\nwsOledU0fLl8KLq8W3OXqJwhGLK65fscrP0/omPAcFgzXf+L4VUADM4XhW6Xyg==\n-----END CERTIFICATE-----\nca_chain            [-----BEGIN CERTIFICATE-----\nMIIDijCCAnKgAwIBAgIUB28DoGwgGFKL7fbOu9S4FalHLn0wDQYJKoZIhvcNAQEL\nBQAwLzEtMCsGA1UEAxMkVmF1bHQgVGVzdGluZyBJbnRlcm1lZGlhdGUgQXV0aG9y\naXR5MB4XDTE2MDkyNzAwMDgyMVoXDTI2MDkxNjE2MDg1MVowMzExMC8GA1UEAxMo\nVmF1bHQgVGVzdGluZyBJbnRlcm1lZGlhdGUgU3ViIEF1dGhvcml0eTCCASIwDQYJ\nKoZIhvcNAQEBBQADggEPADCCAQoCggEBAOSCiSij4wy1wiMwvZt+rtU3IaO6ZTn9\nLfIPuGsR5/QSJk37pCZQco1LgoE/rTl+/xu3bDovyHDmgObghC6rzVOX2Tpi7kD+\nDOZpqxOsaS8ebYgxB/XJTSxyEJuSAcpSNLqqAiZivuQXdaD0N7H3Or0awwmKE9mD\nI0g8CF4fPDmuuOG0ASn9fMqXVVt5tXtEqZ9yJYfNOXx3FOPjRVOZf+kvSc31wCKe\ni/KmR0AQOmToKMzq988nLqFPTi9KZB8sEU20cGFeTQFol+m3FTcIru94EPD+nLUn\nxtlLELVspYb/PP3VpvRj9b+DY8FGJ5nfSJl7Rkje+CD4VxJpSadin3kCAwEAAaOB\nmTCBljAOBgNVHQ8BAf8EBAMCAQYwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQU\ngM37P8oXmA972ztLfw+b1eIY5nowHwYDVR0jBBgwFoAUj4YAIxRwrBy0QMRKLnD0\nkVidIuYwMwYDVR0RBCwwKoIoVmF1bHQgVGVzdGluZyBJbnRlcm1lZGlhdGUgU3Vi\nIEF1dGhvcml0eTANBgkqhkiG9w0BAQsFAAOCAQEAA4buJuPNJvA1kiATLw1dVU2J\nHPubk2Kp26Mg+GwLn7Vz45Ub133JCYfF3/zXLFZZ5Yub9gWTtjScrvNfQTAbNGdQ\nBdnUlMmIRmfB7bfckhryR2R9byumeHATgNKZF7h8liNHI7X8tTzZGs6wPdXOLlzR\nTlM3m1RNK8pbSPOkfPb06w9cBRlD8OAbNtJmuypXA6tYyiiMYBhP0QLAO3i4m1ns\naAjAgEjtkB1rQxW5DxoTArZ0asiIdmIcIGmsVxfDQIjFlRxAkafMs74v+5U5gbBX\nwsOledU0fLl8KLq8W3OXqJwhGLK65fscrP0/omPAcFgzXf+L4VUADM4XhW6Xyg==\n-----END CERTIFICATE-----]\nprivate_key         -----BEGIN RSA PRIVATE KEY-----\nMIIEpgIBAAKCAQEAyQGAdOCFXZkgv04pmgOgW15b4AU2Ry+cAVE5juIh4Xpy9Hgx\nF1XthXe2Ku+S4gSZnAveoSm6oea8EvCsDfRJWSOdv5kjAviL6DZWBwH+7IcH7I61\ncd6u/20xYJc+sBAp9boMrMcp5jL4EA/6ZYkZMU0O0TIeEJYe+WBt0fQR8vWXXZJW\nadGjWorbbNLrnx5zdVBEf8MQQmXVk1Lt+Cgy/SOshOwa9LJSihz3RLBpRXDJG2Yb\n47JWewxrzve+EtKrTnSomsCWW6TT4NH6BmdwMXrA1JZB5poM1DXrP7I5Jw2ExxH3\nlzOlGqdI+l78oQsanXmoW/1bYm4NM/SNCLrCWwIDAQABAoIBAQCCbHMJY1Wl8eIJ\nv5HG2WuHXaaHqVoavo2fXTDXwWryfx1v+zz/Q0YnQBH3shPAi/OQCTOfpw/uVWTb\ndUZul3+wUyfcVmUdXGCLgBY53dWna8Z8e+zHwhISsqtDXV/TpelUBDCNO324XIIR\nCg0TLO4nyzQ+ESLo6D+Y2DTp8lBjMEkmKTd8CLXR2ycEoVykN98qPZm8keiLGO91\nI8K7aRd8uOyQ6HUfJRlzFHSuwaLReErxGTEPI4t/wVqh2nP2gGBsn3apiJ0ul6Jz\nNlYO5PqiwpeDk4ibhQBpicnm1jnEcynH/WtGuKgMNB0M4SBRBsEguO7WoKx3o+qZ\niVIaPWDhAoGBAO05UBvyJpAcz/ZNQlaF0EAOhoxNQ3h6+6ZYUE52PgZ/DHftyJPI\nY+JJNclY91wn91Yk3ROrDi8gqhzA+2Lelxo1kuZDu+m+bpzhVUdJia7tZDNzRIhI\n24eP2GdochooOZ0qjvrik4kuX43amBhQ4RHsBjmX5CnUlL5ZULs8v2xnAoGBANjq\nVLAwiIIqJZEC6BuBvVYKaRWkBCAXvQ3j/OqxHRYu3P68PZ58Q7HrhrCuyQHTph2v\nfzfmEMPbSCrFIrrMRmjUG8wopL7GjZjFl8HOBHFwzFiz+CT5DEC+IJIRkp4HM8F/\nPAzjB2wCdRdSjLTD5ph0/xQIg5xfln7D+wqU0QHtAoGBAKkLF0/ivaIiNftw0J3x\nWxXag/yErlizYpIGCqvuzII6lLr9YdoViT/eJYrmb9Zm0HS9biCu2zuwDijRSBIL\nRieyF40opUaKoi3+0JMtDwTtO2MCd8qaCH3QfkgqAG0tTuj1Q8/6F2JA/myKYamq\nMMhhpYny9+7rAlemM8ZJIqtvAoGBAKOI3zpKDNCdd98A4v7B7H2usZUIJ7gOTZDo\nXqiNyRENWb2PK6GNq/e6SrxvuclvyKA+zFnXULJoYtsj7tAH69lieGaOCc5uoRgZ\neBU7/euMj/McE6vEO3GgJawaJYCQi3uJMjvA+bp7i81+hehOfU5ZfmmbFaZSBoMh\nu+U5Vu3tAoGBANnBIbHfD3E7rqnqdpH1oRRHLA1VdghzEKgyUTPHNDzPJG87RY3c\nrRqeXepblud3qFjD60xS9BzcBijOvZ4+KHk6VIMpkyqoeNVFCJbBVCw+JGMp88+v\ne9t+2iwryh5+rnq+pg6anmgwHldptJc1XEFZA2UUQ89RP7kOGQF6IkIS\n-----END RSA PRIVATE KEY-----\nprivate_key_type    rsa\nserial_number       3e:20:32:c6:af:a7:20:4e:b1:95:67:fb:86:bc:cb:90:f4:31:b6:f3\n"})}),"\n",(0,i.jsxs)(n.p,{children:["OpenBao has now generated a new set of credentials using the ",(0,i.jsx)(n.code,{children:"example-dot-com"}),"\nrole configuration. Here we see the dynamically generated private key and\ncertificate. The issuing CA certificate and CA trust chain are returned as well.\nThe CA Chain returns all the intermediate authorities in the trust chain. The root\nauthority is not included since that will usually be trusted by the underlying\nOS."]}),"\n",(0,i.jsx)(n.h2,{id:"tutorial",children:"Tutorial"}),"\n",(0,i.jsxs)(n.p,{children:["Refer to the ",(0,i.jsx)(n.a,{href:"/tutorials/secrets-management/pki-engine",children:"Build Your Own Certificate Authority (CA)"}),"\nguide for a step-by-step tutorial."]}),"\n",(0,i.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,i.jsxs)(n.p,{children:["The PKI secrets engine has a full HTTP API. Please see the\n",(0,i.jsx)(n.a,{href:"/api-docs/secret/pki",children:"PKI secrets engine API"})," for more\ndetails."]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(A,{...e})}):A(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var i=t(96540);const a={},s=i.createContext(a);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);