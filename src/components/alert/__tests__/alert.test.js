/* @flow */
/* eslint-env jest */
import * as React from 'react';
import serializer from 'jest-glamor-react';
import renderer from 'react-test-renderer';
import {ThemeProvider} from 'emotion-theming';

import theme from 'components/theme';
import Alert from 'components/alert';

expect.addSnapshotSerializer(serializer);

describe('Alert', () => {
  const defaultProps = {
    type: 'info',
  };
  const create = (props = {}) =>
    renderer
      .create(
        <ThemeProvider theme={theme}>
          <Alert
            {...defaultProps}
            {...props}
            children={`A ${props.type || defaultProps.type} alert`}
          />
        </ThemeProvider>
      )
      .toJSON();

  test('should render shallow component ok', () => {
    const element = create();
    expect(element).toMatchSnapshot();
  });

  test('should render a warning alert', () => {
    const element = create({
      type: 'warning',
    });
    expect(element).toMatchSnapshot();
  });

  test('should render a confirmation alert with an icon', () => {
    const element = create({
      type: 'confirmation',
      showIcon: true,
    });
    expect(element).toMatchSnapshot();
  });
});
