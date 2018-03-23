import React from 'react';

import LoadingSpinner from '../loading-spinner';

export const examples = [
  {
    title: 'LoadingSpinner',
    description: 'A standard loading spinner',
    render: () => <LoadingSpinner />,
  },
  {
    title: 'Different sizes',
    description:
      'There are three different sizes of loading spinner: small, medium, and large',
    render: () => (
      <span>
        <LoadingSpinner size="small" />
        <LoadingSpinner size="medium" />
        <LoadingSpinner size="large" />
      </span>
    ),
  },
];
