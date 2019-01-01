base = process.env.PWD
const path = require('path')
const fs = require('fs')
const rimraf = require('./../tools/rimraf')
const replaceFiles = ['.eslintrc.js', '.gitignore']

rimraf(path.join(base, '/src'))

replaceFiles.forEach((file) => {
  fs.rename(
    path.join(__dirname, 'template/' + file), 
    path.join(base, '/' + file), 
    function (err) { if (err) throw err },
  )
})

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
