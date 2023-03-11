import { createRouter, createWebHistory } from 'vue-router'

// 公共路由
export const constantRoutes = [
  {
    path: '/',
    component: () => import('@/views/login.vue'),
    hidden: true
  }
]

// 动态路由，基于用户权限动态去加载
export const dynamicRoutes = []

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes
})

export default router
