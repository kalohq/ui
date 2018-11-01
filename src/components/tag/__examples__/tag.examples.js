/* @flow */
import React from 'react';
import styled from 'react-emotion';

import Tag from '../tag';

const MockAvatar = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-image: url('https://randomuser.me/api/portraits/women/46.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const examples = [
  {
    title: 'Standard tag',
    render: () => <Tag>A standard tag</Tag>,
  },
  {
    title: 'Link tag',
    render: () => <Tag isLink={true}>A link tag</Tag>,
  },
  {
    title: 'Avatar tag',
    render: () => (
      <Tag avatar={<MockAvatar className="ui-avatar" />}>A link tag</Tag>
    ),
  },
  {
    title: 'Removable tag',
    render: () => <Tag onRemove={() => {}}>Removable tag</Tag>,
  },
  {
    title: 'Truncation',
    render: () => (
      <Tag onRemove={() => {}} avatar={<MockAvatar className="ui-avatar" />}>
        Removable tag that should be truncated
      </Tag>
    ),
  },
];
