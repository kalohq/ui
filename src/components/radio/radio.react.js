/* @flow */
import * as React from 'react';
import {isString, uniqueId} from 'lodash';
import cx from 'classnames';

import {Box} from '../layout';
import {pickStyles} from '../../utils/style';

import styles from './radio.module.css';

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
  /** A secondary label to display under the label */
  hint?: string,
};

export default function Radio(props: RadioProps) {
  const {
    checked = false,
    size = 'medium',
    disabled,
    label,
    hint,
    onClick,
    name,
    ...otherProps
  } = props;

  const id = uniqueId('radio');

  const _classNames = cx({
    [styles['ui-radio']]: true,
    [styles[`ui-radio--${size}`]]: size,
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
          <div className={styles['ui-radio__label-group']}>
            <span className={styles['ui-radio__label']}>{label}</span>
            {hint && <span className={styles['ui-radio__hint']}>{hint}</span>}
          </div>
        ) : (
          label && label
        )}
      </label>
    </Box>
  );
}
