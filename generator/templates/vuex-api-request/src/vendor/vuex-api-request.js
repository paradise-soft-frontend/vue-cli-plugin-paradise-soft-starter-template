import store from '@/store'
import VuexApiRequest, {
  Http,
  Auth, 
  createWatch, 
  vuexApiModule,
  AuthLocalStoragePlugin,
} from 'vuex-api-request'

const vuexApiModuleName = 'api'
const axiosConfig = {}

const http = Http(axiosConfig)
const auth = Auth({
  axiosConfig,
  store,
  authBinding: (state) => state.auth.accessToken,
  authCompleted: (store) => store
})

const watch = createWatch({
  vuexApiModuleName,
  response: (res) => res,
  error: (err) => err,
})

const authLocalStoragePlugin = AuthLocalStoragePlugin({
  storageKey: 'paradise-soft',
  authModule: require('@/store/modules/auth'),
  removeLocalStorageMutationType: 'clear',
})

export {
  http,
  auth,
  watch,
  vuexApiModuleName,
  vuexApiModule,
  authLocalStoragePlugin,
}

export default VuexApiRequest({
  vuexApiModuleName,
})
