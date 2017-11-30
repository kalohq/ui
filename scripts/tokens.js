/**
  * A helper function to convert our base variables
  * into formats that are useful (CSS, JS)
*/
const theo = require('theo');
const fs = require('fs');
const camelCase = require('lodash/camelCase');

const formatsRequired = [
  {
    format: 'custom-properties.css',
    fileName: 'tokens.css',
  },
  {
    format: 'common.js',
    fileName: 'tokens.js',
  },
  {
    format: 'module.js',
    fileName: 'tokens.module.js',
  },
  {
    format: 'json',
    fileName: 'tokens.json',
  },
  {
    format: 'theme.js',
    fileName: 'tokens.theme.js',
  },
];

const writeToNewFile = (name, contents) => {
  try {
    fs.writeFileSync(`./src/design-tokens/${name}`, contents);
    console.log(`Writing tokens to ./src/design-tokens/${name}`);
  } catch (e) {
    console.log('Cannot write file ', e);
  }
};

/**
 * A custom token format for passing into a ThemeProvider
 */
theo.registerFormat('theme.js', result => {
  const grouped = result.get('props').groupBy(token => token.get('category'));
  const collect = {};

  grouped.map((category, index) => {
    collect[index] = {};
    return category.map(token => {
      collect[index][camelCase(token.get('name'))] = token.get('value');
      return collect;
    });
  });
  return `module.exports = ${JSON.stringify(collect)}`;
});

formatsRequired.map(format => {
  return theo
    .convert({
      transform: {
        type: 'web',
        file: './config/design-tokens/tokens.yml',
      },
      format: {
        type: format.format,
      },
    })
    .then(vars => {
      writeToNewFile(format.fileName, vars);
    })
    .catch(error => console.log(`Something went wrong: ${error}`));
});
