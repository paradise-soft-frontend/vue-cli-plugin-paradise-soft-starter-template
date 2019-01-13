import {LocalStoragePlugin} from 'vuex-api-request'

const authLocalStoragePlugin = LocalStoragePlugin({
  storageKey: 'paradise-soft',
  vuexModule: ['auth', require('@/store/modules/auth').default],
  clearWhen: (action) => action.type === 'clear'
})

export default authLocalStoragePlugin
