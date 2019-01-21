module.exports = (api, opts, files) => {
  const file = '.eslintrc.js';
  const eslintrc = files[file];

  if (eslintrc) {
    const lines = eslintrc.split(/\r?\n/g).reverse();
    const rulesIndex = lines.findIndex((line) => line.match(/rules/));

    lines[rulesIndex - 2] += `\n    semi: ['error', 'always'],`;
    lines[rulesIndex - 2] += `\n    'object-curly-spacing': ['error', 'always'],`;
    lines[rulesIndex - 2] += `\n    quotes: ['error', 'single'],`;
    lines[rulesIndex - 2] += `\n    'comma-dangle': ["error", "only-multiline"],`;
    lines[rulesIndex - 2] += `\n    code: 120,`;
    lines[rulesIndex - 2] += `\n    'arrow-parens': ['error', 'always'],`;
    lines[rulesIndex - 2] += `\n    'import/extensions': 'off',`;
    lines[rulesIndex - 2] += `\n    'no-param-reassign': 'off',`;
    lines[rulesIndex - 2] += `\n    'no-shadow': 'off',`;
    files[file] = lines.reverse().join('\n');
  }
};
