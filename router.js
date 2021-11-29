import Vue from 'vue'
import Router from 'vue-router'

import Home from '~/pages/home-two'
import ContactSectionTwo from '~/pages/contact-us';
Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Home
      },
      {
          path: '/contact',
          component: ContactSectionTwo
      }
    ]
  })
}
