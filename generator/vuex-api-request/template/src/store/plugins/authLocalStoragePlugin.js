import LocalStoragePlugin from 'vuex-api-request/lib/LocalStoragePlugin';
import auth from '@/store/modules/auth';
import { name as storageKey } from '@/../package.json';

const authLocalStoragePlugin = LocalStoragePlugin({
  storageKey,
  vuexModule: ['auth', auth],
});

export default authLocalStoragePlugin;
