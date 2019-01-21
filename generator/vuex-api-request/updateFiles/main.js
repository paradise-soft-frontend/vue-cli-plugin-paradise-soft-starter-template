module.exports = (api, opts, files) => {
  const file = 'src/main.js';
  const main = files[file];

  if (main) {
    // inject import for registerServiceWorker script into main.js
    const lines = main.split(/\r?\n/g).reverse();
    const lastImportJsIndex = lines.findIndex((line) => line.match(/from/));

    lines[lastImportJsIndex] += `\nimport VuexApiRequest from './vendor/vuex-api-request';`;
    lines[lastImportJsIndex] += `\nimport './vendor/vuex-api-request/request';`;

    const lastImportIndex = lines.findIndex((line) => line.match(/^import/));
    lines[lastImportIndex] += `\n\nVue.use(VuexApiRequest(store));`;

    files[file] = lines.reverse().join('\n');
  }
};
