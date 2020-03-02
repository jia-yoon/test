import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: (to, from, next) => {
        console.log('this is bfenter')
        next()
      }
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('./views/About.vue')
    },
    {
      path: '/sign',
      name: 'Sign',
      component: () => import('./views/Sign.vue')
    },
    {
      path: '/about2',
      component: () => import('./views/About2.vue')
    },
    {
      path: '/lectures/card',
      component: () => import('./views/lectures/Card.vue')
    },
    {
      path: '/lectures/layout',
      component: () => import('./views/lectures/Layout.vue')
    },
    {
      path: '/lectures/axios',
      component: () => import('./views/lectures/Axios.vue')
    },
    {
      path: '/lectures/mother',
      component: () => import('./views/lectures/Mother.vue')
    },
    {
      path: '/lectures/vuex',
      component: () => import('./views/lectures/Vuex.vue')
    },
    {
      path: '/*',
      component: () => import('./views/e404.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('bf each')
  if (Vue.prototype.$isFirebaseAuth) next()
})
// router.afterEach((to, from, next) => {
//   console.log('af each')
//   next()
// })

export default router
