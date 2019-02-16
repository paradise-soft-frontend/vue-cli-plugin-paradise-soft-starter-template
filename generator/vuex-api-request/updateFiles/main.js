module.exports = (api, opts, files) => {
  const file = 'src/main.js';
  const main = files[file];

  if (main) {
    // inject import for registerServiceWorker script into main.js
    const lines = main.split(/\r?\n/g).reverse();
    const importVueIndex = lines.findIndex((line) => line.match(/^import Vue/));
    lines[importVueIndex] += `\nimport VuexApiRequest from 'vuex-api-request';`;

    const lastImportJsIndex = lines.findIndex((line) => line.match(/from/));
    lines[lastImportJsIndex] += `\nimport './vendor/request';`;

    const lastImportIndex = lines.findIndex((line) => line.match(/^import/));
    lines[lastImportIndex] += `\n\nVue.use(VuexApiRequest());`;

    files[file] = lines.reverse().join('\n');
  }
};
