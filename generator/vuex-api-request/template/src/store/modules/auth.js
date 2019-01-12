const INITIAL_STATE = {
  isLoggedIn: false,
  accessToken: null,
}

export default {
  namespaced: true,
  state: {...INITIAL_STATE},
  mutations: {
    UPDATE(state, data) {
      state = Object.assign({}, INITIAL_STATE, data)
    },
    // eslint-disable-next-line
    CLEAR(state) {
      state = Object.assign(state, INITIAL_STATE)
    },
  },
  actions: {
    update({commit}, data) {
      commit('UPDATE', data)
    },

    clear({commit}) {
      commit('CLEAR')
    },
  },
}
