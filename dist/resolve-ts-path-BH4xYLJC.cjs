"use strict";var o=require("node:path"),c=require("get-tsconfig");const h=`
//# sourceMappingURL=data:application/json;base64,`,u=()=>process.sourceMapsEnabled??!0,P=({code:s,map:e})=>s+h+Buffer.from(JSON.stringify(e),"utf8").toString("base64"),t=process.env.TSX_TSCONFIG_PATH?{path:o.resolve(process.env.TSX_TSCONFIG_PATH),config:c.parseTsconfig(process.env.TSX_TSCONFIG_PATH)}:c.getTsconfig(),x=t&&c.createFilesMatcher(t),g=t&&c.createPathsMatcher(t),S=t?.config.compilerOptions?.allowJs??!1,T=s=>{const e=s.indexOf(":");if(e!==-1)return s.slice(0,e)},l=s=>s[0]==="."&&(s[1]==="/"||s[1]==="."||s[2]==="/"),M=s=>l(s)||o.isAbsolute(s),j=s=>{if(M(s))return!0;const e=T(s);return e&&e!=="node"},m="file://",v=/\.([cm]?ts|[tj]sx)($|\?)/,A=/\.json($|\?)/,d=/\/(?:$|\?)/,n=Object.create(null);n[".js"]=[".ts",".tsx",".js",".jsx"],n[".jsx"]=[".tsx",".ts",".jsx",".js"],n[".cjs"]=[".cts"],n[".mjs"]=[".mts"];const y=s=>{const[e,r]=s.split("?"),i=o.extname(e),a=n[i];if(a){const p=e.slice(0,-i.length);return a.map(f=>p+f+(r?`?${r}`:""))}};exports.allowJs=S,exports.fileMatcher=x,exports.fileUrlPrefix=m,exports.inlineSourceMap=P,exports.isDirectoryPattern=d,exports.isJsonPattern=A,exports.isRelativePath=l,exports.requestAcceptsQuery=j,exports.resolveTsPath=y,exports.shouldApplySourceMap=u,exports.tsExtensionsPattern=v,exports.tsconfigPathsMatcher=g;
