(window.webpackJsonp=window.webpackJsonp||[]).push([[47,3,6,12,14,16,27,28,30,34,38,43,44,45,46],{339:function(t,e,n){"use strict";n.r(e);n(1),n(3);var o=n(344),l=n.n(o),r={props:["addClassName","imgSrc","dataDepth"],mounted:function(){var t=document.querySelectorAll(".scene");t&&t.forEach((function(t,i){new l.a(t)}))}},c=n(51),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shape scene",class:t.addClassName},[n("span",{attrs:{"data-depth":t.dataDepth}},[n("img",{attrs:{src:t.imgSrc,alt:"shape image"}})])])}),[],!1,null,null,null);e.default=component.exports},340:function(t,e,n){var content=n(343);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("30fa31d0",content,!0,{sourceMap:!1})},342:function(t,e,n){"use strict";n(340)},343:function(t,e,n){var o=n(53)(!1);o.push([t.i,'.offcanvas-navigation ul{padding-left:0}.offcanvas-navigation ul li{border-bottom:1px solid hsla(0,0%,100%,.15)}.offcanvas-navigation ul li.menu-item-has-children .sub-menu{height:0;opacity:0;transition:.3s;visibility:hidden}.offcanvas-navigation ul li.menu-item-has-children.active>.sub-menu{height:100%;opacity:1;visibility:visible;padding-left:0}.offcanvas-navigation ul li a{color:#fff;font-size:16px;font-weight:500;padding:10px 0;display:block}.offcanvas-navigation ul li a:hover{color:#1292ee}.offcanvas-navigation ul.sub-menu{margin-left:15px;transition:.4s}.offcanvas-navigation ul.sub-menu li{list-style:none;border:none}.offcanvas-navigation ul.sub-menu li a{color:#fff;font-weight:400}.offcanvas-navigation ul.sub-menu li a:hover{color:#1292ee}.offcanvas-navigation ul.sub-menu li .sub-menu li a{font-size:13px;padding:5px 0}.offcanvas-navigation ul li.menu-item-has-children{position:relative;display:block}.offcanvas-navigation ul li.menu-item-has-children a{display:inline-block}.offcanvas-navigation ul li.menu-item-has-children.active>.menu-expand{background-color:hsla(0,0%,100%,.2)}.offcanvas-navigation ul li.menu-item-has-children.active>.menu-expand i:before{transform:rotate(0)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand{top:5px;right:0;width:35px;height:35px;cursor:pointer;line-height:35px;position:absolute;text-align:center;background-color:hsla(0,0%,100%,.1)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand:hover{background-color:hsla(0,0%,100%,.2)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand i{display:block;border-bottom:1px solid #fff;position:relative;width:10px;text-align:center;top:50%;left:50%;transform:translate(-50%,-50%)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand i:before{width:100%;content:"";border-bottom:1px solid #fff;display:block;position:absolute;top:0;transform:rotate(90deg);transition:.4s}',""]),t.exports=o},345:function(t,e,n){"use strict";n.r(e);var o={name:"MobileNavMenu",mounted:function(){for(var t=document.querySelector("#offcanvas-navigation"),e=t.querySelectorAll(".sub-menu"),n=t.querySelectorAll("a"),i=0;i<e.length;i++)e[i].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");for(var o=t.querySelectorAll(".menu-expand"),l=o.length,r=0;r<l;r++)o[r].addEventListener("click",(function(t){v(t)}));for(var c=0;c<n.length;c++)n[c].addEventListener("click",(function(){d()}));var v=function(t){t.currentTarget.parentElement.classList.toggle("active")},d=function(){var t=document.querySelector("#offcanvas-mobile-menu");null==t||t.classList.remove("active")}}},l=(n(342),n(51)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mobile-navigation"},[n("nav",{staticClass:"offcanvas-navigation",attrs:{id:"offcanvas-navigation"}},[n("ul",[n("li",{staticClass:"menu-item-has-children"},[n("n-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("n-link",{attrs:{to:"/"}},[t._v("Home One")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/home-two"}},[t._v("Home Two")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/home-three"}},[t._v("Home Three")])],1)])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/about"}},[t._v("About Us")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/service"}},[t._v("Services")])],1),t._v(" "),n("li",{staticClass:"menu-item-has-children"},[n("n-link",{attrs:{to:"/"}},[t._v("Project")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("n-link",{attrs:{to:"/project"}},[t._v("Project")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/project-details"}},[t._v("Project Details")])],1)])],1),t._v(" "),n("li",{staticClass:"menu-item-has-children"},[n("n-link",{attrs:{to:"/"}},[t._v("Blog")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("n-link",{attrs:{to:"/blog-grid"}},[t._v("Blog Grid")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/blog-classic"}},[t._v("Blog Classic")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/blog-details"}},[t._v("Blog Details")])],1)])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/contact-us"}},[t._v("Contact Us")])],1)])])])}),[],!1,null,null,null);e.default=component.exports},346:function(t,e,n){"use strict";n.r(e);var o=n(51),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"site-main-menu"},[n("ul",[n("li",{staticClass:"has-children"},[n("n-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("n-link",{attrs:{to:"/"}},[t._v("Home One")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/home-two"}},[t._v("Home Two")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/home-three"}},[t._v("Home Three")])],1)])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/about"}},[t._v("About Us")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/service"}},[t._v("Services")])],1),t._v(" "),n("li",{staticClass:"has-children"},[n("n-link",{attrs:{to:"/project"}},[t._v("Project")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("n-link",{attrs:{to:"/project"}},[t._v("Project")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/project-details"}},[t._v("Project Details")])],1)])],1),t._v(" "),n("li",{staticClass:"has-children"},[n("n-link",{attrs:{to:"/blog-grid"}},[t._v("Blog")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("n-link",{attrs:{to:"/blog-grid"}},[t._v("Blog Grid")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/blog-classic"}},[t._v("Blog Classic")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/blog-details"}},[t._v("Blog Details")])],1)])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/contact-us"}},[t._v("Contact Us")])],1)])])}),[],!1,null,null,null);e.default=component.exports},347:function(t){t.exports=JSON.parse('{"footerAboutWidget":{"logoSrc":"/images/logo/footer-logo.png","telephone":"0123456789","email":"demo@example.com","fbUrl":"#","twitterUrl":"#","instagramUrl":"#"},"footerLinkTitleOne":"Services","navListOne":[{"navTitle":"Marketing","navUrl":"/"},{"navTitle":"SEO/SEM","navUrl":"/"},{"navTitle":"Development","navUrl":"/"},{"navTitle":"UX Design","navUrl":"/"}],"footerLinkTitleTwo":"Products","navListTwo":[{"navTitle":"Elementor Guru","navUrl":"/"},{"navTitle":"WooLentor Pro","navUrl":"/"},{"navTitle":"Plugins","navUrl":"/"},{"navTitle":"Page Builder","navUrl":"/"}],"footerLinkTitleThree":"About","navListThree":[{"navTitle":"Features","navUrl":"/"},{"navTitle":"Our Partners","navUrl":"/"},{"navTitle":"Affiliate Program","navUrl":"/"},{"navTitle":"Pricing","navUrl":"/"}],"footerLinkTitleFour":"Contact","navListFour":[{"navTitle":"Support Ticket","navUrl":"/"},{"navTitle":"Help Desk","navUrl":"/"},{"navTitle":"Live Chat","navUrl":"/"},{"navTitle":"FAQs","navUrl":"/"}]}')},348:function(t,e,n){"use strict";n.r(e);n(1),n(46),n(52);var o={components:{Navigation:function(){return Promise.resolve().then(n.bind(null,346))}},data:function(){return{isSticky:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))},methods:{mobiletoggleClass:function(t,e){var n=document.querySelector("#offcanvas-menu");"addClass"===t?n.classList.add(e):n.classList.remove(e)},toggleClass:function(t,e){var n=document.querySelector("#search-popup");"addClass"===t?n.classList.add(e):n.classList.remove(e)}}},l=n(51),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-section header-transparent",class:{"is-sticky":t.isSticky}},[n("div",{staticClass:"header-inner"},[n("div",{staticClass:"container position-relative"},[n("div",{staticClass:"row justify-content-between align-items-center"},[n("div",{staticClass:"col-xl-2 col-auto order-0"},[n("div",{staticClass:"header-logo"},[n("n-link",{attrs:{to:"/"}},[n("img",{staticClass:"dark-logo",attrs:{src:"/images/logo/halt.png",alt:"Agency Logo"}}),t._v(" "),n("img",{staticClass:"light-logo",attrs:{src:"/images/logo/logo.png",alt:"Agency Logo"}})])],1)]),t._v(" "),n("div",{staticClass:"col-auto col-xl d-flex align-items-center justify-content-xl-center justify-content-end order-2 order-xl-1"},[n("div",{staticClass:"menu-column-area d-none d-xl-block position-static"},[n("Navigation")],1),t._v(" "),n("div",{staticClass:"header-search-area"},[n("div",{staticClass:"header-search"},[n("a",{staticClass:"header-search-toggle",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.toggleClass("addClass","search-popup-open")}}},[n("i",{staticClass:"pe-7s-search pe-2x pe-va"})])])]),t._v(" "),n("div",{staticClass:"header-mobile-menu-toggle d-xl-none ml-sm-2"},[n("button",{staticClass:"toggle",on:{click:function(e){return t.mobiletoggleClass("addClass","show-mobile-menu")}}},[n("i",{staticClass:"icon-top"}),t._v(" "),n("i",{staticClass:"icon-middle"}),t._v(" "),n("i",{staticClass:"icon-bottom"})])])]),t._v(" "),n("div",{staticClass:"col-xl-2 col d-none d-sm-flex justify-content-end order-1 order-xl-2"})])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:n(346).default})},349:function(t,e,n){"use strict";n.r(e);n(1),n(46),n(52);var o={components:{MobileNavigation:function(){return Promise.resolve().then(n.bind(null,345))}},methods:{mobiletoggleClass:function(t,e){var n=document.querySelector("#offcanvas-menu");"addClass"===t?n.classList.add(e):n.classList.remove(e)}}},l=n(51),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"popup-mobile-menu popup-mobile-visiable",attrs:{id:"offcanvas-menu"}},[n("div",{staticClass:"mobile-menu-overlay",on:{click:function(e){return t.mobiletoggleClass("removeClass","show-mobile-menu")}}}),t._v(" "),n("div",{staticClass:"inner custom-scrollbar"},[n("div",{staticClass:"mobile-header"},[n("div",{staticClass:"logo"},[n("n-link",{attrs:{to:"/"}},[n("img",{attrs:{src:"/images/logo/logo.png",alt:"site logo"}})])],1),t._v(" "),n("button",{staticClass:"mobile-close-btn",on:{click:function(e){return t.mobiletoggleClass("removeClass","show-mobile-menu")}}})]),t._v(" "),n("div",{staticClass:"menu-content"},[n("MobileNavigation")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MobileNavigation:n(345).default})},350:function(t,e,n){"use strict";n.r(e);var o={methods:{toggleClass:function(t,e){var n=document.querySelector("#search-popup");"addClass"===t?n.classList.add(e):n.classList.remove(e)}}},l=n(51),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-search-active",attrs:{id:"search-popup"}},[n("div",{staticClass:"sidebar-search-icon"},[n("button",{staticClass:"search-close",on:{click:function(e){return t.toggleClass("removeClass","search-popup-open")}}},[n("i",{staticClass:"pe-7s-close"})])]),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-search-input"},[n("form",[n("div",{staticClass:"form-search"},[n("input",{staticClass:"input-text",attrs:{id:"search",value:"",placeholder:"",type:"search"}}),t._v(" "),n("button",[n("i",{staticClass:"fa fa-search"})])])]),t._v(" "),n("p",{staticClass:"form-description"},[t._v("Appuiyer sur Entrer pour lancer la recherche")])])}],!1,null,null,null);e.default=component.exports},351:function(t,e,n){"use strict";n.r(e);var footer=n(347),o={data:function(){return{footerData:footer}}},l=n(51),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-section",style:{backgroundColor:"#030e22"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row section-padding pt-0 mtn-30"},[n("div",{staticClass:"col-md-4 col-sm-6 col-12 mt-30"},[n("div",{staticClass:"footer-widget"},[n("div",{staticClass:"footer-logo"},[n("n-link",{attrs:{to:"/"}},[n("img",{attrs:{src:t.footerData.footerAboutWidget.logoSrc,alt:"Logo"}})])],1),t._v(" "),n("div",{staticClass:"footer-widget-content"},[n("div",{staticClass:"content"},[n("p",[n("a",{attrs:{href:"tel:(+1)212-946-2701"}},[t._v(t._s(t.footerData.footerAboutWidget.telephone))])]),t._v(" "),n("p",[n("a",{attrs:{href:"mailto:hello@hasagency.com"}},[t._v(t._s(t.footerData.footerAboutWidget.email))])])]),t._v(" "),n("div",{staticClass:"footer-social-inline"},[n("a",{attrs:{href:t.footerData.footerAboutWidget.twitterUrl}},[n("i",{staticClass:"fab fa-twitter-square"})]),t._v(" "),n("a",{attrs:{href:t.footerData.footerAboutWidget.fbUrl}},[n("i",{staticClass:"fab fa-facebook-square"})]),t._v(" "),n("a",{attrs:{href:t.footerData.footerAboutWidget.instagramUrl}},[n("i",{staticClass:"fab fa-instagram"})])])])])]),t._v(" "),n("div",{staticClass:"col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mt-30"},[n("div",{staticClass:"footer-widget"},[n("h4",{staticClass:"footer-widget-title"},[t._v(t._s(t.footerData.footerLinkTitleOne))]),t._v(" "),n("div",{staticClass:"footer-widget-content"},[n("ul",t._l(t.footerData.navListOne,(function(nav,e){return n("li",{key:e},[n("n-link",{attrs:{to:nav.navUrl}},[t._v(t._s(nav.navTitle))])],1)})),0)])])]),t._v(" "),n("div",{staticClass:"col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mt-30"},[n("div",{staticClass:"footer-widget"},[n("h4",{staticClass:"footer-widget-title"},[t._v(t._s(t.footerData.footerLinkTitleTwo))]),t._v(" "),n("div",{staticClass:"footer-widget-content"},[n("ul",t._l(t.footerData.navListTwo,(function(nav,e){return n("li",{key:e},[n("n-link",{attrs:{to:nav.navUrl}},[t._v(t._s(nav.navTitle))])],1)})),0)])])]),t._v(" "),n("div",{staticClass:"col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mt-30"},[n("div",{staticClass:"footer-widget"},[n("h4",{staticClass:"footer-widget-title"},[t._v(t._s(t.footerData.footerLinkTitleThree))]),t._v(" "),n("div",{staticClass:"footer-widget-content"},[n("ul",t._l(t.footerData.navListThree,(function(nav,e){return n("li",{key:e},[n("n-link",{attrs:{to:nav.navUrl}},[t._v(t._s(nav.navTitle))])],1)})),0)])])]),t._v(" "),n("div",{staticClass:"col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mt-30"},[n("div",{staticClass:"footer-widget"},[n("h4",{staticClass:"footer-widget-title"},[t._v(t._s(t.footerData.footerLinkTitleFour))]),t._v(" "),n("div",{staticClass:"footer-widget-content"},[n("ul",t._l(t.footerData.navListFour,(function(nav,e){return n("li",{key:e},[n("n-link",{attrs:{to:nav.navUrl}},[t._v(t._s(nav.navTitle))])],1)})),0)])])])]),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("p",{staticClass:"copyright"},[t._v("© 2021 "),n("a",{attrs:{href:"#"}},[t._v("HasThemes")]),t._v(". All Rights Reserved.")])])])}],!1,null,null,null);e.default=component.exports},352:function(t,e,n){"use strict";n.r(e);var o={props:["items","title","backgroundUrl"]},l=n(51),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-title-section section-padding-top bg-cover",style:{backgroundImage:"url("+t.backgroundUrl+")"},attrs:{"data-overlay":"0.7"}},[n("div",{staticClass:"page-title"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[t._v(t._s(t.title))])])]),t._v(" "),n("div",{staticClass:"page-breadcrumb position-static"},[n("div",{staticClass:"container"},[n("b-breadcrumb",{staticClass:"page-breadcrumb",attrs:{items:t.items}})],1)])])}),[],!1,null,null,null);e.default=component.exports},357:function(t,e,n){"use strict";n.r(e);var o={props:["testimonial"]},l=n(51),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"static-testimonial mb-30"},[n("div",{staticClass:"testimonial-image"},[n("img",{attrs:{src:t.testimonial.imgSrc,alt:t.testimonial.name}})]),t._v(" "),n("div",{staticClass:"testimonial-content"},[n("p",[t._v(t._s(t.testimonial.text))])]),t._v(" "),n("div",{staticClass:"author-info"},[n("div",{staticClass:"cite"},[n("h6",{staticClass:"name"},[t._v(t._s(t.testimonial.name))]),t._v(" "),n("span",{staticClass:"position"},[t._v(t._s(t.testimonial.position))])])])])}),[],!1,null,null,null);e.default=component.exports},358:function(t,e,n){"use strict";n.r(e);n(1),n(46),n(52);var o={components:{ShapeWithAnimation:function(){return Promise.resolve().then(n.bind(null,339))}}},l=n(51),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-padding-top section-padding-bottom-180"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xl-7 col-lg-6 col-12",attrs:{"data-aos":"fade-up"}},[n("div",{staticClass:"about-image-area"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("ShapeWithAnimation",{attrs:{addClassName:"shape-1","data-depth":"1",imgSrc:"/images/shape-animation/about-shape-1.png"}})],1)]),t._v(" "),n("div",{staticClass:"col-xl-5 col-lg-6 col-12",attrs:{"data-aos":"fade-up"}},[n("div",{staticClass:"about-content-area about-four"},[t._m(2),t._v(" "),n("p",[t._v("Our team of designers and developers are perfectionists who love what they do – we thrive off pushing the boundaries of our clients’ expectations and our own capabilities.")]),t._v(" "),n("n-link",{staticClass:"btn btn-primary btn-hover-secondary mt-30",attrs:{to:"/"}},[t._v("Get Started")])],1)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"about-image js-tilt"},[e("img",{attrs:{src:"/images/about/about-3.jpg",alt:"image"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"about-image js-tilt"},[e("img",{attrs:{src:"/images/about/about-4.jpg",alt:"image"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-title-two"},[n("span",{staticClass:"sub-title"},[t._v("Our solutions begin with brand research")]),t._v(" "),n("h3",{staticClass:"title"},[t._v("We’ve worked alongside plenty of brands & startups")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ShapeWithAnimation:n(339).default})},359:function(t,e,n){"use strict";n.r(e);n(1),n(46),n(52);var o={components:{TestimonialItem:function(){return Promise.resolve().then(n.bind(null,357))}},data:function(){return{swiperOption:{slidesPerView:3,centeredSlides:!0,loop:!0,speed:1e3,spaceBetween:50,autoHeight:!0,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},breakpoints:{1499:{slidesPerView:3},768:{slidesPerView:2},320:{slidesPerView:1}}},testimonialData:[{id:1,text:"We are completely satisfied with the quality of service that we get. Workers were respectful, efficient, accommodating, cleaned up thoroughly.",imgSrc:"/images/testimonial/author-1.png",name:"Uzzal Hossain",position:"Frontend Developer"},{id:2,text:"We are completely satisfied with the quality of service that we get. Workers were respectful, efficient, accommodating, cleaned up thoroughly.",imgSrc:"/images/testimonial/author-2.png",name:"Tasnim Akter",position:"Marketing Manager"},{id:3,text:"We are completely satisfied with the quality of service that we get. Workers were respectful, efficient, accommodating, cleaned up thoroughly.",imgSrc:"/images/testimonial/author-3.png",name:"Yeasin Hossain",position:"Team Leader"}]}}},l=n(51),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"testimonial-section section-padding-t90 section-padding-bottom"},[n("div",{staticClass:"container-fluid"},[t._m(0),t._v(" "),n("div",{staticClass:"testimonial-slider",attrs:{"data-aos":"fade-up"}},[n("swiper",{attrs:{options:t.swiperOption}},t._l(t.testimonialData,(function(t,e){return n("div",{key:e,staticClass:"swiper-slide"},[n("TestimonialItem",{attrs:{testimonial:t}})],1)})),0),t._v(" "),n("div",{staticClass:"swiper-pagination text-center"})],1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-title text-center",attrs:{"data-aos":"fade-up"}},[n("h2",{staticClass:"title fz-32"},[t._v("What our customers are saying about our services")]),t._v(" "),n("p",{staticClass:"sub-title"},[t._v("Get your company heading in the right direction with our digital marketing strategist")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{TestimonialItem:n(357).default})},364:function(t,e,n){t.exports=n.p+"img/about-1.fd74686.jpg"},372:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-6",attrs:{"data-aos":"fade-up"}},[n("div",{staticClass:"about-content-area"},[n("div",{staticClass:"section-title-two"},[n("span",{staticClass:"sub-title"},[t._v("Nos réalisations")]),t._v(" "),n("h3",{staticClass:"title"},[t._v("Mettre ici une phrase "),n("br"),t._v(" d'accroche")])]),t._v(" "),n("div",{staticClass:"row mtn-30"},[n("div",{staticClass:"col-md-5 col-sm-6 col-12 mt-30",attrs:{"data-aos":"fade-up"}},[n("div",{staticClass:"about-funfact"},[n("div",{staticClass:"number"},[n("span",{staticClass:"counter"},[t._v("110")]),t._v("+")]),t._v(" "),n("h6",{staticClass:"text"},[t._v("Clients satisfaits")]),t._v(" "),n("p",[t._v("Nous aidons nos clients à augmenter leurs profits en leur fournissons un service de qualité.")])])]),t._v(" "),n("div",{staticClass:"col-md-5 col-sm-6 col-12 mt-30",attrs:{"data-aos":"fade-up"}},[n("div",{staticClass:"about-funfact"},[n("div",{staticClass:"number"},[n("span",{staticClass:"counter"},[t._v("130")]),t._v("+")]),t._v(" "),n("h6",{staticClass:"text"},[t._v("Projets completés")]),t._v(" "),n("p",[t._v("Nous aidons nos clients à augmenter leurs profits en leur fournissons un service de qualité.")])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"about-image js-tilt"},[e("img",{attrs:{src:n(364),alt:"image"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"about-image js-tilt"},[e("img",{attrs:{src:"/images/about/about-2.jpg",alt:"image"}})])}],l=n(51),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-padding"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[t._m(0),t._v(" "),n("div",{staticClass:"col-lg-6",attrs:{"data-aos":"fade-up"}},[n("div",{staticClass:"about-image-area about-two about-shape-animation right-0 mr-0"},[t._m(1),t._v(" "),t._m(2),t._v(" "),n("ShapeWithAnimation",{attrs:{addClassName:"shape-1","data-depth":"1",imgSrc:"/images/shape-animation/video-shape-1.png"}})],1)])])])])}),o,!1,null,null,null);e.default=component.exports;installComponents(component,{ShapeWithAnimation:n(339).default})},378:function(t,e,n){"use strict";n.r(e);n(1),n(46),n(52);var o={components:{ShapeWithAnimation:function(){return Promise.resolve().then(n.bind(null,339))}},data:function(){return{videos:[{src:"https://www.youtube.com/watch?v=eS9Qm4AOOBY"}]}}},l=n(51),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"video-section section-padding",style:{backgroundImage:"url('/images/bg/video-bg.jpg')"}},[n("div",{staticClass:"container text-center"},[t._m(0),t._v(" "),n("client-only",[n("silent-box",{attrs:{image:t.videos[0]},scopedSlots:t._u([{key:"silentbox-item",fn:function(){return[n("div",{staticClass:"play-btn icon video-popup"},[n("i",{staticClass:"fas fa-play"})])]},proxy:!0}])})],1)],1),t._v(" "),n("ShapeWithAnimation",{attrs:{addClassName:"shape-1","data-depth":"1",imgSrc:"/images/shape-animation/newsletter-shape.png"}})],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-title color-light text-center",attrs:{"data-aos":"fade-up"}},[n("h2",{staticClass:"title"},[t._v("A full-service creative agency since 2007")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ShapeWithAnimation:n(339).default})},379:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{shapeData:[{imgSrc:"/images/icon-animation/icon-1.png",className:"shape-1"},{imgSrc:"/images/icon-animation/icon-2.png",className:"shape-2"},{imgSrc:"/images/icon-animation/icon-3.png",className:"shape-3"},{imgSrc:"/images/icon-animation/icon-4.png",className:"shape-4"},{imgSrc:"/images/icon-animation/icon-5.png",className:"shape-5"},{imgSrc:"/images/icon-animation/icon-6.png",className:"shape-6"},{imgSrc:"/images/icon-animation/icon-7.png",className:"shape-7"},{imgSrc:"/images/icon-animation/icon-8.png",className:"shape-8"},{imgSrc:"/images/icon-animation/icon-9.png",className:"shape-9"}]}}},l=n(51),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cta-section section-padding-250"},[n("div",{staticClass:"container text-center icon-up-down-animation"},[t._m(0),t._v(" "),n("n-link",{staticClass:"btn btn-primary btn-hover-secondary",attrs:{to:"/contact-us"}},[t._v("Contact Us")]),t._v(" "),t._l(t.shapeData,(function(t,e){return n("div",{key:e,staticClass:"shape",class:t.className},[n("span",[n("img",{attrs:{src:t.imgSrc,alt:"icon"}})])])}))],2)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-title text-center",attrs:{"data-aos":"fade-up"}},[n("h2",{staticClass:"title fz-34"},[t._v("Let's talk about your project and see how we can work together")]),t._v(" "),n("p",{staticClass:"sub-title"},[t._v("Our team of designers, developers and creatives are perfectionists who love what they do and love where they work")])])}],!1,null,null,null);e.default=component.exports},395:function(t,e,n){"use strict";n.r(e);n(1),n(46),n(52);var o={components:{TheHeader:function(){return Promise.resolve().then(n.bind(null,348))},OffCanvasMobileMenu:function(){return Promise.resolve().then(n.bind(null,349))},SearchPopup:function(){return Promise.resolve().then(n.bind(null,350))},BreadcrumbOne:function(){return Promise.resolve().then(n.bind(null,352))},AboutTwo:function(){return Promise.resolve().then(n.bind(null,372))},CallToActionVideo:function(){return Promise.resolve().then(n.bind(null,378))},AboutFour:function(){return Promise.resolve().then(n.bind(null,358))},TestimonialSectionOne:function(){return Promise.resolve().then(n.bind(null,359))},CallToActionThree:function(){return Promise.resolve().then(n.bind(null,379))},TheFooter:function(){return Promise.resolve().then(n.bind(null,351))}},data:function(){return{items:[{text:"Home",to:"/"},{text:"About Us",active:!0}]}},head:function(){return{title:"About us"}}},l=n(51),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-container"},[n("TheHeader"),t._v(" "),n("OffCanvasMobileMenu"),t._v(" "),n("SearchPopup"),t._v(" "),n("BreadcrumbOne",{attrs:{items:t.items,title:"We are an agency located in New York",backgroundUrl:"/images/bg/breadcrumb-bg.jpg"}}),t._v(" "),n("AboutTwo",{staticClass:"section-padding-top about-section-padding-bottom-200"}),t._v(" "),n("CallToActionVideo"),t._v(" "),n("AboutFour"),t._v(" "),n("TestimonialSectionOne",{style:{backgroundColor:"#f8faff"}}),t._v(" "),n("CallToActionThree"),t._v(" "),n("TheFooter")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TheHeader:n(348).default,OffCanvasMobileMenu:n(349).default,SearchPopup:n(350).default,BreadcrumbOne:n(352).default,AboutTwo:n(372).default,CallToActionVideo:n(378).default,AboutFour:n(358).default,TestimonialSectionOne:n(359).default,CallToActionThree:n(379).default,TheFooter:n(351).default})}}]);