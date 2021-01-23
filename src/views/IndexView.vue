<template>
  <main class="index-view">
    <app-hero title="Music app" />
    <app-musics-list
      v-if="musics"
      :musics="musics"
      :musics-state="musicsState"
      @scroll-to-bottom="fetchMusics"
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
  data () {
    return {
      isLastRequest: false
    }
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
    musicsPage: {
      get () {
        return this.$store.getters.musicsPage
      },
      set (value) {
        this.$store.commit('setMusicsPage', value)
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
      if (this.isLastRequest) {
        return
      }

      try {
        const response = await fetch(
          `${process.env.VUE_APP_API_BASE_URL}chart.gettoptracks&api_key=${process.env.VUE_APP_API_KEY}&format=json&page=${this.musicsPage++}`
        )
        const data = await response.json()

        if (this.musics.length < data.tracks['@attr'].total) {
          const musics = data.tracks.track

          this.musics = this.musics.concat(musics)
          this.musicsState = 'loaded'
        } else {
          this.isLastRequest = true
        }
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
  margin-bottom: 24px;
}
</style>
