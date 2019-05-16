/* eslint-env jest */
import * as React from 'react';
import renderer from 'react-test-renderer';

import Alert from 'components/alert';

describe('Alert', () => {
  const defaultProps = {
    type: 'info',
  };
  const create = (props = {}) =>
    renderer
      .create(
        <Alert
          {...defaultProps}
          {...props}
          children={`A ${props.type || defaultProps.type} alert`}
        />
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
