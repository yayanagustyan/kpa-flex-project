import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('../components/main-content.vue') },
  { path: '/guests', component: () => import('../components/guest-content.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router