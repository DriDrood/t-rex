import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import mainMenu from '@/pages/mainMenu.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: mainMenu
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
