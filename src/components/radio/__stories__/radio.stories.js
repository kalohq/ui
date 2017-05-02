import React from 'react';
import {storiesOf} from '@kadira/storybook';

import Radio from 'components/radio';

storiesOf('Radio', module)
  .addWithInfo(
    'Single Radio',
    'A standard radio button',
    () => {
      return (
        <Radio label="Turn off notifications" checked={true}/>
      );
    }
  );
