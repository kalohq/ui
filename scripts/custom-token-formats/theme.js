const camelCase = require('lodash/camelCase');

/**
 * A custom token format for passing into a ThemeProvider
 */

module.exports = result => {
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
};
