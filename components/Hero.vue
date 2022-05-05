<template>
  <header
    :class="[
      'w-full min-h-screen px-4 md:px-0',
      'bg-gray-900 bg-cover bg-center',
      'flex flex-col justify-center items-center',
    ]"
    :style="`background-image: url(${$config.directusUrl}/assets/${illustration})`"
  >
    <div
      :class="[
        'w-full h-screen absolute',
        'bg-gradient-to-r from-indigo-900/75 via-purple-900/75 to-pink-900/75',
      ]"
    ></div>
    <div class="max-w-2xl my-8 z-20">
      <h1
        :class="[
          'uppercase text-4xl sm:text-5xl md:text-8xl text-center  tracking-wider',
          'bg-clip-text text-transparent bg-gradient-to-r from-pink-200 to-violet-400',
          'drop-shadow-2xl pt-2',
        ]"
      >
        {{ headline }}
      </h1>
    </div>
    <div
      v-html="excerpt"
      :class="[
        'max-w-full sm:max-w-xl italic text-center text-gray-50 z-10',
        'text-sm md:text-base',
      ]"
    ></div>
  </header>
</template>

<script setup lang="ts">
const props = defineProps({
  headline: {
    type: String,
  },
  illustration: {
    type: String,
  },
  excerpt: {
    type: String,
  },
});
// const headerClass = computed(() => ({
//   "w-full min-h-screen": true,
//   "bg-cover bg-center bg-fixed": true,
// }));
// const config = useRuntimeConfig();
// const imgUrl = computed(() => `${config.directusUrl}/assets/${props.picture}`);
</script>
