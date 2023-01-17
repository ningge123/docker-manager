import{_ as S,M as z,D as N,N as E,O as P,P as q,Q as A,r as m,A as B,o as c,c as U,a as V,b as r,w as o,e as n,t as i,x as C,y as b,F as I,C as T}from"./index-a7dfea41.js";function M(e,l,s){const g=/^1[3|4|5|6|7|8|9]\d{9}$/;if(l)if(g.test(l))s();else return s(new Error("请填写正确的手机号码！"));else return s(new Error("请填写手机号码！"))}function G(e,l,s){const g=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;if(l)if(g.test(l))s();else return s(new Error("证件号码不正确"));else return s(new Error("证件号码不能为空"))}const R={components:{},data(){return{dialogVisible:!1,list:[],listLoading:!1,roleStr:{ADMIN:this.$t("超级管理员"),AGENT:this.$t("客户端代理")},roles:[{label:this.$t("超级管理员"),value:"ADMIN"},{label:this.$t("客户端代理"),value:"AGENT"}],formLoading:!1,rules:{nickname:[{required:!0,message:this.$t("请输入昵称"),trigger:"blur"},{min:3,max:15,message:this.$t("请输入正确的昵称"),trigger:"blur"}],username:[{required:!0,message:this.$t("请输入用户名"),trigger:"blur"},{min:3,max:20,message:this.$t("请输入正确的用户名"),trigger:"blur"}],checkPhone:[{required:!0,validator:M,trigger:"blur"}],checkId:[{required:!0,validator:G,trigger:"blur"}],mobile:[{required:!0,message:this.$t("请输入手机号码"),trigger:"blur"},{min:6,max:11,message:this.$t("请输入正确的手机号码"),trigger:"blur"},{pattern:/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,message:this.$t("请输入正确的手机号码")}],email:[{required:!0,message:this.$t("请输入邮箱地址"),trigger:"blur"},{type:"email",message:this.$t("请输入正确的邮箱地址"),trigger:["blur","change"]}],password:[{required:!0,message:this.$t("请输入密码"),trigger:"blur"}]},formUser:{nickname:"",username:"",mobile:"",email:"",password:"",role:""},page:{currentPage:1,pageSize:10,total:0}}},created(){this.fetchData()},methods:{fetchData(){this.listLoading=!0,z(this.page).then(e=>{this.list=e.data.list,this.page=e.data.page,console.log("this.page:",this.page),this.listLoading=!1})},handleSizeChange(e){this.page.pageSize=e,this.fetchData()},handleCurrentChange(e){this.page.currentPage=e,this.fetchData()},formatDate(e){return N(e)},formatStatus(e){return e===0?this.$t("正常"):this.$t("禁用")},formatRole(e){return{ADMIN:this.$t("超级管理员"),AGENT:this.$t("客户端代理")}[e]},changeStatus(e,l){e.Loading=!0;const s={username:e.username,status:l};E(s).then(g=>{g.Loading=!1,this.fetchData()})},resetPassword(e){e.Loading=!0;const l={username:e.username};P(l).then(s=>{s.Loading=!1,this.$alert(this.$t("密码仅显示一次，请备份：")+s.data,this.$t("密码重置成功"),{confirmButtonText:this.$t("确定")}),this.fetchData()})},deleteUser(e){this.$confirm(this.$t("此操作将永久删除该用户, 是否继续?"),this.$t("提示"),{confirmButtonText:this.$t("确定"),cancelButtonText:this.$t("取消"),type:"warning"}).then(()=>{e.Loading=!0;const l={id:e.id};q(l).then(s=>{s.Loading=!1,this.fetchData()})})},addUser(){this.formLoading=!0,A(this.formUser).then(e=>{this.formLoading=!1,this.dialogVisible=!1,this.fetchData()}).catch(e=>{console.log(e),this.formLoading=!1})}}},F={class:"app-container"},j={style:{"padding-bottom":"10px"}},O={class:"dialog-footer"};function Q(e,l,s,g,a,u){const h=m("el-button"),d=m("el-table-column"),k=m("el-table"),$=m("el-pagination"),p=m("el-input"),f=m("el-form-item"),v=m("el-option"),D=m("el-select"),y=m("el-form"),L=m("el-dialog"),_=B("loading");return c(),U("div",F,[V("div",j,[r(h,{type:"primary",onClick:l[0]||(l[0]=t=>a.dialogVisible=!0)},{default:o(()=>[n(i(e.$t("添加用户")),1)]),_:1})]),C((c(),b(k,{data:a.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""},{default:o(()=>[r(d,{label:"ID",width:"95",align:"center"},{default:o(t=>[n(i(t.row.id),1)]),_:1}),r(d,{label:"Username",width:"150",align:"center"},{default:o(t=>[n(i(t.row.username),1)]),_:1}),r(d,{label:"Mobile",width:"150",align:"center"},{default:o(t=>[n(i(t.row.mobile),1)]),_:1}),r(d,{label:"Email",width:"170",align:"center"},{default:o(t=>[n(i(t.row.email),1)]),_:1}),r(d,{label:"Nickname",width:"170",align:"center"},{default:o(t=>[n(i(t.row.nickname),1)]),_:1}),r(d,{label:"Role",align:"center"},{default:o(t=>[n(i(u.formatRole(t.row.role)),1)]),_:1}),r(d,{label:e.$t("状态"),align:"center"},{default:o(t=>[n(i(u.formatStatus(t.row.status)),1)]),_:1},8,["label"]),r(d,{label:"Create",align:"center"},{default:o(t=>[n(i(u.formatDate(t.row.create_date)),1)]),_:1}),r(d,{label:"Update",align:"center"},{default:o(t=>[n(i(u.formatDate(t.row.update_date)),1)]),_:1}),r(d,{label:e.$t("操作"),align:"center"},{default:o(t=>[r(h,{size:"small",type:"danger",link:"",onClick:w=>u.deleteUser(t.row)},{default:o(()=>[n(i(e.$t("删除")),1)]),_:2},1032,["onClick"]),r(h,{size:"small",type:"primary",link:"",onClick:w=>u.changeStatus(t.row,t.row.status===0?1:0)},{default:o(()=>[n(i(t.row.status===0?e.$t("禁用"):e.$t("恢复")),1)]),_:2},1032,["onClick"]),r(h,{size:"small",type:"primary",link:"",onClick:w=>u.resetPassword(t.row)},{default:o(()=>[n(i(e.$t("密码重置")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[_,a.listLoading]]),r($,{"hide-on-single-page":!0,"current-page":a.page.currentPage,"page-sizes":[10,30,50,100,200,300,400],"page-size":a.page.pageSize,layout:"prev, pager, next, jumper, sizes, total",total:a.page.total,style:{width:"500px",margin:"0 auto","margin-top":"10px"},onSizeChange:u.handleSizeChange,onCurrentChange:u.handleCurrentChange},null,8,["current-page","page-size","total","onSizeChange","onCurrentChange"]),r(L,{modelValue:a.dialogVisible,"onUpdate:modelValue":l[8]||(l[8]=t=>a.dialogVisible=t),title:e.$t("添加用户"),width:"30%"},{footer:o(()=>[V("span",O,[r(h,{onClick:l[7]||(l[7]=t=>a.dialogVisible=!1)},{default:o(()=>[n(i(e.$t("取消")),1)]),_:1}),r(h,{type:"primary",onClick:u.addUser},{default:o(()=>[n(i(e.$t("确定")),1)]),_:1},8,["onClick"])])]),default:o(()=>[C((c(),b(y,{model:a.formUser,"label-position":"right","label-width":"120px"},{default:o(()=>[r(f,{label:e.$t("昵称"),rules:a.rules.nickname},{default:o(()=>[r(p,{modelValue:a.formUser.nickname,"onUpdate:modelValue":l[1]||(l[1]=t=>a.formUser.nickname=t),placeholder:e.$t("请输入昵称")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),r(f,{label:e.$t("用户名"),rules:a.rules.username},{default:o(()=>[r(p,{modelValue:a.formUser.username,"onUpdate:modelValue":l[2]||(l[2]=t=>a.formUser.username=t),placeholder:e.$t("请输入用户名")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),r(f,{label:e.$t("手机"),prop:"mobile",rules:a.rules.mobile},{default:o(()=>[r(p,{modelValue:a.formUser.mobile,"onUpdate:modelValue":l[3]||(l[3]=t=>a.formUser.mobile=t),placeholder:e.$t("请输入手机号码")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),r(f,{label:e.$t("邮箱"),prop:"email",rules:a.rules.email},{default:o(()=>[r(p,{modelValue:a.formUser.email,"onUpdate:modelValue":l[4]||(l[4]=t=>a.formUser.email=t),placeholder:e.$t("请输入邮箱地址")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),r(f,{label:e.$t("密码"),rules:a.rules.password},{default:o(()=>[r(p,{modelValue:a.formUser.password,"onUpdate:modelValue":l[5]||(l[5]=t=>a.formUser.password=t),placeholder:e.$t("请输入密码"),"show-password":""},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),r(f,{label:e.$t("角色")},{default:o(()=>[r(D,{modelValue:a.formUser.role,"onUpdate:modelValue":l[6]||(l[6]=t=>a.formUser.role=t),placeholder:e.$t("请选择")},{default:o(()=>[(c(!0),U(I,null,T(a.roles,t=>(c(),b(v,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model"])),[[_,a.formLoading]])]),_:1},8,["modelValue","title"])])}const x=S(R,[["render",Q],["__scopeId","data-v-075dcb53"]]);export{x as default};
