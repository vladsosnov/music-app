<template>
  <div class="search-view">
    <app-hero
      title="Search"
    />
    <app-musics-list
      v-if="searchMusics"
      :musics="searchMusics"
      :musics-state="searchMusicsState"
      @scroll-to-bottom="fetchSearchMusics"
    />
  </div>
</template>

<script>
import AppHero from '@/components/Shared/AppHero.vue'
import AppMusicsList from '@/components/Shared/AppMusicsList.vue'

export default {
  name: 'SearchView',
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
    searchQuery () {
      return this.$store.getters.searchQuery || this.$route.query.music
    },
    searchMusics: {
      get () {
        return this.$store.getters.searchMusics
      },
      set (value) {
        this.$store.commit('setSearchMusics', value)
      }
    },
    searchMusicsPage: {
      get () {
        return this.$store.getters.searchMusicsPage
      },
      set (value) {
        this.$store.commit('setSearchMusicsPage', value)
      }
    },
    searchMusicsState: {
      get () {
        return this.$store.getters.searchMusicsState
      },
      set (value) {
        this.$store.commit('setSearchMusicsState', value)
      }
    }
  },
  watch: {
    $route: {
      handler () {
        this.searchMusics = []
        this.fetchSearchMusics()
      },
      immediate: true
    }
  },
  methods: {
    async fetchSearchMusics () {
      if (this.isLastRequest) {
        return
      }

      if (this.searchQuery === undefined) {
        return
      }

      this.searchMusicsState = 'loading'

      try {
        const response = await fetch(
          `${process.env.VUE_APP_API_BASE_URL}track.search&track=${this.searchQuery}&api_key=${process.env.VUE_APP_API_KEY}&format=json&page=${this.searchMusicsPage++}`
        )
        const data = await response.json()

        if (this.searchMusics.length < data.results['opensearch:totalResults']) {
          const searchMusics = data.results.trackmatches.track

          this.searchMusics = this.searchMusics.concat(searchMusics)
          this.searchMusicsState = 'loaded'
        } else {
          this.isLastRequest = true
        }
      } catch (e) {
        console.log(e)
        this.searchMusicsState = 'failed'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.search-view {
  margin-bottom: 24px;
}
</style>
