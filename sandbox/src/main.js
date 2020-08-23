import Vue from 'vue'
import App from './App.vue'
import { store } from './store'
import { router } from './router'

Vue.config.productionTip = false

// Create new vue instance
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
