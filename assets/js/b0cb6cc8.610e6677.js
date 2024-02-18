"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8402],{7038:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>t,metadata:()=>i,toc:()=>h});var r=a(74848),n=a(28453);const t={layout:"docs",page_title:"Password Policies",description:"Password policies are used in some secret engines to allow users to define how passwords are generated for dynamic & static users within those engines."},c="Password policies",i={id:"concepts/password-policies",title:"Password policies",description:"Password policies are used in some secret engines to allow users to define how passwords are generated for dynamic & static users within those engines.",source:"@site/content/docs/concepts/password-policies.mdx",sourceDirName:"concepts",slug:"/concepts/password-policies",permalink:"/openbao/docs/concepts/password-policies",draft:!1,unlisted:!1,editUrl:"https://github.com/openbao/openbao/tree/main/website/content/docs/concepts/password-policies.mdx",tags:[],version:"current",frontMatter:{layout:"docs",page_title:"Password Policies",description:"Password policies are used in some secret engines to allow users to define how passwords are generated for dynamic & static users within those engines."},sidebar:"docs",previous:{title:"Policies",permalink:"/openbao/docs/concepts/policies"},next:{title:"Username templating",permalink:"/openbao/docs/concepts/username-templating"}},o={},h=[{value:"Design",id:"design",level:2},{value:"Candidate password generation",id:"candidate-password-generation",level:2},{value:"Preventing bias",id:"preventing-bias",level:3},{value:"Performance characteristics",id:"performance-characteristics",level:2},{value:"Password policy syntax",id:"password-policy-syntax",level:2},{value:"Configuration &amp; available rules",id:"configuration--available-rules",level:2},{value:"<code>length</code> parameter",id:"length-parameter",level:3},{value:"Rule <code>charset</code>",id:"rule-charset",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Example",id:"example",level:4},{value:"Default password policy",id:"default-password-policy",level:2},{value:"Tutorial",id:"tutorial",level:2}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components},{Details:t}=s;return t||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"password-policies",children:"Password policies"}),"\n",(0,r.jsx)(s.p,{children:"A password policy is a set of instructions on how to generate a password, similar to other password\ngenerators. These password policies are used in a subset of secret engines to allow you to configure\nhow a password is generated for that engine. Not all secret engines utilize password policies, so check\nthe documentation for the engine you are using for compatibility."}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note:"})," Password policies are unrelated to ",(0,r.jsx)(s.a,{href:"/docs/concepts/policies",children:"Policies"})," other than sharing similar names."]}),"\n",(0,r.jsxs)(s.p,{children:["The Password policies ",(0,r.jsx)(s.a,{href:"/api-docs/system/policies-password",children:"API docs can be found here"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"!> Password policies are an advanced usage of OpenBao. This generates credentials for external systems\n(databases, LDAP, etc.) and should be used with caution."}),"\n",(0,r.jsx)(s.h2,{id:"design",children:"Design"}),"\n",(0,r.jsxs)(s.p,{children:["Password policies fundamentally have two parts: a length, and a set of rules that a password must\nadhere to. Passwords are randomly generated from the de-duplicated union of charsets found in all rules\nand then checked against each of the rules to determine if the candidate password is valid according\nto the policy. See ",(0,r.jsx)(s.a,{href:"#candidate-password-generation",children:"Candidate Password Generation"})," for details on how\npasswords are generated prior to being checked against the rule set."]}),"\n",(0,r.jsx)(s.p,{children:'A rule is an assertion upon a candidate password string that indicates whether or not\nthe password is acceptable. For example: a "charset" rule states that a password must have at least one\nlowercase letter in it. This rule will reject any passwords that do not have any lowercase letters in it.'}),"\n",(0,r.jsx)(s.p,{children:"Multiple rules may be specified within a policy to create more complex rules, such as requiring at least\none lowercase letter, at least one uppercase letter, and at least one number."}),"\n",(0,r.jsx)(s.p,{children:"The flow looks like:"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:a(66107).A+"",children:(0,r.jsx)(s.img,{alt:"OpenBao Password Policy Flow",src:a(66208).A+"",width:"728",height:"225"})})}),"\n",(0,r.jsx)(s.h2,{id:"candidate-password-generation",children:"Candidate password generation"}),"\n",(0,r.jsx)(s.p,{children:"How a candidate password is generated is extremely important. Great care must be placed to ensure that\npasswords aren't created in a way that can be exploited by threat actors. This section describes how we\ngenerate passwords within password policies to ensure that passwords are generated as securely as possible."}),"\n",(0,r.jsx)(s.p,{children:"To generate a candidate password, three things are needed:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["A ",(0,r.jsx)(s.a,{href:"https://golang.org/pkg/crypto/rand/",children:"cryptographically secure random number generator"})," (RNG)."]}),"\n",(0,r.jsx)(s.li,{children:"A character set (charset) to select characters from."}),"\n",(0,r.jsx)(s.li,{children:"The length of the password."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"At a high level, we use our RNG to generate N numbers that correspond to indices into the charset\narray where N is the length of the password we wish to create. Each value returned from the RNG is then\nused to extract a character from the charset into the password."}),"\n",(0,r.jsxs)(s.p,{children:["For example, let's generate a password of length 8 from the charset ",(0,r.jsx)(s.code,{children:"abcdefghij"}),":"]}),"\n",(0,r.jsx)(s.p,{children:"The RNG is used to generate 8 random values. For our example let's say those values are:"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"[3, 2, 0, 8, 7, 3, 5, 1]"})}),"\n",(0,r.jsx)(s.p,{children:"Each of these values is an index into the charset array:"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"[3, 2, 0, 8, 7, 3, 5, 1]"})," => ",(0,r.jsx)(s.code,{children:"[d, c, a, i, h, d, f, b]"})]}),"\n",(0,r.jsxs)(s.p,{children:["This gives us our candidate password: ",(0,r.jsx)(s.code,{children:"dcaihdfb"})," which can then be run through the rules of the policy."]}),"\n",(0,r.jsxs)(s.p,{children:["In a real world scenario, the values in the random array will be between ",(0,r.jsx)(s.code,{children:"[0-255]"})," as that is the range of\nvalues that a single byte can be. The value is restricted to the size of the charset array by using the\n",(0,r.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Modulo_operation",children:"modulo operation"})," to prevent referencing a character\noutside the bounds of the charset. However this can introduce a problem with bias."]}),"\n",(0,r.jsx)(s.h3,{id:"preventing-bias",children:"Preventing bias"}),"\n",(0,r.jsxs)(s.p,{children:["When using the ",(0,r.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Modulo_operation",children:"modulo operation"})," to generate a password,\nyou must be very careful to prevent the introduction of bias. When generating a random number between\n[0-255] for a charset that has a length that isn't evenly divisible into 256, some of the first characters\nin the charset may be selected more frequently than the remaining characters."]}),"\n",(0,r.jsxs)(s.p,{children:["To demonstrate this, let's simplify the math. Assume that we have a charset of length 10: ",(0,r.jsx)(s.code,{children:"abcdefghij"}),".\nLet's also assume that our RNG generates values ",(0,r.jsx)(s.code,{children:"[0-25]"}),". The first 10 values ",(0,r.jsx)(s.code,{children:"0-9"})," correspond to each\ncharacter in our charset. The next 10 values ",(0,r.jsx)(s.code,{children:"10-19"})," also correspond to each character in our charset.\nHowever, the next 6 values ",(0,r.jsx)(s.code,{children:"20-25"})," correspond to only the first 6 characters in the charset. This means\nthat those 6 characters ",(0,r.jsx)(s.code,{children:"abcdef"})," can be selected more often than the last 4 characters ",(0,r.jsx)(s.code,{children:"ghij"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"In order to prevent this from happening, we calculate the maximum value that we can allow an index to be.\nThis is based on the length of the charset we are selecting from. In the example above, the maximum index\nvalue we should allow is 19 as that represents the largest integer multiple of the length of the charset\narray that is less than the maximum value that our RNG can generate. When our RNG generates any values\nlarger than our maximum allowed value, that number is ignored and we continue to the next number. Passwords\ndo not lose any length because we continue generating numbers until the password is fully filled in to the\nlength requested."}),"\n",(0,r.jsx)(s.h2,{id:"performance-characteristics",children:"Performance characteristics"}),"\n",(0,r.jsx)(s.p,{children:"Characterizing password generation performance with this model is heavily dependent on the policy\nconfiguration. In short, the more restrictive the policy, the longer it will take to generate a password.\nThis generalization isn't always true, but is a general guideline. The performance curve can be generalized:"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"(time to generate a candidate password) * (number of candidate passwords generated)"})}),"\n",(0,r.jsx)(s.p,{children:"Where the number of times a candidate password needs to be generated is a function of how likely a given\ncandidate password does not pass all of the rules."}),"\n",(0,r.jsx)(s.p,{children:"Here are some example policy configurations with their performance characteristics below. Each of these\npolicies have the same charset that candidate passwords are generated from (94 characters). The only\ndifference is the minimum number of characters for various character subsets."}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"No Minimum Characters"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-hcl",children:'rule "charset" {\n  charset = "abcdefghijklmnopqrstuvwxyz"\n}\nrule "charset" {\n  charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"\n}\nrule "charset" {\n  charset = "0123456789"\n}\nrule "charset" {\n  charset = "!\\"#$%&\'()*+,-./:;<=>?@[\\\\]^_`{|}~"\n}\n'})})]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"1 uppercase, 1 lowercase, 1 numeric"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-hcl",children:'rule "charset" {\n  charset = "abcdefghijklmnopqrstuvwxyz"\n  min-chars = 1\n}\nrule "charset" {\n  charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"\n  min-chars = 1\n}\nrule "charset" {\n  charset = "0123456789"\n  min-chars = 1\n}\nrule "charset" {\n  charset = "!\\"#$%&\'()*+,-./:;<=>?@[\\\\]^_`{|}~"\n}\n'})})]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"1 uppercase, 1 lowercase, 1 numeric, 1 from all ASCII characters"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-hcl",children:'rule "charset" {\n  charset = "abcdefghijklmnopqrstuvwxyz"\n  min-chars = 1\n}\nrule "charset" {\n  charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"\n  min-chars = 1\n}\nrule "charset" {\n  charset = "0123456789"\n  min-chars = 1\n}\nrule "charset" {\n  charset = "!\\"#$%&\'()*+,-./:;<=>?@[\\\\]^_`{|}~"\n  min-chars = 1\n}\n'})})]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsxs)("summary",{children:["1 uppercase, 1 lowercase, 1 numeric, 1 from ",(0,r.jsx)("code",{children:"!@#$"})]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-hcl",children:'rule "charset" {\n  charset = "abcdefghijklmnopqrstuvwxyz"\n  min-chars = 1\n}\nrule "charset" {\n  charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"\n  min-chars = 1\n}\nrule "charset" {\n  charset = "0123456789"\n  min-chars = 1\n}\nrule "charset" {\n  charset = "!@#$"\n  min-chars = 1\n}\n# Fleshes out the rest of the symbols but doesn\'t add any required characters\nrule "charset" {\n  charset = "!\\"#$%&\'()*+,-./:;<=>?@[\\\\]^_`{|}~"\n}\n'})})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:a(76099).A+"",children:(0,r.jsx)(s.img,{alt:"Password Policy Performance",src:a(11642).A+"",width:"757",height:"468"})})}),"\n",(0,r.jsxs)(s.p,{children:["As more characters are generated, the amount of time increases (as seen in ",(0,r.jsx)(s.code,{children:"No Minimum Characters"}),").\nThis upward trend can be dwarfed by restricting charsets. When a password is short, the chances of a character\nbeing selected from a subset is smaller. For instance, if you have a 1 character password from the charset\n",(0,r.jsx)(s.code,{children:"abcde"})," the chances of selecting ",(0,r.jsx)(s.code,{children:"c"})," from it is 1/5. However if you have a 2 character password, the chances\nof selecting ",(0,r.jsx)(s.code,{children:"c"})," at least once are greater than 1/5 because you have a second chance to select ",(0,r.jsx)(s.code,{children:"c"})," from\nthe charset."]}),"\n",(0,r.jsxs)(s.p,{children:["In these examples, as the length of the password increases, the amount of time to generate a password trends\ndown, levels off, and then slowly increases. This is a combination of the two effects listed above: increasing\ntime to generate more characters vs the chances of the character subsets being selected. When a single subset is\nvery small (such as ",(0,r.jsx)(s.code,{children:"!@#$"}),") the chances of it being selected are much smaller (4/94) than if the subset is larger\n(26/94 for lowercase characters). This can result in a dramatic loss of performance."]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("b",{children:"Click here for more details on password generation probabilities"})}),(0,r.jsxs)(s.p,{children:["In the examples above, the charset being used to generate candidate passwords is 94 characters long.\nRandomly choosing a given character from the 94 character charset has a 1/94 chance. Choosing a single\ncharacter from it after N tries (where N is the length of the password) is ",(0,r.jsx)(s.code,{children:"1-(1-1/94)^N"}),"."]}),(0,r.jsxs)(s.p,{children:["If we expand this to look at a subset of characters (such as lowercase characters) the chances of selecting\na character from that subset is ",(0,r.jsx)(s.code,{children:"1-(1-L/94)^N"})," where ",(0,r.jsx)(s.code,{children:"L"})," is the length of the subset. For lowercase\ncharacters, we get a probability of ",(0,r.jsx)(s.code,{children:"1-(1-26/94)^N"}),"."]}),(0,r.jsx)(s.p,{children:"If we do this for uppercase letters as well as numbers, then we get a combined probability curve:"}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"p = (1-(1-26/94)^N) * (1-(1-26/94)^N) * (1-(1-10/94)^N)"})}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:a(76695).A+"",children:(0,r.jsx)(s.img,{alt:"Chance of Generating a Good Password - 1",src:a(96260).A+"",width:"757",height:"468"})})}),(0,r.jsxs)(s.p,{children:["It should be noted that this probability curve only applies to this specific policy. To understand the\nperformance characteristics of a given policy, you should run your policy with the\n",(0,r.jsx)(s.a,{href:"/api-docs/system/policies-password",children:(0,r.jsx)(s.code,{children:"generate"})})," endpoint to see how much time the policy takes to\nproduce passwords."]})]}),"\n",(0,r.jsx)(s.h2,{id:"password-policy-syntax",children:"Password policy syntax"}),"\n",(0,r.jsxs)(s.p,{children:["Password policies are defined in ",(0,r.jsx)(s.a,{href:"https://github.com/hashicorp/hcl",children:"HCL"})," or JSON which defines\nthe length of the password and a set of rules a password must adhere to."]}),"\n",(0,r.jsxs)(s.p,{children:["See the ",(0,r.jsx)(s.a,{href:"/api-docs/system/policies-password",children:"API docs"})," for examples of the commands to save/read/etc.\npassword policies"]}),"\n",(0,r.jsx)(s.p,{children:"Here is a very simple policy which generates 20 character passwords from lowercase characters:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-hcl",children:'length = 20\nrule "charset" {\n  charset = "abcdefghijklmnopqrstuvwxyz"\n}\n'})}),"\n",(0,r.jsxs)(s.p,{children:["Multiple rules may be specified, including multiple rules of the same type. For instance, the following\npolicy will generate a 20 character password with at least one lowercase letter, at least one uppercase\nletter, at least one number, and at least one symbol from the set ",(0,r.jsx)(s.code,{children:"!@#$%^&*"}),":"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-hcl",children:'length = 20\nrule "charset" {\n  charset = "abcdefghijklmnopqrstuvwxyz"\n  min-chars = 1\n}\nrule "charset" {\n  charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"\n  min-chars = 1\n}\nrule "charset" {\n  charset = "0123456789"\n  min-chars = 1\n}\nrule "charset" {\n  charset = "!@#$%^&*"\n  min-chars = 1\n}\n'})}),"\n",(0,r.jsxs)(s.p,{children:["At least one charset must be specified for a policy to be valid. In order to generate a password, a charset\nmust be available to select characters from and password policies do not have a default charset.\nThe following policy is ",(0,r.jsx)(s.strong,{children:"NOT"})," valid and will be rejected:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-hcl",children:"length = 20\n"})}),"\n",(0,r.jsx)(s.h2,{id:"configuration--available-rules",children:"Configuration & available rules"}),"\n",(0,r.jsxs)(s.h3,{id:"length-parameter",children:[(0,r.jsx)(s.code,{children:"length"})," parameter"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"length"})," ",(0,r.jsx)(s.code,{children:"(int: <required>)"})," - Specifies how long the generated password will be. Must be >= 4."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Length is ",(0,r.jsx)(s.strong,{children:"not"})," a rule. It is the only part of the configuration that does not adhere to the guess-\nand-check approach of rules."]}),"\n",(0,r.jsxs)(s.h3,{id:"rule-charset",children:["Rule ",(0,r.jsx)(s.code,{children:"charset"})]}),"\n",(0,r.jsx)(s.p,{children:"Allows you to specify a minimum number of characters from a given charset. For instance: a password must\nhave at least one lowercase letter. This rule also helps construct the charset that the password generation\nutilizes. In order to generate a password, a charset must be specified."}),"\n",(0,r.jsxs)(s.p,{children:["If multiple charsets are specified, all of the charsets will be combined and de-duplicated prior to\ngenerating any candidate passwords. Each individual ",(0,r.jsx)(s.code,{children:"charset"})," rule will still need to be adhered to in\norder to successfully generate passwords."]}),"\n",(0,r.jsx)(s.p,{children:"~> After combining and de-duplicating charsets, the length of the charset that candidate passwords\nare generated from must be no longer than 256 characters."}),"\n",(0,r.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"charset"})," ",(0,r.jsx)(s.code,{children:"(string: <required>)"})," \u2013\xa0A string representation of the character set that this rule observes.\nAccepts UTF-8 compatible strings. All characters within the string must be printable.\nPlease note that the JSON output returned may be escaped for the special and control characters such as <,>,& etc as per the JSON specification."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"min-chars"})," ",(0,r.jsx)(s.code,{children:"(int: 0)"})," - Specifies a minimum number of characters required from the charset specified in\nthis rule. For example: if ",(0,r.jsx)(s.code,{children:"min-chars = 2"}),", the password must have at least 2 characters from ",(0,r.jsx)(s.code,{children:"charset"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-hcl",children:'length = 20\nrule "charset" {\n  charset = "abcde"\n  min-chars = 1\n}\nrule "charset" {\n  charset = "01234"\n  min-chars = 1\n}\n'})}),"\n",(0,r.jsxs)(s.p,{children:["This policy will generate passwords from the charset ",(0,r.jsx)(s.code,{children:"abcde01234"}),". However, the password must have at\nleast one character that is from ",(0,r.jsx)(s.code,{children:"abcde"})," and at least one character from ",(0,r.jsx)(s.code,{children:"01234"}),". If charsets overlap\nbetween rules, the charsets will be de-duplicated to prevent bias towards the overlapping set.\nFor instance: if you have two charset rules: ",(0,r.jsx)(s.code,{children:"abcde"})," & ",(0,r.jsx)(s.code,{children:"cdefg"}),", the charset ",(0,r.jsx)(s.code,{children:"abcdefg"})," will be used to\ngenerate candidate passwords, but a least one character from each ",(0,r.jsx)(s.code,{children:"abcde"})," & ",(0,r.jsx)(s.code,{children:"cdefg"})," must still appear\nin the password."]}),"\n",(0,r.jsxs)(s.p,{children:["If ",(0,r.jsx)(s.code,{children:"min-chars"})," is not specified (or set to ",(0,r.jsx)(s.code,{children:"0"}),") then this charset will not have a minimum required number\nof characters, but it will be used to select characters from. Example:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-hcl",children:'length = 8\nrule "charset" {\n  charset = "abcde"\n}\nrule "charset" {\n  charset = "01234"\n  min-chars = 1\n}\n'})}),"\n",(0,r.jsxs)(s.p,{children:["This policy generates 8 character passwords from the charset ",(0,r.jsx)(s.code,{children:"abcde01234"})," and requires at least one\ncharacter from ",(0,r.jsx)(s.code,{children:"01234"})," to be in it, but does not require any characters from ",(0,r.jsx)(s.code,{children:"abcde"}),". The password\n",(0,r.jsx)(s.code,{children:"04031945"})," may result from this policy, even though no alphabetical characters are in it."]}),"\n",(0,r.jsx)(s.h2,{id:"default-password-policy",children:"Default password policy"}),"\n",(0,r.jsx)(s.p,{children:"OpenBao ships with a default password policy that applies to any password\ngenerated by OpenBao without an explicit policy assignment. The default\npolicy requires passwords include:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"20 characters total"}),"\n",(0,r.jsx)(s.li,{children:"1 uppercase character"}),"\n",(0,r.jsx)(s.li,{children:"1 lowercase character"}),"\n",(0,r.jsx)(s.li,{children:"1 number"}),"\n",(0,r.jsx)(s.li,{children:"1 special character"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-hcl",children:'length = 20\n\nrule "charset" {\n  charset = "abcdefghijklmnopqrstuvwxyz"\n  min-chars = 1\n}\nrule "charset" {\n  charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"\n  min-chars = 1\n}\nrule "charset" {\n  charset = "0123456789"\n  min-chars = 1\n}\nrule "charset" {\n  charset = "-"\n  min-chars = 1\n}\n'})}),"\n",(0,r.jsx)(s.h2,{id:"tutorial",children:"Tutorial"}),"\n",(0,r.jsxs)(s.p,{children:["Refer to ",(0,r.jsx)(s.a,{href:"/tutorials/policies/password-policies",children:"User Configurable Password Generation for Secret\nEngines"}),"\nfor a step-by-step tutorial."]})]})}function d(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},76695:(e,s,a)=>{a.d(s,{A:()=>r});const r=a.p+"assets/files/vault-password-policy-chance-36ac96efbd7ff4fe2505f7a1a4d0e712.svg"},66107:(e,s,a)=>{a.d(s,{A:()=>r});const r=a.p+"assets/files/vault-password-policy-flow-8b9b5a0fa18d110a3b83c3b61c99ddf3.svg"},76099:(e,s,a)=>{a.d(s,{A:()=>r});const r=a.p+"assets/files/vault-password-policy-performance-fc9cd33854ebe7126bc89a1fbacbdff4.svg"},96260:(e,s,a)=>{a.d(s,{A:()=>r});const r=a.p+"assets/images/vault-password-policy-chance-36ac96efbd7ff4fe2505f7a1a4d0e712.svg"},66208:(e,s,a)=>{a.d(s,{A:()=>r});const r=a.p+"assets/images/vault-password-policy-flow-8b9b5a0fa18d110a3b83c3b61c99ddf3.svg"},11642:(e,s,a)=>{a.d(s,{A:()=>r});const r=a.p+"assets/images/vault-password-policy-performance-fc9cd33854ebe7126bc89a1fbacbdff4.svg"},28453:(e,s,a)=>{a.d(s,{R:()=>c,x:()=>i});var r=a(96540);const n={},t=r.createContext(n);function c(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);