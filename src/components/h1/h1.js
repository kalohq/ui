import React from 'react';
import PropTypes from 'prop-types';
import PureComponent from 'react-pure-render/component';

import Heading from 'components/heading';

/**
 * H1
 *
 * The Lystable H1 element
 *
 * @class  {component} H1
 * @exports H1
 * @extends PureComponent
 *
 */
export default class H1 extends PureComponent {

  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <Heading
        number="1"
        weight="normal"
        size="extra-large"
        {...this.props}
      >
        {this.props.children}
      </Heading>
    );
  }
}
