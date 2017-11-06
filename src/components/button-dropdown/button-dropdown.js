/* @flow */
import React from 'react';
import cx from 'classnames';
import type {List} from 'immutable';

import Text from '../text';
import Icon from '../icon';
import PaperMenu, {PaperMenuItem} from '../paper-menu';

import styles from './button-dropdown.css';

type Props = {
  children?: string,
  size?: 'small' | 'medium' | 'large' | 'x-large',
  theme?: 'tertiary' | 'primary' | 'secondary',
  selectItems: List<{
    title: string,
    onClick?: Function,
  }>,
  open?: boolean,
  onClick?: Function,
};

export default function ButtonDropdown(props: Props) {
  const {
    children,
    size = 'large',
    theme = 'tertiary',
    selectItems,
    open,
    onClick,
  } = props;

  return (
    <div
      className={cx({
        [styles.root]: true,
        [styles[`size-${size}`]]: true,
        [styles[`theme-${theme}`]]: true,
      })}
      onClick={onClick}
    >
      <Text weight="semi-bold">{children}</Text>
      {selectItems ? <Icon>keyboard_arrow_down</Icon> : null}
      {selectItems ? (
        <div className={styles.menu}>
          <PaperMenu open={open} origin="top">
            {selectItems.map(item => (
              <PaperMenuItem key={item.title}>{item.title}</PaperMenuItem>
            ))}
          </PaperMenu>
        </div>
      ) : null}
    </div>
  );
}
