"use strict";var c=require("node:path"),n=require("get-tsconfig"),l=typeof document<"u"?document.currentScript:null;const h=`
//# sourceMappingURL=data:application/json;base64,`,P=()=>process.sourceMapsEnabled??!0,m=({code:e,map:s})=>e+h+Buffer.from(JSON.stringify(s),"utf8").toString("base64");try{n.parseTsconfig(process.env.TSX_TSCONFIG_PATH)}catch(e){console.error(1111,e)}const t=process.env.TSX_TSCONFIG_PATH?{path:c.resolve(process.env.TSX_TSCONFIG_PATH),config:n.parseTsconfig(process.env.TSX_TSCONFIG_PATH)}:n.getTsconfig();console.log({file:typeof __filename>"u"?typeof document>"u"?require("url").pathToFileURL(__filename).href:l&&l.src||new URL("resolve-ts-path-BUCRjYbP.cjs",document.baseURI).href:__filename,tsconfig:t});const x=t&&n.createFilesMatcher(t),T=t&&n.createPathsMatcher(t),d=t?.config.compilerOptions?.allowJs??!1,S=e=>{const s=e.indexOf(":");if(s!==-1)return e.slice(0,s)},f=e=>e[0]==="."&&(e[1]==="/"||e[1]==="."||e[2]==="/"),g=e=>f(e)||c.isAbsolute(e),_=e=>{if(g(e))return!0;const s=S(e);return s&&s!=="node"},j="file://",v=/\.([cm]?ts|[tj]sx)($|\?)/,M=/\.json($|\?)/,y=/\/(?:$|\?)/,o=Object.create(null);o[".js"]=[".ts",".tsx",".js",".jsx"],o[".jsx"]=[".tsx",".ts",".jsx",".js"],o[".cjs"]=[".cts"],o[".mjs"]=[".mts"];const A=e=>{const[s,r]=e.split("?"),i=c.extname(s),a=o[i];if(a){const p=s.slice(0,-i.length);return a.map(u=>p+u+(r?`?${r}`:""))}};exports.allowJs=d,exports.fileMatcher=x,exports.fileUrlPrefix=j,exports.inlineSourceMap=m,exports.isDirectoryPattern=y,exports.isJsonPattern=M,exports.isRelativePath=f,exports.requestAcceptsQuery=_,exports.resolveTsPath=A,exports.shouldApplySourceMap=P,exports.tsExtensionsPattern=v,exports.tsconfigPathsMatcher=T;
