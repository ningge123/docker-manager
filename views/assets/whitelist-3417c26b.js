import{a as f,b as g,d as u}from"./config-d13a5244.js";import{_ as I,r as d,A as $,o as p,c as b,a as D,b as a,w as e,e as s,t as n,x as v,y as w}from"./index-a7dfea41.js";import{E as x}from"./Delete-b08050a7.js";const L={data(){return{listLoading:!1,list:[],ElIconDelete:x}},created(){this.fetchData()},methods:{fetchData(){this.listLoading=!0,f().then(t=>{this.list=t.data,this.listLoading=!1})},addWhiteIp(){this.$prompt(this.$t("请输入")+"IP",this.$t("提示"),{confirmButtonText:this.$t("确定"),cancelButtonText:this.$t("取消"),inputPattern:/^((25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d))|\*)((\/([012]\d|3[012]|\d))?)(,((25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d))|\*)((\/([012]\d|3[012]|\d))?))*$/,inputErrorMessage:"IP"+this.$t("格式不正确")}).then(({value:t})=>{g({IP:t}).then(r=>{this.$message(this.$t("添加成功"))})})},deleteWhiteIp(t){this.listLoading=!0,u(t).then(r=>{this.$message(this.$t("删除成功")),this.listLoading=!1,this.fetchData()})}}},k={class:"app-container"},P={style:{"padding-bottom":"10px"}};function W(t,r,y,B,l,c){const h=d("el-button"),o=d("el-table-column"),_=d("el-table"),m=$("loading");return p(),b("div",k,[D("div",P,[a(h,{type:"primary",onClick:c.addWhiteIp},{default:e(()=>[s(n(t.$t("添加"))+" IP",1)]),_:1},8,["onClick"])]),v((p(),w(_,{data:l.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""},{default:e(()=>[a(o,{align:"center",label:"ID",width:"95"},{default:e(i=>[s(n(i.$index+1),1)]),_:1}),a(o,{label:"IP",align:"center"},{default:e(i=>[s(n(i.row.IP),1)]),_:1}),a(o,{align:"center",label:t.$t("操作"),width:"270"},{default:e(({row:i})=>[a(h,{type:"danger",size:"small",icon:l.ElIconDelete,onClick:C=>c.deleteWhiteIp(i)},{default:e(()=>[s(n(t.$t("删除")),1)]),_:2},1032,["icon","onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[m,l.listLoading]])])}const V=I(L,[["render",W]]);export{V as default};
