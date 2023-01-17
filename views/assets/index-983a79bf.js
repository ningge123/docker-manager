import{C as x,g as P,b as I,c as L}from"./container-0cbdcbf2.js";import{g as z}from"./server-7e1a8e2b.js";import{_ as M,D as Q,r as c,A as O,o as g,c as f,a as C,b as r,w as n,F as N,C as b,y as v,x as T,e as m,t as o,L as E}from"./index-6227ac09.js";import{P as F,a as U}from"./docker-6b00f3d6.js";import{E as B}from"./Search-c927d21b.js";const R={components:{},data(){return{list:[],page:{currentPage:1,pageSize:10,total:0},groupList:[],groups:{},listLoading:!1,dialogDetailVisible:!1,selectRow:{},filterSearch:{Name:""},res:{serverNames:[],ContainerNames:[],containerInfos:[]},listQuery:{ServerNames:[],ContainerNames:[],state:void 0},ElIconSearch:B}},computed:{},created(){this.fetchData(),this.fetchContainerInfoData(),this.fetchServerNames()},methods:{statusFilter_filter(e){return{published:"success",draft:"gray",deleted:"danger"}[e]},ContainerOperator(e,a){this.listLoading=!0;const i={ContainerId:a.ContainerId,ServerNames:[a.ServerName]};x(e,i).then(s=>{s.code==="100200"?this.$message({message:this.$t("命令下发成功"),type:"success"}):this.$message({message:s.msg,type:"warning"}),this.listLoading=!1})},fetchServerNames(){this.listLoading=!0,z().then(e=>{this.res.serverNames=e.data,this.listLoading=!1})},fetchContainerInfoData(){this.loading=!0,P().then(e=>{const a=e.data;this.res.ContainerNames=[];for(const i in a)for(const s in a[i].containers){const l=a[i].containers[s].Name;this.res.ContainerNames.indexOf(l)===-1&&this.res.ContainerNames.push(l)}this.loading=!1})},fetchData(){this.listLoading=!0,this.listQuery.currentPage=this.page.currentPage,this.listQuery.pageSize=this.page.pageSize,I(this.listQuery).then(e=>{this.list=e.data.list,this.page=e.data.page,this.list||(this.list=[]),this.list.sort(function(a,i){return a.ServerName.localeCompare(i.ServerName)}),this.groupList=new Set(this.list.map(a=>a.ServerName)),this.groups={};for(let a=0;a<this.list.length;a++){const i=this.list[a];let s=this.groups[i.ServerName];s||(s={ServerName:i.ServerName,Members:0,StartIdx:a}),s.Members=s.Members+1,this.groups[i.ServerName]=s}this.listLoading=!1})},spanMethod(e){const{row:a,rowIndex:i,columnIndex:s}=e;if(s===1){const l=this.groups[a.ServerName];return i===l.StartIdx?{rowspan:l.Members,colspan:1}:{rowspan:0,colspan:0}}else return{rowspan:1,colspan:1}},handleSizeChange(e){this.page.pageSize=e,this.fetchData()},handleCurrentChange(e){this.page.currentPage=e,this.fetchData()},formatDate(e){return Q(e)},PortsToStr(e){return F(e)},PortToStr(e){const a=(e.IP?e.IP:"")+(e.PublicPort?":"+e.PublicPort:"");return(a?a+" -> ":"")+e.PrivatePort+"/"+e.Type},FormatName(e){return U(e)},openDetail(e){this.selectRow=e,this.dialogDetailVisible=!0;const a={ContainerId:e.ContainerId};L(a).then(i=>{this.selectRow=i.data})},filterMatch(e){return!this.filterSearch.Name||e.Name.toLowerCase().includes(this.filterSearch.Name.toLowerCase())}}},j={class:"app-container"},A={class:"filter-container"},G=m(" Search "),J=m(" Name ");function q(e,a,i,s,l,u){const S=c("el-option"),_=c("el-select"),h=c("el-button"),d=c("el-table-column"),w=c("el-input"),y=c("el-table"),k=c("el-pagination"),V=c("el-dialog"),D=O("loading");return g(),f("div",j,[C("div",A,[r(_,{modelValue:l.listQuery.ServerNames,"onUpdate:modelValue":a[0]||(a[0]=t=>l.listQuery.ServerNames=t),multiple:"",filterable:"",placeholder:e.$t("主机"),clearable:"","collapse-tags":"",class:"filter-item",style:{width:"300px"}},{default:n(()=>[(g(!0),f(N,null,b(l.res.serverNames,t=>(g(),v(S,{key:t,label:t,value:t},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"]),r(_,{modelValue:l.listQuery.ContainerNames,"onUpdate:modelValue":a[1]||(a[1]=t=>l.listQuery.ContainerNames=t),multiple:"",filterable:"",placeholder:e.$t("容器名称"),clearable:"","collapse-tags":"",class:"filter-item",style:{width:"300px","margin-left":"10px"}},{default:n(()=>[(g(!0),f(N,null,b(l.res.ContainerNames,t=>(g(),v(S,{key:t,label:t,value:t},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"]),r(_,{modelValue:l.listQuery.state,"onUpdate:modelValue":a[2]||(a[2]=t=>l.listQuery.state=t),placeholder:"state",clearable:"",filterable:"",style:{width:"140px","margin-left":"10px","margin-right":"10px"},class:"filter-item"},{default:n(()=>[r(S,{key:"running",label:"running",value:"running"}),r(S,{key:"exited",label:"exited",value:"exited"})]),_:1},8,["modelValue"]),r(h,{class:"filter-item",type:"primary",icon:l.ElIconSearch,onClick:u.fetchData},{default:n(()=>[G]),_:1},8,["icon","onClick"])]),T((g(),v(y,{data:l.list.filter(t=>u.filterMatch(t)),"span-method":u.spanMethod,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":"",style:{"margin-top":"20px"}},{default:n(()=>[r(d,{align:"center",label:"ID",width:"65"},{default:n(t=>[m(o(t.$index+1),1)]),_:1}),r(d,{label:"ServerName",width:"170"},{default:n(t=>[m(o(t.row.ServerName),1)]),_:1}),r(d,{label:"Name"},{default:n(t=>[r(h,{title:t.row.Name,type:"primary",link:"",onClick:p=>u.openDetail(t.row)},{default:n(()=>[m(o(t.row.Name),1)]),_:2},1032,["title","onClick"])]),header:n(()=>[J,r(w,{modelValue:l.filterSearch.Name,"onUpdate:modelValue":a[3]||(a[3]=t=>l.filterSearch.Name=t),size:"mini",placeholder:e.$t("输入关键字过滤"),style:{width:"140px"}},null,8,["modelValue","placeholder"])]),_:1}),r(d,{label:"IMAGE",align:"center"},{default:n(t=>[C("span",null,o(t.row.Image),1)]),_:1}),r(d,{label:"Status",width:"200",align:"center"},{default:n(t=>[m(o(t.row.Status),1)]),_:1}),r(d,{label:"State",width:"80",align:"center"},{default:n(t=>[C("span",{style:E({color:t.row.State==="running"?"#03c961":"#d70404"})},o(t.row.State),5)]),_:1}),r(d,{label:"Ports",width:"270",align:"center"},{default:n(t=>[(g(!0),f(N,null,b(t.row.Ports,p=>(g(),f("div",{key:p.key},o(u.PortToStr(p)),1))),128))]),_:1}),r(d,{align:"center",prop:"created_at",label:"Created",width:"200"},{default:n(t=>[C("span",null,o(u.formatDate(t.row.Created)),1)]),_:1}),r(d,{"class-name":"status-col",label:e.$t("操作"),width:"170",align:"center"},{default:n(t=>[r(h,{type:"primary",link:"",loading:l.listLoading,disabled:t.row.State!=="running",onClick:p=>u.ContainerOperator("stop",t.row)},{default:n(()=>[m(o(e.$t("停止")),1)]),_:2},1032,["loading","disabled","onClick"]),r(h,{type:"danger",link:"",loading:l.listLoading,onClick:p=>u.ContainerOperator("remove",t.row)},{default:n(()=>[m(o(e.$t("删除")),1)]),_:2},1032,["loading","onClick"]),r(h,{type:"primary",link:"",loading:l.listLoading,onClick:p=>u.ContainerOperator("restart",t.row)},{default:n(()=>[m(o(e.$t("重启")),1)]),_:2},1032,["loading","onClick"])]),_:1},8,["label"])]),_:1},8,["data","span-method"])),[[D,l.listLoading]]),r(k,{"hide-on-single-page":!0,"current-page":l.page.currentPage,"page-sizes":[10,30,50,100,200,300,400],"page-size":l.page.pageSize,layout:"prev, pager, next, jumper, sizes, total",total:l.page.total,style:{width:"500px",margin:"10px auto 0"},onSizeChange:u.handleSizeChange,onCurrentChange:u.handleCurrentChange},null,8,["current-page","page-size","total","onSizeChange","onCurrentChange"]),r(V,{modelValue:l.dialogDetailVisible,"onUpdate:modelValue":a[4]||(a[4]=t=>l.dialogDetailVisible=t),title:e.$t("详情")},{default:n(()=>[C("pre",null,"    "+o(JSON.stringify(l.selectRow,null,2))+`
          `,1)]),_:1},8,["modelValue","title"])])}const Z=M(R,[["render",q]]);export{Z as default};
