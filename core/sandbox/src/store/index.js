import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    title: "DCJ's Vue Sandbox",
    items: null
  }
})