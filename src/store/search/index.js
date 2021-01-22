import getters from './getters'
import mutations from './mutations'

const searchMusicsModule = {
  state () {
    return {
      searchQuery: '',
      searchMusics: [],
      searchMusicsState: 'loading'
    }
  },
  getters,
  mutations
}

export default searchMusicsModule
