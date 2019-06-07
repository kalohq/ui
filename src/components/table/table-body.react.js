/* @flow */
import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import {UIBase} from '../layout';

import styles from './table.module.css';

type TProps = {
  border?: boolean,
  children: React$Node,
  className?: string | Object,
};

export class TableBody extends React.Component<TProps> {
  static propTypes = {
    border: PropTypes.bool,
    children: PropTypes.node.isRequired,
  };

  static childContextTypes = {
    table: PropTypes.object,
  };

  getChildContext() {
    const {border = true} = this.props;
    return {
      table: {
        body: true,
        border,
      },
    };
  }

  render() {
    const {className, children, ...otherProps} = this.props;

    const _classNames = cx(
      {
        [styles['ui-table-body']]: true,
      },
      className
    );
    return (
      <UIBase component="tbody" className={_classNames} {...otherProps}>
        {children}
      </UIBase>
    );
  }
}

export default TableBody;
