import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/dashboard',
    name: 'Dashbaord',
    component: () => import('../views/Dashboard.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: () => import('../views/Schedule.vue'),
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
