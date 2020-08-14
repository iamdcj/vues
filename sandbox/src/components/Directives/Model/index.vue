<template>
  <div>
    
      <h3>v-model</h3>
      <p>This directive creates a relationship between the component data and a form control.</p>

      <form>
        <input type="text" v-model="name">
        <p>Name: {{name}}</p>
      </form>

    </div>
</template>

<script>
export default {
  name: "Model",
  data() {
    return {
      name: ""
    }
  }
};
</script>
