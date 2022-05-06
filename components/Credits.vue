<template>
  <footer class="bg-gradient-to-r from-gray-300 to-gray-200">
    <div
      v-html="content"
      :class="[
        'max-w-screen-md mx-auto px-4 md:px-0 pt-12 pb-16',
        'italic text-center',
      ]"
    ></div>
  </footer>
</template>

<script setup lang="ts">
const props = defineProps({
  content: {
    type: String,
  },
});
</script>
