/* @flow */
import React from 'react';
import cx from 'classnames';
import type {List} from 'immutable';

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

export default function ButtonDropdown(props: Props) {
  const {
    children,
    size = 'large',
    theme = 'tertiary',
    selectItems = [],
    open,
    onClick,
    onRequestClose,
    checkboxProps,
  } = props;

  return (
    <div
      className={cx({
        [styles.root]: true,
        [styles[`size-${size}`]]: true,
        [styles[`theme-${theme}`]]: true,
        [styles.active]: open,
      })}
    >
      {checkboxProps ? (
        <Checkbox
          size="large"
          marginRight={16}
          marginLeft={-4}
          {...checkboxProps}
        />
      ) : null}
      <span onClick={onClick}>
        {children}
        {selectItems.length ? (
          <Icon marginLeft={8} marginRight={-8} size={20}>
            keyboard_arrow_down
          </Icon>
        ) : null}
        {selectItems.length ? (
          <div className={styles.menu}>
            <PaperMenu
              open={open}
              origin="top"
              onRequestClose={onRequestClose}
              width="100%"
            >
              {selectItems.map(item => (
                <PaperMenuItem
                  disabled={item.disabled}
                  key={item.title}
                  onClick={item.onClick}
                >
                  {item.title}
                </PaperMenuItem>
              ))}
            </PaperMenu>
          </div>
        ) : null}
      </span>
    </div>
  );
}
