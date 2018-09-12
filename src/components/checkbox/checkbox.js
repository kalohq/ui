/* @flow */
import React, {PureComponent} from 'react';
import {isString, uniqueId} from 'lodash';
import cx from 'classnames';

import {Box} from '../layout';
import {pickStyles} from '../../utils/style';

import coreStyles from './checkbox.core.css';

type TProps = {
  size?: 'small' | 'medium' | 'large',
  checked?: ?boolean,
  indeterminate?: ?boolean,
  disabled?: boolean,
  label?: string | React$Node,
  hint?: string,
  onClick?: Function,
  name?: string,
};

export default class Checkbox extends PureComponent<TProps> {
  setIndeterminateState: Function;
  setCheckboxRef: Function;
  checkboxElement: HTMLInputElement;

  constructor(props: TProps) {
    super(props);

    // $FlowFixMe
    this.checkboxElement = undefined;
    this.setIndeterminateState = this.setIndeterminateState.bind(this);

    this.setCheckboxRef = this.setCheckboxRef.bind(this);
  }

  componentDidMount() {
    this.setIndeterminateState(this.props);
  }

  componentWillReceiveProps(newProps: TProps) {
    this.setIndeterminateState(newProps);
  }

  setCheckboxRef(element: HTMLInputElement) {
    this.checkboxElement = element;
  }

  setIndeterminateState(props: TProps) {
    if (this.checkboxElement) {
      if (props.indeterminate && !props.checked) {
        this.checkboxElement.indeterminate = true;
      } else {
        this.checkboxElement.indeterminate = false;
      }
    }
  }

  render() {
    const {
      checked = false,
      disabled = false,
      size = 'medium',
      label,
      hint,
      onClick,
      name,
      indeterminate: _IGNORED,
      ...otherProps
    } = this.props;

    const id = uniqueId('checkbox');

    const _classNames = cx({
      [coreStyles['ui-checkbox']]: true,
      [coreStyles[`ui-checkbox--${size}`]]: size,
    });

    return (
      <Box
        className={_classNames}
        data-test="ui-checkbox"
        name={name}
        {...pickStyles(otherProps)}
      >
        <input
          type="checkbox"
          id={id}
          disabled={disabled}
          ref={this.setCheckboxRef}
          checked={checked}
          onChange={() => {}}
        />
        <label htmlFor={id} onClick={!disabled && onClick}>
          {label && isString(label) ? (
            <div className={coreStyles['ui-checkbox__label-group']}>
              <span className={coreStyles['ui-checkbox__label']}>
                Stay up to date
              </span>
              {hint && (
                <span className={coreStyles['ui-checkbox__hint']}>{hint}</span>
              )}
            </div>
          ) : (
            label && label
          )}
        </label>
      </Box>
    );
  }
}
