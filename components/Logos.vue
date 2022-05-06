<template>
  <section
    :class="[
      'flex flex-col md:flex-row justify-evenly items-center',
      'space-y-8 md:space-y-0 my-8 md:my-4',
    ]"
  >
    <div><img :src="getImg(logo1)" alt="" class="h-14 md:h-20" /></div>
    <div><img :src="getImg(logo2)" alt="" class="h-28 md:h-36" /></div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  logo1: {
    type: String,
  },
  logo2: {
    type: String,
  },
});

const config = useRuntimeConfig();
const getImg = (img) => `${config.directusUrl}/assets/${img}`;
</script>
