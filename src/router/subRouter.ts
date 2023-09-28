import type { RouteRecordRaw } from 'vue-router'

export const subRouter: RouteRecordRaw[] = [
  {
    path: '/home',
    meta: { title: '首页', icon: 'home' },
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/article',
    name: 'Article',
    meta: {
      name: '文章',
      hidden: true
    },
    component: () => import('@/views/article/index.vue')
  },
  {
    path: '/category',
    meta: { title: '分类', icon: 'category' },
    component: () => import('@/views/category/index.vue')
  },
  {
    path: '/tag',
    meta: { title: '标签', icon: 'tag' },
    component: () => import('@/views/tag/index.vue')
  },
  {
    path: '/mine',
    meta: { title: '我的', icon: 'wode' },
    component: () => import('@/views/mine/index.vue')
  },
  {
    path: '/log',
    meta: { title: '建站', icon: 'zhinengrizhiguanlipingtai' },
    component: () => import('@/views/log/index.vue')
  },
  {
    path: '/study',
    meta: { title: '学习记录', icon: 'xuexizhongxin' },
    component: () => import('@/views/study/index.vue')
  }
]
