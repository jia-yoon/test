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
        console.log('bf enter')
        next()
      }
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/sign',
      name: 'sign',
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
      path: '/lectures/note',
      component: () => import('./views/lectures/Note.vue')
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
  Vue.prototype.$Progress.start()
  if (Vue.prototype.$isFirebaseAuth) next()
})
router.afterEach((to, from) => {
  Vue.prototype.$Progress.finish()
})

export default router
