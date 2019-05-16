import * as React from 'react';
import PropTypes from 'prop-types';

import Heading from '../heading';

const H1 = props => {
  const {children} = props;

  return (
    <Heading component="h1" weight="normal" size="extra-large" {...props}>
      {children}
    </Heading>
  );
};

H1.propTypes = {
  children: PropTypes.node.isRequired,
};

export default H1;
