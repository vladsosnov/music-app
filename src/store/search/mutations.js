import Vue from 'vue'

export default {
  setSearchQuery (state, searchQuery) {
    Vue.set(state, 'searchQuery', searchQuery)
  },
  setSearchMusics (state, searchMusics) {
    Vue.set(state, 'searchMusics', searchMusics)
  },
  setSearchMusicsPage (state, searchMusicsPage) {
    Vue.set(state, 'searchMusicsPage', searchMusicsPage)
  },
  setSearchMusicsState (state, searchMusicsState) {
    Vue.set(state, 'searchMusicsState', searchMusicsState)
  }
}
