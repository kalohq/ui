/* @flow */
import * as React from 'react';
import {isString} from 'lodash';
import PureComponent from 'react-pure-render/component';
import styled, {css} from 'react-emotion';

import {Box, Flex} from '../layout';
import Icon from '../icon';
import LoadingSpinner from '../loading-spinner';

const BUTTON_SIZING = {
  small: {
    height: 30,
    padding: 15,
    fontSize: 12,
    iconSize: 14,
  },
  medium: {
    height: 36,
    padding: 18,
    fontSize: 14,
    iconSize: 18,
  },
  large: {
    height: 46,
    padding: 23,
    fontSize: 14,
    iconSize: 20,
  },
  'extra-large': {
    height: 56,
    padding: 26,
    fontSize: 14,
    iconSize: 24,
  },
};

const CoreButton = styled(Box)`
  overflow: hidden;
  position: relative;
  align-items: center;
  border: none;
  border-radius: ${props => props.theme.layout.borderRadiusButton};
  cursor: pointer;
  font-weight: 500;
  align-items: center;
  font-size: ${props => BUTTON_SIZING[props.size].fontSize}px;
  height: ${props => BUTTON_SIZING[props.size].height}px;
  padding: 0 ${props => BUTTON_SIZING[props.size].padding}px;
  vertical-align: middle;
  width: ${props =>
    props.loneIcon ? `${BUTTON_SIZING[props.size].height}px` : 'unset'};

  &:focus {
    outline: 0;
  }

  ${props =>
    props.isGrouped &&
    css`
      border-radius: 0;
      border-right-width: 0 !important;

      &:first-of-type {
        border-top-left-radius: ${props.theme.layout.borderRadiusButton};
        border-bottom-left-radius: ${props.theme.layout.borderRadiusButton};
      }

      &:last-of-type {
        border-top-right-radius: ${props.theme.layout.borderRadiusButton};
        border-bottom-right-radius: ${props.theme.layout.borderRadiusButton};
        border-right-width: 1px !important;
      }
    `};

  ${props =>
    props.isSpaced &&
    css`
      margin-left: 2.5px;
      margin-right: 2.5px;
    `};

  ${props =>
    props.success &&
    props.loaded &&
    css`
      background-color: ${props.theme.colors.green500} !important;
    `};

  ${props =>
    props.disabled &&
    css`
      background-color: ${props.theme.colors.grey300};
      color: ${props.theme.colors.grey400};
      cursor: default;
    `};
`;

const PrimaryButton = styled(CoreButton)`
  ${props =>
    !props.disabled &&
    css`
      background-color: ${props.theme.colors.green500};
      color: #fff;

      &:hover {
        background-color: ${props.theme.colors.green400};
      }

      &:active {
        background-color: ${props.theme.colors.green600};
      }

      &:focus {
        box-shadow: 0 0 0 3px ${props.theme.colors.green300};
      }
    `};
`;

const SecondaryButton = styled(CoreButton)`
  ${props =>
    !props.disabled &&
    css`
      background-color: ${props.theme.colors.blue500};
      color: #fff;

      &:hover {
        background-color: ${props.theme.colors.blue400};
      }

      &:active {
        background-color: ${props.theme.colors.blue600};
      }

      &:focus {
        box-shadow: 0 0 0 3px ${props.theme.colors.blue300};
      }
    `};
`;

const TertiaryButton = styled(CoreButton)`
  ${props =>
    props.subdued || props.active
      ? css`
          background-color: ${props.theme.colors.grey300};
          border: 1px solid ${props.theme.colors.grey400};
          color: ${props.theme.colors.navy700};
        `
      : !props.disabled &&
        css`
          background-color: #fff;
          border: 1px solid ${props.theme.colors.grey400};
          color: ${props.theme.colors.navy700};

          &:hover {
            border-color: ${props.theme.colors.grey400};
            background-color: ${props.theme.colors.grey200};
          }

          &:active {
            background-color: ${props.theme.colors.grey200};
          }

          &:focus {
            box-shadow: 0 0 0 3px ${props.theme.colors.grey300};
          }
        `};
`;

const DeleteButton = styled(CoreButton)`
  ${props =>
    !props.disabled &&
    css`
      border-style: solid;
      border-width: 1px;
      border-color: ${props.theme.colors.pink500};
      background-color: #fff;
      color: ${props.theme.colors.pink500};

      &:hover {
        background-color: ${props.theme.colors.pink500};
        border-color: ${props.theme.colors.pink500};
        color: #fff;
      }

      &:focus {
        box-shadow: 0 0 0 3px ${props.theme.colors.pink300};
      }

      &:active {
        background-color: ${props.theme.colors.pink600};
        border-color: ${props.theme.colors.pink600};
        color: #fff;
      }
    `};
`;

