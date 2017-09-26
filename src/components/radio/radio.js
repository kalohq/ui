/* @flow */
import React from 'react';
import {pickStyles} from 'utils/style';
import {isNull} from 'lodash';
import CSSTransition from 'react-transition-group/CSSTransition';
import cx from 'classnames';
import {Flex, Box, Inline} from '../layout';
import Text from '../text';
import type {RADIO_SIZE} from './constants';
import {RADIO_SIZES} from './constants';
import styles from './radio.css';

type RadioProps = {
  checked?: ?boolean,
  readonly?: boolean,
  size?: RADIO_SIZE,
  disabled?: boolean,
  label: string,
  onClick: Function,
  name?: string,
};

export function Radio(props: RadioProps) {
  const {
    checked = false,
    size = 'medium',
    disabled,
    readonly,
    label,
    onClick,
    name,
    ...otherProps
  } = props;

  return (
    <Flex
      alignItems="center"
      justifyContent="start"
      onClick={readonly || disabled ? null : onClick}
      name={name}
      className={cx({
        [styles.root]: true,
        [styles.disabled]: disabled,
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
        <CSSTransition classNames="t-scale" timeout={{enter: 300, exit: 300}}>
          {checked || isNull(checked) ? (
            <Inline
              position="absolute"
              className={cx({
                [styles.icon]: true,
              })}
            />
          ) : null}
        </CSSTransition>
      </Box>
      {label ? (
        <Text marginLeft={10} size="small" color="grey" component="label">
          {label}
        </Text>
      ) : null}
    </Flex>
  );
}

export default Radio;
