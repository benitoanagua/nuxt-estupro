<template>
  <div>
    <Hero
      :headline="global.Headline"
      :illustration="global.Illustration"
      :excerpt="global.Excerpt"
    />
    <main :class="containerClass">
      <VideoFrame :url="global.VideoIntro" />

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
      <VideoFrame :url="global.VideoEnd" />
    </main>
    <footer v-html="global.Credits" :class="containerClass"></footer>
  </div>
</template>

<script setup lang="ts">
const { getItems } = useDirectusItems();
const global = await getItems({ collection: "Global" });
const blocks = await getItems({ collection: "Sections" });

const containerClass = computed(() => ({
  "max-w-screen-md mx-auto px-4 md:px-0": true,
}));
</script>
