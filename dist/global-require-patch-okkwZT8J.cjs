"use strict";var a=require("node:module"),y=require("node:fs"),d=require("./index-DTCJysGI.cjs"),n=require("./resolve-ts-path-DHkqG99I.cjs"),p=require("./client-DjommMgI.cjs"),h=require("node:path"),E=require("node:url");const M=e=>{if(!e.includes("import")&&!e.includes("export"))return!1;try{return d.parseEsm(e)[3]}catch{return!0}},j=[".cts",".mts",".ts",".tsx",".jsx"],F=[".js",".cjs",".mjs"],f=Object.assign(Object.create(null),a._extensions),S=f[".js"],v=(e,s)=>{p.parent?.send&&p.parent.send({type:"dependency",path:s});const o=j.some(r=>s.endsWith(r)),c=F.some(r=>s.endsWith(r));if(!o&&!c)return S(e,s);let t=y.readFileSync(s,"utf8");if(s.endsWith(".cjs")){const r=d.transformDynamicImport(s,t);r&&(t=n.shouldApplySourceMap()?n.inlineSourceMap(r):r.code)}else if(o||M(t)){const r=d.transformSync(t,s,{tsconfigRaw:n.fileMatcher?.(s)});t=n.shouldApplySourceMap()?n.inlineSourceMap(r):r.code}e._compile(t,s)};[".js",".ts",".tsx",".jsx"].forEach(e=>{f[e]=v}),Object.defineProperty(f,".mjs",{value:v,enumerable:!1});const b=`${h.sep}node_modules${h.sep}`,u=a._resolveFilename.bind(a),x=(e,s,o,c)=>{const t=n.resolveTsPath(e);if(s?.filename&&(n.tsExtensionsPattern.test(s.filename)||n.allowJs)&&t)for(const r of t)try{return u(r,s,o,c)}catch(l){const{code:i}=l;if(i!=="MODULE_NOT_FOUND"&&i!=="ERR_PACKAGE_PATH_NOT_EXPORTED")throw l}},_=(e,s,o,c)=>{const t=e.indexOf("?");if(t!==-1&&(e=e.slice(0,t)),e.startsWith(n.fileUrlPrefix)&&(e=E.fileURLToPath(e)),n.tsconfigPathsMatcher&&!n.isRelativePath(e)&&!s?.filename?.includes(b)){const l=n.tsconfigPathsMatcher(e);for(const i of l){const m=x(i,s,o,c);if(m)return m;try{return u(i,s,o,c)}catch{}}}const r=x(e,s,o,c);return r||u(e,s,o,c)},T=()=>{const{sourceMapsEnabled:e}=process,{_extensions:s,_resolveFilename:o}=a;return process.setSourceMapsEnabled(!0),a._extensions=f,a._resolveFilename=_,()=>{e===!1&&process.setSourceMapsEnabled(!1),a._extensions=s,a._resolveFilename=o}};exports.register=T,exports.resolveFilename=_;
