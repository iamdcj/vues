import Vue from 'vue'
import VueRouter from 'vue-router'

import Test from '../components/Test'
import Directives from '../components/Directives'
import Methods from '../components/Methods'

Vue.use(VueRouter)


const NotFound = () => <div>Not Found</div>

const routes = [
  {
    path: '/test',
    component: Test,
    props: true,
    children: [{
      path: 'test',
      components: {
        default: Test,
        second: Methods
      }
    }]
  },
  {
    path: '/methods',
    component: Methods
  },
  {
    path: '/directives',
    component: Directives
  },
  {
    path: 'not-found',
    alias: '*',
    component: NotFound
  }
]

export const router = new VueRouter({
  mode: 'history',
  routes,
});



