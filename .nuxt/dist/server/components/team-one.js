exports.ids = [40,39];
exports.modules = {

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TeamMember.vue?vue&type=template&id=32bd0df3&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"team"},[_vm._ssrNode("<div class=\"thumb\"><img"+(_vm._ssrAttr("src",_vm.team.imgSrc))+(_vm._ssrAttr("alt",_vm.team.name))+"> <div class=\"overlay\"></div> <ul class=\"social-icon text-center\">"+(_vm._ssrList((_vm.team.socialList),function(social,index){return ("<li><a"+(_vm._ssrAttr("href",social.url))+" class=\"link\"><i"+(_vm._ssrClass(null,social.iconName))+"></i></a></li>")}))+"</ul></div> <div class=\"team-info text-center\"><div class=\"info\"><h5>"+_vm._ssrEscape(_vm._s(_vm.team.name))+"</h5> <span>"+_vm._ssrEscape(_vm._s(_vm.team.position))+"</span></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TeamMember.vue?vue&type=template&id=32bd0df3&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TeamMember.vue?vue&type=script&lang=js&
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
/* harmony default export */ var TeamMembervue_type_script_lang_js_ = ({
  props: ['team']
});
// CONCATENATED MODULE: ./components/TeamMember.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TeamMembervue_type_script_lang_js_ = (TeamMembervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TeamMember.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TeamMembervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7e5d2ffe"
  
)

/* harmony default export */ var TeamMember = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 131:
/***/ (function(module) {

module.exports = JSON.parse("[{\"imgSrc\":\"/images/team/team-1.jpg\",\"name\":\"Merrie Lewis\",\"position\":\"General Director\",\"role\":\"admin\",\"socialList\":[{\"name\":\"Facebook\",\"iconName\":\"fab fa-facebook-f\",\"url\":\"#\"},{\"name\":\"Twitter\",\"iconName\":\"fab fa-twitter\",\"url\":\"#\"},{\"name\":\"Instagram\",\"iconName\":\"fab fa-instagram\",\"url\":\"#\"}]},{\"imgSrc\":\"/images/team/team-2.jpg\",\"name\":\"Mariana Buenos\",\"position\":\"CEO & Chief Manager\",\"role\":\"admin\",\"socialList\":[{\"name\":\"Facebook\",\"iconName\":\"fab fa-facebook-f\",\"url\":\"#\"},{\"name\":\"Twitter\",\"iconName\":\"fab fa-twitter\",\"url\":\"#\"},{\"name\":\"Instagram\",\"iconName\":\"fab fa-instagram\",\"url\":\"#\"}]},{\"imgSrc\":\"/images/team/team-3.jpg\",\"name\":\"Maya\",\"position\":\"Project Manager\",\"role\":\"admin\",\"socialList\":[{\"name\":\"Facebook\",\"iconName\":\"fab fa-facebook-f\",\"url\":\"#\"},{\"name\":\"Twitter\",\"iconName\":\"fab fa-twitter\",\"url\":\"#\"},{\"name\":\"Instagram\",\"iconName\":\"fab fa-instagram\",\"url\":\"#\"}]},{\"imgSrc\":\"/images/team/team-4.jpg\",\"name\":\"Parks Missie\",\"position\":\"Marketing Manager\",\"role\":\"employee\",\"socialList\":[{\"name\":\"Facebook\",\"iconName\":\"fab fa-facebook-f\",\"url\":\"#\"},{\"name\":\"Twitter\",\"iconName\":\"fab fa-twitter\",\"url\":\"#\"},{\"name\":\"Instagram\",\"iconName\":\"fab fa-instagram\",\"url\":\"#\"}]}]");

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TeamOne.vue?vue&type=template&id=c60fb5b4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section-padding",attrs:{"data-bg-color":"#f8faff"}},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div data-aos=\"fade-up\" class=\"section-title text-center mb-60\"><h2 class=\"title\">People behind the screen</h2> <p class=\"sub-title\">Get your company heading in the right direction with our digital marketing strategist</p></div> "),_vm._ssrNode("<div class=\"row row-cols-lg-4 row-cols-sm-2 row-cols-1 mtn-30\">","</div>",_vm._l((_vm.teamData.slice(0, 4)),function(team,index){return _vm._ssrNode("<div class=\"col mt-30\">","</div>",[_c('TeamMember',{attrs:{"team":team}})],1)}),0)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TeamOne.vue?vue&type=template&id=c60fb5b4&

// EXTERNAL MODULE: ./data/team.json
var team = __webpack_require__(131);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TeamOne.vue?vue&type=script&lang=js&
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

/* harmony default export */ var TeamOnevue_type_script_lang_js_ = ({
  components: {
    TeamMember: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 124))
  },

  data() {
    return {
      teamData: team
    };
  }

});
// CONCATENATED MODULE: ./components/TeamOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TeamOnevue_type_script_lang_js_ = (TeamOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TeamOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TeamOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1962608f"
  
)

/* harmony default export */ var TeamOne = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TeamMember: __webpack_require__(124).default})


/***/ })

};;
//# sourceMappingURL=team-one.js.map