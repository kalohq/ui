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
      <span
        className="ui-avatar ui-avatar--medium ui-avatar--fallback-orange"
        data-fallback-initials="MF"
        aria-label="Mary Freelancer"
        role="img"
      >
        <span
          className="ui-avatar__avatar"
          style={{
            backgroundImage:
              'url(https://randomuser.me/api/portraits/women/21.jpg)',
          }}
        />
      </span>
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
    html: () => (
      <span>
        {['small', 'medium', 'large'].map(size => (
          <span
            key={size}
            className={`ui-avatar ui-avatar--${size} ui-avatar--fallback-orange`}
            data-fallback-initials="MF"
            aria-label="Mary Freelancer"
            role="img"
          >
            <span
              className="ui-avatar__avatar"
              style={{
                backgroundImage:
                  'url(https://randomuser.me/api/portraits/women/21.jpg)',
              }}
            />
          </span>
        ))}
      </span>
    ),
  },
  {
    title: 'Avatar fallback',
    description:
      'If no image (or a broken image resource) is passed in, then the avatar will fallback to displaying two initials',
    render: () => <Avatar initials="MF" src="https://kalohq.com" />,
    html: () => (
      <span
        className="ui-avatar ui-avatar--large ui-avatar--fallback-orange"
        data-fallback-initials="MF"
        aria-label="Mary Freelancer"
        role="img"
      >
        <span className="ui-avatar__avatar" />
      </span>
    ),
  },
];
