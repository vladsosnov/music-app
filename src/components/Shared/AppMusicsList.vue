<template>
  <section
    class="app-music-list vs-container"
    data-aos="fade-up"
    data-aos-delay="300"
  >
    <div
      v-for="music in musics"
      :key="music.url"
    >
      <app-track-card
        v-if="musicsState === 'loaded'"
        :music="music"
      />
      <app-skeleton-track-card v-else-if="musicsState === 'loading'" />
      <h2 v-else>
        Sorry! Something wrong...
      </h2>
    </div>
  </section>
</template>

<script>
import AppTrackCard from '@/components/Shared/AppTrackCard.vue'
import AppSkeletonTrackCard from '@/components/Shared/AppSkeletonTrackCard.vue'

export default {
  name: 'AppMusicsList',
  components: {
    AppTrackCard,
    AppSkeletonTrackCard
  },
  props: {
    musics: {
      required: true
    },
    musicsState: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.app-music-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  grid-gap: 16px;

  @media (max-width: 768px) {
    grid-gap: 10px;
  }
}
</style>
