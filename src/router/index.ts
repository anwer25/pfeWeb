import { createRouter, createWebHistory } from 'vue-router'
import PageLoginVue from '@/views/PageLogin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: PageLoginVue
    },
    {
      path: '/home',
      name: 'home',
      component: 'undefined'
    }
  ]
})

export default router
