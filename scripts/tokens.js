/**
  * A helper function to convert our base variables
  * into formats that are useful (CSS, JS)
*/
const theo = require('theo');
const fs = require('fs');

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
