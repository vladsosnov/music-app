<template>
  <div class="search-view">
    <app-hero
      title="Search"
      @on-search="fetchSearchMusics"
    />
    <app-musics-list
      v-if="searchMusics"
      :musics="searchMusics"
      :musics-state="searchMusicsState"
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
  computed: {
    searchMusics: {
      get () {
        return this.$store.getters.searchMusics
      },
      set (value) {
        this.$store.commit('setSearchMusics', value)
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
  methods: {
    async fetchSearchMusics (search) {
      try {
        const response = await fetch(`${process.env.VUE_APP_API_BASE_URL}track.search&track=${search}&api_key=${process.env.VUE_APP_API_KEY}&format=json`)
        const data = await response.json()

        this.searchMusics = data.results.trackmatches.track
        this.searchMusicsState = 'loaded'
      } catch (e) {
        console.log(e)
        this.searchMusicsState = 'failed'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.search-view {}
</style>
