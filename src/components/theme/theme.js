/* @flow */

import tokens from '../../design-tokens/tokens.theme.js';

/**
 * ThemeProvider Kalo Theme
 * 
 * This is the core CSS-in-JS theme that is passed in to the
 * global ThemeProvider. It is mainly composed of our core
 * design tokens.
 */

const theme = {
  space: [0, 8, 16, 32, 64],
  breakpoints: [],
  ...tokens,
};

export default theme;
