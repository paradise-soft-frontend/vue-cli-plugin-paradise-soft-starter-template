const base = process.cwd()
const path = require('path')
const fs = require('fs')
const rimraf = require('./../tools/rimraf')
const default_UpdateEslintrc = require('./default/updateFiles/eslintrc')
const default_UpdateGitignore = require('./default/updateFiles/gitignore')
const vuexApiRequest_UpdateMain = require('./vuex-api-request/updateFiles/main')
const vuexApiRequest_UpdateStore = require('./vuex-api-request/updateFiles/store')
const devServerProxy_Utils_Request = require('./dev-server-proxy/updateFiles/utils-request')
const devServerProxy_Vendor_VuexApiRequest_Request = require('./dev-server-proxy/updateFiles/vendor-vuex-api-request-request')
const devServerProxy_Api_Posts = require('./dev-server-proxy/updateFiles/api-posts')

rimraf(path.join(base, 'src'))

module.exports = (api, opts) => {
  api.extendPackage({
    scripts: {
      'json-server': 'json-server --watch db.json --port 3002'
    },
    dependencies: {
      'axios': '^0.18.0',
      'compass-mixins': '^0.12.10',
      'normalize.css': '^8.0.1',
    },
    devDependencies: {
      'json-server': '^0.14.0',
    },
  })

  api.render('./default/template')

  if (opts.vuexApiRequest) {
    api.extendPackage({
      dependencies: {
        'vuex-api-request': '^2.1.0',
      },
    })

    api.render('./vuex-api-request/template')
  }

  if (opts.proxy) {
    api.extendPackage({
      dependencies: {
        'dotenv': '^6.2.0',
        'http-proxy-middleware': '^0.19.1',
      },
    })

    api.render('./dev-server-proxy/template')
  }

  api.postProcessFiles(files => {
    default_UpdateEslintrc(api, opts, files)
    default_UpdateGitignore(api, opts, files)

    if (opts.vuexApiRequest) {
      vuexApiRequest_UpdateMain(api, opts, files)
      vuexApiRequest_UpdateStore(api, opts, files)
    }

    if (opts.proxy) {
      devServerProxy_Utils_Request(api, opts, files)
    }

    if (opts.vuexApiRequest && opts.proxy) {
      devServerProxy_Vendor_VuexApiRequest_Request(api, opts, files)
      devServerProxy_Api_Posts(api, opts, files)
    } 
  })
}
