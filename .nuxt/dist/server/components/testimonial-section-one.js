exports.ids = [42,41];
exports.modules = {

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TestimonialItem.vue?vue&type=template&id=674d11b6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"static-testimonial mb-30"},[_vm._ssrNode("<div class=\"testimonial-image\"><img"+(_vm._ssrAttr("src",_vm.testimonial.imgSrc))+(_vm._ssrAttr("alt",_vm.testimonial.name))+"></div> <div class=\"testimonial-content\"><p>"+_vm._ssrEscape(_vm._s(_vm.testimonial.text))+"</p></div> <div class=\"author-info\"><div class=\"cite\"><h6 class=\"name\">"+_vm._ssrEscape(_vm._s(_vm.testimonial.name))+"</h6> <span class=\"position\">"+_vm._ssrEscape(_vm._s(_vm.testimonial.position))+"</span></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TestimonialItem.vue?vue&type=template&id=674d11b6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TestimonialItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TestimonialItemvue_type_script_lang_js_ = ({
  props: ['testimonial']
});
// CONCATENATED MODULE: ./components/TestimonialItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TestimonialItemvue_type_script_lang_js_ = (TestimonialItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TestimonialItem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TestimonialItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "189b9798"
  
)

/* harmony default export */ var TestimonialItem = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TestimonialSectionOne.vue?vue&type=template&id=f6b2822c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"testimonial-section section-padding-t90 section-padding-bottom"},[_vm._ssrNode("<div class=\"container-fluid\">","</div>",[_vm._ssrNode("<div data-aos=\"fade-up\" class=\"section-title text-center\"><h2 class=\"title fz-32\">What our customers are saying about our services</h2> <p class=\"sub-title\">Get your company heading in the right direction with our digital marketing strategist</p></div> "),_vm._ssrNode("<div data-aos=\"fade-up\" class=\"testimonial-slider\">","</div>",[_c('swiper',{attrs:{"options":_vm.swiperOption}},_vm._l((_vm.testimonialData),function(testimonial,index){return _c('div',{key:index,staticClass:"swiper-slide"},[_c('TestimonialItem',{attrs:{"testimonial":testimonial}})],1)}),0),_vm._ssrNode(" <div class=\"swiper-pagination text-center\"></div>")],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TestimonialSectionOne.vue?vue&type=template&id=f6b2822c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TestimonialSectionOne.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TestimonialSectionOnevue_type_script_lang_js_ = ({
  components: {
    TestimonialItem: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 113))
  },

  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        centeredSlides: true,
        loop: true,
        speed: 1000,
        spaceBetween: 50,
        autoHeight: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        breakpoints: {
          1499: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 2
          },
          320: {
            slidesPerView: 1
          }
        }
      },
      testimonialData: [{
        id: 1,
        text: "We are completely satisfied with the quality of service that we get. Workers were respectful, efficient, accommodating, cleaned up thoroughly.",
        imgSrc: "/images/testimonial/author-1.png",
        name: "Uzzal Hossain",
        position: "Frontend Developer"
      }, {
        id: 2,
        text: "We are completely satisfied with the quality of service that we get. Workers were respectful, efficient, accommodating, cleaned up thoroughly.",
        imgSrc: "/images/testimonial/author-2.png",
        name: "Tasnim Akter",
        position: "Marketing Manager"
      }, {
        id: 3,
        text: "We are completely satisfied with the quality of service that we get. Workers were respectful, efficient, accommodating, cleaned up thoroughly.",
        imgSrc: "/images/testimonial/author-3.png",
        name: "Yeasin Hossain",
        position: "Team Leader"
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/TestimonialSectionOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TestimonialSectionOnevue_type_script_lang_js_ = (TestimonialSectionOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TestimonialSectionOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TestimonialSectionOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "b1593df4"
  
)

/* harmony default export */ var TestimonialSectionOne = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TestimonialItem: __webpack_require__(113).default})


/***/ })

};;
//# sourceMappingURL=testimonial-section-one.js.map