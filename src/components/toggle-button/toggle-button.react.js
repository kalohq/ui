import * as React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {uniqueId} from 'lodash';

import FieldLabel from '../field-label';

import {cleanProps} from '../../utils/style';

import coreStyles from './toggle-button.css';

export const HEIGHT = 26;

/**
 * ToggleButton
 *
 * A standard toggle button for toggling between two states
 */

const ToggleButton = props => {
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
    <div
      className={_classNames}
      data-test="ui-toggle-button"
      {...cleanProps(otherProps)}
    >
      <input
        id={id}
        value={value}
        type="checkbox"
        checked={value}
        onChange={() => {}}
      />
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
};

ToggleButton.propTypes = {
  /** Is the toggle toggled? */
  value: PropTypes.bool,
  /** A function to call when toggled */
  onChange: PropTypes.func.isRequired,
  /** A label to display next to the toggle button  */
  label: PropTypes.string,
  /** The overall visual theme of the button */
  theme: PropTypes.oneOf(['default', 'orange', 'green', 'orangeToGreen']),
  /** A className to pass down */
  className: PropTypes.string,
};

export default ToggleButton;
