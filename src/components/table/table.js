/* @flow */
import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

const StyledTable = styled('table')`
  display: table;
  table-layout: fixed;
  width: 100%;
  border-spacing: 0;
`;

export class Table extends React.Component {
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
    return <StyledTable cellSpacing={0} {...this.props} />;
  }
}

export default Table;
