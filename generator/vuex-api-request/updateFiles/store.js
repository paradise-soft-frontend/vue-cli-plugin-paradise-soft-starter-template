module.exports = (api, opts, files) => {
  const file = 'src/store/index.js'
  const store = files[file]
  
  if (store) {
    const lines = store.split(/\r?\n/g).reverse()
    const lastImportIndex = lines.findIndex(line => line.match(/^import/))
    lines[lastImportIndex] += `\nimport authLocalStoragePlugin from '@/vendor/vuex-api-request/authLocalStoragePlugin'`

    const lastIndex = lines.findIndex(line => line.match(/\}\)/))
    lines[lastIndex+1] += `\n  plugins: [authLocalStoragePlugin],`

    files[file] = lines.reverse().join('\n')
  }
}
