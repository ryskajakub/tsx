"use strict";var a=require("node:module"),r=require("./resolve-ts-path-VlOGJlUT.cjs"),y=require("node:fs"),m=require("./index-CL50QkGo.cjs"),p=require("./client-DjommMgI.cjs"),x=require("node:path"),j=require("node:url"),E=require("node:querystring");const T=e=>{if(!e.includes("import")&&!e.includes("export"))return!1;try{return m.parseEsm(e)[3]}catch{return!0}},F=[".cts",".mts",".ts",".tsx",".jsx"],S=[".js",".cjs",".mjs"],d=Object.assign(Object.create(null),a._extensions),g=d[".js"],v=(e,s)=>{p.parent?.send&&p.parent.send({type:"dependency",path:s}),console.log("cjs load",{filePath:s,module:e});const o=F.some(n=>s.endsWith(n)),c=S.some(n=>s.endsWith(n));if(!o&&!c)return g(e,s);let t=y.readFileSync(s,"utf8");if(s.endsWith(".cjs")){const n=m.transformDynamicImport(s,t);n&&(t=r.shouldApplySourceMap()?r.inlineSourceMap(n):n.code)}else if(o||T(t)){const n=m.transformSync(t,s,{format:"cjs",platform:"node",tsconfigRaw:r.fileMatcher?.(s)});console.log("transformed",{transformed:n}),t=r.shouldApplySourceMap()?r.inlineSourceMap(n):n.code}e._compile(t,s)};[".js",".ts",".tsx",".jsx"].forEach(e=>{d[e]=v}),Object.defineProperty(d,".mjs",{value:v,enumerable:!1});const M=`${x.sep}node_modules${x.sep}`,u=a._resolveFilename.bind(a),h=(e,s,o,c)=>{const t=r.resolveTsPath(e);if(s?.filename&&(r.tsExtensionsPattern.test(s.filename)||r.allowJs)&&t)for(const n of t)try{return u(n,s,o,c)}catch(l){const{code:i}=l;if(i!=="MODULE_NOT_FOUND"&&i!=="ERR_PACKAGE_PATH_NOT_EXPORTED")throw l}},_=(e,s,o,c)=>{if(console.log("resolveFilename",{request:e,parent:s,isMain:o,options:c}),console.log(a._cache),e.startsWith("data:")){const l=e.indexOf("?");if(l!==-1){const i=e.slice(l+1),f=E.parse(i);f["tsx-file"]&&(e=f["tsx-file"])}else return e}const t=e.indexOf("?");if(t!==-1&&(e=e.slice(0,t)),e.startsWith(r.fileUrlPrefix)&&(e=j.fileURLToPath(e)),r.tsconfigPathsMatcher&&!r.isRelativePath(e)&&!s?.filename?.includes(M)){const l=r.tsconfigPathsMatcher(e);for(const i of l){const f=h(i,s,o,c);if(f)return f;try{return u(i,s,o,c)}catch{}}}const n=h(e,s,o,c);return n||u(e,s,o,c)},O=()=>{const{sourceMapsEnabled:e}=process,{_extensions:s,_resolveFilename:o}=a;return r.loadTsconfig(process.env.TSX_TSCONFIG_PATH),process.setSourceMapsEnabled(!0),a._extensions=d,a._resolveFilename=_,()=>{e===!1&&process.setSourceMapsEnabled(!1),a._extensions=s,a._resolveFilename=o}};exports.register=O,exports.resolveFilename=_;
