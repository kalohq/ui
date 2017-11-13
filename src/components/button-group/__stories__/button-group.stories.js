import React from 'react';
import {storiesOf} from '@storybook/react';

import Button from 'components/button';
import ButtonGroup from 'components/button-group';

storiesOf(
  'ButtonGroup',
  module
).addWithInfo(
  'ButtonGroup',
  'A wrapping component to manage spacing and border radius between child buttons',
  () => {
    return (
      <ButtonGroup>
        <Button theme="tertiary">Finance</Button>
        <Button theme="tertiary">Freelancers</Button>
        <Button theme="tertiary">Tasks</Button>
      </ButtonGroup>
    );
  }
);
