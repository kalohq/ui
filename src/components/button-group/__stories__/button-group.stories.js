import React from 'react';
import {storiesOf} from '@kadira/storybook';

import ButtonGroup from 'components/button-group';
import Button from 'components/button';

storiesOf('ButtonGroup', module)
  .addWithInfo(
    'Pilled buttons',
    'A collection of buttons. By default, they will share inner borders',
    () => {
      return (
        <ButtonGroup flex={true} wide={true}>
          <Button theme="tertiary">Freelancers</Button>
          <Button theme="tertiary">Finance</Button>
          <Button theme="tertiary">Invoice</Button>
        </ButtonGroup>
      );
    }
  )
  .addWithInfo(
    'With spacing',
    "If the buttons aren't directly linked, uniform spacing can be added in between. Spacing should also be added if the buttons aren\`t of the same theme.",
    () => {
      return (
        <ButtonGroup flex={true} wide={true} spacing={true}>
          <Button theme="tertiary">Cancel</Button>
          <Button theme="primary">Create Project</Button>
        </ButtonGroup>
      );
    }
  );
