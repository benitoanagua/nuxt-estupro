<template>
  <header
    :class="titleClass"
    :style="`background-image: url(${$config.directusUrl}/assets/${global.Illustration})`"
  >
    <h1>
      {{ global.Headline }}
    </h1>
    <div v-html="global.Excerpt"></div>
  </header>
  <main :class="containerClass">
    <section>
      <VideoFrame :url="global.VideoIntro" />
    </section>

    <section>
      <h6>{{ global.Author }}</h6>
    </section>
    <Segment
      v-for="block in blocks"
      :title="block.Title"
      :content="block.Content"
      :picture="block.Picture"
      :caption="block.Caption"
    />
    <section>
      <VideoFrame :url="global.VideoEnd" />
    </section>
  </main>
  <footer v-html="global.Credits" :class="containerClass"></footer>
</template>

<script setup lang="ts">
const { getItems } = useDirectusItems();
const global = await getItems({ collection: "Global" });
const blocks = await getItems({ collection: "Sections" });

const containerClass = computed(() => ({
  "max-w-screen-md mx-auto": true,
}));
const titleClass = computed(() => ({
  "min-h-screen": true,
}));
</script>
