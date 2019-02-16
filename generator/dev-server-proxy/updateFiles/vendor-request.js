module.exports = (api, opts, files) => {
  const file = 'src/vendor/request.js';
  const request = files[file];

  if (request) {
    const lines = request.split(/\r?\n/g).reverse();
    const axiosConfigIndex = lines.findIndex((line) => line.match(/baseURL/));

    lines[axiosConfigIndex] = `  baseURL: '/api',`;
    files[file] = lines.reverse().join('\n');
  }
};
