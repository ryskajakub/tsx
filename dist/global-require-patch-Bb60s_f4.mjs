import a from"node:module";import{s as d,i as p,f as T,a as j,t as u,b,r as v,c as F,d as S,l as O}from"./resolve-ts-path-DUkQ8uuR.mjs";import M from"node:fs";import{p as P,t as R,a as g}from"./index-CKNv86dv.mjs";import{p as x}from"./client-Cg7nS93t.mjs";import _ from"node:path";import{fileURLToPath as A}from"node:url";const W=s=>{if(!s.includes("import")&&!s.includes("export"))return!1;try{return P(s)[3]}catch{return!0}},D=[".cts",".mts",".ts",".tsx",".jsx"],N=[".js",".cjs",".mjs"],l=Object.assign(Object.create(null),a._extensions),U=l[".js"],h=(s,e)=>{x?.send&&x.send({type:"dependency",path:e});const o=D.some(t=>e.endsWith(t)),r=N.some(t=>e.endsWith(t));if(!o&&!r)return U(s,e);let n=M.readFileSync(e,"utf8");if(e.endsWith(".cjs")){const t=R(e,n);t&&(n=d()?p(t):t.code)}else if(o||W(n)){const t=g(n,e,{tsconfigRaw:T?.(e)});n=d()?p(t):t.code}s._compile(n,e)};[".js",".ts",".tsx",".jsx"].forEach(s=>{l[s]=h}),Object.defineProperty(l,".mjs",{value:h,enumerable:!1});const w=`${_.sep}node_modules${_.sep}`,f=a._resolveFilename.bind(a),y=(s,e,o,r)=>{const n=v(s);if(e?.filename&&(F.test(e.filename)||S)&&n)for(const t of n)try{return f(t,e,o,r)}catch(i){const{code:c}=i;if(c!=="MODULE_NOT_FOUND"&&c!=="ERR_PACKAGE_PATH_NOT_EXPORTED")throw i}},E=(s,e,o,r)=>{if(s.startsWith("data:"))return f(s,e,o,r);const n=s.indexOf("?");if(n!==-1&&(s=s.slice(0,n)),s.startsWith(j)&&(s=A(s)),u&&!b(s)&&!e?.filename?.includes(w)){const i=u(s);for(const c of i){const m=y(c,e,o,r);if(m)return m;try{return f(c,e,o,r)}catch{}}}const t=y(s,e,o,r);return t||f(s,e,o,r)},I=()=>{const{sourceMapsEnabled:s}=process,{_extensions:e,_resolveFilename:o}=a;return O(process.env.TSX_TSCONFIG_PATH),process.setSourceMapsEnabled(!0),a._extensions=l,a._resolveFilename=E,()=>{s===!1&&process.setSourceMapsEnabled(!1),a._extensions=e,a._resolveFilename=o}};export{E as a,I as r};
