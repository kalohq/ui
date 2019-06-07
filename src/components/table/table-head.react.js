import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import {UIBase} from '../layout';

import styles from './table.module.css';

export class TableHead extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  static childContextTypes = {
    table: PropTypes.object,
  };

  getChildContext() {
    return {
      table: {
        head: true,
      },
    };
  }

  render() {
    const {children, className, ...otherProps} = this.props;

    const _classNames = cx(
      {
        [styles['ui-table-head']]: true,
      },
      className
    );

    return (
      <UIBase component="thead" className={_classNames} {...otherProps}>
        {children}
      </UIBase>
    );
  }
}

export default TableHead;
