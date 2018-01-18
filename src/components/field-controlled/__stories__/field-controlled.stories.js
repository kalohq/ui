/* @flow */
import React from 'react';

import FieldControlled from '../field-controlled';
import Input from '../../input';

export const examples = [
  {
    title: 'FieldControlled',
    description: 'A standard FieldControlled',
    render: () => (
      <FieldControlled
        permissions={[{message: 'Only team members can edit the project name'}]}
        label="Project name"
      >
        <Input placeholder="Project 101" />
      </FieldControlled>
    ),
  },
];
