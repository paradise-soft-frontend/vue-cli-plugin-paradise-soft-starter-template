module.exports = (api, opts, files) => {
  const file = 'src/main.js';

  if (files[file]) {
    files[file] = files[file].replace(/h => h\(App\)/, '(h) => h(App)');
  }
};
