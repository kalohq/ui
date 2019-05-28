/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';

import {makePrimitive} from '../utils';

describe('makePrimitive', () => {
  let wrapper;
  const props = {
    alignItems: 'center',
    display: 'inline-flex',
  };

  beforeEach(() => {
    const NewElement = makePrimitive('FooComponent', 'p', 'ui-foo-component');
    wrapper = renderer.create(<NewElement {...props} />).toJSON();
  });

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
