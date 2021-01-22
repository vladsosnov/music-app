import Vue from 'vue'

export default {
  setMusics (state, musics) {
    Vue.set(state, 'musics', musics)
  },
  setMusicsState (state, musicsState) {
    Vue.set(state, 'musicsState', musicsState)
  }
}
