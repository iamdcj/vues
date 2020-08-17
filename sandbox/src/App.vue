<template>
  <div id="app">
    <header>
      {{title}}
    </header>
    <main>
      <Directives />
    </main>
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
  color: #2c3e50;
}

#app > header {
  display: grid;
  width: 100%;
  background-color: #42b983;
  padding: 10px;
}

main {
  max-width: 900px;
  margin: 0 auto
}
</style>
