/* @flow */
import React from 'react';

import FieldValidations from '../field-validations';

export const examples = [
  {
    title: 'FieldValidations (default)',
    description: 'An example of FieldValidations (default)',
    render: () => (
      <FieldValidations validations={[{message: 'Your email is incorrect'}]} />
    ),
  },
];
