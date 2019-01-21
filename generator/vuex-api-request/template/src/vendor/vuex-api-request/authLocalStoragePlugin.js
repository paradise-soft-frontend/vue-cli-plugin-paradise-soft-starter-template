import { LocalStoragePlugin } from 'vuex-api-request';
import auth from '@/store/modules/auth';

const authLocalStoragePlugin = LocalStoragePlugin({
  storageKey: 'paradise-soft',
  vuexModule: ['auth', auth],
  clearWhen: (state, oldState) => !state.accessToken && oldState.accessToken,
});

export default authLocalStoragePlugin;
