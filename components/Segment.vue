<template>
  <article class="my-12">
    <h3 v-if="title" class="my-4">{{ title }}</h3>
    <div v-html="content" class="flex flex-col space-y-4"></div>
    <Lightbox v-if="picture" :link="photo" :description="caption" />
  </article>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  picture: {
    type: String,
  },
  caption: {
    type: String,
  },
});
const config = useRuntimeConfig();
const photo = computed(() => `${config.directusUrl}/assets/${props.picture}`);
</script>
