import Home from '../pages/Home';
import About from '../pages/About';
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
    path: '/about',
    name: 'about',
    component: About,
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
