import getters from './getters'
import mutations from './mutations'

const musicsModule = {
  state () {
    return {
      musics: [],
      musicsPage: 1,
      musicsState: 'loading'
    }
  },
  getters,
  mutations
}

export default musicsModule
