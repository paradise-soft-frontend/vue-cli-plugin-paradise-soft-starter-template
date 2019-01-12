module.exports = (api, opts, files) => {
  const file = '.eslintrc.js'
  const store = files[file]
  
  if (store) {
    const lines = store.split(/\r?\n/g).reverse()
    const rulesIndex = lines.findIndex(line => line.match(/rules/))

    lines[rulesIndex] += `\n    "prettier/prettier": "off",`
    files[file] = lines.reverse().join('\n')
  }
}