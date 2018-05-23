/* @flow */
import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

const StyledTableHead = styled('thead')`display: table-header-group;`;

export class TableHead extends React.Component<{children: React$Node}> {
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
    return <StyledTableHead {...this.props} />;
  }
}

export default TableHead;
