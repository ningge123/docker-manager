(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78c7694b"],{"4dd0":function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return o})),n.d(e,"f",(function(){return l})),n.d(e,"a",(function(){return u}));var r=n("b775");function a(t){return Object(r["a"])({url:"/mgr/servers",method:"get",params:t})}function i(t){return Object(r["a"])({url:"/mgr/serverNames",method:"get",params:t})}function s(t){return Object(r["a"])({url:"/mgr/containers",method:"get",params:t})}function o(t){return Object(r["a"])({url:"/mgr/containerInfos",method:"get",params:t})}function l(t){return Object(r["a"])({url:"/mgr/publish",method:"post",data:t})}function u(t,e){return Object(r["a"])({url:"/mgr/container/"+t,method:"post",data:e})}},a352:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-select",{staticClass:"filter-item",staticStyle:{width:"300px"},attrs:{multiple:"",filterable:"",placeholder:t.$t("服务器"),clearable:"","collapse-tags":""},model:{value:t.listQuery.serverNames,callback:function(e){t.$set(t.listQuery,"serverNames",e)},expression:"listQuery.serverNames"}},t._l(t.res.serverNames,(function(t){return n("el-option",{key:t,attrs:{label:t,value:t}})})),1),n("el-select",{staticClass:"filter-item",staticStyle:{width:"300px","margin-left":"10px"},attrs:{multiple:"",filterable:"",placeholder:t.$t("容器名称"),clearable:"","collapse-tags":""},model:{value:t.listQuery.ContainerNames,callback:function(e){t.$set(t.listQuery,"ContainerNames",e)},expression:"listQuery.ContainerNames"}},t._l(t.res.ContainerNames,(function(t){return n("el-option",{key:t,attrs:{label:t,value:t}})})),1),n("el-select",{staticClass:"filter-item",staticStyle:{width:"140px","margin-left":"10px","margin-right":"10px"},attrs:{placeholder:"state",clearable:"",filterable:""},model:{value:t.listQuery.state,callback:function(e){t.$set(t.listQuery,"state",e)},expression:"listQuery.state"}},[n("el-option",{key:"running",attrs:{label:"running",value:"running"}}),n("el-option",{key:"exited",attrs:{label:"exited",value:"exited"}})],1),n("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.fetchData}},[t._v(" Search ")])],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{"margin-top":"20px"},attrs:{data:t.list,"span-method":t.spanMethod,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"ID",width:"65"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.$index+1)+" ")]}}])}),n("el-table-column",{attrs:{label:"ServerName",width:"170"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.ServerName)+" ")]}}])}),n("el-table-column",{attrs:{label:"Name"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",title:e.row.Name},on:{click:function(n){return t.openDetail(e.row)}}},[t._v(t._s(e.row.Name))])]}}])}),n("el-table-column",{attrs:{label:"IMAGE",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.Image))])]}}])}),n("el-table-column",{attrs:{label:"Status",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.Status)+" ")]}}])}),n("el-table-column",{attrs:{label:"State",width:"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return["running"===e.row.State?n("span",{staticStyle:{color:"#03c961"}},[t._v(t._s(e.row.State))]):t._e(),"running"!==e.row.State?n("span",{staticStyle:{color:"#d70404"}},[t._v(t._s(e.row.State))]):t._e()]}}])}),n("el-table-column",{attrs:{label:"Ports",width:"270",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.Ports,(function(e){return n("div",{key:e.key},[t._v(t._s(t.PortToStr(e)))])}))}}])}),n("el-table-column",{attrs:{align:"center",prop:"created_at",label:"Created",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("i",{staticClass:"el-icon-time"}),n("span",[t._v(t._s(t.formatDate(e.row.Created)))])]}}])}),n("el-table-column",{attrs:{"class-name":"status-col",label:t.$t("操作"),width:"170",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{loading:t.listLoading,disabled:"running"!==e.row.State,type:"text"},on:{click:function(n){return t.ContainerOperator("stop",e.row)}}},[t._v(t._s(t.$t("停止")))]),n("el-button",{attrs:{loading:t.listLoading,type:"text"},on:{click:function(n){return t.ContainerOperator("remove",e.row)}}},[t._v(t._s(t.$t("删除")))]),n("el-button",{attrs:{loading:t.listLoading,type:"text"},on:{click:function(n){return t.ContainerOperator("restart",e.row)}}},[t._v(t._s(t.$t("重启")))])]}}])})],1),n("el-dialog",{attrs:{visible:t.dialogDetailVisible,title:t.$t("详情")},on:{"update:visible":function(e){t.dialogDetailVisible=e}}},[n("pre",[t._v(t._s(JSON.stringify(t.selectRow,null,2))+"\n      ")])])],1)},a=[],i=(n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),n("d81d"),n("4dd0")),s=n("ed08"),o=n("b1cf"),l={filters:{statusFilter:function(t){var e={published:"success",draft:"gray",deleted:"danger"};return e[t]}},data:function(){return{list:[],groupList:[],groups:{},listLoading:!0,dialogDetailVisible:!1,selectRow:{},res:{serverNames:[],ContainerNames:[],containerInfos:[]},listQuery:{serverNames:[],ContainerNames:[],state:void 0}}},computed:{},created:function(){this.fetchData(),this.fetchContainerInfoData(),this.fetchServerNames()},methods:{ContainerOperator:function(t,e){var n=this;this.listLoading=!0;var r={containerId:e.ContainerId,serverNames:[e.ServerName]};Object(i["a"])(t,r).then((function(t){"100200"===t.code?n.$message({message:n.$t("命令下发成功"),type:"success"}):n.$message({message:t.msg,type:"warning"}),n.listLoading=!1}))},fetchServerNames:function(){var t=this;this.listLoading=!0,Object(i["e"])().then((function(e){t.res.serverNames=e.data,t.listLoading=!1}))},fetchContainerInfoData:function(){var t=this;this.loading=!0,Object(i["b"])().then((function(e){var n=e.data;for(var r in t.res.ContainerNames=[],n)for(var a in n[r].containers){var i=n[r].containers[a].Name;-1===t.res.ContainerNames.indexOf(i)&&t.res.ContainerNames.push(i)}t.loading=!1}))},fetchData:function(){var t=this;this.listLoading=!0,Object(i["c"])(this.listQuery).then((function(e){t.list=e.data,t.list.sort((function(t,e){return t.ServerName.localeCompare(e.ServerName)})),t.groupList=new Set(t.list.map((function(t){return t.ServerName}))),t.groups={};for(var n=0;n<t.list.length;n++){var r=t.list[n],a=t.groups[r.ServerName];a||(a={ServerName:r.ServerName,Members:0,StartIdx:n}),a.Members=a.Members+1,t.groups[r.ServerName]=a}t.listLoading=!1}))},spanMethod:function(t){var e=t.row,n=t.rowIndex,r=t.columnIndex;if(1===r){var a=this.groups[e.ServerName];return n===a.StartIdx?{rowspan:a.Members,colspan:1}:{rowspan:0,colspan:0}}return{rowspan:1,colspan:1}},formatDate:function(t){return Object(s["a"])(t)},PortsToStr:function(t){return Object(o["c"])(t)},PortToStr:function(t){var e=(t.IP?t.IP:"")+(t.PublicPort?":"+t.PublicPort:"");return(e?e+" -> ":"")+t.PrivatePort+"/"+t.Type},FormatName:function(t){return Object(o["a"])(t)},openDetail:function(t){this.selectRow=t,this.dialogDetailVisible=!0}}},u=l,c=n("2877"),d=Object(c["a"])(u,r,a,!1,null,null,null);e["default"]=d.exports},b1cf:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i})),n.d(e,"h",(function(){return s})),n.d(e,"e",(function(){return o})),n.d(e,"f",(function(){return l})),n.d(e,"d",(function(){return u})),n.d(e,"g",(function(){return c}));n("b680");function r(t){if(!t||0===t.length)return"";var e="";for(var n in t){var r=t[n],a=(r.IP?r.IP:"")+(r.PublicPort?":"+r.PublicPort:"");e+=", "+(a?a+"->":"")+r.PrivatePort+"/"+r.Type}return e.substr(1,e.length)}function a(t){return t[0].substr(1,t[0].length-1)}function i(t){if(!t||0===t.length)return"";var e=[];for(var n in t){var r=t[n];e.push(r.Source+" : "+r.Destination)}return e}function s(t){if(!t)return"";var e="";return e=t<1024?t+"B":t<1048576?(t/1024).toFixed(3)+"KB":t<1073741824?(t/1048576).toFixed(3)+"MB":(t/1073741824).toFixed(3)+"GB",e}function o(t){return t&&t.usage?s(t.usage)+" / "+s(t.limit):""}function l(t){return t&&t.usage?(100*t.usage/t.limit).toFixed(2)+"%":""}function u(t,e){if(!t||!t.cpu_usage||!e||!e.cpu_usage||!t.system_cpu_usage||!e.system_cpu_usage)return"0%";var n=t.cpu_usage.total_usage-e.cpu_usage.total_usage,r=t.system_cpu_usage-e.system_cpu_usage,a=t.online_cpus,i=n/r*a*100;return i.toFixed(2)+"%"}function c(t){if(!t||!t.eth0)return"";var e=t.eth0;return s(e.rx_bytes)+" / "+s(e.tx_bytes)}},ed08:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return s}));var r=n("53ca");n("ac1f"),n("5319"),n("4d63"),n("25f0"),n("d3b7"),n("4d90"),n("a15b"),n("d81d"),n("b64b"),n("1276"),n("159b");function a(t,e){if(0===arguments.length||!t)return null;var n,a=e||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(r["a"])(t)?n=t:("string"===typeof t&&(t=/^[0-9]+$/.test(t)?parseInt(t):t.replace(new RegExp(/-/gm),"/")),"number"===typeof t&&10===t.toString().length&&(t*=1e3),n=new Date(t));var i={y:n.getFullYear(),m:n.getMonth()+1,d:n.getDate(),h:n.getHours(),i:n.getMinutes(),s:n.getSeconds(),a:n.getDay()},s=a.replace(/{([ymdhisa])+}/g,(function(t,e){var n=i[e];return"a"===e?["日","一","二","三","四","五","六"][n]:n.toString().padStart(2,"0")}));return s}function i(t,e){t=10===(""+t).length?1e3*parseInt(t):+t;var n=new Date(t),r=Date.now(),i=(r-n)/1e3;return i<30?"刚刚":i<3600?Math.ceil(i/60)+"分钟前":i<86400?Math.ceil(i/3600)+"小时前":i<172800?"1天前":e?a(t,e):n.getMonth()+1+"月"+n.getDate()+"日"+n.getHours()+"时"+n.getMinutes()+"分"}function s(t){if(!t)return"";t=t>0xee09da7916?t:1e3*t;var e=new Date(t),n=e.getFullYear()+"-",r=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-",a=e.getDate()<10?"0"+e.getDate():e.getDate(),i=(e.getHours()<10?"0"+e.getHours():e.getHours())+":",s=(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes())+":",o=(e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds())+".",l="";return l=e.getMilliseconds()<10?"00"+e.getMilliseconds():e.getMilliseconds()<100?"0"+e.getMilliseconds():e.getMilliseconds(),n+r+a+" "+i+s+o+l}}}]);