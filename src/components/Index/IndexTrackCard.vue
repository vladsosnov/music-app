<template>
  <div class="index-track-card">
    <img
      :src="music.image[3]['#text']"
      :alt="music.name"
      class="index-track-card__img"
    >
    <div class="index-track-card__details">
      <p class="name">
        <span class="bold">Track:</span>
        {{ music.name }}
      </p>
      <p
        class="artist"
        @click="onAuthorClick"
      >
        <span class="bold">Author:</span>
        {{ music.artist.name }}
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

  &__img {
    max-width: 240px;
    margin-bottom: 8px;
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
