/* @flow */
import React from 'react';

import Radio from '../radio';

const myClickFunction = () => {
  //eslint-disable-next-line
  window.alert('Hello from an onClick event');
};

export const examples = [
  {
    title: 'Radio',
    description: 'A standard radio button',
    render: () => (
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
    ),
  },
  {
    title: 'Disabled',
    description: 'A disabled radio button',
    render: () => (
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
    ),
  },
  {
    title: 'Readonly',
    description: 'A readonly radio button',
    render: () => (
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
    ),
  },
];
