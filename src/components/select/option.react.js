import * as React from 'react';
import PropTypes from 'prop-types';

const Option = props => {
  return <div>{props.children}</div>;
};

Option.propTypes = {
  /** A value that's passed back via onSelect when a user selects the option */
  value: PropTypes.any,
  /** Whether or not this option is selected. */
  selected: PropTypes.bool,
  /** Dropdown children */
  children: PropTypes.node.isRequired,
};

export default Option;
