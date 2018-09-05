/* @flow */
import React from 'react';

import coreStyles from './field-validation.core.css';

export type Validation = {
  message: string,
};

type TProps = {
  validation: Validation,
};

export default function FieldValidation(props: TProps) {
  const {validation} = props;

  return (
    <span className={coreStyles['ui-field-validation']}>
      {validation.message}
    </span>
  );
}
