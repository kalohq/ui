import React from 'react';
import PropTypes from 'prop-types';
import {range} from 'lodash';
import cx from 'classnames';

import Icon from '../icon';
import {UIBase} from '../layout';

import styles from './star-rating.css';

const DEFAULT_COLOR = '#f07a7a';

function StarRating(props) {
  const {score = 0, className, color = DEFAULT_COLOR, ...otherProps} = props;

  return (
    <UIBase
      className={cx(
        {
          [styles.root]: true,
        },
        className
      )}
      {...otherProps}
    >
      {range(1, 6).map(star => {
        const isLit = Number(score) >= star;
        const isHalf = Number(score) < star && Number(score) > star - 1;
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
                [styles.half]: score ? isHalf : false,
              })}
              style={{color: isLit || isHalf ? color : false}}
            >
              <Icon size={20}>star</Icon>
            </span>
          </div>
        );
      })}
    </UIBase>
  );
}

StarRating.propTypes = {
  score: PropTypes.number.isRequired,
  className: PropTypes.oneOf(['PropTypes.string', 'PropTypes.object']),
  color: PropTypes.string,
};

export default StarRating;
