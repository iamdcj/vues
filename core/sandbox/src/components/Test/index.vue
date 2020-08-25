<template>
  <div>
    Test Component
    {{ name }}
    {{ routeName }}
    <router-view></router-view>
    <router-view name="second"></router-view>
  </div>
</template>

<script>
export default {
  name: "Test",
  props: ["name"],
  computed: {
    routeName() {
      console.log(this.$route);
      return this.$route.params.name;
    },
  },
};
</script>
