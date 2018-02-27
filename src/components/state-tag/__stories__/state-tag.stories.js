/* @flow */
import React from 'react';

import StateTag from '../state-tag';

export const examples = [
  {
    title: 'StateTag',
    description: 'A standard StateTag',
    render: () => (
      <StateTag theme="green" leftIcon="done_all">
        Completed
      </StateTag>
    ),
  },
  {
    title: 'StateTag with right icon',
    description: 'Icons can also be placed to the right of the tag',
    render: () => (
      <StateTag theme="orange" rightIcon="access_time">
        Pending
      </StateTag>
    ),
  },
  {
    title: 'Editable StateTag',
    description:
      'If the StateTag can be edited, the cursor will be changed to a pointer',
    render: () => (
      <StateTag theme="orange" leftIcon="access_time" editable={true}>
        Pending
      </StateTag>
    ),
  },
];
