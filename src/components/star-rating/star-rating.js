import React from 'react';
import PropTypes from 'prop-types';
import PureComponent from 'react-pure-render/component';
import {range} from 'lodash';
import cx from 'classnames';

import Icon from 'components/icon';
import List from 'components/list';

import styles from './star-rating.css';

export default class StarRating extends PureComponent {
  static propTypes = {
    score: PropTypes.number,
    size: PropTypes.oneOf(['18', '24', '36', '48']),
    color: PropTypes.oneOf(['blue', 'purple', 'navy']).isRequired,
    component: PropTypes.string.isRequired,
  };

  static defaultProps = {
    score: null,
    size: '24',
    component: 'div',
    color: 'blue',
  };

  render() {
    const {component: Component, score, size, color} = this.props;

    return (
      <Component
        className={cx({
          [styles.root]: true,
          [styles[`color-${color}`]]: true,
        })}
      >
        <List type="horizontal-flex" spaced="small">
          {range(1, 6).map(star => {
            const isLit = score >= star;
            const isHalf = score < star && score > star - 1;
            return (
              <div
                key={star}
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                }}
                className={styles.star}
              >
                <span
                  className={cx({
                    [styles.icon]: true,
                    [styles.background]: true,
                  })}
                >
                  <Icon size={size}>
                    star
                  </Icon>
                </span>
                <span
                  className={cx({
                    [styles.icon]: true,
                    [styles.foreground]: true,
                    [styles.highlight]: score ? isLit || isHalf : false,
                    [styles.half]: score ? isHalf : false,
                  })}
                >
                  <Icon size={size}>
                    star
                  </Icon>
                </span>
              </div>
            );
          })}
        </List>
      </Component>
    );
  }
}
