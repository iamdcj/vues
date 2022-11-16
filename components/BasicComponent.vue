<template>
  <div
    class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"
  >
    {{ name }}
    {{ number }}
    <button @click="sum(5, 2)">Clickity Me</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      name: 'David Jones',
      number: 0,
    }
  },
  methods: {
    sum(a: number, b: number) {
      this.number = a + b
    },
  },
})
</script>
