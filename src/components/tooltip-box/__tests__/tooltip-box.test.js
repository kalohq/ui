/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';

import TooltipBox from '../tooltip-box.react';

describe('TooltipBox', () => {
  test('should render properly', () => {
    const wrapper = renderer
      .create(<TooltipBox text="Hello! I am a tooltip">Hover me :)</TooltipBox>)
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  test('should render properly - show right', () => {
    const wrapper = renderer
      .create(
        <TooltipBox text="Hello! I am a tooltip" show="right">
          Hover me :)
        </TooltipBox>
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
