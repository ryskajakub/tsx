"use strict";var u=require("node:module"),f=require("node:worker_threads"),m=require("node:url"),d=typeof document<"u"?document.currentScript:null;const l=(r,t,e)=>{const o=t.startsWith("file://")?t:m.pathToFileURL(t),s=new URL(r,o);return s.searchParams.set("tsx-namespace",e),s.toString()},g=r=>(t,e)=>{if(!e)throw new Error("The current file path (import.meta.url) must be provided in the second argument of tsImport()");return import(l(t,e,r))},v=r=>{if(!u.register)throw new Error(`This version of Node.js (${process.version}) does not support module.register(). Please upgrade to Node v18.9 or v20.6 and above.`);const{sourceMapsEnabled:t}=process;process.setSourceMapsEnabled(!0);const{port1:e,port2:o}=new f.MessageChannel;u.register(`./esm/index.mjs?${Date.now()}`,{parentURL:typeof document>"u"?require("url").pathToFileURL(__filename).href:d&&d.src||new URL("register-BIOvi1NN.cjs",document.baseURI).href,data:{port:o,namespace:r?.namespace,tsconfig:r?.tsconfig},transferList:[o]});const s=r?.onImport,n=s&&(c=>{c.type==="load"&&s(c.url)});n&&(e.on("message",n),e.unref());const a=()=>(t===!1&&process.setSourceMapsEnabled(!1),n&&e.off("message",n),e.postMessage("deactivate"),new Promise(c=>{const i=p=>{p.type==="deactivated"&&(c(),e.off("message",i))};e.on("message",i)}));return r?.namespace&&(a.import=g(r.namespace),a.unregister=a),a};exports.register=v;
