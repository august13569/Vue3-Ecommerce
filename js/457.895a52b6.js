"use strict";(self["webpackChunkbrite"]=self["webpackChunkbrite"]||[]).push([[457],{6187:function(a,e,o){o.d(e,{Z:function(){return F}});var s=o(6252),i=o(9963),t=o(745);const r={class:"d-flex flex-column align-items-center py-3",style:{"background-color":"#343a40"}},n=(0,s._)("img",{src:t,alt:"BRITE",width:"200",height:"60"},null,-1),c={class:"list-group list-group-horizontal"},l={class:"list-group-item bg-transparent border-0"},d=(0,s._)("i",{class:"bi bi-youtube fs-5"},null,-1),p=[d],u={class:"list-group-item bg-transparent border-0"},b=(0,s._)("i",{class:"bi bi-twitter-x fs-5"},null,-1),h=[b],g={class:"list-group-item bg-transparent border-0"},v=(0,s._)("i",{class:"bi bi-facebook fs-5"},null,-1),y=[v],f={class:"list-group-item bg-transparent border-0"},m=(0,s._)("i",{class:"bi bi-instagram fs-5"},null,-1),w=[m],x=(0,s._)("p",{class:"text-primary text-center mb-0"},"Copyright © 此為專案練習，無商業用途。",-1),C=(0,s._)("p",{class:"text-primary text-center"},"by Fulton",-1);function T(a,e){return(0,s.wg)(),(0,s.iD)("footer",r,[n,(0,s._)("ul",c,[(0,s._)("li",l,[(0,s._)("a",{href:"#",onClick:e[0]||(e[0]=(0,i.iM)((()=>{}),["prevent"]))},p)]),(0,s._)("li",u,[(0,s._)("a",{href:"#",onClick:e[1]||(e[1]=(0,i.iM)((()=>{}),["prevent"]))},h)]),(0,s._)("li",g,[(0,s._)("a",{href:"#",onClick:e[2]||(e[2]=(0,i.iM)((()=>{}),["prevent"]))},y)]),(0,s._)("li",f,[(0,s._)("a",{href:"#",onClick:e[3]||(e[3]=(0,i.iM)((()=>{}),["prevent"]))},w)])]),x,C])}var _=o(3744);const k={},H=(0,_.Z)(k,[["render",T]]);var F=H},2437:function(a,e,o){o.d(e,{Z:function(){return A}});var s=o(6252),i=o(3577),t=o(745);const r={class:"navbar navbar-expand-lg sticky-top bg-white shadow"},n={class:"container"},c=(0,s._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasNavbar","aria-controls":"offcanvasNavbar"},[(0,s._)("span",{class:"navbar-toggler-icon"})],-1),l=(0,s._)("h1",{class:"visually-hidden"},"BRITE",-1),d=(0,s._)("img",{class:"logo",src:t,alt:"BRITE"},null,-1),p={class:"offcanvas offcanvas-start",tabindex:"-1",id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel","data-bs-dismiss":"offcanvas"},u=(0,s._)("div",{class:"offcanvas-header d-flex justify-content-end d-lg-none"},[(0,s._)("button",{class:"btn-close text-reset",type:"button","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),b={class:"offcanvas-body"},h={class:"navbar-nav justify-content-center flex-grow-1 pe-3"},g={class:"nav-item px-2"},v={class:"nav-item px-2"},y={class:"nav-item px-2"},f={class:"nav-item px-2"},m={class:"d-flex"},w=(0,s._)("i",{class:"bi bi-person-fill text-secondary"},null,-1),x={class:"position-relative align-self-center"},C=(0,s._)("i",{class:"bi bi-bag-fill text-secondary"},null,-1),T={key:0,class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"},_=(0,s._)("span",{class:"visually-hidden"},"unread messages",-1);function k(a,e,o,t,k,H){const F=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("nav",r,[(0,s._)("div",n,[c,(0,s.Wm)(F,{to:"/",class:"navbar-brand me-0"},{default:(0,s.w5)((()=>[l,d])),_:1}),(0,s._)("div",p,[u,(0,s._)("div",b,[(0,s._)("ul",h,[(0,s._)("li",g,[(0,s.Wm)(F,{to:"/about",class:"nav-link link-secondary"},{default:(0,s.w5)((()=>[(0,s.Uk)("About")])),_:1})]),(0,s._)("li",v,[(0,s.Wm)(F,{to:"/products",class:"nav-link link-secondary"},{default:(0,s.w5)((()=>[(0,s.Uk)("Products")])),_:1})]),(0,s._)("li",y,[(0,s.Wm)(F,{to:"/faq",class:"nav-link link-secondary"},{default:(0,s.w5)((()=>[(0,s.Uk)("FAQ")])),_:1})]),(0,s._)("li",f,[(0,s.Wm)(F,{to:"/contact",class:"nav-link link-secondary"},{default:(0,s.w5)((()=>[(0,s.Uk)("Contact")])),_:1})])])])]),(0,s._)("div",m,[(0,s.Wm)(F,{to:"/login",class:"fs-3 px-1"},{default:(0,s.w5)((()=>[w])),_:1}),(0,s._)("div",x,[(0,s.Wm)(F,{to:"/cart",class:"fs-5 px-1"},{default:(0,s.w5)((()=>[C])),_:1}),k.carts.length>0?((0,s.wg)(),(0,s.iD)("span",T,[(0,s.Uk)((0,i.zw)(H.cartNum)+" ",1),_])):(0,s.kq)("",!0)])])])])}var H={data(){return{carts:[],isSidebarOpen:!1}},methods:{getCart(){const a="https://vue3-course-api.hexschool.io/api/test666520/cart";this.$http.get(a).then((a=>{this.carts=a.data.data.carts})).catch((()=>{this.$emitter.emit("push-message",{style:"danger",title:"Something went wrong, please try again."})}))},observeSidebar(){const a=new MutationObserver((a=>{a.forEach((a=>{"dialog"===a.target.getAttribute("role")?(this.isSidebarOpen=!0,this.$emit("sidebar-status",!0)):(this.isSidebarOpen=!1,this.$emit("sidebar-status",!1))}))}));a.observe(document.getElementById("offcanvasNavbar"),{attributes:!0,attributeFilter:["role"]})}},computed:{cartNum(){return this.carts.length}},mounted(){this.$emitter.on("update-cart",(a=>{this.carts=a})),this.observeSidebar()},created(){this.getCart()}},F=o(3744);const O=(0,F.Z)(H,[["render",k]]);var A=O},9457:function(a,e,o){o.r(e),o.d(e,{default:function(){return p}});var s=o(6252);const i=(0,s.uE)('<header class="header-3 d-flex align-items-center justify-content-center mb-5"><div class="text-white text-center w-100" style="background-image:radial-gradient(circle, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%);"><h2 class="display-1">FAQ</h2></div></header><section class="container mb-5"><h3 class="text-primary mb-3">Purchase Problems</h3><div class="accordion mb-3" id="purchaseAccordion"><div class="accordion-item"><h3 class="accordion-header" id="purchaseHeadingOne"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#purchaseCollapseOne" aria-expanded="false" aria-controls="purchaseCollapseOne"><i class="bi bi-question-circle px-2"></i> How can I purchase lighting fixtures on your website? </button></h3><div id="purchaseCollapseOne" class="accordion-collapse collapse" aria-labelledby="purchaseHeadingOne" data-bs-parent="#purchaseAccordion"><div class="accordion-body"> You can browse products on our website, select the lighting fixtures you like, add them to your cart, and then follow the checkout process to complete your order. </div></div></div><div class="accordion-item"><h3 class="accordion-header" id="purchaseHeadingTwo"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#purchaseCollapseTwo" aria-expanded="false" aria-controls="purchaseCollapseTwo"><i class="bi bi-question-circle px-2"></i> Do you offer wholesale or group purchase discounts? </button></h3><div id="purchaseCollapseTwo" class="accordion-collapse collapse" aria-labelledby="purchaseHeadingTwo" data-bs-parent="#purchaseAccordion"><div class="accordion-body"> Yes, we provide wholesale and group purchase discounts. Please contact our customer service for more information and custom quotes. </div></div></div><div class="accordion-item"><h3 class="accordion-header" id="purchaseHeadingThree"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#purchaseCollapseTree" aria-expanded="false" aria-controls="purchaseCollapseTree"><i class="bi bi-question-circle px-2"></i> Can I cancel an already placed order </button></h3><div id="purchaseCollapseTree" class="accordion-collapse collapse" aria-labelledby="purchaseHeadingThree" data-bs-parent="#purchaseAccordion"><div class="accordion-body"> If your order has not been shipped yet, you can contact our customer service to cancel the order. Orders that have already been shipped cannot be canceled. </div></div></div><div class="accordion-item"><h3 class="accordion-header" id="purchaseHeadingFour"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#purchaseCollapseFour" aria-expanded="false" aria-controls="purchaseCollapseFour"><i class="bi bi-question-circle px-2"></i> Do you offer the option for online custom orders? </button></h3><div id="purchaseCollapseFour" class="accordion-collapse collapse" aria-labelledby="purchaseHeadingFour" data-bs-parent="#purchaseAccordion"><div class="accordion-body"> Yes, we offer the option for custom orders. If you have specific requirements or size preferences, please contact our customer service, and we will assist you in creating a customized lighting fixture order. </div></div></div></div><h3 class="text-primary mb-3">Return Policies</h3><div class="accordion mb-3" id="ReturnAccordion"><div class="accordion-item"><h3 class="accordion-header" id="returnHeadingOne"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#returnCollopsOne" aria-expanded="false" aria-controls="returnCollopsOne"><i class="bi bi-question-circle px-2"></i> How can I request a return? </button></h3><div id="returnCollopsOne" class="accordion-collapse collapse" aria-labelledby="returnHeadingOne" data-bs-parent="#ReturnAccordion"><div class="accordion-body"> If you need to return a product, please contact our customer service within 14 days of receiving the item, providing the order number and reason. We will assist you in handling the return. </div></div></div><div class="accordion-item"><h3 class="accordion-header" id="returnHeadingTwo"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#returnCollapseTwo" aria-expanded="false" aria-controls="returnCollapseTwo"><i class="bi bi-question-circle px-2"></i> Is there a refund for returns? </button></h3><div id="returnCollapseTwo" class="accordion-collapse collapse" aria-labelledby="returnHeadingTwo" data-bs-parent="#ReturnAccordion"><div class="accordion-body"> Yes, once we receive the returned item and confirm its condition meets the return criteria, we will process a refund. The refund amount will deduct any shipping fees. </div></div></div><div class="accordion-item"><h3 class="accordion-header" id="returnHeadingTree"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#returnCollapseThree" aria-expanded="false" aria-controls="returnCollapseThree"><i class="bi bi-question-circle px-2"></i> Who bears the return shipping costs? </button></h3><div id="returnCollapseThree" class="accordion-collapse collapse" aria-labelledby="returnHeadingTree" data-bs-parent="#ReturnAccordion"><div class="accordion-body"> If it is due to our mistake or a defective product, we will cover the return shipping costs. In other cases, the customer is responsible for the return shipping fees. </div></div></div><div class="accordion-item"><h3 class="accordion-header" id="returnHeadingFour"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#returnCollapseFour" aria-expanded="false" aria-controls="returnCollapseFour"><i class="bi bi-question-circle px-2"></i> Do you accept returns for partial items? </button></h3><div id="returnCollapseFour" class="accordion-collapse collapse" aria-labelledby="returnHeadingFour" data-bs-parent="#ReturnAccordion"><div class="accordion-body"> Yes, we accept returns for partial items. Please specify the items you wish to return in the return request. </div></div></div></div><h3 class="text-primary mb-3">Shippin Service</h3><div class="accordion mb-3" id="shippingAccordion"><div class="accordion-item"><h3 class="accordion-header" id="shippingHeadingOne"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#shippingCollapseOne" aria-expanded="false" aria-controls="shippingCollapseOne"><i class="bi bi-question-circle px-2"></i> How are our lighting fixtures shipped? </button></h3><div id="shippingCollapseOne" class="accordion-collapse collapse" aria-labelledby="shippingHeadingOne" data-bs-parent="#shippingAccordion"><div class="accordion-body"> We use reliable logistics partners for shipping to ensure the safe delivery of your lighting fixtures. The shipping method will be provided during the checkout process. </div></div></div><div class="accordion-item"><h3 class="accordion-header" id="shippingHeadingTwo"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#shippingCollapseTwo" aria-expanded="false" aria-controls="shippingCollapseTwo"><i class="bi bi-question-circle px-2"></i> Do you offer international shipping? </button></h3><div id="shippingCollapseTwo" class="accordion-collapse collapse" aria-labelledby="shippingHeadingTwo" data-bs-parent="#shippingAccordion"><div class="accordion-body"> Yes, we offer international shipping. International shipping fees are determined based on the destination and the weight of the items. Please check the checkout page for detailed information. </div></div></div><div class="accordion-item"><h3 class="accordion-header" id="shippingHeadingThree"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#shippingCollapseThree" aria-expanded="false" aria-controls="shippingCollapseThree"><i class="bi bi-question-circle px-2"></i> How can I track my order? </button></h3><div id="shippingCollapseThree" class="accordion-collapse collapse" aria-labelledby="shippingHeadingThree" data-bs-parent="#shippingAccordion"><div class="accordion-body"> Once your order is shipped, you will receive an email with tracking information. You can use this information on the logistics company&#39;s website to track your order. </div></div></div><div class="accordion-item"><h3 class="accordion-header" id="shippingHeadingFour"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#shippingCollapseFour" aria-expanded="false" aria-controls="shippingCollapseFour"><i class="bi bi-question-circle px-2"></i> Do you provide express shipping options? </button></h3><div id="shippingCollapseFour" class="accordion-collapse collapse" aria-labelledby="shippingHeadingFour" data-bs-parent="#shippingAccordion"><div class="accordion-body"> Yes, we offer express shipping options to expedite the delivery time of your order. Refer to the checkout page for detailed shipping fees and delivery times. </div></div></div></div><h3 class="text-primary mb-3">Warranty Related</h3><div class="accordion mb-3" id="warrantyAccordion"><div class="accordion-item"><h3 class="accordion-header" id="warrantyHeadingOne"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#warrantyCollapseOne" aria-expanded="false" aria-controls="warrantyCollapseOne"><i class="bi bi-question-circle px-2"></i> Do your lighting fixtures come with a warranty? </button></h3><div id="warrantyCollapseOne" class="accordion-collapse collapse" aria-labelledby="warrantyHeadingOne" data-bs-parent="#warrantyAccordion"><div class="accordion-body"> Yes, all our lighting products come with a limited warranty. Detailed warranty terms can be found on the product warranty card received after purchase or on our website. </div></div></div><div class="accordion-item"><h3 class="accordion-header" id="warrantyHeadingTwo"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#warrantyCollapseTwo" aria-expanded="false" aria-controls="warrantyCollapseTwo"><i class="bi bi-question-circle px-2"></i> How can I apply for warranty service? </button></h3><div id="warrantyCollapseTwo" class="accordion-collapse collapse" aria-labelledby="warrantyHeadingTwo" data-bs-parent="#warrantyAccordion"><div class="accordion-body"> If you experience issues with your lighting fixture, please contact our customer service, provide the order number, and product details. We will assist you in processing the warranty claim. </div></div></div><div class="accordion-item"><h3 class="accordion-header" id="warrantyHeadingThree"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#warrantyCollapseThree" aria-expanded="false" aria-controls="warrantyCollapseThree"><i class="bi bi-question-circle px-2"></i> Does the warranty cover damage caused by user error? </button></h3><div id="warrantyCollapseThree" class="accordion-collapse collapse" aria-labelledby="warrantyHeadingThree" data-bs-parent="#warrantyAccordion"><div class="accordion-body"> The warranty only covers issues caused by manufacturing defects and does not include damage caused by user error or improper use. Please refer to the warranty terms for more information. </div></div></div><div class="accordion-item"><h3 class="accordion-header" id="warrantyHeadingFour"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#warrantyCollapseFour" aria-expanded="false" aria-controls="warrantyCollapseFour"><i class="bi bi-question-circle px-2"></i> What is the duration of the warranty period? </button></h3><div id="warrantyCollapseFour" class="accordion-collapse collapse" aria-labelledby="warrantyHeadingFour" data-bs-parent="#warrantyAccordion"><div class="accordion-body"> The duration of the warranty period varies by product. Please refer to the warranty card for your purchased lighting fixture or visit our website for details. </div></div></div></div></section>',2);function t(a,e,o,t,r,n){const c=(0,s.up)("FrontNavbar"),l=(0,s.up)("FrontFooter");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(c),i,(0,s.Wm)(l)],64)}var r=o(2437),n=o(6187),c={components:{FrontNavbar:r.Z,FrontFooter:n.Z}},l=o(3744);const d=(0,l.Z)(c,[["render",t]]);var p=d},745:function(a,e,o){a.exports=o.p+"img/BRITE Logo.ea464648.png"}}]);
//# sourceMappingURL=457.895a52b6.js.map