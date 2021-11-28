exports.ids = [35,34,36];
exports.modules = {

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ServiceItem.vue?vue&type=template&id=ab2ea682&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon-box text-center",class:_vm.addClassName},[_vm._ssrNode("<div class=\"icon\"><img"+(_vm._ssrAttr("src",_vm.service.iconSrc))+(_vm._ssrAttr("alt",_vm.service.title))+" class=\"svgInject\"></div> "),_vm._ssrNode("<div class=\"content\">","</div>",[_vm._ssrNode("<h3 class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.service.title))+"</h3> <div class=\"desc\"><p>"+_vm._ssrEscape(_vm._s(_vm.service.text))+"</p></div> "),_c('n-link',{staticClass:"link",attrs:{"to":"/project-details"}},[_vm._v("Learn More")])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ServiceItem.vue?vue&type=template&id=ab2ea682&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ServiceItem.vue?vue&type=script&lang=js&
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
/* harmony default export */ var ServiceItemvue_type_script_lang_js_ = ({
  props: ['service', 'addClassName']
});
// CONCATENATED MODULE: ./components/ServiceItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ServiceItemvue_type_script_lang_js_ = (ServiceItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ServiceItem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ServiceItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "89306aa4"
  
)

/* harmony default export */ var ServiceItem = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 133:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"title\":\"Branding\",\"text\":\"First impressions count! Make sure your brand works for you. We offer digital marketing.\",\"iconSrc\":\"/images/svg/linea/linea-basic-target.svg\"},{\"id\":2,\"title\":\"UX Design\",\"text\":\"First impressions count! Make sure your brand works for you. We offer digital marketing.\",\"iconSrc\":\"/images/svg/linea/linea-basic-picture-multiple.svg\"},{\"id\":3,\"title\":\"Strategy\",\"text\":\"First impressions count! Make sure your brand works for you. We offer digital marketing.\",\"iconSrc\":\"/images/svg/linea/linea-basic-picture.svg\"},{\"id\":4,\"title\":\"E-commerce\",\"text\":\"First impressions count! Make sure your brand works for you. We offer digital marketing.\",\"iconSrc\":\"/images/svg/linea/linea-ecommerce-cart-plus.svg\"},{\"id\":5,\"title\":\"Marketing\",\"text\":\"First impressions count! Make sure your brand works for you. We offer digital marketing.\",\"iconSrc\":\"/images/svg/linea/linea-basic-display.svg\"},{\"id\":6,\"title\":\"Development\",\"text\":\"First impressions count! Make sure your brand works for you. We offer digital marketing.\",\"iconSrc\":\"/images/svg/linea/linea-basic-gear.svg\"}]");

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ServiceWrapper.vue?vue&type=template&id=abb2333e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section-padding-t90 section-padding-bottom"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div data-aos=\"fade-up\" class=\"section-title text-center\"><h2 class=\"title fz-32\">Services that create identities, build brands, and get results</h2> <p class=\"sub-title\">We produce beautifully crafted creative solutions that transcend business goals. We provide the exceptional service we’d want to experience ourselves!</p></div> "),_vm._ssrNode("<div class=\"row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 icon-box-shape-animation mtn-30\">","</div>",[_vm._l((_vm.serviceData),function(service,index){return _vm._ssrNode("<div data-aos=\"fade-up\" class=\"col mt-30\">","</div>",[_c('ServiceItem',{attrs:{"service":service,"addClassName":"box-border"}})],1)}),_vm._ssrNode(" "),_c('ShapeWithAnimation',{attrs:{"addClassName":"shape-1","data-depth":"1","imgSrc":"/images/shape-animation/video-shape-1.png"}})],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ServiceWrapper.vue?vue&type=template&id=abb2333e&

// EXTERNAL MODULE: ./data/service.json
var service = __webpack_require__(133);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ServiceWrapper.vue?vue&type=script&lang=js&
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

/* harmony default export */ var ServiceWrappervue_type_script_lang_js_ = ({
  components: {
    ServiceItem: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 126)),
    ShapeWithAnimation: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 96))
  },

  data() {
    return {
      serviceData: service
    };
  }

});
// CONCATENATED MODULE: ./components/ServiceWrapper.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ServiceWrappervue_type_script_lang_js_ = (ServiceWrappervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ServiceWrapper.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ServiceWrappervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3bf32448"
  
)

/* harmony default export */ var ServiceWrapper = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ServiceItem: __webpack_require__(126).default,ShapeWithAnimation: __webpack_require__(96).default})


/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ShapeWithAnimation.vue?vue&type=template&id=dd860e6a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"shape scene",class:_vm.addClassName},[_vm._ssrNode("<span"+(_vm._ssrAttr("data-depth",_vm.dataDepth))+"><img"+(_vm._ssrAttr("src",_vm.imgSrc))+" alt=\"shape image\"></span>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ShapeWithAnimation.vue?vue&type=template&id=dd860e6a&

// EXTERNAL MODULE: external "parallax-js"
var external_parallax_js_ = __webpack_require__(95);
var external_parallax_js_default = /*#__PURE__*/__webpack_require__.n(external_parallax_js_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ShapeWithAnimation.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var ShapeWithAnimationvue_type_script_lang_js_ = ({
  props: ['addClassName', 'imgSrc', 'dataDepth'],

  mounted() {
    var scene = document.querySelectorAll('.scene');

    if (scene) {
      scene.forEach((el, i) => {
        new external_parallax_js_default.a(el);
      });
    }

    ;
  }

});
// CONCATENATED MODULE: ./components/ShapeWithAnimation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ShapeWithAnimationvue_type_script_lang_js_ = (ShapeWithAnimationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ShapeWithAnimation.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ShapeWithAnimationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ee16aa32"
  
)

/* harmony default export */ var ShapeWithAnimation = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=service-wrapper.js.map