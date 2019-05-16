import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {random} from 'lodash';

import Icon from '../icon';
import PaperMenu, {PaperMenuItem} from '../paper-menu';
import Checkbox from '../checkbox';
import {Box} from '../layout';
import Button from '../button';

import styles from './button-dropdown.css';

export default class ButtonDropdown extends PureComponent {
  static propTypes = {
    children: PropTypes.string,
    selectItems: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        onClick: PropTypes.func,
        disabled: PropTypes.bool,
        component: PropTypes.any,
        componentProps: PropTypes.any,
        minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      })
    ),
    open: PropTypes.bool,
    onClick: PropTypes.func,
    onRequestClose: PropTypes.func,
    checkboxProps: PropTypes.shape({
      size: PropTypes.string,
      onClick: PropTypes.func,
    }),
    disabled: PropTypes.bool,
  };

  static displayName = 'ButtonDropdown';

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.onToggle = this.onToggle.bind(this);
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
      <div className={styles.root}>
        <PaperMenu open={this.state.open} origin="top" width="100%">
          {selectItems.map(item => (
            <PaperMenuItem
              disabled={item.disabled}
              key={random(20)}
              component={item.component}
              minWidth={item.minWidth}
              {...item.componentProps}
              onClick={
                !item.disabled
                  ? () => {
                      if (item.onClick) item.onClick();
                      this.onToggle();
                    }
                  : null
              }
            >
              {item.title}
            </PaperMenuItem>
          ))}
        </PaperMenu>
      </div>
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
