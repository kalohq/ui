/* @flow */
import React from 'react';
import {pickStyles} from '../../utils/style';
import {isNull} from 'lodash';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import cx from 'classnames';
import {Flex, Box, Inline} from '../layout';
import Text from '../text';
import {RADIO_SIZES} from './constants';
import styles from './radio.css';

type RadioProps = {
  /** Is the radio button checked */
  checked?: ?boolean,
  /** Disables user interaction although can still be checked */
  readonly?: boolean,
  /** Changes the size of the radio */
  size?: 'small' | 'medium',
  /** Disables user interaction */
  disabled?: boolean,
  /** A label to display to the right of the radio button */
  label?: string,
  /** A function to call when a user clicks */
  onClick?: Function,
  /** A name to pass down to the DOM - useful for testing */
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
      role="radio"
      aria-checked={checked}
      aria-disabled={disabled}
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
        <ReactCSSTransitionGroup
          transitionName="t-scale"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {checked || isNull(checked) ? (
            <Inline
              position="absolute"
              className={cx({
                [styles.icon]: true,
              })}
            />
          ) : null}
        </ReactCSSTransitionGroup>
      </Box>
      {label ? (
        <Text marginLeft={10} size="small" color="navy700" component="label">
          {label}
        </Text>
      ) : null}
    </Flex>
  );
}

export default Radio;
