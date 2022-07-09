import { createRouter, createWebHistory } from 'vue-router'
import mainMenu from '@/pages/mainMenu.vue'

const routes = [
  {
    path: '/',
    name: 'mainMenu',
    component: mainMenu
  },
  {
    path: '/join',
    name: 'join',
    component: () => import('@/pages/join.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
