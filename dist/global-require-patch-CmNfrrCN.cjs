"use strict";var l=require("node:module"),t=require("./resolve-ts-path-VlOGJlUT.cjs"),y=require("node:fs"),d=require("./index-CL50QkGo.cjs"),x=require("./client-DjommMgI.cjs"),h=require("node:path"),E=require("node:url");const T=e=>{if(!e.includes("import")&&!e.includes("export"))return!1;try{return d.parseEsm(e)[3]}catch{return!0}},F=[".cts",".mts",".ts",".tsx",".jsx"],S=[".js",".cjs",".mjs"],f=Object.assign(Object.create(null),l._extensions),j=f[".js"],p=(e,s)=>{x.parent?.send&&x.parent.send({type:"dependency",path:s});const r=F.some(n=>s.endsWith(n)),c=S.some(n=>s.endsWith(n));if(!r&&!c)return j(e,s);let o=y.readFileSync(s,"utf8");if(s.endsWith(".cjs")){const n=d.transformDynamicImport(s,o);n&&(o=t.shouldApplySourceMap()?t.inlineSourceMap(n):n.code)}else if(r||T(o)){const n=d.transformSync(o,s,{tsconfigRaw:t.fileMatcher?.(s)});o=t.shouldApplySourceMap()?t.inlineSourceMap(n):n.code}e._compile(o,s)};[".js",".ts",".tsx",".jsx"].forEach(e=>{f[e]=p}),Object.defineProperty(f,".mjs",{value:p,enumerable:!1});const M=`${h.sep}node_modules${h.sep}`,m=l._resolveFilename.bind(l),v=(e,s,r,c)=>{const o=t.resolveTsPath(e);if(s?.filename&&(t.tsExtensionsPattern.test(s.filename)||t.allowJs)&&o)for(const n of o)try{return m(n,s,r,c)}catch(i){const{code:a}=i;if(a!=="MODULE_NOT_FOUND"&&a!=="ERR_PACKAGE_PATH_NOT_EXPORTED")throw i}},_=(e,s,r,c)=>{if(console.log("resolveFilename",{request:e,parent:s,isMain:r,options:c}),e.startsWith("data:")){const i=e.indexOf("tsx-file=");if(i!==-1){const a=e.indexOf("?",i);return e.slice(i+9,a!==-1?a:void 0)}}const o=e.indexOf("?");if(o!==-1&&(e=e.slice(0,o)),e.startsWith(t.fileUrlPrefix)&&(e=E.fileURLToPath(e)),t.tsconfigPathsMatcher&&!t.isRelativePath(e)&&!s?.filename?.includes(M)){const i=t.tsconfigPathsMatcher(e);for(const a of i){const u=v(a,s,r,c);if(u)return u;try{return m(a,s,r,c)}catch{}}}const n=v(e,s,r,c);return n||m(e,s,r,c)},O=()=>{const{sourceMapsEnabled:e}=process,{_extensions:s,_resolveFilename:r}=l;return t.loadTsconfig(process.env.TSX_TSCONFIG_PATH),process.setSourceMapsEnabled(!0),l._extensions=f,l._resolveFilename=_,()=>{e===!1&&process.setSourceMapsEnabled(!1),l._extensions=s,l._resolveFilename=r}};exports.register=O,exports.resolveFilename=_;
