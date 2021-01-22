import Vue from 'vue'
import Vuex, { Store } from 'vuex'

import musics from '@/store/musics'
import search from '@/store/search'

Vue.use(Vuex)

export default function createStore () {
  return new Store({
    modules: {
      musics,
      search
    }
  })
}
