<template>
  <section
    v-if="musics.length > 0"
    class="app-music-list vs-container"
    data-aos="fade-up"
    data-aos-delay="300"
  >
    <div
      v-for="(music, index) in musics"
      :key="index"
    >
      <app-track-card
        :music="music"
        data-aos="fade-up"
      />
    </div>
    <div v-observe-visibility="(isVisible) => musicsVisibilityChanged(isVisible)" />
  </section>
  <h2
    v-else-if="searchQuery.length > 0"
    class="empty-result vs-container"
  >
    Empty result
  </h2>
</template>

<script>
import AppTrackCard from '@/components/Shared/AppTrackCard.vue'

export default {
  name: 'AppMusicsList',
  components: {
    AppTrackCard
  },
  props: {
    musics: {
      required: true
    },
    musicsState: {
      type: String,
      required: true
    }
  },
  computed: {
    searchQuery () {
      return this.$store.getters.searchQuery
    }
  },
  methods: {
    musicsVisibilityChanged (isVisible) {
      if (isVisible) {
        this.$emit('scroll-to-bottom')
      }
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

.empty-result {
  font-size: 24px;
  font-weight: 500;
}
</style>
