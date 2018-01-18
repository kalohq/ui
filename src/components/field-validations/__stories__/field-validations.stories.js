/* @flow */
import React from 'react';
import {List} from 'immutable';

import FieldValidations from '../field-validations';

const validations = List({message: 'Your email is incorrect'});

export const examples = [
  {
    title: 'FieldValidations (default)',
    description: 'An example of FieldValidations (default)',
    render: () => <FieldValidations validations={validations} />,
  },
];
