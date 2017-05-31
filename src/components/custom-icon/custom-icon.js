import React from 'react';
import PropTypes from 'prop-types';
import PureComponent from 'react-pure-render/component';
import cx from 'classnames';
import {Inline} from 'components/layout';

import styles from './custom-icon.css';

/**
 * CustomIcon
 *
 * A component for displaying our custom icons.
 *
 * Note: There is a pattern for updating and creating new svg
 * files to ensure they are correctly positioned. See this
 * sketch file: https://drive.google.com/open?id=0B_uaTXi0frXuT2dSZEZGb2tiU1E
 *
 */
export default class CustomIcon extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOf([
      'listed',
      'genie',
      'genie-animated',
      'drive',
      'blog',
      'careers',
      'company',
      'company-group',
      'get-listed',
      'happy-customers',
      'individual-1',
      'individual-2',
      'manage',
      'manage-freelancers',
      'message',
      'onboarding',
      'payment',
      'philosophy',
      'pricing',
      'problem',
      'product',
      'toptal',
      'bullseye',
      'team',
      'toptal',
      'onboard-add',
      'onboard-import',
      'onboard-invite',
      'onboard-linktolist',
      'onboard-complete',
      'email',
      'invoice',
      'drag',
    ]),
    size: PropTypes.oneOf([
      14,
      16,
      18,
      20,
      22,
      24,
      30,
      36,
      48,
      58,
      72,
      120,
      140,
    ]),
    className: PropTypes.string,
  };
  static defaultProps = {
    size: 24,
    children: false,
    className: false,
  };

  render() {
    const {size, children, className, ...otherProps} = this.props;

    return (
      <Inline
        component="i"
        verticalAlign="middle"
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
        className={cx(
          {
            [styles.root]: true,
            [styles[`icon-${children}`]]: true,
          },
          className
        )}
        {...otherProps}
      />
    );
  }
}
