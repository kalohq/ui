import {configure} from '@storybook/react';

import '../lib/design-tokens/tokens.css';
import '../lib/styles/kalo-ui-base.css';

// automatically import all files ending in *.stories.js
// const req = require.context('../stories', true, /\.stories\.js$/);
const req = require.context('../src', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
