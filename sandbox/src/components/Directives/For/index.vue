<template>
  <div>
    
      <h3>v-for</h3>
      <p>This directive will iterate over the data passed, or create a loop using the conditions stated</p>

      <h4>Data</h4>

      <ul>
        <li v-for="item in items" :key="item">
          {{item}}
        </li>
      </ul>

      <h4>Loop</h4>

      <ul>
        <li v-for="number in 5" :key="number">
          {{number}}
        </li>
      </ul>

    </div>
</template>

<script>
export default {
  name: "For",
  props: {
    msg: String,
  },
  data() {
    return {
      items: ["a", "b", "c"],
    };
  },
};
</script>
