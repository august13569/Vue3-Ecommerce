"use strict";(self["webpackChunkbrite"]=self["webpackChunkbrite"]||[]).push([[832],{9837:function(e,t,a){var s=a(7424),l=a.n(s);t.Z={methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()}},mounted(){this.modal=new(l())(this.$refs.modal)}}},696:function(e,t,a){a.d(t,{Z:function(){return w}});var s=a(6252),l=a(3577),i=a(9963);const r={"aria-label":"Page navigation example"},n={class:"pagination justify-content-center"},d=(0,s._)("span",{"aria-hidden":"true"},"«",-1),o=[d],u=["onClick"],p=(0,s._)("span",{"aria-hidden":"true"},"»",-1),h=[p];function c(e,t,a,d,p,c){return(0,s.wg)(),(0,s.iD)("nav",r,[(0,s._)("ul",n,[(0,s._)("li",{class:(0,l.C_)([{disabled:!a.pages.has_pre},"page-item"])},[(0,s._)("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[0]||(t[0]=(0,i.iM)((e=>c.switchPage("Previous")),["prevent"]))},o)],2),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.pages.total_pages,(e=>((0,s.wg)(),(0,s.iD)("li",{class:(0,l.C_)(["page-item",{active:e===a.pages.current_page}]),key:e},[(0,s._)("a",{class:"page-link",href:"#",onClick:(0,i.iM)((t=>c.updatePage(e)),["prevent"])},(0,l.zw)(e),9,u)],2)))),128)),(0,s._)("li",{class:(0,l.C_)([{disabled:!a.pages.has_next},"page-item"])},[(0,s._)("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[1]||(t[1]=(0,i.iM)((e=>c.switchPage("Next")),["prevent"]))},h)],2)])])}var g={props:["pages"],methods:{updatePage(e){this.$emit("emit-pages",e)},switchPage(e){this.pages.has_next&&"Next"===e?this.$emit("emit-pages",this.pages.current_page+1):this.pages.has_pre&&"Previous"===e&&this.$emit("emit-pages",this.pages.current_page-1)}}},m=a(3744);const _=(0,m.Z)(g,[["render",c]]);var w=_},5832:function(e,t,a){a.r(t),a.d(t,{default:function(){return de}});var s=a(6252),l=a(3577),i=a(9963);const r={class:"table-responsive n-sbar"},n={class:"table mt-4"},d=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"購買時間"),(0,s._)("th",null,"Email"),(0,s._)("th",null,"購買款項"),(0,s._)("th",null,"應付金額"),(0,s._)("th",null,"是否付款"),(0,s._)("th",null,"編輯")])],-1),o=["textContent"],u={class:"list-unstyled"},p={class:"text-right"},h={class:"form-check form-switch"},c=["for"],g=["id","onUpdate:modelValue","onChange"],m={key:0},_={key:1},w={class:"btn-group"},b=["onClick"],y=["onClick"];function k(e,t,a,k,v,f){const O=(0,s.up)("Loading"),D=(0,s.up)("ToastMessages"),x=(0,s.up)("DeleteModal"),$=(0,s.up)("OrderModal"),P=(0,s.up)("BackPagination");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(O,{active:v.isLoading},null,8,["active"]),(0,s.Wm)(D),(0,s.Wm)(x,{onDeleteItem:f.deletOrder},null,8,["onDeleteItem"]),(0,s.Wm)($,{order:v.tempOrder,ref:"orderModal"},null,8,["order"]),(0,s._)("div",r,[(0,s._)("table",n,[d,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(v.orders,((t,a)=>((0,s.wg)(),(0,s.iD)(s.HY,{key:a},[v.orders.length?((0,s.wg)(),(0,s.iD)("tr",{key:0,class:(0,l.C_)({"text-secondary":!t.is_paid})},[(0,s._)("td",null,(0,l.zw)(e.$filters.date(t.create_at)),1),(0,s._)("td",null,[t.user?((0,s.wg)(),(0,s.iD)("span",{key:0,textContent:(0,l.zw)(t.user.email)},null,8,o)):(0,s.kq)("",!0)]),(0,s._)("td",null,[(0,s._)("ul",u,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.products,((e,t)=>((0,s.wg)(),(0,s.iD)("li",{key:t},(0,l.zw)(e.product.title)+" 數量："+(0,l.zw)(e.qty)+" "+(0,l.zw)(e.product.unit),1)))),128))])]),(0,s._)("td",p,(0,l.zw)(t.total),1),(0,s._)("td",null,[(0,s._)("div",h,[(0,s._)("label",{class:"form-check-label",for:`paidSwitch${t.id}`},[(0,s.wy)((0,s._)("input",{class:"form-check-input",type:"checkbox",id:`paidSwitch${t.id}`,"onUpdate:modelValue":e=>t.is_paid=e,onChange:e=>f.updatePaid(t)},null,40,g),[[i.e8,t.is_paid]]),t.is_paid?((0,s.wg)(),(0,s.iD)("span",m,"已付款")):((0,s.wg)(),(0,s.iD)("span",_,"未付款"))],8,c)])]),(0,s._)("td",null,[(0,s._)("div",w,[(0,s._)("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:e=>f.openModal(!1,t)}," 檢視 ",8,b),(0,s._)("button",{class:"btn btn-outline-danger btn-sm",type:"button","data-bs-toggle":"modal","data-bs-target":"#deleteModal",onClick:e=>v.delItemId=t.id}," 刪除 ",8,y)])])],2)):(0,s.kq)("",!0)],64)))),128))])])]),(0,s.Wm)(P,{pages:v.pagination,onEmitPages:f.getOrders},null,8,["pages","onEmitPages"])],64)}var v=a(696),f=a(3008),O=a(2909);const D={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"orderModalLabel","aria-hidden":"true",ref:"modal"},x={class:"modal-dialog modal-xl",role:"document"},$={class:"modal-content border-0"},P=(0,s._)("div",{class:"modal-header bg-dark text-white"},[(0,s._)("h5",{class:"modal-title",id:"orderModalLabel"},[(0,s._)("span",null,"訂單細節")]),(0,s._)("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})],-1),M={class:"modal-body"},z={class:"row"},C={class:"col-md-4"},L=(0,s._)("h3",null,"用戶資料",-1),Z={class:"table"},I={key:0},H=(0,s._)("th",{style:{width:"100px"}},"姓名",-1),Y=(0,s._)("th",null,"Email",-1),q=(0,s._)("th",null,"電話",-1),N=(0,s._)("th",null,"地址",-1),S={class:"col-md-8"},W=(0,s._)("h3",null,"訂單細節",-1),E={class:"table"},K=(0,s._)("th",{style:{width:"100px"}},"訂單編號",-1),T=(0,s._)("th",null,"下單時間",-1),j=(0,s._)("th",null,"付款時間",-1),B={key:0},U={key:1},V=(0,s._)("th",null,"付款狀態",-1),A={key:0,class:"text-success"},F={key:1,class:"text-danger"},G=(0,s._)("th",null,"總金額",-1),J=(0,s._)("h3",null,"選購商品",-1),Q={class:"table"},R=(0,s._)("thead",null,[(0,s._)("tr")],-1),X={class:"text-end"};function ee(e,t,a,i,r,n){return(0,s.wg)(),(0,s.iD)("div",D,[(0,s._)("div",x,[(0,s._)("div",$,[P,(0,s._)("div",M,[(0,s._)("div",z,[(0,s._)("div",C,[L,(0,s._)("table",Z,[r.tempOrder.user?((0,s.wg)(),(0,s.iD)("tbody",I,[(0,s._)("tr",null,[H,(0,s._)("td",null,(0,l.zw)(r.tempOrder.user.name),1)]),(0,s._)("tr",null,[Y,(0,s._)("td",null,(0,l.zw)(r.tempOrder.user.email),1)]),(0,s._)("tr",null,[q,(0,s._)("td",null,(0,l.zw)(r.tempOrder.user.tel),1)]),(0,s._)("tr",null,[N,(0,s._)("td",null,(0,l.zw)(r.tempOrder.user.address),1)])])):(0,s.kq)("",!0)])]),(0,s._)("div",S,[W,(0,s._)("table",E,[(0,s._)("tbody",null,[(0,s._)("tr",null,[K,(0,s._)("td",null,(0,l.zw)(r.tempOrder.id),1)]),(0,s._)("tr",null,[T,(0,s._)("td",null,(0,l.zw)(e.$filters.date(r.tempOrder.create_at)),1)]),(0,s._)("tr",null,[j,(0,s._)("td",null,[r.tempOrder.paid_date?((0,s.wg)(),(0,s.iD)("span",B,(0,l.zw)(e.$filters.date(r.tempOrder.paid_date)),1)):((0,s.wg)(),(0,s.iD)("span",U,"時間不正確"))])]),(0,s._)("tr",null,[V,(0,s._)("td",null,[r.tempOrder.is_paid?((0,s.wg)(),(0,s.iD)("strong",A,"已付款")):((0,s.wg)(),(0,s.iD)("span",F,"尚未付款"))])]),(0,s._)("tr",null,[G,(0,s._)("td",null,(0,l.zw)(e.$filters.currency(r.tempOrder.total)),1)])])]),J,(0,s._)("table",Q,[R,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.tempOrder.products,(t=>((0,s.wg)(),(0,s.iD)("tr",{key:t.id},[(0,s._)("th",null,(0,l.zw)(t.product.title),1),(0,s._)("td",null,(0,l.zw)(t.qty)+" / "+(0,l.zw)(t.product.unit),1),(0,s._)("td",X,(0,l.zw)(e.$filters.currency(t.final_total)),1)])))),128))])])])])])])])],512)}var te=a(9837),ae={name:"orderModal",props:{order:{type:Object,default(){return{}}}},data(){return{status:{},modal:"",tempOrder:{},isPaid:!1}},emits:["update-product"],mixins:[te.Z],inject:["emitter"],watch:{order(){this.tempOrder=this.order,this.isPaid=this.tempOrder.is_paid}}},se=a(3744);const le=(0,se.Z)(ae,[["render",ee]]);var ie=le,re={data(){return{orders:{},isNew:!1,pagination:{},isLoading:!1,tempOrder:{},currentPage:1,delItemId:""}},components:{BackPagination:v.Z,DeleteModal:f.Z,ToastMessages:O.Z,OrderModal:ie},methods:{getOrders(e=1){this.currentPage=e;const t=`https://vue3-course-api.hexschool.io/api/test666520/admin/orders?page=${e}`;this.isLoading=!0,this.$http.get(t,this.tempProduct).then((e=>{this.orders=e.data.orders,this.pagination=e.data.pagination,this.isLoading=!1})).catch((()=>{this.isLoading=!1,this.$emitter.emit("push-message",{style:"danger",title:"Something went wrong, please try again."})}))},openModal(e,t){this.tempOrder={...t},this.isNew=!1;const a=this.$refs.orderModal;a.showModal()},updatePaid(e){this.isLoading=!0;const t=`https://vue3-course-api.hexschool.io/api/test666520/admin/order/${e.id}`,a={is_paid:e.is_paid};this.$http.put(t,{data:a}).then((()=>{this.isLoading=!1,this.getOrders(this.currentPage),this.$emitter.emit("push-message",{style:"primary",title:"The statement has been changed"})})).catch((()=>{this.isLoading=!1,this.$emitter.emit("push-message",{style:"danger",title:"Something went wrong, please try again."})}))},deletOrder(){const e=`https://vue3-course-api.hexschool.io/api/test666520/admin/order/${this.delItemId}`;this.isLoading=!0,this.$http.delete(e).then((()=>{this.isLoading=!1,this.$emitter.emit("push-message",{style:"primary",title:"The item has been removed."}),this.getOrders(this.currentPage)})).catch((()=>{this.isLoading=!1,this.$emitter.emit("push-message",{style:"danger",title:"Something went wrong, please try again."})}))}},created(){this.getOrders()}};const ne=(0,se.Z)(re,[["render",k]]);var de=ne}}]);
//# sourceMappingURL=832.4cce930b.js.map