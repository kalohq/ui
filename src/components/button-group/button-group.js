import React, {cloneElement, Children} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import PureComponent from 'react-pure-render/component';
import {Flex} from '../layout';

import styles from './button-group.css';

/**
 * A basic container for grouped buttons
 * - Clones children to ensure Button components received a 'grouped' prop
 */
export default class ButtonGroup extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    flex: PropTypes.bool,
    bordered: PropTypes.bool,
    wide: PropTypes.bool,
    spacing: PropTypes.bool,
    reverse: PropTypes.bool,
  };

  static defaultProps = {
    bordered: false,
    flex: false,
    round: true,
    wide: true,
    spacing: false,
    reverse: false,
  };

  render() {
    const {
      wide,
      bordered,
      children,
      flex,
      spacing,
      reverse,
      round: __IGNORED, // deprecated prop
      ...otherProps
    } = this.props;

    return (
      <Flex
        alignItems="center"
        className={cx({
          [styles.wide]: wide,
          [styles.bordered]: bordered,
          [styles.reverse]: reverse,
        })}
        {...otherProps}
      >
        {Children.map(
          children,
          el =>
            el
              ? cloneElement(el, {
                  grouped: !spacing,
                  spacing: !!spacing,
                  reverse,
                  flex,
                })
              : null
        )}
      </Flex>
    );
  }
}
