/* @flow */
import React from 'react';
import {get} from 'lodash';
import styled, {css} from 'react-emotion';
import {compose, getContext, setDisplayName, withProps} from 'recompose';
import PropTypes from 'prop-types';
import Icon from '../icon';
import {pickStyles} from '../../utils/style';
import {CELL_PADDING} from './constants';

const outerBorder = props =>
  props.tableBorder ? props.theme.table.tableDefaultBorder : 'none';

const StyledTableCell = styled('td')`
  display: table-cell;
  color: ${props => props.theme.colors.navy900};
  font-weight: 300;
  text-align: left;
  padding: ${CELL_PADDING};
  font-size: 14px;
  min-height: 40px;
  background-color: ${props => props.theme.colors.white};

  tbody > tr:not(:last-child) > & {
    border-bottom: ${props => props.theme.table.tableDefaultBorder};
  }

  tbody > tr:last-child > & {
    border-bottom: ${outerBorder};
  }

  &:first-child {
    border-left: ${outerBorder};
  }

  &:last-child {
    border-right: ${outerBorder};
  }

  tbody > tr:first-child & {
    border-top: ${outerBorder};
  }

  tbody > tr:first-child &:first-child {
    border-top-left-radius: ${props => props.theme.input.inputBorderRadius};
  }

  tbody > tr:first-child &:last-child {
    border-top-right-radius: ${props => props.theme.input.inputBorderRadius};
  }

  tbody > tr:last-child &:first-child {
    border-bottom-left-radius: ${props => props.theme.input.inputBorderRadius};
  }

  tbody > tr:last-child &:last-child {
    border-bottom-right-radius: ${props => props.theme.input.inputBorderRadius};
  }
`;

const StyledTableHeaderCell = styled('th')`
  display: table-cell;
  color: ${props => props.theme.colors.navy900};
  font-weight: 300;
  text-align: left;
  padding: ${CELL_PADDING};
  font-size: 14px;
  min-height: 40px;
  color: ${props => props.theme.colors.grey300};

  ${props =>
    props.sortable &&
    css`
      cursor: pointer;
    `};

  ${props =>
    props.active &&
    css`
      font-weight: 400 !important;
    `};
`;

type TTableCellProps = {
  children: any,
  id?: string,
  order?: 'asc' | 'desc',
  orderBy?: string,
  // Provided via context
  table: {
    head?: boolean,
    body?: boolean,
    footer?: boolean,
    border?: boolean,
  },
  // Derived from props
  header: boolean,
  active: boolean,
  sortable: boolean,
  outerBorder: boolean,
};

export function TableCell(props: TTableCellProps) {
  const {active, children, header, order, ...otherProps} = props;
  const style = pickStyles(otherProps);
  const icon = `keyboard_arrow_${order === 'desc' ? 'down' : 'up'}`;
  const Component = header ? StyledTableHeaderCell : StyledTableCell;

  return (
    <Component {...props} style={style}>
      {children}
      {active && <Icon>{icon}</Icon>}
    </Component>
  );
}

export default compose(
  setDisplayName('TableCell'),
  getContext({
    table: PropTypes.shape({
      head: PropTypes.bool,
      body: PropTypes.bool,
      footer: PropTypes.bool,
      border: PropTypes.bool,
    }),
  }),
  withProps(props => {
    const header = !!props.table && !!props.table.head;
    const active =
      header && !!props.id && !!props.orderBy && props.id === props.orderBy;
    const sortable = !!props.orderBy;
    const tableBorder = !!get(props, ['table', 'border']);
    return {header, active, sortable, tableBorder};
  })
)(TableCell);
