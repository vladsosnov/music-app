<template>
  <main class="index-view">
    <app-hero title="Music app" />
    <app-musics-list
      v-if="musics"
      :musics="musics"
      :musics-state="musicsState"
    />
  </main>
</template>

<script>
import AppHero from '@/components/Shared/AppHero.vue'
import AppMusicsList from '@/components/Shared/AppMusicsList.vue'

export default {
  name: 'IndexView',
  components: {
    AppHero,
    AppMusicsList
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

        this.musics = data.tracks.track
        this.musicsState = 'loaded'
      } catch (e) {
        console.log(e)
        this.musicsState = 'failed'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.index-view {}
</style>
