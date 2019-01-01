import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import routes from './routes'

Vue.use(Router)

async function guardRoute(to, from, next) {
  // eslint-disable-next-line
  const auth = store.state.auth
  if (!auth.isLoggedIn) return next({path: '/login'})
  next()
}

const router = new Router({
  mode: 'history',
  routes: routes.map((route) => ({
    ...route,
    beforeEnter: (to, from, next) => {
      // document.title = route.title

      // Auth navigation guard.
      if (route.meta && route.meta.isPublic === false) return guardRoute(to, from, next)
      next()
    },
  })),
})

export default router
