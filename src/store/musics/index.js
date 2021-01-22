import getters from './getters'
import mutations from './mutations'

const musicsModule = {
  state () {
    return {
      musicsState: 'loading',
      musics: []
    }
  },
  getters,
  mutations
}

export default musicsModule
