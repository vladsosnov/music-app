import Vue from 'vue'

export default {
  setAuthorInfo (state, authorInfo) {
    Vue.set(state, 'authorInfo', authorInfo)
  },
  setAuthorInfoState (state, authorInfoState) {
    Vue.set(state, 'authorInfoState', authorInfoState)
  }
}
