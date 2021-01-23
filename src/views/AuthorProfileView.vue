<template>
  <div class="author-profile-view vs-container">
    <author-card
      v-if="authorInfo"
      :author="authorInfo"
    />
  </div>
</template>

<script>
import AuthorCard from '@/components/Author/AuthorCard'

export default {
  name: 'AuthorProfileView',
  components: {
    AuthorCard
  },
  computed: {
    authorName () {
      return this.$route.params.name
    },
    authorInfo: {
      get () {
        return this.$store.getters.authorInfo
      },
      set (value) {
        this.$store.commit('setAuthorInfo', value)
      }
    },
    authorInfoState: {
      get () {
        return this.$store.getters.authorInfoState
      },
      set (value) {
        this.$store.commit('setAuthorInfoState', value)
      }
    }
  },
  watch: {
    $route: {
      handler () {
        this.fetchAuthorInfo()
      },
      immediate: true
    }
  },
  methods: {
    async fetchAuthorInfo () {
      try {
        const response = await fetch(
          `${process.env.VUE_APP_API_BASE_URL}artist.getinfo&artist=${this.authorName}&api_key=${process.env.VUE_APP_API_KEY}&format=json`
        )
        const data = await response.json()

        this.authorInfo = data.artist
        this.authorInfoState = 'loaded'
      } catch (e) {
        console.log(e)
        this.authorInfoState = 'failed'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.author-profile-view {
  margin-bottom: 24px;
}
</style>
