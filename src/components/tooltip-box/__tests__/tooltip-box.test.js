/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';

import TooltipBox from '../tooltip-box.react';

describe('TooltipBox', () => {
  test('should render properly', () => {
    const wrapper = renderer
      .create(
        <TooltipBox tooltip="Hello! I am a tooltip">Hover me :)</TooltipBox>
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  test('should render properly - with node tooltip', () => {
    const wrapper = renderer
      .create(
        <TooltipBox
          tooltip={
            <ul>
              Hello!<li>I am</li>
              <li>a</li>
              <li>tooltip</li>
            </ul>
          }
          show="right"
        >
          Hover me :)
        </TooltipBox>
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  test('should render properly - show right', () => {
    const wrapper = renderer
      .create(
        <TooltipBox tooltip="Hello! I am a tooltip" show="right">
          Hover me :)
        </TooltipBox>
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  test('should render properly - type info', () => {
    const wrapper = renderer
      .create(
        <TooltipBox tooltip="Hello! I am a tooltip" type="info">
          Hover me :)
        </TooltipBox>
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  test('should render properly - content width', () => {
    const wrapper = renderer
      .create(
        <TooltipBox tooltip="Hello! I am a tooltip" contentWidth={true}>
          Hover me :)
        </TooltipBox>
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
