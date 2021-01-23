import getters from './getters'
import mutations from './mutations'

const musicsModule = {
  state () {
    return {
      authorInfo: [],
      authorInfoState: 'loading'
    }
  },
  getters,
  mutations
}

export default musicsModule
