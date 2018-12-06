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
  {
    format: 'css-helpers/colors',
    fileName: 'kalo-ui-colors.css',
  },
  {
    format: 'css-helpers/hover-colors',
    fileName: 'kalo-ui-hover-colors.css',
  },
  {
    format: 'css-helpers/fills',
    fileName: 'kalo-ui-fills.css',
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

theo.registerFormat('css-helpers/colors', result =>
  `
  ${result
    .get('props')
    .filter(prop => prop.get('category') === 'colors')
    .map(
      prop =>
        `.color-${camelCase(prop.get('name'))} {
          ${prop.get('name') === 'CURRENT_COLOR' ||
          prop.get('name') === 'NONE' ||
          prop.get('name') === 'INHERIT'
            ? `color: ${camelCase(prop.get('name'))};`
            : `color: var(--${camelCase(prop.get('name'))});`}
        }
        `
    )
    .toJS()}
  `.replace(/,/g, '')
);

theo.registerFormat('css-helpers/hover-colors', result =>
  `
  ${result
    .get('props')
    .filter(prop => prop.get('category') === 'colors')
    .map(
      prop =>
        `.hover-color-${camelCase(prop.get('name'))}:hover {
          ${prop.get('name') === 'CURRENT_COLOR' ||
          prop.get('name') === 'NONE' ||
          prop.get('name') === 'INHERIT'
            ? `color: ${camelCase(prop.get('name'))};`
            : `color: var(--${camelCase(prop.get('name'))});`}
        }
        `
    )
    .toJS()}
  `.replace(/,/g, '')
);

theo.registerFormat('css-helpers/fills', result =>
  `
  ${result
    .get('props')
    .filter(prop => prop.get('category') === 'colors')
    .map(
      prop =>
        `.fill-${camelCase(prop.get('name'))} {
          ${prop.get('name') === 'CURRENT_COLOR' ||
          prop.get('name') === 'NONE' ||
          prop.get('name') === 'INHERIT'
            ? `fill: ${camelCase(prop.get('name'))};`
            : `fill: var(--${camelCase(prop.get('name'))});`}
        }
        `
    )
    .toJS()}
  `.replace(/,/g, '')
);

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
