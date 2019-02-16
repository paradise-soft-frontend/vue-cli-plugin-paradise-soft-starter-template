
import createWatch from 'vuex-api-request/lib/createWatch';

const watch = createWatch({
  vuexApiModuleName: 'api',
  response: (res) => res,
  error: (err) => err && err.response && err.response.data,
  errorHandler: (context, err) => {
    if (err.status === 401) context.dispatch('auth/logout');
  },
});

export default watch;
