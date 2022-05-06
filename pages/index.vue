<template>
  <div>
    <Logos :logo1="profile.Logo1" :logo2="profile.Logo2" />
    <Hero
      :headline="profile.Headline"
      :illustration="profile.Illustration"
      :excerpt="profile.Excerpt"
    />
    <main class="max-w-screen-md mx-auto px-4 md:px-0">
      <VideoFrame :url="profile.VideoIntro" />

      <Social />

      <section>
        <h6>{{ profile.Author }}</h6>
      </section>
      <Segment
        v-for="block in blocks"
        :title="block.Title"
        :content="block.Content"
        :picture="block.Picture"
        :caption="block.Caption"
        :key="block"
      />
      <VideoFrame :url="profile.VideoEnd" />
    </main>
    <Credits :content="profile.Credits" />
  </div>
</template>

<script setup lang="ts">
const { getItems } = useDirectusItems();
const profile = await getItems({ collection: "Global" });
const blocks = await getItems({ collection: "Sections" });
</script>
