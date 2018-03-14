import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {isBoolean, isString} from 'lodash';

import PureComponent from 'react-pure-render/component';
import {Box, Flex} from '../layout';
import Icon from '../icon';
import LoadingSpinner from '../loading-spinner';

import styles from './button.css';

const ICON_SIZE = {
  small: '14',
  medium: '18',
  large: '24',
};

function renderIcon(icon, border, size) {
  if (!icon) return null;

  return isString(icon) ? (
    <span
      className={cx({
        [styles.icon]: true,
        [styles.border]: border,
      })}
    >
      <Icon size={!!size ? size : '18'}>{icon}</Icon>
    </span>
  ) : (
    <span
      className={cx({
        [styles.icon]: true,
        [styles.border]: border,
      })}
    >
      {icon}
    </span>
  );
}

export default class Button extends PureComponent {
  static propTypes = {
    children: PropTypes.any,
    message: PropTypes.string,
    role: PropTypes.string,
    disabled: PropTypes.bool,
    icon: PropTypes.any,
    iconBorder: PropTypes.bool,
    loneIcon: PropTypes.bool,
    wide: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    theme: PropTypes.oneOf([
      'primary',
      'secondary',
      'tertiary',
      'disabled',
      'delete',
      'deny',
      'confirm',
    ]),
    grouped: PropTypes.bool,
    spacing: PropTypes.bool,
    flex: PropTypes.bool,
    active: PropTypes.bool,
    loading: PropTypes.bool,
    success: PropTypes.bool,
    middle: PropTypes.bool,
    onClick: PropTypes.func,
    loadedTimeout: PropTypes.number,
    component: PropTypes.any,
    name: PropTypes.string,
    type: PropTypes.string,
    mayGetLong: PropTypes.bool,
    subdued: PropTypes.bool,
  };

  static defaultProps = {
    role: 'button',
    size: 'large',
    theme: 'primary',
    iconBorder: false,
    wide: false,
    loading: false,
    loneIcon: false,
    loadedTimeout: 600,
    component: Box,
  };

  static displayName = 'Button';

  constructor() {
    super();

    this.state = {
      loaded: false,
    };
  }

  componentWillUnmount() {
    if (this.__loadedTimeout__) {
      clearTimeout(this.__loadedTimeout__);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.loading && !nextProps.loading) {
      this.setState({loaded: true});
      clearTimeout(this.__loadedTimeout__);
      this.__loadedTimeout__ = setTimeout(() => {
        if (this.state.loaded) {
          this.setState({loaded: false});
        }
      }, this.props.loadedTimeout);
    }
  }

  render() {
    const {
      children,
      disabled,
      icon,
      reverse,
      iconBorder,
      loneIcon,
      theme,
      grouped,
      spacing,
      size,
      active,
      wide,
      onClick,
      loading,
      success,
      message,
      name,
      flex,
      type,
      role,
      component: Component,
      className,
      middle,
      style,
      mayGetLong,
      subdued,
      loadedTimeout: _IGNORED,
      readonly: __IGNORED,
      editable: ___IGNORED,
      ...otherProps
    } = this.props;

    const {loaded} = this.state;

    const Tag = this.props.to || this.props.href ? 'span' : 'button';

    const iconElement = renderIcon(
      icon,
      isBoolean(iconBorder) ? iconBorder : !!icon && !!children,
      ICON_SIZE[size]
    );

    const handleClick = event => {
      // Prevent form submit events propagating if button is mid-request
      if (loading || disabled) {
        event.preventDefault();
        return;
      }
      if (onClick) {
        onClick(event);
      }
    };

    return (
      <Component
        style={style}
        className={cx(
          {
            [styles.root]: true,
            [styles.grouped]: !!grouped,
            [styles.spacing]: !!spacing,
            [styles.wide]: wide,
            [styles.middle]: middle,
            [styles.loading]: loading,
            [styles.success]: success,
            [styles.loaded]: loaded,
            [styles.flex]: flex,
            [styles.reverse]: reverse,
          },
          className
        )}
        onClick={handleClick}
        {...otherProps}
      >
        <Tag
          role={role}
          name={name}
          type={type}
          className={cx({
            [styles.button]: true,
            [styles.disabled]: success ? false : disabled || loading,
            [styles[theme]]: !!theme,
            [styles.active]: !!active,
            [styles.subdued]: !!subdued,
            [styles[size]]: true,
            [styles.loneIcon]: loneIcon,
          })}
        >
          <Flex
            alignItems="center"
            justifyContent="center"
            className={styles.placeholder}
          >
            {iconElement}
            {children}
          </Flex>
          <Flex
            alignItems="center"
            justifyContent="center"
            name="message"
            className={cx({
              [styles.message]: true,
              [styles.mayGetLong]: mayGetLong,
            })}
            title={mayGetLong ? children : undefined}
          >
            {iconElement}
            {children}
          </Flex>
          <Flex
            alignItems="center"
            justifyContent="center"
            className={styles.successMessage}
          >
            {iconElement}
            {message}
          </Flex>
          <div className={styles.loadingSpinner}>
            <LoadingSpinner size="small" />
          </div>
        </Tag>
      </Component>
    );
  }
}
