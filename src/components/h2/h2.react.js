import * as React from 'react';
import PropTypes from 'prop-types';

import Heading from '../heading';

const H2 = props => {
  const {children} = props;

  return (
    <Heading component="h2" weight="semi-bold" size="large" {...props}>
      {children}
    </Heading>
  );
};

H2.propTypes = {
  children: PropTypes.node.isRequired,
};

export default H2;
