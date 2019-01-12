import VuexApiRequest from 'vuex-api-request'

const vuexApiModuleName = 'api'

const watch = VuexApiRequest.createWatch({
  vuexApiModuleName: 'api',
  response: (res) => res,
  error: (err) => err,
  errorHandler: (context, err) => {
    if (err.status === 401) context.dispatch('auth/logout')
  },
})

export {watch, vuexApiModuleName}

export default VuexApiRequest