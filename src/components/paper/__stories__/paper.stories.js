import React from 'react';
import {storiesOf} from '@storybook/react';

import Paper from '../paper';

storiesOf('Paper', module)
  .addWithInfo(
    'Paper',
    'A wrapper component in charge of implementing the box-shadow around cards and the focus/blur animations.',
    () => {
      return <Paper padding={48}>this is some demo content</Paper>;
    }
  )
  .addWithInfo(
    'Paper with elevation',
    'Paper can be visually elevated with a dropshadow.',
    () => {
      return (
        <span>
          <Paper elevation={1} padding={48}>
            elevation 1
          </Paper>
          <Paper elevation={2} padding={48}>
            elevation 2
          </Paper>
          <Paper elevation={3} padding={48}>
            elevation 3
          </Paper>
          <Paper elevation={4} padding={48}>
            elevation 4
          </Paper>
        </span>
      );
    }
  );
