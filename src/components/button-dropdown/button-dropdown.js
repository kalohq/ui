/* @flow */
import React, {PureComponent} from 'react';
import type {List} from 'immutable';
import {random} from 'lodash';
import styled from 'react-emotion';

import Icon from '../icon';
import PaperMenu, {PaperMenuItem} from '../paper-menu';
import Checkbox from '../checkbox';
import {Box} from '../layout';
import Button from '../button';

const StyledButtonDropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 2px);
  min-width: calc(100% + 4px);
  left: -2px;
`;

type Props = {
  children?: string,
  selectItems: List<{
    title: string,
    onClick?: Function,
    disabled?: boolean,
    component?: any,
    componentProps?: any,
  }>,
  open?: boolean,
  onClick?: Function,
  onRequestClose?: Function,
  checkboxProps?: {
    size?: string,
    onClick?: Function,
  },
  disabled?: boolean,
};

export default class ButtonDropdown extends PureComponent {
  onToggle: Function;
  onClose: Function;

  static displayName = 'ButtonDropdown';

  constructor(props: Props) {
    super(props);

    this.state = {
      open: false,
    };

    this.onToggle = this.onToggle.bind(this);
    this.wrapperRef = this.onToggle.bind(this);
    this.onClose = this.onClose.bind(this);
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
  }

  onToggle() {
    if (this.state.open) {
      this.close();
    } else {
      this.open();
    }
  }

  onClose() {
    this.close();
  }

  render() {
    const {
      children,
      disabled,
      selectItems = [],
      checkboxProps,
      ...otherProps
    } = this.props;

    // We pass in the PaperMenu via this prop to ensure that it
    // is not rendered twice in the Button (See Button - it
    // renders childern twice).

    const _singleRenderChildren = selectItems.length ? (
      <StyledButtonDropdownMenu>
        <PaperMenu open={this.state.open} origin="top" width="100%">
          {selectItems.map(item => (
            <PaperMenuItem
              disabled={item.disabled}
              key={random(20)}
              component={item.component}
              minWidth={item.minWidth}
              {...item.componentProps}
              onClick={
                !item.disabled ? (
                  () => {
                    if (item.onClick) item.onClick();
                    this.onToggle();
                  }
                ) : null
              }
            >
              {item.title}
            </PaperMenuItem>
          ))}
        </PaperMenu>
      </StyledButtonDropdownMenu>
    ) : null;

    return (
      <Button
        active={this.state.open}
        onClick={!disabled ? this.onToggle : null}
        disabled={disabled}
        singleRenderChildren={_singleRenderChildren}
        {...otherProps}
      >
        {checkboxProps ? (
          <Checkbox size="large" disabled={disabled} {...checkboxProps} />
        ) : null}
        {children ? (
          <Box marginLeft={checkboxProps ? 12 : 0}>{children}</Box>
        ) : null}
        {selectItems.length ? (
          <Icon marginLeft={8} marginRight={-8} size={20}>
            keyboard_arrow_down
          </Icon>
        ) : null}
      </Button>
    );
  }
}
