import c from"node:path";import{parseTsconfig as l,getTsconfig as h,createFilesMatcher as x,createPathsMatcher as m}from"get-tsconfig";const u=`
//# sourceMappingURL=data:application/json;base64,`,S=()=>process.sourceMapsEnabled??!0,T=({code:s,map:e})=>s+u+Buffer.from(JSON.stringify(e),"utf8").toString("base64"),t=process.env.TSX_TSCONFIG_PATH?{path:c.resolve(process.env.TSX_TSCONFIG_PATH),config:l(process.env.TSX_TSCONFIG_PATH)}:h(),g=t&&x(t),P=t&&m(t),n=Object.create(null);n[".js"]=[".ts",".tsx",".js",".jsx"],n[".jsx"]=[".tsx",".ts",".jsx",".js"],n[".cjs"]=[".cts"],n[".mjs"]=[".mts"];const j=s=>{const[e,o]=s.split("?"),a=c.extname(e),i=n[a];if(i){const p=e.slice(0,-a.length);return i.map(f=>p+f+(o?`?${o}`:""))}},M=s=>{const e=s.indexOf(":");if(e!==-1)return s.slice(0,e)},r=s=>s[0]==="."&&(s[1]==="/"||s[1]==="."||s[2]==="/"),b=s=>r(s)||c.isAbsolute(s),d=s=>{if(b(s))return!0;const e=M(s);return e&&e!=="node"},v="file://";export{v as a,r as b,t as c,d,g as f,T as i,j as r,S as s,P as t};
