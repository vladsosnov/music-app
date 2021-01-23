import getters from './getters'
import mutations from './mutations'

const searchMusicsModule = {
  state () {
    return {
      searchQuery: '',
      searchMusics: [],
      searchMusicsPage: 1,
      searchMusicsState: 'loading'
    }
  },
  getters,
  mutations
}

export default searchMusicsModule
