import React from 'react';
import {storiesOf} from '@kadira/storybook';

import ButtonGroup from 'components/button-group';
import Button from 'components/button';

storiesOf('ButtonGroup', module)
  .addWithInfo(
    'Button Group',
    'A collection of tabbed buttons',
    () => {
      return (
        <ButtonGroup flex={true} wide={true}>
          <Button theme="tertiary">Freelancers</Button>
          <Button theme="tertiary">Finance</Button>
          <Button theme="tertiary">Invoice</Button>
        </ButtonGroup>
      );
    }
  );
