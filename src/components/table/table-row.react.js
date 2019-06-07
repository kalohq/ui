import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import {compose, getContext, withProps, setDisplayName} from 'recompose';

import {UIBase} from '../layout';
import styles from './table.module.css';

const TableRow = props => {
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
};

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
  // Provided by context
  table: PropTypes.shape({
    head: PropTypes.bool,
    body: PropTypes.bool,
    footer: PropTypes.bool,
  }),
};

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
