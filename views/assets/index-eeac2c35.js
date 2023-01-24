import{g as b,d as C}from"./task-a32ef7f1.js";import{_ as y,G as z,r as g,A as k,o as r,c as h,x as D,y as S,w as a,b as l,e as o,t as n,a as p,z as c}from"./index-6b156b47.js";const v={components:{},data(){return{list:[],page:{currentPage:1,pageSize:10,total:0},listLoading:!0}},created(){this.fetchData()},methods:{fetchData(){this.listLoading=!0,this.listQuery={},this.listQuery.currentPage=this.page.currentPage,this.listQuery.pageSize=this.page.pageSize,b(this.listQuery).then(e=>{this.list=e.data.list,this.page=e.data.page,this.listLoading=!1})},handleSizeChange(e){this.page.pageSize=e,this.fetchData()},handleCurrentChange(e){this.page.currentPage=e,this.fetchData()},formatDate(e){return z(e)},del(e){this.listLoading=!0,C({id:e.Id}).then(u=>{this.listLoading=!1,this.$message(this.$t("成功")),this.fetchData()})}}},L={class:"app-container"},N={key:0,style:{color:"#4573fa"}},T={key:1,style:{color:"#d70404"}},$={key:2,style:{color:"#03c961"}};function I(e,u,P,B,s,d){const i=g("el-table-column"),_=g("el-button"),f=g("el-table"),m=g("el-pagination"),w=k("loading");return r(),h("div",L,[D((r(),S(f,{data:s.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""},{default:a(()=>[l(i,{align:"center",label:"ID",width:"95"},{default:a(t=>[o(n(t.row.Id),1)]),_:1}),l(i,{label:e.$t("命令"),width:"230"},{default:a(t=>[o(n(t.row.Ch),1)]),_:1},8,["label"]),l(i,{label:"serverName",width:"170",align:"center"},{default:a(t=>[p("span",null,n(t.row.ServerName),1)]),_:1}),l(i,{label:"TaskId",width:"300",align:"center"},{default:a(t=>[o(n(t.row.TaskId),1)]),_:1}),l(i,{label:e.$t("信息"),align:"center"},{default:a(t=>[o(n(t.row.Msg),1)]),_:1},8,["label"]),l(i,{align:"center",prop:"created_at",label:e.$t("发布时间"),width:"200"},{default:a(t=>[p("span",null,n(d.formatDate(t.row.Ts)),1)]),_:1},8,["label"]),l(i,{label:e.$t("状态"),width:"100",align:"center"},{default:a(t=>[t.row.Code==="000000"?(r(),h("span",N,n(e.$t("正在进行")),1)):c("",!0),t.row.Code==="100100"?(r(),h("span",T,n(e.$t("失败")),1)):c("",!0),t.row.Code==="100200"?(r(),h("span",$,n(e.$t("成功")),1)):c("",!0)]),_:1},8,["label"]),l(i,{label:e.$t("操作"),align:"center",width:"170"},{default:a(t=>[l(_,{loading:s.listLoading,size:"small",type:"danger",link:"",onClick:Q=>d.del(t.row)},{default:a(()=>[o(n(e.$t("删除")),1)]),_:2},1032,["loading","onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[w,s.listLoading]]),l(m,{"hide-on-single-page":!0,"current-page":s.page.currentPage,"page-sizes":[10,30,50,100,200,300,400],"page-size":s.page.pageSize,layout:"prev, pager, next, jumper, sizes, total",total:s.page.total,style:{width:"500px",margin:"0 auto","margin-top":"10px"},onSizeChange:d.handleSizeChange,onCurrentChange:d.handleCurrentChange},null,8,["current-page","page-size","total","onSizeChange","onCurrentChange"])])}const j=y(v,[["render",I]]);export{j as default};
