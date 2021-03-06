import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/avancado',
    name: 'avancado',
    component: () => import('../views/Avancado.vue')
  },
  {
    path: '/detalhesticket',
    name: 'DetalhesTicket',
    component: () => import('../views/DetalhesTicker.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
