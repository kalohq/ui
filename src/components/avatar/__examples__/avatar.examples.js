/* @flow */
import React from 'react';

import Avatar from '../avatar';

export const examples = [
  {
    title: 'Standard Avatar',
    render: () => (
      <Avatar src="https://randomuser.me/api/portraits/women/21.jpg" />
    ),
    html: () => (
      <figure className="ui-avatar ui-avatar--medium">
        <img
          className="ui-avatar__avatar"
          src="https://randomuser.me/api/portraits/women/21.jpg"
        />
      </figure>
    ),
  },
  {
    title: 'Avatar sizes',
    render: () => (
      <span>
        <Avatar
          src="https://randomuser.me/api/portraits/women/21.jpg"
          size="small"
        />
        <Avatar
          src="https://randomuser.me/api/portraits/women/21.jpg"
          size="medium"
        />
        <Avatar
          src="https://randomuser.me/api/portraits/women/21.jpg"
          size="large"
        />
      </span>
    ),
  },
];
