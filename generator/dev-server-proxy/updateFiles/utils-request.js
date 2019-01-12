module.exports = (api, opts, files) => {
  const file = 'src/utils/request.js'
  const auth = files[file]
  
  if (auth) {
    const lines = auth.split(/\r?\n/g).reverse()
    const axiosConfigIndex = lines.findIndex(line => line.match(/baseURL/))

    lines[axiosConfigIndex] = `  baseURL: '/api',`
    files[file] = lines.reverse().join('\n')
  }
}