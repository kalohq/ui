import React from 'react';
import {storiesOf} from '@kadira/storybook';

import Input from 'components/input';

storiesOf('Input', module)
  .addWithInfo(
    'Input',
    'A standard text input',
    () => {
      return (
        <Input
          placeholder="Search freelancers…"
          size="medium"
        />
      );
    }
  );
