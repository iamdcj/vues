import Vue from 'vue'
import VueRouter from 'vue-router'

import Directives from '../components/Directives'

Vue.use(VueRouter)

const routes = [
  {
    path: '/directives',
    component: null
  },
  {
    path: '/directives',
    component: Directives
  }
]

export const router = new VueRouter({
  mode: 'history',
  routes,
});



