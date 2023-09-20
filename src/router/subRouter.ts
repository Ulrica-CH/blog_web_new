export const subRouter = [
  {
    path: '/home',
    mate: { title: '首页', icon: 'House' },
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/category',
    mate: { title: '分类', icon: 'PieChart' },
    component: () => import('@/views/category/index.vue')
  },
  {
    path: '/tag',
    mate: { title: '标签', icon: 'PriceTag' },
    component: () => import('@/views/tag/index.vue')
  },
  {
    path: '/mine',
    mate: { title: '我的', icon: 'User' },
    component: () => import('@/views/mine/index.vue')
  },
  {
    path: '/log',
    mate: { title: '建站', icon: 'ScaleToOriginal' },
    component: () => import('@/views/log/index.vue')
  },
  {
    path: '/study',
    mate: { title: '学习', icon: 'Tickets' },
    component: () => import('@/views/study/index.vue')
  }
]
