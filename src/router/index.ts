import { createRouter, createWebHistory } from 'vue-router'

const BASE_PATH = import.meta.env.BASE_URL
const routes = [
  { path: BASE_PATH+'/', component: () => import('../components/main-content.vue') },
  { path: BASE_PATH+'/guests', component: () => import('../components/guest-content.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router