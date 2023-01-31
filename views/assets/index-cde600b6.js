import{q as S,_ as v,o as g,c as y,t as d,r as p,y as k,w as u,b as r,a as i,e as f,d as x,k as T,B as A,C as L,F as P,j as C}from"./index-9ce8156e.js";import{$ as R}from"./events-a8aa1a18.js";import{g as E}from"./task-d7b7d0ae.js";import{i as j}from"./echarts-1f308729.js";import{E as I}from"./Refresh-82e1d0d8.js";function z(){return S({url:"/mgr/dashboardSize",method:"get"})}function M(e){return S({url:"/mgr/containers/update",method:"post",data:e})}function B(e){return S({url:"/mgr/stats/update",method:"post",data:e})}let $=0;const D="webkit moz ms o".split(" ");let m,_;const G=typeof window>"u";if(G)m=function(){},_=function(){};else{m=window.requestAnimationFrame,_=window.cancelAnimationFrame;let e;for(let t=0;t<D.length&&!(m&&_);t++)e=D[t],m=m||window[e+"RequestAnimationFrame"],_=_||window[e+"CancelAnimationFrame"]||window[e+"CancelRequestAnimationFrame"];(!m||!_)&&(m=function(t){const a=new Date().getTime(),n=Math.max(0,16-(a-$)),s=window.setTimeout(()=>{t(a+n)},n);return $=a+n,s},_=function(t){window.clearTimeout(t)})}const W={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator(e){return e>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default(e,t,a,n){return a*(-Math.pow(2,-10*e/n)+1)*1024/1023+t}}},data(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown(){return this.startVal>this.endVal}},watch:{startVal(){this.autoplay&&this.start()},endVal(){this.autoplay&&this.start()}},mounted(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=m(this.count)},pauseResume(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause(){_(this.rAF)},resume(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,m(this.count)},reset(){this.startTime=null,_(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count(e){this.startTime||(this.startTime=e),this.timestamp=e;const t=e-this.startTime;this.remaining=this.localDuration-t,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(t,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(t,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(t/this.localDuration):this.printVal=this.localStartVal+(this.endVal-this.localStartVal)*(t/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),t<this.localDuration?this.rAF=m(this.count):this.$emit("callback")},isNumber(e){return!isNaN(parseFloat(e))},formatNumber(e){e=e.toFixed(this.decimals),e+="";const t=e.split(".");let a=t[0];const n=t.length>1?this.decimal+t[1]:"",s=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;s.test(a);)a=a.replace(s,"$1"+this.separator+"$2");return this.prefix+a+n+this.suffix}},destroyed(){_(this.rAF)}};function K(e,t,a,n,s,l){return g(),y("span",null,d(s.displayValue),1)}const w=v(W,[["render",K]]);function H(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),a.push.apply(a,n)}return a}w.unmounted=w.destroyed,Reflect.deleteProperty(w,"destroyed");var J=function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?F(Object(a),!0).forEach(function(n){H(e,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}({name:"CountTo",emits:["callback","mountedCallback"]},w);const Q={components:{CountTo:J},data(){return{dashboradSize:{serverConnected:0,server:0,container:1110,containerRun:0,image:0,task:0,app:0,follow:0}}},created(){this.fetchData()},mounted(){},methods:{handleSetLineChartData(e){R(this,"handleSetLineChartData",e)},fetchData(){this.listLoading=!0,z().then(e=>{this.dashboradSize=e.data,this.listLoading=!1})}},emits:["handleSetLineChartData"]},U={class:"card-panel-icon-wrapper icon-people"},X={class:"card-panel-description"},Y={class:"card-panel-text"},Z={class:"card-panel-icon-wrapper icon-message"},ee={class:"card-panel-description"},te={class:"card-panel-text"},ae={class:"card-panel-icon-wrapper icon-money"},ne={class:"card-panel-description"},se={class:"card-panel-text"},re={class:"card-panel-icon-wrapper icon-image"},ie={class:"card-panel-description"},oe={class:"card-panel-text"},le={class:"card-panel-icon-wrapper icon-app"},ce={class:"card-panel-description"},de={class:"card-panel-text"},pe={class:"card-panel-icon-wrapper icon-log"},ue={class:"card-panel-description"},he={class:"card-panel-text"};function me(e,t,a,n,s,l){const o=p("svg-icon"),h=p("count-to"),b=p("el-divider"),c=p("el-col"),q=p("el-row");return g(),k(q,{gutter:40,class:"panel-group"},{default:u(()=>[r(c,{xs:12,sm:12,lg:6,class:"card-panel-col",style:{display:"none"}},{default:u(()=>[i("div",{class:"card-panel",onClick:t[0]||(t[0]=V=>l.handleSetLineChartData("Server"))},[i("div",U,[r(o,{"icon-class":"peoples","class-name":"card-panel-icon"})]),i("div",X,[i("div",Y,d(e.$t("主机")),1),f(" "+d(e.$t("在线"))+" ",1),r(h,{startVal:0,endVal:s.dashboradSize.serverConnected,duration:3e3,class:"card-panel-num"},null,8,["endVal"]),r(b,{direction:"vertical"}),f(" "+d(e.$t("总计"))+" ",1),r(h,{startVal:0,endVal:s.dashboradSize.server,duration:3e3,class:"card-panel-num"},null,8,["endVal"])])])]),_:1}),r(c,{xs:12,sm:12,lg:6,class:"card-panel-col",style:{display:"none"}},{default:u(()=>[i("div",{class:"card-panel",onClick:t[1]||(t[1]=V=>l.handleSetLineChartData("Container"))},[i("div",Z,[r(o,{"icon-class":"message","class-name":"card-panel-icon"})]),i("div",ee,[i("div",te,d(e.$t("容器")),1),f(" "+d(e.$t("运行中"))+" ",1),r(h,{startVal:0,endVal:s.dashboradSize.containerRun,duration:3e3,class:"card-panel-num"},null,8,["endVal"]),r(b,{direction:"vertical"}),f(" "+d(e.$t("已停止"))+" ",1),r(h,{startVal:0,endVal:s.dashboradSize.container-s.dashboradSize.containerRun,duration:3e3,class:"card-panel-num",style:{color:"red"}},null,8,["endVal"])])])]),_:1}),r(c,{xs:12,sm:12,lg:6,class:"card-panel-col"},{default:u(()=>[i("div",{class:"card-panel",onClick:t[2]||(t[2]=V=>l.handleSetLineChartData("Task"))},[i("div",ae,[r(o,{"icon-class":"money","class-name":"card-panel-icon"})]),i("div",ne,[i("div",se,d(e.$t("任务")),1),r(h,{startVal:0,endVal:s.dashboradSize.task,duration:3e3,class:"card-panel-num"},null,8,["endVal"])])])]),_:1}),r(c,{xs:12,sm:12,lg:6,class:"card-panel-col"},{default:u(()=>[i("div",{class:"card-panel",onClick:t[3]||(t[3]=V=>l.handleSetLineChartData("Image"))},[i("div",re,[r(o,{"icon-class":"shopping","class-name":"card-panel-icon"})]),i("div",ie,[i("div",oe,d(e.$t("镜像")),1),r(h,{startVal:0,endVal:s.dashboradSize.image,duration:10,class:"card-panel-num"},null,8,["endVal"])])])]),_:1}),r(c,{xs:12,sm:12,lg:6,class:"card-panel-col"},{default:u(()=>[i("div",{class:"card-panel",onClick:t[4]||(t[4]=V=>l.handleSetLineChartData("App"))},[i("div",le,[r(o,{"icon-class":"shopping","class-name":"card-panel-icon"})]),i("div",ce,[i("div",de,d(e.$t("应用")),1),r(h,{startVal:0,endVal:s.dashboradSize.app,duration:10,class:"card-panel-num"},null,8,["endVal"])])])]),_:1}),r(c,{xs:12,sm:12,lg:6,class:"card-panel-col"},{default:u(()=>[i("div",{class:"card-panel",onClick:t[5]||(t[5]=V=>l.handleSetLineChartData("follow"))},[i("div",pe,[r(o,{"icon-class":"shopping","class-name":"card-panel-icon"})]),i("div",ue,[i("div",he,d(e.$t("实时日志开启数量")),1),r(h,{startVal:0,endVal:s.dashboradSize.follow,duration:3e3,class:"card-panel-num"},null,8,["endVal"])])])]),_:1})]),_:1})}const _e=v(Q,[["render",me],["__scopeId","data-v-f5efab9a"]]),fe={data(){return{list:null}},created(){this.fetchData()},methods:{orderNoFilter_filter(e){return e},statusFilter_filter(e){return{"000000":"正在进行",100200:"完成",100100:"失败"}[e]},fetchData(){E({currentPage:1,pageSize:10,total:0}).then(t=>{this.list=t.data.list})},statusFilter(e){return{"000000":this.$t("正在进行"),100200:this.$t("完成"),100100:this.$t("失败")}[e]}}};function ve(e,t,a,n,s,l){const o=p("el-table-column"),h=p("el-tag"),b=p("el-table");return g(),k(b,{data:s.list,style:{width:"100%","padding-top":"15px","margin-left":"15px"}},{default:u(()=>[r(o,{label:e.$t("任务"),"min-width":"200"},{default:u(c=>[f(d(l.orderNoFilter_filter(c.row.Ch)),1)]),_:1},8,["label"]),r(o,{label:e.$t("目标主机"),width:"195",align:"center"},{default:u(c=>[f(d(c.row.ServerName),1)]),_:1},8,["label"]),r(o,{label:"Status",width:"100",align:"center"},{default:u(({row:c})=>[r(h,{type:l.statusFilter_filter(c.Code)},{default:u(()=>[f(d(l.statusFilter(c.Code)),1)]),_:2},1032,["type"])]),_:1})]),_:1},8,["data"])}const ge=v(fe,[["render",ve]]),be=x({__name:"index",props:{option:Object},setup(e){const t=e,a=T(null);return A(()=>{const n=a.value;if(n){let s=t.option,l=j(n);l.setOption(s),L("resize",()=>l.resize()),P(()=>t.option,o=>{l.setOption(o)},{deep:!0})}}),(n,s)=>(g(),y("div",{ref_key:"chart",ref:a,class:"chart"},null,512))}});const N=v(be,[["__scopeId","data-v-ee55f80e"]]),Ve={title:{text:"浏览器占比变化",subtext:"纯属虚构",top:10,left:10},tooltip:{trigger:"item"},legend:{type:"scroll",bottom:10,data:function(){for(var e=[],t=1;t<=28;t++)e.push(t+2e3+"");return e}()},visualMap:{top:"middle",right:10,color:["red","yellow"],calculable:!0},radar:{indicator:[{text:"IE8-",max:400},{text:"IE9+",max:400},{text:"Safari",max:400},{text:"Firefox",max:400},{text:"Chrome",max:400}]},series:function(){for(var e=[],t=1;t<=28;t++)e.push({name:"浏览器（数据纯属虚构）",type:"radar",symbol:"none",lineStyle:{width:1},emphasis:{areaStyle:{color:"rgba(0,250,0,0.3)"}},data:[{value:[(40-t)*10,(38-t)*4+60,t*5+10,t*9,t*t/2],name:t+2e3+""}]});return e}()},ye=x({components:{Chart:N},setup(){return{options:C(Ve)}}});const we={class:"box"};function Ce(e,t,a,n,s,l){const o=p("Chart");return g(),y("div",we,[r(o,{option:e.options},null,8,["option"])])}const Se=v(ye,[["render",Ce],["__scopeId","data-v-3998eb6e"]]);function O(e,t){return{title:{text:e},series:[{name:e,type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:2,borderColor:"#fff",borderWidth:10},color:["#0cd505","#ec0527"],label:{formatter:n=>n.name+" "+n.value},emphasis:{label:{show:!0,fontSize:"15",fontWeight:"bold",formatter:n=>n.name+" "+n.value}},data:t}]}}const xe=x({components:{Chart:N},setup(){const e=C(O("主机",[{value:0,name:"在线"},{value:0,name:"离线"}])),t=C(O("容器",[{value:0,name:"运行中"},{value:0,name:"已停止"}])),a=T({serverConnected:0,server:0,container:1110,containerRun:0,image:0,task:0,app:0,follow:0});return z().then(n=>{a.value=n.data;const s=a.value;e.series[0].data=[{value:s.serverConnected,name:"在线"},{value:s.server-s.serverConnected,name:"离线"}],t.series[0].data=[{value:s.containerRun,name:"运行中"},{value:s.container-s.containerRun,name:"已停止"}]}),{serverOptions:e,containerOptions:t}}});const $e={class:"chart-container"},De={class:"box"},Fe={class:"box"};function Oe(e,t,a,n,s,l){const o=p("Chart");return g(),y("div",$e,[i("div",De,[r(o,{option:e.serverOptions},null,8,["option"])]),i("div",Fe,[r(o,{option:e.containerOptions},null,8,["option"])])])}const ke=v(xe,[["render",Oe],["__scopeId","data-v-b697cde4"]]);const Te={name:"DashboardAdmin",components:{CircleChart:ke,PieChart:Se,PanelGroup:_e,TransactionTable:ge},data(){return{loading:!1,ElIconRefresh:I}},methods:{refreshContainerList(){this.loading=!0,M().then(e=>{this.loading=!1,this.$message(this.$t("刷新成功"))})},refreshContainerStats(){this.loading=!0,B().then(e=>{this.loading=!1,this.$message(this.$t("刷新成功"))})}}},ze={class:"dashboard-editor-container"};function Ne(e,t,a,n,s,l){const o=p("CircleChart"),h=p("panel-group"),b=p("transaction-table"),c=p("el-row");return g(),y("div",ze,[r(o),r(h),r(c,{style:{background:"#fff",padding:"16px 16px 0","margin-bottom":"32px"}},{default:u(()=>[r(b)]),_:1})])}const Ee=v(Te,[["render",Ne],["__scopeId","data-v-438932e0"]]);export{Ee as default};