"use strict";(self["webpackChunkbrite"]=self["webpackChunkbrite"]||[]).push([[253],{6187:function(e,s,t){t.d(s,{Z:function(){return U}});var a=t(6252),l=t(9963),r=t(745);const i={class:"d-flex flex-column align-items-center py-3",style:{"background-color":"#343a40"}},n=(0,a._)("img",{src:r,alt:"BRITE",width:"200",height:"60"},null,-1),o={class:"list-group list-group-horizontal"},c={class:"list-group-item bg-transparent border-0"},d=(0,a._)("i",{class:"bi bi-youtube fs-5"},null,-1),u=[d],m={class:"list-group-item bg-transparent border-0"},p=(0,a._)("i",{class:"bi bi-twitter-x fs-5"},null,-1),b=[p],f={class:"list-group-item bg-transparent border-0"},h=(0,a._)("i",{class:"bi bi-facebook fs-5"},null,-1),v=[h],g={class:"list-group-item bg-transparent border-0"},_=(0,a._)("i",{class:"bi bi-instagram fs-5"},null,-1),x=[_],y=(0,a._)("p",{class:"text-primary text-center mb-0"},"Copyright © 此為專案練習，無商業用途。",-1),k=(0,a._)("p",{class:"text-primary text-center"},"by Fulton",-1);function w(e,s){return(0,a.wg)(),(0,a.iD)("footer",i,[n,(0,a._)("ul",o,[(0,a._)("li",c,[(0,a._)("a",{href:"#",onClick:s[0]||(s[0]=(0,l.iM)((()=>{}),["prevent"]))},u)]),(0,a._)("li",m,[(0,a._)("a",{href:"#",onClick:s[1]||(s[1]=(0,l.iM)((()=>{}),["prevent"]))},b)]),(0,a._)("li",f,[(0,a._)("a",{href:"#",onClick:s[2]||(s[2]=(0,l.iM)((()=>{}),["prevent"]))},v)]),(0,a._)("li",g,[(0,a._)("a",{href:"#",onClick:s[3]||(s[3]=(0,l.iM)((()=>{}),["prevent"]))},x)])]),y,k])}var S=t(3744);const W={},C=(0,S.Z)(W,[["render",w]]);var U=C},2437:function(e,s,t){t.d(s,{Z:function(){return V}});var a=t(6252),l=t(3577),r=t(745);const i={class:"navbar navbar-expand-lg sticky-top bg-white shadow"},n={class:"container"},o=(0,a._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasNavbar","aria-controls":"offcanvasNavbar"},[(0,a._)("span",{class:"navbar-toggler-icon"})],-1),c=(0,a._)("h1",{class:"visually-hidden"},"BRITE",-1),d=(0,a._)("img",{class:"logo",src:r,alt:"BRITE"},null,-1),u={class:"offcanvas offcanvas-start",tabindex:"-1",id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel","data-bs-dismiss":"offcanvas"},m=(0,a._)("div",{class:"offcanvas-header d-flex justify-content-end d-lg-none"},[(0,a._)("button",{class:"btn-close text-reset",type:"button","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),p={class:"offcanvas-body"},b={class:"navbar-nav justify-content-center flex-grow-1 pe-3"},f={class:"nav-item px-2"},h={class:"nav-item px-2"},v={class:"nav-item px-2"},g={class:"nav-item px-2"},_={class:"d-flex"},x=(0,a._)("i",{class:"bi bi-person-fill text-secondary"},null,-1),y={class:"position-relative align-self-center"},k=(0,a._)("i",{class:"bi bi-bag-fill text-secondary"},null,-1),w={key:0,class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"},S=(0,a._)("span",{class:"visually-hidden"},"unread messages",-1);function W(e,s,t,r,W,C){const U=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("nav",i,[(0,a._)("div",n,[o,(0,a.Wm)(U,{to:"/",class:"navbar-brand me-0"},{default:(0,a.w5)((()=>[c,d])),_:1}),(0,a._)("div",u,[m,(0,a._)("div",p,[(0,a._)("ul",b,[(0,a._)("li",f,[(0,a.Wm)(U,{to:"/about",class:"nav-link link-secondary"},{default:(0,a.w5)((()=>[(0,a.Uk)("About")])),_:1})]),(0,a._)("li",h,[(0,a.Wm)(U,{to:"/products",class:"nav-link link-secondary"},{default:(0,a.w5)((()=>[(0,a.Uk)("Products")])),_:1})]),(0,a._)("li",v,[(0,a.Wm)(U,{to:"/faq",class:"nav-link link-secondary"},{default:(0,a.w5)((()=>[(0,a.Uk)("FAQ")])),_:1})]),(0,a._)("li",g,[(0,a.Wm)(U,{to:"/contact",class:"nav-link link-secondary"},{default:(0,a.w5)((()=>[(0,a.Uk)("Contact")])),_:1})])])])]),(0,a._)("div",_,[(0,a.Wm)(U,{to:"/login",class:"fs-3 px-1"},{default:(0,a.w5)((()=>[x])),_:1}),(0,a._)("div",y,[(0,a.Wm)(U,{to:"/cart",class:"fs-5 px-1"},{default:(0,a.w5)((()=>[k])),_:1}),W.carts.length>0?((0,a.wg)(),(0,a.iD)("span",w,[(0,a.Uk)((0,l.zw)(C.cartNum)+" ",1),S])):(0,a.kq)("",!0)])])])])}var C={data(){return{carts:[],isSidebarOpen:!1}},methods:{getCart(){const e="https://vue3-course-api.hexschool.io/api/test666520/cart";this.$http.get(e).then((e=>{this.carts=e.data.data.carts})).catch((()=>{this.$emitter.emit("push-message",{style:"danger",title:"Something went wrong, please try again."})}))},observeSidebar(){const e=new MutationObserver((e=>{e.forEach((e=>{"dialog"===e.target.getAttribute("role")?(this.isSidebarOpen=!0,this.$emit("sidebar-status",!0)):(this.isSidebarOpen=!1,this.$emit("sidebar-status",!1))}))}));e.observe(document.getElementById("offcanvasNavbar"),{attributes:!0,attributeFilter:["role"]})}},computed:{cartNum(){return this.carts.length}},mounted(){this.$emitter.on("update-cart",(e=>{this.carts=e})),this.observeSidebar()},created(){this.getCart()}},U=t(3744);const F=(0,U.Z)(C,[["render",W]]);var V=F},6614:function(e,s,t){t.d(s,{Z:function(){return y}});var a=t(6252),l=t(3577);const r={class:"container my-4"},i={class:"row"},n={class:"col-lg-8 offset-lg-2 col-10 offset-1"},o={class:"position-relative"},c={class:"d-flex justify-content-between"},d={class:"d-flex flex-column w-25 align-items-center"},u=(0,a._)("span",null,"Cart",-1),m={class:"d-flex flex-column w-25 align-items-center"},p=(0,a._)("span",null,"Order",-1),b={class:"d-flex flex-column w-25 align-items-center"},f=(0,a._)("span",null,"Checkout",-1),h={class:"progress position-absolute translate-middle w-75",style:{"z-index":"-1",height:"0.125rem",top:"33%",left:"50%"}};function v(e,s,t,v,g,_){return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("div",i,[(0,a._)("div",n,[(0,a._)("div",o,[(0,a._)("div",c,[(0,a._)("div",d,[(0,a._)("i",{class:(0,l.C_)(["fs-2 text-primary bg-white",`${g.steps.firstStep}`])},null,2),u]),(0,a._)("div",m,[(0,a._)("i",{class:(0,l.C_)(["fs-2 bg-white",`${g.steps.secondStep}`])},null,2),p]),(0,a._)("div",b,[(0,a._)("i",{class:(0,l.C_)(["fs-2 bg-white",`${g.steps.thirdStep}`])},null,2),f])]),(0,a._)("div",h,[(0,a._)("div",{class:"progress-bar",role:"progressbar",style:(0,l.j5)({width:e.progressWidth}),"aria-valuenow":"0","aria-valuemin":"0","aria-valuemax":"100"},null,4)])])])])])}var g={props:["title"],data(){return{steps:{firstStep:"",secondStep:"",thirdStep:""}}},methods:{barStatus(){switch(this.title){case"Cart":this.steps.firstStep="bi bi-1-circle text-primary",this.steps.secondStep="bi bi-2-circle text-black-50",this.steps.thirdStep="bi bi-3-circle text-black-50",this.progressWidth="0%";break;case"Order":this.steps.firstStep="bi bi-check-circle-fill text-primary",this.steps.secondStep="bi bi-2-circle text-primary",this.steps.thirdStep="bi bi-3-circle text-black-50",this.progressWidth="50%";break;case"Checkout":this.steps.firstStep="bi bi-check-circle-fill text-primary",this.steps.secondStep="bi bi-check-circle-fill text-primary",this.steps.thirdStep="bi bi-3-circle text-primary",this.progressWidth="100%";break;default:break}}},created(){this.barStatus()}},_=t(3744);const x=(0,_.Z)(g,[["render",v]]);var y=x},253:function(e,s,t){t.r(s),t.d(s,{default:function(){return U}});var a=t(6252),l=t(3577),r=t(9963);const i={class:"container"},n={class:"my-5 row justify-content-center"},o={class:"mb-3"},c=(0,a._)("label",{for:"email",class:"form-label"},[(0,a.Uk)("Email"),(0,a._)("span",{class:"text-danger"}," *")],-1),d={class:"mb-3"},u=(0,a._)("label",{for:"name",class:"form-label"},[(0,a.Uk)("Name"),(0,a._)("span",{class:"text-danger"}," *")],-1),m={class:"mb-3"},p=(0,a._)("label",{for:"tel",class:"form-label"},[(0,a.Uk)("Phone"),(0,a._)("span",{class:"text-danger"}," *")],-1),b={class:"mb-3"},f=(0,a._)("label",{for:"address",class:"form-label"},[(0,a.Uk)("Address"),(0,a._)("span",{class:"text-danger"}," *")],-1),h={class:"mb-3"},v=(0,a._)("label",{for:"message",class:"form-label"},"Note",-1),g=(0,a._)("div",{class:"text-end"},[(0,a._)("button",{class:"btn btn-danger",type:"sumit"},"Place Order")],-1);function _(e,s,t,_,x,y){const k=(0,a.up)("Loading"),w=(0,a.up)("FrontNavbar"),S=(0,a.up)("StepBar"),W=(0,a.up)("Field"),C=(0,a.up)("ErrorMessage"),U=(0,a.up)("Form"),F=(0,a.up)("FrontFooter");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(k,{active:x.isLoading},null,8,["active"]),(0,a.Wm)(w),(0,a.Wm)(S,{title:x.stepsTitle},null,8,["title"]),(0,a._)("div",i,[(0,a._)("div",n,[(0,a.Wm)(U,{class:"col-md-6",onSubmit:y.createOrder},{default:(0,a.w5)((({errors:e})=>[(0,a._)("div",o,[c,(0,a.Wm)(W,{id:"email",name:"email",type:"email",class:(0,l.C_)(["form-control",{"is-invalid":e["email"]}]),placeholder:"Please enter your email",rules:"email|required",modelValue:x.form.user.email,"onUpdate:modelValue":s[0]||(s[0]=e=>x.form.user.email=e)},null,8,["class","modelValue"]),(0,a.Wm)(C,{name:"email",class:"invalid-feedback"})]),(0,a._)("div",d,[u,(0,a.Wm)(W,{id:"name",name:"name",type:"text",class:(0,l.C_)(["form-control",{"is-invalid":e["name"]}]),placeholder:"Please enter your name",rules:"required",modelValue:x.form.user.name,"onUpdate:modelValue":s[1]||(s[1]=e=>x.form.user.name=e)},null,8,["class","modelValue"]),(0,a.Wm)(C,{name:"name",class:"invalid-feedback"})]),(0,a._)("div",m,[p,(0,a.Wm)(W,{id:"tel",name:"phone",type:"tel",class:(0,l.C_)(["form-control",{"is-invalid":e["phone"]}]),placeholder:"Please enter your phone",rules:"required",modelValue:x.form.user.tel,"onUpdate:modelValue":s[2]||(s[2]=e=>x.form.user.tel=e)},null,8,["class","modelValue"]),(0,a.Wm)(C,{name:"phone",class:"invalid-feedback"})]),(0,a._)("div",b,[f,(0,a.Wm)(W,{id:"address",name:"address",type:"text",class:(0,l.C_)(["form-control",{"is-invalid":e["address"]}]),placeholder:"Please enter your address",rules:"required",modelValue:x.form.user.address,"onUpdate:modelValue":s[3]||(s[3]=e=>x.form.user.address=e)},null,8,["class","modelValue"]),(0,a.Wm)(C,{name:"address",class:"invalid-feedback"})]),(0,a._)("div",h,[v,(0,a.wy)((0,a._)("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":s[4]||(s[4]=e=>x.form.message=e)},null,512),[[r.nr,x.form.message]])]),g])),_:1},8,["onSubmit"])])]),(0,a.Wm)(F)],64)}t(560);var x=t(2437),y=t(6187),k=t(6614),w=t(2954),S={components:{FrontNavbar:x.Z,FrontFooter:y.Z,Field:w.gN,Form:w.l0,StepBar:k.Z},data(){return{isLoading:!1,stepsTitle:"Order",form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{createOrder(){const e="https://vue3-course-api.hexschool.io/api/test666520/order",s=this.form;this.$http.post(e,{data:s}).then((e=>{this.$router.push(`/checkout/${e.data.orderId}`)})).catch((()=>{this.$emitter.emit("push-message",{style:"danger",title:"Something went wrong, please try again."})}))}}},W=t(3744);const C=(0,W.Z)(S,[["render",_]]);var U=C},745:function(e,s,t){e.exports=t.p+"img/BRITE Logo.ea464648.png"}}]);
//# sourceMappingURL=253.b601fa69.js.map