/* @flow */
import React from 'react';
import cx from 'classnames';
import {compose, getContext, withProps, setDisplayName} from 'recompose';
import PropTypes from 'prop-types';

import {UIBase} from '../layout';
import styles from './table.css';

type TTableRowProps = {
  children: React$Node,
  className?: string | Object,
  // Provided by context
  table: {
    head?: boolean,
    body?: boolean,
    footer?: boolean,
  },
};

export function TableRow(props: TTableRowProps) {
  const {children, className, ...otherProps} = props;

  const _classNames = cx(
    {
      [styles['ui-table-row']]: true,
    },
    className
  );

  return (
    <UIBase component="tr" className={_classNames} {...otherProps}>
      {children}
    </UIBase>
  );
}

export default compose(
  setDisplayName('TableRow'),
  getContext({
    table: PropTypes.shape({
      head: PropTypes.bool,
      body: PropTypes.bool,
      footer: PropTypes.bool,
    }),
  }),
  withProps(props => ({
    header: !!props.table && !!props.table.head,
  }))
)(TableRow);
