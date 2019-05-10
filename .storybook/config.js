import React from 'react';
import { configure, addDecorator } from '@storybook/react';

import {ThemeProvider} from 'emotion-theming';

import theme from './theme';


addDecorator(story => {
  return (
    <ThemeProvider theme={theme}>
      {story()}
    </ThemeProvider>
  )
})

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
