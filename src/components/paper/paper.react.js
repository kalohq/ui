import * as React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {UIBase} from '../layout';

import coreStyles from './paper.css';

/**
 * @summary This is the kalo paper component.
 * It is in charge of implementing the box-shadow around
 * our cards and the focus/blur animations.
 *
 */
const Paper = props => {
  const {
    border = true,
    rounded = true,
    children,
    elevation = 1,
    hoverElevation = 1,
    opaque,
    wireframe,
    onClick,
    component = 'div',
    className,
    ...otherProps
  } = props;

  const zDepth = Math.min(elevation, 5);
  const hoverZDepth = Math.min(hoverElevation, 5);

  const _classNames = cx(
    {
      [coreStyles['ui-paper']]: true,
      [coreStyles[`ui-paper--level-${zDepth}`]]: true,
      [coreStyles[`ui-paper--hover-level-${hoverZDepth}`]]: true,
      [coreStyles['ui-paper--opaque']]: opaque,
      [coreStyles['ui-paper--wireframe']]: wireframe,
      [coreStyles['ui-paper--no-border']]: !border,
      [coreStyles['ui-paper--not-rounded']]: !rounded,
      [coreStyles['ui-paper--interactive']]: Boolean(onClick),
    },
    className
  );

  return (
    <UIBase
      onClick={onClick}
      className={_classNames}
      component={component}
      {...otherProps}
    >
      {children}
    </UIBase>
  );
};

Paper.propTypes = {
  focused: PropTypes.bool,
  rounded: PropTypes.bool,
  padded: PropTypes.bool,
  border: PropTypes.bool,
  children: PropTypes.node.isRequired,
  elevation: PropTypes.number,
  hoverElevation: PropTypes.number,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  opaque: PropTypes.bool,
  wireframe: PropTypes.bool,
  onClick: PropTypes.func,
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default Paper;
