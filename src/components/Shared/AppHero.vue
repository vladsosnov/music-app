<template>
  <div class="index-hero">
    <div
      class="index-hero__image"
      data-aos="fade-right"
      data-aos-delay="400"
    />
    <h1
      class="index-hero__title"
      data-aos="fade-left"
      data-aos-delay="400"
    >
      {{ title }}
    </h1>
    <div
      v-if="isSearchPage"
      class="index-hero__search"
      data-aos="flip-up"
      data-aos-delay="400"
    >
      <input
        v-model="search"
        type="text"
        placeholder="Search track"
        class="search-input"
      >
      <input
        title="Search track"
        value=""
        class="search-btn"
        :class="{ 'search-btn--lock': !search }"
        @click="onSearchClick"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexHero',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      search: ''
    }
  },
  computed: {
    isSearchPage () {
      return this.$route.name === 'Search'
    },
    searchQuery: {
      get () {
        return this.$store.getters.searchQuery
      },
      set (value) {
        this.$store.commit('setSearchQuery', value)
      }
    }
  },
  methods: {
    onSearchClick () {
      if (this.search.length > 0) {
        this.searchQuery = this.search
        this.$router.push({ name: 'Search', query: { music: this.search } })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.index-hero {
  min-height: 540px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__image {
    position: absolute;
    width: 100%;
    height: 100%;
    max-height: 540px;
    background-image: url('~@/assets/images/hero.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: 1;
  }

  &__title {
    position: relative;
    font-size: 42px;
    font-weight: 600;
    line-height: 1.4;
    text-align: center;
    color: #fff;
    z-index: 10;
  }

  &__search {
    position: relative;
    margin-top: 24px;
    z-index: 10;

    .search-input {
      width: 244px;
      height: 42px;
      padding: 0 16px;
      border: 0;
      border-radius: 4px 0 0 4px;

      &:focus {
        outline: 0;
      }

      @media (max-width: 640px) {
        padding: 0 10px;
      }
    }

    .search-btn {
      width: 42px;
      height: 41px;
      background-color: rgba(38, 50, 56, 1);
      border: 0;
      color: #fff;
      text-align: center;
      transition: background-color .4s ease;
      border-radius: 0 4px 4px 0;

      &:hover {
        background-color: rgba(0, 150, 136, 0.9);
        cursor: pointer;
      }

      &--lock {
        &:hover {
          cursor: not-allowed;
        }
      }
    }
  }
}
</style>
