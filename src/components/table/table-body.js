/* @flow */
import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

const StyledTableBody = styled('tbody')`display: table-row-group;`;

export class TableBody extends React.Component<{
  border?: boolean,
  children: React$Node,
}> {
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
    return <StyledTableBody {...this.props} />;
  }
}

export default TableBody;
