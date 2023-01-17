import{g as _}from"./container-4fcbe6b7.js";import{a as w,g as S}from"./logs-70e304b0.js";import{_ as I,W as L,D as v,r as a,o as c,c as d,b as i,w as f,e as h,t as r,a as p,F as y,C,z as x}from"./index-99971903.js";import{E as D}from"./Search-9e8be468.js";const O={data(){return{websock:null,listLogs:[],loading:!0,showSystemTime:!1,isConnected:!1,res:{containerInfos:[]},form:{containerId:""},ElIconSearch:D}},created(){this.fetchData()},destroyed:function(){this.disconnectLog()},beforeUpdate(){this.$arrRefs&&(this.$arrRefs={})},methods:{statusFilter_filter(e){return{published:"success",draft:"gray",deleted:"danger"}[e]},fetchData(){this.loading=!0,_().then(e=>{this.res.containerInfos=e.data;for(const s in this.res.containerInfos){const o=this.res.containerInfos[s];o.children=o.containers,o.label=o.serverName,o.value=o.serverName;for(const g in o.children){const t=o.children[g];t.label=t.Name+" - "+t.State,t.value=t.Id,o.children[g]=t}this.res.containerInfos[s]=o}this.loading=!1})},disconnectLog(){this.websock&&(this.websock.close(),w(this.form))},fetchLogData(){if(!this.form.containerId){this.$message(this.$t("必须选择容器"));return}this.loading=!0,this.listLogs=[{ts:"",line:this.$t("正在连接...")}],console.log("fetchLogData",this.form),S(this.form).then(e=>{this.loading=!1,e.code==="100200"?(this.list=e.data,this.initWebSocket(this.form.containerId)):(this.$message(e.msg),this.listLogs.push({ts:"",line:e.msg}))}).catch(e=>{this.loading=!1,console.log("logstart.error:",e),this.$message(e.msg),this.listLogs.push({ts:"",line:e.msg})})},initWebSocket(){console.log("location.protocol:",location);const e=L()+"/dockerMgrApi/ws/log?containerId="+this.form.containerId;this.websock=new WebSocket(e),this.websock.onopen=this.websocketOnopen,this.websock.onerror=this.websocketOnerror,this.websock.onmessage=this.websocketOnmessage,this.websock.onclose=this.websocketOnclose},websocketOnopen(){this.isConnected=!0,console.log("WebSocket连接成功"),this.listLogs.push({ts:"",line:this.$t("连接成功.")});const e={ch:"base.ht.ping"};this.websocketSend(JSON.stringify(e))},websocketOnerror(e){this.isConnected=!1,console.log("WebSocket连接发生错误",e),this.listLogs.push({ts:"",line:this.$t("连接发生错误.")})},websocketOnmessage(e){const s=JSON.parse(e.data);if(s.ch==="docker.container.log.line"){this.listLogs.push(s.d);const o=this.$arrRefs.log;o.scrollTop=o.scrollHeight}},websocketSend(e){this.websock.send(e)},websocketOnclose(e){this.isConnected=!1,console.log("connection closed ",e);const s={ts:"",line:this.$t("连接已关闭.")};this.listLogs.push(s)},formatDate(e){return v(e)},getRefSetter(e){return s=>{!this.$arrRefs&&(this.$arrRefs={}),!this.$arrRefs[e]&&(this.$arrRefs[e]=[]),s&&this.$arrRefs[e].push(s)}}}},R={class:"app-container"},V={class:"console"},N={key:0};function $(e,s,o,g,t,l){const u=a("el-cascader"),b=a("el-checkbox"),m=a("el-button"),k=a("el-link");return c(),d("div",R,[i(u,{modelValue:t.form.containerId,"onUpdate:modelValue":s[0]||(s[0]=n=>t.form.containerId=n),disabled:t.isConnected,filterable:"",placeholder:e.$t("目标容器"),clearable:"",options:t.res.containerInfos,props:{expandTrigger:"hover",emitPath:!1},style:{width:"500px","margin-right":"10px"}},null,8,["modelValue","disabled","placeholder","options"]),i(b,{modelValue:t.showSystemTime,"onUpdate:modelValue":s[1]||(s[1]=n=>t.showSystemTime=n),style:{"margin-right":"10px"}},{default:f(()=>[h(r(e.$t("显示日志系统时间")),1)]),_:1},8,["modelValue"]),i(m,{loading:t.loading,class:"filter-item",type:"primary",icon:t.ElIconSearch,disabled:t.isConnected,onClick:s[2]||(s[2]=n=>l.fetchLogData())},{default:f(()=>[h(r(e.$t("连接日志")),1)]),_:1},8,["loading","icon","disabled"]),i(m,{loading:t.loading,class:"filter-item",type:"primary",disabled:!t.isConnected,onClick:s[3]||(s[3]=n=>l.disconnectLog())},{default:f(()=>[h(r(e.$t("断开日志")),1)]),_:1},8,["loading","disabled"]),i(k,{underline:!1}),p("div",V,[(c(!0),d(y,null,C(t.listLogs,n=>(c(),d("div",{id:"log",ref_for:!0,ref:l.getRefSetter("log"),key:n},[p("div",null,[t.showSystemTime?(c(),d("span",N,r(l.formatDate(n.ts)),1)):x("",!0),h(" "+r(n.line),1)])]))),128))])])}const B=I(O,[["render",$],["__scopeId","data-v-d41d660c"]]);export{B as default};
