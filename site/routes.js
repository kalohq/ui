const routes = (module.exports = require('next-routes')());

routes
  .add('index')
  .add('components')
  .add('pgColor', '/brand/color', 'brand/color')
  .add('pgTypography', '/brand/typography', 'brand/typography')
  .add('pgIllustrations', '/brand/illustrations', 'brand/illustrations')
  .add('pgGlossary', '/product/glossary', 'product/glossary')
  .add('pgPersonas', '/product/personas', 'product/personas')
  .add('component', '/components/:componentName', 'component');
