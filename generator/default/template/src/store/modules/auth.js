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

    async login(context, { creds, redirect }) {
      if (process.env.NODE_ENV === 'debug') {
        const auth = {
          isLoggedIn: true,
          accessToken: 'access_token',
        };

        context.dispatch('update', auth);
        if (redirect) router.push(redirect);
        return 'User Is LoggedIn';
      }

      return watch(context, 'login')(userLogin(creds)).then((res) => {
        const auth = {
          isLoggedIn: true,
          accessToken: res.data.access_token,
        };

        context.dispatch('update', auth);
        if (redirect) router.push(redirect);
        return res;
      });
    },

    logout(context) {
      context.dispatch('clear');
      router.push({ name: 'login' });
    },
  },
};
