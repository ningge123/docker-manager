import{b as g}from"./basic-template.54ffff0d.js";import{d,_ as p,o as c,c as l,a as f,t as $,n as F,q as E,r as i,F as w,v as S,x as B,k as A,y as k,z,A as D,b as s,w as y}from"./index.ef9f4476.js";import{i as L}from"./echarts.163ff26e.js";const I=d({props:{row:{type:Object,default:()=>({})}},setup(e){}}),O={class:"card-left"},R={class:"name"},W={class:"detail"},j={class:"card-right"};function N(e,t,u,o,r,a){return c(),l("div",{class:"card",style:E({borderColor:e.row.color})},[f("div",O,[f("div",R,$(e.row.name),1),f("div",W,$(e.row.data),1)]),f("div",j,[f("i",{class:F(e.row.icon)},null,2)])],4)}var T=p(I,[["render",N],["__scopeId","data-v-34b5518b"]]);const H=d({components:{Row:T},setup(){return{list:[{id:1,name:"\u8BBF\u95EE\u4EBA\u6570",data:"200",color:"#4e73df",icon:"sfont system-yonghu"},{id:2,name:"\u6700\u65B0\u4FE1\u606F",data:"20",color:"#1cc88a",icon:"sfont system-xiaoxi"},{id:3,name:"\u5E93\u5B58\u6570\u91CF",data:"20000",color:"#36b9cc",icon:"sfont system-shuliang_mianxing"},{id:4,name:"\u5F53\u6708\u8425\u6536",data:"20,000",color:"#f6c23e",icon:"sfont system-jindutiaoshouyidaozhang"}]}}}),M={class:"card-list"};function P(e,t,u,o,r,a){const n=i("Row");return c(),l("div",M,[(c(!0),l(w,null,S(e.list,_=>(c(),B(n,{key:_.id,row:_},null,8,["row"]))),128))])}var V=p(H,[["render",P],["__scopeId","data-v-8f78bb56"]]);const q=d({props:{option:Object},setup(e){const t=e,u=A(null);return k(()=>{const o=u.value;if(o){let r=t.option,a=L(o);a.setOption(r),z("resize",()=>a.resize()),D(()=>t.option,n=>{a.setOption(n)})}}),(o,r)=>(c(),l("div",{ref_key:"chart",ref:u,class:"chart"},null,512))}});var b=p(q,[["__scopeId","data-v-5701e7dd"]]),G=["01\u6708","02\u6708","03\u6708","04\u6708","05\u6708","06\u6708","07\u6708","08\u6708","09\u6708","10\u6708","11\u6708","12\u6708"],J=[820,932,901,934,1290,1330,1320,720,832,501,334,990],K=[720,832,501,334,990,830,720,620,732,801,1134,908],Q=[620,732,801,1134,908,930,920,820,932,901,934,1290],v=["2018\u5E74\u5B9E\u9645\u7BA1\u7406\u8D39\u7528","2019\u5E74\u9884\u7B97\u8D39\u7528","2020\u5E74\u5B9E\u9645\u4F7F\u7528\u9884\u7B97"],x=["#4D8EFF","#84BFFF","#FE9D9A"];const U={tooltip:{trigger:"axis",formatter:function(e,t,u){for(var o="",r=0;r<e.length;r++){var a=e[r],n=a.name,_=a.seriesName,m=a.value,h=a.color;r===0&&(o+=n+"<br/>"),o+="<div>",o+='<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:'+h+';"></span>',o+=_+"\uFF1A"+m+"\u4E07\u5143",o+="</div>"}return o}},grid:{top:"20%",left:"1%",right:"1%",bottom:"1%",containLabel:!0},legend:{top:"5%",data:v},xAxis:{type:"category",data:G,axisLine:{lineStyle:{type:"solid",color:"#E3E3E3",width:"2"}},axisLabel:{formatter:"{value}"},textStyle:{fontSize:12,fontFamily:"PingFang SC",fontWeight:400,lineHeight:17,color:"#646464",opacity:1},axisTick:{show:!1}},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{formatter:"{value}"},textStyle:{fontSize:12,fontFamily:"PingFang SC",fontWeight:400,lineHeight:17,color:"#979A9F",opacity:1},splitLine:{lineStyle:{type:"dashed",width:2,color:["#E3E3E3"]}}},series:[{type:"bar",name:v[1],data:J,symbolSize:9,itemStyle:{color:x[0]},lineStyle:{width:2,type:"solid"}},{type:"bar",name:v[2],data:K,symbolSize:9,itemStyle:{color:x[1]},lineStyle:{width:2,type:"solid"}},{type:"line",name:v[0],data:Q,symbolSize:9,areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#fe9d9a66"},{offset:1,color:"#fe9d9a00"}],global:!1}},color:x[2],lineStyle:{width:2,type:"solid"}}]};const X=d({components:{Chart:b},setup(){return{option:U}}}),Y={class:"box"};function Z(e,t,u,o,r,a){const n=i("Chart");return c(),l("div",Y,[s(n,{option:e.option},null,8,["option"])])}var ee=p(X,[["render",Z],["__scopeId","data-v-7bf68198"]]);const te={title:{text:"\u6D4F\u89C8\u5668\u5360\u6BD4\u53D8\u5316",subtext:"\u7EAF\u5C5E\u865A\u6784",top:10,left:10},tooltip:{trigger:"item"},legend:{type:"scroll",bottom:10,data:function(){for(var e=[],t=1;t<=28;t++)e.push(t+2e3+"");return e}()},visualMap:{top:"middle",right:10,color:["red","yellow"],calculable:!0},radar:{indicator:[{text:"IE8-",max:400},{text:"IE9+",max:400},{text:"Safari",max:400},{text:"Firefox",max:400},{text:"Chrome",max:400}]},series:function(){for(var e=[],t=1;t<=28;t++)e.push({name:"\u6D4F\u89C8\u5668\uFF08\u6570\u636E\u7EAF\u5C5E\u865A\u6784\uFF09",type:"radar",symbol:"none",lineStyle:{width:1},emphasis:{areaStyle:{color:"rgba(0,250,0,0.3)"}},data:[{value:[(40-t)*10,(38-t)*4+60,t*5+10,t*9,t*t/2],name:t+2e3+""}]});return e}()};const oe=d({components:{Chart:b},setup(){return{option:te}}}),ae={class:"box"};function ne(e,t,u,o,r,a){const n=i("Chart");return c(),l("div",ae,[s(n,{option:e.option},null,8,["option"])])}var re=p(oe,[["render",ne],["__scopeId","data-v-797af6a6"]]);const se={series:[{name:"\u8BBF\u95EE\u6765\u6E90",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:10},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"26",fontWeight:"bold",formatter:e=>e.name+`
`+e.value}},labelLine:{show:!1},data:[{value:1048,name:"\u641C\u7D22\u5F15\u64CE"},{value:735,name:"\u76F4\u63A5\u8BBF\u95EE"},{value:580,name:"\u90AE\u4EF6\u8425\u9500"},{value:484,name:"\u8054\u76DF\u5E7F\u544A"},{value:300,name:"\u89C6\u9891\u5E7F\u544A"}]}]};const ie=d({components:{Chart:b},setup(){return{option:se}}}),ue={class:"box"};function ce(e,t,u,o,r,a){const n=i("Chart");return c(),l("div",ue,[s(n,{option:e.option},null,8,["option"])])}var le=p(ie,[["render",ce],["__scopeId","data-v-2026c33e"]]);const _e=d({components:{barChart:ee,pieChart:re,circleChart:le},setup(){}});function de(e,t,u,o,r,a){const n=i("barChart"),_=i("pieChart"),m=i("el-col"),h=i("circleChart"),C=i("el-row");return c(),l("div",null,[s(n),s(C,{gutter:20},{default:y(()=>[s(m,{lg:12,md:24},{default:y(()=>[s(_)]),_:1}),s(m,{lg:12,md:24},{default:y(()=>[s(h)]),_:1})]),_:1})])}var pe=p(_e,[["render",de]]);const me=d({components:{Card:V,Charts:pe,basicTemplate:g}}),fe={class:"box"};function ve(e,t,u,o,r,a){const n=i("basic-template"),_=i("Card"),m=i("Charts");return c(),l("div",fe,[s(n),s(_),s(m)])}var be=p(me,[["render",ve],["__scopeId","data-v-197c6324"]]);export{be as default};
