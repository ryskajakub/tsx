"use strict";var a=require("node:module"),n=require("./resolve-ts-path-VlOGJlUT.cjs"),y=require("node:fs"),u=require("./index-CL50QkGo.cjs"),p=require("./client-DjommMgI.cjs"),x=require("node:path"),E=require("node:url"),T=require("node:querystring");const F=e=>{if(!e.includes("import")&&!e.includes("export"))return!1;try{return u.parseEsm(e)[3]}catch{return!0}},S=[".cts",".mts",".ts",".tsx",".jsx"],j=[".js",".cjs",".mjs"],d=Object.assign(Object.create(null),a._extensions),M=d[".js"],v=(e,s)=>{p.parent?.send&&p.parent.send({type:"dependency",path:s});const t=S.some(r=>s.endsWith(r)),c=j.some(r=>s.endsWith(r));if(!t&&!c)return M(e,s);let o=y.readFileSync(s,"utf8");if(s.endsWith(".cjs")){const r=u.transformDynamicImport(s,o);r&&(o=n.shouldApplySourceMap()?n.inlineSourceMap(r):r.code)}else if(t||F(o)){const r=u.transformSync(o,s,{tsconfigRaw:n.fileMatcher?.(s)});o=n.shouldApplySourceMap()?n.inlineSourceMap(r):r.code}e._compile(o,s)};[".js",".ts",".tsx",".jsx"].forEach(e=>{d[e]=v}),Object.defineProperty(d,".mjs",{value:v,enumerable:!1});const O=`${x.sep}node_modules${x.sep}`,m=a._resolveFilename.bind(a),h=(e,s,t,c)=>{const o=n.resolveTsPath(e);if(s?.filename&&(n.tsExtensionsPattern.test(s.filename)||n.allowJs)&&o)for(const r of o)try{return m(r,s,t,c)}catch(i){const{code:l}=i;if(l!=="MODULE_NOT_FOUND"&&l!=="ERR_PACKAGE_PATH_NOT_EXPORTED")throw i}},_=(e,s,t,c)=>{if(console.log("resolveFilename",{request:e,parent:s,isMain:t,options:c}),e.startsWith("data:")){const i=e.indexOf("?");if(i!==-1){const l=e.slice(i+1),f=T.parse(l);f["tsx-file"]&&(e=f["tsx-file"])}else return e}const o=e.indexOf("?");if(o!==-1&&(e=e.slice(0,o)),e.startsWith(n.fileUrlPrefix)&&(e=E.fileURLToPath(e)),n.tsconfigPathsMatcher&&!n.isRelativePath(e)&&!s?.filename?.includes(O)){const i=n.tsconfigPathsMatcher(e);for(const l of i){const f=h(l,s,t,c);if(f)return f;try{return m(l,s,t,c)}catch{}}}const r=h(e,s,t,c);return r||m(e,s,t,c)},b=()=>{const{sourceMapsEnabled:e}=process,{_extensions:s,_resolveFilename:t}=a;return n.loadTsconfig(process.env.TSX_TSCONFIG_PATH),process.setSourceMapsEnabled(!0),a._extensions=d,a._resolveFilename=_,()=>{e===!1&&process.setSourceMapsEnabled(!1),a._extensions=s,a._resolveFilename=t}};exports.register=b,exports.resolveFilename=_;
