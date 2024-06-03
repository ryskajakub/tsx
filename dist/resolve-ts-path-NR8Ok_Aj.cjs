"use strict";var i=require("node:path"),o=require("get-tsconfig");exports.fileMatcher=void 0,exports.tsconfigPathsMatcher=void 0,exports.allowJs=!1;const p=s=>{let e=null;if(s){const t=i.resolve(s);e={path:t,config:o.parseTsconfig(t)}}else{try{e=o.getTsconfig()}catch(t){console.warn("(node:63971) [DEP0025] DeprecationWarning: sys is deprecated. Use util instead.",t.message)}if(!e)return}exports.fileMatcher=o.createFilesMatcher(e),exports.tsconfigPathsMatcher=o.createPathsMatcher(e),exports.allowJs=e?.config.compilerOptions?.allowJs??!1},h=`
//# sourceMappingURL=data:application/json;base64,`,u=()=>process.sourceMapsEnabled??!0,g=({code:s,map:e})=>s+h+Buffer.from(JSON.stringify(e),"utf8").toString("base64"),x=s=>{const e=s.indexOf(":");if(e!==-1)return s.slice(0,e)},a=s=>s[0]==="."&&(s[1]==="/"||s[1]==="."||s[2]==="/"),P=s=>a(s)||i.isAbsolute(s),d=s=>{if(P(s))return!0;const e=x(s);return e&&e!=="node"},M="file://",j=/\.([cm]?ts|[tj]sx)($|\?)/,m=/\.json($|\?)/,v=/\/(?:$|\?)/,n=Object.create(null);n[".js"]=[".ts",".tsx",".js",".jsx"],n[".jsx"]=[".tsx",".ts",".jsx",".js"],n[".cjs"]=[".cts"],n[".mjs"]=[".mts"];const y=s=>{const[e,t]=s.split("?"),c=i.extname(e),r=n[c];if(r){const l=e.slice(0,-c.length);return r.map(f=>l+f+(t?`?${t}`:""))}};exports.fileUrlPrefix=M,exports.inlineSourceMap=g,exports.isDirectoryPattern=v,exports.isJsonPattern=m,exports.isRelativePath=a,exports.loadTsconfig=p,exports.requestAcceptsQuery=d,exports.resolveTsPath=y,exports.shouldApplySourceMap=u,exports.tsExtensionsPattern=j;
