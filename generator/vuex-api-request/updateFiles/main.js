module.exports = (api, opts, files) => {
  const file = 'src/main.js'
  const main = files[file]
  
  if (main) {
    // inject import for registerServiceWorker script into main.js
    const lines = main.split(/\r?\n/g).reverse()
    const lastImportJsIndex = lines.findIndex(line => line.match(/from/))

    lines[lastImportJsIndex] += `\nimport './vendor/vuex-api-request/request'`
    files[file] = lines.reverse().join('\n')
  }
}
