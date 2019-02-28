/**
 * A helper function to convert our base variables
 * into formats that are useful (CSS, JS)
 */
const theo = require('theo');
const fs = require('fs');

const formatTheme = require('./custom-token-formats/theme.js');
const formatCustomPropertiesAsAnObject = require('./custom-token-formats/custom-properties-as-an-object');
const formatCSSHelpersColors = require('./custom-token-formats/css-helper-colors');
const formatCSSHelpersHoverColors = require('./custom-token-formats/css-helper-hover-colors');
const formatCSSHelpersFills = require('./custom-token-formats/css-helper-fills');

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

theo.registerFormat('theme.js', formatTheme);
theo.registerFormat(
  'custom-properties-as-an-object',
  formatCustomPropertiesAsAnObject
);
theo.registerFormat('css-helpers/colors', formatCSSHelpersColors);
theo.registerFormat('css-helpers/hover-colors', formatCSSHelpersHoverColors);
theo.registerFormat('css-helpers/fills', formatCSSHelpersFills);

const writeToNewFile = (name, contents) => {
  try {
    fs.writeFileSync(`./src/design-tokens/${name}`, contents);
    console.log(`Writing tokens to ./src/design-tokens/${name}`); // eslint-disable-line no-console
  } catch (e) {
    console.log('Cannot write file ', e); // eslint-disable-line no-console
  }
};

theo.registerTransform('web', ['color/hex']);

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
