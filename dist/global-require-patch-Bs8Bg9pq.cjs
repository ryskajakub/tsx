"use strict";var a=require("node:module"),t=require("./resolve-ts-path-VlOGJlUT.cjs"),y=require("node:fs"),E=require("node:url");require("esbuild"),require("node:crypto");var u=require("./index-DTCJysGI.cjs"),p=require("./client-DjommMgI.cjs"),h=require("node:path");require("get-tsconfig");const T=e=>{if(!e.includes("import")&&!e.includes("export"))return!1;try{return u.parseEsm(e)[3]}catch{return!0}},j=(e,s,n)=>{if(e.endsWith(".cjs")){const r=u.transformDynamicImport(e,s);r&&(s=t.shouldApplySourceMap()?t.inlineSourceMap(r):r.code)}else if(n||T(s)){const r=u.transformSync(s,e,{tsconfigRaw:t.fileMatcher?.(e)});s=t.shouldApplySourceMap()?t.inlineSourceMap(r):r.code}},M=[".cts",".mts",".ts",".tsx",".jsx"],S=[".js",".cjs",".mjs"],f=Object.assign(Object.create(null),a._extensions),F=f[".js"],v=(e,s)=>{p.parent?.send&&p.parent.send({type:"dependency",path:s});const n=M.some(c=>s.endsWith(c)),r=S.some(c=>s.endsWith(c));if(!n&&!r)return F(e,s);let o=y.readFileSync(s,"utf8");o=j(s,o,n),e._compile(o,s)};[".js",".ts",".tsx",".jsx"].forEach(e=>{f[e]=v}),Object.defineProperty(f,".mjs",{value:v,enumerable:!1});const b=`${h.sep}node_modules${h.sep}`,d=a._resolveFilename.bind(a),x=(e,s,n,r)=>{const o=t.resolveTsPath(e);if(s?.filename&&(t.tsExtensionsPattern.test(s.filename)||t.allowJs)&&o)for(const c of o)try{return d(c,s,n,r)}catch(l){const{code:i}=l;if(i!=="MODULE_NOT_FOUND"&&i!=="ERR_PACKAGE_PATH_NOT_EXPORTED")throw l}},_=(e,s,n,r)=>{const o=e.indexOf("?");if(o!==-1&&(e=e.slice(0,o)),e.startsWith(t.fileUrlPrefix)&&(e=E.fileURLToPath(e)),t.tsconfigPathsMatcher&&!t.isRelativePath(e)&&!s?.filename?.includes(b)){const l=t.tsconfigPathsMatcher(e);for(const i of l){const m=x(i,s,n,r);if(m)return m;try{return d(i,s,n,r)}catch{}}}const c=x(e,s,n,r);return c||d(e,s,n,r)},O=()=>{const{sourceMapsEnabled:e}=process,{_extensions:s,_resolveFilename:n}=a;return t.loadTsconfig(process.env.TSX_TSCONFIG_PATH),process.setSourceMapsEnabled(!0),a._extensions=f,a._resolveFilename=_,()=>{e===!1&&process.setSourceMapsEnabled(!1),a._extensions=s,a._resolveFilename=n}};exports.register=O,exports.resolveFilename=_;
