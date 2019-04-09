const camelCase = require('lodash/camelCase');

/**
 * A custom token format that builds CSS helper classes
 * for setting the fill of an element
 *
 * example: .fill-navy900 { color: var(--navy900)}
 */

module.exports = result =>
  `
  ${result
    .get('props')
    .filter(prop => prop.get('category') === 'colors')
    .map(
      prop =>
        `.fill-${camelCase(prop.get('name'))} {
          ${
            prop.get('name') === 'CURRENT_COLOR' ||
            prop.get('name') === 'NONE' ||
            prop.get('name') === 'INHERIT'
              ? `fill: ${camelCase(prop.get('name'))};`
              : `fill: var(--${camelCase(prop.get('name'))});`
          }
        }
        `
    )
    .toJS()}
    /* Special gradient fills */
    .fill-gradient-pink {
      fill: url(#gradient-pink);
    }
    .fill-gradient-purple {
      fill: url(#gradient-purple);
    }
    .fill-gradient-blue-two {
      fill: url(#gradient-blue-two);
    }
  `.replace(/,/g, '');
