import router from '@/router';
import { userLogin } from '@/api/auth';
import { watch } from '@/vendor/vuex-api-request';

const INITIAL_STATE = {
  isLoggedIn: false,
  accessToken: null,
};

export default {
  namespaced: true,
  state: { ...INITIAL_STATE },
  mutations: {
    UPDATE(state, data) {
      state = Object.assign(state, data);
    },
    // eslint-disable-next-line
    CLEAR(state) {
      state = Object.assign(state, INITIAL_STATE);
    },
  },
  actions: {
    update({ commit }, data) {
      commit('UPDATE', data);
    },

    clear({ commit }) {
      commit('CLEAR');
    },

    login(context, creds) {
      if (process.env.NODE_ENV === 'debug') {
        const auth = {
          isLoggedIn: true,
          accessToken: 'access_token',
        };

        context.dispatch('update', auth);
        router.push('/');
        return 'User Is LoggedIn';
      }

      const request = watch(context, 'login')(userLogin(creds));

      return request.then((res) => {
        const auth = {
          isLoggedIn: true,
          accessToken: res.data.access_token,
        };

        context.dispatch('update', auth);
        router.push('/');
        return res;
      });
    },

    logout(context) {
      context.dispatch('clear', { root: true });
      router.push('/login');
    },
  },
};
