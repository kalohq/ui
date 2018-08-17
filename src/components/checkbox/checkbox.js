/* @flow */
import React, {PureComponent} from 'react';
import {isString, uniqueId} from 'lodash';
import cx from 'classnames';

import Text from '../text';
import {Box} from '../layout';
import {TEXT_SIZE} from '../text/constants';
import {pickStyles} from '../../utils/style';

import coreStyles from './checkbox.core.css';

type TProps = {
  size?: 'small' | 'medium' | 'large',
  checked?: ?boolean,
  indeterminate?: ?boolean,
  disabled?: boolean,
  label?: string | React$Node,
  onClick?: Function,
  name?: string,
};

export default class Checkbox extends PureComponent<TProps> {
  setIndeterminateState: Function;
  setCheckboxRef: Function;
  checkboxElement: HTMLElement;

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

  setCheckboxRef(element: HTMLElement) {
    this.checkboxElement = element;
  }

  setIndeterminateState(props: TProps) {
    if (this.checkboxElement && props.indeterminate) {
      // $FlowFixMe
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
      <Box
        className={_classNames}
        data-test="ui-checkbox"
        name={name}
        {...pickStyles(otherProps)}
      >
        <input
          type="checkbox"
          id={id}
          checked={checked}
          disabled={disabled}
          ref={this.setCheckboxRef}
          defaultChecked={checked}
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
}
