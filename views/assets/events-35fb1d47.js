const p=new WeakMap;function c(r){let o=p.get(r);return o||p.set(r,o=Object.create(null)),o}function i(r,o,u){if(Array.isArray(o))o.forEach(t=>i(r,t,u));else{const t=c(r);(t[o]||(t[o]=[])).push(u)}return r}function y(r,o,u){const t=(...f)=>{s(r,o,t),u.call(r,...f)};return t.fn=u,i(r,o,t),r}function s(r,o,u){const t=r;if(!o)return p.set(r,Object.create(null)),t;if(Array.isArray(o))return o.forEach(l=>s(r,l,u)),t;const f=c(r),e=f[o];return e?u?(f[o]=e.filter(l=>!(l===u||l.fn===u)),t):(f[o]=void 0,t):t}function $(r,o,...u){r&&r.$emit&&r.$emit(o,...u);const t=c(r)[o];return t&&t.map(f=>f.apply(r,u)),r}export{y as $,$ as a};
