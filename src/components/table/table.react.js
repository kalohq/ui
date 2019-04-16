/* @flow */
import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import {UIBase} from '../layout';

import styles from './table.css';

export class Table extends React.Component<{
  children: React$Node,
  className?: string | Object,
}> {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  static childContextTypes = {
    table: PropTypes.object,
  };

  getChildContext() {
    return {
      table: {},
    };
  }

  render() {
    const {className, children, ...otherProps} = this.props;

    const _classNames = cx(
      {
        [styles['ui-table']]: true,
      },
      className
    );
    return (
      <UIBase
        component="table"
        className={_classNames}
        cellSpacing={0}
        {...otherProps}
      >
        {children}
      </UIBase>
    );
  }
}

export default Table;
