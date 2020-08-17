<template>
  <div>
    <h3>v-bind ( : )</h3>
    <p>
      The v-bind directive will bind JS to the HTML, evaluating the expressions with the attribute values, allowing for things like:
    </p>

    <ul>
      <li>Dynamic Classes</li>
      <li>Dynamic Styles</li>
      <li>State or Prop based attribute values, e.g. image source</li>
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

    <div>
      <h4>Dynamic attribute values</h4>
      <p>
        Applying the bind shorthand(:) before a particular attribute will allow for binding-based values - we can store a value in the state/props, e.g. the source of an image
      </p>

      <figure>
        <img :src="imageSrc" />
        <figcaption v-pre>source comes from {{imageSrc}} in the state</figcaption>
      </figure>
      

      <figure>
        <img :src="bannerSrc" />
        <figcaption v-pre>source comes from {{bannerSrc}} passed down as a prop</figcaption>
      </figure>
      

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
    bannerSrc: String,
  },
  data() {
    return {
      isActive: false,
      fontSize: 10,
      imageSrc: "https://picsum.photos/400/300"
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
