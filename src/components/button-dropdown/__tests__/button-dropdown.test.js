/* @flow */
/* eslint-env jest */
import * as React from 'react';
import {sheet} from 'emotion';
import serializer from 'jest-glamor-react';
import renderer from 'react-test-renderer';
import {ThemeProvider} from 'emotion-theming';

import theme from 'components/theme';
import ButtonDropdown from 'components/button-dropdown';

jest.mock('react-dom', () => ({
  findDOMNode: () => {},
  unstable_renderSubtreeIntoContainer: () => {},
}));

expect.addSnapshotSerializer(serializer(sheet));

describe('ButtonDropdown', () => {
  const defaultProps = {
    size: 'medium',
    theme: 'tertiary',
    selectItems: [
      {
        title: 'Pending',
        onClick: () => {},
      },
      {
        title: 'This is a link',
        minWidth: 225,
        component: 'a',
        componentProps: {
          href: 'http://google.com',
          target: '_blank',
        },
      },
    ],
  };
  const create = (props = {}) =>
    renderer
      .create(
        <ThemeProvider theme={theme}>
          <ButtonDropdown {...defaultProps} {...props} />
        </ThemeProvider>
      )
      .toJSON();

  test('should render shallow component ok', () => {
    const element = create();
    expect(element).toMatchSnapshot();
  });

  test('should render with a checkbox', () => {
    const element = create({
      checkboxProps: {
        onClick: () => {},
      },
    });

    expect(element).toMatchSnapshot();
  });
});
