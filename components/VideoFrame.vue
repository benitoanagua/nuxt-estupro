<template>
  <iframe
    class="max-w-xl"
    width="100%"
    height="315"
    :src="url"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</template>

<script setup lang="ts">
const props = defineProps({
  url: {
    type: String,
  },
});
</script>
