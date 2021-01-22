import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import(/* webpackChunkName: "index" */ '@/views/IndexView.vue')
  },
  {
    path: '/author/:id',
    name: 'AuthorProfile',
    component: () => import(/* webpackChunkName: "author-profile" */ '@/views/AuthorProfileView.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "search" */ '@/views/SearchView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
