import i from"node:path";const p=`
//# sourceMappingURL=data:application/json;base64,`,x=()=>process.sourceMapsEnabled??!0,f=({code:s,map:t})=>s+p+Buffer.from(JSON.stringify(t),"utf8").toString("base64"),e=Object.create(null);e[".js"]=[".ts",".tsx",".js",".jsx"],e[".jsx"]=[".tsx",".ts",".jsx",".js"],e[".cjs"]=[".cts"],e[".mjs"]=[".mts"];const u=s=>{const[t,n]=s.split("?"),o=i.extname(t),c=e[o];if(c){const r=t.slice(0,-o.length);return c.map(l=>r+l+(n?`?${n}`:""))}},h=s=>{const t=s.indexOf(":");if(t!==-1)return s.slice(0,t)},a=s=>s[0]==="."&&(s[1]==="/"||s[1]==="."||s[2]==="/"),m=s=>a(s)||i.isAbsolute(s),j=s=>{if(m(s))return!0;const t=h(s);return t&&t!=="node"},b="file://";export{a,j as b,b as f,f as i,u as r,x as s};
