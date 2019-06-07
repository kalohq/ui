import React from 'react';
import PropTypes from 'prop-types';

import Text from '../text';

const HelperText = props => {
  const {children, ...otherProps} = props;

  return (
    <Text size="extra-small" weight="normal" color="grey500" {...otherProps}>
      {children}
    </Text>
  );
};

HelperText.propTypes = {
  children: PropTypes.string,
};

export default HelperText;
