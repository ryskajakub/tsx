"use strict";var a=require("node:module"),y=require("node:fs"),d=require("./index-DTCJysGI.cjs"),o=require("./path-utils-iINuWiLU.cjs"),p=require("./client-DjommMgI.cjs"),h=require("node:path"),E=require("node:url");const M=e=>{if(e.includes("import")||e.includes("export"))try{return d.parseEsm(e)[3]}catch{return!0}return!1},j=[".cts",".mts",".ts",".tsx",".jsx"],F=[".js",".cjs",".mjs"],f=Object.assign(Object.create(null),a._extensions),S=f[".js"],x=(e,s)=>{p.parent?.send&&p.parent.send({type:"dependency",path:s});const n=j.some(t=>s.endsWith(t)),c=F.some(t=>s.endsWith(t));if(!n&&!c)return S(e,s);let r=y.readFileSync(s,"utf8");if(s.endsWith(".cjs")){const t=d.transformDynamicImport(s,r);t&&(r=o.shouldApplySourceMap()?o.inlineSourceMap(t):t.code)}else if(n||M(r)){const t=d.transformSync(r,s,{tsconfigRaw:o.fileMatcher?.(s)});r=o.shouldApplySourceMap()?o.inlineSourceMap(t):t.code}e._compile(r,s)};[".js",".ts",".tsx",".jsx"].forEach(e=>{f[e]=x}),Object.defineProperty(f,".mjs",{value:x,enumerable:!1});const b=/\.[cm]?tsx?$/,T=`${h.sep}node_modules${h.sep}`,u=a._resolveFilename.bind(a),v=(e,s,n,c)=>{const r=o.resolveTsPath(e);if(s?.filename&&(b.test(s.filename)||o.allowJs)&&r)for(const t of r)try{return u(t,s,n,c)}catch(l){const{code:i}=l;if(i!=="MODULE_NOT_FOUND"&&i!=="ERR_PACKAGE_PATH_NOT_EXPORTED")throw l}},_=(e,s,n,c)=>{const r=e.indexOf("?");if(r!==-1&&(e=e.slice(0,r)),e.startsWith(o.fileUrlPrefix)&&(e=E.fileURLToPath(e)),o.tsconfigPathsMatcher&&!o.isRelativePath(e)&&!s?.filename?.includes(T)){const l=o.tsconfigPathsMatcher(e);for(const i of l){const m=v(i,s,n,c);if(m)return m;try{return u(i,s,n,c)}catch{}}}const t=v(e,s,n,c);return t||u(e,s,n,c)},O=()=>{const{sourceMapsEnabled:e}=process,{_extensions:s,_resolveFilename:n}=a;return process.setSourceMapsEnabled(!0),a._extensions=f,a._resolveFilename=_,()=>{e===!1&&process.setSourceMapsEnabled(!1),a._extensions=s,a._resolveFilename=n}};exports.register=O,exports.resolveFilename=_;
