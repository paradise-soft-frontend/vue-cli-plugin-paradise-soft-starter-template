module.exports = (api, opts, files) => {
  const file = 'src/store/index.js'
  const store = files[file]
  
  if (store) {
    const lines = store.split(/\r?\n/g).reverse()
    const lastImportIndex = lines.findIndex(line => line.match(/^import/))
    lines[lastImportIndex] += `\nimport vuexApiRequest, {`
    lines[lastImportIndex] += `\n  vuexApiModule,`
    lines[lastImportIndex] += `\n  vuexApiModuleName,`
    lines[lastImportIndex] += `\n  authLocalStoragePlugin,`
    lines[lastImportIndex] += `\n} from '@/vendor/vuex-api-request'`

    const useVueIndex = lines.findIndex(line => line.match(/^Vue\.use/))
    lines[useVueIndex] += `\nVue.use(vuexApiRequest)`

    const vuexModuleIndex = lines.findIndex(line => line.match(/\.\.\.modules/))
    lines[vuexModuleIndex] += `\n    [vuexApiModuleName]: vuexApiModule,`

    const lastIndex = lines.findIndex(line => line.match(/\}\)/))
    lines[lastIndex+1] += `\n  plugins: [authLocalStoragePlugin],`

    files[file] = lines.reverse().join('\n')
  }
}