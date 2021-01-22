<template>
  <main class="index-view">
    <index-hero />
    <section
      class="index-view__musics vs-container"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div
        v-for="music in musics.track"
        :key="music.listeners"
      >
        <index-track-card
          v-if="musicsState === 'loaded'"
          :music="music"
        />
        <skeleton-track-card v-else-if="musicsState === 'loading'" />
        <h2 v-else>
          Sorry! Something wrong...
        </h2>
      </div>
    </section>
  </main>
</template>

<script>
import IndexHero from '@/components/Index/IndexHero.vue'
import IndexTrackCard from '@/components/Index/IndexTrackCard.vue'
import SkeletonTrackCard from '@/components/Shared/SkeletonTrackCard.vue'

export default {
  name: 'IndexView',
  components: {
    IndexHero,
    IndexTrackCard,
    SkeletonTrackCard
  },
  computed: {
    musics: {
      get () {
        return this.$store.getters.musics
      },
      set (value) {
        this.$store.commit('setMusics', value)
      }
    },
    musicsState: {
      get () {
        return this.$store.getters.musicsState
      },
      set (value) {
        this.$store.commit('setMusicsState', value)
      }
    }
  },
  mounted () {
    this.fetchMusics()
  },
  methods: {
    async fetchMusics () {
      try {
        const response = await fetch(`${process.env.VUE_APP_API_BASE_URL}chart.gettoptracks&api_key=${process.env.VUE_APP_API_KEY}&format=json`)
        const data = await response.json()

        this.musics = data.tracks
        this.musicsState = 'loaded'
        console.log(data.tracks)
      } catch (e) {
        console.log(e)
        this.musicsState = 'failed'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.index-view {
  &__musics {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 16px;
  }
}
</style>
