<template>
  <div>
    <div>
      <h3>v-if</h3>
      <p>
        This directive will mount a component if the condition is truthy, or unmount if the condition is falsey. <strong>The component is added/removed from the DOM</strong>
      </p>

      <p>It is useful if you want to hide/show a component very times, ideally just the one time</p>

      <button v-on:click="toggleMounted">{{mounted ? 'Unmount' : 'Mount' }} image</button>

      <Img v-if="mounted" src="https://dummyimage.com/600x400/000/fff" />
    </div>
    <div>
      <h3>v-show</h3>
      <p>
        
        This directive will show a component if the condition is truthy, or hide if the condition is falsey. <strong>The component remains in the DOM</strong>
      </p>

      <p>It is useful if the user might repeatedly toggle the visibilty of an element</p>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "IfShow",
  data() {
    return {
      mounted: true
    };
  },
  methods: {
    toggleMounted() {
      this.mounted = !this.mounted;
    }
  }
};
</script>
