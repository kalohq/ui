/* @flow */
import React from 'react';
import styled from 'react-emotion';

import List from '../list';

const DemoSlab = styled.div`
  width: 100%;
  min-height: ${props => (props.height ? props.height : 46)}px;
  background-color: ${props => props.theme.colors.navy400};
  border: 1px solid ${props => props.theme.colors.navy500};
  border-radius: 4px;
`;

DemoSlab.displayName = 'DemoSlab';

export const examples = [
  {
    title: 'Grid List',
    description:
      'A list of cards in a 3 column grid. Any wrapping children will remain in the grid.',
    render: () => (
      <List type="grid" columns={3} spaced="medium" wrap={true}>
        <DemoSlab height={240} />
        <DemoSlab height={240} />
        <DemoSlab height={240} />
        <DemoSlab height={240} />
        <DemoSlab height={240} />
        <DemoSlab height={240} />
        <DemoSlab height={240} />
      </List>
    ),
  },
  {
    title: 'Horizontal List',
    description: 'A horizontal list',
    render: () => (
      <List type="horizontal" columns={3} spaced="medium">
        <DemoSlab />
        <DemoSlab />
        <DemoSlab />
      </List>
    ),
  },
  {
    title: 'Vertical List',
    description: 'A vertical list',
    render: () => (
      <List type="vertical" wrap={true} spaced="medium">
        <DemoSlab />
        <DemoSlab />
        <DemoSlab />
        <DemoSlab />
      </List>
    ),
  },
];
