import { createRouter, createWebHistory } from 'vue-router'

const base = "/kpa-flex-project"

const routes = [
  { path: base+'/', component: () => import('../components/main-content.vue') },
  { path: base+'/guests', component: () => import('../components/guest-content.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router