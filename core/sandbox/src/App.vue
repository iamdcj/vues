<template>
  <div id="app">
    <header>
      {{title}}
      <button @click="toRoute('/directives')">Directives</button>
      <router-link to="/methods">Methods</router-link>
      <router-link :to="{ name: 'test', params: { name: 'david' }}">Test</router-link>
      <router-view></router-view>
    </header>
    <main>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: this.$root.title
    }
  },
  methods: {
    toRoute (route) {
      this.$router.push(route);
    }
  },
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

pre {
  display: inline-flex;
  padding: 5px;
  background-color: lightgrey;
}

main {
  max-width: 900px;
  margin: 0 auto
}
</style>
