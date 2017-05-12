import React from 'react';
import PropTypes from 'prop-types';
import PureComponent from 'react-pure-render/component';
import cx from 'classnames';
import {parseStyleProps} from 'utils/style';

import styles from './icon.css';

const FONTELLO_ICONS = {
  linkedin: '\ue800',
  twitter: '\ue801',
  globe: '\ue802',
  website: '\ue802',
  instagram: '\ue803',
  youtube: '\ue804',
};

export default class Icon extends PureComponent {
  static propTypes = {
    children: PropTypes.string.isRequired,
    size: PropTypes.oneOf([
      '12',
      '14',
      '16',
      '18',
      '20',
      '23',
      '24',
      '26',
      '36',
      '48',
    ]),
    theme: PropTypes.oneOf([
      'light',
      'dark',
      'positive',
      'negative',
      'pending',
      'blue',
    ]),
    color: PropTypes.oneOf([
      'black',
      'red',
      'blue',
      'dark-blue',
      'dark-grey',
      'grey',
      'light-grey',
      'white-smoke',
      'white',
      'green',
      'orange',
      'teal',
      'none',
    ]),
    family: PropTypes.oneOf(['material', 'fontello']),
    weight: PropTypes.oneOf(['normal', 'heavy']),
    className: PropTypes.string,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    family: 'material',
    color: 'none',
    weight: 'normal',
  };

  render() {
    const {
      size,
      children,
      theme,
      family,
      weight,
      color,
      className,
      onClick,
      ...otherProps
    } = this.props;

    const {props, style} = parseStyleProps(otherProps);

    const rootClass = cx(
      {
        [styles.root]: true,
        [styles[`size-${size}`]]: !!size,
        [styles[`theme-${theme}`]]: !!theme,
        [styles[`family-${family}`]]: true,
        [styles[`weight-${weight}`]]: true,
        [styles[`color-${color}`]]: true,
        [styles.interactive]: !!onClick,
      },
      className
    );

    return (
      <i className={rootClass} onClick={onClick} style={style} {...props}>
        {family === 'fontello'
          ? FONTELLO_ICONS[children] || children
          : children}
      </i>
    );
  }
}