const ButtonLoadingSpinner = styled.div`
  left: 50%;
  pointer-events: none;
  position: absolute;
  top: -150%;
  transform: translate(-50%, -50%) rotate(0);
  transition: 0.4s top cubic-bezier(0.175, 0.885, 0.32, 1.275);
  opacity: ${props => (props.isVisible ? 1 : 0)};
  top: ${props => (props.isVisible ? '50%' : '-150%')};
`;

const ButtonMessage = styled(Flex)`
  height: 100%;
  left: 0;
  opacity: ${props => (props.isHidden ? 0 : 1)};
  top: ${props => (props.isHidden ? '100%' : 0)};
  position: absolute;
  text-align: center;
  top: 0;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const ButtonPlaceholderMessage = styled(ButtonMessage)`
  opacity: 0;
  visibility: hidden;
  position: relative;
`;

const ButtonSuccessMessage = styled(ButtonMessage)`
  transition: 0.4s top cubic-bezier(0.175, 0.885, 0.32, 1.275);
  opacity: ${props => (props.isVisible ? 1 : 0)};
  top: ${props => (props.isVisible ? 0 : '100%')};
`;

const getButtonType = type => {
  switch (type) {
    case 'primary':
      return PrimaryButton;
    case 'secondary':
      return SecondaryButton;
    case 'tertiary':
      return TertiaryButton;
    case 'delete':
      return DeleteButton;
    default:
      return TertiaryButton;
  }
};

type TProps = {
  children?: any,
  message?: string,
  role?: string,
  disabled?: boolean,
  icon?: string,
  iconBorder?: boolean, // deprecate
  loneIcon?: boolean,
  wide?: boolean,
  size?: 'small' | 'medium' | 'large' | 'extra-large',
  theme?: 'primary' | 'secondary' | 'tertiary' | 'delete',
  grouped?: boolean,
  spacing?: boolean,
  flex?: boolean,
  active?: boolean,
  loading?: boolean,
  success?: boolean,
  middle?: boolean,
  onClick?: Function,
  loadedTimeout?: number,
  component?: 'string' | React.Node,
  name?: string,
  type?: string,
  mayGetLong?: boolean, // deprecate
  subdued?: boolean,
};

export default class Button extends PureComponent<TProps> {
  static defaultProps = {
    role: 'button',
    size: 'large',
    theme: 'primary',
    iconBorder: false,
    wide: false,
    loading: false,
    loneIcon: false,
    loadedTimeout: 600,
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

  componentWillReceiveProps(nextProps: TProps) {
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
      component,
      className,
      middle,
      style,
      mayGetLong,
      subdued,
      loadedTimeout: _IGNORED,
      readonly: __IGNORED,
      editable: ___IGNORED,
      iconBorder: ____IGNORED,
      ...otherProps
    } = this.props;

    const {loaded} = this.state;

    const ButtonComponent = getButtonType(theme);

    const iconElement = isString(icon) ? (
      <Icon
        marginRight={loneIcon ? 0 : 8}
        marginLeft={loneIcon ? 0 : -8}
        size={!!size ? BUTTON_SIZING[size].iconSize : 18}
      >
        {icon}
      </Icon>
    ) : (
      icon
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
      <ButtonComponent
        style={style}
        component={component ? component : 'button'}
        role={role}
        name={name}
        type={type}
        size={size}
        wide={wide}
        success={success}
        loading={loading}
        loaded={loaded}
        disabled={success ? false : disabled || loading}
        active={!!active}
        subdued={!!subdued}
        loneIcon={loneIcon}
        flex={flex}
        className={className}
        onClick={handleClick}
        // ButtonGroup props
        isSpaced={!!spacing}
        isGrouped={!!grouped}
        isMiddle={middle}
        {...otherProps}
      >
        <ButtonPlaceholderMessage>
          {iconElement}
          {children}
        </ButtonPlaceholderMessage>
        <ButtonMessage
          name="message"
          isHidden={loading || loaded}
          title={mayGetLong ? children : undefined}
        >
          {iconElement}
          {children}
        </ButtonMessage>
        <ButtonSuccessMessage isVisible={loaded}>
          {iconElement}
          {message}
        </ButtonSuccessMessage>
        <ButtonLoadingSpinner isVisible={loading}>
          <LoadingSpinner size="small" />
        </ButtonLoadingSpinner>
      </ButtonComponent>
    );
  }
}
