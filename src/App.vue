<template>
  <div id="app">
    <app-header data-aos="fade-right" />
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
import AppHeader from '@/components/Shared/AppHeader.vue'

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .2s ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
}
</style>
