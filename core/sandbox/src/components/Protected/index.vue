<template>
  <div>
    <h2>Protected Route {{ isProtected }}</h2>
  </div>
</template>

<script>
export default {
  name: "Methods",
  computed: {
    isProtected () {
      return this.$route.meta.isProtected
    }
  },
};
</script>
