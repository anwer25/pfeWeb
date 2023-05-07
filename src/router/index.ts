import { createRouter, createWebHistory } from 'vue-router'
import {PageDashboard, PageLogin} from '@/views';
import { storage } from '@/api/instance';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: PageLogin
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: PageDashboard
    }
  ]
})

router.beforeEach((to, from, next)=> {
  if(to.fullPath === "/dashboard" && !storage.value.isAuthenticated){
    router.push('/')
  }else if(to.fullPath === "/" && storage.value.isAuthenticated){
    router.push('/dashboard')
  }else {
    next()
  }
})

export default router
