<template>
  <div>
    <h2>Methods in Vue</h2>
    <p>
      Each Vue component is its own instance, and this instance can have
      functions attached to it, these functions are methods - functions that are
      attached to an object
    </p>

    <code>
      <pre>
    export default {
      name: "SomeComponent",
      methods: {
        handleClick(e) {
          console.log(e)
        }
      }
    }
      </pre>
    </code>

    <p>
      Methods are often used as callbacks in event listeners
      <button @click="handleClick">Click me!</button>
    </p>

    <code>
      <pre>&lt;button @click="handleClick">Click me! &lt;/button&gt;</pre>
    </code>
  </div>
</template>

<script>
export default {
  name: "Methods",
  methods: {
    handleClick(e) {
      console.log(e);
    },
  },
};
</script>
