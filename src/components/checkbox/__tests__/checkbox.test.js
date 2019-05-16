/* eslint-env jest */
import * as React from 'react';
import renderer from 'react-test-renderer';

import Checkbox from 'components/checkbox';

describe('Checkbox', () => {
  const defaultProps = {
    size: 'medium',
    checked: true,
  };
  const create = (props = {}) =>
    renderer.create(<Checkbox {...defaultProps} {...props} />).toJSON();

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
