(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-784647d6"],{"408a":function(e,t,r){var n=r("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=n(e))throw TypeError("Incorrect invocation");return+e}},6062:function(e,t,r){"use strict";var n=r("6d61"),a=r("6566");e.exports=n("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),a)},6566:function(e,t,r){"use strict";var n=r("9bf2").f,a=r("7c73"),i=r("e2cc"),o=r("0366"),s=r("19aa"),u=r("2266"),l=r("7dd0"),c=r("2626"),f=r("83ab"),d=r("f183").fastKey,g=r("69f3"),p=g.set,v=g.getterFor;e.exports={getConstructor:function(e,t,r,l){var c=e((function(e,n){s(e,c,t),p(e,{type:t,index:a(null),first:void 0,last:void 0,size:0}),f||(e.size=0),void 0!=n&&u(n,e[l],e,r)})),g=v(t),h=function(e,t,r){var n,a,i=g(e),o=m(e,t);return o?o.value=r:(i.last=o={index:a=d(t,!0),key:t,value:r,previous:n=i.last,next:void 0,removed:!1},i.first||(i.first=o),n&&(n.next=o),f?i.size++:e.size++,"F"!==a&&(i.index[a]=o)),e},m=function(e,t){var r,n=g(e),a=d(t);if("F"!==a)return n.index[a];for(r=n.first;r;r=r.next)if(r.key==t)return r};return i(c.prototype,{clear:function(){var e=this,t=g(e),r=t.index,n=t.first;while(n)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete r[n.index],n=n.next;t.first=t.last=void 0,f?t.size=0:e.size=0},delete:function(e){var t=this,r=g(t),n=m(t,e);if(n){var a=n.next,i=n.previous;delete r.index[n.index],n.removed=!0,i&&(i.next=a),a&&(a.previous=i),r.first==n&&(r.first=a),r.last==n&&(r.last=i),f?r.size--:t.size--}return!!n},forEach:function(e){var t,r=g(this),n=o(e,arguments.length>1?arguments[1]:void 0,3);while(t=t?t.next:r.first){n(t.value,t.key,this);while(t&&t.removed)t=t.previous}},has:function(e){return!!m(this,e)}}),i(c.prototype,r?{get:function(e){var t=m(this,e);return t&&t.value},set:function(e,t){return h(this,0===e?0:e,t)}}:{add:function(e){return h(this,e=0===e?0:e,e)}}),f&&n(c.prototype,"size",{get:function(){return g(this).size}}),c},setStrong:function(e,t,r){var n=t+" Iterator",a=v(t),i=v(n);l(e,t,(function(e,t){p(this,{type:n,target:e,state:a(e),kind:t,last:void 0})}),(function(){var e=i(this),t=e.kind,r=e.last;while(r&&r.removed)r=r.previous;return e.target&&(e.last=r=r?r.next:e.state.first)?"keys"==t?{value:r.key,done:!1}:"values"==t?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),c(t)}}},"6d61":function(e,t,r){"use strict";var n=r("23e7"),a=r("da84"),i=r("94ca"),o=r("6eeb"),s=r("f183"),u=r("2266"),l=r("19aa"),c=r("861d"),f=r("d039"),d=r("1c7e"),g=r("d44e"),p=r("7156");e.exports=function(e,t,r){var v=-1!==e.indexOf("Map"),h=-1!==e.indexOf("Weak"),m=v?"set":"add",b=a[e],x=b&&b.prototype,w=b,y={},S=function(e){var t=x[e];o(x,e,"add"==e?function(e){return t.call(this,0===e?0:e),this}:"delete"==e?function(e){return!(h&&!c(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return h&&!c(e)?void 0:t.call(this,0===e?0:e)}:"has"==e?function(e){return!(h&&!c(e))&&t.call(this,0===e?0:e)}:function(e,r){return t.call(this,0===e?0:e,r),this})};if(i(e,"function"!=typeof b||!(h||x.forEach&&!f((function(){(new b).entries().next()})))))w=r.getConstructor(t,e,v,m),s.REQUIRED=!0;else if(i(e,!0)){var I=new w,_=I[m](h?{}:-0,1)!=I,k=f((function(){I.has(1)})),N=d((function(e){new b(e)})),z=!h&&f((function(){var e=new b,t=5;while(t--)e[m](t,t);return!e.has(-0)}));N||(w=t((function(t,r){l(t,w,e);var n=p(new b,t,w);return void 0!=r&&u(r,n[m],n,v),n})),w.prototype=x,x.constructor=w),(k||z)&&(S("delete"),S("has"),v&&S("get")),(z||_)&&S(m),h&&x.clear&&delete x.clear}return y[e]=w,n({global:!0,forced:w!=b},y),g(w,e),h||r.setStrong(w,e,v),w}},aa22:function(e,t,r){"use strict";r.d(t,"c",(function(){return a})),r.d(t,"d",(function(){return i})),r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return s}));var n=r("b775");function a(e){return Object(n["a"])({url:"/mgr/server/list",method:"get",params:e})}function i(e){return Object(n["a"])({url:"/mgr/server/names",method:"get",params:e})}function o(e){return Object(n["a"])({url:"/mgr/server/detail",method:"get",params:e})}function s(e){return Object(n["a"])({url:"/mgr/server/delete",method:"post",data:e})}},b1cf:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"d",(function(){return a})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return o})),r.d(t,"e",(function(){return s}));r("b680");function n(e){return e.substr(0,12)}function a(e){if(!e||0===e.length)return"";var t="";for(var r in e){var n=e[r],a=(n.IP?n.IP:"")+(n.PublicPort?":"+n.PublicPort:"");t+=", "+(a?a+"->":"")+n.PrivatePort+"/"+n.Type}return t.substr(1,t.length)}function i(e){return e[0].substr(1,e[0].length-1)}function o(e){if(!e||0===e.length)return"";var t=[];for(var r in e){var n=e[r];t.push(n.Source+" : "+n.Destination)}return t}function s(e){if(!e)return"";var t="";return t=e<1024?e+"B":e<1048576?(e/1024).toFixed(3)+"KB":e<1073741824?(e/1048576).toFixed(3)+"MB":(e/1073741824).toFixed(3)+"GB",t}},b680:function(e,t,r){"use strict";var n=r("23e7"),a=r("a691"),i=r("408a"),o=r("1148"),s=r("d039"),u=1..toFixed,l=Math.floor,c=function(e,t,r){return 0===t?r:t%2===1?c(e,t-1,r*e):c(e*e,t/2,r)},f=function(e){var t=0,r=e;while(r>=4096)t+=12,r/=4096;while(r>=2)t+=1,r/=2;return t},d=u&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){u.call({})}));n({target:"Number",proto:!0,forced:d},{toFixed:function(e){var t,r,n,s,u=i(this),d=a(e),g=[0,0,0,0,0,0],p="",v="0",h=function(e,t){var r=-1,n=t;while(++r<6)n+=e*g[r],g[r]=n%1e7,n=l(n/1e7)},m=function(e){var t=6,r=0;while(--t>=0)r+=g[t],g[t]=l(r/e),r=r%e*1e7},b=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==g[e]){var r=String(g[e]);t=""===t?r:t+o.call("0",7-r.length)+r}return t};if(d<0||d>20)throw RangeError("Incorrect fraction digits");if(u!=u)return"NaN";if(u<=-1e21||u>=1e21)return String(u);if(u<0&&(p="-",u=-u),u>1e-21)if(t=f(u*c(2,69,1))-69,r=t<0?u*c(2,-t,1):u/c(2,t,1),r*=4503599627370496,t=52-t,t>0){h(0,r),n=d;while(n>=7)h(1e7,0),n-=7;h(c(10,n,1),0),n=t-1;while(n>=23)m(1<<23),n-=23;m(1<<n),h(1,1),m(2),v=b()}else h(0,r),h(1<<-t,0),v=b()+o.call("0",d);return d>0?(s=v.length,v=p+(s<=d?"0."+o.call("0",d-s)+v:v.slice(0,s-d)+"."+v.slice(s-d))):v=p+v,v}})},bb2f:function(e,t,r){var n=r("d039");e.exports=!n((function(){return Object.isExtensible(Object.preventExtensions({}))}))},e036:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("div",{staticClass:"filter-container"},[r("el-select",{staticClass:"filter-item",staticStyle:{width:"300px","margin-right":"10px"},attrs:{multiple:"",filterable:"",placeholder:e.$t("主机"),clearable:"","collapse-tags":""},model:{value:e.listQuery.serverNames,callback:function(t){e.$set(e.listQuery,"serverNames",t)},expression:"listQuery.serverNames"}},e._l(e.res.serverNames,(function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})})),1),r("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.fetchData}},[e._v(" Search ")])],1),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"tableList",staticClass:"filter-tree",staticStyle:{"margin-top":"20px"},attrs:{data:e.list.filter((function(t){return!e.search||t.RepoTags.toLowerCase().includes(e.search.toLowerCase())})),"span-method":e.spanMethod,"element-loading-text":"Loading",stripe:"",border:"",fit:"","highlight-current-row":""}},[r("el-table-column",{attrs:{align:"center",label:"ID",width:"65"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.$index+1)+" ")]}}])}),r("el-table-column",{attrs:{label:"ServerName",width:"170"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.ServerName)+" ")]}}])}),r("el-table-column",{attrs:{label:"RepoDigests",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.RepoDigests.split("@")[0])+" ")]}}])}),r("el-table-column",{attrs:{label:"Tags",align:"center"},scopedSlots:e._u([{key:"header",fn:function(t){return[e._v(" Tags "),r("el-input",{staticStyle:{width:"140px"},attrs:{size:"mini",placeholder:e.$t("输入关键字过滤")},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})]}},{key:"default",fn:function(t){return e._l(e.formatTags(t.row.RepoTags),(function(t){return r("div",{key:t},[e._v(e._s(t))])}))}}])}),r("el-table-column",{attrs:{label:"ImageId",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.ImageId,placement:"top-start"}},[r("el-button",{attrs:{type:"text"},on:{click:function(r){return e.openDetail(t.row)}}},[e._v(e._s(e.formatImageId(t.row.ImageId)))])],1)]}}])}),r("el-table-column",{attrs:{label:"Size",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.formatSize(t.row.Size))+" ")]}}])}),r("el-table-column",{attrs:{align:"center",prop:"created_at",label:"Created",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("i",{staticClass:"el-icon-time"}),r("span",[e._v(e._s(e.formatDate(t.row.Created)))])]}}])}),r("el-table-column",{attrs:{"class-name":"status-col",label:e.$t("操作"),width:"170",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{loading:e.listLoading,type:"text"},on:{click:function(r){return e.ImageOperator("remove",t.row)}}},[e._v(e._s(e.$t("删除")))])]}}])})],1),r("el-pagination",{staticStyle:{width:"500px",margin:"0 auto","margin-top":"10px"},attrs:{"hide-on-single-page":!0,"current-page":e.page.currentPage,"page-sizes":[10,30,50,100,200,300,400],"page-size":e.page.pageSize,layout:"prev, pager, next, jumper, sizes, total",total:e.page.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),r("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.detailLoading,expression:"detailLoading"}],attrs:{visible:e.dialogDetailVisible,title:e.$t("详情")},on:{"update:visible":function(t){e.dialogDetailVisible=t}}},[r("pre",[e._v(e._s(JSON.stringify(e.selectRow,null,2))+"\n      ")])])],1)},a=[],i=(r("d3b7"),r("6062"),r("3ca3"),r("ddb0"),r("d81d"),r("ac1f"),r("1276"),r("aa22")),o=r("b775");function s(e){return Object(o["a"])({url:"/mgr/image/list",method:"get",params:e})}function u(e,t){return Object(o["a"])({url:"/mgr/image/"+e,method:"post",data:t})}function l(e){return console.log("getImage.params:",e),Object(o["a"])({url:"/mgr/image/detail",method:"get",params:e})}var c=r("ed08"),f=r("b1cf"),d={filters:{statusFilter:function(e){var t={published:"success",draft:"gray",deleted:"danger"};return t[e]}},data:function(){return{list:[],page:{currentPage:1,pageSize:10,total:0},groupList:[],groups:{},listLoading:!1,detailLoading:!1,dialogDetailVisible:!1,selectRow:{},res:{serverNames:[]},listQuery:{serverNames:[]},filterText:"",search:""}},computed:{},created:function(){this.fetchData(),this.fetchServerNames()},methods:{ImageOperator:function(e,t){var r=this;this.listLoading=!0;var n={ImageId:t.ImageId,serverName:t.ServerName};u(e,n).then((function(e){"100200"===e.code&&(r.$message({message:r.$t("命令下发成功"),type:"success"}),r.fetchData()),r.listLoading=!1}))},fetchServerNames:function(){var e=this;Object(i["d"])().then((function(t){e.res.serverNames=t.data}))},handleSizeChange:function(e){console.log("每页 ".concat(e," 条")),this.page.pageSize=e,this.fetchData()},handleCurrentChange:function(e){console.log("当前页: ".concat(e)),this.page.currentPage=e,this.fetchData()},fetchData:function(){var e=this;this.listLoading=!0,this.listQuery.currentPage=this.page.currentPage,this.listQuery.pageSize=this.page.pageSize,s(this.listQuery).then((function(t){e.list=t.data.list,e.page=t.data.page,e.list.sort((function(e,t){return e.ServerName.localeCompare(t.ServerName)})),e.groupList=new Set(e.list.map((function(e){return e.ServerName}))),e.groups={};for(var r=0;r<e.list.length;r++){var n=e.list[r],a=e.groups[n.ServerName];a||(a={ServerName:n.ServerName,Members:0,StartIdx:r}),a.Members=a.Members+1,e.groups[n.ServerName]=a}e.listLoading=!1}))},spanMethod:function(e){var t=e.row,r=e.rowIndex,n=e.columnIndex;if(1===n){var a=this.groups[t.ServerName];return r===a.StartIdx?{rowspan:a.Members,colspan:1}:{rowspan:0,colspan:0}}return{rowspan:1,colspan:1}},formatDate:function(e){return Object(c["c"])(e)},FormatName:function(e){return Object(f["b"])(e)},formatSize:function(e){return Object(f["e"])(e)},formatTags:function(e){return e.split(",")},formatImageId:function(e){return e.substr(7,12)},openDetail:function(e){var t=this;this.dialogDetailVisible=!0,this.detailLoading=!0,this.selectRow=e;var r={ImageId:e.ImageId};l(r).then((function(e){t.detailLoading=!1,t.selectRow=e.data,console.log(e.data)}))}}},g=d,p=r("2877"),v=Object(p["a"])(g,n,a,!1,null,null,null);t["default"]=v.exports},f183:function(e,t,r){var n=r("d012"),a=r("861d"),i=r("5135"),o=r("9bf2").f,s=r("90e3"),u=r("bb2f"),l=s("meta"),c=0,f=Object.isExtensible||function(){return!0},d=function(e){o(e,l,{value:{objectID:"O"+ ++c,weakData:{}}})},g=function(e,t){if(!a(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,l)){if(!f(e))return"F";if(!t)return"E";d(e)}return e[l].objectID},p=function(e,t){if(!i(e,l)){if(!f(e))return!0;if(!t)return!1;d(e)}return e[l].weakData},v=function(e){return u&&h.REQUIRED&&f(e)&&!i(e,l)&&d(e),e},h=e.exports={REQUIRED:!1,fastKey:g,getWeakData:p,onFreeze:v};n[l]=!0}}]);