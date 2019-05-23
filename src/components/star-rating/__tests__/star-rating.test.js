/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';

import StarRating from '../star-rating.react';

describe('StarRating', () => {
  test('should render properly', () => {
    const wrapper = renderer.create(<StarRating score={3.7} />).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
