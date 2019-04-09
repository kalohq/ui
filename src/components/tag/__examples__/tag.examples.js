/* @flow */
import React from 'react';

import Tag from '../';

const MockAvatar = ({className}) => (
  <div
    className={className}
    style={{
      width: 16,
      height: 16,
      borderRadius: '50%',
      backgroundImage:
        "url('https://randomuser.me/api/portraits/women/46.jpg')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
    }}
  />
);

export const examples = [
  {
    title: 'Standard tag',
    render: () => <Tag>A standard tag</Tag>,
    html: () => <span className="ui-tag">A standard tag</span>,
  },
  {
    title: 'Link tag',
    render: () => <Tag isLink={true}>A link tag</Tag>,
    html: () => (
      <a href="#" className="ui-tag ui-tag--link">
        A link tag
      </a>
    ),
  },
  {
    title: 'Avatar tag',
    render: () => (
      <Tag avatar={<MockAvatar className="ui-avatar" />}>An avatar tag</Tag>
    ),
    html: () => (
      <span className="ui-tag ui-tag--avatar">
        <MockAvatar className="ui-avatar" />
        An avatar tag
      </span>
    ),
  },
  {
    title: 'Removable tag',
    render: () => <Tag onRemove={() => {}}>Removable tag</Tag>,
    html: () => (
      <span className="ui-tag ui-tag--avatar ui-tag--removable">
        <MockAvatar className="ui-avatar" />
        An avatar tag
        <button className="ui-tag__remove">
          <svg width="12" height="12" aria-hidden="true">
            <use xlinkHref="#clear" />
          </svg>
        </button>
      </span>
    ),
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
