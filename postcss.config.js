const postCSSVariables = require('postcss-css-variables');
const globalCSSVariables = require('./config/global_css_variables.js');

module.exports = {
  plugins: [
    postCSSVariables(globalCSSVariables),
  ]
}
