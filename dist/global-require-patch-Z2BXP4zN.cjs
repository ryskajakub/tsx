"use strict";var a=require("node:module"),t=require("./resolve-ts-path-VlOGJlUT.cjs"),y=require("node:fs"),u=require("./index-CL50QkGo.cjs"),h=require("./client-DjommMgI.cjs"),v=require("node:path"),E=require("node:url");const T=e=>{if(!e.includes("import")&&!e.includes("export"))return!1;try{return u.parseEsm(e)[3]}catch{return!0}},F=[".cts",".mts",".ts",".tsx",".jsx"],S=[".js",".cjs",".mjs"],f=Object.assign(Object.create(null),a._extensions),j=f[".js"],p=(e,s)=>{h.parent?.send&&h.parent.send({type:"dependency",path:s});const n=F.some(r=>s.endsWith(r)),c=S.some(r=>s.endsWith(r));if(!n&&!c)return j(e,s);let o=y.readFileSync(s,"utf8");if(s.endsWith(".cjs")){const r=u.transformDynamicImport(s,o);r&&(o=t.shouldApplySourceMap()?t.inlineSourceMap(r):r.code)}else if(n||T(o)){const r=u.transformSync(o,s,{tsconfigRaw:t.fileMatcher?.(s)});o=t.shouldApplySourceMap()?t.inlineSourceMap(r):r.code}e._compile(o,s)};[".js",".ts",".tsx",".jsx"].forEach(e=>{f[e]=p}),Object.defineProperty(f,".mjs",{value:p,enumerable:!1});const M=`${v.sep}node_modules${v.sep}`,d=a._resolveFilename.bind(a),x=(e,s,n,c)=>{const o=t.resolveTsPath(e);if(s?.filename&&(t.tsExtensionsPattern.test(s.filename)||t.allowJs)&&o)for(const r of o)try{return d(r,s,n,c)}catch(i){const{code:l}=i;if(l!=="MODULE_NOT_FOUND"&&l!=="ERR_PACKAGE_PATH_NOT_EXPORTED")throw i}},_=(e,s,n,c)=>{if(console.log("resolveFilename",{request:e,parent:s,isMain:n,options:c}),e.startsWith("data:"))return d(e,s,n,c);const o=e.indexOf("?");if(o!==-1&&(e=e.slice(0,o)),e.startsWith(t.fileUrlPrefix)&&(e=E.fileURLToPath(e)),t.tsconfigPathsMatcher&&!t.isRelativePath(e)&&!s?.filename?.includes(M)){const i=t.tsconfigPathsMatcher(e);for(const l of i){const m=x(l,s,n,c);if(m)return m;try{return d(l,s,n,c)}catch{}}}const r=x(e,s,n,c);return r||d(e,s,n,c)},b=()=>{const{sourceMapsEnabled:e}=process,{_extensions:s,_resolveFilename:n}=a;return t.loadTsconfig(process.env.TSX_TSCONFIG_PATH),process.setSourceMapsEnabled(!0),a._extensions=f,a._resolveFilename=_,()=>{e===!1&&process.setSourceMapsEnabled(!1),a._extensions=s,a._resolveFilename=n}};exports.register=b,exports.resolveFilename=_;
