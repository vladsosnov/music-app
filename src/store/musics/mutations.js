import Vue from 'vue'

export default {
  setMusicsState (state, musicsState) {
    Vue.set(state, 'musicsState', musicsState)
  },
  setMusics (state, musics) {
    Vue.set(state, 'musics', musics)
  }
}
