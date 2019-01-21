module.exports = (api, opts, files) => {
  const file = 'src/api/posts.js';
  const post = files[file];

  if (post) {
    const lines = post.split(/\r?\n/g).reverse();
    const commentIndex = lines.findIndex((line) => line.match(/\/\/ fetch data from api server/));

    lines[commentIndex] = `// fetch data from prxoy`;
    files[file] = lines.reverse().join('\n');
  }
};
