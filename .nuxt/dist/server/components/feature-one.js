exports.ids = [19,33];
exports.modules = {

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FeatureOne.vue?vue&type=template&id=0302dc38&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section-padding-t90-b100"},[_vm._ssrNode("<div class=\"container\">","</div>",[_c('SectionTitle',{attrs:{"title":"Nous créons un plan d'action unique pour nos clients","sub-title":"Une phrase d'accroche ici aussi","add-class-name":"mb-60"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30\">","</div>",_vm._l((_vm.features),function(feature,index){return _vm._ssrNode("<div data-aos=\"fade-up\" class=\"col mt-30\">","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass("icon-box text-center",_vm.addClassName))+">","</div>",[_vm._ssrNode("<div class=\"icon\"><img"+(_vm._ssrAttr("src",feature.iconSrc))+(_vm._ssrAttr("alt",feature.title))+" class=\"svgInject\"></div> "),_vm._ssrNode("<div class=\"content\">","</div>",[_vm._ssrNode("<h3 class=\"title\">"+_vm._ssrEscape(_vm._s(feature.title))+"</h3> <div class=\"desc\"><p>"+_vm._ssrEscape(_vm._s(feature.text))+"</p></div> "),_c('n-link',{staticClass:"link",attrs:{"to":"/about"}},[_vm._v("Learn More")])],2)],2)])}),0)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/FeatureOne.vue?vue&type=template&id=0302dc38&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FeatureOne.vue?vue&type=script&lang=js&
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
//
//
//
/* harmony default export */ var FeatureOnevue_type_script_lang_js_ = ({
  props: ["addClassName"],
  components: {
    SectionTitle: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 98))
  },

  data() {
    return {
      features: [{
        id: 1,
        title: "Branding",
        text: "First impressions count! Make sure your brand works for you. We offer digital marketing.",
        iconSrc: "/images/svg/linea/linea-basic-target.svg"
      }, {
        id: 2,
        title: "UX Design",
        text: "First impressions count! Make sure your brand works for you. We offer digital marketing.",
        iconSrc: "/images/svg/linea/linea-basic-picture-multiple.svg"
      }, {
        id: 3,
        title: "Strategy",
        text: "First impressions count! Make sure your brand works for you. We offer digital marketing.",
        iconSrc: "/images/svg/linea/linea-basic-picture.svg"
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/FeatureOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FeatureOnevue_type_script_lang_js_ = (FeatureOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/FeatureOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FeatureOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0e6933ba"
  
)

/* harmony default export */ var FeatureOne = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SectionTitle: __webpack_require__(98).default})


/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SectionTitle.vue?vue&type=template&id=915617ac&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section-title text-center",class:_vm.addClassName,attrs:{"data-aos":"fade-up"}},[_vm._ssrNode("<h2 class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.title))+"</h2> <p class=\"sub-title\">"+_vm._ssrEscape(_vm._s(_vm.subTitle))+"</p>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/SectionTitle.vue?vue&type=template&id=915617ac&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SectionTitle.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var SectionTitlevue_type_script_lang_js_ = ({
  name: 'SectionTitle',
  props: ["title", "subTitle", "addClassName"]
});
// CONCATENATED MODULE: ./components/SectionTitle.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SectionTitlevue_type_script_lang_js_ = (SectionTitlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/SectionTitle.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SectionTitlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2cccd89d"
  
)

/* harmony default export */ var SectionTitle = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=feature-one.js.map