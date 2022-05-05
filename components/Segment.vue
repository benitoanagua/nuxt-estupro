<template>
  <article class="my-8">
    <h3 v-if="title" class="my-4">{{ title }}</h3>
    <div v-html="content" class="flex flex-col space-y-4"></div>
    <div v-if="picture">
      <img :src="imgUrl" :alt="caption" />
      <span class="text-xs md:text-sm text-gray-500">{{ caption }}</span>
    </div>
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
const imgUrl = computed(() => `${config.directusUrl}/assets/${props.picture}`);
</script>
