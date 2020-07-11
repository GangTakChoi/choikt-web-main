import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import(/* webpackChunkName: "main" */ '../components/Main.vue')
  },
  {
    path: '/montihallproblem',
    name: 'MontyHallProblem',
    component: () => import(/* webpackChunkName: "montyhallproblem" */ '../components/MontyHallProblem.vue')
  },
  {
    path: '/creation',
    name: 'Creation',
    component: () => import(/* webpackChunkName: "creation" */ '../components/Creation.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
