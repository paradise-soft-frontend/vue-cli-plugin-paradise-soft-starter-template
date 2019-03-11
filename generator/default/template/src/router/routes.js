/* eslint-disable */
const extendRoutes = [
  {
    name: 'notfound',
    path: '*',
    component: require('@/pages/notfound').default,
  },
];

const createCustomRoute = (route) => {
  const pageRouteConfig = route.component.route || {};

  return {
    ...route,
    ...pageRouteConfig,
    meta: {
      layout: 'Default',
      isPublic: true,
      ...(pageRouteConfig.meta ? pageRouteConfig.meta : {}),
    },
  };
};

const pageModules = require.context('@/pages', true, /\.vue/);

const routes = pageModules
  .keys()
  .sort((a, b) => a.indexOf('_') - b.indexOf('_'))
  .map((filename) => {
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

    if (extendRoutes.map(({ name }) => name).includes(name)) return;

    return createCustomRoute({
      path,
      name,
      component,
    });
  })
  .filter(Boolean);

export default [
  ...routes,
  ...extendRoutes.map((route) => createCustomRoute(route)),
];
