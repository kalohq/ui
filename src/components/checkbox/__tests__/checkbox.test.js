/* @flow */
/* eslint-env jest */
import * as React from 'react';
import {sheet} from 'emotion';
import serializer from 'jest-glamor-react';
import renderer from 'react-test-renderer';
import {ThemeProvider} from 'emotion-theming';

import theme from 'components/theme';
import Checkbox from 'components/checkbox';

expect.addSnapshotSerializer(serializer(sheet));

describe('Checkbox', () => {
  const defaultProps = {
    size: 'medium',
    checked: true,
  };
  const create = (props = {}) =>
    renderer
      .create(
        <ThemeProvider theme={theme}>
          <Checkbox {...defaultProps} {...props} />
        </ThemeProvider>
      )
      .toJSON();

  test('should render shallow component ok', () => {
    const element = create();
    expect(element).toMatchSnapshot();
  });

  test('should render a checkbox with label', () => {
    const element = create({
      label: 'A checkbox label',
    });

    expect(element).toMatchSnapshot();
  });

  test('should render a checkbox partially checked', () => {
    const element = create({
      label: 'A checkbox label',
      checked: false,
      indeterminate: true,
    });
    expect(element).toMatchSnapshot();
  });
});
