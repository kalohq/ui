/* @flow */
import * as React from 'react';
import cx from 'classnames';
import {uniqueId} from 'lodash';

import FieldLabel from '../field-label';

import coreStyles from './toggle-button.core.css';

export const HEIGHT = 26;

/**
 * ToggleButton
 *
 * A standard toggle button for toggling between two states
 */

type TProps = {
  /** Is the toggle toggled? */
  value?: boolean,
  /** A function to call when toggled */
  onChange: Function,
  value?: boolean,
  /** A label to display next to the toggle button  */
  label?: string,
  /** The overall visual theme of the button */
  theme?: 'default' | 'orange' | 'green' | 'orangeToGreen',
};

export default function ToggleButton(props: TProps) {
  const {
    value = false,
    theme = 'default',
    onChange,
    label,
    className,
    ...otherProps
  } = props;

  const id = uniqueId('toggleButton');

  const _classNames = cx(
    {
      [coreStyles['ui-toggle-button']]: true,
      [coreStyles[`ui-toggle-button--${theme}`]]: theme && theme !== 'default',
    },
    className
  );

  return (
    <div className={_classNames} data-test="ui-toggle-button" {...otherProps}>
      <input id={id} value={value} checked={value} type="checkbox" />
      <label htmlFor={id} onClick={() => onChange(!value)}>
        <div className="toggle" />
        {label ? (
          <FieldLabel marginLeft="medium" marginBottom={0}>
            {label}
          </FieldLabel>
        ) : null}
      </label>
    </div>
  );
}
