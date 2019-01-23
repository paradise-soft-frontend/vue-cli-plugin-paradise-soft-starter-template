import { LocalStoragePlugin } from 'vuex-api-request';
import auth from '@/store/modules/auth';

const authLocalStoragePlugin = LocalStoragePlugin({
  storageKey: 'paradise-soft',
  vuexModule: ['auth', auth],
});

export default authLocalStoragePlugin;
