import{d as a,u as c,g as p,_ as u,o as i,c as _}from"./index-276e3b0f.js";const d=a({name:"Redirect",setup(){const{currentRoute:t,replace:r}=c(),{params:n,query:o}=p(t),{path:e}=n,s=Array.isArray(e)?e.join("/"):e;return r({path:"/"+s,query:o}),{}}});function f(t,r,n,o,e,s){return i(),_("div")}const l=u(d,[["render",f]]);export{l as default};