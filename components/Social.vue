<template>
  <section class="flex justify-center my-8">
    <ul class="flex space-x-4">
      <li class="p-1.5 rounded-sm bg-[#3b5998]">
        <a
          target="_blank"
          class="flex space-x-1 items-center"
          :href="`https://facebook.com/sharer/sharer.php?u=${$config.productionUrl}`"
        >
          <brand-facebook-icon size="24" class="text-white" /><span
            class="text-white text-xs uppercase hidden md:block"
            >Facebook</span
          ></a
        >
      </li>
      <li class="p-1.5 rounded-sm bg-[#1da1f2]">
        <a
          target="_blank"
          class="flex space-x-1 items-center"
          :href="`https://twitter.com/share?url=${$config.productionUrl}`"
        >
          <brand-twitter-icon size="24" class="text-white" /><span
            class="text-white text-xs uppercase hidden md:block"
            >Twitter</span
          ></a
        >
      </li>
      <li class="p-1.5 rounded-sm bg-[#25d366]">
        <a
          target="_blank"
          class="flex space-x-1 items-center"
          :href="`https://web.whatsapp.com/send?text=${$config.productionUrl}`"
        >
          <brand-whatsapp-icon size="24" class="text-white" /><span
            class="text-white text-xs uppercase hidden md:block"
            >Whatsapp</span
          ></a
        >
      </li>
      <li class="p-1.5 rounded-sm bg-[#2ca5e0]">
        <a
          target="_blank"
          class="flex space-x-1 items-center"
          :href="`https://t.me/share/url?url=${$config.productionUrl}`"
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
</script>
