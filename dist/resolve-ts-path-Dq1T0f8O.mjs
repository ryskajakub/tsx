import o from"node:path";import{parseTsconfig as x,getTsconfig as m,createFilesMatcher as g,createPathsMatcher as u}from"get-tsconfig";let i,r,l=!1;const j=s=>{let t=null;if(s){const e=o.resolve(s);t={path:e,config:x(e)}}else try{t=m()}catch(e){console.warn(e)}t&&(i=g(t),r=u(t),l=t?.config.compilerOptions?.allowJs??!1)},P=`
//# sourceMappingURL=data:application/json;base64,`,d=()=>process.sourceMapsEnabled??!0,M=({code:s,map:t})=>s+P+Buffer.from(JSON.stringify(t),"utf8").toString("base64"),b=s=>{const t=s.indexOf(":");if(t!==-1)return s.slice(0,t)},f=s=>s[0]==="."&&(s[1]==="/"||s[1]==="."||s[2]==="/"),S=s=>f(s)||o.isAbsolute(s),y=s=>{if(S(s))return!0;const t=b(s);return t&&t!=="node"},v="file://",E=/\.([cm]?ts|[tj]sx)($|\?)/,J=/\.json($|\?)/,O=/\/(?:$|\?)/,n=Object.create(null);n[".js"]=[".ts",".tsx",".js",".jsx"],n[".jsx"]=[".tsx",".ts",".jsx",".js"],n[".cjs"]=[".cts"],n[".mjs"]=[".mts"];const T=s=>{const[t,e]=s.split("?"),c=o.extname(t),a=n[c];if(a){const p=t.slice(0,-c.length);return a.map(h=>p+h+(e?`?${e}`:""))}};export{v as a,f as b,E as c,l as d,J as e,i as f,y as g,O as h,M as i,j as l,T as r,d as s,r as t};
