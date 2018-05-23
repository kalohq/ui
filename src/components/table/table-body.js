/* @flow */
import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

const StyledTableBody = styled('tbody')`display: table-row-group;`;

export class TableBody extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  static childContextTypes = {
    table: PropTypes.object,
  };

  getChildContext() {
    return {
      table: {
        body: true,
      },
    };
  }

  render() {
    return <StyledTableBody {...this.props} />;
  }
}

export default TableBody;
