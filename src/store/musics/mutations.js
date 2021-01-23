import Vue from 'vue'

export default {
  setMusics (state, musics) {
    Vue.set(state, 'musics', musics)
  },
  setMusicsPage (state, musicsPage) {
    Vue.set(state, 'musicsPage', musicsPage)
  },
  setMusicsState (state, musicsState) {
    Vue.set(state, 'musicsState', musicsState)
  }
}
