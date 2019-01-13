import {LocalStoragePlugin} from 'vuex-api-request'

const authLocalStoragePlugin = LocalStoragePlugin({
  storageKey: 'paradise-soft',
  vuexModule: ['auth', require('@/store/modules/auth').default],
  clearWhen: (state, oldState) => !state.accessToken && oldState.accessToken,
})

export default authLocalStoragePlugin
