/* @flow */
import React from 'react';

import Lozenge from '../lozenge';

const STATUS_MAP = {
  red: 'Declined',
  purple: 'Awaiting approval',
  orange: 'Pending',
  green: 'Complete',
  blue: 'In progress',
};

export const examples = [
  {
    title: 'Lozenges',
    description:
      'Lozenges are used to provide users with a quick way to check the status of a resource',
    render: () => (
      <span>
        {Object.keys(STATUS_MAP).map(variant => (
          <Lozenge variant={variant} marginRight={4} key={variant}>
            {STATUS_MAP[variant]}
          </Lozenge>
        ))}
      </span>
    ),
    html: () => (
      <span>
        {Object.keys(STATUS_MAP).map(variant => (
          <span
            className={`ui-lozenge ui-lozenge--variant-${variant}`}
            key={variant}
          >
            {STATUS_MAP[variant]}
          </span>
        ))}
      </span>
    ),
  },
  {
    title: 'Truncation',
    description: 'Lozenges will be truncated when they reach more than 180px',
    render: () => (
      <Lozenge>This is a really long lozenge that will be truncated </Lozenge>
    ),
  },
];
