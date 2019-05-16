import * as React from 'react';
import PropTypes from 'prop-types';

import Heading from '../heading';

const H4 = props => {
  const {children} = props;

  return (
    <Heading component="h4" weight="normal" size="small" {...props}>
      {children}
    </Heading>
  );
};

H4.propTypes = {
  children: PropTypes.node.isRequired,
};

export default H4;
