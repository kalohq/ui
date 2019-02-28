const camelCase = require('lodash/camelCase');

/**
 * A custom token format that builds CSS helper classes
 * for setting the color of an element
 *
 * example: .color-navy900 { color: var(--navy900)}
 */

module.exports = result =>
  `
  ${result
    .get('props')
    .filter(prop => prop.get('category') === 'colors')
    .map(
      prop =>
        `.color-${camelCase(prop.get('name'))} {
          ${
            prop.get('name') === 'CURRENT_COLOR' ||
            prop.get('name') === 'NONE' ||
            prop.get('name') === 'INHERIT'
              ? `color: ${camelCase(prop.get('name'))};`
              : `color: var(--${camelCase(prop.get('name'))});`
          }
        }
        `
    )
    .toJS()}
  `.replace(/,/g, '');
