import Vue from 'vue'
import VueRouter from 'vue-router'

import Test from '../components/Test'
import Directives from '../components/Directives'
import Methods from '../components/Methods'

Vue.use(VueRouter)

const routes = [
  {
    path: '/test/:name',
    component: Test,
    props: true
  },
  {
    path: '/methods',
    component: Methods
  },
  {
    path: '/directives',
    component: Directives
  },
]

export const router = new VueRouter({
  mode: 'history',
  routes,
});



