"use strict";var c=require("node:module"),r=require("./resolve-ts-path-VlOGJlUT.cjs"),E=require("node:fs"),u=require("./index-DrTak83p.cjs"),h=require("./client-DjommMgI.cjs"),x=require("node:path"),T=require("node:url"),M=require("node:querystring");const S=e=>{if(!e.includes("import")&&!e.includes("export"))return!1;try{return u.parseEsm(e)[3]}catch{return!0}},j=[".cts",".mts",".ts",".tsx",".jsx"],F=[".js",".cjs",".mjs"],d=Object.assign(Object.create(null),c._extensions),O=d[".js"],_=(e,s)=>{h.parent?.send&&h.parent.send({type:"dependency",path:s});const o=j.some(n=>s.endsWith(n)),a=F.some(n=>s.endsWith(n));if(!o&&!a)return O(e,s);let t=E.readFileSync(s,"utf8");if(s.endsWith(".cjs")){const n=u.transformDynamicImport(s,t);n&&(t=r.shouldApplySourceMap()?r.inlineSourceMap(n):n.code)}else if(o||S(t)){const n=u.transformSync(t,s,{tsconfigRaw:r.fileMatcher?.(s)});t=r.shouldApplySourceMap()?r.inlineSourceMap(n):n.code}e._compile(t,s)};[".js",".ts",".tsx",".jsx"].forEach(e=>{d[e]=_}),Object.defineProperty(d,".mjs",{value:_,enumerable:!1});const b=`${x.sep}node_modules${x.sep}`,m=c._resolveFilename.bind(c),v=(e,s,o,a)=>{const t=r.resolveTsPath(e);if(s?.filename&&(r.tsExtensionsPattern.test(s.filename)||r.allowJs)&&t)for(const n of t)try{return m(n,s,o,a)}catch(i){const{code:l}=i;if(l!=="MODULE_NOT_FOUND"&&l!=="ERR_PACKAGE_PATH_NOT_EXPORTED")throw i}},y=(e,s,o,a)=>{if(e.startsWith("data:")){const i=e.indexOf("?");if(i===-1)return e;const l=e.slice(i+1),f=M.parse(l);if(f["tsx-file"]){const p=f["tsx-file"];c._cache[p]=c._cache[e],delete c._cache[e],e=p}}const t=e.indexOf("?");if(t!==-1&&(e=e.slice(0,t)),e.startsWith(r.fileUrlPrefix)&&(e=T.fileURLToPath(e)),r.tsconfigPathsMatcher&&!r.isRelativePath(e)&&!s?.filename?.includes(b)){const i=r.tsconfigPathsMatcher(e);for(const l of i){const f=v(l,s,o,a);if(f)return f;try{return m(l,s,o,a)}catch{}}}const n=v(e,s,o,a);return n||m(e,s,o,a)},P=()=>{const{sourceMapsEnabled:e}=process,{_extensions:s,_resolveFilename:o}=c;return r.loadTsconfig(process.env.TSX_TSCONFIG_PATH),process.setSourceMapsEnabled(!0),c._extensions=d,c._resolveFilename=y,()=>{e===!1&&process.setSourceMapsEnabled(!1),c._extensions=s,c._resolveFilename=o}};exports.register=P,exports.resolveFilename=y;
