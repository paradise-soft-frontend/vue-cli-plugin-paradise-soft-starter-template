import Vue from 'vue';

const requireModules = require.context('./', false, /\.vue/);
requireModules.keys().forEach((filename) => {
  const registerName = filename.replace(/(\.\/|\.vue)/g, '');
  Vue.component(registerName, requireModules(filename).default);
});
