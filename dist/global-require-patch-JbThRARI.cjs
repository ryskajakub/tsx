"use strict";var E=require("./pkgroll_create-require-B-Pljx_-.cjs"),a=require("node:module"),n=require("./resolve-ts-path-VlOGJlUT.cjs"),g=require("node:fs"),m=require("./index-DTCJysGI.cjs"),h=require("./client-DjommMgI.cjs"),f=require("node:path"),v=require("node:url");const M=s=>{if(!s.includes("import")&&!s.includes("export"))return!1;try{return m.parseEsm(s)[3]}catch{return!0}},S=[".cts",".mts",".ts",".tsx",".jsx"],j=[".js",".cjs",".mjs"],d=Object.assign(Object.create(null),a._extensions),R=d[".js"],x=(s,e)=>{h.parent?.send&&h.parent.send({type:"dependency",path:e});const o=S.some(r=>e.endsWith(r)),c=j.some(r=>e.endsWith(r));if(!o&&!c)return R(s,e);let t=g.readFileSync(e,"utf8");if(e.endsWith(".cjs")){const r=m.transformDynamicImport(e,t);r&&(t=n.shouldApplySourceMap()?n.inlineSourceMap(r):r.code)}else if(o||M(t)){const r=m.transformSync(t,e,{tsconfigRaw:n.fileMatcher?.(e)});t=n.shouldApplySourceMap()?n.inlineSourceMap(r):r.code}s._compile(t,e)};[".js",".ts",".tsx",".jsx"].forEach(s=>{d[s]=x}),Object.defineProperty(d,".mjs",{value:x,enumerable:!1});const b=`${f.sep}node_modules${f.sep}`,p=a._resolveFilename.bind(a),_=(s,e,o,c)=>{const t=n.resolveTsPath(s);if(e?.filename&&(n.tsExtensionsPattern.test(e.filename)||n.allowJs)&&t)for(const r of t)try{return p(r,e,o,c)}catch(l){const{code:i}=l;if(i!=="MODULE_NOT_FOUND"&&i!=="ERR_PACKAGE_PATH_NOT_EXPORTED")throw l}},y=(s,e,o,c)=>{const t=s.indexOf("?");if(t!==-1&&(s=s.slice(0,t)),s.startsWith(n.fileUrlPrefix)&&(s=v.fileURLToPath(s)),n.tsconfigPathsMatcher&&!n.isRelativePath(s)&&!e?.filename?.includes(b)){const l=n.tsconfigPathsMatcher(s);for(const i of l){const u=_(i,e,o,c);if(u)return u;try{return p(i,e,o,c)}catch{}}}const r=_(s,e,o,c);return r||p(s,e,o,c)},T=(s,e)=>{if(!e)throw new Error("The current file path (__filename or import.meta.url) must be provided in the second argument of tsx.require()");return(typeof e=="string"&&e.startsWith("file://")||e instanceof URL)&&(e=v.fileURLToPath(e)),f.resolve(f.dirname(e),s)},O=s=>{const{sourceMapsEnabled:e}=process,{_extensions:o,_resolveFilename:c}=a;n.loadTsconfig(process.env.TSX_TSCONFIG_PATH),process.setSourceMapsEnabled(!0),a._extensions=d,a._resolveFilename=y;const t=()=>{e===!1&&process.setSourceMapsEnabled(!1),a._extensions=o,a._resolveFilename=c};if(s?.namespace){const r=(l,i)=>{const u=T(l,i);return E.require(u)};t.require=r,t.unregister=t}return t};exports.getRequestContext=T,exports.register=O,exports.resolveFilename=y;
