import Vue from 'vue'
import VueRouter from 'vue-router'

import { routes } from './routes'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes,
});

function isAuthenticated() {
  // do your auth checks
  return true
}


router.beforeEach((to, from, next) => {
  if(to.meta.isProtected) {
    if(isAuthenticated()) {
      next()
    } else {
      next('/login');
    }
  } else {
    next();
  }

})
