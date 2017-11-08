/* @flow */
import * as React from 'react';
import cx from 'classnames';
import {isString} from 'lodash';

import PureComponent from 'react-pure-render/component';

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

export type ButtonProps = {
  children?: string,
  message?: string,
  disabled?: boolean,
  icon?: string,
  size?: 'small' | 'medium' | 'large',
  theme?: 'primary' | 'secondary' | 'default' | 'delete',
  grouped?: boolean,
  spacing?: boolean,
  active?: boolean,
  loading?: boolean,
  success?: boolean,
  onClick?: Function,
  loadedTimeout?: number,
  component?: string | React.Node,
  name?: string,
  type?: string,
  style?: object,
};

export default class Button extends PureComponent {
  static defaultProps = {
    size: 'large',
    theme: 'default',
    iconBorder: false,
    wide: false,
    loading: false,
    loadedTimeout: 600,
  };

  constructor(props: ButtonProps) {
    super(props);

    this.state = {
      loaded: false,
    };
  }

  componentWillUnmount() {
    if (this.__loadedTimeout__) {
      clearTimeout(this.__loadedTimeout__);
    }
  }

  componentWillReceiveProps(nextProps: ButtonProps) {
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
      message,
      disabled,
      icon,
      size,
      theme,
      grouped,
      spacing,
      active,
      loading,
      success,
      onClick,
      loadedTimeout,
      component,
      name,
      type,
      className,
      style,
      ...otherProps
    } = this.props;

    const loaded = false;
    const iconElement = false;

    const handleClick = event => {
      // Prevent form submit events propagating if button is mid-request
      if (loading || disabled) {
        event.preventDefault();
        return;
      }
      if (onClick) onClick(event);
    };

    const _classNames = cx(
      {
        [styles.root]: true,
        [styles[`theme-${theme}`]]: !!theme,
        [styles[`size-${size}`]]: true,
        [styles.grouped]: !!grouped,
        [styles.spacing]: !!spacing,
        [styles.loading]: loading,
        [styles.success]: success,
        [styles.loaded]: loaded,
        [styles.active]: !!active,
      },
      className
    );

    const Tag = this.props.to || this.props.href ? 'a' : 'button';

    return (
      <Tag
        name={name}
        type={type}
        onClick={disabled ? null : handleClick}
        style={style}
        className={_classNames}
        disabled={disabled || loading}
        {...otherProps}
      >
        <span className={styles.placeholder}>
          {iconElement}
          {children}
        </span>
        <div className={cx(styles.content, styles.message)} name="message">
          {iconElement}
          {children}
        </div>
        <div className={cx(styles.content, styles.successMessage)}>
          {iconElement}
          {message}
        </div>
        {loading ? (
          <div className={styles.loadingSpinner}>
            <LoadingSpinner size="small" />
          </div>
        ) : null}
      </Tag>
    );
  }
}
