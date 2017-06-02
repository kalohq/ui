import React from 'react';
import {storiesOf} from '@storybook/react';

import StarRating from '../star-rating';

const examples = [
  {
    title: 'with a rating of 4',
    description: 'The star rating will always show 5 stars, with the score prop setting the number of stars to be filled',
    render: () => {
      return <StarRating score={4} />;
    },
  },
  {
    title: 'with a rating of 3 and purple color',
    description: 'A standard star rating',
    render: () => {
      return <StarRating score={3} color="purple" />;
    },
  },
];

examples.forEach(example => {
  storiesOf(
    'StarRating',
    module,
  ).addWithInfo(example.title, example.description, () => example.render());
});
