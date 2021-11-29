import Vue from 'vue'
import Router from 'vue-router'

import Home from '~/pages/home-two'
import ContactSectionTwo from '~/pages/contact-us';
import Projets from '~/pages/project.vue';
import ProjetDetail from '~/pages/project-details.vue';
import BlogDetails from '~/pages/blog-details.vue';
import Apropo from '~/pages/about.vue';
Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/fr/',
        component: Home
      },
      {
        path: '/fr/contact',
        component: ContactSectionTwo
      },
      // {
      //   path: '/fr/projets',
      //   component: Projets
      // },
      {
        path: '/fr/projet-details',
        component: ProjetDetail
      },
      {
        path: '/fr/blog-details',
        component: BlogDetails
      },
      {
        path: '/fr/a-propos',
        component: Apropo
      },
      {
        path: '*',
        redirect: '/fr/',
        component: Home
      },
    ]
  })
}
