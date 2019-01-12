import VuexApiRequest, {createWatch, vuexApiModule, AuthLocalStoragePlugin} from 'vuex-api-request'

const vuexApiModuleName = 'api'

const watch = createWatch({
  vuexApiModuleName,
  response: (res) => res,
  error: (err) => err,
})

const authLocalStoragePlugin = AuthLocalStoragePlugin({
  storageKey: 'paradise-soft',
  authModule: require('@/store/modules/auth').default,
  removeLocalStorageMutationType: 'clear',
})

export {watch, vuexApiModuleName, vuexApiModule, authLocalStoragePlugin}

export default VuexApiRequest
