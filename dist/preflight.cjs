"use strict";var c=require("./pkgroll_create-require-B-Pljx_-.cjs"),u=require("node:os"),a=require("node:worker_threads"),l=require("./client-DjommMgI.cjs");require("./suppress-warnings.cjs"),require("module"),require("node:net"),require("./get-pipe-path-b8D5AZgV.cjs"),require("node:path"),require("./temporary-directory-B83uKxJF.cjs");const f=(s,n)=>{for(const e of s)process.on(e,r=>{n(r),process.listenerCount(e)===0&&process.exit(128+u.constants.signals[e])});const{listenerCount:i,listeners:t}=process;process.listenerCount=function(e){let r=Reflect.apply(i,this,arguments);return s.includes(e)&&(r-=1),r},process.listeners=function(e){const r=Reflect.apply(t,this,arguments);return s.includes(e)?r.filter(o=>o!==n):r}};a.isMainThread&&(c.require("./cjs/index.cjs"),(async()=>{const s=await l.connectingToServer;s&&f(["SIGINT","SIGTERM"],n=>{s({type:"signal",signal:n})})})());
