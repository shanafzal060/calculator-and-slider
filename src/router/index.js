import Vue from 'vue'
import VueRouter from 'vue-router'
import calculatorDemo from '../components/calculatorDemo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'calculatorDemo',
    component: calculatorDemo
  },
  {
    path: '/slider',
    name: 'slider',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/slider.vue')
  },
  {
    path: '/calculatorSecond',
    name: 'calculatorSecond',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/calculatorSecond.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
