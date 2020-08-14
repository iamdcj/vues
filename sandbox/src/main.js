import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Create new vue instance
new Vue({
  el: '#app',
  data: {
    title: "DCJ's Vue Sandbox"
  },
  render: h => h(App)
})
