<template>
  <div
    class="index-track-card"
    :class="{ 'index-track-card--track' : !isIndexPage }"
  >
    <img
      v-if="music.image[3]['#text'] && isIndexPage"
      :src="music.image[3]['#text']"
      :alt="music.name"
      class="index-track-card__img"
    >
    <div
      v-else-if="isIndexPage"
      class="index-track-card__empty-img"
    >
      {{ music.name }}
    </div>
    <div class="index-track-card__details">
      <p class="name">
        <span class="bold">Track:</span>
        {{ music.name }}
      </p>
      <p
        v-if="music.artist.name"
        class="artist"
        @click="onAuthorClick"
      >
        <span class="bold">Author:</span>
        {{ music.artist.name }}
      </p>
      <p
        v-else
        class="artist"
        @click="onAuthorClick"
      >
        <span class="bold">Author:</span>
        {{ music.artist }}
      </p>
      <a
        :href="music.url"
        rel="noopener nofollow"
        target="_blank"
        class="author-link"
      >
        Author on Last.fm
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexTrackCard',
  props: {
    music: {
      type: Object,
      required: true
    }
  },
  computed: {
    isIndexPage () {
      return this.$route.name === 'Index'
    }
  },
  methods: {
    onAuthorClick () {
      console.log('23')
    }
  }
}
</script>

<style lang="scss" scoped>
.index-track-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.2s ease-in;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    text-align: center;
  }

  &--track {
    height: 90px;
    padding: 8px;
    justify-content: center;
    border: 1px solid;
    overflow: hidden;
  }

  &__img {
    max-width: 240px;
    margin-bottom: 8px;
    border-radius: 6px;
  }

  &__empty-img {
    width: 240px;
    height: 240px;
    margin-bottom: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #000;
    font-size: 24px;
    font-weight: 700;
    background-color: #ebebeb;
    border-radius: 6px;
  }

  &__details {
    width: 100%;
    margin-left: 5px;

    .name {
      margin-bottom: 4px;
    }

    .artist {
      margin-bottom: 4px;
      transition: color 0.2s ease-in;

      &:hover {
        color: blue;
        cursor: pointer;
      }
    }

    .author-link {
      color: #000;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

}
</style>
