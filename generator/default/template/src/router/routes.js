import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

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
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      isPublic: true,
      layout: 'Full',
    },
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound,
    meta: {
      isPublic: true,
      layout: 'Error',
    },
  },
];
