(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4df9db12"],{"4dd0":function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"f",(function(){return a})),n.d(t,"a",(function(){return l}));var o=n("b775");function s(e){return Object(o["a"])({url:"/mgr/servers",method:"get",params:e})}function i(e){return Object(o["a"])({url:"/mgr/serverNames",method:"get",params:e})}function r(e){return Object(o["a"])({url:"/mgr/containers",method:"get",params:e})}function c(e){return Object(o["a"])({url:"/mgr/containerInfos",method:"get",params:e})}function a(e){return Object(o["a"])({url:"/mgr/publish",method:"post",data:e})}function l(e,t){return Object(o["a"])({url:"/mgr/container/"+e,method:"post",data:t})}},"62ed":function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));var o=n("b775");function s(e){return console.log("getLogStart:",e),Object(o["a"])({url:"/mgr/log/start",method:"post",data:e})}function i(e){return Object(o["a"])({url:"/mgr/log/close",method:"post",data:e})}},"7d9c":function(e,t,n){"use strict";n("97ea")},"97ea":function(e,t,n){},be69:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-cascader",{staticStyle:{width:"500px","margin-right":"10px"},attrs:{disabled:e.isConnected,filterable:"",placeholder:"目标容器",clearable:"",options:e.res.containerInfos,props:{expandTrigger:"hover",emitPath:!1}},model:{value:e.form.containerId,callback:function(t){e.$set(e.form,"containerId",t)},expression:"form.containerId"}}),n("el-checkbox",{staticStyle:{"margin-right":"10px"},model:{value:e.showSystemTime,callback:function(t){e.showSystemTime=t},expression:"showSystemTime"}},[e._v("显示日志系统时间 ")]),n("el-button",{staticClass:"filter-item",attrs:{loading:e.loading,type:"primary",icon:"el-icon-search",disabled:e.isConnected},on:{click:function(t){return e.fetchLogData()}}},[e._v(" 连接日志 ")]),n("el-button",{staticClass:"filter-item",attrs:{loading:e.loading,type:"primary",disabled:!e.isConnected},on:{click:function(t){return e.disconnectLog()}}},[e._v(" 断开连接 ")]),n("el-link",{attrs:{underline:!1}}),n("div",{staticClass:"console"},e._l(e.listLogs,(function(t){return n("div",{key:t,ref:"log",refInFor:!0,attrs:{id:"log"}},[n("div",[e.showSystemTime?n("span",[e._v(e._s(e.formatDate(t.ts))+" ")]):e._e(),e._v(" "+e._s(t.line)+" ")])])})),0)],1)},s=[],i=n("4dd0"),r=n("62ed"),c=n("ed08"),a={filters:{statusFilter:function(e){var t={published:"success",draft:"gray",deleted:"danger"};return t[e]}},data:function(){return{websock:null,listLogs:[],loading:!0,showSystemTime:!1,isConnected:!1,res:{containerInfos:[]},form:{containerId:""}}},created:function(){this.fetchData()},destroyed:function(){this.disconnectLog()},methods:{fetchData:function(){var e=this;this.loading=!0,Object(i["b"])().then((function(t){for(var n in e.res.containerInfos=t.data,e.res.containerInfos){var o=e.res.containerInfos[n];for(var s in o.children=o.containers,o.label=o.serverName,o.value=o.serverName,o.children){var i=o.children[s];i.label=i.Names+" - "+i.State,i.value=i.Id,o.children[s]=i}e.res.containerInfos[n]=o}e.loading=!1}))},disconnectLog:function(){this.websock&&(this.websock.close(),Object(r["a"])(this.form))},fetchLogData:function(){var e=this;this.form.containerId?(this.loading=!0,this.listLogs=[{ts:"",line:"正在连接..."}],console.log("fetchLogData",this.form),Object(r["b"])(this.form).then((function(t){e.loading=!1,"100200"===t.code?(e.list=t.data,e.initWebSocket(e.form.containerId)):(e.$message(t.msg),e.listLogs.push({ts:"",line:t.msg}))})).catch((function(t){e.loading=!1,console.log("logstart.error:",t),e.$message(t.msg),e.listLogs.push({ts:"",line:t.msg})}))):this.$message("必须选择容器")},initWebSocket:function(){console.log("location.protocol:",location);var e="http:"===location.protocol?"ws:":"wss",t=e+location.host+"/dockerMgrApi/ws/log?containerId="+this.form.containerId;this.websock=new WebSocket(t),this.websock.onopen=this.websocketonopen,this.websock.onerror=this.websocketonerror,this.websock.onmessage=this.websocketonmessage,this.websock.onclose=this.websocketclose},websocketonopen:function(){this.isConnected=!0,console.log("WebSocket连接成功"),this.listLogs.push({ts:"",line:"连接成功."});var e={ch:"base.ht.ping"};this.websocketsend(JSON.stringify(e))},websocketonerror:function(e){this.isConnected=!1,console.log("WebSocket连接发生错误",e),this.listLogs.push({ts:"",line:"连接发生错误."})},websocketonmessage:function(e){var t=JSON.parse(e.data);if("docker.container.log.line"===t.ch){this.listLogs.push(t.d);var n=this.$refs.log;n.scrollTop=n.scrollHeight}},websocketsend:function(e){this.websock.send(e)},websocketclose:function(e){this.isConnected=!1,console.log("connection closed ",e),this.listLogs.push({ts:"",line:"连接已关闭."})},formatDate:function(e){return Object(c["a"])(e)}}},l=a,u=(n("7d9c"),n("2877")),d=Object(u["a"])(l,o,s,!1,null,"16e0db92",null);t["default"]=d.exports},ed08:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}));var o=n("53ca");n("ac1f"),n("5319"),n("4d63"),n("25f0"),n("d3b7"),n("4d90"),n("a15b"),n("d81d"),n("b64b"),n("1276"),n("159b");function s(e,t){if(0===arguments.length||!e)return null;var n,s=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(o["a"])(e)?n=e:("string"===typeof e&&(e=/^[0-9]+$/.test(e)?parseInt(e):e.replace(new RegExp(/-/gm),"/")),"number"===typeof e&&10===e.toString().length&&(e*=1e3),n=new Date(e));var i={y:n.getFullYear(),m:n.getMonth()+1,d:n.getDate(),h:n.getHours(),i:n.getMinutes(),s:n.getSeconds(),a:n.getDay()},r=s.replace(/{([ymdhisa])+}/g,(function(e,t){var n=i[t];return"a"===t?["日","一","二","三","四","五","六"][n]:n.toString().padStart(2,"0")}));return r}function i(e,t){e=10===(""+e).length?1e3*parseInt(e):+e;var n=new Date(e),o=Date.now(),i=(o-n)/1e3;return i<30?"刚刚":i<3600?Math.ceil(i/60)+"分钟前":i<86400?Math.ceil(i/3600)+"小时前":i<172800?"1天前":t?s(e,t):n.getMonth()+1+"月"+n.getDate()+"日"+n.getHours()+"时"+n.getMinutes()+"分"}function r(e){if(!e)return"";e=e>0xee09da7916?e:1e3*e;var t=new Date(e),n=t.getFullYear()+"-",o=(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-",s=t.getDate()<10?"0"+t.getDate():t.getDate(),i=(t.getHours()<10?"0"+t.getHours():t.getHours())+":",r=(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":",c=(t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds())+".",a="";return a=t.getMilliseconds()<10?"00"+t.getMilliseconds():t.getMilliseconds()<100?"0"+t.getMilliseconds():t.getMilliseconds(),n+o+s+" "+i+r+c+a}}}]);