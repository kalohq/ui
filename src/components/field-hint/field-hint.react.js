import React from 'react';
import PropTypes from 'prop-types';
import {isString} from 'lodash';

import {pickStyles} from '../../utils/style';
import Icon from '../icon';
import {UIBase} from '../layout';

import coreStyles from './field-hint.css';

const FieldHint = props => {
  const {hint, icon, ...otherProps} = props;

  return (
    <UIBase
      component="span"
      className={coreStyles['ui-field-hint']}
      {...pickStyles(otherProps)}
    >
      {isString(icon) ? (
        <Icon
          size={12}
          top={-2}
          marginRight={5}
          position="relative"
          verticalAlign="baseline"
        >
          {String(icon)}
        </Icon>
      ) : (
        icon
      )}
      {hint}
    </UIBase>
  );
};

FieldHint.propTypes = {
  hint: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

export default FieldHint;
