/* @flow */
import React from 'react';
import {List} from 'immutable';
import cx from 'classnames';

import FieldValidation from '../field-validation';
import type Validation from '../field-validation';

import styles from './field-validations.css';
export type Validations = List<Validation>;

type TProps = {
  /** A list of validations to be displayed to the user */
  validations?: Validations,
  /** Visually centeres the validations */
  centered?: boolean,
  /** Any classes to pass down */
  className?: string | Object,
};

export default function FieldValidations(props: TProps) {
  const {validations, centered, className} = props;

  const _classNames = cx(
    {
      [styles['ui-field-validations']]: true,
      [styles['ui-field-validations--align-center']]: centered,
    },
    className
  );

  return (
    <div className={_classNames}>
      {validations &&
        validations.map(validation => (
          // $FlowFixMe
          <FieldValidation validation={validation} key={validation.message} />
        ))}
    </div>
  );
}
