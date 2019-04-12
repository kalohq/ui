import * as React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {UIBase} from '../layout';

import styles from './text.module.css';
import colors from '../../design-tokens/kalo-ui-colors.module.css';
import hoverColors from '../../design-tokens/kalo-ui-hover-colors.module.css';

import {TEXT_WEIGHT, TEXT_SIZE, TEXT_COLOR, TEXT_ALIGN} from './constants';

const Text = props => {
  const {
    weight = 'normal',
    size = 'small',
    align = 'unset',
    color = 'navy800',
    hoverColor = 'none',
    multiline,
    interactive,
    noUnderline,
    onClick,
    className,
    children,
    component = 'span',
    ...otherProps
  } = props;

  const _classNames = cx(
    {
      [styles['ui-text']]: true,
      [styles[`ui-text--size-${size}`]]: true,
      [styles[`ui-text--weight-${weight}`]]: true,
      [styles[`ui-text--align-${align}`]]: true,
      [styles['ui-text--multiline']]: Boolean(multiline),
      [styles['ui-text--no-underline']]: Boolean(noUnderline),
      [styles['ui-text--interactive']]: Boolean(interactive || onClick),
      [colors[`color-${color}`]]: true,
      [hoverColors[`hover-color-${hoverColor}`]]: Boolean(hoverColor),
    },
    className
  );

  return (
    <UIBase
      component={component}
      onClick={onClick}
      className={_classNames}
      {...otherProps}
    >
      {children}
    </UIBase>
  );
};

Text.propTypes = {
  /** TEXT_WEIGHT */
  weight: PropTypes.oneOf(TEXT_WEIGHT),
  /** TEXT_SIZE */
  size: PropTypes.oneOf(TEXT_SIZE),
  /** TEXT_COLOR */
  color: PropTypes.oneOf(TEXT_COLOR),
  /** TEXT_COLOR */
  hoverColor: PropTypes.oneOf(TEXT_COLOR),
  align: PropTypes.oneOf(TEXT_ALIGN),
  domElement: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  multiline: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  interactive: PropTypes.bool,
  notInteractive: PropTypes.bool,
  noUnderline: PropTypes.bool,
  resetTransform: PropTypes.bool,
  dangerouslySetInnerHTML: PropTypes.object,
  target: PropTypes.string,
  href: PropTypes.string,
  name: PropTypes.string,
  theme: PropTypes.object,
};

export default Text;
