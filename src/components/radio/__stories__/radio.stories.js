/* @flow */
import React from 'react';
import {storiesOf} from '@storybook/react';

import Radio from 'components/radio';

const myClickFunction = () => {
  window.alert('Hello from an onClick event');
};

storiesOf('Radio', module)
  .addWithInfo('Single Radio', 'A standard radio button', () => {
    return (
      <span>
        <Radio
          label="Turn off notifications"
          checked={true}
          onClick={myClickFunction}
        />
        <Radio
          label="Enable email notifications"
          checked={false}
          onClick={myClickFunction}
        />
      </span>
    );
  })
  .addWithInfo('disabled', 'A disabled radio button', () => {
    return (
      <span>
        <Radio
          label="Turn off notifications"
          checked={true}
          onClick={myClickFunction}
          disabled={true}
        />
        <Radio
          label="Enable email notifications"
          checked={false}
          onClick={myClickFunction}
          disabled={true}
        />
      </span>
    );
  })
  .addWithInfo('readonly', 'A readonly radio button', () => {
    return (
      <span>
        <Radio
          label="Turn off notifications"
          checked={true}
          onClick={myClickFunction}
          readonly={true}
        />
        <Radio
          label="Enable email notifications"
          checked={false}
          onClick={myClickFunction}
          readonly={true}
        />
      </span>
    );
  });
