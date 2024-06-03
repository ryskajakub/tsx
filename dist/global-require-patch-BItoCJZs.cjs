"use strict";var c=require("node:module"),y=require("node:fs"),a=require("get-tsconfig"),p=require("./index-DTCJysGI.cjs"),i=require("./file-url-BcwMOquI.cjs"),v=require("./client-DjommMgI.cjs"),u=require("node:path"),O=require("node:url");const M=e=>{if(e.includes("import")||e.includes("export"))try{return p.parseEsm(e)[3]}catch{return!0}return!1},E=/\.[cm]?tsx?$/,S=process.env.TSX_TSCONFIG_PATH?{path:u.resolve(process.env.TSX_TSCONFIG_PATH),config:a.parseTsconfig(process.env.TSX_TSCONFIG_PATH)}:a.getTsconfig(),P=[".cts",".mts",".ts",".tsx",".jsx"],j=[".js",".cjs",".mjs"],A=S&&a.createFilesMatcher(S),d=Object.assign(Object.create(null),c._extensions),b=d[".js"],h=(e,s)=>{v.parent?.send&&v.parent.send({type:"dependency",path:s});const t=P.some(n=>s.endsWith(n)),o=j.some(n=>s.endsWith(n));if(!t&&!o)return b(e,s);let r=y.readFileSync(s,"utf8");if(s.endsWith(".cjs")){const n=p.transformDynamicImport(s,r);n&&(r=i.shouldApplySourceMap()?i.inlineSourceMap(n):n.code)}else if(t||M(r)){const n=p.transformSync(r,s,{tsconfigRaw:A?.(s)});r=i.shouldApplySourceMap()?i.inlineSourceMap(n):n.code}e._compile(r,s)};[".js",".ts",".tsx",".jsx"].forEach(e=>{d[e]=h}),Object.defineProperty(d,".mjs",{value:h,enumerable:!1});const m=process.env.TSX_TSCONFIG_PATH?{path:u.resolve(process.env.TSX_TSCONFIG_PATH),config:a.parseTsconfig(process.env.TSX_TSCONFIG_PATH)}:a.getTsconfig(),N=`${u.sep}node_modules${u.sep}`,x=m&&a.createPathsMatcher(m),T=c._resolveFilename.bind(c),F=(e,s,t,o)=>{const r=i.resolveTsPath(e);if(s?.filename&&(E.test(s.filename)||m?.config.compilerOptions?.allowJs)&&r)for(const n of r)try{return T(n,s,t,o)}catch(f){const{code:l}=f;if(l!=="MODULE_NOT_FOUND"&&l!=="ERR_PACKAGE_PATH_NOT_EXPORTED")throw f}},g=(e,s,t,o)=>{const r=e.indexOf("?");if(r!==-1&&(e=e.slice(0,r)),e.startsWith(i.fileUrlPrefix)&&(e=O.fileURLToPath(e)),x&&!i.isRelativePath(e)&&!s?.filename?.includes(N)){const f=x(e);for(const l of f){const _=F(l,s,t,o);if(_)return _;try{return T(l,s,t,o)}catch{}}}const n=F(e,s,t,o);return n||T(e,s,t,o)},I=()=>{const{sourceMapsEnabled:e}=process,{_extensions:s,_resolveFilename:t}=c;return process.setSourceMapsEnabled(!0),c._extensions=d,c._resolveFilename=g,()=>{e===!1&&process.setSourceMapsEnabled(!1),c._extensions=s,c._resolveFilename=t}};exports.register=I,exports.resolveFilename=g;
