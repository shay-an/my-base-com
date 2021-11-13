import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Layout from '@/components/layout/index.vue'
import store from '@/store/index'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'login',
    meta: {
      requiresAuth: false
    },
    component: () => import(/* webpackChunkName: 'login' */'@/components/login/index.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: '404' */'@/components/404/index.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: 'home' */'@/components/home/index.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/role',
        name: 'role',
        component: () => import(/* webpackChunkName: 'role' */'@/components/role/index.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/menu',
        name: 'menu',
        component: () => import(/* webpackChunkName: 'menu' */'@/components/menu/index.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/resource',
        name: 'resource',
        component: () => import(/* webpackChunkName: 'resource' */'@/components/resource/index.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/course',
        name: 'course',
        component: () => import(/* webpackChunkName: 'course' */'@/components/course/index.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/advert',
        name: 'advert',
        component: () => import(/* webpackChunkName: 'advert' */'@/components/advert/index.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/advert-space',
        name: 'advert-space',
        component: () => import(/* webpackChunkName: 'advert-space' */'@/components/advert-space/index.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/user',
        name: 'user',
        component: () => import(/* webpackChunkName: 'user' */'@/components/user/index.vue'),
        meta: {
          requiresAuth: true
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.user) {
      next({
        name: 'login',
        query: {
          redirect: to.fullPath
        }
      })
      return
    }
  }
  next()
})

export default router
