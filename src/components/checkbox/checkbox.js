/* @flow */
import React, {PureComponent} from 'react';
import {isString, uniqueId} from 'lodash';
import cx from 'classnames';

import Text from '../text';

import {TEXT_SIZE} from '../text/constants';

import coreStyles from './checkbox.core.css';

type TProps = {
  size?: 'small' | 'medium' | 'large',
  checked?: ?boolean,
  indeterminate?: ?boolean,
  disabled?: boolean,
  label?: string | React.Node,
  onClick?: Function,
  name?: string,
};

export default class Checkbox extends PureComponent {
  constructor(props: TProps) {
    super(props);

    this.checkboxElement = null;
    this.setIndeterminateState = this.setIndeterminateState.bind(this);

    this.setCheckboxRef = element => {
      this.checkboxElement = element;
    };
  }

  componentDidMount() {
    this.setIndeterminateState(this.props);
  }

  componentWillReceiveProps(newProps) {
    this.setIndeterminateState(newProps);
  }

  setIndeterminateState(props) {
    if (this.checkboxElement && props.indeterminate) {
      this.checkboxElement.indeterminate = true;
    }
  }

  render() {
    const {
      checked = false,
      disabled = false,
      size = 'medium',
      label,
      onClick,
      name,
      indeterminate: _IGNORED,
      ...otherProps
    } = this.props;

    const id = uniqueId('toggleButton');

    const _classNames = cx({
      [coreStyles['ui-checkbox']]: true,
      [coreStyles[`ui-checkbox--${size}`]]: size,
    });

    return (
      <div
        className={_classNames}
        data-test="ui-checkbox"
        name={name}
        {...otherProps}
      >
        <input
          type="checkbox"
          id={id}
          checked={checked}
          disabled={disabled}
          ref={this.setCheckboxRef}
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
      </div>
    );
  }
}
