import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {parseStyleProps} from 'utils/style';

import PureComponent from 'react-pure-render/component';
import Icon from 'components/icon';

import styles from './heading.css';

const ICON_SIZE = {
  small: '14',
  medium: '14',
  large: '14',
  'extra-large': '24',
};

export default class Heading extends PureComponent {
  static propTypes = {
    number: PropTypes.oneOf(['1', '2', '3', '4']),
    weight: PropTypes.oneOf(['normal', 'semi-bold']),
    size: PropTypes.oneOf([
      'extra-extra-small',
      'extra-small',
      'small',
      'medium',
      'large',
      'extra-large',
    ]),
    margin: PropTypes.oneOf(['none', 'tiny', 'small', 'medium', 'large']),
    color: PropTypes.oneOf([
      'red',
      'blue',
      'dark-grey',
      'light-grey',
      'white',
      'grey',
    ]),
    align: PropTypes.oneOf(['center', 'left', 'right', 'none']),
    hover: PropTypes.oneOf(['underline', 'none']),
    flex: PropTypes.bool,
    multiline: PropTypes.bool,
    border: PropTypes.bool,
    children: PropTypes.node,
    icon: PropTypes.string,
    iconAfter: PropTypes.string,
    iconPadding: PropTypes.number,
  };

  static defaultProps = {
    number: '3',
    weight: 'normal',
    size: 'small',
    color: 'dark-grey',
    margin: 'none',
    flex: false,
    border: false,
    multiline: false,
    align: 'none',
    hover: 'none',
    icon: '',
    iconAfter: '',
    iconPadding: 10,
  };

  render() {
    const {
      number,
      weight,
      size,
      color,
      margin,
      children,
      multiline,
      border,
      flex,
      icon,
      iconAfter,
      iconPadding,
      align,
      hover,
      ...otherProps
    } = this.props;

    const DOMHeading = `h${number}`;
    const propStyle = otherProps.style;
    const {props, style} = parseStyleProps(otherProps);

    return (
      <DOMHeading
        className={cx({
          [styles.root]: true,
          [styles[`weight-${weight}`]]: true,
          [styles[`size-${size}`]]: true,
          [styles[`color-${color}`]]: true,
          [styles[`margin-${margin}`]]: true,
          [styles[`align-${align}`]]: true,
          [styles[`hover-${hover}`]]: true,
          [styles.multiline]: multiline,
          [styles.flex]: flex,
          [styles.border]: border,
        })}
        {...props}
        style={{...style, ...propStyle}}
      >
        {icon
          ? <Icon
              size={ICON_SIZE[size]}
              color="grey"
              paddingRight={iconPadding}
            >
              {icon}
            </Icon>
          : null}
        {children}
        {iconAfter
          ? <Icon size={ICON_SIZE[size]} color="grey" paddingLeft={iconPadding}>
              {iconAfter}
            </Icon>
          : null}
      </DOMHeading>
    );
  }
}
