import {LocalStoragePlugin} from 'vuex-api-request'

const authLocalStoragePlugin = LocalStoragePlugin({
  storageKey: 'paradise-soft',
  clearActionType: 'clear',
  vuexModule: ['auth', require('@/store/modules/auth').default],
})

export default authLocalStoragePlugin
