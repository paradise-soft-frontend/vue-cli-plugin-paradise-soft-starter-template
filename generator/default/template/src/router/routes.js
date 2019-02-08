/* eslint-disable */
const extendRoutes = [
  {
    name: 'notfound',
    path: '*',
    component: require('@/pages/notfound').default,
  },
];

const pageModules = require.context('@/pages', true, /\.vue/);
const routes = pageModules
  .keys()
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

    return {
      path,
      name,
      component,
      ...(component.route ? component.route : {}),
      meta: {
        layout: 'Default',
        isPublic: true,
        ...(component.route && component.route.meta ? component.route.meta : {}),
      },
    };
  })
  .filter(Boolean);

export default [
  ...routes,
  ...extendRoutes.map((route) => ({ ...route, meta: route.component.meta })),
];
