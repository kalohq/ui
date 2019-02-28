/**
 * A custom token format to pass in non-camelCased CSS variables
 * in to the post-css build step as a standard JS object.
 */
module.exports = `
  module.exports = {
    {{#each props as |prop|}}
      '{{kebabcase prop.name}}': '{{prop.value}}',
    {{/each}}
  }
`;
