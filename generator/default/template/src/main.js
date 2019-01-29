import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/styles/main.scss';

const componentModules = require.context('@/components', true, /\.vue/);
componentModules.keys().forEach((filename) => {
  let registerName = filename.replace(/(\.\/|\.vue)/g, '');
  const startIndex = filename.replace(/(\.\/|\.vue)/g, '').lastIndexOf('/') + 1;
  registerName = registerName.slice(startIndex);

  Vue.component(registerName, componentModules(filename).default);
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
