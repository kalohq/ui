/* @flow */
import * as React from 'react';
import {isString, uniqueId} from 'lodash';
import cx from 'classnames';

import {TEXT_SIZE} from '../text/constants';
import Text from '../text';
import {Box} from '../layout';
import {pickStyles} from '../../utils/style';

import coreStyles from './radio.core.css';

type RadioProps = {
  /** Is the radio button checked */
  checked?: ?boolean,
  /** Changes the size of the radio */
  size?: 'small' | 'medium',
  /** Disables user interaction */
  disabled?: boolean,
  /** A label to display to the right of the radio button */
  label?: string | React.Node,
  /** A function to call when a user clicks */
  onClick?: Function,
  /** A name to pass down to the DOM - useful for testing */
  name?: string,
};

export default function Radio(props: RadioProps) {
  const {
    checked = false,
    size = 'medium',
    disabled,
    label,
    onClick,
    name,
    ...otherProps
  } = props;

  const id = uniqueId('toggleButton');

  const _classNames = cx({
    [coreStyles['ui-radio']]: true,
    [coreStyles[`ui-radio--${size}`]]: size,
  });

  return (
    <Box
      className={_classNames}
      data-test="ui-radio"
      name={name}
      {...pickStyles(otherProps)}
    >
      <input
        type="radio"
        id={id}
        checked={checked}
        disabled={disabled}
        onChange={() => {}}
      />
      <label htmlFor={id} onClick={!disabled && onClick}>
        {label && isString(label) ? (
          <Text
            marginLeft={10}
            size={size === 'small' ? TEXT_SIZE.EXTRA_SMALL : TEXT_SIZE.SMALL}
            color="navy600"
            multiline={true}
          >
            {label}
          </Text>
        ) : (
          label && label
        )}
      </label>
    </Box>
  );
}
