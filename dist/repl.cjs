"use strict";var n=require("node:repl"),c=require("./package-DFhNfR4f.cjs"),l=require("./index-DrTak83p.cjs");require("node:url"),require("esbuild"),require("node:crypto"),require("node:fs"),require("node:path"),require("node:os"),require("./temporary-directory-B83uKxJF.cjs"),console.log(`Welcome to tsx v${c.version} (Node.js ${process.version}).
Type ".help" for more information.`);const r=n.start(),{eval:u}=r,q=async function(o,s,e,t){const i=await l.transform(o,e,{loader:"ts",tsconfigRaw:{compilerOptions:{preserveValueImports:!0}},define:{require:"global.require"}}).catch(a=>(console.log(a.message),{code:`
`}));return u.call(this,i.code,s,e,t)};r.eval=q;
