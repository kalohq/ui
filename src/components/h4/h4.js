import React from 'react';
import PropTypes from 'prop-types';
import PureComponent from 'react-pure-render/component';

import Heading from 'components/heading';

/**
 * H4
 *
 * The Lystable H4 element
 *
 * @class  {component} H4
 * @exports H4
 * @extends PureComponent
 *
 */
export default class H4 extends PureComponent {

  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <Heading
        number="4"
        weight="normal"
        {...this.props}
      >
        {this.props.children}
      </Heading>
    );
  }
}
