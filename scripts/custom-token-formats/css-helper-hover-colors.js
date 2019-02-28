const camelCase = require('lodash/camelCase');

/**
 * A custom token format that builds CSS helper classes
 * for setting the color of an element on hover
 *
 * example: .color-navy900:hover { color: var(--navy900)}
 */

module.exports = result =>
  `
  ${result
    .get('props')
    .filter(prop => prop.get('category') === 'colors')
    .map(
      prop =>
        `.hover-color-${camelCase(prop.get('name'))}:hover {
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
