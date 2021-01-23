import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import AOS from 'aos'
import VueObserveVisibility from 'vue-observe-visibility'

import 'aos/dist/aos.css'
import '@/assets/styles/app.css'
import '@/assets/styles/reset.css'

Vue.config.productionTip = false

Vue.use(VueObserveVisibility)

new Vue({
  created () {
    AOS.init()
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
