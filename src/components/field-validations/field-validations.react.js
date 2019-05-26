import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import FieldValidation from '../field-validation';

import styles from './field-validations.css';

const FieldValidations = props => {
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
};

FieldValidations.propTypes = {
  /** A list of validations to be displayed to the user */
  validations: PropTypes.array,
  /** Visually centeres the validations */
  centered: PropTypes.bool,
  /** Any classes to pass down */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default FieldValidations;
