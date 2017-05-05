import React from 'react';
import PropTypes from 'prop-types';
import PureComponent from 'react-pure-render/component';

import Heading from 'components/heading';

/**
 * H2
 *
 * The Lystable H2 element
 *
 * @class  {component} H2
 * @exports H2
 * @extends PureComponent
 *
 */
export default class H2 extends PureComponent {

  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <Heading
        number="2"
        weight="semi-bold"
        size="large"
        {...this.props}
      >
        {this.props.children}
      </Heading>
    );
  }
}
