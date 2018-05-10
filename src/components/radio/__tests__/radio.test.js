/* @flow */
/* eslint-env jest */
import * as React from 'react';
import * as emotion from 'emotion';
import {createSerializer} from 'jest-emotion';
import renderer from 'react-test-renderer';
import {ThemeProvider} from 'emotion-theming';
import {shallow} from 'enzyme';

import theme from 'components/theme';
import Radio from 'components/radio';
import Text from 'components/text';

expect.addSnapshotSerializer(createSerializer(emotion));

describe('Radio', () => {
  const defaultProps = {
    size: 'medium',
    checked: true,
  };
  const create = (props = {}) =>
    renderer
      .create(
        <ThemeProvider theme={theme}>
          <Radio {...defaultProps} {...props} />
        </ThemeProvider>
      )
      .toJSON();

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
