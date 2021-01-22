import Vue from 'vue'

export default {
  setSearchQuery (state, searchQuery) {
    Vue.set(state, 'searchQuery', searchQuery)
  },
  setSearchMusics (state, searchMusics) {
    Vue.set(state, 'searchMusics', searchMusics)
  },
  setSearchMusicsState (state, searchMusicsState) {
    Vue.set(state, 'searchMusicsState', searchMusicsState)
  }
}
