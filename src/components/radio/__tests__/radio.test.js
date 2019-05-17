/* @flow */
/* eslint-env jest */
import * as React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

import Radio from 'components/radio';
import Text from 'components/text';

describe('Radio', () => {
  const defaultProps = {
    size: 'medium',
    checked: true,
  };
  const create = (props = {}) =>
    renderer.create(<Radio {...defaultProps} {...props} />).toJSON();

  test('should render shallow component ok', () => {
    const element = create();
    expect(element).toMatchSnapshot();
  });

  test('should allow a custom label to be passed in', () => {
    const wrapper = shallow(
      <Radio
        label={
          <Text size="extra-large" color="green500">
            A custom label
          </Text>
        }
      />
    );

    expect(
      wrapper
        .find('Text')
        .childAt(0)
        .text()
    ).toBe('A custom label');
  });
});
