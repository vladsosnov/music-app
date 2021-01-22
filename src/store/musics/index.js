import getters from './getters'
import mutations from './mutations'

const musicsModule = {
  state () {
    return {
      musics: [],
      musicsState: 'loading'
    }
  },
  getters,
  mutations
}

export default musicsModule
