import o from"node:path";import{parseTsconfig as x,getTsconfig as g,createFilesMatcher as m,createPathsMatcher as u}from"get-tsconfig";let i,r,l=!1;const d=s=>{let e=null;if(s){const t=o.resolve(s);e={path:t,config:x(t)}}else{try{e=g()}catch(t){console.warn("(node:63971) [DEP0025] DeprecationWarning: sys is deprecated. Use util instead.",t.message)}if(!e)return}i=m(e),r=u(e),l=e?.config.compilerOptions?.allowJs??!1},j=`
//# sourceMappingURL=data:application/json;base64,`,P=()=>process.sourceMapsEnabled??!0,M=({code:s,map:e})=>s+j+Buffer.from(JSON.stringify(e),"utf8").toString("base64"),b=s=>{const e=s.indexOf(":");if(e!==-1)return s.slice(0,e)},f=s=>s[0]==="."&&(s[1]==="/"||s[1]==="."||s[2]==="/"),y=s=>f(s)||o.isAbsolute(s),S=s=>{if(y(s))return!0;const e=b(s);return e&&e!=="node"},E="file://",v=/\.([cm]?ts|[tj]sx)($|\?)/,J=/\.json($|\?)/,O=/\/(?:$|\?)/,n=Object.create(null);n[".js"]=[".ts",".tsx",".js",".jsx"],n[".jsx"]=[".tsx",".ts",".jsx",".js"],n[".cjs"]=[".cts"],n[".mjs"]=[".mts"];const T=s=>{const[e,t]=s.split("?"),a=o.extname(e),c=n[a];if(c){const p=e.slice(0,-a.length);return c.map(h=>p+h+(t?`?${t}`:""))}};export{E as a,f as b,v as c,l as d,J as e,i as f,S as g,O as h,M as i,d as l,T as r,P as s,r as t};
