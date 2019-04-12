import * as React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {UIBase} from '../layout';

import {ICON_SIZE, ICON_COLOR, DEFAULT_SIZE, DEFAULT_COLOR} from './constants';

import styles from './icon.module.css';
import fills from '../../design-tokens/kalo-ui-fills.module.css';

const Icon = props => {
  const {
    children,
    size = DEFAULT_SIZE,
    color = DEFAULT_COLOR,
    className,
    onClick,
    title,
    ...otherProps
  } = props;

  const _classNames = cx(
    {
      [styles['ui-icon']]: true,
      [styles[`ui-icon--size-${size}`]]: true,
      [styles['ui-icon--interactive']]: Boolean(onClick),
      [fills[`fill-${color}`]]: true,
    },
    className
  );

  return (
    <UIBase
      component="i"
      onClick={onClick}
      title={title}
      className={_classNames}
      {...otherProps}
    >
      <svg width={size} height={size} aria-hidden="true">
        {title ? <title>{title}</title> : null}
        <use xlinkHref={`#${children}`} />
      </svg>
    </UIBase>
  );
};

Icon.propTypes = {
  // children: $Keys<typeof ICONS>,
  /** ICON_SIZE */
  size: PropTypes.oneOf(ICON_SIZE),
  /** ICON_COLOR */
  color: PropTypes.oneOf(ICON_COLOR),
  className: PropTypes.string,
  onClick: PropTypes.func,
  theme: PropTypes.object,
  title: PropTypes.string,
};

export default Icon;
