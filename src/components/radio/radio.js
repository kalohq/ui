/* @flow */
import React from 'react';
import {pickStyles} from 'utils/style';
import {isNull} from 'lodash';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import cx from 'classnames';
import {Flex, Box, Inline} from '../layout';
import Text from '../text';

import styles from './radio.css';

type RadioProps = {
  checked: ?boolean,
  readonly: boolean,
  size: number,
  label: string,
};

export function Radio(props: RadioProps) {
  const {checked = false, size = 16, readonly, label, ...otherProps} = props;

  return (
    <Flex alignItems="center" justifyContent="center">
      <Box
        position="relative"
        width={size}
        height={size}
        className={cx({
          [styles.root]: true,
          [styles.checked]: checked,
          [styles.readonly]: readonly,
        })}
        {...pickStyles(otherProps)}
        {...otherProps}
      >
        <ReactCSSTransitionGroup
          transitionName="t-scale"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {checked || isNull(checked)
            ? <Inline
                position="absolute"
                className={cx({
                  [styles.icon]: true,
                })}
              />
            : null}
        </ReactCSSTransitionGroup>
      </Box>
      {label
        ? <Text marginLeft={10} size="small" color="grey">{label}</Text>
        : null}
    </Flex>
  );
}

export default Radio;
