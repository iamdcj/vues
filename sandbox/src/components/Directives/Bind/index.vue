<template>
  <div>
    <h3>v-bind ( : )</h3>
    <p>
      The v-bind directive will bind JS to the HTML to allow for things like:
    </p>

    <ul>
      <li>Dynamic Classes</li>
      <li>Dynamic Styles</li>
      <li>State-baseed attribute values, e.g. image source</li>
      <li>Component props</li>
    </ul>

    <p>
      Essentially the v-bind, or the v-bind shortcut(:) informs makes it clear
      that the attribute is dynamic, and contains a JavaScript expression of
      some sort.
    </p>

    <div>
      <h4>Dynamic Classes</h4>
      <p>
        Applying the bind shorthand(:) before the class attribute allows for
        dynamic classes to be applied to the element.
      </p>

      <button
        v-on:click="isActive = !isActive"
        :class="{ 'is--active': isActive }"
      >
        Click me to update class
      </button>

      <div>
        <h5>State</h5>
        <code>
          <pre>{{ $data }}</pre>
        </code>
      </div>
    </div>

    <div>
      <h4>Dynamic Styles</h4>
      <p>
        Applying the bind shorthand(:) before the style attribute allows for
        dynamic styling to be applied to the element.
      </p>

      <button
        v-on:click="fontSize = fontSize + 1"
        :style="{ fontSize }"
      >
        Click to increase font size
      </button>
      <button
        v-on:click="fontSize = fontSize - 1"
        :style="{ fontSize }"
      >
        Click to decrease font size
      </button>
      <p :style="{ fontSize: `${fontSize}px` }">I am David Christian Jones</p>

      <div>
        <h5>State</h5>
        <code>
          <pre>{{ $data }}</pre>
        </code>
      </div>
    </div>

    
  </div>
</template>

<script>
export default {
  name: "Bind",
  props: {
    msg: String,
  },
  data() {
    return {
      isActive: false,
      fontSize: 10,
      imageSrc: ""
    };
  },
};
</script>

<style scoped>
.is--active {
  background-color: orangered;
  color: #fff;
}
</style>
