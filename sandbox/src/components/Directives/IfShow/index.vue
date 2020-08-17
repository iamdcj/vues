<template>
  <div>
    <div>
      <h3>v-if</h3>
      <p>
        This control-flow directive will mount a component if the condition is truthy, or unmount if the condition is falsey. <strong>The component is added/removed from the DOM</strong>
      </p>

      <p>It is useful if you want to hide/show a component very times, ideally just the one time</p>

      <button v-on:click="toggleMounted">{{mounted ? 'Unmount' : 'Mount' }} image</button>

      <Img v-if="mounted" src="https://dummyimage.com/600x400/000/fff" />
    </div>
    <div>
      <h3>v-else</h3>
      <p>
        This control-flow directive will mount a component if the condition is falsey
      </p>

      <p>It is useful if you want to render some fallback/alternate UI when a user performs some action</p>

      <button v-on:click="toggleHappiness">I'm {{happy ? 'happy' : 'sad' }}</button>

      <p v-if="happy">😃</p>
      <p v-else>😡</p>
    </div>
    <div>
      <h3>v-show</h3>
      <p>
        
        This directive will show a component if the condition is truthy, or hides it if the condition is falsey. <strong>The component remains in the DOM</strong>, but when hidden if will have a <code>display: none;</code> inline applied to the chosen element.
      </p>

      <p>It is useful if the user might repeatedly toggle the visibilty of an element</p>
      
      <button v-on:click="toggleVisibility">{{visible ? 'Hide' : 'Show' }} content</button>

      <p v-show="visible">HOLA MUNDIAL!</p>

    </div>
  </div>
</template>

<script>
export default {
  name: "IfShow",
  data() {
    return {
      mounted: true,
      happy: true,
      visible: true
    };
  },
  methods: {
    toggleMounted() {
      this.mounted = !this.mounted;
    },
    toggleHappiness() {
      this.happy = !this.happy;
    },
    toggleVisibility() {
      this.visible = !this.visible;
    }
  }
};
</script>
