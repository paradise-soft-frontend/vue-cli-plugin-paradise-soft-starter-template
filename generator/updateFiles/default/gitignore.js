module.exports = (api, opts, files) => {
  const file = '.gitignore'
  const gitignore = files[file]
  
  if (gitignore) {
    const lines = gitignore.split(/\r?\n/g).reverse()
    lines.unshift('# Json server DB')
    lines.unshift('db.json')

    files[file] = lines.reverse().join('\n')
  }
}