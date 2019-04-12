import React from 'react';
import PropTypes from 'prop-types';

import coreStyles from './field-validation.module.css';

const FieldValidation = ({validation}) => (
  <span className={coreStyles['ui-field-validation']}>
    {validation.message}
  </span>
);

FieldValidation.propTypes = {
  validation: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }).isRequired,
};

export default FieldValidation;
