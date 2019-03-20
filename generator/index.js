const base = process.cwd();
const path = require('path');
const fs = require('fs');
const rimraf = require('./../tools/rimraf');
const default_UpdateMain = require('./default/updateFiles/main');
const default_UpdateEslintrc = require('./default/updateFiles/eslintrc');
const default_UpdateGitignore = require('./default/updateFiles/gitignore');
const vuexApiRequest_UpdateMain = require('./vuex-api-request/updateFiles/main');
const vuexApiRequest_UpdateStore = require('./vuex-api-request/updateFiles/store');
const devServerProxy_Utils_Request = require('./dev-server-proxy/updateFiles/utils-request');
const devServerProxy_Vendor_Request = require('./dev-server-proxy/updateFiles/vendor-request');
const devServerProxy_Api_Posts = require('./dev-server-proxy/updateFiles/api-posts');

try {
  fs.unlinkSync(path.join(base, 'src', 'components', 'HelloWorld.vue'));
  rimraf(path.join(base, 'src', 'views'));
  fs.unlinkSync(path.join(base, 'src', 'router.js'));
  fs.unlinkSync(path.join(base, 'src', 'store.js'));
} catch (error) {}

module.exports = (api, opts) => {
  api.extendPackage({
    scripts: {
      debug: 'cross-env NODE_ENV=debug vue-cli-service serve',
      'json-server': 'json-server --watch db.json --port 3002',
    },
    dependencies: {
      axios: '^0.18.0',
      'compass-mixins': '^0.12.10',
      'normalize.css': '^8.0.1',
    },
    devDependencies: {
      'json-server': '^0.14.0',
      'cross-env': '^5.2.0',
    },
  });

  api.render('./default/template');

  if (opts.vuexApiRequest) {
    api.extendPackage({
      dependencies: {
        'vuex-api-request': '^2.13.1',
      },
    });

    api.render('./vuex-api-request/template');
  }

  if (opts.proxy) {
    api.extendPackage({
      dependencies: {
        dotenv: '^6.2.0',
        'http-proxy-middleware': '^0.19.1',
      },
    });

    api.render('./dev-server-proxy/template');
  }

  api.postProcessFiles((files) => {
    default_UpdateMain(api, opts, files);
    default_UpdateEslintrc(api, opts, files);
    default_UpdateGitignore(api, opts, files);

    if (opts.vuexApiRequest) {
      vuexApiRequest_UpdateMain(api, opts, files);
      vuexApiRequest_UpdateStore(api, opts, files);
    }

    if (opts.proxy) {
      devServerProxy_Utils_Request(api, opts, files);
    }

    if (opts.vuexApiRequest && opts.proxy) {
      devServerProxy_Vendor_Request(api, opts, files);
      devServerProxy_Api_Posts(api, opts, files);
    }
  });
};
