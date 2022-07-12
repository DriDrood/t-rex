import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'mainMenu',
    component: () => import('@/pages/mainMenu.vue')
  },

  {
    path: '/join/:lobbyId?',
    name: 'join',
    component: () => import('@/pages/join.vue')
  },
  {
    path: '/host',
    name: 'host',
    component: () => import('@/pages/host.vue')
  },
  {
    path: '/lobby/:lobbyId',
    name: 'lobby',
    component: () => import('@/pages/lobby.vue')
  },
  {
    path: '/game',
    name: 'game',
    component: () => import('@/pages/game.vue')
  },



  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/pages/notFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
