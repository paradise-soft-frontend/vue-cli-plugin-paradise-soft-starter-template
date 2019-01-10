const base = process.cwd()
const path = require('path')
const fs = require('fs')
const rimraf = require('./../tools/rimraf')
const updateEslintrc = require('./updateFiles/default/eslintrc')
const updateGitignore = require('./updateFiles/default/gitignore')
const updateMain = require('./updateFiles/vuex-api-request/main')
const updateStore = require('./updateFiles/vuex-api-request/store')

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

  api.render('./templates/default')

  if (opts.vuexApiRequest) {
    api.extendPackage({
      dependencies: {
        'vuex-api-request': '^1.2.0',
      },
    })

    api.render('./templates/vuex-api-request')
  }

  api.postProcessFiles(files => {
    updateEslintrc(api, opts, files)
    updateGitignore(api, opts, files)

    if (opts.vuexApiRequest) {
      updateMain(api, opts, files)
      updateStore(api, opts, files)
    }
  })
}
