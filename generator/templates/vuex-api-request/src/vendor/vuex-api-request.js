import VuexApiRequest, {
  Http,
  Auth, 
  createWatch, 
  vuexApiModule, 
  authLocalStoragePlugin,
} from 'vuex-api-request'

const vuexApiModuleName = 'api'
const axiosConfig = {}

const http = Http(axiosConfig)
const auth = Auth(axiosConfig)

const watch = createWatch({
  vuexApiModuleName,
  response = (res) => res,
  error = (err) => err,
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
