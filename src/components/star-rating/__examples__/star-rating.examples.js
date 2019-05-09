import React from 'react';

import StarRating from '../';

export const examples = [
  {
    title: 'Star rating',
    description: '',
    render: () => <StarRating score={5} />,
  },
  {
    title: 'Star rating with half score',
    render: () => <StarRating score={3.5} color="blue" />,
  },
];
