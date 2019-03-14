import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '@/views/Home'),
      redirect: '/',
      children: [
        {
          path: '',
          name: 'IndexPage',
          component: () => import(/* webpackChunkName: "IndexPage" */ '@/views/IndexPage')
        },
        {
          path: 'product/:id',
          name: 'product',
          component: () => import(/* webpackChunkName: "product" */ '@/views/Product')
        },
        {
          path: 'cart',
          name: 'cart',
          component: () => import(/* webpackChunkName: "cart" */ '@/views/Cart')
        },
        {
          path: 'orderCheck',
          name: 'orderCheck',
          component: () => import(/* webpackChunkName: "orderCheck" */ '@/views/OrderCheck')
        },
        {
          path: 'productCate/:id',
          name: 'productCate',
          component: () => import(/* webpackChunkName: "productCate" */ '@/views/ProductCate')
        },
        {
          path: 'memCenter',
          name: 'memCenter',
          component: () => import(/* webpackChunkName: "memCenter" */ '@/views/MemCenter'),
          redirect: 'memCenter',
          children: [
            {
              path: '',
              name: 'memInfo',
              component: () => import('@/views/MemInfo')
            },
            {
              path: 'memPsw',
              name: 'memPsw',
              component: () => import('@/views/MemPsw')
            },
            {
              path: 'memOrderCheck',
              name: 'memOrderCheck',
              component: () => import('@/views/MemOrderCheck')
            },
            {
              path: 'memRecipient',
              name: 'memRecipient',
              component: () => import('@/views/MemRecipient')
            }
          ]
        },
        {
          path: 'login',
          name: 'login',
          component: () => import(/* webpackChunkName: "login" */ '@/views/Login')
        }
      ]
    },
    {
      path: '*',
      component: () => import(/* webpackChunkName: "404" */ '@/views/PageNotFound.vue')
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
