import{c as f}from"./config-be93d5c6.js";import{_ as h,r,A as p,o as c,c as g,x as m,y as u,w as t,b as o,e as i,t as n}from"./index-276e3b0f.js";const b={data(){return{listLoading:!1,list:[]}},created(){this.fetchData()},methods:{fetchData(){this.listLoading=!0,f().then(s=>{this.list=s.data,this.listLoading=!1})}}},x={class:"app-container"};function w(s,v,D,L,l,N){const a=r("el-table-column"),d=r("el-table"),_=p("loading");return c(),g("div",x,[m((c(),u(d,{data:l.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""},{default:t(()=>[o(a,{align:"center",label:"ID",width:"95"},{default:t(e=>[i(n(e.$index+1),1)]),_:1}),o(a,{label:"IP",align:"center"},{default:t(e=>[i(n(e.row.Ip),1)]),_:1}),o(a,{label:"NUM",align:"center"},{default:t(e=>[i(n(e.row.Num),1)]),_:1})]),_:1},8,["data"])),[[_,l.listLoading]])])}const I=h(b,[["render",w]]);export{I as default};