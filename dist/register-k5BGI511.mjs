import c from"node:module";import{MessageChannel as d}from"node:worker_threads";import{pathToFileURL as f}from"node:url";const u=(r,t,e)=>{const o=t.startsWith("file://")?t:f(t),s=new URL(r,o);return s.searchParams.set("tsx-namespace",e),s.toString()},l=r=>(t,e)=>{if(!e)throw new Error("The current file path (import.meta.url) must be provided in the second argument of tsImport()");return import(u(t,e,r))},g=r=>{if(!c.register)throw new Error(`This version of Node.js (${process.version}) does not support module.register(). Please upgrade to Node v18.9 or v20.6 and above.`);const{sourceMapsEnabled:t}=process;process.setSourceMapsEnabled(!0);const{port1:e,port2:o}=new d;c.register(`./esm/index.mjs?${Date.now()}`,{parentURL:import.meta.url,data:{namespace:r?.namespace,port:o},transferList:[o]});const s=r?.onImport,a=s&&(p=>{p.type==="load"&&s(p.url)});a&&(e.on("message",a),e.unref());const n=()=>(t===!1&&process.setSourceMapsEnabled(!1),a&&e.off("message",a),e.postMessage("deactivate"),new Promise(p=>{const i=m=>{m.type==="deactivated"&&(p(),e.off("message",i))};e.on("message",i)}));return r?.namespace&&(n.import=l(r.namespace),n.unregister=n),n};export{g as r};
