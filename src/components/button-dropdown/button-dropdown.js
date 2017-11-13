/* @flow */
import * as React from 'react';
import cx from 'classnames';
import type {List} from 'immutable';
import PureComponent from 'react-pure-render/component';

import Icon from '../icon';
import PaperMenu, {PaperMenuItem} from '../paper-menu';
import Checkbox from '../checkbox';

import styles from './button-dropdown.css';

type Props = {
  children?: string,
  size?: 'small' | 'medium' | 'large' | 'x-large',
  theme?: 'tertiary' | 'primary' | 'secondary',
  selectItems: List<{
    title: string,
    onClick?: Function,
    disabled?: boolean,
  }>,
  open?: boolean,
  onClick?: Function,
  onRequestClose?: Function,
  checkboxProps?: {
    size?: string,
    onClick?: Function,
  },
};

export default class ButtonDropdown extends PureComponent {
  onToggle: Function;
  onClose: Function;

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
      size = 'large',
      theme = 'tertiary',
      selectItems = [],
      checkboxProps,
    } = this.props;

    return (
      <div
        className={cx({
          [styles.root]: true,
          [styles[`size-${size}`]]: true,
          [styles[`theme-${theme}`]]: true,
          [styles.active]: this.state.open,
        })}
        onClick={this.onToggle}
      >
        {checkboxProps ? (
          <Checkbox
            size="large"
            marginRight={16}
            marginLeft={-4}
            {...checkboxProps}
          />
        ) : null}
        {children}
        {selectItems.length ? (
          <Icon marginLeft={8} marginRight={-8} size={20}>
            keyboard_arrow_down
          </Icon>
        ) : null}
        {selectItems.length ? (
          <div className={styles.menu}>
            <PaperMenu open={this.state.open} origin="top" width="100%">
              {selectItems.map(item => (
                <PaperMenuItem
                  disabled={item.disabled}
                  key={item.title}
                  onClick={() => {
                    this.onToggle();
                    item.onClick();
                  }}
                >
                  {item.title}
                </PaperMenuItem>
              ))}
            </PaperMenu>
          </div>
        ) : null}
      </div>
    );
  }
}