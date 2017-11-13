/* @flow */
import * as React from 'react';
import cx from 'classnames';

import PureComponent from 'react-pure-render/component';

import Icon from '../icon';
import LoadingSpinner from '../loading-spinner';

import styles from './button.css';

const ICON_SIZE = {
  small: '14',
  medium: '18',
  large: '24',
};

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
  onClick?: Function,
  name?: string,
  type?: string,
  style?: Object,
  state?: 'success' | 'error',
  callbackMessage?: string,
};

export default class Button extends PureComponent {
  static defaultProps = {
    size: 'large',
    theme: 'default',
    wide: false,
    loading: false,
  };

  constructor(props: ButtonProps) {
    super(props);

    this.state = {
      loading: this.props.loading,
      uiState: this.props.uiState,
    };
  }

  componentWillUnmount() {
    if (this.__stateTimeout__) {
      clearTimeout(this.__stateTimeout__);
    }
  }

  componentWillReceiveProps(nextProps: ButtonProps) {
    this.setState({loading: nextProps.loading});

    if (!this.props.state && nextProps.state) {
      setTimeout(() => {
        this.setState({uiState: nextProps.state});
      }, 500);
      clearTimeout(this.__stateTimeout__);
      this.__stateTimeout__ = setTimeout(() => {
        this.setState({uiState: false, loading: false});
      }, 6000);
    }
  }

  onClick(event: SyntheticEvent<*>) {
    // Prevent form submit events propagating if button is mid-request
    if (this.props.loading || this.props.disabled) {
      return event.preventDefault();
    }
    if (this.props.onClick) this.props.onClick(event);
    return true;
  }

  render() {
    const {
      children,
      disabled,
      icon,
      size,
      theme,
      grouped,
      spacing,
      active,
      success,
      onClick,
      callbackMessage,
      name,
      type,
      className,
      style,
      ...otherProps
    } = this.props;

    const ButtonIconElement = () => (
      <Icon className={styles.icon} size={!!size ? ICON_SIZE[size] : '18'}>
        {icon}
      </Icon>
    );

    const _classNames = cx(
      {
        [styles.root]: true,
        [styles[`theme-${theme}`]]: !!theme,
        [styles[`size-${size}`]]: true,
        [styles.grouped]: !!grouped,
        [styles.spacing]: !!spacing,
        [styles.loading]: this.state.loading,
        [styles.success]: success,
        [styles.active]: !!active,
        [styles[`state-${this.state.uiState}`]]: this.state.uiState,
      },
      className
    );

    const Tag = this.props.to || this.props.href ? 'a' : 'button';

    return (
      <Tag
        name={name}
        type={type}
        onClick={disabled || this.state.uiState ? null : onClick}
        style={style}
        className={_classNames}
        disabled={disabled || (this.state.loading && !this.state.uiState)}
        {...otherProps}
      >
        <span className={styles.placeholder}>
          <ButtonIconElement />
          {this.state.uiState ? callbackMessage : children}
        </span>
        <div className={cx(styles.content, styles.message)} name="message">
          <ButtonIconElement />
          {children}
        </div>
        <div className={cx(styles.content, styles.callbackMessage)}>
          <ButtonIconElement />
          {callbackMessage}
        </div>
        <div className={styles.loadingSpinner}>
          <LoadingSpinner size="small" />
        </div>
      </Tag>
    );
  }
}
