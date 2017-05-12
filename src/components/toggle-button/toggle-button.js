import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {isString} from 'lodash';

import Icon from '../icon';

import styles from './toggle-button.css';

export default function ToggleButton(props) {
  const {selected, theme, icon} = {theme: 'default', icon: null, ...props};

  return (
    <div>
      <div
        className={cx({
          [styles.root]: true,
          [styles[theme]]: true,
          [styles.selected]: selected,
        })}
      >
        <div className={styles.button} />
      </div>
      <div
        className={cx({
          [styles.icon]: true,
          [styles.selectedIcon]: selected === true,
          [styles.notSelectedIcon]: selected === false,
        })}
      >
        {isString(icon) ? <Icon size="16" theme="light">{icon}</Icon> : icon}
      </div>
    </div>
  );
}

ToggleButton.propTypes = {
  selected: PropTypes.bool.isRequired,
  icon: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.node,
  ]),
  theme: PropTypes.oneOf(['orange', 'default', null]),
};
