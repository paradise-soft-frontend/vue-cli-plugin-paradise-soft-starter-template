/* eslint-disable */
const extendRoutes = [
  {
    name: 'notfound',
    path: '*',
    component: require('@/pages/notfound').default,
  },
];

const pageModules = require.context('@/pages', true, /\.vue/);
const routes = pageModules.keys().map((filename) => {
  const path = filename
    .toLocaleLowerCase()
    .replace(/\./, '')
    .replace(/\.vue/, '')
    .replace(/\/index/, '')
    .replace(/_/g, ':');

  const name = path
    .replace(/:/g, '')
    .replace(/^\//, '')
    .replace(/\//g, '-');

  const component = pageModules(filename).default;

  if (extendRoutes.map(({name}) => name).includes(name)) return

  return {
    path,
    name,
    component,
    meta: {
      layout: 'Default',
      isPublic: true,
      ...(component.meta ? component.meta : {}),
    },
    ...(component.route ? component.route : {}),
  };
}).filter(e => e);

export default [...routes, ...extendRoutes.map((route) => ({...route, meta: route.component.meta}))];
