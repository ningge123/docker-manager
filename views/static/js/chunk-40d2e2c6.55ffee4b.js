(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40d2e2c6"],{"4dd0":function(t,e,n){"use strict";n.d(e,"d",(function(){return s})),n.d(e,"e",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return c})),n.d(e,"f",(function(){return a})),n.d(e,"a",(function(){return l}));var o=n("b775");function s(t){return Object(o["a"])({url:"/mgr/servers",method:"get",params:t})}function i(t){return Object(o["a"])({url:"/mgr/serverNames",method:"get",params:t})}function r(t){return Object(o["a"])({url:"/mgr/containers",method:"get",params:t})}function c(t){return Object(o["a"])({url:"/mgr/containerInfos",method:"get",params:t})}function a(t){return Object(o["a"])({url:"/mgr/publish",method:"post",data:t})}function l(t,e){return Object(o["a"])({url:"/mgr/container/"+t,method:"post",data:e})}},"62ed":function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return i}));var o=n("b775");function s(t){return console.log("getLogStart:",t),Object(o["a"])({url:"/mgr/log/start",method:"post",data:t})}function i(t){return Object(o["a"])({url:"/mgr/log/close",method:"post",data:t})}},b96b:function(t,e,n){"use strict";n("d933")},be69:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-cascader",{staticStyle:{width:"500px","margin-right":"10px"},attrs:{disabled:t.isConnected,filterable:"",placeholder:"目标容器",clearable:"",options:t.res.containerInfos,props:{expandTrigger:"hover",emitPath:!1}},model:{value:t.form.containerId,callback:function(e){t.$set(t.form,"containerId",e)},expression:"form.containerId"}}),n("el-checkbox",{staticStyle:{"margin-right":"10px"},model:{value:t.showSystemTime,callback:function(e){t.showSystemTime=e},expression:"showSystemTime"}},[t._v("显示日志系统时间 ")]),n("el-button",{staticClass:"filter-item",attrs:{loading:t.loading,type:"primary",icon:"el-icon-search",disabled:t.isConnected},on:{click:function(e){return t.fetchLogData()}}},[t._v(" 连接日志 ")]),n("el-button",{staticClass:"filter-item",attrs:{loading:t.loading,type:"primary",disabled:!t.isConnected},on:{click:function(e){return t.disconnectLog()}}},[t._v(" 断开连接 ")]),n("el-link",{attrs:{underline:!1}}),n("div",{staticClass:"console"},t._l(t.listLogs,(function(e){return n("div",{key:e,ref:"log",refInFor:!0,attrs:{id:"log"}},[n("div",[t.showSystemTime?n("span",[t._v(t._s(t.formatDate(e.ts))+" ")]):t._e(),t._v(" "+t._s(e.line)+" ")])])})),0)],1)},s=[],i=n("4dd0"),r=n("62ed"),c=n("ed08"),a={filters:{statusFilter:function(t){var e={published:"success",draft:"gray",deleted:"danger"};return e[t]}},data:function(){return{websock:null,listLogs:[],loading:!0,showSystemTime:!1,isConnected:!1,res:{containerInfos:[]},form:{containerId:""}}},created:function(){this.fetchData()},destroyed:function(){this.disconnectLog()},methods:{fetchData:function(){var t=this;this.loading=!0,Object(i["b"])().then((function(e){for(var n in t.res.containerInfos=e.data,t.res.containerInfos){var o=t.res.containerInfos[n];for(var s in o.children=o.containers,o.label=o.serverName,o.value=o.serverName,o.children){var i=o.children[s];i.label=i.Name+" - "+i.State,i.value=i.Id,o.children[s]=i}t.res.containerInfos[n]=o}t.loading=!1}))},disconnectLog:function(){this.websock&&(this.websock.close(),Object(r["a"])(this.form))},fetchLogData:function(){var t=this;this.form.containerId?(this.loading=!0,this.listLogs=[{ts:"",line:"正在连接..."}],console.log("fetchLogData",this.form),Object(r["b"])(this.form).then((function(e){t.loading=!1,"100200"===e.code?(t.list=e.data,t.initWebSocket(t.form.containerId)):(t.$message(e.msg),t.listLogs.push({ts:"",line:e.msg}))})).catch((function(e){t.loading=!1,console.log("logstart.error:",e),t.$message(e.msg),t.listLogs.push({ts:"",line:e.msg})}))):this.$message("必须选择容器")},initWebSocket:function(){console.log("location.protocol:",location);var t="http:"===location.protocol?"ws:":"wss",e=t+location.host+"/dockerMgrApi/ws/log?containerId="+this.form.containerId;this.websock=new WebSocket(e),this.websock.onopen=this.websocketonopen,this.websock.onerror=this.websocketonerror,this.websock.onmessage=this.websocketonmessage,this.websock.onclose=this.websocketclose},websocketonopen:function(){this.isConnected=!0,console.log("WebSocket连接成功"),this.listLogs.push({ts:"",line:"连接成功."});var t={ch:"base.ht.ping"};this.websocketsend(JSON.stringify(t))},websocketonerror:function(t){this.isConnected=!1,console.log("WebSocket连接发生错误",t),this.listLogs.push({ts:"",line:"连接发生错误."})},websocketonmessage:function(t){var e=JSON.parse(t.data);if("docker.container.log.line"===e.ch){this.listLogs.push(e.d);var n=this.$refs.log;n.scrollTop=n.scrollHeight}},websocketsend:function(t){this.websock.send(t)},websocketclose:function(t){this.isConnected=!1,console.log("connection closed ",t),this.listLogs.push({ts:"",line:"连接已关闭."})},formatDate:function(t){return Object(c["a"])(t)}}},l=a,u=(n("b96b"),n("2877")),d=Object(u["a"])(l,o,s,!1,null,"2ab68cbd",null);e["default"]=d.exports},d933:function(t,e,n){},ed08:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return r}));var o=n("53ca");n("ac1f"),n("5319"),n("4d63"),n("25f0"),n("d3b7"),n("4d90"),n("a15b"),n("d81d"),n("b64b"),n("1276"),n("159b");function s(t,e){if(0===arguments.length||!t)return null;var n,s=e||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(o["a"])(t)?n=t:("string"===typeof t&&(t=/^[0-9]+$/.test(t)?parseInt(t):t.replace(new RegExp(/-/gm),"/")),"number"===typeof t&&10===t.toString().length&&(t*=1e3),n=new Date(t));var i={y:n.getFullYear(),m:n.getMonth()+1,d:n.getDate(),h:n.getHours(),i:n.getMinutes(),s:n.getSeconds(),a:n.getDay()},r=s.replace(/{([ymdhisa])+}/g,(function(t,e){var n=i[e];return"a"===e?["日","一","二","三","四","五","六"][n]:n.toString().padStart(2,"0")}));return r}function i(t,e){t=10===(""+t).length?1e3*parseInt(t):+t;var n=new Date(t),o=Date.now(),i=(o-n)/1e3;return i<30?"刚刚":i<3600?Math.ceil(i/60)+"分钟前":i<86400?Math.ceil(i/3600)+"小时前":i<172800?"1天前":e?s(t,e):n.getMonth()+1+"月"+n.getDate()+"日"+n.getHours()+"时"+n.getMinutes()+"分"}function r(t){if(!t)return"";t=t>0xee09da7916?t:1e3*t;var e=new Date(t),n=e.getFullYear()+"-",o=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-",s=e.getDate()<10?"0"+e.getDate():e.getDate(),i=(e.getHours()<10?"0"+e.getHours():e.getHours())+":",r=(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes())+":",c=(e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds())+".",a="";return a=e.getMilliseconds()<10?"00"+e.getMilliseconds():e.getMilliseconds()<100?"0"+e.getMilliseconds():e.getMilliseconds(),n+o+s+" "+i+r+c+a}}}]);