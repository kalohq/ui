import React from 'react';

import {storiesOf} from '@storybook/react';
import Button from '../src/components/button';

import {ThemeProvider} from 'emotion-theming';

const theme = {
  user: {
    primary: '#4885ed',
  },
};

storiesOf('Button', module).add('primary', () => (
  <ThemeProvider theme={theme}>
    <Button variant="primary">Export Freelancers</Button>
  </ThemeProvider>
));
