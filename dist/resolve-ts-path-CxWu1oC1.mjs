import o from"node:path";import{parseTsconfig as g,getTsconfig as x,createFilesMatcher as m,createPathsMatcher as u}from"get-tsconfig";import{W as j}from"./index-CQFEY09x.mjs";let r,i,l=!1;const d=j("--no-warnings",Boolean)||!!process.env.NODE_NO_WARNINGS,P=s=>{let t=null;if(s){const e=o.resolve(s);t={path:e,config:g(e)}}else{try{t=x()}catch(e){d||e instanceof Error&&console.warn(`(tsx:${process.pid}) [-----] TsconfigWarning:`,e.message)}if(!t)return}r=m(t),i=u(t),l=t?.config.compilerOptions?.allowJs??!1},M=`
//# sourceMappingURL=data:application/json;base64,`,b=()=>process.sourceMapsEnabled??!0,S=({code:s,map:t})=>s+M+Buffer.from(JSON.stringify(t),"utf8").toString("base64"),E=s=>{const t=s.indexOf(":");if(t!==-1)return s.slice(0,t)},f=s=>s[0]==="."&&(s[1]==="/"||s[1]==="."||s[2]==="/"),O=s=>f(s)||o.isAbsolute(s),v=s=>{if(O(s))return!0;const t=E(s);return t&&t!=="node"},y="file://",N=/\.([cm]?ts|[tj]sx)($|\?)/,T=/\.json($|\?)/,$=/\/(?:$|\?)/,n=Object.create(null);n[".js"]=[".ts",".tsx",".js",".jsx"],n[".jsx"]=[".tsx",".ts",".jsx",".js"],n[".cjs"]=[".cts"],n[".mjs"]=[".mts"];const w=s=>{const[t,e]=s.split("?"),a=o.extname(t),c=n[a];if(c){const p=t.slice(0,-a.length);return c.map(h=>p+h+(e?`?${e}`:""))}};export{y as a,f as b,N as c,l as d,T as e,r as f,v as g,$ as h,S as i,P as l,w as r,b as s,i as t};
