"use strict";var a=require("node:module"),n=require("./resolve-ts-path-VlOGJlUT.cjs"),y=require("node:fs"),d=require("./index-CL50QkGo.cjs"),p=require("./client-DjommMgI.cjs"),h=require("node:path"),E=require("node:url");const T=e=>{if(!e.includes("import")&&!e.includes("export"))return!1;try{return d.parseEsm(e)[3]}catch{return!0}},M=[".cts",".mts",".ts",".tsx",".jsx"],S=[".js",".cjs",".mjs"],f=Object.assign(Object.create(null),a._extensions),j=f[".js"],v=(e,s)=>{p.parent?.send&&p.parent.send({type:"dependency",path:s});const o=M.some(r=>s.endsWith(r)),c=S.some(r=>s.endsWith(r));if(!o&&!c)return j(e,s);let t=y.readFileSync(s,"utf8");if(s.endsWith(".cjs")){const r=d.transformDynamicImport(s,t);r&&(t=n.shouldApplySourceMap()?n.inlineSourceMap(r):r.code)}else if(o||T(t)){const r=d.transformSync(t,s,{tsconfigRaw:n.fileMatcher?.(s)});t=n.shouldApplySourceMap()?n.inlineSourceMap(r):r.code}e._compile(t,s)};[".js",".ts",".tsx",".jsx"].forEach(e=>{f[e]=v}),Object.defineProperty(f,".mjs",{value:v,enumerable:!1});const F=`${h.sep}node_modules${h.sep}`,u=a._resolveFilename.bind(a),x=(e,s,o,c)=>{const t=n.resolveTsPath(e);if(s?.filename&&(n.tsExtensionsPattern.test(s.filename)||n.allowJs)&&t)for(const r of t)try{return u(r,s,o,c)}catch(l){const{code:i}=l;if(i!=="MODULE_NOT_FOUND"&&i!=="ERR_PACKAGE_PATH_NOT_EXPORTED")throw l}},_=(e,s,o,c)=>{const t=e.indexOf("?");if(t!==-1&&(e=e.slice(0,t)),e.startsWith(n.fileUrlPrefix)&&(e=E.fileURLToPath(e)),n.tsconfigPathsMatcher&&!n.isRelativePath(e)&&!s?.filename?.includes(F)){const l=n.tsconfigPathsMatcher(e);for(const i of l){const m=x(i,s,o,c);if(m)return m;try{return u(i,s,o,c)}catch{}}}const r=x(e,s,o,c);return r||u(e,s,o,c)},b=()=>{const{sourceMapsEnabled:e}=process,{_extensions:s,_resolveFilename:o}=a;return n.loadTsconfig(process.env.TSX_TSCONFIG_PATH),process.setSourceMapsEnabled(!0),a._extensions=f,a._resolveFilename=_,()=>{e===!1&&process.setSourceMapsEnabled(!1),a._extensions=s,a._resolveFilename=o}};exports.register=b,exports.resolveFilename=_;
