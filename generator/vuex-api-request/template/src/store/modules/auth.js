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
      state = Object.assign({}, INITIAL_STATE, data);
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

    login(context, { creds, redirect }) {
      return watch(context, 'login')(userLogin(creds)).then((res) => {
        const auth = {
          isLoggedIn: true,
          accessToken: res.data.access_token,
        };

        context.dispatch('auth/update', auth);
        if (redirect) router.push({ name: redirect });
        return res;
      });
    },

    logout(context) {
      context.dispatch('clear');
      router.push({ name: 'login' });
    },
  },
};
