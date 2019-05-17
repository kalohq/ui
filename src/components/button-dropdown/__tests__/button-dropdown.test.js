/* eslint-env jest */
import * as React from 'react';
import renderer from 'react-test-renderer';

import ButtonDropdown from 'components/button-dropdown';

describe('ButtonDropdown', () => {
  const defaultProps = {
    size: 'medium',
    variant: 'tertiary',
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
    renderer.create(<ButtonDropdown {...defaultProps} {...props} />).toJSON();

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
