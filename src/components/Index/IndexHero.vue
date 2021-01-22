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
      Music app <br>
      Test task
    </h1>
  </div>
</template>

<script>
export default {
  name: 'IndexHero'
}
</script>

<style lang="scss" scoped>
.index-hero {
  min-height: 540px;
  margin-bottom: 24px;
  display: flex;
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
}
</style>
