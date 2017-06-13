/* @flow */
import React from 'react';
import {storiesOf} from '@storybook/react';

import Radio from 'components/radio';

const myClickFunction = () => {
  window.alert('Hello from an onClick event');
};

storiesOf(
  'Radio',
  module,
).addWithInfo('Single Radio', 'A standard radio button', () => {
  return (
    <Radio
      label="Turn off notifications"
      size="medium"
      checked={false}
      onClick={myClickFunction}
    />
  );
});
