import a from"node:module";import j from"node:fs";import{p as b,t as v,a as F}from"./index-DiuW-CAd.mjs";import{s as d,i as p,f as M,a as O,t as u,b as S,r as T,c as R,d as P}from"./resolve-ts-path-nrZrcK-T.mjs";import{p as x}from"./client-Cg7nS93t.mjs";import h from"node:path";import{fileURLToPath as g}from"node:url";const A=s=>{if(s.includes("import")||s.includes("export"))try{return b(s)[3]}catch{return!0}return!1},D=[".cts",".mts",".ts",".tsx",".jsx"],U=[".js",".cjs",".mjs"],l=Object.assign(Object.create(null),a._extensions),W=l[".js"],_=(s,e)=>{x?.send&&x.send({type:"dependency",path:e});const n=D.some(t=>e.endsWith(t)),r=U.some(t=>e.endsWith(t));if(!n&&!r)return W(s,e);let o=j.readFileSync(e,"utf8");if(e.endsWith(".cjs")){const t=v(e,o);t&&(o=d()?p(t):t.code)}else if(n||A(o)){const t=F(o,e,{tsconfigRaw:M?.(e)});o=d()?p(t):t.code}s._compile(o,e)};[".js",".ts",".tsx",".jsx"].forEach(s=>{l[s]=_}),Object.defineProperty(l,".mjs",{value:_,enumerable:!1});const w=`${h.sep}node_modules${h.sep}`,f=a._resolveFilename.bind(a),y=(s,e,n,r)=>{const o=T(s);if(e?.filename&&(R.test(e.filename)||P)&&o)for(const t of o)try{return f(t,e,n,r)}catch(i){const{code:c}=i;if(c!=="MODULE_NOT_FOUND"&&c!=="ERR_PACKAGE_PATH_NOT_EXPORTED")throw i}},E=(s,e,n,r)=>{const o=s.indexOf("?");if(o!==-1&&(s=s.slice(0,o)),s.startsWith(O)&&(s=g(s)),u&&!S(s)&&!e?.filename?.includes(w)){const i=u(s);for(const c of i){const m=y(c,e,n,r);if(m)return m;try{return f(c,e,n,r)}catch{}}}const t=y(s,e,n,r);return t||f(s,e,n,r)},L=()=>{const{sourceMapsEnabled:s}=process,{_extensions:e,_resolveFilename:n}=a;return process.setSourceMapsEnabled(!0),a._extensions=l,a._resolveFilename=E,()=>{s===!1&&process.setSourceMapsEnabled(!1),a._extensions=e,a._resolveFilename=n}};export{E as a,L as r};
