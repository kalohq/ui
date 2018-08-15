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
    format: 'custom-properties-as-an-object',
    fileName: 'tokens.css.js',
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
  {
    format: 'scss',
    fileName: 'tokens.scss',
  },
];

const writeToNewFile = (name, contents) => {
  try {
    fs.writeFileSync(`./src/design-tokens/${name}`, contents);
    console.log(`Writing tokens to ./src/design-tokens/${name}`); // eslint-disable-line no-console
  } catch (e) {
    console.log('Cannot write file ', e); // eslint-disable-line no-console
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

/**
 * A custom token format to pass in non-camelCased CSS variables
 * in to the post-css build step as a standard JS object.
 */
theo.registerFormat(
  'custom-properties-as-an-object',
  `
module.exports = {
  {{#each props as |prop|}}
    '{{kebabcase prop.name}}': '{{prop.value}}',
  {{/each}}
}
`
);

/**
 * A custom token format to generate a sketch pallete for product
 * designers. 
 */
theo.registerFormat('sketch', result => {
  const TEMPLATE_BASE = {
    compatibleVersion: '2.0',
    pluginVersion: '2.0',
    colors: [],
  };

  result
    .get('props')
    .filter(token => token.get('category') === 'colors')
    .filter(token => token.get('value').match(/rgb/))
    .filter(token => token.get('originalValue').match(/#/))
    .sort((a, b) => a.get('name').localeCompare(b.get('name')))
    .map(token => {
      const [r, g, b] = token
        .get('value')
        .replace('rgb(', '')
        .replace(')', '')
        .split(',')
        .map(i => i / 255);

      return TEMPLATE_BASE.colors.push({
        red: r,
        green: g,
        blue: b,
        alpha: 1,
      });
    });

  return JSON.stringify(TEMPLATE_BASE);
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
    .catch(error => console.log(`Something went wrong: ${error}`)); // eslint-disable-line no-console
});
