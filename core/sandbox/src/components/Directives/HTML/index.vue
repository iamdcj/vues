<template>
  <div>
    
      <h3>v-html</h3>
      <p>The v-html directive will parse a block of HTML with the target element.</p>

      <div v-html="copy" />

       <div>
        <h5>State</h5>
        <code>
          <pre>{{ $data }}</pre>
        </code>
      </div>

      <p style="color: red; font-weight: bold">DO NOT USE for user-generated content. The v-html attribute is susceptible to XSS attack.</p>

    </div>
</template>

<script>
export default {
  name: "For",
  data() {
    return {
      copy: "<p>Hello, my name is David Jones</p>"
    };
  },
};
</script>
