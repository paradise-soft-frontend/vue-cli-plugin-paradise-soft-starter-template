import Home from './../pages/Home'

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      isPublic: true,
      layout: 'Default',
    },
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './../pages/About'),
    meta: {
      isPublic: true,
      layout: 'Full',
    },
  },
]
