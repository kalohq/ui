/* @flow */
/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';

import ToggleButton from '../toggle-button.react';

describe('ToggleButton', () => {
  test('should render shallow component ok', () => {
    const element = renderer
      .create(<ToggleButton onChange={() => {}} />)
      .toJSON();
    expect(element).toMatchSnapshot();
  });
});
