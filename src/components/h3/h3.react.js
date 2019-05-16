import * as React from 'react';
import PropTypes from 'prop-types';
import Heading from '../heading';

const H3 = props => {
  const {children} = props;
  return (
    <Heading component="h3" weight="semi-bold" size="small" {...props}>
      {children}
    </Heading>
  );
};

H3.propTypes = {
  children: PropTypes.node.isRequired,
};

export default H3;
