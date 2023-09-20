import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
import {subRouter} from './subRouter'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: subRouter
    },

    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/not-found/NotFound.vue')
    }
  ]
})

export default router
