/* @flow */
import * as React from 'react';
import styled, {css} from 'react-emotion';
import PureComponent from 'react-pure-render/component';

import {Block} from '../layout';
import Text from '../text';
import Icon from '../icon';

const StyledSelect = styled(Block)`
  width: 100%;
  position: relative;
  border: ${props => props.theme.input.inputDefaultBorder};
  border-radius: ${props => props.theme.input.inputBorderRadius};
  background-color: ${props => props.theme.colors.white};
  height: 40px;
  text-align: ${props => (props.center ? 'center' : 'left')};
  cursor: pointer;

  &:hover {
    border: ${props => props.theme.input.inputHoverBorder};
  }

  ${props =>
    props.open &&
    css`
      border-color: ${props.theme.colors.grey500};
      background-color: ${props.theme.colors.grey200};
    `};

  ${props =>
    props.readonly &&
    css`
      background-color: ${props.theme.input.inputReadonlyBackground};
      border: ${props.theme.input.inputReadonlyBorder};
      cursor: default;
      color: ${props.theme.input.inputReadonlyColor};

      &:hover {
        border: ${props.theme.input.inputReadonlyBorder};
      }
    `};

  ${props =>
    props.disabled &&
    css`
      background-color: ${props.theme.input.inputDisabledBackground};
      border: ${props.theme.input.inputDisabledBorder};
      cursor: not-allowed;
      color: ${props.theme.input.inputDisabledColor};

      &:hover {
        border: ${props.theme.input.inputDisabledBorder};
      }
    `};
`;

const StyledIconChevron = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  transform: rotate(90deg);

  ${props => props.open && css`transform: rotate(-90deg);`};
`;

const StyledIconClear = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  width: 28px;
  background-color: ${props => props.theme.colors.grey300};
  border-radius: ${props => props.theme.layout.borderRadius};
`;

const StyledSelectOptions = styled.div`
  border-radius: 4px;
  background: ${props => props.theme.colors.white};
  width: 100%;
  display: none;
  position: absolute;
  overflow-y: auto;
  overflow-x: hidden;
  height: 0px;
  z-index: 300;
  border: 1px solid ${props => props.theme.colors.grey400};
  box-shadow: 0 3px 6px rgba(140, 140, 140, 0.08);

  ${props =>
    props.open &&
    css`
      display: block;
      width: calc(100% + 2px);
      left: -1px;
      top: calc(100% + 4px);
      min-height: 200px;
    `};
`;

const StyledOption = styled.div`
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.navy700};
    background: ${props => props.theme.colors.grey300};
    border-radius: 0;
    border: none;
  }

  ${props =>
    props.selected &&
    css`
      color: ${props.theme.colors.navy700};
      background: ${props.theme.colors.grey300};
      border-radius: 0;
      border: none;
    `};
`;

const StyledSelectSelected = styled.div`
  transition: all 0.15s linear;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px 10px;
  height: 40px;
`;
/**
 * The kalo generic select component
 */

type TProps = {
  children: React.Node,
  selection?: any,
  onSelect?: Function,
  /** Placeholder copy to show before a selection has been made */
  placeholder?: React.Node,
  nullable?: boolean,
  formatSelection?: Function,
  onBlur?: Function,
  /** Disables user interaction, but can still display a value */
  readonly?: boolean,
  /** Visually disables user interaction */
  disabled?: boolean,
  empty?: string,
};

export default class Select extends PureComponent {
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

  onToggle: Function;
  onSelect: Function;
  onClose: Function;
  onClear: Function;

  constructor(props: TProps) {
    super(props);

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
    this.props.onSelect(undefined);
    this.close();
    event.stopPropagation();
  }

  onSelect(value: SyntheticEvent<*>) {
    this.props.onSelect(value);
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
      editable: _IGNORED,
      ...otherProps
    } = this.props;

    const {open} = this.state;

    return (
      <StyledSelect
        readonly={readonly}
        disabled={disabled}
        open={open}
        {...otherProps}
      >
        <StyledSelectSelected
          onClick={readonly || disabled ? undefined : this.onToggle}
        >
          {!!selection ? (
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
          {(!readonly || !disabled) && (!!selection && nullable) ? (
            <StyledIconClear>
              <Icon
                size={18}
                onClick={this.onClear}
                color={readonly || disabled ? 'grey500' : 'navy700'}
              >
                clear
              </Icon>
            </StyledIconClear>
          ) : null}
          {(!readonly || !disabled) && (!selection || !nullable) ? (
            <StyledIconChevron open={open}>
              <Icon
                color={readonly || disabled ? 'grey500' : 'navy700'}
                size={24}
              >
                chevron_right
              </Icon>
            </StyledIconChevron>
          ) : null}
        </StyledSelectSelected>
        <StyledSelectOptions
          open={open}
          onClick={event => event.stopPropagation()}
        >
          {React.Children.map(
            children,
            child =>
              child ? (
                <StyledOption
                  key={child.key}
                  name={child.key}
                  selected={child.props.selected}
                  onClick={() => this.onSelect(child.props.value)}
                >
                  {child}
                </StyledOption>
              ) : null
          )}
          {!React.Children.count(children) ? <Text>{empty}</Text> : null}
        </StyledSelectOptions>
      </StyledSelect>
    );
  }
}
