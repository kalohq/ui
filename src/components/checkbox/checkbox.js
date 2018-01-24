/* @flow */
import React from 'react';
import cx from 'classnames';

import {Flex, Box} from '../layout';
import Text from '../text';
import type {CHECKBOX_SIZE} from './constants';
import {CHECKBOX_SIZES} from './constants';

import {TEXT_SIZE} from '../text/constants';

import styles from './checkbox.css';

type CheckboxProps = {
  size?: CHECKBOX_SIZE,
  checked?: ?boolean,
  indeterminate?: ?boolean,
  readonly?: boolean,
  disabled?: boolean,
  label?: string,
  onClick?: Function,
  name?: string,
};

export default function Checkbox(props: CheckboxProps) {
  const {
    checked = false,
    disabled = false,
    indeterminate = false,
    size = 'medium',
    readonly,
    label,
    onClick,
    name,
    ...otherProps
  } = props;

  return (
    <Flex
      alignItems="center"
      justifyContent="flex-start"
      onClick={readonly || disabled ? null : onClick}
      name={name}
      role="checkbox"
      aria-checked={indeterminate ? 'mixed' : checked}
      className={cx({
        [styles.root]: true,
        [styles.readonly]: readonly,
        [styles.disabled]: disabled,
      })}
    >
      <Box
        position="relative"
        width={CHECKBOX_SIZES.properties[size].size}
        height={CHECKBOX_SIZES.properties[size].size}
        className={cx({
          [styles.checkbox]: true,
          [styles.checked]: checked,
          [styles.indeterminate]: indeterminate,
        })}
        {...otherProps}
      />
      {label ? (
        <Text
          marginLeft={10}
          size={size === 'small' ? TEXT_SIZE.EXTRA_SMALL : TEXT_SIZE.SMALL}
          color="navy600"
          multiline={true}
        >
          {label}
        </Text>
      ) : null}
    </Flex>
  );
}
