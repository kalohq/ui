import React from 'react';
import PropTypes from 'prop-types';
import PureComponent from 'react-pure-render/component';

import Heading from '../heading';

export default class H3 extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <Heading number="3" weight="semi-bold" size="small" {...this.props}>
        {this.props.children}
      </Heading>
    );
  }
}
