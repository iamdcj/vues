<template>
  <div id="app">
    <header>
      {{title}}

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
