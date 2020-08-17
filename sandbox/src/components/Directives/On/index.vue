<template>
  <div>
    <h3>v-on</h3>
    <p>The v-on directive attaches an event listener to the chosen element.</p>

    <p>v-on supports all the native DOM events;</p>

    <ul>
      <li>v-on:click</li>
      <li>v-on:mouseover</li>
      <li>v-on:mouseleave</li>
      <li>v-on:keyup</li>
      <li>v-on:keydown</li>
    </ul>

    <div>
      <h4>v-on:click</h4>
      <p>
        If used on native DOM element, e.g. a button, the method will receive
        the native event object as the only argument.
      </p>

      <button v-on:click="handleClick">Click me!</button>

      <pre>{{ $data.event }}</pre>
    </div>

    <h4>The @ shortcut</h4>
    <p>The v-on syntax can be replaced with the @ shortcut syntax;</p>

    <code>
      @:click="doSumdfink"
    </code>

    <div
      style="display: flex; justify-content: center; align-items: center; width: 100vh; height: 500px; background: beige; border: 1px solid;"
      v-on:mousemove="handleHover"
    >
      x {{ $data.x }}, y {{ $data.y }}
    </div>

    <pre>{{ $data }}</pre>
  </div>
</template>

<script>
export default {
  name: "On",
  data() {
    return {
      event: null,
      x: null,
      y: null,
    };
  },
  methods: {
    handleClick(e) {
      this.event = e;
    },
    handleHover(e) {
      this.x = e.x;
      this.y = e.y;
    },
  },
};
</script>
