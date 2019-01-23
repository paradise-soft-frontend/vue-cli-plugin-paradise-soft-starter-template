import VuexApiRequest from 'vuex-api-request';

const watch = VuexApiRequest.createWatch({
  vuexApiModuleName: 'api',
  response: (res) => res,
  error: (err) => err && err.response && err.response.data,
  errorHandler: (context, err) => {
    if (err.status === 401) context.dispatch('auth/logout');
  },
});

export { watch };

export default VuexApiRequest;
