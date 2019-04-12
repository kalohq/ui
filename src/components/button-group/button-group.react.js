import * as React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {isArray} from 'lodash';

import {UIBase} from '../layout';

import coreStyles from './button-group.module.css';

/**
 * A basic container for grouped buttons
 * - Clones children to ensure Button components received a 'grouped' prop
 */

const ButtonGroup = props => {
  const {
    children,
    wide = true,
    flex,
    spacing,
    reverse,
    align,
    ...otherProps
  } = props;

  const childrenInOrder =
    reverse && isArray(children) ? [...children].reverse() : children;

  const _classNames = cx({
    [coreStyles['ui-btn-group']]: true,
    [coreStyles['ui-btn-group--wide']]: wide,
    [coreStyles[`ui-btn-group--align-${String(align)}`]]: align,
  });

  return (
    <UIBase className={_classNames} data-test="ui-button-group" {...otherProps}>
      {childrenInOrder &&
        React.Children.map(
          childrenInOrder,
          child =>
            child &&
            React.cloneElement(child, {
              grouped: !spacing,
              spacing: !!spacing,
              reverse,
              flex,
            })
        )}
    </UIBase>
  );
};

ButtonGroup.propTypes = {
  /** One or more Buttons */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired,
  flex: PropTypes.bool,
  /** Should this span the full width of the parent? */
  wide: PropTypes.bool,
  /** Should there be spacing between the child buttons? */
  spacing: PropTypes.bool,
  /** Reverses the order of child buttons */
  reverse: PropTypes.bool,
  /** X Alignment of the buttons ('left' | 'center' | 'right') */
  align: PropTypes.oneOf(['left', 'center', 'right']),
};

export default ButtonGroup;
