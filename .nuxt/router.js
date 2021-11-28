import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c067332a = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _79fd06f9 = () => interopDefault(import('..\\pages\\blog-classic.vue' /* webpackChunkName: "pages/blog-classic" */))
const _092068a9 = () => interopDefault(import('..\\pages\\blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _769a406f = () => interopDefault(import('..\\pages\\blog-grid.vue' /* webpackChunkName: "pages/blog-grid" */))
const _6a53d17d = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _d8c3da7c = () => interopDefault(import('..\\pages\\home-three.vue' /* webpackChunkName: "pages/home-three" */))
const _2cab1b70 = () => interopDefault(import('..\\pages\\home-two.vue' /* webpackChunkName: "pages/home-two" */))
const _b3576312 = () => interopDefault(import('..\\pages\\project.vue' /* webpackChunkName: "pages/project" */))
const _dddbdb28 = () => interopDefault(import('..\\pages\\project-details.vue' /* webpackChunkName: "pages/project-details" */))
const _6b689c13 = () => interopDefault(import('..\\pages\\service.vue' /* webpackChunkName: "pages/service" */))
const _80f77da0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _c067332a,
    name: "about"
  }, {
    path: "/blog-classic",
    component: _79fd06f9,
    name: "blog-classic"
  }, {
    path: "/blog-details",
    component: _092068a9,
    name: "blog-details"
  }, {
    path: "/blog-grid",
    component: _769a406f,
    name: "blog-grid"
  }, {
    path: "/contact-us",
    component: _6a53d17d,
    name: "contact-us"
  }, {
    path: "/home-three",
    component: _d8c3da7c,
    name: "home-three"
  }, {
    path: "/home-two",
    component: _2cab1b70,
    name: "home-two"
  }, {
    path: "/project",
    component: _b3576312,
    name: "project"
  }, {
    path: "/project-details",
    component: _dddbdb28,
    name: "project-details"
  }, {
    path: "/service",
    component: _6b689c13,
    name: "service"
  }, {
    path: "/",
    component: _80f77da0,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
