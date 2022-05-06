<template>
  <section class="my-12 flex justify-center">
    <iframe
      class="w-full aspect-video max-w-xl"
      :src="url"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  url: {
    type: String,
  },
});
</script>
