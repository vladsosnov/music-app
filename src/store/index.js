import Vue from 'vue'
import Vuex, { Store } from 'vuex'

import author from '@/store/author'
import musics from '@/store/musics'
import search from '@/store/search'

Vue.use(Vuex)

export default function createStore () {
  return new Store({
    modules: {
      author,
      musics,
      search
    }
  })
}
