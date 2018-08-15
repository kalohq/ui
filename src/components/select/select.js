/* @flow */
import React, {PureComponent} from 'react';
import cx from 'classnames';

import Text from '../text';
import Icon from '../icon';

import coreStyles from './select.core.css';
import reactStyles from './select.react.css';

/**
 * The kalo generic select component
 */

type TProps = {
  children: React$Element<*>,
  selection?: any,
  onSelect?: Function,
  /** Placeholder copy to show before a selection has been made */
  placeholder?: React$Node,
  nullable?: boolean,
  formatSelection?: Function,
  onBlur?: Function,
  /** Disables user interaction, but can still display a value */
  readonly?: boolean,
  /** Visually disables user interaction */
  disabled?: boolean,
  empty?: string,
};

type TState = {
  open: boolean,
};

export default class Select extends PureComponent<TProps, TState> {
  static defaultProps = {
    onSelect: () => {},
    center: false,
    placeholder: 'Select…',
    empty: 'No items',
    nullable: true,
    formatSelection: selection => selection,
    readonly: false,
    disabled: false,
  };

  static displayName = 'Select';

  onToggle: Function;
  onSelect: Function;
  onClose: Function;
  onClear: Function;

  constructor() {
    super();

    this.state = {
      open: false,
    };

    this.onToggle = this.onToggle.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onClear = this.onClear.bind(this);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onClose);
  }

  open() {
    setTimeout(() => window.addEventListener('click', this.onClose), 300);
    this.setState({open: true});
  }

  close() {
    window.removeEventListener('click', this.onClose);
    this.setState({open: false});
    if (this.props.onBlur) this.props.onBlur();
  }

  onToggle() {
    if (this.props.readonly) return;
    if (this.state.open) {
      this.close();
    } else {
      this.open();
    }
  }

  onClose() {
    this.close();
  }

  onClear(event: SyntheticEvent<*>) {
    if (this.props.onSelect) this.props.onSelect(undefined);
    this.close();
    event.stopPropagation();
  }

  onSelect(value: SyntheticEvent<*>) {
    if (this.props.onSelect) this.props.onSelect(value);
    this.close();
  }

  render() {
    const {
      children,
      selection,
      placeholder,
      nullable,
      formatSelection,
      readonly,
      empty,
      disabled,
      ...otherProps
    } = this.props;

    const {open} = this.state;

    const _classNames = cx({
      [coreStyles['ui-select']]: true,
      [coreStyles['ui-select--open']]: open,
      [reactStyles['ui-select--open']]: open,
      [coreStyles['ui-select--disabled']]: disabled,
      [coreStyles['ui-select--read-only']]: readonly,
    });

    return (
      <div
        className={_classNames}
        open={open}
        data-test="ui-select"
        role="menu"
        aria-disabled={disabled}
        aria-expanded={open}
        {...otherProps}
      >
        <div
          className={reactStyles['ui-select__inner']}
          onClick={readonly || disabled ? undefined : this.onToggle}
        >
          {!!selection && formatSelection ? (
            <Text
              color={readonly || disabled ? 'navy500' : 'navy700'}
              weight="normal"
            >
              {formatSelection(selection)}
            </Text>
          ) : (
            <Text
              color={readonly || disabled ? 'navy500' : 'navy700'}
              weight="normal"
            >
              {placeholder}
            </Text>
          )}
          {(!readonly || !disabled) &&
          (!!selection && nullable) && (
            <div className={reactStyles['ui-select__clear']}>
              <Icon
                size={18}
                onClick={this.onClear}
                color={readonly || disabled ? 'grey500' : 'navy700'}
              >
                clear
              </Icon>
            </div>
          )}
          {(!readonly || !disabled) &&
          (!selection || !nullable) && (
            <div className={reactStyles['ui-select__chevron']}>
              <Icon
                color={readonly || disabled ? 'grey500' : 'navy700'}
                size={24}
              >
                chevron_right
              </Icon>
            </div>
          )}
        </div>
        <div
          className={reactStyles['ui-select__option-group']}
          open={open}
          onClick={event => event.stopPropagation()}
          data-test="ui-select__options"
        >
          {React.Children.map(
            children,
            child =>
              child && (
                <div
                  className={reactStyles['ui-select__option']}
                  key={child.key}
                  name={child.key}
                  selected={child.props.selected}
                  onClick={() => this.onSelect(child.props.value)}
                  data-test="ui-select__options__option"
                >
                  {child}
                </div>
              )
          )}
          {!React.Children.count(children) && <Text>{empty}</Text>}
        </div>
      </div>
    );
  }
}
