const routes = (module.exports = require('next-routes')());

routes
  .add('index')
  .add('about')
  .add('components')
  .add('component', '/components/:componentName', 'component');
