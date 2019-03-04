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
      component: () => import('@/views/Home'),
      redirect: '/',
      children: [
        {
          path: '',
          name: 'IndexPage',
          component: () => import('@/views/IndexPage')
        },
        {
          path: 'product/:id',
          name: 'product',
          component: () => import('@/views/Product')
        },
        {
          path: 'cart',
          name: 'cart',
          component: () => import('@/views/Cart')
        },
        {
          path: 'orderCheck',
          name: 'orderCheck',
          component: () => import('@/views/OrderCheck')
        },
        {
          path: 'productCate/:id',
          name: 'productCate',
          component: () => import('@/views/ProductCate')
        },
        {
          path: 'memCenter',
          name: 'memCenter',
          component: () => import('@/views/MemCenter'),
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
            }
          ]
        }
      ]
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
