import React from 'react';
import {storiesOf} from '@kadira/storybook';

import H1 from 'components/h1';

storiesOf('Typography', module)
  .addWithInfo(
    'H1',
    'A primary view title',
    () => {
      return (
        <H1>Account Settings</H1>
      );
    }
  );
