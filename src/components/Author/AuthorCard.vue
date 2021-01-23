<template>
  <div
    v-if="author"
    data-aos="fade-up"
    class="author-card"
  >
    <div class="overlay" />
    <div class="author-card__wrapper">
      <img
        v-if="author.image"
        :src="author.image[2]['#text']"
        data-aos="fade-right"
        alt="author.name"
        class="author-card__image"
      >
      <div
        class="author-card__detail"
        data-aos="fade-left"
      >
        <p class="name">
          {{ author.name }}
        </p>
        <p
          v-if="author.bio"
          class="bio"
        >
          {{ author.bio.summary }}
        </p>
        <div
          v-for="(tags, index) in author.tags"
          :key="index"
          class="tags"
        >
          <ul class="tags__list">
            <li
              v-for="(tag, tIndex) in tags"
              :key="tag.name"
              data-aos="fade-up"
              :data-aos-delay="tIndex * 100"
              class="tag"
            >
              {{ tag.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthorCard',
  props: {
    author: { required: true }
  }
}
</script>

<style lang="scss" scoped>
.author-card {
  position: relative;
  padding: 32px 0;
  border-radius: 20px;
  background-image: url('~@/assets/images/author-bg.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 640px) {
    flex-direction: column;
    justify-content: center;
  }

  .overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, .1);
    border-radius: 20px;
  }

  &__wrapper {
    position: relative;
    max-width: 768px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    z-index: 100;
  }

  &__image {
    margin-right: 24px;
    border-radius: 50%;

    @media (max-width: 640px) {
      margin-right: 0;
      margin-bottom: 16px;
    }
  }

  &__detail {
    .name {
      margin-bottom: 16px;
      font-size: 20px;
      font-weight: 500;
      color: #fff;
    }

    .bio {
      margin-bottom: 16px;
      font-size: 16px;
      line-height: 1.1;
      font-weight: 500;
      color: #fff;
      word-break: break-word;
    }

    .tags {
      margin: -4px;
      display: flex;

      &__list {
        display: flex;
        flex-wrap: wrap;

        .tag {
          margin: 4px;
          padding: 6px 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          background-color: #1aa188;
          border-radius: 6px;
        }
      }
    }
  }
}
</style>
