module.exports = (api, opts, files) => {
  const file = 'src/main.js';
  const main = files[file];

  if (main) {
    const lines = main.split(/\r?\n/g).reverse();
    const lastImportIndex = lines.findIndex((line) => line.match(/^import/));

    lines[lastImportIndex] += `\nimport '@/styles/main.scss';`;
    lines[lastImportIndex] += `\n`;
    lines[lastImportIndex] += `\nconst componentModules = require.context('@/components', true, /\\.vue/);`;
    lines[lastImportIndex] += `\ncomponentModules.keys().forEach((filename) => {`;
    lines[lastImportIndex] += `\n  let registerName = filename.replace(/(\\.\\/|\\.vue)/g, '');`;
    lines[lastImportIndex] += `\n  const startIndex = filename.replace(/(\\.\\/|\\.vue)/g, '').lastIndexOf('/') + 1;`;
    lines[lastImportIndex] += `\n  registerName = registerName.slice(startIndex);`;
    lines[lastImportIndex] += `\n`;
    lines[lastImportIndex] += `\n  Vue.component(registerName, componentModules(filename).default);`;
    lines[lastImportIndex] += `\n});`;

    files[file] = lines.reverse().join('\n');

    files[file] = files[file].replace(/h => h\(App\)/, '(h) => h(App)');
  }
};
