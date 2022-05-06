<template>
  <section class="flex justify-center my-8">
    <ul class="flex space-x-4">
      <li class="p-1.5 rounded-sm bg-[#3b5998]">
        <a
          class="flex space-x-1 items-center"
          :href="`https://facebook.com/sharer/sharer.php?u=${URL}>`"
        >
          <brand-facebook-icon size="24" class="text-white" /><span
            class="text-white text-xs uppercase hidden md:block"
            >Facebook</span
          ></a
        >
      </li>
      <li class="p-1.5 rounded-sm bg-[#1da1f2]">
        <a
          class="flex space-x-1 items-center"
          :href="`https://twitter.com/share?url=${URL}>`"
        >
          <brand-twitter-icon size="24" class="text-white" /><span
            class="text-white text-xs uppercase hidden md:block"
            >Twitter</span
          ></a
        >
      </li>
      <li class="p-1.5 rounded-sm bg-[#25d366]">
        <a
          class="flex space-x-1 items-center"
          :href="`https://web.whatsapp.com/send?text=${URL}>`"
        >
          <brand-whatsapp-icon size="24" class="text-white" /><span
            class="text-white text-xs uppercase hidden md:block"
            >Whatsapp</span
          ></a
        >
      </li>
      <li class="p-1.5 rounded-sm bg-[#2ca5e0]">
        <a
          class="flex space-x-1 items-center"
          :href="`https://t.me/share/url?url=${URL}>`"
        >
          <brand-telegram-icon size="24" class="text-white" /><span
            class="text-white text-xs uppercase hidden md:block"
            >Telegram</span
          ></a
        >
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import {
  BrandFacebookIcon,
  BrandTwitterIcon,
  BrandWhatsappIcon,
  BrandTelegramIcon,
} from "vue-tabler-icons";

const config = useRuntimeConfig();
</script>
