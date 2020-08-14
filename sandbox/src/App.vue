<template>
  <div id="app">
    {{title}}
    <img alt="Vue logo" src="./assets/logo.png">
    <Directives />
  </div>
</template>

<script>
import Directives from './components/Directives/Directives.vue'

export default {
  name: 'App',
  components: {
    Directives
  },
  data() {
    console.log();
    return {
      title: this.$root.title
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
