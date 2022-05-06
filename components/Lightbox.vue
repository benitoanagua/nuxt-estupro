<template>
  <div class="my-8 flex flex-col space-y-2 justify-center items-center">
    <img
      :class="imgClass"
      :src="link"
      :alt="description"
      @click="openLightbox"
    />
    <span class="text-xs text-center md:text-sm text-gray-500 max-w-xs">{{
      description
    }}</span>
  </div>

  <div :class="modalClass">
    <div class="max-w-5xl max-h-full">
      <img :src="link" :alt="description" />
    </div>
    <span
      :class="[
        'w-8 h-8 fixed top-2 right-2',
        'flex justify-center items-center',
        'cursor-pointer rounded-2xl',
        'bg-gradient-to-r from-violet-500 to-violet-700',
      ]"
      @click="closeLightbox"
      ><XIcon class="h-6 w-6 text-white"
    /></span>
    <span
      :class="['max-w-md fixed bottom-2', 'text-white text-sm text-center']"
      @click="closeLightbox"
      >{{ description }}</span
    >
  </div>
</template>

<script setup lang="ts">
import { XIcon } from "@heroicons/vue/solid";

const props = defineProps({
  link: {
    type: String,
  },
  description: {
    type: String,
  },
});
const displayLightbox = ref(false);

const openLightbox = () => {
  displayLightbox.value = true;
};
const closeLightbox = () => {
  displayLightbox.value = false;
};

// console.log(Cancel);

const imgClass = computed(() => ({
  "cursor-pointer": true,
  "max-w-xs": props.description,
}));
const modalClass = computed(() => ({
  "fixed w-full h-full top-0 left-0": true,
  "transition duration-150 ease-out": true,
  "flex flex-col justify-center items-center": true,
  "bg-gray-900/90": true,
  "scale-0": !displayLightbox.value,
  "scale-100": displayLightbox.value,
}));
</script>
