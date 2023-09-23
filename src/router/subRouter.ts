import type {  RouteRecordRaw } from 'vue-router';

export const subRouter:RouteRecordRaw[] = [
  {
    path: '/home',
    meta: { title: '首页', icon: 'House' },
    component: () => import('@/views/home/index.vue')
  },
  {
    path: "/article",
    name: "Article",
    meta: {
      name: "文章",
      hidden:true
    },
    component: () => import("@/views/article/index.vue"),
    
  },
  {
    path: '/category',
    meta: { title: '分类', icon: 'PieChart' },
    component: () => import('@/views/category/index.vue')
  },
  {
    path: '/tag',
    meta: { title: '标签', icon: 'PriceTag' },
    component: () => import('@/views/tag/index.vue')
  },
  {
    path: '/mine',
    meta: { title: '我的', icon: 'User' },
    component: () => import('@/views/mine/index.vue')
  },
  {
    path: '/log',
    meta: { title: '建站', icon: 'ScaleToOriginal' },
    component: () => import('@/views/log/index.vue')
  },
  {
    path: '/study',
    meta: { title: '学习', icon: 'Tickets' },
    component: () => import('@/views/study/index.vue')
  }
]
