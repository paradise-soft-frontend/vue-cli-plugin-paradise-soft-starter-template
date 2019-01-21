import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex);

// modules
const modules = {};
const requireModules = require.context('./modules', false, /\.js/);
requireModules.keys().forEach((filename) => {
  const moduleName = filename.replace(/(\.\/|\.js)/g, '');
  modules[moduleName] = requireModules(filename).default;
});

export default new Vuex.Store({
  state: {},
  mutations,
  actions: {
    ...actions,
    clear({ dispatch }) {
      requireModules.keys().forEach((filename) => {
        const moduleName = filename.replace(/(\.\/|\.js)/g, '');
        dispatch(`${moduleName}/clear`, {}, { root: true });
      });
    },
  },
  getters,
  modules: {
    ...modules,
  },
});
