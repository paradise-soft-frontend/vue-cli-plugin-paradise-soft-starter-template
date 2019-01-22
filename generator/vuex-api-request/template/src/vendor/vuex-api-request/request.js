import Vue from 'vue';
import store from '@/store';
import { Http, Auth } from 'vuex-api-request';

const axiosConfig = {
  baseURL: process.env.VUE_APP_API_URL,
};

Vue.use(Http(axiosConfig));
Vue.use(
  Auth(axiosConfig, {
    headerBinding: {
      Authorization: [store, (state) => state.auth.accessToken],
    },
  })
);
