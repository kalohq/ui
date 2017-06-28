/* @flow */
import React from 'react';
import {pickStyles} from 'utils/style';
import {isNull} from 'lodash';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import cx from 'classnames';
import {Flex, Box, Inline} from '../layout';
import Text from '../text';
import {RADIO_SIZES} from './constants';
import type {RADIO_SIZE} from './constants';
import styles from './radio.css';

type RadioProps = {
  checked: ?boolean,
  readonly: boolean,
  size: RADIO_SIZE,
  label: string,
  onClick?: Function,
};

export function Radio(props: RadioProps) {
  const {
    checked = false,
    size = 'medium',
    readonly = false,
    label,
    onClick,
    ...otherProps
  } = props;

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      onClick={onClick}
      className={cx({
        [styles.root]: true,
        [styles.readonly]: readonly,
      })}
    >
      <Box
        position="relative"
        width={RADIO_SIZES.properties[size].size}
        height={RADIO_SIZES.properties[size].size}
        className={cx({
          [styles.radio]: true,
          [styles.checked]: checked,
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
        ? <Text marginLeft={10} size="small" color="grey" component="label">
            {label}
          </Text>
        : null}
    </Flex>
  );
}

export default Radio;
