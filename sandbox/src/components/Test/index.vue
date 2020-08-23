<template>
  <div>
    {{name}}
    {{routeName}}
  </div>
</template>

<script>
export default {
  name: 'Test',
  props: ["name"],
  computed: {
    routeName () {
      console.log(this.$route);
      return this.$route.params.name
    }
  },
}
</script>
