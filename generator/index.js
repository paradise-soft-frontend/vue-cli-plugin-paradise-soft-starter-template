const base = process.cwd()
const path = require('path')
const fs = require('fs')
const rimraf = require('./../tools/rimraf')

rimraf(path.join(base, 'src'))

fs.rename(
  path.join(__dirname, 'template', 'default.eslintrc.js'), 
  path.join(base, '.eslintrc.js'), 
  function (err) { if (err) throw err },
)

fs.rename(
  path.join(__dirname, 'template', 'default.gitignore'), 
  path.join(base, '.gitignore'), 
  function (err) { if (err) throw err },
)

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

  api.render('./template')
}
