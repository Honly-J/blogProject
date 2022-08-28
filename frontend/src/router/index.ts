import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/views/layout/layOut.vue'

const routes: Array<RouteRecordRaw & RouterExtendType> = [
  {
    path: '/',
    name: 'dashboard',
    component: Layout,
    redirect: '/dashboard',
    meta: {
      title: '首页',
      icon: 'dashboard'
    },
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
        meta: {
          title: '首页',
          icon: 'Wallet'
        }
      }
    ]
  },
  {
    path: '/article',
    name: 'article',
    component: Layout,
    redirect: '/article/list',
    meta: {
      title: '文章管理',
      icon: 'FolderOpened'
    },
    children: [
      {
        path: '/article/list',
        name: 'articleList',
        component: () => import(/* webpackChunkName: "articleList" */ '@/views/article/list.vue'),
        meta: {
          title: '文章列表',
          icon: 'list'
        }
      },
      {
        path: '/article/create',
        name: 'articleCreate',
        component: () => import(/* webpackChunkName: "articleCreate" */ '@/views/article/create.vue'),
        meta: {
          title: '文章创建',
          icon: 'SetUp'
        }
      }
    ]
  },
  {
    path: '/user',
    name: 'user',
    component: Layout,
    redirect: '/user/list',
    children: [
      {
        path: '/user/list',
        name: 'userList',
        component: () => import(/* webpackChunkName: "userList" */ '@/views/user/list.vue'),
        meta: {
          title: '用户管理',
          icon: 'Wallet'
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "LoginView" */ '@/views/login/index.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "error-404" */ '@/views/error/404.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
