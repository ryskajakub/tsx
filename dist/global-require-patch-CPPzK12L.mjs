import c from"node:module";import{s as d,i as p,f as T,a as j,t as x,b as v,r as F,c as b,d as O,l as S}from"./resolve-ts-path-DUkQ8uuR.mjs";import M from"node:fs";import{p as g,t as P,a as R}from"./index-CKNv86dv.mjs";import{p as u}from"./client-Cg7nS93t.mjs";import _ from"node:path";import{fileURLToPath as A}from"node:url";import{parse as W}from"node:querystring";const D=s=>{if(!s.includes("import")&&!s.includes("export"))return!1;try{return g(s)[3]}catch{return!0}},I=[".cts",".mts",".ts",".tsx",".jsx"],N=[".js",".cjs",".mjs"],f=Object.assign(Object.create(null),c._extensions),U=f[".js"],h=(s,e)=>{u?.send&&u.send({type:"dependency",path:e});const t=I.some(o=>e.endsWith(o)),r=N.some(o=>e.endsWith(o));if(!t&&!r)return U(s,e);let n=M.readFileSync(e,"utf8");if(e.endsWith(".cjs")){const o=P(e,n);o&&(n=d()?p(o):o.code)}else if(t||D(n)){const o=R(n,e,{tsconfigRaw:T?.(e)});n=d()?p(o):o.code}s._compile(n,e)};[".js",".ts",".tsx",".jsx"].forEach(s=>{f[s]=h}),Object.defineProperty(f,".mjs",{value:h,enumerable:!1});const w=`${_.sep}node_modules${_.sep}`,m=c._resolveFilename.bind(c),y=(s,e,t,r)=>{const n=F(s);if(e?.filename&&(b.test(e.filename)||O)&&n)for(const o of n)try{return m(o,e,t,r)}catch(a){const{code:i}=a;if(i!=="MODULE_NOT_FOUND"&&i!=="ERR_PACKAGE_PATH_NOT_EXPORTED")throw a}},E=(s,e,t,r)=>{if(console.log("resolveFilename",{request:s,parent:e,isMain:t,options:r}),s.startsWith("data:")){const a=s.indexOf("?");if(a!==-1){const i=s.slice(a+1),l=W(i);if(console.log(l),l["tsx-file"])return m(l["tsx-file"],e,t,r)}return s}const n=s.indexOf("?");if(n!==-1&&(s=s.slice(0,n)),s.startsWith(j)&&(s=A(s)),x&&!v(s)&&!e?.filename?.includes(w)){const a=x(s);for(const i of a){const l=y(i,e,t,r);if(l)return l;try{return m(i,e,t,r)}catch{}}}const o=y(s,e,t,r);return o||m(s,e,t,r)},L=()=>{const{sourceMapsEnabled:s}=process,{_extensions:e,_resolveFilename:t}=c;return S(process.env.TSX_TSCONFIG_PATH),process.setSourceMapsEnabled(!0),c._extensions=f,c._resolveFilename=E,()=>{s===!1&&process.setSourceMapsEnabled(!1),c._extensions=e,c._resolveFilename=t}};export{E as a,L as r};
