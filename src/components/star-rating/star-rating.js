/* @flow */
import React, {PureComponent} from 'react';
import {range} from 'lodash';
import cx from 'classnames';

import Icon from '../icon';
import {UIBase} from '../layout';

import styles from './star-rating.css';

type TProps = {
  score: Number,
  component?: string,
};

export default class StarRating extends PureComponent<TProps> {
  render() {
    const {score = null, ...otherProps} = this.props;

    return (
      <UIBase
        className={cx({
          [styles.root]: true,
        })}
        {...otherProps}
      >
        {range(1, 6).map(star => {
          const isLit = score >= star;
          const isHalf = score < star && score > star - 1;
          return (
            <div
              key={star}
              style={{width: 20, height: 20}}
              className={styles.star}
            >
              <span
                className={cx({
                  [styles.icon]: true,
                  [styles.background]: true,
                })}
              >
                <Icon size={20}>star</Icon>
              </span>
              <span
                className={cx({
                  [styles.icon]: true,
                  [styles.foreground]: true,
                  [styles.highlight]: score ? isLit || isHalf : false,
                  [styles.half]: score ? isHalf : false,
                })}
              >
                <Icon size={20}>star</Icon>
              </span>
            </div>
          );
        })}
      </UIBase>
    );
  }
}
