<template>
  <main class="index-view">
    <index-hero />
    <section>
      <index-track-card />
    </section>
  </main>
</template>

<script>
import IndexHero from '@/components/Index/IndexHero.vue'
import IndexTrackCard from '@/components/Index/IndexTrackCard.vue'

export default {
  name: 'IndexView',
  components: {
    IndexHero,
    IndexTrackCard
  }
}
</script>

<style lang="scss" scoped>
.index-view {}
</style>
