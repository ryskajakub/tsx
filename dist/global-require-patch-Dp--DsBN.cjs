"use strict";var a=require("node:module"),t=require("./resolve-ts-path-VlOGJlUT.cjs"),y=require("node:fs"),d=require("./index-DTCJysGI.cjs"),p=require("./client-DjommMgI.cjs"),v=require("node:path"),E=require("node:url");const T=s=>{if(!s.includes("import")&&!s.includes("export"))return!1;try{return d.parseEsm(s)[3]}catch{return!0}},M=[".cts",".mts",".ts",".tsx",".jsx"],S=[".js",".cjs",".mjs"],f=Object.assign(Object.create(null),a._extensions),j=f[".js"],x=(s,e)=>{console.log("transformer",{module:s,filePath:e}),p.parent?.send&&p.parent.send({type:"dependency",path:e});const o=M.some(r=>e.endsWith(r)),c=S.some(r=>e.endsWith(r));if(!o&&!c)return j(s,e);let n=y.readFileSync(e,"utf8");if(e.endsWith(".cjs")){const r=d.transformDynamicImport(e,n);r&&(n=t.shouldApplySourceMap()?t.inlineSourceMap(r):r.code)}else if(o||T(n)){const r=d.transformSync(n,e,{tsconfigRaw:t.fileMatcher?.(e)});n=t.shouldApplySourceMap()?t.inlineSourceMap(r):r.code}console.log({filePath:e,code:n}),s._compile(n,e)};[".js",".ts",".tsx",".jsx"].forEach(s=>{f[s]=x}),Object.defineProperty(f,".mjs",{value:x,enumerable:!1});const F=`${v.sep}node_modules${v.sep}`,u=a._resolveFilename.bind(a),_=(s,e,o,c)=>{const n=t.resolveTsPath(s);if(e?.filename&&(t.tsExtensionsPattern.test(e.filename)||t.allowJs)&&n)for(const r of n)try{return u(r,e,o,c)}catch(l){const{code:i}=l;if(i!=="MODULE_NOT_FOUND"&&i!=="ERR_PACKAGE_PATH_NOT_EXPORTED")throw l}},h=(s,e,o,c)=>{const n=s.indexOf("?");if(n!==-1&&(s=s.slice(0,n)),s.startsWith(t.fileUrlPrefix)&&(s=E.fileURLToPath(s)),t.tsconfigPathsMatcher&&!t.isRelativePath(s)&&!e?.filename?.includes(F)){const l=t.tsconfigPathsMatcher(s);for(const i of l){const m=_(i,e,o,c);if(m)return m;try{return u(i,e,o,c)}catch{}}}const r=_(s,e,o,c);return r||u(s,e,o,c)},b=()=>{const{sourceMapsEnabled:s}=process,{_extensions:e,_resolveFilename:o}=a;return t.loadTsconfig(process.env.TSX_TSCONFIG_PATH),process.setSourceMapsEnabled(!0),a._extensions=f,a._resolveFilename=h,()=>{s===!1&&process.setSourceMapsEnabled(!1),a._extensions=e,a._resolveFilename=o}};exports.register=b,exports.resolveFilename=h;
