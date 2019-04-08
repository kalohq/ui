/* @flow */
import React from 'react';
import styled from 'react-emotion';
import {compose, getContext, withProps, setDisplayName} from 'recompose';
import PropTypes from 'prop-types';

const StyledTableRow = styled('tr')`
  display: table-row;
`;

type TTableRowProps = {
  children: React$Node,
  // Provided by context
  table: {
    head?: boolean,
    body?: boolean,
    footer?: boolean,
  },
};

export function TableRow(props: TTableRowProps) {
  return <StyledTableRow {...props} />;
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
